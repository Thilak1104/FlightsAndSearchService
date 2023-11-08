const { response } = require('express');
const { CityService } = require('../services/index');
/**
 * POST
 * data -> req.body 
 */

const cityService = new CityService();

const create = async (req,res)=>{
  
    try {
      
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:'Successfully created a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a City',
            err:error
        })
    }
}

//DELETE. -> /city/:id

const destroy = async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully deleted a city',
            err: {}
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the City',
            err:error
        });
    }
}

//GET -> /city/:id

const get = async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
             data:response,
            success:true,
            message:'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to get the City',
            err:error
        });
    }
}
 

// Patch -> /city/:id -> req.body
const update = async (req,res)=>{
    try { 
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success:true,
            message:'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the City',
            err:error
        });
    }
}

const getAll = async (req,res)=>{
    try {
        const cities = await cityService.getAllCities();
        return res.status(200).json({
            data:cities,
            success:true,
            message:'Successfully fetched all cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch the Cities',
            err:error
        });
    }
}

module.exports ={
    create,
    destroy,
    get,
    update,
    getAll
}