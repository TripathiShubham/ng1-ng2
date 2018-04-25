require('../models/user');
require('../models/shopingList');

var User = mongoose.model('user');
var shopingList = mongoose.model('shopingList');

module.exports = {
    //add User
    addUser: function (req, res) {
        var user = new User({
            name : req.body.name,
            contact : req.body.contact,
            pin: req.body.pin,
            location: req.body.location,
            address: req.body.address,
            city: req.body.city,
            State: req.body.state,
            landmark: req.body.landmark,
            status: true,
            alt_contact: req.body.alt_contact
        });
        user.save(function(err, result) {
            if(err) {
                console.log(err);
                res.status(500).send('Error Occured while saving user');
            } else {
                console.log(result);
                var shoping = new shopingList({
                    user_id: result._id,
                    list: req.body.shopingList,
                    status: true
                });
                shoping.save(function(err, result) {
                    console.log(result);
                    res.send(result);
                });
            }
        });
    },
    getUsers: function(req, res) {
        User.find({status: true}, function(err, result) {
            console.log(result);
            res.send(result);
        });
    },
    updateStatus: function(req, res) {
        console.log(req.params.id);
        User.update({ _id: req.params.id }, { $set: { status: false }}, 
            function(err, result) {
                console.log(result);
                if(err) {
                    res.status(500).send('Error Occured while updating');
                } else {
                    console.log(req.params.id);
                    shopingList.update({ user_id: req.params.id }, { $set: { status: false }}, 
                    function(err, result) {
                        console.log(result);
                        if(err) {
                            res.status(500).send('Error Occured while updating');
                        } else {
                            res.send("Updated Successfully");
                        }
                    });
                }
            });
    }
}