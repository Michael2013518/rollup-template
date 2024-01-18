import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'myBundle',
      file: 'dist/bundle.umd.js',
      format: 'umd'
    },
    plugins: [resolve(), commonjs()]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.iife.js',
      format: 'iife'
    }
  },
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/bundle.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/bundle.esm.js',
        format: 'es'
      }
    ]
  }
]