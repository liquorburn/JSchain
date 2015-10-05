Add Function 2 Load
=============

Scenario
-----------

Let's say you need to write some JavaScript code here and there in your web page; also, suppose you want that code to be executed when **load** event is triggered. We all know that including JS libraries or other *huge* JS code right before closing `</body>` can improve the page loading time. But if jQuery (or another JS framework) is included at the bottom of your page and therefore after your code, you can't use `$(window).load()`. Consider this:

```
<body>
<div>
    <h1>The following JS code will produce an error</h1>
    <script>
        $(window).load(function() {}); // ReferenceError: $ is not defined
    </script>
</div>
<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
</body>
```

Usage
-----------

- Include `addFn2Load.js` within `<head>` tag, tipically after CSS file(s) declaration. This is the only JS code you will include within `<head>`:

```
<head>
<!-- some html code -->
<script src="addFn2Load.js"></script>
<!-- some other html code -->
</head>
```

- Include any other js files you need just before closing `</body>`:

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
