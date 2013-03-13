# Easing

  Cubic-bezier based easing generator/helper, abstracting `charlottegore/bezier`. Several presets plus the ability to define custom easing curves.

  Duplicates the functionality of the CSS3 cubic-bezier transition function for non CSS based animations or other tasks where easing is handy.

## Installation

    $ component install charlottegore/easing

## API

  Create an easer by calling .Ease() then selecting an easing preset. This returns a function which, when passed an input percentage for time n, returns the output percentage for time n.

    var from = 100;
    var to = 1000;

    var easer = require('easing')
                .Ease()
                .using("ease-in")

    easer( 0 ) === 100;
    easer( 1 ) === 1000;

    easer( some_value_between_from_and_to ) === correctly eased value

### require('easing').Ease()

  Create new easer.

### require('easing').presets

  An array of valid preset names
  
### require('easing').isPreset( name )

  Returns true if name is a valid preset.

## Easer API

### .using( preset )

  Defines the easing preset to use. Options are:

    ease-in
    ease-out
    ease-in-and-out
    inverse-in-and-out
    linear
    unhook
    overshoot
    pop

  Returns a function which calculates the value at time when executed. 0 represents the start, 1 the end. You can go lower and higher than these, however.

### .usingCustomCurve( curve )

  Allows you to define your own easing curve. The x axis is what's measured for the purposes of easing, the y is disregarded.

  Curve data should be structured as: `{ c1 : [x, y], c2 : [x, y], c3 : [x, y], c4 : [x,y]}`

  Returns a function which calculates the value at time when executed. 0 represents the start, 1 the end. You can go lower and higher than these, however.

### .usingCSS3Curve( c2.x, c2.y, c3.x, c3.y )

  Allows you to define your own easing curve. C1 defaults to 0,0 and C4 defaults to 1,1 as is the case for CSS3 cubic-bezier easing. It takes the same arguments and with teh same values duplicates the same result.

  Returns a function which calculates the value at time when executed. 0 represents the start, 1 the end. You can go lower and higher than these, however.

## License

  MIT
