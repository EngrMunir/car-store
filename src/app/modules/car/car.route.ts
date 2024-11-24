import express from 'express'
import { CarControllers } from './car.controller'

const router = express.Router()


// will call controller func
router.post('/create-car', CarControllers.createCar)

router.get('/',CarControllers.getAllCar)

router.get('/:carId', CarControllers.getSingleCar)

router.delete('/:carId', CarControllers.deleteSingleCar)

export const CarRoutes = router;