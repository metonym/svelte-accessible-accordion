import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import svelteReadme from "svelte-readme";
import pkg from "./package.json";

export default () => {
  if (!process.env.BUNDLE) {
    return svelteReadme({
      style: `
        .code-fence ul { padding: 0; }

        .code-fence li+li {
          margin-top: 0;
        }

        .code-fence button {
          border-radius: 0;
        }
        
        [data-accordion] {
          list-style: none;
        }
        
        [data-accordion-item] button {
          border: 0;
          border-bottom: 1px solid #e0e0e0;
          background: none;
          font: inherit;
          line-height: inherit;
          color: inherit;
          cursor: pointer;
          padding: 0.5rem 1rem;
          width: 100%;
          text-align: left;
        }
        
        [data-accordion-item] [role="region"] {
          padding: 1rem;
        }
        `,
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
      plugins: [svelte(), resolve()],
    };
  });
};
