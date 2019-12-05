import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T", crossorigin: "anonymous" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Material+Icons" },

        ],
        script: [
            { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo", crossorigin: "anonymous" },
            { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js", integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1", crossorigin: "anonymous" },
            { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js", integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM", crossorigin: "anonymous" },
            { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBZj09EooVd3EVzULdsI2-E1VS2R2OXKz4&libraries=places' }
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['@assets/styles/index.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/vue_qrcode_reader', mode: 'client' },
      
        // { src: '~/plugins/fb-chat.js', ssr: false },
        {src:'~/plugins/components.js'}
         
    ],
    /*
     ** Nuxt.js dev-modules
     */
    devModules: [
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        'vue-scrollto/nuxt',
    ],
    
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    env: {
        fbapikey: "AIzaSyAr66KOA3tpzPjVAUDd8hlwjF8wYgzI26Q",
    }
}