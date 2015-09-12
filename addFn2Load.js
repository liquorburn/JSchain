(function (w, d) {
    'use strict';
    var imgB64 = "data:image/gif;base64,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";
    var imgSize = "32px 32px;"; // CSS syntax
    var fn_chain = fn_chain || [];
    Array.prototype.hasObject = Array.indexOf ? function (a) {
        return -1 !== this.indexOf(a);
    } : function (a) {
        for (var b = this.length + 1; b -= 1;)
            if (this[b - 1] === a) return true;
        return false
    };
    w.constructor.prototype.addFn2Load = function (a) {
        "function" === typeof a && (fn_chain.hasObject(a) || fn_chain.push(a));
    };
    function doLoad() {
        while (fn_chain.length) { fn_chain.shift().call(); }
        objLoading.destroy();
    }
    function domReady() {
        if (d.body) {
            objLoading.inject();
            //	.setCss(objLoading.width, objLoading.height);
        } else {	
            w.setTimeout(function() { domReady(); }, 10);
        }
    }
    var objLoading = {
        width: w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth,
        height: w.innerHeight || d.documentElement.clientHeight || d.body.clientHeight,
        domEl: false,
        /*
        setCss: function (wdt, hgt) {
            if (false === this.domEl) return;
            this.domEl.style.width = wdt + "px";
            this.domEl.style.height = hgt + "px";
            return this;
        },
        */
        inject: function() {
            if (false !== this.domEl) return;
            d.body.style.overflowX = "hidden";
            var el = d.createElement("div");
            el.setAttribute("style", [
            	"width: " + this.width + "px;",
            	"height: " + this.height + "px;",
            	"position: absolute;",
            	"top: 0;",
            	"left: 0;",
            	"z-index: 10000000;",
            	"display: block;",
            	"overflow: auto;",
            	"background: #FFFFFF url(" + imgB64 + ") no-repeat 50% 50% scroll;",
            	"-webkit-background-size: " + imgSize,
            	"background-size: " + imgSize
            	].join(""));
            d.body.appendChild(el);
            this.domEl = el;
            el = null;return this;
        },
        destroy: function() {
            this.domEl.parentNode.removeChild(this.domEl);
            d.body.style.overflowX = "auto";
        }
    };
    domReady();
    w.addEventListener ? 
        w.addEventListener("load", doLoad, false)
        : w.attachEvent ? 
            w.attachEvent("onload", doLoad)
            : w.onload && (w.onload = doLoad);
})(window, document);

