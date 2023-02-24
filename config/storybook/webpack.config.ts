import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoader'

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    const modules = config.resolve?.modules ?? []
    const extensions = config.resolve?.extensions ?? []
    const rules = config.module?.rules ?? []

    modules.push(paths.src)
    extensions.push('.ts', '.tsx')

    rules
        .filter((rule: webpack.RuleSetRule) => /svg/.test(rule.test as string))
        .forEach((rule: webpack.RuleSetRule) => {
            rule.exclude = /\.svg$/i
        })

    rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack']
    })

    rules.push(buildCssLoader(true))

    return config
}
