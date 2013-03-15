var Bezier = require('bezier');

var presets = {
	"ease" : [0.25,0.1,0.25,1],
	"ease-in" : [0.42,0,1,1],
	"ease-out" : [0,0,0.58,1],
	"ease-in-out" :	[0.42,0,0.58,1],
	"linear" : [0,0,1,1],
	"ease-in-out-back" : [0.45,-0.42, 0.595,1.34],
	"ease-out-back" : [0.62,1.255, 0.665,1.095],
	"ease-in-back" : [0.33,-0.305, 0.715,-0.155],
	"ease-out-expo" : [0.015,0.745,0.225,0.985],
	"ease-in-expo" : [0.775,0, 0.975,0.075],
	"ease-in-cubic" :  [0.6,0.02 ,0.95,0.295],
	"ease-out-cubic" : [0.075,0.61, 0.36,0.93]
};

var Ease = function(){

	return this;
}

Ease.prototype = {

	using : function( preset ){

		var self = this,
			p;

		if(p = presets[preset]){

			self.curve = Bezier({c1 : [0,0], c4 : [1,1], c2 : [p[0], p[1]], c3 : [p[2], p[3]] }).buildLookup();

			return function( time ){

				return self.curve.findYAtX( time );

			}


		} else {

			throw new Error("No such preset!");

		}

	},
	usingCustomCurve : function( curve ){

		var self = this;

		self.curve = Bezier( curve );

		return function( time ){

			return self.curve.yAtTime( time );

		}

	},
	usingCSS3Curve : function( c2x, c2y, c3x, c3y){
		
		var self = this;

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