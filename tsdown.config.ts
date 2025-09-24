import { defineConfig } from 'tsdown'

import type { UserConfig } from 'tsdown'

const config: UserConfig = defineConfig({
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
