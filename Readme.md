# Easing

  Cubic-bezier based easing generator/helper, abstracting `charlottegore/bezier`. Several presets plus the ability to define custom easing curves. For the sake of computational efficiency, return values for the presets and normal custom curves are the straightforward `y(t)`, i.e, the value of `y` at `t` percent along the curve. This generally results in smooth but somewhat more subtle easing, requiring slightly more steep curves for pronounced effects.

  When used with `.usingCSS3Curve` though, the easer duplicates the _exact functionality_ of the CSS3 cubic-bezier transition timing function, thanks to a lookup based `y = x(t)`. This is a lot more computationally intensive and highly unoptimised right now, but for *exact* clones of specific CSS3 easing curve for small or short transitions, this is the way to go.

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

  Allows you to define your own easing curve in the CSS3 style, and have the easing applied in the CSS3 way. It takes the same arguments and with teh same values duplicates the same result.

  Note that, as with CSS3 transition-timing-functions, x must stay between 0 and 1 along the curve. It'll still run but it's kinda glitchy. In testing, real CSS3 transitions glitch out in the same way on Chrome too.

  Returns a function which calculates the value at time when executed. 0 represents the start, 1 the end. You can go lower and higher than these, however.

## License

  MIT
