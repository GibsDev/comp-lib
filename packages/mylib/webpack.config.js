const path = require('path');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: dist,
        filename: 'index.js',
        library: 'mylib',
        libraryTarget: 'umd',
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
        },
    },
};