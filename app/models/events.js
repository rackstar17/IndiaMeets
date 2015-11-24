var mongoose =require('mongoose');

var Schema = mongoose.Schema;

var events =new Schema ({

	 // creator :{type :Schema.Types.ObjectId ,ref :'User'},
	 
	 creator:String,
	 name:String,
	 description :String,
	 date: {type:Date, defauly:Date.now},
     time:String,
     location:String,
     join:Array,
     sponsor:Array
});


module.exports = mongoose.model('events',events);