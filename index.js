var Bezier = require('bezier');

var presets = {
	"ease-in" : ,
	"ease-out" :
	"ease-in-and-out" :	
	"linear " : 
	""
}

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