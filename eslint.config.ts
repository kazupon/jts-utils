import {
  defineConfig,
  // jsdoc,
  jsonc,
  markdown,
  // comments,
  oxlint,
  regexp,
  toml,
  typescript,
  yml
} from '@kazupon/eslint-config'

const config: ReturnType<typeof defineConfig> = defineConfig(
  // TODO(kazupon): enable after fixing jsdoc issues
  // comments({
  //   kazupon: {
  //     ignores: [
  //       './**/test/**',
  //       './**/src/**/*.test.ts',
  //       './**/src/**/*.test-d.ts',
  //     ]
  //   }
  // }),
  regexp(),
  typescript({
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
      project: true
    }
  }),
  // TODO(kazupon): enable after fixing jsdoc issues
  // jsdoc({
  //   typescript: 'syntax'
  // }),
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
    // TODO(kazupon): enable after fixing typescript-eslint issues
    // presets: ['typescript'],
    configFile: './.oxlintrc.json'
  })
)

export default config
