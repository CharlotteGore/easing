describe("Easing module", function(){

	describe("Module", function(){

		it("Easing module exports Ease", function(){

			expect(require('easing').Ease).toBeDefined();

		});


		it("returns a .usingCustomCurve() returns function", function(){

			expect(require('easing').Ease().usingCustomCurve).toBeDefined();

		});

		it(".with() returns a .valueAtTime() returns function", function(){

			expect(require('easing').Ease().using("ease-in")).toBeDefined();

		});
		it(".withCustomCurve() returns function", function(){

			expect(require('easing').Ease().usingCustomCurve({c1:[0,0],c2:[0,0],c3:[0,0],c4:[0,0]})).toBeDefined();

		});

		it(".withCustomCurve() returns function", function(){

			expect(require('easing').Ease().usingCustomCurve({c1:[0,0],c2:[0,0],c3:[0,0],c4:[0,0]})).toBeDefined();

		});

		it("Generally works as expected - linear", function(){

			var easer = require('easing').Ease().using("linear");

			expect( easer(0) ).toBe(0);
			expect( easer(0.5) ).toBe(0.5);
			expect( easer(1) ).toBe(1);

		});

		it("Generally works as expected - ease-out", function(){

			var easer = require('easing').Ease().using("ease-out");

			expect( easer(0) ).toBe(0);
			expect( easer(0.5) ).toBe(0.6847182689760001);
			expect( easer(1) ).toBe(1);

		});

		it("Generally works as expected - ease-in", function(){

			var easer = require('easing').Ease().using("ease-in");

			expect( easer(0) ).toBe(0);
			expect( easer(0.5) ).toBe(0.3147198334560001);
			expect( easer(1) ).toBe(1);

		});


	})

	

})