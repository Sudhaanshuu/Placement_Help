/*
 * Green Coders Hackathon Project 
 * C.V. Raman Global University, Bhubaneswar, Odisha, India
 * 
 * Copyright 2024 Sudhanshu Kumar 
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *    http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 @preserve
 AgoraRTM Web SDK 1.4.4 - commit: v1.4.4-0-g3d73f979
 Copyright (C) 2018-2021 Agora Lab.
 This file is licensed under the AGORA, INC. SDK LICENSE AGREEMENT
 A copy of this license may be found at https://www.agora.io/en/sdk-license-agreement/
*/
"use strict";
! function(e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).AgoraRTM = t() }(this, (function() {
    function de(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) { return Object.getOwnPropertyDescriptor(e, t).enumerable }))), n.push.apply(n, r)
        }
        return n
    }

    function va(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? de(Object(n), !0).forEach((function(t) { m(e, t, n[t]) })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function(t) { Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t)) }))
        }
        return e
    }

    function X(e) { return (X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

    function zl(e, t, n, r, i, o, a) {
        try {
            var s = e[o](a),
                u = s.value
        } catch (e) { return void n(e) }
        s.done ? t(u) : Promise.resolve(u).then(r, i)
    }

    function K(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise((function(r, i) {
                function o(e) { zl(s, r, i, o, a, "next", e) }

                function a(e) { zl(s, r, i, o, a, "throw", e) }
                var s = e.apply(t, n);
                o(void 0)
            }))
        }
    }

    function Y(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function Al(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Ia(e, t, n) { return t && Al(e.prototype, t), n && Al(e, n), e }

    function m(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

    function ma(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ef(e, t)
    }

    function wd(e) { return (wd = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

    function ef(e, t) { return (ef = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

    function Bl() { if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }

    function Uh(e, t, n) { return (Uh = Bl() ? Reflect.construct : function(e, t, n) { var r = [null]; return r.push.apply(r, t), e = new(Function.bind.apply(e, r)), n && ef(e, n.prototype), e }).apply(null, arguments) }

    function ff(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (ff = function(e) {
            function n() { return Uh(e, arguments, wd(this).constructor) }
            if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, n)
            }
            return n.prototype = Object.create(e.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), ef(n, e)
        })(e)
    }

    function gf(e, t) {
        if (null == e) return {};
        if (null == e) var n = {};
        else {
            n = {};
            var r, i = Object.keys(e);
            for (r = 0; r < i.length; r++) {
                var o = i[r];
                0 <= t.indexOf(o) || (n[o] = e[o])
            }
        }
        if (Object.getOwnPropertySymbols)
            for (r = Object.getOwnPropertySymbols(e), o = 0; o < r.length; o++) i = r[o], 0 <= t.indexOf(i) || Object.prototype.propertyIsEnumerable.call(e, i) && (n[i] = e[i]);
        return n
    }

    function n(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

    function na(e) {
        var t = Bl();
        return function() {
            var r = wd(e);
            if (t) {
                var i = wd(this).constructor;
                r = Reflect.construct(r, arguments, i)
            } else r = r.apply(this, arguments);
            return r = !r || "object" != typeof r && "function" != typeof r ? n(this) : r
        }
    }

    function Vh(e, t, n) { return (Vh = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = wd(e));); if (e) return (t = Object.getOwnPropertyDescriptor(e, t)).get ? t.get.call(n) : t.value })(e, t, n || e) }

    function sa(e, t) {
        var n = Array.isArray(e) ? e : void 0;
        if (!n)
            if (null == (n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]))) n = void 0;
            else {
                var r, i = [],
                    o = !0,
                    a = !1;
                try { for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0); } catch (e) { a = !0; var s = e } finally { try { o || null == n.return || n.return() } finally { if (a) throw s } }
                n = i
            }
        if (!(e = n || Cl(e, t))) throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        return e
    }

    function H(e) { var t = Array.isArray(e) ? Wh(e) : void 0; if (t || (t = "undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"] ? Array.from(e) : void 0), !(e = t || Cl(e))) throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); return e }

    function Cl(e, t) { if (e) { if ("string" == typeof e) return Wh(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wh(e, t) } }

    function Wh(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function ha(e, t, n, r, i) { var o = {}; return Object.keys(r).forEach((function(e) { o[e] = r[e] })), o.enumerable = !!o.enumerable, o.configurable = !!o.configurable, ("value" in o || o.initializer) && (o.writable = !0), o = n.slice().reverse().reduce((function(n, r) { return r(e, t, n) || n }), o), i && void 0 !== o.initializer && (o.value = o.initializer ? o.initializer.call(i) : void 0, o.initializer = void 0), void 0 === o.initializer && (Object.defineProperty(e, t, o), o = null), o }

    function ab(e) { var t = { exports: {} }; return e(t, t.exports), t.exports }

    function Dl(e, t) { var n, r = 3 > arguments.length ? e : arguments[2]; return wa(e) === r ? e[t] : (n = Gb.f(e, t)) ? S(n, "value") ? n.value : void 0 === n.get ? void 0 : n.get.call(r) : ia(n = Wb(e)) ? Dl(n, t, r) : void 0 }

    function zs(e) {
        var t = e.charCodeAt(0) << 24,
            n = 0 | As(~t),
            r = 0,
            i = 0 | e.length,
            o = "";
        if (5 > n && i >= n) {
            for (t = t << n >>> 24 + n, r = 1; r < n; r = r + 1 | 0) t = t << 6 | 63 & e.charCodeAt(r);
            65535 >= t ? o += xd(t) : 1114111 >= t ? o += xd(55296 + ((t = t - 65536 | 0) >> 10) | 0, 56320 + (1023 & t) | 0) : r = 0
        }
        for (; r < i; r = r + 1 | 0) o += "�";
        return o
    }

    function El() {}

    function Bs(e) { var t = 0 | e.charCodeAt(0); if (55296 <= t && 56319 >= t) { var n = 0 | e.charCodeAt(1); if (!(n == n && 56320 <= n && 57343 >= n)) return xd(239, 191, 189); if (65535 < (t = (t - 55296 << 10) + n - 56320 + 65536 | 0)) return xd(240 | t >>> 18, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63, 128 | 63 & t) } return 127 >= t ? e : 2047 >= t ? xd(192 | t >>> 6, 128 | 63 & t) : xd(224 | t >>> 12, 128 | t >>> 6 & 63, 128 | 63 & t) }

    function Fl() {}

    function hf(e) { e || (e = {}); var t = e.ua; if (t || "undefined" == typeof navigator || (t = navigator.userAgent), t && t.headers && "string" == typeof t.headers["user-agent"] && (t = t.headers["user-agent"]), "string" != typeof t) return !1; var n = Cs.test(t) || !!e.tablet && Ds.test(t); return !n && e.tablet && e.featureDetect && navigator && 1 < navigator.maxTouchPoints && -1 !== t.indexOf("Macintosh") && -1 !== t.indexOf("Safari") && (n = !0), n }

    function fa() { fa.init.call(this) }

    function og(e) { if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + X(e)) }

    function Gl(e, t, n, r) {
        og(n);
        var i = e._events;
        if (void 0 === i) i = e._events = Object.create(null), e._eventsCount = 0;
        else { void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events); var o = i[t] }
        return void 0 === o ? (i[t] = n, ++e._eventsCount) : ("function" == typeof o ? o = i[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), 0 < (n = void 0 === e._maxListeners ? fa.defaultMaxListeners : e._maxListeners) && o.length > n && !o.warned && (o.warned = !0, (n = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit")).name = "MaxListenersExceededWarning", n.emitter = e, n.type = t, n.count = o.length, console && console.warn && console.warn(n))), e
    }

    function Es() { if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments) }

    function Hl(e, t, n) { return e = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, (t = Es.bind(e)).listener = n, e.wrapFn = t }

    function Il(e, t, n) {
        if (void 0 === (e = e._events)) return [];
        if (void 0 === (t = e[t])) return [];
        if ("function" == typeof t) return n ? [t.listener || t] : [t];
        if (n)
            for (n = Array(t.length), e = 0; e < n.length; ++e) n[e] = t[e].listener || t[e];
        else n = Jl(t, t.length);
        return n
    }

    function Kl(e) { var t = this._events; if (void 0 !== t) { if ("function" == typeof(e = t[e])) return 1; if (void 0 !== e) return e.length } return 0 }

    function Jl(e, t) { for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r]; return n }

    function Fs(e, t, n) { "function" == typeof e.on && Ll(e, "error", t, n) }

    function Ll(e, t, n, r) {
        if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
        else {
            if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + X(e));
            e.addEventListener(t, (function i(o) { r.once && e.removeEventListener(t, i), n(o) }))
        }
    }

    function Gs(e) { return e ? H(e) : Hs((function() { return [] }), (function(e, t) { return e.push(t), e })) }

    function Ml(e, t) {
        var n, r, i, o;
        return u.wrap((function(a) {
            for (;;) switch (a.prev = a.next) {
                case 0:
                    n = Nl(e)([Ol, Ol, function(e, t) { return t }])[2], r = 0;
                case 2:
                    if (!(r < t.length)) { a.next = 17; break }
                    if (i = t[r], !((o = n(Xh, i)) instanceof pg)) { a.next = 11; break }
                    if ((o = Yh(o.deref())) === Xh) { a.next = 10; break }
                    return a.next = 10, o;
                case 10:
                    return a.abrupt("return");
                case 11:
                    if (o === Xh) { a.next = 14; break }
                    return a.next = 14, o;
                case 14:
                    r++, a.next = 2;
                    break;
                case 17:
                case "end":
                    return a.stop()
            }
        }), Is)
    }

    function qg(e, t) { return null != t && "function" == typeof t[Symbol.iterator] ? Ml(qg(e), t) : function(t) { var n = t[2]; return Js(t, (function(t, r) { return n(t, e(r)) })) } }

    function Ac(e) { return Object.prototype.toString.call(e).slice(8, -1) }

    function yd(e) { return "Object" === Ac(e) && (e.constructor === Object && Object.getPrototypeOf(e) === Object.prototype) }

    function Pl(e) { var t; return (t = "Boolean" === Ac(e) || "Null" === Ac(e) || "Undefined" === Ac(e)) || (t = "Number" === Ac(e) && !isNaN(e)), t || "String" === Ac(e) || "Symbol" === Ac(e) }

    function zd(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function ee(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function fe(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }

    function jf(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new rg; ++t < n;) this.add(e[t])
    }

    function ge(e) { this.size = (this.__data__ = new sg(e)).size }

    function he(e, t, n, r, i, o) {
        var a, s = 1 & t,
            u = 2 & t,
            c = 4 & t;
        if (n && (a = i ? n(e, r, i, o) : n(e)), void 0 !== a) return a;
        if (!mb(e)) return e;
        if (r = Wa(e)) { if (a = Ks(e), !s) return Zh(e, a) } else {
            var l = kf(e),
                f = "[object Function]" == l || "[object GeneratorFunction]" == l;
            if (lf(e)) return Ql(e, s);
            if ("[object Object]" == l || "[object Arguments]" == l || f && !i) { if (a = u || f ? {} : Rl(e), !s) return u ? Ls(e, Ms(a, e)) : Ns(e, Os(a, e)) } else {
                if (!xa[l]) return i ? e : {};
                a = Ps(e, l, s)
            }
        }
        if (o || (o = new ie), i = o.get(e)) return i;
        o.set(e, a), Qs(e) ? e.forEach((function(r) { a.add(he(r, t, n, r, e, o)) })) : Rs(e) && e.forEach((function(r, i) { a.set(i, he(r, t, n, i, e, o)) })), u = c ? u ? Sl : $h : u ? mf : Ad;
        var h = r ? void 0 : u(e);
        return Ss(h || e, (function(r, i) { h && (r = e[i = r]), Tl(a, i, he(r, t, n, i, e, o)) })), a
    }

    function ai(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
        var n = function n() {
            var r = arguments,
                i = t ? t.apply(this, r) : r[0],
                o = n.cache;
            return o.has(i) ? o.get(i) : (r = e.apply(this, r), n.cache = o.set(i, r) || o, r)
        };
        return n.cache = new(ai.Cache || rg), n
    }

    function Ul(e) { if ("string" == typeof e) return e; if (Wa(e)) return je(e, Ul) + ""; if (ke(e)) return Vl ? Vl.call(e) : ""; var t = e + ""; return "0" == t && 1 / e == -Ts ? "-0" : t }

    function bi(e, t, n, r, i) {
        var o = -1,
            a = e.length;
        for (n || (n = Us), i || (i = []); ++o < a;) {
            var s = e[o];
            0 < t && n(s) ? 1 < t ? bi(s, t - 1, n, r, i) : ci(i, s) : r || (i[i.length] = s)
        }
        return i
    }

    function le(e, t, n, r, i) {
        if (e === t) t = !0;
        else if (null == e || null == t || !hc(e) && !hc(t)) t = e != e && t != t;
        else e: {
            var o = Wa(e),
                a = Wa(t),
                s = o ? "[object Array]" : kf(e),
                u = a ? "[object Array]" : kf(t),
                c = "[object Object]" == (s = "[object Arguments]" == s ? "[object Object]" : s);
            if (a = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u), (u = s == u) && lf(e)) {
                if (!lf(t)) { t = !1; break e }
                o = !0, c = !1
            }
            if (u && !c) i || (i = new ie),
            t = o || di(e) ? Wl(e, t, n, r, le, i) : Vs(e, t, s, n, r, le, i);
            else {
                if (!(1 & n) && (o = c && Xl.call(e, "__wrapped__"), s = a && Xl.call(t, "__wrapped__"), o || s)) { e = o ? e.value() : e, t = s ? t.value() : t, i || (i = new ie), t = le(e, t, n, r, i); break e }
                if (u) t: if (i || (i = new ie), o = 1 & n, s = $h(e), a = s.length, u = $h(t).length, a == u || o) {
                        for (u = a; u--;) { var l = s[u]; if (!(o ? l in t : Ws.call(t, l))) { t = !1; break t } }
                        if (c = i.get(e), l = i.get(t), c && l) t = c == t && l == e;
                        else {
                            c = !0, i.set(e, t), i.set(t, e);
                            for (var f = o; ++u < a;) {
                                var h = e[l = s[u]],
                                    p = t[l];
                                if (r) var d = o ? r(p, h, l, t, e, i) : r(h, p, l, e, t, i);
                                if (void 0 === d ? h !== p && !le(h, p, n, r, i) : !d) { c = !1; break }
                                f || (f = "constructor" == l)
                            }
                            c && !f && ((n = e.constructor) != (r = t.constructor) && "constructor" in e && "constructor" in t && !("function" == typeof n && n instanceof n && "function" == typeof r && r instanceof r) && (c = !1)), i.delete(e), i.delete(t), t = c
                        }
                    } else t = !1;
                else t = !1
            }
        }
        return t
    }

    function ya(e, t, n) { this.low = 0 | e, this.high = 0 | t, this.unsigned = !!n }

    function nb(e) { return !0 === (e && e.__isLong__) }

    function Bd(e, t) {
        var n;
        if (t) {
            if ((t = 0 <= (e >>>= 0) && 256 > e) && (n = Yl[e])) return n;
            n = za(e, 0 > (0 | e) ? -1 : 0, !0), t && (Yl[e] = n)
        } else {
            if ((t = -128 <= (e |= 0) && 128 > e) && (n = Zl[e])) return n;
            n = za(e, 0 > e ? -1 : 0, !1), t && (Zl[e] = n)
        }
        return n
    }

    function Hb(e, t) { if (isNaN(e)) return t ? Cd : Ib; if (t) { if (0 > e) return Cd; if (e >= $l) return am } else { if (e <= -bm) return ob; if (e + 1 >= bm) return cm } return 0 > e ? Hb(-e, t).neg() : za(e % me | 0, e / me | 0, t) }

    function za(e, t, n) { return new ya(e, t, n) }

    function ei(e, t, n) {
        if (0 === e.length) throw Error("empty string");
        if ("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e) return Ib;
        if ("number" == typeof t ? (n = t, t = !1) : t = !!t, 2 > (n = n || 10) || 36 < n) throw RangeError("radix");
        var r;
        if (0 < (r = e.indexOf("-"))) throw Error("interior hyphen");
        if (0 === r) return ei(e.substring(1), t, n).neg();
        r = Hb(tg(n, 8));
        for (var i = Ib, o = 0; o < e.length; o += 8) {
            var a = Math.min(8, e.length - o),
                s = parseInt(e.substring(o, o + a), n);
            8 > a ? (a = Hb(tg(n, a)), i = i.mul(a).add(Hb(s))) : i = (i = i.mul(r)).add(Hb(s))
        }
        return i.unsigned = t, i
    }

    function Xb(e, t) { return "number" == typeof e ? Hb(e, t) : "string" == typeof e ? ei(e, t) : za(e.low, e.high, "boolean" == typeof t ? t : e.unsigned) }

    function N(e, t) {
        function n() { this.constructor = e }
        fi(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function ne(e) { return "function" == typeof e }

    function oe(e) { setTimeout((function() { throw e }), 0) }

    function gi(e) { return null !== e && "object" === X(e) }

    function dm(e) { return e.reduce((function(e, t) { return e.concat(t instanceof nf ? t.errors : t) }), []) }

    function hi(e) {
        for (; e;) {
            var t = e.destination,
                n = e.isStopped;
            if (e.closed || n) return !1;
            e = t && t instanceof ja ? t : null
        }
        return !0
    }

    function Yc(e) { return e }

    function ii() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return em(e) }

    function em(e) { return 0 === e.length ? Yc : 1 === e.length ? e[0] : function(t) { return e.reduce((function(e, t) { return t(e) }), t) } }

    function fm(e) { if (e || (e = Jb.Promise || Promise), !e) throw Error("no Promise impl found"); return e }

    function gm() { return function(e) { return e.lift(new Xs(e)) } }

    function of(e) { return e ? Ys(e) : wb }

    function Ys(e) { return new Z((function(t) { return e.schedule((function() { return t.complete() })) })) }

    function Zc(e) { return e && "function" == typeof e.schedule }

    function ji(e, t) {
        return new Z((function(n) {
            var r = new Pa,
                i = 0;
            return r.add(t.schedule((function() { i === e.length ? n.complete() : (n.next(e[i++]), n.closed || r.add(this.schedule())) }))), r
        }))
    }

    function pf(e, t) { return t ? ji(e, t) : new Z(hm(e)) }

    function cb() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return Zc(t = e[e.length - 1]) ? (e.pop(), ji(e, t)) : pf(e) }

    function aa(e, t) { return new Z(t ? function(n) { return t.schedule(Zs, 0, { error: e, subscriber: n }) } : function(t) { return t.error(e) }) }

    function Zs(e) { e.subscriber.error(e.error) }

    function $s(e, t) {
        return void 0 === t && (t = 0),
            function(n) { return n.lift(new at(e, t)) }
    }

    function im(e) { return e in ki && (delete ki[e], !0) }

    function ic() {}

    function ea(e, t) { return function(n) { if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return n.lift(new bt(e, t)) } }

    function jm(e, t, n) {
        if (t) {
            if (!Zc(t)) return function() { for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i]; return jm(e, n).apply(void 0, r).pipe(ea((function(e) { return Kb(e) ? t.apply(void 0, e) : t(e) }))) };
            n = t
        }
        return function() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var i, o = this,
                a = { context: o, subject: i, callbackFunc: e, scheduler: n };
            return new Z((function(r) {
                if (n) return n.schedule(ct, 0, { args: t, subscriber: r, params: a });
                if (!i) {
                    i = new qf;
                    try {
                        e.apply(o, t.concat([function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            i.next(1 >= e.length ? e[0] : e), i.complete()
                        }]))
                    } catch (e) { hi(i) ? i.error(e) : console.warn(e) }
                }
                return i.subscribe(r)
            }))
        }
    }

    function ct(e) {
        var t = this,
            n = e.args,
            r = e.subscriber,
            i = e.params;
        e = i.callbackFunc;
        var o = i.context,
            a = i.scheduler,
            s = i.subject;
        if (!s) {
            s = i.subject = new qf, i = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                t.add(a.schedule(dt, 0, { value: 1 >= e.length ? e[0] : e, subject: s }))
            };
            try { e.apply(o, n.concat([i])) } catch (e) { s.error(e) }
        }
        this.add(s.subscribe(r))
    }

    function dt(e) {
        var t = e.subject;
        t.next(e.value), t.complete()
    }

    function km(e, t, n) {
        if (t) {
            if (!Zc(t)) return function() { for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i]; return km(e, n).apply(void 0, r).pipe(ea((function(e) { return Kb(e) ? t.apply(void 0, e) : t(e) }))) };
            n = t
        }
        return function() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var i = { subject: void 0, args: t, callbackFunc: e, scheduler: n, context: this };
            return new Z((function(r) {
                var o = i.context,
                    a = i.subject;
                if (n) return n.schedule(et, 0, { params: i, subscriber: r, context: o });
                if (!a) {
                    a = i.subject = new qf;
                    try {
                        e.apply(o, t.concat([function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            (t = e.shift()) ? a.error(t): (a.next(1 >= e.length ? e[0] : e), a.complete())
                        }]))
                    } catch (e) { hi(a) ? a.error(e) : console.warn(e) }
                }
                return a.subscribe(r)
            }))
        }
    }

    function et(e) {
        var t = this,
            n = e.params,
            r = e.subscriber;
        e = e.context;
        var i = n.callbackFunc,
            o = n.args,
            a = n.scheduler,
            s = n.subject;
        if (!s) {
            s = n.subject = new qf, n = function() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                (n = e.shift()) ? t.add(a.schedule(lm, 0, { err: n, subject: s })): t.add(a.schedule(ft, 0, { value: 1 >= e.length ? e[0] : e, subject: s }))
            };
            try { i.apply(e, o.concat([n])) } catch (e) { this.add(a.schedule(lm, 0, { err: e, subject: s })) }
        }
        this.add(s.subscribe(r))
    }

    function ft(e) {
        var t = e.subject;
        t.next(e.value), t.complete()
    }

    function lm(e) { e.subject.error(e.err) }

    function mm(e) { return !!e && "function" != typeof e.subscribe && "function" == typeof e.then }

    function li(e, t, n, r, i) { if (void 0 === i && (i = new gt(e, n, r)), !i.closed) return t instanceof Z ? t.subscribe(i) : rf(t)(i) }

    function ht(e, t) {
        return new Z((function(n) {
            var r = new Pa;
            return r.add(t.schedule((function() {
                var i = e[pe]();
                r.add(i.subscribe({ next: function(e) { r.add(t.schedule((function() { return n.next(e) }))) }, error: function(e) { r.add(t.schedule((function() { return n.error(e) }))) }, complete: function() { r.add(t.schedule((function() { return n.complete() }))) } }))
            }))), r
        }))
    }

    function it(e, t) { return new Z((function(n) { var r = new Pa; return r.add(t.schedule((function() { return e.then((function(e) { r.add(t.schedule((function() { n.next(e), r.add(t.schedule((function() { return n.complete() }))) }))) }), (function(e) { r.add(t.schedule((function() { return n.error(e) }))) })) }))), r })) }

    function jt(e, t) {
        if (!e) throw Error("Iterable cannot be null");
        return new Z((function(n) {
            var r, i = new Pa;
            return i.add((function() { r && "function" == typeof r.return && r.return() })), i.add(t.schedule((function() {
                r = e[$c](), i.add(t.schedule((function() {
                    if (!n.closed) {
                        try {
                            var e = r.next(),
                                t = e.value,
                                i = e.done
                        } catch (e) { return void n.error(e) }
                        i ? n.complete() : (n.next(t), this.schedule())
                    }
                })))
            }))), i
        }))
    }

    function nm(e, t) { if (null != e) { if (e && "function" == typeof e[pe]) return ht(e, t); if (mm(e)) return it(e, t); if (om(e)) return ji(e, t); if (e && "function" == typeof e[$c] || "string" == typeof e) return jt(e, t) } throw new TypeError((null !== e && X(e) || e) + " is not observable") }

    function Lb(e, t) { return t ? nm(e, t) : e instanceof Z ? e : new Z(rf(e)) }

    function jc(e, t) { if (!t.closed) { if (e instanceof Z) return e.subscribe(t); try { var n = rf(e)(t) } catch (e) { t.error(e) } return n } }

    function db(e, t, n) { return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof t ? function(r) { return r.pipe(db((function(n, r) { return Lb(e(n, r)).pipe(ea((function(e, i) { return t(n, e, r, i) }))) }), n)) } : ("number" == typeof t && (n = t), function(t) { return t.lift(new kt(e, n)) }) }

    function ug(e) { return void 0 === e && (e = Number.POSITIVE_INFINITY), db(Yc, e) }

    function pm() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return ug(1)(cb.apply(void 0, e)) }

    function ad(e) { return new Z((function(t) { try { var n = e() } catch (e) { return void t.error(e) } return (n ? Lb(n) : of()).subscribe(t) })) }

    function qm() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; if (1 === e.length) { var n = e[0]; if (Kb(n)) return vg(n, null); if (gi(n) && Object.getPrototypeOf(n) === Object.prototype) return vg((e = Object.keys(n)).map((function(e) { return n[e] })), e) } if ("function" == typeof e[e.length - 1]) { var r = e.pop(); return vg(e = 1 === e.length && Kb(e[0]) ? e[0] : e, null).pipe(ea((function(e) { return r.apply(void 0, e) }))) } return vg(e, null) }

    function vg(e, t) {
        return new Z((function(n) {
            var r = e.length;
            if (0 === r) n.complete();
            else
                for (var i = Array(r), o = 0, a = 0, s = function(s) {
                        var u = Lb(e[s]),
                            c = !1;
                        n.add(u.subscribe({ next: function(e) { c || (c = !0, a++), i[s] = e }, error: function(e) { return n.error(e) }, complete: function() {++o !== r && c || (a === r && n.next(t ? t.reduce((function(e, t, n) { return e[t] = i[n], e }), {}) : i), n.complete()) } }))
                    }, u = 0; u < r; u++) s(u)
        }))
    }

    function hb(e, t, n, r) { return ne(n) && (r = n, n = void 0), r ? hb(e, t, n).pipe(ea((function(e) { return Kb(e) ? r.apply(void 0, e) : r(e) }))) : new Z((function(r) { rm(e, t, (function(e) { 1 < arguments.length ? r.next(Array.prototype.slice.call(arguments)) : r.next(e) }), r, n) })) }

    function rm(e, t, n, r, i) {
        if (e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener) { e.addEventListener(t, n, i); var o = function() { return e.removeEventListener(t, n, i) } } else if (e && "function" == typeof e.on && "function" == typeof e.off) e.on(t, n), o = function() { return e.off(t, n) };
        else if (e && "function" == typeof e.addListener && "function" == typeof e.removeListener) e.addListener(t, n), o = function() { return e.removeListener(t, n) };
        else { if (!e || !e.length) throw new TypeError("Invalid event target"); for (var a = 0, s = e.length; a < s; a++) rm(e[a], t, n, r, i) }
        r.add(o)
    }

    function sm(e, t, n) { return n ? sm(e, t).pipe(ea((function(e) { return Kb(e) ? n.apply(void 0, e) : n(e) }))) : new Z((function(n) { var r = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return n.next(1 === e.length ? e[0] : e) }; try { var i = e(r) } catch (e) { return void n.error(e) } if (ne(t)) return function() { return t(r, i) } })) }

    function lt(e) {
        var t = e.subscriber,
            n = e.condition;
        if (!t.closed) { if (e.needIterate) try { e.state = e.iterate(e.state) } catch (e) { return void t.error(e) } else e.needIterate = !0; if (n) { var r = void 0; try { r = n(e.state) } catch (e) { return void t.error(e) } if (!r) return void t.complete(); if (t.closed) return } try { var i = e.resultSelector(e.state) } catch (e) { return void t.error(e) } if (!t.closed && (t.next(i), !t.closed)) return this.schedule(e) }
    }

    function mi(e) { return !Kb(e) && 0 <= e - parseFloat(e) + 1 }

    function tm(e, t) { return void 0 === e && (e = 0), void 0 === t && (t = bd), (!mi(e) || 0 > e) && (e = 0), t && "function" == typeof t.schedule || (t = bd), new Z((function(n) { return n.add(t.schedule(mt, e, { subscriber: n, counter: 0, period: e })), n })) }

    function mt(e) {
        var t = e.subscriber,
            n = e.counter;
        e = e.period, t.next(n), this.schedule({ subscriber: t, counter: n + 1, period: e }, e)
    }

    function Yb() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        t = Number.POSITIVE_INFINITY;
        var n = null,
            r = e[e.length - 1];
        return Zc(r) ? (n = e.pop(), 1 < e.length && "number" == typeof e[e.length - 1] && (t = e.pop())) : "number" == typeof r && (t = e.pop()), null === n && 1 === e.length && e[0] instanceof Z ? e[0] : ug(t)(pf(e, n))
    }

    function ni() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (0 === e.length) return wb;
        var n = e[0],
            r = e.slice(1);
        return 1 === e.length && Kb(n) ? ni.apply(void 0, n) : new Z((function(e) { var t = function() { return e.add(ni.apply(void 0, r).subscribe(e)) }; return Lb(n).subscribe({ next: function(t) { e.next(t) }, error: t, complete: t }) }))
    }

    function nt(e) {
        var t = e.keys,
            n = e.index,
            r = e.subscriber,
            i = e.subscription;
        if (e = e.obj, !r.closed)
            if (n < t.length) {
                var o = t[n];
                r.next([o, e[o]]), i.add(this.schedule({ keys: t, index: n + 1, subscriber: r, subscription: i, obj: e }))
            } else r.complete()
    }

    function ot(e, t) {
        function n() { return !n.pred.apply(n.thisArg, arguments) }
        return n.pred = e, n.thisArg = t, n
    }

    function xb(e, t) { return function(n) { return n.lift(new pt(e, t)) } }

    function Da() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (1 === e.length) {
            if (!Kb(e[0])) return e[0];
            e = e[0]
        }
        return pf(e, void 0).lift(new qt)
    }

    function rt(e) {
        var t = e.start,
            n = e.index,
            r = e.subscriber;
        n >= e.count ? r.complete() : (r.next(t), r.closed || (e.index = n + 1, e.start = t + 1, this.schedule(e)))
    }

    function Bc(e, t, n) { void 0 === e && (e = 0); var r = -1; return mi(t) ? r = 1 > Number(t) ? 1 : Number(t) : Zc(t) && (n = t), Zc(n) || (n = bd), new Z((function(t) { var i = mi(e) ? e : +e - n.now(); return n.schedule(st, i, { index: 0, period: r, subscriber: t }) })) }

    function st(e) {
        var t = e.index,
            n = e.period,
            r = e.subscriber;
        if (r.next(t), !r.closed) {
            if (-1 === n) return r.complete();
            e.index = t + 1, this.schedule(e, n)
        }
    }

    function oi() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return "function" == typeof(t = e[e.length - 1]) && e.pop(), pf(e, void 0).lift(new tt(t)) }

    function Ha(e) { return function(t) { var n = new ut(e); return t = t.lift(n), n.caught = t } }

    function pi(e, t) { return db(e, t, 1) }

    function um(e) {
        return void 0 === e && (e = null),
            function(t) { return t.lift(new vt(e)) }
    }

    function cd(e, t) { void 0 === t && (t = bd); var n = e instanceof Date && !isNaN(+e) ? +e - t.now() : Math.abs(e); return function(e) { return e.lift(new wt(n, t)) } }

    function vm(e, t) { return function(n) { return n.lift(new xt(e, t)) } }

    function Dd(e) {
        return void 0 === e && (e = yt),
            function(t) { return t.lift(new zt(e)) }
    }

    function yt() { return new wg }

    function La(e) { return function(t) { return 0 === e ? of() : t.lift(new At(e)) } }

    function wm(e, t) { return t ? function(n) { return n.pipe(wm((function(n, r) { return Lb(e(n, r)).pipe(ea((function(e, i) { return t(n, e, r, i) }))) }))) } : function(t) { return t.lift(new Bt(e)) } }

    function xg(e) { return function(t) { return t.lift(new Ct(e)) } }

    function ba(e, t) { var n = 2 <= arguments.length; return function(r) { return r.pipe(e ? xb((function(t, n) { return e(t, n, r) })) : Yc, La(1), n ? um(t) : Dd((function() { return new wg }))) } }

    function Dt() { return function(e) { return e.lift(new Et) } }

    function xm(e) { return function(t) { return 0 === e ? of() : t.lift(new Ft(e)) } }

    function sf(e) { return function(t) { return t.lift(new Gt(e)) } }

    function yg(e, t) {
        var n = !1;
        return 2 <= arguments.length && (n = !0),
            function(r) { return r.lift(new Ht(e, t, n)) }
    }

    function ym(e, t) { return 2 <= arguments.length ? function(n) { return ii(yg(e, t), xm(1), um(t))(n) } : function(t) { return ii(yg((function(t, n, r) { return e(t, n, r + 1) })), xm(1))(t) } }

    function It(e, t) { return function(n) { var r = "function" == typeof e ? e : function() { return e }; if ("function" == typeof t) return n.lift(new Jt(r, t)); var i = Object.create(n, Kt); return i.source = n, i.subjectFactory = r, i } }

    function qe(e) { return function(t) { return t.lift(new Lt(e, t)) } }

    function Mt() { return new Qa }

    function re() { return function(e) { return gm()(It(Mt)(e)) } }

    function zm(e, t, n) { var r = e && "object" === X(e) ? e : { bufferSize: e, windowTime: t, refCount: !1, scheduler: n }; return function(e) { return e.lift(Nt(r)) } }

    function Nt(e) {
        var t, n, r = e.bufferSize,
            i = void 0 === r ? Number.POSITIVE_INFINITY : r,
            o = void 0 === (r = e.windowTime) ? Number.POSITIVE_INFINITY : r,
            a = e.refCount,
            s = e.scheduler,
            u = 0,
            c = !1,
            l = !1;
        return function(e) {
            if (u++, !t || c) {
                c = !1;
                var r = (t = new se(i, o, s)).subscribe(this);
                n = e.subscribe({ next: function(e) { t.next(e) }, error: function(e) { c = !0, t.error(e) }, complete: function() { l = !0, n = void 0, t.complete() } }), l && (n = void 0)
            } else r = t.subscribe(this);
            this.add((function() { u--, r.unsubscribe(), r = void 0, n && !l && a && 0 === u && (n.unsubscribe(), t = n = void 0) }))
        }
    }

    function Cc(e, t) { return "function" == typeof t ? function(n) { return n.pipe(Cc((function(n, r) { return Lb(e(n, r)).pipe(ea((function(e, i) { return t(n, e, r, i) }))) }))) } : function(t) { return t.lift(new Ot(e)) } }

    function pb(e) { return function(t) { return t.lift(new Pt(e)) } }

    function Qt(e, t) {
        return void 0 === t && (t = !1),
            function(n) { return n.lift(new Rt(e, t)) }
    }

    function ca(e, t, n) { return function(r) { return r.lift(new St(e, t, n)) } }

    function Tt(e, t, n) {
        return void 0 === t && (t = bd), void 0 === n && (n = Ut),
            function(r) { return r.lift(new Vt(e, t, n.leading, n.trailing)) }
    }

    function Wt(e) { e.subscriber.clearThrottle() }

    function Xt(e, t, n) {
        return void 0 === n && (n = bd),
            function(r) {
                var i = e instanceof Date && !isNaN(+e),
                    o = i ? +e - n.now() : Math.abs(e);
                return r.lift(new Yt(o, i, t, n))
            }
    }

    function ib(e, t) { return void 0 === t && (t = bd), Xt(e, aa(new qb), t) }

    function Zt() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return function(t) { var n; return "function" == typeof e[e.length - 1] && (n = e.pop()), t.lift(new $t(e, n)) } }

    function Am(e, t, n, r, i) {
        e !== t && Bm(t, (function(o, a) {
            if (i || (i = new ie), mb(o)) {
                o = i;
                var s = qi(e, a),
                    u = qi(t, a),
                    c = o.get(u);
                if (c) ri(e, a, c);
                else {
                    var l = void 0 === (c = r ? r(s, u, a + "", e, t, o) : void 0);
                    if (l) {
                        var f = Wa(u),
                            h = !f && lf(u),
                            p = !f && !h && di(u);
                        c = u, f || h || p ? Wa(s) ? c = s : hc(s) && Ed(s) ? c = Zh(s) : h ? (l = !1, c = Ql(u, !0)) : p ? (l = !1, c = Cm(u, !0)) : c = [] : Dm(u) || tf(u) ? (c = s, tf(s) ? c = te(s, mf(s)) : mb(s) && !si(s) || (c = Rl(u))) : l = !1
                    }
                    l && (o.set(u, c), Am(c, u, n, r, o), o.delete(u)), ri(e, a, c)
                }
            } else void 0 === (s = r ? r(qi(e, a), o, a + "", e, t, i) : void 0) && (s = o), ri(e, a, s)
        }), mf)
    }

    function au(e) {
        var t = 1,
            n = ti;
        1 == (1 >= arguments.length ? 0 : arguments.length - 1) ? "number" == typeof(1 >= arguments.length ? void 0 : arguments[1]) ? t = 1 >= arguments.length ? void 0 : arguments[1] : n = 1 >= arguments.length ? void 0 : arguments[1] : 2 == (1 >= arguments.length ? 0 : arguments.length - 1) && (t = 1 >= arguments.length ? void 0 : arguments[1], n = 2 >= arguments.length ? void 0 : arguments[2]);
        var r = t || 1;
        return function(t) {
            return t.pipe(yg((function(t, i) {
                var o = n.now(),
                    a = o - e;
                if ((t = t.filter((function(e) { return e.until > a }))).length >= r) {
                    var s = t[t.length - 1],
                        u = t[0].until + e * Math.floor(t.length / r);
                    t.push({ delay: s.until < o ? u - o : u - s.until, until: u, value: i })
                } else t.push({ delay: 0, until: o, value: i });
                return t
            }), []), ea((function(e) { return e[e.length - 1] })), pi((function(e) { var t = cb(e.value); return e.delay ? t.pipe(cd(e.delay, n)) : t })))
        }
    }

    function bu(e, t) {
        var n = (t = void 0 === t ? { protocols: Em, makeWebSocket: Fm } : t).protocols,
            r = void 0 === n ? Em : n,
            i = void 0 === (t = t.makeWebSocket) ? Fm : t;
        return new Z((function(t) {
            var n, o = new Qa,
                a = i(e, r),
                s = !1,
                u = !1,
                c = !1,
                l = function(e) { if (n) throw s = !0, e = Error("Web socket message factory function called more than once"), t.error(e), e; return n = e.subscribe((function(e) { a.send(e) })), o };
            return a.onopen = function() { c = !0, u ? (s = !0, a.close()) : t.next(l) }, a.onmessage = function(e) { o.next(e.data) }, a.onerror = function(e) { s = !0, t.error(Error(e.message)) }, a.onclose = function(e) { s || (s = !0, u ? (t.complete(), o.complete()) : t.error(Error(1e3 === e.code ? "Normal closure" : e.reason))) },
                function() { u = !0, n && n.unsubscribe(), s || (s = !0, c && a.close()) }
        }))
    }

    function zg() { this._listeners = {} }

    function Gm(e) {
        return "undefined" != typeof Float32Array ? function() {
            function t(e, t, n) { o[0] = e, t[n] = a[0], t[n + 1] = a[1], t[n + 2] = a[2], t[n + 3] = a[3] }

            function n(e, t, n) { o[0] = e, t[n] = a[3], t[n + 1] = a[2], t[n + 2] = a[1], t[n + 3] = a[0] }

            function r(e, t) { return a[0] = e[t], a[1] = e[t + 1], a[2] = e[t + 2], a[3] = e[t + 3], o[0] }

            function i(e, t) { return a[3] = e[t], a[2] = e[t + 1], a[1] = e[t + 2], a[0] = e[t + 3], o[0] }
            var o = new Float32Array([-0]),
                a = new Uint8Array(o.buffer),
                s = 128 === a[3];
            e.writeFloatLE = s ? t : n, e.writeFloatBE = s ? n : t, e.readFloatLE = s ? r : i, e.readFloatBE = s ? i : r
        }() : function() {
            function t(e, t, n, r) {
                var i = 0 > t ? 1 : 0;
                if (i && (t = -t), 0 === t) e(0 < 1 / t ? 0 : 2147483648, n, r);
                else if (isNaN(t)) e(2143289344, n, r);
                else if (34028234663852886e22 < t) e((i << 31 | 2139095040) >>> 0, n, r);
                else if (11754943508222875e-54 > t) e((i << 31 | Math.round(t / 1401298464324817e-60)) >>> 0, n, r);
                else {
                    var o = Math.floor(Math.log(t) / Math.LN2);
                    e((i << 31 | o + 127 << 23 | 8388607 & Math.round(t * Math.pow(2, -o) * 8388608)) >>> 0, n, r)
                }
            }

            function n(e, t, n) { return n = e(t, n), e = 2 * (n >> 31) + 1, t = n >>> 23 & 255, n &= 8388607, 255 === t ? n ? NaN : 1 / 0 * e : 0 === t ? 1401298464324817e-60 * e * n : e * Math.pow(2, t - 150) * (n + 8388608) }
            e.writeFloatLE = t.bind(null, Hm), e.writeFloatBE = t.bind(null, Im), e.readFloatLE = n.bind(null, Jm), e.readFloatBE = n.bind(null, Km)
        }(), "undefined" != typeof Float64Array ? function() {
            function t(e, t, n) { o[0] = e, t[n] = a[0], t[n + 1] = a[1], t[n + 2] = a[2], t[n + 3] = a[3], t[n + 4] = a[4], t[n + 5] = a[5], t[n + 6] = a[6], t[n + 7] = a[7] }

            function n(e, t, n) { o[0] = e, t[n] = a[7], t[n + 1] = a[6], t[n + 2] = a[5], t[n + 3] = a[4], t[n + 4] = a[3], t[n + 5] = a[2], t[n + 6] = a[1], t[n + 7] = a[0] }

            function r(e, t) { return a[0] = e[t], a[1] = e[t + 1], a[2] = e[t + 2], a[3] = e[t + 3], a[4] = e[t + 4], a[5] = e[t + 5], a[6] = e[t + 6], a[7] = e[t + 7], o[0] }

            function i(e, t) { return a[7] = e[t], a[6] = e[t + 1], a[5] = e[t + 2], a[4] = e[t + 3], a[3] = e[t + 4], a[2] = e[t + 5], a[1] = e[t + 6], a[0] = e[t + 7], o[0] }
            var o = new Float64Array([-0]),
                a = new Uint8Array(o.buffer),
                s = 128 === a[7];
            e.writeDoubleLE = s ? t : n, e.writeDoubleBE = s ? n : t, e.readDoubleLE = s ? r : i, e.readDoubleBE = s ? i : r
        }() : function() {
            function t(e, t, n, r, i, o) {
                var a = 0 > r ? 1 : 0;
                if (a && (r = -r), 0 === r) e(0, i, o + t), e(0 < 1 / r ? 0 : 2147483648, i, o + n);
                else if (isNaN(r)) e(0, i, o + t), e(2146959360, i, o + n);
                else if (17976931348623157e292 < r) e(0, i, o + t), e((a << 31 | 2146435072) >>> 0, i, o + n);
                else if (22250738585072014e-324 > r) e((r /= 5e-324) >>> 0, i, o + t), e((a << 31 | r / 4294967296) >>> 0, i, o + n);
                else {
                    var s = Math.floor(Math.log(r) / Math.LN2);
                    1024 === s && (s = 1023), e(4503599627370496 * (r *= Math.pow(2, -s)) >>> 0, i, o + t), e((a << 31 | s + 1023 << 20 | 1048576 * r & 1048575) >>> 0, i, o + n)
                }
            }

            function n(e, t, n, r, i) { return t = e(r, i + t), r = e(r, i + n), e = 2 * (r >> 31) + 1, t = 4294967296 * (1048575 & r) + t, 2047 === (n = r >>> 20 & 2047) ? t ? NaN : 1 / 0 * e : 0 === n ? 5e-324 * e * t : e * Math.pow(2, n - 1075) * (t + 4503599627370496) }
            e.writeDoubleLE = t.bind(null, Hm, 0, 4), e.writeDoubleBE = t.bind(null, Im, 4, 0), e.readDoubleLE = n.bind(null, Jm, 0, 4), e.readDoubleBE = n.bind(null, Km, 4, 0)
        }(), e
    }

    function Hm(e, t, n) { t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24 }

    function Im(e, t, n) { t[n] = e >>> 24, t[n + 1] = e >>> 16 & 255, t[n + 2] = e >>> 8 & 255, t[n + 3] = 255 & e }

    function Jm(e, t) { return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0 }

    function Km(e, t) { return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0 }

    function Xa(e, t) { this.lo = e >>> 0, this.hi = t >>> 0 }

    function uf(e, t, n) { this.fn = e, this.len = t, this.next = void 0, this.val = n }

    function ui() {}

    function cu(e) { this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states }

    function ka() { this.len = 0, this.tail = this.head = new uf(ui, 0, 0), this.states = null }

    function vi(e, t, n) { t[n] = 255 & e }

    function wi(e, t) { this.len = e, this.next = void 0, this.val = t }

    function xi(e, t, n) {
        for (; e.hi;) t[n++] = 127 & e.lo | 128, e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0, e.hi >>>= 7;
        for (; 127 < e.lo;) t[n++] = 127 & e.lo | 128, e.lo >>>= 7;
        t[n++] = e.lo
    }

    function yi(e, t, n) { t[n] = 255 & e, t[n + 1] = e >>> 8 & 255, t[n + 2] = e >>> 16 & 255, t[n + 3] = e >>> 24 }

    function kc() { zi.call(this) }

    function du(e, t, n) { 40 > e.length ? W.utf8.write(e, t, n) : t.utf8Write ? t.utf8Write(e, n) : t.write(e, n) }

    function Zb(e, t) { return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len) }

    function Ma(e) { this.buf = e, this.pos = 0, this.len = e.length }

    function Ai() {
        var e = new Lm(0, 0),
            t = 0;
        if (!(4 < this.len - this.pos)) { for (; 3 > t; ++t) { if (this.pos >= this.len) throw Zb(this); if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, 128 > this.buf[this.pos++]) return e } return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e }
        for (; 4 > t; ++t)
            if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, 128 > this.buf[this.pos++]) return e;
        if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, 128 > this.buf[this.pos++]) return e;
        if (t = 0, 4 < this.len - this.pos) {
            for (; 5 > t; ++t)
                if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, 128 > this.buf[this.pos++]) return e
        } else
            for (; 5 > t; ++t) { if (this.pos >= this.len) throw Zb(this); if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, 128 > this.buf[this.pos++]) return e }
        throw Error("invalid varint encoding")
    }

    function Ag(e, t) { return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0 }

    function Mm() { if (this.pos + 8 > this.len) throw Zb(this, 8); return new Lm(Ag(this.buf, this.pos += 4), Ag(this.buf, this.pos += 4)) }

    function Fd(e) { Bi.call(this, e) }

    function vf(e, t, n) {
        if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
        W.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = !!t, this.responseDelimited = !!n
    }

    function Aa(e) { return "string" == typeof e && /^[\s\w!#$%&()+,.:;<=>?@[\]^{|}~-]{1,64}$/.test(e) && "null" !== e }

    function Nm(e) { try { var t = e.split(".").map((function(e) { return Number(e) })) } catch (e) { return !1 } if (4 !== t.length || 0 === t[0]) return !1; for (e = 0; e < t.length; e++) { var n = t[e]; if (!Number.isInteger(n) || 0 > n || 255 < n) return !1 } return !0 }

    function Om(e, t) { if (!Array.isArray(t) || 0 === t.length || 32 < t.length || t.some((function(e) { return 0 === e.length || 32 < e.length }))) throw new I("arguments is not valid", Ka); if (!Aa(e)) throw new I("ID is invalid", Ka) }

    function wf(e) {
        var t = e.attributes,
            n = e.attrSizeMap,
            r = e.maxAttrsCount,
            i = e.maxAttrValueSize;
        if (e = e.maxTotalSize, !yd(t)) throw new I("attributes must be an object", Ka);
        if (Object.keys(t).length > r) throw new jb("Exceed the limit of ".concat(r, " attributes"), ue);
        if (0 === Object.keys(t).length) throw new I("The attributes is an empty object", Ka);
        var o = 0,
            a = 0;
        for (t = Object.entries(t); a < t.length; a++) {
            var s = sa(t[a], 2),
                u = s[1];
            s = new Blob([s[0]]).size;
            var c = new Blob([u]).size;
            if (0 === s || 32 < s) throw new I("Invalid attribute key", Ka);
            if (c > i) throw new jb("Invalid attribute value, over the limit of ".concat(i, " bytes"), ue);
            if ("string" != typeof u || 0 === u.length) throw new I("Invalid attribute value", Ka);
            o += s, o += c
        }
        if (o > e) throw new jb("The attributes size overflow", ue);
        if (void 0 !== n) {
            if (Object.keys(n).length > r) throw new jb("Exceed the limit of ".concat(r, " attributes"), ue);
            for (o = r = 0, n = Object.entries(n); o < n.length; o++) {
                if (a = (t = sa(n[o], 2))[1], 0 === (t = new Blob([t[0]]).size)) throw new I("Invalid attribute key", Ka);
                if (a > i) throw new jb("Invalid attribute value, over the limit of ".concat(i, " bytes"), ue);
                r += t, r += a
            }
            if (r > e) throw new jb("The attributes size overflow", ue)
        }
    }

    function Bg(e, t) { return Math.floor(Math.random() * (Math.floor(t) - Math.ceil(e) + 1)) + e }

    function Cg() {
        var e = Bg(0, 4294967295),
            t = Bg(1, 4294967295);
        return new V(e, t, !0)
    }

    function Ya(e) { return e.toString().padEnd(32, "0") }

    function Pm(e, t) { return new TypeError("Unexpected ".concat(e, ": ").concat(t)) }

    function Qm(e, t) { return e = e.split(".").map((function(e) { return Number(e) })), t = t.split(".").map((function(e) { return Number(e) })), Math.sqrt(1e3 * Math.pow(e[0] - t[0], 2) + 100 * Math.pow(e[1] - t[1], 2) + 10 * Math.pow(e[2] - t[2], 2) + 1 * Math.pow(e[3] - t[3], 2)) }

    function Rm(e) { return e.lessThanOrEqual(Number.MAX_SAFE_INTEGER) ? e.toNumber() : e.toString() }

    function Ci(e, t) { t = "".concat(e).concat(t || ""); var n = Sm.get(t) || 1; return Sm.set(t, n + 1), "".concat(e).concat(n) }

    function Tm(e, t) { var n = "number" == typeof t ? t : void 0 !== t && "string" != typeof t ? t.code : void 0; return t = "number" != typeof t && "string" != typeof t && void 0 !== t && void 0 !== t.serverCode ? t.serverCode : void 0, n = "".concat(void 0 !== n ? " Error Code ".concat(n) : "").concat(void 0 !== t ? ", server Code ".concat(t) : ""), e = "string" == typeof e && e ? Dg(e) : Array.isArray(e) && "string" == typeof e[0] && e[0] ? Dg(Um.apply(void 0, [e[0]].concat(H(e.slice(1))))) : "", "".concat("" === n ? "" : "".concat(n, " - ")).concat(e) }

    function Vm(e) { return Di.apply(this, arguments) }

    function Di() {
        return (Di = K(u.mark((function e(t) {
            return u.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.abrupt("return", new Promise((function(e) { setTimeout((function() { e() }), t) })));
                    case 1:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function Wm(e) { return e instanceof Blob || "[object Blob]" === Object.prototype.toString.call(e) }

    function Eg(e) {
        var t = 255 & e,
            n = e >> 8 & 255,
            r = e >> 16 & 255;
        return "".concat(e >> 24 & 255, ".").concat(r, ".").concat(n, ".").concat(t)
    }

    function ve(e, t, n) { return Ei.apply(this, arguments) }

    function Ei() {
        return (Ei = K(u.mark((function e(t, n, r) {
            var i, o, a, s, c, l, f, h, p, d, v, b, g, y, m, E, w, _, O, A, I, k, T, R, N, S;
            return u.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (i = n.body, o = n.headers, a = void 0 === o ? {} : o, s = n.timeout, c = void 0 === s ? 1e4 : s, l = n.signal, f = n.withCredentials, h = void 0 !== f && f, p = (r || {}).useBinaryResponse, d = void 0 !== p && p, (v = new XMLHttpRequest).open("POST", t, !0), v.responseType = d ? "arraybuffer" : "text", v.withCredentials = h, v.timeout = c, b = i instanceof FormData, g = i instanceof Uint8Array, !(1 < (y = Object.keys(a).filter((function(e) { return "content-type" === e.toLowerCase() }))).length)) { e.next = 14; break }
                        throw new RangeError("multiple content-type");
                    case 14:
                        0 === y.length && (g ? a["Content-Type"] = "application/octet-stream" : b || (a["Content-Type"] = "application/json"));
                    case 15:
                        if ("setRequestHeader" in v) { e.next = 46; break }
                        return v.abort(), e.next = 19, fetch(t, { body: b || g ? i : JSON.stringify(i), cache: "no-cache", credentials: h ? "include" : "same-origin", headers: a, method: "POST", mode: "cors", referrer: "no-referrer", signal: l });
                    case 19:
                        if (m = e.sent, !(200 <= (E = m.status) && 300 > E || 304 === E)) { e.next = 31; break }
                        if (!d) { e.next = 27; break }
                        return e.next = 25, m.arrayBuffer();
                    case 25:
                        return w = e.sent, e.abrupt("return", { status: E, responseData: w });
                    case 27:
                        return e.next = 29, m.text();
                    case 29:
                        return _ = e.sent, e.abrupt("return", { status: E, responseText: _ });
                    case 31:
                        return O = new da(["Post XHR failure, status %d", E]), e.prev = 32, e.next = 35, m.text();
                    case 35:
                        throw A = e.sent, O.statusCode = E, O.message = A || "Request failed, status ".concat(E), O;
                    case 41:
                        throw e.prev = 41, e.t0 = e.catch(32), O.statusCode = E, O.message = "Request failed, status ".concat(E), O;
                    case 46:
                        if (0 !== Object.keys(a).length)
                            for (I = 0, k = Object.entries(a); I < k.length; I++) T = sa(k[I], 2), R = T[0], N = T[1], v.setRequestHeader(R, N);
                        return void 0 !== l && (S = function e() { v.abort(), l.removeEventListener("abort", e) }, l.addEventListener("abort", S)), b || g ? v.send(i) : v.send(JSON.stringify(i)), e.abrupt("return", new Promise((function(e, t) {
                            v.onload = function() {
                                var n = v.status;
                                if (200 <= n && 300 > n || 304 === n) e(d ? { status: n, responseData: v.response } : { status: n, responseText: v.responseText });
                                else {
                                    var r = new da(["Post XHR failure, status %d", n]);
                                    r.statusCode = n, r.message = v.response || "Request failed, status ".concat(v.status), t(r)
                                }
                            }, v.ontimeout = function(e) { t(new eb(["XHR request timed out after %d ms", c], { originalError: e })) }, v.onerror = function() {
                                var e = new da(["Post XHR failure, status %d", v.status]);
                                e.statusCode = v.status, e.message = v.response || "Request failed, status ".concat(v.status), t(e)
                            }, v.onabort = function() {
                                try { t(new DOMException("The request aborted.", "AbortError")) } catch (n) {
                                    var e = Error("The request aborted.");
                                    e.name = "AbortError", t(e)
                                }
                            }
                        })));
                    case 50:
                    case "end":
                        return e.stop()
                }
            }), e, null, [
                [32, 41]
            ])
        })))).apply(this, arguments)
    }

    function Ym(e) { return Ji.apply(this, arguments) }

    function Ji() {
        return (Ji = K(u.mark((function e(t) {
            var n;
            return u.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return (n = new Image).src = t, e.abrupt("return", new Promise((function(e, t) { n.onload = function() { e({ width: n.width, height: n.height }) }, n.onerror = t })));
                    case 3:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function hu(e, t) { return Ki.apply(this, arguments) }

    function Ki() {
        return (Ki = K(u.mark((function e(t, n) {
            var r, i, o, a, s, c, l, f, h, p;
            return u.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (r = t.thumbnailHeight, i = void 0 === r ? 0 : r, o = t.thumbnailWidth, a = void 0 === o ? 0 : o, s = t.width, c = void 0 === s ? 0 : s, l = t.height, f = void 0 === l ? 0 : l, h = t.thumbnail, p = [], "number" == typeof i && "number" == typeof a && "number" == typeof c && "number" == typeof f) { e.next = 5; break }
                        throw new I("Invalid message params", yf);
                    case 5:
                        return 0 >= c && 0 >= f && p.push(Ym(Zm(n)).then((function(e) { c = e.width, f = e.height }))), 0 >= a && 0 >= i && void 0 !== h && p.push(Li(h).then(function() {
                            var e = K(u.mark((function e(t) {
                                var n;
                                return u.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Ym(Zm(t));
                                        case 2:
                                            n = e.sent, a = n.width, i = n.height;
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }())), e.next = 9, Promise.all(p).catch((function() {}));
                    case 9:
                        return e.abrupt("return", { width: c, height: f, thumbnailWidth: a, thumbnailHeight: i });
                    case 10:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function $m(e, t) {
        if (!yd(e)) throw new I("message object is not a plain object", t);
        if (void 0 === e.messageType)
            if (e.rawMessage instanceof Uint8Array) { if (e.messageType = "RAW", void 0 !== e.text) throw new I("Raw messages cannot have text property. Use description instead", t) } else { if ("string" != typeof e.text) throw new I("messageType is undefined", t); if (e.messageType = "TEXT", void 0 !== e.rawMessage) throw new I("Text messages cannot have rawMessage property", t) }
    }

    function Hg(e) { return Mi.apply(this, arguments) }

    function Mi() {
        return (Mi = K(u.mark((function e(t) {
            var n, r, i, o, a, s, c, l, f, h, p, d, v, b, g, y, m, E, w, _, O;
            return u.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        if (n = t.message, r = t.peerId, i = t.toPeer, o = t.session, a = t.errorCodes, s = t.diff, c = t.logger, l = t.options, void 0 !== o) { e.next = 3; break }
                        throw new L("The client is not logged in. Cannot do the operation", a.NOT_LOGGED_IN);
                    case 3:
                        if (f = !1, "TEXT" !== n.messageType || !n.text.startsWith("AgoraRTMLegacyEndcallCompatibleMessagePrefix") || !i) { e.next = 11; break }
                        if (h = n.text.split("_"), p = sa(h, 3), d = p[0], v = p[1], void 0 !== p[2] && Aa(v) && "AgoraRTMLegacyEndcallCompatibleMessagePrefix" === d) { e.next = 10; break }
                        throw new I("Message is not valid", we);
                    case 10:
                        f = !0;
                    case 11:
                        if (b = Date.now(), g = o.messageSentTimes.length - 1, !((y = o.messageSentTimes[g]) && y + 3e3 < b)) { e.next = 18; break }
                        o.messageSentTimes = [b], e.next = 29;
                        break;
                    case 18:
                        m = g;
                    case 19:
                        if (!(0 <= m)) { e.next = 28; break }
                        if (!(o.messageSentTimes[m] + 3e3 < b)) { e.next = 23; break }
                        return o.messageSentTimes = o.messageSentTimes.slice(m + 1, g + 1), e.abrupt("break", 28);
                    case 23:
                        if (!(180 <= g - m + 1)) { e.next = 25; break }
                        throw new jb("Message sent failed, exceeded the 180 message in 3 seconds", a.TOO_OFTEN);
                    case 25:
                        m--, e.next = 19;
                        break;
                    case 28:
                        o.messageSentTimes.push(b);
                    case 29:
                        e.t0 = n.messageType, e.next = "TEXT" === e.t0 ? 32 : "RAW" === e.t0 ? 37 : "FILE" === e.t0 || "IMAGE" === e.t0 ? 39 : 40;
                        break;
                    case 32:
                        if (!f) { e.next = 36; break }
                        return E = n.text.split("_"), w = sa(E, 3), _ = w[1], O = w[2], c.info("[rtm-API] EndCall message send api is called"), e.abrupt("return", o.sendInvitationMessage({ peerId: r, type: "CallCancel", extra: O, channelId: _, callId: "0" }));
                    case 36:
                        return e.abrupt("return", o.sendTextMessage(n.text, r, i, l, 1e4 - s));
                    case 37:
                        return void 0 === n.description && (n.description = ""), e.abrupt("return", o.sendRawMessage(n.rawMessage, n.description, r, i, l, 1e4 - s));
                    case 39:
                        return e.abrupt("return", o.sendMediaMessage(n.messageType, n, r, i, l, 1e4 - s));
                    case 40:
                        throw new I("Invalid message type", we);
                    case 41:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function iu(e) {
        var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
            n = e.replace(/(https?:\/\/)?(www.)?/i, "");
        return t || (n = n.split(".").slice(e.length - 2).join(".")), -1 !== n.indexOf("/") ? n.split("/")[0] : n
    }

    function pa(e) {
        if ("string" != typeof e) return "[Sensitive Info]";
        var t = Math.floor(.7 * e.length),
            n = e.length;
        return an(e, t, n, "*".repeat(n - t))
    }

    function bn(e, t, n) {
        function r(i) {
            if (void 0 === e) return e;
            if (Pl(i)) return i;
            if (Array.isArray(i)) return i.map(r);
            var o = {},
                a = 0;
            for (i = Ig(i); a < i.length; a++) {
                var s = sa(i[a], 2),
                    u = s[0];
                if ("string" == typeof(s = s[1]) && n.includes(u)) { o[u] = "string" == typeof s ? pa(s) : "[Sensitive Info]"; break }
                t.includes(u) ? o[u] = "[Hidden Info]" : o[u] = null == s ? s : n.includes(u) ? "[Sensitive Info]" : r(s)
            }
            return o
        }
        return Array.isArray(e) ? e.map(r) : r(e)
    }

    function cn(e) { return Object.getOwnPropertyNames(e).forEach((function(t) { "object" == X(t = e[t]) && null !== t && cn(t) })), Object.freeze(e) }

    function qa(e) { return new TextDecoder("utf-8").decode(e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)) }

    function Jg(e) { return (new TextEncoder).encode(e).length }

    function dn() {
        for (var e = 0, t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        for (t = 0; t < n.length; t++) e += n[t].length;
        for (e = new Uint8Array(e), r = t = 0; r < n.length; r++) {
            var i = n[r];
            e.set(i, t), t += i.length
        }
        return e
    }

    function xe(e, t, n) {
        var r = e.match(/([^?#]+)(\?[^#]*)?(#.*)?/);
        if (e = null == r ? void 0 : r[1], r = null == r ? void 0 : r[2]) {
            var i;
            for (r = r.substr(1).split("&"), i = 0; i < r.length; i++)
                if (r[i].split("=")[0] == t) { r[i] = t + "=" + encodeURIComponent(n); break }
            return i == r.length && r.push(t + "=" + encodeURIComponent(n)), e + "?" + r.join("&")
        }
        return e + "?" + t + "=" + encodeURIComponent(n)
    }

    function Li(e) {
        return new Promise((function(t, n) {
            var r = new FileReader;
            r.onloadend = function() {
                var e = r.result || new ArrayBuffer(0);
                t(e)
            }, r.onerror = n, r.readAsArrayBuffer(e)
        }))
    }

    function ju(e, t) {
        e = e = [e], "string" == typeof(t = t || {}) && (t = { type: t });
        try { var n = new Blob(e, t) } catch (i) {
            if ("TypeError" !== i.name) throw i;
            n = new("undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : WebKitBlobBuilder);
            for (var r = 0; r < e.length; r += 1) n.append(e[r]);
            n = n.getBlob(t.type)
        }
        return n
    }

    function an(e, t, n, r) { return "string" != typeof e ? "[Sensitive Info]" : e.substring(0, t) + r + e.substring(n) }

    function en(e) {
        var t = [];
        return function e(n) {
            if (null === n || "object" !== X(n)) return n;
            if (-1 !== t.indexOf(n)) return "[Circular]";
            if (t.push(n), "function" == typeof n.toJSON) try { var r = e(n.toJSON()); return t.pop(), r } catch (e) { return "[Throws: " + (e ? e.message : "?") + "]" }
            return Array.isArray(n) ? (r = n.map(e), t.pop(), r) : (r = Object.keys(n).reduce((function(t, r) {
                e: {
                    if (ku.call(n, r)) try { var i = n[r]; break e } catch (e) { i = "[Throws: " + (e ? e.message : "?") + "]"; break e }
                    i = n[r]
                }
                return t[r] = e(i),
                t
            }), {}), t.pop(), r)
        }(e)
    }

    function lu(e) {
        if (!(100 < (e = String(e)).length) && (e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e))) {
            var t = parseFloat(e[1]);
            switch ((e[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return 315576e5 * t;
                case "weeks":
                case "week":
                case "w":
                    return 6048e5 * t;
                case "days":
                case "day":
                case "d":
                    return 864e5 * t;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return 36e5 * t;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return 6e4 * t;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return 1e3 * t;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return t
            }
        }
    }

    function Kg(e, t, n, r) { return Math.round(e / n) + " " + r + (t >= 1.5 * n ? "s" : "") }

    function mu(e) {
        var t = e.areas,
            n = e.excludedArea;
        if (1 === t.length && t[0] === F.GLOBAL && n === F.CHINA) return ye([F.OVERSEA]);
        if (t.includes(F.GLOBAL)) { if (e = zf(Lg).filter((function(e) { return e !== F.GLOBAL && e !== F.OVERSEA })), n in Af) { t = Af[n]; var r = [].concat(H(null != t ? t : []), [n]); return ye(e.filter((function(e) { return !r.includes(e) }))) } if (fn(n)) { var i = nu(n); return ye(e.filter((function(e) { return e !== n && e !== i }))) } }
        if (fn(n) || n in Af) return ye(t);
        throw new I("Invalid excludedArea area config")
    }

    function Na(e, t, n) {
        void 0 === n && (n = Object.getOwnPropertyDescriptor(e, t));
        var r = n.value;
        return n.value = function() {
            for (var e = this, n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            this.invokeTracker.apply(this, ["%s: ".concat(0 < i.length ? "%s with args: ".concat(i.map((function() { return "%o" }))) : "%s"), this.name, t].concat(H(i.map(ze))));
            try { var a = r.apply(this, i) } catch (e) { throw this.logError.apply(this, ["".concat(void 0 !== e.code ? "Error Code ".concat(e.code, ": ") : "", "%s failed").concat(0 < i.length ? " with args: ".concat(i.map((function() { return "%o" }))) : ""), t].concat(H(i.map(ze)))), e.originalError && this.logError(e.originalError), this.errorTracker(e), e }
            var s = Date.now();
            return K(u.mark((function n() {
                var r, o;
                return u.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, n.next = 3, a;
                        case 3:
                            r = n.sent, n.next = 12;
                            break;
                        case 6:
                            return n.prev = 6, n.t0 = n.catch(0), e.logError.apply(e, ["".concat(void 0 !== n.t0.code ? "Error Code ".concat(n.t0.code, ": ") : "", "%s failed").concat(0 < i.length ? " with args: ".concat(i.map((function() { return "%o" }))) : ""), t].concat(H(i.map(ze)))), n.t0.originalError && e.logError(n.t0.originalError), e.errorTracker(n.t0), n.abrupt("return");
                        case 12:
                            r !== a ? void 0 === r ? e.resultTracker("%s promise resolves after %dms", t, Date.now() - s) : e.resultTracker("%s promise resolves after %dms, result is %o", t, Date.now() - s, ze(r)) : "Object" !== Ac(r) || yd(r) ? e.resultTracker("%s result is %o", t, ze(r)) : e.resultTracker("%s result is %s", t, r.name || (null === (o = r.constructor) || void 0 === o ? void 0 : o.name));
                        case 13:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [0, 6]
                ])
            })))(), a
        }, n
    }

    function Ob(e, t, n) {
        void 0 === n && (n = Object.getOwnPropertyDescriptor(e, t));
        var r = n.value;
        return n.value = function() {
            for (var e = this, n = arguments.length, i = Array(n), o = 0; o < n; o++) i[o] = arguments[o];
            this.invokeTracker.apply(this, ["%s: ".concat(0 < i.length ? "%s with args: ".concat(i.map((function() { return "%o" }))) : "%s"), this.name, t].concat(i));
            try { var a = r.apply(this, i) } catch (e) { throw this.logError.apply(this, ["".concat(void 0 !== e.code ? "Error Code ".concat(e.code, ": ") : "", "%s failed").concat(0 < i.length ? " with args: ".concat(i.map((function() { return "%o" }))) : ""), t].concat(i)), e.originalError && this.logError(e.originalError), this.errorTracker(e), e }
            var s = Date.now();
            return K(u.mark((function n() {
                var r, o;
                return u.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return n.prev = 0, n.next = 3, a;
                        case 3:
                            r = n.sent, n.next = 12;
                            break;
                        case 6:
                            return n.prev = 6, n.t0 = n.catch(0), e.logError.apply(e, ["".concat(void 0 !== n.t0.code ? "Error Code ".concat(n.t0.code, ": ") : "", "%s failed").concat(0 < i.length ? " with args: ".concat(i.map((function() { return "%o" }))) : ""), t].concat(i)), n.t0.originalError && e.logError(n.t0.originalError), e.errorTracker(n.t0), n.abrupt("return");
                        case 12:
                            r !== a ? void 0 === r ? e.resultTracker("%s promise resolves after %dms", t, Date.now() - s) : e.resultTracker("%s promise resolves after %dms, result is %o", t, Date.now() - s, r) : "Object" !== Ac(r) || yd(r) ? e.resultTracker("%s result is %o", t, r) : e.resultTracker("%s result is %s", t, r.name || (null === (o = r.constructor) || void 0 === o ? void 0 : o.name));
                        case 13:
                        case "end":
                            return n.stop()
                    }
                }), n, null, [
                    [0, 6]
                ])
            })))(), a
        }, n
    }

    function ou(e, t) { var n = "".concat(e, "Uri"); if ("number" != typeof(n = Ni[n]) || 0 === n) throw new TypeError("Got Unknown URI Name"); return t = new(e = gn[e])(t), t = e.encode(t).finish(), new pu({ uri: n, data: t }) }

    function hn(e, t) { return "".concat(e.split(".").join("-"), ".edge.").concat(t ? "sd-rtn.com" : "agora.io") }

    function fb(e, t, n) { return Oi.apply(this, arguments) }

    function Oi() {
        return (Oi = K(u.mark((function e(t, n, r) {
            var i, o;
            return u.wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        e.next = 2;
                        break;
                    case 2:
                        return i = qu[t].encode(n).finish(), o = function() {
                            var e = K(u.mark((function e(n) {
                                var a, s, c, l = arguments;
                                return u.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(3 < (s = 1 < l.length && void 0 !== l[1] ? l[1] : 0))) { e.next = 3; break }
                                            return e.abrupt("return");
                                        case 3:
                                            return c = xe(c = r ? "https://".concat(null !== (a = null == O ? void 0 : O.PROXY_NGINX[0]) && void 0 !== a ? a : "webrtc-cloud-proxy.sd-rtn.com", "/rs/?h=").concat(n, "&p=6443&d=events/proto-raw") : "https://".concat(n, ":6443/events/proto-raw"), "sentTs", Math.ceil(Date.now() / 1e3).toString()), c = xe(c, "id", ru[t].toString()), e.next = 8, ve(c, { body: i, timeout: 2e4, headers: { "Content-Type": "application/octet-stream" } }).catch((function(e) { return o(n, s + 1) }));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) { return e.apply(this, arguments) }
                        }(), e.prev = 4, e.next = 7, o((null == O ? void 0 : O.EVENT_REPORT_DOMAIN[0]) || "webcollector-rtm.agora.io");
                    case 7:
                        e.next = 13;
                        break;
                    case 9:
                        return e.prev = 9, e.t0 = e.catch(4), e.next = 13, o(O && jn(1 < (null == O ? void 0 : O.EVENT_REPORT_DOMAIN.length) ? null == O ? void 0 : O.EVENT_REPORT_DOMAIN.slice(1) : null == O ? void 0 : O.EVENT_REPORT_DOMAIN) || "rtm.statscollector.sd-rtn.com");
                    case 13:
                    case "end":
                        return e.stop()
                }
            }), e, null, [
                [4, 9]
            ])
        })))).apply(this, arguments)
    }

    function gb(e) { return void 0 === e ? V.fromNumber(0) : V.fromNumber(Date.now() - e) }

    function su(e) { return btoa(String.fromCharCode.apply({}, e.replace(/\r|\n/g, "").replace(/([\dA-Fa-f]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").map((function(e) { return parseInt(e, 16) })))).replace(/={1,2}$/, "") }

    function Mg(e, t) { return V.fromValue(e).eq(t) }

    function Ng(e, t) {
        var n = void 0 === t ? e.val : t,
            r = e.isBoolean;
        t = e.isNumber;
        var i = e.oneof,
            o = e.len;
        if (2 !== [r, t, i].filter((function(e) { return !e })).length) throw new TypeError("invalid field type");
        if (void 0 !== n && (e = !1, void 0 !== i && (i = Pi(i), tu(i, Mg).length === i.length && void 0 !== uu(i, (function(e) { return Mg(n, e) })) && (e = !0)), r = void 0 !== r && (0 === n || 1 === n) && 1 === o, t = void 0 !== t && n.toString(2).length <= o, !(e || r || t))) throw Error("invalid field value")
    }

    function kn(e) { return function() { var t = e(); if (!t) throw new L("Client is not logged in. Cannot do the operation"); return t } }
    var Za = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        Og = function(e) { return e && e.Math == Math && e },
        D = Og("object" == typeof globalThis && globalThis) || Og("object" == typeof window && window) || Og("object" == typeof self && self) || Og("object" == typeof Za && Za) || function() { return this }() || Function("return this")(),
        Q = function(e) { try { return !!e() } catch (e) { return !0 } },
        la = !Q((function() { return 7 != Object.defineProperty({}, 1, { get: function() { return 7 } })[1] })),
        ln = {}.propertyIsEnumerable,
        mn = Object.getOwnPropertyDescriptor,
        Bf = mn && !ln.call({ 1: 2 }, 1) ? function(e) { return !!(e = mn(this, e)) && e.enumerable } : ln,
        dd = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } },
        vu = {}.toString,
        $b = function(e) { return vu.call(e).slice(8, -1) },
        wu = "".split,
        Cf = Q((function() { return !Object("z").propertyIsEnumerable(0) })) ? function(e) { return "String" == $b(e) ? wu.call(e, "") : Object(e) } : Object,
        kb = function(e) { if (null == e) throw TypeError("Can't call method on " + e); return e },
        rb = function(e) { return Cf(kb(e)) },
        ia = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e },
        lc = function(e, t) { if (!ia(e)) return e; var n, r; if (t && "function" == typeof(n = e.toString) && !ia(r = n.call(e)) || "function" == typeof(n = e.valueOf) && !ia(r = n.call(e)) || !t && "function" == typeof(n = e.toString) && !ia(r = n.call(e))) return r; throw TypeError("Can't convert object to primitive value") },
        Ra = function(e) { return Object(kb(e)) },
        xu = {}.hasOwnProperty,
        S = function(e, t) { return xu.call(Ra(e), t) },
        Ae = D.document,
        Pg = ia(Ae) && ia(Ae.createElement),
        nn = !la && !Q((function() { return 7 != Object.defineProperty(Pg ? Ae.createElement("div") : {}, "a", { get: function() { return 7 } }).a })),
        on = Object.getOwnPropertyDescriptor,
        Gb = {
            f: la ? on : function(e, t) {
                if (e = rb(e), t = lc(t, !0), nn) try { return on(e, t) } catch (e) {}
                if (S(e, t)) return dd(!Bf.call(e, t), e[t])
            }
        },
        wa = function(e) { if (!ia(e)) throw TypeError(String(e) + " is not an object"); return e },
        pn = Object.defineProperty,
        Sa = {
            f: la ? pn : function(e, t, n) {
                if (wa(e), t = lc(t, !0), wa(n), nn) try { return pn(e, t, n) } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        Oa = la ? function(e, t, n) { return Sa.f(e, t, dd(1, n)) } : function(e, t, n) { return e[t] = n, e },
        Qi = function(e, t) { try { Oa(D, e, t) } catch (n) { D[e] = t } return t },
        ed = D["__core-js_shared__"] || Qi("__core-js_shared__", {}),
        yu = Function.toString;
    "function" != typeof ed.inspectSource && (ed.inspectSource = function(e) { return yu.call(e) });
    var Ri = ed.inspectSource,
        qn = D.WeakMap,
        zu = "function" == typeof qn && /native code/.test(Ri(qn)),
        fd = ab((function(e) {
            (e.exports = function(e, t) { return ed[e] || (ed[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: "3.12.1", mode: "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" })
        })),
        Au = 0,
        Bu = Math.random(),
        Be = function(e) { return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++Au + Bu).toString(36) },
        rn = fd("keys"),
        Qg = function(e) { return rn[e] || (rn[e] = Be(e)) },
        Ce = {},
        Cu = D.WeakMap;
    if (zu || ed.state) var Gd = ed.state || (ed.state = new Cu),
        Du = Gd.get,
        sn = Gd.has,
        Eu = Gd.set,
        Si = function(e, t) { if (sn.call(Gd, e)) throw new TypeError("Object already initialized"); return t.facade = e, Eu.call(Gd, e, t), t },
        Rg = function(e) { return Du.call(Gd, e) || {} },
        Ti = function(e) { return sn.call(Gd, e) };
    else {
        var De = Qg("state");
        Ce[De] = !0, Si = function(e, t) { if (S(e, De)) throw new TypeError("Object already initialized"); return t.facade = e, Oa(e, De, t), t }, Rg = function(e) { return S(e, De) ? e[De] : {} }, Ti = function(e) { return S(e, De) }
    }
    var $a = { set: Si, get: Rg, has: Ti, enforce: function(e) { return Ti(e) ? Rg(e) : Si(e, {}) }, getterFor: function(e) { return function(t) { var n; if (!ia(t) || (n = Rg(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required"); return n } } },
        Ua = ab((function(e) {
            var t = $a.get,
                n = $a.enforce,
                r = String(String).split("String");
            (e.exports = function(e, t, i, o) {
                var a = !!o && !!o.unsafe,
                    s = !!o && !!o.enumerable;
                if (o = !!o && !!o.noTargetGet, "function" == typeof i) {
                    "string" != typeof t || S(i, "name") || Oa(i, "name", t);
                    var u = n(i);
                    u.source || (u.source = r.join("string" == typeof t ? t : ""))
                }
                e === D ? s ? e[t] = i : Qi(t, i) : (a ? !o && e[t] && (s = !0) : delete e[t], s ? e[t] = i : Oa(e, t, i))
            })(Function.prototype, "toString", (function() { return "function" == typeof this && t(this).source || Ri(this) }))
        })),
        tn = function(e) { return "function" == typeof e ? e : void 0 },
        mc = function(e, t) { return 2 > arguments.length ? tn(D[e]) || tn(D[e]) : D[e] && D[e][t] || D[e] && D[e][t] },
        Fu = Math.ceil,
        Gu = Math.floor,
        ac = function(e) { return isNaN(e = +e) ? 0 : (0 < e ? Gu : Fu)(e) },
        Hu = Math.min,
        ua = function(e) { return 0 < e ? Hu(ac(e), 9007199254740991) : 0 },
        Iu = Math.max,
        Ju = Math.min,
        yb = function(e, t) { return 0 > (e = ac(e)) ? Iu(e + t, 0) : Ju(e, t) },
        un = function(e) {
            return function(t, n, r) {
                t = rb(t);
                var i = ua(t.length);
                if (r = yb(r, i), e && n != n) {
                    for (; i > r;)
                        if ((n = t[r++]) != n) return !0
                } else
                    for (; i > r; r++)
                        if ((e || r in t) && t[r] === n) return e || r || 0; return !e && -1
            }
        },
        vn = un(!0),
        Ui = un(!1),
        wn = function(e, t) {
            e = rb(e);
            var n, r = 0,
                i = [];
            for (n in e) !S(Ce, n) && S(e, n) && i.push(n);
            for (; t.length > r;) S(e, n = t[r++]) && (~Ui(i, n) || i.push(n));
            return i
        },
        Sg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Ku = Sg.concat("length", "prototype"),
        Hd = { f: Object.getOwnPropertyNames || function(e) { return wn(e, Ku) } },
        Df = { f: Object.getOwnPropertySymbols },
        xn = mc("Reflect", "ownKeys") || function(e) {
            var t = Hd.f(wa(e)),
                n = Df.f;
            return n ? t.concat(n(e)) : t
        },
        yn = function(e, t) {
            for (var n = xn(t), r = Sa.f, i = Gb.f, o = 0; o < n.length; o++) {
                var a = n[o];
                S(e, a) || r(e, a, i(t, a))
            }
        },
        Lu = /#|\.prototype\./,
        nc = function(e, t) { return (e = Mu[Nu(e)]) == Ou || e != Pu && ("function" == typeof t ? Q(t) : !!t) },
        Nu = nc.normalize = function(e) { return String(e).replace(Lu, ".").toLowerCase() },
        Mu = nc.data = {},
        Pu = nc.NATIVE = "N",
        Ou = nc.POLYFILL = "P",
        Qu = Gb.f,
        P = function(e, t) {
            var n, r, i, o = e.target,
                a = e.global,
                s = e.stat;
            if (r = a ? D : s ? D[o] || Qi(o, {}) : (D[o] || {}).prototype)
                for (i in t) {
                    var u = t[i],
                        c = e.noTargetGet ? (n = Qu(r, i)) && n.value : r[i];
                    if (!(n = nc(a ? i : o + (s ? "." : "#") + i, e.forced)) && void 0 !== c) {
                        if (typeof u == typeof c) continue;
                        yn(u, c)
                    }(e.sham || c && c.sham) && Oa(u, "sham", !0);
                    try { Ua(r, i, u, e) } catch (e) {}
                }
        },
        Vi = function() {
            var e = wa(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        },
        oc = Q((function() { var e = RegExp("a", "y"); return e.lastIndex = 2, null != e.exec("abcd") })),
        Ru = Q((function() { var e = RegExp("^r", "gy"); return e.lastIndex = 2, null != e.exec("str") })),
        Tg = RegExp.prototype.exec,
        Su = fd("native-string-replace", String.prototype.replace),
        zn = Tg,
        Wi = (c = /a/, a = /b*/g, Tg.call(c, "a"), Tg.call(a, "a"), 0 !== c.lastIndex || 0 !== a.lastIndex),
        An = oc || Ru,
        Xi = void 0 !== /()??/.exec("")[1],
        c, a;
    (Wi || Xi || An) && (zn = function(e) {
        var t, n = An && this.sticky,
            r = Vi.call(this),
            i = this.source,
            o = 0,
            a = e;
        if (n) {-1 === (r = r.replace("y", "")).indexOf("g") && (r += "g"), a = String(e).slice(this.lastIndex), 0 < this.lastIndex && (!this.multiline || this.multiline && "\n" !== e[this.lastIndex - 1]) && (i = "(?: " + i + ")", a = " " + a, o++); var s = new RegExp("^(?:" + i + ")", r) }
        if (Xi && (s = new RegExp("^" + i + "$(?!\\s)", r)), Wi) var u = this.lastIndex;
        var c = Tg.call(n ? s : this, a);
        return n ? c ? (c.input = c.input.slice(o), c[0] = c[0].slice(o), c.index = this.lastIndex, this.lastIndex += c[0].length) : this.lastIndex = 0 : Wi && c && (this.lastIndex = this.global ? c.index + c[0].length : u), Xi && c && 1 < c.length && Su.call(c[0], s, (function() { for (t = 1; t < arguments.length - 2; t++) void 0 === arguments[t] && (c[t] = void 0) })), c
    });
    var Ef = zn;
    P({ target: "RegExp", proto: !0, forced: /./.exec !== Ef }, { exec: Ef });
    var Ee = mc("navigator", "userAgent") || "",
        Bn = D.process,
        Cn = Bn && Bn.versions,
        Dn = Cn && Cn.v8;
    if (Dn) var gd = Dn.split("."),
        Yi = 4 > gd[0] ? 1 : gd[0] + gd[1];
    else Ee && (gd = Ee.match(/Edge\/(\d+)/), (!gd || 74 <= gd[1]) && (gd = Ee.match(/Chrome\/(\d+)/)) && (Yi = gd[1]));
    var hd = Yi && +Yi,
        pc = !!Object.getOwnPropertySymbols && !Q((function() { return !String(Symbol()) || !Symbol.sham && hd && 41 > hd })),
        En = pc && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ff = fd("wks"),
        Gf = D.Symbol,
        Tu = En ? Gf : Gf && Gf.withoutSetter || Be,
        ra = function(e) { return S(Ff, e) && (pc || "string" == typeof Ff[e]) || (pc && S(Gf, e) ? Ff[e] = Gf[e] : Ff[e] = Tu("Symbol." + e)), Ff[e] },
        Uu = ra("species"),
        Zi = RegExp.prototype,
        Vu = !Q((function() { var e = /./; return e.exec = function() { var e = []; return e.groups = { a: "7" }, e }, "7" !== "".replace(e, "$<a>") })),
        Fn = "$0" === "a".replace(/./, "$0"),
        Gn = ra("replace"),
        Hn = !!/./ [Gn] && "" === /./ [Gn]("a", "$0"),
        Wu = !Q((function() {
            var e = /(?:)/,
                t = e.exec;
            return e.exec = function() { return t.apply(this, arguments) }, 2 !== (e = "ab".split(e)).length || "a" !== e[0] || "b" !== e[1]
        })),
        Ug = function(e, t, n, r) {
            var i = ra(e),
                o = !Q((function() { var t = {}; return t[i] = function() { return 7 }, 7 != "" [e](t) })),
                a = o && !Q((function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = { constructor: {} }).constructor[Uu] = function() { return n }, n.flags = "", n[i] = /./ [i]), n.exec = function() { return t = !0, null }, n[i](""), !t
                }));
            if (!o || !a || "replace" === e && (!Vu || !Fn || Hn) || "split" === e && !Wu) {
                var s = /./ [i],
                    u = (n = n(i, "" [e], (function(e, t, n, r, i) { var a = t.exec; return a === Ef || a === Zi.exec ? o && !i ? { done: !0, value: s.call(t, n, r) } : { done: !0, value: e.call(n, t, r) } : { done: !1 } }), { REPLACE_KEEPS_$0: Fn, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Hn }))[1];
                Ua(String.prototype, e, n[0]), Ua(Zi, i, 2 == t ? function(e, t) { return u.call(e, this, t) } : function(e) { return u.call(e, this) })
            }
            r && Oa(Zi[i], "sham", !0)
        },
        Xu = ra("match"),
        $i = function(e) { var t; return ia(e) && (void 0 !== (t = e[Xu]) ? !!t : "RegExp" == $b(e)) },
        zb = function(e) { if ("function" != typeof e) throw TypeError(String(e) + " is not a function"); return e },
        Yu = ra("species"),
        id = function(e, t) { var n; return void 0 === (e = wa(e).constructor) || null == (n = wa(e)[Yu]) ? t : zb(n) },
        In = function(e) { return function(t, n) { t = String(kb(t)), n = ac(n); var r, i = t.length; if (0 > n || n >= i) return e ? "" : void 0; var o = t.charCodeAt(n); return 55296 > o || 56319 < o || n + 1 === i || 56320 > (r = t.charCodeAt(n + 1)) || 57343 < r ? e ? t.charAt(n) : o : e ? t.slice(n, n + 2) : r - 56320 + (o - 55296 << 10) + 65536 } };
    In(!1);
    var Jn = In(!0),
        aj = function(e, t, n) { return t + (n ? Jn(e, t).length : 1) },
        Fe = function(e, t) { var n = e.exec; if ("function" == typeof n) { if ("object" != typeof(e = n.call(e, t))) throw TypeError("RegExp exec method returned something other than an Object or null"); return e } if ("RegExp" !== $b(e)) throw TypeError("RegExp#exec called on incompatible receiver"); return Ef.call(e, t) },
        Zu = [].push,
        $u = Math.min;
    Ug("split", 2, (function(e, t, n) {
        var r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || 1 < ".".split(/()()/).length || "".split(/.?/).length ? function(e, n) {
            var r = String(kb(this));
            if (0 === (n = void 0 === n ? 4294967295 : n >>> 0)) return [];
            if (void 0 === e) return [r];
            if (!$i(e)) return t.call(r, e, n);
            var i, o, a, s = [],
                u = 0;
            for (e = new RegExp(e.source, (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : "") + "g");
                (i = Ef.call(e, r)) && !((o = e.lastIndex) > u && (s.push(r.slice(u, i.index)), 1 < i.length && i.index < r.length && Zu.apply(s, i.slice(1)), a = i[0].length, u = o, s.length >= n));) e.lastIndex === i.index && e.lastIndex++;
            return u === r.length ? (a || !e.test("")) && s.push("") : s.push(r.slice(u)), s.length > n ? s.slice(0, n) : s
        } : "0".split(void 0, 0).length ? function(e, n) { return void 0 === e && 0 === n ? [] : t.call(this, e, n) } : t;
        return [function(t, n) {
            var i = kb(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
        }, function(e, i) {
            var o = n(r, e, this, i, r !== t);
            if (o.done) return o.value;
            var a = wa(e);
            e = String(this);
            var s = id(a, RegExp);
            if (o = a.unicode, a = new s(oc ? "^(?:" + a.source + ")" : a, (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (oc ? "g" : "y")), 0 === (i = void 0 === i ? 4294967295 : i >>> 0)) return [];
            if (0 === e.length) return null === Fe(a, e) ? [e] : [];
            var u = 0,
                c = 0;
            for (s = []; c < e.length;) {
                a.lastIndex = oc ? 0 : c;
                var l, f = Fe(a, oc ? e.slice(c) : e);
                if (null === f || (l = $u(ua(a.lastIndex + (oc ? c : 0)), e.length)) === u) c = aj(e, c, o);
                else {
                    if (s.push(e.slice(u, c)), s.length === i) return s;
                    for (u = 1; u <= f.length - 1; u++)
                        if (s.push(f[u]), s.length === i) return s;
                    c = u = l
                }
            }
            return s.push(e.slice(u)), s
        }]
    }), oc);
    var av = /^[\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*/,
        bv = /[\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff][\t\n\x0B\f\r \u00a0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff]*$/,
        bj = function(e) { return function(t) { return t = String(kb(t)), 1 & e && (t = t.replace(av, "")), 2 & e && (t = t.replace(bv, "")), t } };
    bj(1), bj(2);
    var cj = bj(3),
        Vg = D.parseInt,
        cv = /^[+-]?0[Xx]/,
        Kn = 8 !== Vg("\t\n\v\f\r                　\u2028\u2029\ufeff08") || 22 !== Vg("\t\n\v\f\r                　\u2028\u2029\ufeff0x16") ? function(e, t) { return e = cj(String(e)), Vg(e, t >>> 0 || (cv.test(e) ? 16 : 10)) } : Vg;
    P({ global: !0, forced: parseInt != Kn }, { parseInt: Kn });
    var Id = function(e, t, n) {
            if (zb(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() { return e.call(t) };
                case 1:
                    return function(n) { return e.call(t, n) };
                case 2:
                    return function(n, r) { return e.call(t, n, r) };
                case 3:
                    return function(n, r, i) { return e.call(t, n, r, i) }
            }
            return function() { return e.apply(t, arguments) }
        },
        jd = Array.isArray || function(e) { return "Array" == $b(e) },
        dv = ra("species"),
        Wg = function(e, t) { if (jd(e)) { var n = e.constructor; "function" != typeof n || n !== Array && !jd(n.prototype) ? ia(n) && (null === (n = n[dv]) && (n = void 0)) : n = void 0 } return new(void 0 === n ? Array : n)(0 === t ? 0 : t) },
        Ln = [].push,
        kd = function(e) {
            var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                i = 4 == e,
                o = 6 == e,
                a = 7 == e,
                s = 5 == e || o;
            return function(u, c, l, f) {
                var h = Ra(u),
                    p = Cf(h);
                c = Id(c, l, 3), l = ua(p.length);
                var d, v = 0;
                for (f = f || Wg, u = t ? f(u, l) : n || a ? f(u, 0) : void 0; l > v; v++)
                    if ((s || v in p) && (d = c(f = p[v], v, h), e))
                        if (t) u[v] = d;
                        else if (d) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return v;
                    case 2:
                        Ln.call(u, f)
                } else switch (e) {
                    case 4:
                        return !1;
                    case 7:
                        Ln.call(u, f)
                }
                return o ? -1 : r || i ? i : u
            }
        },
        Jd = kd(0),
        Mn = kd(1),
        Nn = kd(2),
        ev = kd(3),
        fv = kd(4),
        On = kd(5),
        Pn = kd(6);
    kd(7);
    var gv = ra("species"),
        Hf = function(e) { return 51 <= hd || !Q((function() { var t = []; return (t.constructor = {})[gv] = function() { return { foo: 1 } }, 1 !== t[e](Boolean).foo })) },
        hv = Hf("filter");
    P({ target: "Array", proto: !0, forced: !hv }, { filter: function(e) { return Nn(this, e, 1 < arguments.length ? arguments[1] : void 0) } });
    var Dc = Object.keys || function(e) { return wn(e, Sg) },
        iv = Q((function() { Dc(1) }));
    P({ target: "Object", stat: !0, forced: iv }, { keys: function(e) { return Dc(Ra(e)) } });
    var Ge = function(e, t) { var n = [][e]; return !!n && Q((function() { n.call(null, t || function() { throw 1 }, 1) })) },
        jv = [].join,
        kv = Cf != Object,
        lv = Ge("join", ",");
    P({ target: "Array", proto: !0, forced: kv || !lv }, { join: function(e) { return jv.call(rb(this), void 0 === e ? "," : e) } });
    var mv = Hf("map");
    P({ target: "Array", proto: !0, forced: !mv }, { map: function(e) { return Mn(this, e, 1 < arguments.length ? arguments[1] : void 0) } });
    var dj = function(e) { var t = e.return; if (void 0 !== t) return wa(t.call(e)).value },
        He = {},
        nv = ra("iterator"),
        ov = Array.prototype,
        ej = function(e) { return void 0 !== e && (He.Array === e || ov[nv] === e) },
        Ie = function(e, t, n) {
            (t = lc(t)) in e ? Sa.f(e, t, dd(0, n)) : e[t] = n
        },
        pv = ra("toStringTag"),
        Qn = {};
    Qn[pv] = "z";
    var fj = "[object z]" === String(Qn),
        qv = ra("toStringTag"),
        rv = "Arguments" == $b(function() { return arguments }()),
        If = fj ? $b : function(e) {
            var t;
            if (void 0 === e) var n = "Undefined";
            else {
                if (null === e) var r = "Null";
                else {
                    e: {
                        var i = e = Object(e);
                        try { r = i[qv]; break e } catch (e) {}
                        r = void 0
                    }
                    r = "string" == typeof(n = r) ? n : rv ? $b(e) : "Object" == (t = $b(e)) && "function" == typeof e.callee ? "Arguments" : t
                }
                n = r
            }
            return n
        },
        sv = ra("iterator"),
        gj = function(e) { if (null != e) return e[sv] || e["@@iterator"] || He[If(e)] },
        Rn = ra("iterator"),
        Sn = !1;
    try {
        var tv = 0,
            Tn = { next: function() { return { done: !!tv++ } }, return: function() { Sn = !0 } };
        Tn[Rn] = function() { return this }, Array.from(Tn, (function() { throw 2 }))
    } catch (c) {}
    var Xg = function(e, t) {
            if (!t && !Sn) return !1;
            var n = !1;
            try {
                (t = {})[Rn] = function() { return { next: function() { return { done: n = !0 } } } }, e(t)
            } catch (e) {}
            return n
        },
        uv = !Xg((function(e) { Array.from(e) }));
    P({ target: "Array", stat: !0, forced: uv }, {
        from: function(e) {
            var t, n = Ra(e),
                r = "function" == typeof this ? this : Array,
                i = arguments.length,
                o = 1 < i ? arguments[1] : void 0,
                a = void 0 !== o,
                s = gj(n),
                u = 0;
            if (a && (o = Id(o, 2 < i ? arguments[2] : void 0, 2)), null == s || r == Array && ej(s)) { var c = ua(n.length); for (r = new r(c); c > u; u++) s = a ? o(n[u], u) : n[u], Ie(r, u, s) } else
                for (i = (n = s.call(n)).next, r = new r; !(t = i.call(n)).done; u++) {
                    if (a) {
                        s = n;
                        var l = o;
                        t = [t.value, u];
                        try { c = l(wa(t)[0], t[1]) } catch (e) { throw dj(s), e }
                    } else c = t.value;
                    Ie(r, u, s = c)
                }
            return r.length = u, r
        }
    });
    var Un = !Q((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        Vn = Qg("IE_PROTO"),
        vv = Object.prototype,
        Wb = Un ? Object.getPrototypeOf : function(e) { return e = Ra(e), S(e, Vn) ? e[Vn] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? vv : null },
        hj = ra("iterator"),
        Wn = !1,
        wv = function() { return this },
        Kd;
    if ([].keys) {
        var Xn = [].keys();
        if ("next" in Xn) {
            var Yn = Wb(Wb(Xn));
            Yn !== Object.prototype && (Kd = Yn)
        } else Wn = !0
    }(null == Kd || Q((function() { var e = {}; return Kd[hj].call(e) !== e }))) && (Kd = {}), S(Kd, hj) || Oa(Kd, hj, wv);
    var Yg = Kd,
        Zg = Wn,
        xv = la ? Object.defineProperties : function(e, t) { wa(e); for (var n, r = Dc(t), i = r.length, o = 0; i > o;) Sa.f(e, n = r[o++], t[n]); return e },
        ij = mc("document", "documentElement"),
        Zn = Qg("IE_PROTO"),
        jj = function() {},
        kj, $g = function() {
            try { kj = document.domain && new ActiveXObject("htmlfile") } catch (e) {}
            if (kj) {
                var e = kj;
                e.write("<script><\/script>"), e.close(), e = e.parentWindow.Object
            } else(e = Pg ? Ae.createElement("iframe") : {}).style.display = "none", ij.appendChild(e), e.src = "javascript:", (e = e.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), e = e.F;
            for ($g = e, e = Sg.length; e--;) delete $g.prototype[Sg[e]];
            return $g()
        };
    Ce[Zn] = !0;
    var bc = Object.create || function(e, t) {
            if (null !== e) {
                jj.prototype = wa(e);
                var n = new jj;
                jj.prototype = null, n[Zn] = e
            } else n = $g();
            return void 0 === t ? n : xv(n, t)
        },
        yv = Sa.f,
        $n = ra("toStringTag"),
        Ec = function(e, t, n) { e && !S(e = n ? e : e.prototype, $n) && yv(e, $n, { configurable: !0, value: t }) },
        zv = function() { return this },
        Av = function(e, t, n) { return t += " Iterator", e.prototype = bc(Yg, { next: dd(1, n) }), Ec(e, t, !1), He[t] = zv, e },
        Va = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e = !1,
                t = {};
            try {
                var n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
                n.call(t, []), e = t instanceof Array
            } catch (e) {}
            return function(t, r) { if (wa(t), !ia(r) && null !== r) throw TypeError("Can't set " + String(r) + " as a prototype"); return e ? n.call(t, r) : t.__proto__ = r, t }
        }() : void 0),
        Jf = ra("iterator"),
        Bv = function() { return this },
        lj = function(e, t, n, r, i, o, a) {
            Av(n, t, r), r = function(e) {
                if (e === i && h) return h;
                if (!Zg && e in l) return l[e];
                switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() { return new n(this, e) }
                }
                return function() { return new n(this) }
            };
            var s, u = t + " Iterator",
                c = !1,
                l = e.prototype,
                f = l[Jf] || l["@@iterator"] || i && l[i],
                h = !Zg && f || r(i),
                p = "Array" == t && l.entries || f;
            if (p && (e = Wb(p.call(new e)), Yg !== Object.prototype && e.next && (Wb(e) !== Yg && (Va ? Va(e, Yg) : "function" != typeof e[Jf] && Oa(e, Jf, Bv)), Ec(e, u, !0))), "values" == i && f && "values" !== f.name && (c = !0, h = function() { return f.call(this) }), l[Jf] !== h && Oa(l, Jf, h), He[t] = h, i) {
                var d = { values: r("values"), keys: o ? h : r("keys"), entries: r("entries") };
                if (a)
                    for (s in d) !Zg && !c && s in l || Ua(l, s, d[s]);
                else P({ target: t, proto: !0, forced: Zg || c }, d)
            }
            return d
        },
        Cv = $a.set,
        Dv = $a.getterFor("String Iterator");
    lj(String, "String", (function(e) { Cv(this, { type: "String Iterator", string: String(e), index: 0 }) }), (function() {
        var e = Dv(this),
            t = e.string,
            n = e.index;
        return n >= t.length ? { value: void 0, done: !0 } : (t = Jn(t, n), e.index += t.length, { value: t, done: !1 })
    }));
    var mj = ra("unscopables"),
        nj = Array.prototype;
    null == nj[mj] && Sa.f(nj, mj, { configurable: !0, value: bc(null) });
    var Ld = function(e) { nj[mj][e] = !0 },
        ao = !0;
    "find" in [] && Array(1).find((function() { ao = !1 })), P({ target: "Array", proto: !0, forced: ao }, { find: function(e) { return On(this, e, 1 < arguments.length ? arguments[1] : void 0) } }), Ld("find");
    var bo = function(e) {
        var t = String(kb(this)),
            n = "";
        if (0 > (e = ac(e)) || 1 / 0 == e) throw RangeError("Wrong number of repetitions");
        for (; 0 < e;
            (e >>>= 1) && (t += t)) 1 & e && (n += t);
        return n
    };
    P({ target: "String", proto: !0 }, { repeat: bo }), P({ target: "Number", stat: !0 }, { MAX_SAFE_INTEGER: 9007199254740991 }), P({ target: "Number", stat: !0 }, { isNaN: function(e) { return e != e } }), D.Number.isNaN;
    var Ev = fj ? {}.toString : function() { return "[object " + If(this) + "]" };
    fj || Ua(Object.prototype, "toString", Ev, { unsafe: !0 });
    var Fc = D.Promise,
        Kf = function(e, t, n) { for (var r in t) Ua(e, r, t[r], n); return e },
        co = ra("species"),
        Lf = function(e) {
            e = mc(e);
            var t = Sa.f;
            la && e && !e[co] && t(e, co, { configurable: !0, get: function() { return this } })
        },
        Gc = function(e, t, n) { if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation"); return e },
        Mf = function(e, t) { this.stopped = e, this.result = t },
        ah = function(e, t, n) {
            var r, i = !(!n || !n.AS_ENTRIES),
                o = !(!n || !n.IS_ITERATOR),
                a = !(!n || !n.INTERRUPTED),
                s = Id(t, n && n.that, 1 + i + a),
                u = function(e) { return c && dj(c), new Mf(!0, e) };
            if (t = function(e) { return i ? (wa(e), a ? s(e[0], e[1], u) : s(e[0], e[1])) : a ? s(e, u) : s(e) }, o) var c = e;
            else {
                if ("function" != typeof(o = gj(e))) throw TypeError("Target is not iterable");
                if (ej(o)) {
                    for (o = 0, n = ua(e.length); n > o; o++)
                        if ((r = t(e[o])) && r instanceof Mf) return r;
                    return new Mf(!1)
                }
                c = o.call(e)
            }
            for (e = c.next; !(o = e.call(c)).done;) { try { r = t(o.value) } catch (e) { throw dj(c), e } if ("object" == typeof r && r && r instanceof Mf) return r }
            return new Mf(!1)
        },
        eo = /(?:iphone|ipod|ipad).*applewebkit/i.test(Ee),
        Hc = "process" == $b(D.process),
        bh = D.location,
        oj = D.setImmediate,
        fo = D.clearImmediate,
        Fv = D.process,
        go = D.MessageChannel,
        pj = D.Dispatch,
        qj = 0,
        Nf = {},
        rj = function(e) {
            if (Nf.hasOwnProperty(e)) {
                var t = Nf[e];
                delete Nf[e], t()
            }
        },
        sj = function(e) { return function() { rj(e) } },
        ho = function(e) { rj(e.data) },
        io = function(e) { D.postMessage(e + "", bh.protocol + "//" + bh.host) };
    if (!oj || !fo)
        if (oj = function(e) {
                for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
                return Nf[++qj] = function() {
                    ("function" == typeof e ? e : Function(e)).apply(void 0, t)
                }, Of(qj), qj
            }, fo = function(e) { delete Nf[e] }, Hc) var Of = function(e) { Fv.nextTick(sj(e)) };
        else if (pj && pj.now) Of = function(e) { pj.now(sj(e)) };
    else if (go && !eo) {
        var jo = new go,
            ko = jo.port2;
        jo.port1.onmessage = ho, Of = Id(ko.postMessage, ko, 1)
    } else D.addEventListener && "function" == typeof postMessage && !D.importScripts && bh && "file:" !== bh.protocol && !Q(io) ? (Of = io, D.addEventListener("message", ho, !1)) : Of = "onreadystatechange" in (Pg ? Ae.createElement("script") : {}) ? function(e) { ij.appendChild(Pg ? Ae.createElement("script") : {}).onreadystatechange = function() { ij.removeChild(this), rj(e) } } : function(e) { setTimeout(sj(e), 0) };
    var tj = oj,
        Gv = /web0s(?!.*chrome)/i.test(Ee),
        Hv = Gb.f,
        lo = D.MutationObserver || D.WebKitMutationObserver,
        mo = D.document,
        no = D.process,
        ch = D.Promise,
        oo = Hv(D, "queueMicrotask"),
        po = oo && oo.value,
        Md, Pf;
    if (!po) {
        var eh = function() {
            var e;
            for (Hc && (e = no.domain) && e.exit(); Md;) {
                var t = Md.fn;
                Md = Md.next;
                try { t() } catch (e) { throw Md ? dh() : Pf = void 0, e }
            }
            Pf = void 0, e && e.enter()
        };
        if (eo || Hc || Gv || !lo || !mo)
            if (ch && ch.resolve) {
                var uj = ch.resolve(void 0);
                uj.constructor = ch;
                var Iv = uj.then,
                    dh = function() { Iv.call(uj, eh) }
            } else dh = Hc ? function() { no.nextTick(eh) } : function() { tj.call(D, eh) };
        else {
            var qo = !0,
                ro = mo.createTextNode("");
            new lo(eh).observe(ro, { characterData: !0 }), dh = function() { ro.data = qo = !qo }
        }
    }
    var so = po || function(e) { e = { fn: e, next: void 0 }, Pf && (Pf.next = e), Md || (Md = e, dh()), Pf = e },
        Jv = function(e) {
            var t, n;
            this.promise = new e((function(e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = r
            })), this.resolve = zb(t), this.reject = zb(n)
        },
        vj = { f: function(e) { return new Jv(e) } },
        wj = function(e, t) { return wa(e), ia(t) && t.constructor === e ? t : ((0, (e = vj.f(e)).resolve)(t), e.promise) },
        Kv = function(e, t) {
            var n = D.console;
            n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
        },
        xj = function(e) { try { return { error: !1, value: e() } } catch (e) { return { error: !0, value: e } } },
        Lv = "object" == typeof window,
        Mv = ra("species"),
        to = $a.get,
        Nv = $a.set,
        Ov = $a.getterFor("Promise"),
        Nd = Fc && Fc.prototype,
        Ab = Fc,
        fh = Nd,
        uo = D.TypeError,
        yj = D.document,
        zj = D.process,
        Je = vj.f,
        Pv = Je,
        Qv = !!(yj && yj.createEvent && D.dispatchEvent),
        vo = "function" == typeof PromiseRejectionEvent,
        wo = !1,
        Qf = nc("Promise", (function() {
            var e = Ri(Ab) !== String(Ab);
            if (!e && 66 === hd) return !0;
            if (51 <= hd && /native code/.test(Ab)) return !1;
            var t = new Ab((function(e) { e(1) })),
                n = function(e) { e((function() {}), (function() {})) };
            return (t.constructor = {})[Mv] = n, !(wo = t.then((function() {})) instanceof n) || !e && Lv && !vo
        })),
        Rv = Qf || !Xg((function(e) { Ab.all(e).catch((function() {})) })),
        xo = function(e) { var t; return !(!ia(e) || "function" != typeof(t = e.then)) && t },
        Aj = function(e, t) {
            if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                so((function() {
                    for (var r = e.value, i = 1 == e.state, o = 0; n.length > o;) {
                        var a, s = n[o++],
                            u = i ? s.ok : s.fail,
                            c = s.resolve,
                            l = s.reject,
                            f = s.domain;
                        try {
                            if (u) {
                                if (i || (2 === e.rejection && Sv(e), e.rejection = 1), !0 === u) var h = r;
                                else if (f && f.enter(), h = u(r), f) { f.exit(); var p = !0 }
                                h === s.promise ? l(uo("Promise-chain cycle")) : (a = xo(h)) ? a.call(h, c, l) : c(h)
                            } else l(r)
                        } catch (e) { f && !p && f.exit(), l(e) }
                    }
                    e.reactions = [], e.notified = !1, t && !e.rejection && Tv(e)
                }))
            }
        },
        yo = function(e, t, n) {
            var r;
            if (Qv) {
                var i = yj.createEvent("Event");
                i.promise = t, i.reason = n, i.initEvent(e, !1, !0), D.dispatchEvent(i)
            } else i = { promise: t, reason: n };
            !vo && (r = D["on" + e]) ? r(i) : "unhandledrejection" === e && Kv("Unhandled promise rejection", n)
        },
        Tv = function(e) {
            tj.call(D, (function() {
                var t = e.facade,
                    n = e.value;
                if (1 !== e.rejection && !e.parent) { var r = xj((function() { Hc ? zj.emit("unhandledRejection", n, t) : yo("unhandledrejection", t, n) })); if (e.rejection = Hc || 1 !== e.rejection && !e.parent ? 2 : 1, r.error) throw r.value }
            }))
        },
        Sv = function(e) {
            tj.call(D, (function() {
                var t = e.facade;
                Hc ? zj.emit("rejectionHandled", t) : yo("rejectionhandled", t, e.value)
            }))
        },
        Ke = function(e, t, n) { return function(r) { e(t, r, n) } },
        Le = function(e, t, n) { e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, Aj(e, !0)) },
        Bj = function(e, t, n) {
            if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                    if (e.facade === t) throw uo("Promise can't be resolved itself");
                    var r = xo(t);
                    r ? so((function() { var n = { done: !1 }; try { r.call(t, Ke(Bj, n, e), Ke(Le, n, e)) } catch (t) { Le(n, t, e) } })) : (e.value = t, e.state = 1, Aj(e, !1))
                } catch (t) { Le({ done: !1 }, t, e) }
            }
        };
    if (Qf) {
        Ab = function(e) { Gc(this, Ab, "Promise"), zb(e), Cj.call(this); var t = to(this); try { e(Ke(Bj, t), Ke(Le, t)) } catch (e) { Le(t, e) } }, fh = Ab.prototype;
        var Cj = function(e) { Nv(this, { type: "Promise", done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 }) };
        Cj.prototype = Kf(fh, {
            then: function(e, t) {
                var n = Ov(this),
                    r = Je(id(this, Ab));
                return r.ok = "function" != typeof e || e, r.fail = "function" == typeof t && t, r.domain = Hc ? zj.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && Aj(n, !1), r.promise
            },
            catch: function(e) { return this.then(void 0, e) }
        });
        var Uv = function() {
            var e = new Cj,
                t = to(e);
            this.promise = e, this.resolve = Ke(Bj, t), this.reject = Ke(Le, t)
        };
        if (vj.f = Je = function(e) { return e === Ab || e === Vv ? new Uv(e) : Pv(e) }, "function" == typeof Fc && Nd !== Object.prototype) {
            var Wv = Nd.then;
            wo || (Ua(Nd, "then", (function(e, t) { var n = this; return new Ab((function(e, t) { Wv.call(n, e, t) })).then(e, t) }), { unsafe: !0 }), Ua(Nd, "catch", fh.catch, { unsafe: !0 }));
            try { delete Nd.constructor } catch (c) {}
            Va && Va(Nd, fh)
        }
    }
    P({ global: !0, wrap: !0, forced: Qf }, { Promise: Ab }), Ec(Ab, "Promise", !1), Lf("Promise");
    var Vv = mc("Promise");
    P({ target: "Promise", stat: !0, forced: Qf }, { reject: function(e) { var t = Je(this); return t.reject.call(void 0, e), t.promise } }), P({ target: "Promise", stat: !0, forced: Qf }, { resolve: function(e) { return wj(this, e) } }), P({ target: "Promise", stat: !0, forced: Rv }, {
        all: function(e) {
            var t = this,
                n = Je(t),
                r = n.resolve,
                i = n.reject,
                o = xj((function() {
                    var n = zb(t.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    ah(e, (function(e) {
                        var u = a++,
                            c = !1;
                        o.push(void 0), s++, n.call(t, e).then((function(e) { c || (c = !0, o[u] = e, --s || r(o)) }), i)
                    })), --s || r(o)
                }));
            return o.error && i(o.value), n.promise
        },
        race: function(e) {
            var t = this,
                n = Je(t),
                r = n.reject,
                i = xj((function() {
                    var i = zb(t.resolve);
                    ah(e, (function(e) { i.call(t, e).then(n.resolve, r) }))
                }));
            return i.error && r(i.value), n.promise
        }
    });
    var zo = [].indexOf,
        Ao = !!zo && 0 > 1 / [1].indexOf(1, -0),
        Xv = Ge("indexOf");
    P({ target: "Array", proto: !0, forced: Ao || !Xv }, { indexOf: function(e) { return Ao ? zo.apply(this, arguments) || 0 : Ui(this, e, 1 < arguments.length ? arguments[1] : void 0) } });
    var Yv = Math.floor,
        Zv = "".replace,
        $v = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        aw = /\$([$&'`]|\d{1,2})/g,
        bw = function(e, t, n, r, i, o) {
            var a = n + e.length,
                s = r.length,
                u = aw;
            return void 0 !== i && (i = Ra(i), u = $v), Zv.call(o, u, (function(o, u) {
                switch (u.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return t.slice(0, n);
                    case "'":
                        return t.slice(a);
                    case "<":
                        o = i[u.slice(1, -1)];
                        break;
                    default:
                        var c = +u;
                        if (0 === c) return o;
                        if (c > s) return 0 === (c = Yv(c / 10)) ? o : c <= s ? void 0 === r[c - 1] ? u.charAt(1) : r[c - 1] + u.charAt(1) : o;
                        o = r[c - 1]
                }
                return void 0 === o ? "" : o
            }))
        },
        cw = Math.max,
        dw = Math.min,
        ew = function(e) { return void 0 === e ? e : String(e) };
    Ug("replace", 2, (function(e, t, n, r) {
        var i = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = r.REPLACE_KEEPS_$0,
            a = i ? "$" : "$0";
        return [function(n, r) {
            var i = kb(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
        }, function(e, r) {
            if (!i && o || "string" == typeof r && -1 === r.indexOf(a)) { var s = n(t, e, this, r); if (s.done) return s.value }
            var u = wa(e);
            e = String(this), (s = "function" == typeof r) || (r = String(r));
            var c = u.global;
            if (c) {
                var l = u.unicode;
                u.lastIndex = 0
            }
            for (var f = [];;) { var h = Fe(u, e); if (null === h) break; if (f.push(h), !c) break; "" === String(h[0]) && (u.lastIndex = aj(e, ua(u.lastIndex), l)) }
            for (l = "", c = u = 0; c < f.length; c++) {
                h = f[c];
                for (var p = String(h[0]), d = cw(dw(ac(h.index), e.length), 0), v = [], b = 1; b < h.length; b++) v.push(ew(h[b]));
                h = h.groups, s ? (v = [p].concat(v, d, e), void 0 !== h && v.push(h), h = String(r.apply(void 0, v))) : h = bw(p, e, d, v, h, r), d >= u && (l += e.slice(u, d) + h, u = d + p.length)
            }
            return l + e.slice(u)
        }]
    }));
    var fw = Hf("slice"),
        gw = ra("species"),
        hw = [].slice,
        iw = Math.max;
    P({ target: "Array", proto: !0, forced: !fw }, {
        slice: function(e, t) {
            var n = rb(this),
                r = ua(n.length);
            if (e = yb(e, r), t = yb(void 0 === t ? r : t, r), jd(n)) { var i = n.constructor; if ("function" != typeof i || i !== Array && !jd(i.prototype) ? ia(i) && (null === (i = i[gw]) && (i = void 0)) : i = void 0, i === Array || void 0 === i) return hw.call(n, e, t) }
            for (i = new(void 0 === i ? Array : i)(iw(t - e, 0)), r = 0; e < t; e++, r++) e in n && Ie(i, r, n[e]);
            return i.length = r, i
        }
    });
    var jw = $a.set,
        kw = $a.getterFor("Array Iterator"),
        ld = lj(Array, "Array", (function(e, t) { jw(this, { type: "Array Iterator", target: rb(e), index: 0, kind: t }) }), (function() {
            var e = kw(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
            return !t || r >= t.length ? (e.target = void 0, { value: void 0, done: !0 }) : "keys" == n ? { value: r, done: !1 } : "values" == n ? { value: t[r], done: !1 } : { value: [r, t[r]], done: !1 }
        }), "values");
    He.Arguments = He.Array, Ld("keys"), Ld("values"), Ld("entries");
    var Bo = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView,
        Me = function(e) {
            if (void 0 === e) return 0;
            e = ac(e);
            var t = ua(e);
            if (e !== t) throw RangeError("Wrong length or index");
            return t
        },
        lw = Math.abs,
        Ic = Math.pow,
        mw = Math.floor,
        nw = Math.log,
        ow = Math.LN2,
        Dj = function(e) {
            var t = Ra(this),
                n = ua(t.length),
                r = arguments.length,
                i = yb(1 < r ? arguments[1] : void 0, n);
            for (n = void 0 === (r = 2 < r ? arguments[2] : void 0) ? n : yb(r, n); n > i;) t[i++] = e;
            return t
        },
        pw = Hd.f,
        qw = Sa.f,
        Ne = $a.get,
        Co = $a.set,
        cc = D.ArrayBuffer,
        Bb = cc,
        dc = D.DataView,
        gh = dc && dc.prototype,
        Do = Object.prototype,
        hh = D.RangeError,
        Eo = function(e, t, n) {
            var r, i = Array(n),
                o = (1 << (n = 8 * n - t - 1)) - 1,
                a = o >> 1,
                s = 23 === t ? Ic(2, -24) - Ic(2, -77) : 0,
                u = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0,
                c = 0;
            if ((e = lw(e)) != e || 1 / 0 === e) { e = e != e ? 1 : 0; var l = o } else l = mw(nw(e) / ow), 1 > e * (r = Ic(2, -l)) && (l--, r *= 2), 2 <= (e = 1 <= l + a ? e + s / r : e + s * Ic(2, 1 - a)) * r && (l++, r /= 2), l + a >= o ? (e = 0, l = o) : 1 <= l + a ? (e = (e * r - 1) * Ic(2, t), l += a) : (e = e * Ic(2, a - 1) * Ic(2, t), l = 0);
            for (; 8 <= t; i[c++] = 255 & e, e /= 256, t -= 8);
            for (l = l << t | e, n += t; 0 < n; i[c++] = 255 & l, l /= 256, n -= 8);
            return i[--c] |= 128 * u, i
        },
        Fo = function(e, t) {
            var n = e.length,
                r = 8 * n - t - 1,
                i = (1 << r) - 1,
                o = i >> 1;
            r -= 7, --n;
            var a = e[n--],
                s = 127 & a;
            for (a >>= 7; 0 < r; s = 256 * s + e[n], n--, r -= 8);
            var u = s & (1 << -r) - 1;
            for (s >>= -r, r += t; 0 < r; u = 256 * u + e[n], n--, r -= 8);
            if (0 === s) s = 1 - o;
            else {
                if (s === i) return u ? NaN : a ? -1 / 0 : 1 / 0;
                u += Ic(2, t), s -= o
            }
            return (a ? -1 : 1) * u * Ic(2, s - t)
        },
        Go = function(e) { return [255 & e] },
        Ho = function(e) { return [255 & e, e >> 8 & 255] },
        Io = function(e) { return [255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255] },
        Jo = function(e) { return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0] },
        rw = function(e) { return Eo(e, 23, 4) },
        sw = function(e) { return Eo(e, 52, 8) },
        ih = function(e, t) { qw(e.prototype, t, { get: function() { return Ne(this)[t] } }) },
        md = function(e, t, n, r) { n = Me(n); var i = Ne(e); if (n + t > i.byteLength) throw hh("Wrong index"); return e = Ne(i.buffer).bytes, n += i.byteOffset, t = e.slice(n, n + t), r ? t : t.reverse() },
        nd = function(e, t, n, r, i, o) { n = Me(n); var a = Ne(e); if (n + t > a.byteLength) throw hh("Wrong index"); for (e = Ne(a.buffer).bytes, n += a.byteOffset, r = r(+i), i = 0; i < t; i++) e[n + i] = r[o ? i : t - i - 1] };
    if (Bo) {
        if (!Q((function() { cc(1) })) || !Q((function() { new cc(-1) })) || Q((function() { return new cc, new cc(1.5), new cc(NaN), "ArrayBuffer" != cc.name }))) {
            Bb = function(e) { return Gc(this, Bb), new cc(Me(e)) };
            for (var tw = Bb.prototype = cc.prototype, Ko = pw(cc), Lo = 0, Ej; Ko.length > Lo;)(Ej = Ko[Lo++]) in Bb || Oa(Bb, Ej, cc[Ej]);
            tw.constructor = Bb
        }
        Va && Wb(gh) !== Do && Va(gh, Do);
        var jh = new dc(new Bb(2)),
            Mo = gh.setInt8;
        jh.setInt8(0, 2147483648), jh.setInt8(1, 2147483649), !jh.getInt8(0) && jh.getInt8(1) || Kf(gh, { setInt8: function(e, t) { Mo.call(this, e, t << 24 >> 24) }, setUint8: function(e, t) { Mo.call(this, e, t << 24 >> 24) } }, { unsafe: !0 })
    } else Bb = function(e) { Gc(this, Bb, "ArrayBuffer"), e = Me(e), Co(this, { bytes: Dj.call(Array(e), 0), byteLength: e }), la || (this.byteLength = e) }, dc = function(e, t, n) {
        Gc(this, dc, "DataView"), Gc(e, Bb, "DataView");
        var r = Ne(e).byteLength;
        if (0 > (t = ac(t)) || t > r) throw hh("Wrong offset");
        if (t + (n = void 0 === n ? r - t : ua(n)) > r) throw hh("Wrong length");
        Co(this, { buffer: e, byteLength: n, byteOffset: t }), la || (this.buffer = e, this.byteLength = n, this.byteOffset = t)
    }, la && (ih(Bb, "byteLength"), ih(dc, "buffer"), ih(dc, "byteLength"), ih(dc, "byteOffset")), Kf(dc.prototype, { getInt8: function(e) { return md(this, 1, e)[0] << 24 >> 24 }, getUint8: function(e) { return md(this, 1, e)[0] }, getInt16: function(e) { var t = md(this, 2, e, 1 < arguments.length ? arguments[1] : void 0); return (t[1] << 8 | t[0]) << 16 >> 16 }, getUint16: function(e) { var t = md(this, 2, e, 1 < arguments.length ? arguments[1] : void 0); return t[1] << 8 | t[0] }, getInt32: function(e) { return Jo(md(this, 4, e, 1 < arguments.length ? arguments[1] : void 0)) }, getUint32: function(e) { return Jo(md(this, 4, e, 1 < arguments.length ? arguments[1] : void 0)) >>> 0 }, getFloat32: function(e) { return Fo(md(this, 4, e, 1 < arguments.length ? arguments[1] : void 0), 23) }, getFloat64: function(e) { return Fo(md(this, 8, e, 1 < arguments.length ? arguments[1] : void 0), 52) }, setInt8: function(e, t) { nd(this, 1, e, Go, t) }, setUint8: function(e, t) { nd(this, 1, e, Go, t) }, setInt16: function(e, t) { nd(this, 2, e, Ho, t, 2 < arguments.length ? arguments[2] : void 0) }, setUint16: function(e, t) { nd(this, 2, e, Ho, t, 2 < arguments.length ? arguments[2] : void 0) }, setInt32: function(e, t) { nd(this, 4, e, Io, t, 2 < arguments.length ? arguments[2] : void 0) }, setUint32: function(e, t) { nd(this, 4, e, Io, t, 2 < arguments.length ? arguments[2] : void 0) }, setFloat32: function(e, t) { nd(this, 4, e, rw, t, 2 < arguments.length ? arguments[2] : void 0) }, setFloat64: function(e, t) { nd(this, 8, e, sw, t, 2 < arguments.length ? arguments[2] : void 0) } });
    Ec(Bb, "ArrayBuffer"), Ec(dc, "DataView");
    var Rf = { ArrayBuffer: Bb, DataView: dc },
        Fj = Rf.ArrayBuffer,
        No = Rf.DataView,
        Oo = Fj.prototype.slice,
        uw = Q((function() { return !new Fj(2).slice(1, void 0).byteLength }));
    P({ target: "ArrayBuffer", proto: !0, unsafe: !0, forced: uw }, {
        slice: function(e, t) {
            if (void 0 !== Oo && void 0 === t) return Oo.call(wa(this), e);
            var n = wa(this).byteLength;
            e = yb(e, n), t = yb(void 0 === t ? n : t, n), n = new(id(this, Fj))(ua(t - e));
            for (var r = new No(this), i = new No(n), o = 0; e < t;) i.setUint8(o++, r.getUint8(e++));
            return n
        }
    });
    var vw = Sa.f,
        kh = D.Int8Array,
        Gj = kh && kh.prototype,
        Po = D.Uint8ClampedArray,
        Qo = Po && Po.prototype,
        qc = kh && Wb(kh),
        ec = Gj && Wb(Gj),
        Ro = Object.prototype,
        So = Ro.isPrototypeOf,
        To = ra("toStringTag"),
        Hj = Be("TYPED_ARRAY_TAG"),
        Jc = Bo && !!Va && "Opera" !== If(D.opera),
        Uo = !1,
        Cb, rc = { Int8Array: 1, Uint8Array: 1, Uint8ClampedArray: 1, Int16Array: 2, Uint16Array: 2, Int32Array: 4, Uint32Array: 4, Float32Array: 4, Float64Array: 8 },
        ww = { BigInt64Array: 8, BigUint64Array: 8 },
        lh = function(e) { return !!ia(e) && (e = If(e), S(rc, e) || S(ww, e)) };
    for (Cb in rc) D[Cb] || (Jc = !1);
    if ((!Jc || "function" != typeof qc || qc === Function.prototype) && (qc = function() { throw TypeError("Incorrect invocation") }, Jc))
        for (Cb in rc) D[Cb] && Va(D[Cb], qc);
    if ((!Jc || !ec || ec === Ro) && (ec = qc.prototype, Jc))
        for (Cb in rc) D[Cb] && Va(D[Cb].prototype, ec);
    if (Jc && Wb(Qo) !== ec && Va(Qo, ec), la && !S(ec, To))
        for (Cb in Uo = !0, vw(ec, To, { get: function() { return ia(this) ? this[Hj] : void 0 } }), rc) D[Cb] && Oa(D[Cb], Hj, Cb);
    var Sf = Jc,
        Vo = Uo && Hj,
        Ea = function(e) { if (lh(e)) return e; throw TypeError("Target is not a typed array") },
        Oe = function(e) {
            if (Va) { if (So.call(qc, e)) return e } else
                for (var t in rc)
                    if (S(rc, Cb)) { var n = D[t]; if (n && (e === n || So.call(n, e))) return e } throw TypeError("Target is not a typed array constructor")
        },
        Ba = function(e, t, n) {
            if (la) {
                if (n)
                    for (var r in rc) { var i = D[r]; if (i && S(i.prototype, e)) try { delete i.prototype[e] } catch (e) {} }
                ec[e] && !n || Ua(ec, e, n ? t : Jc && Gj[e] || t)
            }
        },
        Wo = function(e, t, n) {
            var r, i;
            if (la) {
                if (Va) {
                    if (n)
                        for (r in rc)
                            if ((i = D[r]) && S(i, e)) try { delete i[e] } catch (e) {}
                    if (qc[e] && !n) return;
                    try { return Ua(qc, e, n ? t : Jc && qc[e] || t) } catch (e) {}
                }
                for (r in rc) !(i = D[r]) || i[e] && !n || Ua(i, e, t)
            }
        },
        Xo = qc,
        Tf = ec,
        xw = D.ArrayBuffer,
        Od = D.Int8Array,
        Ij = !Sf || !Q((function() { Od(1) })) || !Q((function() { new Od(-1) })) || !Xg((function(e) { new Od, new Od(null), new Od(1.5), new Od(e) }), !0) || Q((function() { return 1 !== new Od(new xw(2), 1, void 0).length })),
        mh = function(e, t) { if (0 > (e = ac(e))) throw RangeError("The argument can't be less than 0"); if (e % t) throw RangeError("Wrong offset"); return e },
        Jj = function(e) {
            var t = Ra(e),
                n = arguments.length,
                r = 1 < n ? arguments[1] : void 0,
                i = void 0 !== r,
                o = gj(t);
            if (null != o && !ej(o)) {
                var a = o.call(t),
                    s = a.next;
                for (t = []; !(o = s.call(a)).done;) t.push(o.value)
            }
            for (i && 2 < n && (r = Id(r, arguments[2], 2)), o = ua(t.length), a = new(Oe(this))(o), n = 0; o > n; n++) a[n] = i ? r(t[n], n) : t[n];
            return a
        },
        nh = function(e, t, n) { var r, i; return Va && "function" == typeof(r = t.constructor) && r !== n && ia(i = r.prototype) && i !== n.prototype && Va(e, i), e },
        Uf = ab((function(e) {
            var t = Hd.f,
                n = $a.get,
                r = $a.set,
                i = Sa.f,
                o = Gb.f,
                a = Math.round,
                s = D.RangeError,
                u = Rf.ArrayBuffer,
                c = Rf.DataView,
                l = function(e, t) {
                    var n = 0,
                        r = t.length;
                    for (e = new(Oe(e))(r); r > n;) e[n] = t[n++];
                    return e
                },
                f = function(e, t) { i(e, t, { get: function() { return n(this)[t] } }) },
                h = function(e) { var t; return e instanceof u || "ArrayBuffer" == (t = If(e)) || "SharedArrayBuffer" == t },
                p = function(e, t) { return lh(e) && "symbol" != typeof t && t in e && String(+t) == String(t) },
                d = function(e, t) { return p(e, t = lc(t, !0)) ? dd(2, e[t]) : o(e, t) },
                v = function(e, t, n) { return !(p(e, t = lc(t, !0)) && ia(n) && S(n, "value")) || S(n, "get") || S(n, "set") || n.configurable || S(n, "writable") && !n.writable || S(n, "enumerable") && !n.enumerable ? i(e, t, n) : (e[t] = n.value, e) };
            la ? (Sf || (Gb.f = d, Sa.f = v, f(Tf, "buffer"), f(Tf, "byteOffset"), f(Tf, "byteLength"), f(Tf, "length")), P({ target: "Object", stat: !0, forced: !Sf }, { getOwnPropertyDescriptor: d, defineProperty: v }), e.exports = function(e, o, f) {
                var p = e.match(/\d+$/)[0] / 8,
                    d = e + (f ? "Clamped" : "") + "Array",
                    v = "get" + e,
                    b = "set" + e,
                    g = D[d],
                    y = g;
                e = y && y.prototype;
                var m = {},
                    E = function(e, t) {
                        i(e, t, {
                            get: function() { var e = n(this); return e.view[v](t * p + e.byteOffset, !0) },
                            set: function(e) {
                                var r = n(this);
                                f && (e = 0 > (e = a(e)) ? 0 : 255 < e ? 255 : 255 & e), r.view[b](t * p + r.byteOffset, e, !0)
                            },
                            enumerable: !0
                        })
                    };
                Sf ? Ij && (y = o((function(e, t, n, r) { return Gc(e, y, d), nh(ia(t) ? h(t) ? void 0 !== r ? new g(t, mh(n, p), r) : void 0 !== n ? new g(t, mh(n, p)) : new g(t) : lh(t) ? l(y, t) : Jj.call(y, t) : new g(Me(t)), e, y) })), Va && Va(y, Xo), Jd(t(g), (function(e) { e in y || Oa(y, e, g[e]) })), y.prototype = e) : (y = o((function(e, t, n, i) {
                    Gc(e, y, d);
                    var o = 0,
                        a = 0;
                    if (ia(t)) {
                        if (!h(t)) return lh(t) ? l(y, t) : Jj.call(y, t);
                        var f = t;
                        if (a = mh(n, p), t = t.byteLength, void 0 === i) { if (t % p) throw s("Wrong length"); if (0 > (i = t - a)) throw s("Wrong length") } else if ((i = ua(i) * p) + a > t) throw s("Wrong length");
                        t = i / p
                    } else t = Me(t), f = new u(i = t * p);
                    for (r(e, { buffer: f, byteOffset: a, byteLength: i, length: t, view: new c(f) }); o < t;) E(e, o++)
                })), Va && Va(y, Xo), e = y.prototype = bc(Tf)), e.constructor !== y && Oa(e, "constructor", y), Vo && Oa(e, Vo, d), m[d] = y, P({ global: !0, forced: y != g, sham: !Sf }, m), "BYTES_PER_ELEMENT" in y || Oa(y, "BYTES_PER_ELEMENT", p), "BYTES_PER_ELEMENT" in e || Oa(e, "BYTES_PER_ELEMENT", p), Lf(d)
            }) : e.exports = function() {}
        }));
    Uf("Uint8", (function(e) { return function(t, n, r) { return e(this, t, n, r) } }));
    var yw = Math.min,
        zw = [].copyWithin || function(e, t) {
            var n = Ra(this),
                r = ua(n.length),
                i = yb(e, r),
                o = yb(t, r),
                a = 2 < arguments.length ? arguments[2] : void 0;
            for (r = yw((void 0 === a ? r : yb(a, r)) - o, r - i), a = 1, o < i && i < o + r && (a = -1, o += r - 1, i += r - 1); 0 < r--;) o in n ? n[i] = n[o] : delete n[i], i += a, o += a;
            return n
        };
    Ba("copyWithin", (function(e, t) { return zw.call(Ea(this), e, t, 2 < arguments.length ? arguments[2] : void 0) })), Ba("every", (function(e) { return fv(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0) })), Ba("fill", (function(e) { return Dj.apply(Ea(this), arguments) })), Ba("filter", (function(e) {
        var t = Nn(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0),
            n = id(this, this.constructor),
            r = 0,
            i = t.length;
        for (n = new(Oe(n))(i); i > r;) n[r] = t[r++];
        return n
    })), Ba("find", (function(e) { return On(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0) })), Ba("findIndex", (function(e) { return Pn(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0) })), Ba("forEach", (function(e) { Jd(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0) })), Ba("includes", (function(e) { return vn(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0) })), Ba("indexOf", (function(e) { return Ui(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0) }));
    var Yo = ra("iterator"),
        Zo = D.Uint8Array,
        Aw = ld.values,
        Bw = ld.keys,
        Cw = ld.entries,
        Kj = Zo && Zo.prototype[Yo],
        $o = !!Kj && ("values" == Kj.name || null == Kj.name),
        ap = function() { return Aw.call(Ea(this)) };
    Ba("entries", (function() { return Cw.call(Ea(this)) })), Ba("keys", (function() { return Bw.call(Ea(this)) })), Ba("values", ap, !$o), Ba(Yo, ap, !$o);
    var Dw = [].join;
    Ba("join", (function(e) { return Dw.apply(Ea(this), arguments) }));
    var Ew = Math.min,
        Lj = [].lastIndexOf,
        bp = !!Lj && 0 > 1 / [1].lastIndexOf(1, -0),
        Fw = Ge("lastIndexOf"),
        Gw = bp || !Fw ? function(e) {
            if (bp) return Lj.apply(this, arguments) || 0;
            var t = rb(this),
                n = ua(t.length),
                r = n - 1;
            for (1 < arguments.length && (r = Ew(r, ac(arguments[1]))), 0 > r && (r = n + r); 0 <= r; r--)
                if (r in t && t[r] === e) return r || 0;
            return -1
        } : Lj;
    Ba("lastIndexOf", (function(e) { return Gw.apply(Ea(this), arguments) })), Ba("map", (function(e) { return Mn(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0, (function(e, t) { return new(Oe(id(e, e.constructor)))(t) })) }));
    var cp = function(e) {
            return function(t, n, r, i) {
                zb(n), t = Ra(t);
                var o = Cf(t),
                    a = ua(t.length),
                    s = e ? a - 1 : 0,
                    u = e ? -1 : 1;
                if (2 > r)
                    for (;;) { if (s in o) { i = o[s], s += u; break } if (s += u, e ? 0 > s : a <= s) throw TypeError("Reduce of empty array with no initial value") }
                for (; e ? 0 <= s : a > s; s += u) s in o && (i = n(i, o[s], s, t));
                return i
            }
        },
        dp = cp(!1),
        Hw = cp(!0);
    Ba("reduce", (function(e) { return dp(Ea(this), e, arguments.length, 1 < arguments.length ? arguments[1] : void 0) })), Ba("reduceRight", (function(e) { return Hw(Ea(this), e, arguments.length, 1 < arguments.length ? arguments[1] : void 0) }));
    var Iw = Math.floor;
    Ba("reverse", (function() { for (var e, t = Ea(this).length, n = Iw(t / 2), r = 0; r < n;) e = this[r], this[r++] = this[--t], this[t] = e; return this }));
    var Jw = Q((function() { new Int8Array(1).set({}) }));
    Ba("set", (function(e) {
        Ea(this);
        var t = mh(1 < arguments.length ? arguments[1] : void 0, 1),
            n = this.length,
            r = Ra(e),
            i = ua(r.length),
            o = 0;
        if (i + t > n) throw RangeError("Wrong length");
        for (; o < i;) this[t + o] = r[o++]
    }), Jw);
    var Kw = [].slice,
        Lw = Q((function() { new Int8Array(1).slice() }));
    Ba("slice", (function(e, t) {
        e = Kw.call(Ea(this), e, t);
        var n = id(this, this.constructor);
        t = 0;
        var r = e.length;
        for (n = new(Oe(n))(r); r > t;) n[t] = e[t++];
        return n
    }), Lw), Ba("some", (function(e) { return ev(Ea(this), e, 1 < arguments.length ? arguments[1] : void 0) }));
    var Mw = [].sort;
    Ba("sort", (function(e) { return Mw.call(Ea(this), e) })), Ba("subarray", (function(e, t) {
        var n = Ea(this),
            r = n.length;
        return e = yb(e, r), new(id(n, n.constructor))(n.buffer, n.byteOffset + e * n.BYTES_PER_ELEMENT, ua((void 0 === t ? r : yb(t, r)) - e))
    }));
    var oh = D.Int8Array,
        ep = [].toLocaleString,
        Nw = [].slice,
        Ow = !!oh && Q((function() { ep.call(new oh(1)) })),
        Pw = Q((function() { return [1, 2].toLocaleString() != new oh([1, 2]).toLocaleString() })) || !Q((function() { oh.prototype.toLocaleString.call([1, 2]) }));
    Ba("toLocaleString", (function() { return ep.apply(Ow ? Nw.call(Ea(this)) : Ea(this), arguments) }), Pw);
    var fp = D.Uint8Array,
        Qw = fp && fp.prototype || {},
        ph = [].toString,
        Rw = [].join;
    Q((function() { ph.call({}) })) && (ph = function() { return Rw.call(this) }), Ba("toString", ph, Qw.toString != ph);
    var gp = Rf.ArrayBuffer;
    P({ global: !0, forced: D.ArrayBuffer !== gp }, { ArrayBuffer: gp }), Lf("ArrayBuffer");
    var Sw = Sa.f,
        Mj = Function.prototype,
        Tw = Mj.toString,
        Uw = /^\s*function ([^ (]*)/;
    !la || "name" in Mj || Sw(Mj, "name", { configurable: !0, get: function() { try { return Tw.call(this).match(Uw)[1] } catch (e) { return "" } } });
    var hp = RegExp.prototype,
        ip = hp.toString,
        Vw = Q((function() { return "/a/b" != ip.call({ source: "a", flags: "b" }) })),
        Ww = "toString" != ip.name;
    (Vw || Ww) && Ua(RegExp.prototype, "toString", (function() {
        var e = wa(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + (e = String(void 0 === n && e instanceof RegExp && !("flags" in hp) ? Vi.call(e) : n))
    }), { unsafe: !0 });
    var Xw = Hf("splice"),
        Yw = Math.max,
        Zw = Math.min;
    P({ target: "Array", proto: !0, forced: !Xw }, {
        splice: function(e, t) {
            var n, r, i = Ra(this),
                o = ua(i.length),
                a = yb(e, o),
                s = arguments.length;
            if (0 === s ? s = n = 0 : 1 === s ? (s = 0, n = o - a) : (s -= 2, n = Zw(Yw(ac(t), 0), o - a)), 9007199254740991 < o + s - n) throw TypeError("Maximum allowed length exceeded");
            var u = Wg(i, n);
            for (r = 0; r < n; r++) {
                var c = a + r;
                c in i && Ie(u, r, i[c])
            }
            if (u.length = n, s < n) {
                for (r = a; r < o - n; r++) {
                    var l = r + s;
                    (c = r + n) in i ? i[l] = i[c] : delete i[l]
                }
                for (r = o; r > o - n + s; r--) delete i[r - 1]
            } else if (s > n)
                for (r = o - n; r > a; r--) l = r + s - 1, (c = r + n - 1) in i ? i[l] = i[c] : delete i[l];
            for (r = 0; r < s; r++) i[r + a] = arguments[r + 2];
            return i.length = o - n + s, u
        }
    });
    var Nj = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 },
        Oj = ra("iterator"),
        jp = ra("toStringTag"),
        Pj = ld.values,
        qh;
    for (qh in Nj) {
        var kp = D[qh],
            Kc = kp && kp.prototype;
        if (Kc) {
            if (Kc[Oj] !== Pj) try { Oa(Kc, Oj, Pj) } catch (c) { Kc[Oj] = Pj }
            if (Kc[jp] || Oa(Kc, jp, qh), Nj[qh])
                for (var Pe in ld)
                    if (Kc[Pe] !== ld[Pe]) try { Oa(Kc, Pe, ld[Pe]) } catch (c) { Kc[Pe] = ld[Pe] }
        }
    }
    var lp = Object.is || function(e, t) { return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t };
    Ug("search", 1, (function(e, t, n) {
            return [function(t) {
                var n = kb(this),
                    r = null == t ? void 0 : t[e];
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
            }, function(e) {
                var r = n(t, e, this);
                if (r.done) return r.value;
                e = wa(e);
                var i = String(this);
                return r = e.lastIndex, lp(r, 0) || (e.lastIndex = 0), i = Fe(e, i), lp(e.lastIndex, r) || (e.lastIndex = r), null === i ? -1 : i.index
            }]
        })), ab((function(e) {
            ! function(t, n) { e.exports ? e.exports = n(t) : n(t) }("undefined" != typeof self ? self : Za, (function(e) {
                function t(e) { return btoa(e).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_") }

                function n(e) { return e = (e += "===").slice(0, -e.length % 4), atob(e.replace(/-/g, "+").replace(/_/g, "/")) }

                function r(e) { for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++) t[n] = e.charCodeAt(n); return t }

                function i(e) { return e instanceof ArrayBuffer && (e = new Uint8Array(e)), String.fromCharCode.apply(String, e) }

                function o(e) {
                    var t = { name: (e.name || e || "").toUpperCase().replace("V", "v") };
                    switch (t.name) {
                        case "SHA-1":
                        case "SHA-256":
                        case "SHA-384":
                        case "SHA-512":
                            break;
                        case "AES-CBC":
                        case "AES-GCM":
                        case "AES-KW":
                            e.length && (t.length = e.length);
                            break;
                        case "HMAC":
                            e.hash && (t.hash = o(e.hash)), e.length && (t.length = e.length);
                            break;
                        case "RSAES-PKCS1-v1_5":
                            e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                            break;
                        case "RSASSA-PKCS1-v1_5":
                        case "RSA-OAEP":
                            e.hash && (t.hash = o(e.hash)), e.publicExponent && (t.publicExponent = new Uint8Array(e.publicExponent)), e.modulusLength && (t.modulusLength = e.modulusLength);
                            break;
                        default:
                            throw new SyntaxError("Bad algorithm name")
                    }
                    return t
                }

                function a(e) { return { HMAC: { "SHA-1": "HS1", "SHA-256": "HS256", "SHA-384": "HS384", "SHA-512": "HS512" }, "RSASSA-PKCS1-v1_5": { "SHA-1": "RS1", "SHA-256": "RS256", "SHA-384": "RS384", "SHA-512": "RS512" }, "RSAES-PKCS1-v1_5": { "": "RSA1_5" }, "RSA-OAEP": { "SHA-1": "RSA-OAEP", "SHA-256": "RSA-OAEP-256" }, "AES-KW": { 128: "A128KW", 192: "A192KW", 256: "A256KW" }, "AES-GCM": { 128: "A128GCM", 192: "A192GCM", 256: "A256GCM" }, "AES-CBC": { 128: "A128CBC", 192: "A192CBC", 256: "A256CBC" } }[e.name][(e.hash || {}).name || e.length || ""] }

                function s(e) {
                    (e instanceof ArrayBuffer || e instanceof Uint8Array) && (e = JSON.parse(decodeURIComponent(escape(i(e)))));
                    var t = { kty: e.kty, alg: e.alg, ext: e.ext || e.extractable };
                    switch (t.kty) {
                        case "oct":
                            t.k = e.k;
                        case "RSA":
                            "n e d p q dp dq qi oth".split(" ").forEach((function(n) { n in e && (t[n] = e[n]) }));
                            break;
                        default:
                            throw new TypeError("Unsupported key type")
                    }
                    return t
                }

                function u(e) { return e = s(e), E && (e.extractable = e.ext, delete e.ext), r(unescape(encodeURIComponent(JSON.stringify(e)))).buffer }

                function c(e) {
                    var n = l(e),
                        r = !1;
                    switch (2 < n.length && (r = !0, n.shift()), e = { ext: !0 }, n[0][0]) {
                        case "1.2.840.113549.1.1.1":
                            var o = "n e d p q dp dq qi".split(" ");
                            for (n = l(n[1]), r && n.shift(), r = 0; r < n.length; r++) n[r][0] || (n[r] = n[r].subarray(1)), e[o[r]] = t(i(n[r]));
                            e.kty = "RSA";
                            break;
                        default:
                            throw new TypeError("Unsupported key type")
                    }
                    return e
                }

                function l(e, t) {
                    if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), t || (t = { pos: 0, end: e.length }), 2 > t.end - t.pos || t.end > e.length) throw new RangeError("Malformed DER");
                    var n = e[t.pos++],
                        r = e[t.pos++];
                    if (128 <= r) {
                        if (r &= 127, t.end - t.pos < r) throw new RangeError("Malformed DER");
                        for (var o = 0; r--;) o <<= 8, o |= e[t.pos++];
                        r = o
                    }
                    if (t.end - t.pos < r) throw new RangeError("Malformed DER");
                    switch (n) {
                        case 2:
                            n = e.subarray(t.pos, t.pos += r);
                            break;
                        case 3:
                            if (e[t.pos++]) throw Error("Unsupported bit string");
                            r--;
                        case 4:
                            n = new Uint8Array(e.subarray(t.pos, t.pos += r)).buffer;
                            break;
                        case 5:
                            n = null;
                            break;
                        case 6:
                            if (!((e = btoa(i(e.subarray(t.pos, t.pos += r)))) in _)) throw Error("Unsupported OBJECT ID " + e);
                            n = _[e];
                            break;
                        case 48:
                            for (n = [], r = t.pos + r; t.pos < r;) n.push(l(e, t));
                            break;
                        default:
                            throw Error("Unsupported DER tag 0x" + n.toString(16))
                    }
                    return n
                }

                function f(e, t) {
                    t || (t = []);
                    var n = t.length + 2;
                    if (t.push(0, 0), e instanceof Uint8Array)
                        for (var i = 2, o = e.length, a = 0; a < o; a++) t.push(e[a]);
                    else if (e instanceof ArrayBuffer)
                        for (i = 4, o = e.byteLength, e = new Uint8Array(e), a = 0; a < o; a++) t.push(e[a]);
                    else if (null === e) i = 5, o = 0;
                    else if ("string" == typeof e && e in O)
                        for (i = 6, o = (e = r(atob(O[e]))).length, a = 0; a < o; a++) t.push(e[a]);
                    else if (e instanceof Array) {
                        for (a = 0; a < e.length; a++) f(e[a], t);
                        i = 48, o = t.length - n
                    } else {
                        if (!("object" === X(e) && 3 === e.tag && e.value instanceof ArrayBuffer)) throw Error("Unsupported DER value " + e);
                        for (i = 3, o = (e = new Uint8Array(e.value)).byteLength, t.push(0), a = 0; a < o; a++) t.push(e[a]);
                        o++
                    }
                    if (128 <= o) {
                        for (a = o, o = 4, t.splice(n, 0, a >> 24 & 255, a >> 16 & 255, a >> 8 & 255, 255 & a); 1 < o && !(a >> 24);) a <<= 8, o--;
                        4 > o && t.splice(n, 4 - o), o |= 128
                    }
                    return t.splice(n - 2, 2, i, o), t
                }

                function h(e, t, n, r) { Object.defineProperties(this, { _key: { value: e }, type: { value: e.type, enumerable: !0 }, extractable: { value: void 0 === n ? e.extractable : n, enumerable: !0 }, algorithm: { value: void 0 === t ? e.algorithm : t, enumerable: !0 }, usages: { value: void 0 === r ? e.usages : r, enumerable: !0 } }) }

                function p(e) { return "verify" === e || "encrypt" === e || "wrapKey" === e }

                function d(e) { return "sign" === e || "decrypt" === e || "unwrapKey" === e }
                if ("function" != typeof Promise) throw "Promise support required";
                var v = e.crypto || e.msCrypto;
                if (v) {
                    var b = v.subtle || v.webkitSubtle;
                    if (b) {
                        var g = e.Crypto || v.constructor || Object,
                            y = e.SubtleCrypto || b.constructor || Object;
                        e.CryptoKey || e.Key;
                        var m = -1 < e.navigator.userAgent.indexOf("Edge/"),
                            E = !!e.msCrypto && !m,
                            w = !v.subtle && !!v.webkitSubtle;
                        if (E || w) {
                            var _ = { KoZIhvcNAQEB: "1.2.840.113549.1.1.1" },
                                O = { "1.2.840.113549.1.1.1": "KoZIhvcNAQEB" };
                            if (["generateKey", "importKey", "unwrapKey"].forEach((function(e) {
                                    var t = b[e];
                                    b[e] = function(i, l, f) {
                                        var g = [].slice.call(arguments);
                                        switch (e) {
                                            case "generateKey":
                                                var y = o(i),
                                                    m = l,
                                                    _ = f;
                                                break;
                                            case "importKey":
                                                y = o(f), m = g[3], _ = g[4], "jwk" === i && ((l = s(l)).alg || (l.alg = a(y)), l.key_ops || (l.key_ops = "oct" !== l.kty ? "d" in l ? _.filter(d) : _.filter(p) : _.slice()), g[1] = u(l));
                                                break;
                                            case "unwrapKey":
                                                y = g[4], m = g[5], _ = g[6], g[2] = f._key
                                        }
                                        if ("generateKey" === e && "HMAC" === y.name && y.hash) return y.length = y.length || { "SHA-1": 512, "SHA-256": 512, "SHA-384": 1024, "SHA-512": 1024 }[y.hash.name], b.importKey("raw", v.getRandomValues(new Uint8Array(y.length + 7 >> 3)), y, m, _);
                                        if (w && "generateKey" === e && "RSASSA-PKCS1-v1_5" === y.name && (!y.modulusLength || 2048 <= y.modulusLength)) return (i = o(i)).name = "RSAES-PKCS1-v1_5", delete i.hash, b.generateKey(i, !0, ["encrypt", "decrypt"]).then((function(e) { return Promise.all([b.exportKey("jwk", e.publicKey), b.exportKey("jwk", e.privateKey)]) })).then((function(e) { return e[0].alg = e[1].alg = a(y), e[0].key_ops = _.filter(p), e[1].key_ops = _.filter(d), Promise.all([b.importKey("jwk", e[0], y, !0, e[0].key_ops), b.importKey("jwk", e[1], y, m, e[1].key_ops)]) })).then((function(e) { return { publicKey: e[0], privateKey: e[1] } }));
                                        if ((w || E && "SHA-1" === (y.hash || {}).name) && "importKey" === e && "jwk" === i && "HMAC" === y.name && "oct" === l.kty) return b.importKey("raw", r(n(l.k)), f, g[3], g[4]);
                                        if (w && "importKey" === e && ("spki" === i || "pkcs8" === i)) return b.importKey("jwk", c(l), f, g[3], g[4]);
                                        if (E && "unwrapKey" === e) return b.decrypt(g[3], f, l).then((function(e) { return b.importKey(i, e, g[4], g[5], g[6]) }));
                                        try { var O = t.apply(b, g) } catch (e) { return Promise.reject(e) }
                                        return E && (O = new Promise((function(e, t) { O.onabort = O.onerror = function(e) { t(e) }, O.oncomplete = function(t) { e(t.target.result) } }))), O = O.then((function(e) { return "HMAC" !== y.name || y.length || (y.length = 8 * e.algorithm.length), 0 == y.name.search("RSA") && (y.modulusLength || (y.modulusLength = (e.publicKey || e).algorithm.modulusLength), y.publicExponent || (y.publicExponent = (e.publicKey || e).algorithm.publicExponent)), e.publicKey && e.privateKey ? { publicKey: new h(e.publicKey, y, m, _.filter(p)), privateKey: new h(e.privateKey, y, m, _.filter(d)) } : new h(e, y, m, _) }))
                                    }
                                })), ["exportKey", "wrapKey"].forEach((function(e) {
                                    var o = b[e];
                                    b[e] = function(u, c, l) {
                                        var h = [].slice.call(arguments);
                                        switch (e) {
                                            case "exportKey":
                                                h[1] = c._key;
                                                break;
                                            case "wrapKey":
                                                h[1] = c._key, h[2] = l._key
                                        }
                                        if ((w || E && "SHA-1" === (c.algorithm.hash || {}).name) && "exportKey" === e && "jwk" === u && "HMAC" === c.algorithm.name && (h[0] = "raw"), !w || "exportKey" !== e || "spki" !== u && "pkcs8" !== u || (h[0] = "jwk"), E && "wrapKey" === e) return b.exportKey(u, c).then((function(e) { return "jwk" === u && (e = r(unescape(encodeURIComponent(JSON.stringify(s(e)))))), b.encrypt(h[3], l, e) }));
                                        try { var v = o.apply(b, h) } catch (e) { return Promise.reject(e) }
                                        return E && (v = new Promise((function(e, t) { v.onabort = v.onerror = function(e) { t(e) }, v.oncomplete = function(t) { e(t.target.result) } }))), "exportKey" === e && "jwk" === u && (v = v.then((function(e) { return (w || E && "SHA-1" === (c.algorithm.hash || {}).name) && "HMAC" === c.algorithm.name ? { kty: "oct", alg: a(c.algorithm), key_ops: c.usages.slice(), ext: !0, k: t(i(e)) } : ((e = s(e)).alg || (e.alg = a(c.algorithm)), e.key_ops || (e.key_ops = "public" === c.type ? c.usages.filter(p) : "private" === c.type ? c.usages.filter(d) : c.usages.slice()), e) }))), !w || "exportKey" !== e || "spki" !== u && "pkcs8" !== u || (v = v.then((function(e) {
                                            var t = [
                                                    ["", null]
                                                ],
                                                i = !1;
                                            switch ((e = s(e)).kty) {
                                                case "RSA":
                                                    for (var o = "n e d p q dp dq qi".split(" "), a = [], u = 0; u < o.length && o[u] in e; u++) {
                                                        var c = a[u] = r(n(e[o[u]]));
                                                        128 & c[0] && (a[u] = new Uint8Array(c.length + 1), a[u].set(c, 1))
                                                    }
                                                    2 < a.length && (i = !0, a.unshift(new Uint8Array([0]))), t[0][0] = "1.2.840.113549.1.1.1";
                                                    break;
                                                default:
                                                    throw new TypeError("Unsupported key type")
                                            }
                                            return t.push(new Uint8Array(f(a)).buffer), i ? t.unshift(new Uint8Array([0])) : t[1] = { tag: 3, value: t[1] }, new Uint8Array(f(t)).buffer
                                        }))), v
                                    }
                                })), ["encrypt", "decrypt", "sign", "verify"].forEach((function(e) {
                                    var t = b[e];
                                    b[e] = function(n, r, i, a) {
                                        if (E && (!i.byteLength || a && !a.byteLength)) throw Error("Empty input is not allowed");
                                        var s = [].slice.call(arguments),
                                            u = o(n);
                                        if (!E || "sign" !== e && "verify" !== e || "RSASSA-PKCS1-v1_5" !== n && "HMAC" !== n || (s[0] = { name: n }), E && r.algorithm.hash && (s[0].hash = s[0].hash || r.algorithm.hash), E && "decrypt" === e && "AES-GCM" === u.name) {
                                            var c = n.tagLength >> 3;
                                            s[2] = (i.buffer || i).slice(0, i.byteLength - c), n.tag = (i.buffer || i).slice(i.byteLength - c)
                                        }
                                        E && "AES-GCM" === u.name && void 0 === s[0].tagLength && (s[0].tagLength = 128), s[1] = r._key;
                                        try { var l = t.apply(b, s) } catch (e) { return Promise.reject(e) }
                                        return E && (l = new Promise((function(t, n) {
                                            l.onabort = l.onerror = function(e) { n(e) }, l.oncomplete = function(n) {
                                                if (n = n.target.result, "encrypt" === e && n instanceof AesGcmEncryptResult) {
                                                    var r = n.ciphertext,
                                                        i = n.tag;
                                                    (n = new Uint8Array(r.byteLength + i.byteLength)).set(new Uint8Array(r), 0), n.set(new Uint8Array(i), r.byteLength), n = n.buffer
                                                }
                                                t(n)
                                            }
                                        }))), l
                                    }
                                })), E) {
                                var A = b.digest;
                                b.digest = function(e, t) { if (!t.byteLength) throw Error("Empty input is not allowed"); try { var n = A.call(b, e, t) } catch (e) { return Promise.reject(e) } return n = new Promise((function(e, t) { n.onabort = n.onerror = function(e) { t(e) }, n.oncomplete = function(t) { e(t.target.result) } })) }, e.crypto = Object.create(v, { getRandomValues: { value: function(e) { return v.getRandomValues(e) } }, subtle: { value: b } }), e.CryptoKey = h
                            }
                            w && (v.subtle = b, e.Crypto = g, e.SubtleCrypto = y, e.CryptoKey = h)
                        }
                    }
                }
            }))
        })),
        function(e) { e.console || (e.console = {}), e = e.console; for (var t, n = function() {}, r = ["memory"], i = "assert clear count debug dir dirxml error exception group groupCollapsed groupEnd info log markTimeline profile profiles profileEnd show table time timeEnd timeline timelineEnd timeStamp trace warn".split(" "); t = r.pop();) e[t] || (e[t] = {}); for (; t = i.pop();) e[t] || (e[t] = n) }("undefined" == typeof window ? Za : window), P({ target: "Object", stat: !0 }, { setPrototypeOf: Va });
    var $w = Q((function() { Wb(1) }));
    P({ target: "Object", stat: !0, forced: $w, sham: !Un }, { getPrototypeOf: function(e) { return Wb(Ra(e)) } });
    var mp = [].slice,
        Qj = {},
        ax = Function.bind || function(e) {
            var t = zb(this),
                n = mp.call(arguments, 1),
                r = function() {
                    var i = n.concat(mp.call(arguments));
                    if (this instanceof r) {
                        var o = i.length;
                        if (!(o in Qj)) {
                            for (var a = [], s = 0; s < o; s++) a[s] = "a[" + s + "]";
                            Qj[o] = Function("C,a", "return new C(" + a.join(",") + ")")
                        }
                        i = Qj[o](t, i)
                    } else i = t.apply(e, i);
                    return i
                };
            return ia(t.prototype) && (r.prototype = t.prototype), r
        },
        Rj = mc("Reflect", "construct"),
        np = Q((function() {
            function e() {}
            return !(Rj((function() {}), [], e) instanceof e)
        })),
        op = !Q((function() { Rj((function() {})) })),
        pp = np || op;
    P({ target: "Reflect", stat: !0, forced: pp, sham: pp }, {
        construct: function(e, t) {
            zb(e), wa(t);
            var n = 3 > arguments.length ? e : zb(arguments[2]);
            if (op && !np) return Rj(e, t, n);
            if (e == n) {
                switch (t.length) {
                    case 0:
                        return new e;
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3])
                }
                return (n = [null]).push.apply(n, t), new(ax.apply(e, n))
            }
            n = n.prototype, n = bc(ia(n) ? n : Object.prototype);
            var r = Function.apply.call(e, n, t);
            return ia(r) ? r : n
        }
    }), P({ target: "Reflect", stat: !0 }, { get: Dl });
    var qp = Gb.f,
        bx = Q((function() { qp(1) }));
    P({ target: "Object", stat: !0, forced: !la || bx, sham: !la }, { getOwnPropertyDescriptor: function(e, t) { return qp(rb(e), t) } });
    var rp = Hd.f,
        cx = {}.toString,
        sp = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        Sj = function(e) { if (sp && "[object Window]" == cx.call(e)) try { var t = rp(e) } catch (e) { t = sp.slice() } else t = rp(rb(e)); return t },
        tp = { f: ra },
        dx = Sa.f,
        rh = function(e) {
            var t = D.Symbol || (D.Symbol = {});
            S(t, e) || dx(t, e, { value: tp.f(e) })
        },
        sb = Qg("hidden"),
        up = ra("toPrimitive"),
        ex = $a.set,
        vp = $a.getterFor("Symbol"),
        Pb = Object.prototype,
        tb = D.Symbol,
        Vf = mc("JSON", "stringify"),
        wp = Gb.f,
        od = Sa.f,
        xp = Sj,
        fx = Bf,
        Lc = fd("symbols"),
        Wf = fd("op-symbols"),
        Tj = fd("string-to-symbol-registry"),
        Uj = fd("symbol-to-string-registry"),
        gx = fd("wks"),
        Vj = D.QObject,
        Wj = !Vj || !Vj.prototype || !Vj.prototype.findChild,
        Xj = la && Q((function() { return 7 != bc(od({}, "a", { get: function() { return od(this, "a", { value: 7 }).a } })).a })) ? function(e, t, n) {
            var r = wp(Pb, t);
            r && delete Pb[t], od(e, t, n), r && e !== Pb && od(Pb, t, r)
        } : od,
        Yj = function(e, t) { var n = Lc[e] = bc(tb.prototype); return ex(n, { type: "Symbol", tag: e, description: t }), la || (n.description = t), n },
        Zj = En ? function(e) { return "symbol" == typeof e } : function(e) { return Object(e) instanceof tb },
        sh = function(e, t, n) { return e === Pb && sh(Wf, t, n), wa(e), t = lc(t, !0), wa(n), S(Lc, t) ? (n.enumerable ? (S(e, sb) && e[sb][t] && (e[sb][t] = !1), n = bc(n, { enumerable: dd(0, !1) })) : (S(e, sb) || od(e, sb, dd(1, {})), e[sb][t] = !0), Xj(e, t, n)) : od(e, t, n) },
        yp = function(e, t) { wa(e); var n = rb(t); return t = Dc(n).concat(ak(n)), Jd(t, (function(t) { la && !bk.call(n, t) || sh(e, t, n[t]) })), e },
        bk = function(e) { e = lc(e, !0); var t = fx.call(this, e); return !(this === Pb && S(Lc, e) && !S(Wf, e)) && (!(t || !S(this, e) || !S(Lc, e) || S(this, sb) && this[sb][e]) || t) },
        zp = function(e, t) { if (e = rb(e), t = lc(t, !0), e !== Pb || !S(Lc, t) || S(Wf, t)) { var n = wp(e, t); return !n || !S(Lc, t) || S(e, sb) && e[sb][t] || (n.enumerable = !0), n } },
        Ap = function(e) { e = xp(rb(e)); var t = []; return Jd(e, (function(e) { S(Lc, e) || S(Ce, e) || t.push(e) })), t },
        ak = function(e) {
            var t = e === Pb;
            e = xp(t ? Wf : rb(e));
            var n = [];
            return Jd(e, (function(e) {!S(Lc, e) || t && !S(Pb, e) || n.push(Lc[e]) })), n
        };
    if (pc || (tb = function() {
            if (this instanceof tb) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = Be(e),
                n = function(e) { this === Pb && n.call(Wf, e), S(this, sb) && S(this[sb], t) && (this[sb][t] = !1), Xj(this, t, dd(1, e)) };
            return la && Wj && Xj(Pb, t, { configurable: !0, set: n }), Yj(t, e)
        }, Ua(tb.prototype, "toString", (function() { return vp(this).tag })), Ua(tb, "withoutSetter", (function(e) { return Yj(Be(e), e) })), Bf = bk, Sa.f = sh, Gb.f = zp, Hd.f = Sj = Ap, Df.f = ak, tp.f = function(e) { return Yj(ra(e), e) }, la && (od(tb.prototype, "description", { configurable: !0, get: function() { return vp(this).description } }), Ua(Pb, "propertyIsEnumerable", bk, { unsafe: !0 }))), P({ global: !0, wrap: !0, forced: !pc, sham: !pc }, { Symbol: tb }), Jd(Dc(gx), (function(e) { rh(e) })), P({ target: "Symbol", stat: !0, forced: !pc }, { for: function(e) { if (e = String(e), S(Tj, e)) return Tj[e]; var t = tb(e); return Tj[e] = t, Uj[t] = e, t }, keyFor: function(e) { if (!Zj(e)) throw TypeError(e + " is not a symbol"); if (S(Uj, e)) return Uj[e] }, useSetter: function() { Wj = !0 }, useSimple: function() { Wj = !1 } }), P({ target: "Object", stat: !0, forced: !pc, sham: !la }, { create: function(e, t) { return void 0 === t ? bc(e) : yp(bc(e), t) }, defineProperty: sh, defineProperties: yp, getOwnPropertyDescriptor: zp }), P({ target: "Object", stat: !0, forced: !pc }, { getOwnPropertyNames: Ap, getOwnPropertySymbols: ak }), P({ target: "Object", stat: !0, forced: Q((function() { Df.f(1) })) }, { getOwnPropertySymbols: function(e) { return Df.f(Ra(e)) } }), Vf) {
        var hx = !pc || Q((function() { var e = tb(); return "[null]" != Vf([e]) || "{}" != Vf({ a: e }) || "{}" != Vf(Object(e)) }));
        P({ target: "JSON", stat: !0, forced: hx }, { stringify: function(e, t, n) { for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]); if (r = t, (ia(t) || void 0 !== e) && !Zj(e)) return jd(t) || (t = function(e, t) { if ("function" == typeof r && (t = r.call(this, e, t)), !Zj(t)) return t }), i[1] = t, Vf.apply(null, i) } })
    }
    tb.prototype[up] || Oa(tb.prototype, up, tb.prototype.valueOf), Ec(tb, "Symbol"), Ce[sb] = !0;
    var ix = Sa.f,
        Mc = D.Symbol;
    if (la && "function" == typeof Mc && (!("description" in Mc.prototype) || void 0 !== Mc().description)) {
        var Bp = {},
            Xf = function() {
                var e = 1 > arguments.length || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof Xf ? new Mc(e) : void 0 === e ? Mc() : Mc(e);
                return "" === e && (Bp[t] = !0), t
            };
        yn(Xf, Mc);
        var ck = Xf.prototype = Mc.prototype;
        ck.constructor = Xf;
        var jx = ck.toString,
            kx = "Symbol(test)" == String(Mc("test")),
            lx = /^Symbol\((.*)\)[^)]+$/;
        ix(ck, "description", {
            configurable: !0,
            get: function() {
                var e = ia(this) ? this.valueOf() : this,
                    t = jx.call(e);
                return S(Bp, e) ? "" : "" === (e = kx ? t.slice(7, -1) : t.replace(lx, "$1")) ? void 0 : e
            }
        }), P({ global: !0, forced: !0 }, { Symbol: Xf })
    }
    rh("toStringTag"), Ec(D.JSON, "JSON", !0), Ec(Math, "Math", !0),
        function() {
            function e(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function n(e, n, r) { return n && t(e.prototype, n), r && t(e, r), e }

            function r(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && o(e, t)
            }

            function i(e) { return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) }

            function o(e, t) { return (o = Object.setPrototypeOf || function(e, t) { return e.__proto__ = t, e })(e, t) }

            function a(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e }

            function s(e) {
                var t = function() { if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0 } catch (e) { return !1 } }();
                return function() {
                    var n = i(e);
                    if (t) {
                        var r = i(this).constructor;
                        n = Reflect.construct(n, arguments, r)
                    } else n = n.apply(this, arguments);
                    return n = !n || "object" !== X(n) && "function" != typeof n ? a(this) : n
                }
            }

            function u(e, t, n) { return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) { for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e));); if (e) return (t = Object.getOwnPropertyDescriptor(e, t)).get ? t.get.call(n) : t.value })(e, t, n || e) }
            var c = function() {
                    function t() { e(this, t), Object.defineProperty(this, "listeners", { value: {}, writable: !0, configurable: !0 }) }
                    return n(t, [{ key: "addEventListener", value: function(e, t, n) { e in this.listeners || (this.listeners[e] = []), this.listeners[e].push({ callback: t, options: n }) } }, {
                        key: "removeEventListener",
                        value: function(e, t) {
                            if (e in this.listeners)
                                for (var n = 0, r = (e = this.listeners[e]).length; n < r; n++)
                                    if (e[n].callback === t) { e.splice(n, 1); break }
                        }
                    }, {
                        key: "dispatchEvent",
                        value: function(e) {
                            if (e.type in this.listeners) {
                                for (var t = this.listeners[e.type].slice(), n = 0, r = t.length; n < r; n++) {
                                    var i = t[n];
                                    try { i.callback.call(this, e) } catch (e) { Promise.resolve().then((function() { throw e })) }
                                    i.options && i.options.once && this.removeEventListener(e.type, i.callback)
                                }
                                return !e.defaultPrevented
                            }
                        }
                    }]), t
                }(),
                l = function(t) {
                    function o() { e(this, o); var t = l.call(this); return t.listeners || c.call(a(t)), Object.defineProperty(a(t), "aborted", { value: !1, writable: !0, configurable: !0 }), Object.defineProperty(a(t), "onabort", { value: null, writable: !0, configurable: !0 }), t }
                    r(o, t);
                    var l = s(o);
                    return n(o, [{ key: "toString", value: function() { return "[object AbortSignal]" } }, { key: "dispatchEvent", value: function(e) { "abort" === e.type && (this.aborted = !0, "function" == typeof this.onabort && this.onabort.call(this, e)), u(i(o.prototype), "dispatchEvent", this).call(this, e) } }]), o
                }(c),
                f = function() {
                    function t() { e(this, t), Object.defineProperty(this, "signal", { value: new l, writable: !0, configurable: !0 }) }
                    return n(t, [{
                        key: "abort",
                        value: function() {
                            try { var e = new Event("abort") } catch (t) { "undefined" != typeof document ? document.createEvent ? (e = document.createEvent("Event")).initEvent("abort", !1, !1) : (e = document.createEventObject()).type = "abort" : e = { type: "abort", bubbles: !1, cancelable: !1 } }
                            this.signal.dispatchEvent(e)
                        }
                    }, { key: "toString", value: function() { return "[object AbortController]" } }]), t
                }();
            "undefined" != typeof Symbol && Symbol.toStringTag && (f.prototype[Symbol.toStringTag] = "AbortController", l.prototype[Symbol.toStringTag] = "AbortSignal"),
                function(e) {
                    if (e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL) { console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"); var t = !0 } else t = "function" == typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController;
                    t && (e.AbortController = f, e.AbortSignal = l)
                }("undefined" != typeof self ? self : Za)
        }();
    var mx = Math.floor,
        nx = Math.log,
        ox = Math.LOG2E;
    P({ target: "Math", stat: !0 }, { clz32: function(e) { return (e >>>= 0) ? 31 - mx(nx(e + .5) * ox) : 32 } });
    var px = Math.log,
        qx = Math.LN2,
        As = Math.clz32 || function(e) { return 31 - px(e >>> 0) / qx | 0 },
        xd = String.fromCharCode,
        Cp = {}.toString,
        dk = window.Uint8Array,
        ek = dk || Array,
        rx = Cp.call((window.ArrayBuffer || ek).prototype);
    El.prototype.decode = function(e) { if (e = e && e.buffer || e, Cp.call(e) !== rx) throw Error("Failed to execute 'decode' on 'TextDecoder': The provided value is not of type '(ArrayBuffer or ArrayBufferView)'"); for (var t = "", n = 0, r = 0 | (e = dk ? new ek(e) : e).length; n < r; n = n + 32768 | 0) t += xd.apply(0, e[dk ? "slice" : "subarray"](n, n + 32768 | 0)); return t.replace(/[\xc0-\xff][\x80-\xbf]*/g, zs) }, window.TextDecoder || (window.TextDecoder = El), Fl.prototype.encode = function(e) { for (var t = 0 | (e = void 0 === e ? "" : ("" + e).replace(/[\x80-\uD7ff\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]?/g, Bs)).length, n = new ek(t), r = 0; r < t; r = r + 1 | 0) n[r] = e.charCodeAt(r); return n }, window.TextEncoder || (window.TextEncoder = Fl);
    var Cs = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
        Ds = /android|ipad|playbook|silk/i,
        fk;
    hf.isMobile = hf, hf.default = hf,
        function(e) {
            var t, n, r, i, o, a, s, u, c, l, f;
            ! function(e) { e.LOGIN = "LOGIN", e.LOGIN_SUCCESS = "LOGIN_SUCCESS", e.LOGIN_FAILURE = "LOGIN_FAILURE", e.LOGIN_TIMEOUT = "LOGIN_TIMEOUT", e.INTERRUPTED = "INTERRUPTED", e.LOGOUT = "LOGOUT", e.BANNED_BY_SERVER = "BANNED_BY_SERVER", e.REMOTE_LOGIN = "REMOTE_LOGIN" }(t || (t = {})), e.ConnectionChangeReason = t,
                function(e) { e.DISCONNECTED = "DISCONNECTED", e.CONNECTING = "CONNECTING", e.CONNECTED = "CONNECTED", e.RECONNECTING = "RECONNECTING", e.ABORTED = "ABORTED" }(n || (n = {})), e.ConnectionState = n,
                function(e) { e.IDLE = "IDLE", e.SENT_TO_REMOTE = "SENT_TO_REMOTE", e.RECEIVED_BY_REMOTE = "RECEIVED_BY_REMOTE", e.ACCEPTED_BY_REMOTE = "ACCEPTED_BY_REMOTE", e.REFUSED_BY_REMOTE = "REFUSED_BY_REMOTE", e.CANCELED = "CANCELED", e.FAILURE = "FAILURE" }(r || (r = {})), e.LocalInvitationState = r,
                function(e) { e.INVITATION_RECEIVED = "INVITATION_RECEIVED", e.ACCEPT_SENT_TO_LOCAL = "ACCEPT_SENT_TO_LOCAL", e.REFUSED = "REFUSED", e.ACCEPTED = "ACCEPTED", e.CANCELED = "CANCELED", e.FAILURE = "FAILURE" }(i || (i = {})), e.RemoteInvitationState = i,
                function(e) { e.UNKNOWN = "UNKNOWN", e.PEER_NO_RESPONSE = "PEER_NO_RESPONSE", e.INVITATION_EXPIRE = "INVITATION_EXPIRE", e.PEER_OFFLINE = "PEER_OFFLINE", e.NOT_LOGGEDIN = "NOT_LOGGEDIN" }(o || (o = {})), e.LocalInvitationFailureReason = o,
                function(e) { e.UNKNOWN = "UNKNOWN", e.PEER_OFFLINE = "PEER_OFFLINE", e.ACCEPT_FAILURE = "ACCEPT_FAILURE", e.INVITATION_EXPIRE = "INVITATION_EXPIRE" }(a || (a = {})), e.RemoteInvitationFailureReason = a,
                function(e) { e.ONLINE = "ONLINE", e.UNREACHABLE = "UNREACHABLE", e.OFFLINE = "OFFLINE" }(s || (s = {})), e.PeerOnlineState = s, (u || (u = {})).ONLINE_STATUS = "ONLINE_STATUS", e.PeerSubscriptionOption = u,
                function(e) { e.TEXT = "TEXT", e.RAW = "RAW", e.IMAGE = "IMAGE", e.FILE = "FILE" }(c || (c = {})), e.MessageType = c,
                function(e) { e.CN = "CN", e.NA = "NA", e.EU = "EU", e.AS = "AS", e.JP = "JP", e.IN = "IN", e.GLOB = "GLOB", e.OC = "OC", e.SA = "SA", e.AF = "AF", e.OVS = "OVS" }(l || (l = {})), e.LegacyAreaCode = l,
                function(e) { e.GLOBAL = "GLOBAL", e.INDIA = "INDIA", e.JAPAN = "JAPAN", e.ASIA = "ASIA", e.EUROPE = "EUROPE", e.CHINA = "CHINA", e.NORTH_AMERICA = "NORTH_AMERICA" }(f || (f = {})), e.AreaCode = f
        }(fk || (fk = {}));
    var T = fk;
    P({ target: "Array", proto: !0 }, { includes: function(e) { return vn(this, e, 1 < arguments.length ? arguments[1] : void 0) } }), Ld("includes");
    var gk = function(e) { if ($i(e)) throw TypeError("The method doesn't accept regular expressions"); return e },
        sx = ra("match"),
        hk = function(e) { var t = /./; try { "/./" [e](t) } catch (n) { try { return t[sx] = !1, "/./" [e](t) } catch (e) {} } return !1 };
    P({ target: "String", proto: !0, forced: !hk("includes") }, { includes: function(e) { return !!~String(kb(this)).indexOf(gk(e), 1 < arguments.length ? arguments[1] : void 0) } });
    var Nc = { RECONNECTING_AP_INTERVAL: 2500, RECONNECTING_AP_NUM: 2, DISABLE_MESSAGE_COMPRESSION: !1, LOG_UPLOAD_INTERVAL: 3e3, LOG_HANDLER: void 0 };
    rh("iterator"), rh("asyncIterator");
    var ik = Ge("forEach") ? [].forEach : function(e) { return Jd(this, e, 1 < arguments.length ? arguments[1] : void 0) },
        Dp;
    for (Dp in Nj) {
        var Ep = D[Dp],
            th = Ep && Ep.prototype;
        if (th && th.forEach !== ik) try { Oa(th, "forEach", ik) } catch (c) { th.forEach = ik }
    }
    var tx = [].reverse,
        Fp = [1, 2];
    P({ target: "Array", proto: !0, forced: String(Fp) === String(Fp.reverse()) }, { reverse: function() { return jd(this) && (this.length = this.length), tx.call(this) } });
    var u = ab((function(e) {
            e = function(e) {
                function t(e, t, n) { return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t] }

                function n(e, t, n, o) {
                    return t = Object.create((t && t.prototype instanceof i ? t : i).prototype), o = new h(o || []), t._invoke = function(e, t, n) {
                        var i = _;
                        return function(o, a) {
                            if (i === A) throw Error("Generator is already running");
                            if (i === I) { if ("throw" === o) throw a; return d() }
                            for (n.method = o, n.arg = a;;) {
                                if ((o = n.delegate) && (o = c(o, n))) { if (o === k) continue; return o }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (i === _) throw i = I, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                if (i = A, "normal" === (o = r(e, t, n)).type) { if (i = n.done ? I : O, o.arg === k) continue; return { value: o.arg, done: n.done } }
                                "throw" === o.type && (i = I, n.method = "throw", n.arg = o.arg)
                            }
                        }
                    }(e, n, o), t
                }

                function r(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }

                function i() {}

                function o() {}

                function a() {}

                function s(e) {
                    ["next", "throw", "return"].forEach((function(n) { t(e, n, (function(e) { return this._invoke(n, e) })) }))
                }

                function u(e, t) {
                    function n(i, o, a, s) {
                        if ("throw" !== (i = r(e[i], e, o)).type) { var u = i.arg; return (i = u.value) && "object" === X(i) && g.call(i, "__await") ? t.resolve(i.__await).then((function(e) { n("next", e, a, s) }), (function(e) { n("throw", e, a, s) })) : t.resolve(i).then((function(e) { u.value = e, a(u) }), (function(e) { return n("throw", e, a, s) })) }
                        s(i.arg)
                    }
                    var i;
                    this._invoke = function(e, r) {
                        function o() { return new t((function(t, i) { n(e, r, t, i) })) }
                        return i = i ? i.then(o, o) : o()
                    }
                }

                function c(e, t) {
                    var n = e.iterator[t.method];
                    if (n === v) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = v, c(e, t), "throw" === t.method)) return k;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return k
                    }
                    return "throw" === (n = r(n, e.iterator, t.arg)).type ? (t.method = "throw", t.arg = n.arg, t.delegate = null, k) : (n = n.arg) ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = v), t.delegate = null, k) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, k)
                }

                function l(e) {
                    var t = { tryLoc: e[0] };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function f(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function h(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(l, this), this.reset(!0) }

                function p(e) {
                    if (e) {
                        var t = e[m];
                        if (t) return t.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var n = -1;
                            return (t = function t() {
                                for (; ++n < e.length;)
                                    if (g.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = v, t.done = !0, t
                            }).next = t
                        }
                    }
                    return { next: d }
                }

                function d() { return { value: v, done: !0 } }
                var v, b = Object.prototype,
                    g = b.hasOwnProperty,
                    y = "function" == typeof Symbol ? Symbol : {},
                    m = y.iterator || "@@iterator",
                    E = y.asyncIterator || "@@asyncIterator",
                    w = y.toStringTag || "@@toStringTag";
                try { t({}, "") } catch (e) { t = function(e, t, n) { return e[t] = n } }
                e.wrap = n;
                var _ = "suspendedStart",
                    O = "suspendedYield",
                    A = "executing",
                    I = "completed",
                    k = {};
                t(y = {}, m, (function() { return this }));
                var T = Object.getPrototypeOf;
                (T = T && T(T(p([])))) && T !== b && g.call(T, m) && (y = T);
                var R = a.prototype = i.prototype = Object.create(y);
                return o.prototype = a, t(R, "constructor", a), t(a, "constructor", o), o.displayName = t(a, w, "GeneratorFunction"), e.isGeneratorFunction = function(e) { return !!(e = "function" == typeof e && e.constructor) && (e === o || "GeneratorFunction" === (e.displayName || e.name)) }, e.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, t(e, w, "GeneratorFunction")), e.prototype = Object.create(R), e }, e.awrap = function(e) { return { __await: e } }, s(u.prototype), t(u.prototype, E, (function() { return this })), e.AsyncIterator = u, e.async = function(t, r, i, o, a) { void 0 === a && (a = Promise); var s = new u(n(t, r, i, o), a); return e.isGeneratorFunction(r) ? s : s.next().then((function(e) { return e.done ? e.value : s.next() })) }, s(R), t(R, w, "Generator"), t(R, m, (function() { return this })), t(R, "toString", (function() { return "[object Generator]" })), e.keys = function(e) {
                    var t, n = [];
                    for (t in e) n.push(t);
                    return n.reverse(),
                        function t() { for (; n.length;) { var r = n.pop(); if (r in e) return t.value = r, t.done = !1, t } return t.done = !0, t }
                }, e.values = p, h.prototype = {
                    constructor: h,
                    reset: function(e) {
                        if (this.next = this.prev = 0, this.sent = this._sent = v, this.done = !1, this.delegate = null, this.method = "next", this.arg = v, this.tryEntries.forEach(f), !e)
                            for (var t in this) "t" === t.charAt(0) && g.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = v)
                    },
                    stop: function() { this.done = !0; var e = this.tryEntries[0].completion; if ("throw" === e.type) throw e.arg; return this.rval },
                    dispatchException: function(e) {
                        function t(t, r) { return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = v), !!r }
                        if (this.done) throw e;
                        for (var n = this, r = this.tryEntries.length - 1; 0 <= r; --r) {
                            var i = this.tryEntries[r],
                                o = i.completion;
                            if ("root" === i.tryLoc) return t("end");
                            if (i.tryLoc <= this.prev) {
                                var a = g.call(i, "catchLoc"),
                                    s = g.call(i, "finallyLoc");
                                if (a && s) { if (this.prev < i.catchLoc) return t(i.catchLoc, !0); if (this.prev < i.finallyLoc) return t(i.finallyLoc) } else if (a) { if (this.prev < i.catchLoc) return t(i.catchLoc, !0) } else { if (!s) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return t(i.finallyLoc) }
                            }
                        }
                    },
                    abrupt: function(e, t) { for (var n = this.tryEntries.length - 1; 0 <= n; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && g.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } } return i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null), (n = i ? i.completion : {}).type = e, n.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, k) : this.complete(n) },
                    complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), k },
                    finish: function(e) { for (var t = this.tryEntries.length - 1; 0 <= t; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), f(n), k } },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                if ("throw" === (e = n.completion).type) {
                                    var r = e.arg;
                                    f(n)
                                }
                                return r
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) { return this.delegate = { iterator: p(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = v), k }
                }, e
            }(e.exports);
            try { regeneratorRuntime = e } catch (t) { "object" === ("undefined" == typeof globalThis ? "undefined" : X(globalThis)) ? globalThis.regeneratorRuntime = e: Function("r", "regeneratorRuntime = r")(e) }
        })),
        Gp = !Q((function() { return Object.isExtensible(Object.preventExtensions({})) })),
        jk = ab((function(e) {
            var t = Sa.f,
                n = Be("meta"),
                r = 0,
                i = Object.isExtensible || function() { return !0 },
                o = function(e) { t(e, n, { value: { objectID: "O" + ++r, weakData: {} } }) },
                a = e.exports = {
                    REQUIRED: !1,
                    fastKey: function(e, t) {
                        if (!ia(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!S(e, n)) {
                            if (!i(e)) return "F";
                            if (!t) return "E";
                            o(e)
                        }
                        return e[n].objectID
                    },
                    getWeakData: function(e, t) {
                        if (!S(e, n)) {
                            if (!i(e)) return !0;
                            if (!t) return !1;
                            o(e)
                        }
                        return e[n].weakData
                    },
                    onFreeze: function(e) { return Gp && a.REQUIRED && i(e) && !S(e, n) && o(e), e }
                };
            Ce[n] = !0
        })),
        Hp = function(e, t, n) {
            var r = -1 !== e.indexOf("Map"),
                i = -1 !== e.indexOf("Weak"),
                o = r ? "set" : "add",
                a = D[e],
                s = a && a.prototype,
                u = a,
                c = {},
                l = function(e) {
                    var t = s[e];
                    Ua(s, e, "add" == e ? function(e) { return t.call(this, 0 === e ? 0 : e), this } : "delete" == e ? function(e) { return !(i && !ia(e)) && t.call(this, 0 === e ? 0 : e) } : "get" == e ? function(e) { return i && !ia(e) ? void 0 : t.call(this, 0 === e ? 0 : e) } : "has" == e ? function(e) { return !(i && !ia(e)) && t.call(this, 0 === e ? 0 : e) } : function(e, n) { return t.call(this, 0 === e ? 0 : e, n), this })
                };
            if (nc(e, "function" != typeof a || !(i || s.forEach && !Q((function() {
                    (new a).entries().next()
                }))))) u = n.getConstructor(t, e, r, o), jk.REQUIRED = !0;
            else if (nc(e, !0)) {
                var f = new u,
                    h = f[o](i ? {} : -0, 1) != f,
                    p = Q((function() { f.has(1) })),
                    d = Xg((function(e) { new a(e) })),
                    v = !i && Q((function() { for (var e = new a, t = 5; t--;) e[o](t, t); return !e.has(-0) }));
                d || ((u = t((function(t, n) { return Gc(t, u, e), t = nh(new a, t, u), null != n && ah(n, t[o], { that: t, AS_ENTRIES: r }), t }))).prototype = s, s.constructor = u), (p || v) && (l("delete"), l("has"), r && l("get")), (v || h) && l(o), i && s.clear && delete s.clear
            }
            return c[e] = u, P({ global: !0, forced: u != a }, c), Ec(u, e), i || n.setStrong(u, e, r), u
        },
        ux = Sa.f,
        Ip = jk.fastKey,
        Jp = $a.set,
        kk = $a.getterFor,
        Kp = {
            getConstructor: function(e, t, n, r) {
                var i = e((function(e, o) { Gc(e, i, t), Jp(e, { type: t, index: bc(null), first: void 0, last: void 0, size: 0 }), la || (e.size = 0), null != o && ah(o, e[r], { that: e, AS_ENTRIES: n }) })),
                    o = kk(t),
                    a = function(e, t, n) {
                        var r, i = o(e),
                            a = s(e, t);
                        return a ? a.value = n : (i.last = a = { index: r = Ip(t, !0), key: t, value: n, previous: t = i.last, next: void 0, removed: !1 }, i.first || (i.first = a), t && (t.next = a), la ? i.size++ : e.size++, "F" !== r && (i.index[r] = a)), e
                    },
                    s = function(e, t) {
                        e = o(e);
                        var n = Ip(t);
                        if ("F" !== n) return e.index[n];
                        for (e = e.first; e; e = e.next)
                            if (e.key == t) return e
                    };
                return Kf(i.prototype, {
                    clear: function() {
                        for (var e = o(this), t = e.index, n = e.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                        e.first = e.last = void 0, la ? e.size = 0 : this.size = 0
                    },
                    delete: function(e) {
                        var t = o(this);
                        if (e = s(this, e)) {
                            var n = e.next,
                                r = e.previous;
                            delete t.index[e.index], e.removed = !0, r && (r.next = n), n && (n.previous = r), t.first == e && (t.first = n), t.last == e && (t.last = r), la ? t.size-- : this.size--
                        }
                        return !!e
                    },
                    forEach: function(e) {
                        for (var t, n = o(this), r = Id(e, 1 < arguments.length ? arguments[1] : void 0, 3); t = t ? t.next : n.first;)
                            for (r(t.value, t.key, this); t && t.removed;) t = t.previous
                    },
                    has: function(e) { return !!s(this, e) }
                }), Kf(i.prototype, n ? { get: function(e) { return (e = s(this, e)) && e.value }, set: function(e, t) { return a(this, 0 === e ? 0 : e, t) } } : { add: function(e) { return a(this, e = 0 === e ? 0 : e, e) } }), la && ux(i.prototype, "size", { get: function() { return o(this).size } }), i
            },
            setStrong: function(e, t, n) {
                var r = t + " Iterator",
                    i = kk(t),
                    o = kk(r);
                lj(e, t, (function(e, t) { Jp(this, { type: r, target: e, state: i(e), kind: t, last: void 0 }) }), (function() { for (var e = o(this), t = e.kind, n = e.last; n && n.removed;) n = n.previous; return e.target && (e.last = n = n ? n.next : e.state.first) ? "keys" == t ? { value: n.key, done: !1 } : "values" == t ? { value: n.value, done: !1 } : { value: [n.key, n.value], done: !1 } : (e.target = void 0, { value: void 0, done: !0 }) }), n ? "entries" : "values", !n, !0), Lf(t)
            }
        };
    Hp("Set", (function(e) { return function() { return e(this, arguments.length ? arguments[0] : void 0) } }), Kp);
    var vx = Hd.f,
        wx = Gb.f,
        xx = Sa.f,
        pd = D.Number,
        uh = pd.prototype,
        yx = "Number" == $b(bc(uh)),
        Lp = function(e) {
            var t, n = lc(e, !1);
            if ("string" == typeof n && 2 < n.length)
                if (43 === (e = (n = cj(n)).charCodeAt(0)) || 45 === e) { if (88 === (e = n.charCodeAt(2)) || 120 === e) return NaN } else if (48 === e) {
                switch (n.charCodeAt(1)) {
                    case 66:
                    case 98:
                        e = 2;
                        var r = 49;
                        break;
                    case 79:
                    case 111:
                        e = 8, r = 55;
                        break;
                    default:
                        return +n
                }
                var i = (n = n.slice(2)).length;
                for (t = 0; t < i; t++) { var o = n.charCodeAt(t); if (48 > o || o > r) return NaN }
                return parseInt(n, e)
            }
            return +n
        };
    if (nc("Number", !pd(" 0o1") || !pd("0b1") || pd("+0x1"))) {
        for (var Pd = function(e) {
                var t = 1 > arguments.length ? 0 : e,
                    n = this;
                return n instanceof Pd && (yx ? Q((function() { uh.valueOf.call(n) })) : "Number" != $b(n)) ? nh(new pd(Lp(t)), n, Pd) : Lp(t)
            }, Mp = la ? vx(pd) : "MAX_VALUE MIN_VALUE NaN NEGATIVE_INFINITY POSITIVE_INFINITY EPSILON isFinite isInteger isNaN isSafeInteger MAX_SAFE_INTEGER MIN_SAFE_INTEGER parseFloat parseInt isInteger fromString range".split(" "), lk = 0, vh; Mp.length > lk; lk++) S(pd, vh = Mp[lk]) && !S(Pd, vh) && xx(Pd, vh, wx(pd, vh));
        Pd.prototype = uh, uh.constructor = Pd, Ua(D, "Number", Pd)
    }
    var Np = ra("isConcatSpreadable"),
        zx = 51 <= hd || !Q((function() { var e = []; return e[Np] = !1, e.concat()[0] !== e })),
        Ax = Hf("concat");
    P({ target: "Array", proto: !0, forced: !zx || !Ax }, {
        concat: function(e) {
            var t, n = Ra(this),
                r = Wg(n, 0),
                i = 0,
                o = -1;
            for (t = arguments.length; o < t; o++) {
                var a = -1 === o ? n : arguments[o],
                    s = a;
                if (ia(s)) {
                    var u = s[Np];
                    s = void 0 !== u ? !!u : jd(s)
                } else s = !1;
                if (s) { if (9007199254740991 < i + (u = ua(a.length))) throw TypeError("Maximum allowed index exceeded"); for (s = 0; s < u; s++, i++) s in a && Ie(r, i, a[s]) } else {
                    if (9007199254740991 <= i) throw TypeError("Maximum allowed index exceeded");
                    Ie(r, i++, a)
                }
            }
            return r.length = i, r
        }
    });
    var Op = !0;
    "findIndex" in [] && Array(1).findIndex((function() { Op = !1 })), P({ target: "Array", proto: !0, forced: Op }, { findIndex: function(e) { return Pn(this, e, 1 < arguments.length ? arguments[1] : void 0) } }), Ld("findIndex");
    var mk = mc("Reflect", "apply"),
        Bx = Function.apply,
        Cx = !Q((function() { mk((function() {})) }));
    P({ target: "Reflect", stat: !0, forced: Cx }, { apply: function(e, t, n) { return zb(e), wa(n), mk ? mk(e, t, n) : Bx.call(e, t, n) } }), P({ target: "Reflect", stat: !0 }, { ownKeys: xn });
    var Dx = Sj,
        Ex = Q((function() { return !Object.getOwnPropertyNames(1) }));
    P({ target: "Object", stat: !0, forced: Ex }, { getOwnPropertyNames: Dx });
    var Qe = "object" === ("undefined" == typeof Reflect ? "undefined" : X(Reflect)) ? Reflect : null,
        Pp = Qe && "function" == typeof Qe.apply ? Qe.apply : function(e, t, n) { return Function.prototype.apply.call(e, t, n) },
        Fx = Qe && "function" == typeof Qe.ownKeys ? Qe.ownKeys : Object.getOwnPropertySymbols ? function(e) { return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)) } : function(e) { return Object.getOwnPropertyNames(e) },
        Qp = Number.isNaN || function(e) { return e != e };
    fa.EventEmitter = fa, fa.prototype._events = void 0, fa.prototype._eventsCount = 0, fa.prototype._maxListeners = void 0;
    var Rp = 10;
    Object.defineProperty(fa, "defaultMaxListeners", {
        enumerable: !0,
        get: function() { return Rp },
        set: function(e) {
            if ("number" != typeof e || 0 > e || Qp(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
            Rp = e
        }
    }), fa.init = function() { void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }, fa.prototype.setMaxListeners = function(e) { if ("number" != typeof e || 0 > e || Qp(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + "."); return this._maxListeners = e, this }, fa.prototype.getMaxListeners = function() { return void 0 === this._maxListeners ? fa.defaultMaxListeners : this._maxListeners }, fa.prototype.emit = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
        n = "error" === e;
        var r = this._events;
        if (void 0 !== r) n = n && void 0 === r.error;
        else if (!n) return !1;
        if (n) { var i; if (0 < t.length && (i = t[0]), i instanceof Error) throw i; throw (t = Error("Unhandled error." + (i ? " (" + i.message + ")" : ""))).context = i, t }
        if (void 0 === (n = r[e])) return !1;
        if ("function" == typeof n) Pp(n, this, t);
        else
            for (r = Jl(n, i = n.length), n = 0; n < i; ++n) Pp(r[n], this, t);
        return !0
    }, fa.prototype.addListener = function(e, t) { return Gl(this, e, t, !1) }, fa.prototype.on = fa.prototype.addListener, fa.prototype.prependListener = function(e, t) { return Gl(this, e, t, !0) }, fa.prototype.once = function(e, t) { return og(t), this.on(e, Hl(this, e, t)), this }, fa.prototype.prependOnceListener = function(e, t) { return og(t), this.prependListener(e, Hl(this, e, t)), this }, fa.prototype.removeListener = function(e, t) {
        var n;
        og(t);
        var r = this._events;
        if (void 0 === r) return this;
        var i = r[e];
        if (void 0 === i) return this;
        if (i === t || i.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, i.listener || t));
        else if ("function" != typeof i) {
            var o = -1;
            for (n = i.length - 1; 0 <= n; n--)
                if (i[n] === t || i[n].listener === t) {
                    var a = i[n].listener;
                    o = n;
                    break
                }
            if (0 > o) return this;
            if (0 === o) i.shift();
            else {
                for (; o + 1 < i.length; o++) i[o] = i[o + 1];
                i.pop()
            }
            1 === i.length && (r[e] = i[0]), void 0 !== r.removeListener && this.emit("removeListener", e, a || t)
        }
        return this
    }, fa.prototype.off = fa.prototype.removeListener, fa.prototype.removeAllListeners = function(e) {
        var t = this._events;
        if (void 0 === t) return this;
        if (void 0 === t.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== t[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete t[e]), this;
        if (0 === arguments.length) { var n = Object.keys(t); for (t = 0; t < n.length; ++t) { var r = n[t]; "removeListener" !== r && this.removeAllListeners(r) } return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this }
        if ("function" == typeof(n = t[e])) this.removeListener(e, n);
        else if (void 0 !== n)
            for (t = n.length - 1; 0 <= t; t--) this.removeListener(e, n[t]);
        return this
    }, fa.prototype.listeners = function(e) { return Il(this, e, !0) }, fa.prototype.rawListeners = function(e) { return Il(this, e, !1) }, fa.listenerCount = function(e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : Kl.call(e, t) }, fa.prototype.listenerCount = Kl, fa.prototype.eventNames = function() { return 0 < this._eventsCount ? Fx(this._events) : [] }, fa.once = function(e, t) {
        return new Promise((function(n, r) {
            function i(n) { e.removeListener(t, o), r(n) }

            function o() { "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments)) }
            Ll(e, t, o, { once: !0 }), "error" !== t && Fs(e, i, { once: !0 })
        }))
    };
    var Re = Object.assign,
        Sp = Object.defineProperty,
        Tp = !Re || Q((function() {
            if (la && 1 !== Re({ b: 1 }, Re(Sp({}, "a", { enumerable: !0, get: function() { Sp(this, "b", { value: 3, enumerable: !1 }) } }), { b: 2 })).b) return !0;
            var e = {},
                t = {},
                n = Symbol();
            return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function(e) { t[e] = e })), 7 != Re({}, e)[n] || "abcdefghijklmnopqrst" != Dc(Re({}, t)).join("")
        })) ? function(e, t) {
            for (var n = Ra(e), r = arguments.length, i = 1, o = Df.f, a = Bf; r > i;)
                for (var s, u = Cf(arguments[i++]), c = o ? Dc(u).concat(o(u)) : Dc(u), l = c.length, f = 0; l > f;) s = c[f++], (!la || a.call(u, s)) && (n[s] = u[s]);
            return n
        } : Re;
    P({ target: "Object", stat: !0, forced: Object.assign !== Tp }, { assign: Tp }), Hp("Map", (function(e) { return function() { return e(this, arguments.length ? arguments[0] : void 0) } }), Kp);
    var Gx = Math.log,
        Hx = Math.LN2;
    P({ target: "Math", stat: !0 }, { log2: function(e) { return Gx(e) / Hx } });
    var Ix = Sa.f,
        Jx = Hd.f,
        Kx = $a.enforce,
        Lx = ra("match"),
        sc = D.RegExp,
        nk = sc.prototype,
        Yf = /a/g,
        ok = /a/g,
        pk = new sc(Yf) !== Yf;
    if (la && nc("RegExp", !pk || oc || Q((function() { return ok[Lx] = !1, sc(Yf) != Yf || sc(ok) == ok || "/a/i" != sc(Yf, "i") })))) {
        for (var Oc = function(e, t) {
                var n, r = this instanceof Oc,
                    i = $i(e),
                    o = void 0 === t;
                return !r && i && e.constructor === Oc && o || (pk ? i && !o && (e = e.source) : e instanceof Oc && (o && (t = Vi.call(e)), e = e.source), oc && (n = !!t && -1 < t.indexOf("y")) && (t = t.replace(/y/g, "")), e = nh(pk ? new sc(e, t) : sc(e, t), r ? this : nk, Oc), oc && n && (Kx(e).sticky = !0)), e
            }, Mx = function(e) { e in Oc || Ix(Oc, e, { configurable: !0, get: function() { return sc[e] }, set: function(t) { sc[e] = t } }) }, Up = Jx(sc), Vp = 0; Up.length > Vp;) Mx(Up[Vp++]);
        nk.constructor = Oc, Oc.prototype = nk, Ua(D, "RegExp", Oc)
    }
    Lf("RegExp"), Uf("Float32", (function(e) { return function(t, n, r) { return e(this, t, n, r) } })), Uf("Float64", (function(e) { return function(t, n, r) { return e(this, t, n, r) } })), Uf("Uint32", (function(e) { return function(t, n, r) { return e(this, t, n, r) } })), Uf("Uint16", (function(e) { return function(t, n, r) { return e(this, t, n, r) } }));
    var qk = function(e, t) { return e === t ? 0 : null == e ? null == t ? 0 : -1 : null == t ? null == e ? 0 : 1 : "function" == typeof e.compare ? e.compare(t) : "function" == typeof t.compare ? -t.compare(e) : e < t ? -1 : e > t ? 1 : 0 },
        rk = [],
        Wp = rk.sort,
        Nx = Q((function() { rk.sort(void 0) })),
        Ox = Q((function() { rk.sort(null) })),
        Px = Ge("sort");
    P({ target: "Array", proto: !0, forced: Nx || !Ox || !Px }, { sort: function(e) { return void 0 === e ? Wp.call(Ra(this)) : Wp.call(Ra(this), zb(e)) } });
    var Xp = Object.getPrototypeOf({}),
        Zf = function(e, t) { var n; return e === t || (null == e ? e == t : "function" === X(e.equiv) ? e.equiv(t) : null == t ? e == t : "function" === X(t.equiv) ? t.equiv(e) : "string" !== X(e) && "string" !== X(t) && (null != (n = Object.getPrototypeOf(e)) && n !== Xp || null != (n = Object.getPrototypeOf(t)) && n !== Xp ? "function" !== X(e) && void 0 !== e.length && "function" !== X(t) && void 0 !== t.length ? Rx(e, t) : e instanceof Set && t instanceof Set ? Sx(e, t) : e instanceof Map && t instanceof Map ? Tx(e, t) : e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : e instanceof RegExp && t instanceof RegExp ? e.toString() === t.toString() : e != e && t != t : Qx(e, t))) },
        Rx = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Zf,
                r = e.length;
            if (r === t.length)
                for (; 0 <= --r && n(e[r], t[r]););
            return 0 > r
        },
        Sx = function(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Zf; return e.size === t.size && n(H(e.keys()).sort(), H(t.keys()).sort()) },
        Tx = function(e, t) { var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Zf; return e.size === t.size && n(H(e).sort(), H(t).sort()) },
        Qx = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : Zf;
            if (Object.keys(e).length !== Object.keys(t).length) return !1;
            for (var r in e)
                if (!t.hasOwnProperty(r) || !n(e[r], t[r])) return !1;
            return !0
        },
        Yp = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function(e) { return void 0 !== e ? ": " + e : "" };
            return function(n) {
                function r(n) { return Y(this, r), i.call(this, e(n) + t(n)) }
                ma(r, n);
                var i = na(r);
                return r
            }(ff(Error))
        },
        Ux = Yp((function() { return "illegal argument(s)" })),
        wh = function(e) { throw new Ux(e) },
        sk = Yp((function() { return "index out of bounds" })),
        Zp = 1 / 4294967295,
        Vx = function() {
            function e() { Y(this, e) }
            return Ia(e, [{ key: "float", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1; return this.int() * Zp * e } }, { key: "norm", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1; return 2 * (this.int() * Zp - .5) * e } }, { key: "minmax", value: function(e, t) { return this.float() * (t - e) + e } }]), e
        }(),
        tk = Math.random,
        Wx = new(function(e) {
            function t() { return Y(this, t), n.apply(this, arguments) }
            ma(t, e);
            var n = na(t);
            return Ia(t, [{ key: "int", value: function() { return 4294967296 * tk() >>> 0 } }, { key: "float", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1; return tk() * e } }, { key: "norm", value: function() { var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1; return 2 * (tk() - .5) * e } }]), t
        }(Vx)),
        Xh = Symbol(),
        Ol = function() {},
        Xx = jk.onFreeze,
        uk = Object.freeze,
        Yx = Q((function() { uk(1) }));
    P({ target: "Object", stat: !0, forced: Yx, sham: !Gp }, { freeze: function(e) { return uk && ia(e) ? uk(Xx(e)) : e } });
    var Zx = Ge("reduce"),
        $x = !Hc && 79 < hd && 83 > hd;
    P({ target: "Array", proto: !0, forced: !Zx || $x }, { reduce: function(e) { return dp(this, e, arguments.length, 1 < arguments.length ? arguments[1] : void 0) } });
    var Nl = function(e) { return null != e && "function" == typeof e.xform ? e.xform() : e },
        pg = function() {
            function e(t) { Y(this, e), this.value = t }
            return Ia(e, [{ key: "deref", value: function() { return this.value } }]), e
        }(),
        Yh = function(e) { return e instanceof pg ? e.deref() : e },
        Hs = function(e, t) { return [e, function(e) { return e }, t] },
        ay = u.mark((function(e, t) {
            var n, r, i, o, a, s;
            return u.wrap((function(u) {
                for (;;) switch (u.prev = u.next) {
                    case 0:
                        n = Nl(e)(Gs()), r = n[1], i = n[2], o = 0;
                    case 4:
                        if (!(o < t.length)) { u.next = 15; break }
                        if (a = t[o], !((s = i([], a)) instanceof pg)) { u.next = 10; break }
                        return u.delegateYield(Yh(r(s.deref())), "t0", 9);
                    case 9:
                        return u.abrupt("return");
                    case 10:
                        if (!s.length) { u.next = 12; break }
                        return u.delegateYield(s, "t1", 12);
                    case 12:
                        o++, u.next = 4;
                        break;
                    case 15:
                        return u.delegateYield(Yh(r([])), "t2", 16);
                    case 16:
                    case "end":
                        return u.stop()
                }
            }), ay)
        })),
        Is = u.mark(Ml),
        Js = function(e, t) { return [e[0], e[1], t] };
    P({ target: "Array", proto: !0 }, { fill: Dj }), Ld("fill");
    var by = function() {
            function e(t) { Y(this, e), this._length = 0, t && this.into(t) }
            return Ia(e, [{ key: "length", get: function() { return this._length } }, { key: "copy", value: function() { return new e(this) } }, { key: "empty", value: function() { return new e } }, { key: "clear", value: function() { this.release() } }, { key: "release", value: function() { for (var e, t = this.head; t;) e = t.next, delete t.value, delete t.prev, delete t.next, t = e; return delete this.head, delete this.tail, this._length = 0, !0 } }, {
                key: "compare",
                value: function(e) {
                    var t = this._length;
                    if (t < e._length) return -1;
                    if (t > e._length) return 1;
                    if (0 === t) return 0;
                    t = this.head, e = e.head;
                    for (var n = 0; t && 0 == n;) n = qk(t.value, e.value), t = t.next, e = e.next;
                    return n
                }
            }, {
                key: "equiv",
                value: function(t) {
                    if (!(t instanceof e || null != t && "function" != typeof t && void 0 !== t.length) || this._length !== t.length) return !1;
                    if (!this._length || this === t) return !0;
                    for (var n = this.head, r = 0; r < t.length; r++) {
                        if (!Zf(n.value, t[r])) return !1;
                        n = n.next
                    }
                    return !0
                }
            }, {
                key: Symbol.iterator,
                value: u.mark((function e() {
                    var t;
                    return u.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t = this.head;
                            case 1:
                                if (!t) { e.next = 7; break }
                                return e.next = 4, t.value;
                            case 4:
                                t = t.next, e.next = 1;
                                break;
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))
            }, {
                key: "seq",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.length;
                    if (!(e >= t || 0 > e)) { e = this.nthCell(e); var n = this.nthCell(t - 1); return t = function e(t) { return { first: function() { return t.value }, next: function() { return t !== n && t.next ? e(t.next) : void 0 } } }, e ? t(e) : void 0 }
                }
            }, {
                key: "cycle",
                value: u.mark((function e() {
                    return u.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.delegateYield(this, "t0", 2);
                            case 2:
                                e.next = 0;
                                break;
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                }))
            }, { key: "$reduce", value: function(e, t) { for (var n = this.head; n && !(t instanceof pg);) t = e(t, n.value), n = n.next; return t } }, { key: "drop", value: function() { var e = this.head; if (e) return (this.head = e.next) ? delete this.head.prev : delete this.tail, this._length--, e.value } }, { key: "cons", value: function(e) { return e = { value: e, next: this.head }, this.head ? this.head.prev = e : this.tail = e, this.head = e, this._length++, this } }, { key: "insertBefore", value: function(e, t) { return e || wh("cell is undefined"), t = { value: t, next: e, prev: e.prev }, e.prev ? e.prev.next = t : this.head = t, e.prev = t, this._length++, this } }, { key: "insertAfter", value: function(e, t) { return e || wh("cell is undefined"), t = { value: t, next: e.next, prev: e }, e.next ? e.next.prev = t : this.tail = t, e.next = t, this._length++, this } }, { key: "insertBeforeNth", value: function(e, t) { if (0 > e && (e += this._length), 0 >= e) return this.cons(t); if (0 > e || e >= this._length) throw new sk(e); return this.insertBefore(this.nthCellUnsafe(e), t) } }, { key: "insertAfterNth", value: function(e, t) { if (0 > e && (e += this._length), e >= this._length - 1) return this.push(t); if (0 > e || e >= this._length) throw new sk(e); return this.insertAfter(this.nthCellUnsafe(e), t) } }, {
                key: "insertSorted",
                value: function(e, t) {
                    t = t || qk;
                    for (var n = this.head; n;) {
                        if (0 >= t(e, n.value)) return this.insertBefore(n, e);
                        n = n.next
                    }
                    return this.push(e)
                }
            }, {
                key: "find",
                value: function(e) {
                    for (var t = this.head; t;) {
                        if (t.value === e) return t;
                        t = t.next
                    }
                }
            }, {
                key: "findWith",
                value: function(e) {
                    for (var t = this.head; t;) {
                        if (e(t.value)) return t;
                        t = t.next
                    }
                }
            }, { key: "concat", value: function() { for (var e = this.copy(), t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]; for (t = 0; t < n.length; t++) e.into(n[t]); return e } }, { key: "into", value: function(e) { for (var t = 0; t < e.length; t++) this.push(e[t]) } }, {
                key: "slice",
                value: function() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.length;
                    t = 0 > t ? t + this._length : t, n = 0 > n ? n + this._length : n, (0 > t || 0 > n) && wh("invalid indices: ${from} / ${to}");
                    for (var r = new e, i = this.nthCell(t); i && ++t <= n;) r.push(i.value), i = i.next;
                    return r
                }
            }, {
                key: "splice",
                value: function(t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = 2 < arguments.length ? arguments[2] : void 0;
                    if ("number" == typeof t) { if (0 > t && (t += this._length), 0 > t || t >= this._length) throw new sk(t); var i = this.nthCellUnsafe(t) } else i = t;
                    var o = new e;
                    if (0 < n)
                        for (; i && 0 < n--;) this.remove(i), o.push(i.value), i = i.next;
                    else i && (i = i.next);
                    if (r)
                        if (i)
                            for (n = 0; n < r.length; n++) this.insertBefore(i, r[n]);
                        else
                            for (i = 0; i < r.length; i++) this.push(r[i]);
                    return o
                }
            }, { key: "remove", value: function(e) { return e.prev ? e.prev.next = e.next : this.head = e.next, e.next ? e.next.prev = e.prev : this.tail = e.prev, this._length--, this } }, {
                key: "swap",
                value: function(e, t) {
                    if (e !== t) {
                        var n = e.value;
                        e.value = t.value, t.value = n
                    }
                    return this
                }
            }, { key: "push", value: function(e) { return this.tail ? (e = { value: e, prev: this.tail }, this.tail = this.tail.next = e, this._length++, this) : this.cons(e) } }, { key: "pop", value: function() { var e = this.tail; if (e) return (this.tail = e.prev) ? delete this.tail.next : delete this.head, this._length--, e.value } }, { key: "first", value: function() { return this.head && this.head.value } }, { key: "peek", value: function() { return this.tail && this.tail.value } }, { key: "setHead", value: function(e) { return this.head ? (this.head.value = e, this) : this.cons(e) } }, { key: "setTail", value: function(e) { return this.tail ? (this.tail.value = e, this) : this.push(e) } }, { key: "setNth", value: function(e, t) { var n = this.nthCell(e); return !n && wh("index out of bounds: ".concat(e)), n.value = t, this } }, { key: "nth", value: function(e, t) { return (e = this.nthCell(e)) ? e.value : t } }, { key: "nthCell", value: function(e) { if (0 > e && (e += this._length), !(0 > e || e >= this._length)) return this.nthCellUnsafe(e) } }, {
                key: "rotateLeft",
                value: function() {
                    switch (this._length) {
                        case 0:
                        case 1:
                            return this;
                        case 2:
                            return this.swap(this.head, this.tail);
                        default:
                            return this.push(this.drop())
                    }
                }
            }, {
                key: "rotateRight",
                value: function() {
                    switch (this._length) {
                        case 0:
                        case 1:
                            return this;
                        case 2:
                            return this.swap(this.head, this.tail);
                        default:
                            var e = this.peek();
                            return this.pop(), this.cons(e)
                    }
                }
            }, { key: "map", value: function(t) { for (var n = new e, r = this.head; r;) n.push(t(r.value)), r = r.next; return n } }, { key: "filter", value: function(t) { for (var n = new e, r = this.head; r;) t(r.value) && n.push(r.value), r = r.next; return n } }, { key: "reduce", value: function(e, t) { for (var n = this.head; n;) t = e(t, n.value), n = n.next; return t } }, {
                key: "shuffle",
                value: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Wx;
                    if (2 > this._length) return this;
                    for (e = null != e ? e : Math.ceil(1.5 * Math.log2(this._length)); 0 < e; e--)
                        for (var n = this.head; n;) {
                            var r = n.next;
                            .5 > t.float() ? this.asHead(n) : this.asTail(n), n = r
                        }
                    return this
                }
            }, {
                key: "sort",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : qk;
                    if (!this._length) return this;
                    for (var t = 1;;) {
                        var n = this.head;
                        this.tail = this.head = void 0;
                        for (var r = 0; n;) {
                            r++;
                            for (var i = n, o = 0, a = 0; a < t && (o++, i = i.next); a++);
                            for (a = t; 0 < o || 0 < a && i;) {
                                if (0 === o) {
                                    var s = i;
                                    i = i.next, a--
                                } else i && 0 !== a ? 0 >= e(n.value, i.value) ? (s = n, n = n.next, o--) : (s = i, i = i.next, a--) : (s = n, n = n.next, o--);
                                this.tail ? this.tail.next = s : this.head = s, s.prev = this.tail, this.tail = s
                            }
                            n = i
                        }
                        if (this.tail.next = void 0, 1 >= r) return this;
                        t *= 2
                    }
                }
            }, {
                key: "reverse",
                value: function() {
                    for (var e = this.head, t = this.tail, n = (this._length >>> 1) + (1 & this._length); e && t && 0 < n;) {
                        var r = e.value;
                        e.value = t.value, t.value = r, e = e.next, t = t.prev, n--
                    }
                    return this
                }
            }, { key: "asHead", value: function(e) { return e === this.head || (this.remove(e), this.head.prev = e, e.next = this.head, e.prev = void 0, this.head = e, this._length++), this } }, { key: "asTail", value: function(e) { return e === this.tail || (this.remove(e), this.tail.next = e, e.prev = this.tail, e.next = void 0, this.tail = e, this._length++), this } }, { key: "toString", value: function() { for (var e = [], t = this.head; t;) e.push(String(t.value)), t = t.next; return e.join(", ") } }, { key: "toJSON", value: function() { return H(this) } }, {
                key: "nthCellUnsafe",
                value: function(e) {
                    if (e <= this._length >> 1) var t = this.head,
                        n = "next";
                    else t = this.tail, n = "prev", e = this._length - e - 1;
                    for (; 0 < e-- && t;) t = t[n];
                    return t
                }
            }]), e
        }(),
        tc = function() {
            function e(t, n) { Y(this, e), n = Object.assign({ maxlen: 1 / 0, maxsize: 1 / 0, map: function() { return new Map }, ksize: function() { return 0 }, vsize: function() { return 0 } }, n), this.map = n.map(), this.items = new by, this._size = 0, this.opts = n, t && this.into(t) }
            return Ia(e, [{ key: "length", get: function() { return this.items.length } }, { key: "size", get: function() { return this._size } }, { key: Symbol.iterator, value: function() { return this.entries() } }, { key: "entries", value: function() { return qg((function(e) { return [e.k, e] }), this.items) } }, { key: "keys", value: function() { return qg((function(e) { return e.k }), this.items) } }, { key: "values", value: function() { return qg((function(e) { return e.v }), this.items) } }, {
                key: "copy",
                value: function() {
                    var e = this.empty();
                    e.items = this.items.copy();
                    for (var t = e.items.head; t;) e.map.set(t.value.k, t), t = t.next;
                    return e
                }
            }, { key: "empty", value: function() { return new e(null, this.opts) } }, { key: "release", value: function() { this._size = 0, this.map.clear(); var e = this.opts.release; if (e) { for (var t; t = this.items.drop();) e(t.k, t.v); return !0 } return this.items.release() } }, { key: "has", value: function(e) { return this.map.has(e) } }, { key: "get", value: function(e, t) { return (e = this.map.get(e)) ? this.resetEntry(e) : t } }, {
                key: "set",
                value: function(e, t) {
                    var n = this.opts.ksize(e) + this.opts.vsize(t),
                        r = this.map.get(e);
                    return this._size += Math.max(0, n - (r ? r.value.s : 0)), this.ensureSize() && this.doSetEntry(r, e, t, n), t
                }
            }, {
                key: "into",
                value: function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t];
                        this.set(n[0], n[1])
                    }
                    return this
                }
            }, {
                key: "getSet",
                value: function(e, t) {
                    var n = this,
                        r = this.map.get(e);
                    return r ? Promise.resolve(this.resetEntry(r)) : t().then((function(t) { return n.set(e, t) }))
                }
            }, { key: "delete", value: function(e) { return !!(e = this.map.get(e)) && (this.removeEntry(e), !0) } }, { key: "resetEntry", value: function(e) { return this.items.asTail(e), e.value.v } }, {
                key: "ensureSize",
                value: function() {
                    for (var e = this.opts.release, t = this.opts.maxsize, n = this.opts.maxlen; this._size > t || this.length >= n;) {
                        var r = this.items.drop();
                        if (!r) return !1;
                        this.map.delete(r.k), e && e(r.k, r.v), this._size -= r.s
                    }
                    return !0
                }
            }, {
                key: "removeEntry",
                value: function(e) {
                    var t = e.value;
                    this.map.delete(t.k), this.items.remove(e), this.opts.release && this.opts.release(t.k, t.v), this._size -= t.s
                }
            }, { key: "doSetEntry", value: function(e, t, n, r) { e ? (e.value.v = n, e.value.s = r, this.items.asTail(e)) : (this.items.push({ k: t, v: n, s: r }), this.map.set(t, this.items.tail)) } }]), e
        }(),
        cy = function(e) {
            function t(e, r) { return Y(this, t), r = Object.assign({ ttl: 36e5 }, r), n.call(this, e, r) }
            ma(t, e);
            var n = na(t);
            return Ia(t, [{ key: "empty", value: function() { return new t(null, this.opts) } }, { key: "has", value: function(e) { return void 0 !== this.get(e) } }, {
                key: "get",
                value: function(e, t) {
                    if (e = this.map.get(e)) {
                        if (e.value.t >= Date.now()) return this.resetEntry(e);
                        this.removeEntry(e)
                    }
                    return t
                }
            }, {
                key: "set",
                value: function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.opts.ttl,
                        r = this.opts.ksize(e) + this.opts.vsize(t),
                        i = this.map.get(e);
                    return this._size += Math.max(0, r - (i ? i.value.s : 0)), this.ensureSize() && (n = Date.now() + n, i ? (i.value.v = t, i.value.s = r, i.value.t = n, this.items.asTail(i)) : (this.items.push({ k: e, v: t, s: r, t: n }), this.map.set(e, this.items.tail))), t
                }
            }, {
                key: "getSet",
                value: function(e, t) {
                    var n = this,
                        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.opts.ttl,
                        i = this.get(e);
                    return i ? Promise.resolve(i) : t().then((function(t) { return n.set(e, t, r) }))
                }
            }, { key: "prune", value: function() { for (var e = Date.now(), t = this.items.head; t;) t.value.t < e && this.removeEntry(t), t = t.next } }, { key: "ensureSize", value: function() { for (var e = this.opts.maxsize, n = this.opts.maxlen, r = Date.now(), i = this.items.head; i && (this._size > e || this.length >= n);) i.value.t < r && this.removeEntry(i), i = i.next; return Vh(wd(t.prototype), "ensureSize", this).call(this) } }]), t
        }(tc),
        $p = "object" == X(Za) && Za && Za.Object === Object && Za,
        dy = "object" == ("undefined" == typeof self ? "undefined" : X(self)) && self && self.Object === Object && self,
        Db = $p || dy || Function("return this")(),
        Qb = Db.Symbol,
        aq = Object.prototype,
        ey = aq.hasOwnProperty,
        fy = aq.toString,
        $f = Qb ? Qb.toStringTag : void 0,
        gy = Object.prototype.toString,
        bq = Qb ? Qb.toStringTag : void 0,
        Qd = function(e) {
            if (null == e) e = void 0 === e ? "[object Undefined]" : "[object Null]";
            else if (bq && bq in Object(e)) {
                var t = ey.call(e, $f),
                    n = e[$f];
                try { e[$f] = void 0; var r = !0 } catch (e) {}
                var i = fy.call(e);
                r && (t ? e[$f] = n : delete e[$f]), e = i
            } else e = gy.call(e);
            return e
        },
        mb = function(e) { var t = X(e); return null != e && ("object" == t || "function" == t) },
        si = function(e) { return !!mb(e) && ("[object Function]" == (e = Qd(e)) || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e) },
        vk = Db["__core-js_shared__"],
        cq = function() { var e = /[^.]+$/.exec(vk && vk.keys && vk.keys.IE_PROTO || ""); return e ? "Symbol(src)_1." + e : "" }(),
        hy = Function.prototype.toString,
        Rd = function(e) { if (null != e) { try { return hy.call(e) } catch (e) {} return e + "" } return "" },
        iy = /^\[object .+?Constructor\]$/,
        jy = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Sd = function(e, t) { return e = null == e ? void 0 : e[t], !mb(e) || cq && cq in e || !(si(e) ? jy : iy).test(Rd(e)) ? void 0 : e },
        ag = Sd(Object, "create"),
        ky = Object.prototype.hasOwnProperty,
        ly = Object.prototype.hasOwnProperty;
    zd.prototype.clear = function() { this.__data__ = ag ? ag(null) : {}, this.size = 0 }, zd.prototype.delete = function(e) { return e = this.has(e) && delete this.__data__[e], this.size -= e ? 1 : 0, e }, zd.prototype.get = function(e) { var t = this.__data__; return ag ? "__lodash_hash_undefined__" === (e = t[e]) ? void 0 : e : ky.call(t, e) ? t[e] : void 0 }, zd.prototype.has = function(e) { var t = this.__data__; return ag ? void 0 !== t[e] : ly.call(t, e) }, zd.prototype.set = function(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = ag && void 0 === t ? "__lodash_hash_undefined__" : t, this };
    var bg = function(e, t) { return e === t || e != e && t != t },
        xh = function(e, t) {
            for (var n = e.length; n--;)
                if (bg(e[n][0], t)) return n;
            return -1
        },
        my = Array.prototype.splice;
    ee.prototype.clear = function() { this.__data__ = [], this.size = 0 }, ee.prototype.delete = function(e) { var t = this.__data__; return !(0 > (e = xh(t, e))) && (e == t.length - 1 ? t.pop() : my.call(t, e, 1), --this.size, !0) }, ee.prototype.get = function(e) { var t = this.__data__; return 0 > (e = xh(t, e)) ? void 0 : t[e][1] }, ee.prototype.has = function(e) { return -1 < xh(this.__data__, e) }, ee.prototype.set = function(e, t) {
        var n = this.__data__,
            r = xh(n, e);
        return 0 > r ? (++this.size, n.push([e, t])) : n[r][1] = t, this
    };
    var sg = ee,
        cg = Sd(Db, "Map"),
        yh = function(e, t) { e = e.__data__; var n = X(t); return ("string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t) ? e["string" == typeof t ? "string" : "hash"] : e.map };
    fe.prototype.clear = function() { this.size = 0, this.__data__ = { hash: new zd, map: new(cg || sg), string: new zd } }, fe.prototype.delete = function(e) { return e = yh(this, e).delete(e), this.size -= e ? 1 : 0, e }, fe.prototype.get = function(e) { return yh(this, e).get(e) }, fe.prototype.has = function(e) { return yh(this, e).has(e) }, fe.prototype.set = function(e, t) {
        var n = yh(this, e),
            r = n.size;
        return n.set(e, t), this.size += n.size == r ? 0 : 1, this
    };
    var rg = fe;
    jf.prototype.add = jf.prototype.push = function(e) { return this.__data__.set(e, "__lodash_hash_undefined__"), this }, jf.prototype.has = function(e) { return this.__data__.has(e) };
    var dq = function(e, t, n, r) {
            var i = e.length;
            for (n += r ? 1 : -1; r ? n-- : ++n < i;)
                if (t(e[n], n, e)) return n;
            return -1
        },
        ny = function(e) { return e != e },
        oy = function(e, t) {
            var n;
            if (n = !(null == e || !e.length)) {
                if (t == t) e: {
                    n = -1;
                    for (var r = e.length; ++n < r;)
                        if (e[n] === t) { e = n; break e }
                    e = -1
                }
                else e = dq(e, ny, 0);
                n = -1 < e
            }
            return n
        },
        py = function(e, t, n) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                if (n(t, e[r])) return !0;
            return !1
        },
        qy = function(e, t) { return e.has(t) },
        Se = Sd(Db, "Set"),
        ry = function() {},
        wk = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e) { n[++t] = e })), n
        },
        sy = 1 / 0,
        ty = Se && 1 / wk(new Se([, -0]))[1] == sy ? function(e) { return new Se(e) } : ry,
        xk = function(e, t, n) {
            var r = -1,
                i = oy,
                o = e.length,
                a = !0,
                s = [],
                u = s;
            if (n) a = !1, i = py;
            else if (200 <= o) {
                if (i = t ? null : ty(e)) return wk(i);
                a = !1, i = qy, u = new jf
            } else u = t ? [] : s;
            e: for (; ++r < o;) {
                var c = e[r],
                    l = t ? t(c) : c;
                if (c = n || 0 !== c ? c : 0, a && l == l) {
                    for (var f = u.length; f--;)
                        if (u[f] === l) continue e;
                    t && u.push(l), s.push(c)
                } else i(u, l, n) || (u !== s && u.push(l), s.push(c))
            }
            return s
        },
        eq = function(e) {
            for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                var i = e[t];
                r[i[0]] = i[1]
            }
            return r
        },
        je = function(e, t) { for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e); return i };
    ge.prototype.clear = function() { this.__data__ = new sg, this.size = 0 }, ge.prototype.delete = function(e) { var t = this.__data__; return e = t.delete(e), this.size = t.size, e }, ge.prototype.get = function(e) { return this.__data__.get(e) }, ge.prototype.has = function(e) { return this.__data__.has(e) }, ge.prototype.set = function(e, t) {
        var n = this.__data__;
        if (n instanceof sg) {
            var r = n.__data__;
            if (!cg || 199 > r.length) return r.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new rg(r)
        }
        return n.set(e, t), this.size = n.size, this
    };
    var ie = ge,
        Ss = function(e, t) { for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e);); return e },
        zh = function() { try { var e = Sd(Object, "defineProperty"); return e({}, "", {}), e } catch (e) {} }(),
        dg = function(e, t, n) { "__proto__" == t && zh ? zh(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : e[t] = n },
        uy = Object.prototype.hasOwnProperty,
        Tl = function(e, t, n) {
            var r = e[t];
            uy.call(e, t) && bg(r, n) && (void 0 !== n || t in e) || dg(e, t, n)
        },
        te = function(e, t, n, r) {
            var i = !n;
            n || (n = {});
            for (var o = -1, a = t.length; ++o < a;) {
                var s = t[o],
                    u = r ? r(n[s], e[s], s, n, e) : void 0;
                void 0 === u && (u = e[s]), i ? dg(n, s, u) : Tl(n, s, u)
            }
            return n
        },
        hc = function(e) { return null != e && "object" == X(e) },
        fq = function(e) { return hc(e) && "[object Arguments]" == Qd(e) },
        gq = Object.prototype,
        vy = gq.hasOwnProperty,
        wy = gq.propertyIsEnumerable,
        tf = fq(function() { return arguments }()) ? fq : function(e) { return hc(e) && vy.call(e, "callee") && !wy.call(e, "callee") },
        Wa = Array.isArray,
        xy = function() { return !1 },
        lf = ab((function(e, t) {
            var n = (t = t && !t.nodeType && t) && e && !e.nodeType && e;
            t = n && n.exports === t ? Db.Buffer : void 0, e.exports = (t ? t.isBuffer : void 0) || xy
        })),
        yy = /^(?:0|[1-9]\d*)$/,
        yk = function(e, t) { var n = X(e); return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && yy.test(e)) && -1 < e && 0 == e % 1 && e < t },
        zk = function(e) { return "number" == typeof e && -1 < e && 0 == e % 1 && 9007199254740991 >= e },
        Fa = {};
    Fa["[object Float32Array]"] = Fa["[object Float64Array]"] = Fa["[object Int8Array]"] = Fa["[object Int16Array]"] = Fa["[object Int32Array]"] = Fa["[object Uint8Array]"] = Fa["[object Uint8ClampedArray]"] = Fa["[object Uint16Array]"] = Fa["[object Uint32Array]"] = !0, Fa["[object Arguments]"] = Fa["[object Array]"] = Fa["[object ArrayBuffer]"] = Fa["[object Boolean]"] = Fa["[object DataView]"] = Fa["[object Date]"] = Fa["[object Error]"] = Fa["[object Function]"] = Fa["[object Map]"] = Fa["[object Number]"] = Fa["[object Object]"] = Fa["[object RegExp]"] = Fa["[object Set]"] = Fa["[object String]"] = Fa["[object WeakMap]"] = !1;
    var zy = function(e) { return hc(e) && zk(e.length) && !!Fa[Qd(e)] },
        Ah = function(e) { return function(t) { return e(t) } },
        Te = ab((function(e, t) {
            var n = t && !t.nodeType && t;
            n = (t = n && e && !e.nodeType && e) && t.exports === n && $p.process;
            e: {
                try {
                    var r = t && t.require && t.require("util").types;
                    if (r) { var i = r; break e }
                    i = n && n.binding && n.binding("util");
                    break e
                } catch (e) {}
                i = void 0
            }
            e.exports = i
        })),
        hq = Te && Te.isTypedArray,
        di = hq ? Ah(hq) : zy,
        Ay = Object.prototype.hasOwnProperty,
        iq = function(e, t) {
            var n = Wa(e),
                r = !n && tf(e),
                i = !n && !r && lf(e),
                o = !n && !r && !i && di(e);
            if (n = n || r || i || o) {
                r = e.length;
                for (var a = String, s = -1, u = Array(r); ++s < r;) u[s] = a(s);
                r = u
            } else r = [];
            for (var c in a = r.length, e) !t && !Ay.call(e, c) || n && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || yk(c, a)) || r.push(c);
            return r
        },
        By = Object.prototype,
        Ak = function(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || By) },
        jq = function(e, t) { return function(n) { return e(t(n)) } },
        Cy = jq(Object.keys, Object),
        Dy = Object.prototype.hasOwnProperty,
        Ed = function(e) { return null != e && zk(e.length) && !si(e) },
        Ad = function(e) {
            if (Ed(e)) e = iq(e);
            else if (Ak(e)) {
                var t, n = [];
                for (t in Object(e)) Dy.call(e, t) && "constructor" != t && n.push(t);
                e = n
            } else e = Cy(e);
            return e
        },
        Os = function(e, t) { return e && te(t, Ad(t), e) },
        Ey = Object.prototype.hasOwnProperty,
        mf = function(e) {
            if (Ed(e)) e = iq(e, !0);
            else if (mb(e)) {
                var t = Ak(e),
                    n = [];
                for (r in e)("constructor" != r || !t && Ey.call(e, r)) && n.push(r);
                e = n
            } else {
                var r = [];
                if (null != e)
                    for (t in Object(e)) r.push(t);
                e = r
            }
            return e
        },
        Ms = function(e, t) { return e && te(t, mf(t), e) },
        Ql = ab((function(e, t) {
            var n = (t = t && !t.nodeType && t) && e && !e.nodeType && e,
                r = (t = n && n.exports === t ? Db.Buffer : void 0) ? t.allocUnsafe : void 0;
            e.exports = function(e, t) { return t ? e.slice() : (t = e.length, t = r ? r(t) : new e.constructor(t), e.copy(t), t) }
        })),
        Zh = function(e, t) {
            var n = -1,
                r = e.length;
            for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
            return t
        },
        Fy = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a)
            }
            return o
        },
        kq = function() { return [] },
        Gy = Object.prototype.propertyIsEnumerable,
        lq = Object.getOwnPropertySymbols,
        Bk = lq ? function(e) { return null == e ? [] : (e = Object(e), Fy(lq(e), (function(t) { return Gy.call(e, t) }))) } : kq,
        Ns = function(e, t) { return te(e, Bk(e), t) },
        ci = function(e, t) { for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n]; return e },
        Ck = jq(Object.getPrototypeOf, Object),
        mq = Object.getOwnPropertySymbols ? function(e) { for (var t = []; e;) ci(t, Bk(e)), e = Ck(e); return t } : kq,
        Ls = function(e, t) { return te(e, mq(e), t) },
        nq = function(e, t, n) { return t = t(e), Wa(e) ? t : ci(t, n(e)) },
        $h = function(e) { return nq(e, Ad, Bk) },
        Sl = function(e) { return nq(e, mf, mq) },
        Dk = Sd(Db, "DataView"),
        Ek = Sd(Db, "Promise"),
        Fk = Sd(Db, "WeakMap"),
        Hy = Rd(Dk),
        Iy = Rd(cg),
        Jy = Rd(Ek),
        Ky = Rd(Se),
        Ly = Rd(Fk),
        Td = Qd;
    (Dk && "[object DataView]" != Td(new Dk(new ArrayBuffer(1))) || cg && "[object Map]" != Td(new cg) || Ek && "[object Promise]" != Td(Ek.resolve()) || Se && "[object Set]" != Td(new Se) || Fk && "[object WeakMap]" != Td(new Fk)) && (Td = function(e) {
        var t = Qd(e);
        if (e = (e = "[object Object]" == t ? e.constructor : void 0) ? Rd(e) : "") switch (e) {
            case Hy:
                return "[object DataView]";
            case Iy:
                return "[object Map]";
            case Jy:
                return "[object Promise]";
            case Ky:
                return "[object Set]";
            case Ly:
                return "[object WeakMap]"
        }
        return t
    });
    var kf = Td,
        My = Object.prototype.hasOwnProperty,
        Ks = function(e) {
            var t = e.length,
                n = new e.constructor(t);
            return t && "string" == typeof e[0] && My.call(e, "index") && (n.index = e.index, n.input = e.input), n
        },
        Bh = Db.Uint8Array,
        Gk = function(e) { var t = new e.constructor(e.byteLength); return new Bh(t).set(new Bh(e)), t },
        Ny = /\w*$/,
        oq = Qb ? Qb.prototype : void 0,
        pq = oq ? oq.valueOf : void 0,
        Cm = function(e, t) { return t = t ? Gk(e.buffer) : e.buffer, new e.constructor(t, e.byteOffset, e.length) },
        Ps = function(e, t, n) {
            var r = e.constructor;
            switch (t) {
                case "[object ArrayBuffer]":
                    return Gk(e);
                case "[object Boolean]":
                case "[object Date]":
                    return new r(+e);
                case "[object DataView]":
                    return t = n ? Gk(e.buffer) : e.buffer, new e.constructor(t, e.byteOffset, e.byteLength);
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return Cm(e, n);
                case "[object Map]":
                    return new r;
                case "[object Number]":
                case "[object String]":
                    return new r(e);
                case "[object RegExp]":
                    return (t = new e.constructor(e.source, Ny.exec(e))).lastIndex = e.lastIndex, t;
                case "[object Set]":
                    return new r;
                case "[object Symbol]":
                    return pq ? Object(pq.call(e)) : {}
            }
        },
        qq = Object.create,
        Oy = function() {
            function e() {}
            return function(t) { return mb(t) ? qq ? qq(t) : (e.prototype = t, t = new e, e.prototype = void 0, t) : {} }
        }(),
        Rl = function(e) { return "function" != typeof e.constructor || Ak(e) ? {} : Oy(Ck(e)) },
        Py = function(e) { return hc(e) && "[object Map]" == kf(e) },
        rq = Te && Te.isMap,
        Rs = rq ? Ah(rq) : Py,
        Qy = function(e) { return hc(e) && "[object Set]" == kf(e) },
        sq = Te && Te.isSet,
        Qs = sq ? Ah(sq) : Qy,
        xa = {};
    xa["[object Arguments]"] = xa["[object Array]"] = xa["[object ArrayBuffer]"] = xa["[object DataView]"] = xa["[object Boolean]"] = xa["[object Date]"] = xa["[object Float32Array]"] = xa["[object Float64Array]"] = xa["[object Int8Array]"] = xa["[object Int16Array]"] = xa["[object Int32Array]"] = xa["[object Map]"] = xa["[object Number]"] = xa["[object Object]"] = xa["[object RegExp]"] = xa["[object Set]"] = xa["[object String]"] = xa["[object Symbol]"] = xa["[object Uint8Array]"] = xa["[object Uint8ClampedArray]"] = xa["[object Uint16Array]"] = xa["[object Uint32Array]"] = !0, xa["[object Error]"] = xa["[object Function]"] = xa["[object WeakMap]"] = !1;
    var ke = function(e) { return "symbol" == X(e) || hc(e) && "[object Symbol]" == Qd(e) },
        Ry = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Sy = /^\w*$/,
        Hk = function(e, t) { if (Wa(e)) return !1; var n = X(e); return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ke(e)) || (Sy.test(e) || !Ry.test(e) || null != t && e in Object(t)) };
    ai.Cache = rg;
    var Ty = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Uy = /\\(\\)?/g,
        Vy = function(e) { var t = (e = ai(e, (function(e) { return 500 === t.size && t.clear(), e }))).cache; return e }((function(e) { var t = []; return 46 === e.charCodeAt(0) && t.push(""), e.replace(Ty, (function(e, n, r, i) { t.push(r ? i.replace(Uy, "$1") : n || e) })), t })),
        Ts = 1 / 0,
        tq = Qb ? Qb.prototype : void 0,
        Vl = tq ? tq.toString : void 0,
        Ch = function(e, t) { return Wa(e) ? e : Hk(e, t) ? [e] : Vy(null == e ? "" : Ul(e)) },
        Wy = 1 / 0,
        eg = function(e) { if ("string" == typeof e || ke(e)) return e; var t = e + ""; return "0" == t && 1 / e == -Wy ? "-0" : t },
        Dh = function(e, t) { for (var n = 0, r = (t = Ch(t, e)).length; null != e && n < r;) e = e[eg(t[n++])]; return n && n == r ? e : void 0 },
        Xy = function(e, t) {
            if (!(2 > (t = Ch(t, e)).length)) {
                var n = t,
                    r = 0,
                    i = -1,
                    o = -1,
                    a = n.length;
                for (0 > r && (r = -r > a ? 0 : a + r), 0 > (i = i > a ? a : i) && (i += a), a = r > i ? 0 : i - r >>> 0, r >>>= 0, i = Array(a); ++o < a;) i[o] = n[o + r];
                e = Dh(e, i)
            }
            return (n = null == e) || (n = null == t ? 0 : t.length, n = delete e[eg(n ? t[n - 1] : void 0)]), n
        },
        uq = Function.prototype.toString,
        Yy = Object.prototype.hasOwnProperty,
        Zy = uq.call(Object),
        Dm = function(e) { return !(!hc(e) || "[object Object]" != Qd(e)) && (null === (e = Ck(e)) || "function" == typeof(e = Yy.call(e, "constructor") && e.constructor) && e instanceof e && uq.call(e) == Zy) },
        $y = function(e) { return Dm(e) ? void 0 : e },
        vq = Qb ? Qb.isConcatSpreadable : void 0,
        Us = function(e) { return Wa(e) || tf(e) || !!(vq && e && e[vq]) },
        az = function(e) { return null != e && e.length ? bi(e, 1) : [] },
        bz = function(e, t, n) {
            switch (n.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, n[0]);
                case 2:
                    return e.call(t, n[0], n[1]);
                case 3:
                    return e.call(t, n[0], n[1], n[2])
            }
            return e.apply(t, n)
        },
        wq = Math.max,
        xq = function(e, t, n) {
            return t = wq(void 0 === t ? e.length - 1 : t, 0),
                function() { for (var r = arguments, i = -1, o = wq(r.length - t, 0), a = Array(o); ++i < o;) a[i] = r[t + i]; for (i = -1, o = Array(t + 1); ++i < t;) o[i] = r[i]; return o[t] = n(a), bz(e, this, o) }
        },
        cz = function(e) { return function() { return e } },
        Eh = function(e) { return e },
        dz = Date.now,
        yq = function(e) {
            var t = 0,
                n = 0;
            return function() {
                var r = dz(),
                    i = 16 - (r - n);
                if (n = r, 0 < i) { if (800 <= ++t) return arguments[0] } else t = 0;
                return e.apply(void 0, arguments)
            }
        }(zh ? function(e, t) { return zh(e, "toString", { configurable: !0, enumerable: !1, value: cz(t), writable: !0 }) } : Eh),
        Ik = function(e) { return yq(xq(e, void 0, az), e + "") }((function(e, t) {
            var n = {};
            if (null == e) return n;
            var r = !1;
            t = je(t, (function(t) { return t = Ch(t, e), r || (r = 1 < t.length), t })), te(e, Sl(e), n), r && (n = he(n, 7, $y));
            for (var i = t.length; i--;) Xy(n, t[i]);
            return n
        })),
        ez = function(e, t, n, r) {
            for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
                var a = e[i];
                t(r, a, n(a), e)
            }
            return r
        },
        Bm = function(e, t, n) { for (var r = -1, i = Object(e), o = (n = n(e)).length; o--;) { var a = n[++r]; if (!1 === t(i[a], a, i)) break } return e },
        zq = function(e, t) { return e && Bm(e, t, Ad) },
        Jk = function(e, t) { return function(t, n) { if (null == t) return t; if (!Ed(t)) return e(t, n); for (var r = t.length, i = -1, o = Object(t); ++i < r && !1 !== n(o[i], i, o);); return t } }(zq),
        fz = function(e, t, n, r) { return Jk(e, (function(e, i, o) { t(r, e, n(e), o) })), r },
        Aq = function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
                if (t(e[n], n, e)) return !0;
            return !1
        },
        Wl = function(e, t, n, r, i, o) {
            var a = 1 & n,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            u = o.get(e);
            var c = o.get(t);
            if (u && c) return u == t && c == e;
            u = -1, c = !0;
            var l = 2 & n ? new jf : void 0;
            for (o.set(e, t), o.set(t, e); ++u < s;) {
                var f = e[u],
                    h = t[u];
                if (r) var p = a ? r(h, f, u, t, e, o) : r(f, h, u, e, t, o);
                if (void 0 !== p) {
                    if (p) continue;
                    c = !1;
                    break
                }
                if (l) { if (!Aq(t, (function(e, t) { if (!l.has(t) && (f === e || i(f, e, n, r, o))) return l.push(t) }))) { c = !1; break } } else if (f !== h && !i(f, h, n, r, o)) { c = !1; break }
            }
            return o.delete(e), o.delete(t), c
        },
        gz = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e, r) { n[++t] = [r, e] })), n
        },
        Bq = Qb ? Qb.prototype : void 0,
        Kk = Bq ? Bq.valueOf : void 0,
        Vs = function(e, t, n, r, i, o, a) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    if (e.byteLength != t.byteLength || !o(new Bh(e), new Bh(t))) break;
                    return !0;
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return bg(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var s = gz;
                case "[object Set]":
                    if (s || (s = wk), e.size != t.size && !(1 & r)) break;
                    return (n = a.get(e)) ? n == t : (r |= 2, a.set(e, t), t = Wl(s(e), s(t), r, i, o, a), a.delete(e), t);
                case "[object Symbol]":
                    if (Kk) return Kk.call(e) == Kk.call(t)
            }
            return !1
        },
        Ws = Object.prototype.hasOwnProperty,
        Xl = Object.prototype.hasOwnProperty,
        hz = function(e, t, n, r) {
            var i = n.length,
                o = i,
                a = !r;
            if (null == e) return !o;
            for (e = Object(e); i--;) { var s = n[i]; if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1 }
            for (; ++i < o;) {
                var u = (s = n[i])[0],
                    c = e[u],
                    l = s[1];
                if (a && s[2]) { if (void 0 === c && !(u in e)) return !1 } else { if (s = new ie, r) var f = r(c, l, u, e, t, s); if (void 0 === f ? !le(l, c, 3, r, s) : !f) return !1 }
            }
            return !0
        },
        iz = function(e) {
            for (var t = Ad(e), n = t.length; n--;) {
                var r = t[n],
                    i = e[r];
                t[n] = [r, i, i == i && !mb(i)]
            }
            return t
        },
        Cq = function(e, t) { return function(n) { return null != n && (n[e] === t && (void 0 !== t || e in Object(n))) } },
        jz = function(e) { var t = iz(e); return 1 == t.length && t[0][2] ? Cq(t[0][0], t[0][1]) : function(n) { return n === e || hz(n, e, t) } },
        kz = function(e, t) {
            return Hk(e) && t == t && !mb(t) ? Cq(eg(e), t) : function(n) {
                var r = null == n ? void 0 : Dh(n, e);
                if (void 0 === (r = void 0 === r ? void 0 : r) && r === t) {
                    if (r = null != n) {
                        for (var i = -1, o = (r = Ch(r = e, n)).length, a = !1; ++i < o;) {
                            var s = eg(r[i]);
                            if (!(a = null != n && null != n && s in Object(n))) break;
                            n = n[s]
                        }
                        a || ++i != o ? r = a : r = !!(o = null == n ? 0 : n.length) && zk(o) && yk(s, o) && (Wa(n) || tf(n))
                    }
                    s = r
                } else s = le(t, r, 3);
                return s
            }
        },
        lz = function(e) { return function(t) { return null == t ? void 0 : t[e] } },
        mz = function(e) { return function(t) { return Dh(t, e) } },
        Ue = function(e) { return "function" == typeof e ? e : null == e ? Eh : "object" == X(e) ? Wa(e) ? kz(e[0], e[1]) : jz(e) : Hk(e) ? lz(eg(e)) : mz(e) },
        Lk = function(e, t) { return function(t, n) { var r = {}; return (Wa(t) ? ez : fz)(t, e, Ue(n), r) } }((function(e, t, n) { dg(e, n, t) })),
        uc = function(e, t) { var n = {}; return t = Ue(t), zq(e, (function(e, r, i) { dg(n, r, t(e, r, i)) })), n };
    P({ target: "String", proto: !0, forced: Q((function() { var e = "".sub('"'); return e !== e.toLowerCase() || 3 < e.split('"').length })) }, { sub: function() { return "<sub>" + String(kb(this)) + "</sub>" } });
    var V = ya,
        Rb = null;
    try { Rb = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports } catch (c) {}
    ya.prototype.__isLong__, Object.defineProperty(ya.prototype, "__isLong__", { value: !0 }), ya.isLong = nb;
    var Zl = {},
        Yl = {};
    ya.fromInt = Bd, ya.fromNumber = Hb, ya.fromBits = za;
    var tg = Math.pow;
    ya.fromString = ei, ya.fromValue = Xb;
    var me = 4294967296,
        $l = me * me,
        bm = $l / 2,
        Dq = Bd(16777216),
        Ib = Bd(0);
    ya.ZERO = Ib;
    var Cd = Bd(0, !0);
    ya.UZERO = Cd;
    var Ve = Bd(1);
    ya.ONE = Ve;
    var Eq = Bd(1, !0);
    ya.UONE = Eq;
    var Mk = Bd(-1);
    ya.NEG_ONE = Mk;
    var cm = za(-1, 2147483647, !1);
    ya.MAX_VALUE = cm;
    var am = za(-1, -1, !0);
    ya.MAX_UNSIGNED_VALUE = am;
    var ob = za(0, -2147483648, !1);
    ya.MIN_VALUE = ob;
    var G = ya.prototype;
    G.toInt = function() { return this.unsigned ? this.low >>> 0 : this.low }, G.toNumber = function() { return this.unsigned ? (this.high >>> 0) * me + (this.low >>> 0) : this.high * me + (this.low >>> 0) }, G.toString = function(e) {
        if (2 > (e = e || 10) || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
            if (this.eq(ob)) {
                var t = Hb(e),
                    n = this.div(t);
                return t = n.mul(t).sub(this), n.toString(e) + t.toInt().toString(e)
            }
            return "-" + this.neg().toString(e)
        }
        n = Hb(tg(e, 6), this.unsigned), t = this;
        for (var r = "";;) {
            var i = t.div(n),
                o = (t.sub(i.mul(n)).toInt() >>> 0).toString(e);
            if ((t = i).isZero()) return o + r;
            for (; 6 > o.length;) o = "0" + o;
            r = "" + o + r
        }
    }, G.getHighBits = function() { return this.high }, G.getHighBitsUnsigned = function() { return this.high >>> 0 }, G.getLowBits = function() { return this.low }, G.getLowBitsUnsigned = function() { return this.low >>> 0 }, G.getNumBitsAbs = function() { if (this.isNegative()) return this.eq(ob) ? 64 : this.neg().getNumBitsAbs(); for (var e = 0 != this.high ? this.high : this.low, t = 31; 0 < t && 0 == (e & 1 << t); t--); return 0 != this.high ? t + 33 : t + 1 }, G.isZero = function() { return 0 === this.high && 0 === this.low }, G.eqz = G.isZero, G.isNegative = function() { return !this.unsigned && 0 > this.high }, G.isPositive = function() { return this.unsigned || 0 <= this.high }, G.isOdd = function() { return 1 == (1 & this.low) }, G.isEven = function() { return 0 == (1 & this.low) }, G.equals = function(e) { return nb(e) || (e = Xb(e)), (this.unsigned === e.unsigned || 1 != this.high >>> 31 || 1 != e.high >>> 31) && (this.high === e.high && this.low === e.low) }, G.eq = G.equals, G.notEquals = function(e) { return !this.eq(e) }, G.neq = G.notEquals, G.ne = G.notEquals, G.lessThan = function(e) { return 0 > this.comp(e) }, G.lt = G.lessThan, G.lessThanOrEqual = function(e) { return 0 >= this.comp(e) }, G.lte = G.lessThanOrEqual, G.le = G.lessThanOrEqual, G.greaterThan = function(e) { return 0 < this.comp(e) }, G.gt = G.greaterThan, G.greaterThanOrEqual = function(e) { return 0 <= this.comp(e) }, G.gte = G.greaterThanOrEqual, G.ge = G.greaterThanOrEqual, G.compare = function(e) {
        if (nb(e) || (e = Xb(e)), this.eq(e)) return 0;
        var t = this.isNegative(),
            n = e.isNegative();
        return t && !n ? -1 : !t && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(e).isNegative() ? -1 : 1
    }, G.comp = G.compare, G.negate = function() { return !this.unsigned && this.eq(ob) ? ob : this.not().add(Ve) }, G.neg = G.negate, G.add = function(e) {
        nb(e) || (e = Xb(e));
        var t = this.high >>> 16,
            n = 65535 & this.high,
            r = this.low >>> 16,
            i = e.high >>> 16,
            o = 65535 & e.high,
            a = e.low >>> 16;
        return r = (a = ((e = (65535 & this.low) + (65535 & e.low)) >>> 16) + (r + a)) >>> 16, za((65535 & a) << 16 | 65535 & e, (t = ((r += n + o) >>> 16) + (t + i) & 65535) << 16 | 65535 & r, this.unsigned)
    }, G.subtract = function(e) { return nb(e) || (e = Xb(e)), this.add(e.neg()) }, G.sub = G.subtract, G.multiply = function(e) {
        if (this.isZero()) return Ib;
        if (nb(e) || (e = Xb(e)), Rb) { var t = Rb.mul(this.low, this.high, e.low, e.high); return za(t, Rb.get_high(), this.unsigned) }
        if (e.isZero()) return Ib;
        if (this.eq(ob)) return e.isOdd() ? ob : Ib;
        if (e.eq(ob)) return this.isOdd() ? ob : Ib;
        if (this.isNegative()) return e.isNegative() ? this.neg().mul(e.neg()) : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(Dq) && e.lt(Dq)) return Hb(this.toNumber() * e.toNumber(), this.unsigned);
        t = this.high >>> 16;
        var n = 65535 & this.high,
            r = this.low >>> 16,
            i = 65535 & this.low,
            o = e.high >>> 16,
            a = 65535 & e.high,
            s = e.low >>> 16,
            u = i * (e = 65535 & e.low),
            c = (u >>> 16) + r * e,
            l = c >>> 16;
        l += (c = (65535 & c) + i * s) >>> 16;
        var f = (l += n * e) >>> 16;
        return za((65535 & c) << 16 | 65535 & u, (f = (f += (l = (65535 & l) + r * s) >>> 16) + ((l = (65535 & l) + i * a) >>> 16) + (t * e + n * s + r * a + i * o) & 65535) << 16 | 65535 & l, this.unsigned)
    }, G.mul = G.multiply, G.divide = function(e) {
        if (nb(e) || (e = Xb(e)), e.isZero()) throw Error("division by zero");
        if (Rb) return this.unsigned || -2147483648 !== this.high || -1 !== e.low || -1 !== e.high ? za(e = (this.unsigned ? Rb.div_u : Rb.div_s)(this.low, this.high, e.low, e.high), Rb.get_high(), this.unsigned) : this;
        if (this.isZero()) return this.unsigned ? Cd : Ib;
        if (this.unsigned) { if (e.unsigned || (e = e.toUnsigned()), e.gt(this)) return Cd; if (e.gt(this.shru(1))) return Eq; var t = Cd } else {
            if (this.eq(ob)) { if (e.eq(Ve) || e.eq(Mk)) return ob; if (e.eq(ob)) return Ve; var n = this.shr(1).div(e).shl(1); if (n.eq(Ib)) return e.isNegative() ? Ve : Mk; var r = this.sub(e.mul(n)); return n.add(r.div(e)) }
            if (e.eq(ob)) return this.unsigned ? Cd : Ib;
            if (this.isNegative()) return e.isNegative() ? this.neg().div(e.neg()) : this.neg().div(e).neg();
            if (e.isNegative()) return this.div(e.neg()).neg();
            t = Ib
        }
        for (r = this; r.gte(e);) {
            n = Math.max(1, Math.floor(r.toNumber() / e.toNumber()));
            var i = Math.ceil(Math.log(n) / Math.LN2);
            i = 48 >= i ? 1 : tg(2, i - 48);
            for (var o = Hb(n), a = o.mul(e); a.isNegative() || a.gt(r);) a = (o = Hb(n -= i, this.unsigned)).mul(e);
            o.isZero() && (o = Ve), t = t.add(o), r = r.sub(a)
        }
        return t
    }, G.div = G.divide, G.modulo = function(e) { return nb(e) || (e = Xb(e)), Rb ? za(e = (this.unsigned ? Rb.rem_u : Rb.rem_s)(this.low, this.high, e.low, e.high), Rb.get_high(), this.unsigned) : this.sub(this.div(e).mul(e)) }, G.mod = G.modulo, G.rem = G.modulo, G.not = function() { return za(~this.low, ~this.high, this.unsigned) }, G.and = function(e) { return nb(e) || (e = Xb(e)), za(this.low & e.low, this.high & e.high, this.unsigned) }, G.or = function(e) { return nb(e) || (e = Xb(e)), za(this.low | e.low, this.high | e.high, this.unsigned) }, G.xor = function(e) { return nb(e) || (e = Xb(e)), za(this.low ^ e.low, this.high ^ e.high, this.unsigned) }, G.shiftLeft = function(e) { return nb(e) && (e = e.toInt()), 0 == (e &= 63) ? this : 32 > e ? za(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : za(0, this.low << e - 32, this.unsigned) }, G.shl = G.shiftLeft, G.shiftRight = function(e) { return nb(e) && (e = e.toInt()), 0 == (e &= 63) ? this : 32 > e ? za(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : za(this.high >> e - 32, 0 <= this.high ? 0 : -1, this.unsigned) }, G.shr = G.shiftRight, G.shiftRightUnsigned = function(e) { if (nb(e) && (e = e.toInt()), 0 === (e &= 63)) return this; var t = this.high; return 32 > e ? za(this.low >>> e | t << 32 - e, t >>> e, this.unsigned) : za(32 === e ? t : t >>> e - 32, 0, this.unsigned) }, G.shru = G.shiftRightUnsigned, G.shr_u = G.shiftRightUnsigned, G.toSigned = function() { return this.unsigned ? za(this.low, this.high, !1) : this }, G.toUnsigned = function() { return this.unsigned ? this : za(this.low, this.high, !0) }, G.toBytes = function(e) { return e ? this.toBytesLE() : this.toBytesBE() }, G.toBytesLE = function() {
        var e = this.high,
            t = this.low;
        return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24]
    }, G.toBytesBE = function() {
        var e = this.high,
            t = this.low;
        return [e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
    }, ya.fromBytes = function(e, t, n) { return n ? ya.fromBytesLE(e, t) : ya.fromBytesBE(e, t) }, ya.fromBytesLE = function(e, t) { return new ya(e[0] | e[1] << 8 | e[2] << 16 | e[3] << 24, e[4] | e[5] << 8 | e[6] << 16 | e[7] << 24, t) }, ya.fromBytesBE = function(e, t) { return new ya(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7], e[0] << 24 | e[1] << 16 | e[2] << 8 | e[3], t) };
    var fi = function(e, t) {
            return (fi = Object.setPrototypeOf || { __proto__: [] }
                instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t)
        },
        Nk = !1,
        Jb = { Promise: void 0, set useDeprecatedSynchronousErrorHandling(e) { e ? console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + Error().stack) : Nk && console.log("RxJS: Back to a better error behavior. Thank you. <3"), Nk = e }, get useDeprecatedSynchronousErrorHandling() { return Nk } },
        Fh = {
            closed: !0,
            next: function(e) {},
            error: function(e) {
                if (Jb.useDeprecatedSynchronousErrorHandling) throw e;
                oe(e)
            },
            complete: function() {}
        },
        Kb = Array.isArray || function(e) { return e && "number" == typeof e.length },
        nf = function() {
            function e(e) { return Error.call(this), this.message = e ? e.length + " errors occurred during unsubscription:\n" + e.map((function(e, t) { return t + 1 + ") " + e.toString() })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = e, this }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        Pa = function() {
            function e(e) { this.closed = !1, this._subscriptions = this._parentOrParents = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e) }
            return e.prototype.unsubscribe = function() {
                if (!this.closed) {
                    var t = this._parentOrParents,
                        n = this._ctorUnsubscribe,
                        r = this._unsubscribe,
                        i = this._subscriptions;
                    if (this.closed = !0, this._subscriptions = this._parentOrParents = null, t instanceof e) t.remove(this);
                    else if (null !== t)
                        for (var o = 0; o < t.length; ++o) t[o].remove(this);
                    if (ne(r)) { n && (this._unsubscribe = void 0); try { r.call(this) } catch (e) { var a = e instanceof nf ? dm(e.errors) : [e] } }
                    if (Kb(i))
                        for (o = -1, t = i.length; ++o < t;)
                            if (gi(n = i[o])) try { n.unsubscribe() } catch (e) { a = a || [], e instanceof nf ? a = a.concat(dm(e.errors)) : a.push(e) }
                    if (a) throw new nf(a)
                }
            }, e.prototype.add = function(t) {
                var n = t;
                if (!t) return e.EMPTY;
                switch (X(t)) {
                    case "function":
                        n = new e(t);
                    case "object":
                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                        if (this.closed) return n.unsubscribe(), n;
                        n instanceof e || (t = n, (n = new e)._subscriptions = [t]);
                        break;
                    default:
                        throw Error("unrecognized teardown " + t + " added to Subscription.")
                }
                if (null === (t = n._parentOrParents)) n._parentOrParents = this;
                else if (t instanceof e) {
                    if (t === this) return n;
                    n._parentOrParents = [t, this]
                } else {
                    if (-1 !== t.indexOf(this)) return n;
                    t.push(this)
                }
                return null === (t = this._subscriptions) ? this._subscriptions = [n] : t.push(n), n
            }, e.prototype.remove = function(e) {
                var t = this._subscriptions;
                t && (-1 !== (e = t.indexOf(e)) && t.splice(e, 1))
            }, e.EMPTY = function(e) { return e.closed = !0, e }(new e), e
        }(),
        Gh = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
        ja = function(e) {
            function t(n, r, i) {
                var o = e.call(this) || this;
                switch (o.syncErrorValue = null, o.syncErrorThrown = !1, o.syncErrorThrowable = !1, o.isStopped = !1, arguments.length) {
                    case 0:
                        o.destination = Fh;
                        break;
                    case 1:
                        if (!n) { o.destination = Fh; break }
                        if ("object" === X(n)) { n instanceof t ? (o.syncErrorThrowable = n.syncErrorThrowable, o.destination = n, n.add(o)) : (o.syncErrorThrowable = !0, o.destination = new Fq(o, n)); break }
                    default:
                        o.syncErrorThrowable = !0, o.destination = new Fq(o, n, r, i)
                }
                return o
            }
            return N(t, e), t.prototype[Gh] = function() { return this }, t.create = function(e, n, r) { return (e = new t(e, n, r)).syncErrorThrowable = !1, e }, t.prototype.next = function(e) { this.isStopped || this._next(e) }, t.prototype.error = function(e) { this.isStopped || (this.isStopped = !0, this._error(e)) }, t.prototype.complete = function() { this.isStopped || (this.isStopped = !0, this._complete()) }, t.prototype.unsubscribe = function() { this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this)) }, t.prototype._next = function(e) { this.destination.next(e) }, t.prototype._error = function(e) { this.destination.error(e), this.unsubscribe() }, t.prototype._complete = function() { this.destination.complete(), this.unsubscribe() }, t.prototype._unsubscribeAndRecycle = function() { var e = this._parentOrParents; return this._parentOrParents = null, this.unsubscribe(), this.isStopped = this.closed = !1, this._parentOrParents = e, this }, t
        }(Pa),
        Fq = function(e) {
            function t(t, n, r, i) {
                var o = e.call(this) || this;
                if (o._parentSubscriber = t, t = o, ne(n)) var a = n;
                else n && (a = n.next, r = n.error, i = n.complete, n !== Fh && (ne((t = Object.create(n)).unsubscribe) && o.add(t.unsubscribe.bind(t)), t.unsubscribe = o.unsubscribe.bind(o)));
                return o._context = t, o._next = a, o._error = r, o._complete = i, o
            }
            return N(t, e), t.prototype.next = function(e) {
                if (!this.isStopped && this._next) {
                    var t = this._parentSubscriber;
                    Jb.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe() : this.__tryOrUnsub(this._next, e)
                }
            }, t.prototype.error = function(e) {
                if (!this.isStopped) {
                    var t = this._parentSubscriber,
                        n = Jb.useDeprecatedSynchronousErrorHandling;
                    if (this._error) n && t.syncErrorThrowable ? this.__tryOrSetError(t, this._error, e) : this.__tryOrUnsub(this._error, e), this.unsubscribe();
                    else if (t.syncErrorThrowable) n ? (t.syncErrorValue = e, t.syncErrorThrown = !0) : oe(e), this.unsubscribe();
                    else {
                        if (this.unsubscribe(), n) throw e;
                        oe(e)
                    }
                }
            }, t.prototype.complete = function() {
                var e = this;
                if (!this.isStopped) {
                    var t = this._parentSubscriber;
                    if (this._complete) {
                        var n = function() { return e._complete.call(e._context) };
                        Jb.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? this.__tryOrSetError(t, n) : this.__tryOrUnsub(n)
                    }
                    this.unsubscribe()
                }
            }, t.prototype.__tryOrUnsub = function(e, t) {
                try { e.call(this._context, t) } catch (e) {
                    if (this.unsubscribe(), Jb.useDeprecatedSynchronousErrorHandling) throw e;
                    oe(e)
                }
            }, t.prototype.__tryOrSetError = function(e, t, n) { if (!Jb.useDeprecatedSynchronousErrorHandling) throw Error("bad call"); try { t.call(this._context, n) } catch (t) { return Jb.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : oe(t), !0 } return !1 }, t.prototype._unsubscribe = function() {
                var e = this._parentSubscriber;
                this._parentSubscriber = this._context = null, e.unsubscribe()
            }, t
        }(ja),
        pe = "function" == typeof Symbol && Symbol.observable || "@@observable",
        Z = function() {
            function e(e) { this._isScalar = !1, e && (this._subscribe = e) }
            return e.prototype.lift = function(t) { var n = new e; return n.source = this, n.operator = t, n }, e.prototype.subscribe = function(e, t, n) {
                var r = this.operator;
                e: {
                    if (e) { if (e instanceof ja) break e; if (e[Gh]) { e = e[Gh](); break e } }
                    e = e || t || n ? new ja(e, t, n) : new ja(Fh)
                }
                if (r ? e.add(r.call(e, this.source)) : e.add(this.source || Jb.useDeprecatedSynchronousErrorHandling && !e.syncErrorThrowable ? this._subscribe(e) : this._trySubscribe(e)), Jb.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable && (e.syncErrorThrowable = !1, e.syncErrorThrown)) throw e.syncErrorValue;
                return e
            }, e.prototype._trySubscribe = function(e) { try { return this._subscribe(e) } catch (t) { Jb.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = t), hi(e) ? e.error(t) : console.warn(t) } }, e.prototype.forEach = function(e, t) { var n = this; return new(t = fm(t))((function(t, r) { var i = n.subscribe((function(t) { try { e(t) } catch (e) { r(e), i && i.unsubscribe() } }), r, t) })) }, e.prototype._subscribe = function(e) { var t = this.source; return t && t.subscribe(e) }, e.prototype[pe] = function() { return this }, e.prototype.pipe = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; return 0 === e.length ? this : em(e)(this) }, e.prototype.toPromise = function(e) {
                var t = this;
                return new(e = fm(e))((function(e, n) {
                    var r;
                    t.subscribe((function(e) { return r = e }), (function(e) { return n(e) }), (function() { return e(r) }))
                }))
            }, e.create = function(t) { return new e(t) }, e
        }(),
        qd = function() {
            function e() { return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        Gq = function(e) {
            function t(t, n) { var r = e.call(this) || this; return r.subject = t, r.subscriber = n, r.closed = !1, r }
            return N(t, e), t.prototype.unsubscribe = function() {
                if (!this.closed) {
                    this.closed = !0;
                    var e = this.subject,
                        t = e.observers;
                    this.subject = null, !t || 0 === t.length || e.isStopped || e.closed || -1 !== (e = t.indexOf(this.subscriber)) && t.splice(e, 1)
                }
            }, t
        }(Pa),
        Hq = function(e) {
            function t(t) { var n = e.call(this, t) || this; return n.destination = t, n }
            return N(t, e), t
        }(ja),
        Qa = function(e) {
            function t() { var t = e.call(this) || this; return t.observers = [], t.closed = !1, t.isStopped = !1, t.hasError = !1, t.thrownError = null, t }
            return N(t, e), t.prototype[Gh] = function() { return new Hq(this) }, t.prototype.lift = function(e) { var t = new Iq(this, this); return t.operator = e, t }, t.prototype.next = function(e) {
                if (this.closed) throw new qd;
                if (!this.isStopped) {
                    var t = this.observers,
                        n = t.length;
                    t = t.slice();
                    for (var r = 0; r < n; r++) t[r].next(e)
                }
            }, t.prototype.error = function(e) {
                if (this.closed) throw new qd;
                this.hasError = !0, this.thrownError = e, this.isStopped = !0;
                var t = this.observers,
                    n = t.length;
                t = t.slice();
                for (var r = 0; r < n; r++) t[r].error(e);
                this.observers.length = 0
            }, t.prototype.complete = function() {
                if (this.closed) throw new qd;
                this.isStopped = !0;
                var e = this.observers,
                    t = e.length;
                e = e.slice();
                for (var n = 0; n < t; n++) e[n].complete();
                this.observers.length = 0
            }, t.prototype.unsubscribe = function() { this.closed = this.isStopped = !0, this.observers = null }, t.prototype._trySubscribe = function(t) { if (this.closed) throw new qd; return e.prototype._trySubscribe.call(this, t) }, t.prototype._subscribe = function(e) { if (this.closed) throw new qd; return this.hasError ? (e.error(this.thrownError), Pa.EMPTY) : this.isStopped ? (e.complete(), Pa.EMPTY) : (this.observers.push(e), new Gq(this, e)) }, t.prototype.asObservable = function() { var e = new Z; return e.source = this, e }, t.create = function(e, t) { return new Iq(e, t) }, t
        }(Z),
        Iq = function(e) {
            function t(t, n) { var r = e.call(this) || this; return r.destination = t, r.source = n, r }
            return N(t, e), t.prototype.next = function(e) {
                var t = this.destination;
                t && t.next && t.next(e)
            }, t.prototype.error = function(e) {
                var t = this.destination;
                t && t.error && this.destination.error(e)
            }, t.prototype.complete = function() {
                var e = this.destination;
                e && e.complete && this.destination.complete()
            }, t.prototype._subscribe = function(e) { return this.source ? this.source.subscribe(e) : Pa.EMPTY }, t
        }(Qa),
        Xs = function() {
            function e(e) { this.connectable = e }
            return e.prototype.call = function(e, t) { var n = this.connectable; return n._refCount++, e = new nz(e, n), t = t.subscribe(e), e.closed || (e.connection = n.connect()), t }, e
        }(),
        nz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).connectable = n, t }
            return N(t, e), t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._refCount;
                    0 >= t ? this.connection = null : (e._refCount = t - 1, 1 < t ? this.connection = null : (t = this.connection, e = e._connection, this.connection = null, !e || t && e !== t || e.unsubscribe()))
                } else this.connection = null
            }, t
        }(ja),
        Jq = function(e) {
            function t(t, n) { var r = e.call(this) || this; return r.source = t, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r }
            return N(t, e), t.prototype._subscribe = function(e) { return this.getSubject().subscribe(e) }, t.prototype.getSubject = function() { var e = this._subject; return e && !e.isStopped || (this._subject = this.subjectFactory()), this._subject }, t.prototype.connect = function() { var e = this._connection; return e || (this._isComplete = !1, (e = this._connection = new Pa).add(this.source.subscribe(new oz(this.getSubject(), this))), e.closed && (this._connection = null, e = Pa.EMPTY)), e }, t.prototype.refCount = function() { return gm()(this) }, t
        }(Z),
        Kt = function() { var e = Jq.prototype; return { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: e._subscribe }, _isComplete: { value: e._isComplete, writable: !0 }, getSubject: { value: e.getSubject }, connect: { value: e.connect }, refCount: { value: e.refCount } } }(),
        oz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).connectable = n, t }
            return N(t, e), t.prototype._error = function(t) { this._unsubscribe(), e.prototype._error.call(this, t) }, t.prototype._complete = function() { this.connectable._isComplete = !0, this._unsubscribe(), e.prototype._complete.call(this) }, t.prototype._unsubscribe = function() {
                var e = this.connectable;
                if (e) {
                    this.connectable = null;
                    var t = e._connection;
                    e._refCount = 0, e._subject = null, e._connection = null, t && t.unsubscribe()
                }
            }, t
        }(Hq);
    ! function(e) {
        function t(t, n) { return (t = e.call(this, t) || this).connectable = n, t }
        N(t, e), t.prototype._unsubscribe = function() {
            var e = this.connectable;
            if (e) {
                this.connectable = null;
                var t = e._refCount;
                0 >= t ? this.connection = null : (e._refCount = t - 1, 1 < t ? this.connection = null : (t = this.connection, e = e._connection, this.connection = null, !e || t && e !== t || e.unsubscribe()))
            } else this.connection = null
        }
    }(ja),
    function(e) {
        function t(t, n, r, i, o) { return (t = e.call(this, t) || this).keySelector = n, t.elementSelector = r, t.durationSelector = i, t.subjectSelector = o, t.groups = null, t.attemptedToUnsubscribe = !1, t.count = 0, t }
        N(t, e), t.prototype._next = function(e) {
            try { var t = this.keySelector(e) } catch (e) { return void this.error(e) }
            this._group(e, t)
        }, t.prototype._group = function(e, t) {
            var n = this.groups;
            n || (n = this.groups = new Map);
            var r = n.get(t);
            if (this.elementSelector) try { var i = this.elementSelector(e) } catch (e) { this.error(e) } else i = e;
            if (!r && (r = this.subjectSelector ? this.subjectSelector() : new Qa, n.set(t, r), e = new Ok(t, r, this), this.destination.next(e), this.durationSelector)) {
                e = void 0;
                try { e = this.durationSelector(new Ok(t, r)) } catch (e) { return void this.error(e) }
                this.add(e.subscribe(new pz(t, r, this)))
            }
            r.closed || r.next(i)
        }, t.prototype._error = function(e) {
            var t = this.groups;
            t && (t.forEach((function(t, n) { t.error(e) })), t.clear()), this.destination.error(e)
        }, t.prototype._complete = function() {
            var e = this.groups;
            e && (e.forEach((function(e, t) { e.complete() })), e.clear()), this.destination.complete()
        }, t.prototype.removeGroup = function(e) { this.groups.delete(e) }, t.prototype.unsubscribe = function() { this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && e.prototype.unsubscribe.call(this)) }
    }(ja);
    var pz = function(e) {
            function t(t, n, r) { var i = e.call(this, n) || this; return i.key = t, i.group = n, i.parent = r, i }
            return N(t, e), t.prototype._next = function(e) { this.complete() }, t.prototype._unsubscribe = function() {
                var e = this.parent,
                    t = this.key;
                this.key = this.parent = null, e && e.removeGroup(t)
            }, t
        }(ja),
        Ok = function(e) {
            function t(t, n, r) { var i = e.call(this) || this; return i.key = t, i.groupSubject = n, i.refCountSubscription = r, i }
            return N(t, e), t.prototype._subscribe = function(e) {
                var t = new Pa,
                    n = this.refCountSubscription,
                    r = this.groupSubject;
                return n && !n.closed && t.add(new qz(n)), t.add(r.subscribe(e)), t
            }, t
        }(Z),
        qz = function(e) {
            function t(t) { var n = e.call(this) || this; return n.parent = t, t.count++, n }
            return N(t, e), t.prototype.unsubscribe = function() {
                var t = this.parent;
                t.closed || this.closed || (e.prototype.unsubscribe.call(this), --t.count, 0 === t.count && t.attemptedToUnsubscribe && t.unsubscribe())
            }, t
        }(Pa),
        rz = function(e) {
            function t(t) { var n = e.call(this) || this; return n._value = t, n }
            return N(t, e), Object.defineProperty(t.prototype, "value", { get: function() { return this.getValue() }, enumerable: !0, configurable: !0 }), t.prototype._subscribe = function(t) { var n = e.prototype._subscribe.call(this, t); return n && !n.closed && t.next(this._value), n }, t.prototype.getValue = function() { if (this.hasError) throw this.thrownError; if (this.closed) throw new qd; return this._value }, t.prototype.next = function(t) { e.prototype.next.call(this, this._value = t) }, t
        }(Qa),
        fg = function(e) {
            function t(t, n) { var r = e.call(this, t, n) || this; return r.scheduler = t, r.work = n, r.pending = !1, r }
            return N(t, e), t.prototype.schedule = function(e, t) {
                if (void 0 === t && (t = 0), this.closed) return this;
                this.state = e, e = this.id;
                var n = this.scheduler;
                return null != e && (this.id = this.recycleAsyncId(n, e, t)), this.pending = !0, this.delay = t, this.id = this.id || this.requestAsyncId(n, this.id, t), this
            }, t.prototype.requestAsyncId = function(e, t, n) { return void 0 === n && (n = 0), setInterval(e.flush.bind(e, this), n) }, t.prototype.recycleAsyncId = function(e, t, n) {
                if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return t;
                clearInterval(t)
            }, t.prototype.execute = function(e, t) { return this.closed ? Error("executing a cancelled action") : (this.pending = !1, (e = this._execute(e, t)) ? e : void(!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)))) }, t.prototype._execute = function(e, t) { t = !1; var n = void 0; try { this.work(e) } catch (e) { t = !0, n = !!e && e || Error(e) } if (t) return this.unsubscribe(), n }, t.prototype._unsubscribe = function() {
                var e = this.id,
                    t = this.scheduler,
                    n = t.actions,
                    r = n.indexOf(this);
                this.state = this.work = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != e && (this.id = this.recycleAsyncId(t, e, null)), this.delay = null
            }, t
        }(function(e) {
            function t(t, n) { return e.call(this) || this }
            return N(t, e), t.prototype.schedule = function(e, t) { return this }, t
        }(Pa)),
        sz = function(e) {
            function t(t, n) { var r = e.call(this, t, n) || this; return r.scheduler = t, r.work = n, r }
            return N(t, e), t.prototype.schedule = function(t, n) { return void 0 === n && (n = 0), 0 < n ? e.prototype.schedule.call(this, t, n) : (this.delay = n, this.state = t, this.scheduler.flush(this), this) }, t.prototype.execute = function(t, n) { return 0 < n || this.closed ? e.prototype.execute.call(this, t, n) : this._execute(t, n) }, t.prototype.requestAsyncId = function(t, n, r) { return void 0 === r && (r = 0), null !== r && 0 < r || null === r && 0 < this.delay ? e.prototype.requestAsyncId.call(this, t, n, r) : t.flush(this) }, t
        }(fg),
        Pk = function() {
            function e(t, n) { void 0 === n && (n = e.now), this.SchedulerAction = t, this.now = n }
            return e.prototype.schedule = function(e, t, n) { return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(n, t) }, e.now = function() { return Date.now() }, e
        }(),
        gg = function(e) {
            function t(n, r) { void 0 === r && (r = Pk.now); var i = e.call(this, n, (function() { return t.delegate && t.delegate !== i ? t.delegate.now() : r() })) || this; return i.actions = [], i.active = !1, i.scheduled = void 0, i }
            return N(t, e), t.prototype.schedule = function(n, r, i) { return void 0 === r && (r = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(n, r, i) : e.prototype.schedule.call(this, n, r, i) }, t.prototype.flush = function(e) {
                var t = this.actions;
                if (this.active) t.push(e);
                else {
                    var n;
                    this.active = !0;
                    do { if (n = e.execute(e.state, e.delay)) break } while (e = t.shift());
                    if (this.active = !1, n) { for (; e = t.shift();) e.unsubscribe(); throw n }
                }
            }, t
        }(Pk),
        hg = new(function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return N(t, e), t
        }(gg))(sz),
        wb = new Z((function(e) { return e.complete() })),
        hm = function(e) {
            return function(t) {
                for (var n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
                t.complete()
            }
        },
        Qk;
    ! function(e) { e.NEXT = "N", e.ERROR = "E", e.COMPLETE = "C" }(Qk || (Qk = {}));
    var We = function() {
            function e(e, t, n) { this.kind = e, this.value = t, this.error = n, this.hasValue = "N" === e }
            return e.prototype.observe = function(e) {
                switch (this.kind) {
                    case "N":
                        return e.next && e.next(this.value);
                    case "E":
                        return e.error && e.error(this.error);
                    case "C":
                        return e.complete && e.complete()
                }
            }, e.prototype.do = function(e, t, n) {
                switch (this.kind) {
                    case "N":
                        return e && e(this.value);
                    case "E":
                        return t && t(this.error);
                    case "C":
                        return n && n()
                }
            }, e.prototype.accept = function(e, t, n) { return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n) }, e.prototype.toObservable = function() {
                switch (this.kind) {
                    case "N":
                        return cb(this.value);
                    case "E":
                        return aa(this.error);
                    case "C":
                        return of()
                }
                throw Error("unexpected notification kind value")
            }, e.createNext = function(t) { return void 0 !== t ? new e("N", t) : e.undefinedValueNotification }, e.createError = function(t) { return new e("E", void 0, t) }, e.createComplete = function() { return e.completeNotification }, e.completeNotification = new e("C"), e.undefinedValueNotification = new e("N", void 0), e
        }(),
        at = function() {
            function e(e, t) { void 0 === t && (t = 0), this.scheduler = e, this.delay = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new Kq(e, this.scheduler, this.delay)) }, e
        }(),
        Kq = function(e) {
            function t(t, n, r) { return void 0 === r && (r = 0), (t = e.call(this, t) || this).scheduler = n, t.delay = r, t }
            return N(t, e), t.dispatch = function(e) { e.notification.observe(e.destination), this.unsubscribe() }, t.prototype.scheduleMessage = function(e) { this.destination.add(this.scheduler.schedule(t.dispatch, this.delay, new tz(e, this.destination))) }, t.prototype._next = function(e) { this.scheduleMessage(We.createNext(e)) }, t.prototype._error = function(e) { this.scheduleMessage(We.createError(e)), this.unsubscribe() }, t.prototype._complete = function() { this.scheduleMessage(We.createComplete()), this.unsubscribe() }, t
        }(ja),
        tz = function(e, t) { this.notification = e, this.destination = t },
        se = function(e) {
            function t(t, n, r) { void 0 === t && (t = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY); var i = e.call(this) || this; return i.scheduler = r, i._events = [], i._infiniteTimeWindow = !1, i._bufferSize = 1 > t ? 1 : t, i._windowTime = 1 > n ? 1 : n, n === Number.POSITIVE_INFINITY ? (i._infiniteTimeWindow = !0, i.next = i.nextInfiniteTimeWindow) : i.next = i.nextTimeWindow, i }
            return N(t, e), t.prototype.nextInfiniteTimeWindow = function(t) {
                if (!this.isStopped) {
                    var n = this._events;
                    n.push(t), n.length > this._bufferSize && n.shift()
                }
                e.prototype.next.call(this, t)
            }, t.prototype.nextTimeWindow = function(t) { this.isStopped || (this._events.push(new uz(this._getNow(), t)), this._trimBufferThenGetEvents()), e.prototype.next.call(this, t) }, t.prototype._subscribe = function(e) {
                var t = this._infiniteTimeWindow,
                    n = t ? this._events : this._trimBufferThenGetEvents(),
                    r = this.scheduler,
                    i = n.length;
                if (this.closed) throw new qd;
                if (this.isStopped || this.hasError) var o = Pa.EMPTY;
                else this.observers.push(e), o = new Gq(this, e);
                if (r && e.add(e = new Kq(e, r)), t)
                    for (t = 0; t < i && !e.closed; t++) e.next(n[t]);
                else
                    for (t = 0; t < i && !e.closed; t++) e.next(n[t].value);
                return this.hasError ? e.error(this.thrownError) : this.isStopped && e.complete(), o
            }, t.prototype._getNow = function() { return (this.scheduler || hg).now() }, t.prototype._trimBufferThenGetEvents = function() { for (var e = this._getNow(), t = this._bufferSize, n = this._windowTime, r = this._events, i = r.length, o = 0; o < i && !(e - r[o].time < n);) o++; return i > t && (o = Math.max(o, i - t)), 0 < o && r.splice(0, o), r }, t
        }(Qa),
        uz = function(e, t) { this.time = e, this.value = t },
        qf = function(e) {
            function t() { var t = null !== e && e.apply(this, arguments) || this; return t.value = null, t.hasNext = !1, t.hasCompleted = !1, t }
            return N(t, e), t.prototype._subscribe = function(t) { return this.hasError ? (t.error(this.thrownError), Pa.EMPTY) : this.hasCompleted && this.hasNext ? (t.next(this.value), t.complete(), Pa.EMPTY) : e.prototype._subscribe.call(this, t) }, t.prototype.next = function(e) { this.hasCompleted || (this.value = e, this.hasNext = !0) }, t.prototype.error = function(t) { this.hasCompleted || e.prototype.error.call(this, t) }, t.prototype.complete = function() { this.hasCompleted = !0, this.hasNext && e.prototype.next.call(this, this.value), e.prototype.complete.call(this) }, t
        }(Qa),
        vz = 1,
        wz = Promise.resolve(),
        ki = {},
        Lq = { setImmediate: function(e) { var t = vz++; return ki[t] = !0, wz.then((function() { return im(t) && e() })), t }, clearImmediate: function(e) { im(e) } },
        xz = function(e) {
            function t(t, n) { var r = e.call(this, t, n) || this; return r.scheduler = t, r.work = n, r }
            return N(t, e), t.prototype.requestAsyncId = function(t, n, r) { return void 0 === r && (r = 0), null !== r && 0 < r ? e.prototype.requestAsyncId.call(this, t, n, r) : (t.actions.push(this), t.scheduled || (t.scheduled = Lq.setImmediate(t.flush.bind(t, null)))) }, t.prototype.recycleAsyncId = function(t, n, r) {
                if (void 0 === r && (r = 0), null !== r && 0 < r || null === r && 0 < this.delay) return e.prototype.recycleAsyncId.call(this, t, n, r);
                0 === t.actions.length && (Lq.clearImmediate(n), t.scheduled = void 0)
            }, t
        }(fg),
        ti = new(function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return N(t, e), t.prototype.flush = function(e) {
                this.active = !0, this.scheduled = void 0;
                var t, n = this.actions,
                    r = -1,
                    i = n.length;
                e = e || n.shift();
                do { if (t = e.execute(e.state, e.delay)) break } while (++r < i && (e = n.shift()));
                if (this.active = !1, t) { for (; ++r < i && (e = n.shift());) e.unsubscribe(); throw t }
            }, t
        }(gg))(xz),
        yz = ti,
        Rk = new gg(fg),
        bd = Rk,
        zz = function(e) {
            function t(t, n) { var r = e.call(this, t, n) || this; return r.scheduler = t, r.work = n, r }
            return N(t, e), t.prototype.requestAsyncId = function(t, n, r) { return void 0 === r && (r = 0), null !== r && 0 < r ? e.prototype.requestAsyncId.call(this, t, n, r) : (t.actions.push(this), t.scheduled || (t.scheduled = requestAnimationFrame((function() { return t.flush(null) })))) }, t.prototype.recycleAsyncId = function(t, n, r) {
                if (void 0 === r && (r = 0), null !== r && 0 < r || null === r && 0 < this.delay) return e.prototype.recycleAsyncId.call(this, t, n, r);
                0 === t.actions.length && (cancelAnimationFrame(n), t.scheduled = void 0)
            }, t
        }(fg),
        Mq = new(function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return N(t, e), t.prototype.flush = function(e) {
                this.active = !0, this.scheduled = void 0;
                var t, n = this.actions,
                    r = -1,
                    i = n.length;
                e = e || n.shift();
                do { if (t = e.execute(e.state, e.delay)) break } while (++r < i && (e = n.shift()));
                if (this.active = !1, t) { for (; ++r < i && (e = n.shift());) e.unsubscribe(); throw t }
            }, t
        }(gg))(zz),
        Az = function(e) {
            function t(t, n) { void 0 === t && (t = Nq), void 0 === n && (n = Number.POSITIVE_INFINITY); var r = e.call(this, t, (function() { return r.frame })) || this; return r.maxFrames = n, r.frame = 0, r.index = -1, r }
            return N(t, e), t.prototype.flush = function() {
                for (var e, t, n = this.actions, r = this.maxFrames;
                    (t = n[0]) && t.delay <= r && (n.shift(), this.frame = t.delay, !(e = t.execute(t.state, t.delay))););
                if (e) { for (; t = n.shift();) t.unsubscribe(); throw e }
            }, t.frameTimeFactor = 10, t
        }(gg),
        Nq = function(e) {
            function t(t, n, r) { void 0 === r && (r = t.index += 1); var i = e.call(this, t, n) || this; return i.scheduler = t, i.work = n, i.index = r, i.active = !0, i.index = t.index = r, i }
            return N(t, e), t.prototype.schedule = function(n, r) {
                if (void 0 === r && (r = 0), !this.id) return e.prototype.schedule.call(this, n, r);
                this.active = !1;
                var i = new t(this.scheduler, this.work);
                return this.add(i), i.schedule(n, r)
            }, t.prototype.requestAsyncId = function(e, n, r) { return void 0 === r && (r = 0), this.delay = e.frame + r, (e = e.actions).push(this), e.sort(t.sortActions), !0 }, t.prototype.recycleAsyncId = function(e, t, n) {}, t.prototype._execute = function(t, n) { if (!0 === this.active) return e.prototype._execute.call(this, t, n) }, t.sortActions = function(e, t) { return e.delay === t.delay ? e.index === t.index ? 0 : e.index > t.index ? 1 : -1 : e.delay > t.delay ? 1 : -1 }, t
        }(fg),
        Sk = function() {
            function e() { return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        wg = function() {
            function e() { return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        qb = function() {
            function e() { return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this }
            return e.prototype = Object.create(Error.prototype), e
        }(),
        bt = function() {
            function e(e, t) { this.project = e, this.thisArg = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new Bz(e, this.project, this.thisArg)) }, e
        }(),
        Bz = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).project = n, t.count = 0, t.thisArg = r || t, t }
            return N(t, e), t.prototype._next = function(e) {
                try { var t = this.project.call(this.thisArg, e, this.count++) } catch (e) { return void this.destination.error(e) }
                this.destination.next(t)
            }, t
        }(ja),
        Tk = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return N(t, e), t.prototype.notifyNext = function(e, t, n, r, i) { this.destination.next(t) }, t.prototype.notifyError = function(e, t) { this.destination.error(e) }, t.prototype.notifyComplete = function(e) { this.destination.complete() }, t
        }(ja),
        gt = function(e) {
            function t(t, n, r) { var i = e.call(this) || this; return i.parent = t, i.outerValue = n, i.outerIndex = r, i.index = 0, i }
            return N(t, e), t.prototype._next = function(e) { this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this) }, t.prototype._error = function(e) { this.parent.notifyError(e, this), this.unsubscribe() }, t.prototype._complete = function() { this.parent.notifyComplete(this), this.unsubscribe() }, t
        }(ja),
        Cz = function(e) { return function(t) { return e.then((function(e) { t.closed || (t.next(e), t.complete()) }), (function(e) { return t.error(e) })).then(null, oe), t } },
        $c = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator",
        Dz = function(e) { return function(t) { for (var n = e[$c]();;) { var r = void 0; try { r = n.next() } catch (e) { return t.error(e), t } if (r.done) { t.complete(); break } if (t.next(r.value), t.closed) break } return "function" == typeof n.return && t.add((function() { n.return && n.return() })), t } },
        Ez = function(e) { return function(t) { var n = e[pe](); if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable"); return n.subscribe(t) } },
        om = function(e) { return e && "number" == typeof e.length && "function" != typeof e },
        rf = function(e) { if (e && "function" == typeof e[pe]) return Ez(e); if (om(e)) return hm(e); if (mm(e)) return Cz(e); if (e && "function" == typeof e[$c]) return Dz(e); throw e = gi(e) ? "an invalid object" : "'" + e + "'", new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.") },
        Oq = {},
        Gz = function() {
            function e(e) { this.resultSelector = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new Fz(e, this.resultSelector)) }, e
        }(),
        Fz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).resultSelector = n, t.active = 0, t.values = [], t.observables = [], t }
            return N(t, e), t.prototype._next = function(e) { this.values.push(Oq), this.observables.push(e) }, t.prototype._complete = function() {
                var e = this.observables,
                    t = e.length;
                if (0 === t) this.destination.complete();
                else { this.toRespond = this.active = t; for (var n = 0; n < t; n++) this.add(li(this, e[n], void 0, n)) }
            }, t.prototype.notifyComplete = function(e) { 0 == --this.active && this.destination.complete() }, t.prototype.notifyNext = function(e, t, n) {
                var r = (e = this.values)[n];
                r = this.toRespond ? r === Oq ? --this.toRespond : this.toRespond : 0, e[n] = t, 0 === r && (this.resultSelector ? this._tryResultSelector(e) : this.destination.next(e.slice()))
            }, t.prototype._tryResultSelector = function(e) {
                try { var t = this.resultSelector.apply(this, e) } catch (e) { return void this.destination.error(e) }
                this.destination.next(t)
            }, t
        }(Tk),
        vc = function(e) {
            function t(t) { var n = e.call(this) || this; return n.parent = t, n }
            return N(t, e), t.prototype._next = function(e) { this.parent.notifyNext(e) }, t.prototype._error = function(e) { this.parent.notifyError(e), this.unsubscribe() }, t.prototype._complete = function() { this.parent.notifyComplete(), this.unsubscribe() }, t
        }(ja);
    ! function(e) {
        function t(t, n, r) { var i = e.call(this) || this; return i.parent = t, i.outerValue = n, i.outerIndex = r, i }
        N(t, e), t.prototype._next = function(e) { this.parent.notifyNext(this.outerValue, e, this.outerIndex, this) }, t.prototype._error = function(e) { this.parent.notifyError(e), this.unsubscribe() }, t.prototype._complete = function() { this.parent.notifyComplete(this), this.unsubscribe() }
    }(ja);
    var wc = function(e) {
        function t() { return null !== e && e.apply(this, arguments) || this }
        return N(t, e), t.prototype.notifyNext = function(e) { this.destination.next(e) }, t.prototype.notifyError = function(e) { this.destination.error(e) }, t.prototype.notifyComplete = function() { this.destination.complete() }, t
    }(ja);
    ! function(e) {
        function t() { return null !== e && e.apply(this, arguments) || this }
        N(t, e), t.prototype.notifyNext = function(e, t, n, r) { this.destination.next(t) }, t.prototype.notifyError = function(e) { this.destination.error(e) }, t.prototype.notifyComplete = function(e) { this.destination.complete() }
    }(ja);
    var kt = function() {
            function e(e, t) { void 0 === t && (t = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new Hz(e, this.project, this.concurrent)) }, e
        }(),
        Hz = function(e) {
            function t(t, n, r) { return void 0 === r && (r = Number.POSITIVE_INFINITY), (t = e.call(this, t) || this).project = n, t.concurrent = r, t.hasCompleted = !1, t.buffer = [], t.active = 0, t.index = 0, t }
            return N(t, e), t.prototype._next = function(e) { this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e) }, t.prototype._tryNext = function(e) {
                var t = this.index++;
                try { var n = this.project(e, t) } catch (e) { return void this.destination.error(e) }
                this.active++, this._innerSub(n)
            }, t.prototype._innerSub = function(e) {
                var t = new vc(this),
                    n = this.destination;
                n.add(t), (e = jc(e, t)) !== t && n.add(e)
            }, t.prototype._complete = function() { this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe() }, t.prototype.notifyNext = function(e) { this.destination.next(e) }, t.prototype.notifyComplete = function() {
                var e = this.buffer;
                this.active--, 0 < e.length ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
            }, t
        }(wc),
        Uk = D.parseFloat,
        Pq = -1 / 0 != 1 / Uk("\t\n\v\f\r                　\u2028\u2029\ufeff-0") ? function(e) { e = cj(String(e)); var t = Uk(e); return 0 === t && "-" == e.charAt(0) ? -0 : t } : Uk;
    P({ global: !0, forced: parseFloat != Pq }, { parseFloat: Pq });
    var Vk = new Z(ic),
        pt = function() {
            function e(e, t) { this.predicate = e, this.thisArg = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new Iz(e, this.predicate, this.thisArg)) }, e
        }(),
        Iz = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).predicate = n, t.thisArg = r, t.count = 0, t }
            return N(t, e), t.prototype._next = function(e) {
                try { var t = this.predicate.call(this.thisArg, e, this.count++) } catch (e) { return void this.destination.error(e) }
                t && this.destination.next(e)
            }, t
        }(ja),
        qt = function() {
            function e() {}
            return e.prototype.call = function(e, t) { return t.subscribe(new Jz(e)) }, e
        }(),
        Jz = function(e) {
            function t(t) { return (t = e.call(this, t) || this).hasFirst = !1, t.observables = [], t.subscriptions = [], t }
            return N(t, e), t.prototype._next = function(e) { this.observables.push(e) }, t.prototype._complete = function() {
                var e = this.observables,
                    t = e.length;
                if (0 === t) this.destination.complete();
                else {
                    for (var n = 0; n < t && !this.hasFirst; n++) {
                        var r = li(this, e[n], void 0, n);
                        this.subscriptions && this.subscriptions.push(r), this.add(r)
                    }
                    this.observables = null
                }
            }, t.prototype.notifyNext = function(e, t, n) {
                if (!this.hasFirst) {
                    for (this.hasFirst = !0, e = 0; e < this.subscriptions.length; e++)
                        if (e !== n) {
                            var r = this.subscriptions[e];
                            r.unsubscribe(), this.remove(r)
                        }
                    this.subscriptions = null
                }
                this.destination.next(t)
            }, t
        }(Tk),
        tt = function() {
            function e(e) { this.resultSelector = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new Kz(e, this.resultSelector)) }, e
        }(),
        Kz = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).resultSelector = n, t.iterators = [], t.active = 0, t.resultSelector = "function" == typeof n ? n : void 0, t }
            return N(t, e), t.prototype._next = function(e) {
                var t = this.iterators;
                Kb(e) ? t.push(new Lz(e)) : "function" == typeof e[$c] ? t.push(new Mz(e[$c]())) : t.push(new Nz(this.destination, this, e))
            }, t.prototype._complete = function() {
                var e = this.iterators,
                    t = e.length;
                if (this.unsubscribe(), 0 === t) this.destination.complete();
                else {
                    this.active = t;
                    for (var n = 0; n < t; n++) {
                        var r = e[n];
                        r.stillUnsubscribed ? this.destination.add(r.subscribe()) : this.active--
                    }
                }
            }, t.prototype.notifyInactive = function() { this.active--, 0 === this.active && this.destination.complete() }, t.prototype.checkIterators = function() {
                for (var e = this.iterators, t = e.length, n = this.destination, r = 0; r < t; r++) { var i = e[r]; if ("function" == typeof i.hasValue && !i.hasValue()) return }
                var o = !1,
                    a = [];
                for (r = 0; r < t; r++) {
                    var s = (i = e[r]).next();
                    if (i.hasCompleted() && (o = !0), s.done) return void n.complete();
                    a.push(s.value)
                }
                this.resultSelector ? this._tryresultSelector(a) : n.next(a), o && n.complete()
            }, t.prototype._tryresultSelector = function(e) {
                try { var t = this.resultSelector.apply(this, e) } catch (e) { return void this.destination.error(e) }
                this.destination.next(t)
            }, t
        }(ja),
        Mz = function() {
            function e(e) { this.iterator = e, this.nextResult = e.next() }
            return e.prototype.hasValue = function() { return !0 }, e.prototype.next = function() { var e = this.nextResult; return this.nextResult = this.iterator.next(), e }, e.prototype.hasCompleted = function() { var e = this.nextResult; return !(!e || !e.done) }, e
        }(),
        Lz = function() {
            function e(e) { this.array = e, this.length = this.index = 0, this.length = e.length }
            return e.prototype[$c] = function() { return this }, e.prototype.next = function(e) { e = this.index++; var t = this.array; return e < this.length ? { value: t[e], done: !1 } : { value: null, done: !0 } }, e.prototype.hasValue = function() { return this.array.length > this.index }, e.prototype.hasCompleted = function() { return this.array.length === this.index }, e
        }(),
        Nz = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).parent = n, t.observable = r, t.stillUnsubscribed = !0, t.buffer = [], t.isComplete = !1, t }
            return N(t, e), t.prototype[$c] = function() { return this }, t.prototype.next = function() { var e = this.buffer; return 0 === e.length && this.isComplete ? { value: null, done: !0 } : { value: e.shift(), done: !1 } }, t.prototype.hasValue = function() { return 0 < this.buffer.length }, t.prototype.hasCompleted = function() { return 0 === this.buffer.length && this.isComplete }, t.prototype.notifyComplete = function() { 0 < this.buffer.length ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete() }, t.prototype.notifyNext = function(e) { this.buffer.push(e), this.parent.checkIterators() }, t.prototype.subscribe = function() { return jc(this.observable, new vc(this)) }, t
        }(wc),
        Oz = Object.freeze({
            __proto__: null,
            Observable: Z,
            ConnectableObservable: Jq,
            GroupedObservable: Ok,
            observable: pe,
            Subject: Qa,
            BehaviorSubject: rz,
            ReplaySubject: se,
            AsyncSubject: qf,
            asap: yz,
            asapScheduler: ti,
            async: bd,
            asyncScheduler: Rk,
            queue: hg,
            queueScheduler: hg,
            animationFrame: Mq,
            animationFrameScheduler: Mq,
            VirtualTimeScheduler: Az,
            VirtualAction: Nq,
            Scheduler: Pk,
            Subscription: Pa,
            Subscriber: ja,
            Notification: We,
            get NotificationKind() { return Qk },
            pipe: ii,
            noop: ic,
            identity: Yc,
            isObservable: function(e) { return !!e && (e instanceof Z || "function" == typeof e.lift && "function" == typeof e.subscribe) },
            ArgumentOutOfRangeError: Sk,
            EmptyError: wg,
            ObjectUnsubscribedError: qd,
            UnsubscriptionError: nf,
            TimeoutError: qb,
            bindCallback: jm,
            bindNodeCallback: km,
            combineLatest: function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = t = void 0; return Zc(e[e.length - 1]) && (n = e.pop()), "function" == typeof e[e.length - 1] && (t = e.pop()), 1 === e.length && Kb(e[0]) && (e = e[0]), pf(e, n).lift(new Gz(t)) },
            concat: pm,
            defer: ad,
            empty: of,
            forkJoin: qm,
            from: Lb,
            fromEvent: hb,
            fromEventPattern: sm,
            generate: function(e, t, n, r, i) {
                if (1 == arguments.length) {
                    var o = e.initialState;
                    t = e.condition, n = e.iterate;
                    var a = e.resultSelector || Yc;
                    i = e.scheduler
                } else void 0 === r || Zc(r) ? (o = e, a = Yc, i = r) : (o = e, a = r);
                return new Z((function(e) {
                    var r = o;
                    if (i) return i.schedule(lt, 0, { subscriber: e, iterate: n, condition: t, resultSelector: a, state: r });
                    for (;;) {
                        if (t) { var s = void 0; try { s = t(r) } catch (t) { e.error(t); break } if (!s) { e.complete(); break } }
                        s = void 0;
                        try { s = a(r) } catch (t) { e.error(t); break }
                        if (e.next(s), e.closed) break;
                        try { r = n(r) } catch (t) { e.error(t); break }
                    }
                }))
            },
            iif: function(e, t, n) { return void 0 === t && (t = wb), void 0 === n && (n = wb), ad((function() { return e() ? t : n })) },
            interval: tm,
            merge: Yb,
            never: function() { return Vk },
            of: cb,
            onErrorResumeNext: ni,
            pairs: function(e, t) {
                return new Z(t ? function(n) {
                    var r = Object.keys(e),
                        i = new Pa;
                    return i.add(t.schedule(nt, 0, { keys: r, index: 0, subscriber: n, subscription: i, obj: e })), i
                } : function(t) {
                    for (var n = Object.keys(e), r = 0; r < n.length && !t.closed; r++) {
                        var i = n[r];
                        e.hasOwnProperty(i) && t.next([i, e[i]])
                    }
                    t.complete()
                })
            },
            partition: function(e, t, n) { return [xb(t, n)(new Z(rf(e))), xb(ot(t, n))(new Z(rf(e)))] },
            race: Da,
            range: function(e, t, n) {
                return void 0 === e && (e = 0), new Z((function(r) {
                    void 0 === t && (t = e, e = 0);
                    var i = 0,
                        o = e;
                    if (n) return n.schedule(rt, 0, { index: i, count: t, start: e, subscriber: r });
                    for (;;) { if (i++ >= t) { r.complete(); break } if (r.next(o++), r.closed) break }
                }))
            },
            throwError: aa,
            timer: Bc,
            using: function(e, t) { return new Z((function(n) { try { var r = e() } catch (e) { return void n.error(e) } try { var i = t(r) } catch (e) { return void n.error(e) } var o = (i ? Lb(i) : wb).subscribe(n); return function() { o.unsubscribe(), r && r.unsubscribe() } })) },
            zip: oi,
            scheduled: nm,
            EMPTY: wb,
            NEVER: Vk,
            config: Jb
        }),
        ut = function() {
            function e(e) { this.selector = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new Pz(e, this.selector, this.caught)) }, e
        }(),
        Pz = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).selector = n, t.caught = r, t }
            return N(t, e), t.prototype.error = function(t) {
                if (!this.isStopped) {
                    var n = void 0;
                    try { n = this.selector(t, this.caught) } catch (t) { return void e.prototype.error.call(this, t) }
                    this._unsubscribeAndRecycle(), t = new vc(this), this.add(t), (n = jc(n, t)) !== t && this.add(n)
                }
            }, t
        }(wc),
        vt = function() {
            function e(e) { this.defaultValue = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new Qz(e, this.defaultValue)) }, e
        }(),
        Qz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).defaultValue = n, t.isEmpty = !0, t }
            return N(t, e), t.prototype._next = function(e) { this.isEmpty = !1, this.destination.next(e) }, t.prototype._complete = function() { this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete() }, t
        }(ja),
        wt = function() {
            function e(e, t) { this.delay = e, this.scheduler = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new Rz(e, this.delay, this.scheduler)) }, e
        }(),
        Rz = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).delay = n, t.scheduler = r, t.queue = [], t.active = !1, t.errored = !1, t }
            return N(t, e), t.dispatch = function(e) {
                for (var t = e.source, n = t.queue, r = e.scheduler, i = e.destination; 0 < n.length && 0 >= n[0].time - r.now();) n.shift().notification.observe(i);
                0 < n.length ? (t = Math.max(0, n[0].time - r.now()), this.schedule(e, t)) : (this.unsubscribe(), t.active = !1)
            }, t.prototype._schedule = function(e) { this.active = !0, this.destination.add(e.schedule(t.dispatch, this.delay, { source: this, destination: this.destination, scheduler: e })) }, t.prototype.scheduleNotification = function(e) {
                if (!0 !== this.errored) {
                    var t = this.scheduler;
                    e = new Sz(t.now() + this.delay, e), this.queue.push(e), !1 === this.active && this._schedule(t)
                }
            }, t.prototype._next = function(e) { this.scheduleNotification(We.createNext(e)) }, t.prototype._error = function(e) { this.errored = !0, this.queue = [], this.destination.error(e), this.unsubscribe() }, t.prototype._complete = function() { this.scheduleNotification(We.createComplete()), this.unsubscribe() }, t
        }(ja),
        Sz = function(e, t) { this.time = e, this.notification = t },
        xt = function() {
            function e(e, t) { this.keySelector = e, this.flushes = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new Tz(e, this.keySelector, this.flushes)) }, e
        }(),
        Tz = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).keySelector = n, t.values = new Set, r && t.add(jc(r, new vc(t))), t }
            return N(t, e), t.prototype.notifyNext = function() { this.values.clear() }, t.prototype.notifyError = function(e) { this._error(e) }, t.prototype._next = function(e) { this.keySelector ? this._useKeySelector(e) : this._finalizeNext(e, e) }, t.prototype._useKeySelector = function(e) {
                var t = this.destination;
                try { var n = this.keySelector(e) } catch (e) { return void t.error(e) }
                this._finalizeNext(n, e)
            }, t.prototype._finalizeNext = function(e, t) {
                var n = this.values;
                n.has(e) || (n.add(e), this.destination.next(t))
            }, t
        }(wc),
        zt = function() {
            function e(e) { this.errorFactory = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new Uz(e, this.errorFactory)) }, e
        }(),
        Uz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).errorFactory = n, t.hasValue = !1, t }
            return N(t, e), t.prototype._next = function(e) { this.hasValue = !0, this.destination.next(e) }, t.prototype._complete = function() {
                if (this.hasValue) return this.destination.complete();
                var e = void 0;
                try { e = this.errorFactory() } catch (t) { e = t }
                this.destination.error(e)
            }, t
        }(ja),
        At = function() {
            function e(e) { if (this.total = e, 0 > this.total) throw new Sk }
            return e.prototype.call = function(e, t) { return t.subscribe(new Vz(e, this.total)) }, e
        }(),
        Vz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).total = n, t.count = 0, t }
            return N(t, e), t.prototype._next = function(e) {
                var t = this.total,
                    n = ++this.count;
                n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()))
            }, t
        }(ja),
        Bt = function() {
            function e(e) { this.project = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new Wz(e, this.project)) }, e
        }(),
        Wz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).project = n, t.hasSubscription = !1, t.hasCompleted = !1, t.index = 0, t }
            return N(t, e), t.prototype._next = function(e) { this.hasSubscription || this.tryNext(e) }, t.prototype.tryNext = function(e) {
                var t = this.index++;
                try { var n = this.project(e, t) } catch (e) { return void this.destination.error(e) }
                this.hasSubscription = !0, this._innerSub(n)
            }, t.prototype._innerSub = function(e) {
                var t = new vc(this),
                    n = this.destination;
                n.add(t), (e = jc(e, t)) !== t && n.add(e)
            }, t.prototype._complete = function() { this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe() }, t.prototype.notifyNext = function(e) { this.destination.next(e) }, t.prototype.notifyError = function(e) { this.destination.error(e) }, t.prototype.notifyComplete = function() { this.hasSubscription = !1, this.hasCompleted && this.destination.complete() }, t
        }(wc),
        Ct = function() {
            function e(e) { this.callback = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new Xz(e, this.callback)) }, e
        }(),
        Xz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).add(new Pa(n)), t }
            return N(t, e), t
        }(ja),
        Et = function() {
            function e() {}
            return e.prototype.call = function(e, t) { return t.subscribe(new Yz(e)) }, e
        }(),
        Yz = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return N(t, e), t.prototype._next = function(e) {}, t
        }(ja),
        Ft = function() {
            function e(e) { if (this.total = e, 0 > this.total) throw new Sk }
            return e.prototype.call = function(e, t) { return t.subscribe(new Zz(e, this.total)) }, e
        }(),
        Zz = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).total = n, t.ring = [], t.count = 0, t }
            return N(t, e), t.prototype._next = function(e) {
                var t = this.ring,
                    n = this.total,
                    r = this.count++;
                t.length < n ? t.push(e) : t[r % n] = e
            }, t.prototype._complete = function() {
                var e = this.destination,
                    t = this.count;
                if (0 < t)
                    for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, i = 0; i < n; i++) {
                        var o = t++ % n;
                        e.next(r[o])
                    }
                e.complete()
            }, t
        }(ja),
        Gt = function() {
            function e(e) { this.value = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new $z(e, this.value)) }, e
        }(),
        $z = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).value = n, t }
            return N(t, e), t.prototype._next = function(e) { this.destination.next(this.value) }, t
        }(ja),
        Ht = function() {
            function e(e, t, n) { void 0 === n && (n = !1), this.accumulator = e, this.seed = t, this.hasSeed = n }
            return e.prototype.call = function(e, t) { return t.subscribe(new aA(e, this.accumulator, this.seed, this.hasSeed)) }, e
        }(),
        aA = function(e) {
            function t(t, n, r, i) { return (t = e.call(this, t) || this).accumulator = n, t._seed = r, t.hasSeed = i, t.index = 0, t }
            return N(t, e), Object.defineProperty(t.prototype, "seed", { get: function() { return this._seed }, set: function(e) { this.hasSeed = !0, this._seed = e }, enumerable: !0, configurable: !0 }), t.prototype._next = function(e) {
                if (this.hasSeed) return this._tryNext(e);
                this.seed = e, this.destination.next(e)
            }, t.prototype._tryNext = function(e) {
                var t = this.index++;
                try { var n = this.accumulator(this.seed, e, t) } catch (e) { this.destination.error(e) }
                this.seed = n, this.destination.next(n)
            }, t
        }(ja),
        Jt = function() {
            function e(e, t) { this.subjectFactory = e, this.selector = t }
            return e.prototype.call = function(e, t) {
                var n = this.selector,
                    r = this.subjectFactory();
                return (e = n(r).subscribe(e)).add(t.subscribe(r)), e
            }, e
        }(),
        Lt = function() {
            function e(e, t) { this.notifier = e, this.source = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new bA(e, this.notifier, this.source)) }, e
        }(),
        bA = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).notifier = n, t.source = r, t }
            return N(t, e), t.prototype.error = function(t) {
                if (!this.isStopped) {
                    var n = this.errors,
                        r = this.retries,
                        i = this.retriesSubscription;
                    if (r) this.retriesSubscription = this.errors = void 0;
                    else {
                        n = new Qa;
                        try { r = (0, this.notifier)(n) } catch (t) { return e.prototype.error.call(this, t) }
                        i = jc(r, new vc(this))
                    }
                    this._unsubscribeAndRecycle(), this.errors = n, this.retries = r, this.retriesSubscription = i, n.next(t)
                }
            }, t.prototype._unsubscribe = function() {
                var e = this.errors,
                    t = this.retriesSubscription;
                e && (e.unsubscribe(), this.errors = void 0), t && (t.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0
            }, t.prototype.notifyNext = function() {
                var e = this._unsubscribe;
                this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = e, this.source.subscribe(this)
            }, t
        }(wc),
        Ot = function() {
            function e(e) { this.project = e }
            return e.prototype.call = function(e, t) { return t.subscribe(new cA(e, this.project)) }, e
        }(),
        cA = function(e) {
            function t(t, n) { return (t = e.call(this, t) || this).project = n, t.index = 0, t }
            return N(t, e), t.prototype._next = function(e) {
                var t = this.index++;
                try { var n = this.project(e, t) } catch (e) { return void this.destination.error(e) }
                this._innerSub(n)
            }, t.prototype._innerSub = function(e) {
                var t = this.innerSubscription;
                t && t.unsubscribe(), t = new vc(this);
                var n = this.destination;
                n.add(t), this.innerSubscription = jc(e, t), this.innerSubscription !== t && n.add(this.innerSubscription)
            }, t.prototype._complete = function() {
                var t = this.innerSubscription;
                t && !t.closed || e.prototype._complete.call(this), this.unsubscribe()
            }, t.prototype._unsubscribe = function() { this.innerSubscription = void 0 }, t.prototype.notifyComplete = function() { this.innerSubscription = void 0, this.isStopped && e.prototype._complete.call(this) }, t.prototype.notifyNext = function(e) { this.destination.next(e) }, t
        }(wc),
        Pt = function() {
            function e(e) { this.notifier = e }
            return e.prototype.call = function(e, t) { e = new dA(e); var n = jc(this.notifier, new vc(e)); return n && !e.seenValue ? (e.add(n), t.subscribe(e)) : e }, e
        }(),
        dA = function(e) {
            function t(t) { return (t = e.call(this, t) || this).seenValue = !1, t }
            return N(t, e), t.prototype.notifyNext = function() { this.seenValue = !0, this.complete() }, t.prototype.notifyComplete = function() {}, t
        }(wc),
        Rt = function() {
            function e(e, t) { this.predicate = e, this.inclusive = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new eA(e, this.predicate, this.inclusive)) }, e
        }(),
        eA = function(e) {
            function t(t, n, r) { return (t = e.call(this, t) || this).predicate = n, t.inclusive = r, t.index = 0, t }
            return N(t, e), t.prototype._next = function(e) {
                var t = this.destination;
                try { var n = this.predicate(e, this.index++) } catch (e) { return void t.error(e) }
                this.nextOrComplete(e, n)
            }, t.prototype.nextOrComplete = function(e, t) {
                var n = this.destination;
                t ? n.next(e) : (this.inclusive && n.next(e), n.complete())
            }, t
        }(ja),
        St = function() {
            function e(e, t, n) { this.nextOrObserver = e, this.error = t, this.complete = n }
            return e.prototype.call = function(e, t) { return t.subscribe(new fA(e, this.nextOrObserver, this.error, this.complete)) }, e
        }(),
        fA = function(e) {
            function t(t, n, r, i) { return (t = e.call(this, t) || this)._tapNext = ic, t._tapError = ic, t._tapComplete = ic, t._tapError = r || ic, t._tapComplete = i || ic, ne(n) ? (t._context = t, t._tapNext = n) : n && (t._context = n, t._tapNext = n.next || ic, t._tapError = n.error || ic, t._tapComplete = n.complete || ic), t }
            return N(t, e), t.prototype._next = function(e) {
                try { this._tapNext.call(this._context, e) } catch (e) { return void this.destination.error(e) }
                this.destination.next(e)
            }, t.prototype._error = function(e) {
                try { this._tapError.call(this._context, e) } catch (e) { return void this.destination.error(e) }
                this.destination.error(e)
            }, t.prototype._complete = function() { try { this._tapComplete.call(this._context) } catch (e) { return void this.destination.error(e) } return this.destination.complete() }, t
        }(ja),
        Ut = { leading: !0, trailing: !1 };
    ! function(e) {
        function t(t, n, r, i) { var o = e.call(this, t) || this; return o.destination = t, o.durationSelector = n, o._leading = r, o._trailing = i, o._hasValue = !1, o }
        N(t, e), t.prototype._next = function(e) { this._hasValue = !0, this._sendValue = e, this._throttled || (this._leading ? this.send() : this.throttle(e)) }, t.prototype.send = function() {
            var e = this._sendValue;
            this._hasValue && (this.destination.next(e), this.throttle(e)), this._hasValue = !1, this._sendValue = void 0
        }, t.prototype.throttle = function(e) {
            (e = this.tryDurationSelector(e)) && this.add(this._throttled = jc(e, new vc(this)))
        }, t.prototype.tryDurationSelector = function(e) { try { return this.durationSelector(e) } catch (e) { return this.destination.error(e), null } }, t.prototype.throttlingDone = function() {
            var e = this._throttled,
                t = this._trailing;
            e && e.unsubscribe(), this._throttled = void 0, t && this.send()
        }, t.prototype.notifyNext = function() { this.throttlingDone() }, t.prototype.notifyComplete = function() { this.throttlingDone() }
    }(wc);
    for (var Vt = function() {
            function e(e, t, n, r) { this.duration = e, this.scheduler = t, this.leading = n, this.trailing = r }
            return e.prototype.call = function(e, t) { return t.subscribe(new gA(e, this.duration, this.scheduler, this.leading, this.trailing)) }, e
        }(), gA = function(e) {
            function t(t, n, r, i, o) { return (t = e.call(this, t) || this).duration = n, t.scheduler = r, t.leading = i, t.trailing = o, t._hasTrailingValue = !1, t._trailingValue = null, t }
            return N(t, e), t.prototype._next = function(e) { this.throttled ? this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(Wt, this.duration, { subscriber: this })), this.leading ? this.destination.next(e) : this.trailing && (this._trailingValue = e, this._hasTrailingValue = !0)) }, t.prototype._complete = function() { this._hasTrailingValue && this.destination.next(this._trailingValue), this.destination.complete() }, t.prototype.clearThrottle = function() {
                var e = this.throttled;
                e && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), e.unsubscribe(), this.remove(e), this.throttled = null)
            }, t
        }(ja), Yt = function() {
            function e(e, t, n, r) { this.waitFor = e, this.absoluteTimeout = t, this.withObservable = n, this.scheduler = r }
            return e.prototype.call = function(e, t) { return t.subscribe(new hA(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler)) }, e
        }(), hA = function(e) {
            function t(t, n, r, i, o) { return (t = e.call(this, t) || this).absoluteTimeout = n, t.waitFor = r, t.withObservable = i, t.scheduler = o, t.scheduleTimeout(), t }
            return N(t, e), t.dispatchTimeout = function(e) {
                var t = e.withObservable;
                e._unsubscribeAndRecycle(), e.add(jc(t, new vc(e)))
            }, t.prototype.scheduleTimeout = function() {
                var e = this.action;
                e ? this.action = e.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(t.dispatchTimeout, this.waitFor, this))
            }, t.prototype._next = function(t) { this.absoluteTimeout || this.scheduleTimeout(), e.prototype._next.call(this, t) }, t.prototype._unsubscribe = function() { this.action = void 0, this.withObservable = this.scheduler = null }, t
        }(wc), $t = function() {
            function e(e, t) { this.observables = e, this.project = t }
            return e.prototype.call = function(e, t) { return t.subscribe(new iA(e, this.observables, this.project)) }, e
        }(), iA = function(e) {
            function t(t, n, r) {
                (t = e.call(this, t) || this).observables = n, t.project = r, t.toRespond = [], r = n.length, t.values = Array(r);
                for (var i = 0; i < r; i++) t.toRespond.push(i);
                for (i = 0; i < r; i++) t.add(li(t, n[i], void 0, i));
                return t
            }
            return N(t, e), t.prototype.notifyNext = function(e, t, n) { this.values[n] = t, 0 < (e = this.toRespond).length && (-1 !== (n = e.indexOf(n)) && e.splice(n, 1)) }, t.prototype.notifyComplete = function() {}, t.prototype._next = function(e) { 0 === this.toRespond.length && (e = [e].concat(this.values), this.project ? this._tryProject(e) : this.destination.next(e)) }, t.prototype._tryProject = function(e) {
                try { var t = this.project.apply(this, e) } catch (e) { return void this.destination.error(e) }
                this.destination.next(t)
            }, t
        }(Tk), Qq = ab((function(e) {
            var t = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (t) {
                var n = new Uint8Array(16);
                e.exports = function() { return t(n), n }
            } else {
                var r = Array(16);
                e.exports = function() { for (var e, t = 0; 16 > t; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255; return r }
            }
        })), bb = [], Hh = 0; 256 > Hh; ++Hh) bb[Hh] = (Hh + 256).toString(16).substr(1);
    var Rq = function(e, t) { return t = t || 0, [bb[e[t++]], bb[e[t++]], bb[e[t++]], bb[e[t++]], "-", bb[e[t++]], bb[e[t++]], "-", bb[e[t++]], bb[e[t++]], "-", bb[e[t++]], bb[e[t++]], "-", bb[e[t++]], bb[e[t++]], bb[e[t++]], bb[e[t++]], bb[e[t++]], bb[e[t++]]].join("") },
        Ud = function(e, t, n) {
            if (n = t && n || 0, "string" == typeof e && (t = "binary" === e ? Array(16) : null, e = null), (e = (e = e || {}).random || (e.rng || Qq)())[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, t)
                for (var r = 0; 16 > r; ++r) t[n + r] = e[r];
            return t || Rq(e)
        },
        ig = Ud(),
        Wk = !1,
        Pc, rd, Xk, Yk, sd, Vd, fc, Xe, Sb, Zk, Qc, Wd, Rc, Sc, Tc, Ye, Uc, Vc;
    ! function(e) { e[e.ATTRIBUTE_OPERATION_ERR_FAILURE = 2] = "ATTRIBUTE_OPERATION_ERR_FAILURE", e[e.ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT = 3] = "ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT", e[e.ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW = 4] = "ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW", e[e.ATTRIBUTE_OPERATION_ERR_TOO_OFTEN = 5] = "ATTRIBUTE_OPERATION_ERR_TOO_OFTEN", e[e.ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND = 6] = "ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND", e[e.ATTRIBUTE_OPERATION_ERR_TIMEOUT = 7] = "ATTRIBUTE_OPERATION_ERR_TIMEOUT", e[e.ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN = 102] = "ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN" }(Pc || (Pc = {})),
    function(e) { e[e.CHANNEL_MESSAGE_ERR_FAILURE = 1] = "CHANNEL_MESSAGE_ERR_FAILURE", e[e.CHANNEL_MESSAGE_ERR_TIMEOUT = 2] = "CHANNEL_MESSAGE_ERR_TIMEOUT", e[e.CHANNEL_MESSAGE_ERR_TOO_OFTEN = 3] = "CHANNEL_MESSAGE_ERR_TOO_OFTEN", e[e.CHANNEL_MESSAGE_ERR_INVALID_MESSAGE = 4] = "CHANNEL_MESSAGE_ERR_INVALID_MESSAGE", e[e.CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL = 5] = "CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL", e[e.CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN = 102] = "CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN" }(rd || (rd = {})),
    function(e) { e[e.CREATE_CHANNEL_ERR_INVALID_ARGUMENT = 1] = "CREATE_CHANNEL_ERR_INVALID_ARGUMENT" }(Xk || (Xk = {})),
    function(e) { e[e.CREATE_INSTANCE_ERR_INVALID_ARGUMENT = 1] = "CREATE_INSTANCE_ERR_INVALID_ARGUMENT" }(Yk || (Yk = {})),
    function(e) { e[e.GET_MEMBERS_ERR_FAILURE = 1] = "GET_MEMBERS_ERR_FAILURE", e[e.GET_MEMBERS_ERR_REJECTED = 2] = "GET_MEMBERS_ERR_REJECTED", e[e.GET_MEMBERS_ERR_TIMEOUT = 3] = "GET_MEMBERS_ERR_TIMEOUT", e[e.GET_MEMBERS_ERR_TOO_OFTEN = 4] = "GET_MEMBERS_ERR_TOO_OFTEN", e[e.GET_MEMBERS_ERR_NOT_IN_CHANNEL = 5] = "GET_MEMBERS_ERR_NOT_IN_CHANNEL", e[e.GET_MEMBERS_ERR_USER_NOT_LOGGED_IN = 102] = "GET_MEMBERS_ERR_USER_NOT_LOGGED_IN" }(sd || (sd = {})),
    function(e) { e[e.INVITATION_API_CALL_ERR_INVALID_ARGUMENT = 1] = "INVITATION_API_CALL_ERR_INVALID_ARGUMENT", e[e.INVITATION_API_CALL_ERR_NOT_STARTED = 2] = "INVITATION_API_CALL_ERR_NOT_STARTED", e[e.INVITATION_API_CALL_ERR_ALREADY_END = 3] = "INVITATION_API_CALL_ERR_ALREADY_END", e[e.INVITATION_API_CALL_ERR_ALREADY_ACCEPT = 4] = "INVITATION_API_CALL_ERR_ALREADY_ACCEPT", e[e.INVITATION_API_CALL_ERR_ALREADY_SENT = 5] = "INVITATION_API_CALL_ERR_ALREADY_SENT" }(Vd || (Vd = {})),
    function(e) { e[e.JOIN_CHANNEL_ERR_FAILURE = 1] = "JOIN_CHANNEL_ERR_FAILURE", e[e.JOIN_CHANNEL_ERR_REJECTED = 2] = "JOIN_CHANNEL_ERR_REJECTED", e[e.JOIN_CHANNEL_ERR_INVALID_ARGUMENT = 3] = "JOIN_CHANNEL_ERR_INVALID_ARGUMENT", e[e.JOIN_CHANNEL_TIMEOUT = 4] = "JOIN_CHANNEL_TIMEOUT", e[e.JOIN_CHANNEL_ERR_EXCEED_LIMIT = 5] = "JOIN_CHANNEL_ERR_EXCEED_LIMIT", e[e.JOIN_CHANNEL_ERR_ALREADY_JOINED = 6] = "JOIN_CHANNEL_ERR_ALREADY_JOINED", e[e.JOIN_CHANNEL_ERR_TOO_OFTEN = 7] = "JOIN_CHANNEL_ERR_TOO_OFTEN", e[e.JOIN_CHANNEL_ERR_JOIN_SAME_CHANNEL_TOO_OFTEN = 8] = "JOIN_CHANNEL_ERR_JOIN_SAME_CHANNEL_TOO_OFTEN", e[e.JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN = 102] = "JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN", e[e.JOIN_CHANNEL_ERR_ABORTED_BY_LEAVE = 201] = "JOIN_CHANNEL_ERR_ABORTED_BY_LEAVE", e[e.JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID = 202] = "JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID" }(fc || (fc = {})),
    function(e) { e[e.LEAVE_CHANNEL_ERR_FAILURE = 1] = "LEAVE_CHANNEL_ERR_FAILURE", e[e.LEAVE_CHANNEL_ERR_REJECTED = 2] = "LEAVE_CHANNEL_ERR_REJECTED", e[e.LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL = 3] = "LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL", e[e.LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN = 102] = "LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN" }(Xe || (Xe = {})),
    function(e) { e[e.LOGIN_ERR_UNKNOWN = 1] = "LOGIN_ERR_UNKNOWN", e[e.LOGIN_ERR_REJECTED = 2] = "LOGIN_ERR_REJECTED", e[e.LOGIN_ERR_INVALID_ARGUMENT = 3] = "LOGIN_ERR_INVALID_ARGUMENT", e[e.LOGIN_ERR_INVALID_APP_ID = 4] = "LOGIN_ERR_INVALID_APP_ID", e[e.LOGIN_ERR_INVALID_TOKEN = 5] = "LOGIN_ERR_INVALID_TOKEN", e[e.LOGIN_ERR_TOKEN_EXPIRED = 6] = "LOGIN_ERR_TOKEN_EXPIRED", e[e.LOGIN_ERR_NOT_AUTHORIZED = 7] = "LOGIN_ERR_NOT_AUTHORIZED", e[e.LOGIN_ERR_ALREADY_LOGIN = 8] = "LOGIN_ERR_ALREADY_LOGIN", e[e.LOGIN_ERR_TIMEOUT = 9] = "LOGIN_ERR_TIMEOUT", e[e.LOGIN_ERR_TOO_OFTEN = 10] = "LOGIN_ERR_TOO_OFTEN", e[e.LOGIN_ERR_ABORTED_BY_LOGOUT = 201] = "LOGIN_ERR_ABORTED_BY_LOGOUT" }(Sb || (Sb = {})),
    function(e) { e[e.LOGOUT_ERR_USER_NOT_LOGGED_IN = 102] = "LOGOUT_ERR_USER_NOT_LOGGED_IN" }(Zk || (Zk = {})),
    function(e) { e[e.PEER_MESSAGE_ERR_FAILURE = 1] = "PEER_MESSAGE_ERR_FAILURE", e[e.PEER_MESSAGE_ERR_TIMEOUT = 2] = "PEER_MESSAGE_ERR_TIMEOUT", e[e.PEER_MESSAGE_ERR_TOO_OFTEN = 5] = "PEER_MESSAGE_ERR_TOO_OFTEN", e[e.PEER_MESSAGE_ERR_INVALID_USERID = 6] = "PEER_MESSAGE_ERR_INVALID_USERID", e[e.PEER_MESSAGE_ERR_INVALID_MESSAGE = 7] = "PEER_MESSAGE_ERR_INVALID_MESSAGE", e[e.PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE = 8] = "PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE", e[e.PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN = 102] = "PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN" }(Qc || (Qc = {})),
    function(e) { e[e.QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT = 2] = "QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT", e[e.QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED = 3] = "QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED", e[e.QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT = 4] = "QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT", e[e.QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN = 5] = "QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN", e[e.QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN = 102] = "QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN" }(Wd || (Wd = {})),
    function(e) { e[e.RENEW_TOKEN_ERR_FAILURE = 1] = "RENEW_TOKEN_ERR_FAILURE", e[e.RENEW_TOKEN_ERR_INVALID_ARGUMENT = 2] = "RENEW_TOKEN_ERR_INVALID_ARGUMENT", e[e.RENEW_TOKEN_ERR_REJECTED = 3] = "RENEW_TOKEN_ERR_REJECTED", e[e.RENEW_TOKEN_ERR_TOO_OFTEN = 4] = "RENEW_TOKEN_ERR_TOO_OFTEN", e[e.RENEW_TOKEN_ERR_TOKEN_EXPIRED = 5] = "RENEW_TOKEN_ERR_TOKEN_EXPIRED", e[e.RENEW_TOKEN_ERR_INVALID_TOKEN = 6] = "RENEW_TOKEN_ERR_INVALID_TOKEN", e[e.RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN = 102] = "RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN", e[e.RENEW_TOKEN_ERR_ABORTED_BY_LOGOUT = 201] = "RENEW_TOKEN_ERR_ABORTED_BY_LOGOUT" }(Rc || (Rc = {})),
    function(e) { e[e.GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE = 1] = "GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT = 2] = "GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN = 3] = "GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT = 4] = "GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT = 5] = "GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED = 101] = "GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED", e[e.GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN = 102] = "GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN" }(Sc || (Sc = {})),
    function(e) { e[e.PEER_SUBSCRIPTION_STATUS_ERR_FAILURE = 1] = "PEER_SUBSCRIPTION_STATUS_ERR_FAILURE", e[e.PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT = 2] = "PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT", e[e.PEER_SUBSCRIPTION_STATUS_ERR_REJECTED = 3] = "PEER_SUBSCRIPTION_STATUS_ERR_REJECTED", e[e.PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT = 4] = "PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT", e[e.PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN = 5] = "PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN", e[e.PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW = 6] = "PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW", e[e.PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN = 102] = "PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN" }(Tc || (Tc = {})),
    function(e) { e[e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE = 1] = "QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE", e[e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT = 2] = "QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT", e[e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN = 3] = "QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN", e[e.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN = 102] = "QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN" }(Ye || (Ye = {})),
    function(e) { e[e.UPLOAD_MEDIA_ERR_FAILURE = 1] = "UPLOAD_MEDIA_ERR_FAILURE", e[e.UPLOAD_MEDIA_ERR_INVALID_ARGUMENT = 2] = "UPLOAD_MEDIA_ERR_INVALID_ARGUMENT", e[e.UPLOAD_MEDIA_ERR_TIMEOUT = 3] = "UPLOAD_MEDIA_ERR_TIMEOUT", e[e.UPLOAD_MEDIA_ERR_SIZE_OVERFLOW = 4] = "UPLOAD_MEDIA_ERR_SIZE_OVERFLOW", e[e.UPLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED = 5] = "UPLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED", e[e.UPLOAD_MEDIA_ERR_INTERRUPTED = 6] = "UPLOAD_MEDIA_ERR_INTERRUPTED", e[e.UPLOAD_MEDIA_ERR_NOT_LOGGED_IN = 102] = "UPLOAD_MEDIA_ERR_NOT_LOGGED_IN" }(Uc || (Uc = {})),
    function(e) { e[e.DOWNLOAD_MEDIA_ERR_FAILURE = 1] = "DOWNLOAD_MEDIA_ERR_FAILURE", e[e.DOWNLOAD_MEDIA_ERR_INVALID_ARGUMENT = 2] = "DOWNLOAD_MEDIA_ERR_INVALID_ARGUMENT", e[e.DOWNLOAD_MEDIA_ERR_TIMEOUT = 3] = "DOWNLOAD_MEDIA_ERR_TIMEOUT", e[e.DOWNLOAD_MEDIA_ERR_NOT_EXIST = 4] = "DOWNLOAD_MEDIA_ERR_NOT_EXIST", e[e.DOWNLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED = 5] = "DOWNLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED", e[e.DOWNLOAD_MEDIA_ERR_INTERRUPTED = 6] = "DOWNLOAD_MEDIA_ERR_INTERRUPTED", e[e.DOWNLOAD_MEDIA_ERR_NOT_LOGGED_IN = 102] = "DOWNLOAD_MEDIA_ERR_NOT_LOGGED_IN" }(Vc || (Vc = {}));
    var Tb = Pc.ATTRIBUTE_OPERATION_ERR_FAILURE,
        Ka = Pc.ATTRIBUTE_OPERATION_ERR_INVALID_ARGUMENT,
        ue = Pc.ATTRIBUTE_OPERATION_ERR_SIZE_OVERFLOW;
    Pc.ATTRIBUTE_OPERATION_ERR_TOO_OFTEN;
    var Sq = Pc.ATTRIBUTE_OPERATION_ERR_USER_NOT_FOUND,
        Ub = Pc.ATTRIBUTE_OPERATION_ERR_TIMEOUT,
        Vb = Pc.ATTRIBUTE_OPERATION_ERR_USER_NOT_LOGGED_IN,
        jg = rd.CHANNEL_MESSAGE_ERR_FAILURE,
        $k = rd.CHANNEL_MESSAGE_ERR_TIMEOUT,
        Tq = rd.CHANNEL_MESSAGE_ERR_TOO_OFTEN,
        Ih = rd.CHANNEL_MESSAGE_ERR_INVALID_MESSAGE,
        jA = rd.CHANNEL_MESSAGE_ERR_NOT_IN_CHANNEL,
        Jh = rd.CHANNEL_MESSAGE_ERR_USER_NOT_LOGGED_IN,
        kA = Xk.CREATE_CHANNEL_ERR_INVALID_ARGUMENT,
        Uq = Yk.CREATE_INSTANCE_ERR_INVALID_ARGUMENT;
    Sc.GET_CHANNEL_MEMBER_COUNT_ERR_FAILURE;
    var Vq = Sc.GET_CHANNEL_MEMBER_COUNT_ERR_INVALID_ARGUMENT;
    Sc.GET_CHANNEL_MEMBER_COUNT_ERR_TOO_OFTEN;
    var Wq = Sc.GET_CHANNEL_MEMBER_COUNT_ERR_TIMEOUT,
        lA = Sc.GET_CHANNEL_MEMBER_COUNT_ERR_EXCEED_LIMIT;
    Sc.GET_CHANNEL_MEMBER_COUNT_ERR_NOT_INITIALIZED;
    var mA = Sc.GET_CHANNEL_MEMBER_COUNT_ERR_USER_NOT_LOGGED_IN,
        nA = sd.GET_MEMBERS_ERR_FAILURE,
        oA = sd.GET_MEMBERS_ERR_REJECTED;
    sd.GET_MEMBERS_ERR_TIMEOUT, sd.GET_MEMBERS_ERR_TOO_OFTEN;
    var pA = sd.GET_MEMBERS_ERR_NOT_IN_CHANNEL,
        qA = sd.GET_MEMBERS_ERR_USER_NOT_LOGGED_IN,
        xc = Vd.INVITATION_API_CALL_ERR_INVALID_ARGUMENT,
        rA = Vd.INVITATION_API_CALL_ERR_NOT_STARTED,
        Kh = Vd.INVITATION_API_CALL_ERR_ALREADY_END,
        Xq = Vd.INVITATION_API_CALL_ERR_ALREADY_ACCEPT,
        sA = Vd.INVITATION_API_CALL_ERR_ALREADY_SENT,
        Yq = fc.JOIN_CHANNEL_ERR_FAILURE;
    fc.JOIN_CHANNEL_ERR_REJECTED;
    var tA = fc.JOIN_CHANNEL_ERR_INVALID_ARGUMENT,
        Zq = fc.JOIN_CHANNEL_TIMEOUT,
        $q = fc.JOIN_CHANNEL_ERR_EXCEED_LIMIT,
        ar = fc.JOIN_CHANNEL_ERR_ALREADY_JOINED;
    fc.JOIN_CHANNEL_ERR_TOO_OFTEN;
    var br = fc.JOIN_CHANNEL_ERR_USER_NOT_LOGGED_IN,
        cr = fc.JOIN_CHANNEL_ERR_ALREADY_JOINED_CHANNEL_OF_SAME_ID,
        dr = Xe.LEAVE_CHANNEL_ERR_FAILURE,
        er = Xe.LEAVE_CHANNEL_ERR_REJECTED,
        uA = Xe.LEAVE_CHANNEL_ERR_NOT_IN_CHANNEL,
        vA = Xe.LEAVE_CHANNEL_ERR_USER_NOT_LOGGED_IN,
        fr = Sb.LOGIN_ERR_UNKNOWN,
        kg = Sb.LOGIN_ERR_REJECTED,
        Lh = Sb.LOGIN_ERR_INVALID_ARGUMENT,
        gr = Sb.LOGIN_ERR_INVALID_APP_ID,
        hr = Sb.LOGIN_ERR_INVALID_TOKEN,
        Mh = Sb.LOGIN_ERR_TOKEN_EXPIRED;
    Sb.LOGIN_ERR_NOT_AUTHORIZED;
    var wA = Sb.LOGIN_ERR_ALREADY_LOGIN,
        xA = Sb.LOGIN_ERR_TIMEOUT,
        yA = Sb.LOGIN_ERR_TOO_OFTEN,
        ir = Zk.LOGOUT_ERR_USER_NOT_LOGGED_IN,
        jr = Qc.PEER_MESSAGE_ERR_FAILURE,
        al = Qc.PEER_MESSAGE_ERR_TIMEOUT,
        kr = Qc.PEER_MESSAGE_ERR_TOO_OFTEN,
        bl = Qc.PEER_MESSAGE_ERR_INVALID_USERID,
        we = Qc.PEER_MESSAGE_ERR_INVALID_MESSAGE,
        cl = Qc.PEER_MESSAGE_ERR_USER_NOT_LOGGED_IN,
        zA = Qc.PEER_MESSAGE_ERR_INCOMPATIBLE_MESSAGE,
        lr = Wd.QUERY_PEERS_ONLINE_STATUS_ERR_INVALID_ARGUMENT;
    Wd.QUERY_PEERS_ONLINE_STATUS_ERR_REJECTED;
    var AA = Wd.QUERY_PEERS_ONLINE_STATUS_ERR_TIMEOUT;
    Wd.QUERY_PEERS_ONLINE_STATUS_ERR_TOO_OFTEN;
    var BA = Wd.QUERY_PEERS_ONLINE_STATUS_ERR_USER_NOT_LOGGED_IN,
        CA = Rc.RENEW_TOKEN_ERR_FAILURE,
        DA = Rc.RENEW_TOKEN_ERR_INVALID_ARGUMENT;
    Rc.RENEW_TOKEN_ERR_REJECTED, Rc.RENEW_TOKEN_ERR_TOO_OFTEN;
    var EA = Rc.RENEW_TOKEN_ERR_TOKEN_EXPIRED,
        FA = Rc.RENEW_TOKEN_ERR_INVALID_TOKEN,
        GA = Rc.RENEW_TOKEN_ERR_USER_NOT_LOGGED_IN,
        mr = Tc.PEER_SUBSCRIPTION_STATUS_ERR_FAILURE,
        lg = Tc.PEER_SUBSCRIPTION_STATUS_ERR_INVALID_ARGUMENT;
    Tc.PEER_SUBSCRIPTION_STATUS_ERR_REJECTED;
    var HA = Tc.PEER_SUBSCRIPTION_STATUS_ERR_TIMEOUT;
    Tc.PEER_SUBSCRIPTION_STATUS_ERR_TOO_OFTEN;
    var nr = Tc.PEER_SUBSCRIPTION_STATUS_ERR_OVERFLOW,
        dl = Tc.PEER_SUBSCRIPTION_STATUS_ERR_USER_NOT_LOGGED_IN;
    Ye.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_FAILURE, Ye.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TIMEOUT, Ye.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_TOO_OFTEN, Ye.QUERY_PEERS_BY_SUBSCRIPTION_OPTION_ERR_USER_NOT_LOGGED_IN;
    var mg = Uc.UPLOAD_MEDIA_ERR_FAILURE,
        yf = Uc.UPLOAD_MEDIA_ERR_INVALID_ARGUMENT,
        Nh = Uc.UPLOAD_MEDIA_ERR_TIMEOUT,
        IA = Uc.UPLOAD_MEDIA_ERR_SIZE_OVERFLOW,
        JA = Uc.UPLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED,
        or = Uc.UPLOAD_MEDIA_ERR_INTERRUPTED,
        KA = Uc.UPLOAD_MEDIA_ERR_NOT_LOGGED_IN,
        ng = Vc.DOWNLOAD_MEDIA_ERR_FAILURE,
        el = Vc.DOWNLOAD_MEDIA_ERR_INVALID_ARGUMENT,
        LA = Vc.DOWNLOAD_MEDIA_ERR_TIMEOUT,
        MA = Vc.DOWNLOAD_MEDIA_ERR_NOT_EXIST,
        NA = Vc.DOWNLOAD_MEDIA_ERR_CONCURRENCY_LIMIT_EXCEEDED,
        pr = Vc.DOWNLOAD_MEDIA_ERR_INTERRUPTED,
        OA = Vc.DOWNLOAD_MEDIA_ERR_NOT_LOGGED_IN,
        PA = function(e, t) { var n; return Jk(e, (function(e, r, i) { return !(n = t(e, r, i)) })), !!n },
        Oh = function(e, t, n) { if (!mb(n)) return !1; var r = X(t); return !!("number" == r ? Ed(n) && yk(t, n.length) : "string" == r && t in n) && bg(n[t], e) },
        fl = function(e, t, n) { var r = Wa(e) ? Aq : PA; return n && Oh(e, t, n) && (t = void 0), r(e, Ue(t)) },
        QA = function(e, t) {
            var n = -1,
                r = Ed(e) ? Array(e.length) : [];
            return Jk(e, (function(e, i, o) { r[++n] = t(e, i, o) })), r
        },
        RA = function(e, t) { var n = e.length; for (e.sort(t); n--;) e[n] = e[n].value; return e },
        SA = function(e, t, n) {
            t = t.length ? je(t, (function(e) { return Wa(e) ? function(t) { return Dh(t, 1 === e.length ? e[0] : e) } : e })) : [Eh];
            var r = -1;
            return t = je(t, Ah(Ue)), e = QA(e, (function(e, n, i) { return { criteria: je(t, (function(t) { return t(e) })), index: ++r, value: e } })), RA(e, (function(e, t) {
                e: {
                    for (var r = -1, i = e.criteria, o = t.criteria, a = i.length, s = n.length; ++r < a;) {
                        t: {
                            var u = i[r],
                                c = o[r];
                            if (u !== c) {
                                var l = void 0 !== u,
                                    f = null === u,
                                    h = u == u,
                                    p = ke(u),
                                    d = void 0 !== c,
                                    v = null === c,
                                    b = c == c,
                                    g = ke(c);
                                if (!v && !g && !p && u > c || p && d && b && !v && !g || f && d && b || !l && b || !h) { u = 1; break t }
                                if (!f && !p && !g && u < c || g && l && h && !f && !p || v && l && h || !d && h || !b) { u = -1; break t }
                            }
                            u = 0
                        }
                        if (u) { e = r >= s ? u : u * ("desc" == n[r] ? -1 : 1); break e }
                    }
                    e = e.index - t.index
                }
                return e
            }))
        },
        qr = function(e, t) { return yq(xq(e, t, Eh), e + "") },
        rr = qr((function(e, t) { if (null == e) return []; var n = t.length; return 1 < n && Oh(e, t[0], t[1]) ? t = [] : 2 < n && Oh(t[0], t[1], t[2]) && (t = [t[0]]), SA(e, bi(t, 1), []) })),
        sr = function(e) {
            if (e.__esModule) return e;
            var t = Object.defineProperty({}, "__esModule", { value: !0 });
            return Object.keys(e).forEach((function(n) {
                var r = Object.getOwnPropertyDescriptor(e, n);
                Object.defineProperty(t, n, r.get ? r : { enumerable: !0, get: function() { return e[n] } })
            })), t
        }(Oz),
        tr = ab((function(e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = [],
                r = function(e, t) { return new WebSocket(e, t) };
            t.normalClosureMessage = "Normal closure", t.default = function(e, i) {
                var o = (i = void 0 === i ? { protocols: n, makeWebSocket: r } : i).protocols,
                    a = void 0 === o ? n : o,
                    s = void 0 === (i = i.makeWebSocket) ? r : i;
                return new sr.Observable((function(n) {
                    var r, i = new sr.Subject,
                        o = s(e, a),
                        u = !1,
                        c = !1,
                        l = function(e) { if (r) throw u = !0, e = Error("Web socket message factory function called more than once"), n.error(e), e; return r = e.subscribe((function(e) { o.send(e) })), i };
                    return o.onopen = function() { c ? (u = !0, o.close()) : n.next(l) }, o.onmessage = function(e) { i.next(e.data) }, o.onerror = function(e) { u = !0, n.error(Error(e.message)) }, o.onclose = function(e) { u || (u = !0, c ? (n.complete(), i.complete()) : n.error(Error(1e3 === e.code ? t.normalClosureMessage : e.reason))) },
                        function() { c = !0, r && r.unsubscribe(), u || (u = !0, o.close()) }
                }))
            }
        }));
    ! function(e) { e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") && e.default }(tr);
    var ri = function(e, t, n) {
            (void 0 === n || bg(e[t], n)) && (void 0 !== n || t in e) || dg(e, t, n)
        },
        qi = function(e, t) { if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t] },
        TA = function(e) {
            return qr((function(t, n) {
                var r = -1,
                    i = n.length,
                    o = 1 < i ? n[i - 1] : void 0,
                    a = 2 < i ? n[2] : void 0;
                for (o = 3 < e.length && "function" == typeof o ? (i--, o) : void 0, a && Oh(n[0], n[1], a) && (o = 3 > i ? void 0 : o, i = 1), t = Object(t); ++r < i;)(a = n[r]) && e(t, a, r, o);
                return t
            }))
        }((function(e, t, n, r) { Am(e, t, n, r) })),
        UA = Math.floor,
        VA = Math.random,
        ur = function(e, t) { return e + UA(VA() * (t - e + 1)) },
        vr = function(e) { var t = e.length; return t ? e[ur(0, t - 1)] : void 0 },
        WA = function(e, t) { return je(t, (function(t) { return e[t] })) },
        Pi = function(e) { return null == e ? [] : WA(e, Ad(e)) },
        XA = function(e) { return vr(Pi(e)) },
        jn = function(e) { return (Wa(e) ? vr : XA)(e) },
        Em = [],
        Fm = function(e, t) { return new WebSocket(e, t) },
        YA = Math.floor;
    P({ target: "Number", stat: !0 }, { isInteger: function(e) { return !ia(e) && isFinite(e) && YA(e) === e } }), Wo("from", Jj, Ij);
    var ZA = function(e, t) {
            for (var n = Array(arguments.length - 1), r = 0, i = 2, o = !0; i < arguments.length;) n[r++] = arguments[i++];
            return new Promise((function(i, a) {
                n[r] = function(e) {
                    if (o)
                        if (o = !1, e) a(e);
                        else {
                            for (var t = Array(arguments.length - 1), n = 0; n < t.length;) t[n++] = arguments[n];
                            i.apply(null, t)
                        }
                };
                try { e.apply(t || null, n) } catch (e) { o && (o = !1, a(e)) }
            }))
        },
        $A = ab((function(e, t) {
            t.length = function(e) { var t = e.length; if (!t) return 0; for (var n = 0; 1 < --t % 4 && "=" === e.charAt(t);) ++n; return Math.ceil(3 * e.length) / 4 - n };
            var n = Array(64),
                r = Array(123);
            for (e = 0; 64 > e;) r[n[e] = 26 > e ? e + 65 : 52 > e ? e + 71 : 62 > e ? e - 4 : e - 59 | 43] = e++;
            t.encode = function(e, t, r) {
                for (var i, o = null, a = [], s = 0, u = 0; t < r;) {
                    var c = e[t++];
                    switch (u) {
                        case 0:
                            a[s++] = n[c >> 2], i = (3 & c) << 4, u = 1;
                            break;
                        case 1:
                            a[s++] = n[i | c >> 4], i = (15 & c) << 2, u = 2;
                            break;
                        case 2:
                            a[s++] = n[i | c >> 6], a[s++] = n[63 & c], u = 0
                    }
                    8191 < s && ((o || (o = [])).push(String.fromCharCode.apply(String, a)), s = 0)
                }
                return u && (a[s++] = n[i], a[s++] = 61, 1 === u && (a[s++] = 61)), o ? (s && o.push(String.fromCharCode.apply(String, a.slice(0, s))), o.join("")) : String.fromCharCode.apply(String, a.slice(0, s))
            }, t.decode = function(e, t, n) {
                for (var i, o = n, a = 0, s = 0; s < e.length;) {
                    var u = e.charCodeAt(s++);
                    if (61 === u && 1 < a) break;
                    if (void 0 === (u = r[u])) throw Error("invalid encoding");
                    switch (a) {
                        case 0:
                            i = u, a = 1;
                            break;
                        case 1:
                            t[n++] = i << 2 | (48 & u) >> 4, i = u, a = 2;
                            break;
                        case 2:
                            t[n++] = (15 & i) << 4 | (60 & u) >> 2, i = u, a = 3;
                            break;
                        case 3:
                            t[n++] = (3 & i) << 6 | u, a = 0
                    }
                }
                if (1 === a) throw Error("invalid encoding");
                return n - o
            }, t.test = function(e) { return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e) }
        }));
    zg.prototype.on = function(e, t, n) { return (this._listeners[e] || (this._listeners[e] = [])).push({ fn: t, ctx: n || this }), this }, zg.prototype.off = function(e, t) {
        if (void 0 === e) this._listeners = {};
        else if (void 0 === t) this._listeners[e] = [];
        else { e = this._listeners[e]; for (var n = 0; n < e.length;) e[n].fn === t ? e.splice(n, 1) : ++n }
        return this
    }, zg.prototype.emit = function(e) { var t = this._listeners[e]; if (t) { for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]); for (r = 0; r < t.length;) t[r].fn.apply(t[r++].ctx, n) } return this };
    var aB = Gm(Gm),
        bB = function(c) { try { var a = eval("quire".replace(/^/, "re"))(c); if (a && (a.length || Object.keys(a).length)) return a } catch (e) {} return null },
        cB = ab((function(e, t) { t.length = function(e) { for (var t, n = 0, r = 0; r < e.length; ++r) 128 > (t = e.charCodeAt(r)) ? n += 1 : 2048 > t ? n += 2 : 55296 == (64512 & t) && 56320 == (64512 & e.charCodeAt(r + 1)) ? (++r, n += 4) : n += 3; return n }, t.read = function(e, t, n) { if (1 > n - t) return ""; for (var r, i = null, o = [], a = 0; t < n;) 128 > (r = e[t++]) ? o[a++] = r : 191 < r && 224 > r ? o[a++] = (31 & r) << 6 | 63 & e[t++] : 239 < r && 365 > r ? (r = ((7 & r) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++]) - 65536, o[a++] = 55296 + (r >> 10), o[a++] = 56320 + (1023 & r)) : o[a++] = (15 & r) << 12 | (63 & e[t++]) << 6 | 63 & e[t++], 8191 < a && ((i || (i = [])).push(String.fromCharCode.apply(String, o)), a = 0); return i ? (a && i.push(String.fromCharCode.apply(String, o.slice(0, a))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, a)) }, t.write = function(e, t, n) { for (var r, i, o = n, a = 0; a < e.length; ++a) 128 > (r = e.charCodeAt(a)) ? t[n++] = r : (2048 > r ? t[n++] = r >> 6 | 192 : (55296 == (64512 & r) && 56320 == (64512 & (i = e.charCodeAt(a + 1))) ? (r = 65536 + ((1023 & r) << 10) + (1023 & i), ++a, t[n++] = r >> 18 | 240, t[n++] = r >> 12 & 63 | 128) : t[n++] = r >> 12 | 224, t[n++] = r >> 6 & 63 | 128), t[n++] = 63 & r | 128); return n - o } })),
        dB = function(e, t, n) {
            var r = n || 8192,
                i = r >>> 1,
                o = null,
                a = r;
            return function(n) { return 1 > n || n > i ? e(n) : (a + n > r && (o = e(r), a = 0), n = t.call(o, a, a += n), 7 & a && (a = 1 + (7 | a)), n) }
        },
        Xd = Xa.zero = new Xa(0, 0);
    Xd.toNumber = function() { return 0 }, Xd.zzEncode = Xd.zzDecode = function() { return this }, Xd.length = function() { return 1 };
    var eB = Xa.zeroHash = "\0\0\0\0\0\0\0\0";
    Xa.fromNumber = function(e) {
        if (0 === e) return Xd;
        var t = 0 > e;
        t && (e = -e);
        var n = e >>> 0;
        return e = (e - n) / 4294967296 >>> 0, t && (e = ~e >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++e && (e = 0))), new Xa(n, e)
    }, Xa.from = function(e) {
        if ("number" == typeof e) return Xa.fromNumber(e);
        if (W.isString(e)) {
            if (!W.Long) return Xa.fromNumber(parseInt(e, 10));
            e = W.Long.fromString(e)
        }
        return e.low || e.high ? new Xa(e.low >>> 0, e.high >>> 0) : Xd
    }, Xa.prototype.toNumber = function(e) { if (!e && this.hi >>> 31) { e = 1 + ~this.lo >>> 0; var t = ~this.hi >>> 0; return e || (t = t + 1 >>> 0), -(e + 4294967296 * t) } return this.lo + 4294967296 * this.hi }, Xa.prototype.toLong = function(e) { return W.Long ? new W.Long(0 | this.lo, 0 | this.hi, !!e) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!e } };
    var td = String.prototype.charCodeAt;
    Xa.fromHash = function(e) { return e === eB ? Xd : new Xa((td.call(e, 0) | td.call(e, 1) << 8 | td.call(e, 2) << 16 | td.call(e, 3) << 24) >>> 0, (td.call(e, 4) | td.call(e, 5) << 8 | td.call(e, 6) << 16 | td.call(e, 7) << 24) >>> 0) }, Xa.prototype.toHash = function() { return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24) }, Xa.prototype.zzEncode = function() { var e = this.hi >> 31; return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this }, Xa.prototype.zzDecode = function() { var e = -(1 & this.lo); return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this }, Xa.prototype.length = function() {
        var e = this.lo,
            t = (this.lo >>> 28 | this.hi << 4) >>> 0,
            n = this.hi >>> 24;
        return 0 === n ? 0 === t ? 16384 > e ? 128 > e ? 1 : 2 : 2097152 > e ? 3 : 4 : 16384 > t ? 128 > t ? 5 : 6 : 2097152 > t ? 7 : 8 : 128 > n ? 9 : 10
    };
    var W = ab((function(e, t) {
            function n(e, t, n) { for (var r = Object.keys(t), i = 0; i < r.length; ++i) void 0 !== e[r[i]] && n || (e[r[i]] = t[r[i]]); return e }

            function r(e) {
                function t(e, r) {
                    if (!(this instanceof t)) return new t(e, r);
                    Object.defineProperty(this, "message", { get: function() { return e } }), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", { value: Error().stack || "" }), r && n(this, r)
                }
                return (t.prototype = Object.create(Error.prototype)).constructor = t, Object.defineProperty(t.prototype, "name", { get: function() { return e } }), t.prototype.toString = function() { return this.name + ": " + this.message }, t
            }
            t.asPromise = ZA, t.base64 = $A, t.EventEmitter = zg, t.float = aB, t.inquire = bB, t.utf8 = cB, t.pool = dB, t.LongBits = Xa, t.isNode = !!(void 0 !== Za && Za && Za.process && Za.process.versions && Za.process.versions.node), t.global = t.isNode && Za || "undefined" != typeof window && window || "undefined" != typeof self && self || Za, t.emptyArray = Object.freeze ? Object.freeze([]) : [], t.emptyObject = Object.freeze ? Object.freeze({}) : {}, t.isInteger = Number.isInteger || function(e) { return "number" == typeof e && isFinite(e) && Math.floor(e) === e }, t.isString = function(e) { return "string" == typeof e || e instanceof String }, t.isObject = function(e) { return e && "object" === X(e) }, t.isset = t.isSet = function(e, t) { var n = e[t]; return !(null == n || !e.hasOwnProperty(t)) && ("object" !== X(n) || 0 < (Array.isArray(n) ? n.length : Object.keys(n).length)) }, t.Buffer = function() { try { var e = t.inquire("buffer").Buffer; return e.prototype.utf8Write ? e : null } catch (e) { return null } }(), t._Buffer_from = null, t._Buffer_allocUnsafe = null, t.newBuffer = function(e) { return "number" == typeof e ? t.Buffer ? t._Buffer_allocUnsafe(e) : new t.Array(e) : t.Buffer ? t._Buffer_from(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e) }, t.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, t.Long = t.global.dcodeIO && t.global.dcodeIO.Long || t.global.Long || t.inquire("long"), t.key2Re = /^true|false|0|1$/, t.key32Re = /^-?(?:0|[1-9][0-9]*)$/, t.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, t.longToHash = function(e) { return e ? t.LongBits.from(e).toHash() : t.LongBits.zeroHash }, t.longFromHash = function(e, n) { return e = t.LongBits.fromHash(e), t.Long ? t.Long.fromBits(e.lo, e.hi, n) : e.toNumber(!!n) }, t.merge = n, t.lcFirst = function(e) { return e.charAt(0).toLowerCase() + e.substring(1) }, t.newError = r, t.ProtocolError = r("ProtocolError"), t.oneOfGetter = function(e) {
                for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
                return function() {
                    for (var e = Object.keys(this), n = e.length - 1; - 1 < n; --n)
                        if (1 === t[e[n]] && void 0 !== this[e[n]] && null !== this[e[n]]) return e[n]
                }
            }, t.oneOfSetter = function(e) { return function(t) { for (var n = 0; n < e.length; ++n) e[n] !== t && delete this[e[n]] } }, t.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, t._configure = function() {
                var e = t.Buffer;
                e ? (t._Buffer_from = e.from !== Uint8Array.from && e.from || function(t, n) { return new e(t, n) }, t._Buffer_allocUnsafe = e.allocUnsafe || function(t) { return new e(t) }) : t._Buffer_from = t._Buffer_allocUnsafe = null
            }
        })),
        zi = ka,
        gl, Ph = W.LongBits,
        wr = W.base64,
        xr = W.utf8,
        yr = function() { return W.Buffer ? function() { return (ka.create = function() { return new gl })() } : function() { return new ka } };
    ka.create = yr(), ka.alloc = function(e) { return new W.Array(e) }, W.Array !== Array && (ka.alloc = W.pool(ka.alloc, W.Array.prototype.subarray)), ka.prototype._push = function(e, t, n) { return this.tail = this.tail.next = new uf(e, t, n), this.len += t, this }, wi.prototype = Object.create(uf.prototype), wi.prototype.fn = function(e, t, n) {
        for (; 127 < e;) t[n++] = 127 & e | 128, e >>>= 7;
        t[n] = e
    }, ka.prototype.uint32 = function(e) { return this.len += (this.tail = this.tail.next = new wi(128 > (e >>>= 0) ? 1 : 16384 > e ? 2 : 2097152 > e ? 3 : 268435456 > e ? 4 : 5, e)).len, this }, ka.prototype.int32 = function(e) { return 0 > e ? this._push(xi, 10, Ph.fromNumber(e)) : this.uint32(e) }, ka.prototype.sint32 = function(e) { return this.uint32((e << 1 ^ e >> 31) >>> 0) }, ka.prototype.uint64 = function(e) { return e = Ph.from(e), this._push(xi, e.length(), e) }, ka.prototype.int64 = ka.prototype.uint64, ka.prototype.sint64 = function(e) { return e = Ph.from(e).zzEncode(), this._push(xi, e.length(), e) }, ka.prototype.bool = function(e) { return this._push(vi, 1, e ? 1 : 0) }, ka.prototype.fixed32 = function(e) { return this._push(yi, 4, e >>> 0) }, ka.prototype.sfixed32 = ka.prototype.fixed32, ka.prototype.fixed64 = function(e) { return e = Ph.from(e), this._push(yi, 4, e.lo)._push(yi, 4, e.hi) }, ka.prototype.sfixed64 = ka.prototype.fixed64, ka.prototype.float = function(e) { return this._push(W.float.writeFloatLE, 4, e) }, ka.prototype.double = function(e) { return this._push(W.float.writeDoubleLE, 8, e) };
    var fB = W.Array.prototype.set ? function(e, t, n) { t.set(e, n) } : function(e, t, n) { for (var r = 0; r < e.length; ++r) t[n + r] = e[r] };
    ka.prototype.bytes = function(e) {
        var t = e.length >>> 0;
        if (!t) return this._push(vi, 1, 0);
        if (W.isString(e)) {
            var n = ka.alloc(t = wr.length(e));
            wr.decode(e, n, 0), e = n
        }
        return this.uint32(t)._push(fB, t, e)
    }, ka.prototype.string = function(e) { var t = xr.length(e); return t ? this.uint32(t)._push(xr.write, t, e) : this._push(vi, 1, 0) }, ka.prototype.fork = function() { return this.states = new cu(this), this.head = this.tail = new uf(ui, 0, 0), this.len = 0, this }, ka.prototype.reset = function() { return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new uf(ui, 0, 0), this.len = 0), this }, ka.prototype.ldelim = function() {
        var e = this.head,
            t = this.tail,
            n = this.len;
        return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this
    }, ka.prototype.finish = function() { for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;) e.fn(e.val, t, n), n += e.len, e = e.next; return t }, ka._configure = function(e) { gl = e, ka.create = yr(), gl._configure() }, (kc.prototype = Object.create(zi.prototype)).constructor = kc, kc._configure = function() {
        kc.alloc = W._Buffer_allocUnsafe, kc.writeBytesBuffer = W.Buffer && W.Buffer.prototype instanceof Uint8Array && "set" === W.Buffer.prototype.set.name ? function(e, t, n) { t.set(e, n) } : function(e, t, n) {
            if (e.copy) e.copy(t, n, 0, e.length);
            else
                for (var r = 0; r < e.length;) t[n++] = e[r++]
        }
    }, kc.prototype.bytes = function(e) { W.isString(e) && (e = W._Buffer_from(e, "base64")); var t = e.length >>> 0; return this.uint32(t), t && this._push(kc.writeBytesBuffer, t, e), this }, kc.prototype.string = function(e) { var t = W.Buffer.byteLength(e); return this.uint32(t), t && this._push(du, t, e), this }, kc._configure();
    var Bi = Ma,
        hl, Lm = W.LongBits,
        gB = W.utf8,
        zr = "undefined" != typeof Uint8Array ? function(e) { if (e instanceof Uint8Array || Array.isArray(e)) return new Ma(e); throw Error("illegal buffer") } : function(e) { if (Array.isArray(e)) return new Ma(e); throw Error("illegal buffer") },
        Ar = function() { return W.Buffer ? function(e) { return (Ma.create = function(e) { return W.Buffer.isBuffer(e) ? new hl(e) : zr(e) })(e) } : zr };
    Ma.create = Ar(), Ma.prototype._slice = W.Array.prototype.subarray || W.Array.prototype.slice, Ma.prototype.uint32 = function() { var e = 4294967295; return function() { if (e = (127 & this.buf[this.pos]) >>> 0, 128 > this.buf[this.pos++]) return e; if (e = (e | (127 & this.buf[this.pos]) << 7) >>> 0, 128 > this.buf[this.pos++]) return e; if (e = (e | (127 & this.buf[this.pos]) << 14) >>> 0, 128 > this.buf[this.pos++]) return e; if (e = (e | (127 & this.buf[this.pos]) << 21) >>> 0, 128 > this.buf[this.pos++]) return e; if (e = (e | (15 & this.buf[this.pos]) << 28) >>> 0, 128 > this.buf[this.pos++]) return e; if ((this.pos += 5) > this.len) throw this.pos = this.len, Zb(this, 10); return e } }(), Ma.prototype.int32 = function() { return 0 | this.uint32() }, Ma.prototype.sint32 = function() { var e = this.uint32(); return e >>> 1 ^ -(1 & e) | 0 }, Ma.prototype.bool = function() { return 0 !== this.uint32() }, Ma.prototype.fixed32 = function() { if (this.pos + 4 > this.len) throw Zb(this, 4); return Ag(this.buf, this.pos += 4) }, Ma.prototype.sfixed32 = function() { if (this.pos + 4 > this.len) throw Zb(this, 4); return 0 | Ag(this.buf, this.pos += 4) }, Ma.prototype.float = function() { if (this.pos + 4 > this.len) throw Zb(this, 4); var e = W.float.readFloatLE(this.buf, this.pos); return this.pos += 4, e }, Ma.prototype.double = function() { if (this.pos + 8 > this.len) throw Zb(this, 4); var e = W.float.readDoubleLE(this.buf, this.pos); return this.pos += 8, e }, Ma.prototype.bytes = function() {
        var e = this.uint32(),
            t = this.pos,
            n = this.pos + e;
        if (n > this.len) throw Zb(this, e);
        return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, n) : t === n ? new this.buf.constructor(0) : this._slice.call(this.buf, t, n)
    }, Ma.prototype.string = function() { var e = this.bytes(); return gB.read(e, 0, e.length) }, Ma.prototype.skip = function(e) {
        if ("number" == typeof e) {
            if (this.pos + e > this.len) throw Zb(this, e);
            this.pos += e
        } else
            do { if (this.pos >= this.len) throw Zb(this) } while (128 & this.buf[this.pos++]);
        return this
    }, Ma.prototype.skipType = function(e) {
        switch (e) {
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for (; 4 != (e = 7 & this.uint32());) this.skipType(e);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + e + " at offset " + this.pos)
        }
        return this
    }, Ma._configure = function(e) {
        hl = e, Ma.create = Ar(), hl._configure();
        var t = W.Long ? "toLong" : "toNumber";
        W.merge(Ma.prototype, { int64: function() { return Ai.call(this)[t](!1) }, uint64: function() { return Ai.call(this)[t](!0) }, sint64: function() { return Ai.call(this).zzDecode()[t](!1) }, fixed64: function() { return Mm.call(this)[t](!0) }, sfixed64: function() { return Mm.call(this)[t](!1) } })
    }, (Fd.prototype = Object.create(Bi.prototype)).constructor = Fd, Fd._configure = function() { W.Buffer && (Fd.prototype._slice = W.Buffer.prototype.slice) }, Fd.prototype.string = function() { var e = this.uint32(); return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len)) }, Fd._configure(), (vf.prototype = Object.create(W.EventEmitter.prototype)).constructor = vf, vf.prototype.rpcCall = function e(t, n, r, i, o) {
        if (!i) throw TypeError("request must be specified");
        var a = this;
        if (!o) return W.asPromise(e, a, t, n, r, i);
        if (a.rpcImpl) try {
            return a.rpcImpl(t, n[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), (function(e, n) {
                if (e) return a.emit("error", e, t), o(e);
                if (null !== n) {
                    if (!(n instanceof r)) try { n = r[a.responseDelimited ? "decodeDelimited" : "decode"](n) } catch (e) { return a.emit("error", e, t), o(e) }
                    return a.emit("data", n, t), o(null, n)
                }
                a.end(!0)
            }))
        } catch (e) { a.emit("error", e, t), setTimeout((function() { o(e) }), 0) } else setTimeout((function() { o(Error("already ended")) }), 0)
    }, vf.prototype.end = function(e) { return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this };
    var hB = ab((function(e, t) { t.Service = vf })),
        iB = {},
        gc = ab((function(e, t) {
            function n() { r.util._configure(), r.Writer._configure(r.BufferWriter), r.Reader._configure(r.BufferReader) }
            var r = t;
            r.build = "minimal", r.Writer = zi, r.BufferWriter = kc, r.Reader = Bi, r.BufferReader = Fd, r.util = W, r.rpc = hB, r.roots = iB, r.configure = n, n()
        }));
    gc.util.Long = V, gc.configure();
    var w = gc.Reader,
        M = gc.Writer,
        q = gc.util,
        t = gc.roots.default || (gc.roots.default = {}),
        jB = t.URI = function() {
            var e = {},
                t = Object.create(e);
            return t[e[0] = "Unknown"] = 0, t[e[1] = "PingUri"] = 1, t[e[2] = "PongUri"] = 2, t[e[11] = "UserJoinUri"] = 11, t[e[12] = "UserRespUri"] = 12, t[e[21] = "UserQuitUri"] = 21, t[e[22] = "UserDropUri"] = 22, t[e[31] = "GroupEnterUri"] = 31, t[e[32] = "GroupLeaveUri"] = 32, t[e[33] = "GroupReplyUri"] = 33, t[e[36] = "GroupEnterNoticeUri"] = 36, t[e[37] = "GroupLeaveNoticeUri"] = 37, t[e[38] = "GroupEventNoticeUri"] = 38, t[e[39] = "GroupCountNoticeUri"] = 39, t[e[41] = "UserStatusListUri"] = 41, t[e[42] = "UserStatusResultUri"] = 42, t[e[51] = "GroupStatusListUri"] = 51, t[e[52] = "GroupStatusResultUri"] = 52, t[e[55] = "GroupAllUsersListUri"] = 55, t[e[56] = "GroupAllUsersResultUri"] = 56, t[e[100] = "MessageUri"] = 100, t[e[101] = "AckUri"] = 101, t[e[115] = "FileUploadIndexGetUri"] = 115, t[e[116] = "FileUploadIndexRetUri"] = 116, t[e[117] = "FileUploadIndexSetUri"] = 117, t[e[118] = "FileUploadIndexFinUri"] = 118, t[e[119] = "FileUploadIndexErrUri"] = 119, t[e[125] = "FileDownloadIndexGetUri"] = 125, t[e[126] = "FileDownloadIndexRetUri"] = 126, t[e[127] = "FileDownloadIndexErrUri"] = 127, t[e[201] = "UserJoinNoticeUri"] = 201, t[e[202] = "UserQuitNoticeUri"] = 202, t[e[203] = "UserWaitNoticeUri"] = 203, t[e[301] = "UserAttributeGetUri"] = 301, t[e[302] = "UserAttributeRetUri"] = 302, t[e[303] = "UserAttributeSetUri"] = 303, t[e[304] = "UserAttributeModUri"] = 304, t[e[305] = "UserAttributeDelUri"] = 305, t[e[307] = "UserAttributeRspUri"] = 307, t[e[308] = "UserAttributeErrUri"] = 308, t[e[311] = "UserAttributeKeysGetUri"] = 311, t[e[312] = "UserAttributeKeysRetUri"] = 312, t[e[351] = "GroupAttributeGetUri"] = 351, t[e[352] = "GroupAttributeRetUri"] = 352, t[e[353] = "GroupAttributeSetUri"] = 353, t[e[354] = "GroupAttributeModUri"] = 354, t[e[355] = "GroupAttributeDelUri"] = 355, t[e[356] = "GroupAttributeAltUri"] = 356, t[e[357] = "GroupAttributeRspUri"] = 357, t[e[358] = "GroupAttributeErrUri"] = 358, t[e[361] = "GroupAttributeKeysGetUri"] = 361, t[e[362] = "GroupAttributeKeysRetUri"] = 362, t[e[401] = "SubscribeUserStatusUri"] = 401, t[e[402] = "UnsubscribeUserStatusUri"] = 402, t[e[499] = "SubscribeResponseUri"] = 499, t
        }(),
        Qh = t.Wrapper = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.uri = 0, e.prototype.data = q.newBuffer([]), e.encode = function(e, t) { return t || (t = M.create()), null != e.uri && Object.hasOwnProperty.call(e, "uri") && t.uint32(8).int32(e.uri), null != e.data && Object.hasOwnProperty.call(e, "data") && t.uint32(18).bytes(e.data), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.Wrapper; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.uri = e.int32();
                            break;
                        case 2:
                            r.data = e.bytes();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        kB = t.Ping = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(16).uint64(e.ms), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.Ping; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.ms = e.uint64();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        lB = t.Pong = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(16).uint64(e.ms), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.Pong; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.ms = e.uint64();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        mB = t.UserJoin = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.opt = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.ticket = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.opt && Object.hasOwnProperty.call(e, "opt") && t.uint32(16).uint64(e.opt), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(24).uint64(e.instance), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(34).string(e.account), null != e.ticket && Object.hasOwnProperty.call(e, "ticket") && t.uint32(42).string(e.ticket), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserJoin; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.opt = e.uint64();
                            break;
                        case 3:
                            r.instance = e.uint64();
                            break;
                        case 4:
                            r.account = e.string();
                            break;
                        case 5:
                            r.ticket = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        nB = t.UserResp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(24).uint32(e.code), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserResp; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        oB = t.UserQuit = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.encode = function(e, t) { return t || (t = M.create()), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserQuit; e.pos < n;) {
                    var i = e.uint32();
                    e.skipType(7 & i)
                }
                return r
            }, e
        }(),
        pB = t.UserDrop = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(8).uint32(e.code), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserDrop; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        qB = t.GroupEnter = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupEnter; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        rB = t.GroupLeave = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.account = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(10).string(e.account), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupLeave; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.account = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        sB = t.GroupReply = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(24).uint32(e.code), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupReply; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        Br = t.GroupLeaveNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.prototype.group = "", e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.size = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(18).string(e.user), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(26).string(e.group), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(32).uint64(e.instance), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(40).uint32(e.size), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupLeaveNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.user = e.string();
                            break;
                        case 3:
                            r.group = e.string();
                            break;
                        case 4:
                            r.instance = e.uint64();
                            break;
                        case 5:
                            r.size = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        Cr = t.GroupEnterNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.prototype.group = "", e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.size = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(18).string(e.user), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(26).string(e.group), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(32).uint64(e.instance), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(40).uint32(e.size), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupEnterNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.user = e.string();
                            break;
                        case 3:
                            r.group = e.string();
                            break;
                        case 4:
                            r.instance = e.uint64();
                            break;
                        case 5:
                            r.size = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        Dr = t.Message = function() {
            function e(e) {
                if (this.MiscMap = {}, e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.dialogue = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.sequence = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.options = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.src = "", e.prototype.dst = "", e.prototype.payload = q.newBuffer([]), e.prototype.MiscMap = q.emptyObject, e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.dialogue && Object.hasOwnProperty.call(e, "dialogue") && t.uint32(16).uint64(e.dialogue), null != e.sequence && Object.hasOwnProperty.call(e, "sequence") && t.uint32(24).uint64(e.sequence), null != e.options && Object.hasOwnProperty.call(e, "options") && t.uint32(32).uint64(e.options), null != e.src && Object.hasOwnProperty.call(e, "src") && t.uint32(42).string(e.src), null != e.dst && Object.hasOwnProperty.call(e, "dst") && t.uint32(50).string(e.dst), null != e.payload && Object.hasOwnProperty.call(e, "payload") && t.uint32(58).bytes(e.payload), null != e.MiscMap && Object.hasOwnProperty.call(e, "MiscMap"))
                    for (var n = Object.keys(e.MiscMap), r = 0; r < n.length; ++r) t.uint32(66).fork().uint32(10).string(n[r]).uint32(18).bytes(e.MiscMap[n[r]]).ldelim();
                return null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(72).uint64(e.ms), t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r, i, o = new t.Message; e.pos < n;) switch (r = e.uint32(), r >>> 3) {
                    case 1:
                        o.instance = e.uint64();
                        break;
                    case 2:
                        o.dialogue = e.uint64();
                        break;
                    case 3:
                        o.sequence = e.uint64();
                        break;
                    case 4:
                        o.options = e.uint64();
                        break;
                    case 5:
                        o.src = e.string();
                        break;
                    case 6:
                        o.dst = e.string();
                        break;
                    case 7:
                        o.payload = e.bytes();
                        break;
                    case 8:
                        o.MiscMap === q.emptyObject && (o.MiscMap = {});
                        var a = e.uint32() + e.pos;
                        for (r = "", i = []; e.pos < a;) {
                            var s = e.uint32();
                            switch (s >>> 3) {
                                case 1:
                                    r = e.string();
                                    break;
                                case 2:
                                    i = e.bytes();
                                    break;
                                default:
                                    e.skipType(7 & s)
                            }
                        }
                        o.MiscMap[r] = i;
                        break;
                    case 9:
                        o.ms = e.uint64();
                        break;
                    default:
                        e.skipType(7 & r)
                }
                return o
            }, e
        }(),
        Er = t.Ack = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.dialogue = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.sequence = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.dialogue && Object.hasOwnProperty.call(e, "dialogue") && t.uint32(16).uint64(e.dialogue), null != e.sequence && Object.hasOwnProperty.call(e, "sequence") && t.uint32(24).uint64(e.sequence), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(32).uint32(e.code), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.Ack; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.dialogue = e.uint64();
                            break;
                        case 3:
                            r.sequence = e.uint64();
                            break;
                        case 4:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        tB = t.FileUploadIndexGet = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.hash = q.newBuffer([]), e.prototype.size = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(18).bytes(e.hash), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(24).uint32(e.size), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.hash = e.bytes();
                            break;
                        case 3:
                            r.size = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        uB = t.FileUploadIndexRet = function() {
            function e(e) {
                if (this.servers = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.unit = 0, e.prototype.servers = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(16).uint32(e.unit), null != e.servers && e.servers.length) {
                    t.uint32(26).fork();
                    for (var n = 0; n < e.servers.length; ++n) t.uint32(e.servers[n]);
                    t.ldelim()
                }
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.unit = e.uint32();
                            break;
                        case 3:
                            if (r.servers && r.servers.length || (r.servers = []), 2 == (7 & i))
                                for (i = e.uint32() + e.pos; e.pos < i;) r.servers.push(e.uint32());
                            else r.servers.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        vB = t.FileUploadIndexSet = function() {
            function e(e) {
                if (this.servers = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.hash = q.newBuffer([]), e.prototype.unit = 0, e.prototype.servers = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(18).bytes(e.hash), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(24).uint32(e.unit), null != e.servers && e.servers.length) {
                    t.uint32(34).fork();
                    for (var n = 0; n < e.servers.length; ++n) t.uint32(e.servers[n]);
                    t.ldelim()
                }
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexSet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.hash = e.bytes();
                            break;
                        case 3:
                            r.unit = e.uint32();
                            break;
                        case 4:
                            if (r.servers && r.servers.length || (r.servers = []), 2 == (7 & i))
                                for (i = e.uint32() + e.pos; e.pos < i;) r.servers.push(e.uint32());
                            else r.servers.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        wB = t.FileUploadIndexFin = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.zone = 0, e.prototype.unit = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(16).uint32(e.zone), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(24).uint32(e.unit), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexFin; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.zone = e.uint32();
                            break;
                        case 3:
                            r.unit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        xB = t.FileUploadIndexErr = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileUploadIndexErr; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        yB = t.FileDownloadIndexGet = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.zone = 0, e.prototype.hash = q.newBuffer([]), e.prototype.size = 0, e.prototype.unit = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(16).uint32(e.zone), null != e.hash && Object.hasOwnProperty.call(e, "hash") && t.uint32(26).bytes(e.hash), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(32).uint32(e.size), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(40).uint32(e.unit), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileDownloadIndexGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.zone = e.uint32();
                            break;
                        case 3:
                            r.hash = e.bytes();
                            break;
                        case 4:
                            r.size = e.uint32();
                            break;
                        case 5:
                            r.unit = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        zB = t.FileDownloadIndexRet = function() {
            function e(e) {
                if (this.servers = [], this.backups = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.unit = 0, e.prototype.zone = 0, e.prototype.servers = q.emptyArray, e.prototype.backups = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.unit && Object.hasOwnProperty.call(e, "unit") && t.uint32(16).uint32(e.unit), null != e.zone && Object.hasOwnProperty.call(e, "zone") && t.uint32(24).uint32(e.zone), null != e.servers && e.servers.length) {
                    t.uint32(34).fork();
                    for (var n = 0; n < e.servers.length; ++n) t.uint32(e.servers[n]);
                    t.ldelim()
                }
                if (null != e.backups && e.backups.length) {
                    for (t.uint32(42).fork(), n = 0; n < e.backups.length; ++n) t.uint32(e.backups[n]);
                    t.ldelim()
                }
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileDownloadIndexRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.unit = e.uint32();
                            break;
                        case 3:
                            r.zone = e.uint32();
                            break;
                        case 4:
                            if (r.servers && r.servers.length || (r.servers = []), 2 == (7 & i))
                                for (i = e.uint32() + e.pos; e.pos < i;) r.servers.push(e.uint32());
                            else r.servers.push(e.uint32());
                            break;
                        case 5:
                            if (r.backups && r.backups.length || (r.backups = []), 2 == (7 & i))
                                for (i = e.uint32() + e.pos; e.pos < i;) r.backups.push(e.uint32());
                            else r.backups.push(e.uint32());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        AB = t.FileDownloadIndexErr = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.FileDownloadIndexErr; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        BB = t.GroupAllUsersList = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.pageSize = 0, e.prototype.pageNumber = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(18).string(e.group), null != e.pageSize && Object.hasOwnProperty.call(e, "pageSize") && t.uint32(24).uint32(e.pageSize), null != e.pageNumber && Object.hasOwnProperty.call(e, "pageNumber") && t.uint32(32).uint32(e.pageNumber), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAllUsersList; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.pageSize = e.uint32();
                            break;
                        case 4:
                            r.pageNumber = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        CB = t.GroupAllUsersResult = function() {
            function e(e) {
                if (this.memberInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.totalSize = 0, e.prototype.pageSize = 0, e.prototype.pageNumber = 0, e.prototype.memberInfos = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && n.uint32(18).string(e.group), null != e.totalSize && Object.hasOwnProperty.call(e, "totalSize") && n.uint32(24).uint32(e.totalSize), null != e.pageSize && Object.hasOwnProperty.call(e, "pageSize") && n.uint32(32).uint32(e.pageSize), null != e.pageNumber && Object.hasOwnProperty.call(e, "pageNumber") && n.uint32(40).uint32(e.pageNumber), null != e.memberInfos && e.memberInfos.length)
                    for (var r = 0; r < e.memberInfos.length; ++r) t.GroupAllUsersResult.MemberInfo.encode(e.memberInfos[r], n.uint32(50).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAllUsersResult; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.totalSize = e.uint32();
                            break;
                        case 4:
                            r.pageSize = e.uint32();
                            break;
                        case 5:
                            r.pageNumber = e.uint32();
                            break;
                        case 6:
                            r.memberInfos && r.memberInfos.length || (r.memberInfos = []), r.memberInfos.push(t.GroupAllUsersResult.MemberInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.MemberInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.account = "", e.prototype.ts = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(10).string(e.account), null != e.ts && Object.hasOwnProperty.call(e, "ts") && t.uint32(16).uint32(e.ts), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAllUsersResult.MemberInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.account = e.string();
                                break;
                            case 2:
                                r.ts = e.uint32();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        DB = t.UserStatusList = function() {
            function e(e) {
                if (this.users = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.users = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.users && e.users.length)
                    for (var n = 0; n < e.users.length; ++n) t.uint32(18).string(e.users[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserStatusList; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.users && r.users.length || (r.users = []), r.users.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        EB = t.UserStatusResult = function() {
            function e(e) {
                if (this.userInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.userInfos = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.userInfos && e.userInfos.length)
                    for (var r = 0; r < e.userInfos.length; ++r) t.UserStatusResult.UserStatusInfo.encode(e.userInfos[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserStatusResult; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.userInfos && r.userInfos.length || (r.userInfos = []), r.userInfos.push(t.UserStatusResult.UserStatusInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.UserStatusInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.account = "", e.prototype.ts = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(10).string(e.account), null != e.ts && Object.hasOwnProperty.call(e, "ts") && t.uint32(16).uint32(e.ts), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.UserStatusResult.UserStatusInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.account = e.string();
                                break;
                            case 2:
                                r.ts = e.uint32();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        FB = t.UserAttributeGet = function() {
            function e(e) {
                if (this.attributes = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.attributes = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), null != e.attributes && e.attributes.length)
                    for (var n = 0; n < e.attributes.length; ++n) t.uint32(26).string(e.attributes[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.attributes && r.attributes.length || (r.attributes = []), r.attributes.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        GB = t.UserAttributeRet = function() {
            function e(e) {
                if (this.attributeInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.attributeInfos = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.attributeInfos && e.attributeInfos.length)
                    for (var r = 0; r < e.attributeInfos.length; ++r) t.UserAttributeRet.AttributeInfo.encode(e.attributeInfos[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.UserAttributeRet.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.key = "", e.prototype.value = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.UserAttributeRet.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        HB = t.UserAttributeSet = function() {
            function e(e) {
                if (this.attributeInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.attributeInfos = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && n.uint32(18).string(e.account), null != e.attributeInfos && e.attributeInfos.length)
                    for (var r = 0; r < e.attributeInfos.length; ++r) t.UserAttributeSet.AttributeInfo.encode(e.attributeInfos[r], n.uint32(26).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeSet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.UserAttributeSet.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.key = "", e.prototype.value = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.UserAttributeSet.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        IB = t.UserAttributeMod = function() {
            function e(e) {
                if (this.attributeInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.attributeInfos = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && n.uint32(18).string(e.account), null != e.attributeInfos && e.attributeInfos.length)
                    for (var r = 0; r < e.attributeInfos.length; ++r) t.UserAttributeMod.AttributeInfo.encode(e.attributeInfos[r], n.uint32(26).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeMod; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.UserAttributeMod.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.key = "", e.prototype.value = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.UserAttributeMod.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        JB = t.UserAttributeDel = function() {
            function e(e) {
                if (this.attributes = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.prototype.attributes = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), null != e.attributes && e.attributes.length)
                    for (var n = 0; n < e.attributes.length; ++n) t.uint32(26).string(e.attributes[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeDel; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        case 3:
                            r.attributes && r.attributes.length || (r.attributes = []), r.attributes.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        KB = t.UserAttributeErr = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeErr; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        LB = t.UserAttributeKeysGet = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.account = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(18).string(e.account), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeKeysGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.account = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        MB = t.UserAttributeKeysRet = function() {
            function e(e) {
                if (this.keys = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.keys = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.keys && e.keys.length)
                    for (var n = 0; n < e.keys.length; ++n) t.uint32(18).string(e.keys[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeKeysRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.keys && r.keys.length || (r.keys = []), r.keys.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        NB = t.UserAttributeRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserAttributeRsp; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        OB = t.GroupStatusList = function() {
            function e(e) {
                if (this.groups = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.groups = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.groups && e.groups.length)
                    for (var n = 0; n < e.groups.length; ++n) t.uint32(18).string(e.groups[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupStatusList; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.groups && r.groups.length || (r.groups = []), r.groups.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        PB = t.GroupStatusResult = function() {
            function e(e) {
                if (this.groupInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.groupInfos = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.groupInfos && e.groupInfos.length)
                    for (var r = 0; r < e.groupInfos.length; ++r) t.GroupStatusResult.GroupInfo.encode(e.groupInfos[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupStatusResult; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.groupInfos && r.groupInfos.length || (r.groupInfos = []), r.groupInfos.push(t.GroupStatusResult.GroupInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.GroupInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.group = "", e.prototype.memberCount = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(10).string(e.group), null != e.memberCount && Object.hasOwnProperty.call(e, "memberCount") && t.uint32(16).uint32(e.memberCount), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupStatusResult.GroupInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.group = e.string();
                                break;
                            case 2:
                                r.memberCount = e.uint32();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        QB = t.GroupCountNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.size = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(16).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(26).string(e.group), null != e.size && Object.hasOwnProperty.call(e, "size") && t.uint32(32).uint32(e.size), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupCountNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.seq = e.uint64();
                            break;
                        case 3:
                            r.group = e.string();
                            break;
                        case 4:
                            r.size = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        RB = t.GroupAttributeGet = function() {
            function e(e) {
                if (this.attributes = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.attributes = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(18).string(e.group), null != e.attributes && e.attributes.length)
                    for (var n = 0; n < e.attributes.length; ++n) t.uint32(26).string(e.attributes[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.attributes && r.attributes.length || (r.attributes = []), r.attributes.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        SB = t.GroupAttributeRet = function() {
            function e(e) {
                if (this.attributeMaps = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.attributeMaps = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.attributeMaps && e.attributeMaps.length)
                    for (var r = 0; r < e.attributeMaps.length; ++r) t.GroupAttributeRet.AttributeMap.encode(e.attributeMaps[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.attributeMaps && r.attributeMaps.length || (r.attributeMaps = []), r.attributeMaps.push(t.GroupAttributeRet.AttributeMap.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeMap = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.key = "", e.prototype.value = "", e.prototype.origin = "", e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), null != e.origin && Object.hasOwnProperty.call(e, "origin") && t.uint32(26).string(e.origin), null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(32).uint64(e.ms), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAttributeRet.AttributeMap; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            case 3:
                                r.origin = e.string();
                                break;
                            case 4:
                                r.ms = e.uint64();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        TB = t.GroupAttributeSet = function() {
            function e(e) {
                if (this.attributeInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.broadcast = !1, e.prototype.attributeInfos = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && n.uint32(18).string(e.group), null != e.broadcast && Object.hasOwnProperty.call(e, "broadcast") && n.uint32(24).bool(e.broadcast), null != e.attributeInfos && e.attributeInfos.length)
                    for (var r = 0; r < e.attributeInfos.length; ++r) t.GroupAttributeSet.AttributeInfo.encode(e.attributeInfos[r], n.uint32(34).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeSet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.broadcast = e.bool();
                            break;
                        case 4:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.GroupAttributeSet.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.key = "", e.prototype.value = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAttributeSet.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        UB = t.GroupAttributeMod = function() {
            function e(e) {
                if (this.attributeInfos = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.broadcast = !1, e.prototype.attributeInfos = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && n.uint32(18).string(e.group), null != e.broadcast && Object.hasOwnProperty.call(e, "broadcast") && n.uint32(24).bool(e.broadcast), null != e.attributeInfos && e.attributeInfos.length)
                    for (var r = 0; r < e.attributeInfos.length; ++r) t.GroupAttributeMod.AttributeInfo.encode(e.attributeInfos[r], n.uint32(34).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeMod; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.broadcast = e.bool();
                            break;
                        case 4:
                            r.attributeInfos && r.attributeInfos.length || (r.attributeInfos = []), r.attributeInfos.push(t.GroupAttributeMod.AttributeInfo.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeInfo = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.key = "", e.prototype.value = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAttributeMod.AttributeInfo; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        VB = t.GroupAttributeDel = function() {
            function e(e) {
                if (this.attributes = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.broadcast = !1, e.prototype.attributes = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(18).string(e.group), null != e.broadcast && Object.hasOwnProperty.call(e, "broadcast") && t.uint32(24).bool(e.broadcast), null != e.attributes && e.attributes.length)
                    for (var n = 0; n < e.attributes.length; ++n) t.uint32(34).string(e.attributes[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeDel; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.broadcast = e.bool();
                            break;
                        case 4:
                            r.attributes && r.attributes.length || (r.attributes = []), r.attributes.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        WB = t.GroupAttributeAlt = function() {
            function e(e) {
                if (this.attributeMaps = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.attributeMaps = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && n.uint32(18).string(e.group), null != e.instance && Object.hasOwnProperty.call(e, "instance") && n.uint32(24).uint64(e.instance), null != e.attributeMaps && e.attributeMaps.length)
                    for (var r = 0; r < e.attributeMaps.length; ++r) t.GroupAttributeAlt.AttributeMap.encode(e.attributeMaps[r], n.uint32(34).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeAlt; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        case 3:
                            r.instance = e.uint64();
                            break;
                        case 4:
                            r.attributeMaps && r.attributeMaps.length || (r.attributeMaps = []), r.attributeMaps.push(t.GroupAttributeAlt.AttributeMap.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.AttributeMap = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.key = "", e.prototype.value = "", e.prototype.origin = "", e.prototype.ms = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.key && Object.hasOwnProperty.call(e, "key") && t.uint32(10).string(e.key), null != e.value && Object.hasOwnProperty.call(e, "value") && t.uint32(18).string(e.value), null != e.origin && Object.hasOwnProperty.call(e, "origin") && t.uint32(26).string(e.origin), null != e.ms && Object.hasOwnProperty.call(e, "ms") && t.uint32(32).uint64(e.ms), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.GroupAttributeAlt.AttributeMap; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.key = e.string();
                                break;
                            case 2:
                                r.value = e.string();
                                break;
                            case 3:
                                r.origin = e.string();
                                break;
                            case 4:
                                r.ms = e.uint64();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        XB = t.GroupAttributeRsp = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeRsp; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        YB = t.GroupAttributeErr = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeErr; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.code = e.uint32();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        ZB = t.GroupAttributeKeysGet = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.group = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.group && Object.hasOwnProperty.call(e, "group") && t.uint32(18).string(e.group), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeKeysGet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.group = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        $B = t.GroupAttributeKeysRet = function() {
            function e(e) {
                if (this.keys = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.keys = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.keys && e.keys.length)
                    for (var n = 0; n < e.keys.length; ++n) t.uint32(18).string(e.keys[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.GroupAttributeKeysRet; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.keys && r.keys.length || (r.keys = []), r.keys.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        aC = t.SubscribeUserStatus = function() {
            function e(e) {
                if (this.users = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.users = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.users && e.users.length)
                    for (var n = 0; n < e.users.length; ++n) t.uint32(18).string(e.users[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.SubscribeUserStatus; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.users && r.users.length || (r.users = []), r.users.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        bC = t.UnsubscribeUserStatus = function() {
            function e(e) {
                if (this.users = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.users = q.emptyArray, e.encode = function(e, t) {
                if (t || (t = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(8).uint64(e.seq), null != e.users && e.users.length)
                    for (var n = 0; n < e.users.length; ++n) t.uint32(18).string(e.users[n]);
                return t
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UnsubscribeUserStatus; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.users && r.users.length || (r.users = []), r.users.push(e.string());
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        cC = t.UserJoinNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(16).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(26).string(e.user), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserJoinNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.seq = e.uint64();
                            break;
                        case 3:
                            r.user = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        dC = t.UserQuitNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(16).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(26).string(e.user), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserQuitNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.seq = e.uint64();
                            break;
                        case 3:
                            r.user = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        eC = t.UserWaitNotice = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.instance = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.user = "", e.encode = function(e, t) { return t || (t = M.create()), null != e.instance && Object.hasOwnProperty.call(e, "instance") && t.uint32(8).uint64(e.instance), null != e.seq && Object.hasOwnProperty.call(e, "seq") && t.uint32(16).uint64(e.seq), null != e.user && Object.hasOwnProperty.call(e, "user") && t.uint32(26).string(e.user), t }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.UserWaitNotice; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.instance = e.uint64();
                            break;
                        case 2:
                            r.seq = e.uint64();
                            break;
                        case 3:
                            r.user = e.string();
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e
        }(),
        fC = t.SubscribeResponse = function() {
            function e(e) {
                if (this.errors = [], e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.seq = q.Long ? q.Long.fromBits(0, 0, !0) : 0, e.prototype.errors = q.emptyArray, e.encode = function(e, n) {
                if (n || (n = M.create()), null != e.seq && Object.hasOwnProperty.call(e, "seq") && n.uint32(8).uint64(e.seq), null != e.errors && e.errors.length)
                    for (var r = 0; r < e.errors.length; ++r) t.SubscribeResponse.SubscribeErrorsType.encode(e.errors[r], n.uint32(18).fork()).ldelim();
                return n
            }, e.decode = function(e, n) {
                e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                for (var r = new t.SubscribeResponse; e.pos < n;) {
                    var i = e.uint32();
                    switch (i >>> 3) {
                        case 1:
                            r.seq = e.uint64();
                            break;
                        case 2:
                            r.errors && r.errors.length || (r.errors = []), r.errors.push(t.SubscribeResponse.SubscribeErrorsType.decode(e, e.uint32()));
                            break;
                        default:
                            e.skipType(7 & i)
                    }
                }
                return r
            }, e.SubscribeErrorsType = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.account = "", e.prototype.code = 0, e.encode = function(e, t) { return t || (t = M.create()), null != e.account && Object.hasOwnProperty.call(e, "account") && t.uint32(10).string(e.account), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(16).uint32(e.code), t }, e.decode = function(e, n) {
                    e instanceof w || (e = w.create(e)), n = void 0 === n ? e.len : e.pos + n;
                    for (var r = new t.SubscribeResponse.SubscribeErrorsType; e.pos < n;) {
                        var i = e.uint32();
                        switch (i >>> 3) {
                            case 1:
                                r.account = e.string();
                                break;
                            case 2:
                                r.code = e.uint32();
                                break;
                            default:
                                e.skipType(7 & i)
                        }
                    }
                    return r
                }, e
            }(), e
        }(),
        gC = Object.freeze({ __proto__: null, URI: jB, Wrapper: Qh, Ping: kB, Pong: lB, UserJoin: mB, UserResp: nB, UserQuit: oB, UserDrop: pB, GroupEnter: qB, GroupLeave: rB, GroupReply: sB, GroupLeaveNotice: Br, GroupEnterNotice: Cr, Message: Dr, Ack: Er, FileUploadIndexGet: tB, FileUploadIndexRet: uB, FileUploadIndexSet: vB, FileUploadIndexFin: wB, FileUploadIndexErr: xB, FileDownloadIndexGet: yB, FileDownloadIndexRet: zB, FileDownloadIndexErr: AB, GroupAllUsersList: BB, GroupAllUsersResult: CB, UserStatusList: DB, UserStatusResult: EB, UserAttributeGet: FB, UserAttributeRet: GB, UserAttributeSet: HB, UserAttributeMod: IB, UserAttributeDel: JB, UserAttributeErr: KB, UserAttributeKeysGet: LB, UserAttributeKeysRet: MB, UserAttributeRsp: NB, GroupStatusList: OB, GroupStatusResult: PB, GroupCountNotice: QB, GroupAttributeGet: RB, GroupAttributeRet: SB, GroupAttributeSet: TB, GroupAttributeMod: UB, GroupAttributeDel: VB, GroupAttributeAlt: WB, GroupAttributeRsp: XB, GroupAttributeErr: YB, GroupAttributeKeysGet: ZB, GroupAttributeKeysRet: $B, SubscribeUserStatus: aC, UnsubscribeUserStatus: bC, UserJoinNotice: cC, UserQuitNotice: dC, UserWaitNotice: eC, SubscribeResponse: fC, default: t }),
        hC = Math.ceil,
        Fr = function(e) { return function(t, n, r) { var i = (t = String(kb(t))).length; return r = void 0 === r ? " " : String(r), (n = ua(n)) <= i || "" == r ? t : (n -= i, (i = bo.call(r, hC(n / r.length))).length > n && (i = i.slice(0, n)), e ? t + i : i + t) } },
        iC = Fr(!1),
        jC = Fr(!0),
        Gr = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(Ee);
    P({ target: "String", proto: !0, forced: Gr }, { padEnd: function(e) { return jC(this, e, 1 < arguments.length ? arguments[1] : void 0) } });
    var kC = Bf,
        Hr = function(e) { return function(t) { t = rb(t); for (var n, r = Dc(t), i = r.length, o = 0, a = []; i > o;) n = r[o++], la && !kC.call(t, n) || a.push(e ? [n, t[n]] : t[n]); return a } },
        lC = Hr(!0),
        mC = Hr(!1);
    P({ target: "Object", stat: !0 }, { entries: function(e) { return lC(e) } });
    var nC = Gb.f,
        Ir = "".endsWith,
        oC = Math.min,
        Jr = hk("endsWith"),
        pC = !Jr && !! function() { var e = nC(String.prototype, "endsWith"); return e && !e.writable }();
    P({ target: "String", proto: !0, forced: !pC && !Jr }, {
        endsWith: function(e) {
            var t = String(kb(this));
            gk(e);
            var n = 1 < arguments.length ? arguments[1] : void 0,
                r = ua(t.length);
            return n = void 0 === n ? r : oC(ua(n), r), r = String(e), Ir ? Ir.call(t, r, n) : t.slice(n - r.length, n) === r
        }
    }), Ug("match", 1, (function(e, t, n) {
        return [function(t) {
            var n = kb(this),
                r = null == t ? void 0 : t[e];
            return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
        }, function(e) {
            var r = n(t, e, this);
            if (r.done) return r.value;
            if (e = wa(e), r = String(this), !e.global) return Fe(e, r);
            var i = e.unicode;
            e.lastIndex = 0;
            for (var o, a = [], s = 0; null !== (o = Fe(e, r));) o = String(o[0]), a[s] = o, "" === o && (e.lastIndex = aj(r, ua(e.lastIndex), i)), s++;
            return 0 === s ? null : a
        }]
    }));
    var qC = Gb.f,
        Kr = "".startsWith,
        rC = Math.min,
        Lr = hk("startsWith"),
        sC = !Lr && !! function() { var e = qC(String.prototype, "startsWith"); return e && !e.writable }();
    P({ target: "String", proto: !0, forced: !sC && !Lr }, {
        startsWith: function(e) {
            var t = String(kb(this));
            gk(e);
            var n = ua(rC(1 < arguments.length ? arguments[1] : void 0, t.length)),
                r = String(e);
            return Kr ? Kr.call(t, r, n) : t.slice(n, n + r.length) === r
        }
    });
    var Um = function(e) {
            var t = /(%?)(%([jds]))/g,
                n = Array.prototype.slice.call(arguments, 1);
            return n.length && (e = e.replace(t, (function(e, t, r, i) {
                switch (r = n.shift(), i) {
                    case "s":
                        r = "" + r;
                        break;
                    case "d":
                        r = Number(r);
                        break;
                    case "j":
                        r = JSON.stringify(r)
                }
                return t ? (n.unshift(r), e) : r
            }))), n.length && (e += " " + n.join(" ")), "" + (e = e.replace(/%{2,2}/g, "%"))
        },
        tC = /\s/,
        uC = function(e) { for (var t = e.length; t-- && tC.test(e.charAt(t));); return t },
        vC = /^\s+/,
        Mr = NaN,
        wC = /^[-+]0x[0-9a-f]+$/i,
        xC = /^0b[01]+$/i,
        yC = /^0o[0-7]+$/i,
        zC = parseInt,
        il = function(e) {
            if ("number" == typeof e) return e;
            if (ke(e)) return Mr;
            if (mb(e) && (e = "function" == typeof e.valueOf ? e.valueOf() : e, e = mb(e) ? e + "" : e), "string" != typeof e) return 0 === e ? e : +e;
            e = e ? e.slice(0, uC(e) + 1).replace(vC, "") : e;
            var t = xC.test(e);
            return t || yC.test(e) ? zC(e.slice(2), t ? 2 : 8) : wC.test(e) ? Mr : +e
        },
        AC = Math.max,
        BC = Math.min,
        CC = function(e, t, n) {
            function r(t) {
                var n = u,
                    r = c;
                return u = c = void 0, p = t, l = e.apply(r, n)
            }

            function i(e) { var n = e - h; return e -= p, void 0 === h || n >= t || 0 > n || v && e >= g }

            function o() {
                var e = Db.Date.now();
                if (i(e)) return a(e);
                var n = setTimeout,
                    r = e - p;
                e = t - (e - h), r = v ? BC(e, g - r) : e, f = n(o, r)
            }

            function a(e) { return f = void 0, b && u ? r(e) : (u = c = void 0, l) }

            function s() {
                var e = Db.Date.now(),
                    n = i(e);
                if (u = arguments, c = this, h = e, n) { if (void 0 === f) return p = e = h, f = setTimeout(o, t), d ? r(e) : l; if (v) return clearTimeout(f), f = setTimeout(o, t), r(h) }
                return void 0 === f && (f = setTimeout(o, t)), l
            }
            var u, c, l, f, h, p = 0,
                d = !1,
                v = !1,
                b = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            if (t = il(t) || 0, mb(n)) {
                d = !!n.leading;
                var g = (v = "maxWait" in n) ? AC(il(n.maxWait) || 0, t) : g;
                b = "trailing" in n ? !!n.trailing : b
            }
            return s.cancel = function() { void 0 !== f && clearTimeout(f), p = 0, u = h = c = f = void 0 }, s.flush = function() { return void 0 === f ? l : a(Db.Date.now()) }, s
        },
        yc = function(e) {
            function t(e, i) { return Y(this, t), m(n(e = r.call(this, Tm(e, i))), "originalError", void 0), m(n(e), "code", void 0), m(n(e), "serverCode", void 0), "number" == typeof i ? e.code = i : "string" == typeof i ? e.name = i : void 0 !== i && (i.originalError && (e.originalError = i.originalError), void 0 !== i.code && (e.code = i.code), void 0 !== i.serverCode && (e.serverCode = i.serverCode)), e }
            ma(t, e);
            var r = na(t);
            return t
        }(ff(Error)),
        Ja = function(e) {
            function t(e, i) { return Y(this, t), m(n(e = r.call(this, Tm(e, i))), "name", "RtmInternalError"), m(n(e), "code", void 0), e.code = i, e }
            ma(t, e);
            var r = na(t);
            return t
        }(ff(Error)),
        Rh = function() {
            return function(e) {
                function t(e) { Y(this, t); var r = Object.keys(e); return n.call(this, e[r[0]], r[0]) }
                ma(t, e);
                var n = na(t);
                return t
            }(Ja)
        },
        Ga = Rh(),
        eb = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmTimeoutError"), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        I = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmInvalidArgumentError"), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        L = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmInvalidStatusError"), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        jl = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmInterruptedError"), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        jb = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmLimitExceededError"), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        DC = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmInvokeTooOftenError"), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        da = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmUnavailableError"), m(n(e), "serverCode", void 0), m(n(e), "statusCode", void 0), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        Ze = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmUnauthenticatedError"), m(n(e), "serverCode", void 0), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        Wc = function(e) {
            function t() { Y(this, t); for (var e = arguments.length, i = Array(e), o = 0; o < e; o++) i[o] = arguments[o]; return m(n(e = r.call.apply(r, [this].concat(i))), "name", "RtmUnknownError"), e }
            ma(t, e);
            var r = na(t);
            return t
        }(yc),
        Ta = function(e) { return e instanceof eb || e instanceof qb },
        ta = function(e) { return e instanceof yc },
        Yd = function(e, t, n) { return ['Executing "%s.%s" timed out after %ds', e, t, n / 1e3] },
        Sm = new Map,
        EC = function() { var e = new Date; return "".concat(e.toISOString().split("T")[1].replace(/\..+/, ""), ".").concat(e.getMilliseconds()) },
        zf = Object.keys,
        Ig = Object.entries.bind(Object),
        Dg = function(e) { return "string" == typeof e ? e.endsWith(".") ? e : "".concat(e, ".") : e },
        Zm = function(e) { for (var t = "", n = (e = new Uint8Array(e)).byteLength, r = -1; ++r < n;) t += String.fromCharCode(e[r]); return t = btoa(t), "data:;base64,".concat(t) },
        FC = Q((function() { return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({ toISOString: function() { return 1 } }) }));
    P({ target: "Date", proto: !0, forced: FC }, { toJSON: function(e) { e = Ra(this); var t = lc(e); return "number" != typeof t || isFinite(t) ? e.toISOString() : null } }), P({ target: "URL", proto: !0, enumerable: !0 }, { toJSON: function() { return URL.prototype.toString.call(this) } });
    var ku = Object.prototype.hasOwnProperty,
        Nr = function(e, t, n) { return JSON.stringify(en(e), t, n) };
    Nr.ensureProperties = en;
    var GC = function(e, t) { t = t || {}; var n = X(e); if ("string" === n && 0 < e.length) return lu(e); if ("number" === n && isFinite(e)) return t.long ? e = 864e5 <= (t = Math.abs(e)) ? Kg(e, t, 864e5, "day") : 36e5 <= t ? Kg(e, t, 36e5, "hour") : 6e4 <= t ? Kg(e, t, 6e4, "minute") : 1e3 <= t ? Kg(e, t, 1e3, "second") : e + " ms" : e = 864e5 <= (t = Math.abs(e)) ? Math.round(e / 864e5) + "d" : 36e5 <= t ? Math.round(e / 36e5) + "h" : 6e4 <= t ? Math.round(e / 6e4) + "m" : 1e3 <= t ? Math.round(e / 1e3) + "s" : e + "ms", e; throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e)) },
        HC = function(e) {
            function t(e) {
                function r() {
                    for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                    if (r.enabled) {
                        e = Number(new Date), r.diff = e - (i || e), r.prev = i, i = r.curr = e, n[0] = t.coerce(n[0]), "string" != typeof n[0] && n.unshift("%O");
                        var a = 0;
                        n[0] = n[0].replace(/%([a-zA-Z%])/g, (function(e, i) { return "%%" === e ? "%" : (a++, "function" == typeof(i = t.formatters[i]) && (e = i.call(r, n[a]), n.splice(a, 1), a--), e) })), t.formatArgs.call(r, n), (r.log || t.log).apply(r, n)
                    }
                }
                var i, o = null;
                return r.namespace = e, r.useColors = t.useColors(), r.color = t.selectColor(e), r.extend = n, r.destroy = t.destroy, Object.defineProperty(r, "enabled", { enumerable: !0, configurable: !1, get: function() { return null === o ? t.enabled(e) : o }, set: function(e) { o = e } }), "function" == typeof t.init && t.init(r), r
            }

            function n(e, n) { return (e = t(this.namespace + (void 0 === n ? ":" : n) + e)).log = this.log, e }

            function r(e) { return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*") }
            return t.debug = t, t.default = t, t.coerce = function(e) { return e instanceof Error ? e.stack || e.message : e }, t.disable = function() { var e = [].concat(H(t.names.map(r)), H(t.skips.map(r).map((function(e) { return "-" + e })))).join(","); return t.enable(""), e }, t.enable = function(e) {
                t.save(e), t.names = [], t.skips = [];
                var n, r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                    i = r.length;
                for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var n, r = 0;
                for (n = t.skips.length; r < n; r++)
                    if (t.skips[r].test(e)) return !1;
                for (r = 0, n = t.names.length; r < n; r++)
                    if (t.names[r].test(e)) return !0;
                return !1
            }, t.humanize = GC, t.destroy = function() { console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.") }, Object.keys(e).forEach((function(n) { t[n] = e[n] })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) { for (var n = 0, r = 0; r < e.length; r++) n = (n << 5) - n + e.charCodeAt(r), n |= 0; return t.colors[Math.abs(n) % t.colors.length] }, t.enable(t.load()), t
        },
        Or = ab((function(e, t) {
            t.formatArgs = function(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), this.useColors) {
                    var n = "color: " + this.color;
                    t.splice(1, 0, n, "color: inherit");
                    var r = 0,
                        i = 0;
                    t[0].replace(/%[a-zA-Z%]/g, (function(e) { "%%" !== e && (r++, "%c" === e && (i = r)) })), t.splice(i, 0, n)
                }
            }, t.save = function(e) { try { e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug") } catch (e) {} }, t.load = function() { try { var e = t.storage.getItem("debug") } catch (e) {} return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), e }, t.useColors = function() { return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)) };
            e: {
                try { var n = localStorage; break e } catch (e) {}
                n = void 0
            }
            t.storage = n, t.destroy = function() { var e = !1; return function() { e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")) } }(), t.colors = "#0000CC #0000FF #0033CC #0033FF #0066CC #0066FF #0099CC #0099FF #00CC00 #00CC33 #00CC66 #00CC99 #00CCCC #00CCFF #3300CC #3300FF #3333CC #3333FF #3366CC #3366FF #3399CC #3399FF #33CC00 #33CC33 #33CC66 #33CC99 #33CCCC #33CCFF #6600CC #6600FF #6633CC #6633FF #66CC00 #66CC33 #9900CC #9900FF #9933CC #9933FF #99CC00 #99CC33 #CC0000 #CC0033 #CC0066 #CC0099 #CC00CC #CC00FF #CC3300 #CC3333 #CC3366 #CC3399 #CC33CC #CC33FF #CC6600 #CC6633 #CC9900 #CC9933 #CCCC00 #CCCC33 #FF0000 #FF0033 #FF0066 #FF0099 #FF00CC #FF00FF #FF3300 #FF3333 #FF3366 #FF3399 #FF33CC #FF33FF #FF6600 #FF6633 #FF9900 #FF9933 #FFCC00 #FFCC33".split(" "), t.log = console.debug || console.log || function() {}, e.exports = HC(t), e.exports.formatters.j = function(e) { try { return JSON.stringify(e) } catch (e) { return "[UnexpectedJSONParseError]: " + e.message } }
        })),
        Pr = Or("RTM:DEBUG"),
        $e;
    Pr.enabled = !1,
        function(e) { e[e.Uploading = 0] = "Uploading", e[e.Free = 1] = "Free" }($e || ($e = {}));
    var IC = function() {
            function e(t) { Y(this, e), m(this, "uploadRequest", void 0), m(this, "uploadState", void 0), m(this, "uploadResendCount", void 0), m(this, "LogCache", void 0), m(this, "LogsToPost", void 0), m(this, "processId", void 0), m(this, "sdkVersion", void 0), m(this, "logId", void 0), m(this, "rtmConfig", void 0), this.processId = t.processId, this.sdkVersion = t.sdkVersion, this.rtmConfig = t.rtmConfig, this.uploadRequest = t.uploadRequest, this.uploadState = $e.Free, this.uploadResendCount = 0, this.LogCache = [], this.LogsToPost = [], this.logId = 0 }
            return Ia(e, [{ key: "upload", value: function(e) { this.LogCache.push(e), this.uploadState === $e.Free && (this.LogsToPost = 40 > this.LogCache.length ? this.LogCache.splice(0, this.LogCache.length) : this.LogCache.splice(0, 40), this.postLog(this.LogsToPost)) } }, {
                key: "postLog",
                value: function(e) {
                    var t = this;
                    this.uploadState = $e.Uploading, setTimeout(K(u.mark((function n() {
                        var r, i, o;
                        return u.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return r = { sdk_version: t.sdkVersion, process_id: t.processId, payload: JSON.stringify(e) }, n.prev = 1, n.next = 4, t.uploadRequest(r, null !== (i = t.rtmConfig.enableCloudProxy) && void 0 !== i && i);
                                case 4:
                                    if (!Wk) { n.next = 6; break }
                                    throw Error("RTM is busy");
                                case 6:
                                    n.next = 13;
                                    break;
                                case 8:
                                    return n.prev = 8, n.t0 = n.catch(1), o = 2 > t.uploadResendCount++ ? 2e3 : 1e4, setTimeout((function() { return t.postLog(t.LogsToPost) }), o), n.abrupt("return");
                                case 13:
                                    if (Pr('The logs uploaded for "process-'.concat(ig, '"')), 0 !== t.LogCache.length) { n.next = 17; break }
                                    return t.uploadState = $e.Free, n.abrupt("return");
                                case 17:
                                    t.uploadResendCount = 0, t.LogsToPost = 40 > t.LogCache.length ? t.LogCache.splice(0, t.LogCache.length) : t.LogCache.splice(0, 40), t.postLog(t.LogsToPost);
                                case 20:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [1, 8]
                        ])
                    }))), Zd.getParameter("LOG_UPLOAD_INTERVAL"))
                }
            }]), e
        }(),
        Qr = function(e, t, n, r, i, o, a, s) {
            var u = 0;
            for (a = !!a && Id(a, s, 3); u < r;) {
                if (u in n) {
                    if (s = a ? a(n[u], u, t) : n[u], 0 < o && jd(s)) i = Qr(e, t, s, ua(s.length), i, o - 1) - 1;
                    else {
                        if (9007199254740991 <= i) throw TypeError("Exceed the acceptable array length");
                        e[i] = s
                    }
                    i++
                }
                u++
            }
            return i
        },
        JC = Qr;
    P({ target: "Array", proto: !0 }, {
        flat: function() {
            var e = arguments.length ? arguments[0] : void 0,
                t = Ra(this),
                n = ua(t.length),
                r = Wg(t, 0);
            return r.length = JC(r, t, t, n, 0, void 0 === e ? 1 : ac(e)), r
        }
    }), P({ target: "Object", stat: !0 }, { values: function(e) { return mC(e) } });
    var KC = ["CODE"],
        Eb, ud, F;
    ! function(e) { e.CHINA = "CN", e.ASIA = "AS", e.NORTH_AMERICA = "NA", e.EUROPE = "EU", e.JAPAN = "JP", e.INDIA = "IN", e.OCEANIA = "OC", e.SOUTH_AMERICA = "SA", e.AFRICA = "AF", e.OVERSEA = "OVERSEA", e.GLOBAL = "GLOBAL" }(F || (F = {}));
    var LC = { CN: F.CHINA, NA: F.NORTH_AMERICA, EU: F.EUROPE, AS: F.ASIA, JP: F.JAPAN, IN: F.INDIA, GLOB: F.GLOBAL, AF: F.AFRICA, OC: F.OVERSEA, OVS: F.OVERSEA, SA: F.SOUTH_AMERICA },
        Lg = cn((Eb = {}, m(Eb, F.ASIA, { CODE: F.ASIA, AP_DOMAINS: ["ap-web-1-asia.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-asia.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-asia.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-asia.agora.io"], LOG_UPLOAD_SERVER: ["logservice-asia.agora.io"], PROXY_AP: ["proxy-ap-web-asia.agora.io"], PROXY_NGINX: ["southeast-asia.webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.NORTH_AMERICA, { CODE: F.NORTH_AMERICA, AP_DOMAINS: ["ap-web-1-north-america.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-north-america.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-north-america.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-north-america.agora.io"], LOG_UPLOAD_SERVER: ["logservice-north-america.agora.io"], PROXY_AP: ["proxy-ap-web-america.agora.io"], PROXY_NGINX: ["east-usa.webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.EUROPE, { CODE: F.EUROPE, AP_DOMAINS: ["ap-web-1-europe.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-europe.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-europe.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-europe.agora.io"], LOG_UPLOAD_SERVER: ["logservice-europe.agora.io"], PROXY_AP: ["proxy-ap-web-europe.agora.io"], PROXY_NGINX: ["europe.webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.JAPAN, { CODE: F.JAPAN, AP_DOMAINS: ["ap-web-1-japan.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-japan.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-japan.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-japan.agora.io"], LOG_UPLOAD_SERVER: ["logservice-japan.agora.io"], PROXY_AP: ["proxy-ap-web-japan.agora.io"], PROXY_NGINX: ["japan.webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.INDIA, { CODE: F.INDIA, AP_DOMAINS: ["ap-web-1-india.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-india.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-india.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-india.agora.io"], LOG_UPLOAD_SERVER: ["logservice-india.agora.io"], PROXY_AP: ["proxy-ap-web-india.agora.io"], PROXY_NGINX: ["india.webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.OVERSEA, { CODE: F.OVERSEA, AP_DOMAINS: ["ap-web-1-oversea.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-oversea.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-oversea.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oversea.agora.io"], LOG_UPLOAD_SERVER: ["logservice-oversea.agora.io"], PROXY_AP: ["proxy-ap-web-oversea.agora.io"], PROXY_NGINX: ["webrtc-cloud-proxy.agora.io"] }), m(Eb, F.GLOBAL, { CODE: F.GLOBAL, AP_DOMAINS: ["ap-web-1.agora.io", "ap-web-2.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-3.agora.io", "ap-web-4.agora.io"], EVENT_REPORT_DOMAIN: ["webcollector-rtm.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["webcollector-1.agora.io"], LOG_UPLOAD_SERVER: ["logservice-rtm.agora.io"], PROXY_AP: ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"], PROXY_NGINX: ["webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.OCEANIA, { CODE: F.OCEANIA, AP_DOMAINS: ["ap-web-1-oceania.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-oceania.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-oceania.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-oceania.agora.io"], LOG_UPLOAD_SERVER: ["logservice-oceania.agora.io"], PROXY_AP: ["proxy-ap-web-oceania.agora.io"], PROXY_NGINX: ["oceania.webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.SOUTH_AMERICA, { CODE: F.SOUTH_AMERICA, AP_DOMAINS: ["ap-web-1-south-america.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-south-america.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-south-america.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-south-america.agora.io"], LOG_UPLOAD_SERVER: ["logservice-south-america.agora.io"], PROXY_AP: ["proxy-ap-web-south-america.agora.io"], PROXY_NGINX: ["south-america.webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.AFRICA, { CODE: F.AFRICA, AP_DOMAINS: ["ap-web-1-africa.agora.io"], AP_BACKUP_DOMAINS: ["ap-web-2-africa.agora.io"], EVENT_REPORT_DOMAIN: ["statscollector-1-africa.agora.io"], EVENT_REPORT_BACKUP_DOMAIN: ["statscollector-2-africa.agora.io"], LOG_UPLOAD_SERVER: ["logservice-south-africa.agora.io"], PROXY_AP: ["proxy-ap-web-africa.agora.io"], PROXY_NGINX: ["africa.webrtc-cloud-proxy.sd-rtn.com"] }), m(Eb, F.CHINA, { CODE: F.CHINA, AP_DOMAINS: ["webrtc2-2.ap.sd-rtn.com"], AP_BACKUP_DOMAINS: ["webrtc2-4.ap.sd-rtn.com"], EVENT_REPORT_DOMAIN: ["web-3.statscollector.sd-rtn.com"], EVENT_REPORT_BACKUP_DOMAIN: ["web-4.statscollector.sd-rtn.com"], LOG_UPLOAD_SERVER: ["logservice-china.agora.io"], PROXY_AP: ["proxy-ap-web.agoraio.cn"], PROXY_NGINX: ["east-cn.webrtc-cloud-proxy.sd-rtn.com"] }), Eb)),
        Af = (ud = {}, m(ud, F.ASIA, [F.CHINA, F.JAPAN, F.INDIA]), m(ud, F.EUROPE, []), m(ud, F.NORTH_AMERICA, []), m(ud, F.SOUTH_AMERICA, []), m(ud, F.OCEANIA, []), m(ud, F.AFRICA, []), ud),
        Rr = [F.OVERSEA, F.GLOBAL, F.CHINA, F.NORTH_AMERICA, F.EUROPE, F.ASIA, F.JAPAN, F.INDIA, F.OCEANIA, F.SOUTH_AMERICA, F.AFRICA],
        fn = function(e) { return Object.values(Af).flat().includes(e) },
        nu = function(e) { var t; return null === (t = Ig(Af).find((function(t) { return (t = sa(t, 2))[0], t[1].includes(e) }))) || void 0 === t ? void 0 : t[0] },
        MC = function(e) { return e.sort((function(e, t) { return Rr.indexOf(e) - Rr.indexOf(t) })) },
        ye = function(e) {
            var t = new Set;
            if (0 === (e = MC(e).slice(0, 3).map((function(e) { var n = Lg[e]; if (void 0 === n) throw new Ja("invalid area key"); return e = n.CODE, n = gf(n, KC), t.add(e), n }))).length) throw new Ja("areas cannot be empty");
            return va({ CODES: t }, e.reduce((function(e, t) {
                for (var n = 0, r = Ig(e); n < r.length; n++) {
                    var i = sa(r[n], 2),
                        o = i[0];
                    i = i[1], e[o] = Array.from(new Set([].concat(H(t[o]), H(i))))
                }
                return e
            })))
        },
        O, Sr = function() {
            var e = K(u.mark((function e(t, n) {
                var r, i, o, a, s, c = arguments;
                return u.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!(2 < (i = 2 < c.length && void 0 !== c[2] ? c[2] : 0))) { e.next = 3; break }
                            return e.abrupt("return");
                        case 3:
                            return o = { withCredentials: !0, body: t, timeout: 2e4 }, a = 0 < i ? (null == O ? void 0 : O.LOG_UPLOAD_SERVER[0]) || "rtm.logservice.sd-rtn.com" : (null == O ? void 0 : O.LOG_UPLOAD_SERVER[0]) || "logservice-rtm.agora.io", s = n ? "https://".concat(null !== (r = null == O ? void 0 : O.PROXY_NGINX[0]) && void 0 !== r ? r : "webrtc-cloud-proxy.sd-rtn.com", "/ls/?h=").concat(a, "&p=443&d=upload/v1") : "https://".concat(a, "/upload/v1"), e.next = 8, ve(s, o).catch((function(e) { return Sr(t, n, i + 1) }));
                        case 8:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t, n) { return e.apply(this, arguments) }
        }(),
        Tr = new IC({ processId: "process-".concat(ig), sdkVersion: "Agora_RTM_SDK_for_Web_".concat("v1.4.4-0-g3d73f979"), uploadRequest: Sr, rtmConfig: {} }),
        kl = "text payload rawMessage thumbnail attributeInfos keys value extra".split(" "),
        Ur = "account ticket uid detail token account fileName cname user group key origin users src dst lastUpdateUserId channel cert wan_ip".split(" "),
        Vr = "serverReceivedTs isOfflineMessage enableHistoricalMessaging enableOfflineMessaging hasPeerReceived messageType enableNotificationToChannelMembers lastUpdateTs".split(" "),
        NC = "ChannelMessage MemberLeft MessageFromPeer LocalInvitationRefused LocalInvitationAccepted RemoteInvitationCanceled PeersOnlineStatusChanged AttributesUpdated MemberJoined".split(" "),
        ze = function(e) {
            if ("string" == typeof e) return pa(e);
            if (Array.isArray(e) && e.every((function(e) { return "string" == typeof e }))) return e.map((function(e) { return pa(e) }));
            if (!Pl(e)) {
                for (var t = {}, n = 0; n < Vr.length; n++) {
                    var r = Vr[n];
                    r in e && (t[r] = e[r])
                }
                if (0 < Object.keys(t).length) return t;
                if (5 > Object.keys(e).length) {
                    for (n = 0, e = Object.entries(e); n < e.length; n++) {
                        var i = sa(e[n], 2);
                        r = i[0], i = i[1], kl.includes(r) ? t[r] = "[Hidden Info]" : t[pa(r)] = "string" == typeof i ? pa(i) : "[Sensitive Info]"
                    }
                    return t
                }
                return "[Sensitive Info]"
            }
            return e
        },
        Wr = function(e) { return "object" === X(e) ? yd(e) ? bn(he(e, 5), kl, Ur) : e.constructor && e.constructor.name : e },
        Xr = function(e, t) { return e instanceof Error ? e.message : "string" != typeof e ? JSON.stringify(bn(he(e, 5), kl, Ur)) : (t = t.map((function(e) { return e instanceof Error ? e.message : "object" === X(e) ? Nr(Array.isArray(e) ? e.map(Wr) : Wr(e)) : e })), Um.apply(void 0, [e.replace(/%[%Oo]/g, (function(e) { return "%%" === e ? "%" : "%o" === e || "%O" === e ? "%s" : e }))].concat(H(t)))) },
        OC = 1,
        Yr = function(e, t, n) {
            var r = Or(e);
            return r.enabled = !0, r.log = n, r.useColors = !1,
                function(n) {
                    for (var i = arguments.length, o = Array(1 < i ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                    if (t.enableLogUpload) {
                        i = Dg(n);
                        var s = Xr(i, o);
                        Tr.upload({ log_item_id: "".concat(OC++), log_level: e, payload_str: "[".concat(EC(), "] ").concat(e, " - ").concat(256 < s.length ? s.slice(0, 256) : s) })
                    }
                    switch (i = function(e) {
                        var t = s || Xr(Dg(n), o),
                            i = Nc.LOG_HANDLER;
                        "function" == typeof i && i({ level: e, message: t }), r(t)
                    }, e) {
                        case "RTM:INFO":
                            t.logFilter.info && i("log");
                            break;
                        case "RTM:WARN":
                            t.logFilter.warn && i("warning");
                            break;
                        case "RTM:ERROR":
                            t.logFilter.error && i("error");
                            break;
                        case "RTM:TRACK":
                            t.logFilter.track && i("log");
                            break;
                        case "RTM:MSG:RECV":
                        case "RTM:MSG:SEND":
                            t.logFilter.debug && i("debug");
                            break;
                        case "RTM:DEBUG":
                            t.logFilter.debug && i("debug")
                    }
                }
        },
        ll, Zr = function(e) { return function(t) { var n = 1 === ll || void 0 === e ? "" : "Ins#".concat(e, " "); return "".concat(n).concat(t) } },
        ml = function(e, t, n) { var r = Zr(ll); return Yr("RTM:".concat(t), n, (function(t) { return e(r(t)) })) },
        ub = function() {
            return function(e) {
                function t(e, i) {
                    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    Y(this, t);
                    var a = r.call(this);
                    if (m(n(a), "logError", void 0), m(n(a), "invokeTracker", void 0), m(n(a), "resultTracker", void 0), m(n(a), "errorTracker", void 0), m(n(a), "eventTracker", void 0), m(n(a), "info", void 0), m(n(a), "warn", void 0), m(n(a), "log", void 0), m(n(a), "genLogger", void 0), m(n(a), "loggerId", void 0), m(n(a), "logger", void 0), m(n(a), "name", void 0), a.logger = e, a.name = i, a.loggerId = e.loggerId, a.info = e.info, a.warn = e.warn, a.logError = e.logError, a.genLogger = e.genLogger, a.log = e.genLogger("RTM:DEBUG", "<".concat(i, "> ")), a.invokeTracker = e.genTracker("Invoke"), a.eventTracker = e.genTracker("Event"), a.resultTracker = e.genTracker("Result"), a.errorTracker = e.genTracker("Error"), o) {
                        var s = a.emit.bind(n(a));
                        a.emit = function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            e = t[0], n = t.slice(1);
                            var r = NC.includes(e);
                            a.eventTracker.apply(a, ["%s: ".concat(0 < n.length ? "%s emitted with args: ".concat(n.map((function() { return "%o" }))) : "%s emitted"), i, e].concat(H(r ? n.map(ze) : n)));
                            try { s.apply(void 0, t) } catch (t) { a.logError("Caught in the callback function of the event %s", e, t) }
                        }
                    }
                    return a
                }
                ma(t, e);
                var r = na(t);
                return t
            }(fa)
        },
        PC = function(e) { return ml(console.log.bind(console), "INFO", e) },
        QC = function(e) { return ml(console.warn.bind(console), "WARN", e) },
        RC = function(e) { return ml(console.error.bind(console), "ERROR", e) },
        $r = function(e, t) {
            return function(n) {
                var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                    i = Zr(e),
                    o = console.debug.bind(console),
                    a = Yr(n, t, (function(e) { return o(i(e)) }));
                return function(e) { for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i]; return a.apply(void 0, [r + e].concat(n)) }
            }
        },
        SC = function(e, t) { return function(n) { return $r(e, t)("RTM:TRACK", "[".concat(n, "] ")) } },
        Ni = t.URI,
        pu = Qh,
        TC = gf(gC, ["Wrapper"]),
        gn = Ik(TC, "URI"),
        as = function(e, t) {
            var n = -1,
                r = e.length,
                i = r - 1;
            for (t = void 0 === t ? r : t; ++n < t;) {
                var o = e[r = ur(n, i)];
                e[r] = e[n], e[n] = o
            }
            return e.length = t, e
        },
        UC = function(e) { return as(Zh(e)) },
        VC = function(e) { return as(Pi(e)) },
        af = function(e) { return (Wa(e) ? UC : VC)(e) },
        bf = { 0: 9591, 1: 9593 },
        $d = function(e) { return "https://".concat(e, "/api/v1") },
        WC = cb.apply(void 0, H(af(["web-1.ap.sd-rtn.com", "web-2.ap.sd-rtn.com"].map($d)))),
        XC = cb.apply(void 0, H(af(["ap-web-1.agora.io", "ap-web-2.agora.io"].map($d)))),
        YC = cb.apply(void 0, H(af(["web-3.ap.sd-rtn.com", "web-4.ap.sd-rtn.com"].map($d)))),
        ZC = cb.apply(void 0, H(af(["ap-web-3.agora.io", "ap-web-4.agora.io"].map($d)))),
        nl = Rh(),
        ol = function(e) {
            function t(e, i, o, a, s, u) {
                Y(this, t);
                var c = r.call(this, s, Ci("Socket-", s.loggerId));
                if (m(n(c), "isActiveClose", !1), m(n(c), "loggedIn", !1), m(n(c), "useNewDomain", void 0), m(n(c), "receivedPacket", new Qa), m(n(c), "open$", void 0), m(n(c), "input$", new Qa), m(n(c), "userJoin$", new Qa), m(n(c), "attemptsSinceLastError", 0), m(n(c), "message$", new Qa), m(n(c), "socket$", void 0), m(n(c), "toClose", new Qa), m(n(c), "toReconnect", new Qa), m(n(c), "sendLogger", void 0), m(n(c), "receiveLogger", void 0), m(n(c), "ip", void 0), m(n(c), "env", void 0), m(n(c), "ticket", void 0), m(n(c), "context", void 0), m(n(c), "getDomain", (function() { return hn(c.ip, c.useNewDomain) })), m(n(c), "socketReconnector", (function(e) { var t = function(e) { return c.attemptsSinceLastError += 1, c.warn("The %s of Env %d reconnecting %s", c.name, c.env, e.message), Bc(3e3) }; return e.pipe(Ha((function(e) { return c.log("socket connection closed"), c.loggedIn = !1, 2 <= c.attemptsSinceLastError ? (c.warn("socket connection failure"), c.emit("connectionFailure"), c.close(), aa(e)) : c.isActiveClose ? wb : (c.emit("reconnect"), c.useNewDomain = !c.useNewDomain, aa(e)) })), qe((function(e) { return e.pipe(Cc(t)) }))) })), c.ip = e, c.env = i, c.ticket = o, c.context = a, c.useNewDomain = null != u ? u : .5 <= Math.random(), c.sendLogger = c.genLogger("RTM:MSG:SEND"), c.receiveLogger = c.genLogger("RTM:MSG:RECV"), 0 !== i && 1 !== i) throw new nl({ ILLEGAL_RTM_ENV: "The env number is out of rtm env count" });
                if (!Nm(e)) throw new nl({ IP_NOT_VALID: "The ip from ap is not valid" });
                var l = bf[i];
                c.log("Opening websocket address %s for the Env %d", c.ip, c.env);
                var f = Yb(c.input$, c.userJoin$.pipe(au(2)), c.message$).pipe(ea((function(e) { return Qh.encode(e).finish() })));
                return e = Yb(bu("", {
                    protocols: [],
                    makeWebSocket: function() {
                        if (c.context.config.enableCloudProxy) {
                            if (0 === c.context.cloudProxyServers.length) throw c.logError("No cloud proxy server to connect"), new da;
                            var e = "wss://".concat(hn(jn(c.context.cloudProxyServers), !1), "/");
                            e = xe(e, "sid", c.context.sid), e = xe(e, "remote_port", l.toString()), e = xe(e, "remote_ip", c.ip), e = xe(e, "token", c.context.key), e = new WebSocket(e)
                        } else e = new WebSocket("wss://".concat(c.getDomain(), ":").concat(l));
                        return e.binaryType = "arraybuffer", e
                    }
                }), c.toReconnect), c.socket$ = Da(e, Vk.pipe(ib(15e3), Ha((function(e) { return Ta(e) && c.warn("socket open timed out"), aa(e) })))).pipe(ea((function(e) { if (e instanceof Error) throw c.warn("Env_%d: Force reconnect the socket", c.env), e; return e(f).pipe(ea((function(e) { return Qh.decode(new Uint8Array(e)) }))) })), c.socketReconnector), c.open$ = c.socket$.pipe(ca((function(e) {
                    c.log("Websocket opened", c.name), e.subscribe((function(e) {
                        var t = e.data;
                        e = Ni[e.uri].slice(0, -3), t = gn[e].decode(t);
                        var n = TA({}, Ik(t, "toJSON"), (function(e, t) { return t instanceof V ? Rm(t) : t })),
                            r = !1;
                        if ((t instanceof Cr || t instanceof Br) && t.instance.lessThanOrEqual(4294967295) && (r = !0), t instanceof Dr || t instanceof Er) {
                            var i = t.instance,
                                o = t.sequence;
                            (t.dialogue.lessThanOrEqual(4294967295) || i.lessThanOrEqual(4294967295) || o.lessThan(1)) && (r = !0)
                        }
                        r ? c.warn("Env_%d: Illegal %s, abandoned %o", c.env, e, n) : ("Pong" !== e && c.receiveLogger("Env_%d: %s %o", c.env, e, n), c.receivedPacket.next([e, t]))
                    }), (function() {}))
                })), sf(void 0), pb(c.toClose), re()), c
            }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{ key: "address", get: function() { return "".concat(this.ip, ":").concat(bf[this.env]) } }, {
                key: "sendPacket",
                value: function(e, t) {
                    if ("Ping" !== e) {
                        var n = uc(t, (function(e) { return e instanceof V ? Rm(e) : e }));
                        this.sendLogger("Env_%d: %s %o", this.env, e, n)
                    }
                    t = ou(e, t), "UserJoin" === e ? this.userJoin$.next(t) : "Message" === e ? this.message$.next(t) : this.input$.next(t)
                }
            }, { key: "close", value: function() { this.isActiveClose = !0, this.loggedIn = !1, this.toClose.next() } }, {
                key: "fromReceived",
                value: function(e) {
                    var t = this;
                    return this.receivedPacket.pipe(ca((function(e) {
                        var n = sa(e, 2);
                        e = n[0], n = n[1], "UserResp" === e && (t.attemptsSinceLastError = 0, t.loggedIn = !0), "UserDrop" === e && t.emit("socketUserDrop", n)
                    })), xb((function(t) { return sa(t, 1)[0] === e })), ea((function(e) { return sa(e, 2)[1] })))
                }
            }, { key: "forceReconnect", value: function() { this.toReconnect.next(new nl({ FORCE_RECONNECTING: "Connection seems broken, try force reconnecting" })) } }]), t
        }(ub());
    P({ target: "String", proto: !0, forced: Gr }, { padStart: function(e) { return iC(this, e, 1 < arguments.length ? arguments[1] : void 0) } });
    var $C = function(e) {
            var t = zf(Lg);
            e = iu(e);
            for (var n = 0; n < t.length; n++) { var r = Lg[t[n]]; if (null != r && r.AP_DOMAINS.includes(e) || null != r && r.AP_BACKUP_DOMAINS.includes(e) || null != r && r.PROXY_AP.includes(e)) return [r.CODE] }
            return [F.CHINA, F.GLOBAL]
        },
        aD = { INVALID_APP_ID: "Illegal App ID", NO_AUTHORIZED: "Signature verification failed", TOKEN_TIMEOUT: "Dynamic key expired", INVALID_TOKEN_UID: "UID in the security key(token) is not valid", APP_ID_NO_ACTIVATED: "The vendor is not activated", DYNAMIC_KEY_NOT_ENABLED: "The vendor did not enable the dynamic key, but uses the dynamic key", DYNAMIC_ENABLED_BUT_STATIC_KEY: "The vendor enabled the dynamic key, but uses the static key", TOKEN_EXPIRED: "The token has expired", INVALID_USER_ID: "The user ID to login does not match the token", FORBIDDEN_REGION: "Forbidden to access the request in this area", CANNOT_MEET_AREA_DEMAND: "Cannot allocate to meet the requirements of the given area limit" },
        bs = { 5: "INVALID_APP_ID", 7: "INVALID_USER_ID", 9: "NO_AUTHORIZED", 10: "TOKEN_TIMEOUT", 11: "APP_ID_NO_ACTIVATED", 12: "INVALID_TOKEN_UID", 13: "TOKEN_EXPIRED", 14: "DYNAMIC_KEY_NOT_ENABLED", 15: "DYNAMIC_ENABLED_BUT_STATIC_KEY", 18: "FORBIDDEN_REGION", 19: "CANNOT_MEET_AREA_DEMAND" },
        bD = [100, 101, 102],
        Sh = /web-(\d)/,
        cs = function(e) {
            function t(e, i) {
                var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                Y(this, t);
                var a = r.call(this, i, "AccessPoint");
                return m(n(a), "handleUniLbsError", (function(e, t) {
                    var n = e;
                    if (4 < e.toString().length) {
                        var r = e.toString().padStart(8, "0"),
                            i = parseInt(r.slice(0, 4), 10);
                        if (r = parseInt(r.slice(4, 8), 10), 201 === i) n = r;
                        else if (101 === i && !bD.includes(r)) return aa(Error("service is currently unavailable"))
                    }
                    if (i = n.toString(), !Object.keys(bs).includes(i)) return (e = new da(["Login is rejected by the server. The response code is %d", e], kg)).serverCode = n, aa(e);
                    switch (i = bs[i], n = aD[i], i) {
                        case "INVALID_APP_ID":
                        case "APP_ID_NO_ACTIVATED":
                            return (t = new Ze(n, gr)).serverCode = e, aa(t);
                        case "INVALID_USER_ID":
                            return (t = new Ze(n, Lh)).serverCode = e, aa(t);
                        case "TOKEN_EXPIRED":
                        case "TOKEN_TIMEOUT":
                            return (t = new Ze(n, Mh)).serverCode = e, aa(t);
                        case "NO_AUTHORIZED":
                        case "INVALID_TOKEN_UID":
                        case "DYNAMIC_KEY_NOT_ENABLED":
                        case "DYNAMIC_ENABLED_BUT_STATIC_KEY":
                            return (t = new Ze(n, hr)).serverCode = e, aa(t);
                        case "CANNOT_MEET_AREA_DEMAND":
                            return (t = $C(t)).forEach((function(e) { return a.failedAreas.add(e) })), a.failedAreas.size === (void 0 === O ? 2 : O.CODES.size) ? ((t = new I(n, kg)).serverCode = e, aa(t)) : aa(Error("ap ".concat(t.join(", "), " cannot meet requirement")));
                        case "FORBIDDEN_REGION":
                            return (t = new da(n, kg)).serverCode = e, aa(t);
                        default:
                            return aa(Pm("ApResErrType", i))
                    }
                })), m(n(a), "getApEdgeInfo$", void 0), m(n(a), "getApEdgeInfoEndFirst$", void 0), m(n(a), "apFinish$", new Qa), m(n(a), "retryCount", 0), m(n(a), "failedAreas", new Set), m(n(a), "usedUrl", []), m(n(a), "newDomainUsed", !1), m(n(a), "backupNewDomainUsed", !1), m(n(a), "genUrl", (function() { return void 0 === O ? oi.apply(void 0, H(af([WC, XC]))).pipe(pi((function(e) { return cb.apply(void 0, H(e)) }))) : cb.apply(void 0, H(O.AP_DOMAINS.slice(0, 3).map($d))) })), m(n(a), "genBackupUrl", (function() { return void 0 === O ? oi.apply(void 0, H(af([YC, ZC]))).pipe(pi((function(e) { return cb.apply(void 0, H(e)) }))) : cb.apply(void 0, H(O.AP_BACKUP_DOMAINS.slice(0, 3).map($d))) })), m(n(a), "getApUrl$", (function(e) {
                    var n, r;
                    return a.genUrl().pipe(xb((function(e) { return (!a.newDomainUsed || !e.includes("sd-rtn.com")) && (e.includes("sd-rtn.com") && (a.newDomainUsed = !0), !fl(a.usedUrl, (function(t) { var n; return t === (null === (n = e.match(Sh)) || void 0 === n ? void 0 : n[1]) }))) })), ca((function(e) {
                        var t;
                        void 0 === O && ("string" == typeof(e = null === (t = e.match(Sh)) || void 0 === t ? void 0 : t[1]) && a.usedUrl.push(e))
                    })), La(e ? Math.max(Nc.RECONNECTING_AP_NUM, null !== (n = null == O ? void 0 : O.CODES.size) && void 0 !== n ? n : 0) : null !== (r = null == O ? void 0 : O.CODES.size) && void 0 !== r ? r : 2), Dd((function() { return t.runOutOfUrlSymbol })), Ha((function(e, n) { return a.newDomainUsed = !1, e === t.runOutOfUrlSymbol ? (a.usedUrl = [], n) : aa(e) })))
                })), m(n(a), "getBackupApUrl$", (function(e) {
                    var n, r;
                    return a.genBackupUrl().pipe(xb((function(e) { return (!a.backupNewDomainUsed || !e.includes("sd-rtn.com")) && (e.includes("sd-rtn.com") && (a.backupNewDomainUsed = !0), !fl(a.usedUrl, (function(t) { var n; return t === (null === (n = e.match(Sh)) || void 0 === n ? void 0 : n[1]) }))) })), ca((function(e) {
                        var t;
                        void 0 === O && ("string" == typeof(e = null === (t = e.match(Sh)) || void 0 === t ? void 0 : t[1]) && a.usedUrl.push(e))
                    })), La(e ? Math.max(Nc.RECONNECTING_AP_NUM, null !== (n = null == O ? void 0 : O.CODES.size) && void 0 !== n ? n : 0) : null !== (r = null == O ? void 0 : O.CODES.size) && void 0 !== r ? r : 2), Dd((function() { return t.runOutOfUrlSymbol })), Ha((function(e, n) { return a.backupNewDomainUsed = !1, e === t.runOutOfUrlSymbol ? (a.usedUrl = [], n) : aa(e) })))
                })), m(n(a), "getProxyApUrl$", (function(e) { var t, n; return cb.apply(void 0, H(((null == O ? void 0 : O.PROXY_AP.slice(0, 3)) || ["ap-proxy-1.agora.io", "ap-proxy-2.agora.io"]).map($d))).pipe(La(e ? Math.max(Nc.RECONNECTING_AP_NUM, null !== (t = null == O ? void 0 : O.CODES.size) && void 0 !== t ? t : 0) : null !== (n = null == O ? void 0 : O.CODES.size) && void 0 !== n ? n : 2)) })), m(n(a), "context", void 0), m(n(a), "fetchCloudProxy", (function(e, t) {
                    var n = Ci("AP-", a.loggerId);
                    a.log("The AccessPoint requests %s(%s)", e, n);
                    var r = new AbortController;
                    return a.apFinish$.pipe(La(1)).subscribe((function() { return r.abort() })), ad(K(u.mark((function i() {
                        var o;
                        return u.wrap((function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return o = Bg(0, Number.MAX_SAFE_INTEGER), a.log("%s request opid: %d", n, o), i.abrupt("return", ve(e, { headers: { "X-Packet-Service-Type": "0", "X-Packet-URI": "90", "Content-Type": "application/json" }, body: { sid: a.context.sid, opid: o, appid: a.context.appId, client_ts: Math.ceil(Date.now() / 1e3), request_bodies: [{ uri: 22, buffer: { service_ids: [7, 16], key: null != t ? t : a.context.key, cname: a.context.uid, uid: 0, detail: va({}, void 0 === O ? { 11: [F.CHINA, F.GLOBAL].join() } : { 11: Array.from(O.CODES).map((function(e) { return e === F.OVERSEA ? "".concat(F.ASIA, ",").concat(F.EUROPE, ",").concat(F.AFRICA, ",").concat(F.NORTH_AMERICA, ",").concat(F.SOUTH_AMERICA, ",").concat(F.OCEANIA) : e })).join(",") }) } }] }, signal: r.signal }));
                                case 3:
                                case "end":
                                    return i.stop()
                            }
                        }), i)
                    })))).pipe(Ha((function(t) { return "AbortError" !== t.name && (a.logError(t), a.warn("The AP server %s request failure", e, t)), wb })), db(function() {
                        var t = K(u.mark((function t(r) {
                            var i, o, s, c, l, f, h, p, d, v, b, g, y, m, E, w, _, O, A;
                            return u.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = r.responseText, o = JSON.parse(i), a.log("The %s response is %o", n, o), (void 0 === (s = o.response_body) || 0 === s.length || s.some((function(e) { var t; return void 0 === (null === (t = e.buffer) || void 0 === t ? void 0 : t.code) || 23 !== e.uri }))) && aa(new da("cloud proxy response_body not valid", kg)), 0 === (c = s.filter((function(e) { return 0 !== e.buffer.code }))).length) { t.next = 14; break }
                                        if (void 0 === (l = c.find((function(e) { return 128 === e.buffer.flag })))) { t.next = 12; break }
                                        return t.abrupt("return", a.handleUniLbsError(l.buffer.code, e));
                                    case 12:
                                        return a.logError("cloud proxy error response"), t.abrupt("return", a.handleUniLbsError(c[0].buffer.code, e));
                                    case 14:
                                        for (f = [], h = 0; h < s.length; h++)
                                            if (262144 === (null == (v = s[h]) || null === (p = v.buffer) || void 0 === p ? void 0 : p.flag)) null === (b = v.buffer) || void 0 === b || null === (g = b.edges_services) || void 0 === g || null === (y = g.forEach) || void 0 === y || y.call(g, (function(e) { Nm(e = e.ip) && -1 === a.context.cloudProxyServers.indexOf(e) && (a.log("got cloud proxy server: %s", e), a.context.cloudProxyServers.push(e)) }));
                                            else if (128 === (null == v || null === (d = v.buffer) || void 0 === d ? void 0 : d.flag)) {
                                            for (_ = function(e, t) {
                                                    var n = t[e];
                                                    f.some((function(e) { return e.ip === n.ip })) || f.push({ ip: n.ip, ticket: v.buffer.cert })
                                                }, O = 0, A = v.buffer.edges_services; O < A.length; O++) _(O, A);
                                            a.context.rtmArea = null !== (m = null === (E = v.buffer) || void 0 === E || null === (w = E.detail) || void 0 === w ? void 0 : w[9]) && void 0 !== m ? m : ""
                                        }
                                        return t.abrupt("return", cb.apply(void 0, H(f).concat([hg])));
                                    case 19:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()), Ha((function(e) { return ta(e) ? aa(e) : wb })), ug(), xb((function(e) { return void 0 !== e && "string" == typeof e.ip && "string" == typeof e.ticket })))
                })), m(n(a), "fetchAp", (function(e, t) {
                    var n = Ci("AP-", a.loggerId);
                    a.log("The AccessPoint requests %s(%s)", e, n);
                    var r = new AbortController;
                    return a.apFinish$.pipe(La(1)).subscribe((function() { return r.abort() })), ad(K(u.mark((function i() {
                        var o;
                        return u.wrap((function(i) {
                            for (;;) switch (i.prev = i.next) {
                                case 0:
                                    return o = Bg(0, Number.MAX_SAFE_INTEGER), a.log("%s request opid: %d", n, o), i.abrupt("return", ve(e, { headers: { "X-Packet-Service-Type": "0", "X-Packet-URI": "69", "Content-Type": "application/json" }, body: { flag: 128, opid: o, key: t || a.context.key, cname: a.context.uid, detail: va({}, void 0 === O ? { 11: [F.CHINA, F.GLOBAL].join() } : { 11: Array.from(O.CODES).map((function(e) { return e === F.OVERSEA ? "".concat(F.ASIA, ",").concat(F.EUROPE, ",").concat(F.AFRICA, ",").concat(F.NORTH_AMERICA, ",").concat(F.SOUTH_AMERICA, ",").concat(F.OCEANIA) : e })).join(",") }), uid: 0, sid: a.context.sid }, signal: r.signal }));
                                case 3:
                                case "end":
                                    return i.stop()
                            }
                        }), i)
                    })))).pipe(Ha((function(t) { return "AbortError" !== t.name && (a.logError(t), a.warn("The AP server %s request failure", e, t)), wb })), db(function() {
                        var t = K(u.mark((function t(r) {
                            var i, o, s, c, l, f, h;
                            return u.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = r.responseText, o = JSON.parse(i), a.log("The %s response is %o", n, o), c = (s = o).code, l = s.addresses, f = s.detail, 0 === c) { t.next = 6; break }
                                        return t.abrupt("return", a.handleUniLbsError(c, e));
                                    case 6:
                                        if (0 !== (h = l).length) { t.next = 11; break }
                                        return t.abrupt("return", aa(Error("No available edge address to connect")));
                                    case 11:
                                        return a.context.rtmArea = null == f ? void 0 : f[9], t.abrupt("return", cb.apply(void 0, H(h).concat([hg])));
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) { return t.apply(this, arguments) }
                    }()), ug(), Ha((function(e) { return ta(e) ? aa(e) : wb })), xb((function(e) { return void 0 !== e && "string" == typeof e.ip && "string" == typeof e.ticket })))
                })), a.context = e, a.getApEdgeInfoEndFirst$ = function() { var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0]; return Bc(0, e || o ? Nc.RECONNECTING_AP_INTERVAL : 2e3).pipe(La(1), ca((function() { a.retryCount += 1 })), db((function() { return a.context.config.enableCloudProxy ? a.getProxyApUrl$(e || o) : (4 <= a.retryCount && (a.retryCount = 0), 3 >= a.retryCount ? a.getApUrl$(e || o) : a.getBackupApUrl$(e || o)) })), db((function(e) { return a.context.config.enableCloudProxy ? a.fetchCloudProxy(e) : a.fetchAp(e) })), Ha((function(e) { return e instanceof qb && a.warn("AP request timeout"), aa(e) })), vm((function(e) { return e.ip })), pb(a.apFinish$)) }, a.getApEdgeInfo$ = function(e) { return Bc(0, e || o ? Nc.RECONNECTING_AP_INTERVAL : 2e3).pipe(La(8), ca((function() { a.retryCount += 1 })), db((function() { return a.context.config.enableCloudProxy ? a.getProxyApUrl$(e || o) : 3 >= a.retryCount ? a.getApUrl$(e || o) : a.getBackupApUrl$(e || o) })), db((function(e) { return (a.context.config.enableCloudProxy ? a.fetchCloudProxy(e) : a.fetchAp(e)).pipe() })), Ha((function(e) { return e instanceof qb && a.warn("AP request timeout"), aa(e) })), vm((function(e) { return e.ip })), pb(a.apFinish$)) }, a
            }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{ key: "clearUp", value: function() { this.failedAreas.clear(), this.retryCount = 0 } }]), t
        }(ub());
    m(cs, "runOutOfUrlSymbol", Symbol("AP urls are used up"));
    var ds = Rh(),
        es = function(e) {
            function t(e, i, o) {
                Y(this, t);
                var a = r.call(this, i, "Connection");
                m(n(a), "apClient", void 0), m(n(a), "lastOpenSockets", [new se(1), new se(1)]), m(n(a), "curOpenSockets", [void 0, void 0]), m(n(a), "ipIterator", 0), m(n(a), "firstEnv", .5 <= Math.random() ? 1 : 0), m(n(a), "firstSocketOpener", void 0), m(n(a), "secondSocketOpener", void 0), m(n(a), "firstOpenKeeperSubject", new Qa), m(n(a), "secondOpenKeeperSubject", new Qa), m(n(a), "blacklistedIP", []), m(n(a), "edgeInfoReplayed", void 0), m(n(a), "firstEnvOpenSocket", void 0), m(n(a), "firstOpenKeeperSub", void 0), m(n(a), "secondOpenKeeperSub", void 0), m(n(a), "context", void 0), m(n(a), "logger", void 0), a.context = e, a.logger = i, a.apClient = new cs(a.context, i), a.apClient.apFinish$.subscribe((function() { a.log("Ap client fetch finished") }));
                var s, u = [];
                return a.edgeInfoReplayed = a.apClient.getApEdgeInfo$(o).pipe(qe((function(e) { return e.pipe(ca((function(e) { if (ta(e)) throw e })), cd(o ? Zd.getParameter("RECONNECTING_AP_INTERVAL") : 900), pb(Bc(2e4))) })), xb((function(e) { return !fl(u, e) && -1 === a.blacklistedIP.indexOf(e.ip) })), Dd((function() { return new ds({ AP_NO_AVAILABLE_EDGE: "No available edge address to connect" }) })), ca((function(e) { u.push(e), a.log("An edge info got %o", e) })), ca({ error: function(e) { a.emit("connectionInitFailure", e) } }), xg((function() { a.apClient.clearUp() })), zm()), a.firstEnvOpenSocket = a.edgeInfoReplayed.pipe(db((function(e) { if (void 0 === e) return aa(Error("Invalid edge info")); var t = new ol(e.ip, a.firstEnv, e.ticket, a.context, i, s); return a.firstEnv = 1 === a.firstEnv ? 0 : 1, t.on("connectionFailure", (function() { return a.onSocketConnectionFailure(t) })), s = !t.useNewDomain, t.open$.pipe(sf(t)) })), ca((function(e) { a.log("The websocket of ENV_%d opened to %s:%d", e.env, e.ip, bf[e.env]), a.curOpenSockets[e.env] = e, a.lastOpenSockets[e.env].next(e), a.firstEnv = e.env, a.openSecondSocket(e.env, e.ip, e.useNewDomain) })), La(1), re()), a.firstSocketOpener = a.firstEnvOpenSocket.pipe(db((function(e) { return e.open$.pipe(ca((function() { a.log("The websocket of first ENV_%d re-opened to %s:%d", e.env, e.ip, bf[e.env]), a.curOpenSockets[e.env] = e, a.lastOpenSockets[e.env].next(e) }))) }))), e = a.firstOpenKeeperSubject.pipe(Cc(Yc)), a.firstOpenKeeperSub = e.subscribe({ error: a.logError }), a
            }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{ key: "initConnection", value: function() { this.firstOpenKeeperSubject.next(this.firstSocketOpener) } }, {
                key: "closeSocket",
                value: function(e, t) {
                    if (![0, 1].includes(e)) throw new Ga({ INVALID_ENV: "The env argument is not 0 or 1" });
                    var n = e === this.firstEnv ? this.firstOpenKeeperSub : this.secondOpenKeeperSub;
                    this.firstOpenKeeperSub = void 0;
                    var r = this.curOpenSockets[e];
                    this.curOpenSockets[e] = void 0, r && (r.isActiveClose = !0, setTimeout((function() { r.close() }), t)), void 0 !== n && setTimeout((function() { null == n || n.unsubscribe() }), t)
                }
            }, { key: "waitClosing", value: function(e) { var t = this; return e.isActiveClose = !0, e.open$.pipe(Dt(), Ha((function(e) { return e.message === tr.normalClosureMessage ? wb : aa(e) })), ib(5e3), Ha((function(n) { return n instanceof qb ? (t.warn("Force closing the ENV_%d connection", e.env), wb) : aa(n) }))) } }, {
                key: "onSocketConnectionFailure",
                value: function(e) {
                    var t = [0, 1].filter((function(t) { return t !== e.env }))[0];
                    (t = this.curOpenSockets[t]) && t.loggedIn ? this.reopenSocketWithApRequest(e.env) : this.emit("socketsFailure")
                }
            }, {
                key: "openSecondSocket",
                value: function(e, t, n) {
                    var r = this,
                        i = 1 === e ? 0 : 1;
                    this.secondSocketOpener = this.edgeInfoReplayed.pipe(ym((function(e, t) { return [].concat(H(e), [t]) }), []), ea((function(e) { return rr(e, (function(e) { return Qm(t, e.ip) })).slice(-1)[0] })), La(1), db((function(e) { if (void 0 === e) return aa(Error("Invalid edge info")); var t = new ol(e.ip, i, e.ticket, r.context, r.logger, n); return t.on("connectionFailure", (function() { return r.onSocketConnectionFailure(t) })), t.open$.pipe(ca((function() { r.lastOpenSockets[i].next(t), r.curOpenSockets[i] = t }))) })), re()), this.secondOpenKeeperSub = this.secondOpenKeeperSubject.pipe(Cc(Yc)).subscribe({ error: this.logError }), this.secondOpenKeeperSubject.next(this.secondSocketOpener)
                }
            }, {
                key: "reopenSocketWithApRequest",
                value: function(e) {
                    var t = this,
                        n = [0, 1].filter((function(t) { return t !== e }))[0];
                    if (void 0 !== (n = this.curOpenSockets[n])) {
                        var r, i = n.ip;
                        n = this.apClient.getApEdgeInfoEndFirst$(!0).pipe(Dd((function() { return new ds({ AP_NO_AVAILABLE_EDGE: "No available edge address to connect" }) })), qe((function(e) {
                            return e.pipe(ca((function(e) {
                                if (e.code === Mh) t.emit("tokenExpired"), t.apClient.apFinish$.next(void 0);
                                else if (ta(e)) throw e
                            })), cd(Zd.getParameter("RECONNECTING_AP_INTERVAL")), pb(Bc(15e3)))
                        })), ca((function(e) { t.log("An edge info got %o", e) })), xg((function() { t.apClient.clearUp() }))).pipe(ym((function(e, t) { return [].concat(H(e), [t]) }), []), ea((function(e) { return (e = rr(e, (function(e) { return Qm(i, e.ip) }))).length - 1 >= t.ipIterator ? e.slice(-t.ipIterator++ - 1)[0] : (t.ipIterator = 0, e.slice(-1)[0]) })), Dd(), db((function(n) { if (void 0 === n) return aa(Error("Invalid edge info")); var i = new ol(n.ip, e, n.ticket, t.context, t.logger, r); return i.on("connectionFailure", (function() { return t.onSocketConnectionFailure(i) })), r = !i.useNewDomain, i.open$.pipe(sf(i)) })), ca((function(n) { t.log("The websocket of ENV_%d re-opened to %s:%d using ap", n.env, n.ip, bf[n.env]), t.curOpenSockets[e] = n, t.lastOpenSockets[e].next(n) })), db((function(n) { return n.open$.pipe(ca((function() { t.log("The websocket of ENV_%d re-opened to %s:%d", n.env, n.ip, bf[n.env]), t.curOpenSockets[e] = n, t.lastOpenSockets[e].next(n) }))) })), re()), e === this.firstEnv ? this.firstOpenKeeperSubject.next(n) : this.secondOpenKeeperSubject.next(n)
                    }
                }
            }]), t
        }(ub()),
        Xc = gc.Writer,
        oa = gc.util,
        zc = gc.roots.default || (gc.roots.default = {}),
        cD = zc.Session = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.appId = "", e.prototype.ver = "", e.prototype.buildno = 0, e.prototype.installId = "", e.prototype.os = 0, e.prototype.did = "", e.prototype.index = null, e.prototype.token = "", e.prototype.version = 0, e.prototype.subVersion = 0, e.encode = function(e, t) { return t || (t = Xc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.appId && Object.hasOwnProperty.call(e, "appId") && t.uint32(42).string(e.appId), null != e.ver && Object.hasOwnProperty.call(e, "ver") && t.uint32(50).string(e.ver), null != e.buildno && Object.hasOwnProperty.call(e, "buildno") && t.uint32(56).int32(e.buildno), null != e.installId && Object.hasOwnProperty.call(e, "installId") && t.uint32(66).string(e.installId), null != e.os && Object.hasOwnProperty.call(e, "os") && t.uint32(128).int32(e.os), null != e.did && Object.hasOwnProperty.call(e, "did") && t.uint32(138).string(e.did), null != e.index && Object.hasOwnProperty.call(e, "index") && zc.Session.CommonIndex.encode(e.index, t.uint32(162).fork()).ldelim(), null != e.token && Object.hasOwnProperty.call(e, "token") && t.uint32(170).string(e.token), null != e.version && Object.hasOwnProperty.call(e, "version") && t.uint32(176).int32(e.version), null != e.subVersion && Object.hasOwnProperty.call(e, "subVersion") && t.uint32(184).int32(e.subVersion), t }, e.CommonIndex = function() {
                function e(e) {
                    if (e)
                        for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
                }
                return e.prototype.index1 = "", e.prototype.index2 = "", e.prototype.index3 = "", e.encode = function(e, t) { return t || (t = Xc.create()), null != e.index1 && Object.hasOwnProperty.call(e, "index1") && t.uint32(10).string(e.index1), null != e.index2 && Object.hasOwnProperty.call(e, "index2") && t.uint32(18).string(e.index2), null != e.index3 && Object.hasOwnProperty.call(e, "index3") && t.uint32(26).string(e.index3), t }, e
            }(), e
        }(),
        dD = zc.Link = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.ec = 0, e.prototype.sc = 0, e.prototype.destServerIp = "", e.prototype.ackedServerIp = "", e.prototype.responseTime = 0, e.encode = function(e, t) { return t || (t = Xc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.ec && Object.hasOwnProperty.call(e, "ec") && t.uint32(40).int32(e.ec), null != e.sc && Object.hasOwnProperty.call(e, "sc") && t.uint32(48).int32(e.sc), null != e.destServerIp && Object.hasOwnProperty.call(e, "destServerIp") && t.uint32(58).string(e.destServerIp), null != e.ackedServerIp && Object.hasOwnProperty.call(e, "ackedServerIp") && t.uint32(66).string(e.ackedServerIp), null != e.responseTime && Object.hasOwnProperty.call(e, "responseTime") && t.uint32(72).int32(e.responseTime), t }, e
        }(),
        eD = zc.Logout = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.encode = function(e, t) { return t || (t = Xc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), t }, e
        }(),
        fD = zc.KickedOff = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.linkId = 0, e.prototype.code = 0, e.prototype.server = "", e.prototype.serverCode = 0, e.encode = function(e, t) { return t || (t = Xc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.linkId && Object.hasOwnProperty.call(e, "linkId") && t.uint32(48).int32(e.linkId), null != e.code && Object.hasOwnProperty.call(e, "code") && t.uint32(56).int32(e.code), null != e.server && Object.hasOwnProperty.call(e, "server") && t.uint32(66).string(e.server), null != e.serverCode && Object.hasOwnProperty.call(e, "serverCode") && t.uint32(72).int32(e.serverCode), t }, e
        }(),
        gD = zc.ChnJoin = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.cname = "", e.prototype.errCode = 0, e.encode = function(e, t) { return t || (t = Xc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(50).string(e.cname), null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(56).int32(e.errCode), t }, e
        }(),
        hD = zc.ChnJoinRes = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.cname = "", e.prototype.errCode = 0, e.prototype.serverErrCode = 0, e.encode = function(e, t) { return t || (t = Xc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(50).string(e.cname), null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(56).int32(e.errCode), null != e.serverErrCode && Object.hasOwnProperty.call(e, "serverErrCode") && t.uint32(64).int32(e.serverErrCode), t }, e
        }(),
        iD = zc.ChnLeave = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.cname = "", e.prototype.errCode = 0, e.encode = function(e, t) { return t || (t = Xc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.cname && Object.hasOwnProperty.call(e, "cname") && t.uint32(50).string(e.cname), null != e.errCode && Object.hasOwnProperty.call(e, "errCode") && t.uint32(56).int32(e.errCode), t }, e
        }(),
        jD = zc.ConnectionStateChange = function() {
            function e(e) {
                if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n) null != e[t[n]] && (this[t[n]] = e[t[n]])
            }
            return e.prototype.sid = "", e.prototype.userId = "", e.prototype.lts = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.elapse = oa.Long ? oa.Long.fromBits(0, 0, !1) : 0, e.prototype.oldState = 0, e.prototype.newState = 0, e.prototype.reason = 0, e.prototype.reconnId = 0, e.encode = function(e, t) { return t || (t = Xc.create()), null != e.sid && Object.hasOwnProperty.call(e, "sid") && t.uint32(10).string(e.sid), null != e.userId && Object.hasOwnProperty.call(e, "userId") && t.uint32(18).string(e.userId), null != e.lts && Object.hasOwnProperty.call(e, "lts") && t.uint32(24).int64(e.lts), null != e.elapse && Object.hasOwnProperty.call(e, "elapse") && t.uint32(32).int64(e.elapse), null != e.oldState && Object.hasOwnProperty.call(e, "oldState") && t.uint32(40).int32(e.oldState), null != e.newState && Object.hasOwnProperty.call(e, "newState") && t.uint32(48).int32(e.newState), null != e.reason && Object.hasOwnProperty.call(e, "reason") && t.uint32(56).int32(e.reason), null != e.reconnId && Object.hasOwnProperty.call(e, "reconnId") && t.uint32(64).int32(e.reconnId), t }, e
        }(),
        qu = Object.freeze({ __proto__: null, Session: cD, Link: dD, Logout: eD, KickedOff: fD, ChnJoin: gD, ChnJoinRes: hD, ChnLeave: iD, ConnectionStateChange: jD, default: zc }),
        ru = Object.freeze({ __proto__: null, Counter: 1, ApiExec: 154, Session: 164, ApEvent: 165, Link: 166, Logout: 167, TxMessage: 168, RxMessage: 169, KickedOff: 170, TxMessageRes: 171, ChnJoin: 172, ChnJoinRes: 173, ChnLeave: 174, ChnGetMembers: 175, ChnGetMembersRes: 176, ChnMemberJoined: 177, ChnMemberLeft: 178, QueryPeersOnlineStatus: 179, QueryPeersOnlineStatusRes: 180, RenewToken: 181, OperateAttribute: 186, OperateAttributeRes: 187, ApRequest: 188, LinkTcpEvent: 189, LinkLoginRequest: 190, ConnectionStateChange: 191, default: { Counter: 1, ApiExec: 154, Session: 164, ApEvent: 165, Link: 166, Logout: 167, TxMessage: 168, RxMessage: 169, KickedOff: 170, TxMessageRes: 171, ChnJoin: 172, ChnJoinRes: 173, ChnLeave: 174, ChnGetMembers: 175, ChnGetMembersRes: 176, ChnMemberJoined: 177, ChnMemberLeft: 178, QueryPeersOnlineStatus: 179, QueryPeersOnlineStatusRes: 180, RenewToken: 181, OperateAttribute: 186, OperateAttributeRes: 187, ApRequest: 188, LinkTcpEvent: 189, LinkLoginRequest: 190, ConnectionStateChange: 191 } }),
        kD = function(e) {
            function t(e, i, o) { return Y(this, t), m(n(o = r.call(this, o, "Context")), "_token", void 0), m(n(o), "config", void 0), m(n(o), "_uid", void 0), m(n(o), "_sid", void 0), m(n(o), "_area", "CN"), m(n(o), "appId", void 0), m(n(o), "enableCloudProxy", !1), m(n(o), "cloudProxyServers", []), o.appId = e, o.config = i, o }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{ key: "token", set: function(e) { this._token = "string" == typeof e && e ? e : void 0 } }, {
                key: "uid",
                get: function() { if ("string" == typeof this._uid && this._uid) return this._uid; throw new Ja("Cannot get illegal uid") },
                set: function(e) {
                    if (this.log("The user ID is set to %s", pa(e)), !Aa(e)) throw new Ja;
                    this._uid = e
                }
            }, { key: "key", get: function() { if ("string" == typeof this._token && this._token) return this._token; if ("string" == typeof this.appId && this.appId) return this.appId; throw new Ja("Cannot get illegal key") } }, {
                key: "sid",
                get: function() { if ("string" == typeof this._sid && this._sid) return this._sid; throw new Ja("Cannot get illegal sid") },
                set: function(e) {
                    if (this.log("sid is set to %s", e), "string" != typeof e || !e) throw new Ja;
                    this._sid = e
                }
            }, { key: "rtmArea", get: function() { if ("string" == typeof this._area && this._area) return this._area; throw new Ja("Cannot get illegal area") }, set: function(e) { this.log("area is set to %s", e), "string" == typeof e && e ? this._area = e : this.warn("set area failed") } }]), t
        }(ub()),
        lD = !!Fc && Q((function() { Fc.prototype.finally.call({ then: function() {} }, (function() {})) }));
    if (P({ target: "Promise", proto: !0, real: !0, forced: lD }, {
            finally: function(e) {
                var t = id(this, mc("Promise")),
                    n = "function" == typeof e;
                return this.then(n ? function(n) { return wj(t, e()).then((function() { return n })) } : e, n ? function(n) { return wj(t, e()).then((function() { throw n })) } : e)
            }
        }), "function" == typeof Fc) {
        var fs = mc("Promise").prototype.finally;
        Fc.prototype.finally !== fs && Ua(Fc.prototype, "finally", fs, { unsafe: !0 })
    }
    var mD = function() {
            var e = K(u.mark((function e(t) {
                return u.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.t0 = Uint8Array, e.next = 3, crypto.subtle.digest("SHA-256", t);
                        case 3:
                            return e.t1 = e.sent, e.abrupt("return", new e.t0(e.t1));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })));
            return function(t) { return e.apply(this, arguments) }
        }(),
        gs = function(e) { return Array.from(e).map((function(e) { return e.toString(16).padStart(2, "0") })).join("") },
        nD = function(e) { if ("string" != typeof e) throw new TypeError("Expected input to be a string"); if (0 != e.length % 2) throw new RangeError("Expected string to be an even number of characters"); for (var t = new Uint8Array(e.length / 2), n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.substring(n, n + 2), 16); return t },
        hs = function(e) { return btoa(String.fromCharCode.apply(String, H(e))).replace(/={1,2}$/, "") },
        is = function() {
            var e = K(u.mark((function e(t) {
                var n;
                return u.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, crypto.subtle.digest("SHA-1", t);
                        case 3:
                            n = e.sent, e.next = 9;
                            break;
                        case 6:
                            e.prev = 6, e.t0 = e.catch(0), n = sha1.arrayBuffer(t);
                        case 9:
                            return e.abrupt("return", hs(new Uint8Array(n)));
                        case 10:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 6]
                ])
            })));
            return function(t) { return e.apply(this, arguments) }
        }(),
        js = function(e, t, n, r) { r[t] = !0, n.has(e) ? n.get(e).add(t) : n.set(e, new Set([t])) },
        oD = function(e) {
            switch (e) {
                case "89504E47":
                    return "image/png";
                case "47494638":
                    return "image/gif";
                case "25504446":
                    return "application/pdf";
                case "FFD8FFDB":
                case "FFD8FFE0":
                case "FFD8FFE1":
                    return "image/jpeg";
                case "504B0304":
                    return "application/zip";
                default:
                    return "application/octet-stream"
            }
        },
        ks = function(e) {
            function t(e, i, o, a) { Y(this, t); var s = r.call(this, o, "ChunkDownloadManager"); if (m(n(s), "abortController", new AbortController), m(n(s), "downloadedSize", 0), m(n(s), "successCount", 0), m(n(s), "timer", void 0), m(n(s), "chunks", []), m(n(s), "retUnit", void 0), m(n(s), "singleThread", !1), m(n(s), "initialized", !1), m(n(s), "ee", void 0), m(n(s), "chunkCount", void 0), m(n(s), "aborted", !1), m(n(s), "serverToIndices", new Map), m(n(s), "backupToIndices", new Map), m(n(s), "indexToBackupServers", []), m(n(s), "busyBackupServers", new Map), m(n(s), "downloadingChunks", new Set), m(n(s), "metaInfo", void 0), m(n(s), "transHandler", void 0), s.metaInfo = e, s.transHandler = i, s.ee = void 0 === a ? new fa : a, o = e.size, e = e.unit, 0 === o) throw new Ja("size cannot be 0"); return void 0 !== i.cancelSignal && i.cancelSignal.addEventListener("abort", (function() { s.abortController.abort() }), { once: !0 }), s.abortController.signal.addEventListener("abort", (function() { s.aborted = !0 }), { once: !0 }), s.chunkCount = Math.ceil(o / (32768 * e)), s }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{
                key: "setInfoByResponse",
                value: function(e) {
                    var t = this,
                        n = e.serverList,
                        r = e.backupList;
                    if (e = e.unit, n.length < this.chunkCount && r.length < this.chunkCount) throw new Ja("servers is not enough");
                    this.updateProgress(0), this.initialized = !0;
                    var i = Array(this.chunkCount).fill(!1);
                    if (n.forEach((function(e, n) { return e.forEach((function(e) { return js(e, n, t.serverToIndices, i) })) })), r.forEach((function(e, n) { return e.forEach((function(e) { return js(e, n, t.backupToIndices, i) })) })), i.some((function() { return !1 }))) throw new da("Not enough servers to download", ng);
                    this.indexToBackupServers = r.map((function(e) { return new Set(e) })), this.retUnit = e
                }
            }, { key: "downloadChunks", value: function() { this.aborted ? this.warn("downloadChunks after abort, ignored") : 1 === this.serverToIndices.size && 0 === Array.from(this.serverToIndices.keys())[0] ? this.serversDownload(this.backupToIndices) : 1 <= this.serverToIndices.size ? this.serversDownload(this.serverToIndices, !0) : this.ee.emit("error", new da("not enough servers to download", ng)) } }, {
                key: "updateProgress",
                value: function(e) {
                    var t = this,
                        n = this.downloadedSize + e;
                    this.downloadedSize > this.metaInfo.size ? (this.warn("Invalid download size, overflowed"), this.ee.emit("error", new Wc("Invalid download size", ng))) : (this.downloadedSize = n, void 0 !== this.timer && 0 !== e && (clearTimeout(this.timer), this.timer = void 0), void 0 === this.timer && this.successCount !== this.chunkCount && (this.timer = setTimeout((function() { t.ee.emit("timedOut"), t.abortController.abort() }), 12e4)), this.initialized && 0 === e || void 0 === this.transHandler.onOperationProgress || this.transHandler.onOperationProgress({ totalSize: this.metaInfo.size, currentSize: this.downloadedSize }))
                }
            }, {
                key: "getPayload",
                value: function() {
                    for (var e = 0, t = 0, n = this.chunks; t < n.length; t++) e += n[t].byteLength;
                    if (e !== this.metaInfo.size) throw new Ja("invalid chunks total size");
                    e = new Uint8Array(e), n = t = 0;
                    for (var r = this.chunks; n < r.length; n++) {
                        var i = r[n];
                        e.set(new Uint8Array(i), t), t += i.byteLength
                    }
                    return t = Array.from(e.subarray(0, 4)).map((function(e) { return e.toString(16) })).join("").toUpperCase(), ju(e.buffer, oD(t))
                }
            }, { key: "getDownloadUrl", value: function(e) { var t = this.metaInfo.useNewDomain ? "sd-rtn.com" : "agora.io"; return "https://".concat(Eg(e).split(".").join("-"), ".edge.").concat(t, ":9601/api/v1/chuck/download") } }, {
                key: "serversDownload",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r = this,
                            i = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = 1 < i.length && void 0 !== i[1] && i[1], e.next = 3, Promise.all(Array.from(t.entries()).map((function(e) { return e = sa(e, 2), r.postDownloadRequest(e[0], Array.from(e[1]), n).catch((function(e) { 404 === e.statusCode ? (r.ee.emit("notExist"), r.abortController.abort()) : "AbortError" !== e.name && (Ta(e) ? r.singleThread ? (r.abortController.abort(), r.ee.emit("timedOut")) : (r.warn("%d download timed out after %d, retrying use single thread", e.index, r.singleThread ? 6e4 : 3e4), r.abortController.abort(), r.singleThread = !0, r.ee.emit("multiTimeOut")) : (r.ee.emit("error", e), r.abortController.abort())) })) })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "postDownloadRequest",
                value: function() {
                    var e = K(u.mark((function e(t, n, r) {
                        var i, o, a, s, c, l, f, h, p, d = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (p = function() {
                                            return (p = K(u.mark((function e(o) {
                                                var a, p, d, v, b, g, y, m, E;
                                                return u.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (e.prev = 0, void 0 !== o || 0 !== t) { e.next = 5; break }
                                                            throw new Ja("Invalid serverIp");
                                                        case 5:
                                                            a = void 0 === o ? f.getDownloadUrl(t) : o;
                                                        case 6:
                                                            return f.downloadingChunks.add(i), e.next = 9, l(a);
                                                        case 9:
                                                            return p = e.sent, d = p.responseData, f.downloadingChunks.delete(i), e.abrupt("return", d);
                                                        case 15:
                                                            if (e.prev = 15, e.t0 = e.catch(0), f.downloadingChunks.delete(i), n.unshift(i), f.metaInfo.useNewDomain = !1, "AbortError" !== e.t0.name) { e.next = 22; break }
                                                            throw e.t0;
                                                        case 22:
                                                            if (!Ta(e.t0)) { e.next = 25; break }
                                                            throw e.t0.index = i, e.t0;
                                                        case 25:
                                                            if (v = s, s += 1, !(2 > v)) { e.next = 30; break }
                                                            return e.t0 instanceof Ja || f.warn("%o, %d download failed, retrying", e.t0, i), e.abrupt("return", h());
                                                        case 30:
                                                            if (504 !== e.t0.statusCode) { e.next = 34; break }
                                                            throw (b = new eb("download server timed out", { originalError: e.t0, serverCode: 504 })).index = i, b;
                                                        case 34:
                                                            if (!r || 2 !== v || 0 === c[0]) { e.next = 45; break }
                                                            return e.t0 instanceof Ja || f.warn("%d download failed, using backup: %d, %o", i, c[0], e.t0), e.next = 38, f.busyBackupServers.get(c[0]);
                                                        case 38:
                                                            return g = h(f.getDownloadUrl(c[0])), f.busyBackupServers.set(c[0], g), e.next = 42, g;
                                                        case 42:
                                                            return y = e.sent, f.busyBackupServers.delete(c[0]), e.abrupt("return", y);
                                                        case 45:
                                                            if (!(r && 2 < v && void 0 !== c[1] && 0 !== c[1])) { e.next = 56; break }
                                                            return f.warn("%d download failed, using backup 1: %d", i, c[1]), e.next = 49, f.busyBackupServers.get(c[1]);
                                                        case 49:
                                                            return m = h(f.getDownloadUrl(c[1])), f.busyBackupServers.set(c[1], m), e.next = 53, m;
                                                        case 53:
                                                            return E = e.sent, f.busyBackupServers.delete(c[1]), e.abrupt("return", E);
                                                        case 56:
                                                            throw e.t0.index = i, e.t0;
                                                        case 58:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e, null, [
                                                    [0, 15]
                                                ])
                                            })))).apply(this, arguments)
                                        }, h = function(e) { return p.apply(this, arguments) }, !this.aborted) { e.next = 4; break }
                                    throw new Ja("download already aborted");
                                case 4:
                                    if (void 0 !== (i = n.shift())) { e.next = 8; break }
                                    return this.log("%s download finished", t), e.abrupt("return");
                                case 8:
                                    if (!(this.singleThread && 0 < this.downloadingChunks.size)) { e.next = 10; break }
                                    return e.abrupt("return");
                                case 10:
                                    if (!this.downloadingChunks.has(i)) { e.next = 13; break }
                                    return this.log("%s already downloading, return", i), e.abrupt("return");
                                case 13:
                                    if (void 0 === this.chunks[i]) { e.next = 19; break }
                                    return this.successCount === this.chunkCount && (this.log("chunks all download"), this.ee.emit("finished")), this.log("%s already downloaded, do next", i), e.next = 18, this.postDownloadRequest(t, n, r);
                                case 18:
                                    return e.abrupt("return");
                                case 19:
                                    return o = new FormData, a = { hash: su(this.metaInfo.hashHexStr), unit: void 0 === this.retUnit ? this.metaInfo.unit : this.retUnit, instance: this.metaInfo.instance, loginOpt: this.metaInfo.loginOpt, ticket: this.metaInfo.ticket, index: i }, o.append("parameter", JSON.stringify(a)), s = 0, c = Array.from(this.indexToBackupServers[i]), l = function(e) { return ve(e, { body: o, signal: d.abortController.signal, timeout: d.singleThread ? 12e4 : 3e4 }, { useBinaryResponse: !0 }) }, f = this, e.next = 28, h().then((function(e) { return void 0 !== d.chunks[i] ? d.log("chunk %d download duplicated", i) : (d.chunks[i] = e, d.log("chunk %d downloaded", i), d.successCount += 1, d.updateProgress(d.chunks[i].byteLength)), d.successCount === d.chunkCount && (d.log("chunks all download"), d.ee.emit("finished")), d.singleThread ? (d.downloadChunks(), Promise.resolve()) : d.postDownloadRequest(t, n, r) }));
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }()
            }]), t
        }(ub()),
        ls = function(e) {
            function t(e, i, o, a) { Y(this, t); var s = r.call(this, o, "ChunkUploadManager"); if (m(n(s), "chunkCount", 0), m(n(s), "chunks", []), m(n(s), "uploadedChunks", []), m(n(s), "totalFailures", 0), m(n(s), "timer", void 0), m(n(s), "initState", "uninitialized"), m(n(s), "ee", void 0), m(n(s), "unit", 0), m(n(s), "uploadedSize", 0), m(n(s), "singleThread", !1), m(n(s), "abortController", new AbortController), m(n(s), "servers", []), m(n(s), "aborted", !1), m(n(s), "metaInfo", void 0), m(n(s), "transHandler", void 0), s.metaInfo = e, s.transHandler = i, s.ee = void 0 === a ? new fa : a, 0 === e.file.length) throw new I("file not found or is empty", yf); return void 0 !== i.cancelSignal && i.cancelSignal.addEventListener("abort", (function() { s.abortController.abort() }), { once: !0 }), s.abortController.signal.addEventListener("abort", (function() { s.aborted = !0 }), { once: !0 }), s }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{
                key: "initChunks",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("initialized" !== this.initState && "initializing" !== this.initState) { e.next = 2; break }
                                    throw new Ja("cannot re-initialize");
                                case 2:
                                    for (this.initState = "initializing", this.unit = t, n = this.sliceFile(t, this.metaInfo.file), this.chunkCount = n.length, r = [], i = function(e, t) {
                                            var n = (e = sa(t[e], 2))[0],
                                                i = e[1];
                                            e = is(i).then((function(e) { s.chunks[n] = { payload: i, sha1: e, uploadedTo: void 0, index: n, processed: !1 } })), r.push(e)
                                        }, o = 0, a = Array.from(n.entries()); o < a.length; o++) i(o, a);
                                    return e.next = 11, Promise.all(r);
                                case 11:
                                    this.updateProgress(0), this.initState = "initialized", this.log("upload chunks initialized");
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "uploadToServers",
                value: function() {
                    var e = this;
                    if (!this.aborted) {
                        for (var t = this.chunks.filter((function(e) { return !e.processed })), n = function(n) {
                                var r = t[n],
                                    i = e.servers.filter((function(e) { return !e.isUploading })).sort((function(e, t) { return e.successCount - t.successCount })).sort((function(e, t) { return e.failureCount - t.failureCount }))[0];
                                if (void 0 === i || 1 < i.failureCount) return e.log("Upload server not available, waiting"), e.ee.emit("serverUsedUp"), Vm(1e3).then((function() { e.totalFailures > 2 * e.chunkCount && e.ee.emit("error"), e.totalFailures += 1, void 0 !== i && (i.failureCount = 0), e.uploadToServers() })).catch((function() {})), "break";
                                r.processed = !0, i.isUploading = !0, e.log("uploading chunk %d to server %s", r.index, Eg(i.ip));
                                var o = e.getUploadUrl(i.ip);
                                return K(u.mark((function t() {
                                    var n;
                                    return u.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, e.postChunk(r.payload, o, r.index);
                                            case 3:
                                                n = e.chunks.findIndex((function(e) { return e === r })), r.uploadedTo = i.ip, e.chunks.splice(n, 1), e.uploadedChunks.push(r), i.successCount += 1, i.isUploading = !1, e.updateProgress(r.payload.byteLength), e.log("upload chunk %d successfully", r.index), t.next = 31;
                                                break;
                                            case 13:
                                                if (t.prev = 13, t.t0 = t.catch(0), i.isUploading = !1, r.processed = !1, 504 !== t.t0.statusCode && !Ta(t.t0)) { t.next = 27; break }
                                                if (e.singleThread) { t.next = 24; break }
                                                return e.warn("%d upload timed out after %d, retrying use single thread", r.index, e.singleThread ? 12e4 : 3e4), e.abortController.abort(), e.singleThread = !0, e.ee.emit("multiTimeOut"), t.abrupt("return");
                                            case 24:
                                                return e.ee.emit("timedOut"), e.abortController.abort(), t.abrupt("return");
                                            case 27:
                                                return e.metaInfo.useNewDomain = !1, i.failureCount += 1, t.next = 31, Vm(1e3);
                                            case 31:
                                                e.uploadedChunks.length === e.chunkCount ? (e.log("chunks uploaded"), e.ee.emit("finished")) : (e.singleThread || 1 === e.chunks.filter((function(e) { return !e.processed })).length) && e.uploadToServers();
                                            case 32:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 13]
                                    ])
                                })))(), e.singleThread ? "break" : void 0
                            }, r = 0; r < t.length && "break" !== n(r); r++);
                        0 === t.length && this.uploadedChunks.length !== this.chunkCount && this.log("%d chunks left uploading", this.chunkCount - this.uploadedChunks.length)
                    }
                }
            }, {
                key: "getUploadServerIPs",
                value: function() {
                    var e = !0,
                        t = [],
                        n = H(this.uploadedChunks).sort((function(e, t) { return e.index - t.index })),
                        r = 0;
                    for (n = Array.from(n.values()); r < n.length; r++) {
                        var i = n[r].uploadedTo;
                        if (void 0 === i) { e = !1; break }
                        t.push(i)
                    }
                    if (!e) throw new Ja("some chunks not uploaded, cannot get upload server ips");
                    return t
                }
            }, {
                key: "addServers",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) { var n = t.servers.findIndex((function(t) { return t.ip === e })); - 1 !== n ? t.servers[n].failureCount = 0 : (t.log("server %s added", Eg(e)), t.servers.push({ successCount: 0, isUploading: !1, ip: e, failureCount: 0 })) }))
                }
            }, {
                key: "updateProgress",
                value: function(e) {
                    var t = this,
                        n = void 0 !== e ? this.uploadedSize + e : this.metaInfo.file.length;
                    n > this.metaInfo.file.length ? (this.warn("Invalid upload size, overflowed"), this.ee.emit("error", new Wc("Invalid upload size", mg))) : (this.uploadedSize = n, void 0 !== this.timer && 0 !== e && (clearTimeout(this.timer), this.timer = void 0), void 0 === this.timer && void 0 !== e && this.uploadedChunks.length !== this.chunkCount && (this.timer = setTimeout((function() { t.ee.emit("timedOut"), t.abortController.abort() }), 12e4)), "initialized" === this.initState && 0 === e || void 0 === this.transHandler.onOperationProgress || this.transHandler.onOperationProgress({ totalSize: this.metaInfo.file.length, currentSize: this.uploadedSize }))
                }
            }, {
                key: "sliceFile",
                value: function(e, t) {
                    var n = 0,
                        r = [],
                        i = t.length;
                    for (e *= 32768; n < i;) r.push(t.slice(n, n + e)), n += e;
                    return this.log("chunks split into %d", r.length), r
                }
            }, {
                key: "postChunk",
                value: function() {
                    var e = K(u.mark((function e(t, n, r) {
                        var i, o, a, s, c, l, f, h;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.aborted) { e.next = 2; break }
                                    throw new Ja("upload already aborted");
                                case 2:
                                    if (void 0 !== this.unit) { e.next = 4; break }
                                    throw new Ja("unit is undefined");
                                case 4:
                                    return i = this.metaInfo, o = i.ticket, a = i.instance, s = i.loginOpt, c = i.hashStr, e.t0 = r, e.t1 = c, e.next = 9, is(t);
                                case 9:
                                    return e.t2 = e.sent, e.t3 = this.unit, e.t4 = o, e.t5 = a, e.t6 = s, l = { index: e.t0, hash: e.t1, sha1: e.t2, unit: e.t3, ticket: e.t4, instance: e.t5, loginOpt: e.t6 }, (f = new FormData).append("parameter", JSON.stringify(l)), f.append("payload", new Blob([t])), e.next = 20, ve(n, { headers: { Accept: "application/json" }, body: f, timeout: this.singleThread ? 12e4 : 3e4, signal: this.abortController.signal });
                                case 20:
                                    if (h = e.sent, 201 === h.status) { e.next = 24; break }
                                    throw new da("uploading chunk ".concat(r, " failed"));
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n, r) { return e.apply(this, arguments) }
                }()
            }, { key: "getUploadUrl", value: function(e) { var t = this.metaInfo.useNewDomain ? "sd-rtn.com" : "agora.io"; return "https://".concat(Eg(e).split(".").join("-"), ".edge.").concat(t, ":9601/api/v1/chuck/upload") } }]), t
        }(ub()),
        ms = function(e) {
            function t(e) {
                Y(this, t);
                var i = r.call(this, e, "MediaTaskManager");
                return m(n(i), "isProcessing", !1), m(n(i), "authInfo", void 0), m(n(i), "taskFinishers", {}), m(n(i), "mediaTasks", new Map), m(n(i), "ongoingTask", void 0), i.on("connectionStateChanged", (function(e) {
                    if (e === T.ConnectionState.ABORTED || e === T.ConnectionState.DISCONNECTED) {
                        void 0 !== i.ongoingTask && i.cancelTask(i.ongoingTask), e = 0;
                        for (var t = Array.from(i.mediaTasks.entries()); e < t.length; e++) {
                            var n = sa(t[e], 2)[1];
                            i.cancelTask(n)
                        }
                        i.mediaTasks.clear(), i.taskFinishers = {}
                    } else e === T.ConnectionState.RECONNECTING ? void 0 !== i.ongoingTask && i.ongoingTask.manager.abortController.abort() : e === T.ConnectionState.CONNECTED && void 0 !== i.ongoingTask && i.ongoingTask.manager.ee.emit("reconnected")
                })), i
            }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{ key: "setAuthInfo", value: function(e) { this.authInfo = e } }, { key: "waitMediaTask", value: function(e) { var t = this; return new Promise((function(n, r) { t.taskFinishers[e] = { resolve: n, reject: r }, t.isProcessing || t.processMediaTask() })).finally((function() { void 0 !== t.ongoingTask && void 0 !== t.ongoingTask.manager.timer && clearTimeout(t.ongoingTask.manager.timer), delete t.taskFinishers[e], 0 !== t.mediaTasks.size ? t.processMediaTask() : t.isProcessing = !1 })) } }, { key: "addUploadTask", value: function(e, n, r, i) { var o = e.file; if (e = e.hash, void 0 === this.authInfo) throw new Ja("session not found"); if (this.mediaTasks.size >= t.MAX_PENDING_TASK_COUNT - 1) throw new jb("Upload media failed, exceed max pending jobs", JA); return i = new ls({ hashStr: hs(e), file: o, ticket: this.authInfo.ticket, instance: this.authInfo.instance.toString(), loginOpt: this.authInfo.loginOpt.toString(), useNewDomain: this.authInfo.useNewDomain }, i, this.logger), o = Ud(), this.mediaTasks.set(o, { type: "UPLOAD", manager: i, hash: e, setter: r, fetcher: n, taskId: o }), o } }, {
                key: "addDownloadTask",
                value: function(e, n, r) {
                    var i = e.hashHexStr,
                        o = e.size,
                        a = e.unit;
                    if (e = e.zone, void 0 === this.authInfo) throw new Ja("session not found");
                    if (this.mediaTasks.size >= t.MAX_PENDING_TASK_COUNT - 1) throw new jb("Download media failed, exceed max pending jobs", NA);
                    return r = new ks({ hashHexStr: i, ticket: this.authInfo.ticket, useNewDomain: this.authInfo.useNewDomain, instance: this.authInfo.instance.toString(), loginOpt: this.authInfo.loginOpt.toString(), size: o, zone: e, unit: a }, r, this.logger), i = Ud(), this.mediaTasks.set(i, { type: "DOWNLOAD", manager: r, fetcher: n, taskId: i }), i
                }
            }, {
                key: "doDownloadTaskImpl",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a, s, c, l, f, h = this,
                            p = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = 2 < p.length && void 0 !== p[2] && p[2], o = i = t.manager, r && (i = new ks(o.metaInfo, o.transHandler, this.logger, o.ee)), a = t.fetcher, e.next = 7, a();
                                case 7:
                                    if (s = e.sent, c = s.serverList, l = s.backupList, f = s.unit, !r || f === o.retUnit) { e.next = 13; break }
                                    throw new da("download unit is different, reject to continue", ng);
                                case 13:
                                    r && (t.manager = i, i.downloadedSize = o.downloadedSize, i.successCount = o.successCount, i.timer = o.timer, i.chunks = o.chunks, i.initialized = o.initialized, i.singleThread = o.singleThread, i.updateProgress(0)), i.ee.once("reconnected", (function() { i.ee.removeAllListeners(), h.doDownloadTaskImpl(t, n, !0).catch((function(e) { n.reject(e) })) })), i.ee.once("multiTimeOut", (function() { i.ee.removeAllListeners(), h.doDownloadTaskImpl(t, n, !0).catch((function(e) { n.reject(e) })) })), i.ee.once("error", (function(e) { i.ee.removeAllListeners(), n.reject(new da(["download file file, index %d", e.index], { code: ng, originalError: e })) })), i.ee.once("notExist", (function() { i.abortController.abort(), i.ee.removeAllListeners(), n.reject(new da("download file not found", MA)) })), i.ee.once("timedOut", (function() { i.ee.removeAllListeners(), i.abortController.abort(), n.reject(new eb("download timed out", LA)) })), void 0 !== i.transHandler.cancelSignal && i.transHandler.cancelSignal.addEventListener("abort", (function() { n.reject(new jl("Downloading canceled", pr)) }), { once: !0 }), i.ee.once("finished", (function() { n.resolve({ type: "DOWNLOAD", payload: i.getPayload() }) })), i.setInfoByResponse({ serverList: c, backupList: l, unit: f }), i.downloadChunks();
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, {
                key: "doDownloadTask",
                value: function(e, t) {
                    var n = this,
                        r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        i = e.taskId;
                    return r || (this.mediaTasks.delete(i), this.ongoingTask = e), new Promise((function(i, o) { n.doDownloadTaskImpl(e, t, r).then(i).catch(o) }))
                }
            }, {
                key: "doUploadTaskImpl",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a, s, c, l, f, h, p = this,
                            d = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = 2 < d.length && void 0 !== d[2] && d[2], o = i = t.manager, r && (i = new ls(o.metaInfo, o.transHandler, this.logger, o.ee)), a = t.fetcher, s = new Qa, l = new Promise((function(e, l) {
                                        var f = a(),
                                            h = f.ret,
                                            p = f.err,
                                            d = f.timeout;
                                        f.fin.pipe(pb(s)).subscribe({ next: function(e) { n.resolve({ type: "UPLOAD", retUnit: e.unit, zone: e.zone }) }, complete: function() { e({ hasExist: !0 }), s.next(), s.complete() } }), h.pipe(pb(s), db(function() {
                                            var e = K(u.mark((function e(a) {
                                                var s, l;
                                                return u.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            if (s = a.servers, l = a.unit, r && o.unit !== l ? n.reject(new da("upload unit is different, reject to continue", mg)) : r && (t.manager = i, i.chunkCount = o.chunkCount, i.chunks = o.chunks, i.totalFailures = o.totalFailures, i.uploadedChunks = o.uploadedChunks, i.timer = o.timer, i.initState = o.initState, i.unit = o.unit, i.uploadedSize = o.uploadedSize, i.singleThread = o.singleThread, i.updateProgress(0)), i.addServers(s), "uninitialized" !== i.initState) { e.next = 7; break }
                                                            return c = i.initChunks(l), e.next = 7, c;
                                                        case 7:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) { return e.apply(this, arguments) }
                                        }())).subscribe({ complete: function() { return e({ hasExist: !1 }) }, error: l }), f = function(t) { "uninitialized" !== i.initState && c ? e(c.then((function() { return { hasExist: !1 } }))) : l(t) }, p.pipe(pb(s)).subscribe({ error: f }), d.pipe(pb(s)).subscribe({ error: f })
                                    })), e.next = 9, l;
                                case 9:
                                    if (f = e.sent, !f.hasExist) { e.next = 15; break }
                                    return i.updateProgress(), this.log("file already exists, skipping upload"), e.abrupt("return");
                                case 15:
                                    s.next(), s.complete(), this.log("chunks initialization promise resolved"), h = hb(i.ee, "serverUsedUp").pipe(Qt((function() { return i.chunkCount !== i.uploadedChunks.length })), Tt(5e3, void 0, { leading: !1 }), wm((function() { return a().ret }))).subscribe((function(e) { i.addServers(e.servers) })), i.ee.once("reconnected", (function() { i.ee.removeAllListeners(), p.doUploadTask(t, n, !0).catch((function(e) { n.reject(e) })) })), i.ee.once("multiTimeOut", (function() { i.ee.removeAllListeners(), p.doUploadTask(t, n, !0).catch((function(e) { n.reject(e) })) })), i.ee.once("timedOut", (function() { h.unsubscribe(), i.ee.removeAllListeners(), i.abortController.abort(), n.reject(new eb("upload timed out", Nh)) })), i.ee.once("error", (function(e) { h.unsubscribe(), i.ee.removeAllListeners(), i.abortController.abort(), n.reject(e || new da("upload error", mg)) })), void 0 !== i.transHandler.cancelSignal && i.transHandler.cancelSignal.addEventListener("abort", (function() { n.reject(new jl("Uploading canceled", or)) }), { once: !0 }), i.ee.once("finished", K(u.mark((function e() {
                                        var r, o, a;
                                        return u.wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return h.unsubscribe(), e.next = 3, t.setter(i.unit, i.getUploadServerIPs());
                                                case 3:
                                                    r = e.sent, o = r.zone, a = r.unit, i.ee.removeAllListeners(), n.resolve({ type: "UPLOAD", retUnit: a, zone: o });
                                                case 8:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))), i.uploadToServers();
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, {
                key: "doUploadTask",
                value: function(e, t) {
                    var n = this,
                        r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        i = e.taskId;
                    return r || (this.mediaTasks.delete(i), this.ongoingTask = e), new Promise((function(i, o) { n.doUploadTaskImpl(e, t, r).then(i).catch(o) }))
                }
            }, {
                key: "processMediaTask",
                value: function() {
                    var e = K(u.mark((function e() {
                        var t, n, r;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== this.mediaTasks.size) { e.next = 2; break }
                                    throw Error("no upload tasks");
                                case 2:
                                    if (this.isProcessing = !0, t = this.mediaTasks.keys().next().value, void 0 !== (n = this.taskFinishers[t])) { e.next = 7; break }
                                    throw Error("top task not found");
                                case 7:
                                    if (void 0 !== (r = this.mediaTasks.get(t))) { e.next = 10; break }
                                    throw new Ja("task invalid");
                                case 10:
                                    if ("UPLOAD" !== r.type) { e.next = 15; break }
                                    return e.next = 13, this.doUploadTask(r, n).catch((function(e) { r.manager.ee.removeAllListeners(), n.reject(e) }));
                                case 13:
                                    e.next = 18;
                                    break;
                                case 15:
                                    if ("DOWNLOAD" !== r.type) { e.next = 18; break }
                                    return e.next = 18, this.doDownloadTask(r, n).catch((function(e) { r.manager.ee.removeAllListeners(), n.reject(e) }));
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function() { return e.apply(this, arguments) }
                }()
            }, {
                key: "cancelTask",
                value: function(e) {
                    var t = "DOWNLOAD" === e.type ? pr : or;
                    e.manager.ee.removeAllListeners(), e.manager.abortController.abort(), void 0 !== this.taskFinishers[e.taskId] && this.taskFinishers[e.taskId].reject(new jl("User logged out or kicked off, media task canceled", t))
                }
            }]), t
        }(ub());
    m(ms, "MAX_PENDING_TASK_COUNT", 9), Wo("of", (function() { for (var e = 0, t = arguments.length, n = new(Oe(this))(t); t > e;) n[e] = arguments[e++]; return n }), Ij);
    var ns = 1 / 0,
        pD = Math.max,
        uu = function(e, t, n) {
            var r = Object(e);
            if (!Ed(e)) {
                var i = Ue(t);
                e = Ad(e), t = function(e) { return i(r[e], e, r) }
            }
            return -1 < (t = function(e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                if (null == n) n = 0;
                else {
                    var i = (n = n ? (n = il(n)) === ns || n === -ns ? 17976931348623157e292 * (0 > n ? -1 : 1) : n == n ? n : 0 : 0 === n ? n : 0) % 1;
                    n = n == n ? i ? n - i : n : 0
                }
                return 0 > n && (n = pD(r + n, 0)), dq(e, Ue(t), n)
            }(e, t, n)) ? r[i ? e[t] : t] : void 0
        },
        tu = function(e, t) { return e && e.length ? xk(e, void 0, "function" == typeof t ? t : void 0) : [] },
        os = function() {
            function e() { Y(this, e), m(this, "size", 0), m(this, "fields", new Map) }
            return Ia(e, [{
                key: "define",
                value: function(e, t, n) {
                    if (this.size += n, 64 < this.size) throw new RangeError("the struct over 64 bits is not supported");
                    Ng(t = { val: 0, isNumber: "number" === t, isBoolean: "boolean" === t, oneof: "number" === t || "boolean" === t ? void 0 : t, len: n }), this.fields.set(e, t)
                }
            }, {
                key: "set",
                value: function(e, t) {
                    if (!(e = this.fields.get(e))) throw Error("field not found");
                    var n = e.oneof;
                    if (!V.isLong(t) && "number" != typeof t)
                        if ("boolean" == typeof t) t = t ? 1 : 0;
                        else { if (void 0 === n) throw Error("invalid field type"); if (void 0 === (t = n[t])) throw Error("field type not found") }
                    Ng(e, t), e.val = t
                }
            }, {
                key: "toNumber",
                value: function() {
                    for (var e = 0, t = 0, n = 0, r = Array.from(this.fields); n < r.length; n++) {
                        var i = sa(r[n], 2)[1],
                            o = i.len;
                        void 0 !== (i = i.val) && (e += V.fromValue(i).shiftLeft(t).toNumber(), t += o)
                    }
                    return e
                }
            }, {
                key: "toLong",
                value: function() {
                    for (var e = V.fromNumber(0, !0), t = 0, n = 0, r = Array.from(this.fields); n < r.length; n++) {
                        var i = sa(r[n], 2)[1],
                            o = i.len;
                        void 0 !== (i = i.val) && (e = V.fromValue(i).shiftLeft(t).add(e), t += o)
                    }
                    return e
                }
            }, {
                key: "assert",
                value: function(e, t) {
                    function n(e) {
                        if (!V.isLong(e) && "number" != typeof e)
                            if ("boolean" == typeof e) e = e ? 1 : 0;
                            else { if (void 0 === i) throw Error("invalid field type"); if (void 0 === (e = i[e])) throw Error("field type not found") }
                        return Ng(r, e), Mg(e, r.val)
                    }
                    var r = this.fields.get(e);
                    if (!r) throw Error("field not found");
                    var i = r.oneof;
                    if (!Array.isArray(t)) return n(t);
                    if (1 === t.length) return n(t[0]);
                    if (t.every((function(e) { return "string" == typeof e })) && void 0 !== i) return t.some((function(e) { return n(e) }));
                    throw Error("invalid valueTypes")
                }
            }, {
                key: "from",
                value: function(e) {
                    e = V.fromValue(e);
                    for (var t = 0, n = 0, r = Array.from(this.fields); n < r.length; n++) {
                        var i = sa(r[n], 2)[1],
                            o = i.len,
                            a = V.fromNumber(Math.pow(2, o) - 1, !0).shiftLeft(t);
                        Ng(i, a = e.and(a).shiftRightUnsigned(t)), i.val = a, t += o
                    }
                }
            }, {
                key: "typeOf",
                value: function(e) {
                    if (void 0 !== (e = this.fields.get(e))) {
                        var t = e.oneof;
                        if (e = e.val, void 0 !== t) {
                            var n = 0;
                            for (t = Object.entries(t); n < t.length; n++) {
                                var r = sa(t[n], 2),
                                    i = r[0];
                                if (Mg(e, r[1])) return i
                            }
                        }
                    }
                    throw new TypeError("can only get type of oneof type")
                }
            }]), e
        }(),
        ps = function(e) {
            function t(e) { Y(this, t); var r = n.call(this); return r.define("Rejoin", "boolean", 1), r.define("Unused", "number", 31), r.define("Platform", "number", 8), r.define("Version", "number", 12), r.define("Subversion", "number", 12), r.set("Platform", 7), r.set("Version", 4), r.set("Subversion", 14), r.set("Rejoin", e), r }
            ma(t, e);
            var n = na(t);
            return t
        }(os),
        qD = va(va(va(va({}, { PeerTextMessage: 0, ChannelTextMessage: 1, VendorTextMessage: 2 }), { PeerRawMessage: 3, ChannelRawMessage: 4, VendorRawMessage: 5 }), { PeerImageMessage: 6, ChannelImageMessage: 7, VendorImageMessage: 8 }), { PeerFileMessage: 15, ChannelFileMessage: 16, VendorFileMessage: 17 }),
        qs = { CallInvite: 101, CallAccept: 102, CallReject: 103, CallCancel: 104 },
        rD = va(va({}, qD), qs),
        sD = { Uncompressed: 0, Zlib: 1 },
        ae = function(e) {
            function t(e) {
                Y(this, t);
                var r = n.call(this);
                if (r.define("MessageType", rD, 8), r.define("BroadcastJumps", "number", 2), r.define("ToCache", "boolean", 1), r.define("FromCache", "boolean", 1), r.define("CompressionMethod", sD, 2), r.define("IterationNumber", "number", 4), r.define("BufferedMessage", "boolean", 1), r.define("ToArchive", "boolean", 1), r.define("FromArchive", "boolean", 1), "number" == typeof e || V.isLong(e)) r.from(e);
                else if (void 0 !== e) {
                    var i = 0;
                    for (e = Ig(e); i < e.length; i++) {
                        var o = sa(e[i], 2);
                        r.set(o[0], o[1])
                    }
                }
                return r
            }
            ma(t, e);
            var n = na(t);
            return Ia(t, [{ key: "isTextMessage", value: function() { return this.assert("MessageType", ["PeerTextMessage", "ChannelTextMessage", "VendorTextMessage"]) } }, { key: "isRawMessage", value: function() { return this.assert("MessageType", ["ChannelRawMessage", "PeerRawMessage", "VendorRawMessage"]) } }, { key: "isRawPeerMessage", value: function() { return this.assert("MessageType", "PeerRawMessage") } }, { key: "isRawChannelMessage", value: function() { return this.assert("MessageType", "ChannelRawMessage") } }, { key: "isPeerTextMessage", value: function() { return this.assert("MessageType", "PeerTextMessage") } }, { key: "isChannelTextMessage", value: function() { return this.assert("MessageType", "ChannelTextMessage") } }, { key: "isInvitation", value: function(e) { var t = this; return void 0 !== e ? this.assert("MessageType", e) : zf(qs).some((function(e) { return t.assert("MessageType", e) })) } }, { key: "isFileMessage", value: function() { return this.assert("MessageType", ["PeerFileMessage", "ChannelFileMessage", "VendorFileMessage"]) } }, { key: "isImageMessage", value: function() { return this.assert("MessageType", ["PeerImageMessage", "ChannelImageMessage", "VendorImageMessage"]) } }, { key: "isPeerMessage", value: function() { return this.assert("MessageType", ["PeerFileMessage", "PeerTextMessage", "PeerImageMessage", "PeerRawMessage"]) } }, { key: "isZlibCompressed", value: function() { return this.assert("CompressionMethod", "Zlib") } }, { key: "isFromCache", value: function() { return this.assert("FromCache", !0) } }, { key: "isBufferedMessage", value: function() { return this.assert("BufferedMessage", !0) } }, { key: "getInvitationType", value: function() { if (!this.isInvitation()) throw new TypeError("cannot get InvitationType of a normal message type"); return this.typeOf("MessageType") } }]), t
        }(os),
        tD = function(e) {
            function t(e) { return Y(this, t), m(n(e = r.call(this, e, "ChatManager")), "dialogueLru", new cy(void 0, { maxlen: 1e4, ttl: 1e4 })), e }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{
                key: "getChatInfo",
                value: function(e) {
                    var t = this.dialogueLru.get(e);
                    if (this.dialogueLru.prune(), t) {
                        var n = t.dialogue,
                            r = { dialogue: n, sequence: t = t.sequence.add(1) };
                        return this.dialogueLru.set(e, { dialogue: n, sequence: t }), r
                    }
                    return n = { dialogue: Cg(), sequence: V.fromNumber(1, !0) }, this.dialogueLru.set(e, n), n
                }
            }]), t
        }(ub()),
        v = {};
    "object" == ("undefined" == typeof module ? "undefined" : X(module)) && (module.exports = v), v.parse = function(e, t) {
            var n, r = v.bin.readUshort,
                i = v.bin.readUint,
                o = {};
            for (n = (e = new Uint8Array(e)).length - 4; 101010256 != i(e, n);) n--;
            var a = r(e, n = n + 4 + 4);
            r(e, n += 2), i(e, n += 2), n = i(e, n += 4);
            for (var s = 0; s < a; s++) {
                i(e, n), n += 4, n += 4, n += 4, i(e, n += 4);
                var u = i(e, n += 4),
                    c = i(e, n += 4),
                    l = r(e, n += 4),
                    f = r(e, n + 2),
                    h = r(e, n + 4);
                n += 6;
                var p = i(e, n += 8);
                n += 4, n += l + f + h, v._readLocal(e, p, o, u, c, t)
            }
            return o
        }, v._readLocal = function(e, t, n, r, i, o) {
            var a = v.bin.readUshort,
                s = v.bin.readUint;
            s(e, t), a(e, t += 4), a(e, t += 2);
            var u = a(e, t += 2);
            s(e, t += 2), s(e, t += 4), s = a(e, t = t + 4 + 8);
            var c = a(e, t += 2);
            if (t += 2, a = v.bin.readUTF8(e, t, s), t = t + s + c, o) n[a] = { size: i, csize: r };
            else if (e = new Uint8Array(e.buffer, t), 0 == u) n[a] = new Uint8Array(e.buffer.slice(t, t + r));
            else {
                if (8 != u) throw "unknown compression method: " + u;
                t = new Uint8Array(i), v.inflateRaw(e, t), n[a] = t
            }
        }, v.inflateRaw = function(e, t) { return v.F.inflate(e, t) }, v.inflate = function(e, t) { return e[0], e[1], v.inflateRaw(new Uint8Array(e.buffer, e.byteOffset + 2, e.length - 2), t) }, v.deflate = function(e, t) {
            null == t && (t = { level: 6 });
            var n = 0,
                r = new Uint8Array(50 + Math.floor(1.1 * e.length));
            return r[n] = 120, r[n + 1] = 156, n = v.F.deflateRaw(e, r, n + 2, t.level), e = v.adler(e, 0, e.length), r[n + 0] = e >>> 24 & 255, r[n + 1] = e >>> 16 & 255, r[n + 2] = e >>> 8 & 255, r[n + 3] = e >>> 0 & 255, new Uint8Array(r.buffer, 0, n + 4)
        }, v.deflateRaw = function(e, t) {
            null == t && (t = { level: 6 });
            var n = new Uint8Array(50 + Math.floor(1.1 * e.length)),
                r = v.F.deflateRaw(e, n, r, t.level);
            return new Uint8Array(n.buffer, 0, r)
        }, v.encode = function(e, t) {
            null == t && (t = !1);
            var n, r = 0,
                i = v.bin.writeUint,
                o = v.bin.writeUshort,
                a = {};
            for (n in e) {
                var s = !v._noNeed(n) && !t,
                    u = e[n],
                    c = v.crc.crc(u, 0, u.length);
                a[n] = { cpr: s, usize: u.length, crc: c, file: s ? v.deflateRaw(u) : u }
            }
            for (n in a) r += a[n].file.length + 30 + 46 + 2 * v.bin.sizeUTF8(n);
            for (n in e = new Uint8Array(r + 22), t = 0, u = [], a) c = a[n], u.push(t), t = v._writeHeader(e, t, n, c, 0);
            for (n in r = 0, s = t, a) c = a[n], u.push(t), t = v._writeHeader(e, t, n, c, 1, u[r++]);
            return a = t - s, i(e, t, 101010256), o(e, t = t + 4 + 4, r), o(e, t += 2, r), i(e, t += 2, a), i(e, t + 4, s), e.buffer
        }, v._noNeed = function(e) { return e = e.split(".").pop().toLowerCase(), -1 != "png,jpg,jpeg,zip".indexOf(e) }, v._writeHeader = function(e, t, n, r, i, o) {
            var a = v.bin.writeUint,
                s = v.bin.writeUshort,
                u = r.file;
            return a(e, t, 0 == i ? 67324752 : 33639248), t += 4, 1 == i && (t += 2), s(e, t, 20), s(e, t += 2, 0), s(e, t += 2, r.cpr ? 8 : 0), a(e, t += 2, 0), a(e, t += 4, r.crc), a(e, t += 4, u.length), a(e, t += 4, r.usize), s(e, t += 4, v.bin.sizeUTF8(n)), s(e, t += 2, 0), t += 2, 1 == i && (a(e, t = t + 2 + 2 + 6, o), t += 4), t += n = v.bin.writeUTF8(e, t, n), 0 == i && (e.set(u, t), t += u.length), t
        }, v.crc = {
            table: function() {
                for (var e = new Uint32Array(256), t = 0; 256 > t; t++) {
                    for (var n = t, r = 0; 8 > r; r++) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                    e[t] = n
                }
                return e
            }(),
            update: function(e, t, n, r) { for (var i = 0; i < r; i++) e = v.crc.table[255 & (e ^ t[n + i])] ^ e >>> 8; return e },
            crc: function(e, t, n) { return 4294967295 ^ v.crc.update(4294967295, e, t, n) }
        }, v.adler = function(e, t, n) {
            var r = 1,
                i = 0,
                o = t;
            for (t += n; o < t;) {
                for (n = Math.min(o + 5552, t); o < n;) i += r += e[o++];
                r %= 65521, i %= 65521
            }
            return i << 16 | r
        }, v.bin = {
            readUshort: function(e, t) { return e[t] | e[t + 1] << 8 },
            writeUshort: function(e, t, n) { e[t] = 255 & n, e[t + 1] = n >> 8 & 255 },
            readUint: function(e, t) { return 16777216 * e[t + 3] + (e[t + 2] << 16 | e[t + 1] << 8 | e[t]) },
            writeUint: function(e, t, n) { e[t] = 255 & n, e[t + 1] = n >> 8 & 255, e[t + 2] = n >> 16 & 255, e[t + 3] = n >> 24 & 255 },
            readASCII: function(e, t, n) { for (var r = "", i = 0; i < n; i++) r += String.fromCharCode(e[t + i]); return r },
            writeASCII: function(e, t, n) { for (var r = 0; r < n.length; r++) e[t + r] = n.charCodeAt(r) },
            pad: function(e) { return 2 > e.length ? "0" + e : e },
            readUTF8: function(e, t, n) { for (var r, i = "", o = 0; o < n; o++) i += "%" + v.bin.pad(e[t + o].toString(16)); try { r = decodeURIComponent(i) } catch (r) { return v.bin.readASCII(e, t, n) } return r },
            writeUTF8: function(e, t, n) {
                for (var r = n.length, i = 0, o = 0; o < r; o++) {
                    var a = n.charCodeAt(o);
                    if (0 == (4294967168 & a)) e[t + i] = a, i++;
                    else if (0 == (4294965248 & a)) e[t + i] = 192 | a >> 6, e[t + i + 1] = 128 | a >> 0 & 63, i += 2;
                    else if (0 == (4294901760 & a)) e[t + i] = 224 | a >> 12, e[t + i + 1] = 128 | a >> 6 & 63, e[t + i + 2] = 128 | a >> 0 & 63, i += 3;
                    else {
                        if (0 != (4292870144 & a)) throw "e";
                        e[t + i] = 240 | a >> 18, e[t + i + 1] = 128 | a >> 12 & 63, e[t + i + 2] = 128 | a >> 6 & 63, e[t + i + 3] = 128 | a >> 0 & 63, i += 4
                    }
                }
                return i
            },
            sizeUTF8: function(e) {
                for (var t = e.length, n = 0, r = 0; r < t; r++) {
                    var i = e.charCodeAt(r);
                    if (0 == (4294967168 & i)) n++;
                    else if (0 == (4294965248 & i)) n += 2;
                    else if (0 == (4294901760 & i)) n += 3;
                    else {
                        if (0 != (4292870144 & i)) throw "e";
                        n += 4
                    }
                }
                return n
            }
        }, v.F = {}, v.F.deflateRaw = function(e, t, n, r) {
            var i = [
                    [0, 0, 0, 0, 0],
                    [4, 4, 8, 4, 0],
                    [4, 5, 16, 8, 0],
                    [4, 6, 16, 16, 0],
                    [4, 10, 16, 32, 0],
                    [8, 16, 32, 32, 0],
                    [8, 16, 128, 128, 0],
                    [8, 32, 128, 256, 0],
                    [32, 128, 258, 1024, 1],
                    [32, 258, 258, 4096, 1]
                ][r],
                o = v.F.U,
                a = v.F._goodIndex;
            v.F._hash;
            var s = v.F._putsE,
                u = 0;
            n <<= 3;
            var c = 0,
                l = e.length;
            if (0 == r) {
                for (; u < l;) {
                    var f = Math.min(65535, l - u);
                    s(t, n, u + f == l ? 1 : 0), n = v.F._copyExact(e, u, f, t, n + 8), u += f
                }
                return n >>> 3
            }
            s = o.lits, r = o.strt;
            var h = o.prev,
                p = 0,
                d = 0,
                b = 0,
                g = 0,
                y = 0;
            for (2 < l && (r[y = v.F._hash(e, 0)] = 0), u = 0; u < l; u++) {
                if (f = y, u + 1 < l - 2) {
                    y = v.F._hash(e, u + 1);
                    var m = u + 1 & 32767;
                    h[m] = r[y], r[y] = m
                }
                if (c <= u) {
                    if ((14e3 < p || 26697 < d) && 100 < l - u && (c < u && (s[p] = u - c, p += 2, c = u), n = v.F._writeBlock(u == l - 1 || c == l ? 1 : 0, s, p, g, e, b, u - b, t, n), p = d = g = 0, b = u), m = 0, u < l - 2 && (m = v.F._bestMatch(e, u, h, f, Math.min(i[2], l - u), i[3])), 0 != m) {
                        f = m >>> 16, m &= 65535;
                        var E = a(f, o.of0);
                        o.lhst[257 + E]++;
                        var w = a(m, o.df0);
                        o.dhst[w]++, g += o.exb[E] + o.dxb[w], s[p] = f << 23 | u - c, s[p + 1] = m << 16 | E << 8 | w, p += 2, c = u + f
                    } else o.lhst[e[u]]++;
                    d++
                }
            }
            for (b == u && 0 != e.length || (c < u && (s[p] = u - c, p += 2), n = v.F._writeBlock(1, s, p, g, e, b, u - b, t, n)); 0 != (7 & n);) n++;
            return n >>> 3
        }, v.F._bestMatch = function(e, t, n, r, i, o) {
            var a = 32767 & t,
                s = n[a],
                u = a - s + 32768 & 32767;
            if (s == a || r != v.F._hash(e, t - u)) return 0;
            for (var c = r = 0, l = Math.min(32767, t); u <= l && 0 != --o && s != a;) {
                if ((0 == r || e[t + r] == e[t + r - u]) && (a = v.F._howLong(e, t, u)) > r) {
                    if (c = u, (r = a) >= i) break;
                    u + 2 < a && (a = u + 2);
                    for (var f = 0, h = 0; h < a - 2; h++) {
                        var p = t - u + h + 32768 & 32767,
                            d = p - n[p] + 32768 & 32767;
                        d > f && (f = d, s = p)
                    }
                }
                u += (a = s) - (s = n[a]) + 32768 & 32767
            }
            return r << 16 | c
        }, v.F._howLong = function(e, t, n) {
            if (e[t] != e[t - n] || e[t + 1] != e[t + 1 - n] || e[t + 2] != e[t + 2 - n]) return 0;
            var r = t,
                i = Math.min(e.length, t + 258);
            for (t += 3; t < i && e[t] == e[t - n];) t++;
            return t - r
        }, v.F._hash = function(e, t) { return (e[t] << 8 | e[t + 1]) + (e[t + 2] << 4) & 65535 }, v.saved = 0, v.F._writeBlock = function(e, t, n, r, i, o, a, s, u) {
            var c = v.F.U,
                l = v.F._putsF,
                f = v.F._putsE;
            c.lhst[256]++;
            var h = v.F.getTrees(),
                p = h[0],
                d = h[1],
                b = h[2],
                g = h[3],
                y = h[4],
                m = h[5],
                E = h[6];
            h = h[7];
            var w = 32 + (0 == (u + 3 & 7) ? 0 : 8 - (u + 3 & 7)) + (a << 3),
                _ = r + v.F.contSize(c.fltree, c.lhst) + v.F.contSize(c.fdtree, c.dhst);
            r = r + v.F.contSize(c.ltree, c.lhst) + v.F.contSize(c.dtree, c.dhst), r += 14 + 3 * m + v.F.contSize(c.itree, c.ihst) + (2 * c.ihst[16] + 3 * c.ihst[17] + 7 * c.ihst[18]);
            for (var O = 0; 286 > O; O++) c.lhst[O] = 0;
            for (O = 0; 30 > O; O++) c.dhst[O] = 0;
            for (O = 0; 19 > O; O++) c.ihst[O] = 0;
            if (w = w < _ && w < r ? 0 : _ < r ? 1 : 2, l(s, u, e), l(s, u + 1, w), u += 3, 0 == w) {
                for (; 0 != (7 & u);) u++;
                u = v.F._copyExact(i, o, a, s, u)
            } else {
                if (1 == w) var A = c.fltree,
                    I = c.fdtree;
                if (2 == w) {
                    for (v.F.makeCodes(c.ltree, p), v.F.revCodes(c.ltree, p), v.F.makeCodes(c.dtree, d), v.F.revCodes(c.dtree, d), v.F.makeCodes(c.itree, b), v.F.revCodes(c.itree, b), A = c.ltree, I = c.dtree, f(s, u, g - 257), f(s, u += 5, y - 1), f(s, u += 5, m - 4), u += 4, e = 0; e < m; e++) f(s, u + 3 * e, c.itree[1 + (c.ordr[e] << 1)]);
                    u = v.F._codeTiny(E, c.itree, s, u + 3 * m), u = v.F._codeTiny(h, c.itree, s, u)
                }
                for (m = 0; m < n; m += 2) {
                    for (E = (e = t[m]) >>> 23, e = o + (8388607 & e); o < e;) u = v.F._writeLit(i[o++], A, s, u);
                    0 != E && (e = (p = t[m + 1]) >> 16, a = p >> 8 & 255, p &= 255, f(s, u = v.F._writeLit(257 + a, A, s, u), E - c.of0[a]), u += c.exb[a], l(s, u = v.F._writeLit(p, I, s, u), e - c.df0[p]), u += c.dxb[p], o += E)
                }
                u = v.F._writeLit(256, A, s, u)
            }
            return u
        }, v.F._copyExact = function(e, t, n, r, i) { var o = i >>> 3; return r[o] = n, r[o + 1] = n >>> 8, r[o + 2] = 255 - r[o], r[o + 3] = 255 - r[o + 1], o += 4, r.set(new Uint8Array(e.buffer, t, n), o), i + (n + 4 << 3) }, v.F.getTrees = function() {
            for (var e = v.F.U, t = v.F._hufTree(e.lhst, e.ltree, 15), n = v.F._hufTree(e.dhst, e.dtree, 15), r = [], i = v.F._lenCodes(e.ltree, r), o = [], a = v.F._lenCodes(e.dtree, o), s = 0; s < r.length; s += 2) e.ihst[r[s]]++;
            for (s = 0; s < o.length; s += 2) e.ihst[o[s]]++;
            s = v.F._hufTree(e.ihst, e.itree, 7);
            for (var u = 19; 4 < u && 0 == e.itree[1 + (e.ordr[u - 1] << 1)];) u--;
            return [t, n, s, i, a, u, r, o]
        }, v.F.getSecond = function(e) { for (var t = [], n = 0; n < e.length; n += 2) t.push(e[n + 1]); return t }, v.F.nonZero = function(e) { for (var t = "", n = 0; n < e.length; n += 2) 0 != e[n + 1] && (t += (n >> 1) + ","); return t }, v.F.contSize = function(e, t) { for (var n = 0, r = 0; r < t.length; r++) n += t[r] * e[1 + (r << 1)]; return n }, v.F._codeTiny = function(e, t, n, r) {
            for (var i = 0; i < e.length; i += 2) {
                var o = e[i],
                    a = e[i + 1];
                r = v.F._writeLit(o, t, n, r);
                var s = 16 == o ? 2 : 17 == o ? 3 : 7;
                15 < o && (v.F._putsE(n, r, a, s), r += s)
            }
            return r
        }, v.F._lenCodes = function(e, t) {
            for (var n = e.length; 2 != n && 0 == e[n - 1];) n -= 2;
            for (var r = 0; r < n; r += 2) {
                var i = e[r + 1],
                    o = r + 3 < n ? e[r + 3] : -1,
                    a = r + 5 < n ? e[r + 5] : -1,
                    s = 0 == r ? -1 : e[r - 1];
                if (0 == i && o == i && a == i) {
                    for (o = r + 5; o + 2 < n && e[o + 2] == i;) o += 2;
                    11 > (i = Math.min(o + 1 - r >>> 1, 138)) ? t.push(17, i - 3) : t.push(18, i - 11), r += 2 * i - 2
                } else if (i == s && o == i && a == i) {
                    for (o = r + 5; o + 2 < n && e[o + 2] == i;) o += 2;
                    i = Math.min(o + 1 - r >>> 1, 6), t.push(16, i - 3), r += 2 * i - 2
                } else t.push(i, 0)
            }
            return n >>> 1
        }, v.F._hufTree = function(e, t, n) {
            var r = [],
                i = e.length,
                o = t.length,
                a = 0;
            for (a = 0; a < o; a += 2) t[a] = 0, t[a + 1] = 0;
            for (a = 0; a < i; a++) 0 != e[a] && r.push({ lit: a, f: e[a] });
            if (e = r.length, i = r.slice(0), 0 == e) return 0;
            if (1 == e) return t[1 + ((n = r[0].lit) << 1)] = 1, t[1 + ((0 == n ? 1 : 0) << 1)] = 1;
            r.sort((function(e, t) { return e.f - t.f })), a = r[0], o = r[1];
            var s = 0,
                u = 1,
                c = 2;
            for (r[0] = { lit: -1, f: a.f + o.f, l: a, r: o, d: 0 }; u != e - 1;) a = s != u && (c == e || r[s].f < r[c].f) ? r[s++] : r[c++], o = s != u && (c == e || r[s].f < r[c].f) ? r[s++] : r[c++], r[u++] = { lit: -1, f: a.f + o.f, l: a, r: o };
            for ((r = v.F.setDepth(r[u - 1], 0)) > n && (v.F.restrictDepth(i, n, r), r = n), a = 0; a < e; a++) t[1 + (i[a].lit << 1)] = i[a].d;
            return r
        }, v.F.setDepth = function(e, t) { return -1 != e.lit ? e.d = t : Math.max(v.F.setDepth(e.l, t + 1), v.F.setDepth(e.r, t + 1)) }, v.F.restrictDepth = function(e, t, n) {
            var r = 0,
                i = 1 << n - t,
                o = 0;
            for (e.sort((function(e, t) { return t.d == e.d ? e.f - t.f : t.d - e.d })), r = 0; r < e.length && e[r].d > t; r++) {
                var a = e[r].d;
                e[r].d = t, o += i - (1 << n - a)
            }
            for (o >>>= n - t; 0 < o;)(a = e[r].d) < t ? (e[r].d++, o -= 1 << t - a - 1) : r++;
            for (; 0 <= r; r--) e[r].d == t && 0 > o && (e[r].d--, o++);
            0 != o && console.log("debt left")
        }, v.F._goodIndex = function(e, t) { var n = 0; return t[16 | n] <= e && (n |= 16), t[8 | n] <= e && (n |= 8), t[4 | n] <= e && (n |= 4), t[2 | n] <= e && (n |= 2), t[1 | n] <= e && (n |= 1), n }, v.F._writeLit = function(e, t, n, r) { return v.F._putsF(n, r, t[e << 1]), r + t[1 + (e << 1)] }, v.F.inflate = function(e, t) {
            var n = Uint8Array;
            if (3 == e[0] && 0 == e[1]) return t || new n(0);
            var r = v.F,
                i = r._bitsF,
                o = r._bitsE,
                a = r._decodeTiny,
                s = r.makeCodes,
                u = r.codes2map,
                c = r._get17,
                l = r.U,
                f = null == t;
            f && (t = new n(e.length >>> 2 << 3));
            for (var h, p, d, b, g = 0, y = 0, m = p = 0, E = 0; 0 == g;)
                if (g = i(e, E, 1), h = i(e, E + 1, 2), E += 3, 0 == h) 0 != (7 & E) && (E += 8 - (7 & E)), h = e[(E = 4 + (E >>> 3)) - 4] | e[E - 3] << 8, f && (t = v.F._check(t, m + h)), t.set(new n(e.buffer, e.byteOffset + E, h), m), E = E + h << 3, m += h;
                else {
                    if (f && (t = v.F._check(t, m + 131072)), 1 == h && (d = l.flmap, b = l.fdmap, y = 511, p = 31), 2 == h) {
                        for (p = o(e, E, 5) + 257, h = o(e, E + 5, 5) + 1, d = o(e, E + 10, 4) + 4, E += 14, b = 0; 38 > b; b += 2) l.itree[b] = 0, l.itree[b + 1] = 0;
                        for (y = 1, b = 0; b < d; b++) {
                            var w = o(e, E + 3 * b, 3);
                            l.itree[1 + (l.ordr[b] << 1)] = w, w > y && (y = w)
                        }
                        E += 3 * d, s(l.itree, y), u(l.itree, y, l.imap), d = l.lmap, b = l.dmap, E = a(l.imap, (1 << y) - 1, p + h, e, E, l.ttree), y = (1 << (w = r._copyOut(l.ttree, 0, p, l.ltree))) - 1, p = (1 << (h = r._copyOut(l.ttree, p, h, l.dtree))) - 1, s(l.ltree, w), u(l.ltree, w, d), s(l.dtree, h), u(l.dtree, h, b)
                    }
                    for (;;)
                        if (E += 15 & (h = d[c(e, E) & y]), 0 == (w = h >>> 4) >>> 8) t[m++] = w;
                        else {
                            if (256 == w) break;
                            h = m + w - 254, 264 < w && (h = m + ((w = l.ldef[w - 257]) >>> 3) + o(e, E, 7 & w), E += 7 & w), E += 15 & (w = b[c(e, E) & p]);
                            var _ = ((w = l.ddef[w >>> 4]) >>> 4) + i(e, E, 15 & w);
                            for (E += 15 & w, f && (t = v.F._check(t, m + 131072)); m < h;) t[m] = t[m++ - _], t[m] = t[m++ - _], t[m] = t[m++ - _], t[m] = t[m++ - _];
                            m = h
                        }
                }
            return t.length == m ? t : t.slice(0, m)
        }, v.F._check = function(e, t) { var n = e.length; return t <= n ? e : ((t = new Uint8Array(Math.max(n << 1, t))).set(e, 0), t) }, v.F._decodeTiny = function(e, t, n, r, i, o) {
            for (var a = v.F._bitsE, s = v.F._get17, u = 0; u < n;) {
                var c = e[s(r, i) & t];
                i += 15 & c;
                var l = c >>> 4;
                if (15 >= l) o[u] = l, u++;
                else { var f = c = 0; for (16 == l ? (f = 3 + a(r, i, 2), i += 2, c = o[u - 1]) : 17 == l ? (f = 3 + a(r, i, 3), i += 3) : 18 == l && (f = 11 + a(r, i, 7), i += 7), l = u + f; u < l;) o[u] = c, u++ }
            }
            return i
        }, v.F._copyOut = function(e, t, n, r) {
            for (var i = 0, o = 0, a = r.length >>> 1; o < n;) {
                var s = e[o + t];
                r[o << 1] = 0, r[1 + (o << 1)] = s, s > i && (i = s), o++
            }
            for (; o < a;) r[o << 1] = 0, r[1 + (o << 1)] = 0, o++;
            return i
        }, v.F.makeCodes = function(e, t) {
            var n, r, i = v.F.U,
                o = e.length,
                a = i.bl_count;
            for (n = 0; n <= t; n++) a[n] = 0;
            for (n = 1; n < o; n += 2) a[e[n]]++;
            for (i = i.next_code, n = 0, a[0] = 0, r = 1; r <= t; r++) n = n + a[r - 1] << 1, i[r] = n;
            for (t = 0; t < o; t += 2) 0 != (a = e[t + 1]) && (e[t] = i[a], i[a]++)
        }, v.F.codes2map = function(e, t, n) {
            for (var r = e.length, i = v.F.U.rev15, o = 0; o < r; o += 2)
                if (0 != e[o + 1]) {
                    var a = e[o + 1],
                        s = o >> 1 << 4 | a,
                        u = t - a;
                    for (u = (a = e[o] << u) + (1 << u); a != u;) n[i[a] >>> 15 - t] = s, a++
                }
        }, v.F.revCodes = function(e, t) { for (var n = v.F.U.rev15, r = 15 - t, i = 0; i < e.length; i += 2) e[i] = n[e[i] << t - e[i + 1]] >>> r }, v.F._putsE = function(e, t, n) { n <<= 7 & t, e[t >>>= 3] |= n, e[t + 1] |= n >>> 8 }, v.F._putsF = function(e, t, n) { n <<= 7 & t, e[t >>>= 3] |= n, e[t + 1] |= n >>> 8, e[t + 2] |= n >>> 16 }, v.F._bitsE = function(e, t, n) { return (e[t >>> 3] | e[1 + (t >>> 3)] << 8) >>> (7 & t) & (1 << n) - 1 }, v.F._bitsF = function(e, t, n) { return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16) >>> (7 & t) & (1 << n) - 1 }, v.F._get17 = function(e, t) { return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16) >>> (7 & t) }, v.F._get25 = function(e, t) { return (e[t >>> 3] | e[1 + (t >>> 3)] << 8 | e[2 + (t >>> 3)] << 16 | e[3 + (t >>> 3)] << 24) >>> (7 & t) }, v.F.U = function() {
            var e = Uint16Array,
                t = Uint32Array;
            return { next_code: new e(16), bl_count: new e(16), ordr: [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], of0: [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 999, 999, 999], exb: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0], ldef: new e(32), df0: [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 65535, 65535], dxb: [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0], ddef: new t(32), flmap: new e(512), fltree: [], fdmap: new e(32), fdtree: [], lmap: new e(32768), ltree: [], ttree: [], dmap: new e(32768), dtree: [], imap: new e(512), itree: [], rev15: new e(32768), lhst: new t(286), dhst: new t(30), ihst: new t(19), lits: new t(15e3), strt: new e(65536), prev: new e(32768) }
        }(),
        function() {
            function e(e, t, n) { for (; 0 != t--;) e.push(0, n) }
            for (var t = v.F.U, n = 0; 32768 > n; n++) {
                var r = n;
                r = (4278255360 & (r = (4042322160 & (r = (3435973836 & (r = (2863311530 & r) >>> 1 | (1431655765 & r) << 1)) >>> 2 | (858993459 & r) << 2)) >>> 4 | (252645135 & r) << 4)) >>> 8 | (16711935 & r) << 8, t.rev15[n] = (r >>> 16 | r << 16) >>> 17
            }
            for (n = 0; 32 > n; n++) t.ldef[n] = t.of0[n] << 3 | t.exb[n], t.ddef[n] = t.df0[n] << 4 | t.dxb[n];
            e(t.fltree, 144, 8), e(t.fltree, 112, 9), e(t.fltree, 24, 7), e(t.fltree, 8, 8), v.F.makeCodes(t.fltree, 9), v.F.codes2map(t.fltree, 9, t.flmap), v.F.revCodes(t.fltree, 9), e(t.fdtree, 32, 5), v.F.makeCodes(t.fdtree, 5), v.F.codes2map(t.fdtree, 5, t.fdmap), v.F.revCodes(t.fdtree, 5), e(t.itree, 19, 0), e(t.ltree, 286, 0), e(t.dtree, 30, 0), e(t.ttree, 320, 0)
        }();
    var uD = ["backups", "servers"],
        vD = ["backups", "servers"],
        wD = ["group"],
        pl = v.inflate,
        rs = v.deflate,
        ss = function(e) {
            function t(e, i, o, a) { Y(this, t); var s = r.call(this, a, "Session"); return m(n(s), "chatManager", void 0), m(n(s), "joinedChannels", new Set), m(n(s), "msgDedupLru", new tc(void 0, { maxlen: 200 })), m(n(s), "startTime", Date.now()), m(n(s), "seq", V.fromNumber(1, !0)), m(n(s), "userJoinOptions", new ps(!1)), m(n(s), "seqSentStatuses", [!1, !1]), m(n(s), "dialogueSequenceLru", new tc(void 0, { maxlen: 1e4 })), m(n(s), "loggedOut", !1), m(n(s), "messageSentTimes", []), m(n(s), "curLoginSockets", [void 0, void 0]), m(n(s), "loginSocketSubs", [{ channels: new Map, receivers: [] }, { channels: new Map, receivers: [] }]), m(n(s), "lastLoginSockets", [new se(1), new se(1)]), m(n(s), "dialPendingMsgSubjectMap", new Map), m(n(s), "context", void 0), m(n(s), "connection", void 0), m(n(s), "instanceId", void 0), m(n(s), "registerSocketsFailureListener", (function() { s.connection.once("socketsFailure", (function() { s.log("socketsFailure, creating a new connection"), ad((function() { return s.connection.removeAllListeners(), s.connection = new es(s.context, s.logger, !0), s.loginHandler(15e3, !0) })).pipe(qe((function(e) { return e.pipe(cd(Zd.getParameter("RECONNECTING_AP_INTERVAL"))) })), pb(s.connection.apClient.apFinish$)).subscribe((function() { s.log("new connection connected") })) })), 0 === s.connection.listenerCount("tokenExpired") && s.connection.on("tokenExpired", (function() { s.emit("tokenExpired") })) })), s.context = e, s.connection = i, s.instanceId = o, s.chatManager = new tD(a), s.log("The instanceId is %s", s.instanceId.toString()), s }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{
                key: "fetchFileUploadIndexGet",
                value: function(e) {
                    var n = e.hash,
                        r = e.size;
                    if (0 === (e = this.getLoginSockets()).length) throw new L("Client is not logged in");
                    var i = this.incGetSeq();
                    return e.forEach((function(e) { e.sendPacket("FileUploadIndexGet", { seq: i, hash: n, size: r }) })), { ret: Da.apply(void 0, H(e.map((function(e) { return e.fromReceived("FileUploadIndexRet").pipe(ba((function(e) { return i.eq(e.seq) }))) })))), fin: Da.apply(void 0, H(e.map((function(e) { return e.fromReceived("FileUploadIndexFin").pipe(ba((function(e) { return i.eq(e.seq) }))) })))), err: Yb.apply(void 0, H(e.map((function(e) { return e.fromReceived("FileUploadIndexErr").pipe(ba((function(e) { return i.eq(e.seq) })), ea((function(e) { throw new da(["The media message upload failure, code %d", e.code], mg) }))) })))), timeout: t.genTimeoutError(Nh) }
                }
            }, {
                key: "requestFileUploadIndexSet",
                value: function(e) {
                    var n = e.hash,
                        r = e.unit,
                        i = e.servers;
                    if (0 === (e = this.getLoginSockets()).length) throw new L("Client is not logged in");
                    var o = this.incGetSeq();
                    return e.forEach((function(e) { e.sendPacket("FileUploadIndexSet", { seq: o, servers: i, hash: n, unit: r }) })), Da.apply(void 0, [t.genTimeoutError(Nh)].concat(H(e.map((function(e) { return e.fromReceived("FileUploadIndexErr").pipe(ba((function(e) { return o.eq(e.seq) })), ea((function(e) { throw new da(["FileUploadIndexSet failure, code %d", e.code], mg) }))) }))), H(e.map((function(e) { return e.fromReceived("FileUploadIndexFin").pipe(ba((function(e) { return o.eq(e.seq) }))) })))))
                }
            }, {
                key: "requestFileDownloadIndexGet",
                value: function(e) {
                    var n = e.size,
                        r = e.zone,
                        i = e.unit,
                        o = e.hash,
                        a = this.getLoginSockets();
                    if (0 === a.length) throw new L("Client is not logged in");
                    var s = this.incGetSeq();
                    return a.forEach((function(e) { e.sendPacket("FileDownloadIndexGet", { seq: s, size: n, zone: r, unit: i, hash: o }) })), e = Da.apply(void 0, H(a.map((function(e) { return e.fromReceived("FileDownloadIndexRet").pipe(ba((function(e) { return s.eq(e.seq) }))) })))).pipe(ea((function(e) {
                        var t = e.backups,
                            n = e.servers;
                        return e = gf(e, uD), va({ backupList: t.map((function(e) { return [e] })), serverList: n.map((function(e) { return [e] })) }, e)
                    })), cd(500)), a = qm(a.map((function(e) { return e.fromReceived("FileDownloadIndexRet").pipe(ba((function(e) { return s.eq(e.seq) }))) }))), Da(e, a.pipe(ea((function(e) {
                        return e.reduce((function(e, t) {
                            var n = e.backupList,
                                r = e.serverList;
                            e = t.backups;
                            var i = t.servers;
                            return t = gf(t, vD), va({ backupList: e.map((function(e, t) { return [e].concat(H(void 0 !== n && Array.isArray(n[t]) ? n[t] : [])) })), serverList: i.map((function(e, t) { return [e].concat(H(void 0 !== n && Array.isArray(r[t]) ? r[t] : [])) })) }, t)
                        }), {})
                    }))), t.genTimeoutError(Nh))
                }
            }, {
                key: "loginHandler",
                value: function() {
                    var e = this,
                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 2e4,
                        n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    if (this.loggedOut && n) throw new L("Already logged out, request ignored");
                    n && this.registerSocketsFailureListener(), this.connection.initConnection();
                    var r = this.getSocketLoginObservables(this.connection.lastOpenSockets, this.seq),
                        i = Date.now();
                    return r.forEach((function(t, r) {
                        var o = e.loginSocketSubs[r].login;
                        void 0 !== o && o.unsubscribe(), e.loginSocketSubs[r].login = t.pipe(ca((function(t) {
                            var o;
                            e.curLoginSockets[r] = t;
                            var a = Date.now();
                            fb("Link", { ackedServerIp: t.address, destServerIp: t.ip, ec: 0, sc: 0, elapse: gb(e.startTime), lts: V.fromNumber(a), responseTime: i - a, sid: Ya(e.instanceId), userId: e.context.uid }, null !== (o = e.context.config.enableCloudProxy) && void 0 !== o && o), e.emit("userJoined", t.env), n && e.connection.apClient.apFinish$.next(void 0)
                        }))).subscribe(e.lastLoginSockets[r])
                    })), this.initKeepAliveSender(), this.initKeepAliveReconnector(), this.initLoginReceiver(), Yb.apply(void 0, H(r).concat([hb(this.connection, "connectionInitFailure").pipe(ca((function(e) { if (ta(e) || Ta(e)) throw e; throw new da("Login failure", { code: fr, originalError: e }) })))])).pipe(La(1), ib(t), Ha((function(t) { return t instanceof qb && e.warn("Client login timeout"), t && t.code === Mh && (e.connection.emit("tokenExpired"), e.connection.apClient.apFinish$.next(void 0)), e.clearSockets(0, n), aa(t) })), ca((function() { n || e.registerSocketsFailureListener() })), xg((function() { n || e.connection.apClient.apFinish$.next(void 0) })))
                }
            }, {
                key: "logoutHandler",
                value: function() {
                    var e = K(u.mark((function e() {
                        var t, n, r, i = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this.loggedOut = !0, this.connection.apClient.apFinish$.next(void 0), t = this.getLoginSockets(), n = t.map((function(e) { return e.sendPacket("UserQuit", {}), i.connection.waitClosing(e) })), this.clearSockets(5e3), r = t.map((function(e) { return e.env })), [0, 1].filter((function(e) { return !r.includes(e) })).forEach((function(e) { i.connection.closeSocket(e, 0) })), e.abrupt("return", Yb.apply(void 0, H(n)).toPromise());
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function() { return e.apply(this, arguments) }
                }()
            }, {
                key: "requestChannelJoin",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (0 !== this.getLoginSockets().length) { e.next = 2; break }
                                    throw new L("Client is not logged in. Cannot join the channel", br);
                                case 2:
                                    return r = hb(this, "channelLeft").pipe(xb((function(e) { return e === t })), La(1)), i = this.incGetSeq(), (o = this.lastLoginSockets.map((function(e) { return e.pipe(Cc((function(e, t) { 0 !== t && a.incSeqIfNeeded(e.env); var r = 0 === t ? i : a.seq; return e.sendPacket("GroupEnter", { account: n, seq: r }), e.fromReceived("GroupReply").pipe(ba((function(e) { return r.eq(e.seq) })), ca((function(e) { if (0 !== (e = e.code)) throw new da(["Channel join failure. The response code is %d", e], Yq) }))) })), pb(r), re()) }))).forEach((function(e, n) {
                                        var r = function() { return a.loginSocketSubs[n].channels.delete(t.channelId) };
                                        a.loginSocketSubs[n].channels.set(t.channelId, e.subscribe({ error: r, complete: r }))
                                    })), e.next = 8, Yb.apply(void 0, H(o)).pipe(La(1), ib(1e4), Ha((function(e) { return e instanceof qb && a.warn("Channel join timeout"), aa(e) }))).toPromise();
                                case 8:
                                    this.joinedChannels.add(t);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, { key: "requestChannelLeave", value: function(e, t) { this.emit("channelLeft", e), this.joinedChannels.delete(e), this.getLoginSockets().forEach((function(e) { e.sendPacket("GroupLeave", { account: t }) })) } }, { key: "requestChannelMemberList", value: function(e) { var n = this.getLoginSockets(); if (0 === n.length) throw new L("Client is not logged in. Cannot get the channel members", oA); var r = this.incGetSeq(); return n.forEach((function(t) { t.sendPacket("GroupAllUsersList", { group: e, pageNumber: 0, pageSize: 200, seq: r }) })), Da.apply(void 0, [t.genTimeoutError(Wq)].concat(H(n.map((function(t) { return t.fromReceived("GroupAllUsersResult").pipe(ba((function(t) { var n = t.seq; return t.group === e && r.eq(n) }))) }))))) } }, { key: "requestPeersOnlineStatus", value: function(e) { var n = this.getLoginSockets(); if (0 === n.length) throw new L("Client is not logged in"); var r = this.incGetSeq(); return n.forEach((function(t) { t.sendPacket("UserStatusList", { users: e, seq: r }) })), Da.apply(void 0, [t.genTimeoutError(AA)].concat(H(n.map((function(e) { return e.fromReceived("UserStatusResult").pipe(ba((function(e) { return r.eq(e.seq) }))) }))))) } }, {
                key: "requestSetLocalUserAttributes",
                value: function(e, n) {
                    var r = this,
                        i = this.getLoginSockets();
                    if (0 === i.length) throw new L("Client is not logged in");
                    var o = this.incGetSeq();
                    return i.forEach((function(t, i) { void 0 !== n && i !== n || t.sendPacket("UserAttributeSet", { account: r.context.uid, attributeInfos: Object.entries(e).map((function(e) { return { key: (e = sa(e, 2))[0], value: e[1] } })), seq: o }) })), Da.apply(void 0, H(i.map((function(e) { return e.fromReceived("UserAttributeErr").pipe(ba((function(e) { return o.eq(e.seq) })), ea((function(e) { throw new da(["The user attributes set failure, code %d", e.code], Tb) }))) }))).concat([t.genTimeoutError(Ub)], H(i.map((function(e) { return e.fromReceived("UserAttributeRsp").pipe(ba((function(e) { return o.eq(e.seq) }))) })))))
                }
            }, { key: "requestSetChannelAttributes", value: function(e, n, r) { var i = this.getLoginSockets(); if (0 === i.length) throw new L("Client is not logged in"); var o = this.incGetSeq(); return i.forEach((function(t) { t.sendPacket("GroupAttributeSet", { broadcast: r, group: e, attributeInfos: Object.entries(n).map((function(e) { return { key: (e = sa(e, 2))[0], value: e[1] } })), seq: o }) })), Da.apply(void 0, H(i.map((function(e) { return e.fromReceived("GroupAttributeErr").pipe(ba((function(e) { return o.eq(e.seq) })), ea((function(e) { throw new da(["The group attributes set failure, code %d", e.code], Tb) }))) }))).concat([t.genTimeoutError(Ub)], H(i.map((function(e) { return e.fromReceived("GroupAttributeRsp").pipe(ba((function(e) { return o.eq(e.seq) }))) }))))) } }, {
                key: "requestAddOrUpdateLocalUserAttributes",
                value: function(e) {
                    var n = this,
                        r = this.getLoginSockets();
                    if (0 === r.length) throw new L("Client is not logged in");
                    var i = this.incGetSeq();
                    return r.forEach((function(t) { t.sendPacket("UserAttributeMod", { account: n.context.uid, attributeInfos: Object.entries(e).map((function(e) { return { key: (e = sa(e, 2))[0], value: e[1] } })), seq: i }) })), Da.apply(void 0, H(r.map((function(e) { return e.fromReceived("UserAttributeErr").pipe(ba((function(e) { return i.eq(e.seq) })), ea((function(e) { throw new da(["The user attributes add or update failure, code %d", e.code], Tb) }))) }))).concat([t.genTimeoutError(Ub)], H(r.map((function(e) { return e.fromReceived("UserAttributeRsp").pipe(ba((function(e) { return i.eq(e.seq) }))) })))))
                }
            }, { key: "requestAddOrUpdateChannelAttributes", value: function(e, n, r) { var i = this.getLoginSockets(); if (0 === i.length) throw new L("Client is not logged in"); var o = this.incGetSeq(); return i.forEach((function(t) { t.sendPacket("GroupAttributeMod", { broadcast: r, group: e, attributeInfos: Object.entries(n).map((function(e) { return { key: (e = sa(e, 2))[0], value: e[1] } })), seq: o }) })), Da.apply(void 0, H(i.map((function(e) { return e.fromReceived("GroupAttributeErr").pipe(ba((function(e) { return o.eq(e.seq) })), ea((function(e) { throw new da(["The group attributes add or update failure, code %d", e.code], Tb) }))) }))).concat([t.genTimeoutError(Ub)], H(i.map((function(e) { return e.fromReceived("GroupAttributeRsp").pipe(ba((function(e) { return o.eq(e.seq) }))) }))))) } }, {
                key: "requestDeleteLocalUserAttributesByKeys",
                value: function(e) {
                    var n = this,
                        r = this.getLoginSockets();
                    if (0 === r.length) throw new L("Client is not logged in");
                    var i = this.incGetSeq();
                    return r.forEach((function(t) { t.sendPacket("UserAttributeDel", { account: n.context.uid, attributes: e, seq: i }) })), Da.apply(void 0, H(r.map((function(e) { return e.fromReceived("UserAttributeErr").pipe(ba((function(e) { return i.eq(e.seq) })), ea((function(e) { throw new da(["The user attributes delete failure, code %d", e.code], Tb) }))) }))).concat([t.genTimeoutError(Ub)], H(r.map((function(e) { return e.fromReceived("UserAttributeRsp").pipe(ba((function(e) { return i.eq(e.seq) }))) })))))
                }
            }, { key: "requestDeleteChannelAttributesByKeys", value: function(e, n, r) { var i = this.getLoginSockets(); if (0 === i.length) throw new L("Client is not logged in"); var o = this.incGetSeq(); return i.forEach((function(t) { t.sendPacket("GroupAttributeDel", { group: e, broadcast: r, attributes: n, seq: o }) })), Da.apply(void 0, H(i.map((function(e) { return e.fromReceived("GroupAttributeErr").pipe(ba((function(e) { return o.eq(e.seq) })), ea((function(e) { throw new da(["The channel attributes delete failure, code %d", e.code], Tb) }))) }))).concat([t.genTimeoutError(Ub)], H(i.map((function(e) { return e.fromReceived("GroupAttributeRsp").pipe(ba((function(e) { return o.eq(e.seq) }))) }))))) } }, {
                key: "requestClearLocalUserAttributes",
                value: function() {
                    var e = this,
                        n = this.getLoginSockets();
                    if (0 === n.length) throw new L("Client is not logged in");
                    var r = this.incGetSeq();
                    return n.forEach((function(t) { t.sendPacket("UserAttributeSet", { account: e.context.uid, seq: r, attributeInfos: [] }) })), Da.apply(void 0, H(n.map((function(e) { return e.fromReceived("UserAttributeErr").pipe(ba((function(e) { return r.eq(e.seq) })), ea((function(e) { throw new da(["The user attributes clear failure, code %d", e.code], Tb) }))) }))).concat([t.genTimeoutError(Ub)], H(n.map((function(e) { return e.fromReceived("UserAttributeRsp").pipe(ba((function(e) { return r.eq(e.seq) }))) })))))
                }
            }, { key: "requestClearChannelAttributes", value: function(e, n) { var r = this.getLoginSockets(); if (0 === r.length) throw new L("Client is not logged in"); var i = this.incGetSeq(); return r.forEach((function(t) { t.sendPacket("GroupAttributeSet", { group: e, seq: i, attributeInfos: [], broadcast: n }) })), Da.apply(void 0, H(r.map((function(e) { return e.fromReceived("GroupAttributeErr").pipe(ba((function(e) { return i.eq(e.seq) })), ea((function(e) { throw new da(["The channel attributes clear failure, code %d", e.code], Tb) }))) }))).concat([t.genTimeoutError(Ub)], H(r.map((function(e) { return e.fromReceived("GroupAttributeRsp").pipe(ba((function(e) { return i.eq(e.seq) }))) }))))) } }, { key: "requestGetUserAttributesByKeys", value: function(e, n) { var r = this.getLoginSockets(); if (0 === r.length) throw new L("Client is not logged in"); var i = this.incGetSeq(); return r.forEach((function(t) { t.sendPacket("UserAttributeGet", { account: e, seq: i, attributes: n }) })), Da.apply(void 0, [t.genTimeoutError(Ub)].concat(H(r.map((function(e) { return e.fromReceived("UserAttributeErr").pipe(ba((function(e) { return i.eq(e.seq) })), ea((function(e) { if (10008 === (e = e.code)) throw new da("The user requested is not online", Sq); throw new Wc(["User attribute operation unknown error code: %d", e], Tb) }))) }))), H(r.map((function(e) { return e.fromReceived("UserAttributeRet").pipe(ba((function(e) { return i.eq(e.seq) }))) }))))) } }, { key: "requestGetChannelAttributesByKeys", value: function(e, n) { var r = this.getLoginSockets(); if (0 === r.length) throw new L("Client is not logged in"); var i = this.incGetSeq(); return r.forEach((function(t) { t.sendPacket("GroupAttributeGet", { group: e, seq: i, attributes: n }) })), Da.apply(void 0, [t.genTimeoutError(Ub)].concat(H(r.map((function(e) { return e.fromReceived("GroupAttributeErr").pipe(ba((function(e) { return i.eq(e.seq) })), ea((function(e) { throw new da(["The channel attributes get failure, code %d", e.code], Tb) }))) }))), H(r.map((function(e) { return e.fromReceived("GroupAttributeRet").pipe(ba((function(e) { return i.eq(e.seq) }))) }))))) } }, { key: "requestGetUserAttributeKeys", value: function(e) { var n = this.getLoginSockets(); if (0 === n.length) throw new L("Client is not logged in"); var r = this.incGetSeq(); return n.forEach((function(t) { t.sendPacket("UserAttributeKeysGet", { account: e, seq: r }) })), Da.apply(void 0, [t.genTimeoutError(Ub)].concat(H(n.map((function(e) { return e.fromReceived("UserAttributeErr").pipe(ba((function(e) { return r.eq(e.seq) })), ea((function(e) { if (10008 === (e = e.code)) throw new da("The user requested is not online", Sq); throw new Wc(["User attribute operation unknown error code: %d", e], Tb) }))) }))), H(n.map((function(e) { return e.fromReceived("UserAttributeKeysRet").pipe(ba((function(e) { return r.eq(e.seq) }))) }))))) } }, { key: "requestGetChannelAttributesKeys", value: function(e) { var n = this.getLoginSockets(); if (0 === n.length) throw new L("Client is not logged in"); var r = this.incGetSeq(); return n.forEach((function(t) { t.sendPacket("GroupAttributeKeysGet", { group: e, seq: r }) })), Da.apply(void 0, [t.genTimeoutError(Ub)].concat(H(n.map((function(e) { return e.fromReceived("GroupAttributeErr").pipe(ba((function(e) { return r.eq(e.seq) })), ea((function(e) { throw new Wc(["Channel attribute operation unknown error code: %d", e.code], Tb) }))) }))), H(n.map((function(e) { return e.fromReceived("GroupAttributeKeysRet").pipe(ba((function(e) { return r.eq(e.seq) }))) }))))) } }, { key: "requestGetChannelMemberCount", value: function(e) { var n = this.getLoginSockets(); if (0 === n.length) throw new L("Client is not logged in"); var r = this.incGetSeq(); return n.forEach((function(t) { t.sendPacket("GroupStatusList", { groups: e, seq: r }) })), Da.apply(void 0, [t.genTimeoutError(Wq)].concat(H(n.map((function(e) { return e.fromReceived("GroupStatusResult").pipe(ba((function(e) { return r.eq(e.seq) }))) }))))) } }, { key: "requestSubscribePeersOnlineStatus", value: function(e) { var n = this.getLoginSockets(); if (0 === n.length) throw new L("Client is not logged in"); var r = this.incGetSeq(); return n.forEach((function(t) { t.sendPacket("SubscribeUserStatus", { seq: r, users: e }) })), Da.apply(void 0, [t.genTimeoutError(HA)].concat(H(n.map((function(e) { return e.fromReceived("SubscribeResponse").pipe(ba((function(e) { return r.eq(e.seq) }))) }))))) } }, {
                key: "requestUnsubscribePeersOnlineStatus",
                value: function(e) {
                    var t = this.getLoginSockets();
                    if (0 === t.length) throw new L("Client is not logged in");
                    var n = this.incGetSeq();
                    t.forEach((function(t) { t.sendPacket("UnsubscribeUserStatus", { seq: n, users: e }) }))
                }
            }, {
                key: "sendInvitationMessage",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s, c, l, f, h, p, d, v = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.peerId, r = t.callId, i = t.extra, o = t.isAcceptAck, a = t.channelId, s = t.type, c = { callId: r }, void 0 === o) { e.next = 6; break }
                                    if ("CallAccept" === s) { e.next = 5; break }
                                    throw Error("invalid invitation type");
                                case 5:
                                    c.type = o ? "ack" : "request";
                                case 6:
                                    return c.channel = a, ("CallInvite" === s || "CallCancel" === s || "CallReject" === s || "CallAccept" === s && !1 === o) && void 0 !== i && (c.extra = i), l = Cg(), this.log("The sent invitation body is %o", c), f = function(e) { return { MiscMap: {}, sequence: V.fromNumber(1), dialogue: l, instance: v.instanceId, dst: n, ms: V.fromNumber(Date.now(), !0), options: new ae({ IterationNumber: e, MessageType: s }).toLong(), payload: (new TextEncoder).encode(JSON.stringify(c)), src: v.context.uid } }, e.next = 14, Lb(this.sendMessageToRetry(f, !0)).pipe(ib(1e4), Ha((function(e) { return e instanceof qb && v.warn("Send invitation timeout"), aa(e) }))).toPromise();
                                case 14:
                                    return h = e.sent, p = h.code, d = h.retryTimes, e.abrupt("return", { hasPeerReceived: 0 === p, hasReSent: 0 !== d });
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "sendMediaMessage",
                value: function() {
                    var e = K(u.mark((function e(t, n, r, i, o, a) {
                        var s, c, l, f, h, p, d, v, b, g, y, E, w, _, O, A, k, T, R, N, S, C, x, L, P, j, U, D, M, q = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (c = n.width, l = void 0 === c ? 0 : c, f = n.height, h = void 0 === f ? 0 : f, p = n.fileName, d = void 0 === p ? "" : p, v = n.description, b = void 0 === v ? "" : v, g = n.thumbnail, y = void 0 === g ? new Blob : g, E = n.thumbnailHeight, w = void 0 === E ? 0 : E, _ = n.thumbnailWidth, O = void 0 === _ ? 0 : _, A = n.size, k = void 0 === A ? 0 : A, T = n.mediaId, R = o.enableOfflineMessaging, N = o.enableHistoricalMessaging, Aa(r)) { e.next = 4; break }
                                    throw new I("The send message arguments are not valid", i ? bl : jg);
                                case 4:
                                    if (!(32768 < new Blob([d, y, b]).size)) { e.next = 6; break }
                                    throw new I("The size of message overflowed ", i ? we : Ih);
                                case 6:
                                    return S = this.chatManager.getChatInfo(r), C = S.dialogue, x = S.sequence, L = this.instanceId, this.log('A%s media message is sending to %s: "'.concat(L, "-").concat(C, "#").concat(x, '"'), i ? " peer" : " channel", pa(r)), m(s = {}, "media_description", b), m(s, "media_width", l), m(s, "media_height", h), m(s, "media_thumbnailwidth", O), m(s, "media_thumbnailheight", w), m(s, "media_size", k), m(s, "media_id", T), m(s, "media_filename", d), P = uc(s, (function(e) { return (new TextEncoder).encode(e.toString()) })), e.t0 = Uint8Array, e.next = 14, Li(y);
                                case 14:
                                    return e.t1 = e.sent, P.media_thumbnail = new e.t0(e.t1), j = i && "IMAGE" === t ? "PeerImageMessage" : i && "FILE" === t ? "PeerFileMessage" : i || "IMAGE" !== t ? "ChannelFileMessage" : "ChannelImageMessage", U = function(e) { return { MiscMap: P, sequence: x, dialogue: C, instance: L, dst: r, ms: V.fromNumber(Date.now(), !0), options: new ae({ IterationNumber: e, CompressionMethod: "Uncompressed", MessageType: j, ToCache: R, ToArchive: N }).toLong(), payload: new Uint8Array, src: q.context.uid } }, e.next = 20, Lb(this.sendMessageToRetry(U, !0)).pipe(ib(void 0 === a ? 1e4 : a), Ha((function(e) { return e instanceof qb && q.warn("Send message timeout"), aa(e) }))).toPromise();
                                case 20:
                                    if (D = e.sent, 2 !== (M = D.code)) { e.next = 24; break }
                                    throw new da("The peer does not support this type of message", zA);
                                case 24:
                                    return e.abrupt("return", { hasPeerReceived: 0 === M });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n, r, i, o, a) { return e.apply(this, arguments) }
                }()
            }, {
                key: "sendRawMessage",
                value: function() {
                    var e = K(u.mark((function e(t, n, r, i, o, a) {
                        var s, c, l, f, h, p, d, v, b, g, y = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (s = o.enableOfflineMessaging, c = o.enableHistoricalMessaging, Aa(r) && t instanceof Uint8Array && "string" == typeof n) { e.next = 3; break }
                                    throw new I("The send message arguments are not valid", i ? bl : jg);
                                case 3:
                                    if (!(32768 < t.byteLength + new Blob([n]).size)) { e.next = 5; break }
                                    throw new jb("The message size is over the 32KB limit", i ? we : Ih);
                                case 5:
                                    return l = !Zd.getParameter("DISABLE_MESSAGE_COMPRESSION") && 128 <= t.byteLength, f = this.chatManager.getChatInfo(r), h = f.dialogue, p = f.sequence, d = this.instanceId, this.log('A%s %s raw message is sending to %s: "'.concat(d, "-").concat(h, "#").concat(p, '"'), l ? " compressed" : "", i ? "peer" : "channel", pa(r)), v = function(e) { return { MiscMap: { description: (new TextEncoder).encode(n) }, sequence: p, dialogue: h, instance: d, dst: r, ms: V.fromNumber(Date.now(), !0), options: new ae({ IterationNumber: e, CompressionMethod: l ? "Zlib" : "Uncompressed", MessageType: i ? "PeerRawMessage" : "ChannelRawMessage", ToCache: s, ToArchive: c }).toLong(), payload: l ? rs(t) : t, src: y.context.uid } }, e.next = 12, Lb(this.sendMessageToRetry(v, !0)).pipe(ib(void 0 === a ? 1e4 : a), Ha((function(e) { return e instanceof qb && y.warn("Send message timeout"), aa(e) }))).toPromise();
                                case 12:
                                    return b = e.sent, g = b.code, e.abrupt("return", { hasPeerReceived: 0 === g });
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n, r, i, o, a) { return e.apply(this, arguments) }
                }()
            }, {
                key: "sendTextMessage",
                value: function() {
                    var e = K(u.mark((function e(t, n, r, i, o) {
                        var a, s, c, l, f, h, p, d, v, b, g, y = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (a = i.enableOfflineMessaging, s = i.enableHistoricalMessaging, Aa(n)) { e.next = 3; break }
                                    throw new I("The send message arguments are not valid", r ? bl : jg);
                                case 3:
                                    if (!(32768 < new Blob([t]).size)) { e.next = 5; break }
                                    throw new jb("The message size is over the 32KB limit", r ? we : Ih);
                                case 5:
                                    return c = !Zd.getParameter("DISABLE_MESSAGE_COMPRESSION") && 128 <= new Blob([t]).size, l = this.chatManager.getChatInfo(n), f = l.dialogue, h = l.sequence, p = this.instanceId, this.log('A%s %s message is sending to %s: "'.concat(p, "-").concat(f, "#").concat(h, '"'), c ? " compressed" : "", r ? "peer" : "channel", pa(n)), d = (new TextEncoder).encode(t), v = function(e) { return { MiscMap: {}, sequence: h, dialogue: f, instance: p, dst: n, ms: V.fromNumber(Date.now(), !0), options: new ae({ IterationNumber: e, CompressionMethod: c ? "Zlib" : "Uncompressed", MessageType: r ? "PeerTextMessage" : "ChannelTextMessage", ToCache: a, ToArchive: s }).toLong(), payload: c ? rs(d) : d, src: y.context.uid } }, e.next = 13, Lb(this.sendMessageToRetry(v, !0)).pipe(ib(void 0 === o ? 1e4 : o), Ha((function(e) { return e instanceof qb && y.warn("Send message timeout"), aa(e) }))).toPromise();
                                case 13:
                                    return b = e.sent, g = b.code, e.abrupt("return", { hasPeerReceived: 0 === g });
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, n, r, i, o) { return e.apply(this, arguments) }
                }()
            }, { key: "cleanLoginSubs", value: function(e, t) { Object.entries(this.loginSocketSubs[e]).forEach((function(e) { var n = (e = sa(e, 2))[1]; "channels" === e[0] && t || (Array.isArray(n) || n instanceof Map ? n.forEach((function(e) { return e.unsubscribe() })) : n && n.unsubscribe()) })), this.loginSocketSubs[e] = { channels: t ? this.loginSocketSubs[e].channels : new Map, receivers: [] } } }, {
                key: "sendMessageToRetry",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a, s, c, l, f, h, p = this,
                            d = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < d.length && void 0 !== d[2] ? d[2] : 0, this.log("Attempt to send the message ".concat(n ? " with retrying, %o" : "without retrying"), { retryTimes: r }), 0 !== (i = this.getLoginSockets()).length) { e.next = 5; break }
                                    throw Error("no logged-in sockets");
                                case 5:
                                    return o = t(r), i.forEach((function(e) { e.sendPacket("Message", o) })), a = o.dialogue, s = o.sequence, c = o.instance, l = i.map((function(e) { return e.fromReceived("Ack").pipe(xb((function(e) { return a.eq(e.dialogue) && s.eq(e.sequence) && c.eq(e.instance) }))) })), e.prev = 9, e.next = 12, Yb.apply(void 0, H(l)).pipe(ib(6e3), Ha((function(e) { return Ta(e) && p.warn("Message send timeout, retry times %d", r), aa(e) })), La(1)).toPromise();
                                case 12:
                                    return f = e.sent, h = f.code, this.log("The message has been acked, %o", { code: h }), e.abrupt("return", { code: h, retryTimes: r });
                                case 18:
                                    if (e.prev = 18, e.t0 = e.catch(9), !(e.t0 instanceof qb && n)) { e.next = 22; break }
                                    return e.abrupt("return", this.sendMessageToRetry(t, !1, r + 1));
                                case 22:
                                    throw e.t0;
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [9, 18]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, {
                key: "initKeepAliveSender",
                value: function() {
                    var e = this;
                    this.lastLoginSockets.map((function(t) { return t.pipe(Cc((function(t) { return Bc(0, 2750).pipe(ca((function() { e.incSeqIfNeeded(t.env), t.sendPacket("Ping", { ms: V.fromNumber(Date.now(), !0), seq: e.seq }) }))) }))) })).forEach((function(t, n) {
                        var r = e.loginSocketSubs[n].keepAlive;
                        void 0 !== r && r.unsubscribe(), e.loginSocketSubs[n].keepAlive = t.subscribe({ error: function() {} })
                    }))
                }
            }, {
                key: "initKeepAliveReconnector",
                value: function() {
                    var e = this;
                    this.lastLoginSockets.map((function(e) {
                        return e.pipe(Cc((function(e) {
                            var t, n = !1,
                                r = e.userJoin$.pipe(ca((function() { n = !0 }))),
                                i = e.input$.pipe(ca((function(e) { "Ping" !== Ni[e.uri].slice(0, -3) && (n = !1) })));
                            return Yb(Bc(15e3, 1e4).pipe(Zt(e.receivedPacket), ca((function(r) { r = sa(r, 2), r = sa(r[1], 2)[1], t !== r || n || e.forceReconnect(), t = r }))), r, i)
                        })))
                    })).forEach((function(t, n) {
                        var r = e.loginSocketSubs[n].keepAliveReconnector;
                        void 0 !== r && r.unsubscribe(), e.loginSocketSubs[n].keepAliveReconnector = t.subscribe({ error: function() {} })
                    }))
                }
            }, {
                key: "initLoginReceiver",
                value: function() {
                    var e = this;
                    this.lastLoginSockets.map((function(t) { return t.pipe(Cc((function(t) { return Yb(hb(t, "reconnect").pipe(ca(e.onSocketReconnect(t))), t.fromReceived("Message").pipe(ca(e.onMessage(t))), t.fromReceived("GroupEnterNotice").pipe(ca(e.onGroupEnterNotice())), t.fromReceived("GroupLeaveNotice").pipe(ca(e.onGroupLeaveNotice())), t.fromReceived("GroupCountNotice").pipe(ca(e.onGroupCountNotice())), t.fromReceived("GroupAttributeAlt").pipe(ca(e.onGroupAttributeAlt())), t.fromReceived("UserJoinNotice").pipe(ca(e.onUserNotice(T.PeerOnlineState.ONLINE))), t.fromReceived("UserQuitNotice").pipe(ca(e.onUserNotice(T.PeerOnlineState.OFFLINE))), t.fromReceived("UserWaitNotice").pipe(ca(e.onUserNotice(T.PeerOnlineState.UNREACHABLE)))).pipe(sf(void 0)) }))) })).forEach((function(t, n) { e.loginSocketSubs[n].receivers.push(t.subscribe({ error: function() {} })) }))
                }
            }, {
                key: "requestSocketLogin",
                value: function(e, t, n) {
                    var r = this;
                    return pm(ad((function() { r.userJoinOptions = new ps(t), e.sendPacket("UserJoin", { account: r.context.uid, instance: r.instanceId, opt: r.userJoinOptions.toLong(), seq: n, ticket: e.ticket }) })), e.fromReceived("UserResp").pipe(ba((function(e) { return n.eq(e.seq) })), ca((function(t) {
                        if (0 !== (t = t.code)) throw r.clearSockets(), r.logError("Connected to gateway success but the Rtm server rejected login"), new da(["Login failure. The response code from the RTM service is %d", t], kg);
                        r.log("ENV_%d logged in", e.env)
                    })), sf(e), ib(6e3))).pipe(xb((function(e) { return void 0 !== e })), Ha((function(n) { return n instanceof qb && r.warn("Login response timeout, rejoin: %s", t), r.clearSockets(), n.name = "loginRespTimeout", r.emit("banEdgeIP", e.ip), aa(n) })))
                }
            }, { key: "getSocketLoginObservables", value: function(e, t) { var n = this; return e.map((function(e) { return e.pipe(ca((function(e) { 0 === e.listenerCount("socketUserDrop") && e.on("socketUserDrop", (function(t) { return n.onUserDrop(t, e) })) })), Cc((function(e, r) { return n.incSeqIfNeeded(e.env), n.requestSocketLogin(e, 0 !== r, 0 === r ? t : n.seq) })), re()) })) } }, {
                key: "incSeqIfNeeded",
                value: function(e) {
                    if (![0, 1].includes(e)) throw new Ga({ INVALID_ENV: "The env argument is not 0 or 1" });
                    this.seqSentStatuses[e] && (this.seq = this.seq.add(1), this.seqSentStatuses = [!1, !1]), this.seqSentStatuses[e] = !0
                }
            }, { key: "incGetSeq", value: function() { return this.seq = this.seq.add(1), this.seqSentStatuses = [!0, !0], this.seq } }, {
                key: "getLoginSockets",
                value: function() {
                    for (var e = this.curLoginSockets, t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
                        var o = e[t];
                        o && (i[r++] = o)
                    }
                    return i
                }
            }, {
                key: "emitMessage",
                value: function(e, n) {
                    var r = e.options,
                        i = e.payload,
                        o = e.src,
                        a = e.dst,
                        s = e.instance,
                        c = e.dialogue,
                        l = e.sequence,
                        f = e.ms,
                        h = e.MiscMap;
                    this.dialogueSequenceLru.set(c.toString(), l), s = "".concat(s, "-").concat(c, "#").concat(l), this.msgDedupLru.has(s) ? this.warn("Env_%d: Messages out-of-order or not start with 1: %s", n, s) : (this.msgDedupLru.set(s, void 0), n = new ae(r), this.lastLoginSockets.forEach(function() {
                        var n = K(u.mark((function n(r) {
                            var i;
                            return u.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, r.pipe(La(1)).toPromise();
                                    case 2:
                                        i = n.sent, t.sendMessageAck(e, i);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })));
                        return function(e) { return n.apply(this, arguments) }
                    }()), r = n.isZlibCompressed(), n.isInvitation() ? (a = qa(r ? pl(dn(i, Uint8Array.of(0, 0, 0, 0))) : i), a = JSON.parse(a), this.log("The received invitation body is %o", a), this.emit("invitationMessage", { body: a, type: n.getInvitationType(), peerId: o, serverReceivedTs: f.toNumber() })) : n.isTextMessage() ? (h = n.isPeerTextMessage(), i = qa(r ? pl(dn(i, Uint8Array.of(0, 0, 0, 0))) : i), this.info("Received a %s %s text message from %s to %s, %s", r ? " compressed" : "", h ? "peer" : "channel", pa(o), pa(a), s), h ? (o = { text: i, peerId: o, properties: { serverReceivedTs: f.toNumber(), isOfflineMessage: n.isFromCache() } }, this.emit("peerTextMessage", o)) : this.emit("channelTextMessage", { channelId: a, memberId: o, text: i, properties: { serverReceivedTs: f.toNumber(), isOfflineMessage: !1 } })) : n.isRawMessage() ? (c = n.isRawPeerMessage(), h = void 0 === (h = h.description) ? "" : qa(h), i = r ? pl(i) : i, this.info("Received a %s %s raw message from %s to %s, %s", r ? " compressed" : "", c ? "peer" : "channel", pa(o), pa(a), s), c ? (o = { desc: h, raw: i, peerId: o, properties: { serverReceivedTs: f.toNumber(), isOfflineMessage: n.isFromCache() } }, this.emit("peerRawMessage", o)) : this.emit("channelRawMessage", { desc: h, raw: i, channelId: a, memberId: o, properties: { serverReceivedTs: f.toNumber(), isOfflineMessage: !1 } })) : (n.isImageMessage() || n.isFileMessage()) && (i = n.isPeerMessage(), this.info("Received a %s media message from %s to %s, %s", i ? "peer" : "channel", pa(o), pa(a), s), i ? this.emit("peerMediaMessage", { messageType: n.isImageMessage() ? "IMAGE" : "FILE", details: h, peerId: o, properties: { serverReceivedTs: f.toNumber(), isOfflineMessage: n.isFromCache() } }) : this.emit("channelMediaMessage", { messageType: n.isImageMessage() ? "IMAGE" : "FILE", details: h, memberId: o, channelId: a, properties: { serverReceivedTs: f.toNumber(), isOfflineMessage: n.isFromCache() } })))
                }
            }, {
                key: "onSocketReconnect",
                value: function(e) {
                    var t = this;
                    return function() {
                        var n = [0, 1].filter((function(t) { return t !== e.env }))[0];
                        (n = t.connection.curOpenSockets[n]) && !n.loggedIn && t.emit("connectionLost")
                    }
                }
            }, {
                key: "onUserDrop",
                value: function(e, t) {
                    var n;
                    e = e.code, fb("KickedOff", { code: 0, elapse: gb(this.startTime), linkId: parseInt(t.name.split("-")[1], 10), lts: V.fromNumber(Date.now()), server: t.address, serverCode: e, sid: Ya(this.instanceId), userId: this.context.uid }, null !== (n = this.context.config.enableCloudProxy) && void 0 !== n && n), 10006 === e || 10001 === e ? this.warn("Login too often and kicked off, reconnect and login") : 10009 === e ? (this.warn("The instance ID conflicts, reconnecting"), this.instanceId = Cg(), this.context.sid = Ya(this.instanceId), this.emit("instanceChanged", this.instanceId)) : [11, 14, 15, 16].includes(e) && (this.emit("userDrop", e), this.clearSockets())
                }
            }, {
                key: "clearSockets",
                value: function() {
                    var e = this,
                        t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
                    [0, 1].forEach((function(r) { e.cleanLoginSubs(r, n), e.connection.closeSocket(r, t) }))
                }
            }, {
                key: "onMessage",
                value: function(e) {
                    var t = this;
                    return function(n) {
                        var r = n.dialogue,
                            i = n.instance,
                            o = n.sequence,
                            a = n.options;
                        if (n.src === t.context.uid) t.log("The message is from the local account, ignored");
                        else {
                            var s = r.toString(),
                                u = t.dialPendingMsgSubjectMap.get(s);
                            if (r = "".concat(i, "-").concat(r, "#").concat(o), u) u.next(n), t.log("Env_%d: The dialogue has pending messages, next: %s", e.env, r);
                            else {
                                var c = t.dialogueSequenceLru.get(s);
                                if (u = !c && o.eq(1), i = void 0 !== c && o.sub(c).eq(1), u || i) t.emitMessage(n, e.env);
                                else {
                                    if (c) {
                                        if (o.lte(c)) return;
                                        t.log("Env_%d: The message pended, the sequence is not continuous with the last: %s", e.env, r)
                                    } else t.log("Env_%d: The message pended, the first sequence is not equal to 1: %s", e.env, r);
                                    o = new Qa, t.dialPendingMsgSubjectMap.set(s, o);
                                    var l = o.pipe($s(Rk), yg((function(e, t) { return [].concat(H(e), [t]) }), []), ea((function(e) { return H(e).sort((function(e, t) { return e = e.sequence, t = t.sequence, e.eq(t) ? 0 : e.gt(t) ? 1 : -1 })) })), zm(1));
                                    a = !(a = new ae(a)).isFromCache() && !a.isBufferedMessage(), l.pipe(pb(Bc(a ? 750 : 1500)), ba((function(e) {
                                        if (2 > e.length) return !1;
                                        for (var t = void 0 === c ? V.fromNumber(1, !0) : c.add(1), n = 0; n < e.length; t = t.add(1), n++)
                                            if (!e[n].sequence.eq(t)) return !1;
                                        return !0
                                    })), xg((function() { t.dialPendingMsgSubjectMap.delete(s) }))).subscribe((function(n) { n.forEach((function(n) { t.emitMessage(n, e.env), t.log("Env_%d: The message queue has fully ordered, emitting: %s", e.env, "".concat(n.instance, "-").concat(n.dialogue, "#").concat(n.sequence)) })) }), (function(n) { n instanceof wg && l.pipe(La(1)).subscribe((function(n) { return n.forEach((function(n) { t.log("Env_%d: The message pending queue expired, emitting: %s", e.env, "".concat(n.instance, "-").concat(n.dialogue, "#").concat(n.sequence)), t.emitMessage(n, e.env) })) })) })), o.next(n)
                                }
                            }
                        }
                    }
                }
            }, { key: "onGroupEnterNotice", value: function() { var e = this; return function(t) { e.emit("memberNotice", { channelId: t.group, seq: t.seq, instance: t.instance, memberId: t.user, type: "MemberJoined", size: t.size }) } } }, { key: "onGroupLeaveNotice", value: function() { var e = this; return function(t) { e.emit("memberNotice", { channelId: t.group, seq: t.seq, instance: t.instance, memberId: t.user, type: "MemberLeft", size: t.size }) } } }, { key: "onGroupCountNotice", value: function() { var e = this; return function(t) { e.emit("memberNotice", { channelId: t.group, seq: t.seq, instance: t.instance, type: "MemberCountUpdated", size: t.size }) } } }, {
                key: "onGroupAttributeAlt",
                value: function() {
                    var e = this;
                    return function(t) {
                        var n = t.group;
                        t = gf(t, wD), e.emit("channelAttributesUpdated", va({ channelId: n }, t))
                    }
                }
            }, { key: "onUserNotice", value: function(e) { var t = this; return function(n) { t.emit("peerOnlineStatusChanged", { peerId: n.user, instance: n.instance, seq: n.seq, state: e }) } } }], [{
                key: "sendMessageAck",
                value: function(e, t) {
                    var n = new ae(e.options);
                    (n.isInvitation() || n.isPeerMessage()) && t.sendPacket("Ack", { code: 0, dialogue: e.dialogue, instance: e.instance, sequence: e.sequence })
                }
            }]), t
        }(ub());
    m(ss, "genTimeoutError", (function(e, t) { return cb(void 0).pipe(cd(void 0 === t ? 1e4 : t), ea((function() { throw new eb(["Request timed out after %ds", void 0 === t ? 1e4 : t], e) }))) }));
    var ts, ql, rl = 0,
        sl = 0;
    Ud.v1 = function(e, t, n) {
        n = t && n || 0;
        var r = t || [],
            i = (e = e || {}).node || ts,
            o = void 0 !== e.clockseq ? e.clockseq : ql;
        if (null == i || null == o) {
            var a = Qq();
            null == i && (i = ts = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]), null == o && (o = ql = 16383 & (a[6] << 8 | a[7]))
        }
        a = void 0 !== e.msecs ? e.msecs : (new Date).getTime();
        var s = void 0 !== e.nsecs ? e.nsecs : sl + 1,
            u = a - rl + (s - sl) / 1e4;
        if (0 > u && void 0 === e.clockseq && (o = o + 1 & 16383), (0 > u || a > rl) && void 0 === e.nsecs && (s = 0), 1e4 <= s) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        for (rl = a, sl = s, ql = o, e = (1e4 * (268435455 & (a += 122192928e5)) + s) % 4294967296, r[n++] = e >>> 24 & 255, r[n++] = e >>> 16 & 255, r[n++] = e >>> 8 & 255, r[n++] = 255 & e, e = a / 4294967296 * 1e4 & 268435455, r[n++] = e >>> 8 & 255, r[n++] = 255 & e, r[n++] = e >>> 24 & 15 | 16, r[n++] = e >>> 16 & 255, r[n++] = o >>> 8 | 128, r[n++] = 255 & o, o = 0; 6 > o; ++o) r[n + o] = i[o];
        return t || Rq(r)
    }, Ud.v4 = Ud;
    var tl = Rh(),
        vd, cf = T.LocalInvitationFailureReason,
        Ca = T.LocalInvitationState,
        xD = (vd = function(e) {
            function t(e, i, o) { Y(this, t); var a = r.call(this, o, "RtmLocalInvitation", !0); return m(n(a), "state", Ca.IDLE), m(n(a), "localInvitationEnd$", Da(hb(n(a), "LocalInvitationAccepted"), hb(n(a), "LocalInvitationRefused"), hb(n(a), "LocalInvitationFailure"), hb(n(a), "LocalInvitationCanceled")).pipe(La(1))), m(n(a), "callId", Ud.v4()), m(n(a), "_content", ""), m(n(a), "_channelId", ""), m(n(a), "_response", ""), m(n(a), "calleeId", void 0), m(n(a), "logger", void 0), m(n(a), "getSession", void 0), a.calleeId = e, a.getSession = i, a.logger = o, a }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{ key: "channelId", get: function() { return this._channelId }, set: function(e) { this.state !== Ca.IDLE ? this.info("set channelId only allow before invitation sent to remote") : (this.log("set channelId for %s", this.callId), this._channelId = e) } }, { key: "content", get: function() { return this._content }, set: function(e) { this.log("set content for %s", this.callId), this._content = e } }, { key: "response", get: function() { return this._response }, set: function(e) { throw new I('Cannot set the "response" of the LocalInvitation instance.', xc) } }, {
                key: "send",
                value: function() {
                    var e, t = this;
                    if (this.state === Ca.SENT_TO_REMOTE || this.state === Ca.RECEIVED_BY_REMOTE) throw new L("The local invitation send failure. The call invitation has already been sent.", sA);
                    if (this.isLocalInvitationEnd()) throw new L("The local invitation send failure. The call invitation has ended.", Kh);
                    if (0 < this._channelId.length && !Aa(this._channelId)) throw new I("Illegal invitation channel ID", xc);
                    if (!Aa(this.calleeId)) throw new I("Illegal invitation callee user ID", xc);
                    if (8192 < Jg(this._content)) throw new I('The length of the "content" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.', xc);
                    this.state = Ca.SENT_TO_REMOTE, ad(K(u.mark((function n() {
                        var r, i, o;
                        return u.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, t.getSession().sendInvitationMessage({ peerId: t.calleeId, callId: t.callId, extra: t._content, type: "CallInvite", channelId: t._channelId });
                                case 2:
                                    if (r = n.sent, i = r.hasPeerReceived, o = r.hasReSent, !t.isLocalInvitationEnd()) { n.next = 7; break }
                                    throw new eb("send invitation timeout");
                                case 7:
                                    if (t.log("The local invitation has sent to the callee"), i || o) { n.next = 11; break }
                                    throw e = new tl({ PEER_NOT_ONLINE: "The peer of the invitation is not online" });
                                case 11:
                                    if (i) { n.next = 14; break }
                                    throw e = new tl({ RESENT_AND_OFFLINE: "Resent and the peer of the invitation is not online" });
                                case 14:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))).pipe(qe((function(e) { return e.pipe(ca((function(e) { if (!(e instanceof tl)) throw e })), cd(2e3)) })), ib(3e4), Ha((function(e) { return Ta(e) && t.warn("local invitation ack timed out"), aa(e) })), pb(this.localInvitationEnd$)).subscribe({ next: function() { t.state === Ca.RECEIVED_BY_REMOTE ? t.log('The local invitation state is already "RECEIVED_BY_REMOTE", skipped emitting "LocalInvitationReceivedByPeer"') : t.state !== Ca.SENT_TO_REMOTE ? t.log("The invitation has ended, skipped emitting the %s event", "LocalInvitationReceivedByPeer") : (t.info("The peer received the local invitation %s.", t.callId), t.state = Ca.RECEIVED_BY_REMOTE, t.emit("LocalInvitationReceivedByPeer"), t.localInvitationEnd$.pipe(ib(6e4), Ha((function(e) { return Ta(e) && t.warn("local invitation expired"), aa(e) }))).subscribe({ error: function() { t.state = Ca.FAILURE, t.emit("LocalInvitationFailure", cf.INVITATION_EXPIRE) } })) }, error: function(n) { t.isLocalInvitationEnd() ? t.log("The invitation has ended, skipped emitting the %s event", "LocalInvitationFailure") : (t.state = Ca.FAILURE, Ta(n) && e ? "PEER_NOT_ONLINE" === e.code ? t.emit("LocalInvitationFailure", cf.PEER_OFFLINE) : "RESENT_AND_OFFLINE" === e.code && t.emit("LocalInvitationFailure", cf.PEER_NO_RESPONSE) : Ta(n) ? t.emit("LocalInvitationFailure", cf.PEER_NO_RESPONSE) : "RtmInvalidStatusError" === n.name ? t.emit("LocalInvitationFailure", cf.NOT_LOGGEDIN) : t.emit("LocalInvitationFailure", cf.UNKNOWN)) } })
                }
            }, {
                key: "cancel",
                value: function() {
                    if (this.isLocalInvitationEnd()) throw new L("The local invitation cancel failure", Kh);
                    if (this.state === Ca.IDLE) throw new L("The local invitation has not been sent", rA);
                    if (8192 < Jg(this._content)) throw new I('The length of the "content" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.', xc);
                    this.getSession().sendInvitationMessage({ callId: this.callId, peerId: this.calleeId, type: "CallCancel", channelId: this._channelId, extra: this._content }), this.state = Ca.CANCELED, this.emit("LocalInvitationCanceled")
                }
            }, {
                key: "onAcceptReceived",
                value: function(e) {
                    if (this.isLocalInvitationEnd() && this.state !== Ca.ACCEPTED_BY_REMOTE) this.log("The invitation has ended, skipped emitting the %s event", "LocalInvitationAccepted");
                    else {
                        if (this.state === Ca.IDLE) throw new L("the local have not sent the invitation, how can remote accept it?");
                        this.getSession().sendInvitationMessage({ callId: this.callId, isAcceptAck: !0, type: "CallAccept", peerId: this.calleeId, channelId: this.channelId }), this.state === Ca.ACCEPTED_BY_REMOTE ? this.log("already in ACCEPTED_BY_REMOTE state, ignore emit ACCEPTED_BY_REMOTE") : (this.state === Ca.SENT_TO_REMOTE && (this.log("receive LocalInvitationAccepted before remote response to the invitation"), this.state = Ca.RECEIVED_BY_REMOTE, this.emit("LocalInvitationReceivedByPeer")), this.state = Ca.ACCEPTED_BY_REMOTE, this._response = e, this.emit("LocalInvitationAccepted", e))
                    }
                }
            }, {
                key: "onRefuseReceived",
                value: function(e) {
                    if (this.isLocalInvitationEnd()) this.log("The invitation has ended, skipped emitting the %s event", "LocalInvitationRefused");
                    else {
                        if (this.state === Ca.IDLE) throw new L("the local have not sent the invitation, how can remote refuse it?");
                        this.state === Ca.SENT_TO_REMOTE && (this.log("receive LocalInvitationRefused before remote response to the invitation"), this.state = Ca.RECEIVED_BY_REMOTE, this.emit("LocalInvitationReceivedByPeer")), this._response = e, this.state = Ca.REFUSED_BY_REMOTE, this.emit("LocalInvitationRefused", e)
                    }
                }
            }, { key: "isLocalInvitationEnd", value: function() { return [Ca.CANCELED, Ca.FAILURE, Ca.ACCEPTED_BY_REMOTE, Ca.REFUSED_BY_REMOTE].includes(this.state) } }]), t
        }(ub()), ha(vd.prototype, "send", [Ob], Object.getOwnPropertyDescriptor(vd.prototype, "send"), vd.prototype), ha(vd.prototype, "cancel", [Ob], Object.getOwnPropertyDescriptor(vd.prototype, "cancel"), vd.prototype), vd),
        Th = T.RemoteInvitationFailureReason,
        lb = T.RemoteInvitationState,
        yD = function(e) {
            function t(e) {
                var i = e.invitationChannel,
                    o = e.extraContent,
                    a = e.callId,
                    s = e.callerId,
                    u = e.logger;
                e = e.getSession, Y(this, t);
                var c = r.call(this, u, "RtmRemoteInvitation", !0);
                return m(n(c), "state", lb.INVITATION_RECEIVED), m(n(c), "remoteInvitationEnd$", Da(hb(n(c), "RemoteInvitationCanceled"), hb(n(c), "RemoteInvitationRefused"), hb(n(c), "RemoteInvitationAccepted"), hb(n(c), "RemoteInvitationFailure")).pipe(La(1))), m(n(c), "callerId", void 0), m(n(c), "callId", void 0), m(n(c), "_getSession", void 0), m(n(c), "logger", void 0), m(n(c), "_content", void 0), m(n(c), "_channelId", void 0), m(n(c), "_response", ""), c._channelId = i, c._content = o, c.callId = a, c.callerId = s, c._getSession = e, c.logger = u, c.remoteInvitationEnd$.pipe(ib(6e4), Ha((function(e) { return Ta(e) && c.warn("Remote invitation expired"), aa(e) }))).subscribe({ error: function() { c.state = lb.FAILURE, c.emit("RemoteInvitationFailure", Th.INVITATION_EXPIRE) } }), c
            }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{ key: "channelId", get: function() { return this._channelId }, set: function(e) { throw new I('Cannot set the "response" of the RemoteInvitation instance.', xc) } }, { key: "content", get: function() { return this._content }, set: function(e) { throw new I('Cannot set the "content" of the RemoteInvitation instance.', xc) } }, { key: "response", get: function() { return this._response }, set: function(e) { this._response = e } }, {
                key: "accept",
                value: function() {
                    var e, t = this;
                    if (this.isRemoteInvitationEnd()) throw new L("The local invitation has ended. Cannot accept.", Kh);
                    if (this.state === lb.ACCEPT_SENT_TO_LOCAL) throw new L("The remote invitation is accepting. Cannot do the operation.", Xq);
                    if (8192 < Jg(this._response)) throw new I('The length of the "response" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.', xc);
                    this.state = lb.ACCEPT_SENT_TO_LOCAL, Yb(tm(1e3).pipe(db((function() {
                        return ad(K(u.mark((function e() {
                            return u.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", t._getSession().sendInvitationMessage({ peerId: t.callerId, callId: t.callId, extra: t.response, type: "CallAccept", isAcceptAck: !1, channelId: t.channelId }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    })), xb((function(t) { return e = t.hasPeerReceived })), La(1)), hb(this, "RemoteInvitationAccepted")).pipe(ib(5e3), pb(this.remoteInvitationEnd$)).subscribe({
                        error: function(n) {
                            if (t.logError(n), t.state = lb.FAILURE, Ta(n)) switch (e) {
                                case void 0:
                                case !0:
                                    return void t.emit("RemoteInvitationFailure", Th.ACCEPT_FAILURE);
                                case !1:
                                    return void t.emit("RemoteInvitationFailure", Th.PEER_OFFLINE)
                            }
                            t.emit("RemoteInvitationFailure", Th.UNKNOWN)
                        }
                    })
                }
            }, {
                key: "refuse",
                value: function() {
                    if (this.state === lb.ACCEPT_SENT_TO_LOCAL) throw new L("The remote invitation is accepting. Cannot do the operation.", Xq);
                    if (this.isRemoteInvitationEnd()) throw new L("The invitation is end. Cannot refuse", Kh);
                    if (8192 < Jg(this._response)) throw new I('The length of the "response" overflows. The number of bytes representing content must not exceed 8 × 1024 if encoded in UTF-8.', xc);
                    this._getSession().sendInvitationMessage({ peerId: this.callerId, callId: this.callId, extra: this.response, type: "CallReject", channelId: this.channelId }), this.state = lb.REFUSED, this.emit("RemoteInvitationRefused")
                }
            }, { key: "onCancelReceived", value: function(e) { this.isRemoteInvitationEnd() ? this.log("The invitation has ended, skipped emitting the %s event", "RemoteInvitationCanceled") : (this.state === lb.ACCEPT_SENT_TO_LOCAL && this.log("caller canceled before receive accept"), this._content = e, this.state = lb.CANCELED, this.emit("RemoteInvitationCanceled", e)) } }, { key: "onAcceptAckReceived", value: function() { this.state !== lb.ACCEPT_SENT_TO_LOCAL ? this.log("The invitation has ended, skipped emitting the %s event", "ori:".concat(this.state, ", to: RemoteInvitationAccepted")) : (this.state = lb.ACCEPTED, this.emit("RemoteInvitationAccepted")) } }, { key: "isRemoteInvitationEnd", value: function() { return [lb.ACCEPTED, lb.REFUSED, lb.CANCELED, lb.FAILURE].includes(this.state) } }]), t
        }(ub()),
        zD = function(e) {
            function t(e, i) {
                Y(this, t);
                var o = r.call(this, i, "InvitationManager");
                return m(n(o), "getSession", void 0), m(n(o), "invitationDispatcher", new fa.EventEmitter), m(n(o), "outgoingLocalInvitations", new Map), m(n(o), "receivedRemoteInvitations", new tc(void 0, { maxlen: 1e4 })), m(n(o), "logger", void 0), o.getSession = kn(e), o.logger = i, o.invitationDispatcher.on("remoteInvitationToManager", (function(e) {
                    var t = e.callId,
                        n = e.extra,
                        r = e.callerId;
                    e = e.channelId, o.receivedRemoteInvitations.has(t) || ((n = new yD({ callerId: r, callId: t, getSession: o.getSession, logger: i, extraContent: n, invitationChannel: e })).remoteInvitationEnd$.subscribe((function() { o.receivedRemoteInvitations.delete(t) })), o.receivedRemoteInvitations.set(t, n), o.emit("remoteInvitationInstance", n))
                })), o.invitationDispatcher.on("acceptAckToRemoteInvitation", (function(e) {
                    (e = o.receivedRemoteInvitations.get(e.callId)) && e.onAcceptAckReceived()
                })), o.invitationDispatcher.on("cancelToRemoteInvitation", (function(e) {
                    var t = e.extra;
                    (e = o.receivedRemoteInvitations.get(e.callId)) && e.onCancelReceived(t)
                })), o.invitationDispatcher.on("acceptToLocalInvitation", (function(e) {
                    var t = e.extra;
                    (e = o.outgoingLocalInvitations.get(e.callId)) && e.onAcceptReceived(t)
                })), o.invitationDispatcher.on("refuseToLocalInvitation", (function(e) {
                    var t = e.extra;
                    (e = o.outgoingLocalInvitations.get(e.callId)) && e.onRefuseReceived(t)
                })), o
            }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{
                key: "invitationMessageHandler",
                value: function(e) {
                    var t = e.body,
                        n = t.callId,
                        r = t.extra;
                    r = void 0 === r ? "" : r;
                    var i = t.type,
                        o = void 0 === (t = t.channel) ? "" : t,
                        a = e.type;
                    switch (t = e.peerId, e = e.serverReceivedTs, a) {
                        case "CallAccept":
                            "ack" === i ? this.invitationDispatcher.emit("acceptAckToRemoteInvitation", { callId: n }) : "request" === i && this.invitationDispatcher.emit("acceptToLocalInvitation", { callId: n, extra: r });
                            break;
                        case "CallInvite":
                            this.invitationDispatcher.emit("remoteInvitationToManager", { callId: n, callerId: t, extra: r, channelId: o });
                            break;
                        case "CallCancel":
                            if ("0" === n) { n = "".concat("AgoraRTMLegacyEndcallCompatibleMessagePrefix", "_").concat(o, "_").concat(r), this.getSession().emit("peerTextMessage", { peerId: t, properties: { serverReceivedTs: e, isOfflineMessage: !1 }, text: n }); break }
                            this.invitationDispatcher.emit("cancelToRemoteInvitation", { callId: n, extra: r });
                            break;
                        case "CallReject":
                            this.invitationDispatcher.emit("refuseToLocalInvitation", { callId: n, extra: r });
                            break;
                        default:
                            throw Pm("invitationType", a)
                    }
                }
            }, {
                key: "genLocalInvitation",
                value: function(e) {
                    var t = this,
                        n = new xD(e, this.getSession, this.logger);
                    return n.localInvitationEnd$.subscribe((function() { t.outgoingLocalInvitations.delete(n.callId) })), this.outgoingLocalInvitations.set(n.callId, n), n
                }
            }]), t
        }(ub()),
        AD = function(e, t, n) {
            var r = !0,
                i = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");
            return mb(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), CC(e, t, { leading: r, maxWait: t, trailing: i })
        },
        vb, df;
    ! function(e) { e[e.JOINED = 0] = "JOINED", e[e.LEFT = 1] = "LEFT" }(df || (df = {}));
    var us = T.ConnectionState,
        BD = (vb = function(e) {
            function t(e, i, o, a) {
                Y(this, t);
                var s = r.call(this, a, "RtmChannel", !0);
                return m(n(s), "onMemberCountUpdated", AD((function(e) { e !== s.memberCount && (s.memberCount = e, s.emit("MemberCountUpdated", e)) }), 1e3)), m(n(s), "getSession", void 0), m(n(s), "memberCount", 0), m(n(s), "memberJoinedLru", new tc(void 0, { maxlen: 1e4 })), m(n(s), "memberLeftLru", new tc(void 0, { maxlen: 1e4 })), m(n(s), "memberJoinStateLru", new tc(void 0, { maxlen: 1e4 })), m(n(s), "attributesSeqLru", new tc(void 0, { maxlen: 1e4 })), m(n(s), "channelId", void 0), m(n(s), "client", void 0), m(n(s), "onAttributesUpdated", (function(e) {
                    var t = e.channelId,
                        n = e.attributeMaps,
                        r = e.seq;
                    e = e.instance.toString();
                    var i = s.attributesSeqLru.get(e);
                    if ((!i || r.greaterThan(i)) && (s.attributesSeqLru.set(e, r), t === s.channelId)) {
                        for (t = {}, r = 0; r < n.length; r++) {
                            var o = n[r];
                            e = o.key, i = o.ms;
                            var a = o.value;
                            if (o = o.origin, "string" != typeof e || !V.isLong(i) || "string" != typeof a || !Aa(o)) break;
                            t[e] = { value: a, lastUpdateUserId: o, lastUpdateTs: i.toNumber() }
                        }
                        s.emit("AttributesUpdated", t)
                    }
                })), m(n(s), "onChannelTextMessage", (function(e) {
                    var t = e.memberId,
                        n = e.text,
                        r = e.properties;
                    e.channelId === s.channelId && s.emit("ChannelMessage", { text: n, messageType: T.MessageType.TEXT }, t, r)
                })), m(n(s), "onChannelMediaMessage", (function(e) {
                    var t = e.memberId,
                        n = e.properties,
                        r = e.details,
                        i = e.messageType;
                    e.channelId === s.channelId && ("FILE" === i ? s.emit("ChannelMessage", { messageType: T.MessageType.FILE, size: parseInt(qa(r.media_size), 10), description: qa(r.media_description), fileName: qa(r.media_filename), mediaId: qa(r.media_id), thumbnail: new Blob([r.media_thumbnail]) }, t, n) : "IMAGE" === i && s.emit("ChannelMessage", { messageType: T.MessageType.IMAGE, size: parseInt(qa(r.media_size), 10), description: qa(r.media_description), fileName: qa(r.media_filename), mediaId: qa(r.media_id), thumbnail: new Blob([r.media_thumbnail]), height: parseInt(qa(r.media_height), 10), width: parseInt(qa(r.media_width), 10), thumbnailHeight: parseInt(qa(r.media_thumbnailheight), 10), thumbnailWidth: parseInt(qa(r.media_thumbnailwidth), 10) }, t, n))
                })), m(n(s), "onChannelRawMessage", (function(e) {
                    var t = e.desc,
                        n = e.raw,
                        r = e.memberId,
                        i = e.properties;
                    e.channelId === s.channelId && s.emit("ChannelMessage", { messageType: T.MessageType.RAW, rawMessage: n, description: t }, r, i)
                })), m(n(s), "onMemberNotice", (function(e) {
                    var t = e.memberId,
                        n = e.type,
                        r = e.size;
                    if (e.channelId === s.channelId) {
                        var i = e.instance.toString();
                        e = e.seq.toString();
                        var o = { MemberLeft: s.memberLeftLru, MemberJoined: s.memberJoinedLru, MemberCountUpdated: void 0 }[n];
                        if (o) {
                            if (o.has(i + e)) return void s.log("received duplicated %s notice (seq: %s), channel '%s', member '%s'", n, e, pa(s.channelId), pa(t || ""));
                            if (o.set(i + e, void 0), "string" != typeof t) return;
                            if (t !== s.getSession().context.uid) { if ((i = s.memberJoinStateLru.get(t)) === df.JOINED && "MemberJoined" === n) return void s.log("received duplicated %s state (seq: %s), channel '%s', member '%s'", n, e, pa(s.channelId), pa(t || "")); if (i === df.LEFT && "MemberLeft" === n) return void s.log("received duplicated %s state (seq: %s), channel '%s', member '%s'", n, e, pa(s.channelId), pa(t || "")) }
                            s.memberJoinStateLru.set(t, "MemberJoined" === n ? df.JOINED : df.LEFT)
                        }
                        s.info("Channel %s - %s, memberId: %s", n, pa(s.channelId), "MemberCountUpdated" === n ? "[unknown]" : pa(t || "")), i = t === s.getSession().context.uid, "MemberLeft" === n && Aa(t) || "MemberJoined" === n && Aa(t) ? (i || s.emit(n, t), s.onMemberCountUpdated(r)) : "MemberCountUpdated" === n && "number" == typeof r && s.onMemberCountUpdated(r)
                    }
                })), s.getSession = kn(i), s.channelId = e, s.client = o, s.info("A channel created, id %s", pa(e)), s
            }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{
                key: "join",
                value: function() {
                    var e = K(u.mark((function e() {
                        var t, n, r, i, o, a, s;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Aa(this.channelId)) { e.next = 2; break }
                                    throw new I(["The %s in the arguments is invalid", "channelId"], tA);
                                case 2:
                                    e.prev = 2, t = this.getSession(), e.next = 9;
                                    break;
                                case 6:
                                    throw e.prev = 6, e.t0 = e.catch(2), new L("The client is not logged in. Cannot do the operation", br);
                                case 9:
                                    if (!t.joinedChannels.has(this)) { e.next = 12; break }
                                    throw fb("ChnJoin", { cname: this.channelId, lts: V.fromNumber(Date.now()), userId: t.context.uid, elapse: gb(t.startTime), errCode: ar, sid: Ya(t.instanceId) }, null !== (n = this.client.context.config.enableCloudProxy) && void 0 !== n && n), new L("The channel has joined. Cannot rejoin", ar);
                                case 12:
                                    if (e.prev = 12, this.log("Joining the channel %s", pa(this.channelId)), !this.hasOtherChannelJoined()) { e.next = 17; break }
                                    throw fb("ChnJoin", { cname: this.channelId, lts: V.fromNumber(Date.now()), userId: t.context.uid, elapse: gb(t.startTime), errCode: cr, sid: Ya(t.instanceId) }, null !== (o = this.client.context.config.enableCloudProxy) && void 0 !== o && o), new L("A channel of the same channel ID has already joined. Cannot rejoin", cr);
                                case 17:
                                    if (20 !== t.joinedChannels.size) { e.next = 20; break }
                                    throw fb("ChnJoin", { cname: this.channelId, lts: V.fromNumber(Date.now()), userId: t.context.uid, elapse: gb(t.startTime), errCode: $q, sid: Ya(t.instanceId) }, null !== (a = this.client.context.config.enableCloudProxy) && void 0 !== a && a), new jb("The joined channels has exceeded the limit of 20", $q);
                                case 20:
                                    return fb("ChnJoin", { cname: this.channelId, lts: V.fromNumber(Date.now()), userId: t.context.uid, elapse: gb(t.startTime), errCode: 0, sid: Ya(t.instanceId) }, null !== (r = this.client.context.config.enableCloudProxy) && void 0 !== r && r), e.next = 23, t.requestChannelJoin(this, this.channelId);
                                case 23:
                                    fb("ChnJoinRes", { cname: this.channelId, lts: V.fromNumber(Date.now()), elapse: gb(t.startTime), errCode: 0, sid: Ya(t.instanceId), serverErrCode: 0, userId: t.context.uid }, null !== (i = this.client.context.config.enableCloudProxy) && void 0 !== i && i), this.info("The channel %s joined successfully", pa(this.channelId)), t.on("channelTextMessage", this.onChannelTextMessage), t.on("channelRawMessage", this.onChannelRawMessage), t.on("channelMediaMessage", this.onChannelMediaMessage), t.on("memberNotice", this.onMemberNotice), t.on("channelAttributesUpdated", this.onAttributesUpdated), e.next = 41;
                                    break;
                                case 32:
                                    if (e.prev = 32, e.t1 = e.catch(12), this.logError(e.t1), !ta(e.t1)) { e.next = 37; break }
                                    throw e.t1;
                                case 37:
                                    if (!Ta(e.t1)) { e.next = 40; break }
                                    throw fb("ChnJoinRes", { cname: this.channelId, lts: V.fromNumber(Date.now()), elapse: gb(t.startTime), errCode: Zq, sid: Ya(t.instanceId), serverErrCode: 0, userId: t.context.uid }, null !== (s = this.client.context.config.enableCloudProxy) && void 0 !== s && s), new eb(["Join channel %s timed out", pa(this.channelId)], Zq);
                                case 40:
                                    throw new Wc(["The channel %s join failure", pa(this.channelId)], { code: Yq, originalError: e.t1 });
                                case 41:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [2, 6],
                            [12, 32]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }()
            }, {
                key: "leave",
                value: function() {
                    var e = K(u.mark((function e() {
                        var t, n, r, i;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.prev = 0, n = this.getSession(), e.next = 7;
                                    break;
                                case 4:
                                    throw e.prev = 4, e.t0 = e.catch(0), new L("The client is not logged in. Cannot do the operation", vA);
                                case 7:
                                    if (n.joinedChannels.has(this)) { e.next = 9; break }
                                    throw new L("The channel does not join. Cannot do the operation", uA);
                                case 9:
                                    e.prev = 9, n.requestChannelLeave(this, this.channelId), this.memberLeftLru.empty(), this.memberJoinedLru.empty(), this.attributesSeqLru.empty(), this.memberJoinStateLru.empty(), this.memberCount = 0, n.removeListener("channelTextMessage", this.onChannelTextMessage), n.removeListener("channelRawMessage", this.onChannelRawMessage), n.removeListener("channelMediaMessage", this.onChannelMediaMessage), n.removeListener("memberNotice", this.onMemberNotice), n.removeListener("channelAttributesUpdated", this.onAttributesUpdated), e.next = 32;
                                    break;
                                case 23:
                                    if (e.prev = 23, e.t1 = e.catch(9), this.logError(e.t1), !ta(e.t1)) { e.next = 30; break }
                                    throw void 0 === e.t1.code && (e.t1.code = er), fb("ChnLeave", { cname: this.channelId, lts: V.fromNumber(Date.now()), elapse: gb(n.startTime), errCode: er, sid: Ya(n.instanceId), userId: n.context.uid }, null !== (i = this.client.context.config.enableCloudProxy) && void 0 !== i && i), e.t1;
                                case 30:
                                    throw fb("ChnLeave", { cname: this.channelId, lts: V.fromNumber(Date.now()), elapse: gb(n.startTime), errCode: dr, sid: Ya(n.instanceId), userId: n.context.uid }, null !== (r = this.client.context.config.enableCloudProxy) && void 0 !== r && r), new Wc("The channel leave failure", { code: dr, originalError: e.t1 });
                                case 32:
                                    fb("ChnLeave", { cname: this.channelId, lts: V.fromNumber(Date.now()), elapse: gb(n.startTime), errCode: 0, sid: Ya(n.instanceId), userId: n.context.uid }, null !== (t = this.client.context.config.enableCloudProxy) && void 0 !== t && t);
                                case 33:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [0, 4],
                            [9, 23]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }()
            }, {
                key: "sendMessage",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s = this,
                            c = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    n = 1 < c.length && void 0 !== c[1] ? c[1] : {}, r = n.enableHistoricalMessaging, i = void 0 !== r && r, $m(t, Ih), e.prev = 2, o = this.getSession(), e.next = 9;
                                    break;
                                case 6:
                                    throw e.prev = 6, e.t0 = e.catch(2), new L("The client is not logged in. Cannot do the operation", Jh);
                                case 9:
                                    if (o.joinedChannels.has(this)) { e.next = 11; break }
                                    throw new L("The channel does not join. Cannot do the operation", jA);
                                case 11:
                                    if (this.client.connectionState !== us.RECONNECTING) { e.next = 16; break }
                                    return a = Date.now(), e.next = 15, new Promise((function(e, n) {
                                        var r = function() {
                                            var r = K(u.mark((function r() {
                                                var c;
                                                return u.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            return c = Date.now() - a, r.prev = 1, r.next = 4, Hg({ message: t, peerId: s.channelId, toPeer: !1, session: s.getSession(), errorCodes: { NOT_LOGGED_IN: Jh, TOO_OFTEN: Tq }, diff: c, logger: s.logger, options: { enableHistoricalMessaging: i, enableOfflineMessaging: !1 } });
                                                        case 4:
                                                            e(), r.next = 12;
                                                            break;
                                                        case 7:
                                                            r.prev = 7, r.t0 = r.catch(1), Ta(r.t0) && n(new eb(Yd(s.name, "sendMessageToPeer", 1e4), $k)), ta(r.t0) && n(r.t0), n(new da("Channel message send failure", { code: jg, originalError: r.t0 }));
                                                        case 12:
                                                            return r.prev = 12, clearTimeout(o), r.finish(12);
                                                        case 15:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r, null, [
                                                    [1, 7, 12, 15]
                                                ])
                                            })));
                                            return function() { return r.apply(this, arguments) }
                                        }();
                                        s.client.internalEmitter.once("RECONNECTED", r);
                                        var o = setTimeout((function() { s.client.internalEmitter.off("RECONNECTED", r), n(new eb(Yd(s.name, "sendMessageToPeer", 1e4), $k)) }), 9e3)
                                    }));
                                case 15:
                                    return e.abrupt("return");
                                case 16:
                                    if (this.client.connectionState === us.CONNECTED) { e.next = 18; break }
                                    throw new L("The client is not logged in. Cannot do the operation", Jh);
                                case 18:
                                    return e.prev = 18, e.next = 21, Hg({ message: t, peerId: this.channelId, toPeer: !1, session: this.getSession(), errorCodes: { NOT_LOGGED_IN: Jh, TOO_OFTEN: Tq }, diff: 0, logger: this.logger, options: { enableHistoricalMessaging: i, enableOfflineMessaging: !1 } });
                                case 21:
                                    e.next = 31;
                                    break;
                                case 23:
                                    if (e.prev = 23, e.t1 = e.catch(18), !Ta(e.t1)) { e.next = 27; break }
                                    throw new eb(Yd(this.name, "sendMessage", 1e4), $k);
                                case 27:
                                    if (!ta(e.t1)) { e.next = 30; break }
                                    throw this.logError(e.t1), e.t1;
                                case 30:
                                    throw new Wc("The channel message send failure", jg);
                                case 31:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [2, 6],
                            [18, 23]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "getMembers",
                value: function() {
                    var e = K(u.mark((function e() {
                        var t, n, r;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.prev = 0, e.prev = 1, t = this.getSession(), e.next = 8;
                                    break;
                                case 5:
                                    throw e.prev = 5, e.t0 = e.catch(1), new L("The client is not logged in. Cannot do the operation", qA);
                                case 8:
                                    if (t.joinedChannels.has(this)) { e.next = 10; break }
                                    throw new L("The channel does not join. Cannot do the operation", pA);
                                case 10:
                                    return n = this.getSession().requestChannelMemberList(this.channelId), e.next = 13, n.pipe(ea((function(e) { return e.memberInfos.map((function(e) { return e.account })) }))).toPromise();
                                case 13:
                                    return r = e.sent, this.info("Channel %s - get members success, %o", pa(this.channelId), r.map(pa)), e.abrupt("return", r);
                                case 18:
                                    if (e.prev = 18, e.t1 = e.catch(0), !ta(e.t1)) { e.next = 23; break }
                                    throw this.logError(e.t1), e.t1;
                                case 23:
                                    throw new Wc("The channel members get failure", nA);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [0, 18],
                            [1, 5]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }()
            }, { key: "hasOtherChannelJoined", value: function() { var e = this; return !this.getSession().joinedChannels.has(this) && Array.from(this.getSession().joinedChannels).some((function(t) { return t.channelId === e.channelId })) } }]), t
        }(ub()), ha(vb.prototype, "join", [Ob], Object.getOwnPropertyDescriptor(vb.prototype, "join"), vb.prototype), ha(vb.prototype, "leave", [Ob], Object.getOwnPropertyDescriptor(vb.prototype, "leave"), vb.prototype), ha(vb.prototype, "sendMessage", [Ob], Object.getOwnPropertyDescriptor(vb.prototype, "sendMessage"), vb.prototype), ha(vb.prototype, "getMembers", [Na], Object.getOwnPropertyDescriptor(vb.prototype, "getMembers"), vb.prototype), vb),
        A, Fb = T.ConnectionChangeReason,
        U = T.ConnectionState,
        vs = { DISCONNECTED: 1, CONNECTING: 2, CONNECTED: 3, RECONNECTING: 4, ABORTED: 5 },
        CD = { LOGIN: 1, LOGIN_SUCCESS: 2, LOGIN_FAILURE: 3, LOGIN_TIMEOUT: 4, INTERRUPTED: 5, LOGOUT: 6, BANNED_BY_SERVER: 7, REMOTE_LOGIN: 8 },
        DD = (A = function(e) {
            function t(e, i, o, a) {
                Y(this, t);
                var s = r.call(this, i, "RtmClient", !0);
                return m(n(s), "connectionState", U.DISCONNECTED), m(n(s), "internalEmitter", new fa), m(n(s), "context", void 0), m(n(s), "attributes", {}), m(n(s), "loginPromise", void 0), m(n(s), "attributeDrafts", new Set), m(n(s), "session", void 0), m(n(s), "lastLoginTime", void 0), m(n(s), "reconnId", 0), m(n(s), "channelAttributesCacheLru", new tc(void 0, { maxlen: 1e4 })), m(n(s), "invitationManager", void 0), m(n(s), "subscribedPeerStatusCache", {}), m(n(s), "peerStatusSeqLru", new tc(void 0, { maxlen: 1e4 })), m(n(s), "peerUnreachableTimers", {}), m(n(s), "mediaTaskManager", void 0), m(n(s), "setParameters", void 0), m(n(s), "updateConfig", void 0), m(n(s), "blacklistedIP", []), m(n(s), "userDropHandler", (function(e) {
                    if (s.connectionState !== U.ABORTED) switch (e) {
                        case 11:
                            s.logError("Kicked off by remote session"), s.onConnectionStateChanged(U.ABORTED, Fb.REMOTE_LOGIN);
                            break;
                        case 14:
                        case 15:
                        case 16:
                            s.logError("Server banned because of illegal ".concat({ 14: "User ID", 15: "IP", 16: "Channel Name" }[e])), s.onConnectionStateChanged(U.ABORTED, Fb.BANNED_BY_SERVER);
                            break;
                        default:
                            s.logError("User kicked off for unknown code: ".concat(e)), s.onConnectionStateChanged(U.ABORTED, Fb.INTERRUPTED)
                    }
                })), s.context = new kD(e, o, i), s.mediaTaskManager = new ms(i), s.context.config = o, s.internalEmitter.setMaxListeners(512), s.setParameters = a.bind(n(s)), s.updateConfig = a.bind(n(s)), s.invitationManager = new zD((function() { return s.session }), i), s.invitationManager.on("remoteInvitationInstance", (function(e) { s.emit("RemoteInvitationReceived", e) })), s
            }
            ma(t, e);
            var r = na(t);
            return Ia(t, [{
                key: "renewToken",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("string" == typeof t && 0 !== t.length) { e.next = 2; break }
                                    throw new I("Invalid argument", DA);
                                case 2:
                                    if (this.connectionState !== U.ABORTED) { e.next = 5; break }
                                    return e.next = 5, new Promise((function() {}));
                                case 5:
                                    if (this.connectionState === U.CONNECTED || this.connectionState === U.RECONNECTING) { e.next = 7; break }
                                    throw new L("The client is not logged in", GA);
                                case 7:
                                    if (void 0 !== this.session) { e.next = 9; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 9:
                                    return e.prev = 9, n = this.context.token, this.context.token = t, e.next = 14, this.session.connection.apClient.getApEdgeInfo$(!1).pipe(Dd((function() { return Error("No available edge address to connect") })), qe((function(e) { return e.pipe(ca((function(e) { if (ta(e)) throw e })), cd(2500), La(4)) })), La(1), ib(2e4), Ha((function(e) { return Ta(e) && o.warn("renewToken timed out"), aa(e) }))).toPromise();
                                case 14:
                                    r = e.sent, i = r.ticket, e.next = 27;
                                    break;
                                case 18:
                                    if (e.prev = 18, e.t0 = e.catch(9), this.context.token = n, e.t0.code !== gr && e.t0.code !== hr) { e.next = 23; break }
                                    throw new Ze("Invalid token", FA);
                                case 23:
                                    if (e.t0.code !== Mh) { e.next = 25; break }
                                    throw new Ze("The token expired", EA);
                                case 25:
                                    if (!Ta(e.t0)) { e.next = 27; break }
                                    throw new eb("Renew token timed out", CA);
                                case 27:
                                    this.session.curLoginSockets.filter((function(e) { return void 0 !== e })).forEach((function(e) { return e.ticket = i }));
                                case 28:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [9, 18]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "queryPeersOnlineStatus",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === U.CONNECTED) { e.next = 2; break }
                                    throw new L("The client is not logged in", BA);
                                case 2:
                                    if (void 0 !== this.session) { e.next = 4; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 4:
                                    if (!(!Array.isArray(t) || 0 === t.length || t.some((function(e) { return !Aa(e) })) || 256 < t.length)) { e.next = 6; break }
                                    throw new I("invalid arguments", lr);
                                case 6:
                                    return e.next = 8, this.session.requestPeersOnlineStatus(t).toPromise();
                                case 8:
                                    return n = e.sent, r = uc(Lk(n.userInfos, "account"), (function(e) { return !!e.ts })), Object.keys(r).forEach((function(e) {
                                        if (e in i.subscribedPeerStatusCache && i.subscribedPeerStatusCache[e] !== T.PeerOnlineState.UNREACHABLE) {
                                            var t = r[e] ? T.PeerOnlineState.ONLINE : T.PeerOnlineState.OFFLINE;
                                            i.emit("PeersOnlineStatusChanged", m({}, e, t)), i.subscribedPeerStatusCache[e] = t
                                        }
                                    })), e.abrupt("return", r);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "getChannelMemberCount",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s, c, l = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === U.CONNECTED) { e.next = 2; break }
                                    throw new L("The client is not logged in", mA);
                                case 2:
                                    if (void 0 !== this.session) { e.next = 4; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 4:
                                    if (Array.isArray(t) && t.every((function(e) { return "string" == typeof e })) && 0 !== t.length) { e.next = 6; break }
                                    throw new I("Invalid arguments: channelIds", Vq);
                                case 6:
                                    if (!(32 < t.length)) { e.next = 8; break }
                                    throw new I("getChannelMemberCount exceed limit of 32 channelIds", lA);
                                case 8:
                                    n = 0;
                                case 9:
                                    if (!(n < t.length)) { e.next = 16; break }
                                    if (Aa(r = t[n])) { e.next = 13; break }
                                    throw new I(["getChannelMemberCount channel id %s is invalid", r], Vq);
                                case 13:
                                    n++, e.next = 9;
                                    break;
                                case 16:
                                    return e.next = 18, this.session.requestGetChannelMemberCount(t).toPromise();
                                case 18:
                                    for (i = e.sent, o = i.groupInfos, a = {}, s = function(e) {
                                            var t = (e = o[e]).group,
                                                n = e.memberCount;
                                            Aa(t) && "number" == typeof n && (l.session.joinedChannels.forEach((function(e) { e.channelId === t && e.onMemberCountUpdated(n) })), a[t] = n)
                                        }, c = 0; c < o.length; c++) s(c);
                                    return e.abrupt("return", a);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "setLocalUserAttributes",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (wf({ attributes: t, maxAttrValueSize: 8192, maxAttrsCount: 32, maxTotalSize: 16384 }), this.connectionState === U.CONNECTED) { e.next = 3; break }
                                    throw new L("The client is not logged in", Vb);
                                case 3:
                                    if (void 0 !== this.session) { e.next = 5; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 5:
                                    return n = this.session.requestSetLocalUserAttributes(t).toPromise(), r = { attribute: t, promise: n }, this.attributeDrafts.add(r), e.prev = 8, e.next = 11, n;
                                case 11:
                                    this.attributes = t, e.next = 19;
                                    break;
                                case 14:
                                    if (e.prev = 14, e.t0 = e.catch(8), !ta(e.t0)) { e.next = 18; break }
                                    throw e.t0;
                                case 18:
                                    throw new I("arguments is not valid", Ka);
                                case 19:
                                    return e.prev = 19, this.attributeDrafts.delete(r), e.finish(19);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [8, 14, 19, 22]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "setChannelAttributes",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a, s, c = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < c.length && void 0 !== c[2] ? c[2] : {}, i = r.enableNotificationToChannelMembers, o = void 0 !== i && i, wf({ attributes: n, maxAttrValueSize: 8192, maxAttrsCount: 32, maxTotalSize: 32768 }), this.connectionState === U.CONNECTED) { e.next = 4; break }
                                    throw new L("The client is not logged in", Vb);
                                case 4:
                                    if (void 0 !== this.session) { e.next = 6; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 6:
                                    return a = this.session.requestSetChannelAttributes(t, n, o).toPromise(), e.prev = 7, e.next = 10, a;
                                case 10:
                                    s = uc(n, (function(e) { return new Blob([e]).size })), this.channelAttributesCacheLru.set(t, s), e.next = 19;
                                    break;
                                case 14:
                                    if (e.prev = 14, e.t0 = e.catch(7), !ta(e.t0)) { e.next = 18; break }
                                    throw e.t0;
                                case 18:
                                    throw new I("arguments is not valid", Ka);
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [7, 14]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, {
                key: "addOrUpdateLocalUserAttributes",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = va(va({}, this.attributes), t), wf({ attributes: t, maxAttrValueSize: 8192, maxAttrsCount: 32, maxTotalSize: 16384 }), wf({ attributes: n, maxAttrValueSize: 8192, maxAttrsCount: 32, maxTotalSize: 16384 }), this.connectionState === U.CONNECTED) { e.next = 5; break }
                                    throw new L("The client is not logged in", Vb);
                                case 5:
                                    if (void 0 !== this.session) { e.next = 7; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 7:
                                    return r = this.session.requestAddOrUpdateLocalUserAttributes(t).toPromise(), i = { attribute: n, promise: r }, this.attributeDrafts.add(i), e.prev = 10, e.next = 13, r;
                                case 13:
                                    this.attributes = n, e.next = 21;
                                    break;
                                case 16:
                                    if (e.prev = 16, e.t0 = e.catch(10), !ta(e.t0)) { e.next = 20; break }
                                    throw e.t0;
                                case 20:
                                    throw new I("arguments is not valid", lr);
                                case 21:
                                    return e.prev = 21, this.attributeDrafts.delete(i), e.finish(21);
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [10, 16, 21, 24]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "addOrUpdateChannelAttributes",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a, s, c, l, f = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < f.length && void 0 !== f[2] ? f[2] : {}, i = r.enableNotificationToChannelMembers, o = void 0 !== i && i, a = this.channelAttributesCacheLru.get(t, {}), s = uc(n, (function(e) { return new Blob([e]).size })), c = va(va({}, a), s), wf({ attributes: n, attrSizeMap: c, maxAttrValueSize: 8192, maxAttrsCount: 32, maxTotalSize: 32768 }), this.connectionState === U.CONNECTED) { e.next = 7; break }
                                    throw new L("The client is not logged in", Vb);
                                case 7:
                                    if (void 0 !== this.session) { e.next = 9; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 9:
                                    return l = this.session.requestAddOrUpdateChannelAttributes(t, n, o).toPromise(), e.prev = 10, e.next = 13, l;
                                case 13:
                                    this.channelAttributesCacheLru.set(t, c), e.next = 21;
                                    break;
                                case 16:
                                    if (e.prev = 16, e.t0 = e.catch(10), !ta(e.t0)) { e.next = 20; break }
                                    throw e.t0;
                                case 20:
                                    throw new I("arguments is not valid", Ka);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [10, 16]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, {
                key: "deleteLocalUserAttributesByKeys",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Array.isArray(t) && 0 !== t.length && !t.some((function(e) { return 0 === e.length }))) { e.next = 2; break }
                                    throw new L("arguments is not valid", Ka);
                                case 2:
                                    if (this.connectionState === U.CONNECTED) { e.next = 4; break }
                                    throw new L("The client is not logged in", Vb);
                                case 4:
                                    if (void 0 !== this.session) { e.next = 6; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 6:
                                    return n = this.session.requestDeleteLocalUserAttributesByKeys(t).toPromise(), r = { attribute: Ik(this.attributes, t), promise: n }, this.attributeDrafts.add(r), e.prev = 9, e.next = 12, n;
                                case 12:
                                    for (i = 0; i < t.length; i++) o = t[i], delete this.attributes[o];
                                    e.next = 20;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(9), !ta(e.t0)) { e.next = 19; break }
                                    throw e.t0;
                                case 19:
                                    throw new I("arguments is not valid", Ka);
                                case 20:
                                    return e.prev = 20, this.attributeDrafts.delete(r), e.finish(20);
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [9, 15, 20, 23]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "deleteChannelAttributesByKeys",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a, s, c, l, f = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < f.length && void 0 !== f[2] ? f[2] : {}, i = r.enableNotificationToChannelMembers, o = void 0 !== i && i, Array.isArray(n) && 0 !== n.length && Aa(t) && !n.some((function(e) { return 0 === e.length || 512 < e.length }))) { e.next = 3; break }
                                    throw new L("arguments is not valid", Ka);
                                case 3:
                                    if (this.connectionState === U.CONNECTED) { e.next = 5; break }
                                    throw new L("The client is not logged in", Vb);
                                case 5:
                                    if (void 0 !== this.session) { e.next = 7; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 7:
                                    return a = this.session.requestDeleteChannelAttributesByKeys(t, n, o).toPromise(), e.prev = 8, e.next = 11, a;
                                case 11:
                                    if (s = this.channelAttributesCacheLru.get(t))
                                        for (c = 0; c < n.length; c++) l = n[c], delete s[l];
                                    e.next = 20;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(8), !ta(e.t0)) { e.next = 19; break }
                                    throw e.t0;
                                case 19:
                                    throw new I("arguments is not valid", Ka);
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [8, 15]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, {
                key: "clearLocalUserAttributes",
                value: function() {
                    var e = K(u.mark((function e() {
                        var t, n;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === U.CONNECTED) { e.next = 2; break }
                                    throw new L("The client is not logged in", Vb);
                                case 2:
                                    if (void 0 !== this.session) { e.next = 4; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 4:
                                    return t = this.session.requestClearLocalUserAttributes().toPromise(), n = { attribute: {}, promise: t }, this.attributeDrafts.add(n), e.prev = 7, e.next = 10, t;
                                case 10:
                                    this.attributes = {}, e.next = 18;
                                    break;
                                case 13:
                                    if (e.prev = 13, e.t0 = e.catch(7), !ta(e.t0)) { e.next = 17; break }
                                    throw e.t0;
                                case 17:
                                    throw new I("arguments is not valid", Ka);
                                case 18:
                                    return e.prev = 18, this.attributeDrafts.delete(n), e.finish(18);
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [7, 13, 18, 21]
                        ])
                    })));
                    return function() { return e.apply(this, arguments) }
                }()
            }, {
                key: "clearChannelAttributes",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = 1 < a.length && void 0 !== a[1] ? a[1] : {}, r = n.enableNotificationToChannelMembers, i = void 0 !== r && r, this.connectionState === U.CONNECTED) { e.next = 3; break }
                                    throw new L("The client is not logged in", Vb);
                                case 3:
                                    if (void 0 !== this.session) { e.next = 5; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 5:
                                    return o = this.session.requestClearChannelAttributes(t, i).toPromise(), e.prev = 6, e.next = 9, o;
                                case 9:
                                    this.channelAttributesCacheLru.delete(t), e.next = 17;
                                    break;
                                case 12:
                                    if (e.prev = 12, e.t0 = e.catch(6), !ta(e.t0)) { e.next = 16; break }
                                    throw e.t0;
                                case 16:
                                    throw new I("arguments is not valid", Ka);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [6, 12]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "getUserAttributes",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Aa(t)) { e.next = 2; break }
                                    throw new I("Not a valid user ID", Ka);
                                case 2:
                                    if (this.connectionState === U.CONNECTED) { e.next = 4; break }
                                    throw new L("The client is not logged in", Vb);
                                case 4:
                                    if (void 0 !== this.session) { e.next = 6; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 6:
                                    return e.prev = 6, e.next = 9, this.session.requestGetUserAttributeKeys(t).toPromise();
                                case 9:
                                    return n = e.sent, r = n.keys, e.next = 13, this.session.requestGetUserAttributesByKeys(t, r.slice(0, 512)).toPromise();
                                case 13:
                                    i = e.sent, e.next = 21;
                                    break;
                                case 16:
                                    if (e.prev = 16, e.t0 = e.catch(6), !ta(e.t0)) { e.next = 20; break }
                                    throw e.t0;
                                case 20:
                                    throw new I("arguments is not valid", Ka);
                                case 21:
                                    return e.abrupt("return", eq(i.attributeInfos.map((function(e) { return [e.key, e.value] }))));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [6, 16]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "getChannelAttributes",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s, c, l, f, h, p;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Aa(t)) { e.next = 2; break }
                                    throw new I("Not a valid channel ID", Ka);
                                case 2:
                                    if (this.connectionState === U.CONNECTED) { e.next = 4; break }
                                    throw new L("The client is not logged in", Vb);
                                case 4:
                                    if (void 0 !== this.session) { e.next = 6; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 6:
                                    return e.prev = 6, e.next = 9, this.session.requestGetChannelAttributesKeys(t).toPromise();
                                case 9:
                                    return n = e.sent, r = n.keys, e.next = 13, this.session.requestGetChannelAttributesByKeys(t, r).toPromise();
                                case 13:
                                    i = e.sent, o = i.attributeMaps, e.next = 22;
                                    break;
                                case 17:
                                    if (e.prev = 17, e.t0 = e.catch(6), !ta(e.t0)) { e.next = 21; break }
                                    throw e.t0;
                                case 21:
                                    throw new I("arguments is not valid", Ka);
                                case 22:
                                    a = {}, s = 0;
                                case 24:
                                    if (!(s < o.length)) { e.next = 32; break }
                                    if (c = o[s], l = c.key, f = c.ms, h = c.value, p = c.origin, "string" == typeof l && V.isLong(f) && "string" == typeof h && Aa(p)) { e.next = 28; break }
                                    return e.abrupt("break", 32);
                                case 28:
                                    a[l] = { value: h, lastUpdateUserId: p, lastUpdateTs: f.toNumber() };
                                case 29:
                                    s++, e.next = 24;
                                    break;
                                case 32:
                                    return this.channelAttributesCacheLru.set(t, uc(a, (function(e) { return new Blob([e.value]).size }))), e.abrupt("return", a);
                                case 34:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [6, 17]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "getChannelAttributesByKeys",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a, s, c, l, f, h, p;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === U.CONNECTED) { e.next = 2; break }
                                    throw new L("The client is not logged in", Vb);
                                case 2:
                                    if (void 0 !== this.session) { e.next = 4; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 4:
                                    return Om(t, n), e.prev = 5, e.next = 8, this.session.requestGetChannelAttributesByKeys(t, n).toPromise();
                                case 8:
                                    r = e.sent, i = r.attributeMaps, e.next = 17;
                                    break;
                                case 12:
                                    if (e.prev = 12, e.t0 = e.catch(5), !ta(e.t0)) { e.next = 16; break }
                                    throw e.t0;
                                case 16:
                                    throw new I("arguments is not valid", Ka);
                                case 17:
                                    o = {}, a = this.channelAttributesCacheLru.get(t, {}), s = 0;
                                case 20:
                                    if (!(s < i.length)) { e.next = 29; break }
                                    if (c = i[s], l = c.key, f = c.ms, h = c.value, p = c.origin, "string" == typeof l && V.isLong(f) && "string" == typeof h && Aa(p)) { e.next = 24; break }
                                    return e.abrupt("break", 29);
                                case 24:
                                    a[l] = new Blob([h]).size, o[l] = { value: h, lastUpdateUserId: p, lastUpdateTs: f.toNumber() };
                                case 26:
                                    s++, e.next = 20;
                                    break;
                                case 29:
                                    return this.channelAttributesCacheLru.set(t, a), e.abrupt("return", o);
                                case 31:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [5, 12]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, {
                key: "getUserAttributesByKeys",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === U.CONNECTED) { e.next = 2; break }
                                    throw new L("The client is not logged in", Vb);
                                case 2:
                                    if (void 0 !== this.session) { e.next = 4; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 4:
                                    return Om(t, n), e.prev = 5, e.next = 8, this.session.requestGetUserAttributesByKeys(t, n).toPromise();
                                case 8:
                                    r = e.sent, e.next = 16;
                                    break;
                                case 11:
                                    if (e.prev = 11, e.t0 = e.catch(5), !ta(e.t0)) { e.next = 15; break }
                                    throw e.t0;
                                case 15:
                                    throw new I("arguments is not valid", Ka);
                                case 16:
                                    return e.abrupt("return", eq(r.attributeInfos.map((function(e) { return [e.key, e.value] }))));
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [5, 11]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, {
                key: "login",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Wk = !0, n = Cg(), r = t.token, t.token === this.context.appId && (r = void 0), setTimeout((function() {
                                            var e;
                                            fb("Session", { appId: a.context.appId, did: navigator.userAgent, elapse: gb(a.session && a.session.startTime), index: { index1: t.uid, index2: a.context.appId, index3: "enableLogUpload=".concat(a.context.config.enableLogUpload) }, installId: ig, lts: V.fromNumber(Date.now()), os: 7, sid: Ya(n), token: r || "", userId: t.uid, ver: "1.4.4", buildno: 414, subVersion: 14, version: 4 }, null !== (e = a.context.config.enableCloudProxy) && void 0 !== e && e)
                                        }), 1e4), yd(t) && Aa(t.uid)) { e.next = 7; break }
                                    throw new I("not a valid user id", Lh);
                                case 7:
                                    if ("string" != typeof r || !r) { e.next = 11; break }
                                    this.context.token = r, e.next = 13;
                                    break;
                                case 11:
                                    if ("string" == typeof r || null == r) { e.next = 13; break }
                                    throw new I('The "token" is not a valid string.', Lh);
                                case 13:
                                    return i = Date.now(), this.context.sid = Ya(n), this.loginPromise = this.loginImpl({ uid: t.uid, instanceId: n }), this.info("RTM Client logging in as ".concat(pa(t.uid))), e.prev = 17, e.next = 20, this.loginPromise;
                                case 20:
                                    e.next = 27;
                                    break;
                                case 22:
                                    throw e.prev = 22, e.t0 = e.catch(17), ta(e.t0) && fb("Link", { ackedServerIp: "", destServerIp: "", ec: e.t0.code || 1, sc: e.t0.serverCode, elapse: gb(this.session && this.session.startTime), lts: V.fromNumber(Date.now()), responseTime: Date.now() - i, sid: Ya(n), userId: t.uid }, null !== (o = this.context.config.enableCloudProxy) && void 0 !== o && o), this.context.token = void 0, e.t0;
                                case 27:
                                    return e.prev = 27, this.loginPromise = void 0, e.finish(27);
                                case 30:
                                    Wk = !1;
                                case 31:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [17, 22, 27, 30]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "logout",
                value: function() {
                    var e = K(u.mark((function e() {
                        var t;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.loginPromise) { e.next = 3; break }
                                    return e.next = 3, this.loginPromise;
                                case 3:
                                    if (this.connectionState !== U.DISCONNECTED) { e.next = 6; break }
                                    throw this.logError("Already in logout state"), new L("Logout failure. The client has already been logged out", ir);
                                case 6:
                                    if (this.connectionState !== U.ABORTED) { e.next = 10; break }
                                    return this.info('Reset connection state from "ABORTED" to "DISCONNECTED"'), this.onConnectionStateChanged(U.DISCONNECTED, Fb.LOGOUT), e.abrupt("return");
                                case 10:
                                    if (void 0 !== this.session) { e.next = 13; break }
                                    return this.onConnectionStateChanged(U.DISCONNECTED, Fb.LOGOUT), e.abrupt("return");
                                case 13:
                                    return fb("Logout", { elapse: gb(this.session.startTime), lts: V.fromNumber(Date.now()), sid: Ya(this.session.instanceId), userId: this.context.uid }, null !== (t = this.context.config.enableCloudProxy) && void 0 !== t && t), e.next = 16, this.session.logoutHandler();
                                case 16:
                                    this.onConnectionStateChanged(U.DISCONNECTED, Fb.LOGOUT), this.log("Log out success");
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function() { return e.apply(this, arguments) }
                }()
            }, {
                key: "logoutSync",
                value: function() {
                    var e, t = this;
                    if (this.connectionState === U.DISCONNECTED) throw this.logError("Already in logout state"), new L("Logout failure. The client has already been logged out", ir);
                    this.connectionState === U.ABORTED ? this.info('Reset connection state from "ABORTED" to "DISCONNECTED"') : void 0 !== this.session && (fb("Logout", { elapse: gb(this.session.startTime), lts: V.fromNumber(Date.now()), sid: Ya(this.session.instanceId), userId: this.context.uid }, null !== (e = this.context.config.enableCloudProxy) && void 0 !== e && e), this.session.logoutHandler().then((function() { t.log("Log out success") }))), this.onConnectionStateChanged(U.DISCONNECTED, Fb.LOGOUT)
                }
            }, {
                key: "sendMessageToPeer",
                value: function() {
                    var e = K(u.mark((function e(t, n) {
                        var r, i, o, a, s, c, l = this,
                            f = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = 2 < f.length && void 0 !== f[2] ? f[2] : {}, i = r.enableOfflineMessaging, o = void 0 !== i && i, a = r.enableHistoricalMessaging, s = void 0 !== a && a, $m(t, we), this.connectionState !== U.RECONNECTING) { e.next = 5; break }
                                    return c = Date.now(), e.abrupt("return", new Promise((function(e, r) {
                                        var i = function() {
                                            var i = K(u.mark((function i() {
                                                var f;
                                                return u.wrap((function(i) {
                                                    for (;;) switch (i.prev = i.next) {
                                                        case 0:
                                                            if (void 0 !== l.session) { i.next = 2; break }
                                                            throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                                        case 2:
                                                            return f = Date.now() - c, i.prev = 3, i.t0 = e, i.next = 7, Hg({ message: t, peerId: n, toPeer: !0, session: l.session, errorCodes: { NOT_LOGGED_IN: cl, TOO_OFTEN: kr }, diff: f, logger: l.logger, options: { enableHistoricalMessaging: s, enableOfflineMessaging: o } });
                                                        case 7:
                                                            i.t1 = i.sent, (0, i.t0)(i.t1), i.next = 16;
                                                            break;
                                                        case 11:
                                                            i.prev = 11, i.t2 = i.catch(3), Ta(i.t2) && r(new eb(Yd(l.name, "sendMessageToPeer", 1e4), al)), ta(i.t2) && r(i.t2), r(new da("Peer-to-peer message send failure", { code: jr, originalError: i.t2 }));
                                                        case 16:
                                                            return i.prev = 16, clearTimeout(a), i.finish(16);
                                                        case 19:
                                                        case "end":
                                                            return i.stop()
                                                    }
                                                }), i, null, [
                                                    [3, 11, 16, 19]
                                                ])
                                            })));
                                            return function() { return i.apply(this, arguments) }
                                        }();
                                        l.internalEmitter.once("RECONNECTED", i);
                                        var a = setTimeout((function() { l.internalEmitter.off("RECONNECTED", i), r(new eb(Yd(l.name, "sendMessageToPeer", 1e4), al)) }), 9e3)
                                    })));
                                case 5:
                                    if (this.connectionState === U.CONNECTED) { e.next = 7; break }
                                    throw new L("Failed to send the peer-to-peer message. The client is not logged in", cl);
                                case 7:
                                    if (void 0 !== this.session) { e.next = 9; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 9:
                                    return e.prev = 9, e.next = 12, Hg({ message: t, peerId: n, toPeer: !0, session: this.session, errorCodes: { NOT_LOGGED_IN: cl, TOO_OFTEN: kr }, diff: 0, logger: this.logger, options: { enableHistoricalMessaging: s, enableOfflineMessaging: o } });
                                case 12:
                                    return e.abrupt("return", e.sent);
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(9), !Ta(e.t0)) { e.next = 19; break }
                                    throw new eb(Yd(this.name, "sendMessageToPeer", 1e4), al);
                                case 19:
                                    if (!ta(e.t0)) { e.next = 21; break }
                                    throw e.t0;
                                case 21:
                                    throw new da("Peer-to-peer message send failure", { code: jr, originalError: e.t0 });
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [9, 15]
                        ])
                    })));
                    return function(t, n) { return e.apply(this, arguments) }
                }()
            }, { key: "createChannel", value: function(e) { var t = this; if (!Aa(e)) throw new I(["The %s in the arguments is invalid", Object.keys({ channelId: e })[0]], kA); return new BD(e, (function() { return t.session }), this, this.logger) } }, { key: "createLocalInvitation", value: function(e) { if (!Aa(e)) throw new I(["The %s in the arguments is invalid", Object.keys({ calleeId: e })[0]], xc); return this.invitationManager.genLocalInvitation(e) } }, {
                key: "subscribePeersOnlineStatus",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s, c, l, f, h, p, d, v, b = this;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === U.CONNECTED) { e.next = 2; break }
                                    throw new L("The client is not logged in", dl);
                                case 2:
                                    if (void 0 !== this.session) { e.next = 4; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 4:
                                    if (Array.isArray(t) && 0 !== t.length) { e.next = 6; break }
                                    throw new I("Invalid arguments: peerIds", lg);
                                case 6:
                                    n = 0;
                                case 7:
                                    if (!(n < t.length)) { e.next = 14; break }
                                    if (Aa(r = t[n])) { e.next = 11; break }
                                    throw new I(["subscribePeersOnlineStatus peer id %s is invalid", r], lg);
                                case 11:
                                    n++, e.next = 7;
                                    break;
                                case 14:
                                    if (!(512 < (i = t && t.length ? xk(t) : []).length + Object.keys(this.subscribedPeerStatusCache).length)) { e.next = 17; break }
                                    throw new jb("Subscribed peers overflows", nr);
                                case 17:
                                    return e.next = 19, this.session.requestSubscribePeersOnlineStatus(i).toPromise();
                                case 19:
                                    o = e.sent, a = o.errors, s = [], c = [], l = 0;
                                case 24:
                                    if (!(l < a.length)) { e.next = 32; break }
                                    if (f = a[l], h = f.code, "string" == typeof(p = f.account)) { e.next = 28; break }
                                    throw new da("Returned account is invalid", mr);
                                case 28:
                                    0 !== h && s.push(p);
                                case 29:
                                    l++, e.next = 24;
                                    break;
                                case 32:
                                    for (d = 0; d < i.length; d++) v = i[d], s.includes(v) || (c.push(v), this.subscribedPeerStatusCache[v] = void 0);
                                    if (this.session.requestPeersOnlineStatus(c).pipe(ea((function(e) { return uc(Lk(e.userInfos, "account"), (function(e) { return !!e.ts })) }))).subscribe((function(e) { e = uc(e, (function(e, t) { return e = e ? T.PeerOnlineState.ONLINE : T.PeerOnlineState.OFFLINE, b.subscribedPeerStatusCache[t] = e })), b.emit("PeersOnlineStatusChanged", e) })), 0 === s.length) { e.next = 36; break }
                                    throw new da("Subscription failed", mr);
                                case 36:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "unsubscribePeersOnlineStatus",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === U.CONNECTED) { e.next = 2; break }
                                    throw new L("The client is not logged in", dl);
                                case 2:
                                    if (void 0 !== this.session) { e.next = 4; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 4:
                                    if (Array.isArray(t) && 0 !== t.length) { e.next = 6; break }
                                    throw new I("Invalid arguments: peerIds", lg);
                                case 6:
                                    n = 0;
                                case 7:
                                    if (!(n < t.length)) { e.next = 14; break }
                                    if (Aa(r = t[n])) { e.next = 11; break }
                                    throw new I(["subscribePeersOnlineStatus peer id %s is invalid", r], lg);
                                case 11:
                                    n++, e.next = 7;
                                    break;
                                case 14:
                                    if (!(512 < t.length)) { e.next = 16; break }
                                    throw new jb("Unsubscribed peers overflows", nr);
                                case 16:
                                    for (i = t && t.length ? xk(t) : [], this.session.requestUnsubscribePeersOnlineStatus(i), o = 0; o < i.length; o++) a = i[o], delete this.subscribedPeerStatusCache[a];
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "queryPeersBySubscriptionOption",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.connectionState === U.CONNECTED) { e.next = 2; break }
                                    throw new L("The client is not logged in", dl);
                                case 2:
                                    if (t !== T.PeerSubscriptionOption.ONLINE_STATUS) { e.next = 4; break }
                                    return e.abrupt("return", Object.keys(this.subscribedPeerStatusCache));
                                case 4:
                                    throw new I("Subscription option not supported", lg);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, { key: "createMessage", value: function(e) { return "IMAGE" === e.messageType ? va({ width: 0, height: 0, fileName: "", description: "", thumbnail: new Blob, thumbnailWidth: 0, thumbnailHeight: 0, size: 0 }, e) : "FILE" === e.messageType ? va({ fileName: "", description: "", thumbnail: new Blob, size: 0 }, e) : e } }, {
                key: "downloadMedia",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s, c, l, f, h, p, d, v, b, g = this,
                            y = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = 1 < y.length && void 0 !== y[1] ? y[1] : {}, "string" == typeof t) { e.next = 3; break }
                                    throw new I("invalid mediaId format", el);
                                case 3:
                                    if (e.prev = 3, r = t.split("z"), i = sa(r, 3), o = i[0], a = i[1], s = i[2], c = o.slice(1, 65), l = nD(c), f = parseInt(o.slice(65), 10), h = parseInt(a, 10), p = parseInt(s, 10), !(Number.isNaN(f) || Number.isNaN(h) || Number.isNaN(p))) { e.next = 12; break }
                                    throw new I("Invalid mediaId content", el);
                                case 12:
                                    e.next = 19;
                                    break;
                                case 14:
                                    if (e.prev = 14, e.t0 = e.catch(3), !ta(e.t0)) { e.next = 18; break }
                                    throw e.t0;
                                case 18:
                                    throw new I("parse mediaId failure", { code: el, originalError: e.t0 });
                                case 19:
                                    if (this.connectionState === U.CONNECTED) { e.next = 21; break }
                                    throw new L("The client is not logged in, cannot download", OA);
                                case 21:
                                    if (void 0 !== this.session) { e.next = 23; break }
                                    throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" });
                                case 23:
                                    return d = this.mediaTaskManager.addDownloadTask({ unit: h, zone: f, hashHexStr: c, size: p }, (function() { if (void 0 === g.session) throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" }); return g.session.requestFileDownloadIndexGet({ hash: l, zone: f, unit: h, size: p }).toPromise() }), n), e.next = 26, this.mediaTaskManager.waitMediaTask(d);
                                case 26:
                                    return v = e.sent, b = v.payload, e.abrupt("return", b);
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [3, 14]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "createMediaMessageByUploading",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s, c, l, f, h, p, d, v, b, g, y, m, E, w, _, O, A, k, T, R = this,
                            N = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = 1 < N.length && void 0 !== N[1] ? N[1] : {}, r = 2 < N.length && void 0 !== N[2] ? N[2] : {}, yd(n)) { e.next = 4; break }
                                    throw new I("Invalid params", yf);
                                case 4:
                                    if (i = "thumbnailWidth" in n || "thumbnailHeight" in n || "width" in n || "height" in n, o = n.messageType, a = void 0 === o ? i ? "IMAGE" : "FILE" : o, s = n.description, c = void 0 === s ? "" : s, l = n.fileName, f = void 0 === l ? "" : l, h = n.thumbnail, "string" == typeof n.messageType && "string" == typeof c && "string" == typeof f && (Wm(h) || void 0 === h) && Wm(t)) { e.next = 8; break }
                                    throw new I("Invalid message params type", yf);
                                case 8:
                                    if (!i || "FILE" !== a) { e.next = 10; break }
                                    throw new I("Invalid message params, unexpected field in RtmFileMessage", yf);
                                case 10:
                                    if (!(33554432 < (p = t.size))) { e.next = 13; break }
                                    throw new jb("The payload size overflow 32 MB", IA);
                                case 13:
                                    return e.next = 15, Li(t);
                                case 15:
                                    return d = e.sent, e.next = 18, mD(d);
                                case 18:
                                    if (v = e.sent, this.connectionState === U.CONNECTED) { e.next = 21; break }
                                    throw new L("The client is not logged in", KA);
                                case 21:
                                    if ("IMAGE" !== a) { e.next = 29; break }
                                    return e.next = 24, hu(n, d);
                                case 24:
                                    b = e.sent, g = b.height, y = b.width, m = b.thumbnailWidth, E = b.thumbnailHeight;
                                case 29:
                                    return w = this.mediaTaskManager.addUploadTask({ file: new Uint8Array(d), hash: v }, (function() { if (void 0 === R.session) throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" }); return R.session.fetchFileUploadIndexGet({ hash: v, size: p }) }), (function(e, t) { if (void 0 === R.session) throw new Ga({ SESSION_NOT_FOUND: "Failed to get session of the client" }); return R.session.requestFileUploadIndexSet({ hash: v, unit: e, servers: t }).toPromise() }), r), e.next = 32, this.mediaTaskManager.waitMediaTask(w);
                                case 32:
                                    if (_ = e.sent, O = _.zone, A = _.retUnit, "IMAGE" !== a) { e.next = 38; break }
                                    return k = { height: g, width: y, fileName: f, size: p, description: c, thumbnail: h, messageType: a, thumbnailWidth: m, thumbnailHeight: E, mediaId: "0".concat(gs(v)).concat(O, "z").concat(A, "z").concat(p, "z").concat(g, "z").concat(y) }, e.abrupt("return", k);
                                case 38:
                                    return T = { fileName: f, size: p, description: c, mediaId: "0".concat(gs(v)).concat(O, "z").concat(A, "z").concat(p), thumbnail: h, messageType: a }, e.abrupt("return", T);
                                case 40:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "loginImpl",
                value: function() {
                    var e = K(u.mark((function e(t) {
                        var n, r, i, o, a, s, c, l = this,
                            f = arguments;
                        return u.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.uid, r = t.instanceId, i = 1 < f.length && void 0 !== f[1] && f[1], o = r, !(void 0 !== this.lastLoginTime && 500 > Date.now() - this.lastLoginTime)) { e.next = 5; break }
                                    throw new DC(["The frequency of login exceeded the limit of %d queries per second", 2], yA);
                                case 5:
                                    if (this.connectionState === U.DISCONNECTED || i) { e.next = 7; break }
                                    throw new L("The SDK is either logging in or has logged in the Agora RTM system", wA);
                                case 7:
                                    e.prev = 7, this.context.uid = n, e.next = 14;
                                    break;
                                case 11:
                                    throw e.prev = 11, e.t0 = e.catch(7), new I(["The %s in the arguments is invalid", Object.keys({ uid: n })[0]], Lh);
                                case 14:
                                    return i || this.onConnectionStateChanged(U.CONNECTING, Fb.LOGIN), (a = new es(this.context, this.logger, !1)).blacklistedIP = this.blacklistedIP, this.session = s = new ss(this.context, a, o, this.logger), c = function() { l.connectionState === U.CONNECTED && (l.onConnectionStateChanged(U.RECONNECTING, Fb.INTERRUPTED), l.session) && l.session.once("userJoined", (function() { l.onConnectionStateChanged(U.CONNECTED, Fb.LOGIN_SUCCESS) })) }, s.on("connectionLost", c), s.on("tokenExpired", (function() { l.emit("TokenExpired") })), s.once("userDrop", this.userDropHandler), this.session.on("peerTextMessage", (function(e) { l.emit("MessageFromPeer", { text: e.text, messageType: T.MessageType.TEXT }, e.peerId, e.properties) })), this.session.on("peerMediaMessage", (function(e) {
                                        var t = e.peerId,
                                            n = e.properties,
                                            r = e.messageType;
                                        e = e.details, "FILE" === r ? l.emit("MessageFromPeer", { messageType: T.MessageType.FILE, size: parseInt(qa(e.media_size), 10), description: qa(e.media_description), fileName: qa(e.media_filename), mediaId: qa(e.media_id), thumbnail: new Blob([e.media_thumbnail]) }, t, n) : "IMAGE" === r && l.emit("MessageFromPeer", { messageType: T.MessageType.IMAGE, size: parseInt(qa(e.media_size), 10), description: qa(e.media_description), fileName: qa(e.media_filename), mediaId: qa(e.media_id), thumbnail: new Blob([e.media_thumbnail]), height: parseInt(qa(e.media_height), 10), width: parseInt(qa(e.media_width), 10), thumbnailHeight: parseInt(qa(e.media_thumbnailheight), 10), thumbnailWidth: parseInt(qa(e.media_thumbnailwidth), 10) }, t, n)
                                    })), this.session.on("peerRawMessage", (function(e) { l.emit("MessageFromPeer", { rawMessage: e.raw, description: e.desc, messageType: T.MessageType.RAW }, e.peerId, e.properties) })), s.on("instanceChanged", (function(e) { return o = e })), s.on("peerOnlineStatusChanged", (function(e) {
                                        var t = e.instance.toString() + e.state,
                                            n = l.peerStatusSeqLru.get(t);
                                        !n || e.seq.greaterThan(n) ? (l.peerStatusSeqLru.set(t, e.seq), e.state !== l.subscribedPeerStatusCache[e.peerId] && l.emit("PeersOnlineStatusChanged", m({}, e.peerId, e.state)), l.subscribedPeerStatusCache[e.peerId] = e.state, clearTimeout(l.peerUnreachableTimers[t]), e.state === T.PeerOnlineState.UNREACHABLE && (l.peerUnreachableTimers[t] = setTimeout((function() { l.subscribedPeerStatusCache[e.peerId] === T.PeerOnlineState.UNREACHABLE && (l.subscribedPeerStatusCache[e.peerId] = T.PeerOnlineState.ONLINE, l.emit("PeersOnlineStatusChanged", m({}, e.peerId, T.PeerOnlineState.ONLINE))) }), 3e4))) : l.log("peerOnlineStatusChanged dedup for %s, %d", t, e.seq.toNumber())
                                    })), s.on("invitationMessage", this.invitationManager.invitationMessageHandler.bind(this.invitationManager)), s.on("channelAttributesUpdated", (function(e) {
                                        var t = e.channelId;
                                        e = e.attributeMaps;
                                        for (var n = {}, r = 0; r < e.length; r++) {
                                            var i = e[r],
                                                o = i.key,
                                                a = i.ms,
                                                s = i.value;
                                            if (i = i.origin, "string" != typeof o || !V.isLong(a) || "string" != typeof s || !Aa(i)) break;
                                            n[o] = new Blob([s]).size
                                        }
                                        l.channelAttributesCacheLru.set(t, n)
                                    })), s.on("userJoined", (function(e) {
                                        if (0 !== Object.keys(l.attributes).length) {
                                            if (void 0 === l.session) return;
                                            l.session.requestSetLocalUserAttributes(l.attributes, e).toPromise()
                                        }
                                        if (0 !== l.attributeDrafts.size)
                                            for (var t = function(t, n) {
                                                    var r = (t = n[t]).attribute;
                                                    t.promise.then((function() { void 0 !== l.session && l.session.requestSetLocalUserAttributes(r, e).toPromise() }))
                                                }, n = 0, r = Array.from(l.attributeDrafts); n < r.length; n++) t(n, r);
                                        0 !== Object.keys(l.subscribedPeerStatusCache).length && s.requestSubscribePeersOnlineStatus(Object.keys(l.subscribedPeerStatusCache))
                                    })), s.on("banEdgeIP", (function(e) { l.banIP(e) })), this.lastLoginTime = Date.now(), e.prev = 33, e.next = 36, s.loginHandler().toPromise();
                                case 36:
                                    this.mediaTaskManager.setAuthInfo({ ticket: s.connection.curOpenSockets.filter((function(e) { return void 0 !== e }))[0].ticket, instance: s.instanceId, useNewDomain: .5 <= Math.random(), loginOpt: s.userJoinOptions.toLong() }), e.next = 55;
                                    break;
                                case 39:
                                    if (e.prev = 39, e.t1 = e.catch(33), "loginRespTimeout" !== e.t1.name) { e.next = 48; break }
                                    return s.removeAllListeners(), e.next = 45, this.loginImpl({ uid: n, instanceId: r }, !0);
                                case 45:
                                    return e.abrupt("return");
                                case 48:
                                    if (!Ta(e.t1)) { e.next = 51; break }
                                    throw this.onConnectionStateChanged(U.DISCONNECTED, Fb.LOGIN_TIMEOUT), new eb(Yd(this.name, "login", 2e4), xA);
                                case 51:
                                    if (this.onConnectionStateChanged(U.DISCONNECTED, Fb.LOGIN_FAILURE), !ta(e.t1)) { e.next = 54; break }
                                    throw e.t1;
                                case 54:
                                    throw new da("Login failure", { code: fr, originalError: e.t1 });
                                case 55:
                                    this.onConnectionStateChanged(U.CONNECTED, Fb.LOGIN_SUCCESS);
                                case 56:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [7, 11],
                            [33, 39]
                        ])
                    })));
                    return function(t) { return e.apply(this, arguments) }
                }()
            }, {
                key: "onConnectionStateChanged",
                value: function(e, t) {
                    var n, r = this;
                    e === U.RECONNECTING && (this.reconnId += 1), fb("ConnectionStateChange", { elapse: gb(this.session && this.session.startTime), lts: V.fromNumber(Date.now()), newState: vs[e], oldState: vs[this.connectionState], reason: CD[t], sid: Ya(this.session && this.session.instanceId || V.fromNumber(0)), userId: this.context.uid, reconnId: this.reconnId }, null !== (n = this.context.config.enableCloudProxy) && void 0 !== n && n), this.connectionState === U.RECONNECTING && e === U.CONNECTED && (0 !== Object.keys(this.subscribedPeerStatusCache).length && void 0 !== this.session && this.session.requestPeersOnlineStatus(Object.keys(this.subscribedPeerStatusCache)).pipe(ea((function(e) { return uc(Lk(e.userInfos, "account"), (function(e) { return !!e.ts })) }))).subscribe((function(e) { e = uc(e, (function(e, t) { return e = e ? T.PeerOnlineState.ONLINE : T.PeerOnlineState.OFFLINE, r.subscribedPeerStatusCache[t] = e })), r.emit("PeersOnlineStatusChanged", e) })), this.internalEmitter.emit("RECONNECTED")), this.connectionState = e, e !== U.ABORTED && e !== U.DISCONNECTED || (this.reconnId = 0, this.attributes = {}, this.session && (this.session.removeAllListeners(), this.session.joinedChannels.clear(), this.session.msgDedupLru.empty(), this.session.dialogueSequenceLru.empty(), this.session.dialPendingMsgSubjectMap.clear()), this.session = void 0, this.channelAttributesCacheLru.empty(), this.peerStatusSeqLru.empty(), this.peerUnreachableTimers = {}, this.subscribedPeerStatusCache = {}, this.attributeDrafts.clear(), this.context.token = void 0), this.mediaTaskManager.emit("connectionStateChanged", e), this.emit("ConnectionStateChanged", e, t)
                }
            }, { key: "banIP", value: function(e) { console.log("ip banned", e), -1 === this.blacklistedIP.findIndex((function() { return e })) && this.blacklistedIP.push(e) } }]), t
        }(ub()), ha(A.prototype, "renewToken", [Na], Object.getOwnPropertyDescriptor(A.prototype, "renewToken"), A.prototype), ha(A.prototype, "queryPeersOnlineStatus", [Na], Object.getOwnPropertyDescriptor(A.prototype, "queryPeersOnlineStatus"), A.prototype), ha(A.prototype, "getChannelMemberCount", [Na], Object.getOwnPropertyDescriptor(A.prototype, "getChannelMemberCount"), A.prototype), ha(A.prototype, "setLocalUserAttributes", [Na], Object.getOwnPropertyDescriptor(A.prototype, "setLocalUserAttributes"), A.prototype), ha(A.prototype, "setChannelAttributes", [Na], Object.getOwnPropertyDescriptor(A.prototype, "setChannelAttributes"), A.prototype), ha(A.prototype, "addOrUpdateLocalUserAttributes", [Na], Object.getOwnPropertyDescriptor(A.prototype, "addOrUpdateLocalUserAttributes"), A.prototype), ha(A.prototype, "addOrUpdateChannelAttributes", [Na], Object.getOwnPropertyDescriptor(A.prototype, "addOrUpdateChannelAttributes"), A.prototype), ha(A.prototype, "deleteLocalUserAttributesByKeys", [Na], Object.getOwnPropertyDescriptor(A.prototype, "deleteLocalUserAttributesByKeys"), A.prototype), ha(A.prototype, "deleteChannelAttributesByKeys", [Na], Object.getOwnPropertyDescriptor(A.prototype, "deleteChannelAttributesByKeys"), A.prototype), ha(A.prototype, "clearLocalUserAttributes", [Ob], Object.getOwnPropertyDescriptor(A.prototype, "clearLocalUserAttributes"), A.prototype), ha(A.prototype, "clearChannelAttributes", [Na], Object.getOwnPropertyDescriptor(A.prototype, "clearChannelAttributes"), A.prototype), ha(A.prototype, "getUserAttributes", [Na], Object.getOwnPropertyDescriptor(A.prototype, "getUserAttributes"), A.prototype), ha(A.prototype, "getChannelAttributes", [Na], Object.getOwnPropertyDescriptor(A.prototype, "getChannelAttributes"), A.prototype), ha(A.prototype, "getChannelAttributesByKeys", [Na], Object.getOwnPropertyDescriptor(A.prototype, "getChannelAttributesByKeys"), A.prototype), ha(A.prototype, "getUserAttributesByKeys", [Na], Object.getOwnPropertyDescriptor(A.prototype, "getUserAttributesByKeys"), A.prototype), ha(A.prototype, "login", [Ob], Object.getOwnPropertyDescriptor(A.prototype, "login"), A.prototype), ha(A.prototype, "logout", [Ob], Object.getOwnPropertyDescriptor(A.prototype, "logout"), A.prototype), ha(A.prototype, "logoutSync", [Ob], Object.getOwnPropertyDescriptor(A.prototype, "logoutSync"), A.prototype), ha(A.prototype, "sendMessageToPeer", [Na], Object.getOwnPropertyDescriptor(A.prototype, "sendMessageToPeer"), A.prototype), ha(A.prototype, "createChannel", [Na], Object.getOwnPropertyDescriptor(A.prototype, "createChannel"), A.prototype), ha(A.prototype, "createLocalInvitation", [Na], Object.getOwnPropertyDescriptor(A.prototype, "createLocalInvitation"), A.prototype), ha(A.prototype, "subscribePeersOnlineStatus", [Na], Object.getOwnPropertyDescriptor(A.prototype, "subscribePeersOnlineStatus"), A.prototype), ha(A.prototype, "unsubscribePeersOnlineStatus", [Na], Object.getOwnPropertyDescriptor(A.prototype, "unsubscribePeersOnlineStatus"), A.prototype), ha(A.prototype, "queryPeersBySubscriptionOption", [Na], Object.getOwnPropertyDescriptor(A.prototype, "queryPeersBySubscriptionOption"), A.prototype), ha(A.prototype, "createMessage", [Ob], Object.getOwnPropertyDescriptor(A.prototype, "createMessage"), A.prototype), ha(A.prototype, "downloadMedia", [Ob], Object.getOwnPropertyDescriptor(A.prototype, "downloadMedia"), A.prototype), ha(A.prototype, "createMediaMessageByUploading", [Ob], Object.getOwnPropertyDescriptor(A.prototype, "createMediaMessageByUploading"), A.prototype), A),
        ul, vl, wl, xl, ws = null === (ul = /Chrome\/([0-9.]+)/.exec(null === (wl = window) || void 0 === wl || null === (xl = wl.navigator) || void 0 === xl ? void 0 : xl.userAgent)) || void 0 === ul || null === (vl = ul[1]) || void 0 === vl ? void 0 : vl.split(".")[0];
    if (ws && 88 <= parseInt(ws, 10) && !hf()) {
        var yl, be = document.createElement("video"),
            ce = document.createElement("canvas");
        be.setAttribute("style", "display:none"), be.setAttribute("muted", ""), be.muted = !0, be.setAttribute("autoplay", ""), be.autoplay = !0, be.setAttribute("playsinline", ""), ce.setAttribute("style", "display:none"), ce.setAttribute("width", "1"), ce.setAttribute("height", "1"), null === (yl = ce.getContext("2d")) || void 0 === yl || yl.fillRect(0, 0, 1, 1), be.srcObject = null == ce ? void 0 : ce.captureStream()
    }
    var xs = { LOG_FILTER_OFF: { error: !1, warn: !1, info: !1, track: !1, debug: !1 }, LOG_FILTER_ERROR: { error: !0, warn: !1, info: !1, track: !1, debug: !1 }, LOG_FILTER_WARNING: { error: !0, warn: !0, info: !1, track: !1, debug: !1 }, LOG_FILTER_INFO: { error: !0, warn: !0, info: !0, track: !1, debug: !1 }, LOG_FILTER_DEBUG: { error: !0, warn: !0, info: !0, track: !0, debug: !0 } },
        ys = { enableLogUpload: !1, logFilter: xs.LOG_FILTER_INFO, enableCloudProxy: !1 },
        Zd = va(va({
            createInstance: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                    n = 2 < arguments.length ? arguments[2] : void 0;
                if (!/^[\dA-Za-z]{32}$/.test(e)) throw new I(["The %s in the arguments is invalid", Object.keys({ appId: e })[0]], Uq);
                var r = Object.keys(t).filter((function(e) { return !(e in ys) }));
                if (0 !== r.length) throw new I("Invalid RTM config: ".concat(r.join(", ")), Uq);
                var i = va(va({}, ys), t);
                if (void 0 !== n && (!Array.isArray(n) || 0 === n.length)) throw new I("Invalid area config");
                if (null != n) {
                    if (!n.every((function(e) { return e in T.LegacyAreaCode }))) throw new I("Invalid area codes: ".concat(n.filter((function(e) { return !(e in T) })).join(", ")));
                    O = ye(n.map((function(e) { return LC[e] })))
                }
                n = ll = Za.__global_unique_id__ = (Za.__global_unique_id__ || 0) + 1;
                var o = PC(i);
                r = QC(i);
                var a = RC(i),
                    s = SC(n, i),
                    u = $r(n, i),
                    c = u("RTM:DEBUG", "<Entry> ");
                return Tr.rtmConfig = i, o("The Agora RTM Web SDK version is %s", "1.4.4"), t.enableCloudProxy && o("RTM cloud proxy enabled"), t.enableLogUpload && o("Log upload enabled"), O && c("Area is set to %s", Array.from(O.CODES).map((function(e) { return zf(F).find((function(t) { return F[t] === e })) })).join(", ")), c("Creating an RtmClient instance"), c('The Git commit ID is "'.concat("v1.4.4-0-g3d73f979", '"')), c("The App ID is %s", an(e, 4, 10, "*".repeat(6))), o("The process ID is %s", ig), c("The build is %s", "v1.4.4-0-g3d73f979"), c("NODE_ENV is %s", "production"), new DD(e, { genLogger: u, genTracker: s, info: o, warn: r, logError: a, loggerId: n }, i, (function(e) {
                    for (var t = 0, n = zf(e); t < n.length; t++) {
                        var r = n[t];
                        try {
                            var a = e[r];
                            null != a && (e.enableCloudProxy && o("RTM cloud proxy enabled"), e.enableLogUpload && o("Log upload enabled"), i[r] = a)
                        } catch (e) { throw new I(["The %s in the arguments is invalid", r], void 0) }
                    }
                }))
            },
            BUILD: "v1.4.4-0-g3d73f979",
            VERSION: "1.4.4",
            END_CALL_PREFIX: "AgoraRTMLegacyEndcallCompatibleMessagePrefix",
            processId: ig,
            ConnectionChangeReason: T.ConnectionChangeReason,
            ConnectionState: T.ConnectionState,
            LocalInvitationFailureReason: T.LocalInvitationFailureReason,
            LocalInvitationState: T.LocalInvitationState,
            RemoteInvitationFailureReason: T.RemoteInvitationFailureReason,
            RemoteInvitationState: T.RemoteInvitationState,
            MessageType: T.MessageType,
            PeerOnlineState: T.PeerOnlineState,
            PeerSubscriptionOption: T.PeerSubscriptionOption
        }, xs), {}, {
            setParameter: function(e, t) { Object.keys(Nc).includes(e) && (Nc[e] = t) },
            getParameter: function(e) { return Nc[e] },
            setArea: function(e) {
                var t = e.areaCodes;
                if (e = e.excludedArea, !Array.isArray(t) || 0 === t.length || !t.every((function(e) { return e in T.AreaCode }))) throw new I("Invalid area config");
                if (void 0 !== e && e === T.AreaCode.GLOBAL) throw new I("Excluded area cannot be global");
                if (void 0 === e) O = ye(t.map((function(e) { return F[e] })));
                else {
                    if (t.includes(e)) throw new I("Excluded area cannot be in areaCodes");
                    if (!(e in F)) throw new I("Invalid excludedArea:", e);
                    O = mu({ areas: t.map((function(e) { return F[e] })), excludedArea: F[e] })
                }
            }
        });
    return Zd
}));