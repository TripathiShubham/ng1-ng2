require('../models/shopingList');

var shopingList = mongoose.model('shopingList');

module.exports = {
    getShopingList: function(req, res) {
        shopingList.find({status: true, user_id: req.params.id}, function(err, result) {
            console.log(result);
            res.send(result);
        });
    }
}