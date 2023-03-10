import { Configuration } from "webpack";

const webpackConfig: Configuration = {
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    },
    resolve: {
        extensions:[
            '.ts','.js'
        ]
    }

}

export default webpackConfig;