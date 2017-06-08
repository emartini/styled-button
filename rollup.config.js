import { resolve } from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');
const isProd = NODE_ENV === JSON.stringify('production');

export default {
  entry: resolve(__dirname, 'src/index.js'),
  dest: resolve(__dirname, 'dist/index.es.js'),
  format: 'es',
  sourceMap: true,
  external: [
    'react',
    'styled-components',
    'prop-types',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': NODE_ENV,
    }),
    isProd && uglify({}, minify),
  ],
};
