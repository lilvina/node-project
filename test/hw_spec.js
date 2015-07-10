// var app = "./app.js";
var expect = require("chai").expect;
var request = require("request");

// describe("Testing our library functionality", function(){
// 	it("Should successfully add a book", function(done){
// 		var myLib = new Library();

// 		myLib.add("Arun's Book");

// 		expect(myLib.all().length).equal(1);
// 		done();
// 	});

// 	it("Should return the correct book", function(done) {
// 		var myLib = new Library();

// 		myLib.add("Arun's Book");

// 		var bookReturned = myLib.show(1);

// 		expect(bookReturned.book).equal("Arun's Book");
// 		expect(bookReturned.id).equal(1);

// 		done();
// 	});

// 	it("Should remove a book", function(done){
// 		var myLib = new Library();
// 		myLib.add("Arun's Book");
// 		myLib.remove(1);

// 		expect(myLib.all().length).equal(0);
// 		done();
// 	});
// });

describe("localhost:3000", function(){
	it("Should have a HTTP of 200 - success", function(done){
		request("http://localhost:3000/users", function(err,res,body){
			expect(res.statusCode).to.equal(200)
			done();
		})
	})
	it("Should receive the post request", function(done){
		request.post({url:'http://localhost:3000/users', form: {key:'value'}}, function(err,res,body){ 
			console.log("res",res);
			console.log("err",err);
			console.log("body",body);
			expect(res.statusCode).to.equal(200)
			done();
		})
	})
	it("Should update the post request", function(done){
		request.put({url:'http://localhost:3000/users', form: {key:'value'}}, function(err,res,body){
			// console.log("res",res);
			// console.log("err",err);
			// console.log("body",body);
			expect(res.statusCode).to.equal(200)
			done();
		})
	})
});

describe("Google.com", function(){
	it("Should have a HTTP of 200 - success", function(done){
		request("http://www.google.com", function(err,res,body){
			expect(res.statusCode).to.equal(200)
			done();
		})
	})
});

describe("amazon.com", function(){
	it("Should have a HTTP of 200 - success", function(done){
		request("http://amazon.com", function(err,res,body){
			expect(res.statusCode).to.equal(200)
			done();
		})
	})
});




