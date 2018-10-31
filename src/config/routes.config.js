import orderRouter from '../controller/order/order.router';

/**Configure higher level routes
*
* @param app - app instance
*
*/
function configureRoutes(app) {
    app.use(`/${process.env.API_VERSION}/orders`, orderRouter);
}

export default configureRoutes;