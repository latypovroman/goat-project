import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { DefinePlugin } from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
    const { paths, isDev, analyze } = options

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: (analyze && isDev) ? 'server' : 'disabled',
            openAnalyzer: false
        })]

    if (isDev) plugins.push(new webpack.HotModuleReplacementPlugin())

    return plugins
}
