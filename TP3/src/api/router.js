const config = require('../config/env.config');

const UtilsRoutes = require('./components/UtilsRoutes');

const router = (app) => {
    app.use(config.root_api, UtilsRoutes);
    app.use((req, res) => {
      res.status(404).json({ error: 'Not Found'})  
    });
};

module.exports = router;