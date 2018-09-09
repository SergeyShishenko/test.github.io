function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function (t) {
            _defineProperty(e, t, n[t])
        })
    }
    return e
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function (t) {
            _defineProperty(e, t, n[t])
        })
    }
    return e
}

function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";

    function n(e, t) {
        var n = (t = t || G).createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = re.type(e);
        return "function" !== n && !re.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return re.isFunction(t) ? re.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? re.grep(e, function (e) {
            return e === t !== n
        }) : "string" != typeof t ? re.grep(e, function (e) {
            return X.call(t, e) > -1 !== n
        }) : de.test(t) ? re.filter(t, e, n) : (t = re.filter(t, e), re.grep(e, function (e) {
            return X.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function u(e, t, n, r) {
        var i;
        try {
            e && re.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && re.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function c() {
        G.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), re.ready()
    }

    function f() {
        this.expando = re.expando + f.uid++
    }

    function d(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(_e, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ce.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Ee.set(e, t, n)
            } else n = void 0;
        return n
    }

    function p(e, t, n, r) {
        var i, o = 1,
            a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return re.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (re.cssNumber[t] ? "" : "px"),
            c = (re.cssNumber[t] || "px" !== u && +l) && Se.exec(re.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                c /= o = o || ".5", re.style(e, t, c + u)
            } while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)), i
    }

    function h(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)(r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Te.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ke(r) && (i[o] = function (e) {
            var t, n = e.ownerDocument,
                r = e.nodeName,
                i = Ne[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = re.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ne[r] = i, i)
        }(r))) : "none" !== n && (i[o] = "none", Te.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function g(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? re.merge([e], n) : n
    }

    function m(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Te.set(e[n], "globalEval", !t || Te.get(t[n], "globalEval"))
    }

    function v(e, t, n, r, i) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === re.type(o)) re.merge(d, o.nodeType ? [o] : o);
                else if (He.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (je.exec(o) || ["", ""])[1].toLowerCase(), l = Pe[s] || Pe._default, a.innerHTML = l[1] + re.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            re.merge(d, a.childNodes), (a = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && re.inArray(o, r) > -1) i && i.push(o);
            else if (u = re.contains(o.ownerDocument, o), a = g(f.appendChild(o), "script"), u && m(a), n)
            for (c = 0; o = a[c++];) Ie.test(o.type || "") && n.push(o);
        return f
    }

    function y() {
        return !0
    }

    function b() {
        return !1
    }

    function w() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function x(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) x(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = b;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return re().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = re.guid++)), e.each(function () {
            re.event.add(this, t, i, r, n)
        })
    }

    function T(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? re(">tbody", e)[0] || e : e
    }

    function E(e, t) {
        var n, r, i, o, a, s, l, u;
        if (1 === t.nodeType) {
            if (Te.hasData(e) && (o = Te.access(e), a = Te.set(t, o), u = o.events)) {
                delete a.handle, a.events = {};
                for (i in u)
                    for (n = 0, r = u[i].length; n < r; n++) re.event.add(t, i, u[i][n])
            }
            Ee.hasData(e) && (s = Ee.access(e), l = re.extend({}, s), Ee.set(t, l))
        }
    }

    function C(e, t, r, i) {
        t = K.apply([], t);
        var o, a, s, l, u, c, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            m = re.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !ne.checkClone && Be.test(h)) return e.each(function (n) {
            var o = e.eq(n);
            m && (t[0] = h.call(this, n, o.html())), C(o, t, r, i)
        });
        if (d && (o = v(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (l = (s = re.map(g(o, "script"), function (e) {
                    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                })).length; f < d; f++) u = o, f !== p && (u = re.clone(u, !0, !0), l && re.merge(s, g(u, "script"))), r.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument, re.map(s, function (e) {
                        var t = Ue.exec(e.type);
                        return t ? e.type = t[1] : e.removeAttribute("type"), e
                    }), f = 0; f < l; f++) u = s[f], Ie.test(u.type || "") && !Te.access(u, "globalEval") && re.contains(c, u) && (u.src ? re._evalUrl && re._evalUrl(u.src) : n(u.textContent.replace(Ge, ""), c))
        }
        return e
    }

    function _(e, t, n) {
        for (var r, i = t ? re.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || re.cleanData(g(r)), r.parentNode && (n && re.contains(r.ownerDocument, r) && m(g(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function A(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ke(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), !ne.pixelMarginRight() && ze.test(a) && Ve.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function S(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function O(e) {
        var t = re.cssProps[e];
        return t || (t = re.cssProps[e] = function (e) {
            if (e in et) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--;)
                if ((e = Ze[n] + t) in et) return e
        }(e) || e), t
    }

    function k(e, t, n) {
        var r = Se.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function D(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += re.css(e, n + Oe[o], !0, i)), r ? ("content" === n && (a -= re.css(e, "padding" + Oe[o], !0, i)), "margin" !== n && (a -= re.css(e, "border" + Oe[o] + "Width", !0, i))) : (a += re.css(e, "padding" + Oe[o], !0, i), "padding" !== n && (a += re.css(e, "border" + Oe[o] + "Width", !0, i)));
        return a
    }

    function N(e, t, n) {
        var r, i = Ke(e),
            o = A(e, t, i),
            a = "border-box" === re.css(e, "boxSizing", !1, i);
        return ze.test(o) ? o : (r = a && (ne.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + D(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function L(e, t, n, r, i) {
        return new L.prototype.init(e, t, n, r, i)
    }

    function j() {
        nt && (!1 === G.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(j) : e.setTimeout(j, re.fx.interval), re.fx.tick())
    }

    function I() {
        return e.setTimeout(function () {
            tt = void 0
        }), tt = re.now()
    }

    function P(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = Oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function H(e, t, n) {
        for (var r, i = ($.tweeners[t] || []).concat($.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function $(e, t, n) {
        var r, i, o = 0,
            a = $.prefilters.length,
            s = re.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var t = tt || I(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {},
                    easing: re.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || I(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (r = re.camelCase(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = re.cssHooks[r]) && "expand" in a) {
                        o = a.expand(o), delete e[r];
                        for (n in o) n in e || (e[n] = o[n], t[n] = i)
                    } else t[r] = i
            }(c, u.opts.specialEasing); o < a; o++)
            if (r = $.prefilters[o].call(u, e, c, u.opts)) return re.isFunction(r.stop) && (re._queueHooks(u.elem, u.opts.queue).stop = re.proxy(r.stop, r)), r;
        return re.map(c, H, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), re.fx.timer(re.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function F(e) {
        return (e.match(ve) || []).join(" ")
    }

    function q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function M(e, t, n, r) {
        var i;
        if (Array.isArray(t)) re.each(t, function (t, i) {
            n || ht.test(e) ? r(e, i) : M(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== re.type(t)) r(e, t);
        else
            for (i in t) M(e + "[" + i + "]", t[i], n, r)
    }

    function R(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(ve) || [];
            if (re.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function W(e, t, n, r) {
        function i(s) {
            var l;
            return o[s] = !0, re.each(e[s] || [], function (e, s) {
                var u = s(t, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            a = e === _t;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function B(e, t) {
        var n, r, i = re.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && re.extend(!0, e, r), e
    }
    var U = [],
        G = e.document,
        V = Object.getPrototypeOf,
        z = U.slice,
        K = U.concat,
        Y = U.push,
        X = U.indexOf,
        Q = {},
        J = Q.toString,
        Z = Q.hasOwnProperty,
        ee = Z.toString,
        te = ee.call(Object),
        ne = {},
        re = function (e, t) {
            return new re.fn.init(e, t)
        },
        ie = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        oe = /^-ms-/,
        ae = /-([a-z])/g;
    re.fn = re.prototype = {
        jquery: "3.2.1",
        constructor: re,
        length: 0,
        toArray: function () {
            return z.call(this)
        },
        get: function (e) {
            return null == e ? z.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return re.each(this, e)
        },
        map: function (e) {
            return this.pushStack(re.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function () {
            return this.pushStack(z.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: Y,
        sort: U.sort,
        splice: U.splice
    }, re.extend = re.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = a[t], a !== (r = e[t]) && (u && r && (re.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && re.isPlainObject(n) ? n : {}, a[t] = re.extend(u, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, re.extend({
        expando: "jQuery" + ("3.2.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isFunction: function (e) {
            return "function" === re.type(e)
        },
        isWindow: function (e) {
            return null != e && e === e.window
        },
        isNumeric: function (e) {
            var t = re.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== J.call(e)) && (!(t = V(e)) || "function" == typeof (n = Z.call(t, "constructor") && t.constructor) && ee.call(n) === te)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[J.call(e)] || "object" : typeof e
        },
        globalEval: function (e) {
            n(e)
        },
        camelCase: function (e) {
            return e.replace(oe, "ms-").replace(ae, function (e, t) {
                return t.toUpperCase()
            })
        },
        each: function (e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(ie, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? re.merge(n, "string" == typeof e ? [e] : e) : Y.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var i, o, a = 0,
                s = [];
            if (r(e))
                for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && s.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
            return K.apply([], s)
        },
        guid: 1,
        proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e)) return r = z.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(z.call(arguments)))
            }, i.guid = e.guid = e.guid || re.guid++, i
        },
        now: Date.now,
        support: ne
    }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = U[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    });
    var se = function (e) {
        function t(e, t, n, r) {
            var i, o, a, s, l, c, d, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== k && O(t), t = t || k, N)) {
                if (11 !== h && (l = pe.exec(e)))
                    if (i = l[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (p && (a = p.getElementById(i)) && P(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && y.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
                    }
                if (y.qsa && !W[e + " "] && (!L || !L.test(e))) {
                    if (1 !== h) p = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(ve, ye) : t.setAttribute("id", s = H), o = (c = T(e)).length; o--;) c[o] = "#" + s + " " + f(c[o]);
                        d = c.join(","), p = he.test(e) && u(t.parentNode) || t
                    }
                    if (d) try {
                        return K.apply(n, p.querySelectorAll(d)), n
                    } catch (e) {} finally {
                        s === H && t.removeAttribute("id")
                    }
                }
            }
            return C(e.replace(re, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[H] = !0, e
        }

        function i(e) {
            var t = k.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && we(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = q++;
            return t.first ? function (t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function (t, n, l) {
                var u, c, f, d = [F, s];
                if (l) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[H] || (t[H] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((u = c[o]) && u[0] === F && u[1] === s) return d[2] = u[2];
                                if (c[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
            return a
        }

        function g(e, n, i, o, a, s) {
            return o && !o[H] && (o = g(o)), a && !a[H] && (a = g(a, s)), r(function (r, s, l, u) {
                var c, f, d, p = [],
                    g = [],
                    m = s.length,
                    v = r || function (e, n, r) {
                        for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                        return r
                    }(n || "*", l.nodeType ? [l] : l, []),
                    y = !e || !r && n ? v : h(v, p, e, l, u),
                    b = i ? a || (r ? e : m || o) ? [] : s : y;
                if (i && i(y, b, l, u), o)
                    for (c = h(b, g), o(c, [], l, u), f = c.length; f--;)(d = c[f]) && (b[g[f]] = !(y[g[f]] = d));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (c = [], f = b.length; f--;)(d = b[f]) && c.push(y[f] = d);
                            a(null, b = [], c, u)
                        }
                        for (f = b.length; f--;)(d = b[f]) && (c = a ? X(r, d) : p[f]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else b = h(b === s ? b.splice(m, b.length) : b), a ? a(null, s, b, u) : K.apply(s, b)
            })
        }

        function m(e) {
            for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, l = d(function (e) {
                    return e === t
                }, a, !0), u = d(function (e) {
                    return X(t, e) > -1
                }, a, !0), c = [function (e, n, r) {
                    var i = !o && (r || n !== _) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                    return t = null, i
                }]; s < i; s++)
                if (n = b.relative[e[s].type]) c = [d(p(c), n)];
                else {
                    if ((n = b.filter[e[s].type].apply(null, e[s].matches))[H]) {
                        for (r = ++s; r < i && !b.relative[e[r].type]; r++);
                        return g(s > 1 && p(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(re, "$1"), n, s < r && m(e.slice(s, r)), r < i && m(e = e.slice(r)), r < i && f(e))
                    }
                    c.push(n)
                }
            return p(c)
        }
        var v, y, b, w, x, T, E, C, _, A, S, O, k, D, N, L, j, I, P, H = "sizzle" + 1 * new Date,
            $ = e.document,
            F = 0,
            q = 0,
            M = n(),
            R = n(),
            W = n(),
            B = function (e, t) {
                return e === t && (S = !0), 0
            },
            U = {}.hasOwnProperty,
            G = [],
            V = G.pop,
            z = G.push,
            K = G.push,
            Y = G.slice,
            X = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            J = "[\\x20\\t\\r\\n\\f]",
            Z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ee = "\\[" + J + "*(" + Z + ")(?:" + J + "*([*^$|!~]?=)" + J + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Z + "))|)" + J + "*\\]",
            te = ":(" + Z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ee + ")*)|.*)\\)|)",
            ne = new RegExp(J + "+", "g"),
            re = new RegExp("^" + J + "+|((?:^|[^\\\\])(?:\\\\.)*)" + J + "+$", "g"),
            ie = new RegExp("^" + J + "*," + J + "*"),
            oe = new RegExp("^" + J + "*([>+~]|" + J + ")" + J + "*"),
            ae = new RegExp("=" + J + "*([^\\]'\"]*?)" + J + "*\\]", "g"),
            se = new RegExp(te),
            le = new RegExp("^" + Z + "$"),
            ue = {
                ID: new RegExp("^#(" + Z + ")"),
                CLASS: new RegExp("^\\.(" + Z + ")"),
                TAG: new RegExp("^(" + Z + "|[*])"),
                ATTR: new RegExp("^" + ee),
                PSEUDO: new RegExp("^" + te),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + J + "*(even|odd|(([+-]|)(\\d*)n|)" + J + "*(?:([+-]|)" + J + "*(\\d+)|))" + J + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Q + ")$", "i"),
                needsContext: new RegExp("^" + J + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + J + "*((?:-\\d)?\\d*)" + J + "*\\)|)(?=[^-]|$)", "i")
            },
            ce = /^(?:input|select|textarea|button)$/i,
            fe = /^h\d$/i,
            de = /^[^{]+\{\s*\[native \w/,
            pe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            he = /[+~]/,
            ge = new RegExp("\\\\([\\da-f]{1,6}" + J + "?|(" + J + ")|.)", "ig"),
            me = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            ve = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ye = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            be = function () {
                O()
            },
            we = d(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(G = Y.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: G.length ? function (e, t) {
                    z.apply(e, Y.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        y = t.support = {}, x = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, O = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== k && 9 === r.nodeType && r.documentElement ? (k = r, D = k.documentElement, N = !x(k), $ !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), y.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), y.getElementsByTagName = i(function (e) {
                return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
            }), y.getElementsByClassName = de.test(k.getElementsByClassName), y.getById = i(function (e) {
                return D.appendChild(e).id = H, !k.getElementsByName || !k.getElementsByName(H).length
            }), y.getById ? (b.filter.ID = function (e) {
                var t = e.replace(ge, me);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var t = e.replace(ge, me);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, b.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = y.getElementsByTagName ? function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : y.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = y.getElementsByClassName && function (e, t) {
                if (void 0 !== t.getElementsByClassName && N) return t.getElementsByClassName(e)
            }, j = [], L = [], (y.qsa = de.test(k.querySelectorAll)) && (i(function (e) {
                D.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + J + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + J + "*(?:value|" + Q + ")"), e.querySelectorAll("[id~=" + H + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || L.push(".#.+[+~]")
            }), i(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = k.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + J + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), D.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
            })), (y.matchesSelector = de.test(I = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
                y.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), j.push("!=", te)
            }), L = L.length && new RegExp(L.join("|")), j = j.length && new RegExp(j.join("|")), t = de.test(D.compareDocumentPosition), P = t || de.test(D.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, B = t ? function (e, t) {
                if (e === t) return S = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !y.sortDetached && t.compareDocumentPosition(e) === n ? e === k || e.ownerDocument === $ && P($, e) ? -1 : t === k || t.ownerDocument === $ && P($, t) ? 1 : A ? X(A, e) - X(A, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return S = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!i || !o) return e === k ? -1 : t === k ? 1 : i ? -1 : o ? 1 : A ? X(A, e) - X(A, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? a(s[r], l[r]) : s[r] === $ ? -1 : l[r] === $ ? 1 : 0
            }, k) : k
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== k && O(e), n = n.replace(ae, "='$1']"), y.matchesSelector && N && !W[n + " "] && (!j || !j.test(n)) && (!L || !L.test(n))) try {
                var r = I.call(e, n);
                if (r || y.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, k, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== k && O(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== k && O(e);
            var n = b.attrHandle[t.toLowerCase()],
                r = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== r ? r : y.attributes || !N ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function (e) {
            return (e + "").replace(ve, ye)
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (S = !y.detectDuplicates, A = !y.sortStable && e.slice(0), e.sort(B), S) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return A = null, e
        }, w = t.getText = function (e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += w(t);
            return n
        }, (b = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: ue,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ge, me), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, me), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return ue.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && se.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ge, me).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function (e) {
                    var t = M[e + " "];
                    return t || (t = new RegExp("(^|" + J + ")" + e + "(" + J + "|$)")) && M(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ne, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (b = (p = (u = (c = (f = (d = m)[H] || (d[H] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === F && u[1]) && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [F, p, b];
                                        break
                                    }
                            } else if (y && (b = p = (u = (c = (f = (d = t)[H] || (d[H] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === F && u[1]), !1 === b)
                                for (;
                                    (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[H] || (d[H] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [F, b]), d !== t)););
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function (e, n) {
                    var i, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[H] ? o(n) : o.length > 1 ? (i = [e, e, "", n], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) e[r = X(e, i[a])] = !(t[r] = i[a])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [],
                        n = [],
                        i = E(e.replace(re, "$1"));
                    return i[H] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function (e) {
                    return e = e.replace(ge, me),
                        function (t) {
                            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function (e) {
                    return le.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, me).toLowerCase(),
                        function (t) {
                            var n;
                            do {
                                if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function (e) {
                    return e === D
                },
                focus: function (e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function (e) {
                    return !b.pseudos.empty(e)
                },
                header: function (e) {
                    return fe.test(e.nodeName)
                },
                input: function (e) {
                    return ce.test(e.nodeName)
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function () {
                    return [0]
                }),
                last: l(function (e, t) {
                    return [t - 1]
                }),
                eq: l(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for (v in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[v] = function (e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(v);
        for (v in {
                submit: !0,
                reset: !0
            }) b.pseudos[v] = function (e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(v);
        return c.prototype = b.filters = b.pseudos, b.setFilters = new c, T = t.tokenize = function (e, n) {
            var r, i, o, a, s, l, u, c = R[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = b.preFilter; s;) {
                r && !(i = ie.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = oe.exec(s)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(re, " ")
                }), s = s.slice(r.length));
                for (a in b.filter) !(i = ue[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length : s ? t.error(e) : R(e, l).slice(0)
        }, E = t.compile = function (e, n) {
            var i, o = [],
                a = [],
                s = W[e + " "];
            if (!s) {
                for (n || (n = T(e)), i = n.length; i--;)(s = m(n[i]))[H] ? o.push(s) : a.push(s);
                (s = W(e, function (e, n) {
                    var i = n.length > 0,
                        o = e.length > 0,
                        a = function (r, a, s, l, u) {
                            var c, f, d, p = 0,
                                g = "0",
                                m = r && [],
                                v = [],
                                y = _,
                                w = r || o && b.find.TAG("*", u),
                                x = F += null == y ? 1 : Math.random() || .1,
                                T = w.length;
                            for (u && (_ = a === k || a || u); g !== T && null != (c = w[g]); g++) {
                                if (o && c) {
                                    for (f = 0, a || c.ownerDocument === k || (O(c), s = !N); d = e[f++];)
                                        if (d(c, a || k, s)) {
                                            l.push(c);
                                            break
                                        }
                                    u && (F = x)
                                }
                                i && ((c = !d && c) && p--, r && m.push(c))
                            }
                            if (p += g, i && g !== p) {
                                for (f = 0; d = n[f++];) d(m, v, a, s);
                                if (r) {
                                    if (p > 0)
                                        for (; g--;) m[g] || v[g] || (v[g] = V.call(l));
                                    v = h(v)
                                }
                                K.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                            }
                            return u && (F = x, _ = y), m
                        };
                    return i ? r(a) : a
                }(a, o))).selector = e
            }
            return s
        }, C = t.select = function (e, t, n, r) {
            var i, o, a, s, l, c = "function" == typeof e && e,
                d = !r && T(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && N && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(ge, me), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = ue.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
                    if ((l = b.find[s]) && (r = l(a.matches[0].replace(ge, me), he.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && f(o))) return K.apply(n, r), n;
                        break
                    }
            }
            return (c || E(e, d))(r, t, !N, n, !t || he.test(e) && u(t.parentNode) || t), n
        }, y.sortStable = H.split("").sort(B).join("") === H, y.detectDuplicates = !!S, O(), y.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(k.createElement("fieldset"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), y.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(Q, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    re.find = se, re.expr = se.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = se.uniqueSort, re.text = se.getText, re.isXMLDoc = se.isXML, re.contains = se.contains, re.escapeSelector = se.escape;
    var le = function (e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && re(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        ue = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        ce = re.expr.match.needsContext,
        fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        de = /^.[^:#\[\.,]*$/;
    re.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? re.find.matchesSelector(r, e) ? [r] : [] : re.find.matches(e, re.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (re.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) re.find(e, i[t], n);
            return r > 1 ? re.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function (e) {
            return !!o(this, "string" == typeof e && ce.test(e) ? re(e) : e || [], !1).length
        }
    });
    var pe, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (re.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || pe, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), fe.test(r[1]) && re.isPlainObject(t))
                    for (r in t) re.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = G.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : re.makeArray(e, this)
    }).prototype = re.fn, pe = re(G);
    var ge = /^(?:parents|prev(?:Until|All))/,
        me = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.fn.extend({
        has: function (e) {
            var t = re(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (re.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && re(e);
            if (!ce.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? re.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? X.call(re(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), re.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return le(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return le(e, "parentNode", n)
        },
        next: function (e) {
            return a(e, "nextSibling")
        },
        prev: function (e) {
            return a(e, "previousSibling")
        },
        nextAll: function (e) {
            return le(e, "nextSibling")
        },
        prevAll: function (e) {
            return le(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return le(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return le(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ue((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ue(e.firstChild)
        },
        contents: function (e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), re.merge([], e.childNodes))
        }
    }, function (e, t) {
        re.fn[e] = function (n, r) {
            var i = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = re.filter(r, i)), this.length > 1 && (me[e] || re.uniqueSort(i), ge.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var ve = /[^\x20\t\r\n\f]+/g;
    re.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
            var t = {};
            return re.each(e.match(ve) || [], function (e, n) {
                t[n] = !0
            }), t
        }(e) : re.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            l = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            u = {
                add: function () {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        re.each(n, function (n, r) {
                            re.isFunction(r) ? e.unique && u.has(r) || o.push(r) : r && r.length && "string" !== re.type(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function () {
                    return re.each(arguments, function (e, t) {
                        for (var n;
                            (n = re.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function (e) {
                    return e ? re.inArray(e, o) > -1 : o.length > 0
                },
                empty: function () {
                    return o && (o = []), this
                },
                disable: function () {
                    return i = a = [], o = n = "", this
                },
                disabled: function () {
                    return !o
                },
                lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function () {
                    return !!i
                },
                fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function () {
                    return u.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!r
                }
            };
        return u
    }, re.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", re.Callbacks("memory"), re.Callbacks("memory"), 2],
                    ["resolve", "done", re.Callbacks("once memory"), re.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", re.Callbacks("once memory"), re.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return i.then(null, e)
                    },
                    pipe: function () {
                        var e = arguments;
                        return re.Deferred(function (t) {
                            re.each(n, function (n, r) {
                                var i = re.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function (t, r, i) {
                        function o(t, n, r, i) {
                            return function () {
                                var u = this,
                                    c = arguments,
                                    f = function () {
                                        var e, f;
                                        if (!(t < a)) {
                                            if ((e = r.apply(u, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, re.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, s, i), o(a, n, l, i), o(a, n, s, n.notifyWith))) : (r !== s && (u = void 0, c = [e]), (i || n.resolveWith)(u, c))
                                        }
                                    },
                                    d = i ? f : function () {
                                        try {
                                            f()
                                        } catch (e) {
                                            re.Deferred.exceptionHook && re.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                                        }
                                    };
                                t ? d() : (re.Deferred.getStackHook && (d.stackTrace = re.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return re.Deferred(function (e) {
                            n[0][3].add(o(0, e, re.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(o(0, e, re.isFunction(t) ? t : s)), n[2][3].add(o(0, e, re.isFunction(r) ? r : l))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? re.extend(e, i) : i
                    }
                },
                o = {};
            return re.each(n, function (e, t) {
                var a = t[2],
                    s = t[5];
                i[t[1]] = a.add, s && a.add(function () {
                    r = s
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function () {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = z.call(arguments),
                o = re.Deferred(),
                a = function (e) {
                    return function (n) {
                        r[e] = this, i[e] = arguments.length > 1 ? z.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (u(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || re.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) u(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var ye = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    re.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && ye.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, re.readyException = function (t) {
        e.setTimeout(function () {
            throw t
        })
    };
    var be = re.Deferred();
    re.fn.ready = function (e) {
        return be.then(e).catch(function (e) {
            re.readyException(e)
        }), this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --re.readyWait : re.isReady) || (re.isReady = !0, !0 !== e && --re.readyWait > 0 || be.resolveWith(G, [re]))
        }
    }), re.ready.then = be.then, "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll ? e.setTimeout(re.ready) : (G.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var we = function (e, t, n, r, i, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === re.type(n)) {
                i = !0;
                for (s in n) we(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, re.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                    return u.call(re(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        xe = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    f.uid = 1, f.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, xe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[re.camelCase(t)] = n;
            else
                for (r in t) i[re.camelCase(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][re.camelCase(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(re.camelCase) : (t = re.camelCase(t)) in r ? [t] : t.match(ve) || []).length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !re.isEmptyObject(t)
        }
    };
    var Te = new f,
        Ee = new f,
        Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        _e = /[A-Z]/g;
    re.extend({
        hasData: function (e) {
            return Ee.hasData(e) || Te.hasData(e)
        },
        data: function (e, t, n) {
            return Ee.access(e, t, n)
        },
        removeData: function (e, t) {
            Ee.remove(e, t)
        },
        _data: function (e, t, n) {
            return Te.access(e, t, n)
        },
        _removeData: function (e, t) {
            Te.remove(e, t)
        }
    }), re.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Ee.get(o), 1 === o.nodeType && !Te.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = re.camelCase(r.slice(5)), d(o, r, i[r]));
                    Te.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                Ee.set(this, e)
            }) : we(this, function (t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Ee.get(o, e))) return n;
                    if (void 0 !== (n = d(o, e))) return n
                } else this.each(function () {
                    Ee.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Ee.remove(this, e)
            })
        }
    }), re.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Te.get(e, t), n && (!r || Array.isArray(n) ? r = Te.access(e, t, re.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = re._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                re.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Te.get(e, n) || Te.access(e, n, {
                empty: re.Callbacks("once memory").add(function () {
                    Te.remove(e, [t + "queue", n])
                })
            })
        }
    }), re.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                re.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = re.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Te.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Se = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
        Oe = ["Top", "Right", "Bottom", "Left"],
        ke = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && re.contains(e.ownerDocument, e) && "none" === re.css(e, "display")
        },
        De = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        Ne = {};
    re.fn.extend({
        show: function () {
            return h(this, !0)
        },
        hide: function () {
            return h(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ke(this) ? re(this).show() : re(this).hide()
            })
        }
    });
    var Le = /^(?:checkbox|radio)$/i,
        je = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ie = /^$|\/(?:java|ecma)script/i,
        Pe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Pe.optgroup = Pe.option, Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead, Pe.th = Pe.td;
    var He = /<|&#?\w+;/;
    ! function () {
        var e = G.createDocumentFragment().appendChild(G.createElement("div")),
            t = G.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), ne.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ne.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var $e = G.documentElement,
        Fe = /^key/,
        qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Me = /^([^.]*)(?:\.(.+)|)/;
    re.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, g, m = Te.get(e);
            if (m)
                for (n.handler && (n = (o = n).handler, i = o.selector), i && re.find.matchesSelector($e, i), n.guid || (n.guid = re.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
                        return void 0 !== re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
                    }), u = (t = (t || "").match(ve) || [""]).length; u--;) p = g = (s = Me.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p && (f = re.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = re.event.special[p] || {}, c = re.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && re.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), re.event.global[p] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, l, u, c, f, d, p, h, g, m = Te.hasData(e) && Te.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(ve) || [""]).length; u--;)
                    if (s = Me.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = re.event.special[p] || {}, d = l[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || re.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) re.event.remove(e, p + t[u], n, r, !0);
                re.isEmptyObject(l) && Te.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = re.event.fix(e),
                l = new Array(arguments.length),
                u = (Te.get(this, "events") || {})[s.type] || [],
                c = re.event.special[s.type] || {};
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                for (a = re.event.handlers.call(this, s, u), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((re.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, s), s.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? re(i, this).index(u) > -1 : re.find(i, this, null, [u]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this, l < t.length && s.push({
                elem: u,
                handlers: t.slice(l)
            }), s
        },
        addProp: function (e, t) {
            Object.defineProperty(re.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: re.isFunction(t) ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[re.expando] ? e : new re.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== w() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, re.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, re.Event = function (e, t) {
        if (!(this instanceof re.Event)) return new re.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? y : b, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), this[re.expando] = !0
    }, re.Event.prototype = {
        constructor: re.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, re.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && Fe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, re.event.addProp), re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = e.relatedTarget,
                    i = e.handleObj;
                return r && (r === this || re.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), re.fn.extend({
        on: function (e, t, n, r) {
            return x(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return x(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, re(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = b), this.each(function () {
                re.event.remove(this, e, n, t)
            })
        }
    });
    var Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        We = /<script|<style|<link/i,
        Be = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ue = /^true\/(.*)/,
        Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
        htmlPrefilter: function (e) {
            return e.replace(Re, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0),
                l = re.contains(e.ownerDocument, e);
            if (!(ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                for (a = g(s), r = 0, i = (o = g(e)).length; r < i; r++) ! function (e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && Le.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                }(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || g(e), a = a || g(s), r = 0, i = o.length; r < i; r++) E(o[r], a[r]);
                else E(e, s);
            return (a = g(s, "script")).length > 0 && m(a, !l && g(e, "script")), s
        },
        cleanData: function (e) {
            for (var t, n, r, i = re.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (xe(n)) {
                    if (t = n[Te.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? re.event.remove(n, r) : re.removeEvent(n, r, t.handle);
                        n[Te.expando] = void 0
                    }
                    n[Ee.expando] && (n[Ee.expando] = void 0)
                }
        }
    }), re.fn.extend({
        detach: function (e) {
            return _(this, e, !0)
        },
        remove: function (e) {
            return _(this, e)
        },
        text: function (e) {
            return we(this, function (e) {
                return void 0 === e ? re.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return C(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    T(this, e).appendChild(e)
                }
            })
        },
        prepend: function () {
            return C(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return C(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return C(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return re.clone(this, e, t)
            })
        },
        html: function (e) {
            return we(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !We.test(e) && !Pe[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = re.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (re.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = [];
            return C(this, arguments, function (t) {
                var n = this.parentNode;
                re.inArray(this, e) < 0 && (re.cleanData(g(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        re.fn[e] = function (e) {
            for (var n, r = [], i = re(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), re(i[a])[t](n), Y.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ve = /^margin/,
        ze = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
        Ke = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function () {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", $e.appendChild(a);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, $e.removeChild(a), s = null
            }
        }
        var n, r, i, o, a = G.createElement("div"),
            s = G.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", ne.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), re.extend(ne, {
            pixelPosition: function () {
                return t(), n
            },
            boxSizingReliable: function () {
                return t(), r
            },
            pixelMarginRight: function () {
                return t(), i
            },
            reliableMarginLeft: function () {
                return t(), o
            }
        }))
    }();
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Qe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ze = ["Webkit", "Moz", "ms"],
        et = G.createElement("div").style;
    re.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = A(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = re.camelCase(t),
                    l = Xe.test(t),
                    u = e.style;
                if (l || (t = O(s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" == (o = typeof n) && (i = Se.exec(n)) && i[1] && (n = p(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (re.cssNumber[s] ? "" : "px")), ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = re.camelCase(t);
            return Xe.test(t) || (t = O(s)), (a = re.cssHooks[t] || re.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = A(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), re.each(["height", "width"], function (e, t) {
        re.cssHooks[t] = {
            get: function (e, n, r) {
                if (n) return !Ye.test(re.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? N(e, t, r) : De(e, Qe, function () {
                    return N(e, t, r)
                })
            },
            set: function (e, n, r) {
                var i, o = r && Ke(e),
                    a = r && D(e, t, r, "border-box" === re.css(e, "boxSizing", !1, o), o);
                return a && (i = Se.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = re.css(e, t)), k(0, n, a)
            }
        }
    }), re.cssHooks.marginLeft = S(ne.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - De(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        re.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, Ve.test(e) || (re.cssHooks[e + t].set = k)
    }), re.fn.extend({
        css: function (e, t) {
            return we(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ke(e), i = t.length; a < i; a++) o[t[a]] = re.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), re.Tween = L, (L.prototype = {
        constructor: L,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (re.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = L.propHooks[this.prop];
            return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }).init.prototype = L.prototype, (L.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = L.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, re.fx = L.prototype.init, re.fx.step = {};
    var tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;
    re.Animation = re.extend($, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return p(n.elem, e, Se.exec(t), n), n
                }]
            },
            tweener: function (e, t) {
                re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(ve);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
            },
            prefilters: [function (e, t, n) {
                var r, i, o, a, s, l, u, c, f = "width" in t || "height" in t,
                    d = this,
                    p = {},
                    g = e.style,
                    m = e.nodeType && ke(e),
                    v = Te.get(e, "fxshow");
                n.queue || (null == (a = re._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, d.always(function () {
                    d.always(function () {
                        a.unqueued--, re.queue(e, "fx").length || a.empty.fire()
                    })
                }));
                for (r in t)
                    if (i = t[r], rt.test(i)) {
                        if (delete t[r], o = o || "toggle" === i, i === (m ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r]) continue;
                            m = !0
                        }
                        p[r] = v && v[r] || re.style(e, r)
                    }
                if ((l = !re.isEmptyObject(t)) || !re.isEmptyObject(p)) {
                    f && 1 === e.nodeType && (n.overflow = [g.overflow, g.overflowX, g.overflowY], null == (u = v && v.display) && (u = Te.get(e, "display")), "none" === (c = re.css(e, "display")) && (u ? c = u : (h([e], !0), u = e.style.display || u, c = re.css(e, "display"), h([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === re.css(e, "float") && (l || (d.done(function () {
                        g.display = u
                    }), null == u && (c = g.display, u = "none" === c ? "" : c)), g.display = "inline-block")), n.overflow && (g.overflow = "hidden", d.always(function () {
                        g.overflow = n.overflow[0], g.overflowX = n.overflow[1], g.overflowY = n.overflow[2]
                    })), l = !1;
                    for (r in p) l || (v ? "hidden" in v && (m = v.hidden) : v = Te.access(e, "fxshow", {
                        display: u
                    }), o && (v.hidden = !m), m && h([e], !0), d.done(function () {
                        m || h([e]), Te.remove(e, "fxshow");
                        for (r in p) re.style(e, r, p[r])
                    })), l = H(m ? v[r] : 0, r, d), r in v || (v[r] = l.start, m && (l.end = l.start, l.start = 0))
                }
            }],
            prefilter: function (e, t) {
                t ? $.prefilters.unshift(e) : $.prefilters.push(e)
            }
        }), re.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return re.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in re.fx.speeds ? r.duration = re.fx.speeds[r.duration] : r.duration = re.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                re.isFunction(r.old) && r.old.call(this), r.queue && re.dequeue(this, r.queue)
            }, r
        }, re.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ke).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function (e, t, n, r) {
                var i = re.isEmptyObject(e),
                    o = re.speed(t, n, r),
                    a = function () {
                        var t = $(this, re.extend({}, e), o);
                        (i || Te.get(this, "finish")) && t.stop(!0)
                    };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = re.timers,
                        a = Te.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]);
                    else
                        for (i in a) a[i] && a[i].stop && it.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || re.dequeue(this, e)
                })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = Te.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = re.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, re.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), re.each(["toggle", "show", "hide"], function (e, t) {
            var n = re.fn[t];
            re.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, i)
            }
        }), re.each({
            slideDown: P("show"),
            slideUp: P("hide"),
            slideToggle: P("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            re.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), re.timers = [], re.fx.tick = function () {
            var e, t = 0,
                n = re.timers;
            for (tt = re.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || re.fx.stop(), tt = void 0
        }, re.fx.timer = function (e) {
            re.timers.push(e), re.fx.start()
        }, re.fx.interval = 13, re.fx.start = function () {
            nt || (nt = !0, j())
        }, re.fx.stop = function () {
            nt = null
        }, re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, re.fn.delay = function (t, n) {
            return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function () {
                    e.clearTimeout(i)
                }
            })
        },
        function () {
            var e = G.createElement("input"),
                t = G.createElement("select").appendChild(G.createElement("option"));
            e.type = "checkbox", ne.checkOn = "" !== e.value, ne.optSelected = t.selected, (e = G.createElement("input")).value = "t", e.type = "radio", ne.radioValue = "t" === e.value
        }();
    var ot, at = re.expr.attrHandle;
    re.fn.extend({
        attr: function (e, t) {
            return we(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                re.removeAttr(this, e)
            })
        }
    }), re.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? re.prop(e, t, n) : (1 === o && re.isXMLDoc(e) || (i = re.attrHooks[t.toLowerCase()] || (re.expr.match.bool.test(t) ? ot : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = re.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ne.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(ve);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), ot = {
        set: function (e, t, n) {
            return !1 === t ? re.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = at[t] || re.find.attr;
        at[t] = function (e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = at[a], at[a] = i, i = null != n(e, t, r) ? a : null, at[a] = o), i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i,
        lt = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function (e, t) {
            return we(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[re.propFix[e] || e]
            })
        }
    }), re.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && re.isXMLDoc(e) || (t = re.propFix[t] || t, i = re.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : st.test(e.nodeName) || lt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ne.optSelected || (re.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    }), re.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, a, s, l = 0;
            if (re.isFunction(e)) return this.each(function (t) {
                re(this).addClass(e.call(this, t, q(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(ve) || []; n = this[l++];)
                    if (i = q(n), r = 1 === n.nodeType && " " + F(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = F(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, a, s, l = 0;
            if (re.isFunction(e)) return this.each(function (t) {
                re(this).removeClass(e.call(this, t, q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(ve) || []; n = this[l++];)
                    if (i = q(n), r = 1 === n.nodeType && " " + F(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        i !== (s = F(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
                re(this).toggleClass(e.call(this, n, q(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = re(this), o = e.match(ve) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = q(this)) && Te.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Te.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + F(q(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ut = /\r/g;
    re.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = re.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, re(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = re.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i) return (t = re.valHooks[i.type] || re.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(ut, "") : null == n ? "" : n
            }
        }
    }), re.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : F(re.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        s = "select-one" === e.type,
                        l = s ? null : [],
                        u = s ? a + 1 : o.length;
                    for (r = a < 0 ? u : s ? a : 0; r < u; r++)
                        if (((n = o[r]).selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = re(n).val(), s) return t;
                            l.push(t)
                        }
                    return l
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = re.makeArray(t), a = i.length; a--;)((r = i[a]).selected = re.inArray(re.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = re.inArray(re(e).val(), t) > -1
            }
        }, ne.checkOn || (re.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ct = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
        trigger: function (t, n, r, i) {
            var o, a, s, l, u, c, f, d = [r || G],
                p = Z.call(t, "type") ? t.type : t,
                h = Z.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !ct.test(p + re.event.triggered) && (p.indexOf(".") > -1 && (p = (h = p.split(".")).shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[re.expando] ? t : new re.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : re.makeArray(n, [t]), f = re.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !re.isWindow(r)) {
                    for (l = f.delegateType || p, ct.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
                    s === (r.ownerDocument || G) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : f.bindType || p, (c = (Te.get(a, "events") || {})[t.type] && Te.get(a, "handle")) && c.apply(a, n), (c = u && a[u]) && c.apply && xe(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !xe(r) || u && re.isFunction(r[p]) && !re.isWindow(r) && ((s = r[u]) && (r[u] = null), re.event.triggered = p, r[p](), re.event.triggered = void 0, s && (r[u] = s)), t.result
            }
        },
        simulate: function (e, t, n) {
            var r = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0
            });
            re.event.trigger(r, null, t)
        }
    }), re.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                re.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return re.event.trigger(e, t, n, !0)
        }
    }), re.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        re.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), re.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ne.focusin = "onfocusin" in e, ne.focusin || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            re.event.simulate(t, e.target, re.event.fix(e))
        };
        re.event.special[t] = {
            setup: function () {
                var r = this.ownerDocument || this,
                    i = Te.access(r, t);
                i || r.addEventListener(e, n, !0), Te.access(r, t, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                    i = Te.access(r, t) - 1;
                i ? Te.access(r, t, i) : (r.removeEventListener(e, n, !0), Te.remove(r, t))
            }
        }
    });
    var ft = e.location,
        dt = re.now(),
        pt = /\?/;
    re.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var ht = /\[\]$/,
        gt = /\r?\n/g,
        mt = /^(?:submit|button|image|reset|file)$/i,
        vt = /^(?:input|select|textarea|keygen)/i;
    re.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = re.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) M(n, e[n], t, i);
        return r.join("&")
    }, re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && vt.test(this.nodeName) && !mt.test(e) && (this.checked || !Le.test(e))
            }).map(function (e, t) {
                var n = re(this).val();
                return null == n ? null : Array.isArray(n) ? re.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(gt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(gt, "\r\n")
                }
            }).get()
        }
    });
    var yt = /%20/g,
        bt = /#.*$/,
        wt = /([?&])_=[^&]*/,
        xt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Tt = /^(?:GET|HEAD)$/,
        Et = /^\/\//,
        Ct = {},
        _t = {},
        At = "*/".concat("*"),
        St = G.createElement("a");
    St.href = ft.href, re.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ft.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ft.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": At,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": re.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? B(B(e, re.ajaxSettings), t) : B(re.ajaxSettings, e)
        },
        ajaxPrefilter: R(Ct),
        ajaxTransport: R(_t),
        ajax: function (t, n) {
            function r(t, n, r, s) {
                var u, d, p, w, x, T = n;
                c || (c = !0, l && e.clearTimeout(l), i = void 0, a = s || "", E.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, r && (w = function (e, t, n) {
                    for (var r, i, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0] in n) o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o]
                }(h, E, r)), w = function (e, t, n, r) {
                    var i, o, a, s, l, u = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o]))
                            for (i in u)
                                if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, w, E, u), u ? (h.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (re.lastModified[o] = x), (x = E.getResponseHeader("etag")) && (re.etag[o] = x)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, d = w.data, u = !(p = w.error))) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || T) + "", u ? v.resolveWith(g, [d, T, E]) : v.rejectWith(g, [E, T, p]), E.statusCode(b), b = void 0, f && m.trigger(u ? "ajaxSuccess" : "ajaxError", [E, h, u ? d : p]), y.fireWith(g, [E, T]), f && (m.trigger("ajaxComplete", [E, h]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, l, u, c, f, d, p, h = re.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? re(g) : re.event,
                v = re.Deferred(),
                y = re.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                x = {},
                T = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = xt.exec(a);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (v.promise(E), h.url = ((t || h.url || ft.href) + "").replace(Et, ft.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(ve) || [""], null == h.crossDomain) {
                u = G.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = St.protocol + "//" + St.host != u.protocol + "//" + u.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = re.param(h.data, h.traditional)), W(Ct, h, n, E), c) return E;
            (f = re.event && h.global) && 0 == re.active++ && re.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Tt.test(h.type), o = h.url.replace(bt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(yt, "+")) : (p = h.url.slice(o.length), h.data && (o += (pt.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(wt, "$1"), p = (pt.test(o) ? "&" : "?") + "_=" + dt++ + p), h.url = o + p), h.ifModified && (re.lastModified[o] && E.setRequestHeader("If-Modified-Since", re.lastModified[o]), re.etag[o] && E.setRequestHeader("If-None-Match", re.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + At + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) E.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (T = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), i = W(_t, h, n, E)) {
                if (E.readyState = 1, f && m.trigger("ajaxSend", [E, h]), c) return E;
                h.async && h.timeout > 0 && (l = e.setTimeout(function () {
                    E.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, i.send(w, r)
                } catch (e) {
                    if (c) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return E
        },
        getJSON: function (e, t, n) {
            return re.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return re.get(e, void 0, t, "script")
        }
    }), re.each(["get", "post"], function (e, t) {
        re[t] = function (e, n, r, i) {
            return re.isFunction(n) && (i = i || r, r = n, n = void 0), re.ajax(re.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, re.isPlainObject(e) && e))
        }
    }), re._evalUrl = function (e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, re.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (re.isFunction(e) && (e = e.call(this[0])), t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (e) {
            return re.isFunction(e) ? this.each(function (t) {
                re(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = re(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = re.isFunction(e);
            return this.each(function (n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                re(this).replaceWith(this.childNodes)
            }), this
        }
    }), re.expr.pseudos.hidden = function (e) {
        return !re.expr.pseudos.visible(e)
    }, re.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, re.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ot = {
            0: 200,
            1223: 204
        },
        kt = re.ajaxSettings.xhr();
    ne.cors = !!kt && "withCredentials" in kt, ne.ajax = kt = !!kt, re.ajaxTransport(function (t) {
        var n, r;
        if (ne.cors || kt && !t.crossDomain) return {
            send: function (i, o) {
                var a, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (a in t.xhrFields) s[a] = t.xhrFields[a];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (a in i) s.setRequestHeader(a, i[a]);
                n = function (e) {
                    return function () {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ot[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), r = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                    4 === s.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function () {
                n && n()
            }
        }
    }), re.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return re.globalEval(e), e
            }
        }
    }), re.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), re.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = re("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), G.head.appendChild(t[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Dt = [],
        Nt = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Dt.pop() || re.expando + "_" + dt++;
            return this[e] = !0, e
        }
    }), re.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (Nt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Nt, "$1" + i) : !1 !== t.jsonp && (t.url += (pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return a || re.error(i + " was not called"), a[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            a = arguments
        }, r.always(function () {
            void 0 === o ? re(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Dt.push(i)), a && re.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), ne.createHTMLDocument = function () {
        var e = G.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), re.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (ne.createHTMLDocument ? ((r = (t = G.implementation.createHTMLDocument("")).createElement("base")).href = G.location.href, t.head.appendChild(r)) : t = G), i = fe.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = v([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
    }, re.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return s > -1 && (r = F(e.slice(s)), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && re.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? re("<div>").append(re.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        re.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), re.expr.pseudos.animated = function (e) {
        return re.grep(re.timers, function (t) {
            return e === t.elem
        }).length
    }, re.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, l, u = re.css(e, "position"),
                c = re(e),
                f = {};
            "static" === u && (e.style.position = "relative"), s = c.offset(), o = re.css(e, "top"), l = re.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, re.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                re.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + re.css(e[0], "borderTopWidth", !0),
                    left: r.left + re.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - re.css(n, "marginTop", !0),
                    left: t.left - r.left - re.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || $e
            })
        }
    }), re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        re.fn[e] = function (r) {
            return we(this, function (e, r, i) {
                var o;
                if (re.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), re.each(["top", "left"], function (e, t) {
        re.cssHooks[t] = S(ne.pixelPosition, function (e, n) {
            if (n) return n = A(e, t), ze.test(n) ? re(e).position()[t] + "px" : n
        })
    }), re.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, r) {
            re.fn[r] = function (i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return we(this, function (t, n, i) {
                    var o;
                    return re.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s)
                }, t, a ? i : void 0, a)
            }
        })
    }), re.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), re.holdReady = function (e) {
        e ? re.readyWait++ : re.ready(!0)
    }, re.isArray = Array.isArray, re.parseJSON = JSON.parse, re.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var Lt = e.jQuery,
        jt = e.$;
    return re.noConflict = function (t) {
        return e.$ === re && (e.$ = jt), t && e.jQuery === re && (e.jQuery = Lt), re
    }, t || (e.jQuery = e.$ = re), re
}),
function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var n = window.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function n(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function r(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
        var i = t(e),
            o = i.overflow,
            a = i.overflowX,
            s = i.overflowY;
        return /(auto|scroll)/.test(o + s + a) ? e : r(n(e))
    }

    function i(e) {
        var n = e && e.offsetParent,
            r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) && "static" === t(n, "position") ? i(n) : n : window.document.documentElement
    }

    function o(e) {
        return null !== e.parentNode ? o(e.parentNode) : e
    }

    function a(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            r = n ? e : t,
            s = n ? t : e,
            l = document.createRange();
        l.setStart(r, 0), l.setEnd(s, 0);
        var u = l.commonAncestorContainer;
        if (e !== u && t !== u || r.contains(s)) return function (e) {
            var t = e.nodeName;
            return "BODY" !== t && ("HTML" === t || i(e.firstElementChild) === e)
        }(u) ? u : i(u);
        var c = o(e);
        return c.host ? a(c.host, t) : a(e, o(t).host)
    }

    function s(e) {
        var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var r = window.document.documentElement;
            return (window.document.scrollingElement || r)[t]
        }
        return e[t]
    }

    function l(e, t) {
        var n = "x" === t ? "Left" : "Top",
            r = "Left" === n ? "Right" : "Bottom";
        return +e["border" + n + "Width"].split("px")[0] + +e["border" + r + "Width"].split("px")[0]
    }

    function u(e, t, n, r) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], $() ? n["offset" + e] + r["margin" + ("Height" === e ? "Top" : "Left")] + r["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function c() {
        var e = window.document.body,
            t = window.document.documentElement,
            n = $() && window.getComputedStyle(t);
        return {
            height: u("Height", e, t, n),
            width: u("Width", e, t, n)
        }
    }

    function f(e) {
        return R({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function d(e) {
        var n = {};
        if ($()) try {
            n = e.getBoundingClientRect();
            var r = s(e, "top"),
                i = s(e, "left");
            n.top += r, n.left += i, n.bottom += r, n.right += i
        } catch (e) {} else n = e.getBoundingClientRect();
        var o = {
                left: n.left,
                top: n.top,
                width: n.right - n.left,
                height: n.bottom - n.top
            },
            a = "HTML" === e.nodeName ? c() : {},
            u = a.width || e.clientWidth || o.right - o.left,
            d = a.height || e.clientHeight || o.bottom - o.top,
            p = e.offsetWidth - u,
            h = e.offsetHeight - d;
        if (p || h) {
            var g = t(e);
            p -= l(g, "x"), h -= l(g, "y"), o.width -= p, o.height -= h
        }
        return f(o)
    }

    function p(e, n) {
        var i = $(),
            o = "HTML" === n.nodeName,
            a = d(e),
            l = d(n),
            u = r(e),
            c = t(n),
            p = +c.borderTopWidth.split("px")[0],
            h = +c.borderLeftWidth.split("px")[0],
            g = f({
                top: a.top - l.top - p,
                left: a.left - l.left - h,
                width: a.width,
                height: a.height
            });
        if (g.marginTop = 0, g.marginLeft = 0, !i && o) {
            var m = +c.marginTop.split("px")[0],
                v = +c.marginLeft.split("px")[0];
            g.top -= p - m, g.bottom -= p - m, g.left -= h - v, g.right -= h - v, g.marginTop = m, g.marginLeft = v
        }
        return (i ? n.contains(u) : n === u && "BODY" !== u.nodeName) && (g = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = s(t, "top"),
                i = s(t, "left"),
                o = n ? -1 : 1;
            return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
        }(g, n)), g
    }

    function h(e) {
        var r = e.nodeName;
        return "BODY" !== r && "HTML" !== r && ("fixed" === t(e, "position") || h(n(e)))
    }

    function g(e, t, i, o) {
        var l = {
                top: 0,
                left: 0
            },
            u = a(e, t);
        if ("viewport" === o) l = function (e) {
            var t = window.document.documentElement,
                n = p(e, t),
                r = Math.max(t.clientWidth, window.innerWidth || 0),
                i = Math.max(t.clientHeight, window.innerHeight || 0),
                o = s(t),
                a = s(t, "left");
            return f({
                top: o - n.top + n.marginTop,
                left: a - n.left + n.marginLeft,
                width: r,
                height: i
            })
        }(u);
        else {
            var d = void 0;
            "scrollParent" === o ? "BODY" === (d = r(n(e))).nodeName && (d = window.document.documentElement) : d = "window" === o ? window.document.documentElement : o;
            var g = p(d, u);
            if ("HTML" !== d.nodeName || h(u)) l = g;
            else {
                var m = c(),
                    v = m.height,
                    y = m.width;
                l.top += g.top - g.marginTop, l.bottom = v + g.top, l.left += g.left - g.marginLeft, l.right = y + g.left
            }
        }
        return l.left += i, l.top += i, l.right -= i, l.bottom -= i, l
    }

    function m(e, t, n, r, i) {
        var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = g(n, r, o, i),
            s = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            l = Object.keys(s).map(function (e) {
                return R({
                    key: e
                }, s[e], {
                    area: function (e) {
                        return e.width * e.height
                    }(s[e])
                })
            }).sort(function (e, t) {
                return t.area - e.area
            }),
            u = l.filter(function (e) {
                var t = e.width,
                    r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            }),
            c = u.length > 0 ? u[0].key : l[0].key,
            f = e.split("-")[1];
        return c + (f ? "-" + f : "")
    }

    function v(e, t, n) {
        return p(n, a(t, n))
    }

    function y(e) {
        var t = window.getComputedStyle(e),
            n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            r = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
        }
    }

    function b(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function w(e, t, n) {
        n = n.split("-")[0];
        var r = y(e),
            i = {
                width: r.width,
                height: r.height
            },
            o = -1 !== ["right", "left"].indexOf(n),
            a = o ? "top" : "left",
            s = o ? "left" : "top",
            l = o ? "height" : "width",
            u = o ? "width" : "height";
        return i[a] = t[a] + t[l] / 2 - r[l] / 2, i[s] = n === s ? t[s] - r[u] : t[b(s)], i
    }

    function x(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function T(t, n, r) {
        return (void 0 === r ? t : t.slice(0, function (e, t, n) {
            if (Array.prototype.findIndex) return e.findIndex(function (e) {
                return e[t] === n
            });
            var r = x(e, function (e) {
                return e[t] === n
            });
            return e.indexOf(r)
        }(t, "name", r))).forEach(function (t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var r = t.function || t.fn;
            t.enabled && e(r) && (n.offsets.popper = f(n.offsets.popper), n.offsets.reference = f(n.offsets.reference), n = r(n, t))
        }), n
    }

    function E(e, t) {
        return e.some(function (e) {
            var n = e.name;
            return e.enabled && n === t
        })
    }

    function C(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length - 1; r++) {
            var i = t[r],
                o = i ? "" + i + n : e;
            if (void 0 !== window.document.body.style[o]) return o
        }
        return null
    }

    function _(e, t, n, i) {
        var o = "BODY" === e.nodeName,
            a = o ? window : e;
        a.addEventListener(t, n, {
            passive: !0
        }), o || _(r(a.parentNode), t, n, i), i.push(a)
    }

    function A(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function S(e, t) {
        Object.keys(t).forEach(function (n) {
            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && A(t[n]) && (r = "px"), e.style[n] = t[n] + r
        })
    }

    function O(e, t, n) {
        var r = x(e, function (e) {
                return e.name === t
            }),
            i = !!r && e.some(function (e) {
                return e.name === n && e.enabled && e.order < r.order
            });
        if (!i) {
            var o = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return i
    }

    function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = B.indexOf(e),
            r = B.slice(n + 1).concat(B.slice(0, n));
        return t ? r.reverse() : r
    }
    for (var D = ["native code", "[object MutationObserverConstructor]"], N = "undefined" != typeof window, L = ["Edge", "Trident", "Firefox"], j = 0, I = 0; I < L.length; I += 1)
        if (N && navigator.userAgent.indexOf(L[I]) >= 0) {
            j = 1;
            break
        }
    var P = N && function (e) {
            return D.some(function (t) {
                return (e || "").toString().indexOf(t) > -1
            })
        }(window.MutationObserver) ? function (e) {
            var t = !1,
                n = 0,
                r = document.createElement("span");
            return new MutationObserver(function () {
                    e(), t = !1
                }).observe(r, {
                    attributes: !0
                }),
                function () {
                    t || (t = !0, r.setAttribute("x-index", n), n += 1)
                }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, j))
            }
        },
        H = void 0,
        $ = function () {
            return void 0 === H && (H = -1 !== navigator.appVersion.indexOf("MSIE 10")), H
        },
        F = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        q = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        M = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        },
        R = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        W = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        B = W.slice(3),
        U = {
            FLIP: "flip",
            CLOCKWISE: "clockwise",
            COUNTERCLOCKWISE: "counterclockwise"
        },
        G = {
            placement: "bottom",
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function () {},
            onUpdate: function () {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            r = t.split("-")[1];
                        if (r) {
                            var i = e.offsets,
                                o = i.reference,
                                a = i.popper,
                                s = -1 !== ["bottom", "top"].indexOf(n),
                                l = s ? "left" : "top",
                                u = s ? "width" : "height",
                                c = {
                                    start: M({}, l, o[l]),
                                    end: M({}, l, o[l] + o[u] - a[u])
                                };
                            e.offsets.popper = R({}, a, c[r])
                        }
                        return e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.offset,
                            r = e.placement,
                            i = e.offsets,
                            o = i.popper,
                            a = i.reference,
                            s = r.split("-")[0],
                            l = void 0;
                        return l = A(+n) ? [+n, 0] : function (e, t, n, r) {
                            var i = [0, 0],
                                o = -1 !== ["right", "left"].indexOf(r),
                                a = e.split(/(\+|\-)/).map(function (e) {
                                    return e.trim()
                                }),
                                s = a.indexOf(x(a, function (e) {
                                    return -1 !== e.search(/,|\s/)
                                }));
                            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                            var l = /\s*,\s*|\s+/,
                                u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
                            return (u = u.map(function (e, r) {
                                var i = (1 === r ? !o : o) ? "height" : "width",
                                    a = !1;
                                return e.reduce(function (e, t) {
                                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                                }, []).map(function (e) {
                                    return function (e, t, n, r) {
                                        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            o = +i[1],
                                            a = i[2];
                                        if (!o) return e;
                                        if (0 === a.indexOf("%")) {
                                            var s = void 0;
                                            switch (a) {
                                                case "%p":
                                                    s = n;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    s = r
                                            }
                                            return f(s)[t] / 100 * o
                                        }
                                        return "vh" === a || "vw" === a ? ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o : o
                                    }(e, i, t, n)
                                })
                            })).forEach(function (e, t) {
                                e.forEach(function (n, r) {
                                    A(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                                })
                            }), i
                        }(n, o, a, s), "left" === s ? (o.top += l[0], o.left -= l[1]) : "right" === s ? (o.top += l[0], o.left += l[1]) : "top" === s ? (o.left += l[0], o.top -= l[1]) : "bottom" === s && (o.left += l[0], o.top += l[1]), e.popper = o, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.boundariesElement || i(e.instance.popper);
                        e.instance.reference === n && (n = i(n));
                        var r = g(e.instance.popper, e.instance.reference, t.padding, n);
                        t.boundaries = r;
                        var o = t.priority,
                            a = e.offsets.popper,
                            s = {
                                primary: function (e) {
                                    var n = a[e];
                                    return a[e] < r[e] && !t.escapeWithReference && (n = Math.max(a[e], r[e])), M({}, e, n)
                                },
                                secondary: function (e) {
                                    var n = "right" === e ? "left" : "top",
                                        i = a[n];
                                    return a[e] > r[e] && !t.escapeWithReference && (i = Math.min(a[n], r[e] - ("right" === e ? a.width : a.height))), M({}, n, i)
                                }
                            };
                        return o.forEach(function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            a = R({}, a, s[t](e))
                        }), e.offsets.popper = a, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function (e) {
                        var t = e.offsets,
                            n = t.popper,
                            r = t.reference,
                            i = e.placement.split("-")[0],
                            o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(i),
                            s = a ? "right" : "bottom",
                            l = a ? "left" : "top",
                            u = a ? "width" : "height";
                        return n[s] < o(r[l]) && (e.offsets.popper[l] = o(r[l]) - n[u]), n[l] > o(r[s]) && (e.offsets.popper[l] = o(r[s])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function (e, n) {
                        if (!O(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = n.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r))) return e
                        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var i = e.placement.split("-")[0],
                            o = e.offsets,
                            a = o.popper,
                            s = o.reference,
                            l = -1 !== ["left", "right"].indexOf(i),
                            u = l ? "height" : "width",
                            c = l ? "Top" : "Left",
                            d = c.toLowerCase(),
                            p = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            g = y(r)[u];
                        s[h] - g < a[d] && (e.offsets.popper[d] -= a[d] - (s[h] - g)), s[d] + g > a[h] && (e.offsets.popper[d] += s[d] + g - a[h]);
                        var m = s[d] + s[u] / 2 - g / 2,
                            v = t(e.instance.popper, "margin" + c).replace("px", ""),
                            b = m - f(e.offsets.popper)[d] - v;
                        return b = Math.max(Math.min(a[u] - g, b), 0), e.arrowElement = r, e.offsets.arrow = {}, e.offsets.arrow[d] = Math.round(b), e.offsets.arrow[p] = "", e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (E(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = g(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                            r = e.placement.split("-")[0],
                            i = b(r),
                            o = e.placement.split("-")[1] || "",
                            a = [];
                        switch (t.behavior) {
                            case U.FLIP:
                                a = [r, i];
                                break;
                            case U.CLOCKWISE:
                                a = k(r);
                                break;
                            case U.COUNTERCLOCKWISE:
                                a = k(r, !0);
                                break;
                            default:
                                a = t.behavior
                        }
                        return a.forEach(function (s, l) {
                            if (r !== s || a.length === l + 1) return e;
                            r = e.placement.split("-")[0], i = b(r);
                            var u = e.offsets.popper,
                                c = e.offsets.reference,
                                f = Math.floor,
                                d = "left" === r && f(u.right) > f(c.left) || "right" === r && f(u.left) < f(c.right) || "top" === r && f(u.bottom) > f(c.top) || "bottom" === r && f(u.top) < f(c.bottom),
                                p = f(u.left) < f(n.left),
                                h = f(u.right) > f(n.right),
                                g = f(u.top) < f(n.top),
                                m = f(u.bottom) > f(n.bottom),
                                v = "left" === r && p || "right" === r && h || "top" === r && g || "bottom" === r && m,
                                y = -1 !== ["top", "bottom"].indexOf(r),
                                x = !!t.flipVariations && (y && "start" === o && p || y && "end" === o && h || !y && "start" === o && g || !y && "end" === o && m);
                            (d || v || x) && (e.flipped = !0, (d || v) && (r = a[l + 1]), x && (o = function (e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = R({}, e.offsets.popper, w(e.instance.popper, e.offsets.reference, e.placement)), e = T(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function (e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            r = e.offsets,
                            i = r.popper,
                            o = r.reference,
                            a = -1 !== ["left", "right"].indexOf(n),
                            s = -1 === ["top", "left"].indexOf(n);
                        return i[a ? "left" : "top"] = o[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = b(t), e.offsets.popper = f(i), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function (e) {
                        if (!O(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = x(e.instance.modifiers, function (e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function (e, t) {
                        var n = t.x,
                            r = t.y,
                            o = e.offsets.popper,
                            a = x(e.instance.modifiers, function (e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== a ? a : t.gpuAcceleration,
                            l = d(i(e.instance.popper)),
                            u = {
                                position: o.position
                            },
                            c = {
                                left: Math.floor(o.left),
                                top: Math.floor(o.top),
                                bottom: Math.floor(o.bottom),
                                right: Math.floor(o.right)
                            },
                            f = "bottom" === n ? "top" : "bottom",
                            p = "right" === r ? "left" : "right",
                            h = C("transform"),
                            g = void 0,
                            m = void 0;
                        if (m = "bottom" === f ? -l.height + c.bottom : c.top, g = "right" === p ? -l.width + c.right : c.left, s && h) u[h] = "translate3d(" + g + "px, " + m + "px, 0)", u[f] = 0, u[p] = 0, u.willChange = "transform";
                        else {
                            var v = "bottom" === f ? -1 : 1,
                                y = "right" === p ? -1 : 1;
                            u[f] = m * v, u[p] = g * y, u.willChange = f + ", " + p
                        }
                        var b = {
                            "x-placement": e.placement
                        };
                        return e.attributes = R({}, b, e.attributes), e.styles = R({}, u, e.styles), e.arrowStyles = R({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function (e) {
                        return S(e.instance.popper, e.styles),
                            function (e, t) {
                                Object.keys(t).forEach(function (n) {
                                    !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
                                })
                            }(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && S(e.arrowElement, e.arrowStyles), e
                    },
                    onLoad: function (e, t, n, r, i) {
                        var o = v(0, t, e),
                            a = m(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), S(t, {
                            position: "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        V = function () {
            function t(n, r) {
                var i = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                F(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update)
                }, this.update = P(this.update.bind(this)), this.options = R({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = n.jquery ? n[0] : n, this.popper = r.jquery ? r[0] : r, this.options.modifiers = {}, Object.keys(R({}, t.Defaults.modifiers, o.modifiers)).forEach(function (e) {
                    i.options.modifiers[e] = R({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return R({
                        name: e
                    }, i.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }
            return q(t, [{
                key: "update",
                value: function () {
                    return function () {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = v(this.state, this.popper, this.reference), e.placement = m(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = w(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = T(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function () {
                    return function () {
                        return this.state.isDestroyed = !0, E(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[C("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function () {
                    return function () {
                        this.state.eventsEnabled || (this.state = function (e, t, n, i) {
                            n.updateBound = i, window.addEventListener("resize", n.updateBound, {
                                passive: !0
                            });
                            var o = r(e);
                            return _(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
                        }(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function () {
                    return function () {
                        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = function (e, t) {
                            return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                                e.removeEventListener("scroll", t.updateBound)
                            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
                        }(this.reference, this.state))
                    }.call(this)
                }
            }]), t
        }();
    return V.Utils = ("undefined" != typeof window ? window : global).PopperUtils, V.placements = W, V.Defaults = G, V
});
var Util = function (e) {
        var t = "transitionend",
            n = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function (e) {
                    do {
                        e += ~~(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function (t) {
                    var n = t.getAttribute("data-target");
                    n && "#" !== n || (n = t.getAttribute("href") || "");
                    try {
                        return e(document).find(n).length > 0 ? n : null
                    } catch (e) {
                        return null
                    }
                },
                getTransitionDurationFromElement: function (t) {
                    if (!t) return 0;
                    var n = e(t).css("transition-duration");
                    return parseFloat(n) ? (n = n.split(",")[0], 1e3 * parseFloat(n)) : 0
                },
                reflow: function (e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function (n) {
                    e(n).trigger(t)
                },
                supportsTransitionEnd: function () {
                    return Boolean(t)
                },
                isElement: function (e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function (e, t, r) {
                    for (var i in r)
                        if (Object.prototype.hasOwnProperty.call(r, i)) {
                            var o = r[i],
                                a = t[i],
                                s = a && n.isElement(a) ? "element" : function (e) {
                                    return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
                                }(a);
                            if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".')
                        }
                }
            };
        return e.fn.emulateTransitionEnd = function (t) {
            var r = this,
                i = !1;
            return e(this).one(n.TRANSITION_END, function () {
                i = !0
            }), setTimeout(function () {
                i || n.triggerTransitionEnd(r)
            }, t), this
        }, e.event.special[n.TRANSITION_END] = {
            bindType: t,
            delegateType: t,
            handle: function (t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        }, n
    }($),
    Collapse = function (e) {
        var t = "collapse",
            n = "bs.collapse",
            r = e.fn[t],
            i = {
                toggle: !0,
                parent: ""
            },
            o = {
                toggle: "boolean",
                parent: "(string|element)"
            },
            a = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api"
            },
            s = {
                SHOW: "show",
                COLLAPSE: "collapse",
                COLLAPSING: "collapsing",
                COLLAPSED: "collapsed"
            },
            l = {
                WIDTH: "width",
                HEIGHT: "height"
            },
            u = {
                ACTIVES: ".show, .collapsing",
                DATA_TOGGLE: '[data-toggle="collapse"]'
            },
            c = function () {
                function r(t, n) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(n), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var r = e(u.DATA_TOGGLE), i = 0; i < r.length; i++) {
                        var o = r[i],
                            a = Util.getSelectorFromElement(o);
                        null !== a && e(a).filter(t).length > 0 && (this._selector = a, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }
                var c = r.prototype;
                return c.toggle = function () {
                    e(this._element).hasClass(s.SHOW) ? this.hide() : this.show()
                }, c.show = function () {
                    var t = this;
                    if (!this._isTransitioning && !e(this._element).hasClass(s.SHOW)) {
                        var i, o;
                        if (this._parent && 0 === (i = e.makeArray(e(this._parent).find(u.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (i = null), !(i && (o = e(i).not(this._selector).data(n)) && o._isTransitioning)) {
                            var l = e.Event(a.SHOW);
                            if (e(this._element).trigger(l), !l.isDefaultPrevented()) {
                                i && (r._jQueryInterface.call(e(i).not(this._selector), "hide"), o || e(i).data(n, null));
                                var c = this._getDimension();
                                e(this._element).removeClass(s.COLLAPSE).addClass(s.COLLAPSING), this._element.style[c] = 0, this._triggerArray.length > 0 && e(this._triggerArray).removeClass(s.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var f = "scroll" + (c[0].toUpperCase() + c.slice(1)),
                                    d = Util.getTransitionDurationFromElement(this._element);
                                e(this._element).one(Util.TRANSITION_END, function () {
                                    e(t._element).removeClass(s.COLLAPSING).addClass(s.COLLAPSE).addClass(s.SHOW), t._element.style[c] = "", t.setTransitioning(!1), e(t._element).trigger(a.SHOWN)
                                }).emulateTransitionEnd(d), this._element.style[c] = this._element[f] + "px"
                            }
                        }
                    }
                }, c.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(s.SHOW)) {
                        var n = e.Event(a.HIDE);
                        if (e(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var r = this._getDimension();
                            if (this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", Util.reflow(this._element), e(this._element).addClass(s.COLLAPSING).removeClass(s.COLLAPSE).removeClass(s.SHOW), this._triggerArray.length > 0)
                                for (var i = 0; i < this._triggerArray.length; i++) {
                                    var o = this._triggerArray[i],
                                        l = Util.getSelectorFromElement(o);
                                    if (null !== l) {
                                        e(l).hasClass(s.SHOW) || e(o).addClass(s.COLLAPSED).attr("aria-expanded", !1)
                                    }
                                }
                            this.setTransitioning(!0);
                            this._element.style[r] = "";
                            var u = Util.getTransitionDurationFromElement(this._element);
                            e(this._element).one(Util.TRANSITION_END, function () {
                                t.setTransitioning(!1), e(t._element).removeClass(s.COLLAPSING).addClass(s.COLLAPSE).trigger(a.HIDDEN)
                            }).emulateTransitionEnd(u)
                        }
                    }
                }, c.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, c.dispose = function () {
                    e.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, c._getConfig = function (e) {
                    return e = _objectSpread({}, i, e), e.toggle = Boolean(e.toggle), Util.typeCheckConfig(t, e, o), e
                }, c._getDimension = function () {
                    return e(this._element).hasClass(l.WIDTH) ? l.WIDTH : l.HEIGHT
                }, c._getParent = function () {
                    var t = this,
                        n = null;
                    Util.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = e(this._config.parent)[0];
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return e(n).find(i).each(function (e, n) {
                        t._addAriaAndCollapsedClass(r._getTargetFromElement(n), [n])
                    }), n
                }, c._addAriaAndCollapsedClass = function (t, n) {
                    if (t) {
                        var r = e(t).hasClass(s.SHOW);
                        n.length > 0 && e(n).toggleClass(s.COLLAPSED, !r).attr("aria-expanded", r)
                    }
                }, r._getTargetFromElement = function (t) {
                    var n = Util.getSelectorFromElement(t);
                    return n ? e(n)[0] : null
                }, r._jQueryInterface = function (t) {
                    return this.each(function () {
                        var o = e(this),
                            a = o.data(n),
                            s = _objectSpread({}, i, o.data(), "object" == typeof t && t);
                        if (!a && s.toggle && /show|hide/.test(t) && (s.toggle = !1), a || (a = new r(this, s), o.data(n, a)), "string" == typeof t) {
                            if (void 0 === a[t]) throw new TypeError('No method named "' + t + '"');
                            a[t]()
                        }
                    })
                }, _createClass(r, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return i
                    }
                }]), r
            }();
        return e(document).on(a.CLICK_DATA_API, u.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var r = e(this),
                i = Util.getSelectorFromElement(this);
            e(i).each(function () {
                var t = e(this),
                    i = t.data(n) ? "toggle" : r.data();
                c._jQueryInterface.call(t, i)
            })
        }), e.fn[t] = c._jQueryInterface, e.fn[t].Constructor = c, e.fn[t].noConflict = function () {
            return e.fn[t] = r, c._jQueryInterface
        }, c
    }($),
    Dropdown = function (e) {
        var t = "dropdown",
            n = "bs.dropdown",
            r = "." + n,
            i = e.fn[t],
            o = new RegExp("38|40|27"),
            a = {
                HIDE: "hide" + r,
                HIDDEN: "hidden" + r,
                SHOW: "show" + r,
                SHOWN: "shown" + r,
                CLICK: "click" + r,
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            },
            s = {
                DISABLED: "disabled",
                SHOW: "show",
                DROPUP: "dropup",
                DROPRIGHT: "dropright",
                DROPLEFT: "dropleft",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                POSITION_STATIC: "position-static"
            },
            l = {
                DATA_TOGGLE: '[data-toggle="dropdown"]',
                FORM_CHILD: ".dropdown form",
                MENU: ".dropdown-menu",
                NAVBAR_NAV: ".navbar-nav",
                VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
            },
            u = {
                TOP: "top-start",
                TOPEND: "top-end",
                BOTTOM: "bottom-start",
                BOTTOMEND: "bottom-end",
                RIGHT: "right-start",
                RIGHTEND: "right-end",
                LEFT: "left-start",
                LEFTEND: "left-end"
            },
            c = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            },
            f = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            },
            d = function () {
                function i(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }
                var d = i.prototype;
                return d.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass(s.DISABLED)) {
                        var t = i._getParentFromElement(this._element),
                            n = e(this._menu).hasClass(s.SHOW);
                        if (i._clearMenus(), !n) {
                            var r = {
                                    relatedTarget: this._element
                                },
                                o = e.Event(a.SHOW, r);
                            if (e(t).trigger(o), !o.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof Popper) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var u = this._element;
                                    "parent" === this._config.reference ? u = t : Util.isElement(this._config.reference) && (u = this._config.reference, void 0 !== this._config.reference.jquery && (u = this._config.reference[0])), "scrollParent" !== this._config.boundary && e(t).addClass(s.POSITION_STATIC), this._popper = new Popper(u, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === e(t).closest(l.NAVBAR_NAV).length && e(document.body).children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(s.SHOW), e(t).toggleClass(s.SHOW).trigger(e.Event(a.SHOWN, r))
                            }
                        }
                    }
                }, d.dispose = function () {
                    e.removeData(this._element, n), e(this._element).off(r), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, d.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, d._addEventListeners = function () {
                    var t = this;
                    e(this._element).on(a.CLICK, function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    })
                }, d._getConfig = function (n) {
                    return n = _objectSpread({}, this.constructor.Default, e(this._element).data(), n), Util.typeCheckConfig(t, n, this.constructor.DefaultType), n
                }, d._getMenuElement = function () {
                    if (!this._menu) {
                        var t = i._getParentFromElement(this._element);
                        this._menu = e(t).find(l.MENU)[0]
                    }
                    return this._menu
                }, d._getPlacement = function () {
                    var t = e(this._element).parent(),
                        n = u.BOTTOM;
                    return t.hasClass(s.DROPUP) ? (n = u.TOP, e(this._menu).hasClass(s.MENURIGHT) && (n = u.TOPEND)) : t.hasClass(s.DROPRIGHT) ? n = u.RIGHT : t.hasClass(s.DROPLEFT) ? n = u.LEFT : e(this._menu).hasClass(s.MENURIGHT) && (n = u.BOTTOMEND), n
                }, d._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0
                }, d._getPopperConfig = function () {
                    var e = this,
                        t = {};
                    "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = _objectSpread({}, t.offsets, e._config.offset(t.offsets) || {}), t
                    } : t.offset = this._config.offset;
                    var n = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: t,
                            flip: {
                                enabled: this._config.flip
                            },
                            preventOverflow: {
                                boundariesElement: this._config.boundary
                            }
                        }
                    };
                    return "static" === this._config.display && (n.modifiers.applyStyle = {
                        enabled: !1
                    }), n
                }, i._jQueryInterface = function (t) {
                    return this.each(function () {
                        var r = e(this).data(n);
                        if (r || (r = new i(this, "object" == typeof t ? t : null), e(this).data(n, r)), "string" == typeof t) {
                            if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                            r[t]()
                        }
                    })
                }, i._clearMenus = function (t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                        for (var r = e.makeArray(e(l.DATA_TOGGLE)), o = 0; o < r.length; o++) {
                            var u = i._getParentFromElement(r[o]),
                                c = e(r[o]).data(n),
                                f = {
                                    relatedTarget: r[o]
                                };
                            if (c) {
                                var d = c._menu;
                                if (e(u).hasClass(s.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(u, t.target))) {
                                    var p = e.Event(a.HIDE, f);
                                    e(u).trigger(p), p.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e(document.body).children().off("mouseover", null, e.noop), r[o].setAttribute("aria-expanded", "false"), e(d).removeClass(s.SHOW), e(u).removeClass(s.SHOW).trigger(e.Event(a.HIDDEN, f)))
                                }
                            }
                        }
                }, i._getParentFromElement = function (t) {
                    var n, r = Util.getSelectorFromElement(t);
                    return r && (n = e(r)[0]), n || t.parentNode
                }, i._dataApiKeydownHandler = function (t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(l.MENU).length)) : o.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(s.DISABLED))) {
                        var n = i._getParentFromElement(this),
                            r = e(n).hasClass(s.SHOW);
                        if ((r || 27 === t.which && 32 === t.which) && (!r || 27 !== t.which && 32 !== t.which)) {
                            var a = e(n).find(l.VISIBLE_ITEMS).get();
                            if (0 !== a.length) {
                                var u = a.indexOf(t.target);
                                38 === t.which && u > 0 && u--, 40 === t.which && u < a.length - 1 && u++, u < 0 && (u = 0), a[u].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var c = e(n).find(l.DATA_TOGGLE)[0];
                                e(c).trigger("focus")
                            }
                            e(this).trigger("click")
                        }
                    }
                }, _createClass(i, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.0"
                    }
                }, {
                    key: "Default",
                    get: function () {
                        return c
                    }
                }, {
                    key: "DefaultType",
                    get: function () {
                        return f
                    }
                }]), i
            }();
        return e(document).on(a.KEYDOWN_DATA_API, l.DATA_TOGGLE, d._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, l.MENU, d._dataApiKeydownHandler).on(a.CLICK_DATA_API + " " + a.KEYUP_DATA_API, d._clearMenus).on(a.CLICK_DATA_API, l.DATA_TOGGLE, function (t) {
            t.preventDefault(), t.stopPropagation(), d._jQueryInterface.call(e(this), "toggle")
        }).on(a.CLICK_DATA_API, l.FORM_CHILD, function (e) {
            e.stopPropagation()
        }), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
            return e.fn[t] = i, d._jQueryInterface
        }, d
    }($, Popper),
    Tab = function (e) {
        var t = e.fn.tab,
            n = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api"
            },
            r = {
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active",
                DISABLED: "disabled",
                FADE: "fade",
                SHOW: "show"
            },
            i = {
                DROPDOWN: ".dropdown",
                NAV_LIST_GROUP: ".nav, .list-group",
                ACTIVE: ".active",
                ACTIVE_UL: "> li > .active",
                DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                DROPDOWN_TOGGLE: ".dropdown-toggle",
                DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
            },
            o = function () {
                function t(e) {
                    this._element = e
                }
                var o = t.prototype;
                return o.show = function () {
                    var t = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(r.ACTIVE) || e(this._element).hasClass(r.DISABLED))) {
                        var o, a, s = e(this._element).closest(i.NAV_LIST_GROUP)[0],
                            l = Util.getSelectorFromElement(this._element);
                        if (s) {
                            var u = "UL" === s.nodeName ? i.ACTIVE_UL : i.ACTIVE;
                            a = e.makeArray(e(s).find(u)), a = a[a.length - 1]
                        }
                        var c = e.Event(n.HIDE, {
                                relatedTarget: this._element
                            }),
                            f = e.Event(n.SHOW, {
                                relatedTarget: a
                            });
                        if (a && e(a).trigger(c), e(this._element).trigger(f), !f.isDefaultPrevented() && !c.isDefaultPrevented()) {
                            l && (o = e(l)[0]), this._activate(this._element, s);
                            var d = function () {
                                var r = e.Event(n.HIDDEN, {
                                        relatedTarget: t._element
                                    }),
                                    i = e.Event(n.SHOWN, {
                                        relatedTarget: a
                                    });
                                e(a).trigger(r), e(t._element).trigger(i)
                            };
                            o ? this._activate(o, o.parentNode, d) : d()
                        }
                    }
                }, o.dispose = function () {
                    e.removeData(this._element, "bs.tab"), this._element = null
                }, o._activate = function (t, n, o) {
                    var a, s = this,
                        l = (a = "UL" === n.nodeName ? e(n).find(i.ACTIVE_UL) : e(n).children(i.ACTIVE))[0],
                        u = o && l && e(l).hasClass(r.FADE),
                        c = function () {
                            return s._transitionComplete(t, l, o)
                        };
                    if (l && u) {
                        var f = Util.getTransitionDurationFromElement(l);
                        e(l).one(Util.TRANSITION_END, c).emulateTransitionEnd(f)
                    } else c()
                }, o._transitionComplete = function (t, n, o) {
                    if (n) {
                        e(n).removeClass(r.SHOW + " " + r.ACTIVE);
                        var a = e(n.parentNode).find(i.DROPDOWN_ACTIVE_CHILD)[0];
                        a && e(a).removeClass(r.ACTIVE), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (e(t).addClass(r.ACTIVE), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Util.reflow(t), e(t).addClass(r.SHOW), t.parentNode && e(t.parentNode).hasClass(r.DROPDOWN_MENU)) {
                        var s = e(t).closest(i.DROPDOWN)[0];
                        s && e(s).find(i.DROPDOWN_TOGGLE).addClass(r.ACTIVE), t.setAttribute("aria-expanded", !0)
                    }
                    o && o()
                }, t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = e(this),
                            i = r.data("bs.tab");
                        if (i || (i = new t(this), r.data("bs.tab", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, _createClass(t, null, [{
                    key: "VERSION",
                    get: function () {
                        return "4.1.0"
                    }
                }]), t
            }();
        return e(document).on(n.CLICK_DATA_API, i.DATA_TOGGLE, function (t) {
            t.preventDefault(), o._jQueryInterface.call(e(this), "show")
        }), e.fn.tab = o._jQueryInterface, e.fn.tab.Constructor = o, e.fn.tab.noConflict = function () {
            return e.fn.tab = t, o._jQueryInterface
        }, o
    }($);
! function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Clipboard = e()
    }
}(function () {
    return function e(t, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[a] = {
                    exports: {}
                };
                t[a][0].call(c.exports, function (e) {
                    var n = t[a][1][e];
                    return i(n || e)
                }, c, c.exports, e, t, n, r)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
        return i
    }({
        1: [function (e, t, n) {
            var r = 9;
            if ("undefined" != typeof Element && !Element.prototype.matches) {
                var i = Element.prototype;
                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
            }
            t.exports = function (e, t) {
                for (; e && e.nodeType !== r;) {
                    if ("function" == typeof e.matches && e.matches(t)) return e;
                    e = e.parentNode
                }
            }
        }, {}],
        2: [function (e, t, n) {
            var r = e("./closest");
            t.exports = function (e, t, n, i, o) {
                var a = function (e, t, n, i) {
                    return function (n) {
                        n.delegateTarget = r(n.target, t), n.delegateTarget && i.call(e, n)
                    }
                }.apply(this, arguments);
                return e.addEventListener(n, a, o), {
                    destroy: function () {
                        e.removeEventListener(n, a, o)
                    }
                }
            }
        }, {
            "./closest": 1
        }],
        3: [function (e, t, n) {
            n.node = function (e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, n.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || n.node(e[0]))
            }, n.string = function (e) {
                return "string" == typeof e || e instanceof String
            }, n.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, {}],
        4: [function (e, t, n) {
            var r = e("./is"),
                i = e("delegate");
            t.exports = function (e, t, n) {
                if (!e && !t && !n) throw new Error("Missing required arguments");
                if (!r.string(t)) throw new TypeError("Second argument must be a String");
                if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
                if (r.node(e)) return function (e, t, n) {
                    return e.addEventListener(t, n), {
                        destroy: function () {
                            e.removeEventListener(t, n)
                        }
                    }
                }(e, t, n);
                if (r.nodeList(e)) return function (e, t, n) {
                    return Array.prototype.forEach.call(e, function (e) {
                        e.addEventListener(t, n)
                    }), {
                        destroy: function () {
                            Array.prototype.forEach.call(e, function (e) {
                                e.removeEventListener(t, n)
                            })
                        }
                    }
                }(e, t, n);
                if (r.string(e)) return function (e, t, n) {
                    return i(document.body, e, t, n)
                }(e, t, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function (e, t, n) {
            t.exports = function (e) {
                var t;
                if ("SELECT" === e.nodeName) e.focus(), t = e.value;
                else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                    var n = e.hasAttribute("readonly");
                    n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value
                } else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var r = window.getSelection(),
                        i = document.createRange();
                    i.selectNodeContents(e), r.removeAllRanges(), r.addRange(i), t = r.toString()
                }
                return t
            }
        }, {}],
        6: [function (e, t, n) {
            function r() {}
            r.prototype = {
                on: function (e, t, n) {
                    var r = this.e || (this.e = {});
                    return (r[e] || (r[e] = [])).push({
                        fn: t,
                        ctx: n
                    }), this
                },
                once: function (e, t, n) {
                    function r() {
                        i.off(e, r), t.apply(n, arguments)
                    }
                    var i = this;
                    return r._ = t, this.on(e, r, n)
                },
                emit: function (e) {
                    var t = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[e] || []).slice(),
                        r = 0,
                        i = n.length;
                    for (r; r < i; r++) n[r].fn.apply(n[r].ctx, t);
                    return this
                },
                off: function (e, t) {
                    var n = this.e || (this.e = {}),
                        r = n[e],
                        i = [];
                    if (r && t)
                        for (var o = 0, a = r.length; o < a; o++) r[o].fn !== t && r[o].fn._ !== t && i.push(r[o]);
                    return i.length ? n[e] = i : delete n[e], this
                }
            }, t.exports = r
        }, {}],
        7: [function (e, t, n) {
            ! function (r, i) {
                if (void 0 !== n) i(t, e("select"));
                else {
                    var o = {
                        exports: {}
                    };
                    i(o, r.select), r.clipboardAction = o.exports
                }
            }(this, function (e, t) {
                "use strict";
                var n = function (e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(t),
                    r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    i = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    o = function () {
                        function e(t) {
                            ! function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return i(e, [{
                            key: "resolveOptions",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                            }
                        }, {
                            key: "initSelection",
                            value: function () {
                                this.text ? this.selectFake() : this.target && this.selectTarget()
                            }
                        }, {
                            key: "selectFake",
                            value: function () {
                                var e = this,
                                    t = "rtl" == document.documentElement.getAttribute("dir");
                                this.removeFake(), this.fakeHandlerCallback = function () {
                                    return e.removeFake()
                                }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
                                var r = window.pageYOffset || document.documentElement.scrollTop;
                                this.fakeElem.style.top = r + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
                            }
                        }, {
                            key: "removeFake",
                            value: function () {
                                this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                            }
                        }, {
                            key: "selectTarget",
                            value: function () {
                                this.selectedText = (0, n.default)(this.target), this.copyText()
                            }
                        }, {
                            key: "copyText",
                            value: function () {
                                var e = void 0;
                                try {
                                    e = document.execCommand(this.action)
                                } catch (t) {
                                    e = !1
                                }
                                this.handleResult(e)
                            }
                        }, {
                            key: "handleResult",
                            value: function (e) {
                                this.emitter.emit(e ? "success" : "error", {
                                    action: this.action,
                                    text: this.selectedText,
                                    trigger: this.trigger,
                                    clearSelection: this.clearSelection.bind(this)
                                })
                            }
                        }, {
                            key: "clearSelection",
                            value: function () {
                                this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.removeFake()
                            }
                        }, {
                            key: "action",
                            set: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function () {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function (e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function () {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = o
            })
        }, {
            select: 5
        }],
        8: [function (e, t, n) {
            ! function (r, i) {
                if (void 0 !== n) i(t, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                else {
                    var o = {
                        exports: {}
                    };
                    i(o, r.clipboardAction, r.tinyEmitter, r.goodListener), r.clipboard = o.exports
                }
            }(this, function (e, t, n, r) {
                "use strict";

                function i(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function o(e, t) {
                    var n = "data-clipboard-" + e;
                    if (t.hasAttribute(n)) return t.getAttribute(n)
                }
                var a = i(t),
                    s = i(n),
                    l = i(r),
                    u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    c = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }
                        return function (t, n, r) {
                            return n && e(t.prototype, n), r && e(t, r), t
                        }
                    }(),
                    f = function (e) {
                        function t(e, n) {
                            ! function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t);
                            var r = function (e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != typeof t && "function" != typeof t ? e : t
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                            return r.resolveOptions(n), r.listenClick(e), r
                        }
                        return function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, s.default), c(t, [{
                            key: "resolveOptions",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === u(e.container) ? e.container : document.body
                            }
                        }, {
                            key: "listenClick",
                            value: function (e) {
                                var t = this;
                                this.listener = (0, l.default)(e, "click", function (e) {
                                    return t.onClick(e)
                                })
                            }
                        }, {
                            key: "onClick",
                            value: function (e) {
                                var t = e.delegateTarget || e.currentTarget;
                                this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({
                                    action: this.action(t),
                                    target: this.target(t),
                                    text: this.text(t),
                                    container: this.container,
                                    trigger: t,
                                    emitter: this
                                })
                            }
                        }, {
                            key: "defaultAction",
                            value: function (e) {
                                return o("action", e)
                            }
                        }, {
                            key: "defaultTarget",
                            value: function (e) {
                                var t = o("target", e);
                                if (t) return document.querySelector(t)
                            }
                        }, {
                            key: "defaultText",
                            value: function (e) {
                                return o("text", e)
                            }
                        }, {
                            key: "destroy",
                            value: function () {
                                this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                            }
                        }], [{
                            key: "isSupported",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                    t = "string" == typeof e ? [e] : e,
                                    n = !!document.queryCommandSupported;
                                return t.forEach(function (e) {
                                    n = n && !!document.queryCommandSupported(e)
                                }), n
                            }
                        }]), t
                    }();
                e.exports = f
            })
        }, {
            "./clipboard-action": 7,
            "good-listener": 4,
            "tiny-emitter": 6
        }]
    }, {}, [8])(8)
}), $(function () {
    new Clipboard(".code-example__btn-copy", {
        target: function (e) {
            return $(e).closest(".code-example").find(".prettyprint")[0]
        }
    }).on("success", function (e) {
        $(e.trigger).attr("disabled", !0), $(e.trigger).find(".result").fadeIn(400), window.setTimeout(function () {
            $(e.trigger).attr("disabled", !1), $(e.trigger).find(".result").fadeOut(400)
        }, 3e3), e.clearSelection()
    });
    var e = $("#reload-captcha");
    e.length && e.click(function () {
        $("#img-captcha").attr("src", "/assets/captcha/captcha.php?id=" + Math.random())
    }), $(".navbar").find(".nav-link, .dropdown-item").each(function () {
        location.href.indexOf(this.href) >= 0 && $(this).addClass("active")
    }), $(".userphoto").length > 0 && $.post("ajax", {
        action: "getPhotoUser"
    }, function (e) {
        e.length > 0 ? $(".userphoto").html('<img class="rounded" src="' + e + '" alt="Фото пользователя">') : $(".userphoto").html('<img class="rounded" src="assets/images/default-photo-user.png" alt="Фото пользователя">')
    }), $("a.authorization").each(function () {
        $(this).attr("href", "authorization?hauth_return=" + location.pathname.substring(1))
    }), $(".scrollup").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1e3)
    }), $(window).scroll(function () {
        $(this).scrollTop() > 200 ? $(".scrollup").fadeIn() : $(".scrollup").fadeOut()
    }), $(document).on("click", ".spoiler_link", function () {
        $(this).next(".spoiler").toggle()
    });
    var t = function (e, t) {
        var n = $(".aside-nav"),
            r = n.attr("data-id"),
            i = $(".aside-nav__body"),
            o = $("#aside-nav__input"),
            a = "empty";
        e && "true" === localStorage.getItem("aside_nav_state") && (o.prop("checked", !0), t = !0), t && (a = r), $.ajax({
            url: "/assets/aside_nav/" + a + ".tpl",
            cache: !1,
            dataType: "html",
            success: function (t) {
                i.html(t);
                var r = $('.aside-nav__items a[href="' + location.pathname.slice(1) + '"]');
                e && ($(".aside-nav-loading").remove(), n.removeClass("d-none")), console.log(r), 1 === r.length && (r.addClass("current"), r.closest(".item").find('a[data-toggle="collapse"]').addClass("current").click())
            }
        })
    };
    $("#aside-nav__input").length && t(!0, !1), $("#aside-nav__input").change(function () {
        localStorage.setItem("aside_nav_state", $(this).prop("checked")), t(!1, $(this).prop("checked"))
    }), $("#tickets-popular a").length >= 1 && $("#tickets-popular a").hover(function () {
        $(this).closest(".ticket-row").find(".ticket-idx").addClass("active")
    }, function () {
        $(this).closest(".ticket-row").find(".ticket-idx").removeClass("active")
    }), $(document).on("as_complete", document, function (e, t) {
        $("#comment-editor").markItUp(TicketsConfig.editor.comment)
    });
    var n = {};
    $.get("assets/components/polls/polls.php", function (e) {
        e = JSON.parse(e);
        if (n.id = e.id, n.question = e.question, n.answers = e.answers, e.hasOwnProperty("enddate") && $("#section-vote .panel-title").append(" (Дата окончания: " + e.enddate + ")"), e.hasOwnProperty("result")) {
            if (e.hasOwnProperty("nextpoll")) {
                var t = e.nextpoll;
                $("#section-vote .panel-body").prepend('<p class="alert alert-warning">' + t + "</p>")
            }
            $("#section-vote .question").text(n.question);
            for (var i = n.answers, o = "", a = e.result, s = 0, l = 0; l <= a.length - 1; l++) s += a[l];
            for (l = 0; l <= a.length - 1; l++) o += '<p style="margin:0px;">' + i[l] + '</p><div class="progress"><div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="' + a[l] / s * 100 + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + a[l] / s * 100 + '%"><span class="sr-only">' + a[l] / s * 100 + '%</span></div></div><p class="text-right" style="margin:0px;"><b>' + (a[l] / s * 100).toFixed(1) + "%</b> (Голосов: " + a[l] + ")</p>";
            o += "<p>Всего голосов: <b>" + s + "</b></p>", $("#section-vote .main").html(o)
        } else r()
    });
    var r = function () {
        var e = n.id,
            t = n.answers;
        $("#section-vote .question").text(n.question);
        for (var r = "", i = 0; i <= n.answers.length - 1; i++) r += '<div class="form-check pb-2" style="line-height: 1.25"><label class="form-check-label"><input class="form-check-input" type="radio" name="poll" value="' + (i + 1) + '">' + n.answers[i] + "</label></div>";
        r = '<form id="vote" action="assets/components/polls/poll-vote.php" method="POST"><input type="hidden" name="count" value="' + n.answers.length + '"><input type="hidden" name="id" value="' + n.id + '"><div class="answers">' + r + '</div><button type="submit" class="btn btn-light btn-block" disabled="disabled">Голосовать</button></form>', $("#section-vote .main").html(r), form = $("#vote"), form.find('button[type="submit"]:disabled') && form.find('input[type="radio"]').click(function () {
            form.find('button[type="submit"]').prop("disabled", !1), form.find('input[type="radio"]').off("click")
        }), form.submit(function (n) {
            n.preventDefault(), $.post(form.attr("action"), form.serializeArray(), function (n) {
                if (n) {
                    for (var r = "", i = (n = JSON.parse(n))[e], o = 0, a = 0; a <= i.length - 1; a++) o += i[a];
                    for (a = 0; a <= i.length - 1; a++) r += '<p style="margin:0px;">' + t[a] + '</p><div class="progress"><div class="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-valuenow="' + i[a] / o * 100 + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + i[a] / o * 100 + '%"><span class="sr-only">' + i[a] / o * 100 + '%</span></div></div><p class="text-right" style="margin:0px;"><b>' + (i[a] / o * 100).toFixed(1) + "%</b> (Голосов: " + i[a] + ")</p>";
                    r += "<p>Всего голосов: <b>" + o + "</b></p>", $("#section-vote .main").html(r)
                }
            })
        })
    };
    $("#close-filter").length >= 1 && ($('input[name="query"]').val(function (e) {
        var t = null,
            n = [];
        return location.search.substr(1).split("&").forEach(function (r) {
            (n = r.split("="))[0] === e && (t = decodeURIComponent(n[1]))
        }), t
    }("query")), $("#close-filter").click(function (e) {
        e.preventDefault(), $("#filter").hide(), $("#content").removeClass("col-md-8"), $("#content").addClass("col-md-12"), $("#category-toggle").show()
    }), $(document).on("click", "#category-toggle", function (e) {
        e.preventDefault(), $("#filter").show(), $("#content").removeClass("col-md-12"), $("#content").addClass("col-md-8"), $("#category-toggle").hide()
    }));
    var i = location.hash;
    if (i) {
        var o = $(i).offset().top - 90;
        $("body").animate({
            scrollTop: o
        }, 1e3)
    }
    $(document).on("click", ".ticket-comment-link a", function (e) {
        e.preventDefault();
        var t = $(this).attr("href"),
            n = $(t.substring(t.lastIndexOf("#"))).offset().top - 90;
        $("body").animate({
            scrollTop: n
        })
    }), localStorage.getItem("rules-commenting") || ($(document).one("click", "#comment-new-link a", function () {
        0 == $("#rules-commenting").length && $.get("assets/rules-commenting.txt", function (e) {
            $("#comment-new-link").after(e)
        })
    }), $(document).on("click", "a.reply", function () {
        1 == $("#rules-commenting").length && $("#rules-commenting").hide()
    })), 1 == $("#loadcomments").length && $(document).one("click", '#rules-commenting [data-dismiss="alert"]', function () {
        localStorage.setItem("rules-commenting", (new Date).toLocaleDateString())
    }), $(".change-bg-dark").hover(function () {
        $(this).removeClass("bg-secondary").addClass("bg-dark")
    }, function () {
        $(this).removeClass("bg-dark").addClass("bg-secondary")
    });
    var a = {
        list: [],
        length: 7,
        add: function (e, t, n) {
            var r = {
                    title: e,
                    url: t,
                    date: n
                },
                i = -1;
            $.each(this.list, function (e, t) {
                t.url === r.url && (i = e)
            }), i > -1 ? this.list.splice(i, 1) : this.list.length === this.length && this.list.shift(), this.list.push(r)
        },
        init: function () {
            var e = 0,
                t = location.pathname,
                n = $("h1").eq(0).text(),
                r = (new Date).toLocaleDateString();
            localStorage.getItem("history_items") && (this.list = JSON.parse(localStorage.getItem("history_items")));
            for (var i = 0; i < t.length; i++) "/" === t[i] && e++;
            3 === e && "/" !== t[t.length - 1] && (this.add(n, t, r), localStorage.setItem("history_items", JSON.stringify(this.list)))
        },
        output: function () {
            var e = "";
            return $.each(this.list.reverse(), function (t, n) {
                e += '<div class="d-flex align-items-center mb-3"><div class="rounded d-flex align-items-center bg-danger" style="width: 34px; height: 34px; flex-shrink: 0;"><div class="w-100 text-center text-white font-weight-bold" style="font-size: 20px;">' + (t + 1) + '</div></div><div class="ml-3 text-muted" style="flex-grow: 1; line-height: 1.1;"><a class="link_muted link_muted__danger" href="' + n.url + '">' + n.title + "</a> ~" + n.date + "</div></div>"
            }), e.length || (e = '<p class="text-muted">Здесь будут отображаться ссылки на последние просмотренные страницы...</p>'), e
        }
    };
    $(function () {
        a.init(), $("#mod__history").html(a.output())
    }), $("#btn-user").on("click", function (e) {
        e.preventDefault(), $("#navbar-sections").hasClass("d-none") || $("#navbar-sections").addClass("d-none"), $("#navbar-user").hasClass("d-none") && $("#navbar-user").removeClass("d-none"), $("#navbar").collapse("toggle")
    }), $("#navbar").on("hidden.bs.collapse", function () {
        $("#navbar-sections").removeClass("d-none"), $("#navbar-user").hasClass("d-none") || $("#navbar-user").addClass("d-none")
    })
});
//# sourceMappingURL=main.js.map