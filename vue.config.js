const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {

    configureWebpack: config => {

        config.plugins.push(
            new ForkTsCheckerWebpackPlugin({
                typescript: {
                  extensions: {
                    vue: true
                  }
                }
            })            
        )

    },

    chainWebpack: config => { 

        
        // typescript
        config.resolve.extensions.add('.ts')
        
        config.module.rule('babel-ts')
        .include.add(/src/).end()
        .include.add(/node_modules\/hello-world-subpackage/).end()
        //.exclude.add(/node_modules/).end()
        .test(/\.ts$/)
        .use('babel-loader')
        .loader('babel-loader')
        
        config.module.rule('eslint-ts')
        .include.add(/src/).end()
        .include.add(/node_modules\/hello-world-subpackage/).end()
        .enforce('pre')
        .test(/\.ts$/)
        .use('eslint-loader')
        .loader('eslint-loader')
        .options({
            emitError: true,  
            emitWarning: true,  
            failOnError: true  
        })
                
        config.module.rule('ts')
        .include.add(/src/).end()
        .include.add(/node_modules\/hello-world-subpackage/).end()
        .test(/\.ts$/)
        .use('ts-loader')
        .loader('ts-loader')
        .options({ 
            transpileOnly: true 
        })
    
    }
}