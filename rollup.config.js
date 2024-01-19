import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH
export default [
  {
    input: 'src/index.js',
    output: {
      name: 'myBundle',
      file: 'dist/bundle.umd.js',
      format: 'umd',
      sourcemap: true
    },
    plugins: [resolve(), commonjs()]
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
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/bundle.iife.js',
        format: 'iife',
        sourcemap: true
      }
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'public/bundle.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [resolve(), commonjs(), production && terser()]
  }
]
