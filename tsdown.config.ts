import { defineConfig } from 'tsdown'

const config: ReturnType<typeof defineConfig> = defineConfig({
  entry: [
    'src/index.ts',
    'src/array/index.ts',
    'src/string/index.ts',
    'src/object/index.ts',
    'src/observer/index.ts',
    'src/module/index.ts',
    'src/types/index.ts',
    'src/types/vue.ts'
  ],
  format: 'esm',
  clean: true,
  dts: true
})

export default config
