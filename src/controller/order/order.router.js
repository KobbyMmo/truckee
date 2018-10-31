
import express from 'express';
import OrderController from './order.controller';
import { body }  from'express-validator/check';

/**Configure order routes*/
const router = express.Router();
const ctrl = new OrderController();


router.get('/', ctrl.getOrderHistory.bind(ctrl));
router.post('/',[
    body().isArray(),
    body('*.id', 'Error with Id field').exists().isString(),
    body('*.weight', 'error with weight field').exists().isDecimal()
  ], ctrl.createOrder.bind(ctrl));

export default router;