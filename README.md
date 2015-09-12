# add-function-2-load.js
If you need to execute some JavaScript code when "load" event triggers, but for some reason you can't use $(window).load() or similar, then try this simple script.

HOW TO USE
1 - Include the file add-function-2-load.js within <head> tag
2 - Include the others js files you need just before the </body> tag
3 - Add function(s) to be executed on load this way, wherever you need:
    addFn2Load(function() {
      // your code here
    });

HOW TO TWEAK
The script comes with a preloader image shown while page loads. Of course you can modify that image, just follow these steps:
1 - Convert to base64 the image you want to use as preloader. Smaller is better, try to keep it under 10KB
2 - Copy and paste the base64 string into the "imgB64" variable
3 - Set the width and the height of your image into the "imgSize" variable
