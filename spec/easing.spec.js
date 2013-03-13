describe("Easing module", function(){

	describe("Module chaining", function(){

		it("Easing module exports Ease", function(){

			expect(require('easing').Ease).toBeDefined();

		});

		it("Ease() returns a .to() method", function(){

			expect(require('easing').Ease().to).toBeDefined();

		});

		it(".to() returns a .using() method", function(){

			expect(require('easing').Ease(0).to(10).using).toBeDefined();

		});

		it(".to() returns a .usingCustomCurve() method", function(){

			expect(require('easing').Ease(0).to(10).usingCustomCurve).toBeDefined();

		});

		it(".with() returns a .valueAtTime() method", function(){

			expect(require('easing').Ease(0).to(10).using("ease-in").valueAtTime).toBeDefined();

		});
		it(".withCustomCurve() returns a .valueAtTime() method", function(){

			expect(require('easing').Ease(0).to(10).usingCustomCurve({c1:[0,0],c2:[0,0],c3:[0,0],c4:[0,0]}).valueAtTime).toBeDefined();

		});

		it(".withCustomCurve() returns a .valueAtTime() method", function(){

			expect(require('easing').Ease(0).to(10).usingCustomCurve({c1:[0,0],c2:[0,0],c3:[0,0],c4:[0,0]}).valueAtTime).toBeDefined();

		});


	})

	

})