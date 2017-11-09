var user_controller = require('../controllers/users.js');
var product_controller = require('../controllers/products.js');
const path = require('path');

module.exports = function(app)
{
    /* routes */
    app.get('/users', user_controller.get_users);
    app.post('/create_user',user_controller.create_user);
    app.post('/signin',user_controller.signin);
    app.get('/products',product_controller.get_products);
    app.post('/post_product',product_controller.post_product);
    app.post('/update_product',product_controller.update_product);
    app.post('/delete_product',product_controller.delete_product);
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}

