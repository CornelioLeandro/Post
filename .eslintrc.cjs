module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'eqeqeq': 'off',
    'indent': ['error', 2 ],
    'curly': 'error' ,
  }
};
