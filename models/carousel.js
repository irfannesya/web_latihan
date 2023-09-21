const carousels = require("../database/carousel.json");
class CarouselModels{
    async findAll(){
        return carousels
    }
}

module.exports = CarouselsModel