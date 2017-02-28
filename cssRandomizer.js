! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function i(e, t) {
        t = t || Z;
        var i = t.createElement("script");
        i.text = e, t.head.appendChild(i).parentNode.removeChild(i)
    }

    function n(e) {
        var t = !!e && "length" in e && e.length,
            i = ce.type(e);
        return "function" !== i && !ce.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t, i) {
        if (ce.isFunction(t)) return ce.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return ce.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (xe.test(t)) return ce.filter(t, e, i);
            t = ce.filter(t, e)
        }
        return ce.grep(e, function(e) {
            return oe.call(t, e) > -1 !== i && 1 === e.nodeType
        })
    }

    function r(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function s(e) {
        var t = {};
        return ce.each(e.match(Ee) || [], function(e, i) {
            t[i] = !0
        }), t
    }

    function a(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function u(e, t, i) {
        var n;
        try {
            e && ce.isFunction(n = e.promise) ? n.call(e).done(t).fail(i) : e && ce.isFunction(n = e.then) ? n.call(e, t, i) : t.call(void 0, e)
        } catch (e) {
            i.call(void 0, e)
        }
    }

    function h() {
        Z.removeEventListener("DOMContentLoaded", h), e.removeEventListener("load", h), ce.ready()
    }

    function d() {
        this.expando = ce.expando + d.uid++
    }

    function c(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(Le, "-$&").toLowerCase(), i = e.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : Ie.test(i) ? JSON.parse(i) : i)
                } catch (o) {}
                He.set(e, t, i)
            } else i = void 0;
        return i
    }

    function f(e, t, i, n) {
        var o, r = 1,
            s = 20,
            a = n ? function() {
                    return n.cur()
                } : function() {
                    return ce.css(e, t, "")
                },
            l = a(),
            u = i && i[3] || (ce.cssNumber[t] ? "" : "px"),
            h = (ce.cssNumber[t] || "px" !== u && +l) && Ne.exec(ce.css(e, t));
        if (h && h[3] !== u) {
            u = u || h[3], i = i || [], h = +l || 1;
            do r = r || ".5", h /= r, ce.style(e, t, h + u); while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return i && (h = +h || +l || 0, o = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n.start = h, n.end = o)), o
    }

    function p(e) {
        var t, i = e.ownerDocument,
            n = e.nodeName,
            o = qe[n];
        return o ? o : (t = i.body.appendChild(i.createElement(n)), o = ce.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), qe[n] = o, o)
    }

    function v(e, t) {
        for (var i, n, o = [], r = 0, s = e.length; s > r; r++) n = e[r], n.style && (i = n.style.display, t ? ("none" === i && (o[r] = Pe.get(n, "display") || null, o[r] || (n.style.display = "")), "" === n.style.display && Oe(n) && (o[r] = p(n))) : "none" !== i && (o[r] = "none", Pe.set(n, "display", i)));
        for (r = 0; s > r; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function g(e, t) {
        var i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ce.nodeName(e, t) ? ce.merge([e], i) : i
    }

    function m(e, t) {
        for (var i = 0, n = e.length; n > i; i++) Pe.set(e[i], "globalEval", !t || Pe.get(t[i], "globalEval"))
    }

    function y(e, t, i, n, o) {
        for (var r, s, a, l, u, h, d = t.createDocumentFragment(), c = [], f = 0, p = e.length; p > f; f++)
            if (r = e[f], r || 0 === r)
                if ("object" === ce.type(r)) ce.merge(c, r.nodeType ? [r] : r);
                else if (Xe.test(r)) {
                    for (s = s || d.appendChild(t.createElement("div")), a = (ze.exec(r) || ["", ""])[1].toLowerCase(), l = Ve[a] || Ve._default, s.innerHTML = l[1] + ce.htmlPrefilter(r) + l[2], h = l[0]; h--;) s = s.lastChild;
                    ce.merge(c, s.childNodes), s = d.firstChild, s.textContent = ""
                } else c.push(t.createTextNode(r));
        for (d.textContent = "", f = 0; r = c[f++];)
            if (n && ce.inArray(r, n) > -1) o && o.push(r);
            else if (u = ce.contains(r.ownerDocument, r), s = g(d.appendChild(r), "script"), u && m(s), i)
                for (h = 0; r = s[h++];) Ue.test(r.type || "") && i.push(r);
        return d
    }

    function w() {
        return !0
    }

    function b() {
        return !1
    }

    function _() {
        try {
            return Z.activeElement
        } catch (e) {}
    }

    function x(e, t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i, i = void 0);
            for (a in t) x(e, a, i, n, t[a], r);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = b;
        else if (!o) return e;
        return 1 === r && (s = o, o = function(e) {
            return ce().off(e), s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = ce.guid++)), e.each(function() {
            ce.event.add(this, t, o, n, i)
        })
    }

    function C(e, t) {
        return ce.nodeName(e, "table") && ce.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function T(e) {
        var t = tt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function $(e, t) {
        var i, n, o, r, s, a, l, u;
        if (1 === t.nodeType) {
            if (Pe.hasData(e) && (r = Pe.access(e), s = Pe.set(t, r), u = r.events)) {
                delete s.handle, s.events = {};
                for (o in u)
                    for (i = 0, n = u[o].length; n > i; i++) ce.event.add(t, o, u[o][i])
            }
            He.hasData(e) && (a = He.access(e), l = ce.extend({}, a), He.set(t, l))
        }
    }

    function S(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Re.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }

    function E(e, t, n, o) {
        t = ie.apply([], t);
        var r, s, a, l, u, h, d = 0,
            c = e.length,
            f = c - 1,
            p = t[0],
            v = ce.isFunction(p);
        if (v || c > 1 && "string" == typeof p && !he.checkClone && et.test(p)) return e.each(function(i) {
            var r = e.eq(i);
            v && (t[0] = p.call(this, i, r.html())), E(r, t, n, o)
        });
        if (c && (r = y(t, e[0].ownerDocument, !1, e, o), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || o)) {
            for (a = ce.map(g(r, "script"), k), l = a.length; c > d; d++) u = r, d !== f && (u = ce.clone(u, !0, !0), l && ce.merge(a, g(u, "script"))), n.call(e[d], u, d);
            if (l)
                for (h = a[a.length - 1].ownerDocument, ce.map(a, T), d = 0; l > d; d++) u = a[d], Ue.test(u.type || "") && !Pe.access(u, "globalEval") && ce.contains(h, u) && (u.src ? ce._evalUrl && ce._evalUrl(u.src) : i(u.textContent.replace(it, ""), h))
        }
        return e
    }

    function M(e, t, i) {
        for (var n, o = t ? ce.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || ce.cleanData(g(n)), n.parentNode && (i && ce.contains(n.ownerDocument, n) && m(g(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    function A(e, t, i) {
        var n, o, r, s, a = e.style;
        return i = i || rt(e), i && (s = i.getPropertyValue(t) || i[t], "" !== s || ce.contains(e.ownerDocument, e) || (s = ce.style(e, t)), !he.pixelMarginRight() && ot.test(s) && nt.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function D(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function W(e) {
        if (e in ht) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = ut.length; i--;)
            if (e = ut[i] + t, e in ht) return e
    }

    function P(e, t, i) {
        var n = Ne.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }

    function H(e, t, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += ce.css(e, i + Be[r], !0, o)), n ? ("content" === i && (s -= ce.css(e, "padding" + Be[r], !0, o)), "margin" !== i && (s -= ce.css(e, "border" + Be[r] + "Width", !0, o))) : (s += ce.css(e, "padding" + Be[r], !0, o), "padding" !== i && (s += ce.css(e, "border" + Be[r] + "Width", !0, o)));
        return s
    }

    function I(e, t, i) {
        var n, o = !0,
            r = rt(e),
            s = "border-box" === ce.css(e, "boxSizing", !1, r);
        if (e.getClientRects().length && (n = e.getBoundingClientRect()[t]), 0 >= n || null == n) {
            if (n = A(e, t, r), (0 > n || null == n) && (n = e.style[t]), ot.test(n)) return n;
            o = s && (he.boxSizingReliable() || n === e.style[t]), n = parseFloat(n) || 0
        }
        return n + H(e, t, i || (s ? "border" : "content"), o, r) + "px"
    }

    function L(e, t, i, n, o) {
        return new L.prototype.init(e, t, i, n, o)
    }

    function j() {
        ct && (e.requestAnimationFrame(j), ce.fx.tick())
    }

    function N() {
        return e.setTimeout(function() {
            dt = void 0
        }), dt = ce.now()
    }

    function B(e, t) {
        var i, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > n; n += 2 - t) i = Be[n], o["margin" + i] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function O(e, t, i) {
        for (var n, o = (R.tweeners[t] || []).concat(R.tweeners["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, t, e)) return n
    }

    function F(e, t, i) {
        var n, o, r, s, a, l, u, h, d = "width" in t || "height" in t,
            c = this,
            f = {},
            p = e.style,
            g = e.nodeType && Oe(e),
            m = Pe.get(e, "fxshow");
        i.queue || (s = ce._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, c.always(function() {
            c.always(function() {
                s.unqueued--, ce.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (n in t)
            if (o = t[n], ft.test(o)) {
                if (delete t[n], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[n]) continue;
                    g = !0
                }
                f[n] = m && m[n] || ce.style(e, n)
            }
        if (l = !ce.isEmptyObject(t), l || !ce.isEmptyObject(f)) {
            d && 1 === e.nodeType && (i.overflow = [p.overflow, p.overflowX, p.overflowY], u = m && m.display, null == u && (u = Pe.get(e, "display")), h = ce.css(e, "display"), "none" === h && (u ? h = u : (v([e], !0), u = e.style.display || u, h = ce.css(e, "display"), v([e]))), ("inline" === h || "inline-block" === h && null != u) && "none" === ce.css(e, "float") && (l || (c.done(function() {
                p.display = u
            }), null == u && (h = p.display, u = "none" === h ? "" : h)), p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            })), l = !1;
            for (n in f) l || (m ? "hidden" in m && (g = m.hidden) : m = Pe.access(e, "fxshow", {
                    display: u
                }), r && (m.hidden = !g), g && v([e], !0), c.done(function() {
                g || v([e]), Pe.remove(e, "fxshow");
                for (n in f) ce.style(e, n, f[n])
            })), l = O(g ? m[n] : 0, n, c), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function q(e, t) {
        var i, n, o, r, s;
        for (i in e)
            if (n = ce.camelCase(i), o = t[n], r = e[i], ce.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), s = ce.cssHooks[n], s && "expand" in s) {
                r = s.expand(r), delete e[n];
                for (i in r) i in e || (e[i] = r[i], t[i] = o)
            } else t[n] = o
    }

    function R(e, t, i) {
        var n, o, r = 0,
            s = R.prefilters.length,
            a = ce.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = dt || N(), i = Math.max(0, u.startTime + u.duration - t), n = i / u.duration || 0, r = 1 - n, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(e, [u, r, i]), 1 > r && l ? i : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: ce.extend({}, t),
                opts: ce.extend(!0, {
                    specialEasing: {},
                    easing: ce.easing._default
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: dt || N(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = ce.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n > i; i++) u.tweens[i].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            h = u.props;
        for (q(h, u.opts.specialEasing); s > r; r++)
            if (n = R.prefilters[r].call(u, e, h, u.opts)) return ce.isFunction(n.stop) && (ce._queueHooks(u.elem, u.opts.queue).stop = ce.proxy(n.stop, n)), n;
        return ce.map(h, O, u), ce.isFunction(u.opts.start) && u.opts.start.call(e, u), ce.fx.timer(ce.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function U(e, t, i, n) {
        var o;
        if (ce.isArray(t)) ce.each(t, function(t, o) {
            i || $t.test(e) ? n(e, o) : U(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, i, n)
        });
        else if (i || "object" !== ce.type(t)) n(e, t);
        else
            for (o in t) U(e + "[" + o + "]", t[o], i, n)
    }

    function V(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                r = t.toLowerCase().match(Ee) || [];
            if (ce.isFunction(i))
                for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function X(e, t, i, n) {
        function o(a) {
            var l;
            return r[a] = !0, ce.each(e[a] || [], function(e, a) {
                var u = a(t, i, n);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }), l
        }
        var r = {},
            s = e === Nt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }

    function Y(e, t) {
        var i, n, o = ce.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && ce.extend(!0, e, n), e
    }

    function K(e, t, i) {
        for (var n, o, r, s, a = e.contents, l = e.dataTypes;
             "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in i) r = l[0];
        else {
            for (o in i) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
    }

    function Q(e, t, i, n) {
        var o, r, s, a, l, u = {},
            h = e.dataTypes.slice();
        if (h[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (r = h.shift(); r;)
            if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = h.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
                    if (s = u[l + " " + r] || u["* " + r], !s)
                        for (o in u)
                            if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0], h.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"]) t = s(t);
                        else try {
                            t = s(t)
                        } catch (d) {
                            return {
                                state: "parsererror",
                                error: s ? d : "No conversion from " + l + " to " + r
                            }
                        }
                }
        return {
            state: "success",
            data: t
        }
    }

    function G(e) {
        return ce.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var J = [],
        Z = e.document,
        ee = Object.getPrototypeOf,
        te = J.slice,
        ie = J.concat,
        ne = J.push,
        oe = J.indexOf,
        re = {},
        se = re.toString,
        ae = re.hasOwnProperty,
        le = ae.toString,
        ue = le.call(Object),
        he = {},
        de = "3.0.0",
        ce = function(e, t) {
            return new ce.fn.init(e, t)
        },
        fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pe = /^-ms-/,
        ve = /-([a-z])/g,
        ge = function(e, t) {
            return t.toUpperCase()
        };
    ce.fn = ce.prototype = {
        jquery: de,
        constructor: ce,
        length: 0,
        toArray: function() {
            return te.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : te.call(this)
        },
        pushStack: function(e) {
            var t = ce.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ce.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ce.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(te.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ne,
        sort: J.sort,
        splice: J.splice
    }, ce.extend = ce.fn.extend = function() {
        var e, t, i, n, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ce.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = s[t], n = e[t], s !== n && (u && n && (ce.isPlainObject(n) || (o = ce.isArray(n))) ? (o ? (o = !1, r = i && ce.isArray(i) ? i : []) : r = i && ce.isPlainObject(i) ? i : {}, s[t] = ce.extend(u, r, n)) : void 0 !== n && (s[t] = n));
        return s
    }, ce.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ce.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = ce.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== se.call(e)) && (!(t = ee(e)) || (i = ae.call(t, "constructor") && t.constructor, "function" == typeof i && le.call(i) === ue))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[se.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            i(e)
        },
        camelCase: function(e) {
            return e.replace(pe, "ms-").replace(ve, ge)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, o = 0;
            if (n(e))
                for (i = e.length; i > o && t.call(e[o], o, e[o]) !== !1; o++);
            else
                for (o in e)
                    if (t.call(e[o], o, e[o]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(fe, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ce.merge(i, "string" == typeof e ? [e] : e) : ne.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : oe.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; i > n; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n, o = [], r = 0, s = e.length, a = !i; s > r; r++) n = !t(e[r], r), n !== a && o.push(e[r]);
            return o
        },
        map: function(e, t, i) {
            var o, r, s = 0,
                a = [];
            if (n(e))
                for (o = e.length; o > s; s++) r = t(e[s], s, i), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, i), null != r && a.push(r);
            return ie.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, o;
            return "string" == typeof t && (i = e[t], t = e, e = i), ce.isFunction(e) ? (n = te.call(arguments, 2), o = function() {
                    return e.apply(t || this, n.concat(te.call(arguments)))
                }, o.guid = e.guid = e.guid || ce.guid++, o) : void 0
        },
        now: Date.now,
        support: he
    }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = J[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        re["[object " + t + "]"] = t.toLowerCase()
    });
    var me = function(e) {
        function t(e, t, i, n) {
            var o, r, s, a, l, u, h, c = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return i;
            if (!n && ((t ? t.ownerDocument || t : F) !== P && W(t), t = t || P, I)) {
                if (11 !== p && (l = me.exec(e)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o))) return i;
                            if (s.id === o) return i.push(s), i
                        } else if (c && (s = c.getElementById(o)) && B(t, s) && s.id === o) return i.push(s), i
                    } else {
                        if (l[2]) return J.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return J.apply(i, t.getElementsByClassName(o)), i
                    }
                if (x.qsa && !V[e + " "] && (!L || !L.test(e))) {
                    if (1 !== p) c = t, h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(_e, xe) : t.setAttribute("id", a = O), u = $(e), r = u.length; r--;) u[r] = "#" + a + " " + f(u[r]);
                        h = u.join(","), c = ye.test(e) && d(t.parentNode) || t
                    }
                    if (h) try {
                        return J.apply(i, c.querySelectorAll(h)), i
                    } catch (v) {} finally {
                        a === O && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(ae, "$1"), t, i, n)
        }

        function i() {
            function e(i, n) {
                return t.push(i + " ") > C.cacheLength && delete e[t.shift()], e[i + " "] = n
            }
            var t = [];
            return e
        }

        function n(e) {
            return e[O] = !0, e
        }

        function o(e) {
            var t = P.createElement("fieldset");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function r(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) C.attrHandle[i[n]] = t
        }

        function s(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && t.disabled === !1 && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !ke(t)) !== e)
            }
        }

        function h(e) {
            return n(function(t) {
                return t = +t, n(function(i, n) {
                    for (var o, r = e([], i.length, t), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function c() {}

        function f(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
            return n
        }

        function p(e, t, i) {
            var n = t.dir,
                o = t.next,
                r = o || n,
                s = i && "parentNode" === r,
                a = R++;
            return t.first ? function(t, i, o) {
                    for (; t = t[n];)
                        if (1 === t.nodeType || s) return e(t, i, o)
                } : function(t, i, l) {
                    var u, h, d, c = [q, a];
                    if (l) {
                        for (; t = t[n];)
                            if ((1 === t.nodeType || s) && e(t, i, l)) return !0
                    } else
                        for (; t = t[n];)
                            if (1 === t.nodeType || s)
                                if (d = t[O] || (t[O] = {}), h = d[t.uniqueID] || (d[t.uniqueID] = {}), o && o === t.nodeName.toLowerCase()) t = t[n] || t;
                                else {
                                    if ((u = h[r]) && u[0] === q && u[1] === a) return c[2] = u[2];
                                    if (h[r] = c, c[2] = e(t, i, l)) return !0
                                }
                }
        }

        function v(e) {
            return e.length > 1 ? function(t, i, n) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, i, n)) return !1;
                    return !0
                } : e[0]
        }

        function g(e, i, n) {
            for (var o = 0, r = i.length; r > o; o++) t(e, i[o], n);
            return n
        }

        function m(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(r = e[a]) && (i && !i(r, n, o) || (s.push(r), u && t.push(a)));
            return s
        }

        function y(e, t, i, o, r, s) {
            return o && !o[O] && (o = y(o)), r && !r[O] && (r = y(r, s)), n(function(n, s, a, l) {
                var u, h, d, c = [],
                    f = [],
                    p = s.length,
                    v = n || g(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !n && t ? v : m(v, c, e, a, l),
                    w = i ? r || (n ? e : p || o) ? [] : s : y;
                if (i && i(y, w, a, l), o)
                    for (u = m(w, f), o(u, [], a, l), h = u.length; h--;)(d = u[h]) && (w[f[h]] = !(y[f[h]] = d));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (u = [], h = w.length; h--;)(d = w[h]) && u.push(y[h] = d);
                            r(null, w = [], u, l)
                        }
                        for (h = w.length; h--;)(d = w[h]) && (u = r ? ee(n, d) : c[h]) > -1 && (n[u] = !(s[u] = d))
                    }
                } else w = m(w === s ? w.splice(p, w.length) : w), r ? r(null, s, w, l) : J.apply(s, w)
            })
        }

        function w(e) {
            for (var t, i, n, o = e.length, r = C.relative[e[0].type], s = r || C.relative[" "], a = r ? 1 : 0, l = p(function(e) {
                return e === t
            }, s, !0), u = p(function(e) {
                return ee(t, e) > -1
            }, s, !0), h = [function(e, i, n) {
                var o = !r && (n || i !== M) || ((t = i).nodeType ? l(e, i, n) : u(e, i, n));
                return t = null, o
            }]; o > a; a++)
                if (i = C.relative[e[a].type]) h = [p(v(h), i)];
                else {
                    if (i = C.filter[e[a].type].apply(null, e[a].matches), i[O]) {
                        for (n = ++a; o > n && !C.relative[e[n].type]; n++);
                        return y(a > 1 && v(h), a > 1 && f(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ae, "$1"), i, n > a && w(e.slice(a, n)), o > n && w(e = e.slice(n)), o > n && f(e))
                    }
                    h.push(i)
                }
            return v(h)
        }

        function b(e, i) {
            var o = i.length > 0,
                r = e.length > 0,
                s = function(n, s, a, l, u) {
                    var h, d, c, f = 0,
                        p = "0",
                        v = n && [],
                        g = [],
                        y = M,
                        w = n || r && C.find.TAG("*", u),
                        b = q += null == y ? 1 : Math.random() || .1,
                        _ = w.length;
                    for (u && (M = s === P || s || u); p !== _ && null != (h = w[p]); p++) {
                        if (r && h) {
                            for (d = 0, s || h.ownerDocument === P || (W(h), a = !I); c = e[d++];)
                                if (c(h, s || P, a)) {
                                    l.push(h);
                                    break
                                }
                            u && (q = b)
                        }
                        o && ((h = !c && h) && f--, n && v.push(h))
                    }
                    if (f += p, o && p !== f) {
                        for (d = 0; c = i[d++];) c(v, g, s, a);
                        if (n) {
                            if (f > 0)
                                for (; p--;) v[p] || g[p] || (g[p] = Q.call(l));
                            g = m(g)
                        }
                        J.apply(l, g), u && !n && g.length > 0 && f + i.length > 1 && t.uniqueSort(l)
                    }
                    return u && (q = b, M = y), v
                };
            return o ? n(s) : s
        }
        var _, x, C, k, T, $, S, E, M, A, D, W, P, H, I, L, j, N, B, O = "sizzle" + 1 * new Date,
            F = e.document,
            q = 0,
            R = 0,
            z = i(),
            U = i(),
            V = i(),
            X = function(e, t) {
                return e === t && (D = !0), 0
            },
            Y = {}.hasOwnProperty,
            K = [],
            Q = K.pop,
            G = K.push,
            J = K.push,
            Z = K.slice,
            ee = function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ie = "[\\x20\\t\\r\\n\\f]",
            ne = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]",
            re = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ie + "+", "g"),
            ae = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"),
            le = new RegExp("^" + ie + "*," + ie + "*"),
            ue = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
            he = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"),
            de = new RegExp(re),
            ce = new RegExp("^" + ne + "$"),
            fe = {
                ID: new RegExp("^#(" + ne + ")"),
                CLASS: new RegExp("^\\.(" + ne + ")"),
                TAG: new RegExp("^(" + ne + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"),
            be = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            xe = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Ce = function() {
                W()
            },
            ke = p(function(e) {
                return e.disabled === !0
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            J.apply(K = Z.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
        } catch (Te) {
            J = {
                apply: K.length ? function(e, t) {
                        G.apply(e, Z.call(t))
                    } : function(e, t) {
                        for (var i = e.length, n = 0; e[i++] = t[n++];);
                        e.length = i - 1
                    }
            }
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, W = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : F;
            return n !== P && 9 === n.nodeType && n.documentElement ? (P = n, H = P.documentElement, I = !T(P), F !== P && (i = P.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Ce, !1) : i.attachEvent && i.attachEvent("onunload", Ce)), x.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), x.getElementsByTagName = o(function(e) {
                    return e.appendChild(P.createComment("")), !e.getElementsByTagName("*").length
                }), x.getElementsByClassName = ge.test(P.getElementsByClassName), x.getById = o(function(e) {
                    return H.appendChild(e).id = O, !P.getElementsByName || !P.getElementsByName(O).length
                }), x.getById ? (C.find.ID = function(e, t) {
                        if ("undefined" != typeof t.getElementById && I) {
                            var i = t.getElementById(e);
                            return i ? [i] : []
                        }
                    }, C.filter.ID = function(e) {
                        var t = e.replace(we, be);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete C.find.ID, C.filter.ID = function(e) {
                        var t = e.replace(we, be);
                        return function(e) {
                            var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }), C.find.TAG = x.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var i, n = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return r
                    }, C.find.CLASS = x.getElementsByClassName && function(e, t) {
                        return "undefined" != typeof t.getElementsByClassName && I ? t.getElementsByClassName(e) : void 0
                    }, j = [], L = [], (x.qsa = ge.test(P.querySelectorAll)) && (o(function(e) {
                    H.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ie + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + ie + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + O + "-]").length || L.push("~="), e.querySelectorAll(":checked").length || L.push(":checked"), e.querySelectorAll("a#" + O + "+*").length || L.push(".#.+[+~]")
                }), o(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = P.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + ie + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), H.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (x.matchesSelector = ge.test(N = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function(e) {
                    x.disconnectedMatch = N.call(e, "*"), N.call(e, "[s!='']:x"), j.push("!=", re)
                }), L = L.length && new RegExp(L.join("|")), j = j.length && new RegExp(j.join("|")), t = ge.test(H.compareDocumentPosition), B = t || ge.test(H.contains) ? function(e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e,
                            n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, X = t ? function(e, t) {
                        if (e === t) return D = !0, 0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i ? i : (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !x.sortDetached && t.compareDocumentPosition(e) === i ? e === P || e.ownerDocument === F && B(F, e) ? -1 : t === P || t.ownerDocument === F && B(F, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & i ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return D = !0, 0;
                        var i, n = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            a = [e],
                            l = [t];
                        if (!o || !r) return e === P ? -1 : t === P ? 1 : o ? -1 : r ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                        if (o === r) return s(e, t);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (i = t; i = i.parentNode;) l.unshift(i);
                        for (; a[n] === l[n];) n++;
                        return n ? s(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0
                    }, P) : P
        }, t.matches = function(e, i) {
            return t(e, null, null, i)
        }, t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== P && W(e), i = i.replace(he, "='$1']"), x.matchesSelector && I && !V[i + " "] && (!j || !j.test(i)) && (!L || !L.test(i))) try {
                var n = N.call(e, i);
                if (n || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (o) {}
            return t(i, P, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== P && W(e), B(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== P && W(e);
            var i = C.attrHandle[t.toLowerCase()],
                n = i && Y.call(C.attrHandle, t.toLowerCase()) ? i(e, t, !I) : void 0;
            return void 0 !== n ? n : x.attributes || !I ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, t.escape = function(e) {
            return (e + "").replace(_e, xe)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                o = 0;
            if (D = !x.detectDuplicates, A = !x.sortStable && e.slice(0), e.sort(X), D) {
                for (; t = e[o++];) t === e[o] && (n = i.push(o));
                for (; n--;) e.splice(i[n], 1)
            }
            return A = null, e
        }, k = t.getText = function(e) {
            var t, i = "",
                n = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += k(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else
                for (; t = e[n++];) i += k(t);
            return i
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: fe,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, be), e[3] = (e[3] || e[4] || e[5] || "").replace(we, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && de.test(i) && (t = $(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, be).toLowerCase();
                    return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && z(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                },
                ATTR: function(e, i, n) {
                    return function(o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === i : !i || (r += "", "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(se, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, i, n, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === n && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var u, h, d, c, f, p, v = r !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                m = a && t.nodeName.toLowerCase(),
                                y = !l && !a,
                                w = !1;
                            if (g) {
                                if (r) {
                                    for (; v;) {
                                        for (c = t; c = c[v];)
                                            if (a ? c.nodeName.toLowerCase() === m : 1 === c.nodeType) return !1;
                                        p = v = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (c = g, d = c[O] || (c[O] = {}), h = d[c.uniqueID] || (d[c.uniqueID] = {}), u = h[e] || [], f = u[0] === q && u[1], w = f && u[2], c = f && g.childNodes[f]; c = ++f && c && c[v] || (w = f = 0) || p.pop();)
                                        if (1 === c.nodeType && ++w && c === t) {
                                            h[e] = [q, f, w];
                                            break
                                        }
                                } else if (y && (c = t, d = c[O] || (c[O] = {}), h = d[c.uniqueID] || (d[c.uniqueID] = {}), u = h[e] || [], f = u[0] === q && u[1], w = f), w === !1)
                                    for (;
                                        (c = ++f && c && c[v] || (w = f = 0) || p.pop()) && ((a ? c.nodeName.toLowerCase() !== m : 1 !== c.nodeType) || !++w || (y && (d = c[O] || (c[O] = {}), h = d[c.uniqueID] || (d[c.uniqueID] = {}), h[e] = [q, w]), c !== t)););
                                return w -= o, w === n || w % n === 0 && w / n >= 0
                            }
                        }
                },
                PSEUDO: function(e, i) {
                    var o, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[O] ? r(i) : r.length > 1 ? (o = [e, e, "", i], C.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                                    for (var n, o = r(e, i), s = o.length; s--;) n = ee(e, o[s]), e[n] = !(t[n] = o[s])
                                }) : function(e) {
                                    return r(e, 0, o)
                                }) : r
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = [],
                        i = [],
                        o = S(e.replace(ae, "$1"));
                    return o[O] ? n(function(e, t, i, n) {
                            for (var r, s = o(e, null, n, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, n, r) {
                            return t[0] = e, o(t, null, r, i), t[0] = null, !i.pop()
                        }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(we, be),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: n(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, be).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === e || 0 === i.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: h(function() {
                    return [0]
                }),
                last: h(function(e, t) {
                    return [t - 1]
                }),
                eq: h(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: h(function(e, t) {
                    for (var i = 0; t > i; i += 2) e.push(i);
                    return e
                }),
                odd: h(function(e, t) {
                    for (var i = 1; t > i; i += 2) e.push(i);
                    return e
                }),
                lt: h(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
                    return e
                }),
                gt: h(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (_ in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) C.pseudos[_] = a(_);
        for (_ in {
            submit: !0,
            reset: !0
        }) C.pseudos[_] = l(_);
        return c.prototype = C.filters = C.pseudos, C.setFilters = new c, $ = t.tokenize = function(e, i) {
            var n, o, r, s, a, l, u, h = U[e + " "];
            if (h) return i ? 0 : h.slice(0);
            for (a = e, l = [], u = C.preFilter; a;) {
                n && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = ue.exec(a)) && (n = o.shift(), r.push({
                    value: n,
                    type: o[0].replace(ae, " ")
                }), a = a.slice(n.length));
                for (s in C.filter) !(o = fe[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(), r.push({
                    value: n,
                    type: s,
                    matches: o
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? t.error(e) : U(e, l).slice(0)
        }, S = t.compile = function(e, t) {
            var i, n = [],
                o = [],
                r = V[e + " "];
            if (!r) {
                for (t || (t = $(e)), i = t.length; i--;) r = w(t[i]), r[O] ? n.push(r) : o.push(r);
                r = V(e, b(o, n)), r.selector = e
            }
            return r
        }, E = t.select = function(e, t, i, n) {
            var o, r, s, a, l, u = "function" == typeof e && e,
                h = !n && $(e = u.selector || e);
            if (i = i || [], 1 === h.length) {
                if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === t.nodeType && I && C.relative[r[1].type]) {
                    if (t = (C.find.ID(s.matches[0].replace(we, be), t) || [])[0], !t) return i;
                    u && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !C.relative[a = s.type]);)
                    if ((l = C.find[a]) && (n = l(s.matches[0].replace(we, be), ye.test(r[0].type) && d(t.parentNode) || t))) {
                        if (r.splice(o, 1), e = n.length && f(r), !e) return J.apply(i, n), i;
                        break
                    }
            }
            return (u || S(e, h))(n, t, !I, i, !t || ye.test(e) && d(t.parentNode) || t), i
        }, x.sortStable = O.split("").sort(X).join("") === O, x.detectDuplicates = !!D, W(), x.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(P.createElement("fieldset"))
        }), o(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), o(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), t
    }(e);
    ce.find = me, ce.expr = me.selectors, ce.expr[":"] = ce.expr.pseudos, ce.uniqueSort = ce.unique = me.uniqueSort, ce.text = me.getText, ce.isXMLDoc = me.isXML, ce.contains = me.contains, ce.escapeSelector = me.escape;
    var ye = function(e, t, i) {
            for (var n = [], o = void 0 !== i;
                 (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && ce(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        we = function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        },
        be = ce.expr.match.needsContext,
        _e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        xe = /^.[^:#\[\.,]*$/;
    ce.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ce.find.matchesSelector(n, e) ? [n] : [] : ce.find.matches(e, ce.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }, ce.fn.extend({
        find: function(e) {
            var t, i, n = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(ce(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (ce.contains(o[t], this)) return !0
            }));
            for (i = this.pushStack([]), t = 0; n > t; t++) ce.find(e, o[t], i);
            return n > 1 ? ce.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && be.test(e) ? ce(e) : e || [], !1).length
        }
    });
    var Ce, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Te = ce.fn.init = function(e, t, i) {
            var n, o;
            if (!e) return this;
            if (i = i || Ce, "string" == typeof e) {
                if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ce ? t[0] : t, ce.merge(this, ce.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), _e.test(n[1]) && ce.isPlainObject(t))
                        for (n in t) ce.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                return o = Z.getElementById(n[2]), o && (this[0] = o, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ce.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(ce) : ce.makeArray(e, this)
        };
    Te.prototype = ce.fn, Ce = ce(Z);
    var $e = /^(?:parents|prev(?:Until|All))/,
        Se = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ce.fn.extend({
        has: function(e) {
            var t = ce(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; i > e; e++)
                    if (ce.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && ce(e);
            if (!be.test(e))
                for (; o > n; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ce.find.matchesSelector(i, e))) {
                            r.push(i);
                            break
                        }
            return this.pushStack(r.length > 1 ? ce.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.call(ce(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ye(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ye(e, "parentNode", i)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return ye(e, "nextSibling")
        },
        prevAll: function(e) {
            return ye(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ye(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ye(e, "previousSibling", i)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ce.merge([], e.childNodes)
        }
    }, function(e, t) {
        ce.fn[e] = function(i, n) {
            var o = ce.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = ce.filter(n, o)), this.length > 1 && (Se[e] || ce.uniqueSort(o), $e.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var Ee = /\S+/g;
    ce.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : ce.extend({}, e);
        var t, i, n, o, r = [],
            a = [],
            l = -1,
            u = function() {
                for (o = e.once, n = t = !0; a.length; l = -1)
                    for (i = a.shift(); ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && e.stopOnFalse && (l = r.length, i = !1);
                e.memory || (i = !1), t = !1, o && (r = i ? [] : "")
            },
            h = {
                add: function() {
                    return r && (i && !t && (l = r.length - 1, a.push(i)), function n(t) {
                        ce.each(t, function(t, i) {
                            ce.isFunction(i) ? e.unique && h.has(i) || r.push(i) : i && i.length && "string" !== ce.type(i) && n(i)
                        })
                    }(arguments), i && !t && u()), this
                },
                remove: function() {
                    return ce.each(arguments, function(e, t) {
                        for (var i;
                             (i = ce.inArray(t, r, i)) > -1;) r.splice(i, 1), l >= i && l--
                    }), this
                },
                has: function(e) {
                    return e ? ce.inArray(e, r) > -1 : r.length > 0
                },
                empty: function() {
                    return r && (r = []), this
                },
                disable: function() {
                    return o = a = [], r = i = "", this
                },
                disabled: function() {
                    return !r
                },
                lock: function() {
                    return o = a = [], i || t || (r = i = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, i) {
                    return o || (i = i || [], i = [e, i.slice ? i.slice() : i], a.push(i), t || u()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, ce.extend({
        Deferred: function(t) {
            var i = [
                    ["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2],
                    ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                o = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return o.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return ce.Deferred(function(t) {
                            ce.each(i, function(i, n) {
                                var o = ce.isFunction(e[n[4]]) && e[n[4]];
                                r[n[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && ce.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, n, o) {
                        function r(t, i, n, o) {
                            return function() {
                                var u = this,
                                    h = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(s > t)) {
                                            if (e = n.apply(u, h), e === i.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, ce.isFunction(d) ? o ? d.call(e, r(s, i, a, o), r(s, i, l, o)) : (s++, d.call(e, r(s, i, a, o), r(s, i, l, o), r(s, i, a, i.notifyWith))) : (n !== a && (u = void 0, h = [e]), (o || i.resolveWith)(u, h))
                                        }
                                    },
                                    c = o ? d : function() {
                                            try {
                                                d()
                                            } catch (e) {
                                                ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= s && (n !== l && (u = void 0, h = [e]), i.rejectWith(u, h))
                                            }
                                        };
                                t ? c() : (ce.Deferred.getStackHook && (c.stackTrace = ce.Deferred.getStackHook()), e.setTimeout(c))
                            }
                        }
                        var s = 0;
                        return ce.Deferred(function(e) {
                            i[0][3].add(r(0, e, ce.isFunction(o) ? o : a, e.notifyWith)), i[1][3].add(r(0, e, ce.isFunction(t) ? t : a)), i[2][3].add(r(0, e, ce.isFunction(n) ? n : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ce.extend(e, o) : o
                    }
                },
                r = {};
            return ce.each(i, function(e, t) {
                var s = t[2],
                    a = t[5];
                o[t[1]] = s.add, a && s.add(function() {
                    n = a
                }, i[3 - e][2].disable, i[0][2].lock), s.add(t[3].fire), r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                }, r[t[0] + "With"] = s.fireWith
            }), o.promise(r), t && t.call(r, r), r
        },
        when: function(e) {
            var t = arguments.length,
                i = t,
                n = Array(i),
                o = te.call(arguments),
                r = ce.Deferred(),
                s = function(e) {
                    return function(i) {
                        n[e] = this, o[e] = arguments.length > 1 ? te.call(arguments) : i, --t || r.resolveWith(n, o)
                    }
                };
            if (1 >= t && (u(e, r.done(s(i)).resolve, r.reject), "pending" === r.state() || ce.isFunction(o[i] && o[i].then))) return r.then();
            for (; i--;) u(o[i], s(i), r.reject);
            return r.promise()
        }
    });
    var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ce.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && Me.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    var Ae = ce.Deferred();
    ce.fn.ready = function(e) {
        return Ae.then(e), this
    }, ce.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ce.readyWait++ : ce.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ce.readyWait : ce.isReady) || (ce.isReady = !0, e !== !0 && --ce.readyWait > 0 || Ae.resolveWith(Z, [ce]))
        }
    }), ce.ready.then = Ae.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? e.setTimeout(ce.ready) : (Z.addEventListener("DOMContentLoaded", h), e.addEventListener("load", h));
    var De = function(e, t, i, n, o, r, s) {
            var a = 0,
                l = e.length,
                u = null == i;
            if ("object" === ce.type(i)) {
                o = !0;
                for (a in i) De(e, t, a, i[a], !0, r, s)
            } else if (void 0 !== n && (o = !0, ce.isFunction(n) || (s = !0), u && (s ? (t.call(e, n), t = null) : (u = t, t = function(e, t, i) {
                        return u.call(ce(e), i)
                    })), t))
                for (; l > a; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : u ? t.call(e) : l ? t(e[0], i) : r
        },
        We = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, We(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
        },
        set: function(e, t, i) {
            var n, o = this.cache(e);
            if ("string" == typeof t) o[ce.camelCase(t)] = i;
            else
                for (n in t) o[ce.camelCase(n)] = t[n];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ce.camelCase(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    ce.isArray(t) ? t = t.map(ce.camelCase) : (t = ce.camelCase(t), t = t in n ? [t] : t.match(Ee) || []), i = t.length;
                    for (; i--;) delete n[t[i]]
                }(void 0 === t || ce.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ce.isEmptyObject(t)
        }
    };
    var Pe = new d,
        He = new d,
        Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Le = /[A-Z]/g;
    ce.extend({
        hasData: function(e) {
            return He.hasData(e) || Pe.hasData(e)
        },
        data: function(e, t, i) {
            return He.access(e, t, i)
        },
        removeData: function(e, t) {
            He.remove(e, t)
        },
        _data: function(e, t, i) {
            return Pe.access(e, t, i)
        },
        _removeData: function(e, t) {
            Pe.remove(e, t)
        }
    }), ce.fn.extend({
        data: function(e, t) {
            var i, n, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = He.get(r), 1 === r.nodeType && !Pe.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = ce.camelCase(n.slice(5)), c(r, n, o[n])));
                    Pe.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                    He.set(this, e)
                }) : De(this, function(t) {
                    var i;
                    if (r && void 0 === t) {
                        if (i = He.get(r, e), void 0 !== i) return i;
                        if (i = c(r, e), void 0 !== i) return i
                    } else this.each(function() {
                        He.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                He.remove(this, e)
            })
        }
    }), ce.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = Pe.get(e, t), i && (!n || ce.isArray(i) ? n = Pe.access(e, t, ce.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = ce.queue(e, t),
                n = i.length,
                o = i.shift(),
                r = ce._queueHooks(e, t),
                s = function() {
                    ce.dequeue(e, t)
                };
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return Pe.get(e, i) || Pe.access(e, i, {
                    empty: ce.Callbacks("once memory").add(function() {
                        Pe.remove(e, [t + "queue", i])
                    })
                })
        }
    }), ce.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? ce.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var i = ce.queue(this, e, t);
                        ce._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && ce.dequeue(this, e)
                    })
        },
        dequeue: function(e) {
            return this.each(function() {
                ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = ce.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --n || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) i = Pe.get(r[s], e + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ne = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Be = ["Top", "Right", "Bottom", "Left"],
        Oe = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && ce.contains(e.ownerDocument, e) && "none" === ce.css(e, "display")
        },
        Fe = function(e, t, i, n) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            o = i.apply(e, n || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        qe = {};
    ce.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Oe(this) ? ce(this).show() : ce(this).hide()
                })
        }
    });
    var Re = /^(?:checkbox|radio)$/i,
        ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
    var Xe = /<|&#?\w+;/;
    ! function() {
        var e = Z.createDocumentFragment(),
            t = e.appendChild(Z.createElement("div")),
            i = Z.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), t.appendChild(i), he.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = Z.documentElement,
        Ke = /^key/,
        Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ge = /^([^.]*)(?:\.(.+)|)/;
    ce.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var r, s, a, l, u, h, d, c, f, p, v, g = Pe.get(e);
            if (g)
                for (i.handler && (r = i, i = r.handler, o = r.selector), o && ce.find.matchesSelector(Ye, o), i.guid || (i.guid = ce.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                    return "undefined" != typeof ce && ce.event.triggered !== t.type ? ce.event.dispatch.apply(e, arguments) : void 0
                }), t = (t || "").match(Ee) || [""], u = t.length; u--;) a = Ge.exec(t[u]) || [], f = v = a[1], p = (a[2] || "").split(".").sort(), f && (d = ce.event.special[f] || {}, f = (o ? d.delegateType : d.bindType) || f, d = ce.event.special[f] || {}, h = ce.extend({
                    type: f,
                    origType: v,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && ce.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, r), (c = l[f]) || (c = l[f] = [], c.delegateCount = 0, d.setup && d.setup.call(e, n, p, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), o ? c.splice(c.delegateCount++, 0, h) : c.push(h), ce.event.global[f] = !0)
        },
        remove: function(e, t, i, n, o) {
            var r, s, a, l, u, h, d, c, f, p, v, g = Pe.hasData(e) && Pe.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(Ee) || [""], u = t.length; u--;)
                    if (a = Ge.exec(t[u]) || [], f = v = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (d = ce.event.special[f] || {}, f = (n ? d.delegateType : d.bindType) || f, c = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = c.length; r--;) h = c[r], !o && v !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (c.splice(r, 1), h.selector && c.delegateCount--, d.remove && d.remove.call(e, h));
                        s && !c.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || ce.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) ce.event.remove(e, f + t[u], i, n, !0);
                ce.isEmptyObject(l) && Pe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, o, r, s, a = ce.event.fix(e),
                l = new Array(arguments.length),
                u = (Pe.get(this, "events") || {})[a.type] || [],
                h = ce.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, a) !== !1) {
                for (s = ce.event.handlers.call(this, a, u), t = 0;
                     (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, i = 0;
                         (r = o.handlers[i++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, n = ((ce.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== n && (a.result = n) === !1 && (a.preventDefault(), a.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (n = [], i = 0; a > i; i++) r = t[i], o = r.selector + " ", void 0 === n[o] && (n[o] = r.needsContext ? ce(o, this).index(l) > -1 : ce.find(o, this, null, [l]).length), n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(ce.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ce.isFunction(t) ? function() {
                        return this.originalEvent ? t(this.originalEvent) : void 0
                    } : function() {
                        return this.originalEvent ? this.originalEvent[e] : void 0
                    },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[ce.expando] ? e : new ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ce.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ce.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ce.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }, ce.Event = function(e, t) {
        return this instanceof ce.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : b, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ce.extend(this, t), this.timeStamp = e && e.timeStamp || ce.now(), void(this[ce.expando] = !0)) : new ce.Event(e, t)
    }, ce.Event.prototype = {
        constructor: ce.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ce.each({
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
        "char": !0,
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
        which: function(e) {
            var t = e.button;
            return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ce.event.addProp), ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ce.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === n || ce.contains(n, o)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), ce.fn.extend({
        on: function(e, t, i, n) {
            return x(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return x(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, ce(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return t !== !1 && "function" != typeof t || (i = t, t = void 0), i === !1 && (i = b), this.each(function() {
                ce.event.remove(this, e, i, t)
            })
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ze = /<script|<style|<link/i,
        et = /checked\s*(?:[^=]|=\s*.checked.)/i,
        tt = /^true\/(.*)/,
        it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ce.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, o, r, s, a = e.cloneNode(!0),
                l = ce.contains(e.ownerDocument, e);
            if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ce.isXMLDoc(e)))
                for (s = g(a), r = g(e), n = 0, o = r.length; o > n; n++) S(r[n], s[n]);
            if (t)
                if (i)
                    for (r = r || g(e), s = s || g(a), n = 0, o = r.length; o > n; n++) $(r[n], s[n]);
                else $(e, a);
            return s = g(a, "script"), s.length > 0 && m(s, !l && g(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, i, n, o = ce.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (We(i)) {
                    if (t = i[Pe.expando]) {
                        if (t.events)
                            for (n in t.events) o[n] ? ce.event.remove(i, n) : ce.removeEvent(i, n, t.handle);
                        i[Pe.expando] = void 0
                    }
                    i[He.expando] && (i[He.expando] = void 0)
                }
        }
    }), ce.fn.extend({
        detach: function(e) {
            return M(this, e, !0)
        },
        remove: function(e) {
            return M(this, e)
        },
        text: function(e) {
            return De(this, function(e) {
                return void 0 === e ? ce.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
            }, null, e, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ce.cleanData(g(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return De(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !Ve[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ce.htmlPrefilter(e);
                    try {
                        for (; n > i; i++) t = this[i] || {}, 1 === t.nodeType && (ce.cleanData(g(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return E(this, arguments, function(t) {
                var i = this.parentNode;
                ce.inArray(this, e) < 0 && (ce.cleanData(g(this)), i && i.replaceChild(t, this))
            }, e)
        }
    }), ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ce.fn[e] = function(e) {
            for (var i, n = [], o = ce(e), r = o.length - 1, s = 0; r >= s; s++) i = s === r ? this : this.clone(!0), ce(o[s])[t](i), ne.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var nt = /^margin/,
        ot = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
        rt = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e), i.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ye.appendChild(s);
                var t = e.getComputedStyle(a);
                i = "1%" !== t.top, r = "2px" === t.marginLeft, n = "4px" === t.width, a.style.marginRight = "50%", o = "4px" === t.marginRight, Ye.removeChild(s), a = null
            }
        }
        var i, n, o, r, s = Z.createElement("div"),
            a = Z.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), ce.extend(he, {
            pixelPosition: function() {
                return t(), i
            },
            boxSizingReliable: function() {
                return t(), n
            },
            pixelMarginRight: function() {
                return t(), o
            },
            reliableMarginLeft: function() {
                return t(), r
            }
        }))
    }();
    var st = /^(none|table(?!-c[ea]).+)/,
        at = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ut = ["Webkit", "Moz", "ms"],
        ht = Z.createElement("div").style;
    ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = A(e, "opacity");
                        return "" === i ? "1" : i
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
            "float": "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = ce.camelCase(t),
                    l = e.style;
                return t = ce.cssProps[a] || (ce.cssProps[a] = W(a) || a), s = ce.cssHooks[t] || ce.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : l[t] : (r = typeof i, "string" === r && (o = Ne.exec(i)) && o[1] && (i = f(e, t, o), r = "number"), void(null != i && i === i && ("number" === r && (i += o && o[3] || (ce.cssNumber[a] ? "" : "px")), he.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (i = s.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var o, r, s, a = ce.camelCase(t);
            return t = ce.cssProps[a] || (ce.cssProps[a] = W(a) || a), s = ce.cssHooks[t] || ce.cssHooks[a], s && "get" in s && (o = s.get(e, !0, i)), void 0 === o && (o = A(e, t, n)), "normal" === o && t in lt && (o = lt[t]), "" === i || i ? (r = parseFloat(o), i === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), ce.each(["height", "width"], function(e, t) {
        ce.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? !st.test(ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? I(e, t, n) : Fe(e, at, function() {
                            return I(e, t, n)
                        }) : void 0
            },
            set: function(e, i, n) {
                var o, r = n && rt(e),
                    s = n && H(e, t, n, "border-box" === ce.css(e, "boxSizing", !1, r), r);
                return s && (o = Ne.exec(i)) && "px" !== (o[3] || "px") && (e.style[t] = i, i = ce.css(e, t)), P(e, i, s)
            }
        }
    }), ce.cssHooks.marginLeft = D(he.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
    }), ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ce.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[e + Be[n] + t] = r[n] || r[n - 2] || r[0];
                return o
            }
        }, nt.test(e) || (ce.cssHooks[e + t].set = P)
    }), ce.fn.extend({
        css: function(e, t) {
            return De(this, function(e, t, i) {
                var n, o, r = {},
                    s = 0;
                if (ce.isArray(t)) {
                    for (n = rt(e), o = t.length; o > s; s++) r[t[s]] = ce.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? ce.style(e, t, i) : ce.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), ce.Tween = L, L.prototype = {
        constructor: L,
        init: function(e, t, i, n, o, r) {
            this.elem = e, this.prop = i, this.easing = o || ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (ce.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = L.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ce.fx.step[e.prop] ? ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ce.cssProps[e.prop]] && !ce.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ce.fx = L.prototype.init, ce.fx.step = {};
    var dt, ct, ft = /^(?:toggle|show|hide)$/,
        pt = /queueHooks$/;
    ce.Animation = ce.extend(R, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return f(i.elem, e, Ne.exec(t), i), i
            }]
        },
        tweener: function(e, t) {
            ce.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
            for (var i, n = 0, o = e.length; o > n; n++) i = e[n], R.tweeners[i] = R.tweeners[i] || [], R.tweeners[i].unshift(t)
        },
        prefilters: [F],
        prefilter: function(e, t) {
            t ? R.prefilters.unshift(e) : R.prefilters.push(e)
        }
    }), ce.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? ce.extend({}, e) : {
                complete: i || !i && t || ce.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !ce.isFunction(t) && t
            };
        return ce.fx.off || Z.hidden ? n.duration = 0 : n.duration = "number" == typeof n.duration ? n.duration : n.duration in ce.fx.speeds ? ce.fx.speeds[n.duration] : ce.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            ce.isFunction(n.old) && n.old.call(this), n.queue && ce.dequeue(this, n.queue)
        }, n
    }, ce.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(Oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var o = ce.isEmptyObject(e),
                r = ce.speed(t, i, n),
                s = function() {
                    var t = R(this, ce.extend({}, e), r);
                    (o || Pe.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = ce.timers,
                    s = Pe.get(this);
                if (o) s[o] && s[o].stop && n(s[o]);
                else
                    for (o in s) s[o] && s[o].stop && pt.test(o) && n(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(i), t = !1, r.splice(o, 1));
                !t && i || ce.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, i = Pe.get(this),
                    n = i[e + "queue"],
                    o = i[e + "queueHooks"],
                    r = ce.timers,
                    s = n ? n.length : 0;
                for (i.finish = !0, ce.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; s > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), ce.each(["toggle", "show", "hide"], function(e, t) {
        var i = ce.fn[t];
        ce.fn[t] = function(e, n, o) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(B(t, !0), e, n, o)
        }
    }), ce.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ce.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), ce.timers = [], ce.fx.tick = function() {
        var e, t = 0,
            i = ce.timers;
        for (dt = ce.now(); t < i.length; t++) e = i[t], e() || i[t] !== e || i.splice(t--, 1);
        i.length || ce.fx.stop(), dt = void 0
    }, ce.fx.timer = function(e) {
        ce.timers.push(e), e() ? ce.fx.start() : ce.timers.pop()
    }, ce.fx.interval = 13, ce.fx.start = function() {
        ct || (ct = e.requestAnimationFrame ? e.requestAnimationFrame(j) : e.setInterval(ce.fx.tick, ce.fx.interval))
    }, ce.fx.stop = function() {
        e.cancelAnimationFrame ? e.cancelAnimationFrame(ct) : e.clearInterval(ct), ct = null
    }, ce.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ce.fn.delay = function(t, i) {
        return t = ce.fx ? ce.fx.speeds[t] || t : t, i = i || "fx", this.queue(i, function(i, n) {
            var o = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(o)
            }
        })
    },
        function() {
            var e = Z.createElement("input"),
                t = Z.createElement("select"),
                i = t.appendChild(Z.createElement("option"));
            e.type = "checkbox", he.checkOn = "" !== e.value, he.optSelected = i.selected, e = Z.createElement("input"), e.value = "t", e.type = "radio", he.radioValue = "t" === e.value
        }();
    var vt, gt = ce.expr.attrHandle;
    ce.fn.extend({
        attr: function(e, t) {
            return De(this, ce.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ce.removeAttr(this, e)
            })
        }
    }), ce.extend({
        attr: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? ce.prop(e, t, i) : (1 === r && ce.isXMLDoc(e) || (o = ce.attrHooks[t.toLowerCase()] || (ce.expr.match.bool.test(t) ? vt : void 0)), void 0 !== i ? null === i ? void ce.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : (n = ce.find.attr(e, t), null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && ce.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0,
                o = t && t.match(Ee);
            if (o && 1 === e.nodeType)
                for (; i = o[n++];) e.removeAttribute(i)
        }
    }), vt = {
        set: function(e, t, i) {
            return t === !1 ? ce.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = gt[t] || ce.find.attr;
        gt[t] = function(e, t, n) {
            var o, r, s = t.toLowerCase();
            return n || (r = gt[s], gt[s] = o, o = null != i(e, t, n) ? s : null, gt[s] = r), o
        }
    });
    var mt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    ce.fn.extend({
        prop: function(e, t) {
            return De(this, ce.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ce.propFix[e] || e]
            })
        }
    }), ce.extend({
        prop: function(e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ce.isXMLDoc(e) || (t = ce.propFix[t] || t, o = ce.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : mt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), he.optSelected || (ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ce.propFix[this.toLowerCase()] = this
    });
    var wt = /[\t\r\n\f]/g;
    ce.fn.extend({
        addClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (ce.isFunction(e)) return this.each(function(t) {
                ce(this).addClass(e.call(this, t, z(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ee) || []; i = this[l++];)
                    if (o = z(i), n = 1 === i.nodeType && (" " + o + " ").replace(wt, " ")) {
                        for (s = 0; r = t[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        a = ce.trim(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, r, s, a, l = 0;
            if (ce.isFunction(e)) return this.each(function(t) {
                ce(this).removeClass(e.call(this, t, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ee) || []; i = this[l++];)
                    if (o = z(i), n = 1 === i.nodeType && (" " + o + " ").replace(wt, " ")) {
                        for (s = 0; r = t[s++];)
                            for (; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                        a = ce.trim(n), o !== a && i.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : ce.isFunction(e) ? this.each(function(i) {
                        ce(this).toggleClass(e.call(this, i, z(this), t), t)
                    }) : this.each(function() {
                        var t, n, o, r;
                        if ("string" === i)
                            for (n = 0, o = ce(this), r = e.match(Ee) || []; t = r[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else void 0 !== e && "boolean" !== i || (t = z(this), t && Pe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Pe.get(this, "__className__") || ""))
                    })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + z(i) + " ").replace(wt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g,
        _t = /[\x20\t\r\n\f]+/g;
    ce.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            return arguments.length ? (n = ce.isFunction(e), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = n ? e.call(this, i, ce(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ce.isArray(o) && (o = ce.map(o, function(e) {
                                return null == e ? "" : e + ""
                            })), t = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = ce.valHooks[o.type] || ce.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(bt, "") : null == i ? "" : i)) : void 0
        }
    }), ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ce.find.attr(e, "value");
                    return null != t ? t : ce.trim(ce.text(e)).replace(_t, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, r = "select-one" === e.type, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (i = n[l], (i.selected || l === o) && !i.disabled && (!i.parentNode.disabled || !ce.nodeName(i.parentNode, "optgroup"))) {
                            if (t = ce(i).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, r = ce.makeArray(t), s = o.length; s--;) n = o[s], (n.selected = ce.inArray(ce.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1), r
                }
            }
        }
    }), ce.each(["radio", "checkbox"], function() {
        ce.valHooks[this] = {
            set: function(e, t) {
                return ce.isArray(t) ? e.checked = ce.inArray(ce(e).val(), t) > -1 : void 0
            }
        }, he.checkOn || (ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var xt = /^(?:focusinfocus|focusoutblur)$/;
    ce.extend(ce.event, {
        trigger: function(t, i, n, o) {
            var r, s, a, l, u, h, d, c = [n || Z],
                f = ae.call(t, "type") ? t.type : t,
                p = ae.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !xt.test(f + ce.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[ce.expando] ? t : new ce.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : ce.makeArray(i, [t]), d = ce.event.special[f] || {}, o || !d.trigger || d.trigger.apply(n, i) !== !1)) {
                if (!o && !d.noBubble && !ce.isWindow(n)) {
                    for (l = d.delegateType || f, xt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) c.push(s), a = s;
                    a === (n.ownerDocument || Z) && c.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                     (s = c[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || f, h = (Pe.get(s, "events") || {})[t.type] && Pe.get(s, "handle"), h && h.apply(s, i), h = u && s[u], h && h.apply && We(s) && (t.result = h.apply(s, i), t.result === !1 && t.preventDefault());
                return t.type = f, o || t.isDefaultPrevented() || d._default && d._default.apply(c.pop(), i) !== !1 || !We(n) || u && ce.isFunction(n[f]) && !ce.isWindow(n) && (a = n[u], a && (n[u] = null), ce.event.triggered = f, n[f](), ce.event.triggered = void 0, a && (n[u] = a)), t.result
            }
        },
        simulate: function(e, t, i) {
            var n = ce.extend(new ce.Event, i, {
                type: e,
                isSimulated: !0
            });
            ce.event.trigger(n, null, t)
        }
    }), ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? ce.event.trigger(e, t, i, !0) : void 0
        }
    }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        ce.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), ce.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), he.focusin = "onfocusin" in e, he.focusin || ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            ce.event.simulate(t, e.target, ce.event.fix(e))
        };
        ce.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = Pe.access(n, t);
                o || n.addEventListener(e, i, !0), Pe.access(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = Pe.access(n, t) - 1;
                o ? Pe.access(n, t, o) : (n.removeEventListener(e, i, !0), Pe.remove(n, t))
            }
        }
    });
    var Ct = e.location,
        kt = ce.now(),
        Tt = /\?/;
    ce.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t) return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (n) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || ce.error("Invalid XML: " + t), i
    };
    var $t = /\[\]$/,
        St = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        Mt = /^(?:input|select|textarea|keygen)/i;
    ce.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                var i = ce.isFunction(t) ? t() : t;
                n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (ce.isArray(e) || e.jquery && !ce.isPlainObject(e)) ce.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (i in e) U(i, e[i], t, o);
        return n.join("&")
    }, ce.fn.extend({
        serialize: function() {
            return ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ce.prop(this, "elements");
                return e ? ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ce(this).is(":disabled") && Mt.test(this.nodeName) && !Et.test(e) && (this.checked || !Re.test(e))
            }).map(function(e, t) {
                var i = ce(this).val();
                return null == i ? null : ce.isArray(i) ? ce.map(i, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(St, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: i.replace(St, "\r\n")
                        }
            }).get()
        }
    });
    var At = /%20/g,
        Dt = /#.*$/,
        Wt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        It = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        jt = {},
        Nt = {},
        Bt = "*/".concat("*"),
        Ot = Z.createElement("a");
    Ot.href = Ct.href, ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Ht.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
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
                "text xml": ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Y(Y(e, ce.ajaxSettings), t) : Y(ce.ajaxSettings, e)
        },
        ajaxPrefilter: V(jt),
        ajaxTransport: V(Nt),
        ajax: function(t, i) {
            function n(t, i, n, a) {
                var u, c, f, b, _, x = i;
                h || (h = !0, l && e.clearTimeout(l), o = void 0, s = a || "", C.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, n && (b = K(p, C, n)), b = Q(p, b, C, u), u ? (p.ifModified && (_ = C.getResponseHeader("Last-Modified"), _ && (ce.lastModified[r] = _), _ = C.getResponseHeader("etag"), _ && (ce.etag[r] = _)), 204 === t || "HEAD" === p.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, c = b.data, f = b.error, u = !f)) : (f = x, !t && x || (x = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (i || x) + "", u ? m.resolveWith(v, [c, x, C]) : m.rejectWith(v, [C, x, f]), C.statusCode(w), w = void 0, d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? c : f]), y.fireWith(v, [C, x]), d && (g.trigger("ajaxComplete", [C, p]), --ce.active || ce.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = void 0), i = i || {};
            var o, r, s, a, l, u, h, d, c, f, p = ce.ajaxSetup({}, i),
                v = p.context || p,
                g = p.context && (v.nodeType || v.jquery) ? ce(v) : ce.event,
                m = ce.Deferred(),
                y = ce.Callbacks("once memory"),
                w = p.statusCode || {},
                b = {},
                _ = {},
                x = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!a)
                                for (a = {}; t = Pt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return h ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = _[e.toLowerCase()] = _[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) C.always(e[C.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return o && o.abort(t), n(0, t), this
                    }
                };
            if (m.promise(C), p.url = ((t || p.url || Ct.href) + "").replace(Lt, Ct.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Ee) || [""], null == p.crossDomain) {
                u = Z.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Ot.protocol + "//" + Ot.host != u.protocol + "//" + u.host
                } catch (k) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = ce.param(p.data, p.traditional)), X(jt, p, i, C), h) return C;
            d = ce.event && p.global, d && 0 === ce.active++ && ce.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !It.test(p.type), r = p.url.replace(Dt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(At, "+")) : (f = p.url.slice(r.length), p.data && (r += (Tt.test(r) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (r = r.replace(Wt, ""), f = (Tt.test(r) ? "&" : "?") + "_=" + kt++ + f), p.url = r + f), p.ifModified && (ce.lastModified[r] && C.setRequestHeader("If-Modified-Since", ce.lastModified[r]), ce.etag[r] && C.setRequestHeader("If-None-Match", ce.etag[r])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : p.accepts["*"]);
            for (c in p.headers) C.setRequestHeader(c, p.headers[c]);
            if (p.beforeSend && (p.beforeSend.call(v, C, p) === !1 || h)) return C.abort();
            if (x = "abort", y.add(p.complete), C.done(p.success), C.fail(p.error), o = X(Nt, p, i, C)) {
                if (C.readyState = 1, d && g.trigger("ajaxSend", [C, p]), h) return C;
                p.async && p.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    h = !1, o.send(b, n)
                } catch (k) {
                    if (h) throw k;
                    n(-1, k)
                }
            } else n(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, i) {
            return ce.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return ce.get(e, void 0, t, "script")
        }
    }), ce.each(["get", "post"], function(e, t) {
        ce[t] = function(e, i, n, o) {
            return ce.isFunction(i) && (o = o || n, n = i, i = void 0), ce.ajax(ce.extend({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            }, ce.isPlainObject(e) && e))
        }
    }), ce._evalUrl = function(e) {
        return ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ce.isFunction(e) && (e = e.call(this[0])), t = ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ce.isFunction(e) ? this.each(function(t) {
                    ce(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ce(this),
                        i = t.contents();
                    i.length ? i.wrapAll(e) : t.append(e)
                })
        },
        wrap: function(e) {
            var t = ce.isFunction(e);
            return this.each(function(i) {
                ce(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ce(this).replaceWith(this.childNodes)
            }), this
        }
    }), ce.expr.pseudos.hidden = function(e) {
        return !ce.expr.pseudos.visible(e)
    }, ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ce.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Ft = {
            0: 200,
            1223: 204
        },
        qt = ce.ajaxSettings.xhr();
    he.cors = !!qt && "withCredentials" in qt, he.ajax = qt = !!qt, ce.ajaxTransport(function(t) {
        var i, n;
        return he.cors || qt && !t.crossDomain ? {
                send: function(o, r) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) a[s] = t.xhrFields[s];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (s in o) a.setRequestHeader(s, o[s]);
                    i = function(e) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ft[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                            4 === a.readyState && e.setTimeout(function() {
                                i && n()
                            })
                        }, i = i("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (l) {
                        if (i) throw l
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
    }), ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ce.globalEval(e), e
            }
        }
    }), ce.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ce.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(n, o) {
                    t = ce("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                    }), Z.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Rt = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Rt.pop() || ce.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), ce.ajaxPrefilter("json jsonp", function(t, i, n) {
        var o, r, s, a = t.jsonp !== !1 && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = ce.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(zt, "$1" + o) : t.jsonp !== !1 && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return s || ce.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                s = arguments
            }, n.always(function() {
                void 0 === r ? ce(e).removeProp(o) : e[o] = r, t[o] && (t.jsonpCallback = i.jsonpCallback, Rt.push(o)), s && ce.isFunction(r) && r(s[0]), s = r = void 0
            }), "script") : void 0
    }), he.createHTMLDocument = function() {
        var e = Z.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ce.parseHTML = function(e, t, i) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (i = t, t = !1);
        var n, o, r;
        return t || (he.createHTMLDocument ? (t = Z.implementation.createHTMLDocument(""), n = t.createElement("base"), n.href = Z.location.href, t.head.appendChild(n)) : t = Z), o = _e.exec(e), r = !i && [], o ? [t.createElement(o[1])] : (o = y([e], t, r), r && r.length && ce(r).remove(), ce.merge([], o.childNodes))
    }, ce.fn.load = function(e, t, i) {
        var n, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (n = ce.trim(e.slice(a)), e = e.slice(0, a)), ce.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), s.length > 0 && ce.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(n ? ce("<div>").append(ce.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
                s.each(function() {
                    i.apply(this, r || [e.responseText, t, e])
                })
            }), this
    }, ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ce.expr.pseudos.animated = function(e) {
        return ce.grep(ce.timers, function(t) {
            return e === t.elem
        }).length
    }, ce.offset = {
        setOffset: function(e, t, i) {
            var n, o, r, s, a, l, u, h = ce.css(e, "position"),
                d = ce(e),
                c = {};
            "static" === h && (e.style.position = "relative"), a = d.offset(), r = ce.css(e, "top"), l = ce.css(e, "left"), u = ("absolute" === h || "fixed" === h) && (r + l).indexOf("auto") > -1, u ? (n = d.position(), s = n.top, o = n.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ce.isFunction(t) && (t = t.call(e, i, ce.extend({}, a))), null != t.top && (c.top = t.top - a.top + s), null != t.left && (c.left = t.left - a.left + o), "using" in t ? t.using.call(e, c) : d.css(c)
        }
    }, ce.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    ce.offset.setOffset(this, e, t)
                });
            var t, i, n, o, r = this[0];
            return r ? r.getClientRects().length ? (n = r.getBoundingClientRect(), n.width || n.height ? (o = r.ownerDocument, i = G(o), t = o.documentElement, {
                            top: n.top + i.pageYOffset - t.clientTop,
                            left: n.left + i.pageXOffset - t.clientLeft
                        }) : n) : {
                        top: 0,
                        left: 0
                    } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ce.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ce.nodeName(e[0], "html") || (n = e.offset()), n = {
                        top: n.top + ce.css(e[0], "borderTopWidth", !0),
                        left: n.left + ce.css(e[0], "borderLeftWidth", !0)
                    }), {
                    top: t.top - n.top - ce.css(i, "marginTop", !0),
                    left: t.left - n.left - ce.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ce.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        ce.fn[e] = function(n) {
            return De(this, function(e, n, o) {
                var r = G(e);
                return void 0 === o ? r ? r[t] : e[n] : void(r ? r.scrollTo(i ? r.pageXOffset : o, i ? o : r.pageYOffset) : e[n] = o)
            }, e, n, arguments.length)
        }
    }), ce.each(["top", "left"], function(e, t) {
        ce.cssHooks[t] = D(he.pixelPosition, function(e, i) {
            return i ? (i = A(e, t), ot.test(i) ? ce(e).position()[t] + "px" : i) : void 0
        })
    }), ce.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ce.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            ce.fn[n] = function(o, r) {
                var s = arguments.length && (i || "boolean" != typeof o),
                    a = i || (o === !0 || r === !0 ? "margin" : "border");
                return De(this, function(t, i, o) {
                    var r;
                    return ce.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === o ? ce.css(t, i, a) : ce.style(t, i, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }), ce.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), ce.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ce
    });
    var Ut = e.jQuery,
        Vt = e.$;
    return ce.noConflict = function(t) {
        return e.$ === ce && (e.$ = Vt), t && e.jQuery === ce && (e.jQuery = Ut), ce
    }, t || (e.jQuery = e.$ = ce), ce
}), ! function(e, t, i, n) {
    var o = e(t);
    e.fn.lazyload = function(r) {
        function s() {
            var t = 0;
            l.each(function() {
                var i = e(this);
                if (!u.skip_invisible || i.is(":visible"))
                    if (e.abovethetop(this, u) || e.leftofbegin(this, u));
                    else if (e.belowthefold(this, u) || e.rightoffold(this, u)) {
                        if (++t > u.failure_limit) return !1
                    } else i.trigger("appear"), t = 0
            })
        }
        var a, l = this,
            u = {
                threshold: 0,
                failure_limit: 0,
                event: "scroll",
                effect: "show",
                container: t,
                data_attribute: "original",
                skip_invisible: !1,
                appear: null,
                load: null,
                placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
            };
        return r && (n !== r.failurelimit && (r.failure_limit = r.failurelimit, delete r.failurelimit), n !== r.effectspeed && (r.effect_speed = r.effectspeed, delete r.effectspeed), e.extend(u, r)), a = u.container === n || u.container === t ? o : e(u.container), 0 === u.event.indexOf("scroll") && a.bind(u.event, function() {
            return s()
        }), this.each(function() {
            var t = this,
                i = e(t);
            t.loaded = !1, (i.attr("src") === n || i.attr("src") === !1) && i.is("img") && i.attr("src", u.placeholder), i.one("appear", function() {
                if (!this.loaded) {
                    if (u.appear) {
                        var n = l.length;
                        u.appear.call(t, n, u)
                    }
                    e("<img />").bind("load", function() {
                        var n = i.attr("data-" + u.data_attribute);
                        i.hide(), i.is("img") ? i.attr("src", n) : i.css("background-image", "url('" + n + "')"), i[u.effect](u.effect_speed), t.loaded = !0;
                        var o = e.grep(l, function(e) {
                            return !e.loaded
                        });
                        if (l = e(o), u.load) {
                            var r = l.length;
                            u.load.call(t, r, u)
                        }
                    }).attr("src", i.attr("data-" + u.data_attribute))
                }
            }), 0 !== u.event.indexOf("scroll") && i.bind(u.event, function() {
                t.loaded || i.trigger("appear")
            })
        }), o.bind("resize", function() {
            s()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && o.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && l.each(function() {
                e(this).trigger("appear")
            })
        }), e(i).ready(function() {
            s()
        }), this
    }, e.belowthefold = function(i, r) {
        var s;
        return s = r.container === n || r.container === t ? (t.innerHeight ? t.innerHeight : o.height()) + o.scrollTop() : e(r.container).offset().top + e(r.container).height(), s <= e(i).offset().top - r.threshold
    }, e.rightoffold = function(i, r) {
        var s;
        return s = r.container === n || r.container === t ? o.width() + o.scrollLeft() : e(r.container).offset().left + e(r.container).width(), s <= e(i).offset().left - r.threshold
    }, e.abovethetop = function(i, r) {
        var s;
        return s = r.container === n || r.container === t ? o.scrollTop() : e(r.container).offset().top, s >= e(i).offset().top + r.threshold + e(i).height()
    }, e.leftofbegin = function(i, r) {
        var s;
        return s = r.container === n || r.container === t ? o.scrollLeft() : e(r.container).offset().left, s >= e(i).offset().left + r.threshold + e(i).width()
    }, e.inviewport = function(t, i) {
        return !(e.rightoffold(t, i) || e.leftofbegin(t, i) || e.belowthefold(t, i) || e.abovethetop(t, i))
    }, e.extend(e.expr[":"], {
        "below-the-fold": function(t) {
            return e.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return e.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !e.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return e.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !e.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document), ! function() {
    var e = jQuery.event.special,
        t = "D" + +new Date,
        i = "D" + (+new Date + 1);
    e.scrollstart = {
        setup: function() {
            var i, n = function(t) {
                var n = this,
                    o = arguments;
                i ? clearTimeout(i) : (t.type = "scrollstart", jQuery.event.dispatch.apply(n, o)), i = setTimeout(function() {
                    i = null
                }, e.scrollstop.latency)
            };
            jQuery(this).bind("scroll", n).data(t, n)
        },
        teardown: function() {
            jQuery(this).unbind("scroll", jQuery(this).data(t))
        }
    }, e.scrollstop = {
        latency: 300,
        setup: function() {
            var t, n = function(i) {
                var n = this,
                    o = arguments;
                t && clearTimeout(t), t = setTimeout(function() {
                    t = null, i.type = "scrollstop", jQuery.event.dispatch.apply(n, o)
                }, e.scrollstop.latency)
            };
            jQuery(this).bind("scroll", n).data(i, n)
        },
        teardown: function() {
            jQuery(this).unbind("scroll", jQuery(this).data(i))
        }
    }
}(), ! function(e) {
    "use strict";

    function t(t, i, n, o) {
        function r(e, t) {
            return e -= o, t -= o, !(0 > e || e >= u || 0 > t || t >= u) && l.isDark(e, t)
        }

        function s(e, t, i, n) {
            var o = a.isDark,
                r = 1 / h;
            a.isDark = function(s, a) {
                var l = a * r,
                    u = s * r,
                    h = l + r,
                    d = u + r;
                return o(s, a) && (e > h || l > i || t > d || u > n)
            }
        }
        var a = {},
            l = e(n, i);
        l.addData(t), l.make(), o = o || 0;
        var u = l.getModuleCount(),
            h = l.getModuleCount() + 2 * o;
        return a.text = t, a.level = i, a.version = n, a.moduleCount = h, a.isDark = r, a.addBlank = s, a
    }

    function i(e, i, n, o, r) {
        n = Math.max(1, n || 1), o = Math.min(40, o || 40);
        for (var s = n; o >= s; s += 1) try {
            return t(e, i, s, r)
        } catch (a) {}
    }

    function n(e, t, i) {
        var n = i.size,
            o = "bold " + i.mSize * n + "px " + i.fontname,
            r = g("<canvas/>")[0].getContext("2d");
        r.font = o;
        var s = r.measureText(i.label).width,
            a = i.mSize,
            l = s / n,
            u = (1 - l) * i.mPosX,
            h = (1 - a) * i.mPosY,
            d = u + l,
            c = h + a,
            f = .01;
        1 === i.mode ? e.addBlank(0, h - f, n, c + f) : e.addBlank(u - f, h - f, d + f, c + f), t.fillStyle = i.fontcolor, t.font = o, t.fillText(i.label, u * n, h * n + .75 * i.mSize * n)
    }

    function o(e, t, i) {
        var n = i.size,
            o = i.image.naturalWidth || 1,
            r = i.image.naturalHeight || 1,
            s = i.mSize,
            a = s * o / r,
            l = (1 - a) * i.mPosX,
            u = (1 - s) * i.mPosY,
            h = l + a,
            d = u + s,
            c = .01;
        3 === i.mode ? e.addBlank(0, u - c, n, d + c) : e.addBlank(l - c, u - c, h + c, d + c), t.drawImage(i.image, l * n, u * n, a * n, s * n)
    }

    function r(e, t, i) {
        g(i.background).is("img") ? t.drawImage(i.background, 0, 0, i.size, i.size) : i.background && (t.fillStyle = i.background, t.fillRect(i.left, i.top, i.size, i.size));
        var r = i.mode;
        1 === r || 2 === r ? n(e, t, i) : (3 === r || 4 === r) && o(e, t, i)
    }

    function s(e, t, i, n, o, r, s, a) {
        e.isDark(s, a) && t.rect(n, o, r, r)
    }

    function a(e, t, i, n, o, r, s, a, l, u) {
        s ? e.moveTo(t + r, i) : e.moveTo(t, i), a ? (e.lineTo(n - r, i), e.arcTo(n, i, n, o, r)) : e.lineTo(n, i), l ? (e.lineTo(n, o - r), e.arcTo(n, o, t, o, r)) : e.lineTo(n, o), u ? (e.lineTo(t + r, o), e.arcTo(t, o, t, i, r)) : e.lineTo(t, o), s ? (e.lineTo(t, i + r), e.arcTo(t, i, n, i, r)) : e.lineTo(t, i)
    }

    function l(e, t, i, n, o, r, s, a, l, u) {
        s && (e.moveTo(t + r, i), e.lineTo(t, i), e.lineTo(t, i + r), e.arcTo(t, i, t + r, i, r)), a && (e.moveTo(n - r, i), e.lineTo(n, i), e.lineTo(n, i + r), e.arcTo(n, i, n - r, i, r)), l && (e.moveTo(n - r, o), e.lineTo(n, o), e.lineTo(n, o - r), e.arcTo(n, o, n - r, o, r)), u && (e.moveTo(t + r, o), e.lineTo(t, o), e.lineTo(t, o - r), e.arcTo(t, o, t + r, o, r))
    }

    function u(e, t, i, n, o, r, s, u) {
        var h = e.isDark,
            d = n + r,
            c = o + r,
            f = i.radius * r,
            p = s - 1,
            v = s + 1,
            g = u - 1,
            m = u + 1,
            y = h(s, u),
            w = h(p, g),
            b = h(p, u),
            _ = h(p, m),
            x = h(s, m),
            C = h(v, m),
            k = h(v, u),
            T = h(v, g),
            $ = h(s, g);
        y ? a(t, n, o, d, c, f, !b && !$, !b && !x, !k && !x, !k && !$) : l(t, n, o, d, c, f, b && $ && w, b && x && _, k && x && C, k && $ && T)
    }

    function h(e, t, i) {
        var n, o, r = e.moduleCount,
            a = i.size / r,
            l = s;
        for (i.radius > 0 && i.radius <= .5 && (l = u), t.beginPath(), n = 0; r > n; n += 1)
            for (o = 0; r > o; o += 1) {
                var h = i.left + o * a,
                    d = i.top + n * a,
                    c = a;
                l(e, t, i, h, d, c, n, o)
            }
        if (g(i.fill).is("img")) {
            t.strokeStyle = "rgba(0,0,0,0.5)", t.lineWidth = 2, t.stroke();
            var f = t.globalCompositeOperation;
            t.globalCompositeOperation = "destination-out", t.fill(), t.globalCompositeOperation = f, t.clip(), t.drawImage(i.fill, 0, 0, i.size, i.size), t.restore()
        } else t.fillStyle = i.fill, t.fill()
    }

    function d(e, t) {
        var n = i(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);
        if (!n) return null;
        var o = g(e).data("qrcode", n),
            s = o[0].getContext("2d");
        return r(n, s, t), h(n, s, t), o
    }

    function c(e) {
        var t = g("<canvas/>").attr("width", e.size).attr("height", e.size);
        return d(t, e)
    }

    function f(e) {
        return g("<img/>").attr("src", c(e)[0].toDataURL("image/png"))
    }

    function p(e) {
        var t = i(e.text, e.ecLevel, e.minVersion, e.maxVersion, e.quiet);
        if (!t) return null;
        var n, o, r = e.size,
            s = e.background,
            a = Math.floor,
            l = t.moduleCount,
            u = a(r / l),
            h = a(.5 * (r - u * l)),
            d = {
                position: "relative",
                left: 0,
                top: 0,
                padding: 0,
                margin: 0,
                width: r,
                height: r
            },
            c = {
                position: "absolute",
                padding: 0,
                margin: 0,
                width: u,
                height: u,
                "background-color": e.fill
            },
            f = g("<div/>").data("qrcode", t).css(d);
        for (s && f.css("background-color", s), n = 0; l > n; n += 1)
            for (o = 0; l > o; o += 1) t.isDark(n, o) && g("<div/>").css(c).css({
                left: h + o * u,
                top: h + n * u
            }).appendTo(f);
        return f
    }

    function v(e) {
        return m && "canvas" === e.render ? c(e) : m && "image" === e.render ? f(e) : p(e)
    }
    var g = window.jQuery,
        m = function() {
            var e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d"))
        }(),
        y = {
            render: "canvas",
            minVersion: 1,
            maxVersion: 40,
            ecLevel: "L",
            left: 0,
            top: 0,
            size: 200,
            fill: "#000",
            background: null,
            text: "no text",
            radius: 0,
            quiet: 0,
            mode: 0,
            mSize: .1,
            mPosX: .5,
            mPosY: .5,
            label: "no label",
            fontname: "sans",
            fontcolor: "#000",
            image: null
        };
    g.fn.qrcode = function(e) {
        var t = g.extend({}, y, e);
        return this.each(function(e, i) {
            "canvas" === i.nodeName.toLowerCase() ? d(i, t) : g(i).append(v(t))
        })
    }
}(function() {
    var e = function() {
        function e(t, i) {
            if ("undefined" == typeof t.length) throw new Error(t.length + "/" + i);
            var n = function() {
                    for (var e = 0; e < t.length && 0 == t[e];) e += 1;
                    for (var n = new Array(t.length - e + i), o = 0; o < t.length - e; o += 1) n[o] = t[o + e];
                    return n
                }(),
                o = {};
            return o.getAt = function(e) {
                return n[e]
            }, o.getLength = function() {
                return n.length
            }, o.multiply = function(t) {
                for (var i = new Array(o.getLength() + t.getLength() - 1), n = 0; n < o.getLength(); n += 1)
                    for (var r = 0; r < t.getLength(); r += 1) i[n + r] ^= s.gexp(s.glog(o.getAt(n)) + s.glog(t.getAt(r)));
                return e(i, 0)
            }, o.mod = function(t) {
                if (o.getLength() - t.getLength() < 0) return o;
                for (var i = s.glog(o.getAt(0)) - s.glog(t.getAt(0)), n = new Array(o.getLength()), r = 0; r < o.getLength(); r += 1) n[r] = o.getAt(r);
                for (var r = 0; r < t.getLength(); r += 1) n[r] ^= s.gexp(s.glog(t.getAt(r)) + i);
                return e(n, 0).mod(t)
            }, o
        }
        var t = function(t, i) {
            var o = 236,
                s = 17,
                h = t,
                d = n[i],
                c = null,
                f = 0,
                v = null,
                g = new Array,
                m = {},
                y = function(e, t) {
                    f = 4 * h + 17, c = function(e) {
                        for (var t = new Array(e), i = 0; e > i; i += 1) {
                            t[i] = new Array(e);
                            for (var n = 0; e > n; n += 1) t[i][n] = null
                        }
                        return t
                    }(f), w(0, 0), w(f - 7, 0), w(0, f - 7), x(), _(), k(e, t), h >= 7 && C(e), null == v && (v = S(h, d, g)), T(v, t)
                },
                w = function(e, t) {
                    for (var i = -1; 7 >= i; i += 1)
                        if (!(-1 >= e + i || e + i >= f))
                            for (var n = -1; 7 >= n; n += 1) - 1 >= t + n || t + n >= f || (i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n ? c[e + i][t + n] = !0 : c[e + i][t + n] = !1)
                },
                b = function() {
                    for (var e = 0, t = 0, i = 0; 8 > i; i += 1) {
                        y(!0, i);
                        var n = r.getLostPoint(m);
                        (0 == i || e > n) && (e = n, t = i)
                    }
                    return t
                },
                _ = function() {
                    for (var e = 8; f - 8 > e; e += 1) null == c[e][6] && (c[e][6] = e % 2 == 0);
                    for (var t = 8; f - 8 > t; t += 1) null == c[6][t] && (c[6][t] = t % 2 == 0)
                },
                x = function() {
                    for (var e = r.getPatternPosition(h), t = 0; t < e.length; t += 1)
                        for (var i = 0; i < e.length; i += 1) {
                            var n = e[t],
                                o = e[i];
                            if (null == c[n][o])
                                for (var s = -2; 2 >= s; s += 1)
                                    for (var a = -2; 2 >= a; a += 1) - 2 == s || 2 == s || -2 == a || 2 == a || 0 == s && 0 == a ? c[n + s][o + a] = !0 : c[n + s][o + a] = !1
                        }
                },
                C = function(e) {
                    for (var t = r.getBCHTypeNumber(h), i = 0; 18 > i; i += 1) {
                        var n = !e && 1 == (t >> i & 1);
                        c[Math.floor(i / 3)][i % 3 + f - 8 - 3] = n
                    }
                    for (var i = 0; 18 > i; i += 1) {
                        var n = !e && 1 == (t >> i & 1);
                        c[i % 3 + f - 8 - 3][Math.floor(i / 3)] = n
                    }
                },
                k = function(e, t) {
                    for (var i = d << 3 | t, n = r.getBCHTypeInfo(i), o = 0; 15 > o; o += 1) {
                        var s = !e && 1 == (n >> o & 1);
                        6 > o ? c[o][8] = s : 8 > o ? c[o + 1][8] = s : c[f - 15 + o][8] = s
                    }
                    for (var o = 0; 15 > o; o += 1) {
                        var s = !e && 1 == (n >> o & 1);
                        8 > o ? c[8][f - o - 1] = s : 9 > o ? c[8][15 - o - 1 + 1] = s : c[8][15 - o - 1] = s
                    }
                    c[f - 8][8] = !e
                },
                T = function(e, t) {
                    for (var i = -1, n = f - 1, o = 7, s = 0, a = r.getMaskFunction(t), l = f - 1; l > 0; l -= 2)
                        for (6 == l && (l -= 1);;) {
                            for (var u = 0; 2 > u; u += 1)
                                if (null == c[n][l - u]) {
                                    var h = !1;
                                    s < e.length && (h = 1 == (e[s] >>> o & 1));
                                    var d = a(n, l - u);
                                    d && (h = !h), c[n][l - u] = h, o -= 1, -1 == o && (s += 1, o = 7)
                                }
                            if (n += i, 0 > n || n >= f) {
                                n -= i, i = -i;
                                break
                            }
                        }
                },
                $ = function(t, i) {
                    for (var n = 0, o = 0, s = 0, a = new Array(i.length), l = new Array(i.length), u = 0; u < i.length; u += 1) {
                        var h = i[u].dataCount,
                            d = i[u].totalCount - h;
                        o = Math.max(o, h), s = Math.max(s, d), a[u] = new Array(h);
                        for (var c = 0; c < a[u].length; c += 1) a[u][c] = 255 & t.getBuffer()[c + n];
                        n += h;
                        var f = r.getErrorCorrectPolynomial(d),
                            p = e(a[u], f.getLength() - 1),
                            v = p.mod(f);
                        l[u] = new Array(f.getLength() - 1);
                        for (var c = 0; c < l[u].length; c += 1) {
                            var g = c + v.getLength() - l[u].length;
                            l[u][c] = g >= 0 ? v.getAt(g) : 0
                        }
                    }
                    for (var m = 0, c = 0; c < i.length; c += 1) m += i[c].totalCount;
                    for (var y = new Array(m), w = 0, c = 0; o > c; c += 1)
                        for (var u = 0; u < i.length; u += 1) c < a[u].length && (y[w] = a[u][c], w += 1);
                    for (var c = 0; s > c; c += 1)
                        for (var u = 0; u < i.length; u += 1) c < l[u].length && (y[w] = l[u][c], w += 1);
                    return y
                },
                S = function(e, t, i) {
                    for (var n = a.getRSBlocks(e, t), u = l(), h = 0; h < i.length; h += 1) {
                        var d = i[h];
                        u.put(d.getMode(), 4), u.put(d.getLength(), r.getLengthInBits(d.getMode(), e)), d.write(u)
                    }
                    for (var c = 0, h = 0; h < n.length; h += 1) c += n[h].dataCount;
                    if (u.getLengthInBits() > 8 * c) throw new Error("code length overflow. (" + u.getLengthInBits() + ">" + 8 * c + ")");
                    for (u.getLengthInBits() + 4 <= 8 * c && u.put(0, 4); u.getLengthInBits() % 8 != 0;) u.putBit(!1);
                    for (; !(u.getLengthInBits() >= 8 * c) && (u.put(o, 8), !(u.getLengthInBits() >= 8 * c));) u.put(s, 8);
                    return $(u, n)
                };
            return m.addData = function(e) {
                var t = u(e);
                g.push(t), v = null
            }, m.isDark = function(e, t) {
                if (0 > e || e >= f || 0 > t || t >= f) throw new Error(e + "," + t);
                return c[e][t]
            }, m.getModuleCount = function() {
                return f
            }, m.make = function() {
                y(!1, b())
            }, m.createTableTag = function(e, t) {
                e = e || 2, t = "undefined" == typeof t ? 4 * e : t;
                var i = "";
                i += '<table style="', i += " border-width: 0px; border-style: none;", i += " border-collapse: collapse;", i += " padding: 0px; margin: " + t + "px;", i += '">', i += "<tbody>";
                for (var n = 0; n < m.getModuleCount(); n += 1) {
                    i += "<tr>";
                    for (var o = 0; o < m.getModuleCount(); o += 1) i += '<td style="', i += " border-width: 0px; border-style: none;", i += " border-collapse: collapse;", i += " padding: 0px; margin: 0px;", i += " width: " + e + "px;", i += " height: " + e + "px;", i += " background-color: ", i += m.isDark(n, o) ? "#000000" : "#ffffff", i += ";", i += '"/>';
                    i += "</tr>"
                }
                return i += "</tbody>", i += "</table>"
            }, m.createImgTag = function(e, t) {
                e = e || 2, t = "undefined" == typeof t ? 4 * e : t;
                var i = m.getModuleCount() * e + 2 * t,
                    n = t,
                    o = i - t;
                return p(i, i, function(t, i) {
                    if (t >= n && o > t && i >= n && o > i) {
                        var r = Math.floor((t - n) / e),
                            s = Math.floor((i - n) / e);
                        return m.isDark(s, r) ? 0 : 1
                    }
                    return 1
                })
            }, m
        };
        t.stringToBytes = function(e) {
            for (var t = new Array, i = 0; i < e.length; i += 1) {
                var n = e.charCodeAt(i);
                t.push(255 & n)
            }
            return t
        }, t.createStringToBytes = function(e, t) {
            var i = function() {
                    for (var i = c(e), n = function() {
                        var e = i.read();
                        if (-1 == e) throw new Error;
                        return e
                    }, o = 0, r = {};;) {
                        var s = i.read();
                        if (-1 == s) break;
                        var a = n(),
                            l = n(),
                            u = n(),
                            h = String.fromCharCode(s << 8 | a),
                            d = l << 8 | u;
                        r[h] = d, o += 1
                    }
                    if (o != t) throw new Error(o + " != " + t);
                    return r
                }(),
                n = "?".charCodeAt(0);
            return function(e) {
                for (var t = new Array, o = 0; o < e.length; o += 1) {
                    var r = e.charCodeAt(o);
                    if (128 > r) t.push(r);
                    else {
                        var s = i[e.charAt(o)];
                        "number" == typeof s ? (255 & s) == s ? t.push(s) : (t.push(s >>> 8), t.push(255 & s)) : t.push(n)
                    }
                }
                return t
            }
        };
        var i = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            },
            n = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            },
            o = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            },
            r = function() {
                var t = [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    n = 1335,
                    r = 7973,
                    a = 21522,
                    l = {},
                    u = function(e) {
                        for (var t = 0; 0 != e;) t += 1, e >>>= 1;
                        return t
                    };
                return l.getBCHTypeInfo = function(e) {
                    for (var t = e << 10; u(t) - u(n) >= 0;) t ^= n << u(t) - u(n);
                    return (e << 10 | t) ^ a
                }, l.getBCHTypeNumber = function(e) {
                    for (var t = e << 12; u(t) - u(r) >= 0;) t ^= r << u(t) - u(r);
                    return e << 12 | t
                }, l.getPatternPosition = function(e) {
                    return t[e - 1]
                }, l.getMaskFunction = function(e) {
                    switch (e) {
                        case o.PATTERN000:
                            return function(e, t) {
                                return (e + t) % 2 == 0
                            };
                        case o.PATTERN001:
                            return function(e, t) {
                                return e % 2 == 0
                            };
                        case o.PATTERN010:
                            return function(e, t) {
                                return t % 3 == 0
                            };
                        case o.PATTERN011:
                            return function(e, t) {
                                return (e + t) % 3 == 0
                            };
                        case o.PATTERN100:
                            return function(e, t) {
                                return (Math.floor(e / 2) + Math.floor(t / 3)) % 2 == 0
                            };
                        case o.PATTERN101:
                            return function(e, t) {
                                return e * t % 2 + e * t % 3 == 0
                            };
                        case o.PATTERN110:
                            return function(e, t) {
                                return (e * t % 2 + e * t % 3) % 2 == 0
                            };
                        case o.PATTERN111:
                            return function(e, t) {
                                return (e * t % 3 + (e + t) % 2) % 2 == 0
                            };
                        default:
                            throw new Error("bad maskPattern:" + e)
                    }
                }, l.getErrorCorrectPolynomial = function(t) {
                    for (var i = e([1], 0), n = 0; t > n; n += 1) i = i.multiply(e([1, s.gexp(n)], 0));
                    return i
                }, l.getLengthInBits = function(e, t) {
                    if (t >= 1 && 10 > t) switch (e) {
                        case i.MODE_NUMBER:
                            return 10;
                        case i.MODE_ALPHA_NUM:
                            return 9;
                        case i.MODE_8BIT_BYTE:
                            return 8;
                        case i.MODE_KANJI:
                            return 8;
                        default:
                            throw new Error("mode:" + e)
                    } else if (27 > t) switch (e) {
                        case i.MODE_NUMBER:
                            return 12;
                        case i.MODE_ALPHA_NUM:
                            return 11;
                        case i.MODE_8BIT_BYTE:
                            return 16;
                        case i.MODE_KANJI:
                            return 10;
                        default:
                            throw new Error("mode:" + e)
                    } else {
                        if (!(41 > t)) throw new Error("type:" + t);
                        switch (e) {
                            case i.MODE_NUMBER:
                                return 14;
                            case i.MODE_ALPHA_NUM:
                                return 13;
                            case i.MODE_8BIT_BYTE:
                                return 16;
                            case i.MODE_KANJI:
                                return 12;
                            default:
                                throw new Error("mode:" + e)
                        }
                    }
                }, l.getLostPoint = function(e) {
                    for (var t = e.getModuleCount(), i = 0, n = 0; t > n; n += 1)
                        for (var o = 0; t > o; o += 1) {
                            for (var r = 0, s = e.isDark(n, o), a = -1; 1 >= a; a += 1)
                                if (!(0 > n + a || n + a >= t))
                                    for (var l = -1; 1 >= l; l += 1) 0 > o + l || o + l >= t || (0 != a || 0 != l) && s == e.isDark(n + a, o + l) && (r += 1);
                            r > 5 && (i += 3 + r - 5)
                        }
                    for (var n = 0; t - 1 > n; n += 1)
                        for (var o = 0; t - 1 > o; o += 1) {
                            var u = 0;
                            e.isDark(n, o) && (u += 1), e.isDark(n + 1, o) && (u += 1), e.isDark(n, o + 1) && (u += 1), e.isDark(n + 1, o + 1) && (u += 1), (0 == u || 4 == u) && (i += 3)
                        }
                    for (var n = 0; t > n; n += 1)
                        for (var o = 0; t - 6 > o; o += 1) e.isDark(n, o) && !e.isDark(n, o + 1) && e.isDark(n, o + 2) && e.isDark(n, o + 3) && e.isDark(n, o + 4) && !e.isDark(n, o + 5) && e.isDark(n, o + 6) && (i += 40);
                    for (var o = 0; t > o; o += 1)
                        for (var n = 0; t - 6 > n; n += 1) e.isDark(n, o) && !e.isDark(n + 1, o) && e.isDark(n + 2, o) && e.isDark(n + 3, o) && e.isDark(n + 4, o) && !e.isDark(n + 5, o) && e.isDark(n + 6, o) && (i += 40);
                    for (var h = 0, o = 0; t > o; o += 1)
                        for (var n = 0; t > n; n += 1) e.isDark(n, o) && (h += 1);
                    var d = Math.abs(100 * h / t / t - 50) / 5;
                    return i += 10 * d
                }, l
            }(),
            s = function() {
                for (var e = new Array(256), t = new Array(256), i = 0; 8 > i; i += 1) e[i] = 1 << i;
                for (var i = 8; 256 > i; i += 1) e[i] = e[i - 4] ^ e[i - 5] ^ e[i - 6] ^ e[i - 8];
                for (var i = 0; 255 > i; i += 1) t[e[i]] = i;
                var n = {};
                return n.glog = function(e) {
                    if (1 > e) throw new Error("glog(" + e + ")");
                    return t[e]
                }, n.gexp = function(t) {
                    for (; 0 > t;) t += 255;
                    for (; t >= 256;) t -= 255;
                    return e[t]
                }, n
            }(),
            a = function() {
                var e = [
                        [1, 26, 19],
                        [1, 26, 16],
                        [1, 26, 13],
                        [1, 26, 9],
                        [1, 44, 34],
                        [1, 44, 28],
                        [1, 44, 22],
                        [1, 44, 16],
                        [1, 70, 55],
                        [1, 70, 44],
                        [2, 35, 17],
                        [2, 35, 13],
                        [1, 100, 80],
                        [2, 50, 32],
                        [2, 50, 24],
                        [4, 25, 9],
                        [1, 134, 108],
                        [2, 67, 43],
                        [2, 33, 15, 2, 34, 16],
                        [2, 33, 11, 2, 34, 12],
                        [2, 86, 68],
                        [4, 43, 27],
                        [4, 43, 19],
                        [4, 43, 15],
                        [2, 98, 78],
                        [4, 49, 31],
                        [2, 32, 14, 4, 33, 15],
                        [4, 39, 13, 1, 40, 14],
                        [2, 121, 97],
                        [2, 60, 38, 2, 61, 39],
                        [4, 40, 18, 2, 41, 19],
                        [4, 40, 14, 2, 41, 15],
                        [2, 146, 116],
                        [3, 58, 36, 2, 59, 37],
                        [4, 36, 16, 4, 37, 17],
                        [4, 36, 12, 4, 37, 13],
                        [2, 86, 68, 2, 87, 69],
                        [4, 69, 43, 1, 70, 44],
                        [6, 43, 19, 2, 44, 20],
                        [6, 43, 15, 2, 44, 16],
                        [4, 101, 81],
                        [1, 80, 50, 4, 81, 51],
                        [4, 50, 22, 4, 51, 23],
                        [3, 36, 12, 8, 37, 13],
                        [2, 116, 92, 2, 117, 93],
                        [6, 58, 36, 2, 59, 37],
                        [4, 46, 20, 6, 47, 21],
                        [7, 42, 14, 4, 43, 15],
                        [4, 133, 107],
                        [8, 59, 37, 1, 60, 38],
                        [8, 44, 20, 4, 45, 21],
                        [12, 33, 11, 4, 34, 12],
                        [3, 145, 115, 1, 146, 116],
                        [4, 64, 40, 5, 65, 41],
                        [11, 36, 16, 5, 37, 17],
                        [11, 36, 12, 5, 37, 13],
                        [5, 109, 87, 1, 110, 88],
                        [5, 65, 41, 5, 66, 42],
                        [5, 54, 24, 7, 55, 25],
                        [11, 36, 12, 7, 37, 13],
                        [5, 122, 98, 1, 123, 99],
                        [7, 73, 45, 3, 74, 46],
                        [15, 43, 19, 2, 44, 20],
                        [3, 45, 15, 13, 46, 16],
                        [1, 135, 107, 5, 136, 108],
                        [10, 74, 46, 1, 75, 47],
                        [1, 50, 22, 15, 51, 23],
                        [2, 42, 14, 17, 43, 15],
                        [5, 150, 120, 1, 151, 121],
                        [9, 69, 43, 4, 70, 44],
                        [17, 50, 22, 1, 51, 23],
                        [2, 42, 14, 19, 43, 15],
                        [3, 141, 113, 4, 142, 114],
                        [3, 70, 44, 11, 71, 45],
                        [17, 47, 21, 4, 48, 22],
                        [9, 39, 13, 16, 40, 14],
                        [3, 135, 107, 5, 136, 108],
                        [3, 67, 41, 13, 68, 42],
                        [15, 54, 24, 5, 55, 25],
                        [15, 43, 15, 10, 44, 16],
                        [4, 144, 116, 4, 145, 117],
                        [17, 68, 42],
                        [17, 50, 22, 6, 51, 23],
                        [19, 46, 16, 6, 47, 17],
                        [2, 139, 111, 7, 140, 112],
                        [17, 74, 46],
                        [7, 54, 24, 16, 55, 25],
                        [34, 37, 13],
                        [4, 151, 121, 5, 152, 122],
                        [4, 75, 47, 14, 76, 48],
                        [11, 54, 24, 14, 55, 25],
                        [16, 45, 15, 14, 46, 16],
                        [6, 147, 117, 4, 148, 118],
                        [6, 73, 45, 14, 74, 46],
                        [11, 54, 24, 16, 55, 25],
                        [30, 46, 16, 2, 47, 17],
                        [8, 132, 106, 4, 133, 107],
                        [8, 75, 47, 13, 76, 48],
                        [7, 54, 24, 22, 55, 25],
                        [22, 45, 15, 13, 46, 16],
                        [10, 142, 114, 2, 143, 115],
                        [19, 74, 46, 4, 75, 47],
                        [28, 50, 22, 6, 51, 23],
                        [33, 46, 16, 4, 47, 17],
                        [8, 152, 122, 4, 153, 123],
                        [22, 73, 45, 3, 74, 46],
                        [8, 53, 23, 26, 54, 24],
                        [12, 45, 15, 28, 46, 16],
                        [3, 147, 117, 10, 148, 118],
                        [3, 73, 45, 23, 74, 46],
                        [4, 54, 24, 31, 55, 25],
                        [11, 45, 15, 31, 46, 16],
                        [7, 146, 116, 7, 147, 117],
                        [21, 73, 45, 7, 74, 46],
                        [1, 53, 23, 37, 54, 24],
                        [19, 45, 15, 26, 46, 16],
                        [5, 145, 115, 10, 146, 116],
                        [19, 75, 47, 10, 76, 48],
                        [15, 54, 24, 25, 55, 25],
                        [23, 45, 15, 25, 46, 16],
                        [13, 145, 115, 3, 146, 116],
                        [2, 74, 46, 29, 75, 47],
                        [42, 54, 24, 1, 55, 25],
                        [23, 45, 15, 28, 46, 16],
                        [17, 145, 115],
                        [10, 74, 46, 23, 75, 47],
                        [10, 54, 24, 35, 55, 25],
                        [19, 45, 15, 35, 46, 16],
                        [17, 145, 115, 1, 146, 116],
                        [14, 74, 46, 21, 75, 47],
                        [29, 54, 24, 19, 55, 25],
                        [11, 45, 15, 46, 46, 16],
                        [13, 145, 115, 6, 146, 116],
                        [14, 74, 46, 23, 75, 47],
                        [44, 54, 24, 7, 55, 25],
                        [59, 46, 16, 1, 47, 17],
                        [12, 151, 121, 7, 152, 122],
                        [12, 75, 47, 26, 76, 48],
                        [39, 54, 24, 14, 55, 25],
                        [22, 45, 15, 41, 46, 16],
                        [6, 151, 121, 14, 152, 122],
                        [6, 75, 47, 34, 76, 48],
                        [46, 54, 24, 10, 55, 25],
                        [2, 45, 15, 64, 46, 16],
                        [17, 152, 122, 4, 153, 123],
                        [29, 74, 46, 14, 75, 47],
                        [49, 54, 24, 10, 55, 25],
                        [24, 45, 15, 46, 46, 16],
                        [4, 152, 122, 18, 153, 123],
                        [13, 74, 46, 32, 75, 47],
                        [48, 54, 24, 14, 55, 25],
                        [42, 45, 15, 32, 46, 16],
                        [20, 147, 117, 4, 148, 118],
                        [40, 75, 47, 7, 76, 48],
                        [43, 54, 24, 22, 55, 25],
                        [10, 45, 15, 67, 46, 16],
                        [19, 148, 118, 6, 149, 119],
                        [18, 75, 47, 31, 76, 48],
                        [34, 54, 24, 34, 55, 25],
                        [20, 45, 15, 61, 46, 16]
                    ],
                    t = function(e, t) {
                        var i = {};
                        return i.totalCount = e, i.dataCount = t, i
                    },
                    i = {},
                    o = function(t, i) {
                        switch (i) {
                            case n.L:
                                return e[4 * (t - 1) + 0];
                            case n.M:
                                return e[4 * (t - 1) + 1];
                            case n.Q:
                                return e[4 * (t - 1) + 2];
                            case n.H:
                                return e[4 * (t - 1) + 3];
                            default:
                                return
                        }
                    };
                return i.getRSBlocks = function(e, i) {
                    var n = o(e, i);
                    if ("undefined" == typeof n) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + i);
                    for (var r = n.length / 3, s = new Array, a = 0; r > a; a += 1)
                        for (var l = n[3 * a + 0], u = n[3 * a + 1], h = n[3 * a + 2], d = 0; l > d; d += 1) s.push(t(u, h));
                    return s
                }, i
            }(),
            l = function() {
                var e = new Array,
                    t = 0,
                    i = {};
                return i.getBuffer = function() {
                    return e
                }, i.getAt = function(t) {
                    var i = Math.floor(t / 8);
                    return 1 == (e[i] >>> 7 - t % 8 & 1)
                }, i.put = function(e, t) {
                    for (var n = 0; t > n; n += 1) i.putBit(1 == (e >>> t - n - 1 & 1))
                }, i.getLengthInBits = function() {
                    return t
                }, i.putBit = function(i) {
                    var n = Math.floor(t / 8);
                    e.length <= n && e.push(0), i && (e[n] |= 128 >>> t % 8), t += 1
                }, i
            },
            u = function(e) {
                var n = i.MODE_8BIT_BYTE,
                    o = t.stringToBytes(e),
                    r = {};
                return r.getMode = function() {
                    return n
                }, r.getLength = function(e) {
                    return o.length
                }, r.write = function(e) {
                    for (var t = 0; t < o.length; t += 1) e.put(o[t], 8)
                }, r
            },
            h = function() {
                var e = new Array,
                    t = {};
                return t.writeByte = function(t) {
                    e.push(255 & t)
                }, t.writeShort = function(e) {
                    t.writeByte(e), t.writeByte(e >>> 8)
                }, t.writeBytes = function(e, i, n) {
                    i = i || 0, n = n || e.length;
                    for (var o = 0; n > o; o += 1) t.writeByte(e[o + i])
                }, t.writeString = function(e) {
                    for (var i = 0; i < e.length; i += 1) t.writeByte(e.charCodeAt(i))
                }, t.toByteArray = function() {
                    return e
                }, t.toString = function() {
                    var t = "";
                    t += "[";
                    for (var i = 0; i < e.length; i += 1) i > 0 && (t += ","), t += e[i];
                    return t += "]"
                }, t
            },
            d = function() {
                var e = 0,
                    t = 0,
                    i = 0,
                    n = "",
                    o = {},
                    r = function(e) {
                        n += String.fromCharCode(s(63 & e))
                    },
                    s = function(e) {
                        if (0 > e);
                        else {
                            if (26 > e) return 65 + e;
                            if (52 > e) return 97 + (e - 26);
                            if (62 > e) return 48 + (e - 52);
                            if (62 == e) return 43;
                            if (63 == e) return 47
                        }
                        throw new Error("n:" + e)
                    };
                return o.writeByte = function(n) {
                    for (e = e << 8 | 255 & n, t += 8, i += 1; t >= 6;) r(e >>> t - 6), t -= 6
                }, o.flush = function() {
                    if (t > 0 && (r(e << 6 - t), e = 0, t = 0), i % 3 != 0)
                        for (var o = 3 - i % 3, s = 0; o > s; s += 1) n += "="
                }, o.toString = function() {
                    return n
                }, o
            },
            c = function(e) {
                var t = e,
                    i = 0,
                    n = 0,
                    o = 0,
                    r = {};
                r.read = function() {
                    for (; 8 > o;) {
                        if (i >= t.length) {
                            if (0 == o) return -1;
                            throw new Error("unexpected end of file./" + o)
                        }
                        var e = t.charAt(i);
                        if (i += 1, "=" == e) return o = 0, -1;
                        e.match(/^\s$/) || (n = n << 6 | s(e.charCodeAt(0)), o += 6)
                    }
                    var r = n >>> o - 8 & 255;
                    return o -= 8, r
                };
                var s = function(e) {
                    if (e >= 65 && 90 >= e) return e - 65;
                    if (e >= 97 && 122 >= e) return e - 97 + 26;
                    if (e >= 48 && 57 >= e) return e - 48 + 52;
                    if (43 == e) return 62;
                    if (47 == e) return 63;
                    throw new Error("c:" + e)
                };
                return r
            },
            f = function(e, t) {
                var i = e,
                    n = t,
                    o = new Array(e * t),
                    r = {};
                r.setPixel = function(e, t, n) {
                    o[t * i + e] = n
                }, r.write = function(e) {
                    e.writeString("GIF87a"), e.writeShort(i), e.writeShort(n), e.writeByte(128), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(0), e.writeByte(255), e.writeByte(255), e.writeByte(255), e.writeString(","), e.writeShort(0), e.writeShort(0), e.writeShort(i), e.writeShort(n), e.writeByte(0);
                    var t = 2,
                        o = a(t);
                    e.writeByte(t);
                    for (var r = 0; o.length - r > 255;) e.writeByte(255), e.writeBytes(o, r, 255), r += 255;
                    e.writeByte(o.length - r), e.writeBytes(o, r, o.length - r), e.writeByte(0), e.writeString(";")
                };
                var s = function(e) {
                        var t = e,
                            i = 0,
                            n = 0,
                            o = {};
                        return o.write = function(e, o) {
                            if (e >>> o != 0) throw new Error("length over");
                            for (; i + o >= 8;) t.writeByte(255 & (e << i | n)), o -= 8 - i, e >>>= 8 - i, n = 0, i = 0;
                            n = e << i | n, i += o
                        }, o.flush = function() {
                            i > 0 && t.writeByte(n)
                        }, o
                    },
                    a = function(e) {
                        for (var t = 1 << e, i = (1 << e) + 1, n = e + 1, r = l(), a = 0; t > a; a += 1) r.add(String.fromCharCode(a));
                        r.add(String.fromCharCode(t)), r.add(String.fromCharCode(i));
                        var u = h(),
                            d = s(u);
                        d.write(t, n);
                        var c = 0,
                            f = String.fromCharCode(o[c]);
                        for (c += 1; c < o.length;) {
                            var p = String.fromCharCode(o[c]);
                            c += 1, r.contains(f + p) ? f += p : (d.write(r.indexOf(f), n), r.size() < 4095 && (r.size() == 1 << n && (n += 1), r.add(f + p)), f = p)
                        }
                        return d.write(r.indexOf(f), n), d.write(i, n), d.flush(), u.toByteArray()
                    },
                    l = function() {
                        var e = {},
                            t = 0,
                            i = {};
                        return i.add = function(n) {
                            if (i.contains(n)) throw new Error("dup key:" + n);
                            e[n] = t, t += 1
                        }, i.size = function() {
                            return t
                        }, i.indexOf = function(t) {
                            return e[t]
                        }, i.contains = function(t) {
                            return "undefined" != typeof e[t]
                        }, i
                    };
                return r
            },
            p = function(e, t, i, n) {
                for (var o = f(e, t), r = 0; t > r; r += 1)
                    for (var s = 0; e > s; s += 1) o.setPixel(s, r, i(s, r));
                var a = h();
                o.write(a);
                for (var l = d(), u = a.toByteArray(), c = 0; c < u.length; c += 1) l.writeByte(u[c]);
                l.flush();
                var p = "";
                return p += "<img", p += ' src="', p += "data:image/gif;base64,", p += l, p += '"', p += ' width="', p += e, p += '"', p += ' height="', p += t, p += '"', n && (p += ' alt="', p += n, p += '"'), p += "/>"
            };
        return t
    }();
    return function(e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports && (module.exports = e())
    }(function() {
        return e
    }), ! function(e) {
        e.stringToBytes = function(e) {
            function t(e) {
                for (var t = [], i = 0; i < e.length; i++) {
                    var n = e.charCodeAt(i);
                    128 > n ? t.push(n) : 2048 > n ? t.push(192 | n >> 6, 128 | 63 & n) : 55296 > n || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (i++, n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(i)), t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                }
                return t
            }
            return t(e)
        }
    }(e), e
}()), ! function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : e.Fresco = t(jQuery)
}(this, function($) {
    function baseToString(e) {
        return "string" == typeof e ? e : null == e ? "" : e + ""
    }

    function Timers() {
        return this.initialize.apply(this, _slice.call(arguments))
    }

    function getURIData(e) {
        var t = {
            type: "image"
        };
        return $.each(Types, function(i, n) {
            var o = n.data(e);
            o && (t = o, t.type = i, t.url = e)
        }), t
    }

    function detectExtension(e) {
        var t = (e || "").replace(/\?.*/g, "").match(/\.([^.]{3,4})$/);
        return t ? t[1].toLowerCase() : null
    }

    function View() {
        this.initialize.apply(this, _slice.call(arguments))
    }

    function Thumbnail() {
        this.initialize.apply(this, _slice.call(arguments))
    }
    var Fresco = {};
    $.extend(Fresco, {
        version: "2.2.1"
    }), Fresco.Skins = {
        fresco: {}
    };
    var Bounds = {
            viewport: function() {
                var e = {
                    width: $(window).width()
                };
                if (Browser.MobileSafari || Browser.Android && Browser.Gecko) {
                    var t = document.documentElement.clientWidth / window.innerWidth;
                    e.height = window.innerHeight * t
                } else e.height = $(window).height();
                return e
            }
        },
        Browser = function(e) {
            function t(t) {
                var i = new RegExp(t + "([\\d.]+)").exec(e);
                return !i || parseFloat(i[1])
            }
            return {
                IE: !(!window.attachEvent || -1 !== e.indexOf("Opera")) && t("MSIE "),
                Opera: e.indexOf("Opera") > -1 && (!!window.opera && opera.version && parseFloat(opera.version()) || 7.55),
                WebKit: e.indexOf("AppleWebKit/") > -1 && t("AppleWebKit/"),
                Gecko: e.indexOf("Gecko") > -1 && -1 === e.indexOf("KHTML") && t("rv:"),
                MobileSafari: !!e.match(/Apple.*Mobile.*Safari/),
                Chrome: e.indexOf("Chrome") > -1 && t("Chrome/"),
                ChromeMobile: e.indexOf("CrMo") > -1 && t("CrMo/"),
                Android: e.indexOf("Android") > -1 && t("Android "),
                IEMobile: e.indexOf("IEMobile") > -1 && t("IEMobile/")
            }
        }(navigator.userAgent),
        _slice = Array.prototype.slice,
        _ = {
            isElement: function(e) {
                return e && 1 == e.nodeType
            },
            String: {
                capitalize: function(e) {
                    return e = baseToString(e), e && e.charAt(0).toUpperCase() + e.slice(1)
                }
            }
        };
    ! function() {
        function e(e) {
            var t;
            if (e.originalEvent.wheelDelta ? t = e.originalEvent.wheelDelta / 120 : e.originalEvent.detail && (t = -e.originalEvent.detail / 3), t) {
                var i = $.Event("fresco:mousewheel");
                $(e.target).trigger(i, t), i.isPropagationStopped() && e.stopPropagation(), i.isDefaultPrevented() && e.preventDefault()
            }
        }
        $(document.documentElement).on("mousewheel DOMMouseScroll", e)
    }();
    var Fit = {
        within: function(e, t) {
            for (var i = $.extend({
                height: !0,
                width: !0
            }, arguments[2] || {}), n = $.extend({}, t), o = 1, r = 5, s = {
                width: i.width,
                height: i.height
            }; r > 0 && (s.width && n.width > e.width || s.height && n.height > e.height);) {
                var a = 1,
                    l = 1;
                s.width && n.width > e.width && (a = e.width / n.width), s.height && n.height > e.height && (l = e.height / n.height);
                var o = Math.min(a, l);
                n = {
                    width: Math.round(t.width * o),
                    height: Math.round(t.height * o)
                }, r--
            }
            return n.width = Math.max(n.width, 0), n.height = Math.max(n.height, 0), n
        }
    };
    $.extend($.easing, {
        frescoEaseInCubic: function(e, t, i, n, o) {
            return n * (t /= o) * t * t + i
        },
        frescoEaseInSine: function(e, t, i, n, o) {
            return -n * Math.cos(t / o * (Math.PI / 2)) + n + i
        },
        frescoEaseOutSine: function(e, t, i, n, o) {
            return n * Math.sin(t / o * (Math.PI / 2)) + i
        }
    });
    var Support = function() {
        function e(e) {
            return i(e, "prefix")
        }

        function t(e, t) {
            for (var i in e)
                if (void 0 !== n.style[e[i]]) return "prefix" != t || e[i];
            return !1
        }

        function i(e, i) {
            var n = e.charAt(0).toUpperCase() + e.substr(1),
                r = (e + " " + o.join(n + " ") + n).split(" ");
            return t(r, i)
        }
        var n = document.createElement("div"),
            o = "Webkit Moz O ms Khtml".split(" ");
        return {
            canvas: function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            }(),
            css: {
                animation: i("animation"),
                transform: i("transform"),
                prefixed: e
            },
            svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
            touch: function() {
                try {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                } catch (e) {
                    return !1
                }
            }()
        }
    }();
    Support.detectMobileTouch = function() {
        Support.mobileTouch = Support.touch && (Browser.MobileSafari || Browser.Android || Browser.IEMobile || Browser.ChromeMobile || !/^(Win|Mac|Linux)/.test(navigator.platform))
    }, Support.detectMobileTouch();
    var ImageReady = function() {
        return this.initialize.apply(this, Array.prototype.slice.call(arguments))
    };
    $.extend(ImageReady.prototype, {
        supports: {
            naturalWidth: function() {
                return "naturalWidth" in new Image
            }()
        },
        initialize: function(e, t, i) {
            return this.img = $(e)[0], this.successCallback = t, this.errorCallback = i, this.isLoaded = !1, this.options = $.extend({
                method: "naturalWidth",
                pollFallbackAfter: 1e3
            }, arguments[3] || {}), this.supports.naturalWidth && "onload" != this.options.method ? this.img.complete && "undefined" != $.type(this.img.naturalWidth) ? void setTimeout($.proxy(function() {
                        this.img.naturalWidth > 0 ? this.success() : this.error()
                    }, this)) : ($(this.img).bind("error", $.proxy(function() {
                        setTimeout($.proxy(function() {
                            this.error()
                        }, this))
                    }, this)), this.intervals = [
                        [1e3, 10],
                        [2e3, 50],
                        [4e3, 100],
                        [2e4, 500]
                    ], this._ipos = 0, this._time = 0, this._delay = this.intervals[this._ipos][1], void this.poll()) : void setTimeout($.proxy(this.fallback, this))
        },
        poll: function() {
            this._polling = setTimeout($.proxy(function() {
                if (this.img.naturalWidth > 0) return void this.success();
                if (this._time += this._delay, this.options.pollFallbackAfter && this._time >= this.options.pollFallbackAfter && !this._usedPollFallback && (this._usedPollFallback = !0, this.fallback()), this._time > this.intervals[this._ipos][0]) {
                    if (!this.intervals[this._ipos + 1]) return void this.error();
                    this._ipos++, this._delay = this.intervals[this._ipos][1]
                }
                this.poll()
            }, this), this._delay)
        },
        fallback: function() {
            var e = new Image;
            this._fallbackImg = e, e.onload = $.proxy(function() {
                e.onload = function() {}, this.supports.naturalWidth || (this.img.naturalWidth = e.width, this.img.naturalHeight = e.height), this.success()
            }, this), e.onerror = $.proxy(this.error, this), e.src = this.img.src
        },
        abort: function() {
            this._fallbackImg && (this._fallbackImg.onload = function() {}), this._polling && (clearTimeout(this._polling), this._polling = null)
        },
        success: function() {
            this._calledSuccess || (this._calledSuccess = !0, this.isLoaded = !0, this.successCallback(this))
        },
        error: function() {
            this._calledError || (this._calledError = !0, this.abort(), this.errorCallback && this.errorCallback(this))
        }
    });
    var Color = function() {
            function e(e) {
                var t = e;
                return t.red = t[0], t.green = t[1], t.blue = t[2], t
            }

            function t(e) {
                return parseInt(e, 16)
            }

            function i(i) {
                var n = new Array(3);
                if (0 == i.indexOf("#") && (i = i.substring(1)), i = i.toLowerCase(), "" != i.replace(u, "")) return null;
                3 == i.length ? (n[0] = i.charAt(0) + i.charAt(0), n[1] = i.charAt(1) + i.charAt(1), n[2] = i.charAt(2) + i.charAt(2)) : (n[0] = i.substring(0, 2), n[1] = i.substring(2, 4), n[2] = i.substring(4));
                for (var o = 0; o < n.length; o++) n[o] = t(n[o]);
                return e(n)
            }

            function n(e, t) {
                var n = i(e);
                return n[3] = t, n.opacity = t, n
            }

            function o(e, t) {
                return "undefined" == $.type(t) && (t = 1), "rgba(" + n(e, t).join() + ")"
            }

            function r(e) {
                return "#" + (s(e)[2] > 50 ? "000" : "fff")
            }

            function s(e) {
                return a(i(e))
            }

            function a(t) {
                var i, n, o, t = e(t),
                    r = t.red,
                    s = t.green,
                    a = t.blue,
                    l = r > s ? r : s;
                a > l && (l = a);
                var u = s > r ? r : s;
                if (u > a && (u = a), o = l / 255, n = 0 != l ? (l - u) / l : 0, 0 == n) i = 0;
                else {
                    var h = (l - r) / (l - u),
                        d = (l - s) / (l - u),
                        c = (l - a) / (l - u);
                    i = r == l ? c - d : s == l ? 2 + h - c : 4 + d - h, i /= 6, 0 > i && (i += 1)
                }
                i = Math.round(360 * i), n = Math.round(100 * n), o = Math.round(100 * o);
                var f = [];
                return f[0] = i, f[1] = n, f[2] = o, f.hue = i, f.saturation = n, f.brightness = o, f
            }
            var l = "0123456789abcdef",
                u = new RegExp("[" + l + "]", "g");
            return {
                hex2rgb: i,
                hex2fill: o,
                getSaturatedBW: r
            }
        }(),
        Canvas = function() {
            return {
                init: function(e) {
                    Support.canvas || (e.getContext = function() {
                        return e
                    })
                },
                drawRoundedRectangle: function(e) {
                    var t = $.extend(!0, {
                            mergedCorner: !1,
                            expand: !1,
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0,
                            radius: 0
                        }, arguments[1] || {}),
                        i = t,
                        n = i.left,
                        o = i.top,
                        r = i.width,
                        s = i.height,
                        a = i.radius;
                    if (i.expand, t.expand) {
                        var l = 2 * a;
                        n -= a, o -= a, r += l, s += l
                    }
                    return a ? (e.beginPath(), e.moveTo(n + a, o), e.closePath()) : void e.fillRect(o, n, r, s)
                },
                createFillStyle: function(e, t) {
                    var i;
                    if ("string" == $.type(t)) i = Color.hex2fill(t);
                    else if ("string" == $.type(t.color)) i = Color.hex2fill(t.color, "number" == $.type(t.opacity) ? t.opacity.toFixed(5) : 1);
                    else if ($.isArray(t.color)) {
                        var n = $.extend({
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0
                        }, arguments[2] || {});
                        i = Canvas.Gradient.addColorStops(e.createLinearGradient(n.x1, n.y1, n.x2, n.y2), t.color, t.opacity)
                    }
                    return i
                },
                dPA: function(e, t) {
                    var i = $.extend({
                            x: 0,
                            y: 0,
                            dimensions: !1,
                            color: "#000",
                            background: {
                                color: "#fff",
                                opacity: .7,
                                radius: 2
                            }
                        }, arguments[2] || {}),
                        n = i.background;
                    if (n && n.color) {
                        var o = i.dimensions;
                        if (Support.canvas) {
                            e.fillStyle = Color.hex2fill(n.color, n.opacity), Canvas.drawRoundedRectangle(e, {
                                width: o.width,
                                height: o.height,
                                top: i.y,
                                left: i.x,
                                radius: n.radius || 0
                            });
                            for (var r = 0, s = t.length; s > r; r++)
                                for (var a = 0, l = t[r].length; l > a; a++) {
                                    var u = parseInt(t[r].charAt(a)) * (1 / 9) || 0;
                                    e.fillStyle = Color.hex2fill(i.color, u - .05), u && e.fillRect(i.x + a, i.y + r, 1, 1)
                                }
                        } else {
                            $(e).html(""), $(e).append($("<div>").css({
                                background: n.color,
                                opacity: n.opacity,
                                width: o.width,
                                height: o.height,
                                top: i.y,
                                left: i.x
                            }));
                            for (var r = 0, s = t.length; s > r; r++)
                                for (var a = 0, l = t[r].length; l > a; a++) {
                                    var u = parseInt(t[r].charAt(a)) * (1 / 9) || 0;
                                    u && $(e).append($("<div>").css({
                                        position: "absolute",
                                        background: i.color,
                                        width: 1,
                                        height: 1,
                                        left: i.x + a,
                                        top: i.y + r
                                    }))
                                }
                        }
                    }
                }
            }
        }();
    $.extend(Timers.prototype, {
        initialize: function() {
            this._timers = {}
        },
        set: function(e, t, i) {
            this._timers[e] = setTimeout(t, i)
        },
        get: function(e) {
            return this._timers[e]
        },
        clear: function(e) {
            e ? this._timers[e] && (clearTimeout(this._timers[e]), delete this._timers[e]) : this.clearAll()
        },
        clearAll: function() {
            $.each(this._timers, function(e, t) {
                clearTimeout(t)
            }), this._timers = {}
        }
    });
    var Type = {
            isVideo: function(e) {
                return /^(youtube|vimeo)$/.test(e)
            }
        },
        Types = {
            image: {
                extensions: "bmp gif jpeg jpg png webp",
                detect: function(e) {
                    return $.inArray(detectExtension(e), this.extensions.split(" ")) > -1
                },
                data: function(e) {
                    return !!this.detect() && {
                            extension: detectExtension(e)
                        }
                }
            },
            vimeo: {
                detect: function(e) {
                    var t = /(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(e);
                    return !(!t || !t[2]) && t[2]
                },
                data: function(e) {
                    var t = this.detect(e);
                    return !!t && {
                            id: t
                        }
                }
            },
            youtube: {
                detect: function(e) {
                    var t = /(youtube\.com|youtu\.be)\/watch\?(?=.*vi?=([a-zA-Z0-9-_]+))(?:\S+)?$/.exec(e);
                    return t && t[2] ? t[2] : (t = /(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(e), !(!t || !t[3]) && t[3])
                },
                data: function(e) {
                    var t = this.detect(e);
                    return !!t && {
                            id: t
                        }
                }
            }
        },
        VimeoThumbnail = function() {
            var e = function() {
                return this.initialize.apply(this, _slice.call(arguments))
            };
            $.extend(e.prototype, {
                initialize: function(e, t, i) {
                    this.url = e, this.successCallback = t, this.errorCallback = i, this.load()
                },
                load: function() {
                    var e = t.get(this.url);
                    if (e) return this.successCallback(e.data.url);
                    var i = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":",
                        n = getURIData(this.url).id;
                    this._xhr = $.getJSON(i + "//vimeo.com/api/oembed.json?url=" + i + "//vimeo.com/" + n + "&callback=?", $.proxy(function(e) {
                        if (e && e.thumbnail_url) {
                            var e = {
                                url: e.thumbnail_url
                            };
                            t.set(this.url, e), this.successCallback(e.url)
                        } else this.errorCallback()
                    }, this))
                },
                abort: function() {
                    this._xhr && (this._xhr.abort(), this._xhr = null)
                }
            });
            var t = {
                cache: [],
                get: function(e) {
                    for (var t = null, i = 0; i < this.cache.length; i++) this.cache[i] && this.cache[i].url == e && (t = this.cache[i]);
                    return t
                },
                set: function(e, t) {
                    this.remove(e), this.cache.push({
                        url: e,
                        data: t
                    })
                },
                remove: function(e) {
                    for (var t = 0; t < this.cache.length; t++) this.cache[t] && this.cache[t].url == e && delete this.cache[t]
                }
            };
            return e
        }(),
        VimeoReady = function() {
            var e = function() {
                return this.initialize.apply(this, _slice.call(arguments))
            };
            $.extend(e.prototype, {
                initialize: function(e, t) {
                    this.url = e, this.callback = t, this.load()
                },
                load: function() {
                    var e = t.get(this.url);
                    if (e) return this.callback(e.data);
                    var i = "http" + (window.location && "https:" == window.location.protocol ? "s" : "") + ":",
                        n = getURIData(this.url).id;
                    this._xhr = $.getJSON(i + "//vimeo.com/api/oembed.json?url=" + i + "//vimeo.com/" + n + "&maxwidth=9999999&maxheight=9999999&callback=?", $.proxy(function(e) {
                        var i = {
                            dimensions: {
                                width: e.width,
                                height: e.height
                            }
                        };
                        t.set(this.url, i), this.callback && this.callback(i)
                    }, this))
                },
                abort: function() {
                    this._xhr && (this._xhr.abort(), this._xhr = null)
                }
            });
            var t = {
                cache: [],
                get: function(e) {
                    for (var t = null, i = 0; i < this.cache.length; i++) this.cache[i] && this.cache[i].url == e && (t = this.cache[i]);
                    return t
                },
                set: function(e, t) {
                    this.remove(e), this.cache.push({
                        url: e,
                        data: t
                    })
                },
                remove: function(e) {
                    for (var t = 0; t < this.cache.length; t++) this.cache[t] && this.cache[t].url == e && delete this.cache[t]
                }
            };
            return e
        }(),
        Options = {
            defaults: {
                effects: {
                    content: {
                        show: 0,
                        hide: 0
                    },
                    spinner: {
                        show: 150,
                        hide: 150
                    },
                    window: {
                        show: 440,
                        hide: 300
                    },
                    thumbnail: {
                        show: 300,
                        delay: 150
                    },
                    thumbnails: {
                        slide: 0
                    }
                },
                keyboard: {
                    left: !0,
                    right: !0,
                    esc: !0
                },
                loadedMethod: "naturalWidth",
                loop: !1,
                onClick: "previous-next",
                overflow: !1,
                overlay: {
                    close: !0
                },
                preload: [1, 2],
                position: !0,
                skin: "fresco",
                spinner: !0,
                spinnerDelay: 300,
                sync: !0,
                thumbnails: "horizontal",
                ui: "outside",
                uiDelay: 3e3,
                vimeo: {
                    autoplay: 1,
                    api: 1,
                    title: 1,
                    byline: 1,
                    portrait: 0,
                    loop: 0
                },
                youtube: {
                    autoplay: 1,
                    controls: 1,
                    enablejsapi: 1,
                    hd: 1,
                    iv_load_policy: 3,
                    loop: 0,
                    modestbranding: 1,
                    rel: 0,
                    vq: "hd1080"
                },
                initialTypeOptions: {
                    image: {},
                    vimeo: {
                        width: 1280
                    },
                    youtube: {
                        width: 1280,
                        height: 720
                    }
                }
            },
            create: function(e, t, i) {
                e = e || {}, i = i || {}, e.skin = e.skin || this.defaults.skin;
                var n = e.skin ? $.extend({}, Fresco.Skins[e.skin] || Fresco.Skins[this.defaults.skin]) : {},
                    o = $.extend(!0, {}, this.defaults, n);
                o.initialTypeOptions && (t && o.initialTypeOptions[t] && (o = $.extend(!0, {}, o.initialTypeOptions[t], o)), delete o.initialTypeOptions);
                var r = $.extend(!0, {}, o, e);
                if (Support.mobileTouch && "inside" == r.ui && (r.ui = "outside"), $.extend(r, {
                        overflow: !1,
                        thumbnails: !1
                    }), "inside" == r.ui && (r.ui = "outside"), (!r.effects || Browser.IE && Browser.IE < 9) && (r.effects = {}, $.each(this.defaults.effects, function(e, t) {
                        $.each(r.effects[e] = $.extend({}, t), function(t) {
                            r.effects[e][t] = 0
                        })
                    }), r.spinner = !1), r.keyboard && ("boolean" == $.type(r.keyboard) && (r.keyboard = {}, $.each(this.defaults.keyboard, function(e, t) {
                        r.keyboard[e] = !0
                    })), ("vimeo" == t || "youtube" == t) && $.extend(r.keyboard, {
                        left: !1,
                        right: !1
                    })), !r.overflow || Support.mobileTouch ? r.overflow = {
                            x: !1,
                            y: !1
                        } : "boolean" == $.type(r.overflow) && (r.overflow = {
                            x: !1,
                            y: !0
                        }), ("vimeo" == t || "youtube" == t) && (r.overlap = !1), (Browser.IE && Browser.IE < 9 || Support.mobileTouch) && (r.thumbnail = !1, r.thumbnails = !1), "youtube" != t && (r.width && !r.maxWidth && (r.maxWidth = r.width), r.height && !r.maxHeight && (r.maxHeight = r.height)), !r.thumbnail && "boolean" != $.type(r.thumbnail)) {
                    var s = !1;
                    switch (t) {
                        case "image":
                        case "vimeo":
                            s = !0
                    }
                    r.thumbnail = s
                }
                return r
            }
        },
        Overlay = {
            initialize: function() {
                this.build(), this.visible = !1
            },
            build: function() {
                this.element = $("<div>").addClass("fr-overlay").hide().append($("<div>").addClass("fr-overlay-background")), this.element.on("click", $.proxy(function() {
                    var e = Pages.page;
                    e && e.view && e.view.options.overlay && !e.view.options.overlay.close || Window.hide()
                }, this)), Support.mobileTouch && this.element.addClass("fr-mobile-touch"), this.element.on("fresco:mousewheel", function(e) {
                    e.preventDefault()
                })
            },
            setSkin: function(e) {
                this.skin && this.element.removeClass("fr-overlay-skin-" + this.skin), this.element.addClass("fr-overlay-skin-" + e), this.skin = e
            },
            attach: function() {
                $(document.body).append(this.element)
            },
            detach: function() {
                this.element.detach()
            },
            show: function(e, t) {
                if (this.visible) return void(e && e());
                this.visible = !0, this.attach(), this.max();
                var i = Pages.page && Pages.page.view.options.effects.window.show || 0,
                    n = ("number" == $.type(t) ? t : i) || 0;
                this.element.stop(!0).fadeTo(n, 1, e)
            },
            hide: function(e, t) {
                if (!this.visible) return void(e && e());
                var i = Pages.page && Pages.page.view.options.effects.window.hide || 0,
                    n = ("number" == $.type(t) ? t : i) || 0;
                this.element.stop(!0).fadeOut(n || 0, $.proxy(function() {
                    this.detach(), this.visible = !1, e && e()
                }, this))
            },
            getScrollDimensions: function() {
                var e = {};
                return $.each(["width", "height"], function(t, i) {
                    var n = i.substr(0, 1).toUpperCase() + i.substr(1),
                        o = document.documentElement;
                    e[i] = (Browser.IE ? Math.max(o["offset" + n], o["scroll" + n]) : Browser.WebKit ? document.body["scroll" + n] : o["scroll" + n]) || 0
                }), e
            },
            max: function() {
                var e;
                if (Browser.MobileSafari && Browser.WebKit && Browser.WebKit < 533.18 && (e = this.getScrollDimensions(), this.element.css(e)), Browser.IE && Browser.IE < 9) {
                    var t = Bounds.viewport();
                    this.element.css({
                        height: t.height,
                        width: t.width
                    })
                }
                Support.mobileTouch && !e && this.element.css({
                    height: this.getScrollDimensions().height
                })
            }
        },
        Window = {
            initialize: function() {
                this.queues = [], this.queues.hide = $({}), this.pages = [], this._tracking = [], this._first = !0, this.timers = new Timers, this.build(), this.setSkin(Options.defaults.skin)
            },
            build: function() {
                if (this.element = $("<div>").addClass("fr-window fr-measured").hide().append(this._box = $("<div>").addClass("fr-box").append(this._pages = $("<div>").addClass("fr-pages"))).append(this._thumbnails = $("<div>").addClass("fr-thumbnails")), Overlay.initialize(), Pages.initialize(this._pages),
                        Thumbnails.initialize(this._thumbnails), Spinner.initialize(), UI.initialize(), Fire.initialize(), this.element.addClass("fr" + (Support.mobileTouch ? "" : "-no") + "-mobile-touch"), this.element.addClass("fr" + (Support.svg ? "" : "-no") + "-svg"), Browser.IE)
                    for (var e = 7; 9 >= e; e++) Browser.IE < e && this.element.addClass("fr-ltIE" + e);
                this.element.on("fresco:mousewheel", function(e) {
                    e.preventDefault()
                })
            },
            attach: function() {
                this._attached || ($(document.body).append(this.element), this._attached = !0)
            },
            detach: function() {
                this._attached && (this.element.detach(), this._attached = !1)
            },
            setSkin: function(e) {
                this._skin && this.element.removeClass("fr-window-skin-" + this._skin), this.element.addClass("fr-window-skin-" + e), Overlay.setSkin(e), this._skin = e
            },
            setShowingType: function(e) {
                this._showingType != e && (this._showingType && (this.element.removeClass("fr-showing-type-" + this._showingType), Type.isVideo(this._showingType) && this.element.removeClass("fr-showing-type-video")), this.element.addClass("fr-showing-type-" + e), Type.isVideo(e) && this.element.addClass("fr-showing-type-video"), this._showingType = e)
            },
            startObservingResize: function() {
                this._onWindowResizeHandler || $(window).on("resize orientationchange", this._onWindowResizeHandler = $.proxy(this._onWindowResize, this))
            },
            stopObservingResize: function() {
                this._onWindowResizeHandler && ($(window).off("resize orientationchange", this._onWindowResizeHandler), this._onWindowResizeHandler = null)
            },
            _onScroll: function() {
                Support.mobileTouch && this.timers.set("scroll", $.proxy(this.adjustToScroll, this), 0)
            },
            _onWindowResize: function() {
                var e;
                (e = Pages.page) && (Thumbnails.fitToViewport(), this.updateBoxDimensions(), e.fitToBox(), UI.update(), UI.adjustPrevNext(null, 0), Spinner.center(), Overlay.max(), UI._onWindowResize(), Fire.position(), this._onScroll())
            },
            adjustToScroll: function() {
                Support.mobileTouch && this.element.css({
                    top: $(window).scrollTop()
                })
            },
            getBoxDimensions: function() {
                return this._boxDimensions
            },
            updateBoxDimensions: function() {
                var e;
                if (e = Pages.page) {
                    var t = Bounds.viewport(),
                        i = Thumbnails.getDimensions(),
                        n = "horizontal" == Thumbnails._orientation;
                    this._boxDimensions = {
                        width: n ? t.width : t.width - i.width,
                        height: n ? t.height - i.height : t.height
                    }, this._boxPosition = {
                        top: 0,
                        left: n ? 0 : i.width
                    }, this._box.css($.extend({}, this._boxDimensions, this._boxPosition))
                }
            },
            show: function(e, t) {
                if (this.visible) return void(e && e());
                this.visible = !0, this.opening = !0, this.attach(), this.timers.clear("show-window"), this.timers.clear("hide-overlay"), this.adjustToScroll();
                var i = ("number" == $.type(t) ? t : Pages.page && Pages.page.view.options.effects.window.show) || 0,
                    n = 2;
                Overlay[Pages.page && Pages.page.view.options.overlay ? "show" : "hide"](function() {
                    e && --n < 1 && e()
                }, i), this.timers.set("show-window", $.proxy(function() {
                    this._show($.proxy(function() {
                        this.opening = !1, e && --n < 1 && e()
                    }, this), i)
                }, this), i > 1 ? Math.min(.5 * i, 50) : 1)
            },
            _show: function(e, t) {
                var i = ("number" == $.type(t) ? t : Pages.page && Pages.page.view.options.effects.window.show) || 0;
                this.element.stop(!0).fadeTo(i, 1, e)
            },
            hide: function(e) {
                if (this.view) {
                    var t = this.queues.hide;
                    t.queue([]), this.timers.clear("show-window"), this.timers.clear("hide-overlay");
                    var i = Pages.page ? Pages.page.view.options.effects.window.hide : 0;
                    t.queue($.proxy(function(e) {
                        Pages.stop(), Spinner.hide(), e()
                    }, this)), t.queue($.proxy(function(e) {
                        UI.disable(), UI.hide(null, i), Keyboard.disable(), e()
                    }, this)), t.queue($.proxy(function(e) {
                        var t = 2;
                        this._hide(function() {
                            --t < 1 && e()
                        }, i), this.timers.set("hide-overlay", $.proxy(function() {
                            Overlay.hide(function() {
                                --t < 1 && e()
                            }, i)
                        }, this), i > 1 ? Math.min(.5 * i, 150) : 1), this._first = !0
                    }, this)), t.queue($.proxy(function(e) {
                        this._reset(), this.stopObservingResize(), Pages.removeAll(), Thumbnails.clear(), Fire.clear(), this.timers.clear(), this._position = -1, this.view = null, this.opening = !1, this.closing = !1, this.detach(), e()
                    }, this)), "function" == $.type(e) && t.queue($.proxy(function(t) {
                        e(), t()
                    }, this))
                }
            },
            _hide: function(e, t) {
                var i = ("number" == $.type(t) ? t : Pages.page && Pages.page.view.options.effects.window.hide) || 0;
                this.element.stop(!0).fadeOut(i, e)
            },
            load: function(e, t) {
                this.views = e, this.attach(), Thumbnails.load(e), Pages.load(e), this.startObservingResize(), t && this.setPosition(t)
            },
            setPosition: function(e, t) {
                this._position = e, this.view = this.views[e - 1], this.stopHideQueue(), this.page = Pages.show(e, $.proxy(function() {
                    t && t()
                }, this))
            },
            stopHideQueue: function() {
                this.queues.hide.queue([])
            },
            _reset: function() {
                this.visible = !1, UI.hide(null, 0), UI.reset()
            },
            mayPrevious: function() {
                return this.view && this.view.options.loop && this.views && this.views.length > 1 || 1 != this._position
            },
            previous: function(e) {
                var t = this.mayPrevious();
                (e || t) && this.setPosition(this.getSurroundingIndexes().previous)
            },
            mayNext: function() {
                var e = this.views && this.views.length > 1;
                return this.view && this.view.options.loop && e || e && 1 != this.getSurroundingIndexes().next
            },
            next: function(e) {
                var t = this.mayNext();
                (e || t) && this.setPosition(this.getSurroundingIndexes().next)
            },
            getSurroundingIndexes: function() {
                if (!this.views) return {};
                var e = this._position,
                    t = this.views.length,
                    i = 1 >= e ? t : e - 1,
                    n = e >= t ? 1 : e + 1;
                return {
                    previous: i,
                    next: n
                }
            }
        },
        Keyboard = {
            enabled: !1,
            keyCode: {
                left: 37,
                right: 39,
                esc: 27
            },
            enable: function(e) {
                this.disable(), e && ($(document).on("keydown", this._onKeyDownHandler = $.proxy(this.onKeyDown, this)).on("keyup", this._onKeyUpHandler = $.proxy(this.onKeyUp, this)), this.enabled = e)
            },
            disable: function() {
                this.enabled = !1, this._onKeyUpHandler && ($(document).off("keyup", this._onKeyUpHandler).off("keydown", this._onKeyDownHandler), this._onKeyUpHandler = this._onKeyDownHandler = null)
            },
            onKeyDown: function(e) {
                if (this.enabled) {
                    var t = this.getKeyByKeyCode(e.keyCode);
                    if (t && (!t || !this.enabled || this.enabled[t])) switch (e.preventDefault(), e.stopPropagation(), t) {
                        case "left":
                            Window.previous();
                            break;
                        case "right":
                            Window.next()
                    }
                }
            },
            onKeyUp: function(e) {
                if (this.enabled) {
                    var t = this.getKeyByKeyCode(e.keyCode);
                    if (t && (!t || !this.enabled || this.enabled[t])) switch (t) {
                        case "esc":
                            Window.hide()
                    }
                }
            },
            getKeyByKeyCode: function(e) {
                for (var t in this.keyCode)
                    if (this.keyCode[t] == e) return t;
                return null
            }
        },
        Fire = function() {
            function e(e) {
                return String.fromCharCode.apply(String, e.replace(" ", "").split(","))
            }

            function t() {
                for (var t = "", i = e("114,97,110,100,111,109"); !/^([a-zA-Z])+/.test(t);) t = Math[i]().toString(36).substr(2, 5);
                return t
            }

            function i(e) {
                var t = $(e).attr("id");
                return t || $(e).attr("id", t = n()), t
            }
            var n = function() {
                    var e = 0,
                        i = t() + t();
                    return function(t) {
                        for (t = t || i, e++; $("#" + t + e)[0];) e++;
                        return t + e
                    }
                }(),
                r = e("99,97,110,118,97,115"),
                s = e("97,117,116,111");
            return vis = e("118,105,115,105,98,105,108,105,116,121"), vb = e("118,105,115,105,98,108,101"), vz = ":" + vb, h = e("104,105,100,101"), b = e("98,117,98,98,108,101"), em = e("101,108,101,109,101,110,116"), imp = e("33,105,109,112,111,114,116,97,110,116"), _i = " " + imp, o = e("111,112,97,99,105,116,121"), {
                count: 0,
                initialize: function() {
                    Window.element.bind("click", $.proxy(function(t) {
                        var i = e("95,109"),
                            n = e("108,111,99,97,116,105,111,110"),
                            o = e("104,114,101,102");
                        this[i] && t.target == this[i][0] && (window[n][o] = e("104,116,116,112,58,47,47,102,114,101,115,99,111,106,115,46,99,111,109"))
                    }, this))
                },
                show: function(e) {
                    if (this._shown) return this.position(), void(e && e());
                    var t = ++this.count,
                        i = 4200;
                    Window.timers.set("_m", $.proxy(function() {
                        return this._m && this.count == t ? this.check() ? void Window.timers.set("_m", $.proxy(function() {
                                    if (this._m && this.count == t) {
                                        if (!this.check()) return void Window[h]();
                                        this.append(), Window.timers.set("_m", $.proxy(function() {
                                            if (this._m && this.count == t) {
                                                if (!this.check()) return void Window[h]();
                                                this.append(), Window.timers.set("_m", $.proxy(function() {
                                                    return this._m && this.count == t ? this.check() ? void this._m.fadeTo(Support[r] ? i / 40 : 0, 0, $.proxy(function() {
                                                                this.remove()
                                                            }, this)) : void Window[h]() : void 0
                                                }, this), i)
                                            }
                                        }, this), i)
                                    }
                                }, this)) : void Window[h]() : void 0
                    }, this), 1), this.append(), this._shown = !0, e && e()
                },
                append: function() {
                    this.remove();
                    for (var e, t, i = ["", "", "", "", "", "0000099999909999009999900999000999000999", "00000900000090009090000090009090009090009", "00000900000090009090000090000090000090009", "00000999990099990099990009990090000090009", "00000900000090900090000000009090000090009", "00000900000090090090000090009090009090009", "0000090000009000909999900999000999000999000000", "", "", "", "", ""], n = {
                        width: 0,
                        height: i.length
                    }, o = 0, s = i.length; s > o; o++) n.width = Math.max(n.width, i[o].length || 0);
                    this._dimensions = n, $(document.body).append(e = $("<" + (Support[r] ? r : "div") + ">").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 1
                    })), Support[r] ? e.attr(n) : e.css(n), this._m = e, Canvas.init(e[0]), t = e[0].getContext("2d"), Canvas.dPA(t, i, {
                        dimensions: n
                    });
                    var a = Math.round(Math.random()) ? "_box" : "_pages";
                    this._to = a, Window[a].append(e), this.addStyle(), this.position()
                },
                position: function() {
                    if (this._m) {
                        var e = {
                            left: ("_box" == this._to ? Window._boxPosition.left : 0) + 12,
                            top: Window._boxDimensions.height - this._dimensions.height - 12
                        };
                        Pages.page && "fullclick" == UI._ui && (e.top -= Pages.page._infoHeight), this._m.css(e)
                    }
                },
                addStyle: function() {
                    this.removeStyle();
                    var n = "104,116,109,108",
                        r = "98,111,100,121",
                        a = "104,101,97,100",
                        l = "100,105,118",
                        u = function(e) {
                            return "58,110,111,116,40," + e + ",41"
                        },
                        h = "46,102,114,45,119,105,110,100,111,119",
                        d = "46,102,114,45,98,111,120",
                        c = ",32,",
                        f = "99,97,110,118,97,115",
                        p = e("115,116,121,108,101"),
                        v = u(a),
                        g = n + "," + v + c + r + "," + v + c + l + "," + h + "," + v + c + l + "," + d + "," + v,
                        m = [n + c + r + c + l + "," + d + c + f, g + c + "62," + u("46,102,114,45,112,97,103,101,115") + "," + u("46,102,114,45,115,105,100,101") + "," + u("46,102,114,45,99,108,111,115,101"), g + c + l + ",46,102,114,45,112,97,103,101,115," + v + c + "62," + u("46,102,114,45,112,97,103,101")];
                    $.each(m, function(t) {
                        m[t] = e(m[t])
                    });
                    var y = Window.element.add(Window._box),
                        w = i(Window.element[0]),
                        b = i(Window._box[0]),
                        _ = "fr-rs" + t(),
                        x = $(Math.round(Math.random()) ? "html" : "body");
                    x.addClass(_), m.push("." + _ + " #" + w + " #" + b + " " + e(f)), setTimeout(function() {
                        y.removeAttr("id"), x.removeClass(_)
                    }, 900);
                    var C = "<" + p + " " + e("116,121,112,101,61,39,116,101,120,116,47,99,115,115,39,62");
                    $.each(m, function(t, i) {
                        var n = [e("98,111,116,116,111,109,58") + s + _i, e("114,105,103,104,116,58") + s + _i, e("100,105,115,112,108,97,121,58,98,108,111,99,107") + _i, vis + vz + _i, o + e("58,49") + _i, e("109,97,114,103,105,110,58,48") + _i, e("112,97,100,100,105,110,103,58,48") + _i, e("109,105,110,45,104,101,105,103,104,116,58,49,55,112,120") + _i, e("109,105,110,45,119,105,100,116,104,58,52,54,112,120") + _i, e("116,114,97,110,115,102,111,114,109,58,110,111,110,101") + _i].join("; ");
                        C += i + e("123") + n + e("125,32")
                    }), C += "</" + p + ">", Window._thumbnails.append(C)
                },
                removeStyle: function() {
                    Window._thumbnails.find("style").remove()
                },
                check: function() {
                    var e = Window.element.is(vz);
                    e || Window.element.show();
                    var t = this._m && this._m.is(vz) && 1 == parseFloat(this._m.css(o));
                    return e || Window.element[h](), t
                },
                remove: function() {
                    this.removeStyle(), this._m && (this._m.remove(), this._m = null)
                },
                clear: function() {
                    this.remove(), this._shown = !1, Window.timers.clear("_m")
                }
            }
        }(),
        Page = function() {
            function e() {
                return this.initialize.apply(this, _slice.call(arguments))
            }
            var t = 0,
                i = {},
                n = $("<div>").addClass("fr-stroke fr-stroke-top fr-stroke-horizontal").append($("<div>").addClass("fr-stroke-color")).add($("<div>").addClass("fr-stroke fr-stroke-bottom fr-stroke-horizontal").append($("<div>").addClass("fr-stroke-color"))).add($("<div>").addClass("fr-stroke fr-stroke-left fr-stroke-vertical").append($("<div>").addClass("fr-stroke-color"))).add($("<div>").addClass("fr-stroke fr-stroke-right fr-stroke-vertical").append($("<div>").addClass("fr-stroke-color")));
            return $.extend(e.prototype, {
                initialize: function(e, i, n) {
                    this.view = e, this.dimensions = {
                        width: 0,
                        height: 0
                    }, this.uid = t++, this._position = i, this._total = n, this._fullClick = !1, this._visible = !1, this.queues = {}, this.queues.showhide = $({})
                },
                create: function() {
                    if (!this._created) {
                        Pages.element.append(this.element = $("<div>").addClass("fr-page").append(this.container = $("<div>").addClass("fr-container")).css({
                            opacity: 0
                        }).hide());
                        var e = this.view.options.position && this._total > 1;
                        if (e && this.element.addClass("fr-has-position"), (this.view.caption || e) && (this.element.append(this.info = $("<div>").addClass("fr-info").append($("<div>").addClass("fr-info-background")).append(n.clone(!0)).append(this.infoPadder = $("<div>").addClass("fr-info-padder"))), e && (this.element.addClass("fr-has-position"), this.infoPadder.append(this.pos = $("<div>").addClass("fr-position").append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total)))), this.view.caption && this.infoPadder.append(this.caption = $("<div>").addClass("fr-caption").html(this.view.caption))), this.container.append(this.background = $("<div>").addClass("fr-content-background")).append(this.content = $("<div>").addClass("fr-content")), "image" == this.view.type && (this.content.append(this.image = $("<img>").addClass("fr-content-element").attr({
                                src: this.view.url
                            })), this.content.append(n.clone(!0))), e && "outside" == this.view.options.ui && this.container.append(this.positionOutside = $("<div>").addClass("fr-position-outside").append($("<div>").addClass("fr-position-background")).append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total))), "inside" == this.view.options.ui) {
                            this.content.append(this.previousInside = $("<div>").addClass("fr-side fr-side-previous fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this.nextInside = $("<div>").addClass("fr-side fr-side-next fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this.closeInside = $("<div>").addClass("fr-close fr-toggle-ui").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), (this.view.caption || e && this.view.grouped.caption) && (this.content.append(this.infoInside = $("<div>").addClass("fr-info fr-toggle-ui").append($("<div>").addClass("fr-info-background")).append(n.clone(!0)).append(this.infoPadderInside = $("<div>").addClass("fr-info-padder"))), e && this.infoPadderInside.append(this.posInside = $("<div>").addClass("fr-position").append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total))), this.view.caption && this.infoPadderInside.append(this.captionInside = $("<div>").addClass("fr-caption").html(this.view.caption))), this.view.caption || !e || this.view.grouped.caption || this.content.append(this.positionInside = $("<div>").addClass("fr-position-inside fr-toggle-ui").append($("<div>").addClass("fr-position-background")).append($("<span>").addClass("fr-position-text").html(this._position + " / " + this._total)));
                            var t = this.view.options.loop && this._total > 1 || 1 != this._position,
                                i = this.view.options.loop && this._total > 1 || this._position < this._total;
                            this.previousInside[(t ? "remove" : "add") + "Class"]("fr-side-disabled"), this.nextInside[(i ? "remove" : "add") + "Class"]("fr-side-disabled")
                        }
                        $.each(["x", "y"], $.proxy(function(e, t) {
                            this.view.options.overflow[t] && this.element.addClass("fr-overflow-" + t)
                        }, this)), this.element.addClass("fr-type-" + this.view.type), Type.isVideo(this.view.type) && this.element.addClass("fr-type-video"), this._total < 2 && this.element.addClass("fr-no-sides"), this._created = !0
                    }
                },
                _getSurroundingPages: function() {
                    var e;
                    if (!(e = this.view.options.preload)) return [];
                    for (var t = [], i = Math.max(1, this._position - e[0]), n = Math.min(this._position + e[1], this._total), o = this._position, r = o; n >= r; r++) {
                        var s = Pages.pages[r - 1];
                        s._position != o && t.push(s)
                    }
                    for (var r = o; r >= i; r--) {
                        var s = Pages.pages[r - 1];
                        s._position != o && t.push(s)
                    }
                    return t
                },
                preloadSurroundingImages: function() {
                    var e = this._getSurroundingPages();
                    $.each(e, $.proxy(function(e, t) {
                        t.preload()
                    }, this))
                },
                preload: function() {
                    this.preloading || this.preloaded || "image" != this.view.type || !this.view.options.preload || this.loaded || (this.create(), this.preloading = !0, this.preloadReady = new ImageReady(this.image[0], $.proxy(function(e) {
                        this.loaded = !0, i[this.view.url] = !0, this.preloading = !1, this.preloaded = !0, this.dimensions = {
                            width: e.img.naturalWidth,
                            height: e.img.naturalHeight
                        }
                    }, this), null, {
                        method: "naturalWidth"
                    }))
                },
                load: function(e, t) {
                    if (this.create(), this.loaded) return void(e && e());
                    switch (this.abort(), this.loading = !0, this.view.options.spinner && (this._spinnerDelay = setTimeout($.proxy(function() {
                        Spinner.show()
                    }, this), this.view.options.spinnerDelay || 0)), this.view.type) {
                        case "image":
                            if (this.error) return void(e && e());
                            this.imageReady = new ImageReady(this.image[0], $.proxy(function(t) {
                                this._markAsLoaded(), this.setDimensions({
                                    width: t.img.naturalWidth,
                                    height: t.img.naturalHeight
                                }), e && e()
                            }, this), $.proxy(function() {
                                this._markAsLoaded(), this.image.hide(), this.content.prepend(this.error = $("<div>").addClass("fr-error fr-content-element").append($("<div>").addClass("fr-error-icon"))), this.element.addClass("fr-has-error"), this.setDimensions({
                                    width: this.error.outerWidth(),
                                    height: this.error.outerHeight()
                                }), this.error.css({
                                    width: "100%",
                                    height: "100%"
                                }), e && e()
                            }, this), {
                                method: this.view.options.loadedMethod
                            });
                            break;
                        case "youtube":
                            this._markAsLoaded(), this.setDimensions({
                                width: this.view.options.width,
                                height: this.view.options.height
                            }), e && e()
                    }
                },
                setDimensions: function(e) {
                    if (this.dimensions = e, console.log(this.view.options.maxWidth, this.view.options.maxHeight), this.view.options.maxWidth || this.view.options.maxHeight) {
                        var t = this.view.options,
                            i = {
                                width: t.maxWidth ? t.maxWidth : this.dimensions.width,
                                height: t.maxHeight ? t.maxHeight : this.dimensions.height
                            };
                        this.dimensions = Fit.within(i, this.dimensions)
                    }
                },
                _markAsLoaded: function() {
                    this._abortSpinnerDelay(), this.loading = !1, this.loaded = !0, i[this.view.url] = !0, Spinner.hide(null, null, this._position)
                },
                isVideo: function() {
                    return Type.isVideo(this.view.type)
                },
                raise: function() {
                    var e = Pages.element[0].lastChild;
                    e && e == this.element[0] || Pages.element.append(this.element)
                },
                show: function(e) {
                    var t = this.queues.showhide;
                    return t.queue([]), this.isVideo() ? void(window.location.href = this.view.url) : (t.queue($.proxy(function(e) {
                            var t = this.view.options.spinner && !i[this.view.url];
                            Spinner._visible && !t && Spinner.hide(), Pages.stopInactive(), e()
                        }, this)), t.queue($.proxy(function(e) {
                            this.updateUI(), UI.set(this._ui), e()
                        }, this)), t.queue($.proxy(function(e) {
                            Keyboard.enable(this.view.options.keyboard), e()
                        }, this)), t.queue($.proxy(function(e) {
                            Spinner.setSkin(this.view.options.skin), this.load($.proxy(function() {
                                this.preloadSurroundingImages(), e()
                            }, this))
                        }, this)), t.queue($.proxy(function(e) {
                            this.raise(), Window.setSkin(this.view.options.skin), UI.enable(), this.fitToBox(), Window.adjustToScroll(), e()
                        }, this)), this.view.options.sync || t.queue($.proxy(function(e) {
                            Pages.hideInactive(e)
                        }, this)), t.queue($.proxy(function(e) {
                            var t = 3,
                                i = this.view.options.effects.content.show;
                            Window.setShowingType(this.view.type), Window.visible || (i = this.view.options.effects.window.show), t++, Fire.show(function() {
                                --t < 1 && e()
                            }), this.view.options.sync && (t++, Pages.hideInactive(function() {
                                --t < 1 && e()
                            })), Window.show(function() {
                                --t < 1 && e()
                            }, this.view.options.effects.window.show), this._show(function() {
                                --t < 1 && e()
                            }, i), UI.adjustPrevNext(function() {
                                --t < 1 && e()
                            }, Window._first ? 0 : i), Window._first ? (UI.show(null, 0), Window._first = !1) : UI.show(null, 0)
                        }, this)), void t.queue($.proxy(function(t) {
                            this._visible = !0, e && e(), t()
                        }, this)))
                },
                _show: function(e, t) {
                    var i = Window.visible ? "number" == $.type(t) ? t : this.view.options.effects.content.show : 0;
                    this.element.stop(!0).show().fadeTo(i || 0, 1, e)
                },
                hide: function(e, t) {
                    if (!this.element) return void(e && e());
                    this.removeVideo(), this.abort();
                    var i = "number" == $.type(t) ? t : this.view.options.effects.content.hide;
                    this.element.stop(!0).fadeTo(i, 0, "frescoEaseInCubic", $.proxy(function() {
                        this.element.hide(), this._visible = !1, Pages.removeTracking(this._position), e && e()
                    }, this))
                },
                stop: function() {
                    var e = this.queues.showhide;
                    e.queue([]), this.element && this.element.stop(!0), this.abort()
                },
                removeVideo: function() {
                    this.playerIframe && (this.playerIframe[0].src = "//about:blank", this.playerIframe.remove(), this.playerIframe = null)
                },
                remove: function() {
                    this.stop(), this.removeVideo(), this.element && this.element.remove(), this._track && (Pages.removeTracking(this._position), this._track = !1), this.preloadReady && (this.preloadReady.abort(), this.preloadReady = null, this.preloading = null, this.preloaded = null), this._visible = !1, this.removed = !0
                },
                abort: function() {
                    this.imageReady && (this.imageReady.abort(), this.imageReady = null), this.vimeoReady && (this.vimeoReady.abort(), this.vimeoReady = null), this._abortSpinnerDelay(), this.loading = !1
                },
                _abortSpinnerDelay: function() {
                    this._spinnerDelay && (clearTimeout(this._spinnerDelay), this._spinnerDelay = null)
                },
                _getInfoHeight: function(e) {
                    var t = this.view.options.position && this._total > 1;
                    switch (this._ui) {
                        case "fullclick":
                        case "inside":
                            if (!this.view.caption && !t) return 0;
                            break;
                        case "outside":
                            if (!this.view.caption) return 0
                    }
                    var i = "inside" == this._ui ? this.infoInside : this.info;
                    "outside" == this._ui && (e = Math.min(e, Window._boxDimensions.width));
                    var n, o = i[0].style.width;
                    return ("inside" == this._ui || "fullclick" == this._ui) && (o = "100%"), i.css({
                        width: e + "px"
                    }), n = parseFloat(i.outerHeight()), i.css({
                        width: o
                    }), n
                },
                _whileVisible: function(e, t) {
                    var i = [],
                        n = Window.element.add(this.element);
                    t && (n = n.add(t)), $.each(n, function(e, t) {
                        var n = $(t).is(":visible");
                        n || i.push($(t).show())
                    });
                    var o = this.element.hasClass("fr-no-caption");
                    this.element.removeClass("fr-no-caption");
                    var r = this.element.hasClass("fr-has-caption");
                    this.element.addClass("fr-has-caption"), Window.element.css({
                        visibility: "hidden"
                    }), e(), Window.element.css({
                        visibility: "visible"
                    }), o && this.element.addClass("fr-no-caption"), r || this.element.removeClass("fr-has-caption"), $.each(i, function(e, t) {
                        t.hide()
                    })
                },
                updateForced: function() {
                    this.create(), this._fullClick = this.view.options.fullClick, this._noOverflow = !1, parseInt(this.element.css("min-width")) > 0 && (this._fullClick = !0), parseInt(this.element.css("min-height")) > 0 && (this._noOverflow = !0)
                },
                updateUI: function(e) {
                    this.updateForced();
                    var e = this._fullClick ? "fullclick" : this.view.options.ui;
                    this._ui && this.element.removeClass("fr-ui-" + this._ui), this.element.addClass("fr-ui-" + e), this._ui = e
                },
                fitToBox: function() {
                    if (this.content) {
                        var e = (this.element, $.extend({}, Window.getBoxDimensions())),
                            t = $.extend({}, this.dimensions),
                            i = this.container;
                        this.updateUI();
                        var n = {
                            left: parseInt(i.css("padding-left")),
                            top: parseInt(i.css("padding-top"))
                        };
                        if ("outside" == this._ui && this._positionOutside) {
                            var o = 0;
                            this._whileVisible($.proxy(function() {
                                this._positionOutside.is(":visible") && (o = this._positionOutside.outerWidth(!0))
                            }, this)), o > n.left && (n.left = o)
                        }
                        e.width -= 2 * n.left, e.height -= 2 * n.top;
                        var r, s = {
                                width: !0,
                                height: !!this._noOverflow || !this.view.options.overflow.y
                            },
                            a = Fit.within(e, t, s),
                            l = $.extend({}, a),
                            u = (this.content, 0),
                            h = "inside" == this._ui,
                            d = h ? this.infoInside : this.info,
                            c = h ? this.captionInside : this.caption,
                            f = h ? this.posInside : this.pos,
                            p = !!c;
                        switch (this._ui) {
                            case "outside":
                                var v, g = $.extend({}, l);
                                this.caption && (v = this.caption, this._whileVisible($.proxy(function() {
                                    for (var t = 0, i = 2; i > t;) {
                                        u = this._getInfoHeight(l.width);
                                        var n = e.height - l.height;
                                        u > n && (l = Fit.within({
                                            width: l.width,
                                            height: Math.max(l.height - (u - n), 0)
                                        }, l, s)), t++
                                    }
                                    u = this._getInfoHeight(l.width);
                                    var o = .5;
                                    (!this.view.options.overflow.y && u + l.height > e.height || d && "none" == d.css("display") || o && u >= o * l.height) && (p = !1, u = 0, l = g)
                                }, this), v)), d && d.css({
                                    width: l.width + "px"
                                }), r = {
                                    width: l.width,
                                    height: l.height + u
                                };
                                break;
                            case "inside":
                                if (this.caption) {
                                    var v = c;
                                    this._whileVisible($.proxy(function() {
                                        u = this._getInfoHeight(l.width);
                                        var e = .45;
                                        e && u >= e * l.height && (p = !1, u = 0)
                                    }, this), v)
                                }
                                r = l;
                                break;
                            case "fullclick":
                                var m = [];
                                c && m.push(c), this._whileVisible($.proxy(function() {
                                    if ((c || f) && d.css({
                                            width: "100%"
                                        }), u = this._getInfoHeight(Window._boxDimensions.width), c && u > .5 * e.height)
                                        if (p = !1, f) {
                                            var t = this.caption.is(":visible");
                                            this.caption.hide(), u = this._getInfoHeight(Window._boxDimensions.width), t && this.caption.show()
                                        } else u = 0;
                                    l = Fit.within({
                                        width: e.width,
                                        height: Math.max(0, e.height - u)
                                    }, l, s), r = l
                                }, this), m), this.content.css({
                                    "padding-bottom": 0
                                })
                        }
                        c && c[p ? "show" : "hide"](), this.element[(p ? "remove" : "add") + "Class"]("fr-no-caption"), this.element[(p ? "add" : "remove") + "Class"]("fr-has-caption"), this.content.css(l), this.background.css(r), this.playerIframe && this.playerIframe.attr(l), this.overlap = {
                            y: r.height + ("fullclick" == this._ui ? u : 0) - Window._boxDimensions.height,
                            x: 0
                        }, this._track = !this._noOverflow && this.view.options.overflow.y && this.overlap.y > 0, this._infoHeight = u, this._padding = n, this._contentDimensions = l, this._backgroundDimensions = r, Pages[(this._track ? "set" : "remove") + "Tracking"](this._position), this.position()
                    }
                },
                position: function() {
                    if (this.content) {
                        var e = this._contentDimensions,
                            t = this._backgroundDimensions,
                            i = {
                                top: .5 * Window._boxDimensions.height - .5 * t.height,
                                left: .5 * Window._boxDimensions.width - .5 * t.width
                            },
                            n = {
                                top: i.top + e.height,
                                left: i.left
                            },
                            o = 0,
                            r = "inside" == this._ui ? this.infoInside : this.info;
                        switch (this._ui) {
                            case "fullclick":
                                i.top = .5 * (Window._boxDimensions.height - this._infoHeight) - .5 * t.height, n = {
                                    top: Window._boxDimensions.height - this._infoHeight,
                                    left: 0,
                                    bottom: "auto"
                                }, o = this._infoHeight;
                                break;
                            case "inside":
                                n = {
                                    top: "auto",
                                    left: 0,
                                    bottom: 0
                                }
                        }
                        if (this.overlap.y > 0) {
                            var s = Pages.getXYP();
                            switch (i.top = 0 - s.y * this.overlap.y, this._ui) {
                                case "outside":
                                case "fullclick":
                                    n.top = Window._boxDimensions.height - this._infoHeight;
                                    break;
                                case "inside":
                                    var a = i.top + e.height - Window._boxDimensions.height,
                                        l = -1 * i.top;
                                    if (n.bottom = a, this.closeInside.css({
                                            top: l
                                        }), this._total > 1) {
                                        var u = Window.element.is(":visible");
                                        u || Window.element.show();
                                        var h = this.previousInside.attr("style");
                                        this.previousInside.removeAttr("style");
                                        var d = parseInt(this.previousInside.css("margin-top"));
                                        this.previousInside.attr({
                                            style: h
                                        }), u || Window.element.hide();
                                        var c = this.previousInside.add(this.nextInside),
                                            f = .5 * this.overlap.y;
                                        c.css({
                                            "margin-top": d + (l - f)
                                        }), this.positionInside && this.positionInside.css({
                                            bottom: a
                                        })
                                    }
                            }
                        } else "inside" == this._ui && this.element.find(".fr-info, .fr-side, .fr-close, .fr-position-inside").removeAttr("style");
                        r && r.css(n), this.container.css({
                            bottom: o
                        }), this.content.css(i), this.background.css(i)
                    }
                }
            }), e
        }(),
        Pages = {
            initialize: function(e) {
                this.element = e, this.pages = [], this.uid = 1, this._tracking = []
            },
            load: function(e) {
                this.views = e, this.removeAll(), $.each(e, $.proxy(function(e, t) {
                    this.pages.push(new Page(t, e + 1, this.views.length))
                }, this))
            },
            show: function(e, t) {
                var i = this.pages[e - 1];
                this.page && this.page.uid == i.uid || (this.page = i, Thumbnails.show(e), Window.updateBoxDimensions(), i.show($.proxy(function() {
                    t && t()
                }, this)))
            },
            getPositionInActivePageGroup: function(e) {
                var t = 0;
                return $.each(this.pages, function(i, n) {
                    n.view.element && n.view.element == e && (t = i + 1)
                }), t
            },
            getLoadingCount: function() {
                var e = 0;
                return $.each(this.pages, function(t, i) {
                    i.loading && e++
                }), e
            },
            removeAll: function() {
                $.each(this.pages, function(e, t) {
                    t.remove()
                }), this.pages = []
            },
            hideInactive: function(e, t) {
                var i = [];
                $.each(this.pages, $.proxy(function(e, t) {
                    t.uid != this.page.uid && i.push(t)
                }, this));
                var n = 0 + i.length;
                return 1 > n ? e && e() : $.each(i, function(i, o) {
                        o.hide(function() {
                            e && --n < 1 && e()
                        }, t)
                    }), i.length
            },
            stopInactive: function() {
                $.each(this.pages, $.proxy(function(e, t) {
                    t.uid != this.page.uid && t.stop()
                }, this))
            },
            stop: function() {
                $.each(this.pages, function(e, t) {
                    t.stop()
                })
            },
            handleTracking: function(e) {
                Browser.IE && Browser.IE < 9 ? (this.setXY({
                        x: e.pageX,
                        y: e.pageY
                    }), this.updatePositions()) : this._tracking_timer = setTimeout($.proxy(function() {
                        this.setXY({
                            x: e.pageX,
                            y: e.pageY
                        }), this.updatePositions()
                    }, this), 30)
            },
            clearTrackingTimer: function() {
                this._tracking_timer && (clearTimeout(this._tracking_timer), this._tracking_timer = null)
            },
            startTracking: function() {
                Support.mobileTouch || this._handleTracking || $(document.documentElement).on("mousemove", this._handleTracking = $.proxy(this.handleTracking, this))
            },
            stopTracking: function() {
                !Support.mobileTouch && this._handleTracking && ($(document.documentElement).off("mousemove", this._handleTracking), this._handleTracking = null, this.clearTrackingTimer())
            },
            setTracking: function(e) {
                this.isTracking(e) || (this._tracking.push(this.pages[e - 1]), 1 == this._tracking.length && this.startTracking())
            },
            clearTracking: function() {
                this._tracking = []
            },
            removeTracking: function(e) {
                this._tracking = $.grep(this._tracking, function(t) {
                    return t._position != e
                }), this._tracking.length < 1 && this.stopTracking()
            },
            isTracking: function(e) {
                var t = !1;
                return $.each(this._tracking, function(i, n) {
                    return n._position == e ? (t = !0, !1) : void 0
                }), t
            },
            setXY: function(e) {
                this._xy = e
            },
            getXYP: function(e) {
                var t = Pages.page,
                    i = $.extend({}, Window._boxDimensions),
                    e = $.extend({}, this._xy);
                e.y -= $(window).scrollTop(), t && ("outside" == t._ui || "fullclick" == t._ui) && t._infoHeight > 0 && (i.height -= t._infoHeight), e.y -= Window._boxPosition.top;
                var n = {
                        x: 0,
                        y: Math.min(Math.max(e.y / i.height, 0), 1)
                    },
                    o = 20,
                    r = {
                        x: "width",
                        y: "height"
                    },
                    s = {};
                return $.each("y".split(" "), $.proxy(function(e, t) {
                    s[t] = Math.min(Math.max(o / i[r[t]], 0), 1), n[t] *= 1 + 2 * s[t], n[t] -= s[t], n[t] = Math.min(Math.max(n[t], 0), 1)
                }, this)), this.setXYP(n), this._xyp
            },
            setXYP: function(e) {
                this._xyp = e
            },
            updatePositions: function() {
                this._tracking.length < 1 || $.each(this._tracking, function(e, t) {
                    t.position()
                })
            }
        };
    $.extend(View.prototype, {
        initialize: function(object) {
            var options = arguments[1] || {},
                data = {};
            if ("string" == $.type(object)) object = {
                url: object
            };
            else if (object && 1 == object.nodeType) {
                var element = $(object);
                object = {
                    element: element[0],
                    url: element.attr("href"),
                    caption: element.data("fresco-caption"),
                    group: element.data("fresco-group"),
                    extension: element.data("fresco-extension"),
                    type: element.data("fresco-type"),
                    options: element.data("fresco-options") && eval("({" + element.data("fresco-options") + "})") || {}
                }
            }
            if (object && (object.extension || (object.extension = detectExtension(object.url)), !object.type)) {
                var data = getURIData(object.url);
                object._data = data, object.type = data.type
            }
            return object._data || (object._data = getURIData(object.url)), object && object.options ? object.options = $.extend(!0, $.extend({}, options), $.extend({}, object.options)) : object.options = $.extend({}, options), object.options = Options.create(object.options, object.type, object._data), $.extend(this, object), this
        }
    });
    var Spinner = {
            supported: Support.css.transform && Support.css.animation,
            initialize: function(e) {
                this.element = $("<div>").addClass("fr-spinner").hide();
                for (var t = 1; 12 >= t; t++) this.element.append($("<div>").addClass("fr-spin-" + t));
                this.element.on("click", $.proxy(function() {
                    Window.hide()
                }, this)), this.element.on("fresco:mousewheel", function(e) {
                    e.preventDefault()
                })
            },
            setSkin: function(e) {
                this.supported && (this._skin && this.element.removeClass("fr-spinner-skin-" + this._skin), this.updateDimensions(), this.element.addClass("fr-spinner-skin-" + e), this._skin = e)
            },
            updateDimensions: function() {
                var e = this._attached;
                e || this.attach(), this._dimensions = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, e || this.detach()
            },
            attach: function() {
                this._attached || ($(document.body).append(this.element), this._attached = !0)
            },
            detach: function() {
                this._attached && (this.element.detach(), this._attached = !1)
            },
            show: function(e, t) {
                this._visible = !0, this.attach(), this.center();
                var i = Pages.page && Pages.page.view.options.effects.spinner.show || 0,
                    n = ("number" == $.type(t) ? t : i) || 0;
                this.element.stop(!0).fadeTo(n, 1, e)
            },
            hide: function(e, t, i) {
                this._visible = !1;
                var n = Pages.page && Pages.page.view.options.effects.spinner.hide || 0,
                    o = ("number" == $.type(t) ? t : n) || 0;
                this.element.stop(!0).fadeOut(o || 0, $.proxy(function() {
                    this.detach(), e && e()
                }, this))
            },
            center: function() {
                if (this.supported) {
                    this._dimensions || this.updateDimensions();
                    var e = Pages.page,
                        t = 0;
                    e && "fullclick" == e._ui && e._whileVisible(function() {
                        t = e._getInfoHeight(Window._boxDimensions.width)
                    }), this.element.css({
                        top: Window._boxPosition.top + .5 * Window._boxDimensions.height - .5 * this._dimensions.height - .5 * t,
                        left: Window._boxPosition.left + .5 * Window._boxDimensions.width - .5 * this._dimensions.width
                    })
                }
            }
        },
        _Fresco = {
            _disabled: !1,
            _fallback: !0,
            initialize: function() {
                Window.initialize(), this._disabled || this.startDelegating()
            },
            startDelegating: function() {
                this._delegateHandler || $(document.documentElement).on("click", ".fresco[href]", this._delegateHandler = $.proxy(this.delegate, this)).on("click", this._setClickXYHandler = $.proxy(this.setClickXY, this))
            },
            stopDelegating: function() {
                this._delegateHandler && ($(document.documentElement).off("click", ".fresco[href]", this._delegateHandler).off("click", this._setClickXYHandler), this._setClickXYHandler = null, this._delegateHandler = null)
            },
            setClickXY: function(e) {
                Pages.setXY({
                    x: e.pageX,
                    y: e.pageY
                })
            },
            delegate: function(e) {
                if (!this._disabled) {
                    e.stopPropagation(), e.preventDefault();
                    var t = e.currentTarget;
                    this.setClickXY(e), _Fresco.show(t)
                }
            },
            show: function(object) {
                if (this._disabled) return void this.showFallback.apply(_Fresco, _slice.call(arguments));
                var options = arguments[1] || {},
                    position = arguments[2];
                arguments[1] && "number" == $.type(arguments[1]) && (position = arguments[1], options = {});
                var views = [],
                    object_type, isElement = _.isElement(object);
                switch (object_type = $.type(object)) {
                    case "string":
                    case "object":
                        var view = new View(object, options),
                            _dgo = "data-fresco-group-options";
                        if (view.group) {
                            if (isElement) {
                                var elements = $('.fresco[data-fresco-group="' + $(object).data("fresco-group") + '"]'),
                                    groupOptions = {};
                                elements.filter("[" + _dgo + "]").each(function(i, element) {
                                    $.extend(groupOptions, eval("({" + ($(element).attr(_dgo) || "") + "})"))
                                }), elements.each(function(e, t) {
                                    position || t != object || (position = e + 1), views.push(new View(t, $.extend({}, groupOptions, options)))
                                })
                            }
                        } else {
                            var groupOptions = {};
                            isElement && $(object).is("[" + _dgo + "]") && ($.extend(groupOptions, eval("({" + ($(object).attr(_dgo) || "") + "})")), view = new View(object, $.extend({}, groupOptions, options))), views.push(view)
                        }
                        break;
                    case "array":
                        $.each(object, function(e, t) {
                            var i = new View(t, options);
                            views.push(i)
                        })
                }
                var groupExtend = {
                        grouped: {
                            caption: !1
                        }
                    },
                    firstUI = views[0].options.ui;
                $.each(views, function(e, t) {
                    t.caption && (groupExtend.grouped.caption = !0), e > 0 && t.options.ui != firstUI && (t.options.ui = firstUI)
                }), $.each(views, function(e, t) {
                    t = $.extend(t, groupExtend)
                }), (!position || 1 > position) && (position = 1), position > views.length && (position = views.length);
                var positionInAPG;
                isElement && (positionInAPG = Pages.getPositionInActivePageGroup(object)) ? Window.setPosition(positionInAPG) : Window.load(views, position)
            },
            showFallback: function() {
                function e(t) {
                    var i, n = $.type(t);
                    if ("string" == n) i = t;
                    else if ("array" == n && t[0]) i = e(t[0]);
                    else if (_.isElement(t) && $(t).attr("href")) var i = $(t).attr("href");
                    else i = !!t.url && t.url;
                    return i
                }
                return function(t) {
                    if (this._fallback) {
                        var i = e(t);
                        i && (window.location.href = i)
                    }
                }
            }()
        };
    (Browser.IE && Browser.IE < 7 || "number" == $.type(Browser.Android) && Browser.Android < 3 || Browser.MobileSafari && "number" == $.type(Browser.WebKit) && Browser.WebKit < 533.18) && (_Fresco.show = _Fresco.showFallback);
    var Thumbnails = {
        initialize: function(e) {
            this.element = e, this._thumbnails = [], this._orientation = "vertical", this._vars = {
                thumbnail: {},
                thumbnailFrame: {},
                thumbnails: {}
            }, this.build(), this.startObserving()
        },
        build: function() {
            this.element.append(this.wrapper = $("<div>").addClass("fr-thumbnails-wrapper").append(this._slider = $("<div>").addClass("fr-thumbnails-slider").append(this._previous = $("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-previous").append(this._previous_button = $("<div>").addClass("fr-thumbnails-side-button").append($("<div>").addClass("fr-thumbnails-side-button-background")).append($("<div>").addClass("fr-thumbnails-side-button-icon")))).append(this._thumbs = $("<div>").addClass("fr-thumbnails-thumbs").append(this._slide = $("<div>").addClass("fr-thumbnails-slide"))).append(this._next = $("<div>").addClass("fr-thumbnails-side fr-thumbnails-side-next").append(this._next_button = $("<div>").addClass("fr-thumbnails-side-button").append($("<div>").addClass("fr-thumbnails-side-button-background")).append($("<div>").addClass("fr-thumbnails-side-button-icon"))))))
        },
        startObserving: function() {
            this._slider.delegate(".fr-thumbnail", "click", $.proxy(function(e) {
                e.stopPropagation();
                var t = $(e.target).closest(".fr-thumbnail")[0],
                    i = t && $(t).data("fr-position");
                i && (this.setActive(i), Window.setPosition(i))
            }, this)), this._slider.bind("click", function(e) {
                e.stopPropagation()
            }), this._previous.bind("click", $.proxy(this.previousPage, this)), this._next.bind("click", $.proxy(this.nextPage, this))
        },
        load: function(e) {
            this.clear();
            var t = "horizontal",
                i = !1;
            $.each(e, $.proxy(function(e, n) {
                "vertical" == n.options.thumbnails && (t = "vertical"), n.options.thumbnails || (i = !0)
            }, this)), this.setOrientation(t), this._disabledGroup = i, this._disabledGroup = !0, $.each(e, $.proxy(function(e, t) {
                this._thumbnails.push(new Thumbnail(t, e + 1))
            }, this)), this.fitToViewport()
        },
        clear: function() {
            $.each(this._thumbnails, function(e, t) {
                t.remove()
            }), this._thumbnails = [], this._position = -1, this._page = -1
        },
        setOrientation: function(e) {
            this._orientation && Window.element.removeClass("fr-thumbnails-" + this._orientation), Window.element.addClass("fr-thumbnails-" + e), this._orientation = e
        },
        disable: function() {
            Window.element.removeClass("fr-thumbnails-enabled").addClass("fr-thumbnails-disabled"), this._disabled = !0
        },
        enable: function() {
            Window.element.removeClass("fr-thumbnails-disabled").addClass("fr-thumbnails-enabled"), this._disabled = !1
        },
        enabled: function() {
            return !this._disabled
        },
        disabled: function() {
            return this._disabled
        },
        updateVars: function() {
            var e = Window.element,
                t = this._vars,
                i = this._orientation,
                n = "horizontal" == i,
                o = n ? "top" : "left",
                r = n ? "left" : "top",
                s = n ? "bottom" : "left",
                a = n ? "top" : "right",
                l = n ? "width" : "height",
                u = n ? "height" : "width",
                h = {
                    left: "right",
                    right: "left",
                    top: "bottom",
                    bottom: "top"
                };
            this.element.removeClass("fr-thumbnails-measured");
            var d = e.is(":visible");
            if (d || e.show(), this.disabled() && this.enable(), !this.element.is(":visible") || this._thumbnails.length < 2 || this._disabledGroup) return this.disable(), $.extend(this._vars.thumbnails, {
                width: 0,
                height: 0
            }), d || e.hide(), void this.element.addClass("fr-thumbnails-measured");
            this.enable();
            var c = this._previous,
                f = this._next,
                p = this._thumbs,
                v = Bounds.viewport(),
                g = this.element["inner" + _.String.capitalize(u)](),
                m = parseInt(this._thumbs.css("padding-" + o)) || 0,
                y = Math.max(g - 2 * m, 0),
                w = parseInt(this._thumbs.css("padding-" + r)) || 0,
                b = (parseInt(this.element.css("margin-" + s)) || 0) + (parseInt(this.element.css("margin-" + a)) || 0);
            $.extend(t.thumbnails, {
                height: g + b,
                width: v[n ? "width" : "height"],
                paddingTop: m
            }), $.extend(t.thumbnail, {
                height: y,
                width: y
            }), $.extend(t.thumbnailFrame, {
                width: y + 2 * w,
                height: g
            }), t.sides = {
                previous: {
                    width: f["inner" + _.String.capitalize(l)](),
                    marginLeft: parseInt(c.css("margin-" + r)) || 0,
                    marginRight: parseInt(c.css("margin-" + h[r])) || 0
                },
                next: {
                    width: f["inner" + _.String.capitalize(l)](),
                    marginLeft: parseInt(f.css("margin-" + r)) || 0,
                    marginRight: parseInt(f.css("margin-" + h[r])) || 0
                }
            };
            var x = v[l],
                C = t.thumbnailFrame.width,
                p = this._thumbnails.length;
            t.thumbnails.width = x, t.sides.enabled = p * C / x > 1;
            var k = x,
                T = t.sides,
                S = T.previous,
                E = T.next,
                M = S.marginLeft + S.width + S.marginRight + E.marginLeft + E.width + E.marginRight;
            t.sides.enabled && (k -= M), k = Math.floor(k / C) * C;
            var A = p * C;
            k > A && (k = A);
            var D = k + (t.sides.enabled ? M : 0);
            t.ipp = k / C, this._mode = "page", t.ipp <= 1 && (k = x, D = x, t.sides.enabled = !1, this._mode = "center"), t.pages = Math.ceil(p * C / k), t.wrapper = {
                width: D + 1,
                height: g
            }, t.thumbs = {
                width: k,
                height: g
            }, t.slide = {
                width: p * C + 1,
                height: g
            }, d || e.hide(), this.element.addClass("fr-thumbnails-measured")
        },
        hide: function() {
            this.disable(), this.thumbnails.hide(), this._visible = !1
        },
        getDimensions: function() {
            var e = "horizontal" == this._orientation;
            return {
                width: e ? this._vars.thumbnails.width : this._vars.thumbnails.height,
                height: e ? this._vars.thumbnails.height : this._vars.thumbnails.width
            }
        },
        fitToViewport: function() {
            if (this.updateVars(), !this.disabled()) {
                var e = $.extend({}, this._vars),
                    t = "horizontal" == this._orientation;
                $.each(this._thumbnails, function(e, t) {
                    t.resize()
                }), this._previous[e.sides.enabled ? "show" : "hide"](), this._next[e.sides.enabled ? "show" : "hide"](), this._thumbs.css({
                    width: e.thumbs[t ? "width" : "height"],
                    height: e.thumbs[t ? "height" : "width"]
                }), this._slide.css({
                    width: e.slide[t ? "width" : "height"],
                    height: e.slide[t ? "height" : "width"]
                });
                var i = {
                    width: e.wrapper[t ? "width" : "height"],
                    height: e.wrapper[t ? "height" : "width"]
                };
                i["margin-" + (t ? "left" : "top")] = Math.round(-.5 * e.wrapper.width) + "px", i["margin-" + (t ? "top" : "left")] = 0, this.wrapper.css(i), this._position && this.moveTo(this._position, !0)
            }
        },
        moveToPage: function(e) {
            if (!(1 > e || e > this._vars.pages || e == this._page)) {
                var t = this._vars.ipp * (e - 1) + 1;
                this.moveTo(t)
            }
        },
        previousPage: function() {
            this.moveToPage(this._page - 1)
        },
        nextPage: function() {
            this.moveToPage(this._page + 1)
        },
        show: function(e) {
            var t = this._position < 0;
            1 > e && (e = 1);
            var i = this._thumbnails.length;
            e > i && (e = i), this._position = e, this.setActive(e), ("page" != this._mode || this._page != Math.ceil(e / this._vars.ipp)) && this.moveTo(e, t)
        },
        moveTo: function(e, t) {
            if (this.updateVars(), !this.disabled()) {
                var i, n = "horizontal" == this._orientation,
                    o = Bounds.viewport()[n ? "width" : "height"],
                    r = .5 * o,
                    s = this._vars.thumbnailFrame.width;
                if ("page" == this._mode) {
                    var a = Math.ceil(e / this._vars.ipp);
                    this._page = a, i = -1 * (s * (this._page - 1) * this._vars.ipp);
                    var l = "fr-thumbnails-side-button-disabled";
                    this._previous_button[(2 > a ? "add" : "remove") + "Class"](l), this._next_button[(a >= this._vars.pages ? "add" : "remove") + "Class"](l)
                } else i = r + -1 * (s * (e - 1) + .5 * s);
                var a = Pages.page,
                    u = {},
                    h = {};
                u[n ? "top" : "left"] = 0, h[n ? "left" : "top"] = i + "px", this._slide.stop(!0).css(u).animate(h, t ? 0 : a ? a.view.options.effects.thumbnails.slide || 0 : 0, $.proxy(function() {
                    this.loadCurrentPage()
                }, this))
            }
        },
        loadCurrentPage: function() {
            var e, t;
            if (this._position && this._vars.thumbnailFrame.width && !(this._thumbnails.length < 1)) {
                if ("page" == this._mode) {
                    if (this._page < 1) return;
                    e = (this._page - 1) * this._vars.ipp + 1, t = Math.min(e - 1 + this._vars.ipp, this._thumbnails.length)
                } else {
                    var i = ("horizontal" == this._orientation, Math.ceil(this._vars.thumbnails.width / this._vars.thumbnailFrame.width));
                    e = Math.max(Math.floor(Math.max(this._position - .5 * i, 0)), 1), t = Math.ceil(Math.min(this._position + .5 * i)), this._thumbnails.length < t && (t = this._thumbnails.length)
                }
                for (var n = e; t >= n; n++) this._thumbnails[n - 1].load()
            }
        },
        setActive: function(e) {
            this._slide.find(".fr-thumbnail-active").removeClass("fr-thumbnail-active");
            var t = e && this._thumbnails[e - 1];
            t && t.activate()
        },
        refresh: function() {
            this._position && this.setPosition(this._position)
        }
    };
    $.extend(Thumbnail.prototype, {
        initialize: function(e, t) {
            this.view = e, this._dimension = {}, this._position = t, this.preBuild()
        },
        preBuild: function() {
            this.thumbnail = $("<div>").addClass("fr-thumbnail").data("fr-position", this._position)
        },
        build: function() {
            if (!this.thumbnailFrame) {
                var e = this.view.options;
                Thumbnails._slide.append(this.thumbnailFrame = $("<div>").addClass("fr-thumbnail-frame").append(this.thumbnail.append(this.thumbnailWrapper = $("<div>").addClass("fr-thumbnail-wrapper")))), "image" == this.view.type && this.thumbnail.addClass("fr-load-thumbnail").data("thumbnail", {
                    view: this.view,
                    src: e.thumbnail || this.view.url
                });
                var t = e.thumbnail && e.thumbnail.icon;
                t && this.thumbnail.append($("<div>").addClass("fr-thumbnail-icon fr-thumbnail-icon-" + t));
                var i;
                this.thumbnail.append(i = $("<div>").addClass("fr-thumbnail-overlay").append($("<div>").addClass("fr-thumbnail-overlay-background")).append(this.loading = $("<div>").addClass("fr-thumbnail-loading").append($("<div>").addClass("fr-thumbnail-loading-background")).append(this.spinner = $("<div>").addClass("fr-thumbnail-spinner").hide().append($("<div>").addClass("fr-thumbnail-spinner-spin")))).append($("<div>").addClass("fr-thumbnail-overlay-border"))), this.thumbnail.append($("<div>").addClass("fr-thumbnail-state")), this.resize()
            }
        },
        remove: function() {
            this.thumbnailFrame && (this.thumbnailFrame.remove(), this.thumbnailFrame = null, this.image = null), this.ready && (this.ready.abort(), this.ready = null), this.vimeoThumbnail && (this.vimeoThumbnail.abort(), this.vimeoThumbnail = null), this._loading = !1, this._removed = !0, this.view = null, this._clearDelay()
        },
        load: function() {
            if (!(this._loaded || this._loading || this._removed)) {
                this.thumbnailWrapper || this.build(), this._loading = !0;
                var e = this.view.options.thumbnail,
                    t = e && "boolean" == $.type(e) ? this.view.url : e || this.view.url;
                if (this._url = t, t)
                    if ("vimeo" == this.view.type)
                        if (t == e) this._url = t, this._load(this._url);
                        else switch (this.view.type) {
                            case "vimeo":
                                this.vimeoThumbnail = new VimeoThumbnail(this.view.url, $.proxy(function(e) {
                                    this._url = e, this._load(e)
                                }, this), $.proxy(function() {
                                    this._error()
                                }, this))
                        } else this._load(this._url)
            }
        },
        activate: function() {
            this.thumbnail.addClass("fr-thumbnail-active")
        },
        _load: function(e) {
            this.thumbnailWrapper.prepend(this.image = $("<img>").addClass("fr-thumbnail-image").attr({
                src: e
            }).css({
                opacity: 1e-4
            })), this.fadeInSpinner(), this.ready = new ImageReady(this.image[0], $.proxy(function(e) {
                var t = e.img;
                this.thumbnailFrame && this._loading && (this._loaded = !0, this._loading = !1, this._dimensions = {
                    width: t.naturalWidth,
                    height: t.naturalHeight
                }, this.resize(), this.show())
            }, this), $.proxy(function() {
                this._error()
            }, this), {
                method: this.view.options.loadedMethod
            })
        },
        _error: function() {
            this._loaded = !0, this._loading = !1, this.thumbnail.addClass("fr-thumbnail-error"), this.image && this.image.hide(), this.thumbnailWrapper.append($("<div>").addClass("fr-thumbnail-image")), this.show()
        },
        fadeInSpinner: function() {
            if (Spinner.supported && this.view.options.spinner) {
                this._clearDelay();
                var e = this.view.options.effects.thumbnail;
                this._delay = setTimeout($.proxy(function() {
                    this.spinner.stop(!0).fadeTo(e.show || 0, 1)
                }, this), this.view.options.spinnerDelay || 0)
            }
        },
        show: function() {
            this._clearDelay();
            var e = this.view.options.effects.thumbnail;
            this.loading.stop(!0).delay(e.delay).fadeTo(e.show, 0)
        },
        _clearDelay: function() {
            this._delay && (clearTimeout(this._delay), this._delay = null)
        },
        resize: function() {
            if (this.thumbnailFrame) {
                var e = "horizontal" == Thumbnails._orientation;
                if (this.thumbnailFrame.css({
                        width: Thumbnails._vars.thumbnailFrame[e ? "width" : "height"],
                        height: Thumbnails._vars.thumbnailFrame[e ? "height" : "width"]
                    }), this.thumbnailFrame.css({
                        top: e ? 0 : Thumbnails._vars.thumbnailFrame.width * (this._position - 1),
                        left: e ? Thumbnails._vars.thumbnailFrame.width * (this._position - 1) : 0
                    }), this.thumbnailWrapper) {
                    var t = Thumbnails._vars.thumbnail;
                    if (this.thumbnail.css({
                            width: t.width,
                            height: t.height,
                            "margin-top": Math.round(-.5 * t.height),
                            "margin-left": Math.round(-.5 * t.width),
                            "margin-bottom": 0,
                            "margin-right": 0
                        }), this._dimensions) {
                        var i, n = {
                                width: t.width,
                                height: t.height
                            },
                            o = Math.max(n.width, n.height),
                            r = $.extend({}, this._dimensions);
                        if (r.width > n.width && r.height > n.height) {
                            i = Fit.within(n, r);
                            var s = 1,
                                a = 1;
                            i.width < n.width && (s = n.width / i.width), i.height < n.height && (a = n.height / i.height);
                            var l = Math.max(s, a);
                            l > 1 && (i.width *= l, i.height *= l), $.each("width height".split(" "), function(e, t) {
                                i[t] = Math.round(i[t])
                            })
                        } else i = Fit.within(this._dimensions, r.width < n.width || r.height < n.height ? {
                                width: o,
                                height: o
                            } : n);
                        var u = Math.round(.5 * n.width - .5 * i.width),
                            h = Math.round(.5 * n.height - .5 * i.height);
                        this.image.removeAttr("style").css($.extend({}, i, {
                            top: h,
                            left: u
                        }))
                    }
                }
            }
        }
    });
    var UI = {
        _modes: ["fullclick", "outside", "inside"],
        _ui: !1,
        _validClickTargetSelector: [".fr-content-element", ".fr-content", ".fr-content > .fr-stroke", ".fr-content > .fr-stroke .fr-stroke-color"].join(", "),
        initialize: function(e) {
            $.each(this._modes, $.proxy(function(e, t) {
                this[t].initialize()
            }, this)), Window.element.addClass("fr-ui-inside-hidden fr-ui-fullclick-hidden")
        },
        set: function(e) {
            this._ui && (Window.element.removeClass("fr-window-ui-" + this._ui), Overlay.element.removeClass("fr-overlay-ui-" + this._ui)), Window.element.addClass("fr-window-ui-" + e), Overlay.element.addClass("fr-overlay-ui-" + e), this._enabled && this._ui && this._ui != e && (this[this._ui].disable(), this[e].enable(), UI[e].show()), this._ui = e
        },
        _onWindowResize: function() {
            Support.mobileTouch && this.show()
        },
        enable: function() {
            $.each(this._modes, $.proxy(function(e, t) {
                UI[t][t == this._ui ? "enable" : "disable"]()
            }, this)), this._enabled = !0
        },
        disable: function() {
            $.each(this._modes, $.proxy(function(e, t) {
                UI[t].disable()
            }, this)), this._enabled = !1
        },
        adjustPrevNext: function(e, t) {
            UI[this._ui].adjustPrevNext(e, t)
        },
        show: function(e, t) {
            UI[this._ui].show(e, t)
        },
        hide: function(e, t) {
            UI[this._ui].hide(e, t)
        },
        reset: function() {
            $.each(this._modes, $.proxy(function(e, t) {
                UI[t].reset()
            }, this))
        },
        update: function() {
            var e = Pages.page;
            e && this.set(e._ui)
        }
    };
    return UI.fullclick = {
        initialize: function() {
            this.build(), this._scrollLeft = -1
        },
        build: function() {
            Window._box.append(this._previous = $("<div>").addClass("fr-side fr-side-previous fr-side-previous-fullclick fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._next = $("<div>").addClass("fr-side fr-side-next fr-side-next-fullclick fr-toggle-ui").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._close = $("<div>").addClass("fr-close fr-close-fullclick").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).hide(), this._close.on("click", $.proxy(function(e) {
                e.preventDefault(), Window.hide()
            }, this)), this._previous.on("click", $.proxy(function(e) {
                Window.previous(), this._onMouseMove(e)
            }, this)), this._next.on("click", $.proxy(function(e) {
                Window.next(), this._onMouseMove(e)
            }, this))
        },
        enable: function() {
            this.bind()
        },
        disable: function() {
            this.unbind()
        },
        reset: function() {
            Window.timers.clear("ui-fullclick"), this._x = -1, this._y = -1, this._scrollLeft = -1, this.resetPrevNext(), this._onMouseLeave()
        },
        resetPrevNext: function() {
            var e = this._previous.add(this._next);
            e.stop(!0).removeAttr("style")
        },
        bind: function() {
            this._onMouseUpHandler || (this.unbind(), Window._pages.on("mouseup", ".fr-container", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), Support.mobileTouch || (Window.element.on("mouseenter", this._showHandler = $.proxy(this.show, this)).on("mouseleave", this._hideHandler = $.proxy(this.hide, this)), Window.element.on("mousemove", this._mousemoveHandler = $.proxy(function(e) {
                var t = e.pageX,
                    i = e.pageY;
                this._hoveringSideButton || i == this._y && t == this._x || (this._x = t, this._y = i, this.show(), this.startTimer())
            }, this)), Window._pages.on("mousemove", ".fr-container", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-container", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-container", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))))
        },
        unbind: function() {
            this._onMouseUpHandler && (Window._pages.off("mouseup", ".fr-container", this._onMouseUpHandler), this._onMouseUpHandler = null, this._showHandler && (Window.element.off("mouseenter", this._showHandler).off("mouseleave", this._hideHandler).off("mousemove", this._mousemoveHandler), Window._pages.off("mousemove", ".fr-container", this._onMouseMoveHandler).off("mouseleave", ".fr-container", this._onMouseLeaveHandler).off("mouseenter", ".fr-container", this._onMouseEnterHandler), Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), $(window).off("scroll", this._onScrollHandler), this._showHandler = null))
        },
        adjustPrevNext: function(e, t) {
            var i = Pages.page;
            if (!i) return void(e && e());
            var n = Window.element.is(":visible");
            n || Window.element.show();
            var o = this._previous.attr("style");
            this._previous.removeAttr("style");
            var r = parseInt(this._previous.css("margin-top"));
            this._previous.attr({
                style: o
            }), n || Window.element.hide();
            var s = i._infoHeight || 0,
                a = this._previous.add(this._next),
                l = {
                    "margin-top": r - .5 * s
                },
                u = "number" == $.type(t) ? t : Pages.page && Pages.page.view.options.effects.content.show || 0;
            this.opening && (u = 0), a.stop(!0).animate(l, u, e), this._previous[(Window.mayPrevious() ? "remove" : "add") + "Class"]("fr-side-disabled"), this._next[(Window.mayNext() ? "remove" : "add") + "Class"]("fr-side-disabled"), a[(i._total < 2 ? "add" : "remove") + "Class"]("fr-side-hidden"), e && e()
        },
        _onScroll: function() {
            this._scrollLeft = $(window).scrollLeft()
        },
        _onMouseMove: function(e) {
            if (!Support.mobileTouch) {
                var t = this._getEventSide(e),
                    i = _.String.capitalize(t),
                    n = !!t && Window["may" + i]();
                if (t != this._hoveringSide || n != this._mayClickHoveringSide) switch (this._hoveringSide = t, this._mayClickHoveringSide = n, Window._box[(n ? "add" : "remove") + "Class"]("fr-hovering-clickable"), t) {
                    case "previous":
                        Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");
                        break;
                    case "next":
                        Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous")
                }
            }
        },
        _onMouseLeave: function(e) {
            Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), this._hoveringSide = !1
        },
        _onMouseUp: function(e) {
            if (!(e.which > 1)) {
                if (1 == Pages.pages.length) return void Window.hide();
                var t = this._getEventSide(e);
                Window[t](), this._onMouseMove(e)
            }
        },
        _onMouseEnter: function(e) {
            this._onMouseMove(e)
        },
        _getEventSide: function(e) {
            var t = (this._scrollLeft > -1 ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft(), e.pageX - Window._boxPosition.left - this._scrollLeft),
                i = Window._boxDimensions.width;
            return .5 * i > t ? "previous" : "next"
        },
        _onSideMouseEnter: function(e) {
            this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(e), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)](), this.clearTimer()
        },
        _onSideMouseLeave: function(e) {
            this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1, this.startTimer()
        },
        show: function(e) {
            return this._visible ? (this.startTimer(), void("function" == $.type(e) && e())) : (this._visible = !0, this.startTimer(), Window.element.addClass("fr-visible-fullclick-ui").removeClass("fr-hidden-fullclick-ui"), Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).show(), void("function" == $.type(e) && e()))
        },
        hide: function(e) {
            var t = Pages.page && Pages.page.view.type;
            return !this._visible || t && ("youtube" == t || "vimeo" == t) ? void("function" == $.type(e) && e()) : (this._visible = !1, Window.element.removeClass("fr-visible-fullclick-ui").addClass("fr-hidden-fullclick-ui"), void("function" == $.type(e) && e()))
        },
        clearTimer: function() {
            Support.mobileTouch || Window.timers.clear("ui-fullclick")
        },
        startTimer: function() {
            Support.mobileTouch || (this.clearTimer(), Window.timers.set("ui-fullclick", $.proxy(function() {
                this.hide()
            }, this), Window.view ? Window.view.options.uiDelay : 0))
        }
    }, UI.inside = {
        initialize: function() {},
        enable: function() {
            this.bind()
        },
        disable: function() {
            this.unbind()
        },
        bind: function() {
            this._onMouseUpHandler || (this.unbind(), Window._pages.on("mouseup", ".fr-content", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), Window._pages.on("click", ".fr-content .fr-close", $.proxy(function(e) {
                e.preventDefault(), Window.hide()
            }, this)).on("click", ".fr-content .fr-side-previous", $.proxy(function(e) {
                Window.previous(), this._onMouseMove(e)
            }, this)).on("click", ".fr-content .fr-side-next", $.proxy(function(e) {
                Window.next(), this._onMouseMove(e)
            }, this)), Window.element.on("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler = $.proxy(this._delegateOverlayClose, this)), Support.mobileTouch || (Window.element.on("mouseenter", ".fr-content", this._showHandler = $.proxy(this.show, this)).on("mouseleave", ".fr-content", this._hideHandler = $.proxy(this.hide, this)), Window.element.on("mousemove", ".fr-content", this._mousemoveHandler = $.proxy(function(e) {
                var t = e.pageX,
                    i = e.pageY;
                this._hoveringSideButton || i == this._y && t == this._x || (this._x = t, this._y = i, this.show(), this.startTimer())
            }, this)), Window._pages.on("mousemove", ".fr-info, .fr-close", $.proxy(function(e) {
                e.stopPropagation(), this._onMouseLeave(e)
            }, this)), Window._pages.on("mousemove", ".fr-info", $.proxy(function(e) {
                this.clearTimer()
            }, this)), Window._pages.on("mousemove", ".fr-content", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-content", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-content", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))))
        },
        unbind: function() {
            this._onMouseUpHandler && (Window._pages.off("mouseup", ".fr-content", this._onMouseUpHandler), this._onMouseUpHandler = null, Window._pages.off("click", ".fr-content .fr-close").off("click", ".fr-content .fr-side-previous").off("click", ".fr-content .fr-side-next"), Window.element.off("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler), this._showHandler && (Window.element.off("mouseenter", ".fr-content", this._showHandler).off("mouseleave", ".fr-content", this._hideHandler).off("mousemove", ".fr-content", this._mousemoveHandler), Window._pages.off("mousemove", ".fr-info, .fr-close"), Window._pages.off("mousemove", ".fr-info"), Window._pages.off("mousemove", ".fr-content-element", this._onMouseMoveHandler).off("mouseleave", ".fr-content", this._onMouseLeaveHandler).off("mouseenter", ".fr-content", this._onMouseEnterHandler), Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), $(window).off("scroll", this._onScrollHandler), this._showHandler = null))
        },
        reset: function() {
            Window.timers.clear("ui-fullclick"), this._x = -1, this._y = -1, this._scrollLeft = -1, this._hoveringSide = !1, this._onMouseLeave()
        },
        adjustPrevNext: function(e) {
            e && e()
        },
        _onScroll: function() {
            this._scrollLeft = $(window).scrollLeft()
        },
        _delegateOverlayClose: function(e) {
            var t = Pages.page;
            t && t.view.options.overlay && !t.view.options.overlay.close || $(e.target).is(".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper") && (e.preventDefault(), e.stopPropagation(), Window.hide())
        },
        _onMouseMove: function(e) {
            if (!Support.mobileTouch) {
                var t = this._getEventSide(e),
                    i = _.String.capitalize(t),
                    n = !!t && Window["may" + i]();
                if ((1 == Pages.pages.length || Pages.page && "close" == Pages.page.view.options.onClick) && (t = !1), t != this._hoveringSide || n != this._mayClickHoveringSide)
                    if (this._hoveringSide = t, this._mayClickHoveringSide = n, t) switch (Window._box[(n ? "add" : "remove") + "Class"]("fr-hovering-clickable"), t) {
                        case "previous":
                            Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");
                            break;
                        case "next":
                            Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous")
                    } else Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next")
            }
        },
        _onMouseLeave: function(e) {
            Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), this._hoveringSide = !1
        },
        _onMouseUp: function(e) {
            if (!(e.which > 1) && $(e.target).is(UI._validClickTargetSelector)) {
                if (1 == Pages.pages.length || Pages.page && "close" == Pages.page.view.options.onClick) return void Window.hide();
                var t = this._getEventSide(e);
                Window[t](), this._onMouseMove(e)
            }
        },
        _onMouseEnter: function(e) {
            this._onMouseMove(e)
        },
        _getEventSide: function(e) {
            var t = (this._scrollLeft > -1 ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft(), e.pageX - Window._boxPosition.left - this._scrollLeft),
                i = Window._boxDimensions.width;
            return .5 * i > t ? "previous" : "next"
        },
        _onSideMouseEnter: function(e) {
            this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(e), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)](), this.clearTimer()
        },
        _onSideMouseLeave: function(e) {
            this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1, this.startTimer()
        },
        show: function(e) {
            return this._visible ? (this.startTimer(), void("function" == $.type(e) && e())) : (this._visible = !0, this.startTimer(), Window.element.addClass("fr-visible-inside-ui").removeClass("fr-hidden-inside-ui"), void("function" == $.type(e) && e()))
        },
        hide: function(e) {
            return this._visible ? (this._visible = !1, Window.element.removeClass("fr-visible-inside-ui").addClass("fr-hidden-inside-ui"), void("function" == $.type(e) && e())) : void("function" == $.type(e) && e())
        },
        clearTimer: function() {
            Support.mobileTouch || Window.timers.clear("ui-inside")
        },
        startTimer: function() {
            Support.mobileTouch || (this.clearTimer(), Window.timers.set("ui-inside", $.proxy(function() {
                this.hide()
            }, this), Window.view ? Window.view.options.uiDelay : 0))
        }
    }, UI.outside = {
        initialize: function() {
            this.build(), this._scrollLeft = -1
        },
        build: function() {
            Window._box.append(this._previous = $("<div>").addClass("fr-side fr-side-previous fr-side-previous-outside").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._next = $("<div>").addClass("fr-side fr-side-next fr-side-next-outside").append($("<div>").addClass("fr-side-button").append($("<div>").addClass("fr-side-button-background")).append($("<div>").addClass("fr-side-button-icon")))).append(this._close = $("<div>").addClass("fr-close fr-close-outside").append($("<div>").addClass("fr-close-background")).append($("<div>").addClass("fr-close-icon"))), Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).hide(), this._close.on("click", $.proxy(function(e) {
                e.preventDefault(), Window.hide()
            }, this)), this._previous.on("click", $.proxy(function(e) {
                Window.previous(), this._onMouseMove(e)
            }, this)), this._next.on("click", $.proxy(function(e) {
                Window.next(), this._onMouseMove(e)
            }, this))
        },
        enable: function() {
            this.bind()
        },
        disable: function() {
            this.unbind()
        },
        reset: function() {
            Window.timers.clear("ui-outside"), this._x = -1, this._y = -1, this._scrollLeft = -1, this._onMouseLeave()
        },
        bind: function() {
            this._onMouseUpHandler || (this.unbind(), Window.element.on("mouseup", ".fr-content", this._onMouseUpHandler = $.proxy(this._onMouseUp, this)), Window.element.on("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler = $.proxy(this._delegateOverlayClose, this)), Support.mobileTouch || (Window._pages.on("mousemove", ".fr-content", this._onMouseMoveHandler = $.proxy(this._onMouseMove, this)).on("mouseleave", ".fr-content", this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this)).on("mouseenter", ".fr-content", this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this)), Window.element.on("mouseenter", ".fr-side", this._onSideMouseEnterHandler = $.proxy(this._onSideMouseEnter, this)).on("mouseleave", ".fr-side", this._onSideMouseLeaveHandler = $.proxy(this._onSideMouseLeave, this)), $(window).on("scroll", this._onScrollHandler = $.proxy(this._onScroll, this))))
        },
        unbind: function() {
            this._onMouseUpHandler && (Window.element.off("mouseup", ".fr-content", this._onMouseUpHandler), this._onMouseUpHandler = null, Window.element.off("click", ".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper", this._delegateOverlayCloseHandler), this._onMouseMoveHandler && (Window._pages.off("mousemove", ".fr-content", this._onMouseMoveHandler).off("mouseleave", ".fr-content", this._onMouseLeaveHandler).off("mouseenter", ".fr-content", this._onMouseEnterHandler), Window.element.off("mouseenter", ".fr-side", this._onSideMouseEnterHandler).off("mouseleave", ".fr-side", this._onSideMouseLeaveHandler), $(window).off("scroll", this._onScrollHandler), this._onMouseMoveHandler = null))
        },
        adjustPrevNext: function(e, t) {
            var i = Pages.page;
            if (!i) return void(e && e());
            var n = this._previous.add(this._next);
            this._previous[(Window.mayPrevious() ? "remove" : "add") + "Class"]("fr-side-disabled"), this._next[(Window.mayNext() ? "remove" : "add") + "Class"]("fr-side-disabled"), n[(i._total < 2 ? "add" : "remove") + "Class"]("fr-side-hidden"), e && e()
        },
        _onScroll: function() {
            this._scrollLeft = $(window).scrollLeft()
        },
        _delegateOverlayClose: function(e) {
            var t = Pages.page;
            t && t.view.options.overlay && !t.view.options.overlay.close || $(e.target).is(".fr-container, .fr-thumbnails, .fr-thumbnails-wrapper") && (e.preventDefault(), e.stopPropagation(), Window.hide())
        },
        _onMouseMove: function(e) {
            if (!Support.mobileTouch) {
                var t = this._getEventSide(e),
                    i = _.String.capitalize(t),
                    n = !!t && Window["may" + i]();
                if ((1 == Pages.pages.length || Pages.page && "close" == Pages.page.view.options.onClick) && (t = !1), t != this._hoveringSide || n != this._mayClickHoveringSide)
                    if (this._hoveringSide = t, this._mayClickHoveringSide = n, t) switch (Window._box[(n ? "add" : "remove") + "Class"]("fr-hovering-clickable"), t) {
                        case "previous":
                            Window._box.addClass("fr-hovering-previous").removeClass("fr-hovering-next");
                            break;
                        case "next":
                            Window._box.addClass("fr-hovering-next").removeClass("fr-hovering-previous")
                    } else Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next")
            }
        },
        _onMouseLeave: function(e) {
            Window._box.removeClass("fr-hovering-clickable fr-hovering-previous fr-hovering-next"), this._hoveringSide = !1
        },
        _onMouseUp: function(e) {
            if (!(e.which > 1) && $(e.target).is(UI._validClickTargetSelector)) {
                if (1 == Pages.pages.length || Pages.page && "close" == Pages.page.view.options.onClick) return void Window.hide();
                var t = this._getEventSide(e);
                Window[t](), this._onMouseMove(e)
            }
        },
        _onMouseEnter: function(e) {
            this._onMouseMove(e)
        },
        _getEventSide: function(e) {
            var t = (this._scrollLeft > -1 ? this._scrollLeft : this._scrollLeft = $(window).scrollLeft(), e.pageX - Window._boxPosition.left - this._scrollLeft),
                i = Window._boxDimensions.width;
            return .5 * i > t ? "previous" : "next"
        },
        show: function() {
            Browser.IE && Browser.IE <= 7 && this._previous.add(this._next).add(this._close).show();
        },
        hide: function() {},
        _onSideMouseEnter: function(e) {
            this._hoveringSideButton = !0, this._hoveringSide = this._getEventSide(e), this._mayClickHoveringSide = Window["may" + _.String.capitalize(this._hoveringSide)]()
        },
        _onSideMouseLeave: function(e) {
            this._hoveringSideButton = !1, this._hoveringSide = !1, this._mayClickHoveringSide = !1
        },
        clearTimer: function() {}
    }, $(document).ready(function(e) {
        _Fresco.initialize()
    }), Fresco
}), $(document).ready(function() {
    $(".sc img.lazy-sc").lazyload({
        effect: "fadeIn",
        container: $(".sc")
    }), $("img.lazy").lazyload({
        effect: "fadeIn",
        container: $(".mdl-layout__content")
    })
});