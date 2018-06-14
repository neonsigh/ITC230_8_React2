const mongoose = require('mongoose');

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
// var connectionString = "mongodb://<dbuser>:<dbuserpassword>@ds015962.mlab.com:15962/<dbname>";
// mongoose.connect(connectionString);

// local db connection settings 
var ip = process.env.ip || '127.0.0.1';
mongoose.connect('mongodb://' +ip+ '/albums');

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

// define Album model in JSON key/value pairs
// values indicate the data type of each key
var mySchema = mongoose.Schema({
 artist: String,
 title: String,
 label: String
}); 

module.exports = mongoose.model('Album', mySchema);




/* commands:
mongo
use albums
show collections
db.createCollection("albums")
db.albums.insert( { artist: "Prince", title: "1999", label: "Warners" } )
db.albums.find("1999")

*/
