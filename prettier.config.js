module.exports = {
  tabWidth: 2,
  printWidth: 100,
  proseWrap: 'preserve',
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  singleQuote: true,
  overrides: [
    {
      files: '{*.js?(on),*.y?(a)ml,.*.js?(on),.*.y?(a)ml,*.md,.prettierrc,.stylelintrc,.babelrc}',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: '{**/.vscode/*.json,**/tsconfig.json,**/tsconfig.*.json}',
      options: {
        parser: 'json',
        quoteProps: 'preserve',
        singleQuote: false,
      },
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        printWidth: 100,
        proseWrap: 'never',
        semi: false,
        trailingComma: 'none',
      },
    },
    {
      files: '*.mdx',
      options: {
        printWidth: 100,
        proseWrap: 'never',
        semi: false,
        trailingComma: 'none',
      },
    },
    {
      files: '*.{sass,scss}',
      options: {
        parser: 'scss',
      },
    },
  ],
};
