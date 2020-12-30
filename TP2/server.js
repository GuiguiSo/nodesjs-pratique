const config = require('./src/config/env.config');
const router = require('./src/api/router')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { route } = require('./src/api/components/UtilsRoutes');

//header

console.log(config);
//Middleware

app.use(morgan(config.format_logs));
app.use(cors());


//route

router(app);


// const node_env = 'dev'
//  const port = 3000;


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/ping', (req, res) => {
//     var pong = 'pong';
//     res.send({pong});
//   })

  
app.listen(config.port, () => {
  console.log(` listening on port ${config.port} in ${config.node_env} mode`)
})
