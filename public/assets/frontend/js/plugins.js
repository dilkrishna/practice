/* =============================================================
 jquery.easing.1.3.js
 * ============================================================= */

jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad', swing: function (x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    }, easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    }, easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    }, easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }, easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    }, easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    }, easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }, easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    }, easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }, easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }, easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    }, easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }, easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }, easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    }, easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }, easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }, easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }, easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }, easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0)return b;
        if (t == d)return b + c;
        if ((t /= d / 2) < 1)return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }, easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }, easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }, easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }, easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)return b;
        if ((t /= d) == 1)return b + c;
        if (!p)p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }, easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)return b;
        if ((t /= d) == 1)return b + c;
        if (!p)p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    }, easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)return b;
        if ((t /= d / 2) == 2)return b + c;
        if (!p)p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    }, easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined)s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }, easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined)s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }, easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined)s = 1.70158;
        if ((t /= d / 2) < 1)return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }, easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    }, easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    }, easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2)return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});


/* =============================================================
 Modernizr 2.8.3 (Custom Build)
 * ============================================================= */

;
window.Modernizr = function (a, b, c) {
    function A(a) {
        j.cssText = a
    }

    function B(a, b) {
        return A(m.join(a + ";") + (b || ""))
    }

    function C(a, b) {
        return typeof a === b
    }

    function D(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function E(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!D(e, "-") && j[e] !== c)return b == "pfx" ? e : !0
        }
        return !1
    }

    function F(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)return d === !1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function G(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" ");
        return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), F(e, b, c))
    }

    var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function (a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))while (d--)j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, x = function (b) {
        var c = a.matchMedia || a.msMatchMedia;
        if (c)return c(b) && c(b).matches || !1;
        var d;
        return w("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
            d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
        }), d
    }, y = {}.hasOwnProperty, z;
    !C(y, "undefined") && !C(y.call, "undefined") ? z = function (a, b) {
        return y.call(a, b)
    } : z = function (a, b) {
        return b in a && C(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")throw new TypeError;
        var d = u.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }), q.canvas = function () {
        var a = b.createElement("canvas");
        return !!a.getContext && !!a.getContext("2d")
    }, q.canvastext = function () {
        return !!e.canvas && !!C(b.createElement("canvas").getContext("2d").fillText, "function")
    }, q.touch = function () {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = a.offsetTop === 9
        }), c
    }, q.cssanimations = function () {
        return G("animationName")
    }, q.csstransforms = function () {
        return !!G("transform")
    }, q.csstransforms3d = function () {
        var a = !!G("perspective");
        return a && "webkitPerspective"in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, q.csstransitions = function () {
        return G("transition")
    };
    for (var H in q)z(q, H) && (v = H.toLowerCase(), e[v] = q[H](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function (a, b) {
        if (typeof a == "object")for (var d in a)z(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c)return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, A(""), i = k = null, function (a, b) {
        function l(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function n(a) {
            var b = j[a[h]];
            return b || (b = {}, i++, a[h] = i, j[i] = b), b
        }

        function o(a, c, d) {
            c || (c = b);
            if (k)return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }

        function p(a, c) {
            a || (a = b);
            if (k)return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
            for (; e < g; e++)d.createElement(f[e]);
            return d
        }

        function q(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(s, b.frag)
        }

        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
        }

        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function () {
                        b.createElement("a");
                        var a = b.createDocumentFragment();
                        return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                    }()
            } catch (c) {
                g = !0, k = !0
            }
        })();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s, r(b)
    }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.mq = x, e.testProp = function (a) {
        return E([a])
    }, e.testAllProps = G, e.testStyles = w, e.prefixed = function (a, b, c) {
        return b ? G(a, b, c) : G(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {
    }

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }

        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {load: j, i: 0}, a
    }

    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
            return "[object Array]" == o.call(a)
        }, x = [], y = {}, z = {
        timeout: function (a, b) {
            return b.length && (a.timeout = b[0]), a
        }
    }, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))c || (j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function () {
                        var b = 0, c;
                        for (c in a)a.hasOwnProperty(c) && b++;
                        return b
                    }(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    } : j[n] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l()
                        }
                    }(k[n])), g(a[n], j, b, n, h))
                } else!c && l()
            }

            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }

        var i, j, l = this.yepnope.loader;
        if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};


/* =============================================================
 Backstretch - v2.0.4 - 2013-06-19  ( ------ Background Fullscreen Image Slider ------ )
 http://srobbin.com/jquery-plugins/backstretch/
 Copyright (c) 2013 Scott Robbin; Licensed MIT 
 * ============================================================= */

(function (a, d, p) {
    a.fn.backstretch = function (c, b) {
        (c === p || 0 === c.length) && a.error("No images were supplied for Backstretch");
        0 === a(d).scrollTop() && d.scrollTo(0, 0);
        return this.each(function () {
            var d = a(this), g = d.data("backstretch");
            if (g) {
                if ("string" == typeof c && "function" == typeof g[c]) {
                    g[c](b);
                    return
                }
                b = a.extend(g.options, b);
                g.destroy(!0)
            }
            g = new q(this, c, b);
            d.data("backstretch", g)
        })
    };
    a.backstretch = function (c, b) {
        return a("body").backstretch(c, b).data("backstretch")
    };
    a.expr[":"].backstretch = function (c) {
        return a(c).data("backstretch") !== p
    };
    a.fn.backstretch.defaults = {centeredX: !0, centeredY: !0, duration: 5E3, fade: 0};
    var r = {
        left: 0,
        top: 0,
        overflow: "hidden",
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
        zIndex: -999999
    }, s = {
        position: "absolute",
        display: "none",
        margin: 0,
        padding: 0,
        border: "none",
        width: "auto",
        height: "auto",
        maxHeight: "none",
        maxWidth: "none",
        zIndex: -999999
    }, q = function (c, b, e) {
        this.options = a.extend({}, a.fn.backstretch.defaults, e || {});
        this.images = a.isArray(b) ? b : [b];
        a.each(this.images, function () {
            a("<img />")[0].src = this
        });
        this.isBody = c === document.body;
        this.$container = a(c);
        this.$root = this.isBody ? l ? a(d) : a(document) : this.$container;
        c = this.$container.children(".backstretch").first();
        this.$wrap = c.length ? c : a('<div class="backstretch"></div>').css(r).appendTo(this.$container);
        this.isBody || (c = this.$container.css("position"), b = this.$container.css("zIndex"), this.$container.css({
            position: "static" === c ? "relative" : c,
            zIndex: "auto" === b ? 0 : b,
            background: "none"
        }), this.$wrap.css({zIndex: -999998}));
        this.$wrap.css({position: this.isBody && l ? "fixed" : "absolute"});
        this.index = 0;
        this.show(this.index);
        a(d).on("resize.backstretch", a.proxy(this.resize, this)).on("orientationchange.backstretch", a.proxy(function () {
            this.isBody && 0 === d.pageYOffset && (d.scrollTo(0, 1), this.resize())
        }, this))
    };
    q.prototype = {
        resize: function () {
            try {
                var a = {
                    left: 0,
                    top: 0
                }, b = this.isBody ? this.$root.width() : this.$root.innerWidth(), e = b, g = this.isBody ? d.innerHeight ? d.innerHeight : this.$root.height() : this.$root.innerHeight(), j = e / this.$img.data("ratio"), f;
                j >= g ? (f = (j - g) / 2, this.options.centeredY && (a.top = "-" + f + "px")) : (j = g, e = j * this.$img.data("ratio"), f = (e - b) / 2, this.options.centeredX && (a.left = "-" + f + "px"));
                this.$wrap.css({width: b, height: g}).find("img:not(.deleteable)").css({width: e, height: j}).css(a)
            } catch (h) {
            }
            return this
        }, show: function (c) {
            if (!(Math.abs(c) > this.images.length - 1)) {
                var b = this, e = b.$wrap.find("img").addClass("deleteable"), d = {relatedTarget: b.$container[0]};
                b.$container.trigger(a.Event("backstretch.before", d), [b, c]);
                this.index = c;
                clearInterval(b.interval);
                b.$img = a("<img />").css(s).bind("load", function (f) {
                    var h = this.width || a(f.target).width();
                    f = this.height || a(f.target).height();
                    a(this).data("ratio", h / f);
                    a(this).fadeIn(b.options.speed || b.options.fade, function () {
                        e.remove();
                        b.paused || b.cycle();
                        a(["after", "show"]).each(function () {
                            b.$container.trigger(a.Event("backstretch." + this, d), [b, c])
                        })
                    });
                    b.resize()
                }).appendTo(b.$wrap);
                b.$img.attr("src", b.images[c]);
                return b
            }
        }, next: function () {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        }, prev: function () {
            return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
        }, pause: function () {
            this.paused = !0;
            return this
        }, resume: function () {
            this.paused = !1;
            this.next();
            return this
        }, cycle: function () {
            1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(a.proxy(function () {
                this.paused || this.next()
            }, this), this.options.duration));
            return this
        }, destroy: function (c) {
            a(d).off("resize.backstretch orientationchange.backstretch");
            clearInterval(this.interval);
            c || this.$wrap.remove();
            this.$container.removeData("backstretch")
        }
    };
    var l, f = navigator.userAgent, m = navigator.platform, e = f.match(/AppleWebKit\/([0-9]+)/), e = !!e && e[1], h = f.match(/Fennec\/([0-9]+)/), h = !!h && h[1], n = f.match(/Opera Mobi\/([0-9]+)/), t = !!n && n[1], k = f.match(/MSIE ([0-9]+)/), k = !!k && k[1];
    l = !((-1 < m.indexOf("iPhone") || -1 < m.indexOf("iPad") || -1 < m.indexOf("iPod")) && e && 534 > e || d.operamini && "[object OperaMini]" === {}.toString.call(d.operamini) || n && 7458 > t || -1 < f.indexOf("Android") && e && 533 > e || h && 6 > h || "palmGetResource"in d && e && 534 > e || -1 < f.indexOf("MeeGo") && -1 < f.indexOf("NokiaBrowser/8.5.0") || k && 6 >= k)
})(jQuery, window);


