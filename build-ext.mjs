import { build } from 'esbuild'

await build({
  entryPoints: ['./src/index.js'],
  outfile: './dist/index-ext.js',
  bundle: true,
  platform: "node",
  target: "node16",
  allowOverwrite: true,
  external: ['shelljs']
});