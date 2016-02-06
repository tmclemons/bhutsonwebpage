module.exports = ['$timeout','$document', additionalDrawerButton];

function additionalDrawerButton($timeout, $document) {
  return {
    restrict: 'A',
    scope: {
      correspondingDrawerSelector: '@'
    },
    link: function(scope, elem, attrs) {
      var obfuscatorSelector = '.mdl-layout__obfuscator';
      var primaryDrawerButtonSelector = 'mdl-layout__drawer-button';

      // placeholder variable for it's matching drawer
      var correspondingDrawer;

      // timeout to let MDL apply the magic
      $timeout(function() {
        // assign element to variable
        correspondingDrawer = document.querySelector(scope.correspondingDrawerSelector);

        var classes;

        // if directive is actually on the primary button
        if (elem.hasClass(primaryDrawerButtonSelector)) {

          // removeAllEventListeners on that button so default functionality doesn't break directive
          classes = elem.attr('class').replace(/ /g, '.');
          removeAllEventListeners(elem[0]);
          elem[0] = document.querySelector('.' + classes);
        }

        // add our click event
        elem[0].addEventListener('click', customDrawerToggler);


      }, 50);

      // this function is bound to the buttons to open the drawer
      // then binds to the obfuscator to close the drawer.. then unbind the event
      function customDrawerToggler() {
        var visibleClass = 'is-visible';


        // if it's open, set open to true...
        var open = correspondingDrawer.classList.contains(visibleClass);

        // another timeout to allow the obfuscator to close
        $timeout(function() {
          var obfuscator = document.querySelector(obfuscatorSelector);

          // if it's open, kill the obfuscator
          if (open) {
            removeAllEventListeners(obfuscator);
            var newObfuscator = document.querySelector(obfuscatorSelector);
            correspondingDrawer.classList.toggle('is-visible');
            newObfuscator.classList.remove('is-visible');
          }
          // else add a new click listener to the obfuscator relative to this button
          else {
            removeAllEventListeners(obfuscator);
            var newObfuscator = document.querySelector(obfuscatorSelector);
            newObfuscator.addEventListener('click', customDrawerToggler);
            newObfuscator.classList.add('is-visible');
            correspondingDrawer.classList.add('is-visible');
          }

        });

      }

      // this function clones and replaces the element, it's a bit brute-forcish
      function removeAllEventListeners(element) {
        var old_element = element;
        var new_element = old_element.cloneNode(true);
        if(old_element){
          old_element.parentNode.replaceChild(new_element, old_element);
        }
      }
    }
  };
}
