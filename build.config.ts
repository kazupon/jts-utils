import { defineBuildConfig } from 'unbuild'

const config: ReturnType<typeof defineBuildConfig> = defineBuildConfig({
  entries: [
    'src/index.ts',
    'src/array/index.ts',
    'src/string/index.ts',
    'src/module/index.ts',
    'src/types/index.ts'
  ],
  declaration: true,
  rollup: {
    emitCJS: true
  }
})

export default config
