function HeyWatcher(timeFix = 11000) {
  this.timeFix = timeFix;
  this.isWatching = false;
}

HeyWatcher.prototype.apply = function(compiler) {
  compiler.plugin('watch-run', (watching, callback) => {
    this.isWatching = typeof watching === 'object';
    watching.startTime += this.timeFix;
    callback();
  });

  compiler.plugin('done', stats => {
    if (!this.isWatching) return;
    stats.startTime -= this.timeFix;
  });
};

module.exports = HeyWatcher;
