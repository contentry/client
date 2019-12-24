import { Configuration } from '@nuxt/types';

const config: Configuration = {
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/stylelint-module'],
    typescript: {
        typeCheck: true,
        ignoreNotFoundWarnings: true
    },
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s | Contentry',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['ant-design-vue/dist/antd.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/antd-ui'],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
    },
    /*
     ** Style resources
     */
    styleResources: {
        scss: './assets/css/variables.scss'
    }
};

export default config;
