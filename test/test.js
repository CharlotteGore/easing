var chai = require('chai');
var expect = chai.expect;
var should = chai.should();

var easingModule = require('../index.js');

describe("Easing module", function(){

	describe("Module", function (){

		it("Easing module exports Ease", function (){

			should.exist(easingModule.Easer);

		});

		describe("API test", function (){

			var Easer = easingModule.Easer;

			it("all methods present and accounted for", function(){

				var easer = new Easer;

				should.exist(easer.using);
				should.exist(easer.usingCustomCurve);
				should.exist(easer.usingCSS3Curve);
				should.exist(easer.usingCustomEaser);

			});

			it(".using() returns a function", function(){

				expect(
					new Easer()
						.using("ease-in")
				).to.be.a("function");

			});
			it(".withCustomCurve() returns function", function(){

				expect(

					new Easer()
						.usingCustomCurve({c1:[0,0],c2:[0,0],c3:[0,0],c4:[0,0]})

				).to.be.a("function");

			});
			it(".withCSS3Curve() returns function", function(){

				expect(

					new Easer()
						.usingCustomCurve(0.45,-0.42, 0.595,1.34)
				).to.be.a("function");
				
			});
			it(".withCustomEaser() returns function", function(){

				expect(

					new Easer()
						.usingCustomEaser(function (t){ return t; })

				).to.be.a("function");
				
			});

			it("has working preset easing functions", function(){

				var easer = new Easer().using("ease-out");

				expect( easer(0) ).to.equal(0);
				expect( easer(0.5) ).to.equal(0.6847182689760001);
				expect( easer(1) ).to.equal(1);

			});

			it("has working custom CSS curve functions", function(){

				var easer = new Easer().usingCSS3Curve(0.45,-0.42, 0.595,1.34);

				expect( easer(0) ).to.equal(0);
				expect( easer(0.5) ).to.equal(0.42950632561408003);
				expect( easer(1) ).to.equal(1);

			});

			it("has working custom curve functions ", function(){

				var easer = new Easer().usingCustomCurve({c1:[0,0],c2:[0.45,-0.42],c3:[0.595,1.34],c4:[1,1]});

				expect( easer(0) ).to.equal(0);
				expect( easer(0.5) ).to.equal(0.4700000000000001);
				expect( easer(1) ).to.equal(1);

			});

			it("has working custom function functions ", function(){

				var easer = new Easer().usingCustomEaser(function (t){ return 1 - t; });

				expect( easer(0) ).to.equal(1);
				expect( easer(0.5) ).to.equal(0.5);
				expect( easer(1) ).to.equal(0);

			});


		});


	})

	

})