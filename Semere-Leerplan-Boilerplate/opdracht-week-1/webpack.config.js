function buildConfig(env) {
  if (env.mode === 'config' || env.mode === 'patternlab') {
    return require('./webpack-' + env.mode + '.js')(env);
  } else {
    console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.")
  }
}
module.exports = buildConfig;