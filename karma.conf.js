module.exports = function KarmaConfig(config) {
  var configuration = {
    frameworks: ['browserify', 'jasmine'],
    files: [
      'test/**/*.spec.js',
    ],
    preprocessors: {
      'app/**/*.js': ['browserify'],
      'test/**/*.spec.js': ['browserify'],
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