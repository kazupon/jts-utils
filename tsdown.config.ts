import { lintJsrExports } from 'jsr-exports-lint/tsdown'
import { defineConfig } from 'tsdown'

import type { UserConfig } from 'tsdown'

const config: UserConfig = defineConfig({
  entry: [
    'src/array/index.ts',
    'src/string/index.ts',
    'src/object/index.ts',
    'src/event/index.ts',
    'src/event/emitter.ts',
    'src/event/target.ts',
    'src/event/wait.ts',
    'src/observer/index.ts',
    'src/module/index.ts',
    'src/types/index.ts',
    'src/abort/index.ts',
    'src/types/vue.ts'
  ],
  publint: true,
  clean: true,
  dts: true,
  fixedExtension: false,
  hooks: {
    'build:done': lintJsrExports()
  }
})

export default config
