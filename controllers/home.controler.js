const CarouselModel = require ("../models/carousel");
const { trace } = require("../routers/router");
const CarouselsModel = new CarouselsModel();


class HomeControler {
     async index(req, res) {
        try {
            const carousel = await CarouselModel.findAll()
        res.render('home',{
            
        })
trace

        }}
}

module.exports = HomeControler