const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/, // регулярное выражение
                exclude: path.join(__dirname, "node_modules"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["babel-preset-env", "babel-preset-react"]
                    }
                }
            }
        ]
    }
};
