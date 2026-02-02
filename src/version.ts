import { execSync } from "node:child_process";
import { createRequire } from "node:module";

declare const __OPENCLAW_VERSION__: string | undefined;

function readVersionFromPackageJson(): string | null {
  try {
    const require = createRequire(import.meta.url);
    const pkg = require("../package.json") as { version?: string };
    return pkg.version ?? null;
  } catch {
    return null;
  }
}

function getGitShortHash(): string | null {
  try {
    return execSync("git rev-parse --short HEAD", {
      cwd: new URL("..", import.meta.url).pathname,
      timeout: 2000,
    })
      .toString()
      .trim();
  } catch {
    return null;
  }
}

// Single source of truth for the current OpenClaw version.
// - Embedded/bundled builds: injected define or env var.
// - Dev/npm builds: package.json + git short hash when running from source.
export const VERSION = (() => {
  const base =
    (typeof __OPENCLAW_VERSION__ === "string" && __OPENCLAW_VERSION__) ||
    process.env.OPENCLAW_BUNDLED_VERSION ||
    readVersionFromPackageJson() ||
    "0.0.0";
  const hash = getGitShortHash();
  return hash ? `${base}+${hash}` : base;
})();
