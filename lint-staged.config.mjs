const COMMANDS_FOR_JAVASCRIPT = ["pnpm lint", "pnpm format:fix"];

export default {
  // https://github.com/okonet/lint-staged/issues/825#issuecomment-620018284
  "*.{ts,cts,mts}": [() => "pnpm type-check", ...COMMANDS_FOR_JAVASCRIPT],
  "*.{js,cjs,mjs}": COMMANDS_FOR_JAVASCRIPT,
  "!(*.{js,cjs,mjs,ts})": "pnpm format:fix",
};
