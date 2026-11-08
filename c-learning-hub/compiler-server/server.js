const express = require("express");
const { execFile } = require("node:child_process");
const { mkdtemp, writeFile, rm } = require("node:fs/promises");
const { tmpdir } = require("node:os");
const path = require("node:path");
const crypto = require("node:crypto");

const app = express();
app.use(express.json({ limit: "64kb" }));
app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/compile", async (req, res) => {
  const code = typeof req.body?.code === "string" ? req.body.code : "";
  const input = typeof req.body?.input === "string" ? req.body.input : "";
  if (!code.trim()) return res.status(400).json({ error: "C source code is required." });
  const dir = await mkdtemp(path.join(tmpdir(), "c-hub-"));
  const source = path.join(dir, "main.c");
  const binary = path.join(dir, `program-${crypto.randomUUID()}`);
  try {
    await writeFile(source, code, "utf8");
    execFile("gcc", ["-std=c17", "-O2", "-Wall", "-Wextra", source, "-o", binary], { timeout: 10000 }, (compileError, _stdout, stderr) => {
      if (compileError) return finish(res, 422, { error: stderr || compileError.message });
      execFile(binary, [], { input, timeout: 3000, maxBuffer: 1024 * 1024 }, (runError, stdout, runStderr) => {
        if (runError) return finish(res, 422, { error: runStderr || runError.message, output: stdout });
        finish(res, 200, { output: stdout });
      });
    });
  } catch (error) {
    finish(res, 500, { error: "Unable to prepare compilation." });
  } finally {
    setTimeout(() => rm(dir, { recursive: true, force: true }).catch(() => {}), 12000);
  }
});
function finish(res, status, body) { if (!res.headersSent) res.status(status).json(body); }
app.listen(process.env.PORT || 3000, "0.0.0.0");
