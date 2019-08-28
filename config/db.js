const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://devender:XtqGjOvBxITae8Ws@emailsdata-dsjx9.mongodb.net/test?retryWrites=true&w=majority"
module.exports = { init: ()=>{
 return new Promise((resolve, reject) => {
	MongoClient.connect(url, function(err, client) {
	  if (err) 
	    { 
	      console.warn('-------------found errors during mongodb connection--------')
	      return console.log(err);
	    }
	   dbconnection = client.db('test')
	  	resolve(dbconnection);
		});
	});
}
}