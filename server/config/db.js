mongoose.Promise = global.Promise;
mongoose.connect('mongodb://shubham:shubham@cluster0-shard-00-00-9p5vy.mongodb.net:27017,cluster0-shard-00-01-9p5vy.mongodb.net:27017,cluster0-shard-00-02-9p5vy.mongodb.net:27017/d2d?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function() {
  console.log('Connected');
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
});