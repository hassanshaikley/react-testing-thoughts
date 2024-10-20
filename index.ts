await Bun.build({
  entrypoints: ["./lib/index.tsx"],
  outdir: "./build",
});
