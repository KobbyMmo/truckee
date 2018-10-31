import mongoose from 'mongoose';
const OrderDBGateway = mongoose.model('Order');


/**
* Access The underlaying Database and expose relevant Database function
* Primary caller is {OrderUseCase} which accesses this class to get and save into DB
*
* @see OrderUseCase
*
* @author Obed Amoasi <obedamoasi@gmail.com>
* 
*/

class OrderDataAccessLayer {

    /**Get the saved orders from the database
    *
    * @return Promise<Order[]>
    *
    */
    static getOrderHistory() {
        return OrderDBGateway.find({});
    }

    /**Saves a order into the database
    *
    * @param {Order} order - Order Object
    * @return Promise<Order>
    *
    */
    static saveOrder(order) {
        const _order = new OrderDBGateway(order);
        return _order.save();
    }
}


export default OrderDataAccessLayer