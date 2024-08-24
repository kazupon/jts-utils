import { defineBuildConfig } from 'unbuild'

const config: ReturnType<typeof defineBuildConfig> = defineBuildConfig({
  entries: ['src/index.ts'],
  declaration: true,
  rollup: {
    emitCJS: true
  }
})

export default config
