import {
  defineConfig,
  jsdoc,
  jsonc,
  markdown,
  comments,
  oxlint,
  regexp,
  toml,
  typescript,
  yml
} from '@kazupon/eslint-config'

const config: ReturnType<typeof defineConfig> = defineConfig(
  comments({ kazupon: false }),
  regexp(),
  typescript({
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
      project: true
    }
  }),
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
  markdown({
    preferences: true
  }),
  oxlint({
    presets: ['typescript'],
    configFile: './.oxlintrc.json'
  }),
  {
    // ignore for specific files
    ignores: ['src/url/utils.ts']
  }
)

export default config
