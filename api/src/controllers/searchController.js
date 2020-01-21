const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')
const researchStandardization = require('../utils/researchStandardization');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsLowercase = researchStandardization(techs)
    const techsArray = parseStringAsArray(techsLowercase);

    const devs = await Dev.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000,
        },
      },
    });

    const filterDev = [];

    devs.forEach(dev => {
      dev.techs.forEach(tech => {
        for (let t = 0; t < techsArray.length; t++) {
          if (researchStandardization(tech) === techsArray[t]) {
            filterDev.push(dev)
          }
        }
      });
    });
    return res.json({filterDev});
  }
}