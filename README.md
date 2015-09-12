Add Function 2 Load
=============

If you need to execute some JavaScript code when "load" event triggers, but for some reason you can't use `$(window).load()` or similar, then try this simple script.

Usage
-----------

- Include the file add-function-2-load.js within `<head>` tag, tipically after CSS file(s) declaration

```
<head>
<!-- some code -->
<script src="add-function-2-load.js"></script>
<!-- some other code -->
</head>
```

- Include any other js files you need just before the `</body>` tag

```

<script src="your_js_1.js"></script>
<script src="your_js_2.js"></script>
<script src="you_name_it.js"></script>
</body>
```

- Add function(s) to be executed on load event wherever you need:

```
    <script>
    addFn2Load(function() {
      // your code here
    });
    </script>
```

Tweaking
-----------

The script comes with a preloader image shown until the last function you added is executed. To modify that image follow these steps:

1. Convert to base64 the image you want to use as preloader. Gif or png format! Smaller is better, try to keep it under 10KB
2. Copy and paste the base64 string into `imgB64` variable
3. Set the width and the height of your preloader image into `imgSize` variable
4. *Optional* Minify your code using online tools, I'm using [JsCompress](http://www.jscompress.com) 
