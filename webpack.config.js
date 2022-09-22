var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')
    .copyFiles({
        from: './assets/Image',

        // optional target path, relative to the output dir
        to: 'images/[path][name].[ext]',

        // if versioning is enabled, add the file hash too
        //to: 'images/[path][name].[hash:8].[ext]',

        // only copy files matching this pattern
        //pattern: /\.(png|jpg|jpeg)$/
    })
    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('registerJS','./assets/js/register.js')
    .addEntry('stripe','./assets/js/stripe.js')
    .addEntry('app', './assets/js/app.js')
    .addEntry('hello','./assets/js/hello.js')
    .addEntry('uploadedVideo','./assets/js/uploadedvideo.js')
    .addEntry('register-label-button','./assets/js/labelModif.js')
    .addEntry('algolia-autocompleteJS','./assets/js/algolia-autocomplete.js')
    .addEntry('navBar','./assets/js/navBar.js')
    .addEntry('video','./assets/js/video.js')
    .addEntry('example1','./assets/js/example1.js')
    .addEntry('example2','./assets/js/example2.js')
    .addEntry('example3','./assets/js/example3.js')
    .addEntry('example4','./assets/js/example4.js')
    .addEntry('example5','./assets/js/example5.js')
    .addEntry('index','./assets/js/index.js')
    .addEntry('stripe2','./assets/js/stripe2.js')
    .addStyleEntry('register','./assets/css/register.css')
    .addStyleEntry('login','./assets/css/login.css')
    .addStyleEntry('acceuil','./assets/css/acceuil.css')
    .addStyleEntry('algolia-autocomplete','./assets/css/algolia-autocomplete.css')
    .addStyleEntry('base','./assets/css/base.css')
    .addStyleEntry('example1CSS','./assets/css/example1.css')
    .addStyleEntry('example2CSS','./assets/css/example2.css')
    .addStyleEntry('example3CSS','./assets/css/example3.css')
    .addStyleEntry('example4CSS','./assets/css/example4.css')
    .addStyleEntry('example5CSS','./assets/css/example5.css')
    //    .addStyleEntry('style','./assets/css/styles.css')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })


// enables Sass/SCSS support
//.enableSassLoader()

// uncomment if you use TypeScript
//.enableTypeScriptLoader()

// uncomment to get integrity="..." attributes on your script & link tags
// requires WebpackEncoreBundle 1.4 or higher
//.enableIntegrityHashes(Encore.isProduction())

// uncomment if you're having problems with a jQuery plugin
//.autoProvidejQuery()

// uncomment if you use API Platform Admin (composer req api-admin)
//.enableReactPreset()
//.addEntry('admin', './assets/js/admin.js')
;

module.exports = Encore.getWebpackConfig();