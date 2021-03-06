(function(window) {
  var svgSprite =
    '<svg><symbol id="icon-phone" viewBox="0 0 1024 1024"><path d="M213.704348 445.217391C291.617391 601.043478 422.956522 727.930435 578.782609 810.295652l122.434783-122.434783c15.582609-15.582609 37.843478-22.26087 55.652174-11.130435 60.104348 22.26087 126.886957 33.391304 198.121739 33.391304 33.391304 0 55.652174 22.26087 55.652174 55.652174l0 186.991304c0 33.391304-22.26087 55.652174-55.652174 55.652174C434.086957 1008.417391 15.582609 589.913043 15.582609 71.234783c0-33.391304 22.26087-55.652174 55.652174-55.652174l193.669565 0c33.391304 0 55.652174 22.26087 55.652174 55.652174 0 66.782609 11.130435 133.565217 33.391304 198.121739 4.452174 15.582609 0 37.843478-11.130435 55.652174L213.704348 445.217391z"  ></path></symbol></svg>';
  var script = (function() {
    var scripts = document.getElementsByTagName("script");
    return scripts[scripts.length - 1];
  })();
  var shouldInjectCss = script.getAttribute("data-injectcss");
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0);
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false);
          fn();
        };
        document.addEventListener("DOMContentLoaded", loadFn, false);
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn);
    }
    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        init = function() {
          if (!done) {
            done = true;
            fn();
          }
        };
      var polling = function() {
        try {
          d.documentElement.doScroll("left");
        } catch (e) {
          setTimeout(polling, 50);
          return;
        }
        init();
      };
      polling();
      d.onreadystatechange = function() {
        if (d.readyState == "complete") {
          d.onreadystatechange = null;
          init();
        }
      };
    }
  };
  var before = function(el, target) {
    target.parentNode.insertBefore(el, target);
  };
  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild);
    } else {
      target.appendChild(el);
    }
  };
  function appendSvg() {
    var div, svg;
    div = document.createElement("div");
    div.innerHTML = svgSprite;
    svgSprite = null;
    svg = div.getElementsByTagName("svg")[0];
    if (svg) {
      svg.setAttribute("aria-hidden", "true");
      svg.style.position = "absolute";
      svg.style.width = 0;
      svg.style.height = 0;
      svg.style.overflow = "hidden";
      prepend(svg, document.body);
    }
  }
  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  ready(appendSvg);
})(window);
