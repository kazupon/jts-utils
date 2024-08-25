import {
  defineConfig,
  javascript,
  typescript,
  comments,
  promise,
  unicorn,
  regexp,
  jsonc,
  yml,
  toml,
  prettier,
  jsdoc,
  vitest
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
  }
)

export default config
