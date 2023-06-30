const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {

    mode: 'development', 
    output: {
        //se elimina automaticamente el  directorio dist antes de volver a ejecutarlo
        clean: true     
    },
    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader'
            }
            
            

            
        ]
    },
    optimization: {},

    plugins: [
        new HtmlWebPack({
            // se añade titulo al index.html de dist
            title: 'Mi Webpack App',
            // se cambia el nombre de index.html por el que queramos
            filename: 'index.html',
            // archivo al que queremos que se base el index, de esta manera lo que añadimos al index.html original, se añadirá también en el dist
            template: './src/index.html'
        }),
        new MiniCssExtract({
            filename: '[main].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]

}