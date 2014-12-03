// Get a reference to the logo element.
var el = document.getElementById('menu');

// create a SpringSystem and a Spring with a bouncy config.
var springSystem = new rebound.SpringSystem();
var spring = springSystem.createSpring(30, 5);

// Add a listener to the spring. Every time the physics
// solver updates the Spring's value onSpringUpdate will
// be called.
spring.addListener({
  onSpringUpdate: function(spring) {
    var val = spring.getCurrentValue();
    val = rebound.MathUtil
                 .mapValueInRange(val, -300, -150, 0 ,-160);
    translateY(el, val);
  }
});

// Listen for mouse down/up/out and toggle the
//springs endValue from 0 to 1.

var menu = document.getElementsByClassName('js-show-menu')[0];

menu.addEventListener('click', function() {
  spring.setEndValue(-300);
});


function translateY(el, val) {
  el.style.mozTransform =
  el.style.msTransform =
  el.style.webkitTransform =
  el.style.transform = 'translateX(' + val + 'px)';
}