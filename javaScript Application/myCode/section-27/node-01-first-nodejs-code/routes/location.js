const express = require('express');

const router = express.Router()

const locationStorage = {
  locations: []
}

router.post('/add-location', (req, res, next) => {
  locationStorage.locations({
    id: Math.random(),
    address: req.body.address,
    cords: { lat: req.body.lat, lng: req.body.lon }
  })
  res.json({message: 'Stored Location!'});
})

router.get('/add-location', (req, res, next) = {})


module.exports = router;