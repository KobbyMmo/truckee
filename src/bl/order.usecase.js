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

}

export default OrderUsecase;