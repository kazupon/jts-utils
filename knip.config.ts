import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: [
    'src/index.ts',
    'src/module/index.ts',
    'src/array/index.ts',
    'src/observer/index.ts',
    'src/string/index.ts',
    'src/types/index.ts',
    'src/object/index.ts',
    'playground/bun/index.ts',
    'playground/deno/mod.ts',
    'playground/node/index.mjs'
  ],
  ignoreDependencies: ['lint-staged', '@vue/reactivity']
}

export default config
