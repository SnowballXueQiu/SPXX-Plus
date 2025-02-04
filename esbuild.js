const esbuild = require('esbuild');
const tampermonkeyMetadata = require('./src/tampermonkeyMetadata');

esbuild.build({
    entryPoints: ['./src/main.ts'],
    bundle: true,
    outfile: './dist/bundle.js',
    platform: 'browser',
    format: 'iife',
    target: ['es6'],
    banner: {
        js: tampermonkeyMetadata,
    },
    sourcemap: false,
    minify: true,
}).catch(() => process.exit(1));