module.exports = function KarmaConfig(config) {
  var configuration = {
    frameworks: ['browserify', 'jasmine'],
    files: [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
      'src/**/*.spec.js',
    ],
    preprocessors: {
      'src/**/*.js': ['browserify'],
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,
    browserify: {
      debug: true,
      paths: ['./node_modules', './src'],
      transform: ['partialify'],
      extensions: ['.js', '.html'],
    },
  };

  config.set(configuration);
};