var Bezier = require('bezier');

var presets = {
	"ease-in" : {c1 : [0,0], c2: [0.095, -1.325], c3 : [0.025,-1.885], c4 : [1,-1]},
	"ease-out" : {c1 : [0,0], c2: [1.08, 1.775], c3 : [1,-1], c4 : [1,-1]},
	"ease-in-and-out" :	{c1 : [0,0], c2: [0.125, -1.99], c3 : [0.875, 1.09], c4 : [1,-1]},
	"linear " : {c1 : [0,0], c2: [0, 0], c3 : [1,-1], c4 : [1,-1]},
	"inverse-in-and-out" : {c1 : [0,0], c2: [1.05,1.38], c3 : [0.035,-1.94], c4 : [1,-1]},
	"unhook" : {c1 : [0,0], c2: [-0.15, 0], c3 : [0.19,-1,01], c4 : [1,-1]},
	"overshoot" : {c1 : [0,0], c2: [0.795, -0.09], c3 : [1.21,-1.225], c4 : [1,-1]}
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

							return self._from + ((self._to - self._from) * self.curve.pointArray( time )[0]);

						}

					}


				} else {

					throw new Error("No such preset!");

				}


			},
			withCustomCurve : function( curve){

				self.curve = Bezier( curve );

				return {
					valueAtTime : function( time ){

						return self._from + ((self._to - self._from) * self.curve.pointArray( time )[0]);

					}

				}			

			}

		}

	}

}

module.exports.Ease = function( val ){

	return new Ease(val);

};