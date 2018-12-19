/* eslint-env mocha */
'use strict'

process.env.DEBUG = '*,-mplex,-mplex:*,-mss,-mss:*'

require('./pubsub')
require('./circuit')
require('./repo')
require('./exchange-files')
require('./ipns')
require('./kad-dht')
require('./pin')
require('./files')
