var Bezier = require('bezier');

var presets = {
	"ease-in" : { c1 : [0,0], c2 : [0.43,0.01], c3 : [0.985,0.09], c4 : [1,1]},
	"ease-out" : { c1 : [0,0], c2 : [0.015,0.83], c3 : [0.375,0.995], c4 : [1,1]},
	"ease-in-and-out" :	{ c1 : [0,0], c2 : [0.995,-0.015], c3 : [0.025,1.02], c4 : [1,1]},
	"linear" : { c1 : [0,0], c2 : [1,1]},
	"inverse-in-and-out" : { c1 : [0,0], c2 : [-0.045,0.72], c3 : [1.09,0.22], c4 : [1,1]},
	"unhook" : { c1 : [0,0], c2 : [0.19,-0.72], c3 : [-0.05,1.085], c4 : [1,1]},
	"overshoot" : { c1 : [0,0], c2 : [0.87,-0.095], c3 : [0.8,1.55], c4 : [1,1]},
	"pop" : { c1 : [0,0], c2 : [0.595,-0.795], c3 : [0.46,1.6], c4 : [1,1]}
};

var Ease = function(){

	return this;
}

Ease.prototype = {

	using : function( preset ){

		if(presets[preset]){

			self.curve = Bezier(presets[preset]);

			if(preset==="linear"){

				self.curve.isLinear();

			}

			return function( time ){

				return self.curve.yAtTime( time );

			}


		} else {

			throw new Error("No such preset!");

		}

	},
	usingCustomCurve : function( curve ){

		self.curve = Bezier( curve );

		return function( time ){

			return self.curve.yAtTime( time );

		}

	},
	usingCSS3Curve : function( c2x, c2y, c3x, c3y){

		self.curve = Bezier({
			c1 : [0,0],
			c2 : [c2x, c2y],
			c3 : [c3x, c3y],
			c4 : [1,1]
		}).buildLookup();

		return function( time ){

			return self.curve.findYAtX(time); //  yAtTime( time );

		}

	}


}

module.exports.Ease = function(){

	return new Ease();

};

module.exports.isPreset = function( val ){

	return !! typeof presets[val] !== 'undefined';

}

module.exports.presets = (function(){

	var result = [];

	for(var i in presets){

		if(presets.hasOwnProperty(i)){

			result.push(i);

		}

	}

	return result;

}());