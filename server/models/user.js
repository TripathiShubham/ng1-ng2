var Schema   = mongoose.Schema;

var UserSchema = new Schema({
    name : String,
    contact : Number,
    pin: Number,
    location: String,
    address: String,
    city: String,
    State: String,
    landmark: String,
    alt_contact: String,
    status: Boolean,
    cot: {type: Date, default: Date.now},
    mot: {type: Date, default: Date.now}
});
mongoose.model('user', UserSchema);