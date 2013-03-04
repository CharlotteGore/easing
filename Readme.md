# Easing

  Cubic-bezier based easing generate, using `charlottegore/bezier`. Several presets plus the ability to define custom easing curves.

  Duplicates the functionality of the CSS3 cubic-bezier transition function for non CSS based animations or other tasks where easing is handy.

## Installation

    $ component install charlottegore/easing

## API

### Example

  Create an easer by chaining a call to `.Ease()`, `.to()` and `.with()` which then returns an object with the method `.valueAtTime()`

    var from = 100;
    var to = 1000;

    var easing = require('easing')
      .Ease( from )
      .to( to )
      .with("ease-in");

    easing.valueAtTime( 0 ) === 100;
    easing.valueAtTime( 1 ) === 1000;

    easing.valueAtTime( some_value_between_from_and_to ) === correctly eased value

### require('easing').Ease( value )

  Takes the start/from value.

### .to( value )

  ONLY available after a call to `.Ease()`

  Takes and sets the end/to value.

### .with( preset )

  ONLY available after a call to `.to()`

  Defines the easing preset to use. Options are:

    ease-in
    ease-out
    ease-in-and-out
    inverse-in-and-out
    linear
    unhook
  overshoot

### .withCustomCurve( curve )

  ONLY available after a call to `.to()`

  Allows you to define your own easing curve. The x axis is what's measured for the purposes of easing, the y is disregarded.

  Curve data should be structured as: `{ c1 : [x, y], c2 : [x, y], c3 : [x, y], c4 : [x,y]}`

### .withCSS3Curve( c2.x, c2.y, c3.x, c3.y )

  ONLY available after a call to `.to()`

  Allows you to define your own easing curve. C1 defaults to 0,0 and C4 defaults to 1,1 as is the case for CSS3 cubic-bezier easing. It takes the same arguments and with teh same values duplicates the same result.

### .valueAtTime( time )

  ONLY available after a call to `.with()` or `.withCustomCurve()`

  Takes a value from 0-1, where 1 represents the end and 0 represents the beginning, and all values inbetweeen represent points along the easing curve.

## License

  MIT
