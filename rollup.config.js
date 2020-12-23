import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import svelteReadme from "svelte-readme";
import pkg from "./package.json";

const DEV = process.env.ROLLUP_WATCH;
const BUNDLE = process.env.BUNDLE === "true";

export default () => {
  if (!BUNDLE) {
    return svelteReadme({
      minify: !DEV,
      style: `.code-fence ul { padding: 0; }`,
    });
  }

  return ["es", "umd"].map((format) => {
    const UMD = format === "umd";

    return {
      input: pkg.svelte,
      output: {
        format,
        file: UMD ? pkg.main : pkg.module,
        name: UMD ? pkg.name : undefined,
        exports: "named",
      },
      plugins: [svelte({ emitCss: false }), resolve()],
    };
  });
};
