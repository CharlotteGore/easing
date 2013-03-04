var Bezier = require('bezier');

var presets = {
	"ease-in" : { c1 : [0,0], c2 : [0.43,0.01], c3 : [0.985,0.09], c4 : [1,1]},
	"ease-out" : { c1 : [0,0], c2 : [0.015,0.83], c3 : [0.375,0.995], c4 : [1,1]},
	"ease-in-and-out" :	{ c1 : [0,0], c2 : [0.995,-0.015], c3 : [0.025,1.02], c4 : [1,1]},
	"linear " : { c1 : [0,0], c2 : [0,0], c3 : [1,1], c4 : [1,1]},
	"inverse-in-and-out" : { c1 : [0,0], c2 : [-0.045,0.72], c3 : [1.09,0.22], c4 : [1,1]},
	"unhook" : { c1 : [0,0], c2 : [0.19,-0.72], c3 : [-0.05,1.085], c4 : [1,1]},
	"overshoot" : { c1 : [0,0], c2 : [0.87,-0.095], c3 : [0.8,1.55], c4 : [1,1]},
	"pop" : { c1 : [0,0], c2 : [0.595,-0.795], c3 : [0.46,1.6], c4 : [1,1]}
};

var Ease = function( val ){

	this._from = val || 0;

	return this;

}

Ease.prototype = {

	to : function( val ){

		var self = this;

		this._to = val || 0;

		return {
			with : function( preset ){

				if(presets[preset]){

					self.curve = Bezier(presets[preset])

					return {
						valueAtTime : function( time ){

							return self._from + ((self._to - self._from) * self.curve.pointArray( time )[1]);

						}

					}


				} else {

					throw new Error("No such preset!");

				}


			},
			withCustomCurve : function( curve){

				self.curve = Bezier( curve );

				return function(curve){

					return {

						valueAtTime : function( time ){

							return self._from + ((self._to - self._from) * curve.pointArray( (1 + (time * -1)) )[1]);

						}

					}

				}(self.curve)			

			}

		}

	}

}

module.exports.Ease = function( val ){

	return new Ease(val);

};