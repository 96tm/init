import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';

function generatePlugins(isDev: boolean): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new Dotenv({
      systemvars: !isDev,
    })
  ];
}

function generateDevServerConfig(isDev: boolean, port: number): DevServerConfiguration | undefined {
  if (isDev) {
    return {
      port,
      open: true,
      hot: true,
    };
  }
}

function generateLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
      },
    },
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|svg|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };
  return [tsLoader, babelLoader, cssLoader, fileLoader];
}

function generateDevtoolConfig(isDev: boolean): string | undefined {
  if (isDev) {
    return 'inline-source-map';
  }
}

function generateResolverConfig(): webpack.ResolveOptions {
  return { extensions: ['.tsx', '.ts', '.js'] };
}

function generateOutputConfig() {
  return {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  }
}

export default function generateConfig(env: WebpackConfigFunctionEnv, argv: Record<string, string>): webpack.Configuration {
  const mode = env.mode || 'development';
  const port = env.port || 3000;
  const isDev = mode === 'development';

  const config: webpack.Configuration = {
    mode,
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: generateOutputConfig(),
    plugins: generatePlugins(isDev),
    module: {
      rules: generateLoaders(isDev),
    },
    resolve: generateResolverConfig(),
    devtool: generateDevtoolConfig(isDev),
    devServer: generateDevServerConfig(isDev, port),
  };
  return config;
}

interface WebpackConfigFunctionEnv {
  mode?: 'development' | 'production'
  port?: number

}