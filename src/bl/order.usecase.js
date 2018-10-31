/**
 * Contains business logic and for and Order
 * Primary caller is {OrderController} which accesses this class to get Order History and create Order
 *
 * @see OrderController
 *
 * @author Obed Amoasi <obedamoasi@gmail.com>
 * 
 */
import OrderDAL from '../dal/order.dal'

class OrderUsecase {
     /**Get Order History
     *
     * @return {Promise<Array<Orders>} Promise of list of orders
     *
     */
    getOrderHistory() {
        console.log("getOrderHistory");
        return OrderDAL.getOrderHistory();
    }

    /**Calculate price of goods to be loaded
     *
     * @param weight {Number} - weight of package
     * @return {Number} price of order
     *
     */
    calculateCost(weight) {
        if (weight <= 400) {
            return .01 * 400;
        } else {
            return 2 + 0.005 * weight;
        }
    }
}

export default OrderUsecase;