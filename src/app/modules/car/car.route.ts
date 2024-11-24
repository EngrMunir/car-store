import express from 'express'
import { CarControllers } from './car.controller'

const router = express.Router()


// will call controller func
router.post('/create-car', CarControllers.createCar)

export const CarRoutes = router;