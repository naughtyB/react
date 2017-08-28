/**
 *
 * Created by Administrator on 2017/8/22.
 */
const path=require("path");
module.exports={
    devtool:"source-map",
    entry:{
        bundle:"./src/index.js",
        vendor:["react","react-dom","react-router-dom","react-redux","redux"]
    },
    output:{
        path:path.resolve(__dirname,"./build"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            presets:["es2015","react"],
                            plugins:["transform-object-rest-spread"]
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:["style-loader","css-loader"]
            },
            {
                test: /\.scss/,
                use:["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    "devServer": {
        "contentBase": path.join(__dirname, './'),
        "compress": false,
        "hot": true,
        "port": 9000,
        "historyApiFallback": true
    }
};
