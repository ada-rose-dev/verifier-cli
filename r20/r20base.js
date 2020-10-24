exports.base = function(window) {

    const $ = window.$;
    const navigator = window.navigator;

    /*!
     * Bootstrap v3.3.7 (http://getbootstrap.com)
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under the MIT license
     */
    if (window.console && window.console.log || (window.console = {
            log: function() {}
        }), function() {
            function t(e, n, i) {
                if (e === n) return 0 !== e || 1 / e == 1 / n;
                if (null == e || null == n) return e === n;
                if (e._chain && (e = e._wrapped), n._chain && (n = n._wrapped), e.isEqual && C.isFunction(e.isEqual)) return e.isEqual(n);
                if (n.isEqual && C.isFunction(n.isEqual)) return n.isEqual(e);
                var o = c.call(e);
                if (o != c.call(n)) return !1;
                switch (o) {
                    case "[object String]":
                        return e == String(n);
                    case "[object Number]":
                        return e != +e ? n != +n : 0 == e ? 1 / e == 1 / n : e == +n;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +e == +n;
                    case "[object RegExp]":
                        return e.source == n.source && e.global == n.global && e.multiline == n.multiline && e.ignoreCase == n.ignoreCase
                }
                if ("object" != typeof e || "object" != typeof n) return !1;
                for (var r = i.length; r--;)
                    if (i[r] == e) return !0;
                i.push(e);
                var s = 0,
                    a = !0;
                if ("[object Array]" == o) {
                    if (a = (s = e.length) == n.length)
                        for (; s-- && (a = s in e == s in n && t(e[s], n[s], i)););
                } else {
                    if ("constructor" in e != "constructor" in n || e.constructor != n.constructor) return !1;
                    for (var l in e)
                        if (C.has(e, l) && (s++, !(a = C.has(n, l) && t(e[l], n[l], i)))) break;
                    if (a) {
                        for (l in n)
                            if (C.has(n, l) && !s--) break;
                        a = !s
                    }
                }
                return i.pop(), a
            }
            var e = this,
                n = e._,
                i = {},
                o = Array.prototype,
                r = Object.prototype,
                s = Function.prototype,
                a = o.slice,
                l = o.unshift,
                c = r.toString,
                u = r.hasOwnProperty,
                h = o.forEach,
                d = o.map,
                p = o.reduce,
                f = o.reduceRight,
                g = o.filter,
                m = o.every,
                v = o.some,
                b = o.indexOf,
                y = o.lastIndexOf,
                w = Array.isArray,
                _ = Object.keys,
                x = s.bind,
                C = function(t) {
                    return new A(t)
                };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : e._ = C, C.VERSION = "1.3.1";
            var k = C.each = C.forEach = function(t, e, n) {
                if (null != t)
                    if (h && t.forEach === h) t.forEach(e, n);
                    else if (t.length === +t.length) {
                    for (var o = 0, r = t.length; o < r; o++)
                        if (o in t && e.call(n, t[o], o, t) === i) return
                } else
                    for (var s in t)
                        if (C.has(t, s) && e.call(n, t[s], s, t) === i) return
            };
            C.now = Date.now || function() {
                return (new Date).getTime()
            }, C.map = C.collect = function(t, e, n) {
                var i = [];
                return null == t ? i : d && t.map === d ? t.map(e, n) : (k(t, function(t, o, r) {
                    i[i.length] = e.call(n, t, o, r)
                }), t.length === +t.length && (i.length = t.length), i)
            }, C.reduce = C.foldl = C.inject = function(t, e, n, i) {
                var o = arguments.length > 2;
                if (null == t && (t = []), p && t.reduce === p) return i && (e = C.bind(e, i)), o ? t.reduce(e, n) : t.reduce(e);
                if (k(t, function(t, r, s) {
                        o ? n = e.call(i, n, t, r, s) : (n = t, o = !0)
                    }), !o) throw new TypeError("Reduce of empty array with no initial value");
                return n
            }, C.reduceRight = C.foldr = function(t, e, n, i) {
                var o = arguments.length > 2;
                if (null == t && (t = []), f && t.reduceRight === f) return i && (e = C.bind(e, i)), o ? t.reduceRight(e, n) : t.reduceRight(e);
                var r = C.toArray(t).reverse();
                return i && !o && (e = C.bind(e, i)), o ? C.reduce(r, e, n, i) : C.reduce(r, e)
            }, C.find = C.detect = function(t, e, n) {
                var i;
                return T(t, function(t, o, r) {
                    if (e.call(n, t, o, r)) return i = t, !0
                }), i
            }, C.filter = C.select = function(t, e, n) {
                var i = [];
                return null == t ? i : g && t.filter === g ? t.filter(e, n) : (k(t, function(t, o, r) {
                    e.call(n, t, o, r) && (i[i.length] = t)
                }), i)
            }, C.reject = function(t, e, n) {
                var i = [];
                return null == t ? i : (k(t, function(t, o, r) {
                    e.call(n, t, o, r) || (i[i.length] = t)
                }), i)
            }, C.every = C.all = function(t, e, n) {
                var o = !0;
                return null == t ? o : m && t.every === m ? t.every(e, n) : (k(t, function(t, r, s) {
                    if (!(o = o && e.call(n, t, r, s))) return i
                }), o)
            };
            var T = C.some = C.any = function(t, e, n) {
                e || (e = C.identity);
                var o = !1;
                return null == t ? o : v && t.some === v ? t.some(e, n) : (k(t, function(t, r, s) {
                    if (o || (o = e.call(n, t, r, s))) return i
                }), !!o)
            };
            C.include = C.contains = function(t, e) {
                var n = !1;
                return null == t ? n : b && t.indexOf === b ? -1 != t.indexOf(e) : n = T(t, function(t) {
                    return t === e
                })
            }, C.invoke = function(t, e) {
                var n = a.call(arguments, 2);
                return C.map(t, function(t) {
                    return (C.isFunction(e) ? e || t : t[e]).apply(t, n)
                })
            }, C.pluck = function(t, e) {
                return C.map(t, function(t) {
                    return t[e]
                })
            }, C.max = function(t, e, n) {
                if (!e && C.isArray(t)) return Math.max.apply(Math, t);
                if (!e && C.isEmpty(t)) return -Infinity;
                var i = {
                    computed: -Infinity
                };
                return k(t, function(t, o, r) {
                    var s = e ? e.call(n, t, o, r) : t;
                    s >= i.computed && (i = {
                        value: t,
                        computed: s
                    })
                }), i.value
            }, C.min = function(t, e, n) {
                if (!e && C.isArray(t)) return Math.min.apply(Math, t);
                if (!e && C.isEmpty(t)) return Infinity;
                var i = {
                    computed: Infinity
                };
                return k(t, function(t, o, r) {
                    var s = e ? e.call(n, t, o, r) : t;
                    s < i.computed && (i = {
                        value: t,
                        computed: s
                    })
                }), i.value
            }, C.shuffle = function(t) {
                var e, n = [];
                return k(t, function(t, i) {
                    0 == i ? n[0] = t : (e = Math.floor(Math.random() * (i + 1)), n[i] = n[e], n[e] = t)
                }), n
            }, C.sortBy = function(t, e, n) {
                return C.pluck(C.map(t, function(t, i, o) {
                    return {
                        value: t,
                        criteria: e.call(n, t, i, o)
                    }
                }).sort(function(t, e) {
                    var n = t.criteria,
                        i = e.criteria;
                    return n < i ? -1 : n > i ? 1 : 0
                }), "value")
            }, C.groupBy = function(t, e) {
                var n = {},
                    i = C.isFunction(e) ? e : function(t) {
                        return t[e]
                    };
                return k(t, function(t, e) {
                    var o = i(t, e);
                    (n[o] || (n[o] = [])).push(t)
                }), n
            }, C.sortedIndex = function(t, e, n) {
                n || (n = C.identity);
                for (var i = 0, o = t.length; i < o;) {
                    var r = i + o >> 1;
                    n(t[r]) < n(e) ? i = r + 1 : o = r
                }
                return i
            }, C.toArray = function(t) {
                return t ? t.toArray ? t.toArray() : C.isArray(t) ? a.call(t) : C.isArguments(t) ? a.call(t) : C.values(t) : []
            }, C.size = function(t) {
                return C.toArray(t).length
            }, C.first = C.head = function(t, e, n) {
                return null == e || n ? t[0] : a.call(t, 0, e)
            }, C.initial = function(t, e, n) {
                return a.call(t, 0, t.length - (null == e || n ? 1 : e))
            }, C.last = function(t, e, n) {
                return null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
            }, C.rest = C.tail = function(t, e, n) {
                return a.call(t, null == e || n ? 1 : e)
            }, C.compact = function(t) {
                return C.filter(t, function(t) {
                    return !!t
                })
            }, C.flatten = function(t, e) {
                return C.reduce(t, function(t, n) {
                    return C.isArray(n) ? t.concat(e ? n : C.flatten(n)) : (t[t.length] = n, t)
                }, [])
            }, C.without = function(t) {
                return C.difference(t, a.call(arguments, 1))
            }, C.uniq = C.unique = function(t, e, n) {
                var i = n ? C.map(t, n) : t,
                    o = [];
                return C.reduce(i, function(n, i, r) {
                    return 0 != r && (!0 === e ? C.last(n) == i : C.include(n, i)) || (n[n.length] = i, o[o.length] = t[r]), n
                }, []), o
            }, C.union = function() {
                return C.uniq(C.flatten(arguments, !0))
            }, C.intersection = C.intersect = function(t) {
                var e = a.call(arguments, 1);
                return C.filter(C.uniq(t), function(t) {
                    return C.every(e, function(e) {
                        return C.indexOf(e, t) >= 0
                    })
                })
            }, C.difference = function(t) {
                var e = C.flatten(a.call(arguments, 1));
                return C.filter(t, function(t) {
                    return !C.include(e, t)
                })
            }, C.zip = function() {
                for (var t = a.call(arguments), e = C.max(C.pluck(t, "length")), n = new Array(e), i = 0; i < e; i++) n[i] = C.pluck(t, "" + i);
                return n
            }, C.indexOf = function(t, e, n) {
                if (null == t) return -1;
                var i, o;
                if (n) return t[i = C.sortedIndex(t, e)] === e ? i : -1;
                if (b && t.indexOf === b) return t.indexOf(e);
                for (i = 0, o = t.length; i < o; i++)
                    if (i in t && t[i] === e) return i;
                return -1
            }, C.lastIndexOf = function(t, e) {
                if (null == t) return -1;
                if (y && t.lastIndexOf === y) return t.lastIndexOf(e);
                for (var n = t.length; n--;)
                    if (n in t && t[n] === e) return n;
                return -1
            }, C.range = function(t, e, n) {
                arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
                for (var i = Math.max(Math.ceil((e - t) / n), 0), o = 0, r = new Array(i); o < i;) r[o++] = t, t += n;
                return r
            };
            var E = function() {};
            C.bind = function(t, e) {
                if (t) {
                    var n, i;
                    if (t.bind === x && x) return x.apply(t, a.call(arguments, 1));
                    if (!C.isFunction(t)) throw new TypeError;
                    return i = a.call(arguments, 2), n = function() {
                        if (!(this instanceof n)) return t.apply(e, i.concat(a.call(arguments)));
                        E.prototype = t.prototype;
                        var o = new E,
                            r = t.apply(o, i.concat(a.call(arguments)));
                        return Object(r) === r ? r : o
                    }
                }
            }, C.bindAll = function(t) {
                var e = a.call(arguments, 1);
                return 0 == e.length && (e = C.functions(t)), k(e, function(e) {
                    t[e] = C.bind(t[e], t)
                }), t
            }, C.memoize = function(t, e) {
                var n = {};
                return e || (e = C.identity),
                    function() {
                        var i = e.apply(this, arguments);
                        return C.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
                    }
            }, C.delay = function(t, e) {
                var n = a.call(arguments, 2);
                return setTimeout(function() {
                    return t.apply(t, n)
                }, e)
            }, C.defer = function(t) {
                return C.delay.apply(C, [t, 1].concat(a.call(arguments, 1)))
            }, C.throttle = function(t, e, n) {
                var i, o, r, s, a = 0;
                n || (n = {});
                var l = function() {
                        a = !1 === n.leading ? 0 : C.now(), i = null, s = t.apply(o, r), i || (o = r = null)
                    },
                    c = function() {
                        var c = C.now();
                        a || !1 !== n.leading || (a = c);
                        var u = e - (c - a);
                        return o = this, r = arguments, u <= 0 || u > e ? (i && (clearTimeout(i), i = null), a = c, s = t.apply(o, r), i || (o = r = null)) : i || !1 === n.trailing || (i = setTimeout(l, u)), s
                    };
                return c.cancel = function() {
                    clearTimeout(i), a = 0, i = o = r = null
                }, c
            }, C.debounce = function(t, e) {
                var n;
                return function() {
                    var i = this,
                        o = arguments,
                        r = function() {
                            n = null, t.apply(i, o)
                        };
                    clearTimeout(n), n = setTimeout(r, e)
                }
            }, C.once = function(t) {
                var e, n = !1;
                return function() {
                    return n ? e : (n = !0, e = t.apply(this, arguments))
                }
            }, C.wrap = function(t, e) {
                return function() {
                    var n = [t].concat(a.call(arguments, 0));
                    return e.apply(this, n)
                }
            }, C.compose = function() {
                var t = arguments;
                return function() {
                    for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                    return e[0]
                }
            }, C.after = function(t, e) {
                return t <= 0 ? e() : function() {
                    if (--t < 1) return e.apply(this, arguments)
                }
            }, C.keys = _ || function(t) {
                if (t !== Object(t)) throw new TypeError("Invalid object");
                var e = [];
                for (var n in t) C.has(t, n) && (e[e.length] = n);
                return e
            }, C.values = function(t) {
                return C.map(t, C.identity)
            }, C.functions = C.methods = function(t) {
                var e = [];
                for (var n in t) C.isFunction(t[n]) && e.push(n);
                return e.sort()
            }, C.extend = function(t) {
                return k(a.call(arguments, 1), function(e) {
                    for (var n in e) t[n] = e[n]
                }), t
            }, C.defaults = function(t) {
                return k(a.call(arguments, 1), function(e) {
                    for (var n in e) null == t[n] && (t[n] = e[n])
                }), t
            }, C.clone = function(t) {
                return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t
            }, C.tap = function(t, e) {
                return e(t), t
            }, C.isEqual = function(e, n) {
                return t(e, n, [])
            }, C.isEmpty = function(t) {
                if (C.isArray(t) || C.isString(t)) return 0 === t.length;
                for (var e in t)
                    if (C.has(t, e)) return !1;
                return !0
            }, C.isElement = function(t) {
                return !(!t || 1 != t.nodeType)
            }, C.isArray = w || function(t) {
                return "[object Array]" == c.call(t)
            }, C.isObject = function(t) {
                return t === Object(t)
            }, C.isArguments = function(t) {
                return "[object Arguments]" == c.call(t)
            }, C.isArguments(arguments) || (C.isArguments = function(t) {
                return !(!t || !C.has(t, "callee"))
            }), C.isFunction = function(t) {
                return "[object Function]" == c.call(t)
            }, C.isString = function(t) {
                return "[object String]" == c.call(t)
            }, C.isNumber = function(t) {
                return "[object Number]" == c.call(t)
            }, C.isFinite = function(t) {
                return C.isNumber(t) && isFinite(t)
            }, C.isNaN = function(t) {
                return t != t
            }, C.isBoolean = function(t) {
                return !0 === t || !1 === t || "[object Boolean]" == c.call(t)
            }, C.isDate = function(t) {
                return "[object Date]" == c.call(t)
            }, C.isRegExp = function(t) {
                return "[object RegExp]" == c.call(t)
            }, C.isNull = function(t) {
                return null === t
            }, C.isUndefined = function(t) {
                return void 0 === t
            }, C.has = function(t, e) {
                return u.call(t, e)
            }, C.noConflict = function() {
                return e._ = n, this
            }, C.identity = function(t) {
                return t
            }, C.times = function(t, e, n) {
                for (var i = 0; i < t; i++) e.call(n, i)
            }, C.escape = function(t) {
                return ("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
            }, C.mixin = function(t) {
                k(C.functions(t), function(e) {
                    P(e, C[e] = t[e])
                })
            };
            var S = 0;
            C.uniqueId = function(t) {
                var e = S++;
                return t ? t + e : e
            }, C.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var $ = /.^/,
                I = function(t) {
                    return t.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
                };
            C.template = function(t, e) {
                var n = C.templateSettings,
                    i = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + t.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.escape || $, function(t, e) {
                        return "',_.escape(" + I(e) + "),'"
                    }).replace(n.interpolate || $, function(t, e) {
                        return "'," + I(e) + ",'"
                    }).replace(n.evaluate || $, function(t, e) {
                        return "');" + I(e).replace(/[\r\n\t]/g, " ") + ";__p.push('"
                    }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
                    o = new Function("obj", "_", i);
                return e ? o(e, C) : function(t) {
                    return o.call(this, t, C)
                }
            }, C.chain = function(t) {
                return C(t).chain()
            };
            var A = function(t) {
                this._wrapped = t
            };
            C.prototype = A.prototype;
            var L = function(t, e) {
                    return e ? C(t).chain() : t
                },
                P = function(t, e) {
                    A.prototype[t] = function() {
                        var t = a.call(arguments);
                        return l.call(t, this._wrapped), L(e.apply(C, t), this._chain)
                    }
                };
            C.mixin(C), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var e = o[t];
                A.prototype[t] = function() {
                    var n = this._wrapped;
                    e.apply(n, arguments);
                    var i = n.length;
                    return "shift" != t && "splice" != t || 0 !== i || delete n[0], L(n, this._chain)
                }
            }), k(["concat", "join", "slice"], function(t) {
                var e = o[t];
                A.prototype[t] = function() {
                    return L(e.apply(this._wrapped, arguments), this._chain)
                }
            }), A.prototype.chain = function() {
                return this._chain = !0, this
            }, A.prototype.value = function() {
                return this._wrapped
            }
        }.call(this), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
        /*
         * jQote2 - client-side Javascript templating engine
         * Copyright (C) 2010, aefxx
         * http://aefxx.com/
         *
         * Dual licensed under the WTFPL v2 or MIT (X11) licenses
         * WTFPL v2 Copyright (C) 2004, Sam Hocevar
         *
         * Date: Thu, Oct 21st, 2010
         * Version: 0.9.7
         */
        ! function(t) {
            function e(e, n) {
                throw t.extend(e, n), e
            }

            function n(t) {
                var e = [];
                if (p.call(t) !== a) return !1;
                for (var n = 0, i = t.length; n < i; n++) e[n] = t[n].jqote_id;
                return !!e.length && e.sort().join(".").replace(/(\b\d+\b)\.(?:\1(\.|$))+/g, "$1$2")
            }

            function i(e, n) {
                var o, r = [],
                    s = (n = n || h, p.call(e));
                if (s === c) return !!e.jqote_id && [e];
                if (s !== a) return [t.jqotec(e, n)];
                if (s === a)
                    for (var l = 0, u = e.length; l < u; l++)(o = i(e[l], n)) && r.push(o[0]);
                return !!r.length && r
            }
            var o = "UndefinedTemplateError",
                r = "TemplateCompilationError",
                s = "TemplateExecutionError",
                a = "[object Array]",
                l = "[object String]",
                c = "[object Function]",
                u = 1,
                h = "%",
                d = /^[^<]*(<[\w\W]+>)[^>]*$/,
                p = Object.prototype.toString;
            t.fn.extend({
                jqote: function(e, n) {
                    e = p.call(e) === a ? e : [e];
                    var i = "";
                    return this.each(function(o) {
                        for (var r = t.jqotec(this, n), s = 0; s < e.length; s++) i += r.call(e[s], o, s, e, r)
                    }), i
                }
            }), t.each({
                app: "append",
                pre: "prepend",
                sub: "html"
            }, function(e, o) {
                t.fn["jqote" + e] = function(r, s, a) {
                    var l, c, u = t.jqote(r, s, a),
                        h = d.test(u) ? t : function(e) {
                            return t(document.createTextNode(e))
                        };
                    return (l = n(i(r))) && (c = new RegExp("(^|\\.)" + l.split(".").join("\\.(.*)?") + "(\\.|$)")), this.each(function() {
                        var n = h(u);
                        t(this)[o](n), (3 === n[0].nodeType ? t(this) : n).trigger("jqote." + e, [n, c])
                    })
                }
            }), t.extend({
                jqote: function(t, n) {
                    var r = "",
                        s = i(t);
                    !1 === s && e(new Error("Empty or undefined template passed to $.jqote " + t), {
                        type: o
                    }), n = p.call(n) !== a ? [n] : n;
                    for (var l = 0, c = s.length; l < c; l++)
                        for (var u = 0; u < n.length; u++) r += s[l].call(n[u], l, u, n, s[l]);
                    return r
                },
                jqotec: function(n, i) {
                    i = i || h;
                    var a, c, f, g = p.call(n);
                    if (g === l && d.test(n)) {
                        if (c = f = n, a = t.jqotecache[n]) return a
                    } else if ((c = g === l || n.nodeType ? t(n) : n instanceof jQuery ? n : null)[0] && ((f = c[0].innerHTML) || (f = c.text())) || (console.log("Error finding template " + n), e(new Error("Empty or undefined template passed to $.jqotec"), {
                            type: o
                        })), a = t.jqotecache[t.data(c[0], "jqote_id")]) return a;
                    for (var m, v = "", b = f.replace(/\s*<!\[CDATA\[\s*|\s*\]\]>\s*|[\r\n\t]/g, "").split("<" + i).join(i + ">\x1b").split(i + ">"), y = 0, w = b.length; y < w; y++) v += "\x1b" !== b[y].charAt(0) ? "out+='" + b[y].replace(/(\\|["'])/g, "\\$1") + "'" : "=" === b[y].charAt(1) ? ";out+=(" + b[y].substr(2) + ");" : "!" === b[y].charAt(1) ? ";out+=$.jqotenc((" + b[y].substr(2) + "));" : ";" + b[y].substr(1);
                    v = "try{" + ('var out="";' + v + ";return out;").split("out+='';").join("").split('var out="";out+=').join("var out=") + '}catch(e){e.type="' + s + '";e.args=arguments;e.template=arguments.callee.toString();throw e;}';
                    try {
                        var _ = new Function("i, j, data, fn", v)
                    } catch (x) {
                        e(x, {
                            type: r
                        })
                    }
                    return m = c instanceof jQuery ? t.data(c[0], "jqote_id", u) : c, t.jqotecache[m] = (_.jqote_id = u++, _)
                },
                jqotefn: function(e) {
                    var n = p.call(e) === l && d.test(e) ? e : t.data(t(e)[0], "jqote_id");
                    return t.jqotecache[n] || !1
                },
                jqotetag: function(t) {
                    p.call(t) === l && (h = t)
                },
                jqotenc: function(t) {
                    return t.toString().replace(/&(?!\w+;)/g, "&#38;").split("<").join("&#60;").split(">").join("&#62;").split('"').join("&#34;").split("'").join("&#39;")
                },
                jqotecache: {}
            }), t.event.special.jqote = {
                add: function(t) {
                    var e, o = t.handler,
                        r = t.data ? p.call(t.data) !== a ? [t.data] : t.data : [];
                    t.namespace || (t.namespace = "app.pre.sub"), r.length && (e = n(i(r))) && (t.handler = function(t, n, i) {
                        return !i || i.test(e) ? o.apply(this, [t, n]) : null
                    })
                }
            }
        }(jQuery), $(function() {
            $.jqotetag("$")
        }),
        function(t) {
            t.fn.infinitescroll = function(e) {
                return t(this).each(function() {
                    var n = t(this),
                        i = t.extend({
                            url: null,
                            triggerAt: 300,
                            page: 2,
                            params: {},
                            appendTo: ".list tbody",
                            container: t(document),
                            callback: function() {},
                            precheck: function() {
                                return !0
                            },
                            eventsuffix: ""
                        }, e),
                        o = null,
                        r = !1,
                        s = function() {
                            if (null !== i.url) {
                                var e = i.container.height() - n.scrollTop() - n.height();
                                if (i.force || i.triggerAt >= e) {
                                    if (i.force = !1, o && o.readyState < 4 && o.readyState > 0) return;
                                    t(i.appendTo).trigger("infinitescroll.beforesend");
                                    var s = i.params;
                                    s.page = i.page;
                                    var a = function(e) {
                                        "{}" !== e && "[]" !== e ? (i.callback(e), i.page++, t(i.appendTo).trigger("infinitescroll.finish")) : (r = !0, t(i.appendTo).trigger("infinitescroll.maxreached"))
                                    };
                                    o = "get" == i.requestType ? t.get(i.url + "/" + s.page, a, "html") : t.post(i.url, s, a, "html")
                                }
                            }
                        };
                    n.bind("infinitescroll.scrollpage" + i.eventsuffix, function(t, e) {
                        i.page = e, s()
                    }), n.bind("scroll.is" + i.eventsuffix, function() {
                        !r && i.precheck() && s()
                    }), s()
                })
            }
        }(jQuery),
        /*
         * jQuery Hotkeys Plugin
         * Copyright 2010, John Resig
         * Dual licensed under the MIT or GPL Version 2 licenses.
         *
         * Based upon the plugin by Tzury Bar Yochay:
         * http://github.com/tzuryby/hotkeys
         *
         * Original idea by:
         * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
         */
        function(t) {
            function e(e) {
                if ("string" == typeof e.data) {
                    var n = e.handler,
                        i = e.data.toLowerCase().split(" ");
                    e.handler = function(e) {
                        if (!(this !== e.target && (/textarea|select/i.test(e.target.nodeName) || "text" === e.target.type) || this !== e.target && e.target.isContentEditable)) {
                            var o = "keypress" !== e.type && t.hotkeys.specialKeys[e.which],
                                r = String.fromCharCode(e.which).toLowerCase(),
                                s = "",
                                a = {};
                            e.altKey && "alt" !== o && (s += "alt+"), e.ctrlKey && "ctrl" !== o && (s += "ctrl+"), e.metaKey && !e.ctrlKey && "meta" !== o && (s += "meta+"), e.shiftKey && "shift" !== o && (s += "shift+"), o ? a[s + o] = !0 : (a[s + r] = !0, a[s + t.hotkeys.shiftNums[r]] = !0, "shift+" === s && (a[t.hotkeys.shiftNums[r]] = !0));
                            for (var l = 0, c = i.length; l < c; l++)
                                if (a[i[l]]) return n.apply(this, arguments)
                        }
                    }
                }
            }
            t.hotkeys = {
                version: "0.8",
                specialKeys: {
                    8: "backspace",
                    9: "tab",
                    13: "return",
                    16: "shift",
                    17: "ctrl",
                    18: "alt",
                    19: "pause",
                    20: "capslock",
                    27: "esc",
                    32: "space",
                    33: "pageup",
                    34: "pagedown",
                    35: "end",
                    36: "home",
                    37: "left",
                    38: "up",
                    39: "right",
                    40: "down",
                    45: "insert",
                    46: "del",
                    96: "0",
                    97: "1",
                    98: "2",
                    99: "3",
                    100: "4",
                    101: "5",
                    102: "6",
                    103: "7",
                    104: "8",
                    105: "9",
                    106: "*",
                    107: "+",
                    109: "-",
                    110: ".",
                    111: "/",
                    112: "f1",
                    113: "f2",
                    114: "f3",
                    115: "f4",
                    116: "f5",
                    117: "f6",
                    118: "f7",
                    119: "f8",
                    120: "f9",
                    121: "f10",
                    122: "f11",
                    123: "f12",
                    144: "numlock",
                    145: "scroll",
                    191: "/",
                    224: "meta"
                },
                shiftNums: {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ": ",
                    "'": '"',
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                }
            }, t.each(["keydown", "keyup", "keypress"], function() {
                t.event.special[this] = {
                    add: e
                }
            })
        }(jQuery),
        function(t) {
            function e(e, n) {
                this.$element = t(e), this.options = n, this.enabled = !0, this.fixTitle()
            }
            e.prototype = {
                show: function() {
                    var e = this.getTitle();
                    if ("noshow" != e && e && this.enabled) {
                        var n = this.tip(),
                            i = t("body"),
                            o = 0,
                            r = 0;
                        this.$element.parents("#editor-wrapper").length > 0 && (o = (i = t("#editor-wrapper")).scrollTop(), r = i.scrollLeft());
                        var s = this.$element.parents("body");
                        s.hasClass("popoutwindow") && (i = s), this.options.filterhtml && (e = d20ext.utils.strip_tags(e, "<span><br><strong><em>")), n.find(".tipsy-inner")[this.options.html ? "html" : "text"](e), n[0].className = "tipsy", n.remove().css({
                            top: 0,
                            left: 0,
                            visibility: "hidden",
                            display: "block"
                        }).appendTo(i);
                        var a = t.extend({}, this.$element.offset(), {
                            width: this.$element[0].offsetWidth,
                            height: this.$element[0].offsetHeight
                        });
                        a.top = a.top + o, a.left = a.left + r;
                        var l, c = n[0].offsetWidth,
                            u = n[0].offsetHeight,
                            h = "function" == typeof this.options.gravity ? this.options.gravity.call(this.$element[0]) : this.options.gravity;
                        switch (h.charAt(0)) {
                            case "n":
                                l = {
                                    top: a.top + a.height + this.options.offset,
                                    left: a.left + a.width / 2 - c / 2
                                };
                                break;
                            case "s":
                                l = {
                                    top: a.top - u - this.options.offset,
                                    left: a.left + a.width / 2 - c / 2
                                };
                                break;
                            case "e":
                                l = {
                                    top: a.top + a.height / 2 - u / 2,
                                    left: a.left - c - this.options.offset
                                };
                                break;
                            case "w":
                                l = {
                                    top: a.top + a.height / 2 - u / 2,
                                    left: a.left + a.width + this.options.offset
                                }
                        }
                        2 == h.length && ("w" == h.charAt(1) ? l.left = a.left + a.width / 2 - 15 : l.left = a.left + a.width / 2 - c + 15), n.css(l).addClass("tipsy-" + h), this.options.fade ? n.stop().css({
                            opacity: 0,
                            display: "block",
                            visibility: "visible"
                        }).animate({
                            opacity: this.options.opacity
                        }) : n.css({
                            visibility: "visible",
                            opacity: this.options.opacity
                        }), n.on("mousedown", ".noshow", function() {
                            var e = t(this).attr("data-tutorial");
                            return window.ignore_tutorials.push(e), t(".tipsy").remove(), t.post("/editor/disable_tutorial/" + e), !1
                        })
                    }
                },
                hide: function() {
                    this.options.fade ? this.tip().stop().fadeOut(function() {
                        t(this).remove()
                    }) : this.tip().remove()
                },
                fixTitle: function() {
                    var t = this.$element;
                    (t.attr("title") || "string" != typeof t.attr("original-title")) && t.attr("original-title", t.attr("title") || "").removeAttr("title")
                },
                getTitle: function() {
                    var t, e = this.$element,
                        n = this.options;
                    return this.fixTitle(), "string" == typeof(n = this.options).title ? t = e.attr("title" == n.title ? "original-title" : n.title) : "function" == typeof n.title && (t = n.title.call(e[0])), (t = ("" + t).replace(/(^\s*|\s*$)/, "")) || n.fallback
                },
                tip: function() {
                    return this.$tip || (this.options.userscript ? this.$tip = t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner userscript-tipsy-inner"></div><div class="tipsy-userscript-warning">API or player-generated content</div>') : this.$tip = t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')), this.$tip
                },
                validate: function() {
                    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
                },
                enable: function() {
                    this.enabled = !0
                },
                disable: function() {
                    this.enabled = !1
                },
                toggleEnabled: function() {
                    this.enabled = !this.enabled
                }
            }, t.fn.tipsy = function(n) {
                function i(i) {
                    var o = t.data(i, "tipsy");
                    return o || (o = new e(i, t.fn.tipsy.elementOptions(i, n)), t.data(i, "tipsy", o)), o
                }

                function o() {
                    var t = i(this);
                    t.hoverState = "in", 0 == n.delayIn ? t.show() : (t.fixTitle(), setTimeout(function() {
                        "in" == t.hoverState && t.show()
                    }, n.delayIn))
                }

                function r() {
                    var t = i(this);
                    t.hoverState = "out", 0 == n.delayOut ? t.hide() : setTimeout(function() {
                        "out" == t.hoverState && t.hide()
                    }, n.delayOut)
                }
                if (!0 === n) return this.data("tipsy");
                if ("string" == typeof n) {
                    var s = this.data("tipsy");
                    return s && s[n](), this
                }
                if ((n = t.extend({}, t.fn.tipsy.defaults, n)).live || this.each(function() {
                        i(this)
                    }), "manual" != n.trigger) {
                    var a = "hover" == n.trigger ? "mouseenter" : "focus",
                        l = "hover" == n.trigger ? "mouseleave" : "blur";
                    n.live ? t(document).on(a, this.selector, o).on(l, this.selector, r) : this.bind(a, o).bind(l, r)
                }
                return this
            }, t.fn.tipsy.defaults = {
                delayIn: 0,
                delayOut: 0,
                fade: !1,
                fallback: "",
                gravity: "n",
                html: !1,
                live: !1,
                offset: 0,
                opacity: .9,
                title: "title",
                trigger: "hover",
                conatinerel: !1
            }, t.fn.tipsy.elementOptions = function(e, n) {
                return t.metadata ? t.extend({}, n, t(e).metadata()) : n
            }, t.fn.tipsy.autoNS = function() {
                return t(this).offset().top > t(document).scrollTop() + t(window).height() / 2 ? "s" : "n"
            }, t.fn.tipsy.autoWE = function() {
                return t(this).offset().left > t(document).scrollLeft() + t(window).width() / 2 ? "e" : "w"
            }
        }(jQuery),
        /* 
         * jQuery Lightly (v0.2)
         * http://getlightly.com
         * 
         * Copyright 2011, Steve Pocklington, Marty Batten
         * Inspired by Reeder App http://reederapp.com/mac/screens
         * 
         * Free to use under the MIT license.
         * http://www.opensource.org/licenses/mit-license.php
         * 
         * June 2011
         */
        function(t) {
            function e() {
                if (!("result" in arguments.callee)) {
                    var t = document.getElementsByTagName("script")[0],
                        e = t.style.color,
                        n = "rgba(0, 0, 0, 0.5)";
                    if (e == n) arguments.callee.result = !0;
                    else {
                        try {
                            t.style.color = n
                        } catch (i) {}
                        arguments.callee.result = t.style.color != e, t.style.color = e
                    }
                }
                return arguments.callee.result
            }

            function n(e, n, i) {
                /.+\.webm(\?.*)?$/i.test(e) ? n(!0) : (i("show"), t("<img/>").hide().attr({
                    src: e
                }).load(function() {
                    t.isFunction(n) && (i("hide"), n.call(this))
                }).error(function() {
                    i("hide"), console.log("Error loading image.")
                }))
            }
            t.fn.lightly = function(i) {
                var o, r = {
                        backgroundColor: "0,0,0",
                        backgroundOpacity: "0.75"
                    },
                    s = null,
                    a = t(window.document),
                    l = e(),
                    c = null,
                    u = 1,
                    h = function(e) {
                        c || (c = t("<div/>").attr("id", "lightly-loading").appendTo(a[0].body)), "show" == e ? (c.css("top", (t(window).height() - c.outerHeight()) / 2 + t(window).scrollTop() + "px"), c.css("left", (t(window).width() - c.outerWidth()) / 2 + t(window).scrollLeft() + "px"), clearInterval(o), c.fadeIn(200), o = setInterval(function() {
                            c.is(":visible") ? (c.css("background-position", "0px " + -40 * u + "px"), u = (u + 1) % 12) : clearInterval(o)
                        }, 66)) : "hide" == e && c.hide()
                    };
                return window.fakeLightly = function(e, n) {
                    var i = t("#fakelightly");
                    0 === i.length && (i = t("<div id='fakelightly'></div>")).appendTo("body"), console.log(n), n && (a = n), i.html("<a class='lightly' href='" + e + "'>Link</a>"), i.find("a").trigger("click"), a = t(window.document)
                }, this.each(function() {
                    i && t.extend(r, i), t(this).on("click", ".lightly", function(e) {
                        var i = a;
                        e.preventDefault(), $link = t(this);
                        var o = !1,
                            c = function() {
                                var e = i.find("#lightly-overlay");
                                return e.length > 0 ? e : ((s = t("<div/>").attr("id", "lightly-overlay").appendTo(i[0].body)).click(function() {
                                    l && c().css({
                                        opacity: 0,
                                        "-webkit-transform": "scale(1.1)",
                                        "-moz-transform": "scale(1.1)",
                                        "-ms-transform": "scale(1.1)",
                                        "-o-transform": "scale(1.1)",
                                        transform: "scale(1.1)"
                                    }), setTimeout(function() {
                                        c().hide()
                                    }, 200)
                                }), s)
                            },
                            u = $link.attr("href");
                        return n(u, function(t = !1) {
                            t ? c().html(`<video src="${u}" muted controls autoplay loop preload="auto" />`) : c().html("<img src='" + u + "' />"), o || (c().removeClass("animate").css({
                                "-webkit-transform": "scale(0.5)",
                                "-moz-transform": "scale(0.5)",
                                "-ms-transform": "scale(0.5)",
                                "-o-transform": "scale(0.5)",
                                transform: "scale(0.5)"
                            }), l && c().css({
                                "background-color": "rgba(" + r.backgroundColor + ",0)",
                                opacity: 0
                            }), c().show(), setTimeout(function() {
                                c().addClass("animate"), l && c().css({
                                    "-webkit-transform": "scale(1.05)",
                                    "-moz-transform": "scale(1.05)",
                                    "-ms-transform": "scale(1.05)",
                                    "-o-transform": "scale(1.05)",
                                    transform: "scale(1.05)",
                                    opacity: 1
                                }), setTimeout(function() {
                                    c().css({
                                        "-webkit-transform": "scale(1)",
                                        "-moz-transform": "scale(1)",
                                        "-ms-transform": "scale(1)",
                                        "-o-transform": "scale(1)",
                                        transform: "scale(1)"
                                    }), setTimeout(function() {
                                        c().css({
                                            "background-color": "rgba(" + r.backgroundColor + "," + r.backgroundOpacity + ")"
                                        })
                                    })
                                }, 200)
                            }, 10))
                        }, h), !1
                    })
                })
            }
        }(jQuery),
        function() {
            var t, e = [].slice;
            t = function() {
                var t, n, i, o, r, s;
                return r = /(^|[\s\n]|<br\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi, (o = 1 <= arguments.length ? e.call(arguments, 0) : []).length > 0 ? (i = o[0], n = function() {
                    var e;
                    for (t in e = [], i) s = i[t], "callback" !== t && e.push(" " + t + "='" + s + "'");
                    return e
                }().join(""), this.replace(r, function(t, e, o) {
                    return "" + e + (("function" == typeof i.callback ? i.callback(o) : void 0) || "<a href='" + o + "'" + n + ">" + o + "</a>")
                })) : this.replace(r, "$1<a href='$2'>$2</a>")
            }, String.prototype.autoLink = t
        }.call(this),
        /**
         * Super simple wysiwyg editor v0.8.9
         * https://summernote.org
         *
         * Copyright 2013- Alan Hong. and other contributors
         * summernote may be freely distributed under the MIT license.
         *
         * Date: 2017-12-25T06:39Z
         */
        function(t, e) {
            "object" == typeof exports && "undefined" != typeof module ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery)
        }(this, function(t) {
            "use strict";

            function e(t) {
                return function(e) {
                    return t === e
                }
            }

            function n(t, e) {
                return t === e
            }

            function i(t) {
                return function(e, n) {
                    return e[t] === n[t]
                }
            }

            function o() {
                return !0
            }

            function r() {
                return !1
            }

            function s(t) {
                return function() {
                    return !t.apply(t, arguments)
                }
            }

            function a(t, e) {
                return function(n) {
                    return t(n) && e(n)
                }
            }

            function l(t) {
                return t
            }

            function c(t, e) {
                return function() {
                    return t[e].apply(t, arguments)
                }
            }

            function u(t) {
                var e = ++fe + "";
                return t ? t + e : e
            }

            function h(t) {
                var e = $(document);
                return {
                    top: t.top + e.scrollTop(),
                    left: t.left + e.scrollLeft(),
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }
            }

            function d(t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
                return e
            }

            function p(t, e) {
                return (e = e || "") + t.split(".").map(function(t) {
                    return t.substring(0, 1).toUpperCase() + t.substring(1)
                }).join("")
            }

            function f(t, e, n) {
                var i, o = this;
                return function() {
                    var r = o,
                        s = arguments,
                        a = function() {
                            i = null, n || t.apply(r, s)
                        },
                        l = n && !i;
                    clearTimeout(i), i = setTimeout(a, e), l && t.apply(r, s)
                }
            }

            function g(t) {
                return t[0]
            }

            function m(t) {
                return t[t.length - 1]
            }

            function v(t) {
                return t.slice(0, t.length - 1)
            }

            function b(t) {
                return t.slice(1)
            }

            function y(t, e) {
                for (var n = 0, i = t.length; n < i; n++) {
                    var o = t[n];
                    if (e(o)) return o
                }
            }

            function w(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (!e(t[n])) return !1;
                return !0
            }

            function _(e, n) {
                return t.inArray(n, e)
            }

            function x(t, e) {
                return -1 !== _(t, e)
            }

            function C(t, e) {
                return e = e || ge.self, t.reduce(function(t, n) {
                    return t + e(n)
                }, 0)
            }

            function k(t) {
                for (var e = [], n = t.length, i = -1; ++i < n;) e[i] = t[i];
                return e
            }

            function T(t) {
                return !t || !t.length
            }

            function E(t, e) {
                return t.length ? b(t).reduce(function(t, n) {
                    var i = m(t);
                    return e(m(i), n) ? i[i.length] = n : t[t.length] = [n], t
                }, [
                    [g(t)]
                ]) : []
            }

            function S(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) t[n] && e.push(t[n]);
                return e
            }

            function I(t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) x(e, t[n]) || e.push(t[n]);
                return e
            }

            function A(t, e) {
                var n = _(t, e);
                return -1 === n ? null : t[n + 1]
            }

            function L(t, e) {
                var n = _(t, e);
                return -1 === n ? null : t[n - 1]
            }

            function P(e) {
                var n = "Comic Sans MS" === e ? "Courier New" : "Comic Sans MS",
                    i = t("<div>").css({
                        position: "absolute",
                        left: "-9999px",
                        top: "-9999px",
                        fontSize: "200px"
                    }).text("mmmmmmmmmwwwwwww").appendTo(document.body),
                    o = i.css("fontFamily", n).width(),
                    r = i.css("fontFamily", e + "," + n).width();
                return i.remove(), o !== r
            }

            function O(e) {
                return e && t(e).hasClass("note-editable")
            }

            function N(e) {
                return e && t(e).hasClass("note-control-sizing")
            }

            function R(t) {
                return t = t.toUpperCase(),
                    function(e) {
                        return e && e.nodeName.toUpperCase() === t
                    }
            }

            function D(t) {
                return t && 3 === t.nodeType
            }

            function B(t) {
                return t && 1 === t.nodeType
            }

            function H(t) {
                return t && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT/.test(t.nodeName.toUpperCase())
            }

            function M(t) {
                return !O(t) && (t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase()))
            }

            function F(t) {
                return t && /^H[1-7]/.test(t.nodeName.toUpperCase())
            }

            function z(t) {
                return M(t) && !Ie(t)
            }

            function j(t) {
                return !(G(t) || U(t) || Pe(t) || M(t) || Ae(t) || Oe(t) || Le(t))
            }

            function U(t) {
                return t && /^UL|^OL/.test(t.nodeName.toUpperCase())
            }

            function q(t) {
                return t && /^TD|^TH/.test(t.nodeName.toUpperCase())
            }

            function G(t) {
                return q(t) || Oe(t) || O(t)
            }

            function V(t) {
                return j(t) && !!X(t, M)
            }

            function W(t) {
                return j(t) && !X(t, M)
            }

            function K(t, e) {
                return t.nextSibling === e || t.previousSibling === e
            }

            function Q(t, e) {
                e = e || ge.ok;
                var n = [];
                return t.previousSibling && e(t.previousSibling) && n.push(t.previousSibling), n.push(t), t.nextSibling && e(t.nextSibling) && n.push(t.nextSibling), n
            }

            function Y(t) {
                return D(t) ? t.nodeValue.length : t ? t.childNodes.length : 0
            }

            function J(t) {
                var e = Y(t);
                return 0 === e || (!D(t) && 1 === e && t.innerHTML === De || !(!me.all(t.childNodes, D) || "" !== t.innerHTML))
            }

            function Z(t) {
                H(t) || Y(t) || (t.innerHTML = De)
            }

            function X(t, e) {
                for (; t;) {
                    if (e(t)) return t;
                    if (O(t)) break;
                    t = t.parentNode
                }
                return null
            }

            function tt(t, e) {
                for (t = t.parentNode; t && 1 === Y(t);) {
                    if (e(t)) return t;
                    if (O(t)) break;
                    t = t.parentNode
                }
                return null
            }

            function et(t, e) {
                e = e || ge.fail;
                var n = [];
                return X(t, function(t) {
                    return O(t) || n.push(t), e(t)
                }), n
            }

            function nt(t, e) {
                var n = et(t);
                return me.last(n.filter(e))
            }

            function it(e, n) {
                for (var i = et(e), o = n; o; o = o.parentNode)
                    if (t.inArray(o, i) > -1) return o;
                return null
            }

            function ot(t, e) {
                e = e || ge.fail;
                for (var n = []; t && !e(t);) n.push(t), t = t.previousSibling;
                return n
            }

            function rt(t, e) {
                e = e || ge.fail;
                for (var n = []; t && !e(t);) n.push(t), t = t.nextSibling;
                return n
            }

            function st(t, e) {
                var n = [];
                return e = e || ge.ok,
                    function i(o) {
                        t !== o && e(o) && n.push(o);
                        for (var r = 0, s = o.childNodes.length; r < s; r++) i(o.childNodes[r])
                    }(t), n
            }

            function at(e, n) {
                var i = e.parentNode,
                    o = t("<" + n + ">")[0];
                return i.insertBefore(o, e), o.appendChild(e), o
            }

            function lt(t, e) {
                var n = e.nextSibling,
                    i = e.parentNode;
                return n ? i.insertBefore(t, n) : i.appendChild(t), t
            }

            function ct(e, n) {
                return t.each(n, function(t, n) {
                    e.appendChild(n)
                }), e
            }

            function ut(t) {
                return 0 === t.offset
            }

            function ht(t) {
                return t.offset === Y(t.node)
            }

            function dt(t) {
                return ut(t) || ht(t)
            }

            function pt(t, e) {
                for (; t && t !== e;) {
                    if (0 !== vt(t)) return !1;
                    t = t.parentNode
                }
                return !0
            }

            function ft(t, e) {
                if (!e) return !1;
                for (; t && t !== e;) {
                    if (vt(t) !== Y(t.parentNode) - 1) return !1;
                    t = t.parentNode
                }
                return !0
            }

            function gt(t, e) {
                return ut(t) && pt(t.node, e)
            }

            function mt(t, e) {
                return ht(t) && ft(t.node, e)
            }

            function vt(t) {
                for (var e = 0; t = t.previousSibling;) e += 1;
                return e
            }

            function bt(t) {
                return !!(t && t.childNodes && t.childNodes.length)
            }

            function yt(t, e) {
                var n, i;
                if (0 === t.offset) {
                    if (O(t.node)) return null;
                    n = t.node.parentNode, i = vt(t.node)
                } else bt(t.node) ? i = Y(n = t.node.childNodes[t.offset - 1]) : (n = t.node, i = e ? 0 : t.offset - 1);
                return {
                    node: n,
                    offset: i
                }
            }

            function wt(t, e) {
                var n, i;
                if (Y(t.node) === t.offset) {
                    if (O(t.node)) return null;
                    n = t.node.parentNode, i = vt(t.node) + 1
                } else bt(t.node) ? (n = t.node.childNodes[t.offset], i = 0) : (n = t.node, i = e ? Y(t.node) : t.offset + 1);
                return {
                    node: n,
                    offset: i
                }
            }

            function _t(t, e) {
                return t.node === e.node && t.offset === e.offset
            }

            function xt(t) {
                if (D(t.node) || !bt(t.node) || J(t.node)) return !0;
                var e = t.node.childNodes[t.offset - 1],
                    n = t.node.childNodes[t.offset];
                return !(e && !H(e) || n && !H(n))
            }

            function Ct(t, e) {
                for (; t;) {
                    if (e(t)) return t;
                    t = yt(t)
                }
                return null
            }

            function kt(t, e) {
                for (; t;) {
                    if (e(t)) return t;
                    t = wt(t)
                }
                return null
            }

            function Tt(t) {
                if (!D(t.node)) return !1;
                var e = t.node.nodeValue.charAt(t.offset - 1);
                return e && " " !== e && e !== Ee
            }

            function Et(t, e, n, i) {
                for (var o = t; o && (n(o), !_t(o, e));) {
                    o = wt(o, i && t.node !== o.node && e.node !== o.node)
                }
            }

            function St(t, e) {
                return et(e, ge.eq(t)).map(vt).reverse()
            }

            function $t(t, e) {
                for (var n = t, i = 0, o = e.length; i < o; i++) n = n.childNodes.length <= e[i] ? n.childNodes[n.childNodes.length - 1] : n.childNodes[e[i]];
                return n
            }

            function It(t, e) {
                var n = e && e.isSkipPaddingBlankHTML,
                    i = e && e.isNotSplitEdgePoint;
                if (dt(t) && (D(t.node) || i)) {
                    if (ut(t)) return t.node;
                    if (ht(t)) return t.node.nextSibling
                }
                if (D(t.node)) return t.node.splitText(t.offset);
                var o = t.node.childNodes[t.offset],
                    r = lt(t.node.cloneNode(!1), t.node);
                return ct(r, rt(o)), n || (Z(t.node), Z(r)), r
            }

            function At(t, e, n) {
                var i = et(e.node, ge.eq(t));
                return i.length ? 1 === i.length ? It(e, n) : i.reduce(function(t, i) {
                    return t === e.node && (t = It(e, n)), It({
                        node: i,
                        offset: t ? vt(t) : Y(i)
                    }, n)
                }) : null
            }

            function Lt(t, e) {
                var n, i, o = e ? M : G,
                    r = et(t.node, o),
                    s = me.last(r) || t.node;
                o(s) ? (n = r[r.length - 2], i = s) : i = (n = s).parentNode;
                var a = n && At(n, t, {
                    isSkipPaddingBlankHTML: e,
                    isNotSplitEdgePoint: e
                });
                return a || i !== t.node || (a = t.node.childNodes[t.offset]), {
                    rightNode: a,
                    container: i
                }
            }

            function Pt(t) {
                return document.createElement(t)
            }

            function Ot(t) {
                return document.createTextNode(t)
            }

            function Nt(t, e) {
                if (t && t.parentNode) {
                    if (t.removeNode) return t.removeNode(e);
                    var n = t.parentNode;
                    if (!e) {
                        for (var i = [], o = 0, r = t.childNodes.length; o < r; o++) i.push(t.childNodes[o]);
                        for (o = 0, r = i.length; o < r; o++) n.insertBefore(i[o], t)
                    }
                    n.removeChild(t)
                }
            }

            function Rt(t, e) {
                for (; t && !O(t) && e(t);) {
                    var n = t.parentNode;
                    Nt(t), t = n
                }
            }

            function Dt(t, e) {
                if (t.nodeName.toUpperCase() === e.toUpperCase()) return t;
                var n = Pt(e);
                return t.style.cssText && (n.style.cssText = t.style.cssText), ct(n, me.from(t.childNodes)), lt(n, t), Nt(t), n
            }

            function Bt(t, e) {
                var n = Be(t[0]) ? t.val() : t.html();
                return e ? n.replace(/[\n\r]/g, "") : n
            }

            function Ht(e, n) {
                var i = Bt(e);
                if (n) {
                    var o = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
                    i = i.replace(o, function(t, e, n) {
                        n = n.toUpperCase();
                        var i = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!e,
                            o = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);
                        return t + (i || o ? "\n" : "")
                    }), i = t.trim(i)
                }
                return i
            }

            function Mt(e) {
                var n = t(e),
                    i = n.offset(),
                    o = n.outerHeight(!0);
                return {
                    left: i.left,
                    top: i.top + o
                }
            }

            function Ft(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.on(n, e[n])
                })
            }

            function zt(t, e) {
                Object.keys(e).forEach(function(n) {
                    t.off(n, e[n])
                })
            }

            function jt(t) {
                return t && !D(t) && me.contains(t.classList, "note-styletag")
            }

            function Ut(t, e) {
                var n, i, o = t.parentElement(),
                    r = document.body.createTextRange(),
                    s = me.from(o.childNodes);
                for (n = 0; n < s.length; n++)
                    if (!He.isText(s[n])) {
                        if (r.moveToElementText(s[n]), r.compareEndPoints("StartToStart", t) >= 0) break;
                        i = s[n]
                    } if (0 !== n && He.isText(s[n - 1])) {
                    var a = document.body.createTextRange(),
                        l = null;
                    a.moveToElementText(i || o), a.collapse(!i), l = i ? i.nextSibling : o.firstChild;
                    var c = t.duplicate();
                    c.setEndPoint("StartToStart", a);
                    for (var u = c.text.replace(/[\r\n]/g, "").length; u > l.nodeValue.length && l.nextSibling;) u -= l.nodeValue.length, l = l.nextSibling;
                    l.nodeValue;
                    e && l.nextSibling && He.isText(l.nextSibling) && u === l.nodeValue.length && (u -= l.nodeValue.length, l = l.nextSibling), o = l, n = u
                }
                return {
                    cont: o,
                    offset: n
                }
            }

            function qt(t) {
                var e = function(t, n) {
                        var i, o;
                        if (He.isText(t)) {
                            var r = He.listPrev(t, ge.not(He.isText)),
                                s = me.last(r).previousSibling;
                            i = s || t.parentNode, n += me.sum(me.tail(r), He.nodeLength), o = !s
                        } else {
                            if (i = t.childNodes[n] || t, He.isText(i)) return e(i, 0);
                            n = 0, o = !1
                        }
                        return {
                            node: i,
                            collapseToStart: o,
                            offset: n
                        }
                    },
                    n = document.body.createTextRange(),
                    i = e(t.node, t.offset);
                return n.moveToElementText(i.node), n.collapse(i.collapseToStart), n.moveStart("character", i.offset), n
            }

            function Gt(e) {
                return t.Deferred(function(n) {
                    t.extend(new FileReader, {
                        onload: function(t) {
                            var e = t.target.result;
                            n.resolve(e)
                        },
                        onerror: function(t) {
                            n.reject(t)
                        }
                    }).readAsDataURL(e)
                }).promise()
            }

            function Vt(e) {
                return t.Deferred(function(n) {
                    var i = t("<img>");
                    i.one("load", function() {
                        i.off("error abort"), n.resolve(i)
                    }).one("error abort", function() {
                        i.off("load").detach(), n.reject(i)
                    }).css({
                        display: "none"
                    }).appendTo(document.body).attr("src", e)
                }).promise()
            }
            t = t && t.hasOwnProperty("default") ? t["default"] : t;
            var Wt, Kt = function() {
                    function e(t, e, n, i) {
                        this.markup = t, this.children = e, this.options = n, this.callback = i
                    }
                    return e.prototype.render = function(e) {
                        var n = t(this.markup);
                        if (this.options && this.options.contents && n.html(this.options.contents), this.options && this.options.className && n.addClass(this.options.className), this.options && this.options.data && t.each(this.options.data, function(t, e) {
                                n.attr("data-" + t, e)
                            }), this.options && this.options.click && n.on("click", this.options.click), this.children) {
                            var i = n.find(".note-children-container");
                            this.children.forEach(function(t) {
                                t.render(i.length ? i : n)
                            })
                        }
                        return this.callback && this.callback(n, this.options), this.options && this.options.callback && this.options.callback(n), e && e.append(n), n
                    }, e
                }(),
                Qt = {
                    create: function(e, n) {
                        return function() {
                            var i = "object" == typeof arguments[1] ? arguments[1] : arguments[0],
                                o = t.isArray(arguments[0]) ? arguments[0] : [];
                            return i && i.children && (o = i.children), new Kt(e, o, i, n)
                        }
                    }
                },
                Yt = Qt.create('<div class="note-editor note-frame panel"/>'),
                Jt = Qt.create('<div class="note-toolbar-wrapper panel-default"><div class="note-toolbar panel-heading"></div></div>'),
                Zt = Qt.create('<div class="note-editing-area"/>'),
                Xt = Qt.create('<textarea class="note-codable"/>'),
                te = Qt.create('<div class="note-editable" contentEditable="true"/>'),
                ee = Qt.create(['<div class="note-statusbar">', '  <div class="note-resizebar">', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', "  </div>", "</div>"].join("")),
                ne = Qt.create('<div class="note-editor"/>'),
                ie = Qt.create('<div class="note-editable" contentEditable="true"/>'),
                oe = Qt.create('<div class="note-btn-group btn-group">'),
                re = Qt.create('<div class="dropdown-menu">', function(e, n) {
                    var i = t.isArray(n.items) ? n.items.map(function(t) {
                        var e = "string" == typeof t ? t : t.value || "",
                            i = n.template ? n.template(t) : t,
                            o = "object" == typeof t ? t.option : undefined;
                        return '<li><a href="#" ' + ('data-value="' + e + '"' + (o !== undefined ? ' data-option="' + o + '"' : "")) + ">" + i + "</a></li>"
                    }).join("") : n.items;
                    e.html(i)
                }),
                se = function(t, e) {
                    return t + " " + de(e.icons.caret, "span")
                },
                ae = Qt.create('<div class="dropdown-menu note-check">', function(e, n) {
                    var i = t.isArray(n.items) ? n.items.map(function(t) {
                        var e = "string" == typeof t ? t : t.value || "",
                            i = n.template ? n.template(t) : t;
                        return '<li><a href="#" data-value="' + e + '">' + de(n.checkClassName) + " " + i + "</a></li>"
                    }).join("") : n.items;
                    e.html(i)
                }),
                le = Qt.create('<div class="note-color-palette"/>', function(t, e) {
                    for (var n = [], i = 0, o = e.colors.length; i < o; i++) {
                        for (var r = e.eventName, s = e.colors[i], a = [], l = 0, c = s.length; l < c; l++) {
                            var u = s[l];
                            a.push(['<button type="button" class="note-color-btn"', 'style="background-color:', u, '" ', 'data-event="', r, '" ', 'data-value="', u, '" ', 'title="', u, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""))
                        }
                        n.push('<div class="note-color-row">' + a.join("") + "</div>")
                    }
                    t.html(n.join("")), e.tooltip && t.find(".note-color-btn").tooltip({
                        container: e.container,
                        trigger: "hover",
                        placement: "bottom"
                    })
                }),
                ce = Qt.create('<div class="modal" aria-hidden="false" tabindex="-1"/>', function(t, e) {
                    e.fade && t.addClass("fade"), t.html(['<div class="modal-dialog">', '  <div class="modal-content">', e.title ? '    <div class="modal-header">      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>      <h4 class="modal-title">' + e.title + "</h4>    </div>" : "", '    <div class="modal-body">' + e.body + "</div>", e.footer ? '    <div class="modal-footer">' + e.footer + "</div>" : "", "  </div>", "</div>"].join(""))
                }),
                ue = Qt.create(['<div class="note-popover popover in">', '  <div class="arrow"/>', '  <div class="popover-content note-children-container"/>', "</div>"].join(""), function(t, e) {
                    var n = "undefined" != typeof e.direction ? e.direction : "bottom";
                    t.addClass(n), e.hideArrow && t.find(".arrow").hide()
                }),
                he = Qt.create('<div class="custom-control custom-checkbox"></div>', function(t, e) {
                    t.html([" <label" + (e.id ? ' for="' + e.id + '"' : "") + ">", ' <input type="checkbox"' + (e.id ? ' id="' + e.id + '"' : ""), (e.checked ? " checked" : "") + "/>", e.text ? e.text : "", "</label>"].join(""))
                }),
                de = function(t, e) {
                    return "<" + (e = e || "i") + ' class="' + t + '"/>'
                },
                pe = {
                    editor: Yt,
                    toolbar: Jt,
                    editingArea: Zt,
                    codable: Xt,
                    editable: te,
                    statusbar: ee,
                    airEditor: ne,
                    airEditable: ie,
                    buttonGroup: oe,
                    dropdown: re,
                    dropdownButtonContents: se,
                    dropdownCheck: ae,
                    palette: le,
                    dialog: ce,
                    popover: ue,
                    checkbox: he,
                    icon: de,
                    options: {},
                    button: function(t, e) {
                        return Qt.create('<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1">', function(t, e) {
                            e && e.tooltip && t.attr({
                                title: e.tooltip
                            }).tooltip({
                                container: e.container,
                                trigger: "hover",
                                placement: "bottom"
                            })
                        })(t, e)
                    },
                    toggleBtn: function(t, e) {
                        t.toggleClass("disabled", !e), t.attr("disabled", !e)
                    },
                    toggleBtnActive: function(t, e) {
                        t.toggleClass("active", e)
                    },
                    onDialogShown: function(t, e) {
                        t.one("shown.bs.modal", e)
                    },
                    onDialogHidden: function(t, e) {
                        t.one("hidden.bs.modal", e)
                    },
                    showDialog: function(t) {
                        t.modal("show")
                    },
                    hideDialog: function(t) {
                        t.modal("hide")
                    },
                    createLayout: function(t, e) {
                        var n = (e.airMode ? pe.airEditor([pe.editingArea([pe.airEditable()])]) : pe.editor([pe.toolbar(), pe.editingArea([pe.codable(), pe.editable()]), pe.statusbar()])).render();
                        return n.insertAfter(t), {
                            note: t,
                            editor: n,
                            toolbar: n.find(".note-toolbar"),
                            editingArea: n.find(".note-editing-area"),
                            editable: n.find(".note-editable"),
                            codable: n.find(".note-codable"),
                            statusbar: n.find(".note-statusbar")
                        }
                    },
                    removeLayout: function(t, e) {
                        t.html(e.editable.html()), e.editor.remove(), t.show()
                    }
                },
                fe = 0,
                ge = {
                    eq: e,
                    eq2: n,
                    peq2: i,
                    ok: o,
                    fail: r,
                    self: l,
                    not: s,
                    and: a,
                    invoke: c,
                    uniqueId: u,
                    rect2bnd: h,
                    invertObject: d,
                    namespaceToCamel: p,
                    debounce: f
                },
                me = {
                    head: g,
                    last: m,
                    initial: v,
                    tail: b,
                    prev: L,
                    next: A,
                    find: y,
                    contains: x,
                    all: w,
                    sum: C,
                    from: k,
                    isEmpty: T,
                    clusterBy: E,
                    compact: S,
                    unique: I
                },
                ve = "function" == typeof define && define.amd,
                be = navigator.userAgent,
                ye = /MSIE|Trident/i.test(be);
            if (ye) {
                var we = /MSIE (\d+[.]\d+)/.exec(be);
                we && (Wt = parseFloat(we[1])), (we = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(be)) && (Wt = parseFloat(we[1]))
            }
            var _e = /Edge\/\d+/.test(be),
                xe = !!window.CodeMirror;
            if (!xe && ve)
                if ("function" == typeof __webpack_require__) try {
                    require.resolve("codemirror"), xe = !0
                } catch (Tn) {} else if ("undefined" != typeof require)
                    if ("undefined" != typeof require.resolve) try {
                        require.resolve("codemirror"), xe = !0
                    } catch (Tn) {} else "undefined" != typeof require.specified && (xe = require.specified("codemirror"));
            var Ce = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
                ke = ye || _e ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input",
                Te = {
                    isMac: navigator.appVersion.indexOf("Mac") > -1,
                    isMSIE: ye,
                    isEdge: _e,
                    isFF: !_e && /firefox/i.test(be),
                    isPhantom: /PhantomJS/i.test(be),
                    isWebkit: !_e && /webkit/i.test(be),
                    isChrome: !_e && /chrome/i.test(be),
                    isSafari: !_e && /safari/i.test(be),
                    browserVersion: Wt,
                    jqueryVersion: parseFloat(t.fn.jquery),
                    isSupportAmd: ve,
                    isSupportTouch: Ce,
                    hasCodeMirror: xe,
                    isFontInstalled: P,
                    isW3CRangeSupport: !!document.createRange,
                    inputEventName: ke
                },
                Ee = String.fromCharCode(160),
                Se = "\ufeff",
                $e = R("PRE"),
                Ie = R("LI"),
                Ae = R("TABLE"),
                Le = R("DATA"),
                Pe = R("HR"),
                Oe = R("BLOCKQUOTE"),
                Ne = R("A"),
                Re = R("BODY"),
                De = Te.isMSIE && Te.browserVersion < 11 ? "&nbsp;" : "<br>",
                Be = R("TEXTAREA"),
                He = {
                    NBSP_CHAR: Ee,
                    ZERO_WIDTH_NBSP_CHAR: Se,
                    blank: De,
                    emptyPara: "<p>" + De + "</p>",
                    makePredByNodeName: R,
                    isEditable: O,
                    isControlSizing: N,
                    isText: D,
                    isElement: B,
                    isVoid: H,
                    isPara: M,
                    isPurePara: z,
                    isHeading: F,
                    isInline: j,
                    isBlock: ge.not(j),
                    isBodyInline: W,
                    isBody: Re,
                    isParaInline: V,
                    isPre: $e,
                    isList: U,
                    isTable: Ae,
                    isData: Le,
                    isCell: q,
                    isBlockquote: Oe,
                    isBodyContainer: G,
                    isAnchor: Ne,
                    isDiv: R("DIV"),
                    isLi: Ie,
                    isBR: R("BR"),
                    isSpan: R("SPAN"),
                    isB: R("B"),
                    isU: R("U"),
                    isS: R("S"),
                    isI: R("I"),
                    isImg: R("IMG"),
                    isTextarea: Be,
                    isEmpty: J,
                    isEmptyAnchor: ge.and(Ne, J),
                    isClosestSibling: K,
                    withClosestSiblings: Q,
                    nodeLength: Y,
                    isLeftEdgePoint: ut,
                    isRightEdgePoint: ht,
                    isEdgePoint: dt,
                    isLeftEdgeOf: pt,
                    isRightEdgeOf: ft,
                    isLeftEdgePointOf: gt,
                    isRightEdgePointOf: mt,
                    prevPoint: yt,
                    nextPoint: wt,
                    isSamePoint: _t,
                    isVisiblePoint: xt,
                    prevPointUntil: Ct,
                    nextPointUntil: kt,
                    isCharPoint: Tt,
                    walkPoint: Et,
                    ancestor: X,
                    singleChildAncestor: tt,
                    listAncestor: et,
                    lastAncestor: nt,
                    listNext: rt,
                    listPrev: ot,
                    listDescendant: st,
                    commonAncestor: it,
                    wrap: at,
                    insertAfter: lt,
                    appendChildNodes: ct,
                    position: vt,
                    hasChildren: bt,
                    makeOffsetPath: St,
                    fromOffsetPath: $t,
                    splitTree: At,
                    splitPoint: Lt,
                    create: Pt,
                    createText: Ot,
                    remove: Nt,
                    removeWhile: Rt,
                    replace: Dt,
                    html: Ht,
                    value: Bt,
                    posFromPlaceholder: Mt,
                    attachEvents: Ft,
                    detachEvents: zt,
                    isCustomStyleTag: jt
                };
            t.summernote = t.summernote || {
                lang: {}
            }, t.extend(t.summernote.lang, {
                "en-US": {
                    font: {
                        bold: "Bold",
                        italic: "Italic",
                        underline: "Underline",
                        clear: "Remove Font Style",
                        height: "Line Height",
                        name: "Font Family",
                        strikethrough: "Strikethrough",
                        subscript: "Subscript",
                        superscript: "Superscript",
                        size: "Font Size"
                    },
                    image: {
                        image: "Picture",
                        insert: "Insert Image",
                        resizeFull: "Resize Full",
                        resizeHalf: "Resize Half",
                        resizeQuarter: "Resize Quarter",
                        floatLeft: "Float Left",
                        floatRight: "Float Right",
                        floatNone: "Float None",
                        shapeRounded: "Shape: Rounded",
                        shapeCircle: "Shape: Circle",
                        shapeThumbnail: "Shape: Thumbnail",
                        shapeNone: "Shape: None",
                        dragImageHere: "Drag image or text here",
                        dropImage: "Drop image or Text",
                        selectFromFiles: "Select from files",
                        maximumFileSize: "Maximum file size",
                        maximumFileSizeError: "Maximum file size exceeded.",
                        url: "Image URL",
                        remove: "Remove Image",
                        original: "Original"
                    },
                    video: {
                        video: "Video",
                        videoLink: "Video Link",
                        insert: "Insert Video",
                        url: "Video URL",
                        providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
                    },
                    link: {
                        link: "Link",
                        insert: "Insert Link",
                        unlink: "Unlink",
                        edit: "Edit",
                        textToDisplay: "Text to display",
                        url: "To what URL should this link go?",
                        openInNewWindow: " Open in new window"
                    },
                    table: {
                        table: "Table",
                        addRowAbove: "Add row above",
                        addRowBelow: "Add row below",
                        addColLeft: "Add column left",
                        addColRight: "Add column right",
                        delRow: "Delete row",
                        delCol: "Delete column",
                        delTable: "Delete table"
                    },
                    hr: {
                        insert: "Insert Horizontal Rule"
                    },
                    style: {
                        style: "Style",
                        p: "Normal",
                        blockquote: "Quote",
                        pre: "Code",
                        h1: "Header 1",
                        h2: "Header 2",
                        h3: "Header 3",
                        h4: "Header 4",
                        h5: "Header 5",
                        h6: "Header 6"
                    },
                    lists: {
                        unordered: "Unordered list",
                        ordered: "Ordered list"
                    },
                    options: {
                        help: "Help",
                        fullscreen: "Full Screen",
                        codeview: "Code View"
                    },
                    paragraph: {
                        paragraph: "Paragraph",
                        outdent: "Outdent",
                        indent: "Indent",
                        left: "Align left",
                        center: "Align center",
                        right: "Align right",
                        justify: "Justify full"
                    },
                    color: {
                        recent: "Recent Color",
                        more: "More Color",
                        background: "Background Color",
                        foreground: "Foreground Color",
                        transparent: "Transparent",
                        setTransparent: "Set transparent",
                        reset: "Reset",
                        resetToDefault: "Reset to default"
                    },
                    shortcut: {
                        shortcuts: "Keyboard shortcuts",
                        close: "Close",
                        textFormatting: "Text formatting",
                        action: "Action",
                        paragraphFormatting: "Paragraph formatting",
                        documentStyle: "Document Style",
                        extraKeys: "Extra keys"
                    },
                    help: {
                        insertParagraph: "Insert Paragraph",
                        undo: "Undoes the last command",
                        redo: "Redoes the last command",
                        tab: "Tab",
                        untab: "Untab",
                        bold: "Set a bold style",
                        italic: "Set a italic style",
                        underline: "Set a underline style",
                        strikethrough: "Set a strikethrough style",
                        removeFormat: "Clean a style",
                        justifyLeft: "Set left align",
                        justifyCenter: "Set center align",
                        justifyRight: "Set right align",
                        justifyFull: "Set full align",
                        insertUnorderedList: "Toggle unordered list",
                        insertOrderedList: "Toggle ordered list",
                        outdent: "Outdent on current paragraph",
                        indent: "Indent on current paragraph",
                        formatPara: "Change current block's format as a paragraph(P tag)",
                        formatH1: "Change current block's format as H1",
                        formatH2: "Change current block's format as H2",
                        formatH3: "Change current block's format as H3",
                        formatH4: "Change current block's format as H4",
                        formatH5: "Change current block's format as H5",
                        formatH6: "Change current block's format as H6",
                        insertHorizontalRule: "Insert horizontal rule",
                        "linkDialog.show": "Show Link Dialog"
                    },
                    history: {
                        undo: "Undo",
                        redo: "Redo"
                    },
                    specialChar: {
                        specialChar: "SPECIAL CHARACTERS",
                        select: "Select Special characters"
                    }
                }
            });
            var Me = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SPACE: 32,
                    DELETE: 46,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    NUM0: 48,
                    NUM1: 49,
                    NUM2: 50,
                    NUM3: 51,
                    NUM4: 52,
                    NUM5: 53,
                    NUM6: 54,
                    NUM7: 55,
                    NUM8: 56,
                    B: 66,
                    E: 69,
                    I: 73,
                    J: 74,
                    K: 75,
                    L: 76,
                    R: 82,
                    S: 83,
                    U: 85,
                    V: 86,
                    Y: 89,
                    Z: 90,
                    SLASH: 191,
                    LEFTBRACKET: 219,
                    BACKSLASH: 220,
                    RIGHTBRACKET: 221
                },
                Fe = {
                    isEdit: function(t) {
                        return me.contains([Me.BACKSPACE, Me.TAB, Me.ENTER, Me.SPACE, Me.DELETE], t)
                    },
                    isMove: function(t) {
                        return me.contains([Me.LEFT, Me.UP, Me.RIGHT, Me.DOWN], t)
                    },
                    nameFromCode: ge.invertObject(Me),
                    code: Me
                },
                ze = function() {
                    function e(t, e, n, i) {
                        this.sc = t, this.so = e, this.ec = n, this.eo = i, this.isOnEditable = this.makeIsOn(He.isEditable), this.isOnList = this.makeIsOn(He.isList), this.isOnAnchor = this.makeIsOn(He.isAnchor), this.isOnCell = this.makeIsOn(He.isCell), this.isOnData = this.makeIsOn(He.isData)
                    }
                    return e.prototype.nativeRange = function() {
                        if (Te.isW3CRangeSupport) {
                            var t = document.createRange();
                            return t.setStart(this.sc, this.so), t.setEnd(this.ec, this.eo), t
                        }
                        var e = qt({
                            node: this.sc,
                            offset: this.so
                        });
                        return e.setEndPoint("EndToEnd", qt({
                            node: this.ec,
                            offset: this.eo
                        })), e
                    }, e.prototype.getPoints = function() {
                        return {
                            sc: this.sc,
                            so: this.so,
                            ec: this.ec,
                            eo: this.eo
                        }
                    }, e.prototype.getStartPoint = function() {
                        return {
                            node: this.sc,
                            offset: this.so
                        }
                    }, e.prototype.getEndPoint = function() {
                        return {
                            node: this.ec,
                            offset: this.eo
                        }
                    }, e.prototype.select = function() {
                        var t = this.nativeRange();
                        if (Te.isW3CRangeSupport) {
                            var e = document.getSelection();
                            e.rangeCount > 0 && e.removeAllRanges(), e.addRange(t)
                        } else t.select();
                        return this
                    }, e.prototype.scrollIntoView = function(e) {
                        var n = t(e).height();
                        return e.scrollTop + n < this.sc.offsetTop && (e.scrollTop += Math.abs(e.scrollTop + n - this.sc.offsetTop)), this
                    }, e.prototype.normalize = function() {
                        var t = function(t, e) {
                                if (He.isVisiblePoint(t) && !He.isEdgePoint(t) || He.isVisiblePoint(t) && He.isRightEdgePoint(t) && !e || He.isVisiblePoint(t) && He.isLeftEdgePoint(t) && e || He.isVisiblePoint(t) && He.isBlock(t.node) && He.isEmpty(t.node)) return t;
                                var n = He.ancestor(t.node, He.isBlock);
                                if ((He.isLeftEdgePointOf(t, n) || He.isVoid(He.prevPoint(t).node)) && !e || (He.isRightEdgePointOf(t, n) || He.isVoid(He.nextPoint(t).node)) && e) {
                                    if (He.isVisiblePoint(t)) return t;
                                    e = !e
                                }
                                return (e ? He.nextPointUntil(He.nextPoint(t), He.isVisiblePoint) : He.prevPointUntil(He.prevPoint(t), He.isVisiblePoint)) || t
                            },
                            n = t(this.getEndPoint(), !1),
                            i = this.isCollapsed() ? n : t(this.getStartPoint(), !0);
                        return new e(i.node, i.offset, n.node, n.offset)
                    }, e.prototype.nodes = function(t, e) {
                        t = t || ge.ok;
                        var n = e && e.includeAncestor,
                            i = e && e.fullyContains,
                            o = this.getStartPoint(),
                            r = this.getEndPoint(),
                            s = [],
                            a = [];
                        return He.walkPoint(o, r, function(e) {
                            var o;
                            He.isEditable(e.node) || (i ? (He.isLeftEdgePoint(e) && a.push(e.node), He.isRightEdgePoint(e) && me.contains(a, e.node) && (o = e.node)) : o = n ? He.ancestor(e.node, t) : e.node, o && t(o) && s.push(o))
                        }, !0), me.unique(s)
                    }, e.prototype.commonAncestor = function() {
                        return He.commonAncestor(this.sc, this.ec)
                    }, e.prototype.expand = function(t) {
                        var n = He.ancestor(this.sc, t),
                            i = He.ancestor(this.ec, t);
                        if (!n && !i) return new e(this.sc, this.so, this.ec, this.eo);
                        var o = this.getPoints();
                        return n && (o.sc = n, o.so = 0), i && (o.ec = i, o.eo = He.nodeLength(i)), new e(o.sc, o.so, o.ec, o.eo)
                    }, e.prototype.collapse = function(t) {
                        return t ? new e(this.sc, this.so, this.sc, this.so) : new e(this.ec, this.eo, this.ec, this.eo)
                    }, e.prototype.splitText = function() {
                        var t = this.sc === this.ec,
                            n = this.getPoints();
                        return He.isText(this.ec) && !He.isEdgePoint(this.getEndPoint()) && this.ec.splitText(this.eo), He.isText(this.sc) && !He.isEdgePoint(this.getStartPoint()) && (n.sc = this.sc.splitText(this.so), n.so = 0, t && (n.ec = n.sc, n.eo = this.eo - this.so)), new e(n.sc, n.so, n.ec, n.eo)
                    }, e.prototype.deleteContents = function() {
                        if (this.isCollapsed()) return this;
                        var n = this.splitText(),
                            i = n.nodes(null, {
                                fullyContains: !0
                            }),
                            o = He.prevPointUntil(n.getStartPoint(), function(t) {
                                return !me.contains(i, t.node)
                            }),
                            r = [];
                        return t.each(i, function(t, e) {
                            var n = e.parentNode;
                            o.node !== n && 1 === He.nodeLength(n) && r.push(n), He.remove(e, !1)
                        }), t.each(r, function(t, e) {
                            He.remove(e, !1)
                        }), new e(o.node, o.offset, o.node, o.offset).normalize()
                    }, e.prototype.makeIsOn = function(t) {
                        return function() {
                            var e = He.ancestor(this.sc, t);
                            return !!e && e === He.ancestor(this.ec, t)
                        }
                    }, e.prototype.isLeftEdgeOf = function(t) {
                        if (!He.isLeftEdgePoint(this.getStartPoint())) return !1;
                        var e = He.ancestor(this.sc, t);
                        return e && He.isLeftEdgeOf(this.sc, e)
                    }, e.prototype.isCollapsed = function() {
                        return this.sc === this.ec && this.so === this.eo
                    }, e.prototype.wrapBodyInlineWithPara = function() {
                        if (He.isBodyContainer(this.sc) && He.isEmpty(this.sc)) return this.sc.innerHTML = He.emptyPara, new e(this.sc.firstChild, 0, this.sc.firstChild, 0);
                        var t, n = this.normalize();
                        if (He.isParaInline(this.sc) || He.isPara(this.sc)) return n;
                        if (He.isInline(n.sc)) {
                            var i = He.listAncestor(n.sc, ge.not(He.isInline));
                            t = me.last(i), He.isInline(t) || (t = i[i.length - 2] || n.sc.childNodes[n.so])
                        } else t = n.sc.childNodes[n.so > 0 ? n.so - 1 : 0];
                        var o = He.listPrev(t, He.isParaInline).reverse();
                        if ((o = o.concat(He.listNext(t.nextSibling, He.isParaInline))).length) {
                            var r = He.wrap(me.head(o), "p");
                            He.appendChildNodes(r, me.tail(o))
                        }
                        return this.normalize()
                    }, e.prototype.insertNode = function(t) {
                        var e = this.wrapBodyInlineWithPara().deleteContents(),
                            n = He.splitPoint(e.getStartPoint(), He.isInline(t));
                        return n.rightNode ? n.rightNode.parentNode.insertBefore(t, n.rightNode) : n.container.appendChild(t), t
                    }, e.prototype.pasteHTML = function(e) {
                        var n = t("<div></div>").html(e)[0],
                            i = me.from(n.childNodes),
                            o = this.wrapBodyInlineWithPara().deleteContents();
                        return i.reverse().map(function(t) {
                            return o.insertNode(t)
                        }).reverse()
                    }, e.prototype.toString = function() {
                        var t = this.nativeRange();
                        return Te.isW3CRangeSupport ? t.toString() : t.text
                    }, e.prototype.getWordRange = function(t) {
                        var n = this.getEndPoint();
                        if (!He.isCharPoint(n)) return this;
                        var i = He.prevPointUntil(n, function(t) {
                            return !He.isCharPoint(t)
                        });
                        return t && (n = He.nextPointUntil(n, function(t) {
                            return !He.isCharPoint(t)
                        })), new e(i.node, i.offset, n.node, n.offset)
                    }, e.prototype.bookmark = function(t) {
                        return {
                            s: {
                                path: He.makeOffsetPath(t, this.sc),
                                offset: this.so
                            },
                            e: {
                                path: He.makeOffsetPath(t, this.ec),
                                offset: this.eo
                            }
                        }
                    }, e.prototype.paraBookmark = function(t) {
                        return {
                            s: {
                                path: me.tail(He.makeOffsetPath(me.head(t), this.sc)),
                                offset: this.so
                            },
                            e: {
                                path: me.tail(He.makeOffsetPath(me.last(t), this.ec)),
                                offset: this.eo
                            }
                        }
                    }, e.prototype.getClientRects = function() {
                        return this.nativeRange().getClientRects()
                    }, e
                }(),
                je = {
                    create: function(t, e, n, i) {
                        if (4 === arguments.length) return new ze(t, e, n, i);
                        if (2 === arguments.length) return new ze(t, e, n = t, i = e);
                        var o = this.createFromSelection();
                        return o || 1 !== arguments.length ? o : (o = this.createFromNode(arguments[0])).collapse(He.emptyPara === arguments[0].innerHTML)
                    },
                    createFromSelection: function() {
                        var t, e, n, i;
                        if (Te.isW3CRangeSupport) {
                            var o = document.getSelection();
                            if (!o || 0 === o.rangeCount) return null;
                            if (He.isBody(o.anchorNode)) return null;
                            var r = o.getRangeAt(0);
                            t = r.startContainer, e = r.startOffset, n = r.endContainer, i = r.endOffset
                        } else {
                            var s = document.selection.createRange(),
                                a = s.duplicate();
                            a.collapse(!1);
                            var l = s;
                            l.collapse(!0);
                            var c = Ut(l, !0),
                                u = Ut(a, !1);
                            He.isText(c.node) && He.isLeftEdgePoint(c) && He.isTextNode(u.node) && He.isRightEdgePoint(u) && u.node.nextSibling === c.node && (c = u), t = c.cont, e = c.offset, n = u.cont, i = u.offset
                        }
                        return new ze(t, e, n, i)
                    },
                    createFromNode: function(t) {
                        var e = t,
                            n = 0,
                            i = t,
                            o = He.nodeLength(i);
                        return He.isVoid(e) && (n = He.listPrev(e).length - 1, e = e.parentNode), He.isBR(i) ? (o = He.listPrev(i).length - 1, i = i.parentNode) : He.isVoid(i) && (o = He.listPrev(i).length, i = i.parentNode), this.create(e, n, i, o)
                    },
                    createFromNodeBefore: function(t) {
                        return this.createFromNode(t).collapse(!0)
                    },
                    createFromNodeAfter: function(t) {
                        return this.createFromNode(t).collapse()
                    },
                    createFromBookmark: function(t, e) {
                        var n = He.fromOffsetPath(t, e.s.path),
                            i = e.s.offset,
                            o = He.fromOffsetPath(t, e.e.path),
                            r = e.e.offset;
                        return new ze(n, i, o, r)
                    },
                    createFromParaBookmark: function(t, e) {
                        var n = t.s.offset,
                            i = t.e.offset,
                            o = He.fromOffsetPath(me.head(e), t.s.path),
                            r = He.fromOffsetPath(me.last(e), t.e.path);
                        return new ze(o, n, r, i)
                    }
                },
                Ue = function() {
                    function t(t) {
                        this.stack = [], this.stackOffset = -1, this.$editable = t, this.editable = t[0]
                    }
                    return t.prototype.makeSnapshot = function() {
                        var t = je.create(this.editable),
                            e = {
                                s: {
                                    path: [],
                                    offset: 0
                                },
                                e: {
                                    path: [],
                                    offset: 0
                                }
                            };
                        return {
                            contents: this.$editable.html(),
                            bookmark: t ? t.bookmark(this.editable) : e
                        }
                    }, t.prototype.applySnapshot = function(t) {
                        null !== t.contents && this.$editable.html(t.contents), null !== t.bookmark && je.createFromBookmark(this.editable, t.bookmark).select()
                    }, t.prototype.rewind = function() {
                        this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(), this.stackOffset = 0, this.applySnapshot(this.stack[this.stackOffset])
                    }, t.prototype.reset = function() {
                        this.stack = [], this.stackOffset = -1, this.$editable.html(""), this.recordUndo()
                    }, t.prototype.undo = function() {
                        this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(), this.stackOffset > 0 && (this.stackOffset--, this.applySnapshot(this.stack[this.stackOffset]))
                    }, t.prototype.redo = function() {
                        this.stack.length - 1 > this.stackOffset && (this.stackOffset++, this.applySnapshot(this.stack[this.stackOffset]))
                    }, t.prototype.recordUndo = function() {
                        this.stackOffset++, this.stack.length > this.stackOffset && (this.stack = this.stack.slice(0, this.stackOffset)), this.stack.push(this.makeSnapshot())
                    }, t
                }(),
                qe = function() {
                    function e() {}
                    return e.prototype.jQueryCSS = function(e, n) {
                        if (Te.jqueryVersion < 1.9) {
                            var i = {};
                            return t.each(n, function(t, n) {
                                i[n] = e.css(n)
                            }), i
                        }
                        return e.css(n)
                    }, e.prototype.fromNode = function(t) {
                        var e = ["font-family", "font-size", "text-align", "list-style-type", "line-height"],
                            n = this.jQueryCSS(t, e) || {};
                        return n["font-size"] = parseInt(n["font-size"], 10), n
                    }, e.prototype.stylePara = function(e, n) {
                        t.each(e.nodes(He.isPara, {
                            includeAncestor: !0
                        }), function(e, i) {
                            t(i).css(n)
                        })
                    }, e.prototype.styleNodes = function(e, n) {
                        e = e.splitText();
                        var i = n && n.nodeName || "SPAN",
                            o = !(!n || !n.expandClosestSibling),
                            r = !(!n || !n.onlyPartialContains);
                        if (e.isCollapsed()) return [e.insertNode(He.create(i))];
                        var s = He.makePredByNodeName(i),
                            a = e.nodes(He.isText, {
                                fullyContains: !0
                            }).map(function(t) {
                                return He.singleChildAncestor(t, s) || He.wrap(t, i)
                            });
                        if (o) {
                            if (r) {
                                var l = e.nodes();
                                s = ge.and(s, function(t) {
                                    return me.contains(l, t)
                                })
                            }
                            return a.map(function(e) {
                                var n = He.withClosestSiblings(e, s),
                                    i = me.head(n),
                                    o = me.tail(n);
                                return t.each(o, function(t, e) {
                                    He.appendChildNodes(i, e.childNodes), He.remove(e)
                                }), me.head(n)
                            })
                        }
                        return a
                    }, e.prototype.current = function(e) {
                        var n = t(He.isElement(e.sc) ? e.sc : e.sc.parentNode),
                            i = this.fromNode(n);
                        try {
                            i = t.extend(i, {
                                "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                                "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                                "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                                "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                                "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                                "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal",
                                "font-family": document.queryCommandValue("fontname") || i["font-family"]
                            })
                        } catch (Tn) {}
                        if (e.isOnList()) {
                            var o = ["circle", "disc", "disc-leading-zero", "square"],
                                r = t.inArray(i["list-style-type"], o) > -1;
                            i["list-style"] = r ? "unordered" : "ordered"
                        } else i["list-style"] = "none";
                        var s = He.ancestor(e.sc, He.isPara);
                        if (s && s.style["line-height"]) i["line-height"] = s.style.lineHeight;
                        else {
                            var a = parseInt(i["line-height"], 10) / parseInt(i["font-size"], 10);
                            i["line-height"] = a.toFixed(1)
                        }
                        return i.anchor = e.isOnAnchor() && He.ancestor(e.sc, He.isAnchor), i.ancestors = He.listAncestor(e.sc, He.isEditable), i.range = e, i
                    }, e
                }(),
                Ge = function() {
                    function e() {}
                    return e.prototype.insertOrderedList = function(t) {
                        this.toggleList("OL", t)
                    }, e.prototype.insertUnorderedList = function(t) {
                        this.toggleList("UL", t)
                    }, e.prototype.indent = function(e) {
                        var n = this,
                            i = je.create(e).wrapBodyInlineWithPara(),
                            o = i.nodes(He.isPara, {
                                includeAncestor: !0
                            }),
                            r = me.clusterBy(o, ge.peq2("parentNode"));
                        t.each(r, function(e, i) {
                            var o = me.head(i);
                            He.isLi(o) ? n.wrapList(i, o.parentNode.nodeName) : t.each(i, function(e, n) {
                                t(n).css("marginLeft", function(t, e) {
                                    return (parseInt(e, 10) || 0) + 25
                                })
                            })
                        }), i.select()
                    }, e.prototype.outdent = function(e) {
                        var n = this,
                            i = je.create(e).wrapBodyInlineWithPara(),
                            o = i.nodes(He.isPara, {
                                includeAncestor: !0
                            }),
                            r = me.clusterBy(o, ge.peq2("parentNode"));
                        t.each(r, function(e, i) {
                            var o = me.head(i);
                            He.isLi(o) ? n.releaseList([i]) : t.each(i, function(e, n) {
                                t(n).css("marginLeft", function(t, e) {
                                    return (e = parseInt(e, 10) || 0) > 25 ? e - 25 : ""
                                })
                            })
                        }), i.select()
                    }, e.prototype.toggleList = function(e, n) {
                        var i = this,
                            o = je.create(n).wrapBodyInlineWithPara(),
                            r = o.nodes(He.isPara, {
                                includeAncestor: !0
                            }),
                            s = o.paraBookmark(r),
                            a = me.clusterBy(r, ge.peq2("parentNode"));
                        if (me.find(r, He.isPurePara)) {
                            var l = [];
                            t.each(a, function(t, n) {
                                l = l.concat(i.wrapList(n, e))
                            }), r = l
                        } else {
                            var c = o.nodes(He.isList, {
                                includeAncestor: !0
                            }).filter(function(n) {
                                return !t.nodeName(n, e)
                            });
                            c.length ? t.each(c, function(t, n) {
                                He.replace(n, e)
                            }) : r = this.releaseList(a, !0)
                        }
                        je.createFromParaBookmark(s, r).select()
                    }, e.prototype.wrapList = function(t, e) {
                        var n = me.head(t),
                            i = me.last(t),
                            o = He.isList(n.previousSibling) && n.previousSibling,
                            r = He.isList(i.nextSibling) && i.nextSibling,
                            s = o || He.insertAfter(He.create(e || "UL"), i);
                        return t = t.map(function(t) {
                            return He.isPurePara(t) ? He.replace(t, "LI") : t
                        }), He.appendChildNodes(s, t), r && (He.appendChildNodes(s, me.from(r.childNodes)), He.remove(r)), t
                    }, e.prototype.releaseList = function(e, n) {
                        var i = [];
                        return t.each(e, function(e, o) {
                            var r = me.head(o),
                                s = me.last(o),
                                a = n ? He.lastAncestor(r, He.isList) : r.parentNode,
                                l = a.childNodes.length > 1 ? He.splitTree(a, {
                                    node: s.parentNode,
                                    offset: He.position(s) + 1
                                }, {
                                    isSkipPaddingBlankHTML: !0
                                }) : null,
                                c = He.splitTree(a, {
                                    node: r.parentNode,
                                    offset: He.position(r)
                                }, {
                                    isSkipPaddingBlankHTML: !0
                                });
                            o = n ? He.listDescendant(c, He.isLi) : me.from(c.childNodes).filter(He.isLi), !n && He.isList(a.parentNode) || (o = o.map(function(t) {
                                return He.replace(t, "P")
                            })), t.each(me.from(o).reverse(), function(t, e) {
                                He.insertAfter(e, a)
                            });
                            var u = me.compact([a, c, l]);
                            t.each(u, function(e, n) {
                                var i = [n].concat(He.listDescendant(n, He.isList));
                                t.each(i.reverse(), function(t, e) {
                                    He.nodeLength(e) || He.remove(e, !0)
                                })
                            }), i = i.concat(o)
                        }), i
                    }, e
                }(),
                Ve = function() {
                    function e() {
                        this.bullet = new Ge
                    }
                    return e.prototype.insertTab = function(t, e) {
                        var n = He.createText(new Array(e + 1).join(He.NBSP_CHAR));
                        (t = t.deleteContents()).insertNode(n, !0), (t = je.create(n, e)).select()
                    }, e.prototype.insertParagraph = function(e) {
                        var n = je.create(e);
                        n = (n = n.deleteContents()).wrapBodyInlineWithPara();
                        var i, o = He.ancestor(n.sc, He.isPara);
                        if (o) {
                            if (He.isEmpty(o) && He.isLi(o)) return void this.bullet.toggleList(o.parentNode.nodeName);
                            if (He.isEmpty(o) && He.isPara(o) && He.isBlockquote(o.parentNode)) He.insertAfter(o, o.parentNode), i = o;
                            else {
                                i = He.splitTree(o, n.getStartPoint());
                                var r = He.listDescendant(o, He.isEmptyAnchor);
                                r = r.concat(He.listDescendant(i, He.isEmptyAnchor)), t.each(r, function(t, e) {
                                    He.remove(e)
                                }), (He.isHeading(i) || He.isPre(i) || He.isCustomStyleTag(i)) && He.isEmpty(i) && (i = He.replace(i, "p"))
                            }
                        } else {
                            var s = n.sc.childNodes[n.so];
                            i = t(He.emptyPara)[0], s ? n.sc.insertBefore(i, s) : n.sc.appendChild(i)
                        }
                        je.create(i, 0).normalize().select().scrollIntoView(e)
                    }, e
                }(),
                We = function(t, e, n, i) {
                    function o() {
                        t && t.tagName && ("td" === t.tagName.toLowerCase() || "th" === t.tagName.toLowerCase()) ? (f.colPos = t.cellIndex, t.parentElement && t.parentElement.tagName && "tr" === t.parentElement.tagName.toLowerCase() ? f.rowPos = t.parentElement.rowIndex : console.error("Impossible to identify start Row point.", t)) : console.error("Impossible to identify start Cell point.", t)
                    }

                    function r(t, e, n, i, o, r, s) {
                        var a = {
                            baseRow: n,
                            baseCell: i,
                            isRowSpan: o,
                            isColSpan: r,
                            isVirtual: s
                        };
                        g[t] || (g[t] = []), g[t][e] = a
                    }

                    function s(t, e, n, i) {
                        return {
                            baseCell: t.baseCell,
                            action: e,
                            virtualTable: {
                                rowIndex: n,
                                cellIndex: i
                            }
                        }
                    }

                    function a(t, e) {
                        if (!g[t]) return e;
                        if (!g[t][e]) return e;
                        for (var n = e; g[t][n];)
                            if (n++, !g[t][n]) return n
                    }

                    function l(t, e) {
                        var n = a(t.rowIndex, e.cellIndex),
                            i = e.colSpan > 1,
                            o = e.rowSpan > 1,
                            s = t.rowIndex === f.rowPos && e.cellIndex === f.colPos;
                        r(t.rowIndex, n, t, e, o, i, !1);
                        var l = e.attributes.rowSpan ? parseInt(e.attributes.rowSpan.value, 10) : 0;
                        if (l > 1)
                            for (var u = 1; u < l; u++) {
                                var h = t.rowIndex + u;
                                c(h, n, e, s), r(h, n, t, e, !0, i, !0)
                            }
                        var d = e.attributes.colSpan ? parseInt(e.attributes.colSpan.value, 10) : 0;
                        if (d > 1)
                            for (var p = 1; p < d; p++) {
                                var g = a(t.rowIndex, n + p);
                                c(t.rowIndex, g, e, s), r(t.rowIndex, g, t, e, o, !0, !0)
                            }
                    }

                    function c(t, e, n, i) {
                        t === f.rowPos && f.colPos >= n.cellIndex && n.cellIndex <= e && !i && f.colPos++
                    }

                    function u() {
                        for (var t = i.rows, e = 0; e < t.length; e++)
                            for (var n = t[e].cells, o = 0; o < n.length; o++) l(t[e], n[o])
                    }

                    function h(t) {
                        switch (e) {
                            case We.where.Column:
                                if (t.isColSpan) return We.resultAction.SubtractSpanCount;
                                break;
                            case We.where.Row:
                                if (!t.isVirtual && t.isRowSpan) return We.resultAction.AddCell;
                                if (t.isRowSpan) return We.resultAction.SubtractSpanCount
                        }
                        return We.resultAction.RemoveCell
                    }

                    function d(t) {
                        switch (e) {
                            case We.where.Column:
                                if (t.isColSpan) return We.resultAction.SumSpanCount;
                                if (t.isRowSpan && t.isVirtual) return We.resultAction.Ignore;
                                break;
                            case We.where.Row:
                                if (t.isRowSpan) return We.resultAction.SumSpanCount;
                                if (t.isColSpan && t.isVirtual) return We.resultAction.Ignore
                        }
                        return We.resultAction.AddCell
                    }

                    function p() {
                        o(), u()
                    }
                    var f = {
                            colPos: 0,
                            rowPos: 0
                        },
                        g = [],
                        m = [];
                    this.getActionList = function() {
                        for (var t = e === We.where.Row ? f.rowPos : -1, i = e === We.where.Column ? f.colPos : -1, o = 0, r = !0; r;) {
                            var a = t >= 0 ? t : o,
                                l = i >= 0 ? i : o,
                                c = g[a];
                            if (!c) return r = !1, m;
                            var u = c[l];
                            if (!u) return r = !1, m;
                            var p = We.resultAction.Ignore;
                            switch (n) {
                                case We.requestAction.Add:
                                    p = d(u);
                                    break;
                                case We.requestAction.Delete:
                                    p = h(u)
                            }
                            m.push(s(u, p, a, l)), o++
                        }
                        return m
                    }, p()
                };
            We.where = {
                Row: 0,
                Column: 1
            }, We.requestAction = {
                Add: 0,
                Delete: 1
            }, We.resultAction = {
                Ignore: 0,
                SubtractSpanCount: 1,
                RemoveCell: 2,
                AddCell: 3,
                SumSpanCount: 4
            };
            var Ke, Qe = function() {
                    function e() {}
                    return e.prototype.tab = function(t, e) {
                        var n = He.ancestor(t.commonAncestor(), He.isCell),
                            i = He.ancestor(n, He.isTable),
                            o = He.listDescendant(i, He.isCell),
                            r = me[e ? "prev" : "next"](o, n);
                        r && je.create(r, 0).select()
                    }, e.prototype.addRow = function(e, n) {
                        for (var i = He.ancestor(e.commonAncestor(), He.isCell), o = t(i).closest("tr"), r = this.recoverAttributes(o), s = t("<tr" + r + "></tr>"), a = new We(i, We.where.Row, We.requestAction.Add, t(o).closest("table")[0]).getActionList(), l = 0; l < a.length; l++) {
                            var c = a[l],
                                u = this.recoverAttributes(c.baseCell);
                            switch (c.action) {
                                case We.resultAction.AddCell:
                                    s.append("<td" + u + ">" + He.blank + "</td>");
                                    break;
                                case We.resultAction.SumSpanCount:
                                    if ("top" === n)
                                        if ((c.baseCell.parent ? c.baseCell.closest("tr").rowIndex : 0) <= o[0].rowIndex) {
                                            var h = t("<div></div>").append(t("<td" + u + ">" + He.blank + "</td>").removeAttr("rowspan")).html();
                                            s.append(h);
                                            break
                                        } var d = parseInt(c.baseCell.rowSpan, 10);
                                    d++, c.baseCell.setAttribute("rowSpan", d)
                            }
                        }
                        if ("top" === n) o.before(s);
                        else {
                            if (i.rowSpan > 1) {
                                var p = o[0].rowIndex + (i.rowSpan - 2);
                                return void t(t(o).parent().find("tr")[p]).after(t(s))
                            }
                            o.after(s)
                        }
                    }, e.prototype.addCol = function(e, n) {
                        var i = He.ancestor(e.commonAncestor(), He.isCell),
                            o = t(i).closest("tr");
                        t(o).siblings().push(o);
                        for (var r = new We(i, We.where.Column, We.requestAction.Add, t(o).closest("table")[0]).getActionList(), s = 0; s < r.length; s++) {
                            var a = r[s],
                                l = this.recoverAttributes(a.baseCell);
                            switch (a.action) {
                                case We.resultAction.AddCell:
                                    "right" === n ? t(a.baseCell).after("<td" + l + ">" + He.blank + "</td>") : t(a.baseCell).before("<td" + l + ">" + He.blank + "</td>");
                                    break;
                                case We.resultAction.SumSpanCount:
                                    if ("right" === n) {
                                        var c = parseInt(a.baseCell.colSpan, 10);
                                        c++, a.baseCell.setAttribute("colSpan", c)
                                    } else t(a.baseCell).before("<td" + l + ">" + He.blank + "</td>")
                            }
                        }
                    }, e.prototype.recoverAttributes = function(t) {
                        var e = "";
                        if (!t) return e;
                        for (var n = t.attributes || [], i = 0; i < n.length; i++) "id" !== n[i].name.toLowerCase() && n[i].specified && (e += " " + n[i].name + "='" + n[i].value + "'");
                        return e
                    }, e.prototype.deleteRow = function(e) {
                        for (var n = He.ancestor(e.commonAncestor(), He.isCell), i = t(n).closest("tr"), o = i.children("td, th").index(t(n)), r = i[0].rowIndex, s = new We(n, We.where.Row, We.requestAction.Delete, t(i).closest("table")[0]).getActionList(), a = 0; a < s.length; a++)
                            if (s[a]) {
                                var l = s[a].baseCell,
                                    c = s[a].virtualTable,
                                    u = l.rowSpan && l.rowSpan > 1,
                                    h = u ? parseInt(l.rowSpan, 10) : 0;
                                switch (s[a].action) {
                                    case We.resultAction.Ignore:
                                        continue;
                                    case We.resultAction.AddCell:
                                        var d = i.next("tr")[0];
                                        if (!d) continue;
                                        var p = i[0].cells[o];
                                        u && (h > 2 ? (h--, d.insertBefore(p, d.cells[o]), d.cells[o].setAttribute("rowSpan", h), d.cells[o].innerHTML = "") : 2 === h && (d.insertBefore(p, d.cells[o]), d.cells[o].removeAttribute("rowSpan"), d.cells[o].innerHTML = ""));
                                        continue;
                                    case We.resultAction.SubtractSpanCount:
                                        u && (h > 2 ? (h--, l.setAttribute("rowSpan", h), c.rowIndex !== r && l.cellIndex === o && (l.innerHTML = "")) : 2 === h && (l.removeAttribute("rowSpan"), c.rowIndex !== r && l.cellIndex === o && (l.innerHTML = "")));
                                        continue;
                                    case We.resultAction.RemoveCell:
                                        continue
                                }
                            } i.remove()
                    }, e.prototype.deleteCol = function(e) {
                        for (var n = He.ancestor(e.commonAncestor(), He.isCell), i = t(n).closest("tr"), o = i.children("td, th").index(t(n)), r = new We(n, We.where.Column, We.requestAction.Delete, t(i).closest("table")[0]).getActionList(), s = 0; s < r.length; s++)
                            if (r[s]) switch (r[s].action) {
                                case We.resultAction.Ignore:
                                    continue;
                                case We.resultAction.SubtractSpanCount:
                                    var a = r[s].baseCell;
                                    if (a.colSpan && a.colSpan > 1) {
                                        var l = a.colSpan ? parseInt(a.colSpan, 10) : 0;
                                        l > 2 ? (l--, a.setAttribute("colSpan", l), a.cellIndex === o && (a.innerHTML = "")) : 2 === l && (a.removeAttribute("colSpan"), a.cellIndex === o && (a.innerHTML = ""))
                                    }
                                    continue;
                                case We.resultAction.RemoveCell:
                                    He.remove(r[s].baseCell, !0);
                                    continue
                            }
                    }, e.prototype.createTable = function(e, n, i) {
                        for (var o, r = [], s = 0; s < e; s++) r.push("<td>" + He.blank + "</td>");
                        o = r.join("");
                        for (var a, l = [], c = 0; c < n; c++) l.push("<tr>" + o + "</tr>");
                        a = l.join("");
                        var u = t("<table>" + a + "</table>");
                        return i && i.tableClassName && u.addClass(i.tableClassName), u[0]
                    }, e.prototype.deleteTable = function(e) {
                        var n = He.ancestor(e.commonAncestor(), He.isCell);
                        t(n).closest("table").remove()
                    }, e
                }(),
                Ye = "bogus",
                Je = function() {
                    function e(e) {
                        var n = this;
                        this.context = e, this.$note = e.layoutInfo.note, this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.options = e.options, this.lang = this.options.langInfo, this.editable = this.$editable[0], this.lastRange = null, this.style = new qe, this.table = new Qe, this.typing = new Ve, this.bullet = new Ge, this.history = new Ue(this.$editable), this.context.memo("help.undo", this.lang.help.undo), this.context.memo("help.redo", this.lang.help.redo), this.context.memo("help.tab", this.lang.help.tab), this.context.memo("help.untab", this.lang.help.untab), this.context.memo("help.insertParagraph", this.lang.help.insertParagraph), this.context.memo("help.insertOrderedList", this.lang.help.insertOrderedList), this.context.memo("help.insertUnorderedList", this.lang.help.insertUnorderedList), this.context.memo("help.indent", this.lang.help.indent), this.context.memo("help.outdent", this.lang.help.outdent), this.context.memo("help.formatPara", this.lang.help.formatPara), this.context.memo("help.insertHorizontalRule", this.lang.help.insertHorizontalRule), this.context.memo("help.fontName", this.lang.help.fontName);
                        for (var i = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor"], o = 0, r = i.length; o < r; o++) this[i[o]] = function(t) {
                            return function(e) {
                                n.beforeCommand(), document.execCommand(t, !1, e), n.afterCommand(!0)
                            }
                        }(i[o]), this.context.memo("help." + i[o], this.lang.help[i[o]]);
                        this.fontName = this.wrapCommand(function(t) {
                            return n.fontStyling("font-family", "'" + t + "'")
                        }), this.fontSize = this.wrapCommand(function(t) {
                            return n.fontStyling("font-size", t + "px")
                        });
                        for (o = 1; o <= 6; o++) this["formatH" + o] = function(t) {
                            return function() {
                                n.formatBlock("H" + t)
                            }
                        }(o), this.context.memo("help.formatH" + o, this.lang.help["formatH" + o]);
                        this.insertParagraph = this.wrapCommand(function() {
                            n.typing.insertParagraph(n.editable)
                        }), this.insertOrderedList = this.wrapCommand(function() {
                            n.bullet.insertOrderedList(n.editable)
                        }), this.insertUnorderedList = this.wrapCommand(function() {
                            n.bullet.insertUnorderedList(n.editable)
                        }), this.indent = this.wrapCommand(function() {
                            n.bullet.indent(n.editable)
                        }), this.outdent = this.wrapCommand(function() {
                            n.bullet.outdent(n.editable)
                        }), this.insertNode = this.wrapCommand(function(e) {
                            n.isLimited(t(e).text().length) || (n.createRange().insertNode(e), je.createFromNodeAfter(e).select())
                        }), this.insertText = this.wrapCommand(function(t) {
                            if (!n.isLimited(t.length)) {
                                var e = n.createRange().insertNode(He.createText(t));
                                je.create(e, He.nodeLength(e)).select()
                            }
                        }), this.pasteHTML = this.wrapCommand(function(t) {
                            if (!n.isLimited(t.length)) {
                                var e = n.createRange().pasteHTML(t);
                                je.createFromNodeAfter(me.last(e)).select()
                            }
                        }), this.formatBlock = this.wrapCommand(function(t, e) {
                            var i = n.options.callbacks.onApplyCustomStyle;
                            i ? i.call(n, e, n.context, n.onFormatBlock) : n.onFormatBlock(t, e)
                        }), this.insertHorizontalRule = this.wrapCommand(function() {
                            var t = n.createRange().insertNode(He.create("HR"));
                            t.nextSibling && je.create(t.nextSibling, 0).normalize().select()
                        }), this.lineHeight = this.wrapCommand(function(t) {
                            n.style.stylePara(n.createRange(), {
                                lineHeight: t
                            })
                        }), this.createLink = this.wrapCommand(function(e) {
                            var i = e.url,
                                o = e.text,
                                r = e.isNewWindow,
                                s = e.range || n.createRange(),
                                a = s.toString() !== o;
                            "string" == typeof i && (i = i.trim()), i = n.options.onCreateLink ? n.options.onCreateLink(i) : /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(i) ? i : "http://" + i;
                            var l = [];
                            if (a) {
                                var c = (s = s.deleteContents()).insertNode(t("<A>" + o + "</A>")[0]);
                                l.push(c)
                            } else l = n.style.styleNodes(s, {
                                nodeName: "A",
                                expandClosestSibling: !0,
                                onlyPartialContains: !0
                            });
                            t.each(l, function(e, n) {
                                t(n).attr("href", i), r ? t(n).attr("target", "_blank") : t(n).removeAttr("target")
                            });
                            var u = je.createFromNodeBefore(me.head(l)).getStartPoint(),
                                h = je.createFromNodeAfter(me.last(l)).getEndPoint();
                            je.create(u.node, u.offset, h.node, h.offset).select()
                        }), this.color = this.wrapCommand(function(t) {
                            var e = t.foreColor,
                                n = t.backColor;
                            e && document.execCommand("foreColor", !1, e), n && document.execCommand("backColor", !1, n)
                        }), this.foreColor = this.wrapCommand(function(t) {
                            document.execCommand("styleWithCSS", !1, !0), document.execCommand("foreColor", !1, t)
                        }), this.insertTable = this.wrapCommand(function(t) {
                            var e = t.split("x");
                            n.createRange().deleteContents().insertNode(n.table.createTable(e[0], e[1], n.options))
                        }), this.removeMedia = this.wrapCommand(function() {
                            var e = t(n.restoreTarget()).parent();
                            e.parent("figure").length ? e.parent("figure").remove() : e = t(n.restoreTarget()).detach(), n.context.triggerEvent("media.delete", e, n.$editable)
                        }), this.floatMe = this.wrapCommand(function(e) {
                            var i = t(n.restoreTarget());
                            i.toggleClass("note-float-left", "left" === e), i.toggleClass("note-float-right", "right" === e), i.css("float", e)
                        }), this.resize = this.wrapCommand(function(e) {
                            t(n.restoreTarget()).css({
                                width: 100 * e + "%",
                                height: ""
                            })
                        })
                    }
                    return e.prototype.initialize = function() {
                        var t = this;
                        this.$editable.on("keydown", function(e) {
                            if (e.keyCode === Fe.code.ENTER && t.context.triggerEvent("enter", e), t.context.triggerEvent("keydown", e), e.isDefaultPrevented() || (t.options.shortcuts ? t.handleKeyMap(e) : t.preventDefaultEditableShortCuts(e)), t.isLimited(1, e)) return !1
                        }).on("keyup", function(e) {
                            t.context.triggerEvent("keyup", e)
                        }).on("focus", function(e) {
                            t.context.triggerEvent("focus", e)
                        }).on("blur", function(e) {
                            t.context.triggerEvent("blur", e)
                        }).on("mousedown", function(e) {
                            t.context.triggerEvent("mousedown", e)
                        }).on("mouseup", function(e) {
                            t.context.triggerEvent("mouseup", e)
                        }).on("scroll", function(e) {
                            t.context.triggerEvent("scroll", e)
                        }).on("paste", function(e) {
                            t.context.triggerEvent("paste", e)
                        }), this.$editable.html(He.html(this.$note) || He.emptyPara), this.$editable.on(Te.inputEventName, ge.debounce(function() {
                            t.context.triggerEvent("change", t.$editable.html())
                        }, 100)), this.$editor.on("focusin", function(e) {
                            t.context.triggerEvent("focusin", e)
                        }).on("focusout", function(e) {
                            t.context.triggerEvent("focusout", e)
                        }), this.options.airMode || (this.options.width && this.$editor.outerWidth(this.options.width), this.options.height && this.$editable.outerHeight(this.options.height), this.options.maxHeight && this.$editable.css("max-height", this.options.maxHeight), this.options.minHeight && this.$editable.css("min-height", this.options.minHeight)), this.history.recordUndo()
                    }, e.prototype.destroy = function() {
                        this.$editable.off()
                    }, e.prototype.handleKeyMap = function(t) {
                        var e = this.options.keyMap[Te.isMac ? "mac" : "pc"],
                            n = [];
                        t.metaKey && n.push("CMD"), t.ctrlKey && !t.altKey && n.push("CTRL"), t.shiftKey && n.push("SHIFT");
                        var i = Fe.nameFromCode[t.keyCode];
                        i && n.push(i);
                        var o = e[n.join("+")];
                        o ? !1 !== this.context.invoke(o) && t.preventDefault() : Fe.isEdit(t.keyCode) && this.afterCommand()
                    }, e.prototype.preventDefaultEditableShortCuts = function(t) {
                        (t.ctrlKey || t.metaKey) && me.contains([66, 73, 85], t.keyCode) && t.preventDefault()
                    }, e.prototype.isLimited = function(t, e) {
                        return t = t || 0, (void 0 === e || !(Fe.isMove(e.keyCode) || e.ctrlKey || e.metaKey || me.contains([Fe.code.BACKSPACE, Fe.code.DELETE], e.keyCode))) && (this.options.maxTextLength > 0 && this.$editable.text().length + t >= this.options.maxTextLength)
                    }, e.prototype.createRange = function() {
                        return this.focus(), je.create(this.editable)
                    }, e.prototype.saveRange = function(t) {
                        this.lastRange = this.createRange(), t && this.lastRange.collapse().select()
                    }, e.prototype.restoreRange = function() {
                        this.lastRange && (this.lastRange.select(), this.focus())
                    }, e.prototype.saveTarget = function(t) {
                        this.$editable.data("target", t)
                    }, e.prototype.clearTarget = function() {
                        this.$editable.removeData("target")
                    }, e.prototype.restoreTarget = function() {
                        return this.$editable.data("target")
                    }, e.prototype.currentStyle = function() {
                        var t = je.create();
                        return t && (t = t.normalize()), t ? this.style.current(t) : this.style.fromNode(this.$editable)
                    }, e.prototype.styleFromNode = function(t) {
                        return this.style.fromNode(t)
                    }, e.prototype.undo = function() {
                        this.context.triggerEvent("before.command", this.$editable.html()), this.history.undo(), this.context.triggerEvent("change", this.$editable.html())
                    }, e.prototype.redo = function() {
                        this.context.triggerEvent("before.command", this.$editable.html()), this.history.redo(), this.context.triggerEvent("change", this.$editable.html())
                    }, e.prototype.beforeCommand = function() {
                        this.context.triggerEvent("before.command", this.$editable.html()), this.focus()
                    }, e.prototype.afterCommand = function(t) {
                        this.history.recordUndo(), t || this.context.triggerEvent("change", this.$editable.html())
                    }, e.prototype.tab = function() {
                        var t = this.createRange();
                        if (t.isCollapsed() && t.isOnCell()) this.table.tab(t);
                        else {
                            if (0 === this.options.tabSize) return !1;
                            this.isLimited(this.options.tabSize) || (this.beforeCommand(), this.typing.insertTab(t, this.options.tabSize), this.afterCommand())
                        }
                    }, e.prototype.untab = function() {
                        var t = this.createRange();
                        if (t.isCollapsed() && t.isOnCell()) this.table.tab(t, !0);
                        else if (0 === this.options.tabSize) return !1
                    }, e.prototype.wrapCommand = function(t) {
                        var e = this;
                        return function() {
                            e.beforeCommand(), t.apply(e, arguments), e.afterCommand()
                        }
                    }, e.prototype.insertImage = function(t, e) {
                        var n = this;
                        return Vt(t, e).then(function(t) {
                            n.beforeCommand(), "function" == typeof e ? e(t) : ("string" == typeof e && t.attr("data-filename", e), t.css("width", Math.min(n.$editable.width(), t.width()))), t.show(), je.create(n.editable).insertNode(t[0]), je.createFromNodeAfter(t[0]).select(), n.afterCommand()
                        }).fail(function(t) {
                            console.log("image upload error", t), n.context.triggerEvent("image.upload.error", t)
                        })
                    }, e.prototype.insertImages = function(e) {
                        var n = this;
                        t.each(e, function(t, e) {
                            var i = e.name;
                            n.options.maximumImageFileSize && n.options.maximumImageFileSize < e.size ? n.context.triggerEvent("image.upload.error", n.lang.image.maximumFileSizeError) : Gt(e).then(function(t) {
                                return n.insertImage(t, i)
                            }).fail(function() {
                                n.context.triggerEvent("image.upload.error")
                            })
                        })
                    }, e.prototype.insertImagesOrCallback = function(t) {
                        this.options.callbacks.onImageUpload ? this.context.triggerEvent("image.upload", t) : this.insertImages(t)
                    }, e.prototype.getSelectedText = function() {
                        var t = this.createRange();
                        return t.isOnAnchor() && (t = je.createFromNode(He.ancestor(t.sc, He.isAnchor))), t.toString()
                    }, e.prototype.onFormatBlock = function(e, n) {
                        if (e = Te.isMSIE ? "<" + e + ">" : e, document.execCommand("FormatBlock", !1, e), n && n.length) {
                            var i = n[0].className || "";
                            if (i) {
                                var o = this.createRange();
                                t([o.sc, o.ec]).closest(e).addClass(i)
                            }
                        }
                    }, e.prototype.formatPara = function() {
                        this.formatBlock("P")
                    }, e.prototype.fontStyling = function(e, n) {
                        var i = this.createRange();
                        if (i) {
                            var o = this.style.styleNodes(i);
                            if (t(o).css(e, n), i.isCollapsed()) {
                                var r = me.head(o);
                                r && !He.nodeLength(r) && (r.innerHTML = He.ZERO_WIDTH_NBSP_CHAR, je.createFromNodeAfter(r.firstChild).select(), this.$editable.data(Ye, r))
                            }
                        }
                    }, e.prototype.unlink = function() {
                        var t = this.createRange();
                        if (t.isOnAnchor()) {
                            var e = He.ancestor(t.sc, He.isAnchor);
                            (t = je.createFromNode(e)).select(), this.beforeCommand(), document.execCommand("unlink"), this.afterCommand()
                        }
                    }, e.prototype.getLinkInfo = function() {
                        var e = this.createRange().expand(He.isAnchor),
                            n = t(me.head(e.nodes(He.isAnchor))),
                            i = {
                                range: e,
                                text: e.toString(),
                                url: n.length ? n.attr("href") : ""
                            };
                        return n.length && (i.isNewWindow = "_blank" === n.attr("target")), i
                    }, e.prototype.addRow = function(t) {
                        var e = this.createRange(this.$editable);
                        e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.addRow(e, t), this.afterCommand())
                    }, e.prototype.addCol = function(t) {
                        var e = this.createRange(this.$editable);
                        e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.addCol(e, t), this.afterCommand())
                    }, e.prototype.deleteRow = function() {
                        var t = this.createRange(this.$editable);
                        t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteRow(t), this.afterCommand())
                    }, e.prototype.deleteCol = function() {
                        var t = this.createRange(this.$editable);
                        t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteCol(t), this.afterCommand())
                    }, e.prototype.deleteTable = function() {
                        var t = this.createRange(this.$editable);
                        t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteTable(t), this.afterCommand())
                    }, e.prototype.resizeTo = function(t, e, n) {
                        var i;
                        if (n) {
                            var o = t.y / t.x,
                                r = e.data("ratio");
                            i = {
                                width: r > o ? t.x : t.y / r,
                                height: r > o ? t.x * r : t.y
                            }
                        } else i = {
                            width: t.x,
                            height: t.y
                        };
                        e.css(i)
                    }, e.prototype.hasFocus = function() {
                        return this.$editable.is(":focus")
                    }, e.prototype.focus = function() {
                        this.hasFocus() || this.$editable.focus()
                    }, e.prototype.isEmpty = function() {
                        return He.isEmpty(this.$editable[0]) || He.emptyPara === this.$editable.html()
                    }, e.prototype.empty = function() {
                        this.context.invoke("code", He.emptyPara)
                    }, e
                }(),
                Ze = function() {
                    function t(t) {
                        this.context = t, this.$editable = t.layoutInfo.editable
                    }
                    return t.prototype.initialize = function() {
                        this.$editable.on("paste", this.pasteByEvent.bind(this))
                    }, t.prototype.pasteByEvent = function(t) {
                        var e = t.originalEvent.clipboardData;
                        if (e && e.items && e.items.length) {
                            var n = me.head(e.items);
                            "file" === n.kind && -1 !== n.type.indexOf("image/") && this.context.invoke("editor.insertImagesOrCallback", [n.getAsFile()]), this.context.invoke("editor.afterCommand")
                        }
                    }, t
                }(),
                Xe = function() {
                    function e(e) {
                        this.context = e, this.$eventListener = t(document), this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.options = e.options, this.lang = this.options.langInfo, this.documentEventHandlers = {}, this.$dropzone = t(['<div class="note-dropzone">', '  <div class="note-dropzone-message"/>', "</div>"].join("")).prependTo(this.$editor)
                    }
                    return e.prototype.initialize = function() {
                        this.options.disableDragAndDrop ? (this.documentEventHandlers.onDrop = function(t) {
                            t.preventDefault()
                        }, this.$eventListener = this.$dropzone, this.$eventListener.on("drop", this.documentEventHandlers.onDrop)) : this.attachDragAndDropEvent()
                    }, e.prototype.attachDragAndDropEvent = function() {
                        var e = this,
                            n = t(),
                            i = this.$dropzone.find(".note-dropzone-message");
                        this.documentEventHandlers.onDragenter = function(t) {
                            var o = e.context.invoke("codeview.isActivated"),
                                r = e.$editor.width() > 0 && e.$editor.height() > 0;
                            o || n.length || !r || (e.$editor.addClass("dragover"), e.$dropzone.width(e.$editor.width()), e.$dropzone.height(e.$editor.height()), i.text(e.lang.image.dragImageHere)), n = n.add(t.target)
                        }, this.documentEventHandlers.onDragleave = function(t) {
                            (n = n.not(t.target)).length || e.$editor.removeClass("dragover")
                        }, this.documentEventHandlers.onDrop = function() {
                            n = t(), e.$editor.removeClass("dragover")
                        }, this.$eventListener.on("dragenter", this.documentEventHandlers.onDragenter).on("dragleave", this.documentEventHandlers.onDragleave).on("drop", this.documentEventHandlers.onDrop), this.$dropzone.on("dragenter", function() {
                            e.$dropzone.addClass("hover"), i.text(e.lang.image.dropImage)
                        }).on("dragleave", function() {
                            e.$dropzone.removeClass("hover"), i.text(e.lang.image.dragImageHere)
                        }), this.$dropzone.on("drop", function(n) {
                            var i = n.originalEvent.dataTransfer;
                            n.preventDefault(), i && i.files && i.files.length ? (e.$editable.focus(), e.context.invoke("editor.insertImagesOrCallback", i.files)) : t.each(i.types, function(n, o) {
                                var r = i.getData(o);
                                o.toLowerCase().indexOf("text") > -1 ? e.context.invoke("editor.pasteHTML", r) : t(r).each(function(t, n) {
                                    e.context.invoke("editor.insertNode", n)
                                })
                            })
                        }).on("dragover", !1)
                    }, e.prototype.destroy = function() {
                        var t = this;
                        Object.keys(this.documentEventHandlers).forEach(function(e) {
                            t.$eventListener.off(e.substr(2).toLowerCase(), t.documentEventHandlers[e])
                        }), this.documentEventHandlers = {}
                    }, e
                }();
            Te.hasCodeMirror && (Te.isSupportAmd ? require(["codemirror"], function(t) {
                Ke = t
            }) : Ke = window.CodeMirror);
            var tn = function() {
                    function t(t) {
                        this.context = t, this.$editor = t.layoutInfo.editor, this.$editable = t.layoutInfo.editable, this.$codable = t.layoutInfo.codable, this.options = t.options
                    }
                    return t.prototype.sync = function() {
                        this.isActivated() && Te.hasCodeMirror && this.$codable.data("cmEditor").save()
                    }, t.prototype.isActivated = function() {
                        return this.$editor.hasClass("codeview")
                    }, t.prototype.toggle = function() {
                        this.isActivated() ? this.deactivate() : this.activate(), this.context.triggerEvent("codeview.toggled")
                    }, t.prototype.activate = function() {
                        var t = this;
                        if (this.$codable.val(He.html(this.$editable, this.options.prettifyHtml)), this.$codable.height(this.$editable.height()), this.context.invoke("toolbar.updateCodeview", !0), this.$editor.addClass("codeview"), this.$codable.focus(), Te.hasCodeMirror) {
                            var e = Ke.fromTextArea(this.$codable[0], this.options.codemirror);
                            if (this.options.codemirror.tern) {
                                var n = new Ke.TernServer(this.options.codemirror.tern);
                                e.ternServer = n, e.on("cursorActivity", function(t) {
                                    n.updateArgHints(t)
                                })
                            }
                            e.on("blur", function(n) {
                                t.context.triggerEvent("blur.codeview", e.getValue(), n)
                            }), e.setSize(null, this.$editable.outerHeight()), this.$codable.data("cmEditor", e)
                        } else this.$codable.on("blur", function(e) {
                            t.context.triggerEvent("blur.codeview", t.$codable.val(), e)
                        })
                    }, t.prototype.deactivate = function() {
                        if (Te.hasCodeMirror) {
                            var t = this.$codable.data("cmEditor");
                            this.$codable.val(t.getValue()), t.toTextArea()
                        }
                        var e = He.value(this.$codable, this.options.prettifyHtml) || He.emptyPara,
                            n = this.$editable.html() !== e;
                        this.$editable.html(e), this.$editable.height(this.options.height ? this.$codable.height() : "auto"), this.$editor.removeClass("codeview"), n && this.context.triggerEvent("change", this.$editable.html(), this.$editable), this.$editable.focus(), this.context.invoke("toolbar.updateCodeview", !1)
                    }, t.prototype.destroy = function() {
                        this.isActivated() && this.deactivate()
                    }, t
                }(),
                en = 24,
                nn = function() {
                    function e(e) {
                        this.$document = t(document), this.$statusbar = e.layoutInfo.statusbar, this.$editable = e.layoutInfo.editable, this.options = e.options
                    }
                    return e.prototype.initialize = function() {
                        var t = this;
                        this.options.airMode || this.options.disableResizeEditor ? this.destroy() : this.$statusbar.on("mousedown", function(e) {
                            e.preventDefault(), e.stopPropagation();
                            var n = t.$editable.offset().top - t.$document.scrollTop(),
                                i = function(e) {
                                    var i = e.clientY - (n + en);
                                    i = t.options.minheight > 0 ? Math.max(i, t.options.minheight) : i, i = t.options.maxHeight > 0 ? Math.min(i, t.options.maxHeight) : i, t.$editable.height(i)
                                };
                            t.$document.on("mousemove", i).one("mouseup", function() {
                                t.$document.off("mousemove", i)
                            })
                        })
                    }, e.prototype.destroy = function() {
                        this.$statusbar.off()
                    }, e
                }(),
                on = function() {
                    function e(e) {
                        var n = this;
                        this.context = e, this.$editor = e.layoutInfo.editor, this.$toolbar = e.layoutInfo.toolbar, this.$editable = e.layoutInfo.editable, this.$codable = e.layoutInfo.codable, this.$window = t(window), this.$scrollbar = t("html, body"), this.onResize = function() {
                            n.resizeTo({
                                h: n.$window.height() - n.$toolbar.outerHeight()
                            })
                        }
                    }
                    return e.prototype.resizeTo = function(t) {
                        this.$editable.css("height", t.h), this.$codable.css("height", t.h), this.$codable.data("cmeditor") && this.$codable.data("cmeditor").setsize(null, t.h)
                    }, e.prototype.toggle = function() {
                        this.$editor.toggleClass("fullscreen"), this.isFullscreen() ? (this.$editable.data("orgHeight", this.$editable.css("height")), this.$window.on("resize", this.onResize).trigger("resize"), this.$scrollbar.css("overflow", "hidden")) : (this.$window.off("resize", this.onResize), this.resizeTo({
                            h: this.$editable.data("orgHeight")
                        }), this.$scrollbar.css("overflow", "visible")), this.context.invoke("toolbar.updateFullscreen", this.isFullscreen())
                    }, e.prototype.isFullscreen = function() {
                        return this.$editor.hasClass("fullscreen")
                    }, e
                }(),
                rn = function() {
                    function e(e) {
                        var n = this;
                        this.context = e, this.$document = t(document), this.$editingArea = e.layoutInfo.editingArea, this.options = e.options, this.lang = this.options.langInfo, this.events = {
                            "summernote.mousedown": function(t, e) {
                                n.update(e.target) && e.preventDefault()
                            },
                            "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function() {
                                n.update()
                            },
                            "summernote.disable": function() {
                                n.hide()
                            },
                            "summernote.codeview.toggled": function() {
                                n.update()
                            }
                        }
                    }
                    return e.prototype.initialize = function() {
                        var e = this;
                        this.$handle = t(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', this.options.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(this.$editingArea), this.$handle.on("mousedown", function(t) {
                            if (He.isControlSizing(t.target)) {
                                t.preventDefault(), t.stopPropagation();
                                var n = e.$handle.find(".note-control-selection").data("target"),
                                    i = n.offset(),
                                    o = e.$document.scrollTop(),
                                    r = function(t) {
                                        e.context.invoke("editor.resizeTo", {
                                            x: t.clientX - i.left,
                                            y: t.clientY - (i.top - o)
                                        }, n, !t.shiftKey), e.update(n[0])
                                    };
                                e.$document.on("mousemove", r).one("mouseup", function(t) {
                                    t.preventDefault(), e.$document.off("mousemove", r), e.context.invoke("editor.afterCommand")
                                }), n.data("ratio") || n.data("ratio", n.height() / n.width())
                            }
                        }), this.$handle.on("wheel", function(t) {
                            t.preventDefault(), e.update()
                        })
                    }, e.prototype.destroy = function() {
                        this.$handle.remove()
                    }, e.prototype.update = function(e) {
                        if (this.context.isDisabled()) return !1;
                        var n = He.isImg(e),
                            i = this.$handle.find(".note-control-selection");
                        if (this.context.invoke("imagePopover.update", e), n) {
                            var o = t(e),
                                r = o.position(),
                                s = {
                                    left: r.left + parseInt(o.css("marginLeft"), 10),
                                    top: r.top + parseInt(o.css("marginTop"), 10)
                                },
                                a = {
                                    w: o.outerWidth(!1),
                                    h: o.outerHeight(!1)
                                };
                            i.css({
                                display: "block",
                                left: s.left,
                                top: s.top,
                                width: a.w,
                                height: a.h
                            }).data("target", o);
                            var l = new Image;
                            l.src = o.attr("src");
                            var c = a.w + "x" + a.h + " (" + this.lang.image.original + ": " + l.width + "x" + l.height + ")";
                            i.find(".note-control-selection-info").text(c), this.context.invoke("editor.saveTarget", e)
                        } else this.hide();
                        return n
                    }, e.prototype.hide = function() {
                        this.context.invoke("editor.clearTarget"), this.$handle.children().hide()
                    }, e
                }(),
                sn = "http://",
                an = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,
                ln = function() {
                    function e(t) {
                        var e = this;
                        this.context = t, this.events = {
                            "summernote.keyup": function(t, n) {
                                n.isDefaultPrevented() || e.handleKeyup(n)
                            },
                            "summernote.keydown": function(t, n) {
                                e.handleKeydown(n)
                            }
                        }
                    }
                    return e.prototype.initialize = function() {
                        this.lastWordRange = null
                    }, e.prototype.destroy = function() {
                        this.lastWordRange = null
                    }, e.prototype.replace = function() {
                        if (this.lastWordRange) {
                            var e = this.lastWordRange.toString(),
                                n = e.match(an);
                            if (n && (n[1] || n[2])) {
                                var i = n[1] ? e : sn + e,
                                    o = t("<a />").html(e).attr("href", i)[0];
                                this.lastWordRange.insertNode(o), this.lastWordRange = null, this.context.invoke("editor.focus")
                            }
                        }
                    }, e.prototype.handleKeydown = function(t) {
                        if (me.contains([Fe.code.ENTER, Fe.code.SPACE], t.keyCode)) {
                            var e = this.context.invoke("editor.createRange").getWordRange();
                            this.lastWordRange = e
                        }
                    }, e.prototype.handleKeyup = function(t) {
                        me.contains([Fe.code.ENTER, Fe.code.SPACE], t.keyCode) && this.replace()
                    }, e
                }(),
                cn = function() {
                    function t(t) {
                        var e = this;
                        this.$note = t.layoutInfo.note, this.events = {
                            "summernote.change": function() {
                                e.$note.val(t.invoke("code"))
                            }
                        }
                    }
                    return t.prototype.shouldInitialize = function() {
                        return He.isTextarea(this.$note[0])
                    }, t
                }(),
                un = function() {
                    function e(t) {
                        var e = this;
                        this.context = t, this.$editingArea = t.layoutInfo.editingArea, this.options = t.options, this.events = {
                            "summernote.init summernote.change": function() {
                                e.update()
                            },
                            "summernote.codeview.toggled": function() {
                                e.update()
                            }
                        }
                    }
                    return e.prototype.shouldInitialize = function() {
                        return !!this.options.placeholder
                    }, e.prototype.initialize = function() {
                        var e = this;
                        this.$placeholder = t('<div class="note-placeholder">'), this.$placeholder.on("click", function() {
                            e.context.invoke("focus")
                        }).text(this.options.placeholder).prependTo(this.$editingArea), this.update()
                    }, e.prototype.destroy = function() {
                        this.$placeholder.remove()
                    }, e.prototype.update = function() {
                        var t = !this.context.invoke("codeview.isActivated") && this.context.invoke("editor.isEmpty");
                        this.$placeholder.toggle(t)
                    }, e
                }(),
                hn = function() {
                    function e(e) {
                        this.ui = t.summernote.ui, this.context = e, this.$toolbar = e.layoutInfo.toolbar, this.options = e.options, this.lang = this.options.langInfo, this.invertedKeyMap = ge.invertObject(this.options.keyMap[Te.isMac ? "mac" : "pc"])
                    }
                    return e.prototype.representShortcut = function(t) {
                        var e = this.invertedKeyMap[t];
                        return this.options.shortcuts && e ? (Te.isMac && (e = e.replace("CMD", "\u2318").replace("SHIFT", "\u21e7")), " (" + (e = e.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : ""
                    }, e.prototype.button = function(t) {
                        return !this.options.tooltip && t.tooltip && delete t.tooltip, t.container = this.options.container, this.ui.button(t)
                    }, e.prototype.initialize = function() {
                        this.addToolbarButtons(), this.addImagePopoverButtons(), this.addLinkPopoverButtons(), this.addTablePopoverButtons(), this.fontInstalledMap = {}
                    }, e.prototype.destroy = function() {
                        delete this.fontInstalledMap
                    }, e.prototype.isFontInstalled = function(t) {
                        return this.fontInstalledMap.hasOwnProperty(t) || (this.fontInstalledMap[t] = Te.isFontInstalled(t) || me.contains(this.options.fontNamesIgnoreCheck, t)), this.fontInstalledMap[t]
                    }, e.prototype.isFontDeservedToAdd = function(e) {
                        var n = ["sans-serif", "serif", "monospace", "cursive", "fantasy"];
                        return "" !== (e = e.toLowerCase()) && this.isFontInstalled(e) && -1 === t.inArray(e, n)
                    }, e.prototype.addToolbarButtons = function() {
                        var e = this;
                        this.context.memo("button.style", function() {
                            return e.ui.buttonGroup([e.button({
                                className: "dropdown-toggle",
                                contents: e.ui.dropdownButtonContents(e.ui.icon(e.options.icons.magic), e.options),
                                tooltip: e.lang.style.style,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), e.ui.dropdown({
                                className: "dropdown-style",
                                items: e.options.styleTags,
                                template: function(t) {
                                    "string" == typeof t && (t = {
                                        tag: t,
                                        title: e.lang.style.hasOwnProperty(t) ? e.lang.style[t] : t
                                    });
                                    var n = t.tag,
                                        i = t.title;
                                    return "<" + n + (t.style ? ' style="' + t.style + '" ' : "") + (t.className ? ' class="' + t.className + '"' : "") + ">" + i + "</" + n + ">"
                                },
                                click: e.context.createInvokeHandler("editor.formatBlock")
                            })]).render()
                        });
                        for (var n = function(t) {
                                var n = i.options.styleTags[t];
                                i.context.memo("button.style." + n, function() {
                                    return e.button({
                                        className: "note-btn-style-" + n,
                                        contents: '<div data-value="' + n + '">' + n.toUpperCase() + "</div>",
                                        tooltip: n.toUpperCase(),
                                        click: e.context.createInvokeHandler("editor.formatBlock")
                                    }).render()
                                })
                            }, i = this, o = 0, r = this.options.styleTags.length; o < r; o++) n(o, r);
                        this.context.memo("button.bold", function() {
                            return e.button({
                                className: "note-btn-bold",
                                contents: e.ui.icon(e.options.icons.bold),
                                tooltip: e.lang.font.bold + e.representShortcut("bold"),
                                click: e.context.createInvokeHandlerAndUpdateState("editor.bold")
                            }).render()
                        }), this.context.memo("button.italic", function() {
                            return e.button({
                                className: "note-btn-italic",
                                contents: e.ui.icon(e.options.icons.italic),
                                tooltip: e.lang.font.italic + e.representShortcut("italic"),
                                click: e.context.createInvokeHandlerAndUpdateState("editor.italic")
                            }).render()
                        }), this.context.memo("button.underline", function() {
                            return e.button({
                                className: "note-btn-underline",
                                contents: e.ui.icon(e.options.icons.underline),
                                tooltip: e.lang.font.underline + e.representShortcut("underline"),
                                click: e.context.createInvokeHandlerAndUpdateState("editor.underline")
                            }).render()
                        }), this.context.memo("button.clear", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.eraser),
                                tooltip: e.lang.font.clear + e.representShortcut("removeFormat"),
                                click: e.context.createInvokeHandler("editor.removeFormat")
                            }).render()
                        }), this.context.memo("button.strikethrough", function() {
                            return e.button({
                                className: "note-btn-strikethrough",
                                contents: e.ui.icon(e.options.icons.strikethrough),
                                tooltip: e.lang.font.strikethrough + e.representShortcut("strikethrough"),
                                click: e.context.createInvokeHandlerAndUpdateState("editor.strikethrough")
                            }).render()
                        }), this.context.memo("button.superscript", function() {
                            return e.button({
                                className: "note-btn-superscript",
                                contents: e.ui.icon(e.options.icons.superscript),
                                tooltip: e.lang.font.superscript,
                                click: e.context.createInvokeHandlerAndUpdateState("editor.superscript")
                            }).render()
                        }), this.context.memo("button.subscript", function() {
                            return e.button({
                                className: "note-btn-subscript",
                                contents: e.ui.icon(e.options.icons.subscript),
                                tooltip: e.lang.font.subscript,
                                click: e.context.createInvokeHandlerAndUpdateState("editor.subscript")
                            }).render()
                        }), this.context.memo("button.fontname", function() {
                            var n = e.context.invoke("editor.currentStyle");
                            return t.each(n["font-family"].split(","), function(n, i) {
                                i = i.trim().replace(/['"]+/g, ""), e.isFontDeservedToAdd(i) && -1 === t.inArray(i, e.options.fontNames) && e.options.fontNames.push(i)
                            }), e.ui.buttonGroup([e.button({
                                className: "dropdown-toggle",
                                contents: e.ui.dropdownButtonContents('<span class="note-current-fontname"/>', e.options),
                                tooltip: e.lang.font.name,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), e.ui.dropdownCheck({
                                className: "dropdown-fontname",
                                checkClassName: e.options.icons.menuCheck,
                                items: e.options.fontNames.filter(e.isFontInstalled.bind(e)),
                                template: function(t) {
                                    return "<span style=\"font-family: '" + t + "'\">" + t + "</span>"
                                },
                                click: e.context.createInvokeHandlerAndUpdateState("editor.fontName")
                            })]).render()
                        }), this.context.memo("button.fontsize", function() {
                            return e.ui.buttonGroup([e.button({
                                className: "dropdown-toggle",
                                contents: e.ui.dropdownButtonContents('<span class="note-current-fontsize"/>', e.options),
                                tooltip: e.lang.font.size,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), e.ui.dropdownCheck({
                                className: "dropdown-fontsize",
                                checkClassName: e.options.icons.menuCheck,
                                items: e.options.fontSizes,
                                click: e.context.createInvokeHandlerAndUpdateState("editor.fontSize")
                            })]).render()
                        }), this.context.memo("button.color", function() {
                            return e.ui.buttonGroup({
                                className: "note-color",
                                children: [e.button({
                                    className: "note-current-color-button",
                                    contents: e.ui.icon(e.options.icons.font + " note-recent-color"),
                                    tooltip: e.lang.color.recent,
                                    click: function(n) {
                                        var i = t(n.currentTarget);
                                        e.context.invoke("editor.color", {
                                            backColor: i.attr("data-backColor"),
                                            foreColor: i.attr("data-foreColor")
                                        })
                                    },
                                    callback: function(t) {
                                        t.find(".note-recent-color").css("background-color", "#FFFF00"), t.attr("data-backColor", "#FFFF00")
                                    }
                                }), e.button({
                                    className: "dropdown-toggle",
                                    contents: e.ui.dropdownButtonContents("", e.options),
                                    tooltip: e.lang.color.more,
                                    data: {
                                        toggle: "dropdown"
                                    }
                                }), e.ui.dropdown({
                                    items: ['<div class="note-palette">', '  <div class="note-palette-title">' + e.lang.color.background + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-light" data-event="backColor" data-value="inherit">', e.lang.color.transparent, "    </button>", "  </div>", '  <div class="note-holder" data-event="backColor"/>', "</div>", '<div class="note-palette">', '  <div class="note-palette-title">' + e.lang.color.foreground + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-light" data-event="removeFormat" data-value="foreColor">', e.lang.color.resetToDefault, "    </button>", "  </div>", '  <div class="note-holder" data-event="foreColor"/>', "</div>"].join(""),
                                    callback: function(n) {
                                        n.find(".note-holder").each(function(n, i) {
                                            var o = t(i);
                                            o.append(e.ui.palette({
                                                colors: e.options.colors,
                                                eventName: o.data("event"),
                                                container: e.options.container,
                                                tooltip: e.options.tooltip
                                            }).render())
                                        })
                                    },
                                    click: function(n) {
                                        var i = t(n.target),
                                            o = i.data("event"),
                                            r = i.data("value");
                                        if (o && r) {
                                            var s = "backColor" === o ? "background-color" : "color",
                                                a = i.closest(".note-color").find(".note-recent-color"),
                                                l = i.closest(".note-color").find(".note-current-color-button");
                                            a.css(s, r), l.attr("data-" + o, r), e.context.invoke("editor." + o, r)
                                        }
                                    }
                                })]
                            }).render()
                        }), this.context.memo("button.ul", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.unorderedlist),
                                tooltip: e.lang.lists.unordered + e.representShortcut("insertUnorderedList"),
                                click: e.context.createInvokeHandler("editor.insertUnorderedList")
                            }).render()
                        }), this.context.memo("button.ol", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.orderedlist),
                                tooltip: e.lang.lists.ordered + e.representShortcut("insertOrderedList"),
                                click: e.context.createInvokeHandler("editor.insertOrderedList")
                            }).render()
                        });
                        var s = this.button({
                                contents: this.ui.icon(this.options.icons.alignLeft),
                                tooltip: this.lang.paragraph.left + this.representShortcut("justifyLeft"),
                                click: this.context.createInvokeHandler("editor.justifyLeft")
                            }),
                            a = this.button({
                                contents: this.ui.icon(this.options.icons.alignCenter),
                                tooltip: this.lang.paragraph.center + this.representShortcut("justifyCenter"),
                                click: this.context.createInvokeHandler("editor.justifyCenter")
                            }),
                            l = this.button({
                                contents: this.ui.icon(this.options.icons.alignRight),
                                tooltip: this.lang.paragraph.right + this.representShortcut("justifyRight"),
                                click: this.context.createInvokeHandler("editor.justifyRight")
                            }),
                            c = this.button({
                                contents: this.ui.icon(this.options.icons.alignJustify),
                                tooltip: this.lang.paragraph.justify + this.representShortcut("justifyFull"),
                                click: this.context.createInvokeHandler("editor.justifyFull")
                            }),
                            u = this.button({
                                contents: this.ui.icon(this.options.icons.outdent),
                                tooltip: this.lang.paragraph.outdent + this.representShortcut("outdent"),
                                click: this.context.createInvokeHandler("editor.outdent")
                            }),
                            h = this.button({
                                contents: this.ui.icon(this.options.icons.indent),
                                tooltip: this.lang.paragraph.indent + this.representShortcut("indent"),
                                click: this.context.createInvokeHandler("editor.indent")
                            });
                        this.context.memo("button.justifyLeft", ge.invoke(s, "render")), this.context.memo("button.justifyCenter", ge.invoke(a, "render")), this.context.memo("button.justifyRight", ge.invoke(l, "render")), this.context.memo("button.justifyFull", ge.invoke(c, "render")), this.context.memo("button.outdent", ge.invoke(u, "render")), this.context.memo("button.indent", ge.invoke(h, "render")), this.context.memo("button.paragraph", function() {
                            return e.ui.buttonGroup([e.button({
                                className: "dropdown-toggle",
                                contents: e.ui.dropdownButtonContents(e.ui.icon(e.options.icons.alignLeft), e.options),
                                tooltip: e.lang.paragraph.paragraph,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), e.ui.dropdown([e.ui.buttonGroup({
                                className: "note-align",
                                children: [s, a, l, c]
                            }), e.ui.buttonGroup({
                                className: "note-list",
                                children: [u, h]
                            })])]).render()
                        }), this.context.memo("button.height", function() {
                            return e.ui.buttonGroup([e.button({
                                className: "dropdown-toggle",
                                contents: e.ui.dropdownButtonContents(e.ui.icon(e.options.icons.textHeight), e.options),
                                tooltip: e.lang.font.height,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), e.ui.dropdownCheck({
                                items: e.options.lineHeights,
                                checkClassName: e.options.icons.menuCheck,
                                className: "dropdown-line-height",
                                click: e.context.createInvokeHandler("editor.lineHeight")
                            })]).render()
                        }), this.context.memo("button.table", function() {
                            return e.ui.buttonGroup([e.button({
                                className: "dropdown-toggle",
                                contents: e.ui.dropdownButtonContents(e.ui.icon(e.options.icons.table), e.options),
                                tooltip: e.lang.table.table,
                                data: {
                                    toggle: "dropdown"
                                }
                            }), e.ui.dropdown({
                                className: "note-table",
                                items: ['<div class="note-dimension-picker">', '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '  <div class="note-dimension-picker-highlighted"/>', '  <div class="note-dimension-picker-unhighlighted"/>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                            })], {
                                callback: function(t) {
                                    t.find(".note-dimension-picker-mousecatcher").css({
                                        width: e.options.insertTableMaxSize.col + "em",
                                        height: e.options.insertTableMaxSize.row + "em"
                                    }).mousedown(e.context.createInvokeHandler("editor.insertTable")).on("mousemove", e.tableMoveHandler.bind(e))
                                }
                            }).render()
                        }), this.context.memo("button.link", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.link),
                                tooltip: e.lang.link.link + e.representShortcut("linkDialog.show"),
                                click: e.context.createInvokeHandler("linkDialog.show")
                            }).render()
                        }), this.context.memo("button.picture", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.picture),
                                tooltip: e.lang.image.image,
                                click: e.context.createInvokeHandler("imageDialog.show")
                            }).render()
                        }), this.context.memo("button.video", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.video),
                                tooltip: e.lang.video.video,
                                click: e.context.createInvokeHandler("videoDialog.show")
                            }).render()
                        }), this.context.memo("button.hr", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.minus),
                                tooltip: e.lang.hr.insert + e.representShortcut("insertHorizontalRule"),
                                click: e.context.createInvokeHandler("editor.insertHorizontalRule")
                            }).render()
                        }), this.context.memo("button.fullscreen", function() {
                            return e.button({
                                className: "btn-fullscreen",
                                contents: e.ui.icon(e.options.icons.arrowsAlt),
                                tooltip: e.options.fullscreen,
                                click: e.context.createInvokeHandler("fullscreen.toggle")
                            }).render()
                        }), this.context.memo("button.codeview", function() {
                            return e.button({
                                className: "btn-codeview",
                                contents: e.ui.icon(e.options.icons.code),
                                tooltip: e.options.codeview,
                                click: e.context.createInvokeHandler("codeview.toggle")
                            }).render()
                        }), this.context.memo("button.redo", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.redo),
                                tooltip: e.lang.history.redo + e.representShortcut("redo"),
                                click: e.context.createInvokeHandler("editor.redo")
                            }).render()
                        }), this.context.memo("button.undo", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.undo),
                                tooltip: e.lang.history.undo + e.representShortcut("undo"),
                                click: e.context.createInvokeHandler("editor.undo")
                            }).render()
                        }), this.context.memo("button.help", function() {
                            return e.button({
                                contents: e.ui.icon(e.options.icons.question),
                                tooltip: e.options.help,
                                click: e.context.createInvokeHandler("helpDialog.show")
                            }).render()
                        })
                    }, e.prototype.addImagePopoverButtons = function() {
                        var t = this;
                        this.context.memo("button.imageSize100", function() {
                            return t.button({
                                contents: '<span class="note-fontsize-10">100%</span>',
                                tooltip: t.lang.image.resizeFull,
                                click: t.context.createInvokeHandler("editor.resize", "1")
                            }).render()
                        }), this.context.memo("button.imageSize50", function() {
                            return t.button({
                                contents: '<span class="note-fontsize-10">50%</span>',
                                tooltip: t.lang.image.resizeHalf,
                                click: t.context.createInvokeHandler("editor.resize", "0.5")
                            }).render()
                        }), this.context.memo("button.imageSize25", function() {
                            return t.button({
                                contents: '<span class="note-fontsize-10">25%</span>',
                                tooltip: t.lang.image.resizeQuarter,
                                click: t.context.createInvokeHandler("editor.resize", "0.25")
                            }).render()
                        }), this.context.memo("button.floatLeft", function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.alignLeft),
                                tooltip: t.lang.image.floatLeft,
                                click: t.context.createInvokeHandler("editor.floatMe", "left")
                            }).render()
                        }), this.context.memo("button.floatRight", function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.alignRight),
                                tooltip: t.lang.image.floatRight,
                                click: t.context.createInvokeHandler("editor.floatMe", "right")
                            }).render()
                        }), this.context.memo("button.floatNone", function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.alignJustify),
                                tooltip: t.lang.image.floatNone,
                                click: t.context.createInvokeHandler("editor.floatMe", "none")
                            }).render()
                        }), this.context.memo("button.removeMedia", function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.trash),
                                tooltip: t.lang.image.remove,
                                click: t.context.createInvokeHandler("editor.removeMedia")
                            }).render()
                        })
                    }, e.prototype.addLinkPopoverButtons = function() {
                        var t = this;
                        this.context.memo("button.linkDialogShow", function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.link),
                                tooltip: t.lang.link.edit,
                                click: t.context.createInvokeHandler("linkDialog.show")
                            }).render()
                        }), this.context.memo("button.unlink", function() {
                            return t.button({
                                contents: t.ui.icon(t.options.icons.unlink),
                                tooltip: t.lang.link.unlink,
                                click: t.context.createInvokeHandler("editor.unlink")
                            }).render()
                        })
                    }, e.prototype.addTablePopoverButtons = function() {
                        var t = this;
                        this.context.memo("button.addRowUp", function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.rowAbove),
                                tooltip: t.lang.table.addRowAbove,
                                click: t.context.createInvokeHandler("editor.addRow", "top")
                            }).render()
                        }), this.context.memo("button.addRowDown", function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.rowBelow),
                                tooltip: t.lang.table.addRowBelow,
                                click: t.context.createInvokeHandler("editor.addRow", "bottom")
                            }).render()
                        }), this.context.memo("button.addColLeft", function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.colBefore),
                                tooltip: t.lang.table.addColLeft,
                                click: t.context.createInvokeHandler("editor.addCol", "left")
                            }).render()
                        }), this.context.memo("button.addColRight", function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.colAfter),
                                tooltip: t.lang.table.addColRight,
                                click: t.context.createInvokeHandler("editor.addCol", "right")
                            }).render()
                        }), this.context.memo("button.deleteRow", function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.rowRemove),
                                tooltip: t.lang.table.delRow,
                                click: t.context.createInvokeHandler("editor.deleteRow")
                            }).render()
                        }), this.context.memo("button.deleteCol", function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.colRemove),
                                tooltip: t.lang.table.delCol,
                                click: t.context.createInvokeHandler("editor.deleteCol")
                            }).render()
                        }), this.context.memo("button.deleteTable", function() {
                            return t.button({
                                className: "btn-md",
                                contents: t.ui.icon(t.options.icons.trash),
                                tooltip: t.lang.table.delTable,
                                click: t.context.createInvokeHandler("editor.deleteTable")
                            }).render()
                        })
                    }, e.prototype.build = function(e, n) {
                        for (var i = 0, o = n.length; i < o; i++) {
                            for (var r = n[i], s = t.isArray(r) ? r[0] : r, a = t.isArray(r) ? 1 === r.length ? [r[0]] : r[1] : [r], l = this.ui.buttonGroup({
                                    className: "note-" + s
                                }).render(), c = 0, u = a.length; c < u; c++) {
                                var h = this.context.memo("button." + a[c]);
                                h && l.append("function" == typeof h ? h(this.context) : h)
                            }
                            l.appendTo(e)
                        }
                    }, e.prototype.updateCurrentStyle = function(e) {
                        var n = this,
                            i = e || this.$toolbar,
                            o = this.context.invoke("editor.currentStyle");
                        if (this.updateBtnStates(i, {
                                ".note-btn-bold": function() {
                                    return "bold" === o["font-bold"]
                                },
                                ".note-btn-italic": function() {
                                    return "italic" === o["font-italic"]
                                },
                                ".note-btn-underline": function() {
                                    return "underline" === o["font-underline"]
                                },
                                ".note-btn-subscript": function() {
                                    return "subscript" === o["font-subscript"]
                                },
                                ".note-btn-superscript": function() {
                                    return "superscript" === o["font-superscript"]
                                },
                                ".note-btn-strikethrough": function() {
                                    return "strikethrough" === o["font-strikethrough"]
                                }
                            }), o["font-family"]) {
                            var r = o["font-family"].split(",").map(function(t) {
                                    return t.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "")
                                }),
                                s = me.find(r, this.isFontInstalled.bind(this));
                            i.find(".dropdown-fontname a").each(function(e, n) {
                                var i = t(n),
                                    o = i.data("value") + "" == s + "";
                                i.toggleClass("checked", o)
                            }), i.find(".note-current-fontname").text(s).css("font-family", s)
                        }
                        if (o["font-size"]) {
                            var a = o["font-size"];
                            i.find(".dropdown-fontsize a").each(function(e, n) {
                                var i = t(n),
                                    o = i.data("value") + "" == a + "";
                                i.toggleClass("checked", o)
                            }), i.find(".note-current-fontsize").text(a)
                        }
                        if (o["line-height"]) {
                            var l = o["line-height"];
                            i.find(".dropdown-line-height li a").each(function(e, i) {
                                var o = t(i).data("value") + "" == l + "";
                                n.className = o ? "checked" : ""
                            })
                        }
                    }, e.prototype.updateBtnStates = function(e, n) {
                        var i = this;
                        t.each(n, function(t, n) {
                            i.ui.toggleBtnActive(e.find(t), n())
                        })
                    }, e.prototype.tableMoveHandler = function(e) {
                        var n, i = 18,
                            o = t(e.target.parentNode),
                            r = o.next(),
                            s = o.find(".note-dimension-picker-mousecatcher"),
                            a = o.find(".note-dimension-picker-highlighted"),
                            l = o.find(".note-dimension-picker-unhighlighted");
                        if (e.offsetX === undefined) {
                            var c = t(e.target).offset();
                            n = {
                                x: e.pageX - c.left,
                                y: e.pageY - c.top
                            }
                        } else n = {
                            x: e.offsetX,
                            y: e.offsetY
                        };
                        var u = {
                            c: Math.ceil(n.x / i) || 1,
                            r: Math.ceil(n.y / i) || 1
                        };
                        a.css({
                            width: u.c + "em",
                            height: u.r + "em"
                        }), s.data("value", u.c + "x" + u.r), u.c > 3 && u.c < this.options.insertTableMaxSize.col && l.css({
                            width: u.c + 1 + "em"
                        }), u.r > 3 && u.r < this.options.insertTableMaxSize.row && l.css({
                            height: u.r + 1 + "em"
                        }), r.html(u.c + " x " + u.r)
                    }, e
                }(),
                dn = function() {
                    function e(e) {
                        this.context = e, this.$window = t(window), this.$document = t(document), this.ui = t.summernote.ui, this.$note = e.layoutInfo.note, this.$editor = e.layoutInfo.editor, this.$toolbar = e.layoutInfo.toolbar, this.options = e.options, this.followScroll = this.followScroll.bind(this)
                    }
                    return e.prototype.shouldInitialize = function() {
                        return !this.options.airMode
                    }, e.prototype.initialize = function() {
                        var t = this;
                        this.options.toolbar = this.options.toolbar || [], this.options.toolbar.length ? this.context.invoke("buttons.build", this.$toolbar, this.options.toolbar) : this.$toolbar.hide(), this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer), this.changeContainer(!1), this.$note.on("summernote.keyup summernote.mouseup summernote.change", function() {
                            t.context.invoke("buttons.updateCurrentStyle")
                        }), this.context.invoke("buttons.updateCurrentStyle"), this.options.followingToolbar && this.$window.on("scroll resize", this.followScroll)
                    }, e.prototype.destroy = function() {
                        this.$toolbar.children().remove(), this.options.followingToolbar && this.$window.off("scroll resize", this.followScroll)
                    }, e.prototype.followScroll = function() {
                        if (this.$editor.hasClass("fullscreen")) return !1;
                        var e = this.$toolbar.parent(".note-toolbar-wrapper"),
                            n = this.$editor.outerHeight(),
                            i = this.$editor.width(),
                            o = this.$toolbar.height();
                        e.css({
                            height: o
                        });
                        var r = 0;
                        this.options.otherStaticBar && (r = t(this.options.otherStaticBar).outerHeight());
                        var s = this.$document.scrollTop(),
                            a = this.$editor.offset().top;
                        s > a - r && s < a + n - r - o ? this.$toolbar.css({
                            position: "fixed",
                            top: r,
                            width: i
                        }) : this.$toolbar.css({
                            position: "relative",
                            top: 0,
                            width: "100%"
                        })
                    }, e.prototype.changeContainer = function(t) {
                        t ? this.$toolbar.prependTo(this.$editor) : this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer)
                    }, e.prototype.updateFullscreen = function(t) {
                        this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"), t), this.changeContainer(t)
                    }, e.prototype.updateCodeview = function(t) {
                        this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"), t), t ? this.deactivate() : this.activate()
                    }, e.prototype.activate = function(t) {
                        var e = this.$toolbar.find("button");
                        t || (e = e.not(".btn-codeview")), this.ui.toggleBtn(e, !0)
                    }, e.prototype.deactivate = function(t) {
                        var e = this.$toolbar.find("button");
                        t || (e = e.not(".btn-codeview")), this.ui.toggleBtn(e, !1)
                    }, e
                }(),
                pn = function() {
                    function e(e) {
                        this.context = e, this.ui = t.summernote.ui, this.$body = t(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo, e.memo("help.linkDialog.show", this.options.langInfo.help["linkDialog.show"])
                    }
                    return e.prototype.initialize = function() {
                        var e = this.options.dialogsInBody ? this.$body : this.$editor,
                            n = ['<div class="form-group note-form-group">', '<label class="note-form-label">' + this.lang.link.textToDisplay + "</label>", '<input class="note-link-text form-control note-form-control  note-input" type="text" />', "</div>", '<div class="form-group note-form-group">', '<label class="note-form-label">' + this.lang.link.url + "</label>", '<input class="note-link-url form-control note-form-control note-input" type="text" value="http://" />', "</div>", this.options.disableLinkTarget ? "" : t("<div/>").append(this.ui.checkbox({
                                id: "sn-checkbox-open-in-new-window",
                                text: this.lang.link.openInNewWindow,
                                checked: !0
                            }).render()).html()].join(""),
                            i = '<button type="submit" href="#" class="' + "btn btn-primary note-btn note-btn-primary note-link-btn" + '" disabled>' + this.lang.link.insert + "</button>";
                        this.$dialog = this.ui.dialog({
                            className: "link-dialog",
                            title: this.lang.link.insert,
                            fade: this.options.dialogsFade,
                            body: n,
                            footer: i
                        }).render().appendTo(e)
                    }, e.prototype.destroy = function() {
                        this.ui.hideDialog(this.$dialog), this.$dialog.remove()
                    }, e.prototype.bindEnterKey = function(t, e) {
                        t.on("keypress", function(t) {
                            t.keyCode === Fe.code.ENTER && (t.preventDefault(), e.trigger("click"))
                        })
                    }, e.prototype.toggleLinkBtn = function(t, e, n) {
                        this.ui.toggleBtn(t, e.val() && n.val())
                    }, e.prototype.showLinkDialog = function(e) {
                        var n = this;
                        return t.Deferred(function(t) {
                            var i = n.$dialog.find(".note-link-text"),
                                o = n.$dialog.find(".note-link-url"),
                                r = n.$dialog.find(".note-link-btn"),
                                s = n.$dialog.find("input[type=checkbox]");
                            n.ui.onDialogShown(n.$dialog, function() {
                                n.context.triggerEvent("dialog.shown"), e.url || (e.url = e.text), i.val(e.text);
                                var a = function() {
                                    n.toggleLinkBtn(r, i, o), e.text = i.val()
                                };
                                i.on("input", a).on("paste", function() {
                                    setTimeout(a, 0)
                                });
                                var l = function() {
                                    n.toggleLinkBtn(r, i, o), e.text || i.val(o.val())
                                };
                                o.on("input", l).on("paste", function() {
                                    setTimeout(l, 0)
                                }).val(e.url), Te.isSupportTouch || o.trigger("focus"), n.toggleLinkBtn(r, i, o), n.bindEnterKey(o, r), n.bindEnterKey(i, r);
                                var c = e.isNewWindow !== undefined ? e.isNewWindow : n.context.options.linkTargetBlank;
                                s.prop("checked", c), r.one("click", function(r) {
                                    r.preventDefault(), t.resolve({
                                        range: e.range,
                                        url: o.val(),
                                        text: i.val(),
                                        isNewWindow: s.is(":checked")
                                    }), n.ui.hideDialog(n.$dialog)
                                })
                            }), n.ui.onDialogHidden(n.$dialog, function() {
                                i.off("input paste keypress"), o.off("input paste keypress"), r.off("click"), "pending" === t.state() && t.reject()
                            }), n.ui.showDialog(n.$dialog)
                        }).promise()
                    }, e.prototype.show = function() {
                        var t = this,
                            e = this.context.invoke("editor.getLinkInfo");
                        this.context.invoke("editor.saveRange"), this.showLinkDialog(e).then(function(e) {
                            t.context.invoke("editor.restoreRange"), t.context.invoke("editor.createLink", e)
                        }).fail(function() {
                            t.context.invoke("editor.restoreRange")
                        })
                    }, e
                }(),
                fn = function() {
                    function e(e) {
                        var n = this;
                        this.context = e, this.ui = t.summernote.ui, this.options = e.options, this.events = {
                            "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function() {
                                n.update()
                            },
                            "summernote.disable summernote.dialog.shown": function() {
                                n.hide()
                            }
                        }
                    }
                    return e.prototype.shouldInitialize = function() {
                        return !me.isEmpty(this.options.popover.link)
                    }, e.prototype.initialize = function() {
                        this.$popover = this.ui.popover({
                            className: "note-link-popover",
                            callback: function(t) {
                                t.find(".popover-content,.note-popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')
                            }
                        }).render().appendTo(this.options.container);
                        var t = this.$popover.find(".popover-content,.note-popover-content");
                        this.context.invoke("buttons.build", t, this.options.popover.link)
                    }, e.prototype.destroy = function() {
                        this.$popover.remove()
                    }, e.prototype.update = function() {
                        if (this.context.invoke("editor.hasFocus")) {
                            var e = this.context.invoke("editor.createRange");
                            if (e.isCollapsed() && e.isOnAnchor()) {
                                var n = He.ancestor(e.sc, He.isAnchor),
                                    i = t(n).attr("href");
                                this.$popover.find("a").attr("href", i).html(i);
                                var o = He.posFromPlaceholder(n);
                                this.$popover.css({
                                    display: "block",
                                    left: o.left,
                                    top: o.top
                                })
                            } else this.hide()
                        } else this.hide()
                    }, e.prototype.hide = function() {
                        this.$popover.hide()
                    }, e
                }(),
                gn = function() {
                    function e(e) {
                        this.context = e, this.ui = t.summernote.ui, this.$body = t(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo
                    }
                    return e.prototype.initialize = function() {
                        var t = this.options.dialogsInBody ? this.$body : this.$editor,
                            e = "";
                        if (this.options.maximumImageFileSize) {
                            var n = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024)),
                                i = 1 * (this.options.maximumImageFileSize / Math.pow(1024, n)).toFixed(2) + " " + " KMGTP" [n] + "B";
                            e = "<small>" + this.lang.image.maximumFileSize + " : " + i + "</small>"
                        }
                        var o = ['<div class="form-group note-form-group note-group-select-from-files">', '<label class="note-form-label">' + this.lang.image.selectFromFiles + "</label>", '<input class="note-image-input note-form-control note-input" ', ' type="file" name="files" accept="image/*" multiple="multiple" />', e, "</div>", '<div class="form-group note-group-image-url" style="overflow:auto;">', '<label class="note-form-label">' + this.lang.image.url + "</label>", '<input class="note-image-url form-control note-form-control note-input ', ' col-md-12" type="text" />', "</div>"].join(""),
                            r = '<button type="submit" href="#" class="' + "btn btn-primary note-btn note-btn-primary note-image-btn" + '" disabled>' + this.lang.image.insert + "</button>";
                        this.$dialog = this.ui.dialog({
                            title: this.lang.image.insert,
                            fade: this.options.dialogsFade,
                            body: o,
                            footer: r
                        }).render().appendTo(t)
                    }, e.prototype.destroy = function() {
                        this.ui.hideDialog(this.$dialog), this.$dialog.remove()
                    }, e.prototype.bindEnterKey = function(t, e) {
                        t.on("keypress", function(t) {
                            t.keyCode === Fe.code.ENTER && (t.preventDefault(), e.trigger("click"))
                        })
                    }, e.prototype.show = function() {
                        var t = this;
                        this.context.invoke("editor.saveRange"), this.showImageDialog().then(function(e) {
                            t.ui.hideDialog(t.$dialog), t.context.invoke("editor.restoreRange"), "string" == typeof e ? t.context.invoke("editor.insertImage", e) : t.context.invoke("editor.insertImagesOrCallback", e)
                        }).fail(function() {
                            t.context.invoke("editor.restoreRange")
                        })
                    }, e.prototype.showImageDialog = function() {
                        var e = this;
                        return t.Deferred(function(t) {
                            var n = e.$dialog.find(".note-image-input"),
                                i = e.$dialog.find(".note-image-url"),
                                o = e.$dialog.find(".note-image-btn");
                            e.ui.onDialogShown(e.$dialog, function() {
                                e.context.triggerEvent("dialog.shown"), n.replaceWith(n.clone().on("change", function(e) {
                                    t.resolve(e.target.files || e.target.value)
                                }).val("")), o.click(function(e) {
                                    e.preventDefault(), t.resolve(i.val())
                                }), i.on("keyup paste", function() {
                                    var t = i.val();
                                    e.ui.toggleBtn(o, t)
                                }).val(""), Te.isSupportTouch || i.trigger("focus"), e.bindEnterKey(i, o)
                            }), e.ui.onDialogHidden(e.$dialog, function() {
                                n.off("change"), i.off("keyup paste keypress"), o.off("click"), "pending" === t.state() && t.reject()
                            }), e.ui.showDialog(e.$dialog)
                        })
                    }, e
                }(),
                mn = function() {
                    function e(e) {
                        var n = this;
                        this.context = e, this.ui = t.summernote.ui, this.editable = e.layoutInfo.editable[0], this.options = e.options, this.events = {
                            "summernote.disable": function() {
                                n.hide()
                            }
                        }
                    }
                    return e.prototype.shouldInitialize = function() {
                        return !me.isEmpty(this.options.popover.image)
                    }, e.prototype.initialize = function() {
                        this.$popover = this.ui.popover({
                            className: "note-image-popover"
                        }).render().appendTo(this.options.container);
                        var t = this.$popover.find(".popover-content,.note-popover-content");
                        this.context.invoke("buttons.build", t, this.options.popover.image)
                    }, e.prototype.destroy = function() {
                        this.$popover.remove()
                    }, e.prototype.update = function(t) {
                        if (He.isImg(t)) {
                            var e = He.posFromPlaceholder(t),
                                n = He.posFromPlaceholder(this.editable);
                            this.$popover.css({
                                display: "block",
                                left: this.options.popatmouse ? event.pageX - 20 : e.left,
                                top: this.options.popatmouse ? event.pageY : Math.min(e.top, n.top)
                            })
                        } else this.hide()
                    }, e.prototype.hide = function() {
                        this.$popover.hide()
                    }, e
                }(),
                vn = function() {
                    function e(e) {
                        var n = this;
                        this.context = e, this.ui = t.summernote.ui, this.options = e.options, this.events = {
                            "summernote.mousedown": function(t, e) {
                                n.update(e.target)
                            },
                            "summernote.keyup summernote.scroll summernote.change": function() {
                                n.update()
                            },
                            "summernote.disable": function() {
                                n.hide()
                            }
                        }
                    }
                    return e.prototype.shouldInitialize = function() {
                        return !me.isEmpty(this.options.popover.table)
                    }, e.prototype.initialize = function() {
                        this.$popover = this.ui.popover({
                            className: "note-table-popover"
                        }).render().appendTo(this.options.container);
                        var t = this.$popover.find(".popover-content,.note-popover-content");
                        this.context.invoke("buttons.build", t, this.options.popover.table), Te.isFF && document.execCommand("enableInlineTableEditing", !1, !1)
                    }, e.prototype.destroy = function() {
                        this.$popover.remove()
                    }, e.prototype.update = function(t) {
                        if (this.context.isDisabled()) return !1;
                        var e = He.isCell(t);
                        if (e) {
                            var n = He.posFromPlaceholder(t);
                            this.$popover.css({
                                display: "block",
                                left: n.left,
                                top: n.top
                            })
                        } else this.hide();
                        return e
                    }, e.prototype.hide = function() {
                        this.$popover.hide()
                    }, e
                }(),
                bn = function() {
                    function e(e) {
                        this.context = e, this.ui = t.summernote.ui, this.$body = t(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo
                    }
                    return e.prototype.initialize = function() {
                        var t = this.options.dialogsInBody ? this.$body : this.$editor,
                            e = ['<div class="form-group note-form-group row-fluid">', '<label class="note-form-label">' + this.lang.video.url + ' <small class="text-muted">' + this.lang.video.providers + "</small></label>", '<input class="note-video-url form-control note-form-control note-input" type="text" />', "</div>"].join(""),
                            n = '<button type="submit" href="#" class="' + "btn btn-primary note-btn note-btn-primary note-video-btn" + '" disabled>' + this.lang.video.insert + "</button>";
                        this.$dialog = this.ui.dialog({
                            title: this.lang.video.insert,
                            fade: this.options.dialogsFade,
                            body: e,
                            footer: n
                        }).render().appendTo(t)
                    }, e.prototype.destroy = function() {
                        this.ui.hideDialog(this.$dialog), this.$dialog.remove()
                    }, e.prototype.bindEnterKey = function(t, e) {
                        t.on("keypress", function(t) {
                            t.keyCode === Fe.code.ENTER && (t.preventDefault(), e.trigger("click"))
                        })
                    }, e.prototype.createVideoNode = function(e) {
                        var n, i = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                            o = e.match(i),
                            r = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/,
                            s = e.match(r),
                            a = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/,
                            l = e.match(a),
                            c = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/,
                            u = e.match(c),
                            h = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,
                            d = e.match(h),
                            p = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/,
                            f = e.match(p),
                            g = /\/\/v\.qq\.com.*?vid=(.+)/,
                            m = e.match(g),
                            v = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/,
                            b = e.match(v),
                            y = /^.+.(mp4|m4v)$/,
                            w = e.match(y),
                            _ = /^.+.(ogg|ogv)$/,
                            x = e.match(_),
                            C = /^.+.(webm)$/,
                            k = e.match(C);
                        if (o && 11 === o[1].length) {
                            var T = o[1];
                            n = t("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + T).attr("width", "640").attr("height", "360")
                        } else if (s && s[0].length) n = t("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + s[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");
                        else if (l && l[0].length) n = t("<iframe>").attr("frameborder", 0).attr("src", l[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");
                        else if (u && u[3].length) n = t("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + u[3]).attr("width", "640").attr("height", "360");
                        else if (d && d[2].length) n = t("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + d[2]).attr("width", "640").attr("height", "360");
                        else if (f && f[1].length) n = t("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + f[1]);
                        else if (m && m[1].length || b && b[2].length) {
                            var E = m && m[1].length ? m[1] : b[2];
                            n = t("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "310").attr("width", "500").attr("src", "http://v.qq.com/iframe/player.html?vid=" + E + "&amp;auto=0")
                        } else {
                            if (!(w || x || k)) return !1;
                            n = t("<video controls>").attr("src", e).attr("width", "640").attr("height", "360")
                        }
                        return n.addClass("note-video-clip"), n[0]
                    }, e.prototype.show = function() {
                        var t = this,
                            e = this.context.invoke("editor.getSelectedText");
                        this.context.invoke("editor.saveRange"), this.showVideoDialog(e).then(function(e) {
                            t.ui.hideDialog(t.$dialog), t.context.invoke("editor.restoreRange");
                            var n = t.createVideoNode(e);
                            n && t.context.invoke("editor.insertNode", n)
                        }).fail(function() {
                            t.context.invoke("editor.restoreRange")
                        })
                    }, e.prototype.showVideoDialog = function(e) {
                        var n = this;
                        return t.Deferred(function(t) {
                            var i = n.$dialog.find(".note-video-url"),
                                o = n.$dialog.find(".note-video-btn");
                            n.ui.onDialogShown(n.$dialog, function() {
                                n.context.triggerEvent("dialog.shown"), i.val(e).on("input", function() {
                                    n.ui.toggleBtn(o, i.val())
                                }), Te.isSupportTouch || i.trigger("focus"), o.click(function(e) {
                                    e.preventDefault(), t.resolve(i.val())
                                }), n.bindEnterKey(i, o)
                            }), n.ui.onDialogHidden(n.$dialog, function() {
                                i.off("input"), o.off("click"), "pending" === t.state() && t.reject()
                            }), n.ui.showDialog(n.$dialog)
                        })
                    }, e
                }(),
                yn = function() {
                    function e(e) {
                        this.context = e, this.ui = t.summernote.ui, this.$body = t(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo
                    }
                    return e.prototype.initialize = function() {
                        var t = this.options.dialogsInBody ? this.$body : this.$editor,
                            e = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.9</a> \xb7 ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> \xb7 ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");
                        this.$dialog = this.ui.dialog({
                            title: this.lang.options.help,
                            fade: this.options.dialogsFade,
                            body: this.createShortcutList(),
                            footer: e,
                            callback: function(t) {
                                t.find(".modal-body,.note-modal-body").css({
                                    "max-height": 300,
                                    overflow: "scroll"
                                })
                            }
                        }).render().appendTo(t)
                    }, e.prototype.destroy = function() {
                        this.ui.hideDialog(this.$dialog), this.$dialog.remove()
                    }, e.prototype.createShortcutList = function() {
                        var e = this,
                            n = this.options.keyMap[Te.isMac ? "mac" : "pc"];
                        return Object.keys(n).map(function(i) {
                            var o = n[i],
                                r = t('<div><div class="help-list-item"/></div>');
                            return r.append(t("<label><kbd>" + i + "</kdb></label>").css({
                                width: 180,
                                "margin-right": 10
                            })).append(t("<span/>").html(e.context.memo("help." + o) || o)), r.html()
                        }).join("")
                    }, e.prototype.showHelpDialog = function() {
                        var e = this;
                        return t.Deferred(function(t) {
                            e.ui.onDialogShown(e.$dialog, function() {
                                e.context.triggerEvent("dialog.shown"), t.resolve()
                            }), e.ui.showDialog(e.$dialog)
                        }).promise()
                    }, e.prototype.show = function() {
                        var t = this;
                        this.context.invoke("editor.saveRange"), this.showHelpDialog().then(function() {
                            t.context.invoke("editor.restoreRange")
                        })
                    }, e
                }(),
                wn = 20,
                _n = function() {
                    function e(e) {
                        var n = this;
                        this.context = e, this.ui = t.summernote.ui, this.options = e.options, this.events = {
                            "summernote.keyup summernote.mouseup summernote.scroll": function() {
                                n.update()
                            },
                            "summernote.disable summernote.change summernote.dialog.shown": function() {
                                n.hide()
                            },
                            "summernote.focusout": function(t, e) {
                                Te.isFF || e.relatedTarget && He.ancestor(e.relatedTarget, ge.eq(n.$popover[0])) || n.hide()
                            }
                        }
                    }
                    return e.prototype.shouldInitialize = function() {
                        return this.options.airMode && !me.isEmpty(this.options.popover.air)
                    }, e.prototype.initialize = function() {
                        this.$popover = this.ui.popover({
                            className: "note-air-popover"
                        }).render().appendTo(this.options.container);
                        var t = this.$popover.find(".popover-content");
                        this.context.invoke("buttons.build", t, this.options.popover.air)
                    }, e.prototype.destroy = function() {
                        this.$popover.remove()
                    }, e.prototype.update = function() {
                        var t = this.context.invoke("editor.currentStyle");
                        if (t.range && !t.range.isCollapsed()) {
                            var e = me.last(t.range.getClientRects());
                            if (e) {
                                var n = ge.rect2bnd(e);
                                this.$popover.css({
                                    display: "block",
                                    left: Math.max(n.left + n.width / 2, 0) - wn,
                                    top: n.top + n.height
                                }), this.context.invoke("buttons.updateCurrentStyle", this.$popover)
                            }
                        } else this.hide()
                    }, e.prototype.hide = function() {
                        this.$popover.hide()
                    }, e
                }(),
                xn = 5,
                Cn = function() {
                    function e(e) {
                        var n = this;
                        this.context = e, this.ui = t.summernote.ui, this.$editable = e.layoutInfo.editable, this.options = e.options, this.hint = this.options.hint || [], this.direction = this.options.hintDirection || "bottom", this.hints = t.isArray(this.hint) ? this.hint : [this.hint], this.events = {
                            "summernote.keyup": function(t, e) {
                                e.isDefaultPrevented() || n.handleKeyup(e)
                            },
                            "summernote.keydown": function(t, e) {
                                n.handleKeydown(e)
                            },
                            "summernote.disable summernote.dialog.shown": function() {
                                n.hide()
                            }
                        }
                    }
                    return e.prototype.shouldInitialize = function() {
                        return this.hints.length > 0
                    }, e.prototype.initialize = function() {
                        var e = this;
                        this.lastWordRange = null, this.$popover = this.ui.popover({
                            className: "note-hint-popover",
                            hideArrow: !0,
                            direction: ""
                        }).render().appendTo(this.options.container), this.$popover.hide(), this.$content = this.$popover.find(".popover-content,.note-popover-content"), this.$content.on("click", ".note-hint-item", function() {
                            e.$content.find(".active").removeClass("active"), t(e).addClass("active"), e.replace()
                        })
                    }, e.prototype.destroy = function() {
                        this.$popover.remove()
                    }, e.prototype.selectItem = function(t) {
                        this.$content.find(".active").removeClass("active"), t.addClass("active"), this.$content[0].scrollTop = t[0].offsetTop - this.$content.innerHeight() / 2
                    }, e.prototype.moveDown = function() {
                        var t = this.$content.find(".note-hint-item.active"),
                            e = t.next();
                        if (e.length) this.selectItem(e);
                        else {
                            var n = t.parent().next();
                            n.length || (n = this.$content.find(".note-hint-group").first()), this.selectItem(n.find(".note-hint-item").first())
                        }
                    }, e.prototype.moveUp = function() {
                        var t = this.$content.find(".note-hint-item.active"),
                            e = t.prev();
                        if (e.length) this.selectItem(e);
                        else {
                            var n = t.parent().prev();
                            n.length || (n = this.$content.find(".note-hint-group").last()), this.selectItem(n.find(".note-hint-item").last())
                        }
                    }, e.prototype.replace = function() {
                        var t = this.$content.find(".note-hint-item.active");
                        if (t.length) {
                            var e = this.nodeFromItem(t);
                            this.lastWordRange.insertNode(e), je.createFromNode(e).collapse().select(), this.lastWordRange = null, this.hide(), this.context.triggerEvent("change", this.$editable.html(), this.$editable[0]), this.context.invoke("editor.focus")
                        }
                    }, e.prototype.nodeFromItem = function(t) {
                        var e = this.hints[t.data("index")],
                            n = t.data("item"),
                            i = e.content ? e.content(n) : n;
                        return "string" == typeof i && (i = He.createText(i)), i
                    }, e.prototype.createItemTemplates = function(e, n) {
                        var i = this.hints[e];
                        return n.map(function(n) {
                            var o = t('<div class="note-hint-item"/>');
                            return o.append(i.template ? i.template(n) : n + ""), o.data({
                                index: e,
                                item: n
                            }), o
                        })
                    }, e.prototype.handleKeydown = function(t) {
                        this.$popover.is(":visible") && (t.keyCode === Fe.code.ENTER ? (t.preventDefault(), this.replace()) : t.keyCode === Fe.code.UP ? (t.preventDefault(), this.moveUp()) : t.keyCode === Fe.code.DOWN && (t.preventDefault(), this.moveDown()))
                    }, e.prototype.searchKeyword = function(t, e, n) {
                        var i = this.hints[t];
                        if (i && i.match.test(e) && i.search) {
                            var o = i.match.exec(e);
                            i.search(o[1], n)
                        } else n()
                    }, e.prototype.createGroup = function(e, n) {
                        var i = this,
                            o = t('<div class="note-hint-group note-hint-group-' + e + '"/>');
                        return this.searchKeyword(e, n, function(t) {
                            (t = t || []).length && (o.html(i.createItemTemplates(e, t)), i.show())
                        }), o
                    }, e.prototype.handleKeyup = function(t) {
                        var e = this;
                        if (!me.contains([Fe.code.ENTER, Fe.code.UP, Fe.code.DOWN], t.keyCode)) {
                            var n = this.context.invoke("editor.createRange").getWordRange(),
                                i = n.toString();
                            if (this.hints.length && i) {
                                this.$content.empty();
                                var o = ge.rect2bnd(me.last(n.getClientRects()));
                                o && (this.$popover.hide(), this.lastWordRange = n, this.hints.forEach(function(t, n) {
                                    t.match.test(i) && e.createGroup(n, i).appendTo(e.$content)
                                }), this.$content.find(".note-hint-item:first").addClass("active"), "top" === this.direction ? this.$popover.css({
                                    left: o.left,
                                    top: o.top - this.$popover.outerHeight() - xn
                                }) : this.$popover.css({
                                    left: o.left,
                                    top: o.top + o.height + xn
                                }))
                            } else this.hide()
                        }
                    }, e.prototype.show = function() {
                        this.$popover.show()
                    }, e.prototype.hide = function() {
                        this.$popover.hide()
                    }, e
                }(),
                kn = function() {
                    function e(e, n) {
                        this.ui = t.summernote.ui, this.$note = e, this.memos = {}, this.modules = {}, this.layoutInfo = {}, this.options = n, this.initialize()
                    }
                    return e.prototype.initialize = function() {
                        return this.layoutInfo = this.ui.createLayout(this.$note, this.options), this._initialize(), this.$note.hide(), this
                    }, e.prototype.destroy = function() {
                        this._destroy(), this.$note.removeData("summernote"), this.ui.removeLayout(this.$note, this.layoutInfo)
                    }, e.prototype.reset = function() {
                        var t = this.isDisabled();
                        this.code(He.emptyPara), this._destroy(), this._initialize(), t && this.disable()
                    }, e.prototype._initialize = function() {
                        var e = this,
                            n = t.extend({}, this.options.buttons);
                        Object.keys(n).forEach(function(t) {
                            e.memo("button." + t, n[t])
                        });
                        var i = t.extend({}, this.options.modules, t.summernote.plugins || {});
                        Object.keys(i).forEach(function(t) {
                            e.module(t, i[t], !0)
                        }), Object.keys(this.modules).forEach(function(t) {
                            e.initializeModule(t)
                        })
                    }, e.prototype._destroy = function() {
                        var t = this;
                        Object.keys(this.modules).reverse().forEach(function(e) {
                            t.removeModule(e)
                        }), Object.keys(this.memos).forEach(function(e) {
                            t.removeMemo(e)
                        }), this.triggerEvent("destroy", this)
                    }, e.prototype.code = function(t) {
                        var e = this.invoke("codeview.isActivated");
                        if (t === undefined) return this.invoke("codeview.sync"), e ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
                        e ? this.layoutInfo.codable.val(t) : this.layoutInfo.editable.html(t), this.$note.val(t), this.triggerEvent("change", t)
                    }, e.prototype.isDisabled = function() {
                        return "false" === this.layoutInfo.editable.attr("contenteditable")
                    }, e.prototype.enable = function() {
                        this.layoutInfo.editable.attr("contenteditable", !0), this.invoke("toolbar.activate", !0), this.triggerEvent("disable", !1)
                    }, e.prototype.disable = function() {
                        this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"), this.layoutInfo.editable.attr("contenteditable", !1), this.invoke("toolbar.deactivate", !0), this.triggerEvent("disable", !0)
                    }, e.prototype.triggerEvent = function() {
                        var t = me.head(arguments),
                            e = me.tail(me.from(arguments)),
                            n = this.options.callbacks[ge.namespaceToCamel(t, "on")];
                        n && n.apply(this.$note[0], e), this.$note.trigger("summernote." + t, e)
                    }, e.prototype.initializeModule = function(t) {
                        var e = this.modules[t];
                        e.shouldInitialize = e.shouldInitialize || ge.ok, e.shouldInitialize() && (e.initialize && e.initialize(), e.events && He.attachEvents(this.$note, e.events))
                    }, e.prototype.module = function(t, e, n) {
                        if (1 === arguments.length) return this.modules[t];
                        this.modules[t] = new e(this), n || this.initializeModule(t)
                    }, e.prototype.removeModule = function(t) {
                        var e = this.modules[t];
                        e.shouldInitialize() && (e.events && He.detachEvents(this.$note, e.events), e.destroy && e.destroy()), delete this.modules[t]
                    }, e.prototype.memo = function(t, e) {
                        if (1 === arguments.length) return this.memos[t];
                        this.memos[t] = e
                    }, e.prototype.removeMemo = function(t) {
                        this.memos[t] && this.memos[t].destroy && this.memos[t].destroy(), delete this.memos[t]
                    }, e.prototype.createInvokeHandlerAndUpdateState = function(t, e) {
                        var n = this;
                        return function(i) {
                            n.createInvokeHandler(t, e)(i), n.invoke("buttons.updateCurrentStyle")
                        }
                    }, e.prototype.createInvokeHandler = function(e, n) {
                        var i = this;
                        return function(o) {
                            o.preventDefault();
                            var r = t(o.target);
                            i.invoke(e, n || r.closest("[data-value]").data("value"), r)
                        }
                    }, e.prototype.invoke = function() {
                        var t = me.head(arguments),
                            e = me.tail(me.from(arguments)),
                            n = t.split("."),
                            i = n.length > 1,
                            o = i && me.head(n),
                            r = i ? me.last(n) : me.head(n),
                            s = this.modules[o || "editor"];
                        return !o && this[r] ? this[r].apply(this, e) : s && s[r] && s.shouldInitialize() ? s[r].apply(s, e) : void 0
                    }, e
                }();
            t.fn.extend({
                summernote: function() {
                    var e = t.type(me.head(arguments)),
                        n = "string" === e,
                        i = "object" === e,
                        o = t.extend({}, t.summernote.options, i ? me.head(arguments) : {});
                    o.langInfo = t.extend(!0, {}, t.summernote.lang["en-US"], t.summernote.lang[o.lang]), o.icons = t.extend(!0, {}, t.summernote.options.icons, o.icons), o.tooltip = "auto" === o.tooltip ? !Te.isSupportTouch : o.tooltip, this.each(function(e, n) {
                        var i = t(n);
                        if (!i.data("summernote")) {
                            var r = new kn(i, o);
                            i.data("summernote", r), i.data("summernote").triggerEvent("init", r.layoutInfo)
                        }
                    });
                    var r = this.first();
                    if (r.length) {
                        var s = r.data("summernote");
                        if (n) return s.invoke.apply(s, me.from(arguments));
                        o.focus && s.invoke("editor.focus")
                    }
                    return this
                }
            }), t.summernote = t.extend(t.summernote, {
                version: "0.8.9",
                ui: pe,
                dom: He,
                plugins: {},
                options: {
                    modules: {
                        editor: Je,
                        clipboard: Ze,
                        dropzone: Xe,
                        codeview: tn,
                        statusbar: nn,
                        fullscreen: on,
                        handle: rn,
                        hintPopover: Cn,
                        autoLink: ln,
                        autoSync: cn,
                        placeholder: un,
                        buttons: hn,
                        toolbar: dn,
                        linkDialog: pn,
                        linkPopover: fn,
                        imageDialog: gn,
                        imagePopover: mn,
                        tablePopover: vn,
                        videoDialog: bn,
                        helpDialog: yn,
                        airPopover: _n
                    },
                    buttons: {},
                    lang: "en-US",
                    followingToolbar: !0,
                    otherStaticBar: "",
                    toolbar: [
                        ["style", ["style"]],
                        ["font", ["bold", "underline", "clear"]],
                        ["fontname", ["fontname"]],
                        ["color", ["color"]],
                        ["para", ["ul", "ol", "paragraph"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture", "video"]],
                        ["view", ["fullscreen", "codeview", "help"]]
                    ],
                    popatmouse: !0,
                    popover: {
                        image: [
                            ["imagesize", ["imageSize100", "imageSize50", "imageSize25"]],
                            ["float", ["floatLeft", "floatRight", "floatNone"]],
                            ["remove", ["removeMedia"]]
                        ],
                        link: [
                            ["link", ["linkDialogShow", "unlink"]]
                        ],
                        table: [
                            ["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]],
                            ["delete", ["deleteRow", "deleteCol", "deleteTable"]]
                        ],
                        air: [
                            ["color", ["color"]],
                            ["font", ["bold", "underline", "clear"]],
                            ["para", ["ul", "paragraph"]],
                            ["table", ["table"]],
                            ["insert", ["link", "picture"]]
                        ]
                    },
                    airMode: !1,
                    width: null,
                    height: null,
                    linkTargetBlank: !0,
                    focus: !1,
                    tabSize: 4,
                    styleWithSpan: !0,
                    shortcuts: !0,
                    textareaAutoSync: !0,
                    hintDirection: "bottom",
                    tooltip: "auto",
                    container: "body",
                    maxTextLength: 0,
                    styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
                    fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
                    fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
                    colors: [
                        ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
                        ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
                        ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
                        ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
                        ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
                        ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
                        ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
                        ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
                    ],
                    lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
                    tableClassName: "table table-bordered",
                    insertTableMaxSize: {
                        col: 10,
                        row: 10
                    },
                    dialogsInBody: !1,
                    dialogsFade: !1,
                    maximumImageFileSize: null,
                    callbacks: {
                        onInit: null,
                        onFocus: null,
                        onBlur: null,
                        onBlurCodeview: null,
                        onEnter: null,
                        onKeyup: null,
                        onKeydown: null,
                        onImageUpload: null,
                        onImageUploadError: null
                    },
                    codemirror: {
                        mode: "text/html",
                        htmlMode: !0,
                        lineNumbers: !0
                    },
                    keyMap: {
                        pc: {
                            ENTER: "insertParagraph",
                            "CTRL+Z": "undo",
                            "CTRL+Y": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CTRL+B": "bold",
                            "CTRL+I": "italic",
                            "CTRL+U": "underline",
                            "CTRL+SHIFT+S": "strikethrough",
                            "CTRL+BACKSLASH": "removeFormat",
                            "CTRL+SHIFT+L": "justifyLeft",
                            "CTRL+SHIFT+E": "justifyCenter",
                            "CTRL+SHIFT+R": "justifyRight",
                            "CTRL+SHIFT+J": "justifyFull",
                            "CTRL+SHIFT+NUM7": "insertUnorderedList",
                            "CTRL+SHIFT+NUM8": "insertOrderedList",
                            "CTRL+LEFTBRACKET": "outdent",
                            "CTRL+RIGHTBRACKET": "indent",
                            "CTRL+NUM0": "formatPara",
                            "CTRL+NUM1": "formatH1",
                            "CTRL+NUM2": "formatH2",
                            "CTRL+NUM3": "formatH3",
                            "CTRL+NUM4": "formatH4",
                            "CTRL+NUM5": "formatH5",
                            "CTRL+NUM6": "formatH6",
                            "CTRL+ENTER": "insertHorizontalRule",
                            "CTRL+K": "linkDialog.show"
                        },
                        mac: {
                            ENTER: "insertParagraph",
                            "CMD+Z": "undo",
                            "CMD+SHIFT+Z": "redo",
                            TAB: "tab",
                            "SHIFT+TAB": "untab",
                            "CMD+B": "bold",
                            "CMD+I": "italic",
                            "CMD+U": "underline",
                            "CMD+SHIFT+S": "strikethrough",
                            "CMD+BACKSLASH": "removeFormat",
                            "CMD+SHIFT+L": "justifyLeft",
                            "CMD+SHIFT+E": "justifyCenter",
                            "CMD+SHIFT+R": "justifyRight",
                            "CMD+SHIFT+J": "justifyFull",
                            "CMD+SHIFT+NUM7": "insertUnorderedList",
                            "CMD+SHIFT+NUM8": "insertOrderedList",
                            "CMD+LEFTBRACKET": "outdent",
                            "CMD+RIGHTBRACKET": "indent",
                            "CMD+NUM0": "formatPara",
                            "CMD+NUM1": "formatH1",
                            "CMD+NUM2": "formatH2",
                            "CMD+NUM3": "formatH3",
                            "CMD+NUM4": "formatH4",
                            "CMD+NUM5": "formatH5",
                            "CMD+NUM6": "formatH6",
                            "CMD+ENTER": "insertHorizontalRule",
                            "CMD+K": "linkDialog.show"
                        }
                    },
                    icons: {
                        align: "note-icon-align",
                        alignCenter: "note-icon-align-center",
                        alignJustify: "note-icon-align-justify",
                        alignLeft: "note-icon-align-left",
                        alignRight: "note-icon-align-right",
                        rowBelow: "note-icon-row-below",
                        colBefore: "note-icon-col-before",
                        colAfter: "note-icon-col-after",
                        rowAbove: "note-icon-row-above",
                        rowRemove: "note-icon-row-remove",
                        colRemove: "note-icon-col-remove",
                        indent: "note-icon-align-indent",
                        outdent: "note-icon-align-outdent",
                        arrowsAlt: "note-icon-arrows-alt",
                        bold: "note-icon-bold",
                        caret: "note-icon-caret",
                        circle: "note-icon-circle",
                        close: "note-icon-close",
                        code: "note-icon-code",
                        eraser: "note-icon-eraser",
                        font: "note-icon-font",
                        frame: "note-icon-frame",
                        italic: "note-icon-italic",
                        link: "note-icon-link",
                        unlink: "note-icon-chain-broken",
                        magic: "note-icon-magic",
                        menuCheck: "note-icon-menu-check",
                        minus: "note-icon-minus",
                        orderedlist: "note-icon-orderedlist",
                        pencil: "note-icon-pencil",
                        picture: "note-icon-picture",
                        question: "note-icon-question",
                        redo: "note-icon-redo",
                        square: "note-icon-square",
                        strikethrough: "note-icon-strikethrough",
                        subscript: "note-icon-subscript",
                        superscript: "note-icon-superscript",
                        table: "note-icon-table",
                        textHeight: "note-icon-text-height",
                        trash: "note-icon-trash",
                        underline: "note-icon-underline",
                        undo: "note-icon-undo",
                        unorderedlist: "note-icon-unorderedlist",
                        video: "note-icon-video"
                    }
                }
            })
        }),
        function(t) {
            "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(window.jQuery)
        }(function(t) {
            t.extend(t.summernote.plugins, {
                tableHeaders: function(e) {
                    var n = this,
                        i = t.summernote.ui,
                        o = (e.options, e.layoutInfo.editor, e.layoutInfo.editable);
                    editable = o[0], e.memo("button.tableHeaders", function() {
                        return i.buttonGroup([i.button({
                            contents: "<b>H<b>",
                            tooltip: "Toggle table header",
                            click: function() {
                                n.toggleTableHeader()
                            }
                        })]).render()
                    }), this.toggleTableHeader = function() {
                        const i = e.invoke("createRange", o),
                            r = t.summernote.dom;
                        if (i.isCollapsed() && i.isOnCell()) {
                            e.invoke("beforeCommand");
                            var s = r.ancestor(i.commonAncestor(), r.isTable),
                                a = t(s);
                            if ((c = a.find("thead"))[0]) {
                                "undefined" != typeof n.observer && n.observer.disconnect(), n.replaceTags(c.find("th"), "td");
                                var l = c.find("tr");
                                a.prepend(l), c.remove()
                            } else {
                                var c, u = a.find("tr")[0];
                                u.remove(), (c = t("<thead>")).prependTo(a), c.append(u), n.replaceTags(c.find("td"), "th");
                                var h = {
                                        childList: !0,
                                        subtree: !0
                                    },
                                    d = function(e) {
                                        for (var i of e) n.replaceTags(t(i.target).find("td"), "th")
                                    };
                                n.observer = new MutationObserver(d), n.observer.observe(c[0], h), n.destroy = function() {
                                    n.observer.disconnect()
                                }
                            }
                            e.invoke("afterCommand")
                        }
                    }, this.replaceTags = function(e, n) {
                        e.replaceWith(function() {
                            return t("<" + n + " />", {
                                html: t(this).html()
                            })
                        })
                    }
                }
            })
        }),
        function(t) {
            t.GrowingInput = function(n, o) {
                var r, s, a;
                o = t.extend({
                    min: 0,
                    max: null,
                    startWidth: 15,
                    correction: 15
                }, o), n = t(n).data("growing", this);
                var l = this,
                    c = function() {
                        a = t("<span></span>").css({
                            float: "left",
                            display: "inline-block",
                            position: "absolute",
                            left: -1e3
                        }).insertAfter(n), t.each(["font-size", "font-family", "padding-left", "padding-top", "padding-bottom", "padding-right", "border-left", "border-right", "border-top", "border-bottom", "word-spacing", "letter-spacing", "text-indent", "text-transform"], function(t, e) {
                            a.css(e, n.css(e))
                        }), n.blur(h).keyup(h).keydown(h).keypress(h), h()
                    },
                    u = function(t) {
                        a.text(t);
                        var e = a.width();
                        return (e || o.startWidth) + o.correction
                    },
                    h = function() {
                        s = r;
                        var t = r = n.val();
                        if (e(o.min) && r.length < o.min) {
                            if (e(s) && s.length <= o.min) return;
                            t = i(r, o.min, "-")
                        } else if (e(o.max) && r.length > o.max) {
                            if (e(s) && s.length >= o.max) return;
                            t = r.substr(0, o.max)
                        }
                        return n.width(u(t)), l
                    };
                this.resize = h, c()
            };
            var e = function(t) {
                    return !(!t && 0 !== t)
                },
                n = function(t, e) {
                    return new Array(e + 1).join(t)
                },
                i = function(t, e, i, o) {
                    if (t.length >= e) return this;
                    var r = n(i = i || " ", e - t.length).substr(0, e - t.length);
                    return o && "right" != o ? "left" == o ? r + t : r.substr(0, (r.length / 2).floor()) + t + r.substr(0, (r.length / 2).ceil()) : t + r
                }
        }(jQuery),
        function(t) {
            t.TextboxList = function(r, s) {
                var a, l, c, u, h, d = !1,
                    p = [],
                    f = {},
                    g = t.extend(!0, {
                        prefix: "textboxlist",
                        max: null,
                        unique: !1,
                        uniqueInsensitive: !0,
                        endEditableBit: !0,
                        startEditableBit: !0,
                        hideEditableBits: !0,
                        inBetweenEditableBits: !0,
                        keys: {
                            previous: 37,
                            next: 39
                        },
                        bitsOptions: {
                            editable: {},
                            box: {}
                        },
                        plugins: {},
                        encode: function(n) {
                            return t.grep(t.map(n, function(t) {
                                return t = e(t[0]) ? t[0] : t[1], e(t) ? t.toString().replace(/,/, "") : null
                            }), function(t) {
                                return t != undefined
                            }).join(",")
                        },
                        decode: function(t) {
                            return t.split(",")
                        }
                    }, s);
                r = t(r);
                var m = this,
                    v = function() {
                        for (var e in a = r.css("display", "none").attr("autocomplete", "off").focus(k), l = t('<div class="' + g.prefix + '" />').insertAfter(r).click(function(t) {
                                t.target != c.get(0) && t.target != l.get(0) || d && (!u || u.toElement().get(0) == c.find(":last-child").get(0)) || k()
                            }), c = t('<ul class="' + g.prefix + '-bits" />').appendTo(l), g.plugins) b(e, g.plugins[e]);
                        y()
                    },
                    b = function(e, n) {
                        m.plugins[e] = new(t.TextboxList[i(o(e))])(m, n)
                    },
                    y = function() {
                        g.endEditableBit && w("editable", null, {
                            tabIndex: a.tabIndex
                        }).inject(c), A("bitAdd", I, !0), A("bitRemove", I, !0), t(document).click(function(e) {
                            if (d) {
                                if (-1 != e.target.className.indexOf(g.prefix)) {
                                    if (e.target == t(l).get(0)) return;
                                    if (t(e.target).parents("div." + g.prefix).get(0) == l.get(0)) return
                                }
                                T()
                            }
                        }).keydown(function(e) {
                            if (d && u) {
                                var n = u.is("editable") ? u.getCaret() : null,
                                    i = u.getValue()[1],
                                    o = !!t.map(["shift", "alt", "meta", "ctrl"], function(t) {
                                        return e[t]
                                    }).length || u.is("editable") && u.isSelected(),
                                    r = function() {
                                        e.stopPropagation(), e.preventDefault()
                                    };
                                switch (e.which) {
                                    case 8:
                                        if (u.is("box")) return r(), u.remove();
                                    case g.keys.previous:
                                        !u.is("box") && (0 != n && i.length || o) || (r(), C("prev"));
                                        break;
                                    case 46:
                                        if (u.is("box")) return r(), u.remove();
                                    case g.keys.next:
                                        (u.is("box") || n == i.length && !o) && (r(), C("next"))
                                }
                            }
                        }), $(g.decode(a.val()))
                    },
                    w = function(n, i, o) {
                        if ("box" == n) {
                            if (e(g.max) && c.children("." + g.prefix + "-bit-box").length + 1 > g.max) return !1;
                            if (g.unique && -1 != t.inArray(_(i), p)) return !1;
                            if ("" == i[1]) return !1
                        }
                        return new t.TextboxListBit(n, i, m, t.extend(!0, g.bitsOptions[n], o))
                    },
                    _ = function(t) {
                        return g.uniqueInsensitive ? t[1].toLowerCase() : t[1]
                    },
                    x = function(t, e, n, i) {
                        var o = w("box", [e, t, n]);
                        return o && (i && i.length || (i = c.find("." + g.prefix + "-bit-box").filter(":last")), o.inject(i.length ? i : c, i.length ? "after" : "top")), m
                    },
                    C = function(e, n) {
                        var i = E(n && t(n).length ? n : u).toElement(),
                            o = E(i[e]());
                        return o && o.focus(), m
                    },
                    k = function() {
                        var t = c.children().filter(":last");
                        return t && E(t).focus(), m
                    },
                    T = function() {
                        return d ? (u && u.blur(), d = !1, L("blur")) : m
                    },
                    E = function(e) {
                        return !e.type || "editable" != e.type && "box" != e.type ? t(e).data("textboxlist:bit") : e
                    },
                    S = function() {
                        var t = [];
                        return c.children().each(function() {
                            var e = E(this);
                            e.is("editable") || t.push(e.getValue())
                        }), t
                    },
                    $ = function(e) {
                        e && t.each(e, function(e, n) {
                            n && x.apply(m, t.isArray(n) ? [n[1], n[0], n[2]] : [n])
                        })
                    },
                    I = function() {
                        a.val(g.encode(S()))
                    },
                    A = function(e, n) {
                        f[e] == undefined && (f[e] = []);
                        var i = !1;
                        return t.each(f[e], function(t) {
                            t !== n || (i = !0)
                        }), i || f[e].push(n), m
                    },
                    L = function(e, i, o) {
                        return f && f[e] ? (t.each(f[e], function(t, e) {
                            ! function() {
                                i = i != undefined ? n(i) : Array.prototype.slice.call(arguments);
                                var t = function() {
                                    return e.apply(m || null, i)
                                };
                                o ? setTimeout(t, o) : t()
                            }()
                        }), m) : m
                    },
                    P = function(t, e) {
                        if (f[t])
                            for (var n = f[t].length; n--; n) f[t][n] === e && f[t].splice(n, 1);
                        return m
                    },
                    O = function(e) {
                        return t.inArray(_(e), p)
                    };
                this.onFocus = function(t) {
                    u && u.blur(), clearTimeout(h), u = t, l.addClass(g.prefix + "-focus"), d || (d = !0, L("focus", t))
                }, this.onAdd = function(t) {
                    if (g.unique && t.is("box") && p.push(_(t.getValue())), t.is("box")) {
                        var e = E(t.toElement().prev());
                        if (e && e.is("box") && g.inBetweenEditableBits || !e && g.startEditableBit) {
                            var n = !(!e || !e.toElement().length) && e.toElement(),
                                i = w("editable").inject(n || c, n ? "after" : "top");
                            g.hideEditableBits && i.hide()
                        }
                    }
                }, this.onRemove = function(t) {
                    if (d) {
                        if (g.unique && t.is("box")) {
                            var e = O(t.getValue()); - 1 != e && (p = p.splice(e + 1, 1))
                        }
                        var n = E(t.toElement().prev());
                        n && n.is("editable") && n.remove(), C("next", t)
                    }
                }, this.onBlur = function(t, e) {
                    u = null, l.removeClass(g.prefix + "-focus"), h = setTimeout(T, e ? 0 : 200)
                }, this.setOptions = function(e) {
                    g = t.extend(!0, g, e)
                }, this.getOptions = function() {
                    return g
                }, this.getContainer = function() {
                    return l
                }, this.isDuplicate = O, this.addEvent = A, this.removeEvent = P, this.fireEvent = L, this.create = w, this.add = x, this.getValues = S, this.focusLast = k, this.plugins = [], v()
            }, t.TextboxListBit = function(i, r, s, a) {
                var l, c, u, h, d, p = !1,
                    f = o(i),
                    g = t.extend(!0, "box" == i ? {
                        deleteButton: !0
                    } : {
                        tabIndex: null,
                        growing: !0,
                        growingOptions: {},
                        stopEnter: !0,
                        addOnBlur: !0,
                        addKeys: []
                    }, a);
                this.type = i, this.value = r;
                var m = this,
                    v = function() {
                        u = s.getOptions().prefix + "-bit", h = u + "-" + i, c = t("<li />").addClass(u).addClass(h).data("textboxlist:bit", m).hover(function() {
                            c.addClass(u + "-hover").addClass(h + "-hover")
                        }, function() {
                            c.removeClass(u + "-hover").removeClass(h + "-hover")
                        }), "box" == i ? (c.html(e(m.value[2]) ? m.value[2] : m.value[1]).click(y), g.deleteButton && (c.addClass(h + "-deletable"), t('<a href="#" class="' + h + '-deletebutton" />').click(_).appendTo(c)), c.children().click(function(t) {
                            t.stopPropagation(), t.preventDefault()
                        })) : (l = t('<input type="text" class="' + h + '-input" autocomplete="off" />').val(m.value ? m.value[1] : "").appendTo(c), e(g.tabIndex) && (l.tabIndex = g.tabIndex), g.growing && new t.GrowingInput(l, g.growingOptions), l.focus(function() {
                            y(!0)
                        }).blur(function() {
                            w(!0), g.addOnBlur && T()
                        }), (g.addKeys || g.stopEnter) && l.keydown(function(e) {
                            if (p) {
                                var i = function() {
                                    e.stopPropagation(), e.preventDefault()
                                };
                                g.stopEnter && 13 === e.which && i(), -1 != t.inArray(e.which, n(g.addKeys)) && (i(), T())
                            }
                        }))
                    },
                    b = function(t, e) {
                        switch (e || "bottom") {
                            case "top":
                                c.prependTo(t);
                                break;
                            case "bottom":
                                c.appendTo(t);
                                break;
                            case "before":
                                c.insertBefore(t);
                                break;
                            case "after":
                                c.insertAfter(t)
                        }
                        return s.onAdd(m), k("add")
                    },
                    y = function(t) {
                        return p ? m : (x(), p = !0, s.onFocus(m), c.addClass(u + "-focus").addClass(u + "-" + i + "-focus"), k("focus"), "editable" != i || t || l.focus(), m)
                    },
                    w = function(t) {
                        return p ? (p = !1, s.onBlur(m), c.removeClass(u + "-focus").removeClass(u + "-" + i + "-focus"), k("blur"), "editable" == i && (t || l.blur(), d && !l.val().length && C()), m) : m
                    },
                    _ = function() {
                        return w(), s.onRemove(m), c.remove(), k("remove")
                    },
                    x = function() {
                        return c.css("display", "block"), m
                    },
                    C = function() {
                        return c.css("display", "none"), d = !0, m
                    },
                    k = function(t) {
                        return t = o(t), s.fireEvent("bit" + t, m).fireEvent("bit" + f + t, m), m
                    };
                if (this.is = function(t) {
                        return i == t
                    }, this.setValue = function(t) {
                        return "editable" == i ? (l.val(e(t[0]) ? t[0] : t[1]), g.growing && l.data("growing").resize()) : r = t, m
                    }, this.getValue = function() {
                        return "editable" == i ? [null, l.val(), null] : r
                    }, "editable" == i) {
                    this.getCaret = function() {
                        var t = l.get(0);
                        if (t.createTextRange) {
                            var e = document.selection.createRange().duplicate();
                            return e.moveEnd("character", t.value.length), "" === e.text ? t.value.length : t.value.lastIndexOf(e.text)
                        }
                        return t.selectionStart
                    }, this.getCaretEnd = function() {
                        var t = l.get(0);
                        if (t.createTextRange) {
                            var e = document.selection.createRange().duplicate();
                            return e.moveStart("character", -t.value.length), e.text.length
                        }
                        return t.selectionEnd
                    }, this.isSelected = function() {
                        return p && m.getCaret() !== m.getCaretEnd()
                    };
                    var T = function() {
                        var t = m.getValue(),
                            e = s.create("box", t);
                        return e ? (e.inject(c, "before"), m.setValue([null, "", null]), e) : null
                    };
                    this.toBox = T
                }
                this.toElement = function() {
                    return c
                }, this.focus = y, this.blur = w, this.remove = _, this.inject = b, this.show = x, this.hide = C, this.fireBitEvent = k, v()
            };
            var e = function(t) {
                    return !(!t && 0 !== t)
                },
                n = function(e) {
                    return t.isArray(e) ? e : [e]
                },
                i = function(t) {
                    return t.replace(/-\D/g, function(t) {
                        return t.charAt(1).toUpperCase()
                    })
                },
                o = function(t) {
                    return t.replace(/\b[a-z]/g, function(t) {
                        return t.toUpperCase()
                    })
                };
            t.fn.extend({
                textboxlist: function(e) {
                    return this.each(function() {
                        new t.TextboxList(this, e)
                    })
                }
            })
        }(jQuery),
        function() {
            $.TextboxList.Autocomplete = function(e, n) {
                var i, o, r, s, a, l, c, u, h, d, p, f = [],
                    g = [],
                    m = !1,
                    v = $.extend(!0, {
                        minLength: 1,
                        maxResults: 10,
                        insensitive: !0,
                        highlight: !0,
                        highlightSelector: null,
                        mouseInteraction: !0,
                        onlyFromValues: !1,
                        queryRemote: !1,
                        remote: {
                            url: "",
                            param: "search",
                            extraParams: {},
                            loadPlaceholder: "Please wait..."
                        },
                        method: "standard",
                        placeholder: "Type to receive suggestions"
                    }, n),
                    b = function() {
                        e.addEvent("bitEditableAdd", y).addEvent("bitEditableFocus", w).addEvent("bitEditableBlur", C).setOptions({
                            bitsOptions: {
                                editable: {
                                    addKeys: !1,
                                    stopEnter: !1
                                }
                            }
                        }), o = e.getOptions().prefix + "-autocomplete", r = $.TextboxList.Autocomplete.Methods[v.method], (s = $('<div class="' + o + '" />').appendTo(e.getContainer())).width("100%"), t(v.placeholder) && (m = $('<div class="' + o + '-placeholder" />').html(v.placeholder).appendTo(s)), a = $('<ul class="' + o + '-results" />').appendTo(s).click(function(t) {
                            t.stopPropagation(), t.preventDefault()
                        })
                    },
                    y = function(t) {
                        t.toElement().keydown(P).keyup(function() {
                            w()
                        })
                    },
                    w = function(t) {
                        if (t && (c = t), v.queryRemote || f.length) {
                            var e = $.trim(c.getValue()[1]);
                            if (e.length < v.minLength && -1 === e.indexOf("#") && k(), e != d && (d = e, a.css("display", "none"), !(e.length < v.minLength && -1 === e.indexOf("#")))) {
                                if (v.queryRemote)
                                    if (g[e]) f = g[e];
                                    else {
                                        var n = v.remote.extraParams;
                                        n[v.remote.param] = e, p && p.abort(), p = $.ajax({
                                            url: v.remote.url,
                                            data: n,
                                            dataType: "json",
                                            success: function(t) {
                                                g[e] = t, f = t, _(e)
                                            }
                                        })
                                    } _(e)
                            }
                        }
                    },
                    _ = function(t) {
                        var n = r.filter(f, t, v.insensitive, v.maxResults);
                        e.getOptions().unique && (n = $.grep(n, function(t) {
                            return -1 == e.isDuplicate(t)
                        })), T(), n.length && (S(), a.empty().css("display", "block"), $.each(n, function(e, n) {
                            x(n, t)
                        }), v.onlyFromValues && I(), n = n)
                    },
                    x = function(t, e) {
                        var n = $('<li class="' + o + '-result" />').html(t[3] ? t[3] : t[1]).data("textboxlist:auto:value", t);
                        n.appendTo(a), v.highlight && $(v.highlightSelector ? n.find(v.highlightSelector) : n).each(function() {
                            $(this).html() && r.highlight($(this), e, v.insensitive, o + "-highlight")
                        }), v.mouseInteraction && (n.css("cursor", "pointer").hover(function() {
                            E(n)
                        }).mousedown(function(t) {
                            t.stopPropagation(), t.preventDefault(), clearTimeout(u), h = !0
                        }).mouseup(function() {
                            h && (L(), c.focus(), w(), h = !1)
                        }), v.onlyFromValues || n.mouseleave(function() {
                            l && l.get(0) == n.get(0) && S()
                        }))
                    },
                    C = function() {
                        u = setTimeout(function() {
                            T(), a.css("display", "none"), d = null
                        }, $.browser.msie ? 150 : 0)
                    },
                    k = function() {
                        m && m.css("display", "block")
                    },
                    T = function() {
                        m && m.css("display", "none")
                    },
                    E = function(t) {
                        t && t.length && (S(), l = t.addClass(o + "-result-focus"))
                    },
                    S = function() {
                        l && l.length && (l.removeClass(o + "-result-focus"), l = null)
                    },
                    I = function() {
                        return E(a.find(":first"))
                    },
                    A = function(t) {
                        return l && l.length ? E(l[t]()) : self
                    },
                    L = function() {
                        var t = l.data("textboxlist:auto:value"),
                            n = e.create("box", t.slice(0, 3));
                        return n && (n.autoValue = t, $.isArray(i) && i.push(t), c.setValue([null, "", null]), n.inject(c.toElement(), "before")), S(), self
                    },
                    P = function(t) {
                        var n = function() {
                            t.stopPropagation(), t.preventDefault()
                        };
                        switch (t.which) {
                            case 38:
                                n(), !v.onlyFromValues && l && l.get(0) === a.find(":first").get(0) ? S() : A("prev");
                                break;
                            case 40:
                                n(), l && l.length ? A("next") : I();
                                break;
                            case 13:
                            case 32:
                            case 188:
                                if (n(), l && l.length) L();
                                else if (!v.onlyFromValues) {
                                    var i = c.getValue(),
                                        o = e.create("box", i);
                                    o && (o.inject(c.toElement(), "before"), c.setValue([null, "", null]))
                                }
                        }
                    };
                this.setValues = function(t) {
                    f = t
                }, b()
            }, $.TextboxList.Autocomplete.Methods = {
                standard: {
                    filter: function(t, n, i, o) {
                        n = n.replace("#", "");
                        for (var r = [], s = new RegExp("\\b" + e(n), i ? "i" : ""), a = 0; a < t.length && r.length !== o; a++) s.test(t[a][1]) && r.push(t[a]);
                        return r
                    },
                    highlight: function(t, n, i, o) {
                        n = n.replace("#", "");
                        var r = new RegExp("(<[^>]*>)|(\\b" + e(n) + ")", i ? "ig" : "g");
                        return t.html(t.html().replace(r, function(t, e, n) {
                            return "<" == t.charAt(0) ? t : '<strong class="' + o + '">' + n + "</strong>"
                        }))
                    }
                }
            };
            var t = function(t) {
                    return !(!t && 0 !== t)
                },
                e = function(t) {
                    return t.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1")
                }
        }(),
        /*!
        Chosen, a Select Box Enhancer for jQuery and Prototype
        by Patrick Filler for Harvest, http://getharvest.com

        Version 1.7.0
        Full source at https://github.com/harvesthq/chosen
        Copyright (c) 2011-2017 Harvest http://getharvest.com

        MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
        This file is generated by `grunt build`, do not edit it by hand.
        */
        function() {
            var t, e, n, i, o = function(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                },
                r = {}.hasOwnProperty,
                s = function(t, e) {
                    function n() {
                        this.constructor = t
                    }
                    for (var i in e) r.call(e, i) && (t[i] = e[i]);
                    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                };
            (i = function() {
                function t() {
                    this.options_index = 0, this.parsed = []
                }
                return t.prototype.add_node = function(t) {
                    return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
                }, t.prototype.add_group = function(t) {
                    var e, n, i, o, r, s;
                    for (e = this.parsed.length, this.parsed.push({
                            array_index: e,
                            group: !0,
                            label: this.escapeExpression(t.label),
                            title: t.title ? t.title : void 0,
                            children: 0,
                            disabled: t.disabled,
                            classes: t.className
                        }), s = [], i = 0, o = (r = t.childNodes).length; i < o; i++) n = r[i], s.push(this.add_option(n, e, t.disabled));
                    return s
                }, t.prototype.add_option = function(t, e, n) {
                    if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        value: t.value,
                        text: t.text,
                        html: t.innerHTML,
                        title: t.title ? t.title : void 0,
                        selected: t.selected,
                        disabled: !0 === n ? n : t.disabled,
                        group_array_index: e,
                        group_label: null != e ? this.parsed[e].label : null,
                        classes: t.className,
                        style: t.style.cssText
                    })) : this.parsed.push({
                        array_index: this.parsed.length,
                        options_index: this.options_index,
                        empty: !0
                    }), this.options_index += 1
                }, t.prototype.escapeExpression = function(t) {
                    var e, n;
                    return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(n, function(t) {
                        return e[t] || "&amp;"
                    })) : t
                }, t
            }()).select_to_array = function(t) {
                var e, n, o, r, s;
                for (n = new i, o = 0, r = (s = t.childNodes).length; o < r; o++) e = s[o], n.add_node(e);
                return n.parsed
            }, e = function() {
                function t(e, n) {
                    this.form_field = e, this.options = null != n ? n : {}, this.label_click_handler = o(this.label_click_handler, this), t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
                }
                return t.prototype.set_default_values = function() {
                    var t = this;
                    return this.click_test_action = function(e) {
                        return t.test_active_click(e)
                    }, this.activate_action = function(e) {
                        return t.activate_field(e)
                    }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || Infinity, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select
                }, t.prototype.set_default_text = function() {
                    return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
                }, t.prototype.choice_label = function(t) {
                    return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + t.group_label + "</b>" + t.html : t.html
                }, t.prototype.mouse_enter = function() {
                    return this.mouse_on_container = !0
                }, t.prototype.mouse_leave = function() {
                    return this.mouse_on_container = !1
                }, t.prototype.input_focus = function() {
                    var t = this;
                    if (this.is_multiple) {
                        if (!this.active_field) return setTimeout(function() {
                            return t.container_mousedown()
                        }, 50)
                    } else if (!this.active_field) return this.activate_field()
                }, t.prototype.input_blur = function() {
                    var t = this;
                    if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function() {
                        return t.blur_test()
                    }, 100)
                }, t.prototype.label_click_handler = function(t) {
                    return this.is_multiple ? this.container_mousedown(t) : this.activate_field()
                }, t.prototype.results_option_build = function(t) {
                    var e, n, i, o, r, s, a;
                    for (e = "", o = 0, r = 0, s = (a = this.results_data).length; r < s && (i = "", "" !== (i = (n = a[r]).group ? this.result_add_group(n) : this.result_add_option(n)) && (o++, e += i), (null != t ? t.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(n))), !(o >= this.max_shown_results)); r++);
                    return e
                }, t.prototype.result_add_option = function(t) {
                    var e, n;
                    return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), (n = document.createElement("li")).className = e.join(" "), n.style.cssText = t.style, n.setAttribute("data-option-array-index", t.array_index), n.innerHTML = t.search_text, t.title && (n.title = t.title), this.outerHTML(n)) : ""
                }, t.prototype.result_add_group = function(t) {
                    var e, n;
                    return (t.search_match || t.group_match) && t.active_options > 0 ? ((e = []).push("group-result"), t.classes && e.push(t.classes), (n = document.createElement("li")).className = e.join(" "), n.innerHTML = t.search_text, t.title && (n.title = t.title), this.outerHTML(n)) : ""
                }, t.prototype.results_update_field = function() {
                    if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
                }, t.prototype.reset_single_select_options = function() {
                    var t, e, n, i, o;
                    for (o = [], e = 0, n = (i = this.results_data).length; e < n; e++)(t = i[e]).selected ? o.push(t.selected = !1) : o.push(void 0);
                    return o
                }, t.prototype.results_toggle = function() {
                    return this.results_showing ? this.results_hide() : this.results_show()
                }, t.prototype.results_search = function() {
                    return this.results_showing ? this.winnow_results() : this.results_show()
                }, t.prototype.winnow_results = function() {
                    var t, e, n, i, o, r, s, a, l, c, u, h;
                    for (this.no_results_clear(), o = 0, t = (s = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), i = this.get_search_regex(t), e = this.get_highlight_regex(t), c = 0, u = (h = this.results_data).length; c < u; c++)(n = h[c]).search_match = !1, r = null, this.include_option_in_results(n) && (n.group && (n.group_match = !1, n.active_options = 0), null != n.group_array_index && this.results_data[n.group_array_index] && (0 === (r = this.results_data[n.group_array_index]).active_options && r.search_match && (o += 1), r.active_options += 1), n.search_text = n.group ? n.label : n.html, n.group && !this.group_search || (n.search_match = this.search_string_match(n.search_text, i), n.search_match && !n.group && (o += 1), n.search_match ? (s.length && (a = n.search_text.search(e), l = n.search_text.substr(0, a + s.length) + "</em>" + n.search_text.substr(a + s.length), n.search_text = l.substr(0, a) + "<em>" + l.substr(a)), null != r && (r.group_match = !0)) : null != n.group_array_index && this.results_data[n.group_array_index].search_match && (n.search_match = !0)));
                    return this.result_clear_highlight(), o < 1 && s.length ? (this.update_results_content(""), this.no_results(s)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
                }, t.prototype.get_search_regex = function(t) {
                    var e, n;
                    return e = this.search_contains ? "" : "^", n = this.case_sensitive_search ? "" : "i", new RegExp(e + t, n)
                }, t.prototype.get_highlight_regex = function(t) {
                    var e, n;
                    return e = this.search_contains ? "" : "\\b", n = this.case_sensitive_search ? "" : "i", new RegExp(e + t, n)
                }, t.prototype.search_string_match = function(t, e) {
                    var n, i, o, r;
                    if (e.test(t)) return !0;
                    if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (i = t.replace(/\[|\]/g, "").split(" ")).length)
                        for (o = 0, r = i.length; o < r; o++)
                            if (n = i[o], e.test(n)) return !0
                }, t.prototype.choices_count = function() {
                    var t, e, n;
                    if (null != this.selected_option_count) return this.selected_option_count;
                    for (this.selected_option_count = 0, t = 0, e = (n = this.form_field.options).length; t < e; t++) n[t].selected && (this.selected_option_count += 1);
                    return this.selected_option_count
                }, t.prototype.choices_click = function(t) {
                    if (t.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show()
                }, t.prototype.keydown_checker = function(t) {
                    var e, n;
                    switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                        case 8:
                            this.backstroke_length = this.get_search_field_value().length;
                            break;
                        case 9:
                            this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                            break;
                        case 13:
                        case 27:
                            this.results_showing && t.preventDefault();
                            break;
                        case 32:
                            this.disable_search && t.preventDefault();
                            break;
                        case 38:
                            t.preventDefault(), this.keyup_arrow();
                            break;
                        case 40:
                            t.preventDefault(), this.keydown_arrow()
                    }
                }, t.prototype.keyup_checker = function(t) {
                    var e, n;
                    switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), e) {
                        case 8:
                            this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(), this.results_search());
                            break;
                        case 13:
                            t.preventDefault(), this.results_showing && this.result_select(t);
                            break;
                        case 27:
                            this.results_showing && this.results_hide();
                            break;
                        case 9:
                        case 16:
                        case 17:
                        case 18:
                        case 38:
                        case 40:
                        case 91:
                            break;
                        default:
                            this.results_search()
                    }
                }, t.prototype.clipboard_event_checker = function() {
                    var t = this;
                    if (!this.is_disabled) return setTimeout(function() {
                        return t.results_search()
                    }, 50)
                }, t.prototype.container_width = function() {
                    return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
                }, t.prototype.include_option_in_results = function(t) {
                    return !(this.is_multiple && !this.display_selected_options && t.selected) && (!(!this.display_disabled_options && t.disabled) && !t.empty)
                }, t.prototype.search_results_touchstart = function(t) {
                    return this.touch_started = !0, this.search_results_mouseover(t)
                }, t.prototype.search_results_touchmove = function(t) {
                    return this.touch_started = !1, this.search_results_mouseout(t)
                }, t.prototype.search_results_touchend = function(t) {
                    if (this.touch_started) return this.search_results_mouseup(t)
                }, t.prototype.outerHTML = function(t) {
                    var e;
                    return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML)
                }, t.prototype.get_single_html = function() {
                    return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
                }, t.prototype.get_multi_html = function() {
                    return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
                }, t.prototype.get_no_results_html = function(t) {
                    return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + t + "</span>\n</li>"
                }, t.browser_is_supported = function() {
                    return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
                }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
            }(), (t = jQuery).fn.extend({
                chosen: function(i) {
                    return e.browser_is_supported() ? this.each(function() {
                        var e, o;
                        o = (e = t(this)).data("chosen"), "destroy" !== i ? o instanceof n || e.data("chosen", new n(this, i)) : o instanceof n && o.destroy()
                    }) : this
                }
            }), n = function() {
                function n() {
                    return n.__super__.constructor.apply(this, arguments)
                }
                return s(n, e), n.prototype.setup = function() {
                    return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex
                }, n.prototype.set_up_html = function() {
                    var e, n;
                    return (e = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), n = {
                        "class": e.join(" "),
                        title: this.form_field.title
                    }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", n), this.container.width(this.container_width()), this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
                }, n.prototype.on_ready = function() {
                    return this.form_field_jq.trigger("chosen:ready", {
                        chosen: this
                    })
                }, n.prototype.register_observers = function() {
                    var t = this;
                    return this.container.bind("touchstart.chosen", function(e) {
                        t.container_mousedown(e)
                    }), this.container.bind("touchend.chosen", function(e) {
                        t.container_mouseup(e)
                    }), this.container.bind("mousedown.chosen", function(e) {
                        t.container_mousedown(e)
                    }), this.container.bind("mouseup.chosen", function(e) {
                        t.container_mouseup(e)
                    }), this.container.bind("mouseenter.chosen", function(e) {
                        t.mouse_enter(e)
                    }), this.container.bind("mouseleave.chosen", function(e) {
                        t.mouse_leave(e)
                    }), this.search_results.bind("mouseup.chosen", function(e) {
                        t.search_results_mouseup(e)
                    }), this.search_results.bind("mouseover.chosen", function(e) {
                        t.search_results_mouseover(e)
                    }), this.search_results.bind("mouseout.chosen", function(e) {
                        t.search_results_mouseout(e)
                    }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                        t.search_results_mousewheel(e)
                    }), this.search_results.bind("touchstart.chosen", function(e) {
                        t.search_results_touchstart(e)
                    }), this.search_results.bind("touchmove.chosen", function(e) {
                        t.search_results_touchmove(e)
                    }), this.search_results.bind("touchend.chosen", function(e) {
                        t.search_results_touchend(e)
                    }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
                        t.results_update_field(e)
                    }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
                        t.activate_field(e)
                    }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
                        t.container_mousedown(e)
                    }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
                        t.close_field(e)
                    }), this.search_field.bind("blur.chosen", function(e) {
                        t.input_blur(e)
                    }), this.search_field.bind("keyup.chosen", function(e) {
                        t.keyup_checker(e)
                    }), this.search_field.bind("keydown.chosen", function(e) {
                        t.keydown_checker(e)
                    }), this.search_field.bind("focus.chosen", function(e) {
                        t.input_focus(e)
                    }), this.search_field.bind("cut.chosen", function(e) {
                        t.clipboard_event_checker(e)
                    }), this.search_field.bind("paste.chosen", function(e) {
                        t.clipboard_event_checker(e)
                    }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
                        t.choices_click(e)
                    }) : this.container.bind("click.chosen", function(t) {
                        t.preventDefault()
                    })
                }, n.prototype.destroy = function() {
                    return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.form_field_label.length > 0 && this.form_field_label.unbind("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
                }, n.prototype.search_field_disabled = function() {
                    return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_field), this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_field)
                }, n.prototype.container_mousedown = function(e) {
                    var n;
                    if (!this.is_disabled) return !e || "mousedown" !== (n = e.type) && "touchstart" !== n || this.results_showing || e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
                }, n.prototype.container_mouseup = function(t) {
                    if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t)
                }, n.prototype.search_results_mousewheel = function(t) {
                    var e;
                    if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())
                }, n.prototype.blur_test = function() {
                    if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
                }, n.prototype.close_field = function() {
                    return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), this.search_field.blur()
                }, n.prototype.activate_field = function() {
                    if (!this.is_disabled) return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
                }, n.prototype.test_active_click = function(e) {
                    var n;
                    return (n = t(e.target).closest(".chosen-container")).length && this.container[0] === n[0] ? this.active_field = !0 : this.close_field()
                }, n.prototype.results_build = function() {
                    return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                        first: !0
                    })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
                }, n.prototype.result_do_highlight = function(t) {
                    var e, n, i, o, r;
                    if (t.length) {
                        if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), o = (i = parseInt(this.search_results.css("maxHeight"), 10)) + (r = this.search_results.scrollTop()), (e = (n = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight()) >= o) return this.search_results.scrollTop(e - i > 0 ? e - i : 0);
                        if (n < r) return this.search_results.scrollTop(n)
                    }
                }, n.prototype.result_clear_highlight = function() {
                    return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
                }, n.prototype.results_show = function() {
                    return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.get_search_field_value()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                        chosen: this
                    }))
                }, n.prototype.update_results_content = function(t) {
                    return this.search_results.html(t)
                }, n.prototype.results_hide = function() {
                    return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                        chosen: this
                    })), this.results_showing = !1
                }, n.prototype.set_tab_index = function() {
                    var t;
                    if (this.form_field.tabIndex) return t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t
                }, n.prototype.set_label_behavior = function() {
                    if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", this.label_click_handler)
                }, n.prototype.show_search_field_default = function() {
                    return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
                }, n.prototype.search_results_mouseup = function(e) {
                    var n;
                    if ((n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()).length) return this.result_highlight = n, this.result_select(e), this.search_field.focus()
                }, n.prototype.search_results_mouseover = function(e) {
                    var n;
                    if (n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) return this.result_do_highlight(n)
                }, n.prototype.search_results_mouseout = function(e) {
                    if (t(e.target).hasClass("active-result")) return this.result_clear_highlight()
                }, n.prototype.choice_build = function(e) {
                    var n, i, o = this;
                    return n = t("<li />", {
                        "class": "search-choice"
                    }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? n.addClass("search-choice-disabled") : ((i = t("<a />", {
                        "class": "search-choice-close",
                        "data-option-array-index": e.array_index
                    })).bind("click.chosen", function(t) {
                        return o.choice_destroy_link_click(t)
                    }), n.append(i)), this.search_container.before(n)
                }, n.prototype.choice_destroy_link_click = function(e) {
                    if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(t(e.target))
                }, n.prototype.choice_destroy = function(t) {
                    if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() : this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()
                }, n.prototype.results_reset = function() {
                    if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.trigger_form_field_change(), this.active_field) return this.results_hide()
                }, n.prototype.results_reset_cleanup = function() {
                    return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
                }, n.prototype.result_select = function(t) {
                    var e, n;
                    if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                        chosen: this
                    }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), (n = this.results_data[e[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(this.choice_label(n)), this.is_multiple && (!this.hide_results_on_select || t.metaKey || t.ctrlKey) || (this.results_hide(), this.show_search_field_default()), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
                        selected: this.form_field.options[n.options_index].value
                    }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())
                }, n.prototype.single_set_selected_text = function(t) {
                    return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
                }, n.prototype.result_deselect = function(t) {
                    var e;
                    return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({
                        deselected: this.form_field.options[e.options_index].value
                    }), this.search_field_scale(), !0)
                }, n.prototype.single_deselect_control_build = function() {
                    if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
                }, n.prototype.get_search_field_value = function() {
                    return this.search_field.val()
                }, n.prototype.get_search_text = function() {
                    return this.escape_html(t.trim(this.get_search_field_value()))
                }, n.prototype.escape_html = function(e) {
                    return t("<div/>").text(e).html()
                }, n.prototype.winnow_results_set_highlight = function() {
                    var t, e;
                    if (null != (t = (e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")).length ? e.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(t)
                }, n.prototype.no_results = function(t) {
                    var e;
                    return e = this.get_no_results_html(t), this.search_results.append(e), this.form_field_jq.trigger("chosen:no_results", {
                        chosen: this
                    })
                }, n.prototype.no_results_clear = function() {
                    return this.search_results.find(".no-results").remove()
                }, n.prototype.keydown_arrow = function() {
                    var t;
                    return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
                }, n.prototype.keyup_arrow = function() {
                    var t;
                    return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
                }, n.prototype.keydown_backstroke = function() {
                    var t;
                    return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
                }, n.prototype.clear_backstroke = function() {
                    return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
                }, n.prototype.search_field_scale = function() {
                    var e, n, i, o, r, s, a, l;
                    if (this.is_multiple) {
                        for (o = {
                                position: "absolute",
                                left: "-1000px",
                                top: "-1000px",
                                display: "none",
                                whiteSpace: "pre"
                            }, a = 0, l = (r = ["fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing"]).length; a < l; a++) o[i = r[a]] = this.search_field.css(i);
                        return (n = t("<div />").css(o)).text(this.get_search_field_value()), t("body").append(n), s = n.width() + 25, n.remove(), e = this.container.outerWidth(), s = Math.min(e - 10, s), this.search_field.width(s)
                    }
                }, n.prototype.trigger_form_field_change = function(t) {
                    return this.form_field_jq.trigger("input", t), this.form_field_jq.trigger("change", t)
                }, n
            }()
        }.call(this),
        function(t, e) {
            "function" == typeof define && define.amd ? define("sifter", e) : "object" == typeof exports ? module.exports = e() : t.Sifter = e()
        }(this, function() {
            var t = function(t, e) {
                this.items = t, this.settings = e || {
                    diacritics: !0
                }
            };
            t.prototype.tokenize = function(t) {
                if (!(t = o(String(t || "").toLowerCase())) || !t.length) return [];
                var e, n, i, s, l = [],
                    c = t.split(/ +/);
                for (e = 0, n = c.length; e < n; e++) {
                    if (i = r(c[e]), this.settings.diacritics)
                        for (s in a) a.hasOwnProperty(s) && (i = i.replace(new RegExp(s, "g"), a[s]));
                    l.push({
                        string: c[e],
                        regex: new RegExp(i, "i")
                    })
                }
                return l
            }, t.prototype.iterator = function(t, e) {
                (s(t) ? Array.prototype.forEach || function(t) {
                    for (var e = 0, n = this.length; e < n; e++) t(this[e], e, this)
                } : function(t) {
                    for (var e in this) this.hasOwnProperty(e) && t(this[e], e, this)
                }).apply(t, [e])
            }, t.prototype.getScoreFunction = function(t, e) {
                var n, o, r, s;
                t = this.prepareSearch(t, e), o = t.tokens, n = t.options.fields, r = o.length, s = t.options.nesting;
                var a = function(t, e) {
                        var n, i;
                        return t ? -1 === (i = (t = String(t || "")).search(e.regex)) ? 0 : (n = e.string.length / t.length, 0 === i && (n += .5), n) : 0
                    },
                    l = function() {
                        var t = n.length;
                        return t ? 1 === t ? function(t, e) {
                            return a(i(e, n[0], s), t)
                        } : function(e, o) {
                            for (var r = 0, l = 0; r < t; r++) l += a(i(o, n[r], s), e);
                            return l / t
                        } : function() {
                            return 0
                        }
                    }();
                return r ? 1 === r ? function(t) {
                    return l(o[0], t)
                } : "and" === t.options.conjunction ? function(t) {
                    for (var e, n = 0, i = 0; n < r; n++) {
                        if ((e = l(o[n], t)) <= 0) return 0;
                        i += e
                    }
                    return i / r
                } : function(t) {
                    for (var e = 0, n = 0; e < r; e++) n += l(o[e], t);
                    return n / r
                } : function() {
                    return 0
                }
            }, t.prototype.getSortFunction = function(t, n) {
                var o, r, s, a, l, c, u, h, d, p, f;
                if (f = !(t = (s = this).prepareSearch(t, n)).query && n.sort_empty || n.sort, d = function(t, e) {
                        return "$score" === t ? e.score : i(s.items[e.id], t, n.nesting)
                    }, l = [], f)
                    for (o = 0, r = f.length; o < r; o++)(t.query || "$score" !== f[o].field) && l.push(f[o]);
                if (t.query) {
                    for (p = !0, o = 0, r = l.length; o < r; o++)
                        if ("$score" === l[o].field) {
                            p = !1;
                            break
                        } p && l.unshift({
                        field: "$score",
                        direction: "desc"
                    })
                } else
                    for (o = 0, r = l.length; o < r; o++)
                        if ("$score" === l[o].field) {
                            l.splice(o, 1);
                            break
                        } for (h = [], o = 0, r = l.length; o < r; o++) h.push("desc" === l[o].direction ? -1 : 1);
                return (c = l.length) ? 1 === c ? (a = l[0].field, u = h[0], function(t, n) {
                    return u * e(d(a, t), d(a, n))
                }) : function(t, n) {
                    var i, o, r;
                    for (i = 0; i < c; i++)
                        if (r = l[i].field, o = h[i] * e(d(r, t), d(r, n))) return o;
                    return 0
                } : null
            }, t.prototype.prepareSearch = function(t, e) {
                if ("object" == typeof t) return t;
                var i = (e = n({}, e)).fields,
                    o = e.sort,
                    r = e.sort_empty;
                return i && !s(i) && (e.fields = [i]), o && !s(o) && (e.sort = [o]), r && !s(r) && (e.sort_empty = [r]), {
                    options: e,
                    query: String(t || "").toLowerCase(),
                    tokens: this.tokenize(t),
                    total: 0,
                    items: []
                }
            }, t.prototype.search = function(t, e) {
                var n, i, o, r, s = this;
                return i = this.prepareSearch(t, e), e = i.options, t = i.query, r = e.score || s.getScoreFunction(i), t.length ? s.iterator(s.items, function(t, o) {
                    n = r(t), (!1 === e.filter || n > 0) && i.items.push({
                        score: n,
                        id: o
                    })
                }) : s.iterator(s.items, function(t, e) {
                    i.items.push({
                        score: 1,
                        id: e
                    })
                }), (o = s.getSortFunction(i, e)) && i.items.sort(o), i.total = i.items.length, "number" == typeof e.limit && (i.items = i.items.slice(0, e.limit)), i
            };
            var e = function(t, e) {
                    return "number" == typeof t && "number" == typeof e ? t > e ? 1 : t < e ? -1 : 0 : (t = l(String(t || ""))) > (e = l(String(e || ""))) ? 1 : e > t ? -1 : 0
                },
                n = function(t) {
                    var e, n, i, o;
                    for (e = 1, n = arguments.length; e < n; e++)
                        if (o = arguments[e])
                            for (i in o) o.hasOwnProperty(i) && (t[i] = o[i]);
                    return t
                },
                i = function(t, e, n) {
                    if (t && e) {
                        if (!n) return t[e];
                        for (var i = e.split("."); i.length && (t = t[i.shift()]););
                        return t
                    }
                },
                o = function(t) {
                    return (t + "").replace(/^\s+|\s+$|/g, "")
                },
                r = function(t) {
                    return (t + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
                },
                s = Array.isArray || "undefined" != typeof $ && $.isArray || function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                a = {
                    a: "[a\u1e00\u1e01\u0102\u0103\xc2\xe2\u01cd\u01ce\u023a\u2c65\u0226\u0227\u1ea0\u1ea1\xc4\xe4\xc0\xe0\xc1\xe1\u0100\u0101\xc3\xe3\xc5\xe5\u0105\u0104\xc3\u0105\u0104]",
                    b: "[b\u2422\u03b2\u0392B\u0e3f\ud800\udf01\u16d2]",
                    c: "[c\u0106\u0107\u0108\u0109\u010c\u010d\u010a\u010bC\u0304c\u0304\xc7\xe7\u1e08\u1e09\u023b\u023c\u0187\u0188\u0255\u1d04\uff23\uff43]",
                    d: "[d\u010e\u010f\u1e0a\u1e0b\u1e10\u1e11\u1e0c\u1e0d\u1e12\u1e13\u1e0e\u1e0f\u0110\u0111D\u0326d\u0326\u0189\u0256\u018a\u0257\u018b\u018c\u1d6d\u1d81\u1d91\u0221\u1d05\uff24\uff44\xf0]",
                    e: "[e\xc9\xe9\xc8\xe8\xca\xea\u1e18\u1e19\u011a\u011b\u0114\u0115\u1ebc\u1ebd\u1e1a\u1e1b\u1eba\u1ebb\u0116\u0117\xcb\xeb\u0112\u0113\u0228\u0229\u0118\u0119\u1d92\u0246\u0247\u0204\u0205\u1ebe\u1ebf\u1ec0\u1ec1\u1ec4\u1ec5\u1ec2\u1ec3\u1e1c\u1e1d\u1e16\u1e17\u1e14\u1e15\u0206\u0207\u1eb8\u1eb9\u1ec6\u1ec7\u2c78\u1d07\uff25\uff45\u0258\u01dd\u018f\u0190\u03b5]",
                    f: "[f\u0191\u0192\u1e1e\u1e1f]",
                    g: "[g\u0262\u20b2\u01e4\u01e5\u011c\u011d\u011e\u011f\u0122\u0123\u0193\u0260\u0120\u0121]",
                    h: "[h\u0124\u0125\u0126\u0127\u1e28\u1e29\u1e96\u1e96\u1e24\u1e25\u1e22\u1e23\u0266\u02b0\u01f6\u0195]",
                    i: "[i\xcd\xed\xcc\xec\u012c\u012d\xce\xee\u01cf\u01d0\xcf\xef\u1e2e\u1e2f\u0128\u0129\u012e\u012f\u012a\u012b\u1ec8\u1ec9\u0208\u0209\u020a\u020b\u1eca\u1ecb\u1e2c\u1e2d\u0197\u0268\u0268\u0306\u1d7b\u1d96\u0130iI\u0131\u026a\uff29\uff49]",
                    j: "[j\u0237\u0134\u0135\u0248\u0249\u029d\u025f\u02b2]",
                    k: "[k\u0198\u0199\ua740\ua741\u1e30\u1e31\u01e8\u01e9\u1e32\u1e33\u1e34\u1e35\u03ba\u03f0\u20ad]",
                    l: "[l\u0141\u0142\u013d\u013e\u013b\u013c\u0139\u013a\u1e36\u1e37\u1e38\u1e39\u1e3c\u1e3d\u1e3a\u1e3b\u013f\u0140\u023d\u019a\u2c60\u2c61\u2c62\u026b\u026c\u1d85\u026d\u0234\u029f\uff2c\uff4c]",
                    n: "[n\u0143\u0144\u01f8\u01f9\u0147\u0148\xd1\xf1\u1e44\u1e45\u0145\u0146\u1e46\u1e47\u1e4a\u1e4b\u1e48\u1e49N\u0308n\u0308\u019d\u0272\u0220\u019e\u1d70\u1d87\u0273\u0235\u0274\uff2e\uff4e\u014a\u014b]",
                    o: "[o\xd8\xf8\xd6\xf6\xd3\xf3\xd2\xf2\xd4\xf4\u01d1\u01d2\u0150\u0151\u014e\u014f\u022e\u022f\u1ecc\u1ecd\u019f\u0275\u01a0\u01a1\u1ece\u1ecf\u014c\u014d\xd5\xf5\u01ea\u01eb\u020c\u020d\u0555\u0585]",
                    p: "[p\u1e54\u1e55\u1e56\u1e57\u2c63\u1d7d\u01a4\u01a5\u1d71]",
                    q: "[q\ua756\ua757\u02a0\u024a\u024b\ua758\ua759q\u0303]",
                    r: "[r\u0154\u0155\u024c\u024d\u0158\u0159\u0156\u0157\u1e58\u1e59\u0210\u0211\u0212\u0213\u1e5a\u1e5b\u2c64\u027d]",
                    s: "[s\u015a\u015b\u1e60\u1e61\u1e62\u1e63\ua7a8\ua7a9\u015c\u015d\u0160\u0161\u015e\u015f\u0218\u0219S\u0308s\u0308]",
                    t: "[t\u0164\u0165\u1e6a\u1e6b\u0162\u0163\u1e6c\u1e6d\u01ae\u0288\u021a\u021b\u1e70\u1e71\u1e6e\u1e6f\u01ac\u01ad]",
                    u: "[u\u016c\u016d\u0244\u0289\u1ee4\u1ee5\xdc\xfc\xda\xfa\xd9\xf9\xdb\xfb\u01d3\u01d4\u0170\u0171\u016c\u016d\u01af\u01b0\u1ee6\u1ee7\u016a\u016b\u0168\u0169\u0172\u0173\u0214\u0215\u222a]",
                    v: "[v\u1e7c\u1e7d\u1e7e\u1e7f\u01b2\u028b\ua75e\ua75f\u2c71\u028b]",
                    w: "[w\u1e82\u1e83\u1e80\u1e81\u0174\u0175\u1e84\u1e85\u1e86\u1e87\u1e88\u1e89]",
                    x: "[x\u1e8c\u1e8d\u1e8a\u1e8b\u03c7]",
                    y: "[y\xdd\xfd\u1ef2\u1ef3\u0176\u0177\u0178\xff\u1ef8\u1ef9\u1e8e\u1e8f\u1ef4\u1ef5\u024e\u024f\u01b3\u01b4]",
                    z: "[z\u0179\u017a\u1e90\u1e91\u017d\u017e\u017b\u017c\u1e92\u1e93\u1e94\u1e95\u01b5\u01b6]"
                },
                l = function() {
                    var t, e, n, i, o = "",
                        r = {};
                    for (n in a)
                        if (a.hasOwnProperty(n))
                            for (o += i = a[n].substring(2, a[n].length - 1), t = 0, e = i.length; t < e; t++) r[i.charAt(t)] = n;
                    var s = new RegExp("[" + o + "]", "g");
                    return function(t) {
                        return t.replace(s, function(t) {
                            return r[t]
                        }).toLowerCase()
                    }
                }();
            return t
        }),
        function(t, e) {
            "function" == typeof define && define.amd ? define("microplugin", e) : "object" == typeof exports ? module.exports = e() : t.MicroPlugin = e()
        }(this, function() {
            var t = {
                    mixin: function(t) {
                        t.plugins = {}, t.prototype.initializePlugins = function(t) {
                            var n, i, o, r = this,
                                s = [];
                            if (r.plugins = {
                                    names: [],
                                    settings: {},
                                    requested: {},
                                    loaded: {}
                                }, e.isArray(t))
                                for (n = 0, i = t.length; n < i; n++) "string" == typeof t[n] ? s.push(t[n]) : (r.plugins.settings[t[n].name] = t[n].options, s.push(t[n].name));
                            else if (t)
                                for (o in t) t.hasOwnProperty(o) && (r.plugins.settings[o] = t[o], s.push(o));
                            for (; s.length;) r.require(s.shift())
                        }, t.prototype.loadPlugin = function(e) {
                            var n = this,
                                i = n.plugins,
                                o = t.plugins[e];
                            if (!t.plugins.hasOwnProperty(e)) throw new Error('Unable to find "' + e + '" plugin');
                            i.requested[e] = !0, i.loaded[e] = o.fn.apply(n, [n.plugins.settings[e] || {}]), i.names.push(e)
                        }, t.prototype.require = function(t) {
                            var e = this,
                                n = e.plugins;
                            if (!e.plugins.loaded.hasOwnProperty(t)) {
                                if (n.requested[t]) throw new Error('Plugin has circular dependency ("' + t + '")');
                                e.loadPlugin(t)
                            }
                            return n.loaded[t]
                        }, t.define = function(e, n) {
                            t.plugins[e] = {
                                name: e,
                                fn: n
                            }
                        }
                    }
                },
                e = {
                    isArray: Array.isArray || function(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }
                };
            return t
        }),
        function(t, e) {
            "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], e) : "object" == typeof exports ? module.exports = e(require("jquery"), require("sifter"), require("microplugin")) : t.Selectize = e(t.jQuery, t.Sifter, t.MicroPlugin)
        }(this, function(t, e, n) {
            "use strict";
            var i = function(t, e) {
                if ("string" != typeof e || e.length) {
                    var n = "string" == typeof e ? new RegExp(e, "i") : e,
                        i = function(t) {
                            var e = 0;
                            if (3 === t.nodeType) {
                                var o = t.data.search(n);
                                if (o >= 0 && t.data.length > 0) {
                                    var r = t.data.match(n),
                                        s = document.createElement("span");
                                    s.className = "highlight";
                                    var a = t.splitText(o),
                                        l = (a.splitText(r[0].length), a.cloneNode(!0));
                                    s.appendChild(l), a.parentNode.replaceChild(s, a), e = 1
                                }
                            } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName))
                                for (var c = 0; c < t.childNodes.length; ++c) c += i(t.childNodes[c]);
                            return e
                        };
                    return t.each(function() {
                        i(this)
                    })
                }
            };
            t.fn.removeHighlight = function() {
                return this.find("span.highlight").each(function() {
                    this.parentNode.firstChild.nodeName;
                    var t = this.parentNode;
                    t.replaceChild(this.firstChild, this), t.normalize()
                }).end()
            };
            var o = function() {};
            o.prototype = {
                on: function(t, e) {
                    this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e)
                },
                off: function(t, e) {
                    var n = arguments.length;
                    return 0 === n ? delete this._events : 1 === n ? delete this._events[t] : (this._events = this._events || {}, void(t in this._events != 0 && this._events[t].splice(this._events[t].indexOf(e), 1)))
                },
                trigger: function(t) {
                    if (this._events = this._events || {}, t in this._events != 0)
                        for (var e = 0; e < this._events[t].length; e++) this._events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            }, o.mixin = function(t) {
                for (var e = ["on", "off", "trigger"], n = 0; n < e.length; n++) t.prototype[e[n]] = o.prototype[e[n]]
            };
            var r = /Mac/.test(navigator.userAgent),
                s = 65,
                a = 13,
                l = 27,
                c = 37,
                u = 38,
                h = 80,
                d = 39,
                p = 40,
                f = 78,
                g = 8,
                m = 46,
                v = 16,
                b = r ? 91 : 17,
                y = r ? 18 : 17,
                w = 9,
                _ = 1,
                x = 2,
                C = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
                k = function(t) {
                    return void 0 !== t
                },
                T = function(t) {
                    return null == t ? null : "boolean" == typeof t ? t ? "1" : "0" : t + ""
                },
                E = function(t) {
                    return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                },
                S = {
                    before: function(t, e, n) {
                        var i = t[e];
                        t[e] = function() {
                            return n.apply(t, arguments), i.apply(t, arguments)
                        }
                    },
                    after: function(t, e, n) {
                        var i = t[e];
                        t[e] = function() {
                            var e = i.apply(t, arguments);
                            return n.apply(t, arguments), e
                        }
                    }
                },
                $ = function(t) {
                    var e = !1;
                    return function() {
                        e || (e = !0, t.apply(this, arguments))
                    }
                },
                I = function(t, e) {
                    var n;
                    return function() {
                        var i = this,
                            o = arguments;
                        window.clearTimeout(n), n = window.setTimeout(function() {
                            t.apply(i, o)
                        }, e)
                    }
                },
                A = function(t, e, n) {
                    var i, o = t.trigger,
                        r = {};
                    for (i in t.trigger = function() {
                            var n = arguments[0];
                            return -1 === e.indexOf(n) ? o.apply(t, arguments) : void(r[n] = arguments)
                        }, n.apply(t, []), t.trigger = o, r) r.hasOwnProperty(i) && o.apply(t, r[i])
                },
                L = function(t, e, n, i) {
                    t.on(e, n, function(e) {
                        for (var n = e.target; n && n.parentNode !== t[0];) n = n.parentNode;
                        return e.currentTarget = n, i.apply(this, [e])
                    })
                },
                P = function(t) {
                    var e = {};
                    if ("selectionStart" in t) e.start = t.selectionStart, e.length = t.selectionEnd - e.start;
                    else if (document.selection) {
                        t.focus();
                        var n = document.selection.createRange(),
                            i = document.selection.createRange().text.length;
                        n.moveStart("character", -t.value.length), e.start = n.text.length - i, e.length = i
                    }
                    return e
                },
                O = function(t, e, n) {
                    var i, o, r = {};
                    if (n)
                        for (i = 0, o = n.length; i < o; i++) r[n[i]] = t.css(n[i]);
                    else r = t.css();
                    e.css(r)
                },
                N = function(e, n) {
                    if (!e) return 0;
                    var i = t("<test>").css({
                        position: "absolute",
                        top: -99999,
                        left: -99999,
                        width: "auto",
                        padding: 0,
                        whiteSpace: "pre"
                    }).text(e).appendTo("body");
                    O(n, i, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                    var o = i.width();
                    return i.remove(), o
                },
                R = function(t) {
                    var e = null,
                        n = function(n, i) {
                            var o, r, s, a, l, c, u, h;
                            i = i || {}, (n = n || window.event || {}).metaKey || n.altKey || (i.force || !1 !== t.data("grow")) && (o = t.val(), n.type && "keydown" === n.type.toLowerCase() && (s = (r = n.keyCode) >= 97 && r <= 122 || r >= 65 && r <= 90 || r >= 48 && r <= 57 || 32 === r, r === m || r === g ? (h = P(t[0])).length ? o = o.substring(0, h.start) + o.substring(h.start + h.length) : r === g && h.start ? o = o.substring(0, h.start - 1) + o.substring(h.start + 1) : r === m && "undefined" != typeof h.start && (o = o.substring(0, h.start) + o.substring(h.start + 1)) : s && (c = n.shiftKey, u = String.fromCharCode(n.keyCode), o += u = c ? u.toUpperCase() : u.toLowerCase())), a = t.attr("placeholder"), !o && a && (o = a), (l = N(o, t) + 4) !== e && (e = l, t.width(l), t.triggerHandler("resize")))
                        };
                    t.on("keydown keyup update blur", n), n()
                },
                D = function(t) {
                    var e = document.createElement("div");
                    return e.appendChild(t.cloneNode(!0)), e.innerHTML
                },
                B = function(t, e) {
                    e || (e = {});
                    var n = "Selectize";
                    console.error(n + ": " + t), e.explanation && (console.group && console.group(), console.error(e.explanation), console.group && console.groupEnd())
                },
                H = function(n, i) {
                    var o, r, s, a, l = this;
                    (a = n[0]).selectize = l;
                    var c = window.getComputedStyle && window.getComputedStyle(a, null);
                    if (s = (s = c ? c.getPropertyValue("direction") : a.currentStyle && a.currentStyle.direction) || n.parents("[dir]:first").attr("dir") || "", t.extend(l, {
                            order: 0,
                            settings: i,
                            $input: n,
                            tabIndex: n.attr("tabindex") || "",
                            tagType: "select" === a.tagName.toLowerCase() ? _ : x,
                            rtl: /rtl/i.test(s),
                            eventNS: ".selectize" + ++H.count,
                            highlightedValue: null,
                            isOpen: !1,
                            isDisabled: !1,
                            isRequired: n.is("[required]"),
                            isInvalid: !1,
                            isLocked: !1,
                            isFocused: !1,
                            isInputHidden: !1,
                            isSetup: !1,
                            isShiftDown: !1,
                            isCmdDown: !1,
                            isCtrlDown: !1,
                            ignoreFocus: !1,
                            ignoreBlur: !1,
                            ignoreHover: !1,
                            hasOptions: !1,
                            currentResults: null,
                            lastValue: "",
                            caretPos: 0,
                            loading: 0,
                            loadedSearches: {},
                            $activeOption: null,
                            $activeItems: [],
                            optgroups: {},
                            options: {},
                            userOptions: {},
                            items: [],
                            renderCache: {},
                            onSearchChange: null === i.loadThrottle ? l.onSearchChange : I(l.onSearchChange, i.loadThrottle)
                        }), l.sifter = new e(this.options, {
                            diacritics: i.diacritics
                        }), l.settings.options) {
                        for (o = 0, r = l.settings.options.length; o < r; o++) l.registerOption(l.settings.options[o]);
                        delete l.settings.options
                    }
                    if (l.settings.optgroups) {
                        for (o = 0, r = l.settings.optgroups.length; o < r; o++) l.registerOptionGroup(l.settings.optgroups[o]);
                        delete l.settings.optgroups
                    }
                    l.settings.mode = l.settings.mode || (1 === l.settings.maxItems ? "single" : "multi"), "boolean" != typeof l.settings.hideSelected && (l.settings.hideSelected = "multi" === l.settings.mode), l.initializePlugins(l.settings.plugins), l.setupCallbacks(), l.setupTemplates(), l.setup()
                };
            return o.mixin(H), void 0 !== n ? n.mixin(H) : B("Dependency MicroPlugin is missing", {
                explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'
            }), t.extend(H.prototype, {
                setup: function() {
                    var e, n, i, o, s, a, l, c, u, h, d = this,
                        p = d.settings,
                        f = d.eventNS,
                        g = t(window),
                        m = t(document),
                        w = d.$input;
                    if (l = d.settings.mode, c = w.attr("class") || "", e = t("<div>").addClass(p.wrapperClass).addClass(c).addClass(l), n = t("<div>").addClass(p.inputClass).addClass("items").appendTo(e), i = t('<input type="text" autocomplete="off" />').appendTo(n).attr("tabindex", w.is(":disabled") ? "-1" : d.tabIndex), a = t(p.dropdownParent || e), o = t("<div>").addClass(p.dropdownClass).addClass(l).hide().appendTo(a), s = t("<div>").addClass(p.dropdownContentClass).appendTo(o), (h = w.attr("id")) && (i.attr("id", h + "-selectized"), t("label[for='" + h + "']").attr("for", h + "-selectized")), d.settings.copyClassesToDropdown && o.addClass(c), e.css({
                            width: w[0].style.width
                        }), d.plugins.names.length && (u = "plugin-" + d.plugins.names.join(" plugin-"), e.addClass(u), o.addClass(u)), (null === p.maxItems || p.maxItems > 1) && d.tagType === _ && w.attr("multiple", "multiple"), d.settings.placeholder && i.attr("placeholder", p.placeholder), !d.settings.splitOn && d.settings.delimiter) {
                        var x = d.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                        d.settings.splitOn = new RegExp("\\s*" + x + "+\\s*")
                    }
                    w.attr("autocorrect") && i.attr("autocorrect", w.attr("autocorrect")), w.attr("autocapitalize") && i.attr("autocapitalize", w.attr("autocapitalize")), d.$wrapper = e, d.$control = n, d.$control_input = i, d.$dropdown = o, d.$dropdown_content = s, o.on("mouseenter", "[data-selectable]", function() {
                        return d.onOptionHover.apply(d, arguments)
                    }), o.on("mousedown click", "[data-selectable]", function() {
                        return d.onOptionSelect.apply(d, arguments)
                    }), L(n, "mousedown", "*:not(input)", function() {
                        return d.onItemSelect.apply(d, arguments)
                    }), R(i), n.on({
                        mousedown: function() {
                            return d.onMouseDown.apply(d, arguments)
                        },
                        click: function() {
                            return d.onClick.apply(d, arguments)
                        }
                    }), i.on({
                        mousedown: function(t) {
                            t.stopPropagation()
                        },
                        keydown: function() {
                            return d.onKeyDown.apply(d, arguments)
                        },
                        keyup: function() {
                            return d.onKeyUp.apply(d, arguments)
                        },
                        keypress: function() {
                            return d.onKeyPress.apply(d, arguments)
                        },
                        resize: function() {
                            d.positionDropdown.apply(d, [])
                        },
                        blur: function() {
                            return d.onBlur.apply(d, arguments)
                        },
                        focus: function() {
                            return d.ignoreBlur = !1, d.onFocus.apply(d, arguments)
                        },
                        paste: function() {
                            return d.onPaste.apply(d, arguments)
                        }
                    }), m.on("keydown" + f, function(t) {
                        d.isCmdDown = t[r ? "metaKey" : "ctrlKey"], d.isCtrlDown = t[r ? "altKey" : "ctrlKey"], d.isShiftDown = t.shiftKey
                    }), m.on("keyup" + f, function(t) {
                        t.keyCode === y && (d.isCtrlDown = !1), t.keyCode === v && (d.isShiftDown = !1), t.keyCode === b && (d.isCmdDown = !1)
                    }), m.on("mousedown" + f, function(t) {
                        if (d.isFocused) {
                            if (t.target === d.$dropdown[0] || t.target.parentNode === d.$dropdown[0]) return !1;
                            d.$control.has(t.target).length || t.target === d.$control[0] || d.blur(t.target)
                        }
                    }), g.on(["scroll" + f, "resize" + f].join(" "), function() {
                        d.isOpen && d.positionDropdown.apply(d, arguments)
                    }), g.on("mousemove" + f, function() {
                        d.ignoreHover = !1
                    }), this.revertSettings = {
                        $children: w.children().detach(),
                        tabindex: w.attr("tabindex")
                    }, w.attr("tabindex", -1).hide().after(d.$wrapper), t.isArray(p.items) && (d.setValue(p.items), delete p.items), C && w.on("invalid" + f, function(t) {
                        t.preventDefault(), d.isInvalid = !0, d.refreshState()
                    }), d.updateOriginalInput(), d.refreshItems(), d.refreshState(), d.updatePlaceholder(), d.isSetup = !0, w.is(":disabled") && d.disable(), d.on("change", this.onChange), w.data("selectize", d), w.addClass("selectized"), d.trigger("initialize"), !0 === p.preload && d.onSearchChange("")
                },
                setupTemplates: function() {
                    var e = this,
                        n = e.settings.labelField,
                        i = e.settings.optgroupLabelField,
                        o = {
                            optgroup: function(t) {
                                return '<div class="optgroup">' + t.html + "</div>"
                            },
                            optgroup_header: function(t, e) {
                                return '<div class="optgroup-header">' + e(t[i]) + "</div>"
                            },
                            option: function(t, e) {
                                return '<div class="option">' + e(t[n]) + "</div>"
                            },
                            item: function(t, e) {
                                return '<div class="item">' + e(t[n]) + "</div>"
                            },
                            option_create: function(t, e) {
                                return '<div class="create">Add <strong>' + e(t.input) + "</strong>&hellip;</div>"
                            }
                        };
                    e.settings.render = t.extend({}, o, e.settings.render)
                },
                setupCallbacks: function() {
                    var t, e, n = {
                        initialize: "onInitialize",
                        change: "onChange",
                        item_add: "onItemAdd",
                        item_remove: "onItemRemove",
                        clear: "onClear",
                        option_add: "onOptionAdd",
                        option_remove: "onOptionRemove",
                        option_clear: "onOptionClear",
                        optgroup_add: "onOptionGroupAdd",
                        optgroup_remove: "onOptionGroupRemove",
                        optgroup_clear: "onOptionGroupClear",
                        dropdown_open: "onDropdownOpen",
                        dropdown_close: "onDropdownClose",
                        type: "onType",
                        load: "onLoad",
                        focus: "onFocus",
                        blur: "onBlur"
                    };
                    for (t in n) n.hasOwnProperty(t) && ((e = this.settings[n[t]]) && this.on(t, e))
                },
                onClick: function(t) {
                    var e = this;
                    e.isFocused || (e.focus(), t.preventDefault())
                },
                onMouseDown: function(e) {
                    var n = this,
                        i = e.isDefaultPrevented();
                    if (t(e.target), n.isFocused) {
                        if (e.target !== n.$control_input[0]) return "single" === n.settings.mode ? n.isOpen ? n.close() : n.open() : i || n.setActiveItem(null), !1
                    } else i || window.setTimeout(function() {
                        n.focus()
                    }, 0)
                },
                onChange: function() {
                    this.$input.trigger("change")
                },
                onPaste: function(e) {
                    var n = this;
                    return n.isFull() || n.isInputHidden || n.isLocked ? void e.preventDefault() : void(n.settings.splitOn && setTimeout(function() {
                        var e = n.$control_input.val();
                        if (e.match(n.settings.splitOn))
                            for (var i = t.trim(e).split(n.settings.splitOn), o = 0, r = i.length; o < r; o++) n.createItem(i[o])
                    }, 0))
                },
                onKeyPress: function(t) {
                    if (this.isLocked) return t && t.preventDefault();
                    var e = String.fromCharCode(t.keyCode || t.which);
                    return this.settings.create && "multi" === this.settings.mode && e === this.settings.delimiter ? (this.createItem(), t.preventDefault(), !1) : void 0
                },
                onKeyDown: function(t) {
                    var e = (t.target, this.$control_input[0], this);
                    if (!e.isLocked) {
                        switch (t.keyCode) {
                            case s:
                                if (e.isCmdDown) return void e.selectAll();
                                break;
                            case l:
                                return void(e.isOpen && (t.preventDefault(), t.stopPropagation(), e.close()));
                            case f:
                                if (!t.ctrlKey || t.altKey) break;
                            case p:
                                if (!e.isOpen && e.hasOptions) e.open();
                                else if (e.$activeOption) {
                                    e.ignoreHover = !0;
                                    var n = e.getAdjacentOption(e.$activeOption, 1);
                                    n.length && e.setActiveOption(n, !0, !0)
                                }
                                return void t.preventDefault();
                            case h:
                                if (!t.ctrlKey || t.altKey) break;
                            case u:
                                if (e.$activeOption) {
                                    e.ignoreHover = !0;
                                    var i = e.getAdjacentOption(e.$activeOption, -1);
                                    i.length && e.setActiveOption(i, !0, !0)
                                }
                                return void t.preventDefault();
                            case a:
                                return void(e.isOpen && e.$activeOption && (e.onOptionSelect({
                                    currentTarget: e.$activeOption
                                }), t.preventDefault()));
                            case c:
                                return void e.advanceSelection(-1, t);
                            case d:
                                return void e.advanceSelection(1, t);
                            case w:
                                return e.settings.selectOnTab && e.isOpen && e.$activeOption && (e.onOptionSelect({
                                    currentTarget: e.$activeOption
                                }), e.isFull() || t.preventDefault()), void(e.settings.create && e.createItem() && t.preventDefault());
                            case g:
                            case m:
                                return void e.deleteSelection(t)
                        }
                        return !e.isFull() && !e.isInputHidden || (r ? t.metaKey : t.ctrlKey) ? void 0 : void t.preventDefault()
                    }
                    t.keyCode !== w && t.preventDefault()
                },
                onKeyUp: function(t) {
                    var e = this;
                    if (e.isLocked) return t && t.preventDefault();
                    var n = e.$control_input.val() || "";
                    e.lastValue !== n && (e.lastValue = n, e.onSearchChange(n), e.refreshOptions(), e.trigger("type", n))
                },
                onSearchChange: function(t) {
                    var e = this,
                        n = e.settings.load;
                    n && (e.loadedSearches.hasOwnProperty(t) || (e.loadedSearches[t] = !0, e.load(function(i) {
                        n.apply(e, [t, i])
                    })))
                },
                onFocus: function(t) {
                    var e = this,
                        n = e.isFocused;
                    return e.isDisabled ? (e.blur(), t && t.preventDefault(), !1) : void(e.ignoreFocus || (e.isFocused = !0, "focus" === e.settings.preload && e.onSearchChange(""), n || e.trigger("focus"), e.$activeItems.length || (e.showInput(), e.setActiveItem(null), e.refreshOptions(!!e.settings.openOnFocus)), e.refreshState()))
                },
                onBlur: function(t, e) {
                    var n = this;
                    if (n.isFocused && (n.isFocused = !1, !n.ignoreFocus)) {
                        if (!n.ignoreBlur && document.activeElement === n.$dropdown_content[0]) return n.ignoreBlur = !0, void n.onFocus(t);
                        var i = function() {
                            n.close(), n.setTextboxValue(""), n.setActiveItem(null), n.setActiveOption(null), n.setCaret(n.items.length), n.refreshState(), e && e.focus && e.focus(), n.ignoreFocus = !1, n.trigger("blur")
                        };
                        n.ignoreFocus = !0, n.settings.create && n.settings.createOnBlur ? n.createItem(null, !1, i) : i()
                    }
                },
                onOptionHover: function(t) {
                    this.ignoreHover || this.setActiveOption(t.currentTarget, !1)
                },
                onOptionSelect: function(e) {
                    var n, i, o = this;
                    e.preventDefault && (e.preventDefault(), e.stopPropagation()), (i = t(e.currentTarget)).hasClass("create") ? o.createItem(null, function() {
                        o.settings.closeAfterSelect && o.close()
                    }) : void 0 !== (n = i.attr("data-value")) && (o.lastQuery = null, o.setTextboxValue(""), o.addItem(n), o.settings.closeAfterSelect ? o.close() : !o.settings.hideSelected && e.type && /mouse/.test(e.type) && o.setActiveOption(o.getOption(n)))
                },
                onItemSelect: function(t) {
                    var e = this;
                    e.isLocked || "multi" === e.settings.mode && (t.preventDefault(), e.setActiveItem(t.currentTarget, t))
                },
                load: function(t) {
                    var e = this,
                        n = e.$wrapper.addClass(e.settings.loadingClass);
                    e.loading++, t.apply(e, [function(t) {
                        e.loading = Math.max(e.loading - 1, 0), t && t.length && (e.addOption(t), e.refreshOptions(e.isFocused && !e.isInputHidden)), e.loading || n.removeClass(e.settings.loadingClass), e.trigger("load", t)
                    }])
                },
                setTextboxValue: function(t) {
                    var e = this.$control_input;
                    e.val() !== t && (e.val(t).triggerHandler("update"), this.lastValue = t)
                },
                getValue: function() {
                    return this.tagType === _ && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
                },
                setValue: function(t, e) {
                    A(this, e ? [] : ["change"], function() {
                        this.clear(e), this.addItems(t, e)
                    })
                },
                setActiveItem: function(e, n) {
                    var i, o, r, s, a, l, c, u, h = this;
                    if ("single" !== h.settings.mode) {
                        if (!(e = t(e)).length) return t(h.$activeItems).removeClass("active"), h.$activeItems = [], void(h.isFocused && h.showInput());
                        if ("mousedown" === (i = n && n.type.toLowerCase()) && h.isShiftDown && h.$activeItems.length) {
                            for (u = h.$control.children(".active:last"), (s = Array.prototype.indexOf.apply(h.$control[0].childNodes, [u[0]])) > (a = Array.prototype.indexOf.apply(h.$control[0].childNodes, [e[0]])) && (c = s, s = a, a = c), o = s; o <= a; o++) l = h.$control[0].childNodes[o], -1 === h.$activeItems.indexOf(l) && (t(l).addClass("active"), h.$activeItems.push(l));
                            n.preventDefault()
                        } else "mousedown" === i && h.isCtrlDown || "keydown" === i && this.isShiftDown ? e.hasClass("active") ? (r = h.$activeItems.indexOf(e[0]), h.$activeItems.splice(r, 1), e.removeClass("active")) : h.$activeItems.push(e.addClass("active")[0]) : (t(h.$activeItems).removeClass("active"), h.$activeItems = [e.addClass("active")[0]]);
                        h.hideInput(), this.isFocused || h.focus()
                    }
                },
                setActiveOption: function(e, n, i) {
                    var o, r, s, a, l, c = this;
                    c.$activeOption && c.$activeOption.removeClass("active"), c.$activeOption = null, (e = t(e)).length && (c.$activeOption = e.addClass("active"), !n && k(n) || (o = c.$dropdown_content.height(), r = c.$activeOption.outerHeight(!0), n = c.$dropdown_content.scrollTop() || 0, a = s = c.$activeOption.offset().top - c.$dropdown_content.offset().top + n, l = s - o + r, s + r > o + n ? c.$dropdown_content.stop().animate({
                        scrollTop: l
                    }, i ? c.settings.scrollDuration : 0) : s < n && c.$dropdown_content.stop().animate({
                        scrollTop: a
                    }, i ? c.settings.scrollDuration : 0)))
                },
                selectAll: function() {
                    var t = this;
                    "single" !== t.settings.mode && (t.$activeItems = Array.prototype.slice.apply(t.$control.children(":not(input)").addClass("active")), t.$activeItems.length && (t.hideInput(), t.close()), t.focus())
                },
                hideInput: function() {
                    var t = this;
                    t.setTextboxValue(""), t.$control_input.css({
                        opacity: 0,
                        position: "absolute",
                        left: t.rtl ? 1e4 : -1e4
                    }), t.isInputHidden = !0
                },
                showInput: function() {
                    this.$control_input.css({
                        opacity: 1,
                        position: "relative",
                        left: 0
                    }), this.isInputHidden = !1
                },
                focus: function() {
                    var t = this;
                    t.isDisabled || (t.ignoreFocus = !0, t.$control_input[0].focus(), window.setTimeout(function() {
                        t.ignoreFocus = !1, t.onFocus()
                    }, 0))
                },
                blur: function(t) {
                    this.$control_input[0].blur(), this.onBlur(null, t)
                },
                getScoreFunction: function(t) {
                    return this.sifter.getScoreFunction(t, this.getSearchOptions())
                },
                getSearchOptions: function() {
                    var t = this.settings,
                        e = t.sortField;
                    return "string" == typeof e && (e = [{
                        field: e
                    }]), {
                        fields: t.searchField,
                        conjunction: t.searchConjunction,
                        sort: e
                    }
                },
                search: function(e) {
                    var n, i, o, r = this,
                        s = r.settings,
                        a = this.getSearchOptions();
                    if (s.score && "function" != typeof(o = r.settings.score.apply(this, [e]))) throw new Error('Selectize "score" setting must be a function that returns a function');
                    if (e !== r.lastQuery ? (r.lastQuery = e, i = r.sifter.search(e, t.extend(a, {
                            score: o
                        })), r.currentResults = i) : i = t.extend(!0, {}, r.currentResults), s.hideSelected)
                        for (n = i.items.length - 1; n >= 0; n--) - 1 !== r.items.indexOf(T(i.items[n].id)) && i.items.splice(n, 1);
                    return i
                },
                refreshOptions: function(e) {
                    var n, o, r, s, a, l, c, u, h, d, p, f, g, m, v, b;
                    void 0 === e && (e = !0);
                    var y = this,
                        w = t.trim(y.$control_input.val()),
                        _ = y.search(w),
                        x = y.$dropdown_content,
                        C = y.$activeOption && T(y.$activeOption.attr("data-value"));
                    for (s = _.items.length, "number" == typeof y.settings.maxOptions && (s = Math.min(s, y.settings.maxOptions)), a = {}, l = [], n = 0; n < s; n++)
                        for (c = y.options[_.items[n].id], u = y.render("option", c), h = c[y.settings.optgroupField] || "", o = 0, r = (d = t.isArray(h) ? h : [h]) && d.length; o < r; o++) h = d[o], y.optgroups.hasOwnProperty(h) || (h = ""), a.hasOwnProperty(h) || (a[h] = document.createDocumentFragment(), l.push(h)), a[h].appendChild(u);
                    for (this.settings.lockOptgroupOrder && l.sort(function(t, e) {
                            return (y.optgroups[t].$order || 0) - (y.optgroups[e].$order || 0)
                        }), p = document.createDocumentFragment(), n = 0, s = l.length; n < s; n++) h = l[n], y.optgroups.hasOwnProperty(h) && a[h].childNodes.length ? ((f = document.createDocumentFragment()).appendChild(y.render("optgroup_header", y.optgroups[h])), f.appendChild(a[h]), p.appendChild(y.render("optgroup", t.extend({}, y.optgroups[h], {
                        html: D(f),
                        dom: f
                    })))) : p.appendChild(a[h]);
                    if (x.html(p), y.settings.highlight && _.query.length && _.tokens.length)
                        for (x.removeHighlight(), n = 0, s = _.tokens.length; n < s; n++) i(x, _.tokens[n].regex);
                    if (!y.settings.hideSelected)
                        for (n = 0, s = y.items.length; n < s; n++) y.getOption(y.items[n]).addClass("selected");
                    (g = y.canCreate(w)) && (x.prepend(y.render("option_create", {
                        input: w
                    })), b = t(x[0].childNodes[0])), y.hasOptions = _.items.length > 0 || g, y.hasOptions ? (_.items.length > 0 ? ((v = C && y.getOption(C)) && v.length ? m = v : "single" === y.settings.mode && y.items.length && (m = y.getOption(y.items[0])), m && m.length || (m = b && !y.settings.addPrecedence ? y.getAdjacentOption(b, 1) : x.find("[data-selectable]:first"))) : m = b, y.setActiveOption(m), e && !y.isOpen && y.open()) : (y.setActiveOption(null), e && y.isOpen && y.close())
                },
                addOption: function(e) {
                    var n, i, o, r = this;
                    if (t.isArray(e))
                        for (n = 0, i = e.length; n < i; n++) r.addOption(e[n]);
                    else(o = r.registerOption(e)) && (r.userOptions[o] = !0, r.lastQuery = null, r.trigger("option_add", o, e))
                },
                registerOption: function(t) {
                    var e = T(t[this.settings.valueField]);
                    return null != e && !this.options.hasOwnProperty(e) && (t.$order = t.$order || ++this.order, this.options[e] = t, e)
                },
                registerOptionGroup: function(t) {
                    var e = T(t[this.settings.optgroupValueField]);
                    return !!e && (t.$order = t.$order || ++this.order, this.optgroups[e] = t, e)
                },
                addOptionGroup: function(t, e) {
                    e[this.settings.optgroupValueField] = t, (t = this.registerOptionGroup(e)) && this.trigger("optgroup_add", t, e)
                },
                removeOptionGroup: function(t) {
                    this.optgroups.hasOwnProperty(t) && (delete this.optgroups[t], this.renderCache = {}, this.trigger("optgroup_remove", t))
                },
                clearOptionGroups: function() {
                    this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
                },
                updateOption: function(e, n) {
                    var i, o, r, s, a, l, c, u = this;
                    if (e = T(e), r = T(n[u.settings.valueField]), null !== e && u.options.hasOwnProperty(e)) {
                        if ("string" != typeof r) throw new Error("Value must be set in option data");
                        c = u.options[e].$order, r !== e && (delete u.options[e], -1 !== (s = u.items.indexOf(e)) && u.items.splice(s, 1, r)), n.$order = n.$order || c, u.options[r] = n, a = u.renderCache.item, l = u.renderCache.option, a && (delete a[e], delete a[r]), l && (delete l[e], delete l[r]), -1 !== u.items.indexOf(r) && (i = u.getItem(e), o = t(u.render("item", n)), i.hasClass("active") && o.addClass("active"), i.replaceWith(o)), u.lastQuery = null, u.isOpen && u.refreshOptions(!1)
                    }
                },
                removeOption: function(t, e) {
                    var n = this;
                    t = T(t);
                    var i = n.renderCache.item,
                        o = n.renderCache.option;
                    i && delete i[t], o && delete o[t], delete n.userOptions[t], delete n.options[t], n.lastQuery = null, n.trigger("option_remove", t), n.removeItem(t, e)
                },
                clearOptions: function() {
                    var t = this;
                    t.loadedSearches = {}, t.userOptions = {}, t.renderCache = {}, t.options = t.sifter.items = {}, t.lastQuery = null, t.trigger("option_clear"), t.clear()
                },
                getOption: function(t) {
                    return this.getElementWithValue(t, this.$dropdown_content.find("[data-selectable]"))
                },
                getAdjacentOption: function(e, n) {
                    var i = this.$dropdown.find("[data-selectable]"),
                        o = i.index(e) + n;
                    return o >= 0 && o < i.length ? i.eq(o) : t()
                },
                getElementWithValue: function(e, n) {
                    if (null != (e = T(e)))
                        for (var i = 0, o = n.length; i < o; i++)
                            if (n[i].getAttribute("data-value") === e) return t(n[i]);
                    return t()
                },
                getItem: function(t) {
                    return this.getElementWithValue(t, this.$control.children())
                },
                addItems: function(e, n) {
                    for (var i = t.isArray(e) ? e : [e], o = 0, r = i.length; o < r; o++) this.isPending = o < r - 1, this.addItem(i[o], n)
                },
                addItem: function(e, n) {
                    A(this, n ? [] : ["change"], function() {
                        var i, o, r, s, a, l = this,
                            c = l.settings.mode;
                        return e = T(e), -1 !== l.items.indexOf(e) ? void("single" === c && l.close()) : void(l.options.hasOwnProperty(e) && ("single" === c && l.clear(n), "multi" === c && l.isFull() || (i = t(l.render("item", l.options[e])), a = l.isFull(), l.items.splice(l.caretPos, 0, e), l.insertAtCaret(i), (!l.isPending || !a && l.isFull()) && l.refreshState(), l.isSetup && (r = l.$dropdown_content.find("[data-selectable]"), l.isPending || (o = l.getOption(e), s = l.getAdjacentOption(o, 1).attr("data-value"), l.refreshOptions(l.isFocused && "single" !== c), s && l.setActiveOption(l.getOption(s))), !r.length || l.isFull() ? l.close() : l.positionDropdown(), l.updatePlaceholder(), l.trigger("item_add", e, i), l.updateOriginalInput({
                            silent: n
                        })))))
                    })
                },
                removeItem: function(e, n) {
                    var i, o, r, s = this;
                    i = e instanceof t ? e : s.getItem(e), e = T(i.attr("data-value")), -1 !== (o = s.items.indexOf(e)) && (i.remove(), i.hasClass("active") && (r = s.$activeItems.indexOf(i[0]), s.$activeItems.splice(r, 1)), s.items.splice(o, 1), s.lastQuery = null, !s.settings.persist && s.userOptions.hasOwnProperty(e) && s.removeOption(e, n), o < s.caretPos && s.setCaret(s.caretPos - 1), s.refreshState(), s.updatePlaceholder(), s.updateOriginalInput({
                        silent: n
                    }), s.positionDropdown(), s.trigger("item_remove", e, i))
                },
                createItem: function(e, n) {
                    var i = this,
                        o = i.caretPos;
                    e = e || t.trim(i.$control_input.val() || "");
                    var r = arguments[arguments.length - 1];
                    if ("function" != typeof r && (r = function() {}), "boolean" != typeof n && (n = !0), !i.canCreate(e)) return r(), !1;
                    i.lock();
                    var s = "function" == typeof i.settings.create ? this.settings.create : function(t) {
                            var e = {};
                            return e[i.settings.labelField] = t, e[i.settings.valueField] = t, e
                        },
                        a = $(function(t) {
                            if (i.unlock(), !t || "object" != typeof t) return r();
                            var e = T(t[i.settings.valueField]);
                            return "string" != typeof e ? r() : (i.setTextboxValue(""), i.addOption(t), i.setCaret(o), i.addItem(e), i.refreshOptions(n && "single" !== i.settings.mode), void r(t))
                        }),
                        l = s.apply(this, [e, a]);
                    return void 0 !== l && a(l), !0
                },
                refreshItems: function() {
                    this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
                },
                refreshState: function() {
                    this.refreshValidityState(), this.refreshClasses()
                },
                refreshValidityState: function() {
                    if (!this.isRequired) return !1;
                    var t = !this.items.length;
                    this.isInvalid = t, this.$control_input.prop("required", t), this.$input.prop("required", !t)
                },
                refreshClasses: function() {
                    var e = this,
                        n = e.isFull(),
                        i = e.isLocked;
                    e.$wrapper.toggleClass("rtl", e.rtl), e.$control.toggleClass("focus", e.isFocused).toggleClass("disabled", e.isDisabled).toggleClass("required", e.isRequired).toggleClass("invalid", e.isInvalid).toggleClass("locked", i).toggleClass("full", n).toggleClass("not-full", !n).toggleClass("input-active", e.isFocused && !e.isInputHidden).toggleClass("dropdown-active", e.isOpen).toggleClass("has-options", !t.isEmptyObject(e.options)).toggleClass("has-items", e.items.length > 0), e.$control_input.data("grow", !n && !i)
                },
                isFull: function() {
                    return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
                },
                updateOriginalInput: function(t) {
                    var e, n, i, o, r = this;
                    if (t = t || {}, r.tagType === _) {
                        for (i = [], e = 0, n = r.items.length; e < n; e++) o = r.options[r.items[e]][r.settings.labelField] || "", i.push('<option value="' + E(r.items[e]) + '" selected="selected">' + E(o) + "</option>");
                        i.length || this.$input.attr("multiple") || i.push('<option value="" selected="selected"></option>'), r.$input.html(i.join(""))
                    } else r.$input.val(r.getValue()), r.$input.attr("value", r.$input.val());
                    r.isSetup && (t.silent || r.trigger("change", r.$input.val()))
                },
                updatePlaceholder: function() {
                    if (this.settings.placeholder) {
                        var t = this.$control_input;
                        this.items.length ? t.removeAttr("placeholder") : t.attr("placeholder", this.settings.placeholder), t.triggerHandler("update", {
                            force: !0
                        })
                    }
                },
                open: function() {
                    var t = this;
                    t.isLocked || t.isOpen || "multi" === t.settings.mode && t.isFull() || (t.focus(), t.isOpen = !0, t.refreshState(), t.$dropdown.css({
                        visibility: "hidden",
                        display: "block"
                    }), t.positionDropdown(), t.$dropdown.css({
                        visibility: "visible"
                    }), t.trigger("dropdown_open", t.$dropdown))
                },
                close: function() {
                    var t = this,
                        e = t.isOpen;
                    "single" === t.settings.mode && t.items.length && (t.hideInput(), t.$control_input.blur()), t.isOpen = !1, t.$dropdown.hide(), t.setActiveOption(null), t.refreshState(), e && t.trigger("dropdown_close", t.$dropdown)
                },
                positionDropdown: function() {
                    var t = this.$control,
                        e = "body" === this.settings.dropdownParent ? t.offset() : t.position();
                    e.top += t.outerHeight(!0), this.$dropdown.css({
                        width: t.outerWidth(),
                        top: e.top,
                        left: e.left
                    })
                },
                clear: function(t) {
                    var e = this;
                    e.items.length && (e.$control.children(":not(input)").remove(), e.items = [], e.lastQuery = null, e.setCaret(0), e.setActiveItem(null), e.updatePlaceholder(), e.updateOriginalInput({
                        silent: t
                    }), e.refreshState(), e.showInput(), e.trigger("clear"))
                },
                insertAtCaret: function(e) {
                    var n = Math.min(this.caretPos, this.items.length);
                    0 === n ? this.$control.prepend(e) : t(this.$control[0].childNodes[n]).before(e), this.setCaret(n + 1)
                },
                deleteSelection: function(e) {
                    var n, i, o, r, s, a, l, c, u, h = this;
                    if (o = e && e.keyCode === g ? -1 : 1, r = P(h.$control_input[0]), h.$activeOption && !h.settings.hideSelected && (l = h.getAdjacentOption(h.$activeOption, -1).attr("data-value")), s = [], h.$activeItems.length) {
                        for (u = h.$control.children(".active:" + (o > 0 ? "last" : "first")), a = h.$control.children(":not(input)").index(u), o > 0 && a++, n = 0, i = h.$activeItems.length; n < i; n++) s.push(t(h.$activeItems[n]).attr("data-value"));
                        e && (e.preventDefault(), e.stopPropagation())
                    } else(h.isFocused || "single" === h.settings.mode) && h.items.length && (o < 0 && 0 === r.start && 0 === r.length ? s.push(h.items[h.caretPos - 1]) : o > 0 && r.start === h.$control_input.val().length && s.push(h.items[h.caretPos]));
                    if (!s.length || "function" == typeof h.settings.onDelete && !1 === h.settings.onDelete.apply(h, [s])) return !1;
                    for (void 0 !== a && h.setCaret(a); s.length;) h.removeItem(s.pop());
                    return h.showInput(), h.positionDropdown(), h.refreshOptions(!0), l && ((c = h.getOption(l)).length && h.setActiveOption(c)), !0
                },
                advanceSelection: function(t, e) {
                    var n, i, o, r, s, a = this;
                    0 !== t && (a.rtl && (t *= -1), n = t > 0 ? "last" : "first", i = P(a.$control_input[0]),
                        a.isFocused && !a.isInputHidden ? (r = a.$control_input.val().length, (t < 0 ? 0 === i.start && 0 === i.length : i.start === r) && !r && a.advanceCaret(t, e)) : (s = a.$control.children(".active:" + n)).length && (o = a.$control.children(":not(input)").index(s), a.setActiveItem(null), a.setCaret(t > 0 ? o + 1 : o)))
                },
                advanceCaret: function(t, e) {
                    var n, i, o = this;
                    0 !== t && (n = t > 0 ? "next" : "prev", o.isShiftDown ? (i = o.$control_input[n]()).length && (o.hideInput(), o.setActiveItem(i), e && e.preventDefault()) : o.setCaret(o.caretPos + t))
                },
                setCaret: function(e) {
                    var n, i, o, r, s = this;
                    if (e = "single" === s.settings.mode ? s.items.length : Math.max(0, Math.min(s.items.length, e)), !s.isPending)
                        for (n = 0, i = (o = s.$control.children(":not(input)")).length; n < i; n++) r = t(o[n]).detach(), n < e ? s.$control_input.before(r) : s.$control.append(r);
                    s.caretPos = e
                },
                lock: function() {
                    this.close(), this.isLocked = !0, this.refreshState()
                },
                unlock: function() {
                    this.isLocked = !1, this.refreshState()
                },
                disable: function() {
                    var t = this;
                    t.$input.prop("disabled", !0), t.$control_input.prop("disabled", !0).prop("tabindex", -1), t.isDisabled = !0, t.lock()
                },
                enable: function() {
                    var t = this;
                    t.$input.prop("disabled", !1), t.$control_input.prop("disabled", !1).prop("tabindex", t.tabIndex), t.isDisabled = !1, t.unlock()
                },
                destroy: function() {
                    var e = this,
                        n = e.eventNS,
                        i = e.revertSettings;
                    e.trigger("destroy"), e.off(), e.$wrapper.remove(), e.$dropdown.remove(), e.$input.html("").append(i.$children).removeAttr("tabindex").removeClass("selectized").attr({
                        tabindex: i.tabindex
                    }).show(), e.$control_input.removeData("grow"), e.$input.removeData("selectize"), t(window).off(n), t(document).off(n), t(document.body).off(n), delete e.$input[0].selectize
                },
                render: function(e, n) {
                    var i, o, r = "",
                        s = !1,
                        a = this;
                    return "option" !== e && "item" !== e || (s = !!(i = T(n[a.settings.valueField]))), s && (k(a.renderCache[e]) || (a.renderCache[e] = {}), a.renderCache[e].hasOwnProperty(i)) ? a.renderCache[e][i] : (r = t(a.settings.render[e].apply(this, [n, E])), "option" === e || "option_create" === e ? r.attr("data-selectable", "") : "optgroup" === e && (o = n[a.settings.optgroupValueField] || "", r.attr("data-group", o)), "option" !== e && "item" !== e || r.attr("data-value", i || ""), s && (a.renderCache[e][i] = r[0]), r[0])
                },
                clearCache: function(t) {
                    var e = this;
                    void 0 === t ? e.renderCache = {} : delete e.renderCache[t]
                },
                canCreate: function(t) {
                    var e = this;
                    if (!e.settings.create) return !1;
                    var n = e.settings.createFilter;
                    return t.length && ("function" != typeof n || n.apply(e, [t])) && ("string" != typeof n || new RegExp(n).test(t)) && (!(n instanceof RegExp) || n.test(t))
                }
            }), H.count = 0, H.defaults = {
                options: [],
                optgroups: [],
                plugins: [],
                delimiter: ",",
                splitOn: null,
                persist: !0,
                diacritics: !0,
                create: !1,
                createOnBlur: !1,
                createFilter: null,
                highlight: !0,
                openOnFocus: !0,
                maxOptions: 1e3,
                maxItems: null,
                hideSelected: null,
                addPrecedence: !1,
                selectOnTab: !1,
                preload: !1,
                allowEmptyOption: !1,
                closeAfterSelect: !1,
                scrollDuration: 60,
                loadThrottle: 300,
                loadingClass: "loading",
                dataAttr: "data-data",
                optgroupField: "optgroup",
                valueField: "value",
                labelField: "text",
                optgroupLabelField: "label",
                optgroupValueField: "value",
                lockOptgroupOrder: !1,
                sortField: "$order",
                searchField: ["text"],
                searchConjunction: "and",
                mode: null,
                wrapperClass: "selectize-control",
                inputClass: "selectize-input",
                dropdownClass: "selectize-dropdown",
                dropdownContentClass: "selectize-dropdown-content",
                dropdownParent: null,
                copyClassesToDropdown: !0,
                render: {}
            }, t.fn.selectize = function(e) {
                var n = t.fn.selectize.defaults,
                    i = t.extend({}, n, e),
                    o = i.dataAttr,
                    r = i.labelField,
                    s = i.valueField,
                    a = i.optgroupField,
                    l = i.optgroupLabelField,
                    c = i.optgroupValueField,
                    u = function(e, n) {
                        var a, l, c, u, h = e.attr(o);
                        if (h)
                            for (n.options = JSON.parse(h), a = 0, l = n.options.length; a < l; a++) n.items.push(n.options[a][s]);
                        else {
                            var d = t.trim(e.val() || "");
                            if (!i.allowEmptyOption && !d.length) return;
                            for (a = 0, l = (c = d.split(i.delimiter)).length; a < l; a++)(u = {})[r] = c[a], u[s] = c[a], n.options.push(u);
                            n.items = c
                        }
                    },
                    h = function(e, n) {
                        var u, h, d, p, f = n.options,
                            g = {},
                            m = function(t) {
                                var e = o && t.attr(o);
                                return "string" == typeof e && e.length ? JSON.parse(e) : null
                            },
                            v = function(e, o) {
                                e = t(e);
                                var l = T(e.val());
                                if (l || i.allowEmptyOption)
                                    if (g.hasOwnProperty(l)) {
                                        if (o) {
                                            var c = g[l][a];
                                            c ? t.isArray(c) ? c.push(o) : g[l][a] = [c, o] : g[l][a] = o
                                        }
                                    } else {
                                        var u = m(e) || {};
                                        u[r] = u[r] || e.text(), u[s] = u[s] || l, u[a] = u[a] || o, g[l] = u, f.push(u), e.is(":selected") && n.items.push(l)
                                    }
                            },
                            b = function(e) {
                                var i, o, r, s, a;
                                for ((r = (e = t(e)).attr("label")) && ((s = m(e) || {})[l] = r, s[c] = r, n.optgroups.push(s)), i = 0, o = (a = t("option", e)).length; i < o; i++) v(a[i], r)
                            };
                        for (n.maxItems = e.attr("multiple") ? null : 1, u = 0, h = (p = e.children()).length; u < h; u++) "optgroup" === (d = p[u].tagName.toLowerCase()) ? b(p[u]) : "option" === d && v(p[u])
                    };
                return this.each(function() {
                    if (!this.selectize) {
                        var o = t(this),
                            r = this.tagName.toLowerCase(),
                            s = o.attr("placeholder") || o.attr("data-placeholder");
                        s || i.allowEmptyOption || (s = o.children('option[value=""]').text());
                        var a = {
                            placeholder: s,
                            options: [],
                            optgroups: [],
                            items: []
                        };
                        "select" === r ? h(o, a) : u(o, a), new H(o, t.extend(!0, {}, n, a, e))
                    }
                })
            }, t.fn.selectize.defaults = H.defaults, t.fn.selectize.support = {
                validity: C
            }, H.define("drag_drop", function() {
                if (!t.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
                if ("multi" === this.settings.mode) {
                    var e = this;
                    e.lock = function() {
                        var t = e.lock;
                        return function() {
                            var n = e.$control.data("sortable");
                            return n && n.disable(), t.apply(e, arguments)
                        }
                    }(), e.unlock = function() {
                        var t = e.unlock;
                        return function() {
                            var n = e.$control.data("sortable");
                            return n && n.enable(), t.apply(e, arguments)
                        }
                    }(), e.setup = function() {
                        var n = e.setup;
                        return function() {
                            n.apply(this, arguments);
                            var i = e.$control.sortable({
                                items: "[data-value]",
                                forcePlaceholderSize: !0,
                                disabled: e.isLocked,
                                start: function(t, e) {
                                    e.placeholder.css("width", e.helper.css("width")), i.css({
                                        overflow: "visible"
                                    })
                                },
                                stop: function() {
                                    i.css({
                                        overflow: "hidden"
                                    });
                                    var n = e.$activeItems ? e.$activeItems.slice() : null,
                                        o = [];
                                    i.children("[data-value]").each(function() {
                                        o.push(t(this).attr("data-value"))
                                    }), e.setValue(o), e.setActiveItem(n)
                                }
                            })
                        }
                    }()
                }
            }), H.define("dropdown_header", function(e) {
                var n, i = this;
                e = t.extend({
                    title: "Untitled",
                    headerClass: "selectize-dropdown-header",
                    titleRowClass: "selectize-dropdown-header-title",
                    labelClass: "selectize-dropdown-header-label",
                    closeClass: "selectize-dropdown-header-close",
                    html: function(t) {
                        return '<div class="' + t.headerClass + '"><div class="' + t.titleRowClass + '"><span class="' + t.labelClass + '">' + t.title + '</span><a href="javascript:void(0)" class="' + t.closeClass + '">&times;</a></div></div>'
                    }
                }, e), i.setup = (n = i.setup, function() {
                    n.apply(i, arguments), i.$dropdown_header = t(e.html(e)), i.$dropdown.prepend(i.$dropdown_header)
                })
            }), H.define("optgroup_columns", function(e) {
                var n = this;
                e = t.extend({
                    equalizeWidth: !0,
                    equalizeHeight: !0
                }, e), this.getAdjacentOption = function(e, n) {
                    var i = e.closest("[data-group]").find("[data-selectable]"),
                        o = i.index(e) + n;
                    return o >= 0 && o < i.length ? i.eq(o) : t()
                }, this.onKeyDown = function() {
                    var t = n.onKeyDown;
                    return function(e) {
                        var i, o, r, s;
                        return !this.isOpen || e.keyCode !== c && e.keyCode !== d ? t.apply(this, arguments) : (n.ignoreHover = !0, i = (s = this.$activeOption.closest("[data-group]")).find("[data-selectable]").index(this.$activeOption), void((o = (r = (s = e.keyCode === c ? s.prev("[data-group]") : s.next("[data-group]")).find("[data-selectable]")).eq(Math.min(r.length - 1, i))).length && this.setActiveOption(o)))
                    }
                }();
                var i = function() {
                        var t, e = i.width,
                            n = document;
                        return void 0 === e && ((t = n.createElement("div")).innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', t = t.firstChild, n.body.appendChild(t), e = i.width = t.offsetWidth - t.clientWidth, n.body.removeChild(t)), e
                    },
                    o = function() {
                        var o, r, s, a, l, c, u;
                        if ((r = (u = t("[data-group]", n.$dropdown_content)).length) && n.$dropdown_content.width()) {
                            if (e.equalizeHeight) {
                                for (s = 0, o = 0; o < r; o++) s = Math.max(s, u.eq(o).height());
                                u.css({
                                    height: s
                                })
                            }
                            e.equalizeWidth && (c = n.$dropdown_content.innerWidth() - i(), a = Math.round(c / r), u.css({
                                width: a
                            }), r > 1 && (l = c - a * (r - 1), u.eq(r - 1).css({
                                width: l
                            })))
                        }
                    };
                (e.equalizeHeight || e.equalizeWidth) && (S.after(this, "positionDropdown", o), S.after(this, "refreshOptions", o))
            }), H.define("remove_button", function(e) {
                e = t.extend({
                    label: "&times;",
                    title: "Remove",
                    className: "remove",
                    append: !0
                }, e);
                var n = function(e, n) {
                        n.className = "remove-single";
                        var i, o = e,
                            r = '<a href="javascript:void(0)" class="' + n.className + '" tabindex="-1" title="' + E(n.title) + '">' + n.label + "</a>",
                            s = function(t, e) {
                                return t + e
                            };
                        e.setup = (i = o.setup, function() {
                            if (n.append) {
                                var a = t(o.$input.context).attr("id"),
                                    l = (t("#" + a), o.settings.render.item);
                                o.settings.render.item = function() {
                                    return s(l.apply(e, arguments), r)
                                }
                            }
                            i.apply(e, arguments), e.$control.on("click", "." + n.className, function(t) {
                                t.preventDefault(), o.isLocked || o.clear()
                            })
                        })
                    },
                    i = function(e, n) {
                        var i, o = e,
                            r = '<a href="javascript:void(0)" class="' + n.className + '" tabindex="-1" title="' + E(n.title) + '">' + n.label + "</a>",
                            s = function(t, e) {
                                var n = t.search(/(<\/[^>]+>\s*)$/);
                                return t.substring(0, n) + e + t.substring(n)
                            };
                        e.setup = (i = o.setup, function() {
                            if (n.append) {
                                var a = o.settings.render.item;
                                o.settings.render.item = function() {
                                    return s(a.apply(e, arguments), r)
                                }
                            }
                            i.apply(e, arguments), e.$control.on("click", "." + n.className, function(e) {
                                if (e.preventDefault(), !o.isLocked) {
                                    var n = t(e.currentTarget).parent();
                                    o.setActiveItem(n), o.deleteSelection() && o.setCaret(o.items.length)
                                }
                            })
                        })
                    };
                return "single" === this.settings.mode ? void n(this, e) : void i(this, e)
            }), H.define("restore_on_backspace", function(t) {
                var e, n = this;
                t.text = t.text || function(t) {
                    return t[this.settings.labelField]
                }, this.onKeyDown = (e = n.onKeyDown, function(n) {
                    var i, o;
                    return n.keyCode === g && "" === this.$control_input.val() && !this.$activeItems.length && (i = this.caretPos - 1) >= 0 && i < this.items.length ? (o = this.options[this.items[i]], this.deleteSelection(n) && (this.setTextboxValue(t.text.apply(this, [o])), this.refreshOptions(!0)), void n.preventDefault()) : e.apply(this, arguments)
                })
            }), H
        }), Selectize.define("disable_options", function(t) {
            var e, n = this;
            t = $.extend({
                disableOptions: []
            }, t), n.onFocus = (e = n.onFocus, function() {
                e.apply(this, arguments), $.each(t.disableOptions, function(t, e) {
                    n.$dropdown_content.find('[data-value="' + String(e) + '"]').addClass("option-disabled")
                })
            }), n.onOptionSelect = function() {
                var t = n.onOptionSelect;
                return function(e) {
                    var i, o;
                    if (e.preventDefault && (e.preventDefault(), e.stopPropagation()), !(o = $(e.currentTarget)).hasClass("option-disabled")) return o.hasClass("create") ? n.createItem() : ((i = o.attr("data-value")) && (n.lastQuery = null, n.setTextboxValue(""), n.addItem(i), !n.settings.hideSelected && e.type && /mouse/.test(e.type) && n.setActiveOption(n.getOption(i))), n.blur()), t.apply(this, arguments)
                }
            }()
        });
    var UTF8 = {
            encode: function(t) {
                for (var e = [], n = 0; n < t.length; ++n) {
                    var i = t.charCodeAt(n);
                    i < 128 ? e.push(i) : i < 2048 ? (e.push(192 | i >> 6), e.push(128 | 63 & i)) : i < 65536 ? (e.push(224 | i >> 12), e.push(128 | 63 & i >> 6), e.push(128 | 63 & i)) : (e.push(240 | i >> 18), e.push(128 | 63 & i >> 12), e.push(128 | 63 & i >> 6), e.push(128 | 63 & i))
                }
                return e
            },
            decode: function(t) {
                for (var e = [], n = 0; n < t.length;) {
                    var i = t[n++];
                    i < 128 || (i < 224 ? (i = (31 & i) << 6, i |= 63 & t[n++]) : i < 240 ? (i = (15 & i) << 12, i |= (63 & t[n++]) << 6, i |= 63 & t[n++]) : (i = (7 & i) << 18, i |= (63 & t[n++]) << 12, i |= (63 & t[n++]) << 6, i |= 63 & t[n++])), e.push(String.fromCharCode(i))
                }
                return e.join("")
            }
        },
        BASE64 = {};
    if (function(t) {
            var e = function(e) {
                    for (var n = 0, i = [], o = 0 | e.length / 3; 0 < o--;) {
                        var r = (e[n] << 16) + (e[n + 1] << 8) + e[n + 2];
                        n += 3, i.push(t.charAt(63 & r >> 18)), i.push(t.charAt(63 & r >> 12)), i.push(t.charAt(63 & r >> 6)), i.push(t.charAt(63 & r))
                    }
                    if (2 == e.length - n) {
                        r = (e[n] << 16) + (e[n + 1] << 8);
                        i.push(t.charAt(63 & r >> 18)), i.push(t.charAt(63 & r >> 12)), i.push(t.charAt(63 & r >> 6)), i.push("=")
                    } else if (1 == e.length - n) {
                        r = e[n] << 16;
                        i.push(t.charAt(63 & r >> 18)), i.push(t.charAt(63 & r >> 12)), i.push("==")
                    }
                    return i.join("")
                },
                n = function() {
                    for (var e = [], n = 0; n < t.length; ++n) e[t.charCodeAt(n)] = n;
                    return e["=".charCodeAt(0)] = 0, e
                }(),
                i = function(t) {
                    for (var e = 0, i = [], o = 0 | t.length / 4; 0 < o--;) {
                        var r = (n[t.charCodeAt(e)] << 18) + (n[t.charCodeAt(e + 1)] << 12) + (n[t.charCodeAt(e + 2)] << 6) + n[t.charCodeAt(e + 3)];
                        e += 4, i.push(255 & r >> 16), i.push(255 & r >> 8), i.push(255 & r)
                    }
                    return i && ("=" == t.charAt(e - 2) ? (i.pop(), i.pop()) : "=" == t.charAt(e - 1) && i.pop()), i
                },
                o = {
                    encode: function(t) {
                        for (var e = [], n = 0; n < t.length; ++n) e.push(t.charCodeAt(n));
                        return e
                    },
                    decode: function() {
                        for (var t = 0; t < s.length; ++t) a[t] = String.fromCharCode(a[t]);
                        return a.join("")
                    }
                };
            BASE64.encodeASCII = function(t) {
                var n = o.encode(t);
                return e(n)
            }, BASE64.decodeASCII = function(t) {
                var e = i(t);
                return o.decode(e)
            }, BASE64.encode = function(t) {
                var n = UTF8.encode(t);
                return e(n)
            }, BASE64.decode = function(t) {
                var e = i(t);
                return UTF8.decode(e)
            }
        }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), undefined === btoa) var btoa = BASE64.encode;
    if (undefined === atob) var atob = BASE64.decode;
    var CSS_PROP_BIT_QUANTITY = 1,
        CSS_PROP_BIT_HASH_VALUE = 2,
        CSS_PROP_BIT_NEGATIVE_QUANTITY = 4,
        CSS_PROP_BIT_QSTRING_CONTENT = 8,
        CSS_PROP_BIT_QSTRING_URL = 16,
        CSS_PROP_BIT_HISTORY_INSENSITIVE = 32,
        CSS_PROP_BIT_Z_INDEX = 64,
        CSS_PROP_BIT_ALLOWED_IN_LINK = 128,
        cssSchema = function() {
            var t = ["rgb(?:\\(\\s*(?:\\d+|0|\\d+(?:\\.\\d+)?%)\\s*,\\s*(?:\\d+|0|\\d+(?:\\.\\d+)?%)\\s*,\\s*(?:\\d+|0|\\d+(?:\\.\\d+)?%)|a\\(\\s*(?:\\d+|0|\\d+(?:\\.\\d+)?%)\\s*,\\s*(?:\\d+|0|\\d+(?:\\.\\d+)?%)\\s*,\\s*(?:\\d+|0|\\d+(?:\\.\\d+)?%)\\s*,\\s*(?:\\d+|0(?:\\.\\d+)?|\\.\\d+|1(?:\\.0+)?|0|\\d+(?:\\.\\d+)?%)) *\\)"],
                e = [/^ *$/i, RegExp("^ *\\s*" + t[0] + " *$", "i"), RegExp("^ *(?:\\s*" + t[0] + "|(?:\\s*" + t[0] + ")?)+ *$", "i")],
                n = [
                    ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
                    ["all-scroll", "col-resize", "crosshair", "default", "e-resize", "hand", "help", "move", "n-resize", "ne-resize", "no-drop", "not-allowed", "nw-resize", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "vertical-text", "w-resize", "wait"],
                    ["-moz-inline-box", "-moz-inline-stack", "block", "inline", "inline-block", "inline-table", "list-item", "run-in", "table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group"],
                    ["armenian", "circle", "decimal", "decimal-leading-zero", "disc", "georgian", "lower-alpha", "lower-greek", "lower-latin", "lower-roman", "square", "upper-alpha", "upper-latin", "upper-roman"],
                    ["100", "200", "300", "400", "500", "600", "700", "800", "900", "bold", "bolder", "lighter"],
                    ["condensed", "expanded", "extra-condensed", "extra-expanded", "narrower", "semi-condensed", "semi-expanded", "ultra-condensed", "ultra-expanded", "wider"],
                    ["behind", "center-left", "center-right", "far-left", "far-right", "left-side", "leftwards", "right-side", "rightwards"],
                    ["large", "larger", "small", "smaller", "x-large", "x-small", "xx-large", "xx-small"],
                    ["-moz-pre-wrap", "-o-pre-wrap", "-pre-wrap", "nowrap", "pre", "pre-line", "pre-wrap"],
                    ["dashed", "dotted", "double", "groove", "outset", "ridge", "solid"],
                    ["baseline", "middle", "sub", "super", "text-bottom", "text-top"],
                    ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"],
                    ["fast", "faster", "slow", "slower", "x-fast", "x-slow"],
                    ["above", "below", "higher", "level", "lower"],
                    ["border-box", "contain", "content-box", "cover", "padding-box"],
                    ["cursive", "fantasy", "monospace", "sans-serif", "serif"],
                    ["loud", "silent", "soft", "x-loud", "x-soft"],
                    ["no-repeat", "repeat-x", "repeat-y", "round", "space"],
                    ["blink", "line-through", "overline", "underline"],
                    ["high", "low", "x-high", "x-low"],
                    ["absolute", "relative", "static"],
                    ["capitalize", "lowercase", "uppercase"],
                    ["child", "female", "male"],
                    ["bidi-override", "embed"],
                    ["bottom", "top"],
                    ["clip", "ellipsis"],
                    ["continuous", "digits"],
                    ["hide", "show"],
                    ["inside", "outside"],
                    ["italic", "oblique"],
                    ["left", "right"],
                    ["ltr", "rtl"],
                    ["no-content", "no-display"],
                    ["suppress", "unrestricted"],
                    ["thick", "thin"],
                    [","],
                    ["/"],
                    ["always"],
                    ["auto"],
                    ["avoid"],
                    ["both"],
                    ["break-word"],
                    ["center"],
                    ["code"],
                    ["collapse"],
                    ["fixed"],
                    ["hidden"],
                    ["inherit"],
                    ["inset"],
                    ["invert"],
                    ["justify"],
                    ["local"],
                    ["medium"],
                    ["mix"],
                    ["none"],
                    ["normal"],
                    ["once"],
                    ["repeat"],
                    ["scroll"],
                    ["separate"],
                    ["small-caps"],
                    ["spell-out"],
                    ["transparent"],
                    ["visible"]
                ];
            return {
                "-moz-border-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5,
                    cssLitGroup: [n[36]]
                },
                "-moz-border-radius-bottomleft": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-moz-border-radius-bottomright": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-moz-border-radius-topleft": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-moz-border-radius-topright": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-moz-box-shadow": {
                    cssExtra: e[2],
                    cssAlternates: ["boxShadow"],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[35], n[48], n[54]]
                },
                "-moz-opacity": {
                    cssPropBits: 1,
                    cssLitGroup: [n[47]]
                },
                "-moz-outline": {
                    cssExtra: e[1],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[9], n[34], n[46], n[47], n[48], n[49], n[52], n[54]]
                },
                "-moz-outline-color": {
                    cssExtra: e[1],
                    cssPropBits: 2,
                    cssLitGroup: [n[0], n[47], n[49]]
                },
                "-moz-outline-style": {
                    cssPropBits: 0,
                    cssLitGroup: [n[9], n[46], n[47], n[48], n[54]]
                },
                "-moz-outline-width": {
                    cssPropBits: 5,
                    cssLitGroup: [n[34], n[47], n[52]]
                },
                "-o-text-overflow": {
                    cssPropBits: 0,
                    cssLitGroup: [n[25]]
                },
                "-webkit-border-bottom-left-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-webkit-border-bottom-right-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-webkit-border-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5,
                    cssLitGroup: [n[36]]
                },
                "-webkit-border-radius-bottom-left": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-webkit-border-radius-bottom-right": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-webkit-border-radius-top-left": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-webkit-border-radius-top-right": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-webkit-border-top-left-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-webkit-border-top-right-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "-webkit-box-shadow": {
                    cssExtra: e[2],
                    cssAlternates: ["boxShadow"],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[35], n[48], n[54]]
                },
                azimuth: {
                    cssPropBits: 5,
                    cssLitGroup: [n[6], n[30], n[42], n[47]]
                },
                background: {
                    cssExtra: RegExp("^ *(?:\\s*" + t[0] + "){0,2} *$", "i"),
                    cssPropBits: 23,
                    cssLitGroup: [n[0], n[14], n[17], n[24], n[30], n[35], n[36], n[38], n[42], n[45], n[47], n[51], n[54], n[57], n[58], n[62]]
                },
                "background-size": {
                    cssExtra: RegExp("^ *(?:\\s*" + t[0] + "){0,2} *$", "i"),
                    cssPropBits: 23,
                    cssLitGroup: [n[0], n[14], n[17], n[24], n[30], n[35], n[36], n[38], n[42], n[45], n[47], n[51], n[54], n[57], n[58], n[62]]
                },
                "background-attachment": {
                    cssExtra: e[0],
                    cssPropBits: 0,
                    cssLitGroup: [n[35], n[45], n[51], n[58]]
                },
                "background-color": {
                    cssExtra: e[1],
                    cssPropBits: 130,
                    cssLitGroup: [n[0], n[47], n[62]]
                },
                "background-image": {
                    cssExtra: RegExp(".*", "i"),
                    cssPropBits: 16,
                    cssLitGroup: [n[35], n[54]]
                },
                "background-position": {
                    cssExtra: e[0],
                    cssPropBits: 5,
                    cssLitGroup: [n[24], n[30], n[35], n[42]]
                },
                "background-repeat": {
                    cssExtra: e[0],
                    cssPropBits: 0,
                    cssLitGroup: [n[17], n[35], n[57]]
                },
                border: {
                    cssExtra: e[1],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[9], n[34], n[46], n[47], n[48], n[52], n[54], n[62]]
                },
                "border-bottom": {
                    cssExtra: e[1],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[9], n[34], n[46], n[47], n[48], n[52], n[54], n[62]]
                },
                "border-bottom-color": {
                    cssExtra: e[1],
                    cssPropBits: 2,
                    cssLitGroup: [n[0], n[47], n[62]]
                },
                "border-bottom-left-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "border-bottom-right-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "border-bottom-style": {
                    cssPropBits: 0,
                    cssLitGroup: [n[9], n[46], n[47], n[48], n[54]]
                },
                "border-bottom-width": {
                    cssPropBits: 5,
                    cssLitGroup: [n[34], n[47], n[52]]
                },
                "border-collapse": {
                    cssPropBits: 0,
                    cssLitGroup: [n[44], n[47], n[59]]
                },
                "border-color": {
                    cssExtra: RegExp("^ *(?:\\s*" + t[0] + "){1,4} *$", "i"),
                    cssPropBits: 2,
                    cssLitGroup: [n[0], n[47], n[62]]
                },
                "border-left": {
                    cssExtra: e[1],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[9], n[34], n[46], n[47], n[48], n[52], n[54], n[62]]
                },
                "border-left-color": {
                    cssExtra: e[1],
                    cssPropBits: 2,
                    cssLitGroup: [n[0], n[47], n[62]]
                },
                "border-left-style": {
                    cssPropBits: 0,
                    cssLitGroup: [n[9], n[46], n[47], n[48], n[54]]
                },
                "border-left-width": {
                    cssPropBits: 5,
                    cssLitGroup: [n[34], n[47], n[52]]
                },
                "border-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5,
                    cssLitGroup: [n[36]]
                },
                "border-right": {
                    cssExtra: e[1],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[9], n[34], n[46], n[47], n[48], n[52], n[54], n[62]]
                },
                "border-right-color": {
                    cssExtra: e[1],
                    cssPropBits: 2,
                    cssLitGroup: [n[0], n[47], n[62]]
                },
                "border-right-style": {
                    cssPropBits: 0,
                    cssLitGroup: [n[9], n[46], n[47], n[48], n[54]]
                },
                "border-right-width": {
                    cssPropBits: 5,
                    cssLitGroup: [n[34], n[47], n[52]]
                },
                "border-spacing": {
                    cssExtra: e[0],
                    cssPropBits: 5,
                    cssLitGroup: [n[47]]
                },
                "border-style": {
                    cssPropBits: 0,
                    cssLitGroup: [n[9], n[46], n[47], n[48], n[54]]
                },
                "border-top": {
                    cssExtra: e[1],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[9], n[34], n[46], n[47], n[48], n[52], n[54], n[62]]
                },
                "border-top-color": {
                    cssExtra: e[1],
                    cssPropBits: 2,
                    cssLitGroup: [n[0], n[47], n[62]]
                },
                "border-top-left-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "border-top-right-radius": {
                    cssExtra: e[0],
                    cssPropBits: 5
                },
                "border-top-style": {
                    cssPropBits: 0,
                    cssLitGroup: [n[9], n[46], n[47], n[48], n[54]]
                },
                "border-top-width": {
                    cssPropBits: 5,
                    cssLitGroup: [n[34], n[47], n[52]]
                },
                "border-width": {
                    cssPropBits: 5,
                    cssLitGroup: [n[34], n[47], n[52]]
                },
                bottom: {
                    cssPropBits: 5,
                    cssLitGroup: [n[38], n[47]]
                },
                "box-shadow": {
                    cssExtra: e[2],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[35], n[48], n[54]]
                },
                "caption-side": {
                    cssPropBits: 0,
                    cssLitGroup: [n[24], n[47]]
                },
                clear: {
                    cssPropBits: 0,
                    cssLitGroup: [n[30], n[40], n[47], n[54]]
                },
                clip: {
                    cssExtra: /^ *\s*rect\(\s*(?:0|[+\-]?\d+(?:\.\d+)?(?:[cem]m|ex|in|p[ctx])|auto)\s*,\s*(?:0|[+\-]?\d+(?:\.\d+)?(?:[cem]m|ex|in|p[ctx])|auto)\s*,\s*(?:0|[+\-]?\d+(?:\.\d+)?(?:[cem]m|ex|in|p[ctx])|auto)\s*,\s*(?:0|[+\-]?\d+(?:\.\d+)?(?:[cem]m|ex|in|p[ctx])|auto) *\) *$/i,
                    cssPropBits: 0,
                    cssLitGroup: [n[38], n[47]]
                },
                color: {
                    cssExtra: e[1],
                    cssPropBits: 130,
                    cssLitGroup: [n[0], n[47]]
                },
                content: {
                    cssPropBits: 8,
                    cssLitGroup: [n[54], n[55]]
                },
                "counter-increment": {
                    cssExtra: e[0],
                    cssPropBits: 5,
                    cssLitGroup: [n[47], n[54]]
                },
                "counter-reset": {
                    cssExtra: e[0],
                    cssPropBits: 5,
                    cssLitGroup: [n[47], n[54]]
                },
                cue: {
                    cssPropBits: 16,
                    cssLitGroup: [n[47], n[54]]
                },
                "cue-after": {
                    cssPropBits: 16,
                    cssLitGroup: [n[47], n[54]]
                },
                "cue-before": {
                    cssPropBits: 16,
                    cssLitGroup: [n[47], n[54]]
                },
                cursor: {
                    cssExtra: e[0],
                    cssPropBits: 144,
                    cssLitGroup: [n[1], n[35], n[38], n[47]]
                },
                direction: {
                    cssPropBits: 0,
                    cssLitGroup: [n[31], n[47]]
                },
                display: {
                    cssPropBits: 32,
                    cssLitGroup: [n[2], n[47], n[54]]
                },
                elevation: {
                    cssPropBits: 5,
                    cssLitGroup: [n[13], n[47]]
                },
                "empty-cells": {
                    cssPropBits: 0,
                    cssLitGroup: [n[27], n[47]]
                },
                filter: {
                    cssExtra: /^ *(?:\s*alpha\(\s*opacity\s*=\s*(?:0|\d+(?:\.\d+)?%|[+\-]?\d+(?:\.\d+)?) *\))+ *$/i,
                    cssPropBits: 32
                },
                float: {
                    cssAlternates: ["cssFloat", "styleFloat"],
                    cssPropBits: 32,
                    cssLitGroup: [n[30], n[47], n[54]]
                },
                font: {
                    cssExtra: e[0],
                    cssPropBits: 9,
                    cssLitGroup: [n[4], n[7], n[11], n[15], n[29], n[35], n[36], n[47], n[52], n[55], n[60]]
                },
                "font-family": {
                    cssExtra: e[0],
                    cssPropBits: 8,
                    cssLitGroup: [n[15], n[35], n[47]]
                },
                "font-size": {
                    cssPropBits: 1,
                    cssLitGroup: [n[7], n[47], n[52]]
                },
                "font-stretch": {
                    cssPropBits: 0,
                    cssLitGroup: [n[5], n[55]]
                },
                "font-style": {
                    cssPropBits: 0,
                    cssLitGroup: [n[29], n[47], n[55]]
                },
                "font-variant": {
                    cssPropBits: 0,
                    cssLitGroup: [n[47], n[55], n[60]]
                },
                "font-weight": {
                    cssPropBits: 0,
                    cssLitGroup: [n[4], n[47], n[55]]
                },
                height: {
                    cssPropBits: 37,
                    cssLitGroup: [n[38], n[47]]
                },
                left: {
                    cssPropBits: 37,
                    cssLitGroup: [n[38], n[47]]
                },
                "letter-spacing": {
                    cssPropBits: 5,
                    cssLitGroup: [n[47], n[55]]
                },
                "line-height": {
                    cssPropBits: 1,
                    cssLitGroup: [n[47], n[55]]
                },
                "list-style": {
                    cssPropBits: 16,
                    cssLitGroup: [n[3], n[28], n[47], n[54]]
                },
                "list-style-image": {
                    cssPropBits: 16,
                    cssLitGroup: [n[47], n[54]]
                },
                "list-style-position": {
                    cssPropBits: 0,
                    cssLitGroup: [n[28], n[47]]
                },
                "list-style-type": {
                    cssPropBits: 0,
                    cssLitGroup: [n[3], n[47], n[54]]
                },
                margin: {
                    cssPropBits: 5,
                    cssLitGroup: [n[38], n[47]]
                },
                "margin-bottom": {
                    cssPropBits: 5,
                    cssLitGroup: [n[38], n[47]]
                },
                "margin-left": {
                    cssPropBits: 5,
                    cssLitGroup: [n[38], n[47]]
                },
                "margin-right": {
                    cssPropBits: 5,
                    cssLitGroup: [n[38], n[47]]
                },
                "margin-top": {
                    cssPropBits: 5,
                    cssLitGroup: [n[38], n[47]]
                },
                "max-height": {
                    cssPropBits: 1,
                    cssLitGroup: [n[38], n[47], n[54]]
                },
                "max-width": {
                    cssPropBits: 1,
                    cssLitGroup: [n[38], n[47], n[54]]
                },
                "min-height": {
                    cssPropBits: 1,
                    cssLitGroup: [n[38], n[47]]
                },
                "min-width": {
                    cssPropBits: 1,
                    cssLitGroup: [n[38], n[47]]
                },
                opacity: {
                    cssPropBits: 33,
                    cssLitGroup: [n[47]]
                },
                outline: {
                    cssExtra: e[1],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[9], n[34], n[46], n[47], n[48], n[49], n[52], n[54]]
                },
                "outline-color": {
                    cssExtra: e[1],
                    cssPropBits: 2,
                    cssLitGroup: [n[0], n[47], n[49]]
                },
                "outline-style": {
                    cssPropBits: 0,
                    cssLitGroup: [n[9], n[46], n[47], n[48], n[54]]
                },
                "outline-width": {
                    cssPropBits: 5,
                    cssLitGroup: [n[34], n[47], n[52]]
                },
                overflow: {
                    cssPropBits: 32,
                    cssLitGroup: [n[38], n[46], n[47], n[58], n[63]]
                },
                "overflow-x": {
                    cssPropBits: 0,
                    cssLitGroup: [n[32], n[38], n[46], n[58], n[63]]
                },
                "overflow-y": {
                    cssPropBits: 0,
                    cssLitGroup: [n[32], n[38], n[46], n[58], n[63]]
                },
                padding: {
                    cssPropBits: 1,
                    cssLitGroup: [n[47]]
                },
                "padding-bottom": {
                    cssPropBits: 33,
                    cssLitGroup: [n[47]]
                },
                "padding-left": {
                    cssPropBits: 33,
                    cssLitGroup: [n[47]]
                },
                "padding-right": {
                    cssPropBits: 33,
                    cssLitGroup: [n[47]]
                },
                "padding-top": {
                    cssPropBits: 33,
                    cssLitGroup: [n[47]]
                },
                "page-break-after": {
                    cssPropBits: 0,
                    cssLitGroup: [n[30], n[37], n[38], n[39], n[47]]
                },
                "page-break-before": {
                    cssPropBits: 0,
                    cssLitGroup: [n[30], n[37], n[38], n[39], n[47]]
                },
                "page-break-inside": {
                    cssPropBits: 0,
                    cssLitGroup: [n[38], n[39], n[47]]
                },
                pause: {
                    cssPropBits: 5,
                    cssLitGroup: [n[47]]
                },
                "pause-after": {
                    cssPropBits: 5,
                    cssLitGroup: [n[47]]
                },
                "pause-before": {
                    cssPropBits: 5,
                    cssLitGroup: [n[47]]
                },
                pitch: {
                    cssPropBits: 5,
                    cssLitGroup: [n[19], n[47], n[52]]
                },
                "pitch-range": {
                    cssPropBits: 5,
                    cssLitGroup: [n[47]]
                },
                "play-during": {
                    cssExtra: e[0],
                    cssPropBits: 16,
                    cssLitGroup: [n[38], n[47], n[53], n[54], n[57]]
                },
                position: {
                    cssPropBits: 32,
                    cssLitGroup: [n[20], n[47]]
                },
                quotes: {
                    cssExtra: e[0],
                    cssPropBits: 8,
                    cssLitGroup: [n[47], n[54]]
                },
                richness: {
                    cssPropBits: 5,
                    cssLitGroup: [n[47]]
                },
                right: {
                    cssPropBits: 37,
                    cssLitGroup: [n[38], n[47]]
                },
                speak: {
                    cssPropBits: 0,
                    cssLitGroup: [n[47], n[54], n[55], n[61]]
                },
                "speak-header": {
                    cssPropBits: 0,
                    cssLitGroup: [n[37], n[47], n[56]]
                },
                "speak-numeral": {
                    cssPropBits: 0,
                    cssLitGroup: [n[26], n[47]]
                },
                "speak-punctuation": {
                    cssPropBits: 0,
                    cssLitGroup: [n[43], n[47], n[54]]
                },
                "speech-rate": {
                    cssPropBits: 5,
                    cssLitGroup: [n[12], n[47], n[52]]
                },
                stress: {
                    cssPropBits: 5,
                    cssLitGroup: [n[47]]
                },
                "table-layout": {
                    cssPropBits: 0,
                    cssLitGroup: [n[38], n[45], n[47]]
                },
                "text-align": {
                    cssPropBits: 0,
                    cssLitGroup: [n[30], n[42], n[47], n[50]]
                },
                "text-decoration": {
                    cssPropBits: 0,
                    cssLitGroup: [n[18], n[47], n[54]]
                },
                "text-indent": {
                    cssPropBits: 5,
                    cssLitGroup: [n[47]]
                },
                "text-overflow": {
                    cssPropBits: 0,
                    cssLitGroup: [n[25]]
                },
                "text-shadow": {
                    cssExtra: e[2],
                    cssPropBits: 7,
                    cssLitGroup: [n[0], n[35], n[48], n[54]]
                },
                "text-transform": {
                    cssPropBits: 0,
                    cssLitGroup: [n[21], n[47], n[54]]
                },
                "text-wrap": {
                    cssPropBits: 0,
                    cssLitGroup: [n[33], n[54], n[55]]
                },
                top: {
                    cssPropBits: 37,
                    cssLitGroup: [n[38], n[47]]
                },
                "unicode-bidi": {
                    cssPropBits: 0,
                    cssLitGroup: [n[23], n[47], n[55]]
                },
                "vertical-align": {
                    cssPropBits: 5,
                    cssLitGroup: [n[10], n[24], n[47]]
                },
                visibility: {
                    cssPropBits: 32,
                    cssLitGroup: [n[44], n[46], n[47], n[63]]
                },
                "voice-family": {
                    cssExtra: e[0],
                    cssPropBits: 8,
                    cssLitGroup: [n[22], n[35], n[47]]
                },
                volume: {
                    cssPropBits: 1,
                    cssLitGroup: [n[16], n[47], n[52]]
                },
                "white-space": {
                    cssPropBits: 0,
                    cssLitGroup: [n[8], n[47], n[55]]
                },
                width: {
                    cssPropBits: 33,
                    cssLitGroup: [n[38], n[47]]
                },
                "word-spacing": {
                    cssPropBits: 5,
                    cssLitGroup: [n[47], n[55]]
                },
                "word-wrap": {
                    cssPropBits: 0,
                    cssLitGroup: [n[41], n[55]]
                },
                "z-index": {
                    cssPropBits: 69,
                    cssLitGroup: [n[38], n[47]]
                },
                zoom: {
                    cssPropBits: 1,
                    cssLitGroup: [n[55]]
                }
            }
        }(),
        URI, decodeCss, html, html4, html_sanitize, lexCss, parseCssDeclarations, parseCssStylesheet, sanitizeCssProperty, sanitizeCssSelectors, sanitizeStylesheet, sanitizeStylesheetWithExternals;
    if ("undefined" != typeof window && (window.cssSchema = cssSchema), function() {
            function t(t) {
                var e = parseInt(t.substring(1), 16);
                return e > 65535 ? (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e))) : e == e ? String.fromCharCode(e) : t[1] < " " ? "" : t[1]
            }

            function e(t, e) {
                return '"' + t.replace(/[\u0000-\u001f\\\"\x3c\x3e]/g, e) + '"'
            }

            function n(t) {
                return _[t] || (_[t] = "\\" + t.charCodeAt(0).toString(16) + " ")
            }

            function i(t) {
                return x[t] || (x[t] = (t < "\x10" ? "%0" : "%") + t.charCodeAt(0).toString(16))
            }
            var o, r, s, a, l, c, u, h, d, p, f, g, m, v, b, y, w, _, x;
            _ = {
                "\\": "\\\\"
            }, x = {
                "\\": "%5c"
            }, y = (w = "[\\t\\n\\f ]") + "*", u = "[\\n\\f]", b = "[0-9a-fA-F]{1,6}" + w + "?", g = "\"(?:'|" + (m = "[^'\"\\n\\f\\\\]|\\\\[\\s\\S]") + ')*"|\'(?:"|' + m + ")*'", c = "-?" + (d = "(?:[a-zA-Z_]|" + (p = "[\\u0080-\\ud7ff\\ue000-\\ufffd]|" + (v = "[\\ud800-\\udbff][\\udc00-\\udfff]")) + "|" + (a = "\\\\" + (l = "(?:" + b + "|[\\u0020-\\u007e\\u0080-\\ud7ff\\ue000\\ufffd]|" + v + ")")) + ")") + (h = "(?:[a-zA-Z0-9_-]|" + p + "|" + a + ")") + "*", f = "[-+]?(?:[0-9]+(?:[.][0-9]+)?|[.][0-9]+)", r = "<!--", o = "-->", s = new RegExp(["\\uFEFF", "U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?", "url[(]" + y + "(?:" + g + "|" + ("(?:[\\t\\x21\\x23-\\x26\\x28-\\x5b\\x5d-\\x7e]|" + p + "|" + a + ")") + "*)" + y + "[)]", "(?!url[(])" + c + "[(]", "(?:@?-?" + d + "|#)" + h + "*", g, f + "(?:%|" + c + ")?", r, o, w + "+", "/(?:[*][^*]*[*]+(?:[^/][^*]*[*]+)*/|/[^\\n\\f]*)", "[~|^$*]=", "[^\"'\\\\/]|/(?![/*])"].join("|"), "gi"), decodeCss = function(e) {
                return e.replace(new RegExp("\\\\(?:" + l + "|" + u + ")", "g"), t)
            }, lexCss = function(t) {
                var a, l, c, u, h, d, p, f;
                for (c = 0, u = " ", l = 0, d = (f = (t = "" + t).replace(/\r\n?/g, "\n").match(s) || []).length; l < d; ++l) h = (p = decodeCss(f[l])).length, (u != (p = (a = p.charCodeAt(0)) == '"'.charCodeAt(0) || a == "'".charCodeAt(0) ? e(p.substring(1, h - 1), n) : a == "/".charCodeAt(0) && h > 1 || "\\" == p || p == o || p == r || "\ufeff" == p || a <= " ".charCodeAt(0) ? " " : /url\(/i.test(p) ? "url(" + e(p.replace(new RegExp("^url\\(" + y + "[\"']?|[\"']?" + y + "\\)$", "gi"), ""), i) + ")" : p) || " " != p) && (f[c++] = u = p);
                return f.length = c, f
            }
        }(), "undefined" != typeof window && (window.lexCss = lexCss, window.decodeCss = decodeCss), URI = function() {
            function t(t) {
                var e = ("" + t).match(g);
                return e ? new l(c(e[1]), c(e[2]), c(e[3]), c(e[4]), c(e[5]), c(e[6]), c(e[7])) : null
            }

            function e(t, e, r, s, a, c, u) {
                var h = new l(i(t, f), i(e, f), n(r), s > 0 ? s.toString() : null, i(a, p), null, n(u));
                return c && ("string" == typeof c ? h.setRawQuery(c.replace(/[^?\x26=0-9A-Za-z_\-~.%]/g, o)) : h.setAllParameters(c)), h
            }

            function n(t) {
                return "string" == typeof t ? encodeURIComponent(t) : null
            }

            function i(t, e) {
                return "string" == typeof t ? encodeURI(t).replace(e, o) : null
            }

            function o(t) {
                var e = t.charCodeAt(0);
                return "%" + "0123456789ABCDEF".charAt(e >> 4 & 15) + "0123456789ABCDEF".charAt(15 & e)
            }

            function r(t) {
                return t.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/")
            }

            function s(t) {
                var e, n, i;
                if (null === t) return null;
                for (e = r(t), i = d;
                    (n = e.replace(i, "$1")) != e; e = n);
                return e
            }

            function a(t, e) {
                var n, i, o, r, a = t.clone(),
                    l = e.hasScheme();
                return l ? a.setRawScheme(e.getRawScheme()) : l = e.hasCredentials(), l ? a.setRawCredentials(e.getRawCredentials()) : l = e.hasDomain(), l ? a.setRawDomain(e.getRawDomain()) : l = e.hasPort(), o = s(i = e.getRawPath()), l ? (a.setPort(e.getPort()), o = o && o.replace(u, "")) : (l = !!i) ? 47 !== o.charCodeAt(0) && (o = s(((r = (n = s(a.getRawPath() || "").replace(u, "")).lastIndexOf("/") + 1) ? n.substring(0, r) : "") + s(i)).replace(u, "")) : (o = o && o.replace(u, "")) !== i && a.setRawPath(o), l ? a.setRawPath(o) : l = e.hasQuery(), l ? a.setRawQuery(e.getRawQuery()) : l = e.hasFragment(), l && a.setRawFragment(e.getRawFragment()), a
            }

            function l(t, e, n, i, o, r, s) {
                this.scheme_ = t, this.credentials_ = e, this.domain_ = n, this.port_ = i, this.path_ = o, this.query_ = r, this.fragment_ = s, this.paramCache_ = null
            }

            function c(t) {
                return "string" == typeof t && t.length > 0 ? t : null
            }
            var u, h, d, p, f, g;
            return h = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"), d = new RegExp(h), u = /^(?:\.\.\/)*(?:\.\.$)?/, l.prototype.toString = function() {
                    var t = [];
                    return null !== this.scheme_ && t.push(this.scheme_, ":"), null !== this.domain_ && (t.push("//"), null !== this.credentials_ && t.push(this.credentials_, "@"), t.push(this.domain_), null !== this.port_ && t.push(":", this.port_.toString())), null !== this.path_ && t.push(this.path_), null !== this.query_ && t.push("?", this.query_), null !== this.fragment_ && t.push("#", this.fragment_), t.join("")
                }, l.prototype.clone = function() {
                    return new l(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_)
                }, l.prototype.getScheme = function() {
                    return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase()
                }, l.prototype.getRawScheme = function() {
                    return this.scheme_
                }, l.prototype.setScheme = function(t) {
                    return this.scheme_ = i(t, f), this
                }, l.prototype.setRawScheme = function(t) {
                    return this.scheme_ = t || null, this
                }, l.prototype.hasScheme = function() {
                    return null !== this.scheme_
                }, l.prototype.getCredentials = function() {
                    return this.credentials_ && decodeURIComponent(this.credentials_)
                }, l.prototype.getRawCredentials = function() {
                    return this.credentials_
                },
                l.prototype.setCredentials = function(t) {
                    return this.credentials_ = i(t, f), this
                }, l.prototype.setRawCredentials = function(t) {
                    return this.credentials_ = t || null, this
                }, l.prototype.hasCredentials = function() {
                    return null !== this.credentials_
                }, l.prototype.getDomain = function() {
                    return this.domain_ && decodeURIComponent(this.domain_)
                }, l.prototype.getRawDomain = function() {
                    return this.domain_
                }, l.prototype.setDomain = function(t) {
                    return this.setRawDomain(t && encodeURIComponent(t))
                }, l.prototype.setRawDomain = function(t) {
                    return this.domain_ = t || null, this.setRawPath(this.path_)
                }, l.prototype.hasDomain = function() {
                    return null !== this.domain_
                }, l.prototype.getPort = function() {
                    return this.port_ && decodeURIComponent(this.port_)
                }, l.prototype.setPort = function(t) {
                    if (t) {
                        if ((t = Number(t)) !== (65535 & t)) throw new Error("Bad port number " + t);
                        this.port_ = "" + t
                    } else this.port_ = null;
                    return this
                }, l.prototype.hasPort = function() {
                    return null !== this.port_
                }, l.prototype.getPath = function() {
                    return this.path_ && decodeURIComponent(this.path_)
                }, l.prototype.getRawPath = function() {
                    return this.path_
                }, l.prototype.setPath = function(t) {
                    return this.setRawPath(i(t, p))
                }, l.prototype.setRawPath = function(t) {
                    return t ? (t = String(t), this.path_ = !this.domain_ || /^\//.test(t) ? t : "/" + t) : this.path_ = null, this
                }, l.prototype.hasPath = function() {
                    return null !== this.path_
                }, l.prototype.getQuery = function() {
                    return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ")
                }, l.prototype.getRawQuery = function() {
                    return this.query_
                }, l.prototype.setQuery = function(t) {
                    return this.paramCache_ = null, this.query_ = n(t), this
                }, l.prototype.setRawQuery = function(t) {
                    return this.paramCache_ = null, this.query_ = t || null, this
                }, l.prototype.hasQuery = function() {
                    return null !== this.query_
                }, l.prototype.setAllParameters = function(t) {
                    var e, n, i, o, r, s, a;
                    if ("object" == typeof t && !(t instanceof Array) && (t instanceof Object || "[object Array]" !== Object.prototype.toString.call(t))) {
                        for (i in o = [], e = -1, t) "string" == typeof(a = t[i]) && (o[++e] = i, o[++e] = a);
                        t = o
                    }
                    for (this.paramCache_ = null, r = [], s = "", n = 0; n < t.length;) i = t[n++], a = t[n++], r.push(s, encodeURIComponent(i.toString())), s = "&", a && r.push("=", encodeURIComponent(a.toString()));
                    return this.query_ = r.join(""), this
                }, l.prototype.checkParameterCache_ = function() {
                    var t, e, n, i, o, r;
                    if (!this.paramCache_)
                        if (r = this.query_) {
                            for (t = r.split(/[\x26\?]/), o = [], n = -1, e = 0; e < t.length; ++e) i = t[e].match(/^([^=]*)(?:=(.*))?$/), o[++n] = decodeURIComponent(i[1]).replace(/\+/g, " "), o[++n] = decodeURIComponent(i[2] || "").replace(/\+/g, " ");
                            this.paramCache_ = o
                        } else this.paramCache_ = []
                }, l.prototype.setParameterValues = function(t, e) {
                    var n, i, o, r;
                    for ("string" == typeof e && (e = [e]), this.checkParameterCache_(), i = 0, r = this.paramCache_, o = [], n = 0, 0; n < r.length; n += 2) t === r[n] ? i < e.length && o.push(t, e[i++]) : o.push(r[n], r[n + 1]);
                    for (; i < e.length;) o.push(t, e[i++]);
                    return this.setAllParameters(o), this
                }, l.prototype.removeParameter = function(t) {
                    return this.setParameterValues(t, [])
                }, l.prototype.getAllParameters = function() {
                    return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length)
                }, l.prototype.getParameterValues = function(t) {
                    var e, n;
                    for (this.checkParameterCache_(), n = [], e = 0; e < this.paramCache_.length; e += 2) t === this.paramCache_[e] && n.push(this.paramCache_[e + 1]);
                    return n
                }, l.prototype.getParameterMap = function() {
                    var t, e, n, i;
                    for (this.checkParameterCache_(), n = {}, t = 0; t < this.paramCache_.length; t += 2) e = this.paramCache_[t++], i = this.paramCache_[t++], e in n ? n[e].push(i) : n[e] = [i];
                    return n
                }, l.prototype.getParameterValue = function(t) {
                    var e;
                    for (this.checkParameterCache_(), e = 0; e < this.paramCache_.length; e += 2)
                        if (t === this.paramCache_[e]) return this.paramCache_[e + 1];
                    return null
                }, l.prototype.getFragment = function() {
                    return this.fragment_ && decodeURIComponent(this.fragment_)
                }, l.prototype.getRawFragment = function() {
                    return this.fragment_
                }, l.prototype.setFragment = function(t) {
                    return this.fragment_ = t ? encodeURIComponent(t) : null, this
                }, l.prototype.setRawFragment = function(t) {
                    return this.fragment_ = t || null, this
                }, l.prototype.hasFragment = function() {
                    return null !== this.fragment_
                }, g = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), f = /[#\/\?@]/g, p = /[\#\?]/g, l.parse = t, l.create = e, l.resolve = a, l.collapse_dots = s, l.utils = {
                    mimeTypeOf: function(e) {
                        var n = t(e);
                        return /\.html$/.test(n.getPath()) ? "text/html" : "application/javascript"
                    },
                    resolve: function(e, n) {
                        return e ? a(t(e), t(n)).toString() : "" + n
                    }
                }, l
        }(), "undefined" != typeof window && (window.URI = URI), sanitizeCssProperty = undefined, sanitizeCssSelectors = undefined, sanitizeStylesheet = undefined, sanitizeStylesheetWithExternals = undefined, function() {
            function t(t) {
                return "string" == typeof t ? 'url("' + t.replace(a, e) + '")' : s
            }

            function e(t) {
                return l[t]
            }

            function n(t, e) {
                return t ? URI.utils.resolve(t, e) : e
            }

            function i(t, e, n) {
                var i;
                return n ? !(i = ("" + t).match(r)) || i[1] && !o.test(i[1]) ? null : n(t, e) : null
            }
            var o, r, s = 'url("about:blank")',
                a = /[\n\f\r\"\'()*\x3c\x3e]/g,
                l = {
                    "\n": "%0a",
                    "\f": "%0c",
                    "\r": "%0d",
                    '"': "%22",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "*": "%2a",
                    "<": "%3c",
                    ">": "%3e"
                };
            r = new RegExp("^(?:([^:/?# ]+):)?"), o = /^(?:https?|mailto)$/i, sanitizeCssProperty = function() {
                    function e(t) {
                        var e, n, i, o = {};
                        for (n = t.length; --n >= 0;)
                            for (i = (e = t[n]).length; --i >= 0;) o[e[i]] = r;
                        return o
                    }

                    function o(t, e) {
                        for (var n, i = 1, o = e + 1, r = t.length; o < r && i;) i += "(" === (n = t[o++]) ? 1 : ")" === n ? -1 : 0;
                        return o
                    }
                    var r;
                    return r = {},
                        function(a, l, c, u, h) {
                            for (var d, p, f, g, m, v, b, y, w = l.cssPropBits, _ = w & (CSS_PROP_BIT_QSTRING_CONTENT | CSS_PROP_BIT_QSTRING_URL), x = NaN, C = 0, k = 0; C < c.length; ++C)(y = (d = (y = c[C].toLowerCase()).charCodeAt(0)) === " ".charCodeAt(0) ? "" : d === '"'.charCodeAt(0) ? _ === CSS_PROP_BIT_QSTRING_URL && u ? t(i(n(h, decodeCss(c[C].substring(1, y.length - 1))), a, u)) : _ === CSS_PROP_BIT_QSTRING_CONTENT ? y : "" : d === "#".charCodeAt(0) && /^#(?:[0-9a-f]{3}){1,2}$/.test(y) ? w & CSS_PROP_BIT_HASH_VALUE ? y : "" : "0".charCodeAt(0) <= d && d <= "9".charCodeAt(0) ? w & CSS_PROP_BIT_QUANTITY ? w & CSS_PROP_BIT_Z_INDEX ? y.match(/^\d{1,7}$/) ? y : "" : y : "" : (p = y.charCodeAt(1), f = y.charCodeAt(2), m = "0".charCodeAt(0) <= p && p <= "9".charCodeAt(0), v = "0".charCodeAt(0) <= f && f <= "9".charCodeAt(0), d === "+".charCodeAt(0) && (m || p === ".".charCodeAt(0) && v) ? w & CSS_PROP_BIT_QUANTITY ? w & CSS_PROP_BIT_Z_INDEX ? y.match(/^\+\d{1,7}$/) ? y : "" : (m ? "" : "0") + y.substring(1) : "" : d === "-".charCodeAt(0) && (m || p === ".".charCodeAt(0) && v) ? w & CSS_PROP_BIT_NEGATIVE_QUANTITY ? w & CSS_PROP_BIT_Z_INDEX ? y.match(/^\-\d{1,7}$/) ? y : "" : (m ? "-" : "-0") + y.substring(1) : w & CSS_PROP_BIT_QUANTITY ? "0" : "" : d === ".".charCodeAt(0) && m ? w & CSS_PROP_BIT_QUANTITY ? "0" + y : "" : "url(" === y.substring(0, 4) ? u && _ & CSS_PROP_BIT_QSTRING_URL ? t(i(n(h, c[C].substring(5, y.length - 2)), a, u)) : "" : ("(" === y.charAt(y.length - 1) && (g = o(c, C), c.splice(C, g - C, y = c.slice(C, g).join(" "))), ((b = l.cssLitGroup) ? l.cssLitMap || (l.cssLitMap = e(b)) : r)[y] === r || l.cssExtra && l.cssExtra.test(y) ? y : /^\w+$/.test(y) && _ === CSS_PROP_BIT_QSTRING_CONTENT ? x + 1 === k ? (c[x] = c[x].substring(0, c[x].length - 1) + " " + y + '"', y = "") : (x = k, '"' + y + '"') : ""))) && (c[k++] = y);
                            1 === k && c[0] === s && (k = 0), c.length = k
                        }
                }(), sanitizeCssSelectors = function(t, e, n) {
                    function i(i, o) {
                        function r(i, o) {
                            var r, s, a, l, c, d, p, f, g, m = "";
                            i < o && ("*" === (f = t[i]) ? (++i, m = f) : /^[a-zA-Z]/.test(f) && ((c = n(f.toLowerCase(), [])) && ("tagName" in c && (f = c.tagName), ++i, m = f))), l = "";
                            for (; i < o;) {
                                if ("#" === (f = t[i]).charAt(0)) {
                                    if (/^#_|__$|[^#0-9A-Za-z:_\-]/.test(f)) return null;
                                    l += f + "-" + e
                                } else {
                                    if ("." !== f) break;
                                    if (!(++i < o && /^[0-9A-Za-z:_\-]+$/.test(f = t[i])) || /^_|__$/.test(f)) return null;
                                    l += "." + f
                                }++i
                            }
                            for (s = ""; i < o && "[" === t[i];) {
                                if (++i, r = t[i++], (a = html4.ATTRIBS[m + "::" + r]) !== +a && (a = html4.ATTRIBS["*::" + r]), a !== +a) return null;
                                if (d = "", g = "", /^[~^$*|]?=$/.test(t[i]) && (d = t[i++], g = t[i++]), "]" !== t[i++]) return null;
                                switch (a) {
                                    case html4.atype.NONE:
                                    case html4.atype.URI:
                                    case html4.atype.URI_FRAGMENT:
                                    case html4.atype.ID:
                                    case html4.atype.IDREF:
                                    case html4.atype.IDREFS:
                                    case html4.atype.GLOBAL_NAME:
                                    case html4.atype.LOCAL_NAME:
                                    case html4.atype.CLASSES:
                                        if (d && a !== html4.atype.NONE) return null;
                                        s += "[" + r + d + g + "]"
                                }
                            }
                            if (p = "", i < o && ":" === t[i])
                                if (f = t[++i], h.test(f)) {
                                    if (!/^[a*]?$/.test(m)) return null;
                                    v = !0, p = ":" + f, ++i, m = "a"
                                } else u.test(f) && (v = !1, p = ":" + f, ++i);
                            return i === o ? (m + l).replace(/[^ .*#\w-]/g, "\\$&") + s + p : null
                        }
                        var s, a, d, p, f, g, m, v = !1;
                        for (" " === t[i] && ++i, o - 1 !== i && " " === t[o] && --o, f = [], p = i, s = "", a = i; a < o; ++a)
                            if ((d = ">" === (m = t[a])) || " " === m) {
                                if (!(s = r(p, a, !1)) || d && /^html/i.test(s)) return;
                                p = a + 1, f.push(s, d ? " > " : " ")
                            }(s = r(p, o, !0)) && (f.push(s), g = f.join(""), g = "." + e + " " + g, (v ? l : c).push(g))
                    }
                    var o, r, s, a, l = [],
                        c = [],
                        u = /^(active|after|before|first-child|first-letter|focus|hover)$/,
                        h = /^(link|visited)$/,
                        d = 0,
                        p = 0;
                    for (o = 0; o < t.length; ++o)("(" == (a = t[o]) || "[" == a ? (++p, 1) : ")" == a || "]" == a ? (p && --p, 1) : " " != t[o] || !p && ">" != t[o - 1] && ">" != t[o + 1]) && (t[d++] = t[o]);
                    for (t.length = d, r = t.length, s = 0, o = 0; o < r; ++o) "," === t[o] && (i(s, o), s = o + 1);
                    return i(s, r), [c, l]
                },
                function() {
                    function t(t) {
                        var e, n, i, o = !1;
                        for (e = 0, n = t.length; e < n - 1; ++e) i = t[e], ":" === t[e + 1] && (o = !(cssSchema[i].cssPropBits & CSS_PROP_BIT_ALLOWED_IN_LINK)), o && (t[e] = ""), ";" === i && (o = !1);
                        return t.join("")
                    }

                    function e(t) {
                        var e, n = /^\s*[']([^']*)[']\s*$/,
                            i = /^\s*url\s*[(]["]([^"]*)["][)]\s*$/,
                            o = /^\s*url\s*[(][']([^']*)['][)]\s*$/,
                            r = /^\s*url\s*[(]([^)]*)[)]\s*$/;
                        return (e = /^\s*["]([^"]*)["]\s*$/.exec(t)) ? e[1] : (e = n.exec(t)) ? e[1] : (e = i.exec(t)) ? e[1] : (e = o.exec(t)) ? e[1] : (e = r.exec(t)) ? e[1] : null
                    }

                    function o(a, l, c, u, h, d, p) {
                        function f() {
                            b = 0 !== v.length && null !== v[v.length - 1] && "@" !== v[v.length - 1][0]
                        }
                        var g = void 0,
                            m = !1,
                            v = [],
                            b = !1;
                        return parseCssStylesheet(l, {
                            startStylesheet: function() {
                                g = []
                            },
                            endStylesheet: function() {},
                            startAtrule: function(t, l) {
                                var f;
                                b ? t = null : "@media" === t ? (l = l.filter(function(t) {
                                    return s[t] == r
                                })).length ? g.push(t, " ", l.join(",")) : t = null : "@import" === t && l.length > 0 && ("function" == typeof p ? (m = !0, f = i(n(a, e(l[0])), function(t) {
                                    var e = o(f, t.html, c, u, h, d, p);
                                    p(e.result, e.moreToCome)
                                }, h)) : window.console && window.console.log("@import " + l.join(" ") + " elided"), t = null), b = !t, v.push(t)
                            },
                            endAtrule: function() {
                                v.pop();
                                b || g.push(";"), f()
                            },
                            startBlock: function() {
                                b || g.push("{")
                            },
                            endBlock: function() {
                                b || (g.push("}"), b = !0)
                            },
                            startRuleset: function(t) {
                                var e, n, i, o = void 0,
                                    r = !1;
                                b || (e = (i = sanitizeCssSelectors(t, c, d))[0], o = i[1], e.length || o.length ? ((n = e.join(", ")) || (n = "head > html", r = !0), g.push(n, "{")) : b = !0), v.push(b ? null : {
                                    historySensitiveSelectors: o,
                                    endOfSelectors: g.length - 1,
                                    removeHistoryInsensitiveSelectors: r
                                })
                            },
                            endRuleset: function() {
                                var e, n, i = v.pop(),
                                    o = g.length;
                                b || (g.push("}"), i && ((e = i.historySensitiveSelectors).length && (n = g.slice(i.endOfSelectors), g.push(e.join(", "), t(n))))), i && i.removeHistoryInsensitiveSelectors && g.splice(i.endOfSelectors - 1, o + 1), f()
                            },
                            declaration: function(t, e) {
                                var n;
                                b || (n = cssSchema[t]) && (sanitizeCssProperty(t, n, e, u, a), e.length && g.push(t, ":", e.join(" "), ";"))
                            }
                        }), {
                            result: g.join(""),
                            moreToCome: m
                        }
                    }
                    var r = {},
                        s = {
                            braille: r,
                            embossed: r,
                            handheld: r,
                            print: r,
                            projection: r,
                            screen: r,
                            speech: r,
                            tty: r,
                            tv: r
                        };
                    sanitizeStylesheet = function(t, e, n, i, r) {
                        return o(t, e, n, i, undefined, r, undefined).result
                    }, sanitizeStylesheetWithExternals = function(t, e, n, i, r, s, a) {
                        return o(t, e, n, i, r, s, a)
                    }
                }()
        }(), "undefined" != typeof window && (window.sanitizeCssProperty = sanitizeCssProperty, window.sanitizeCssSelectors = sanitizeCssSelectors, window.sanitizeStylesheet = sanitizeStylesheet), "i" !== "I".toLowerCase()) throw "I/i problem";
    if (function() {
            function t(t, n, o, r) {
                return n < o ? "@" === t[n].charAt(0) ? e(t, n, o, r, !0) : i(t, n, o, r) : n
            }

            function e(t, e, i, o, r) {
                for (var s, a, l = e++; e < i && "{" !== t[e] && ";" !== t[e];) ++e;
                return e < i && (r || ";" === t[e]) && (s = e, (a = l + 1) < i && " " === t[a] && ++a, s > a && " " === t[s - 1] && --s, o.startAtrule && o.startAtrule(t[l].toLowerCase(), t.slice(a, s)), e = "{" === t[e] ? n(t, e, i, o) : e + 1, o.endAtrule && o.endAtrule()), e
            }

            function n(t, o, r, s) {
                var a;
                for (++o, s.startBlock && s.startBlock(); o < r;) {
                    if ("}" == (a = t[o].charAt(0))) {
                        ++o;
                        break
                    }
                    " " === a || ";" === a ? o += 1 : o = "@" === a ? e(t, o, r, s, !1) : "{" === a ? n(t, o, r, s) : i(t, o, r, s)
                }
                return s.endBlock && s.endBlock(), o
            }

            function i(t, e, n, i) {
                var s, a = e,
                    l = o(t, e, n, !0);
                if (l < 0) return e === (l = ~l) ? l + 1 : l;
                if (e = l, l > a && " " === t[l - 1] && --l, s = t[e], ++e, "{" !== s) return e;
                for (i.startRuleset && i.startRuleset(t.slice(a, l)); e < n;) {
                    if ("}" === (s = t[e])) {
                        ++e;
                        break
                    }
                    " " === s ? e += 1 : e = r(t, e, n, i)
                }
                return i.endRuleset && i.endRuleset(), e < n ? e + 1 : e
            }

            function o(t, e, n, i) {
                for (var o, r = [], s = -1; e < n; ++e)
                    if ("[" === (o = t[e].charAt(0)) || "(" === o) r[++s] = o;
                    else if ("]" === o && "[" === r[s] || ")" === o && "(" === r[s]) --s;
                else if ("{" === o || "}" === o || ";" === o || "@" === o || ":" === o && !i) break;
                return s >= 0 && (e = ~(e + 1)), e
            }

            function r(t, e, n, i) {
                var r, a, l, c, u, h, d = t[e++];
                if (!s.test(d)) return e + 1;
                if (e < n && " " === t[e] && ++e, e == n || ":" !== t[e]) {
                    for (; e < n && ";" !== (c = t[e]) && "}" !== c;) ++e;
                    return e
                }
                if (++e < n && " " === t[e] && ++e, l = e, (r = o(t, e, n, !1)) < 0) r = ~r;
                else {
                    for (u = [], h = 0, a = l; a < r; ++a) " " !== (c = t[a]) && (u[h++] = c);
                    if (r < n) {
                        do {
                            if (";" === (c = t[r]) || "}" === c) break;
                            h = 0
                        } while (++r < n);
                        ";" === c && ++r
                    }
                    h && i.declaration && i.declaration(d.toLowerCase(), u)
                }
                return r
            }
            var s;
            parseCssStylesheet = function(e, n) {
                var i, o, r = lexCss(e);
                for (n.startStylesheet && n.startStylesheet(), i = 0, o = r.length; i < o;) i = " " === r[i] ? i + 1 : t(r, i, o, n);
                n.endStylesheet && n.endStylesheet()
            }, s = /^-?[a-z]/i, parseCssDeclarations = function(t, e) {
                var n, i, o = lexCss(t);
                for (n = 0, i = o.length; n < i;) n = " " !== o[n] ? r(o, n, i, e) : n + 1
            }
        }(), "undefined" != typeof window && (window.parseCssStylesheet = parseCssStylesheet, window.parseCssDeclarations = parseCssDeclarations), html4 = {}, html4.atype = {
            NONE: 0,
            URI: 1,
            URI_FRAGMENT: 11,
            SCRIPT: 2,
            STYLE: 3,
            HTML: 12,
            ID: 4,
            IDREF: 5,
            IDREFS: 6,
            GLOBAL_NAME: 7,
            LOCAL_NAME: 8,
            CLASSES: 9,
            FRAME_TARGET: 10,
            MEDIA_QUERY: 13
        }, html4.atype = html4.atype, html4.ATTRIBS = {
            "*::class": 9,
            "*::dir": 0,
            "*::draggable": 0,
            "*::hidden": 0,
            "*::id": 4,
            "*::inert": 0,
            "*::itemprop": 0,
            "*::itemref": 6,
            "*::itemscope": 0,
            "*::lang": 0,
            "*::onblur": 2,
            "*::onchange": 2,
            "*::onclick": 2,
            "*::ondblclick": 2,
            "*::onfocus": 2,
            "*::onkeydown": 2,
            "*::onkeypress": 2,
            "*::onkeyup": 2,
            "*::onload": 2,
            "*::onmousedown": 2,
            "*::onmousemove": 2,
            "*::onmouseout": 2,
            "*::onmouseover": 2,
            "*::onmouseup": 2,
            "*::onreset": 2,
            "*::onscroll": 2,
            "*::onselect": 2,
            "*::onsubmit": 2,
            "*::onunload": 2,
            "*::spellcheck": 0,
            "*::style": 3,
            "*::title": 0,
            "*::accept": 0,
            "span::name": 7,
            "span::required": 0,
            "*::translate": 0,
            "a::accesskey": 0,
            "a::coords": 0,
            "a::href": 1,
            "a::hreflang": 0,
            "a::name": 7,
            "a::onblur": 2,
            "a::onfocus": 2,
            "a::shape": 0,
            "a::tabindex": 0,
            "a::target": 10,
            "a::type": 0,
            "area::accesskey": 0,
            "area::alt": 0,
            "area::coords": 0,
            "area::href": 1,
            "area::nohref": 0,
            "area::onblur": 2,
            "area::onfocus": 2,
            "area::shape": 0,
            "area::tabindex": 0,
            "area::target": 10,
            "audio::controls": 0,
            "audio::loop": 0,
            "audio::mediagroup": 5,
            "audio::muted": 0,
            "audio::preload": 0,
            "bdo::dir": 0,
            "blockquote::cite": 1,
            "br::clear": 0,
            "button::accesskey": 0,
            "button::disabled": 0,
            "button::name": 8,
            "button::onblur": 2,
            "button::onfocus": 2,
            "button::tabindex": 0,
            "button::type": 0,
            "button::value": 0,
            "canvas::height": 0,
            "canvas::width": 0,
            "caption::align": 0,
            "col::align": 0,
            "col::char": 0,
            "col::charoff": 0,
            "col::span": 0,
            "col::valign": 0,
            "col::width": 0,
            "colgroup::align": 0,
            "colgroup::char": 0,
            "colgroup::charoff": 0,
            "colgroup::span": 0,
            "colgroup::valign": 0,
            "colgroup::width": 0,
            "command::checked": 0,
            "command::command": 5,
            "command::disabled": 0,
            "command::icon": 1,
            "command::label": 0,
            "command::radiogroup": 0,
            "command::type": 0,
            "*::data-i18n": 0,
            "*::data-i18n-list": 0,
            "*::data-i18n-list-item": 0,
            "*::data-i18n-list-item-num": 0,
            "*::data-i18n-error": 0,
            "*::data-i18n-dynamic": 0,
            "*::data-i18n-vars": 0,
            "*::data-i18n-placeholder": 0,
            "*::data-i18n-title": 0,
            "*::data-i18n-alt": 0,
            "*::data-i18n-aria-label": 0,
            "*::data-i18n-label": 0,
            "data::value": 0,
            "del::cite": 1,
            "del::datetime": 0,
            "details::open": 0,
            "dir::compact": 0,
            "div::align": 0,
            "dl::compact": 0,
            "fieldset::disabled": 0,
            "font::color": 0,
            "font::face": 0,
            "font::size": 0,
            "form::accept": 0,
            "form::action": 1,
            "form::autocomplete": 0,
            "form::enctype": 0,
            "form::method": 0,
            "form::name": 7,
            "form::novalidate": 0,
            "form::onreset": 2,
            "form::onsubmit": 2,
            "form::target": 10,
            "h1::align": 0,
            "h2::align": 0,
            "h3::align": 0,
            "h4::align": 0,
            "h5::align": 0,
            "h6::align": 0,
            "hr::align": 0,
            "hr::noshade": 0,
            "hr::size": 0,
            "hr::width": 0,
            "iframe::align": 0,
            "iframe::frameborder": 0,
            "iframe::height": 0,
            "iframe::marginheight": 0,
            "iframe::marginwidth": 0,
            "iframe::width": 0,
            "img::align": 0,
            "img::alt": 0,
            "img::border": 0,
            "img::height": 0,
            "img::hspace": 0,
            "img::ismap": 0,
            "img::name": 7,
            "img::src": 1,
            "img::usemap": 11,
            "img::vspace": 0,
            "img::width": 0,
            "input::accept": 0,
            "input::accesskey": 0,
            "input::align": 0,
            "input::alt": 0,
            "input::autocomplete": 0,
            "input::checked": 0,
            "input::disabled": 0,
            "input::inputmode": 0,
            "input::ismap": 0,
            "input::list": 5,
            "input::max": 0,
            "input::maxlength": 0,
            "input::min": 0,
            "input::multiple": 0,
            "input::name": 8,
            "input::onblur": 2,
            "input::onchange": 2,
            "input::onfocus": 2,
            "input::onselect": 2,
            "input::placeholder": 0,
            "input::readonly": 0,
            "input::required": 0,
            "input::size": 0,
            "input::src": 1,
            "input::step": 0,
            "input::tabindex": 0,
            "input::type": 0,
            "input::usemap": 11,
            "input::value": 0,
            "ins::cite": 1,
            "ins::datetime": 0,
            "label::accesskey": 0,
            "label::for": 5,
            "label::onblur": 2,
            "label::onfocus": 2,
            "legend::accesskey": 0,
            "legend::align": 0,
            "li::type": 0,
            "li::value": 0,
            "map::name": 7,
            "menu::compact": 0,
            "menu::label": 0,
            "menu::type": 0,
            "meter::high": 0,
            "meter::low": 0,
            "meter::max": 0,
            "meter::min": 0,
            "meter::value": 0,
            "ol::compact": 0,
            "ol::reversed": 0,
            "ol::start": 0,
            "ol::type": 0,
            "optgroup::disabled": 0,
            "optgroup::label": 0,
            "option::disabled": 0,
            "option::label": 0,
            "option::selected": 0,
            "option::value": 0,
            "output::for": 6,
            "output::name": 8,
            "p::align": 0,
            "pre::width": 0,
            "progress::max": 0,
            "progress::min": 0,
            "progress::value": 0,
            "q::cite": 1,
            "select::autocomplete": 0,
            "select::disabled": 0,
            "select::multiple": 0,
            "select::name": 8,
            "select::onblur": 2,
            "select::onchange": 2,
            "select::onfocus": 2,
            "select::required": 0,
            "select::size": 0,
            "select::tabindex": 0,
            "source::type": 0,
            "table::align": 0,
            "table::bgcolor": 0,
            "table::border": 0,
            "table::cellpadding": 0,
            "table::cellspacing": 0,
            "table::frame": 0,
            "table::rules": 0,
            "table::summary": 0,
            "table::width": 0,
            "tbody::align": 0,
            "tbody::char": 0,
            "tbody::charoff": 0,
            "tbody::valign": 0,
            "td::abbr": 0,
            "td::align": 0,
            "td::axis": 0,
            "td::bgcolor": 0,
            "td::char": 0,
            "td::charoff": 0,
            "td::colspan": 0,
            "td::headers": 6,
            "td::height": 0,
            "td::nowrap": 0,
            "td::rowspan": 0,
            "td::scope": 0,
            "td::valign": 0,
            "td::width": 0,
            "textarea::accesskey": 0,
            "textarea::autocomplete": 0,
            "textarea::cols": 0,
            "textarea::disabled": 0,
            "textarea::inputmode": 0,
            "textarea::name": 8,
            "textarea::onblur": 2,
            "textarea::onchange": 2,
            "textarea::onfocus": 2,
            "textarea::onselect": 2,
            "textarea::placeholder": 0,
            "textarea::readonly": 0,
            "textarea::required": 0,
            "textarea::rows": 0,
            "textarea::tabindex": 0,
            "textarea::wrap": 0,
            "tfoot::align": 0,
            "tfoot::char": 0,
            "tfoot::charoff": 0,
            "tfoot::valign": 0,
            "th::abbr": 0,
            "th::align": 0,
            "th::axis": 0,
            "th::bgcolor": 0,
            "th::char": 0,
            "th::charoff": 0,
            "th::colspan": 0,
            "th::headers": 6,
            "th::height": 0,
            "th::nowrap": 0,
            "th::rowspan": 0,
            "th::scope": 0,
            "th::valign": 0,
            "th::width": 0,
            "thead::align": 0,
            "thead::char": 0,
            "thead::charoff": 0,
            "thead::valign": 0,
            "tr::align": 0,
            "tr::bgcolor": 0,
            "tr::char": 0,
            "tr::charoff": 0,
            "tr::valign": 0,
            "track::default": 0,
            "track::kind": 0,
            "track::label": 0,
            "track::srclang": 0,
            "ul::compact": 0,
            "ul::type": 0,
            "video::controls": 0,
            "video::height": 0,
            "video::loop": 0,
            "video::mediagroup": 5,
            "video::muted": 0,
            "video::poster": 1,
            "video::preload": 0,
            "video::width": 0
        }, html4.ATTRIBS = html4.ATTRIBS, html4.eflags = {
            OPTIONAL_ENDTAG: 1,
            EMPTY: 2,
            CDATA: 4,
            RCDATA: 8,
            UNSAFE: 16,
            FOLDABLE: 32,
            SCRIPT: 64,
            STYLE: 128,
            VIRTUALIZED: 256
        }, html4.eflags = html4.eflags, html4.ELEMENTS = {
            a: 0,
            abbr: 0,
            acronym: 0,
            address: 0,
            applet: 272,
            area: 2,
            article: 0,
            aside: 0,
            audio: 0,
            b: 0,
            base: 274,
            basefont: 274,
            bdi: 0,
            bdo: 0,
            big: 0,
            blockquote: 0,
            body: 305,
            br: 2,
            button: 0,
            canvas: 0,
            caption: 0,
            center: 0,
            cite: 0,
            code: 0,
            col: 2,
            colgroup: 1,
            command: 2,
            data: 0,
            datalist: 0,
            dd: 1,
            del: 0,
            details: 0,
            dfn: 0,
            dialog: 272,
            dir: 0,
            div: 0,
            dl: 0,
            dt: 1,
            em: 0,
            fieldset: 0,
            figcaption: 0,
            figure: 0,
            font: 0,
            footer: 0,
            form: 0,
            frame: 274,
            frameset: 272,
            h1: 0,
            h2: 0,
            h3: 0,
            h4: 0,
            h5: 0,
            h6: 0,
            head: 305,
            header: 0,
            hgroup: 0,
            hr: 2,
            html: 305,
            i: 0,
            iframe: 4,
            img: 2,
            input: 2,
            ins: 0,
            isindex: 274,
            kbd: 0,
            keygen: 274,
            label: 0,
            legend: 0,
            li: 1,
            link: 274,
            map: 0,
            mark: 0,
            menu: 0,
            meta: 274,
            meter: 0,
            nav: 0,
            nobr: 0,
            noembed: 276,
            noframes: 276,
            noscript: 276,
            object: 272,
            ol: 0,
            optgroup: 0,
            option: 1,
            output: 0,
            p: 1,
            param: 274,
            pre: 0,
            progress: 0,
            q: 0,
            s: 0,
            samp: 0,
            script: 84,
            section: 0,
            select: 0,
            small: 0,
            source: 2,
            span: 0,
            strike: 0,
            strong: 0,
            style: 148,
            sub: 0,
            summary: 0,
            sup: 0,
            table: 0,
            tbody: 1,
            td: 1,
            textarea: 8,
            tfoot: 1,
            th: 1,
            thead: 1,
            time: 0,
            title: 280,
            tr: 1,
            track: 2,
            tt: 0,
            u: 0,
            ul: 0,
            "var": 0,
            video: 0,
            wbr: 2
        }, html4.ELEMENTS = html4.ELEMENTS, html4.ELEMENT_DOM_INTERFACES = {
            a: "HTMLAnchorElement",
            abbr: "HTMLElement",
            acronym: "HTMLElement",
            address: "HTMLElement",
            applet: "HTMLAppletElement",
            area: "HTMLAreaElement",
            article: "HTMLElement",
            aside: "HTMLElement",
            audio: "HTMLAudioElement",
            b: "HTMLElement",
            base: "HTMLBaseElement",
            basefont: "HTMLBaseFontElement",
            bdi: "HTMLElement",
            bdo: "HTMLElement",
            big: "HTMLElement",
            blockquote: "HTMLQuoteElement",
            body: "HTMLBodyElement",
            br: "HTMLBRElement",
            button: "HTMLButtonElement",
            canvas: "HTMLCanvasElement",
            caption: "HTMLTableCaptionElement",
            center: "HTMLElement",
            cite: "HTMLElement",
            code: "HTMLElement",
            col: "HTMLTableColElement",
            colgroup: "HTMLTableColElement",
            command: "HTMLCommandElement",
            data: "HTMLElement",
            datalist: "HTMLDataListElement",
            dd: "HTMLElement",
            del: "HTMLModElement",
            details: "HTMLDetailsElement",
            dfn: "HTMLElement",
            dialog: "HTMLDialogElement",
            dir: "HTMLDirectoryElement",
            div: "HTMLDivElement",
            dl: "HTMLDListElement",
            dt: "HTMLElement",
            em: "HTMLElement",
            fieldset: "HTMLFieldSetElement",
            figcaption: "HTMLElement",
            figure: "HTMLElement",
            font: "HTMLFontElement",
            footer: "HTMLElement",
            form: "HTMLFormElement",
            frame: "HTMLFrameElement",
            frameset: "HTMLFrameSetElement",
            h1: "HTMLHeadingElement",
            h2: "HTMLHeadingElement",
            h3: "HTMLHeadingElement",
            h4: "HTMLHeadingElement",
            h5: "HTMLHeadingElement",
            h6: "HTMLHeadingElement",
            head: "HTMLHeadElement",
            header: "HTMLElement",
            hgroup: "HTMLElement",
            hr: "HTMLHRElement",
            html: "HTMLHtmlElement",
            i: "HTMLElement",
            iframe: "HTMLIFrameElement",
            img: "HTMLImageElement",
            input: "HTMLInputElement",
            ins: "HTMLModElement",
            isindex: "HTMLUnknownElement",
            kbd: "HTMLElement",
            keygen: "HTMLKeygenElement",
            label: "HTMLLabelElement",
            legend: "HTMLLegendElement",
            li: "HTMLLIElement",
            link: "HTMLLinkElement",
            map: "HTMLMapElement",
            mark: "HTMLElement",
            menu: "HTMLMenuElement",
            meta: "HTMLMetaElement",
            meter: "HTMLMeterElement",
            nav: "HTMLElement",
            nobr: "HTMLElement",
            noembed: "HTMLElement",
            noframes: "HTMLElement",
            noscript: "HTMLElement",
            object: "HTMLObjectElement",
            ol: "HTMLOListElement",
            optgroup: "HTMLOptGroupElement",
            option: "HTMLOptionElement",
            output: "HTMLOutputElement",
            p: "HTMLParagraphElement",
            param: "HTMLParamElement",
            pre: "HTMLPreElement",
            progress: "HTMLProgressElement",
            q: "HTMLQuoteElement",
            s: "HTMLElement",
            samp: "HTMLElement",
            script: "HTMLScriptElement",
            section: "HTMLElement",
            select: "HTMLSelectElement",
            small: "HTMLElement",
            source: "HTMLSourceElement",
            span: "HTMLSpanElement",
            strike: "HTMLElement",
            strong: "HTMLElement",
            style: "HTMLStyleElement",
            sub: "HTMLElement",
            summary: "HTMLElement",
            sup: "HTMLElement",
            table: "HTMLTableElement",
            tbody: "HTMLTableSectionElement",
            td: "HTMLTableDataCellElement",
            textarea: "HTMLTextAreaElement",
            tfoot: "HTMLTableSectionElement",
            th: "HTMLTableHeaderCellElement",
            thead: "HTMLTableSectionElement",
            time: "HTMLTimeElement",
            title: "HTMLTitleElement",
            tr: "HTMLTableRowElement",
            track: "HTMLTrackElement",
            tt: "HTMLElement",
            u: "HTMLElement",
            ul: "HTMLUListElement",
            "var": "HTMLElement",
            video: "HTMLVideoElement",
            wbr: "HTMLElement"
        }, html4.ELEMENT_DOM_INTERFACES = html4.ELEMENT_DOM_INTERFACES, html4.ueffects = {
            NOT_LOADED: 0,
            SAME_DOCUMENT: 1,
            NEW_DOCUMENT: 2
        }, html4.ueffects = html4.ueffects, html4.URIEFFECTS = {
            "a::href": 2,
            "area::href": 2,
            "blockquote::cite": 0,
            "command::icon": 1,
            "del::cite": 0,
            "form::action": 2,
            "img::src": 1,
            "input::src": 1,
            "ins::cite": 0,
            "q::cite": 0,
            "video::poster": 1
        }, html4.URIEFFECTS = html4.URIEFFECTS, html4.ltypes = {
            UNSANDBOXED: 2,
            SANDBOXED: 1,
            DATA: 0
        }, html4.ltypes = html4.ltypes, html4.LOADERTYPES = {
            "a::href": 2,
            "area::href": 2,
            "blockquote::cite": 2,
            "command::icon": 1,
            "del::cite": 2,
            "form::action": 2,
            "img::src": 1,
            "input::src": 1,
            "ins::cite": 2,
            "q::cite": 2,
            "video::poster": 1
        }, html4.LOADERTYPES = html4.LOADERTYPES, "undefined" != typeof window && (window.html4 = html4), "i" !== "I".toLowerCase()) throw "I/i problem";
    html = function(t) {
        function e(t) {
            var e, n;
            return A.hasOwnProperty(t) ? A[t] : (e = t.match(D)) ? String.fromCharCode(parseInt(e[1], 10)) : (e = t.match(F)) ? String.fromCharCode(parseInt(e[1], 16)) : H && W.test(t) ? (H.innerHTML = "&" + t + ";", n = H.textContent, A[t] = n, n) : "&" + t + ";"
        }

        function n(t, n) {
            return e(n)
        }

        function i(t) {
            return t.replace(q, "")
        }

        function o(t) {
            return t.replace(L, n)
        }

        function r(t) {
            return ("" + t).replace(O, "&amp;").replace(U, "&lt;").replace(M, "&gt;").replace(V, "&#34;")
        }

        function s(t) {
            return t.replace(j, "&amp;$1").replace(U, "&lt;").replace(M, "&gt;")
        }

        function a(t) {
            var e = {
                cdata: t.cdata || t.cdata,
                comment: t.comment || t.comment,
                endDoc: t.endDoc || t.endDoc,
                endTag: t.endTag || t.endTag,
                pcdata: t.pcdata || t.pcdata,
                rcdata: t.rcdata || t.rcdata,
                startDoc: t.startDoc || t.startDoc,
                startTag: t.startTag || t.startTag
            };
            return function(t, n) {
                return l(t, e, n)
            }
        }

        function l(t, e, n) {
            u(e, h(t), 0, {
                noMoreGT: !1,
                noMoreEndComments: !1
            }, n)
        }

        function c(t, e, n, i, o) {
            return function() {
                u(t, e, n, i, o)
            }
        }

        function u(e, n, i, o, r) {
            var s, a, l, u, h, g, m, v, b;
            try {
                for (e.startDoc && 0 == i && e.startDoc(r), v = i, u = n.length; v < u;) switch (a = n[v++], g = n[v], a) {
                    case "&":
                        P.test(g) ? (e.pcdata && e.pcdata("&" + g, r, N, c(e, n, v, o, r)), ++v) : e.pcdata && e.pcdata("&amp;", r, N, c(e, n, v, o, r));
                        break;
                    case "</":
                        (h = /^([-\w:]+)[^\'\"]*/.exec(g)) ? h[0].length === g.length && ">" === n[v + 1] ? (v += 2, b = h[1].toLowerCase(), e.endTag && e.endTag(b, r, N, c(e, n, v, o, r))) : v = d(n, v, e, r, N, o): e.pcdata && e.pcdata("&lt;/", r, N, c(e, n, v, o, r));
                        break;
                    case "<":
                        (h = /^([-\w:]+)\s*\/?/.exec(g)) ? h[0].length === g.length && ">" === n[v + 1] ? (v += 2, b = h[1].toLowerCase(), e.startTag && e.startTag(b, [], r, N, c(e, n, v, o, r)), (l = t.ELEMENTS[b]) & I && (v = f(n, {
                            name: b,
                            next: v,
                            eflags: l
                        }, e, r, N, o))) : v = p(n, v, e, r, N, o): e.pcdata && e.pcdata("&lt;", r, N, c(e, n, v, o, r));
                        break;
                    case "<!--":
                        if (!o.noMoreEndComments) {
                            for (m = v + 1; m < u && (">" !== n[m] || !/--$/.test(n[m - 1])); ++m);
                            m < u ? (e.comment && (s = n.slice(v, m).join(""), e.comment(s.substr(0, s.length - 2), r, N, c(e, n, m + 1, o, r))), v = m + 1) : o.noMoreEndComments = !0
                        }
                        o.noMoreEndComments && e.pcdata && e.pcdata("&lt;!--", r, N, c(e, n, v, o, r));
                        break;
                    case "<!":
                        if (/^\w/.test(g)) {
                            if (!o.noMoreGT) {
                                for (m = v + 1; m < u && ">" !== n[m]; ++m);
                                m < u ? v = m + 1 : o.noMoreGT = !0
                            }
                            o.noMoreGT && e.pcdata && e.pcdata("&lt;!", r, N, c(e, n, v, o, r))
                        } else e.pcdata && e.pcdata("&lt;!", r, N, c(e, n, v, o, r));
                        break;
                    case "<?":
                        if (!o.noMoreGT) {
                            for (m = v + 1; m < u && ">" !== n[m]; ++m);
                            m < u ? v = m + 1 : o.noMoreGT = !0
                        }
                        o.noMoreGT && e.pcdata && e.pcdata("&lt;?", r, N, c(e, n, v, o, r));
                        break;
                    case ">":
                        e.pcdata && e.pcdata("&gt;", r, N, c(e, n, v, o, r));
                        break;
                    case "":
                        break;
                    default:
                        e.pcdata && e.pcdata(a, r, N, c(e, n, v, o, r))
                }
                e.endDoc && e.endDoc(r)
            } catch (y) {
                if (y !== N) throw y
            }
        }

        function h(t) {
            var e, n, i, o = /(\x3c\/|\x3c\!--|\x3c[!?]|[\x26\x3c\x3e])/g;
            if (t += "", Q) return t.split(o);
            for (i = [], e = 0; null !== (n = o.exec(t));) i.push(t.substring(e, n.index)), i.push(n[0]), e = n.index + n[0].length;
            return i.push(t.substring(e)), i
        }

        function d(t, e, n, i, o, r) {
            var s = g(t, e);
            return s ? (n.endTag && n.endTag(s.name, i, o, c(n, t, e, r, i)), s.next) : t.length
        }

        function p(t, e, n, i, o, r) {
            var s = g(t, e);
            return s ? (n.startTag && n.startTag(s.name, s.attrs, i, o, c(n, t, s.next, r, i)), s.eflags & I ? f(t, s, n, i, o, r) : s.next) : t.length
        }

        function f(e, n, i, o, r, a) {
            var l, u, h, d, p = e.length;
            for (B.hasOwnProperty(n.name) || (B[n.name] = new RegExp("^" + n.name + "(?:[\\s\\/]|$)", "i")), d = B[n.name], u = n.next, h = n.next + 1; h < p && ("</" !== e[h - 1] || !d.test(e[h])); ++h);
            if (h < p && (h -= 1), l = e.slice(u, h).join(""), n.eflags & t.eflags.CDATA) i.cdata && i.cdata(l, o, r, c(i, e, h, a, o));
            else {
                if (!(n.eflags & t.eflags.RCDATA)) throw new Error("bug");
                i.rcdata && i.rcdata(s(l), o, r, c(i, e, h, a, o))
            }
            return h
        }

        function g(e, n) {
            var i, o, r, s, a, l, c, u, h, d = /^([-\w:]+)/.exec(e[n]),
                p = {};
            for (p.name = d[1].toLowerCase(), p.eflags = t.ELEMENTS[p.name], a = e[n].substr(d[0].length), c = n + 1, l = e.length; c < l && ">" !== e[c]; ++c) a += e[c];
            if (!(l <= c)) {
                for (s = [];
                    "" !== a;)
                    if (d = $.exec(a)) {
                        if (d[4] && !d[5] || d[6] && !d[7]) {
                            for (u = d[4] || d[6], h = !1, r = [a, e[c++]]; c < l; ++c) {
                                if (h) {
                                    if (">" === e[c]) break
                                } else 0 <= e[c].indexOf(u) && (h = !0);
                                r.push(e[c])
                            }
                            if (l <= c) break;
                            a = r.join("");
                            continue
                        }
                        i = d[1].toLowerCase(), o = d[2] ? m(d[3]) : "", s.push(i, o), a = a.substr(d[0].length)
                    } else a = a.replace(/^[\s\S][^a-z\s]*/, "");
                return p.attrs = s, p.next = c + 1, p
            }
        }

        function m(t) {
            var e = t.charCodeAt(0);
            return (34 === e || 39 === e) && (t = t.substr(1, t.length - 2)), o(i(t))
        }

        function v(e) {
            var n, i, o = function(t, e) {
                n || e.push(t)
            };
            return a({
                startDoc: function() {
                    i = [], n = !1
                },
                startTag: function(o, s, a) {
                    var l, c, u, h, d, p, f, g, m;
                    if (!n && t.ELEMENTS.hasOwnProperty(o) && !((u = t.ELEMENTS[o]) & t.eflags.FOLDABLE))
                        if (c = e(o, s)) {
                            if ("object" != typeof c) throw new Error("tagPolicy did not return object (old API?)");
                            if (!("attribs" in c)) throw new Error("tagPolicy gave no attribs");
                            s = c.attribs, "tagName" in c ? (g = c.tagName, h = t.ELEMENTS[g]) : (g = o, h = u), u & t.eflags.OPTIONAL_ENDTAG && ((f = i[i.length - 1]) && f.orig === o && (f.rep !== g || o !== g) && a.push("</", f.rep, ">")), u & t.eflags.EMPTY || i.push({
                                orig: o,
                                rep: g
                            }), a.push("<", g);
                            for (d = 0, p = s.length; d < p; d += 2) l = s[d], null != (m = s[d + 1]) && a.push(" ", l, '="', r(m), '"');
                            a.push(">"), u & t.eflags.EMPTY && !(h & t.eflags.EMPTY) && a.push("</", g, ">")
                        } else n = !(u & t.eflags.EMPTY)
                },
                endTag: function(e, o) {
                    var r, s, a, l, c;
                    if (n) n = !1;
                    else if (t.ELEMENTS.hasOwnProperty(e) && !((r = t.ELEMENTS[e]) & (t.eflags.EMPTY | t.eflags.FOLDABLE))) {
                        if (r & t.eflags.OPTIONAL_ENDTAG) {
                            for (a = i.length; --a >= 0 && (l = i[a].orig) !== e;)
                                if (!(t.ELEMENTS[l] & t.eflags.OPTIONAL_ENDTAG)) return
                        } else
                            for (a = i.length; --a >= 0 && i[a].orig !== e;);
                        if (a < 0) return;
                        for (s = i.length; --s > a;) c = i[s].rep, t.ELEMENTS[c] & t.eflags.OPTIONAL_ENDTAG || o.push("</", c, ">");
                        a < i.length && (e = i[a].rep), i.length = a, o.push("</", e, ">")
                    }
                },
                pcdata: o,
                rcdata: o,
                cdata: o,
                endDoc: function(t) {
                    for (; i.length; --i.length) t.push("</", i[i.length - 1].rep, ">")
                }
            })
        }

        function b(t, e, n, i, o) {
            var r, s;
            if (!o) return null;
            try {
                if ((r = URI.parse("" + t)) && (!r.hasScheme() || S.test(r.getScheme()))) return (s = o(r, e, n, i)) ? s.toString() : null
            } catch (a) {
                return null
            }
            return null
        }

        function y(t, e, n, i, o) {
            var r;
            n || t(e + " removed", {
                change: "removed",
                tagName: e
            }), i !== o && (r = "changed", i && !o ? r = "removed" : !i && o && (r = "added"), t(e + "." + n + " " + r, {
                change: r,
                tagName: e,
                attribName: n,
                oldValue: i,
                newValue: o
            }))
        }

        function w(t, e, n) {
            var i = e + "::" + n;
            return t.hasOwnProperty(i) ? t[i] : (i = "*::" + n, t.hasOwnProperty(i) ? t[i] : void 0)
        }

        function _(e, n) {
            return w(t.LOADERTYPES, e, n)
        }

        function x(e, n) {
            return w(t.URIEFFECTS, e, n)
        }

        function C(e, n, i, o, r) {
            var s, a, l, c, u, h, d;
            for (c = 0; c < n.length; c += 2) {
                if (a = n[c], u = d = n[c + 1], l = null, s = e + "::" + a, (t.ATTRIBS.hasOwnProperty(s) || (s = "*::" + a, t.ATTRIBS.hasOwnProperty(s))) && (l = t.ATTRIBS[s]), null !== l) switch (l) {
                    case t.atype.NONE:
                        break;
                    case t.atype.SCRIPT:
                        d = null, r && y(r, e, a, u, d);
                        break;
                    case t.atype.STYLE:
                        if (void 0 === G) {
                            d = null, r && y(r, e, a, u, d);
                            break
                        }
                        h = [], G(d, {
                            declaration: function(e, n) {
                                var o = e.toLowerCase(),
                                    r = R[o];
                                r && (K(o, r, n, i ? function(e) {
                                    return b(e, t.ueffects.SAME_DOCUMENT, t.ltypes.SANDBOXED, {
                                        TYPE: "CSS",
                                        CSS_PROP: o
                                    }, i)
                                } : null), h.push(e + ": " + n.join(" ")))
                            }
                        }), d = h.length > 0 ? h.join(" ; ") : null, r && y(r, e, a, u, d);
                        break;
                    case t.atype.ID:
                    case t.atype.IDREF:
                    case t.atype.IDREFS:
                    case t.atype.GLOBAL_NAME:
                    case t.atype.LOCAL_NAME:
                    case t.atype.CLASSES:
                        d = o ? o(d) : d, r && y(r, e, a, u, d);
                        break;
                    case t.atype.URI:
                        d = b(d, x(e, a), _(e, a), {
                            TYPE: "MARKUP",
                            XML_ATTR: a,
                            XML_TAG: e
                        }, i), r && y(r, e, a, u, d);
                        break;
                    case t.atype.URI_FRAGMENT:
                        d && "#" === d.charAt(0) ? (d = d.substring(1), null != (d = o ? o(d) : d) && (d = "#" + d)) : d = null, r && y(r, e, a, u, d);
                        break;
                    default:
                        d = null, r && y(r, e, a, u, d)
                } else d = null, r && y(r, e, a, u, d);
                n[c + 1] = d
            }
            return n
        }

        function k(e, n, i) {
            return function(o, r) {
                if (!(t.ELEMENTS[o] & t.eflags.UNSAFE)) return {
                    attribs: C(o, r, e, n, i)
                };
                i && y(i, o, undefined, undefined, undefined)
            }
        }

        function T(t, e) {
            var n = [];
            return v(e)(t, n), n.join("")
        }

        function E(t, e, n, i) {
            return T(t, k(e, n, i))
        }
        var S, $, I, A, L, P, O, N, R, D, B, H, M, F, z, j, U, q, G, V, W, K, Q;
        return "undefined" != typeof window && (G = window.parseCssDeclarations, K = window.sanitizeCssProperty, R = window.cssSchema), A = {
            lt: "<",
            LT: "<",
            gt: ">",
            GT: ">",
            amp: "&",
            AMP: "&",
            quot: '"',
            apos: "'",
            nbsp: "\xa0"
        }, D = /^#(\d+)$/, F = /^#x([0-9A-Fa-f]+)$/, W = /^[A-Za-z][A-za-z0-9]+$/, H = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null, q = /\0/g, L = /\x26(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g, P = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/, O = /\x26/g, j = /\x26([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi, U = /[\x3c]/g, M = /\x3e/g, V = /\"/g, $ = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"), Q = 3 === "a,b".split(/(,)/).length, I = t.eflags.CDATA | t.eflags.RCDATA, N = {}, B = {}, S = /^(?:https?|mailto)$/i, (z = {}).escapeAttrib = z.escapeAttrib = r, z.makeHtmlSanitizer = z.makeHtmlSanitizer = v, z.makeSaxParser = z.makeSaxParser = a, z.makeTagPolicy = z.makeTagPolicy = k, z.normalizeRCData = z.normalizeRCData = s, z.sanitize = z.sanitize = E, z.sanitizeAttribs = z.sanitizeAttribs = C, z.sanitizeWithPolicy = z.sanitizeWithPolicy = T, z.unescapeEntities = z.unescapeEntities = o, z
    }(html4), html_sanitize = html.sanitize, "undefined" != typeof window && (window.html = html, window.html_sanitize = html_sanitize);

}