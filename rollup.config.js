import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import svgr from '@svgr/rollup';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
            },
            {
                file: pkg.module,
                format: 'es',
            },
        ],
        plugins: [
            resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] }),
            commonjs({ exclude: 'src/**' }),
            svgr({ svgo: false, titleProp: true }),
            json(),
            postcss(),
            typescript({ tsconfig: 'tsconfig.types.json', useTsconfigDeclarationDir: true }),
        ],
        external: Object.keys(pkg.peerDependencies),
    },
];