/* =============================================================

 jquery.typist � animated text typing ( ------ Text Typing Style ------ )

 * ============================================================= */

/*! Text Typing */

!function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    "use strict";
    function i(i, e) {
        t.extend(this, {
            speed: 10,
            text: "",
            cursor: !0,
            blinkSpeed: 2,
            typeFrom: "end",
            cursorStyles: {display: "inline-block", fontStyle: "normal", margin: "-2px 2px 0 2px"}
        }, e || {}), this._element = t(i), this._element.data("typist", this), this.queue = [], this.timer = null, this.delay = 1e3 / this.speed, this.blinkTimer = null, this.blinkDelay = 1e3 / this.blinkSpeed, this.text && (this.queue.push(this.text), this.type())
    }

    t.fn.typist = function (t) {
        return this.each(function () {
            new i(this, t)
        })
    }, t.fn.typistAdd = function (i) {
        return this.each(function () {
            var e = t(this).data("typist");
            e.queue.push(i), e.type()
        })
    }, t.fn.typistRemove = function (i) {
        return i = parseInt(i, 10) || 0, this.each(function () {
            var e = t(this).data("typist");
            e.queue.push({remove: i}), e.type()
        })
    }, t.fn.typistPause = function (i) {
        return i = parseInt(i, 10) || 0, this.each(function () {
            var e = t(this).data("typist");
            e.queue.push({delay: i}), e.type()
        })
    }, t.fn.typistStop = function () {
        return this.each(function () {
            var i = t(this).data("typist");
            i.queue.push({stop: !0}), i.type()
        })
    }, i.prototype = {
        addCursor: function () {
            this._cursor && (clearInterval(this.blinkTimer), this._cursor.stop().remove()), this._cursor = t("<span>|</span>").css(this.cursorStyles).insertAfter(this._container), this.cursorVisible = !0, this.blinkTimer = setInterval(t.proxy(function () {
                this.cursorVisible = !this.cursorVisible, this._cursor.animate({opacity: this.cursorVisible ? 1 : 0}, 100)
            }, this), this.blinkDelay)
        }, fire: function (t) {
            return this._element.trigger(t, this), this
        }, nl2br: function (t) {
            return t.replace("\n", "<br/>")
        }, remove: function (i) {
            if (0 >= i)return this.timer = null, this.fire("end_remove.typist").type();
            i--;
            var e = this._container.text();
            e = e.substr(0, e.length - 1), e = this.nl2br(e), this.timer = setTimeout(t.proxy(function () {
                this._container.html(e), this.remove(i)
            }, this), this.delay)
        }, step: function (i) {
            if (!i.length)return this.timer = null, this.fire("end_type.typist").type();
            var e = i.shift();
            e = t("<div>").text(e).html(), e = this.nl2br(e), this.timer = setTimeout(t.proxy(function () {
                this._container.html(this._container.html() + e), this.step(i)
            }, this), this.delay)
        }, stop: function () {
            clearInterval(this.blinkTimer), this.blinkTimer = null, this._cursor && (this._cursor.remove(), this._cursor = null), clearTimeout(this.timer), this.timer = null
        }, type: function () {
            if (!this.timer) {
                this._container || (this._container = t("<span>"), "start" === this.typeFrom ? this._element.prepend(this._container) : this._element.append(this._container)), this.cursor && this.addCursor();
                var i, e = this.queue.shift();
                if ("string" == typeof e)i = e; else {
                    if (e && e.delay)return void(this.fire("start_pause.typist").timer = setTimeout(t.proxy(function () {
                        this.timer = null, this.fire("end_pause.typist").type()
                    }, this), e.delay));
                    if (e && e.remove)return void this.fire("start_remove.typist").remove(e.remove);
                    if (e && e.stop)return void this.stop()
                }
                i && (i = i.split(""), this.fire("start_type.typist").step(i))
            }
        }
    }
});


/* =============================================================

 Smooth Scroll v4.5 ( ------ Page Scrol On click Effect ------ )

 * ============================================================= */

window.smoothScroll = function (e, t, n) {
    "use strict";
    var r = {
        speed: 500, easing: "easeInOutCubic", offset: 0, updateURL: !1, callbackBefore: function () {
        }, callbackAfter: function () {
        }
    }, a = function (e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }, o = function (e, t) {
        return "easeInQuad" == e ? t * t : "easeOutQuad" == e ? t * (2 - t) : "easeInOutQuad" == e ? .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t : "easeInCubic" == e ? t * t * t : "easeOutCubic" == e ? --t * t * t + 1 : "easeInOutCubic" == e ? .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 : "easeInQuart" == e ? t * t * t * t : "easeOutQuart" == e ? 1 - --t * t * t * t : "easeInOutQuart" == e ? .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t : "easeInQuint" == e ? t * t * t * t * t : "easeOutQuint" == e ? 1 + --t * t * t * t * t : "easeInOutQuint" == e ? .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t : t
    }, u = function (e, t, n) {
        var r = 0;
        if (e.offsetParent)do r += e.offsetTop, e = e.offsetParent; while (e);
        return r = r - t - n, r >= 0 ? r : 0
    }, i = function () {
        return Math.max(t.body.scrollHeight, t.documentElement.scrollHeight, t.body.offsetHeight, t.documentElement.offsetHeight, t.body.clientHeight, t.documentElement.clientHeight)
    }, f = function (e) {
        if (null === e || e === n)return {};
        var t = {};
        return e = e.split(";"), e.forEach(function (e) {
            e = e.trim(), "" !== e && (e = e.split(":"), t[e[0]] = e[1].trim())
        }), t
    }, c = function (e, t) {
        t !== !0 && "true" !== t || !history.pushState || history.pushState({pos: e.id}, "", e)
    }, l = function (n, l, s, d) {
        s = a(r, s || {});
        var p, h, g, b = f(n ? n.getAttribute("data-options") : null), m = parseInt(b.speed || s.speed, 10), v = b.easing || s.easing, y = parseInt(b.offset || s.offset, 10), I = b.updateURL || s.updateURL, O = t.querySelector("[data-scroll-header]"), Q = null === O ? 0 : O.offsetHeight + O.offsetTop, A = e.pageYOffset, E = u(t.querySelector(l), Q, y), H = E - A, S = i(), k = 0;
        n && "A" === n.tagName && d && d.preventDefault(), c(l, I);
        var w = function (t, r, a) {
            var o = e.pageYOffset;
            (t == r || o == r || e.innerHeight + o >= S) && (clearInterval(a), s.callbackAfter(n, l))
        }, L = function () {
            k += 16, h = k / m, h = h > 1 ? 1 : h, g = A + H * o(v, h), e.scrollTo(0, Math.floor(g)), w(g, E, p)
        }, q = function () {
            s.callbackBefore(n, l), p = setInterval(L, 16)
        };
        0 === e.pageYOffset && e.scrollTo(0, 0), q()
    }, s = function (n) {
        if ("querySelector"in t && "addEventListener"in e && Array.prototype.forEach) {
            n = a(r, n || {});
            var o = t.querySelectorAll("[data-scroll]");
            Array.prototype.forEach.call(o, function (e) {
                e.addEventListener("click", l.bind(null, e, e.getAttribute("href"), n), !1)
            })
        }
    };
    return {init: s, animateScroll: l}
}(window, document);


/* =============================================================

 Stellar.js v0.6.2 ( ------ Parallax Effect ------ )

 * ============================================================= */

