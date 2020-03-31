module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    /*pluginOptions: {
        foo: {
             templateParameters: {
                   BASE_URL: config.dev.assetsPublicPath + config.dev.assetsSubDirectory
             }
        }
    }*/



}
