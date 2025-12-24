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
  publint: true,
  clean: true,
  dts: true,
  fixedExtension: false
  // TODO(kawaguchi): Enable when the issue is resolved.
  // hooks: {
  //   'build:done': lintJsrExports()
  // }
})

export default config
