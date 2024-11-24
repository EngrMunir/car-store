import { Request, Response } from "express";
import { CarServices } from "./car.service";

const createCar = async(req:Request, res:Response)=>{

    try {
        const { car : carData } = req.body;

    // will call service function to send this data
    const result = await CarServices.createCarIntoDB(carData);

    // send response
    res.status(200).json({
        success:true,
        message:'Car is created successfully',
        data:result
    })
    } catch (err) {
        console.log(err);
    }
}

const getAllCar = async(req:Request,res:Response)=>{
    try {
        
        const result = await CarServices.getAllCarFromDB()

        res.status(200).json({
            success:true,
            message:'Car is retrieved successfully',
            data:result
        })
    } catch (err) {
        console.log(err)
    }
}

// get single car
const getSingleCar = async(req:Request,res:Response)=>{
    try {
        const { carId } = req.params;
        const result = await CarServices.getSingleCarFromDB(carId)

        res.status(200).json({
            success:true,
            message:'Single Car is retrieved successfully',
            data:result
        })
    } catch (err) {
        console.log(err)
    }
}

export const CarControllers ={
    createCar,
    getAllCar,
    getSingleCar,
}