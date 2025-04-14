// babel.config.js
module.exports = {
    presets: [
      'next/babel', 
      '@babel/preset-env', 
      '@babel/preset-typescript',
      ['@babel/preset-react', { runtime: 'automatic' }],
    ],
  };
  