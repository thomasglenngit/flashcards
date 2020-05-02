$(document).ready(function() {
//   $("p").click(function() {
//     $(".show").toggle();
//       $(".hide").toggle();
//   });
// });


// Here's the code that fixed my flash cards.
$("p").click(function() {
    $("." + this.className).toggle();
  });
});


// as long as the word-answer pairs have the same class, this works fine
// ex       
      // <p class="1">operator</p>
      // <p class="1" style="display: none">answer</p>
      // <p class="1">operator</p>
      // <p class="1" style="display: none">answer</p>
      // <p class="2">variables</p>
      // <p class="2" style="display: none">answer</p>
      // <p class="3">Variable naming conventions</p>
      // <p class="3" style="display: none">answer</p>

      // <p class="4">Functions</p>
      // <p class="4" style="display: none">answer</p>
      // <p class="5">Methods</p>
      // <p class="5" style="display: none">answer</p>
      // <p class="6">Arguments</p>
      // <p class="6" style="display: none">answer</p>
      // <p class="7">Parameters</p>
      // <p class="7" style="display: none">answer</p>
      // <p class="8">Return</p>
      // <p class="8" style="display: none">answer</p>
      // <p class="9">Chaining methods</p>
      // <p class="9" style="display: none">answer</p>
      // <p class="10">Strings</p>
      // <p class="10" style="display: none">answer</p>
      // <p class="11">Booleans</p>
      // <p class="11" style="display: none">answer</p>
      // <p class="12">NaN</p>
      // <p class="12" style="display: none">answer</p>
      // <p class="13">Null</p>
      // <p class="13" style="display: none">answer</p>
      // <p class="14">Alert</p>
      // <p class="14" style="display: none">answer</p>
      // <p class="15">Comments</p>
      // <p class="15" style="display: none">answer</p>