const { City } = require('../models/index');

class CityRepository{


async createCity({ name }){  //{name:"New Delhi"}
   try{
    const city = await City.create({
        name
    });
    return city;
   } catch(error){
    console.log("Something went wrong in the repository layer");
    throw {error};
   }
}
async deleteCity(cityId){
  try {
    await City.destroy({
        where:{
            id: cityId
        }
    });
  } catch (error) {
    console.log("Something went wrong in the repository layer");
    throw {error};
  }
}
async updateCity(CityId,data){
    try {
        const city = await City.update(data,{
            where:{
                id:cityId
            }
        });
        return City;
        
    } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
        
    }

}
async getCity(cityId){
     try {
        const city = await City.findByPk(cityId);
        return City;
     } catch (error) {
        console.log("Something went wrong in the repository layer");
        throw {error};
        
     }
}
}

module.exports = CityRepository;