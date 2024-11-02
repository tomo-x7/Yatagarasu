//@ts-check
import * as esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV === "development";
fs.rmSync(path.join(__dirname, "public", "units"), { recursive: true });
await esbuild.build({
	entryPoints: ["units/*.tsx"],
	bundle: true,
	outdir: "public/units",
	format: "esm",
	jsxFactory: "React.createElement",
	sourcemap: isDev,
	minify: !isDev,
});