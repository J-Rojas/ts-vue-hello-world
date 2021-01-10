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
        .test(/\.ts$/)
        .use('babel-loader')
        .loader('babel-loader')
        
        config.module.rule('eslint')
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
        .test(/\.ts$/)
        .use('ts-loader')
        .loader('ts-loader')
        .options({ 
            transpileOnly: true,
            projectReferences: true
        })
    
    }
}