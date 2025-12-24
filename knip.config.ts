import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  entry: ['playground/bun/index.ts', 'playground/deno/mod.ts', 'playground/node/index.mjs'],
  ignoreDependencies: [
    'lint-staged',
    '@vue/reactivity',
    '@vitest/browser',
    '@kazupon/prettier-config',
    'deno',
    'jsr-exports-lint'
  ]
}

export default config
