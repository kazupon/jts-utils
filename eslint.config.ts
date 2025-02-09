import {
  comments,
  defineConfig,
  javascript,
  jsdoc,
  jsonc,
  prettier,
  promise,
  regexp,
  toml,
  typescript,
  unicorn,
  vitest,
  yml
} from '@kazupon/eslint-config'

const config: ReturnType<typeof defineConfig> = defineConfig(
  javascript(),
  comments(),
  promise(),
  regexp(),
  unicorn(),
  typescript(),
  jsdoc({
    typescript: 'syntax'
  }),
  jsonc({
    json: true,
    json5: true,
    jsonc: true,
    prettier: true
  }),
  yml({
    prettier: true
  }),
  toml(),
  vitest({
    typeTesting: true
  }),
  prettier(),
  {
    ignores: ['**/tsconfig.json', '**/dist/**', 'playground/**/*.ts']
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'unicorn/expiring-todo-comments': 'off'
    }
  }
)

export default config
