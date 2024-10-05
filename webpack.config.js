const path = require('path');

module.exports = {
  // ... other configurations
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      context: path.resolve(__dirname, 'src/context/'),
      // ... other aliases
    },
  },
  // ... other configurations
};
