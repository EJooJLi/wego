var app = require("./app");
var request = require("supertest");
// Chai is an assertion library for JS
var chai = require("chai").expect;

describe("user", function(){
  it("should GET all users", function(done){
    request(app)
      .get("/user")
      //optional tests
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      //Start of the actual test
      .end(function(err, res){
        //Function of chai
        chai(res.body).to.be.an("array");
        done();
      })
  });
});

describe("user", function(){
  it("should create a user", function(done){
    var chris = {
      id: 10,
      firstname: "Chris",
      lastname: "Lee",
      username: "chrislee",
      password: "abce",
      location: "NY"
    };
    request(app)
      .post("/user")
      .send(chris)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(201)
      .end(function(err, res){
        //Function of chai
        var newUser = resp.body;
        chai(newUser).to.be.an("object");
        chai(newUser.lastname).to.be("Lee");
        chai(newUser).to.eql(chris);
        done();
      })
  });
});

// describe("user/:id", function(){
//   if("should DELETE user of the id", function(done){
//     request(app)
//       .get("/user/:id")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json)
//       .expect(200)
//       .end(function(err, res){
//         chai(resp.body).to.be();
//         done();
//       })
//   });
// });