!function (a, b, c, d) {
    function e(b, c) {
        this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
    }

    var f = "stellar", g = {
        scrollProperty: "scroll",
        positionProperty: "position",
        horizontalScrolling: !0,
        verticalScrolling: !0,
        horizontalOffset: 0,
        verticalOffset: 0,
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        hideDistantElements: !0,
        hideElement: function (a) {
            a.hide()
        },
        showElement: function (a) {
            a.show()
        }
    }, h = {
        scroll: {
            getLeft: function (a) {
                return a.scrollLeft()
            }, setLeft: function (a, b) {
                a.scrollLeft(b)
            }, getTop: function (a) {
                return a.scrollTop()
            }, setTop: function (a, b) {
                a.scrollTop(b)
            }
        }, position: {
            getLeft: function (a) {
                return -1 * parseInt(a.css("left"), 10)
            }, getTop: function (a) {
                return -1 * parseInt(a.css("top"), 10)
            }
        }, margin: {
            getLeft: function (a) {
                return -1 * parseInt(a.css("margin-left"), 10)
            }, getTop: function (a) {
                return -1 * parseInt(a.css("margin-top"), 10)
            }
        }, transform: {
            getLeft: function (a) {
                var b = getComputedStyle(a[0])[k];
                return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
            }, getTop: function (a) {
                var b = getComputedStyle(a[0])[k];
                return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
            }
        }
    }, i = {
        position: {
            setLeft: function (a, b) {
                a.css("left", b)
            }, setTop: function (a, b) {
                a.css("top", b)
            }
        }, transform: {
            setPosition: function (a, b, c, d, e) {
                a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
            }
        }
    }, j = function () {
        var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/, d = a("script")[0].style, e = "";
        for (b in d)if (c.test(b)) {
            e = b.match(c)[0];
            break
        }
        return "WebkitOpacity"in d && (e = "Webkit"), "KhtmlOpacity"in d && (e = "Khtml"), function (a) {
            return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
        }
    }(), k = j("transform"), l = a("<div />", {style: "background:#fff"}).css("background-position-x") !== d, m = l ? function (a, b, c) {
        a.css({"background-position-x": b, "background-position-y": c})
    } : function (a, b, c) {
        a.css("background-position", b + " " + c)
    }, n = l ? function (a) {
        return [a.css("background-position-x"), a.css("background-position-y")]
    } : function (a) {
        return a.css("background-position").split(" ")
    }, o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
            setTimeout(a, 1e3 / 60)
        };
    e.prototype = {
        init: function () {
            this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({firstLoad: !0}), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
        }, _defineElements: function () {
            this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
        }, _defineGetters: function () {
            var a = this, b = h[a.options.scrollProperty];
            this._getScrollLeft = function () {
                return b.getLeft(a.$scrollElement)
            }, this._getScrollTop = function () {
                return b.getTop(a.$scrollElement)
            }
        }, _defineSetters: function () {
            var b = this, c = h[b.options.scrollProperty], d = i[b.options.positionProperty], e = c.setLeft, f = c.setTop;
            this._setScrollLeft = "function" == typeof e ? function (a) {
                e(b.$scrollElement, a)
            } : a.noop, this._setScrollTop = "function" == typeof f ? function (a) {
                f(b.$scrollElement, a)
            } : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) {
                    b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
                }
        }, _handleWindowLoadAndResize: function () {
            var c = this, d = a(b);
            c.options.responsive && d.bind("load." + this.name, function () {
                c.refresh()
            }), d.bind("resize." + this.name, function () {
                c._detectViewport(), c.options.responsive && c.refresh()
            })
        }, refresh: function (c) {
            var d = this, e = d._getScrollLeft(), f = d._getScrollTop();
            c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () {
                var a = d._getScrollLeft(), b = d._getScrollTop();
                d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
            }), this._setScrollLeft(e), this._setScrollTop(f)
        }, _detectViewport: function () {
            var a = this.$viewportElement.offset(), b = null !== a && a !== d;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
        }, _findParticles: function () {
            {
                var b = this;
                this._getScrollLeft(), this._getScrollTop()
            }
            if (this.particles !== d)for (var c = this.particles.length - 1; c >= 0; c--)this.particles[c].$element.data("stellar-elementIsActive", d);
            this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
                var c, e, f, g, h, i, j, k, l, m = a(this), n = 0, o = 0, p = 0, q = 0;
                if (m.data("stellar-elementIsActive")) {
                    if (m.data("stellar-elementIsActive") !== this)return
                } else m.data("stellar-elementIsActive", this);
                b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function () {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
                }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
                    $element: m,
                    $offsetParent: j,
                    isFixed: "fixed" === m.css("position"),
                    horizontalOffset: c,
                    verticalOffset: e,
                    startingPositionLeft: f,
                    startingPositionTop: g,
                    startingOffsetLeft: k,
                    startingOffsetTop: l,
                    parentOffsetLeft: n,
                    parentOffsetTop: o,
                    stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
                    width: m.outerWidth(!0),
                    height: m.outerHeight(!0),
                    isHidden: !1
                })
            })
        }, _findBackgrounds: function () {
            var b, c = this, e = this._getScrollLeft(), f = this._getScrollTop();
            this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () {
                var b, g, h, i, j, k, l, o = a(this), p = n(o), q = 0, r = 0, s = 0, t = 0;
                if (o.data("stellar-backgroundIsActive")) {
                    if (o.data("stellar-backgroundIsActive") !== this)return
                } else o.data("stellar-backgroundIsActive", this);
                o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () {
                    var b = a(this);
                    return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
                }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
                    $element: o,
                    $offsetParent: l,
                    isFixed: "fixed" === o.css("background-attachment"),
                    horizontalOffset: b,
                    verticalOffset: g,
                    startingValueLeft: p[0],
                    startingValueTop: p[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
                    startingPositionLeft: o.position().left,
                    startingPositionTop: o.position().top,
                    startingOffsetLeft: j,
                    startingOffsetTop: k,
                    parentOffsetLeft: q,
                    parentOffsetTop: r,
                    stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
                })
            }))
        }, _reset: function () {
            var a, b, c, d, e;
            for (e = this.particles.length - 1; e >= 0; e--)a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (e = this.backgrounds.length - 1; e >= 0; e--)d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
        }, destroy: function () {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
        }, _setOffsets: function () {
            var c = this, d = a(b);
            d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () {
                c.horizontalOffset = c.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () {
                c.verticalOffset = c.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        }, _repositionElements: function () {
            var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(), l = this._getScrollTop(), n = !0, o = !0;
            if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
                for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--)a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
                for (j = this.backgrounds.length - 1; j >= 0; j--)c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
            }
        }, _handleScrollEvent: function () {
            var a = this, b = !1, c = function () {
                a._repositionElements(), b = !1
            }, d = function () {
                b || (o(c), b = !0)
            };
            this.$scrollElement.bind("scroll." + this.name, d), d()
        }, _startAnimationLoop: function () {
            var a = this;
            this._animationLoop = function () {
                o(a._animationLoop), a._repositionElements()
            }, this._animationLoop()
        }
    }, a.fn[f] = function (b) {
        var c = arguments;
        return b === d || "object" == typeof b ? this.each(function () {
            a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
        }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () {
            var d = a.data(this, "plugin_" + f);
            d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
        }) : void 0
    }, a[f] = function () {
        var c = a(b);
        return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
    }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);


/* =============================================================

 jQuery Waypoints - v2.0.5 

 * ============================================================= */

