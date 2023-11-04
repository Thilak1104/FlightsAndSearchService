const { CityRepository } = require('../repository/index');

class CityService{
    constructor(){
        this.CityRepository = new CityRepository();
    }

    async createCity(){
        try {
            const city = await this.CityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }

    }

    async deleteCity(){
        try {
            const response = await this.CityRepository.deleteCity(cityId);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }


    }

    async updateCity(){
        try {
            const city = await this.CityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }


    }

    async getCity(){
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }


    }

}

module.exports = CityService;