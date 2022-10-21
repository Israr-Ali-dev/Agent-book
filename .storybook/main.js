const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    const nextConfig = require('../next.config.js');

    config.resolve.alias = {
      ...config.resolve.alias,
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@layouts': path.resolve(__dirname, '../src/layouts'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@utils': path.resolve(__dirname, '../src/utils'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    };

    const fileLoaderRule = config.module.rules.find((rule) =>
      rule?.test?.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push(
      {
        test: /\,css&/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              },
            },
          },
        ],
      }
    );

    // Merge your next webpack config with this base
    return { ...nextConfig.webpack, ...config };
  },

  // webpackFinal: async (baseConfig) => {
  // 	const nextConfig = require('../next.config.js');
  // 	// Resolve aliases used in project
  // 	baseConfig.resolve = {
  // 		alias: {
  // 			...baseConfig.resolve.alias,
  // 			'@/components': path.resolve(__dirname, '../src/components'),
  // 			'@/pages': path.resolve(__dirname, '../src/pages'),
  // 			'@/styles': path.resolve(__dirname, '../src/styles'),
  // 			'@/hooks': path.resolve(__dirname, '../src/hooks'),
  // 			'@/utils': path.resolve(__dirname, '../src/utils'),
  // 		},
  // 	};
  // 	// Needed for SVG importing using svgr
  // 	// const indexOfRuleToRemove = baseConfig.module.rules.findIndex((rule) =>
  // 	// 	rule.test.toString().includes('svg')
  // 	// );
  // 	// baseConfig.module.rules.splice(indexOfRuleToRemove, 1, {
  // 	// 	test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
  // 	// 	loader: require.resolve('file-loader'),
  // 	// 	options: {
  // 	// 		name: 'static/media/[name].[hash:8].[ext]',
  // 	// 		esModule: false,
  // 	// 	},
  // 	// });
  // 	// baseConfig.module.rules.push({
  // 	// 	test: /\.svg$/,
  // 	// 	use: [
  // 	// 		{
  // 	// 			loader: '@svgr/webpack',
  // 	// 			options: {
  // 	// 				svgo: false,
  // 	// 			},
  // 	// 		},
  // 	// 	],
  // 	// });
  // 	// Merge your next webpack config with this base
  // 	return { ...baseConfig };
  // },
};