(function () {
    var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t)return e
            }
            return -1
        }, e = [].slice;
    (function (t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function (n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(window, function (n, r) {
        var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
        i = n(r);
        a = t.call(r, "ontouchstart") >= 0;
        s = {horizontal: {}, vertical: {}};
        f = 1;
        c = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function () {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {x: t.scrollLeft(), y: t.scrollTop()};
                this.waypoints = {horizontal: {}, vertical: {}};
                this.element[u] = this.id;
                c[this.id] = this;
                t.bind(y, function () {
                    var t;
                    if (!(e.didScroll || a)) {
                        e.didScroll = true;
                        t = function () {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function () {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function () {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }

            t.prototype.doScroll = function () {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function (t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {x: t.horizontal.newScroll, y: t.vertical.newScroll}
            };
            t.prototype.refresh = function () {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete c[this.id]
                }
            };
            return t
        }();
        l = function () {
            function t(t, e, r) {
                var i, o;
                if (r.offset === "bottom-in-view") {
                    r.offset = function () {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = this.element[w]) != null ? o : [];
                i.push(this.id);
                this.element[w] = i
            }

            t.prototype.trigger = function (t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function () {
                return this.enabled = false
            };
            t.prototype.enable = function () {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function () {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function (t) {
                var e, r;
                r = t[w];
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function (t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function (t, e) {
                var r;
                e = n.extend({}, n.fn[g].defaults, e);
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function () {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = c[i[0][u]];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            }, disable: function () {
                return d._invoke.call(this, "disable")
            }, enable: function () {
                return d._invoke.call(this, "enable")
            }, destroy: function () {
                return d._invoke.call(this, "destroy")
            }, prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            }, next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            }, _traverse: function (t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function () {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            }, _invoke: function (t) {
                this.each(function () {
                    var e;
                    e = l.getWaypointsByElement(this);
                    return n.each(e, function (e, n) {
                        n[t]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function () {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function () {
                return n.each(c, function (t, e) {
                    return e.refresh()
                })
            }, viewportHeight: function () {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            }, aggregate: function (t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {horizontal: [], vertical: []};
                n.each(r, function (t, i) {
                    n.each(e[t], function (t, e) {
                        return i.push(e)
                    });
                    i.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function (t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            }, above: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y
                })
            }, below: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y
                })
            }, left: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x
                })
            }, right: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x
                })
            }, enable: function () {
                return h._invoke("enable")
            }, disable: function () {
                return h._invoke("disable")
            }, destroy: function () {
                return h._invoke("destroy")
            }, extendFn: function (t, e) {
                return d[t] = e
            }, _invoke: function (t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function (e, n) {
                    n[t]();
                    return true
                })
            }, _filter: function (t, e, r) {
                var i, o;
                i = c[n(t)[0][u]];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function (t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function (t) {
                    return t.element
                })
            }
        };
        n[m] = function () {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {resizeThrottle: 100, scrollThrottle: 30};
        return i.on("load.waypoints", function () {
            return n[m]("refresh")
        })
    })
}).call(this);


/* =============================================================
 jquery.Sticky.js
 * ============================================================= */

(function ($, k, m, i, d) {
    var e = $(i), g = "waypoint.reached", b = function (o, n) {
        o.element.trigger(g, n);
        if (o.options.triggerOnce) {
            o.element[k]("destroy")
        }
    }, h = function (p, o) {
        var n = o.waypoints.length - 1;
        while (n >= 0 && o.waypoints[n].element[0] !== p[0]) {
            n -= 1
        }
        return n
    }, f = [], l = function (n) {
        $.extend(this, {
            element: $(n),
            oldScroll: 0,
            waypoints: [],
            didScroll: false,
            didResize: false,
            doScroll: $.proxy(function () {
                var q = this.element.scrollTop(), p = q > this.oldScroll, s = this, r = $.grep(this.waypoints, function (u, t) {
                    return p ? (u.offset > s.oldScroll && u.offset <= q) : (u.offset <= s.oldScroll && u.offset > q)
                }), o = r.length;
                if (!this.oldScroll || !q) {
                    $[m]("refresh")
                }
                this.oldScroll = q;
                if (!o) {
                    return
                }
                if (!p) {
                    r.reverse()
                }
                $.each(r, function (u, t) {
                    if (t.options.continuous || u === o - 1) {
                        b(t, [p ? "down" : "up"])
                    }
                })
            }, this)
        });
        $(n).scroll($.proxy(function () {
            if (!this.didScroll) {
                this.didScroll = true;
                i.setTimeout($.proxy(function () {
                    this.doScroll();
                    this.didScroll = false
                }, this), $[m].settings.scrollThrottle)
            }
        }, this)).resize($.proxy(function () {
            if (!this.didResize) {
                this.didResize = true;
                i.setTimeout($.proxy(function () {
                    $[m]("refresh");
                    this.didResize = false
                }, this), $[m].settings.resizeThrottle)
            }
        }, this));
        e.load($.proxy(function () {
            this.doScroll()
        }, this))
    }, j = function (n) {
        var o = null;
        $.each(f, function (p, q) {
            if (q.element[0] === n) {
                o = q;
                return false
            }
        });
        return o
    }, c = {
        init: function (o, n) {
            this.each(function () {
                var u = $.fn[k].defaults.context, q, t = $(this);
                if (n && n.context) {
                    u = n.context
                }
                if (!$.isWindow(u)) {
                    u = t.closest(u)[0]
                }
                q = j(u);
                if (!q) {
                    q = new l(u);
                    f.push(q)
                }
                var p = h(t, q), s = p < 0 ? $.fn[k].defaults : q.waypoints[p].options, r = $.extend({}, s, n);
                r.offset = r.offset === "bottom-in-view" ? function () {
                    var v = $.isWindow(u) ? $[m]("viewportHeight") : $(u).height();
                    return v - $(this).outerHeight()
                } : r.offset;
                if (p < 0) {
                    q.waypoints.push({element: t, offset: null, options: r})
                } else {
                    q.waypoints[p].options = r
                }
                if (o) {
                    t.bind(g, o)
                }
                if (n && n.handler) {
                    t.bind(g, n.handler)
                }
            });
            $[m]("refresh");
            return this
        }, remove: function () {
            return this.each(function (o, p) {
                var n = $(p);
                $.each(f, function (r, s) {
                    var q = h(n, s);
                    if (q >= 0) {
                        s.waypoints.splice(q, 1)
                    }
                })
            })
        }, destroy: function () {
            return this.unbind(g)[k]("remove")
        }
    }, a = {
        refresh: function () {
            $.each(f, function (r, s) {
                var q = $.isWindow(s.element[0]), n = q ? 0 : s.element.offset().top, p = q ? $[m]("viewportHeight") : s.element.height(), o = q ? 0 : s.element.scrollTop();
                $.each(s.waypoints, function (u, x) {
                    if (!x) {
                        return
                    }
                    var t = x.options.offset, w = x.offset;
                    if (typeof x.options.offset === "function") {
                        t = x.options.offset.apply(x.element)
                    } else {
                        if (typeof x.options.offset === "string") {
                            var v = parseFloat(x.options.offset);
                            t = x.options.offset.indexOf("%") ? Math.ceil(p * (v / 100)) : v
                        }
                    }
                    x.offset = x.element.offset().top - n + o - t;
                    if (x.options.onlyOnScroll) {
                        return
                    }
                    if (w !== null && s.oldScroll > w && s.oldScroll <= x.offset) {
                        b(x, ["up"])
                    } else {
                        if (w !== null && s.oldScroll < w && s.oldScroll >= x.offset) {
                            b(x, ["down"])
                        } else {
                            if (!w && o > x.offset) {
                                b(x, ["down"])
                            }
                        }
                    }
                });
                s.waypoints.sort(function (u, t) {
                    return u.offset - t.offset
                })
            })
        }, viewportHeight: function () {
            return (i.innerHeight ? i.innerHeight : e.height())
        }, aggregate: function () {
            var n = $();
            $.each(f, function (o, p) {
                $.each(p.waypoints, function (q, r) {
                    n = n.add(r.element)
                })
            });
            return n
        }
    };
    $.fn[k] = function (n) {
        if (c[n]) {
            return c[n].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof n === "function" || !n) {
                return c.init.apply(this, arguments)
            } else {
                if (typeof n === "object") {
                    return c.init.apply(this, [null, n])
                } else {
                    $.error("Method " + n + " does not exist on jQuery " + k)
                }
            }
        }
    };
    $.fn[k].defaults = {continuous: true, offset: 0, triggerOnce: false, context: i};
    $[m] = function (n) {
        if (a[n]) {
            return a[n].apply(this)
        } else {
            return a.aggregate()
        }
    };
    $[m].settings = {resizeThrottle: 200, scrollThrottle: 100};
    e.load(function () {
        $[m]("refresh")
    })
})(jQuery, "waypoint", "waypoints", this);


$(function () {
    // Do our DOM lookups beforehand
    var nav_container = $("#header");
    var nav = $(".header-inner, #owl-lateral-nav");
    var top_spacing = 0;
    var waypoint_offset = 50;
    nav_container.waypoint({
        handler: function (event, direction) {
            if (direction == 'down') {
                nav_container.css({
                    'height': nav.outerHeight()
                });
                nav.stop().addClass("sticky").css("top", -nav.outerHeight()).animate({
                    "top": top_spacing
                });
            }
            else {
                nav_container.css({
                    'height': 'auto'
                });
                nav.stop().removeClass("sticky").css("top", nav.outerHeight() + waypoint_offset).animate({
                    "top": ""
                });
            }
        },
        offset: function () {
            return -nav.outerHeight() - waypoint_offset;
        }
    });

});

/* =============================================================
 jquery.elastislide.js
 * ============================================================= */

/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 */

(function ($) {
    $.fn.touchwipe = function (settings) {
        var config = {
            min_move_x: 20, min_move_y: 20, wipeLeft: function () {
            }, wipeRight: function () {
            }, wipeUp: function () {
            }, wipeDown: function () {
            }, preventDefaultEvents: true
        };
        if (settings)$.extend(config, settings);
        this.each(function () {
            var startX;
            var startY;
            var isMoving = false;

            function cancelTouch() {
                this.removeEventListener('touchmove', onTouchMove);
                startX = null;
                isMoving = false
            }

            function onTouchMove(e) {
                if (config.preventDefaultEvents) {
                    e.preventDefault()
                }
                if (isMoving) {
                    var x = e.touches[0].pageX;
                    var y = e.touches[0].pageY;
                    var dx = startX - x;
                    var dy = startY - y;
                    if (Math.abs(dx) >= config.min_move_x) {
                        cancelTouch();
                        if (dx > 0) {
                            config.wipeLeft()
                        } else {
                            config.wipeRight()
                        }
                    } else if (Math.abs(dy) >= config.min_move_y) {
                        cancelTouch();
                        if (dy > 0) {
                            config.wipeDown()
                        } else {
                            config.wipeUp()
                        }
                    }
                }
            }

            function onTouchStart(e) {
                if (e.touches.length == 1) {
                    startX = e.touches[0].pageX;
                    startY = e.touches[0].pageY;
                    isMoving = true;
                    this.addEventListener('touchmove', onTouchMove, false)
                }
            }

            if ('ontouchstart'in document.documentElement) {
                this.addEventListener('touchstart', onTouchStart, false)
            }
        });
        return this
    }
})(jQuery);


/* =============================================================
 jquery.fancybox.js version: 2.1.5 (Fri, 14 Jun 2013)
 * ============================================================= */


!function (e, t, n, i) {
    "use strict";
    var o = n("html"), a = n(e), r = n(t), s = n.fancybox = function () {
        s.open.apply(this, arguments)
    }, l = navigator.userAgent.match(/msie/i), c = null, d = t.createTouch !== i, p = function (e) {
        return e && e.hasOwnProperty && e instanceof n
    }, h = function (e) {
        return e && "string" === n.type(e)
    }, f = function (e) {
        return h(e) && e.indexOf("%") > 0
    }, u = function (e) {
        return e && !(e.style.overflow && "hidden" === e.style.overflow) && (e.clientWidth && e.scrollWidth > e.clientWidth || e.clientHeight && e.scrollHeight > e.clientHeight)
    }, g = function (e, t) {
        var n = parseInt(e, 10) || 0;
        return t && f(e) && (n = s.getViewport()[t] / 100 * n), Math.ceil(n)
    }, m = function (e, t) {
        return g(e, t) + "px"
    };
    n.extend(s, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !d,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: .5,
            leftRatio: .5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3e3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: n.noop,
            beforeLoad: n.noop,
            afterLoad: n.noop,
            beforeShow: n.noop,
            afterShow: n.noop,
            beforeChange: n.noop,
            beforeClose: n.noop,
            afterClose: n.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (e, t) {
            return e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0)) ? (n.isArray(e) || (e = p(e) ? n(e).get() : [e]), n.each(e, function (o, a) {
                var r, l, c, d, f, u, g, m = {};
                "object" === n.type(a) && (a.nodeType && (a = n(a)), p(a) ? (m = {
                    href: a.data("fancybox-href") || a.attr("href"),
                    title: a.data("fancybox-title") || a.attr("title"),
                    isDom: !0,
                    element: a
                }, n.metadata && n.extend(!0, m, a.metadata())) : m = a), r = t.href || m.href || (h(a) ? a : null), l = t.title !== i ? t.title : m.title || "", c = t.content || m.content, d = c ? "html" : t.type || m.type, !d && m.isDom && (d = a.data("fancybox-type"), d || (f = a.prop("class").match(/fancybox\.(\w+)/), d = f ? f[1] : null)), h(r) && (d || (s.isImage(r) ? d = "image" : s.isSWF(r) ? d = "swf" : "#" === r.charAt(0) ? d = "inline" : h(a) && (d = "html", c = a)), "ajax" === d && (u = r.split(/\s+/, 2), r = u.shift(), g = u.shift())), c || ("inline" === d ? r ? c = n(h(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : m.isDom && (c = a) : "html" === d ? c = r : d || r || !m.isDom || (d = "inline", c = a)), n.extend(m, {
                    href: r,
                    type: d,
                    content: c,
                    title: l,
                    selector: g
                }), e[o] = m
            }), s.opts = n.extend(!0, {}, s.defaults, t), t.keys !== i && (s.opts.keys = t.keys ? n.extend({}, s.defaults.keys, t.keys) : !1), s.group = e, s._start(s.opts.index)) : void 0
        },
        cancel: function () {
            var e = s.coming;
            e && !1 !== s.trigger("onCancel") && (s.hideLoading(), s.ajaxLoad && s.ajaxLoad.abort(), s.ajaxLoad = null, s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), s.coming = null, s.current || s._afterZoomOut(e))
        },
        close: function (e) {
            s.cancel(), !1 !== s.trigger("beforeClose") && (s.unbindEvents(), s.isActive && (s.isOpen && e !== !0 ? (s.isOpen = s.isOpened = !1, s.isClosing = !0, n(".fancybox-item, .fancybox-nav").remove(), s.wrap.stop(!0, !0).removeClass("fancybox-opened"), s.transitions[s.current.closeMethod]()) : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(), s._afterZoomOut())))
        },
        play: function (e) {
            var t = function () {
                clearTimeout(s.player.timer)
            }, n = function () {
                t(), s.current && s.player.isActive && (s.player.timer = setTimeout(s.next, s.current.playSpeed))
            }, i = function () {
                t(), r.unbind(".player"), s.player.isActive = !1, s.trigger("onPlayEnd")
            }, o = function () {
                s.current && (s.current.loop || s.current.index < s.group.length - 1) && (s.player.isActive = !0, r.bind({
                    "onCancel.player beforeClose.player": i,
                    "onUpdate.player": n,
                    "beforeLoad.player": t
                }), n(), s.trigger("onPlayStart"))
            };
            e === !0 || !s.player.isActive && e !== !1 ? o() : i()
        },
        next: function (e) {
            var t = s.current;
            t && (h(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"))
        },
        prev: function (e) {
            var t = s.current;
            t && (h(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"))
        },
        jumpto: function (e, t, n) {
            var o = s.current;
            o && (e = g(e), s.direction = t || o.direction[e >= o.index ? "next" : "prev"], s.router = n || "jumpto", o.loop && (0 > e && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== i && (s.cancel(), s._start(e)))
        },
        reposition: function (e, t) {
            var i, o = s.current, a = o ? o.wrap : null;
            a && (i = s._getPosition(t), e && "scroll" === e.type ? (delete i.position, a.stop(!0, !0).animate(i, 200)) : (a.css(i), o.pos = n.extend({}, o.dim, i)))
        },
        update: function (e) {
            var t = e && e.type, n = !t || "orientationchange" === t;
            n && (clearTimeout(c), c = null), s.isOpen && !c && (c = setTimeout(function () {
                var i = s.current;
                i && !s.isClosing && (s.wrap.removeClass("fancybox-tmp"), (n || "load" === t || "resize" === t && i.autoResize) && s._setDimension(), "scroll" === t && i.canShrink || s.reposition(e), s.trigger("onUpdate"), c = null)
            }, n && !d ? 0 : 300))
        },
        toggle: function (e) {
            s.isOpen && (s.current.fitToView = "boolean" === n.type(e) ? e : !s.current.fitToView, d && (s.wrap.removeAttr("style").addClass("fancybox-tmp"), s.trigger("onUpdate")), s.update())
        },
        hideLoading: function () {
            r.unbind(".loading"), n("#fancybox-loading").remove()
        },
        showLoading: function () {
            var e, t;
            s.hideLoading(), e = n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"), r.bind("keydown.loading", function (e) {
                27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel())
            }), s.defaults.fixed || (t = s.getViewport(), e.css({
                position: "absolute",
                top: .5 * t.h + t.y,
                left: .5 * t.w + t.x
            }))
        },
        getViewport: function () {
            var t = s.current && s.current.locked || !1, n = {x: a.scrollLeft(), y: a.scrollTop()};
            return t ? (n.w = t[0].clientWidth, n.h = t[0].clientHeight) : (n.w = d && e.innerWidth ? e.innerWidth : a.width(), n.h = d && e.innerHeight ? e.innerHeight : a.height()), n
        },
        unbindEvents: function () {
            s.wrap && p(s.wrap) && s.wrap.unbind(".fb"), r.unbind(".fb"), a.unbind(".fb")
        },
        bindEvents: function () {
            var e, t = s.current;
            t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), s.update), e = t.keys, e && r.bind("keydown.fb", function (o) {
                var a = o.which || o.keyCode, r = o.target || o.srcElement;
                return 27 === a && s.coming ? !1 : void(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || r && (r.type || n(r).is("[contenteditable]")) || n.each(e, function (e, r) {
                    return t.group.length > 1 && r[a] !== i ? (s[e](r[a]), o.preventDefault(), !1) : n.inArray(a, r) > -1 ? (s[e](), o.preventDefault(), !1) : void 0
                }))
            }), n.fn.mousewheel && t.mouseWheel && s.wrap.bind("mousewheel.fb", function (e, i, o, a) {
                for (var r = e.target || null, l = n(r), c = !1; l.length && !(c || l.is(".fancybox-skin") || l.is(".fancybox-wrap"));)c = u(l[0]), l = n(l).parent();
                0 === i || c || s.group.length > 1 && !t.canShrink && (a > 0 || o > 0 ? s.prev(a > 0 ? "down" : "left") : (0 > a || 0 > o) && s.next(0 > a ? "up" : "right"), e.preventDefault())
            }))
        },
        trigger: function (e, t) {
            var i, o = t || s.coming || s.current;
            if (o) {
                if (n.isFunction(o[e]) && (i = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), i === !1)return !1;
                o.helpers && n.each(o.helpers, function (t, i) {
                    i && s.helpers[t] && n.isFunction(s.helpers[t][e]) && s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, i), o)
                }), r.trigger(e)
            }
        },
        isImage: function (e) {
            return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (e) {
            return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (e) {
            var t, i, o, a, r, l = {};
            if (e = g(e), t = s.group[e] || null, !t)return !1;
            if (l = n.extend(!0, {}, s.opts, t), a = l.margin, r = l.padding, "number" === n.type(a) && (l.margin = [a, a, a, a]), "number" === n.type(r) && (l.padding = [r, r, r, r]), l.modal && n.extend(!0, l, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {overlay: {closeClick: !1}}
                }), l.autoSize && (l.autoWidth = l.autoHeight = !0), "auto" === l.width && (l.autoWidth = !0), "auto" === l.height && (l.autoHeight = !0), l.group = s.group, l.index = e, s.coming = l, !1 === s.trigger("beforeLoad"))return void(s.coming = null);
            if (o = l.type, i = l.href, !o)return s.coming = null, s.current && s.router && "jumpto" !== s.router ? (s.current.index = e, s[s.router](s.direction)) : !1;
            if (s.isActive = !0, ("image" === o || "swf" === o) && (l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"), "image" === o && (l.aspectRatio = !0), "iframe" === o && d && (l.scrolling = "scroll"), l.wrap = n(l.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body"), n.extend(l, {
                    skin: n(".fancybox-skin", l.wrap),
                    outer: n(".fancybox-outer", l.wrap),
                    inner: n(".fancybox-inner", l.wrap)
                }), n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
                    l.skin.css("padding" + t, m(l.padding[e]))
                }), s.trigger("onReady"), "inline" === o || "html" === o) {
                if (!l.content || !l.content.length)return s._error("content")
            } else if (!i)return s._error("href");
            "image" === o ? s._loadImage() : "ajax" === o ? s._loadAjax() : "iframe" === o ? s._loadIframe() : s._afterLoad()
        },
        _error: function (e) {
            n.extend(s.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: e,
                content: s.coming.tpl.error
            }), s._afterLoad()
        },
        _loadImage: function () {
            var e = s.imgPreload = new Image;
            e.onload = function () {
                this.onload = this.onerror = null, s.coming.width = this.width / s.opts.pixelRatio, s.coming.height = this.height / s.opts.pixelRatio, s._afterLoad()
            }, e.onerror = function () {
                this.onload = this.onerror = null, s._error("image")
            }, e.src = s.coming.href, e.complete !== !0 && s.showLoading()
        },
        _loadAjax: function () {
            var e = s.coming;
            s.showLoading(), s.ajaxLoad = n.ajax(n.extend({}, e.ajax, {
                url: e.href, error: function (e, t) {
                    s.coming && "abort" !== t ? s._error("ajax", e) : s.hideLoading()
                }, success: function (t, n) {
                    "success" === n && (e.content = t, s._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var e = s.coming, t = n(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
            n(e.wrap).bind("onReset", function () {
                try {
                    n(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (e) {
                }
            }), e.iframe.preload && (s.showLoading(), t.one("load", function () {
                n(this).data("ready", 1), d || n(this).bind("load.fb", s.update), n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), s._afterLoad()
            })), e.content = t.appendTo(e.inner), e.iframe.preload || s._afterLoad()
        },
        _preloadImages: function () {
            var e, t, n = s.group, i = s.current, o = n.length, a = i.preload ? Math.min(i.preload, o - 1) : 0;
            for (t = 1; a >= t; t += 1)e = n[(i.index + t) % o], "image" === e.type && e.href && ((new Image).src = e.href)
        },
        _afterLoad: function () {
            var e, t, i, o, a, r, l = s.coming, c = s.current, d = "fancybox-placeholder";
            if (s.hideLoading(), l && s.isActive !== !1) {
                if (!1 === s.trigger("afterLoad", l, c))return l.wrap.stop(!0).trigger("onReset").remove(), void(s.coming = null);
                switch (c && (s.trigger("beforeChange", c), c.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), s.unbindEvents(), e = l, t = l.content, i = l.type, o = l.scrolling, n.extend(s, {
                    wrap: e.wrap,
                    skin: e.skin,
                    outer: e.outer,
                    inner: e.inner,
                    current: e,
                    previous: c
                }), a = e.href, i) {
                    case"inline":
                    case"ajax":
                    case"html":
                        e.selector ? t = n("<div>").html(t).find(e.selector) : p(t) && (t.data(d) || t.data(d, n('<div class="' + d + '"></div>').insertAfter(t).hide()), t = t.show().detach(), e.wrap.bind("onReset", function () {
                            n(this).find(t).length && t.hide().replaceAll(t.data(d)).data(d, !1)
                        }));
                        break;
                    case"image":
                        t = e.tpl.image.replace("{href}", a);
                        break;
                    case"swf":
                        t = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>', r = "", n.each(e.swf, function (e, n) {
                            t += '<param name="' + e + '" value="' + n + '"></param>', r += " " + e + '="' + n + '"'
                        }), t += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + r + "></embed></object>"
                }
                p(t) && t.parent().is(e.inner) || e.inner.append(t), s.trigger("beforeShow"), e.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o), s._setDimension(), s.reposition(), s.isOpen = !1, s.coming = null, s.bindEvents(), s.isOpened ? c.prevMethod && s.transitions[c.prevMethod]() : n(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), s.transitions[s.isOpened ? e.nextMethod : e.openMethod](), s._preloadImages()
            }
        },
        _setDimension: function () {
            var e, t, i, o, a, r, l, c, d, p, h, u, y, x, v, w = s.getViewport(), b = 0, k = !1, C = !1, O = s.wrap, W = s.skin, _ = s.inner, S = s.current, T = S.width, L = S.height, E = S.minWidth, j = S.minHeight, R = S.maxWidth, P = S.maxHeight, H = S.scrolling, M = S.scrollOutside ? S.scrollbarWidth : 0, A = S.margin, I = g(A[1] + A[3]), D = g(A[0] + A[2]);
            if (O.add(W).add(_).width("auto").height("auto").removeClass("fancybox-tmp"), e = g(W.outerWidth(!0) - W.width()), t = g(W.outerHeight(!0) - W.height()), i = I + e, o = D + t, a = f(T) ? (w.w - i) * g(T) / 100 : T, r = f(L) ? (w.h - o) * g(L) / 100 : L, "iframe" === S.type) {
                if (x = S.content, S.autoHeight && 1 === x.data("ready"))try {
                    x[0].contentWindow.document.location && (_.width(a).height(9999), v = x.contents().find("body"), M && v.css("overflow-x", "hidden"), r = v.outerHeight(!0))
                } catch (z) {
                }
            } else(S.autoWidth || S.autoHeight) && (_.addClass("fancybox-tmp"), S.autoWidth || _.width(a), S.autoHeight || _.height(r), S.autoWidth && (a = _.width()), S.autoHeight && (r = _.height()), _.removeClass("fancybox-tmp"));
            if (T = g(a), L = g(r), d = a / r, E = g(f(E) ? g(E, "w") - i : E), R = g(f(R) ? g(R, "w") - i : R), j = g(f(j) ? g(j, "h") - o : j), P = g(f(P) ? g(P, "h") - o : P), l = R, c = P, S.fitToView && (R = Math.min(w.w - i, R), P = Math.min(w.h - o, P)), u = w.w - I, y = w.h - D, S.aspectRatio ? (T > R && (T = R, L = g(T / d)), L > P && (L = P, T = g(L * d)), E > T && (T = E, L = g(T / d)), j > L && (L = j, T = g(L * d))) : (T = Math.max(E, Math.min(T, R)), S.autoHeight && "iframe" !== S.type && (_.width(T), L = _.height()), L = Math.max(j, Math.min(L, P))), S.fitToView)if (_.width(T).height(L), O.width(T + e), p = O.width(), h = O.height(), S.aspectRatio)for (; (p > u || h > y) && T > E && L > j && !(b++ > 19);)L = Math.max(j, Math.min(P, L - 10)), T = g(L * d), E > T && (T = E, L = g(T / d)), T > R && (T = R, L = g(T / d)), _.width(T).height(L), O.width(T + e), p = O.width(), h = O.height(); else T = Math.max(E, Math.min(T, T - (p - u))), L = Math.max(j, Math.min(L, L - (h - y)));
            M && "auto" === H && r > L && u > T + e + M && (T += M), _.width(T).height(L), O.width(T + e), p = O.width(), h = O.height(), k = (p > u || h > y) && T > E && L > j, C = S.aspectRatio ? l > T && c > L && a > T && r > L : (l > T || c > L) && (a > T || r > L), n.extend(S, {
                dim: {
                    width: m(p),
                    height: m(h)
                },
                origWidth: a,
                origHeight: r,
                canShrink: k,
                canExpand: C,
                wPadding: e,
                hPadding: t,
                wrapSpace: h - W.outerHeight(!0),
                skinSpace: W.height() - L
            }), !x && S.autoHeight && L > j && P > L && !C && _.height("auto")
        },
        _getPosition: function (e) {
            var t = s.current, n = s.getViewport(), i = t.margin, o = s.wrap.width() + i[1] + i[3], a = s.wrap.height() + i[0] + i[2], r = {
                position: "absolute",
                top: i[0],
                left: i[3]
            };
            return t.autoCenter && t.fixed && !e && a <= n.h && o <= n.w ? r.position = "fixed" : t.locked || (r.top += n.y, r.left += n.x), r.top = m(Math.max(r.top, r.top + (n.h - a) * t.topRatio)), r.left = m(Math.max(r.left, r.left + (n.w - o) * t.leftRatio)), r
        },
        _afterZoomIn: function () {
            var e = s.current;
            e && (s.isOpen = s.isOpened = !0, s.wrap.css("overflow", "visible").addClass("fancybox-opened"), s.update(), (e.closeClick || e.nextClick && s.group.length > 1) && s.inner.css("cursor", "pointer").bind("click.fb", function (t) {
                n(t.target).is("a") || n(t.target).parent().is("a") || (t.preventDefault(), s[e.closeClick ? "close" : "next"]())
            }), e.closeBtn && n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb", function (e) {
                e.preventDefault(), s.close()
            }), e.arrows && s.group.length > 1 && ((e.loop || e.index > 0) && n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev), (e.loop || e.index < s.group.length - 1) && n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)), s.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? s.opts.autoPlay && !s.player.isActive && (s.opts.autoPlay = !1, s.play()) : s.play(!1))
        },
        _afterZoomOut: function (e) {
            e = e || s.current, n(".fancybox-wrap").trigger("onReset").remove(), n.extend(s, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            }), s.trigger("afterClose", e)
        }
    }), s.transitions = {
        getOrigPosition: function () {
            var e = s.current, t = e.element, n = e.orig, i = {}, o = 50, a = 50, r = e.hPadding, l = e.wPadding, c = s.getViewport();
            return !n && e.isDom && t.is(":visible") && (n = t.find("img:first"), n.length || (n = t)), p(n) ? (i = n.offset(), n.is("img") && (o = n.outerWidth(), a = n.outerHeight())) : (i.top = c.y + (c.h - a) * e.topRatio, i.left = c.x + (c.w - o) * e.leftRatio), ("fixed" === s.wrap.css("position") || e.locked) && (i.top -= c.y, i.left -= c.x), i = {
                top: m(i.top - r * e.topRatio),
                left: m(i.left - l * e.leftRatio),
                width: m(o + l),
                height: m(a + r)
            }
        }, step: function (e, t) {
            var n, i, o, a = t.prop, r = s.current, l = r.wrapSpace, c = r.skinSpace;
            ("width" === a || "height" === a) && (n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), s.isClosing && (n = 1 - n), i = "width" === a ? r.wPadding : r.hPadding, o = e - i, s.skin[a](g("width" === a ? o : o - l * n)), s.inner[a](g("width" === a ? o : o - l * n - c * n)))
        }, zoomIn: function () {
            var e = s.current, t = e.pos, i = e.openEffect, o = "elastic" === i, a = n.extend({opacity: 1}, t);
            delete a.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === i && (t.opacity = .1), s.wrap.css(t).animate(a, {
                duration: "none" === i ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: o ? this.step : null,
                complete: s._afterZoomIn
            })
        }, zoomOut: function () {
            var e = s.current, t = e.closeEffect, n = "elastic" === t, i = {opacity: .1};
            n && (i = this.getOrigPosition(), e.closeOpacity && (i.opacity = .1)), s.wrap.animate(i, {
                duration: "none" === t ? 0 : e.closeSpeed,
                easing: e.closeEasing,
                step: n ? this.step : null,
                complete: s._afterZoomOut
            })
        }, changeIn: function () {
            var e, t = s.current, n = t.nextEffect, i = t.pos, o = {opacity: 1}, a = s.direction, r = 200;
            i.opacity = .1, "elastic" === n && (e = "down" === a || "up" === a ? "top" : "left", "down" === a || "right" === a ? (i[e] = m(g(i[e]) - r), o[e] = "+=" + r + "px") : (i[e] = m(g(i[e]) + r), o[e] = "-=" + r + "px")), "none" === n ? s._afterZoomIn() : s.wrap.css(i).animate(o, {
                duration: t.nextSpeed,
                easing: t.nextEasing,
                complete: s._afterZoomIn
            })
        }, changeOut: function () {
            var e = s.previous, t = e.prevEffect, i = {opacity: .1}, o = s.direction, a = 200;
            "elastic" === t && (i["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=" + a + "px"), e.wrap.animate(i, {
                duration: "none" === t ? 0 : e.prevSpeed,
                easing: e.prevEasing,
                complete: function () {
                    n(this).trigger("onReset").remove()
                }
            })
        }
    }, s.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !d, fixed: !0},
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function (e) {
            e = n.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(s.coming ? s.coming.parent : e.parent), this.fixed = !1, e.fixed && s.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (e) {
            var t = this;
            e = n.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (a.bind("resize.overlay", n.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function (e) {
                return n(e.target).hasClass("fancybox-overlay") ? (s.isActive ? s.close() : t.close(), !1) : void 0
            }), this.overlay.css(e.css).show()
        },
        close: function () {
            var e, t;
            a.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (n(".fancybox-margin").removeClass("fancybox-margin"), e = a.scrollTop(), t = a.scrollLeft(), this.el.removeClass("fancybox-lock"), a.scrollTop(e).scrollLeft(t)), n(".fancybox-overlay").remove().hide(), n.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function () {
            var e, n = "100%";
            this.overlay.width(n).height("100%"), l ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), r.width() > e && (n = r.width())) : r.width() > a.width() && (n = r.width()), this.overlay.width(n).height(r.height())
        },
        onReady: function (e, t) {
            var i = this.overlay;
            n(".fancybox-overlay").stop(!0, !0), i || this.create(e), e.locked && this.fixed && t.fixed && (i || (this.margin = r.height() > a.height() ? n("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), e.showEarly === !0 && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (e, t) {
            var i, o;
            t.locked && (this.margin !== !1 && (n("*").filter(function () {
                return "fixed" === n(this).css("position") && !n(this).hasClass("fancybox-overlay") && !n(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), i = a.scrollTop(), o = a.scrollLeft(), this.el.addClass("fancybox-lock"), a.scrollTop(i).scrollLeft(o)), this.open(e)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (e) {
            this.overlay && !s.coming && this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this))
        }
    }, s.helpers.title = {
        defaults: {type: "float", position: "bottom"}, beforeShow: function (e) {
            var t, i, o = s.current, a = o.title, r = e.type;
            if (n.isFunction(a) && (a = a.call(o.element, o)), h(a) && "" !== n.trim(a)) {
                switch (t = n('<div class="fancybox-title fancybox-title-' + r + '-wrap">' + a + "</div>"), r) {
                    case"inside":
                        i = s.skin;
                        break;
                    case"outside":
                        i = s.wrap;
                        break;
                    case"over":
                        i = s.inner;
                        break;
                    default:
                        i = s.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), s.current.margin[2] += Math.abs(g(t.css("margin-bottom")))
                }
                t["top" === e.position ? "prependTo" : "appendTo"](i)
            }
        }
    }, n.fn.fancybox = function (e) {
        var t, i = n(this), o = this.selector || "", a = function (a) {
            var r, l, c = n(this).blur(), d = t;
            a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group", l = c.attr(r), l || (r = "rel", l = c.get(0)[r]), l && "" !== l && "nofollow" !== l && (c = o.length ? n(o) : i, c = c.filter("[" + r + '="' + l + '"]'), d = c.index(this)), e.index = d, s.open(c, e) !== !1 && a.preventDefault())
        };
        return e = e || {}, t = e.index || 0, o && e.live !== !1 ? r.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : i.unbind("click.fb-start").bind("click.fb-start", a), this.filter("[data-fancybox-start=1]").trigger("click"), this
    }, r.ready(function () {
        var t, a;
        n.scrollbarWidth === i && (n.scrollbarWidth = function () {
            var e = n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), t = e.children(), i = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), i
        }), n.support.fixedPosition === i && (n.support.fixedPosition = function () {
            var e = n('<div style="position:fixed;top:20px;"></div>').appendTo("body"), t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
            return e.remove(), t
        }()), n.extend(s.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body")
        }), t = n(e).width(), o.addClass("fancybox-lock-test"), a = n(e).width(), o.removeClass("fancybox-lock-test"), n("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head")
    }), jQuery(t).ready(function (e) {
        e(".fancybox").on("click", function () {
            return e.fancybox({helpers: {overlay: {locked: !1}}, href: this.href, type: e(this).data("type")}), !1
        })
    })
}(window, document, jQuery);


/*=========================================================================
 Tabs
 ========================================================================= */

!function (s) {
    function t(t, e) {
        this.element = t, this.$elem = s(this.element), this.options = s.extend({}, a, e), this._defaults = a, this._name = i, this.init()
    }

    var i = "tabulous", a = {effect: "scale"};
    t.prototype = {
        init: function () {
            {
                var t = this.$elem.find("a"), i = this.$elem.find("li:first-child").find("a");
                this.$elem.find("li:last-child").after('<span class="tabulousclear"></span>')
            }
            "scale" == this.options.effect ? tab_content = this.$elem.find("div").not(":first").not(":nth-child(1)").addClass("hidescale") : "slideLeft" == this.options.effect ? tab_content = this.$elem.find("div").not(":first").not(":nth-child(1)").addClass("hideleft") : "scaleUp" == this.options.effect ? tab_content = this.$elem.find("div").not(":first").not(":nth-child(1)").addClass("hidescaleup") : "flip" == this.options.effect && (tab_content = this.$elem.find("div").not(":first").not(":nth-child(1)").addClass("hideflip"));
            var a = this.$elem.find(".tabs_container, .tabs_container_right"), e = a.find("div:first").height(), d = this.$elem.find("div:first").find("div");
            d.css({
                position: "absolute",
                top: "30px"
            }), a.css("height", e + "px"), i.addClass("tabulous_active"), t.bind("click", {myOptions: this.options}, function (i) {
                i.preventDefault();
                var e = i.data.myOptions, n = e.effect, l = s(this), h = l.parent().parent().parent(), o = l.attr("href");
                a.addClass("transition"), t.removeClass("tabulous_active"), l.addClass("tabulous_active"), thisdivwidth = h.find("div" + o).height(), "scale" == n ? (d.removeClass("showscale").addClass("make_transist").addClass("hidescale"), h.find("div" + o).addClass("make_transist").addClass("showscale")) : "slideLeft" == n ? (d.removeClass("showleft").addClass("make_transist").addClass("hideleft"), h.find("div" + o).addClass("make_transist").addClass("showleft")) : "scaleUp" == n ? (d.removeClass("showscaleup").addClass("make_transist").addClass("hidescaleup"), h.find("div" + o).addClass("make_transist").addClass("showscaleup")) : "flip" == n && (d.removeClass("showflip").addClass("make_transist").addClass("hideflip"), h.find("div" + o).addClass("make_transist").addClass("showflip")), a.css("height", thisdivwidth + "px")
            })
        }, yourOtherFunction: function () {
        }
    }, s.fn[i] = function (s) {
        return this.each(function () {
            new t(this, s)
        })
    }
}(jQuery, window, document);

$('#tabs, #tabs5, #tabs9, #tabs13').tabulous({
    effect: 'scale'
});
$('#tabs2, #tabs6, #tabs10, #tabs14').tabulous({
    effect: 'slideLeft'
});
$('#tabs3, #tabs7, #tabs11, #tabs15').tabulous({
    effect: 'scaleUp'
});
$('#tabs4, #tabs8, #tabs12, #tabs16').tabulous({
    effect: 'flip'
});
// Left Nav
$('ul.left-tabulus li a, ul.right-tabulus li a, ul.bottom-tabulus li a').on(function (e) {
    e.preventDefault(); // prevent the default action
    e.stopPropagation; // stop the click from bubbling
    $(this).closest('ul').find('.active').removeClass('active');
    $(this).parent().addClass('active');
});


/*=========================================================================
 flat shadow
 ========================================================================= */

$(window).ready(function () {
    $("[class*='flat']").hide(function () {
        $("[class*='flat']").addClass("icon-animated");
        $(this).fadeIn()
    })
});
!function (e) {
    function s(e, t) {
        e = e.replace("#", "");
        r = parseInt(e.substring(0, 2), 16);
        g = parseInt(e.substring(2, 4), 16);
        b = parseInt(e.substring(4, 6), 16);
        result = "rgba(" + r + "," + g + "," + b + "," + t / 100 + ")";
        return result
    }

    function o(e, t) {
        e = String(e).replace(/[^0-9a-f]/gi, "");
        if (e.length < 6) {
            e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]
        }
        t = t || 0;
        var n = "#", r, i;
        for (i = 0; i < 3; i++) {
            r = parseInt(e.substr(i * 2, 2), 16);
            r = Math.round(Math.min(Math.max(0, r + r * t), 255)).toString(16);
            n += ("00" + r).substr(r.length)
        }
        return n
    }

    var t = new Array("#1ABC9C", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#f1c40f", "#e67e22", "#e74c3c");
    var n = new Array("NE", "SE", "SW", "NW");
    var i = {fade: false, color: "random", boxShadow: false, angle: "random"};
    e.fn.flatshadow = function (r) {
        var u = e.extend({}, i, r);
        return this.each(function () {
            el = e(this);
            if (u.fade == true) {
                width = Math.round(el.outerWidth() / 3);
                height = Math.round(el.outerHeight() / 3)
            } else {
                width = Math.round(el.outerWidth());
                height = Math.round(el.outerHeight())
            }
            if (u.boxShadow != false) {
                var r = u.boxShadow
            }
            if (u.color != "random" && !el.attr("data-color")) {
                var i = u.color
            } else {
                var i = t[Math.floor(Math.random() * t.length)];
                if (el.attr("data-color")) {
                    var i = el.attr("data-color")
                }
            }
            if (u.angle != "random" && !el.attr("data-angle")) {
                var a = u.angle
            } else {
                var a = n[Math.floor(Math.random() * n.length)];
                if (el.attr("data-angle")) {
                    var a = el.attr("data-angle")
                }
            }
            var f = o(i, -.3);
            var l = "";
            if (u.boxShadow != false) {
                var c = ""
            } else {
                var c = "none"
            }
            switch (a) {
                case"N":
                    for (var h = 1; h <= height; h++) {
                        if (u.boxShadow != false)c += "0px " + h * 2 * -1 + "px 0px " + s(r, 50 - h / height * 100);
                        if (u.fade != false) {
                            var p = s(f, 100 - h / height * 100)
                        } else {
                            var p = f
                        }
                        l += "0px " + h * -1 + "px 0px " + p;
                        if (h != height) {
                            l += ", ";
                            c += ", "
                        }
                    }
                    break;
                case"NE":
                    for (var h = 1; h <= height; h++) {
                        if (u.boxShadow != false)c += h * 2 + "px " + h * 2 * -1 + "px 0px " + s(r, 50 - h / height * 100);
                        if (u.fade != false) {
                            var p = s(f, 100 - h / height * 100)
                        } else {
                            var p = f
                        }
                        l += h + "px " + h * -1 + "px 0px " + p;
                        if (h != height) {
                            l += ", ";
                            c += ", "
                        }
                    }
                    break;
                case"E":
                    for (var h = 1; h <= width; h++) {
                        if (u.boxShadow != false)c += h * 2 + "px " + "0px 0px " + s(r, 50 - h / width * 100);
                        if (u.fade != false) {
                            var p = s(f, 100 - h / height * 100)
                        } else {
                            var p = f
                        }
                        l += h + "px " + "0px 0px " + p;
                        if (h != width) {
                            l += ", ";
                            c += ", "
                        }
                    }
                    break;
                case"SE":
                    for (var h = 1; h <= height; h++) {
                        if (u.boxShadow != false)c += h * 2 + "px " + h * 2 + "px 0px " + s(r, 50 - h / height * 100);
                        if (u.fade != false) {
                            var p = s(f, 100 - h / height * 100)
                        } else {
                            var p = f
                        }
                        l += h + "px " + h + "px 0px " + p;
                        if (h != height) {
                            l += ", ";
                            c += ", "
                        }
                    }
                    break;
                case"S":
                    for (var h = 1; h <= height; h++) {
                        if (u.boxShadow != false)c += "0px " + h * 2 + "px 0px " + s(r, 50 - h / height * 100);
                        if (u.fade != false) {
                            var p = s(f, 100 - h / height * 100)
                        } else {
                            var p = f
                        }
                        l += "0px " + h + "px 0px " + p;
                        if (h != height) {
                            l += ", ";
                            c += ", "
                        }
                    }
                    break;
                case"SW":
                    for (var h = 1; h <= height; h++) {
                        if (u.boxShadow != false)c += h * 2 * -1 + "px " + h * 2 + "px 0px " + s(r, 50 - h / height * 100);
                        if (u.fade != false) {
                            var p = s(f, 100 - h / height * 100)
                        } else {
                            var p = f
                        }
                        l += h * -1 + "px " + h + "px 0px " + p;
                        if (h != height) {
                            l += ", ";
                            c += ", "
                        }
                    }
                    break;
                case"W":
                    for (var h = 1; h <= height; h++) {
                        if (u.boxShadow != false)c += h * 2 * -1 + "px " + "0px 0px " + s(r, 50 - h / height * 100);
                        if (u.fade != false) {
                            var p = s(f, 100 - h / height * 100)
                        } else {
                            var p = f
                        }
                        l += h * -1 + "px " + "0px 0px " + p;
                        if (h != height) {
                            l += ", ";
                            c += ", "
                        }
                    }
                    break;
                case"NW":
                    for (var h = 1; h <= height; h++) {
                        if (u.boxShadow != false)c += h * 2 * -1 + "px " + h * 2 * -1 + "px 0px " + s(r, 50 - h / height * 100);
                        if (u.fade != false) {
                            var p = s(f, 100 - h / height * 100)
                        } else {
                            var p = f
                        }
                        l += h * -1 + "px " + h * -1 + "px 0px " + p;
                        if (h != height) {
                            l += ", ";
                            c += ", "
                        }
                    }
                    break
            }
            el.css({background: i, color: o(i, 1), "text-shadow": l, "box-shadow": c})
        })
    }
}(window.jQuery);

$(document).ready(function () {
    RandHexVal = "#" + ("000000" + (Math.random() * 16777215 << 0).toString(16)).slice(-6);
    /* $("[class*='flat']").flatshadow({color:"#c0392b",angle:"SE",fade:false,boxShadow:"#222"}); */
    $(".flat-green").flatshadow({
        color: "#1abc9c",
        angle: "SE",
        fade: false,
        boxShadow: "#333"
    });
    $(".flat-green2").flatshadow({
        color: "#8cc152",
        angle: "SE",
        fade: false,
        boxShadow: "#333"
    });
    $(".flat-turq").flatshadow({
        color: "#3cc3cb",
        angle: "SE",
        fade: false,
        boxShadow: "#333"
    });
    $(".flat-blue").flatshadow({
        color: "#2980b9",
        angle: "SE",
        fade: false,
        boxShadow: "#333"
    });
    $(".flat-pink").flatshadow({
        color: "#d770ad",
        angle: "SE",
        fade: false,
        boxShadow: "#333"
    });
    $(".flat-orange").flatshadow({
        color: "#f66d37",
        angle: "SE",
        fade: false,
        boxShadow: "#333"
    });
    $(".flat-grey").flatshadow({
        color: "#ccc",
        angle: "SE",
        fade: false,
        boxShadow: "#333"
    });
    $(".flat-random").flatshadow({
        color: RandHexVal,
        angle: "SE",
        fade: false,
        boxShadow: "#333"
    });
});