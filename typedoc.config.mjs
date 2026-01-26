// @ts-check

export default {
  /**
   * typedoc options
   * ref: https://typedoc.org/documents/Options.html
   */
  entryPoints: [
    './src/abort/index.ts',
    './src/result/index.ts',
    './src/array/index.ts',
    './src/message/index.ts',
    './src/message/port.ts',
    './src/event/index.ts',
    './src/event/emitter.ts',
    './src/event/target.ts',
    './src/event/wait.ts',
    './src/string/index.ts',
    './src/observer/index.ts',
    './src/object/index.ts',
    './src/module/index.ts',
    './src/types/index.ts',
    './src/types/vue.ts'
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
