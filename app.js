var chalk = require('chalk'),
  path = require('path'),
  fs = require('fs'),
  _ = require('lodash'),
  Monitor = require('./lib/monitor'),
  pmx = require('pmx');
pmx.initModule({
}, function(err, conf) {
  console.log('conf', conf);
  var monitor = Monitor(conf);
  console.log(chalk.bold('CT PM2-MONIT'));
  monitor.run();
});

