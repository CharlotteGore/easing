describe("Easing module", function(){

	describe("Module chaining", function(){

		it("Easing module exports Ease", function(){

			expect(require('easing').Ease).toBeDefined();

		});

		it("Ease() returns a .to() method", function(){

			expect(require('easing').Ease().to).toBeDefined();

		});

		it(".to() returns a .with() method", function(){

			expect(require('easing').Ease(0).to(10).with).toBeDefined();

		});

		it(".to() returns a .withCustomCurve() method", function(){

			expect(require('easing').Ease(0).to(10).withCustomCurve).toBeDefined();

		});

		it(".with() returns a .valueAtTime() method", function(){

			expect(require('easing').Ease(0).to(10).with("ease-in").valueAtTime).toBeDefined();

		});
		it(".withCustomCurve() returns a .valueAtTime() method", function(){

			expect(require('easing').Ease(0).to(10).withCustomCurve({c1:[0,0],c2:[0,0],c3:[0,0],c4:[0,0]}).valueAtTime).toBeDefined();

		});

		it(".withCustomCurve() returns a .valueAtTime() method", function(){

			expect(require('easing').Ease(0).to(10).withCustomCurve({c1:[0,0],c2:[0,0],c3:[0,0],c4:[0,0]}).valueAtTime).toBeDefined();

		});


	})

	

})