import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    env: {
      node: true,
      // The Follow config only works with eslint-plugin-vue v8.0.0+
      'vue/setup-compiler-macros': true,
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
]
