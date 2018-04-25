var Schema   = mongoose.Schema;

var ShopingList = new Schema({
    user_id: String,
    list: [],
    status: Boolean,
    cot: {type: Date, default: Date.now},
    mot: {type: Date, default: Date.now}
});
mongoose.model('shopingList', ShopingList);