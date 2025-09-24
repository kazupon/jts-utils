import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: ['playground/bun/index.ts', 'playground/deno/mod.ts', 'playground/node/index.mjs'],
  ignoreDependencies: ['lint-staged', '@vue/reactivity']
}

export default config
