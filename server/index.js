const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const mongoose = require('mongoose')
const app = express()

const bodyParser = require('body-parser')
const autoIncrement = require('mongoose-auto-increment')

const multiChose = require('./quiz/multi_chose')
const quizBundle = require('./quiz/quiz_bundle')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
  extended: true
}) )

/* Route */
app.use('/multiChose', multiChose)
app.use('/quizBundle', quizBundle)

/* DB */
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
const connect = mongoose.createConnection('mongodb://122.36.104.135/everyquiz', { useNewUrlParser: true });
autoIncrement.initialize(connect);

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  //const { host, port } = nuxt.options.server
  const host = '0.0.0.0'
  const port = '3000'

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)
  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
