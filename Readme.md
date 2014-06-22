# Easing

  Cubic-bezier based easing generator/helper, abstracting the ["Bezier"](http://github.com/CharlotteGore/bezier) module. 

  This module supports two types of easing based on Bezier curves:

  - Presets and CSS3 Curves use the "value of Y when X(n) === time" system.
  - Arbitrary custom curves (that are not forced to use 0,0 and 1,1 and the start and end points) use "the value of Y at time" system instead.

  Generating an easer returns a function which takes an input ratio of between 0 and 1 which returns the eased output ratio (which may not always been between 0 and 1).

## Installation

    $ component install charlottegore/easing

## API

  Create an easer by calling .Ease() then selecting an easing preset. This returns a function which, when passed an input ratio, returns the eased output ratio.

    var from = 100;
    var to = 1000;

    var easer = require('easing')
                .Ease()
                .using("ease-in")

    easer( 0 ) === 100;
    easer( 1 ) === 1000;

    easer( some_value_between_from_and_to ) === correctly eased value

### require('easing').generateAllSamples()

  This causes the module to generate all the easing curves in advance which often leads to improvements in performance and higher resolution easing curves.

### require('easing').Ease()

  Create new easer.

### require('easing').presets

  Returns the list of presets.
  
### require('easing').isPreset( name )

  Returns true if name is a valid preset.

## Easer API

### .using( "preset" )

  Returns a function which takes an input ratio of 0 to 1 and returns the eased output ratio.

  Use an easing preset. Choices are:

  - linear
  - ease - Replicates CSS3 default
  - ease-in - Replicates CSS3 ease-in
  - ease-out - Replicates CSS3 ease-out
  - ease-in-out - Replicates CSS3 ease-in-out
  - ease-in-back
  - ease-out-back
  - ease-in-out-back
  - ease-in-expo
  - ease-out-expo
  - ease-in-cubic
  - ease-out-cubic

    > var easer = require('easing').Ease().using('ease-in');
    > easer(0)
    > 0
    > easer(1)
    > 1
    > easer(0.5)
    > 0.3147198334560001

### .usingCustomCurve( curve )

  Returns a function which takes an input ratio of 0 to 1 and returns the eased output ratio.

  Easing curve based on the value of Y at Time.

  Allows you to define your own easing curve with any arbitrary curve.

  Curve data should be structured as: `{ c1 : [x, y], c2 : [x, y], c3 : [x, y], c4 : [x,y]}`

    > var easer = require('easing').Ease().usingCustomCurve({ c1 : [0,0], c2 : [0.075,0.61], c3 : [0.36,0.93], c4 : [1,1]});
    > easer(0)
    > 0
    > easer(1)
    > 1
    > easer(0.5)
    > 0.7025

### .usingCSS3Curve( c2.x, c2.y, c3.x, c3.y )

  Returns a function which takes an input ratio of 0 to 1 and returns the eased output ratio.

  Easing curve based on the value of Y when X(n) === time.

  Allows you to define your own easing curve in the CSS3 style, and have the easing applied in the CSS3 way. It takes the same arguments and with the same values and gives the same result.

    > var easer = require('easing').Ease().usingCSS3Curve(0.33,-0.305, 0.715,-0.155);
    > easer(0)
    > 0
    > easer(1)
    > 1
    > easer(0.5)
    > -0.06145341884495001

  Note that, as with CSS3 transition-timing-functions, x must stay between 0 and 1 along the curve. It'll still run but it's kinda glitchy. In testing, real CSS3 transitions glitch out in exactly the same way.

  Returns a function which calculates the value at `time` when executed. 0 represents the start, 1 the end. You can go lower and higher than these, however.

## License

  MIT
