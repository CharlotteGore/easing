var Bezier = require('bezier').Bezier;

var presets = {
  'ease' : [0.25,0.1,0.25,1],
  'ease-in' : [0.42,0,1,1],
  'ease-out' : [0,0,0.58,1],
  'ease-in-out' : [0.42,0,0.58,1],
  'linear' : [0,0,1,1],
  'ease-in-out-back' : [0.45,-0.42, 0.595,1.34],
  'ease-out-back' : [0.62,1.255, 0.665,1.095],
  'ease-in-back' : [0.33,-0.305, 0.715,-0.155],
  'ease-out-expo' : [0.015,0.745,0.225,0.985],
  'ease-in-expo' : [0.775,0, 0.975,0.075],
  'ease-in-cubic' :  [0.6,0.02 ,0.95,0.295],
  'ease-out-cubic' : [0.075,0.61, 0.36,0.93]
};

var preComputed = {};

var Ease = function(){

  return this;

};

Ease.prototype = {

  using : function( preset ){

    var p;

    if (preComputed[preset]){

      this.curve = preComputed[preset];

      return this.curve.findYAtX.bind(this.curve);

    } else if (p = presets[preset]){

      preComputed[preset] = new Bezier({
          c1 : [0,0],
          c4 : [1,1],
          c2 : [p[0], p[1]],
          c3 : [p[2], p[3]]
        })
        .buildLookup();

      this.curve = preComputed[preset];

      return this.curve.findYAtX.bind(this.curve);

    } else {

      throw new Error('No such preset!');

    }

  },

  usingCustomCurve : function( curve ){

    this.curve = new Bezier( curve );
    return this.curve.yAtTime.bind(this.curve);

  },

  usingCSS3Curve : function( c2x, c2y, c3x, c3y){

    var id = c2x + '.' + c2y + '.' + c3x + '.' + c3y;

    if (!preComputed[id]){

      preComputed[id] = (
        new Bezier({
          c1 : [0,0],
          c2 : [c2x, c2y],
          c3 : [c3x, c3y],
          c4 : [1,1]
        })
      ).buildLookup();

    }

    this.curve = preComputed[id];

    return this.curve.findYAtX.bind(this.curve);

  },

  usingCustomEaser : function ( easer ){

    this.curve = easer;

    return this.curve;

  }

};

module.exports.generateAllSamples = function(){

  var p;

  for (var i in presets){

    if (presets.hasOwnProperty(i)){

      p = presets[i];

      preComputed[i] = new Bezier({c1 : [0,0], c4 : [1,1], c2 : [p[0], p[1]], c3 : [p[2], p[3]] }).buildLookup();

    }

  }

};

module.exports.Easer = Ease;

module.exports.isPreset = function( val ){

  if (presets[val]){

    return true;

  }

  return false;

};

module.exports.presets = (function(){

  var result = [];

  for(var i in presets){

    if(presets.hasOwnProperty(i)){

      result.push(i);

    }

  }

  return result;

}());