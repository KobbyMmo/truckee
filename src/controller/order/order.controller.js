import OrderUseCase from '../../bl/order.usecase';
import { validationResult } from 'express-validator/check';

/**
 * Handles incoming request, stripes down request, calls business logic, respond to request
 *
 * @author Obed Amoasi <obedamoasi@gmail.com>
 * 
 */
class OrderController {

    constructor() {
        this.orderUseCase = new OrderUseCase();
    }

    /**Sends Order History controller response back to request
     *
     * @param req - Request object, contains, 
     *
     */
    async getOrderHistory(req, res, next) {
        try {
            const orders = await this.orderUseCase.getOrderHistory();
            res.send(orders);
        } catch (err) {
            next(err);
        }
    }

    /**Creates Order 
     *
     * @param req - Request object, contains, 
     *
     */
    async createOrder(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        const packages = req.body;
        try {
            const createdOrder = await this.orderUseCase.createOrder(packages);
            res.send(createdOrder)
        } catch (err) {
            next(err);
        }
    }

}

export default OrderController;
