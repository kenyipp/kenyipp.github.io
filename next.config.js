/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

const nextConfig = {
	output: "export",
	webpack(config) {
		config.plugins.push(
			new LodashModuleReplacementPlugin(),
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /(en)/),
		);
		return config;
	},
	reactStrictMode: true,
	swcMinify: true,
	distDir: "build",
};

module.exports = nextConfig;
