import { includeIgnoreFile } from "@eslint/compat";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";

export default [
  // https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files
  includeIgnoreFile(path.resolve(import.meta.dirname, ".gitignore")),
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  // https://typescript-eslint.io/getting-started/typed-linting
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  // https://typescript-eslint.io/users/configs/#disable-type-checked
  {
    files: ["**/*.{js,mjs,cjs}"],
    ...tseslint.configs.disableTypeChecked,
  },
  eslintConfigPrettier,
];
