// @ts-check

export default {
  /**
   * typedoc options
   * ref: https://typedoc.org/documents/Options.html
   */
  entryPoints: [
    './src/index.ts'
    // './src/array/index.ts',
    // './src/string/index.ts',
    // './src/observer/index.ts',
    // './src/object/index.ts',
    // './src/module/index.ts',
    // './src/types/index.ts',
    // './src/types/vue.ts'
  ],
  out: 'docs',
  plugin: ['typedoc-plugin-markdown'],
  readme: 'none',
  groupOrder: ['Variables', 'Functions', 'Class'],
  /**
   * typedoc-plugin-markdown options
   * ref: https://typedoc-plugin-markdown.org/docs/options
   */
  entryFileName: 'index',
  hidePageTitle: false,
  useCodeBlocks: true,
  disableSources: true,
  indexFormat: 'table',
  parametersFormat: 'table',
  interfacePropertiesFormat: 'table',
  classPropertiesFormat: 'table',
  propertyMembersFormat: 'table',
  typeAliasPropertiesFormat: 'table',
  enumMembersFormat: 'table'
}
