
export default {
    /*
    ** Nuxt rendering mode
    ** See https://nuxtjs.org/api/configuration-mode
    */
    mode: 'universal',
    /*
    ** Nuxt target
    ** See https://nuxtjs.org/api/configuration-target
    */
    target: 'server',

    server: {
        port: 3000,
        host: "0.0.0.0"
    },
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css'
    ],
    /*
    ** Plugins to load before mounting the App
    ** https://nuxtjs.org/guide/plugins
    */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/axios'
    ],
    /*
    ** Auto import components
    ** See https://nuxtjs.org/api/configuration-components
    */
    components: true,
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        // http module
        // https://http.nuxtjs.org/guide/#installation
        '@nuxtjs/proxy'
    ],


    // axios: {
    //     retry: {retries: 3},
    //     proxy: true, // 表示开启代理
    //     prefix: '/api', // 表示给请求url加个前缀 /api
    //     credentials: true // 表示跨域请求时是否需要使用凭证
    // },

    proxy: [
        ["/api", {target: "https://h5api.zhefengle.cn", pathRewrite: {'^/api/': ''} }]
    ],

    // proxy: {
    //     '/api': {
    //         target: 'https://h5api.zhefengle.cn', // 目标接口域名
    //         pathRewrite: {
    //             '^/api': '/', // 把 /api 替换成 /
    //             changeOrigin: true // 表示是否跨域
    //         }
    //     }
    // },


    /*
    ** Build configuration
    ** See https://nuxtjs.org/api/configuration-build/
    */
    build: {
        transpile: [/^element-ui/]
    }

    , env: {
        users: [
            { id: 1, name: 'Kobe Bryant', number: 24 },
            { id: 2, name: 'Michael Jordan', number: 23 },
            { id: 3, name: 'Stephen Curry', number: 30 },
            { id: 4, name: 'Lebron James', number: 23 },
            { id: 5, name: 'Kevin Durant', number: 35 },
            { id: 6, name: 'Kyrie Irving', number: 2 }
        ]
    }
    , generate: {
        routes: [
            '/home/1',
            '/home/2',
            '/home/3',
            '/home/4',
            '/home/5',
            '/home/6'
        ]
    }
}
