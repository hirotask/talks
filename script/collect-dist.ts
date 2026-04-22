import { readdir, rm, mkdir, cp, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

type Project = {
  name: string;
  distDir: string;
};

const root = process.cwd();
const outDir = path.join(root, "output");

async function exists(target: string): Promise<boolean> {
  try {
    await stat(target);
    return true;
  } catch {
    return false;
  }
}

async function findProjects(): Promise<Project[]> {
  const entries = await readdir(root, { withFileTypes: true });
  const projects: Project[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith(".")) continue;
    if (entry.name === "node_modules") continue;
    if (entry.name === "script") continue;

    const distDir = path.join(root, entry.name, "src", "dist");
    if (!(await exists(distDir))) continue;

    projects.push({
      name: entry.name,
      distDir,
    });
  }

  projects.sort((a, b) => a.name.localeCompare(b.name));
  return projects;
}

function createIndexHtml(projects: Project[]): string {
  const items = projects
    .map(
      (project) =>
        `      <li><a href="./${project.name}/">${project.name}</a></li>`,
    )
    .join("\n");

  return `<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Slides</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 960px;
        margin: 40px auto;
        padding: 0 16px;
        line-height: 1.6;
      }
    </style>
  </head>
  <body>
    <h1>Slides</h1>
    <ul>
${items}
    </ul>
  </body>
</html>
`;
}

async function main(): Promise<void> {
  const projects = await findProjects();

  if (projects.length === 0) {
    throw new Error("No built projects found");
  }

  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  for (const project of projects) {
    const destination = path.join(outDir, project.name);
    console.log(`Copy ${project.distDir} -> ${destination}`);
    await cp(project.distDir, destination, { recursive: true });
  }

  await writeFile(
    path.join(outDir, "index.html"),
    createIndexHtml(projects),
    "utf8",
  );
}

await main();
