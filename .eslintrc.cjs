// .eslintrc.cjs

module.exports = {
    env: {
      browser: true,
      es2021: true,
      jest: true, // If you're using Jest for testing
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb', // If you prefer Airbnb's style guide
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/prop-types': 'error', // Enforce PropTypes usage
      'react/no-unescaped-entities': 'error', // Enforce escaped entities
      // Add or adjust other rules as needed
    },
  };
  