const { Router } = require('express');

const router = Router();

// Import controllers
const devController = require('../controllers/devController')
const searchController = require('../controllers/searchController')

router.get('/devs', devController.index);
router.post('/devs', devController.store);

router.get('/search', searchController.index);

// Others
router.get('/', (req, res) => {
  res.json({
    message: "Omnistack 10.0"
  })
})

module.exports = router;
