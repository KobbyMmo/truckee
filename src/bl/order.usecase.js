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

    /**compares weight of packages 
    *
    * @param a - first package to be compared
    * @param b - second package to be compared
    * @return difference in weight between positive if bis >a
    *
    */
    compareWeight(a, b) {
        return b.weight - a.weight;
    }


    /**
     *Loads truck with maximum weight of package possible
     * @param packages - packages to be loaded
     * @param maximumValue - maximum value a truck can pick
     * @return {Array<packages>} selected packages
     *
     */
    getMaximumFitForTruck(packages, maximumValue) {
        let currentValue = 0;
        let selectedPackages = [];
        if (packages.length < 1 || maximumValue == 0) {
            return selectedPackages;
        } else {
            let sortedPackages = packages.sort(this.compareWeight);
            selectedPackages = sortedPackages.filter(singlePackage => {
                if (currentValue + singlePackage.weight <= maximumValue) {
                    currentValue += singlePackage.weight;
                    return true;
                }
            });
        }
        return selectedPackages;
    }

    /**
     *Generates a random hex string, used to tag the dummy vehicles
     * @param packages - current packages
     * @param selectedPackages - selected packages to be loaded on truck
     * @return {String} returns a Hex string of legnth 12
     *
     */
    randomId() {
        return Math.floor((1 + Math.random()) * 0x100000000000000000)
            .toString(16)
            .substring(1);
    }

    /**
    *Gets the remaining packages to be loaded
    * @param packages - current packages
    * @param selectedPackages - selected packages to be loaded on truck
    * @return {Array<packages>} remaining packages left to be loaded
    *
    */
    remainingPackages(packages, selectedPackages) {
        return packages.filter(o1 => selectedPackages.filter(o2 => o2.id === o1.id).length === 0);
    }

    /**Load packages unto truck, use as few trucks as possible
     *
     * @param packages Packages to be loaded
     * @return {Array<Trucks} Array of trucks with its loads
     *
     */
    loadPackages(packages) {
        const trucks = []
        let _packages = packages;
        while (_packages.length) {
            const load = this.getMaximumFitForTruck(_packages, 1000);
            if (load) {
                trucks.push({ truckId: this.randomId(), load: load })
            }
            _packages = this.remainingPackages(_packages, load)
        }
        return trucks;
    }

    /**Create and Order 
    *
    * @param packages - lsit of packages to create order for
    * @return {Promise<Order>} Promise of created Order
    *
    */
    createOrder(packages) {
        const totalCost = packages.reduce((accumulator, singlePackage) => {
            return accumulator + this.calculateCost(singlePackage.weight);
        }, 0);
        const trucks = this.loadPackages(packages);
        const order = {};
        order.price = totalCost;
        order.trucks = trucks;
        return OrderDAL.saveOrder(order);
    }
}

export default OrderUsecase;