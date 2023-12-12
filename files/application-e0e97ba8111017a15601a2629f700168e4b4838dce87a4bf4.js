function setHomePageHeight() {
//   $(".nocurtains").length || $("#cover-photo").height($("#home").height());
}
function customResizeCurtains() {
//   setTimeout("window.curtainsResizeNow = true;", 150),
//     setTimeout("window.curtainsResizeNow = true;", 300),
//     setTimeout("window.curtainsResizeNow = true;", 500);
}
function setHomePageCoverPhoto() {
//   var e = $("#cover-photo");
//   if (0 !== e.length) {
//     setHomePageHeight();
//     var t = e.data("hi-res-url");
//     if (e.data("low-res-url") && t) {
//       var n = new Image();
//       (n.onload = function () {
//         e.css("background-image", "url('" + t + "')");
//       }),
//         (n.src = t);
//     }
//   }
}
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  function n(e, t, n) {
    var i,
      r,
      o = (n = n || xe).createElement("script");
    if (((o.text = e), t))
      for (i in we)
        (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
          o.setAttribute(i, r);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function i(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? pe[he.call(e)] || "object"
      : typeof e;
  }
  function r(e) {
    var t = !!e && "length" in e && e.length,
      n = i(e);
    return (
      !$e(e) &&
      !be(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e))
    );
  }
  function o(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function a(e, t, n) {
    return $e(t)
      ? Se.grep(e, function (e, i) {
          return !!t.call(e, i, e) !== n;
        })
      : t.nodeType
      ? Se.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? Se.grep(e, function (e) {
          return de.call(t, e) > -1 !== n;
        })
      : Se.filter(t, e, n);
  }
  function s(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function u(e) {
    var t = {};
    return (
      Se.each(e.match(Ie) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function l(e) {
    return e;
  }
  function c(e) {
    throw e;
  }
  function f(e, t, n, i) {
    var r;
    try {
      e && $e((r = e.promise))
        ? r.call(e).done(t).fail(n)
        : e && $e((r = e.then))
        ? r.call(e, t, n)
        : t.apply(undefined, [e].slice(i));
    } catch (e) {
      n.apply(undefined, [e]);
    }
  }
  function d() {
    xe.removeEventListener("DOMContentLoaded", d),
      e.removeEventListener("load", d),
      Se.ready();
  }
  function p(e, t) {
    return t.toUpperCase();
  }
  function h(e) {
    return e.replace(Le, "ms-").replace(He, p);
  }
  function m() {
    this.expando = Se.expando + m.uid++;
  }
  function g(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Ue.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function v(e, t, n) {
    var i;
    if (n === undefined && 1 === e.nodeType)
      if (
        ((i = "data-" + t.replace(We, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(i)))
      ) {
        try {
          n = g(n);
        } catch (r) {}
        Fe.set(e, t, n);
      } else n = undefined;
    return n;
  }
  function y(e, t, n, i) {
    var r,
      o,
      a = 20,
      s = i
        ? function () {
            return i.cur();
          }
        : function () {
            return Se.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (Se.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (Se.cssNumber[t] || ("px" !== l && +u)) &&
        ze.exec(Se.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; a--; )
        Se.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), Se.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        i && ((i.unit = l), (i.start = c), (i.end = r))),
      r
    );
  }
  function $(e) {
    var t,
      n = e.ownerDocument,
      i = e.nodeName,
      r = Je[i];
    return (
      r ||
      ((t = n.body.appendChild(n.createElement(i))),
      (r = Se.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === r && (r = "block"),
      (Je[i] = r),
      r)
    );
  }
  function b(e, t) {
    for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
      (i = e[o]).style &&
        ((n = i.style.display),
        t
          ? ("none" === n &&
              ((r[o] = Ve.get(i, "display") || null),
              r[o] || (i.style.display = "")),
            "" === i.style.display && Ye(i) && (r[o] = $(i)))
          : "none" !== n && ((r[o] = "none"), Ve.set(i, "display", n)));
    for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
    return e;
  }
  function x(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      t === undefined || (t && o(e, t)) ? Se.merge([e], n) : n
    );
  }
  function w(e, t) {
    for (var n = 0, i = e.length; n < i; n++)
      Ve.set(e[n], "globalEval", !t || Ve.get(t[n], "globalEval"));
  }
  function C(e, t, n, r, o) {
    for (
      var a,
        s,
        u,
        l,
        c,
        f,
        d = t.createDocumentFragment(),
        p = [],
        h = 0,
        m = e.length;
      h < m;
      h++
    )
      if ((a = e[h]) || 0 === a)
        if ("object" === i(a)) Se.merge(p, a.nodeType ? [a] : a);
        else if (ot.test(a)) {
          for (
            s = s || d.appendChild(t.createElement("div")),
              u = (nt.exec(a) || ["", ""])[1].toLowerCase(),
              l = rt[u] || rt._default,
              s.innerHTML = l[1] + Se.htmlPrefilter(a) + l[2],
              f = l[0];
            f--;

          )
            s = s.lastChild;
          Se.merge(p, s.childNodes), ((s = d.firstChild).textContent = "");
        } else p.push(t.createTextNode(a));
    for (d.textContent = "", h = 0; (a = p[h++]); )
      if (r && Se.inArray(a, r) > -1) o && o.push(a);
      else if (((c = Xe(a)), (s = x(d.appendChild(a), "script")), c && w(s), n))
        for (f = 0; (a = s[f++]); ) it.test(a.type || "") && n.push(a);
    return d;
  }
  function S() {
    return !0;
  }
  function T() {
    return !1;
  }
  function k(e, t) {
    return (e === E()) == ("focus" === t);
  }
  function E() {
    try {
      return xe.activeElement;
    } catch (e) {}
  }
  function A(e, t, n, i, r, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((i = i || n), (n = undefined)), t))
        A(e, s, n, i, t[s], o);
      return e;
    }
    if (
      (null == i && null == r
        ? ((r = n), (i = n = undefined))
        : null == r &&
          ("string" == typeof n
            ? ((r = i), (i = undefined))
            : ((r = i), (i = n), (n = undefined))),
      !1 === r)
    )
      r = T;
    else if (!r) return e;
    return (
      1 === o &&
        ((a = r),
        ((r = function (e) {
          return Se().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = Se.guid++))),
      e.each(function () {
        Se.event.add(this, t, r, i, n);
      })
    );
  }
  function _(e, t, n) {
    n
      ? (Ve.set(e, t, !1),
        Se.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              r,
              o = Ve.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (o.length)
                (Se.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((o = le.call(arguments)),
                Ve.set(this, t, o),
                (i = n(this, t)),
                this[t](),
                o !== (r = Ve.get(this, t)) || i
                  ? Ve.set(this, t, !1)
                  : (r = {}),
                o !== r)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), r.value
                );
            } else
              o.length &&
                (Ve.set(this, t, {
                  value: Se.event.trigger(
                    Se.extend(o[0], Se.Event.prototype),
                    o.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : Ve.get(e, t) === undefined && Se.event.add(e, t, S);
  }
  function O(e, t) {
    return (
      (o(e, "table") &&
        o(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        Se(e).children("tbody")[0]) ||
      e
    );
  }
  function N(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function D(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function M(e, t) {
    var n, i, r, o, a, s;
    if (1 === t.nodeType) {
      if (Ve.hasData(e) && (s = Ve.get(e).events))
        for (r in (Ve.remove(t, "handle events"), s))
          for (n = 0, i = s[r].length; n < i; n++) Se.event.add(t, r, s[r][n]);
      Fe.hasData(e) &&
        ((o = Fe.access(e)), (a = Se.extend({}, o)), Fe.set(t, a));
    }
  }
  function I(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && tt.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function j(e, t, i, r) {
    t = ce(t);
    var o,
      a,
      s,
      u,
      l,
      c,
      f = 0,
      d = e.length,
      p = d - 1,
      h = t[0],
      m = $e(h);
    if (m || (d > 1 && "string" == typeof h && !ye.checkClone && ct.test(h)))
      return e.each(function (n) {
        var o = e.eq(n);
        m && (t[0] = h.call(this, n, o.html())), j(o, t, i, r);
      });
    if (
      d &&
      ((a = (o = C(t, e[0].ownerDocument, !1, e, r)).firstChild),
      1 === o.childNodes.length && (o = a),
      a || r)
    ) {
      for (u = (s = Se.map(x(o, "script"), N)).length; f < d; f++)
        (l = o),
          f !== p &&
            ((l = Se.clone(l, !0, !0)), u && Se.merge(s, x(l, "script"))),
          i.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, Se.map(s, D), f = 0; f < u; f++)
          (l = s[f]),
            it.test(l.type || "") &&
              !Ve.access(l, "globalEval") &&
              Se.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? Se._evalUrl &&
                  !l.noModule &&
                  Se._evalUrl(
                    l.src,
                    { nonce: l.nonce || l.getAttribute("nonce") },
                    c
                  )
                : n(l.textContent.replace(ft, ""), l, c));
    }
    return e;
  }
  function P(e, t, n) {
    for (var i, r = t ? Se.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
      n || 1 !== i.nodeType || Se.cleanData(x(i)),
        i.parentNode &&
          (n && Xe(i) && w(x(i, "script")), i.parentNode.removeChild(i));
    return e;
  }
  function R(e, t, n) {
    var i,
      r,
      o,
      a,
      s = e.style;
    return (
      (n = n || pt(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          Xe(e) ||
          (a = Se.style(e, t)),
        !ye.pixelBoxStyles() &&
          dt.test(a) &&
          mt.test(t) &&
          ((i = s.width),
          (r = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = i),
          (s.minWidth = r),
          (s.maxWidth = o))),
      a !== undefined ? a + "" : a
    );
  }
  function L(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function H(e) {
    for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; )
      if ((e = gt[n] + t) in vt) return e;
  }
  function q(e) {
    var t = Se.cssProps[e] || yt[e];
    return t || (e in vt ? e : (yt[e] = H(e) || e));
  }
  function V(e, t, n) {
    var i = ze.exec(t);
    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
  }
  function F(e, t, n, i, r, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (i ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += Se.css(e, n + Ge[a], !0, r)),
        i
          ? ("content" === n && (u -= Se.css(e, "padding" + Ge[a], !0, r)),
            "margin" !== n &&
              (u -= Se.css(e, "border" + Ge[a] + "Width", !0, r)))
          : ((u += Se.css(e, "padding" + Ge[a], !0, r)),
            "padding" !== n
              ? (u += Se.css(e, "border" + Ge[a] + "Width", !0, r))
              : (s += Se.css(e, "border" + Ge[a] + "Width", !0, r)));
    return (
      !i &&
        o >= 0 &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function U(e, t, n) {
    var i = pt(e),
      r =
        (!ye.boxSizingReliable() || n) &&
        "border-box" === Se.css(e, "boxSizing", !1, i),
      a = r,
      s = R(e, t, i),
      u = "offset" + t[0].toUpperCase() + t.slice(1);
    if (dt.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!ye.boxSizingReliable() && r) ||
        (!ye.reliableTrDimensions() && o(e, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === Se.css(e, "display", !1, i))) &&
        e.getClientRects().length &&
        ((r = "border-box" === Se.css(e, "boxSizing", !1, i)),
        (a = u in e) && (s = e[u])),
      (s = parseFloat(s) || 0) +
        F(e, t, n || (r ? "border" : "content"), a, i, s) +
        "px"
    );
  }
  function W(e, t, n, i, r) {
    return new W.prototype.init(e, t, n, i, r);
  }
  function B() {
    St &&
      (!1 === xe.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(B)
        : e.setTimeout(B, Se.fx.interval),
      Se.fx.tick());
  }
  function z() {
    return (
      e.setTimeout(function () {
        Ct = undefined;
      }),
      (Ct = Date.now())
    );
  }
  function G(e, t) {
    var n,
      i = 0,
      r = { height: e };
    for (t = t ? 1 : 0; i < 4; i += 2 - t)
      r["margin" + (n = Ge[i])] = r["padding" + n] = e;
    return t && (r.opacity = r.width = e), r;
  }
  function K(e, t, n) {
    for (
      var i,
        r = (Y.tweeners[t] || []).concat(Y.tweeners["*"]),
        o = 0,
        a = r.length;
      o < a;
      o++
    )
      if ((i = r[o].call(n, t, e))) return i;
  }
  function X(e, t, n) {
    var i,
      r,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      d = this,
      p = {},
      h = e.style,
      m = e.nodeType && Ye(e),
      g = Ve.get(e, "fxshow");
    for (i in (n.queue ||
      (null == (a = Se._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      d.always(function () {
        d.always(function () {
          a.unqueued--, Se.queue(e, "fx").length || a.empty.fire();
        });
      })),
    t))
      if (((r = t[i]), Tt.test(r))) {
        if (
          (delete t[i], (o = o || "toggle" === r), r === (m ? "hide" : "show"))
        ) {
          if ("show" !== r || !g || g[i] === undefined) continue;
          m = !0;
        }
        p[i] = (g && g[i]) || Se.style(e, i);
      }
    if ((u = !Se.isEmptyObject(t)) || !Se.isEmptyObject(p))
      for (i in (f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (l = g && g.display) && (l = Ve.get(e, "display")),
        "none" === (c = Se.css(e, "display")) &&
          (l
            ? (c = l)
            : (b([e], !0),
              (l = e.style.display || l),
              (c = Se.css(e, "display")),
              b([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === Se.css(e, "float") &&
          (u ||
            (d.done(function () {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
      n.overflow &&
        ((h.overflow = "hidden"),
        d.always(function () {
          (h.overflow = n.overflow[0]),
            (h.overflowX = n.overflow[1]),
            (h.overflowY = n.overflow[2]);
        })),
      (u = !1),
      p))
        u ||
          (g
            ? "hidden" in g && (m = g.hidden)
            : (g = Ve.access(e, "fxshow", { display: l })),
          o && (g.hidden = !m),
          m && b([e], !0),
          d.done(function () {
            for (i in (m || b([e]), Ve.remove(e, "fxshow"), p))
              Se.style(e, i, p[i]);
          })),
          (u = K(m ? g[i] : 0, i, d)),
          i in g || ((g[i] = u.start), m && ((u.end = u.start), (u.start = 0)));
  }
  function Q(e, t) {
    var n, i, r, o, a;
    for (n in e)
      if (
        ((r = t[(i = h(n))]),
        (o = e[n]),
        Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
        n !== i && ((e[i] = o), delete e[n]),
        (a = Se.cssHooks[i]) && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete e[i], o))
          n in e || ((e[n] = o[n]), (t[n] = r));
      else t[i] = r;
  }
  function Y(e, t, n) {
    var i,
      r,
      o = 0,
      a = Y.prefilters.length,
      s = Se.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (r) return !1;
        for (
          var t = Ct || z(),
            n = Math.max(0, l.startTime + l.duration - t),
            i = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(i);
        return (
          s.notifyWith(e, [l, i, n]),
          i < 1 && a
            ? n
            : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: Se.extend({}, t),
        opts: Se.extend(
          !0,
          { specialEasing: {}, easing: Se.easing._default },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: Ct || z(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var i = Se.Tween(
            e,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(i), i;
        },
        stop: function (t) {
          var n = 0,
            i = t ? l.tweens.length : 0;
          if (r) return this;
          for (r = !0; n < i; n++) l.tweens[n].run(1);
          return (
            t
              ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
              : s.rejectWith(e, [l, t]),
            this
          );
        },
      }),
      c = l.props;
    for (Q(c, l.opts.specialEasing); o < a; o++)
      if ((i = Y.prefilters[o].call(l, e, c, l.opts)))
        return (
          $e(i.stop) &&
            (Se._queueHooks(l.elem, l.opts.queue).stop = i.stop.bind(i)),
          i
        );
    return (
      Se.map(c, K, l),
      $e(l.opts.start) && l.opts.start.call(e, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      Se.fx.timer(Se.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  function J(e) {
    return (e.match(Ie) || []).join(" ");
  }
  function Z(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function ee(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(Ie)) || [];
  }
  function te(e, t, n, r) {
    var o;
    if (Array.isArray(t))
      Se.each(t, function (t, i) {
        n || Rt.test(e)
          ? r(e, i)
          : te(
              e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (n || "object" !== i(t)) r(e, t);
    else for (o in t) te(e + "[" + o + "]", t[o], n, r);
  }
  function ne(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var i,
        r = 0,
        o = t.toLowerCase().match(Ie) || [];
      if ($e(n))
        for (; (i = o[r++]); )
          "+" === i[0]
            ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
            : (e[i] = e[i] || []).push(n);
    };
  }
  function ie(e, t, n, i) {
    function r(s) {
      var u;
      return (
        (o[s] = !0),
        Se.each(e[s] || [], function (e, s) {
          var l = s(t, n, i);
          return "string" != typeof l || a || o[l]
            ? a
              ? !(u = l)
              : void 0
            : (t.dataTypes.unshift(l), r(l), !1);
        }),
        u
      );
    }
    var o = {},
      a = e === Xt;
    return r(t.dataTypes[0]) || (!o["*"] && r("*"));
  }
  function re(e, t) {
    var n,
      i,
      r = Se.ajaxSettings.flatOptions || {};
    for (n in t) t[n] !== undefined && ((r[n] ? e : i || (i = {}))[n] = t[n]);
    return i && Se.extend(!0, e, i), e;
  }
  function oe(e, t, n) {
    for (var i, r, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        i === undefined &&
          (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (r in s)
        if (s[r] && s[r].test(i)) {
          u.unshift(r);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (r in n) {
        if (!u[0] || e.converters[r + " " + u[0]]) {
          o = r;
          break;
        }
        a || (a = r);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function ae(e, t, n, i) {
    var r,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (r in l)
              if (
                (s = r.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[r])
                  : !0 !== l[r] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (f) {
                return {
                  state: "parsererror",
                  error: a ? f : "No conversion from " + u + " to " + o,
                };
              }
        }
    return { state: "success", data: t };
  }
  var se = [],
    ue = Object.getPrototypeOf,
    le = se.slice,
    ce = se.flat
      ? function (e) {
          return se.flat.call(e);
        }
      : function (e) {
          return se.concat.apply([], e);
        },
    fe = se.push,
    de = se.indexOf,
    pe = {},
    he = pe.toString,
    me = pe.hasOwnProperty,
    ge = me.toString,
    ve = ge.call(Object),
    ye = {},
    $e = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    be = function (e) {
      return null != e && e === e.window;
    },
    xe = e.document,
    we = { type: !0, src: !0, nonce: !0, noModule: !0 },
    Ce = "3.5.1",
    Se = function (e, t) {
      return new Se.fn.init(e, t);
    };
  (Se.fn = Se.prototype =
    {
      jquery: Ce,
      constructor: Se,
      length: 0,
      toArray: function () {
        return le.call(this);
      },
      get: function (e) {
        return null == e
          ? le.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = Se.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return Se.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          Se.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(le.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          Se.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          Se.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: fe,
      sort: se.sort,
      splice: se.splice,
    }),
    (Se.extend = Se.fn.extend =
      function () {
        var e,
          t,
          n,
          i,
          r,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || $e(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (i = e[t]),
                "__proto__" !== t &&
                  a !== i &&
                  (l && i && (Se.isPlainObject(i) || (r = Array.isArray(i)))
                    ? ((n = a[t]),
                      (o =
                        r && !Array.isArray(n)
                          ? []
                          : r || Se.isPlainObject(n)
                          ? n
                          : {}),
                      (r = !1),
                      (a[t] = Se.extend(l, o, i)))
                    : i !== undefined && (a[t] = i));
        return a;
      }),
    Se.extend({
      expando: "jQuery" + (Ce + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== he.call(e)) &&
          (!(t = ue(e)) ||
            ("function" ==
              typeof (n = me.call(t, "constructor") && t.constructor) &&
              ge.call(n) === ve))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, i) {
        n(e, { nonce: t && t.nonce }, i);
      },
      each: function (e, t) {
        var n,
          i = 0;
        if (r(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (r(Object(e))
              ? Se.merge(n, "string" == typeof e ? [e] : e)
              : fe.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : de.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return (e.length = r), e;
      },
      grep: function (e, t, n) {
        for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
          !t(e[r], r) !== a && i.push(e[r]);
        return i;
      },
      map: function (e, t, n) {
        var i,
          o,
          a = 0,
          s = [];
        if (r(e))
          for (i = e.length; a < i; a++)
            null != (o = t(e[a], a, n)) && s.push(o);
        else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
        return ce(s);
      },
      guid: 1,
      support: ye,
    }),
    "function" == typeof Symbol &&
      (Se.fn[Symbol.iterator] = se[Symbol.iterator]),
    Se.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        pe["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var Te = (function (e) {
    function t(e, t, n, i) {
      var r,
        o,
        a,
        s,
        u,
        l,
        c,
        d = t && t.ownerDocument,
        h = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
      )
        return n;
      if (!i && (D(t), (t = t || M), j)) {
        if (11 !== h && (u = $e.exec(e)))
          if ((r = u[1])) {
            if (9 === h) {
              if (!(a = t.getElementById(r))) return n;
              if (a.id === r) return n.push(a), n;
            } else if (d && (a = d.getElementById(r)) && H(t, a) && a.id === r)
              return n.push(a), n;
          } else {
            if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
            if (
              (r = u[3]) &&
              w.getElementsByClassName &&
              t.getElementsByClassName
            )
              return Z.apply(n, t.getElementsByClassName(r)), n;
          }
        if (
          w.qsa &&
          !G[e + " "] &&
          (!P || !P.test(e)) &&
          (1 !== h || "object" !== t.nodeName.toLowerCase())
        ) {
          if (((c = e), (d = t), 1 === h && (fe.test(e) || ce.test(e)))) {
            for (
              ((d = (be.test(e) && f(t.parentNode)) || t) === t && w.scope) ||
                ((s = t.getAttribute("id"))
                  ? (s = s.replace(Ce, Se))
                  : t.setAttribute("id", (s = q))),
                o = (l = k(e)).length;
              o--;

            )
              l[o] = (s ? "#" + s : ":scope") + " " + p(l[o]);
            c = l.join(",");
          }
          try {
            return Z.apply(n, d.querySelectorAll(c)), n;
          } catch (m) {
            G(e, !0);
          } finally {
            s === q && t.removeAttribute("id");
          }
        }
      }
      return A(e.replace(ue, "$1"), t, n, i);
    }
    function n() {
      function e(n, i) {
        return (
          t.push(n + " ") > C.cacheLength && delete e[t.shift()],
          (e[n + " "] = i)
        );
      }
      var t = [];
      return e;
    }
    function i(e) {
      return (e[q] = !0), e;
    }
    function r(e) {
      var t = M.createElement("fieldset");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function o(e, t) {
      for (var n = e.split("|"), i = n.length; i--; ) C.attrHandle[n[i]] = t;
    }
    function a(e, t) {
      var n = t && e,
        i =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (i) return i;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function s(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }
    function u(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function l(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && ke(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function c(e) {
      return i(function (t) {
        return (
          (t = +t),
          i(function (n, i) {
            for (var r, o = e([], n.length, t), a = o.length; a--; )
              n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
          })
        );
      });
    }
    function f(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    function d() {}
    function p(e) {
      for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
      return i;
    }
    function h(e, t, n) {
      var i = t.dir,
        r = t.next,
        o = r || i,
        a = n && "parentNode" === o,
        s = U++;
      return t.first
        ? function (t, n, r) {
            for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
            return !1;
          }
        : function (t, n, u) {
            var l,
              c,
              f,
              d = [F, s];
            if (u) {
              for (; (t = t[i]); )
                if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
            } else
              for (; (t = t[i]); )
                if (1 === t.nodeType || a)
                  if (
                    ((c =
                      (f = t[q] || (t[q] = {}))[t.uniqueID] ||
                      (f[t.uniqueID] = {})),
                    r && r === t.nodeName.toLowerCase())
                  )
                    t = t[i] || t;
                  else {
                    if ((l = c[o]) && l[0] === F && l[1] === s)
                      return (d[2] = l[2]);
                    if (((c[o] = d), (d[2] = e(t, n, u)))) return !0;
                  }
            return !1;
          };
    }
    function m(e) {
      return e.length > 1
        ? function (t, n, i) {
            for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
            return !0;
          }
        : e[0];
    }
    function g(e, n, i) {
      for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
      return i;
    }
    function v(e, t, n, i, r) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function y(e, t, n, r, o, a) {
      return (
        r && !r[q] && (r = y(r)),
        o && !o[q] && (o = y(o, a)),
        i(function (i, a, s, u) {
          var l,
            c,
            f,
            d = [],
            p = [],
            h = a.length,
            m = i || g(t || "*", s.nodeType ? [s] : s, []),
            y = !e || (!i && t) ? m : v(m, d, e, s, u),
            $ = n ? (o || (i ? e : h || r) ? [] : a) : y;
          if ((n && n(y, $, s, u), r))
            for (l = v($, p), r(l, [], s, u), c = l.length; c--; )
              (f = l[c]) && ($[p[c]] = !(y[p[c]] = f));
          if (i) {
            if (o || e) {
              if (o) {
                for (l = [], c = $.length; c--; )
                  (f = $[c]) && l.push((y[c] = f));
                o(null, ($ = []), l, u);
              }
              for (c = $.length; c--; )
                (f = $[c]) &&
                  (l = o ? te(i, f) : d[c]) > -1 &&
                  (i[l] = !(a[l] = f));
            }
          } else ($ = v($ === a ? $.splice(h, $.length) : $)), o ? o(null, a, $, u) : Z.apply(a, $);
        })
      );
    }
    function $(e) {
      for (
        var t,
          n,
          i,
          r = e.length,
          o = C.relative[e[0].type],
          a = o || C.relative[" "],
          s = o ? 1 : 0,
          u = h(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          l = h(
            function (e) {
              return te(t, e) > -1;
            },
            a,
            !0
          ),
          c = [
            function (e, n, i) {
              var r =
                (!o && (i || n !== _)) ||
                ((t = n).nodeType ? u(e, n, i) : l(e, n, i));
              return (t = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((n = C.relative[e[s].type])) c = [h(m(c), n)];
        else {
          if ((n = C.filter[e[s].type].apply(null, e[s].matches))[q]) {
            for (i = ++s; i < r && !C.relative[e[i].type]; i++);
            return y(
              s > 1 && m(c),
              s > 1 &&
                p(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(ue, "$1"),
              n,
              s < i && $(e.slice(s, i)),
              i < r && $((e = e.slice(i))),
              i < r && p(e)
            );
          }
          c.push(n);
        }
      return m(c);
    }
    function b(e, n) {
      var r = n.length > 0,
        o = e.length > 0,
        a = function (i, a, s, u, l) {
          var c,
            f,
            d,
            p = 0,
            h = "0",
            m = i && [],
            g = [],
            y = _,
            $ = i || (o && C.find.TAG("*", l)),
            b = (F += null == y ? 1 : Math.random() || 0.1),
            x = $.length;
          for (
            l && (_ = a == M || a || l);
            h !== x && null != (c = $[h]);
            h++
          ) {
            if (o && c) {
              for (
                f = 0, a || c.ownerDocument == M || (D(c), (s = !j));
                (d = e[f++]);

              )
                if (d(c, a || M, s)) {
                  u.push(c);
                  break;
                }
              l && (F = b);
            }
            r && ((c = !d && c) && p--, i && m.push(c));
          }
          if (((p += h), r && h !== p)) {
            for (f = 0; (d = n[f++]); ) d(m, g, a, s);
            if (i) {
              if (p > 0) for (; h--; ) m[h] || g[h] || (g[h] = Y.call(u));
              g = v(g);
            }
            Z.apply(u, g),
              l && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(u);
          }
          return l && ((F = b), (_ = y)), m;
        };
      return r ? i(a) : a;
    }
    var x,
      w,
      C,
      S,
      T,
      k,
      E,
      A,
      _,
      O,
      N,
      D,
      M,
      I,
      j,
      P,
      R,
      L,
      H,
      q = "sizzle" + 1 * new Date(),
      V = e.document,
      F = 0,
      U = 0,
      W = n(),
      B = n(),
      z = n(),
      G = n(),
      K = function (e, t) {
        return e === t && (N = !0), 0;
      },
      X = {}.hasOwnProperty,
      Q = [],
      Y = Q.pop,
      J = Q.push,
      Z = Q.push,
      ee = Q.slice,
      te = function (e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      },
      ne =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ie = "[\\x20\\t\\r\\n\\f]",
      re =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        ie +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      oe =
        "\\[" +
        ie +
        "*(" +
        re +
        ")(?:" +
        ie +
        "*([*^$|!~]?=)" +
        ie +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        re +
        "))|)" +
        ie +
        "*\\]",
      ae =
        ":(" +
        re +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        oe +
        ")*)|.*)\\)|)",
      se = new RegExp(ie + "+", "g"),
      ue = new RegExp(
        "^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$",
        "g"
      ),
      le = new RegExp("^" + ie + "*," + ie + "*"),
      ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"),
      fe = new RegExp(ie + "|>"),
      de = new RegExp(ae),
      pe = new RegExp("^" + re + "$"),
      he = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re + "|[*])"),
        ATTR: new RegExp("^" + oe),
        PSEUDO: new RegExp("^" + ae),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ie +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ie +
            "*(?:([+-]|)" +
            ie +
            "*(\\d+)|))" +
            ie +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + ne + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ie +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ie +
            "*((?:-\\d)?\\d*)" +
            ie +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      me = /HTML$/i,
      ge = /^(?:input|select|textarea|button)$/i,
      ve = /^h\d$/i,
      ye = /^[^{]+\{\s*\[native \w/,
      $e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      be = /[+~]/,
      xe = new RegExp(
        "\\\\[\\da-fA-F]{1,6}" + ie + "?|\\\\([^\\r\\n\\f])",
        "g"
      ),
      we = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      Ce = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      Se = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      Te = function () {
        D();
      },
      ke = h(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      Z.apply((Q = ee.call(V.childNodes)), V.childNodes),
        Q[V.childNodes.length].nodeType;
    } catch (Ee) {
      Z = {
        apply: Q.length
          ? function (e, t) {
              J.apply(e, ee.call(t));
            }
          : function (e, t) {
              for (var n = e.length, i = 0; (e[n++] = t[i++]); );
              e.length = n - 1;
            },
      };
    }
    for (x in ((w = t.support = {}),
    (T = t.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !me.test(t || (n && n.nodeName) || "HTML");
      }),
    (D = t.setDocument =
      function (e) {
        var t,
          n,
          i = e ? e.ownerDocument || e : V;
        return i != M && 9 === i.nodeType && i.documentElement
          ? ((I = (M = i).documentElement),
            (j = !T(M)),
            V != M &&
              (n = M.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", Te, !1)
                : n.attachEvent && n.attachEvent("onunload", Te)),
            (w.scope = r(function (e) {
              return (
                I.appendChild(e).appendChild(M.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (w.attributes = r(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (w.getElementsByTagName = r(function (e) {
              return (
                e.appendChild(M.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (w.getElementsByClassName = ye.test(M.getElementsByClassName)),
            (w.getById = r(function (e) {
              return (
                (I.appendChild(e).id = q),
                !M.getElementsByName || !M.getElementsByName(q).length
              );
            })),
            w.getById
              ? ((C.filter.ID = function (e) {
                  var t = e.replace(xe, we);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (C.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && j) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((C.filter.ID = function (e) {
                  var t = e.replace(xe, we);
                  return function (e) {
                    var n =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (C.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && j) {
                    var n,
                      i,
                      r,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (C.find.TAG = w.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : w.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                    return i;
                  }
                  return o;
                }),
            (C.find.CLASS =
              w.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && j)
                  return t.getElementsByClassName(e);
              }),
            (R = []),
            (P = []),
            (w.qsa = ye.test(M.querySelectorAll)) &&
              (r(function (e) {
                var t;
                (I.appendChild(e).innerHTML =
                  "<a id='" +
                  q +
                  "'></a><select id='" +
                  q +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    P.push("[*^$]=" + ie + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    P.push("\\[" + ie + "*(?:value|" + ne + ")"),
                  e.querySelectorAll("[id~=" + q + "-]").length || P.push("~="),
                  (t = M.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    P.push(
                      "\\[" + ie + "*name" + ie + "*=" + ie + "*(?:''|\"\")"
                    ),
                  e.querySelectorAll(":checked").length || P.push(":checked"),
                  e.querySelectorAll("a#" + q + "+*").length ||
                    P.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  P.push("[\\r\\n\\f]");
              }),
              r(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = M.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    P.push("name" + ie + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    P.push(":enabled", ":disabled"),
                  (I.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    P.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  P.push(",.*:");
              })),
            (w.matchesSelector = ye.test(
              (L =
                I.matches ||
                I.webkitMatchesSelector ||
                I.mozMatchesSelector ||
                I.oMatchesSelector ||
                I.msMatchesSelector)
            )) &&
              r(function (e) {
                (w.disconnectedMatch = L.call(e, "*")),
                  L.call(e, "[s!='']:x"),
                  R.push("!=", ae);
              }),
            (P = P.length && new RegExp(P.join("|"))),
            (R = R.length && new RegExp(R.join("|"))),
            (t = ye.test(I.compareDocumentPosition)),
            (H =
              t || ye.test(I.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      i = t && t.parentNode;
                    return (
                      e === i ||
                      !(
                        !i ||
                        1 !== i.nodeType ||
                        !(n.contains
                          ? n.contains(i)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(i))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (K = t
              ? function (e, t) {
                  if (e === t) return (N = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!w.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == M || (e.ownerDocument == V && H(V, e))
                        ? -1
                        : t == M || (t.ownerDocument == V && H(V, t))
                        ? 1
                        : O
                        ? te(O, e) - te(O, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (N = !0), 0;
                  var n,
                    i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    u = [t];
                  if (!r || !o)
                    return e == M
                      ? -1
                      : t == M
                      ? 1
                      : r
                      ? -1
                      : o
                      ? 1
                      : O
                      ? te(O, e) - te(O, t)
                      : 0;
                  if (r === o) return a(e, t);
                  for (n = e; (n = n.parentNode); ) s.unshift(n);
                  for (n = t; (n = n.parentNode); ) u.unshift(n);
                  for (; s[i] === u[i]; ) i++;
                  return i ? a(s[i], u[i]) : s[i] == V ? -1 : u[i] == V ? 1 : 0;
                }),
            M)
          : M;
      }),
    (t.matches = function (e, n) {
      return t(e, null, null, n);
    }),
    (t.matchesSelector = function (e, n) {
      if (
        (D(e),
        w.matchesSelector &&
          j &&
          !G[n + " "] &&
          (!R || !R.test(n)) &&
          (!P || !P.test(n)))
      )
        try {
          var i = L.call(e, n);
          if (
            i ||
            w.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (Ee) {
          G(n, !0);
        }
      return t(n, M, null, [e]).length > 0;
    }),
    (t.contains = function (e, t) {
      return (e.ownerDocument || e) != M && D(e), H(e, t);
    }),
    (t.attr = function (e, t) {
      (e.ownerDocument || e) != M && D(e);
      var n = C.attrHandle[t.toLowerCase()],
        i =
          n && X.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !j) : undefined;
      return i !== undefined
        ? i
        : w.attributes || !j
        ? e.getAttribute(t)
        : (i = e.getAttributeNode(t)) && i.specified
        ? i.value
        : null;
    }),
    (t.escape = function (e) {
      return (e + "").replace(Ce, Se);
    }),
    (t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (t.uniqueSort = function (e) {
      var t,
        n = [],
        i = 0,
        r = 0;
      if (
        ((N = !w.detectDuplicates),
        (O = !w.sortStable && e.slice(0)),
        e.sort(K),
        N)
      ) {
        for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
        for (; i--; ) e.splice(n[i], 1);
      }
      return (O = null), e;
    }),
    (S = t.getText =
      function (e) {
        var t,
          n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += S(e);
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; (t = e[i++]); ) n += S(t);
        return n;
      }),
    ((C = t.selectors =
      {
        cacheLength: 50,
        createPseudo: i,
        match: he,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(xe, we)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || t.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && t.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return he.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    de.test(n) &&
                    (t = k(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(xe, we).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = W[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) &&
                W(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, n, i) {
            return function (r) {
              var o = t.attr(r, e);
              return null == o
                ? "!=" === n
                : !n ||
                    ((o += ""),
                    "=" === n
                      ? o === i
                      : "!=" === n
                      ? o !== i
                      : "^=" === n
                      ? i && 0 === o.indexOf(i)
                      : "*=" === n
                      ? i && o.indexOf(i) > -1
                      : "$=" === n
                      ? i && o.slice(-i.length) === i
                      : "~=" === n
                      ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1
                      : "|=" === n &&
                        (o === i || o.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (e, t, n, i, r) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === i && 0 === r
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    d,
                    p,
                    h,
                    m = o !== a ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    v = s && t.nodeName.toLowerCase(),
                    y = !u && !s,
                    $ = !1;
                  if (g) {
                    if (o) {
                      for (; m; ) {
                        for (d = t; (d = d[m]); )
                          if (
                            s
                              ? d.nodeName.toLowerCase() === v
                              : 1 === d.nodeType
                          )
                            return !1;
                        h = m = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                      for (
                        $ =
                          (p =
                            (l =
                              (c =
                                (f = (d = g)[q] || (d[q] = {}))[d.uniqueID] ||
                                (f[d.uniqueID] = {}))[e] || [])[0] === F &&
                            l[1]) && l[2],
                          d = p && g.childNodes[p];
                        (d = (++p && d && d[m]) || ($ = p = 0) || h.pop());

                      )
                        if (1 === d.nodeType && ++$ && d === t) {
                          c[e] = [F, p, $];
                          break;
                        }
                    } else if (
                      (y &&
                        ($ = p =
                          (l =
                            (c =
                              (f = (d = t)[q] || (d[q] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] || [])[0] === F && l[1]),
                      !1 === $)
                    )
                      for (
                        ;
                        (d = (++p && d && d[m]) || ($ = p = 0) || h.pop()) &&
                        ((s
                          ? d.nodeName.toLowerCase() !== v
                          : 1 !== d.nodeType) ||
                          !++$ ||
                          (y &&
                            ((c =
                              (f = d[q] || (d[q] = {}))[d.uniqueID] ||
                              (f[d.uniqueID] = {}))[e] = [F, $]),
                          d !== t));

                      );
                    return ($ -= r) === i || ($ % i == 0 && $ / i >= 0);
                  }
                };
          },
          PSEUDO: function (e, n) {
            var r,
              o =
                C.pseudos[e] ||
                C.setFilters[e.toLowerCase()] ||
                t.error("unsupported pseudo: " + e);
            return o[q]
              ? o(n)
              : o.length > 1
              ? ((r = [e, e, "", n]),
                C.setFilters.hasOwnProperty(e.toLowerCase())
                  ? i(function (e, t) {
                      for (var i, r = o(e, n), a = r.length; a--; )
                        e[(i = te(e, r[a]))] = !(t[i] = r[a]);
                    })
                  : function (e) {
                      return o(e, 0, r);
                    })
              : o;
          },
        },
        pseudos: {
          not: i(function (e) {
            var t = [],
              n = [],
              r = E(e.replace(ue, "$1"));
            return r[q]
              ? i(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; )
                    (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: i(function (e) {
            return function (n) {
              return t(e, n).length > 0;
            };
          }),
          contains: i(function (e) {
            return (
              (e = e.replace(xe, we)),
              function (t) {
                return (t.textContent || S(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: i(function (e) {
            return (
              pe.test(e || "") || t.error("unsupported lang: " + e),
              (e = e.replace(xe, we).toLowerCase()),
              function (t) {
                var n;
                do {
                  if (
                    (n = j
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === I;
          },
          focus: function (e) {
            return (
              e === M.activeElement &&
              (!M.hasFocus || M.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: l(!1),
          disabled: l(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !C.pseudos.empty(e);
          },
          header: function (e) {
            return ve.test(e.nodeName);
          },
          input: function (e) {
            return ge.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: c(function () {
            return [0];
          }),
          last: c(function (e, t) {
            return [t - 1];
          }),
          eq: c(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: c(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: c(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: c(function (e, t, n) {
            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
            return e;
          }),
          gt: c(function (e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
            return e;
          }),
        },
      }).pseudos.nth = C.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      C.pseudos[x] = s(x);
    for (x in { submit: !0, reset: !0 }) C.pseudos[x] = u(x);
    return (
      (d.prototype = C.filters = C.pseudos),
      (C.setFilters = new d()),
      (k = t.tokenize =
        function (e, n) {
          var i,
            r,
            o,
            a,
            s,
            u,
            l,
            c = B[e + " "];
          if (c) return n ? 0 : c.slice(0);
          for (s = e, u = [], l = C.preFilter; s; ) {
            for (a in ((i && !(r = le.exec(s))) ||
              (r && (s = s.slice(r[0].length) || s), u.push((o = []))),
            (i = !1),
            (r = ce.exec(s)) &&
              ((i = r.shift()),
              o.push({ value: i, type: r[0].replace(ue, " ") }),
              (s = s.slice(i.length))),
            C.filter))
              !(r = he[a].exec(s)) ||
                (l[a] && !(r = l[a](r))) ||
                ((i = r.shift()),
                o.push({ value: i, type: a, matches: r }),
                (s = s.slice(i.length)));
            if (!i) break;
          }
          return n ? s.length : s ? t.error(e) : B(e, u).slice(0);
        }),
      (E = t.compile =
        function (e, t) {
          var n,
            i = [],
            r = [],
            o = z[e + " "];
          if (!o) {
            for (t || (t = k(e)), n = t.length; n--; )
              (o = $(t[n]))[q] ? i.push(o) : r.push(o);
            (o = z(e, b(r, i))).selector = e;
          }
          return o;
        }),
      (A = t.select =
        function (e, t, n, i) {
          var r,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !i && k((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              (o = c[0] = c[0].slice(0)).length > 2 &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              j &&
              C.relative[o[1].type]
            ) {
              if (!(t = (C.find.ID(a.matches[0].replace(xe, we), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              r = he.needsContext.test(e) ? 0 : o.length;
              r-- && ((a = o[r]), !C.relative[(s = a.type)]);

            )
              if (
                (u = C.find[s]) &&
                (i = u(
                  a.matches[0].replace(xe, we),
                  (be.test(o[0].type) && f(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(r, 1), !(e = i.length && p(o))))
                  return Z.apply(n, i), n;
                break;
              }
          }
          return (
            (l || E(e, c))(
              i,
              t,
              !j,
              n,
              !t || (be.test(e) && f(t.parentNode)) || t
            ),
            n
          );
        }),
      (w.sortStable = q.split("").sort(K).join("") === q),
      (w.detectDuplicates = !!N),
      D(),
      (w.sortDetached = r(function (e) {
        return 1 & e.compareDocumentPosition(M.createElement("fieldset"));
      })),
      r(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (w.attributes &&
        r(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      r(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        o(ne, function (e, t, n) {
          var i;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
        }),
      t
    );
  })(e);
  (Se.find = Te),
    (Se.expr = Te.selectors),
    (Se.expr[":"] = Se.expr.pseudos),
    (Se.uniqueSort = Se.unique = Te.uniqueSort),
    (Se.text = Te.getText),
    (Se.isXMLDoc = Te.isXML),
    (Se.contains = Te.contains),
    (Se.escapeSelector = Te.escape);
  var ke = function (e, t, n) {
      for (var i = [], r = n !== undefined; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (r && Se(e).is(n)) break;
          i.push(e);
        }
      return i;
    },
    Ee = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    Ae = Se.expr.match.needsContext,
    _e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (Se.filter = function (e, t, n) {
    var i = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === i.nodeType
        ? Se.find.matchesSelector(i, e)
          ? [i]
          : []
        : Se.find.matches(
            e,
            Se.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    Se.fn.extend({
      find: function (e) {
        var t,
          n,
          i = this.length,
          r = this;
        if ("string" != typeof e)
          return this.pushStack(
            Se(e).filter(function () {
              for (t = 0; t < i; t++) if (Se.contains(r[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < i; t++) Se.find(e, r[t], n);
        return i > 1 ? Se.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(a(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(a(this, e || [], !0));
      },
      is: function (e) {
        return !!a(
          this,
          "string" == typeof e && Ae.test(e) ? Se(e) : e || [],
          !1
        ).length;
      },
    });
  var Oe,
    Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((Se.fn.init = function (e, t, n) {
    var i, r;
    if (!e) return this;
    if (((n = n || Oe), "string" == typeof e)) {
      if (
        !(i =
          "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
            ? [null, e, null]
            : Ne.exec(e)) ||
        (!i[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof Se ? t[0] : t),
          Se.merge(
            this,
            Se.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : xe, !0)
          ),
          _e.test(i[1]) && Se.isPlainObject(t))
        )
          for (i in t) $e(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (
        (r = xe.getElementById(i[2])) && ((this[0] = r), (this.length = 1)),
        this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : $e(e)
      ? n.ready !== undefined
        ? n.ready(e)
        : e(Se)
      : Se.makeArray(e, this);
  }).prototype = Se.fn),
    (Oe = Se(xe));
  var De = /^(?:parents|prev(?:Until|All))/,
    Me = { children: !0, contents: !0, next: !0, prev: !0 };
  Se.fn.extend({
    has: function (e) {
      var t = Se(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (Se.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        i = 0,
        r = this.length,
        o = [],
        a = "string" != typeof e && Se(e);
      if (!Ae.test(e))
        for (; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && Se.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? Se.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? de.call(Se(e), this[0])
          : de.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(Se.uniqueSort(Se.merge(this.get(), Se(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    Se.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ke(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ke(e, "parentNode", n);
        },
        next: function (e) {
          return s(e, "nextSibling");
        },
        prev: function (e) {
          return s(e, "previousSibling");
        },
        nextAll: function (e) {
          return ke(e, "nextSibling");
        },
        prevAll: function (e) {
          return ke(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ke(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ke(e, "previousSibling", n);
        },
        siblings: function (e) {
          return Ee((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return Ee(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && ue(e.contentDocument)
            ? e.contentDocument
            : (o(e, "template") && (e = e.content || e),
              Se.merge([], e.childNodes));
        },
      },
      function (e, t) {
        Se.fn[e] = function (n, i) {
          var r = Se.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = Se.filter(i, r)),
            this.length > 1 &&
              (Me[e] || Se.uniqueSort(r), De.test(e) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var Ie = /[^\x20\t\r\n\f]+/g;
  (Se.Callbacks = function (e) {
    e = "string" == typeof e ? u(e) : Se.extend({}, e);
    var t,
      n,
      r,
      o,
      a = [],
      s = [],
      l = -1,
      c = function () {
        for (o = o || e.once, r = t = !0; s.length; l = -1)
          for (n = s.shift(); ++l < a.length; )
            !1 === a[l].apply(n[0], n[1]) &&
              e.stopOnFalse &&
              ((l = a.length), (n = !1));
        e.memory || (n = !1), (t = !1), o && (a = n ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (n && !t && ((l = a.length - 1), s.push(n)),
              (function r(t) {
                Se.each(t, function (t, n) {
                  $e(n)
                    ? (e.unique && f.has(n)) || a.push(n)
                    : n && n.length && "string" !== i(n) && r(n);
                });
              })(arguments),
              n && !t && c()),
            this
          );
        },
        remove: function () {
          return (
            Se.each(arguments, function (e, t) {
              for (var n; (n = Se.inArray(t, a, n)) > -1; )
                a.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? Se.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (o = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (o = s = []), n || t || (a = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (e, n) {
          return (
            o ||
              ((n = [e, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              t || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return f;
  }),
    Se.extend({
      Deferred: function (t) {
        var n = [
            [
              "notify",
              "progress",
              Se.Callbacks("memory"),
              Se.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              Se.Callbacks("once memory"),
              Se.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              Se.Callbacks("once memory"),
              Se.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          r = {
            state: function () {
              return i;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return r.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return Se.Deferred(function (t) {
                Se.each(n, function (n, i) {
                  var r = $e(e[i[4]]) && e[i[4]];
                  o[i[1]](function () {
                    var e = r && r.apply(this, arguments);
                    e && $e(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[i[0] + "With"](this, r ? [e] : arguments);
                  });
                }),
                  (e = null);
              }).promise();
            },
            then: function (t, i, r) {
              function o(t, n, i, r) {
                return function () {
                  var s = this,
                    u = arguments,
                    f = function () {
                      var e, f;
                      if (!(t < a)) {
                        if ((e = i.apply(s, u)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (f =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          $e(f)
                            ? r
                              ? f.call(e, o(a, n, l, r), o(a, n, c, r))
                              : (a++,
                                f.call(
                                  e,
                                  o(a, n, l, r),
                                  o(a, n, c, r),
                                  o(a, n, l, n.notifyWith)
                                ))
                            : (i !== l && ((s = undefined), (u = [e])),
                              (r || n.resolveWith)(s, u));
                      }
                    },
                    d = r
                      ? f
                      : function () {
                          try {
                            f();
                          } catch (e) {
                            Se.Deferred.exceptionHook &&
                              Se.Deferred.exceptionHook(e, d.stackTrace),
                              t + 1 >= a &&
                                (i !== c && ((s = undefined), (u = [e])),
                                n.rejectWith(s, u));
                          }
                        };
                  t
                    ? d()
                    : (Se.Deferred.getStackHook &&
                        (d.stackTrace = Se.Deferred.getStackHook()),
                      e.setTimeout(d));
                };
              }
              var a = 0;
              return Se.Deferred(function (e) {
                n[0][3].add(o(0, e, $e(r) ? r : l, e.notifyWith)),
                  n[1][3].add(o(0, e, $e(t) ? t : l)),
                  n[2][3].add(o(0, e, $e(i) ? i : c));
              }).promise();
            },
            promise: function (e) {
              return null != e ? Se.extend(e, r) : r;
            },
          },
          o = {};
        return (
          Se.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (r[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    i = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return (
                  o[t[0] + "With"](this === o ? undefined : this, arguments),
                  this
                );
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          r.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          i = Array(n),
          r = le.call(arguments),
          o = Se.Deferred(),
          a = function (e) {
            return function (n) {
              (i[e] = this),
                (r[e] = arguments.length > 1 ? le.call(arguments) : n),
                --t || o.resolveWith(i, r);
            };
          };
        if (
          t <= 1 &&
          (f(e, o.done(a(n)).resolve, o.reject, !t),
          "pending" === o.state() || $e(r[n] && r[n].then))
        )
          return o.then();
        for (; n--; ) f(r[n], a(n), o.reject);
        return o.promise();
      },
    });
  var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (Se.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      je.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (Se.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var Pe = Se.Deferred();
  (Se.fn.ready = function (e) {
    return (
      Pe.then(e)["catch"](function (e) {
        Se.readyException(e);
      }),
      this
    );
  }),
    Se.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --Se.readyWait : Se.isReady) ||
          ((Se.isReady = !0),
          (!0 !== e && --Se.readyWait > 0) || Pe.resolveWith(xe, [Se]));
      },
    }),
    (Se.ready.then = Pe.then),
    "complete" === xe.readyState ||
    ("loading" !== xe.readyState && !xe.documentElement.doScroll)
      ? e.setTimeout(Se.ready)
      : (xe.addEventListener("DOMContentLoaded", d),
        e.addEventListener("load", d));
  var Re = function (e, t, n, r, o, a, s) {
      var u = 0,
        l = e.length,
        c = null == n;
      if ("object" === i(n))
        for (u in ((o = !0), n)) Re(e, t, u, n[u], !0, a, s);
      else if (
        r !== undefined &&
        ((o = !0),
        $e(r) || (s = !0),
        c &&
          (s
            ? (t.call(e, r), (t = null))
            : ((c = t),
              (t = function (e, t, n) {
                return c.call(Se(e), n);
              }))),
        t)
      )
        for (; u < l; u++) t(e[u], n, s ? r : r.call(e[u], u, t(e[u], n)));
      return o ? e : c ? t.call(e) : l ? t(e[0], n) : a;
    },
    Le = /^-ms-/,
    He = /-([a-z])/g,
    qe = function (e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
  (m.uid = 1),
    (m.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            qe(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var i,
          r = this.cache(e);
        if ("string" == typeof t) r[h(t)] = n;
        else for (i in t) r[h(i)] = t[i];
        return r;
      },
      get: function (e, t) {
        return t === undefined
          ? this.cache(e)
          : e[this.expando] && e[this.expando][h(t)];
      },
      access: function (e, t, n) {
        return t === undefined || (t && "string" == typeof t && n === undefined)
          ? this.get(e, t)
          : (this.set(e, t, n), n !== undefined ? n : t);
      },
      remove: function (e, t) {
        var n,
          i = e[this.expando];
        if (i !== undefined) {
          if (t !== undefined) {
            n = (t = Array.isArray(t)
              ? t.map(h)
              : (t = h(t)) in i
              ? [t]
              : t.match(Ie) || []).length;
            for (; n--; ) delete i[t[n]];
          }
          (t === undefined || Se.isEmptyObject(i)) &&
            (e.nodeType
              ? (e[this.expando] = undefined)
              : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return t !== undefined && !Se.isEmptyObject(t);
      },
    });
  var Ve = new m(),
    Fe = new m(),
    Ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    We = /[A-Z]/g;
  Se.extend({
    hasData: function (e) {
      return Fe.hasData(e) || Ve.hasData(e);
    },
    data: function (e, t, n) {
      return Fe.access(e, t, n);
    },
    removeData: function (e, t) {
      Fe.remove(e, t);
    },
    _data: function (e, t, n) {
      return Ve.access(e, t, n);
    },
    _removeData: function (e, t) {
      Ve.remove(e, t);
    },
  }),
    Se.fn.extend({
      data: function (e, t) {
        var n,
          i,
          r,
          o = this[0],
          a = o && o.attributes;
        if (e === undefined) {
          if (
            this.length &&
            ((r = Fe.get(o)), 1 === o.nodeType && !Ve.get(o, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (i = a[n].name).indexOf("data-") &&
                ((i = h(i.slice(5))), v(o, i, r[i]));
            Ve.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof e
          ? this.each(function () {
              Fe.set(this, e);
            })
          : Re(
              this,
              function (t) {
                var n;
                if (o && t === undefined)
                  return (n = Fe.get(o, e)) !== undefined
                    ? n
                    : (n = v(o, e)) !== undefined
                    ? n
                    : void 0;
                this.each(function () {
                  Fe.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Fe.remove(this, e);
        });
      },
    }),
    Se.extend({
      queue: function (e, t, n) {
        var i;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (i = Ve.get(e, t)),
            n &&
              (!i || Array.isArray(n)
                ? (i = Ve.access(e, t, Se.makeArray(n)))
                : i.push(n)),
            i || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = Se.queue(e, t),
          i = n.length,
          r = n.shift(),
          o = Se._queueHooks(e, t),
          a = function () {
            Se.dequeue(e, t);
          };
        "inprogress" === r && ((r = n.shift()), i--),
          r &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
          !i && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Ve.get(e, n) ||
          Ve.access(e, n, {
            empty: Se.Callbacks("once memory").add(function () {
              Ve.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    Se.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? Se.queue(this[0], e)
            : t === undefined
            ? this
            : this.each(function () {
                var n = Se.queue(this, e, t);
                Se._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && Se.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          Se.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          i = 1,
          r = Se.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --i || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof e && ((t = e), (e = undefined)), e = e || "fx";
          a--;

        )
          (n = Ve.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (i++, n.empty.add(s));
        return s(), r.promise(t);
      },
    });
  var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ze = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
    Ge = ["Top", "Right", "Bottom", "Left"],
    Ke = xe.documentElement,
    Xe = function (e) {
      return Se.contains(e.ownerDocument, e);
    },
    Qe = { composed: !0 };
  Ke.getRootNode &&
    (Xe = function (e) {
      return (
        Se.contains(e.ownerDocument, e) || e.getRootNode(Qe) === e.ownerDocument
      );
    });
  var Ye = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && Xe(e) && "none" === Se.css(e, "display"))
      );
    },
    Je = {};
  Se.fn.extend({
    show: function () {
      return b(this, !0);
    },
    hide: function () {
      return b(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            Ye(this) ? Se(this).show() : Se(this).hide();
          });
    },
  });
  var Ze,
    et,
    tt = /^(?:checkbox|radio)$/i,
    nt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    it = /^$|^module$|\/(?:java|ecma)script/i;
  (Ze = xe.createDocumentFragment().appendChild(xe.createElement("div"))),
    (et = xe.createElement("input")).setAttribute("type", "radio"),
    et.setAttribute("checked", "checked"),
    et.setAttribute("name", "t"),
    Ze.appendChild(et),
    (ye.checkClone = Ze.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (Ze.innerHTML = "<textarea>x</textarea>"),
    (ye.noCloneChecked = !!Ze.cloneNode(!0).lastChild.defaultValue),
    (Ze.innerHTML = "<option></option>"),
    (ye.option = !!Ze.lastChild);
  var rt = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  (rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead),
    (rt.th = rt.td),
    ye.option ||
      (rt.optgroup = rt.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var ot = /<|&#?\w+;/,
    at = /^key/,
    st = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ut = /^([^.]*)(?:\.(.+)|)/;
  (Se.event = {
    global: {},
    add: function (e, t, n, i, r) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        m,
        g = Ve.get(e);
      if (qe(e))
        for (
          n.handler && ((n = (o = n).handler), (r = o.selector)),
            r && Se.find.matchesSelector(Ke, r),
            n.guid || (n.guid = Se.guid++),
            (u = g.events) || (u = g.events = Object.create(null)),
            (a = g.handle) ||
              (a = g.handle =
                function (t) {
                  return void 0 !== Se && Se.event.triggered !== t.type
                    ? Se.event.dispatch.apply(e, arguments)
                    : undefined;
                }),
            l = (t = (t || "").match(Ie) || [""]).length;
          l--;

        )
          (p = m = (s = ut.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p &&
              ((f = Se.event.special[p] || {}),
              (p = (r ? f.delegateType : f.bindType) || p),
              (f = Se.event.special[p] || {}),
              (c = Se.extend(
                {
                  type: p,
                  origType: m,
                  data: i,
                  handler: n,
                  guid: n.guid,
                  selector: r,
                  needsContext: r && Se.expr.match.needsContext.test(r),
                  namespace: h.join("."),
                },
                o
              )),
              (d = u[p]) ||
                (((d = u[p] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, i, h, a)) ||
                  (e.addEventListener && e.addEventListener(p, a))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
              (Se.event.global[p] = !0));
    },
    remove: function (e, t, n, i, r) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        m,
        g = Ve.hasData(e) && Ve.get(e);
      if (g && (u = g.events)) {
        for (l = (t = (t || "").match(Ie) || [""]).length; l--; )
          if (
            ((p = m = (s = ut.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            p)
          ) {
            for (
              f = Se.event.special[p] || {},
                d = u[(p = (i ? f.delegateType : f.bindType) || p)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = d.length;
              o--;

            )
              (c = d[o]),
                (!r && m !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                  (d.splice(o, 1),
                  c.selector && d.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !d.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                Se.removeEvent(e, p, g.handle),
              delete u[p]);
          } else for (p in u) Se.event.remove(e, p + t[l], n, i, !0);
        Se.isEmptyObject(u) && Ve.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        i,
        r,
        o,
        a,
        s = new Array(arguments.length),
        u = Se.event.fix(e),
        l = (Ve.get(this, "events") || Object.create(null))[u.type] || [],
        c = Se.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        for (
          a = Se.event.handlers.call(this, u, l), t = 0;
          (r = a[t++]) && !u.isPropagationStopped();

        )
          for (
            u.currentTarget = r.elem, n = 0;
            (o = r.handlers[n++]) && !u.isImmediatePropagationStopped();

          )
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              (i = (
                (Se.event.special[o.origType] || {}).handle || o.handler
              ).apply(r.elem, s)) !== undefined &&
                !1 === (u.result = i) &&
                (u.preventDefault(), u.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        i,
        r,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              a[(r = (i = t[n]).selector + " ")] === undefined &&
                (a[r] = i.needsContext
                  ? Se(r, this).index(l) > -1
                  : Se.find(r, this, null, [l]).length),
                a[r] && o.push(i);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(Se.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: $e(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[Se.expando] ? e : new Se.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            tt.test(t.type) && t.click && o(t, "input") && _(t, "click", S), !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            tt.test(t.type) && t.click && o(t, "input") && _(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (tt.test(t.type) &&
              t.click &&
              o(t, "input") &&
              Ve.get(t, "click")) ||
            o(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== undefined &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (Se.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (Se.Event = function (e, t) {
      if (!(this instanceof Se.Event)) return new Se.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (e.defaultPrevented === undefined && !1 === e.returnValue)
              ? S
              : T),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && Se.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[Se.expando] = !0);
    }),
    (Se.Event.prototype = {
      constructor: Se.Event,
      isDefaultPrevented: T,
      isPropagationStopped: T,
      isImmediatePropagationStopped: T,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = S),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = S),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = S),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Se.each(
      {
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
        code: !0,
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
          return null == e.which && at.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && t !== undefined && st.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      Se.event.addProp
    ),
    Se.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      Se.event.special[e] = {
        setup: function () {
          return _(this, e, k), !1;
        },
        trigger: function () {
          return _(this, e), !0;
        },
        delegateType: t,
      };
    }),
    Se.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        Se.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              i = this,
              r = e.relatedTarget,
              o = e.handleObj;
            return (
              (r && (r === i || Se.contains(i, r))) ||
                ((e.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    Se.fn.extend({
      on: function (e, t, n, i) {
        return A(this, e, t, n, i);
      },
      one: function (e, t, n, i) {
        return A(this, e, t, n, i, 1);
      },
      off: function (e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            Se(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = undefined)),
          !1 === n && (n = T),
          this.each(function () {
            Se.event.remove(this, e, n, t);
          })
        );
      },
    });
  var lt = /<script|<style|<link/i,
    ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  Se.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var i,
        r,
        o,
        a,
        s = e.cloneNode(!0),
        u = Xe(e);
      if (
        !(
          ye.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          Se.isXMLDoc(e)
        )
      )
        for (a = x(s), i = 0, r = (o = x(e)).length; i < r; i++) I(o[i], a[i]);
      if (t)
        if (n)
          for (o = o || x(e), a = a || x(s), i = 0, r = o.length; i < r; i++)
            M(o[i], a[i]);
        else M(e, s);
      return (a = x(s, "script")).length > 0 && w(a, !u && x(e, "script")), s;
    },
    cleanData: function (e) {
      for (
        var t, n, i, r = Se.event.special, o = 0;
        (n = e[o]) !== undefined;
        o++
      )
        if (qe(n)) {
          if ((t = n[Ve.expando])) {
            if (t.events)
              for (i in t.events)
                r[i] ? Se.event.remove(n, i) : Se.removeEvent(n, i, t.handle);
            n[Ve.expando] = undefined;
          }
          n[Fe.expando] && (n[Fe.expando] = undefined);
        }
    },
  }),
    Se.fn.extend({
      detach: function (e) {
        return P(this, e, !0);
      },
      remove: function (e) {
        return P(this, e);
      },
      text: function (e) {
        return Re(
          this,
          function (e) {
            return e === undefined
              ? Se.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return j(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            O(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return j(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = O(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return j(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return j(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (Se.cleanData(x(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return Se.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return Re(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              i = this.length;
            if (e === undefined && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !lt.test(e) &&
              !rt[(nt.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = Se.htmlPrefilter(e);
              try {
                for (; n < i; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (Se.cleanData(x(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (r) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return j(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            Se.inArray(this, e) < 0 &&
              (Se.cleanData(x(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    Se.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        Se.fn[e] = function (e) {
          for (var n, i = [], r = Se(e), o = r.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              Se(r[a])[t](n),
              fe.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var dt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
    pt = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    ht = function (e, t, n) {
      var i,
        r,
        o = {};
      for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
      for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
      return i;
    },
    mt = new RegExp(Ge.join("|"), "i");
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          Ke.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (a = 36 === n(t.right)),
          (r = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (o = 12 === n(c.offsetWidth / 3)),
          Ke.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      r,
      o,
      a,
      s,
      u,
      l = xe.createElement("div"),
      c = xe.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (ye.clearCloneStyle = "content-box" === c.style.backgroundClip),
      Se.extend(ye, {
        boxSizingReliable: function () {
          return t(), r;
        },
        pixelBoxStyles: function () {
          return t(), a;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), o;
        },
        reliableTrDimensions: function () {
          var t, n, i, r;
          return (
            null == s &&
              ((t = xe.createElement("table")),
              (n = xe.createElement("tr")),
              (i = xe.createElement("div")),
              (t.style.cssText = "position:absolute;left:-11111px"),
              (n.style.height = "1px"),
              (i.style.height = "9px"),
              Ke.appendChild(t).appendChild(n).appendChild(i),
              (r = e.getComputedStyle(n)),
              (s = parseInt(r.height) > 3),
              Ke.removeChild(t)),
            s
          );
        },
      }));
  })();
  var gt = ["Webkit", "Moz", "ms"],
    vt = xe.createElement("div").style,
    yt = {},
    $t = /^(none|table(?!-c[ea]).+)/,
    bt = /^--/,
    xt = { position: "absolute", visibility: "hidden", display: "block" },
    wt = { letterSpacing: "0", fontWeight: "400" };
  Se.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = R(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r,
          o,
          a,
          s = h(t),
          u = bt.test(t),
          l = e.style;
        if (
          (u || (t = q(s)),
          (a = Se.cssHooks[t] || Se.cssHooks[s]),
          n === undefined)
        )
          return a && "get" in a && (r = a.get(e, !1, i)) !== undefined
            ? r
            : l[t];
        "string" === (o = typeof n) &&
          (r = ze.exec(n)) &&
          r[1] &&
          ((n = y(e, t, r)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (r && r[3]) || (Se.cssNumber[s] ? "" : "px")),
            ye.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && (n = a.set(e, n, i)) === undefined) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, i) {
      var r,
        o,
        a,
        s = h(t);
      return (
        bt.test(t) || (t = q(s)),
        (a = Se.cssHooks[t] || Se.cssHooks[s]) &&
          "get" in a &&
          (r = a.get(e, !0, n)),
        r === undefined && (r = R(e, t, i)),
        "normal" === r && t in wt && (r = wt[t]),
        "" === n || n
          ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    Se.each(["height", "width"], function (e, t) {
      Se.cssHooks[t] = {
        get: function (e, n, i) {
          if (n)
            return !$t.test(Se.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? U(e, t, i)
              : ht(e, xt, function () {
                  return U(e, t, i);
                });
        },
        set: function (e, n, i) {
          var r,
            o = pt(e),
            a = !ye.scrollboxSize() && "absolute" === o.position,
            s = (a || i) && "border-box" === Se.css(e, "boxSizing", !1, o),
            u = i ? F(e, t, i, s, o) : 0;
          return (
            s &&
              a &&
              (u -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(o[t]) -
                  F(e, t, "border", !1, o) -
                  0.5
              )),
            u &&
              (r = ze.exec(n)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[t] = n), (n = Se.css(e, t))),
            V(e, n, u)
          );
        },
      };
    }),
    (Se.cssHooks.marginLeft = L(ye.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(R(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              ht(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    Se.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (Se.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
            i < 4;
            i++
          )
            r[e + Ge[i] + t] = o[i] || o[i - 2] || o[0];
          return r;
        },
      }),
        "margin" !== e && (Se.cssHooks[e + t].set = V);
    }),
    Se.fn.extend({
      css: function (e, t) {
        return Re(
          this,
          function (e, t, n) {
            var i,
              r,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (i = pt(e), r = t.length; a < r; a++)
                o[t[a]] = Se.css(e, t[a], !1, i);
              return o;
            }
            return n !== undefined ? Se.style(e, t, n) : Se.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (Se.Tween = W),
    (W.prototype = {
      constructor: W,
      init: function (e, t, n, i, r, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = r || Se.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = o || (Se.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = W.propHooks[this.prop];
        return e && e.get ? e.get(this) : W.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = W.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                Se.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : W.propHooks._default.set(this),
          this
        );
      },
    }),
    (W.prototype.init.prototype = W.prototype),
    (W.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = Se.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          Se.fx.step[e.prop]
            ? Se.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!Se.cssHooks[e.prop] && null == e.elem.style[q(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : Se.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (W.propHooks.scrollTop = W.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (Se.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (Se.fx = W.prototype.init),
    (Se.fx.step = {});
  var Ct,
    St,
    Tt = /^(?:toggle|show|hide)$/,
    kt = /queueHooks$/;
  (Se.Animation = Se.extend(Y, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return y(n.elem, e, ze.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      $e(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ie));
      for (var n, i = 0, r = e.length; i < r; i++)
        (n = e[i]),
          (Y.tweeners[n] = Y.tweeners[n] || []),
          Y.tweeners[n].unshift(t);
    },
    prefilters: [X],
    prefilter: function (e, t) {
      t ? Y.prefilters.unshift(e) : Y.prefilters.push(e);
    },
  })),
    (Se.speed = function (e, t, n) {
      var i =
        e && "object" == typeof e
          ? Se.extend({}, e)
          : {
              complete: n || (!n && t) || ($e(e) && e),
              duration: e,
              easing: (n && t) || (t && !$e(t) && t),
            };
      return (
        Se.fx.off
          ? (i.duration = 0)
          : "number" != typeof i.duration &&
            (i.duration in Se.fx.speeds
              ? (i.duration = Se.fx.speeds[i.duration])
              : (i.duration = Se.fx.speeds._default)),
        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
        (i.old = i.complete),
        (i.complete = function () {
          $e(i.old) && i.old.call(this), i.queue && Se.dequeue(this, i.queue);
        }),
        i
      );
    }),
    Se.fn.extend({
      fadeTo: function (e, t, n, i) {
        return this.filter(Ye)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, i);
      },
      animate: function (e, t, n, i) {
        var r = Se.isEmptyObject(e),
          o = Se.speed(t, n, i),
          a = function () {
            var t = Y(this, Se.extend({}, e), o);
            (r || Ve.get(this, "finish")) && t.stop(!0);
          };
        return (
          (a.finish = a),
          r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (e, t, n) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = undefined)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              r = null != e && e + "queueHooks",
              o = Se.timers,
              a = Ve.get(this);
            if (r) a[r] && a[r].stop && i(a[r]);
            else for (r in a) a[r] && a[r].stop && kt.test(r) && i(a[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != e && o[r].queue !== e) ||
                (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
            (!t && n) || Se.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Ve.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              o = Se.timers,
              a = i ? i.length : 0;
            for (
              n.finish = !0,
                Se.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length;
              t--;

            )
              o[t].elem === this &&
                o[t].queue === e &&
                (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++)
              i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    Se.each(["toggle", "show", "hide"], function (e, t) {
      var n = Se.fn[t];
      Se.fn[t] = function (e, i, r) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(G(t, !0), e, i, r);
      };
    }),
    Se.each(
      {
        slideDown: G("show"),
        slideUp: G("hide"),
        slideToggle: G("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        Se.fn[e] = function (e, n, i) {
          return this.animate(t, e, n, i);
        };
      }
    ),
    (Se.timers = []),
    (Se.fx.tick = function () {
      var e,
        t = 0,
        n = Se.timers;
      for (Ct = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || Se.fx.stop(), (Ct = undefined);
    }),
    (Se.fx.timer = function (e) {
      Se.timers.push(e), Se.fx.start();
    }),
    (Se.fx.interval = 13),
    (Se.fx.start = function () {
      St || ((St = !0), B());
    }),
    (Se.fx.stop = function () {
      St = null;
    }),
    (Se.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (Se.fn.delay = function (t, n) {
      return (
        (t = (Se.fx && Se.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, i) {
          var r = e.setTimeout(n, t);
          i.stop = function () {
            e.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e = xe.createElement("input"),
        t = xe.createElement("select").appendChild(xe.createElement("option"));
      (e.type = "checkbox"),
        (ye.checkOn = "" !== e.value),
        (ye.optSelected = t.selected),
        ((e = xe.createElement("input")).value = "t"),
        (e.type = "radio"),
        (ye.radioValue = "t" === e.value);
    })();
  var Et,
    At = Se.expr.attrHandle;
  Se.fn.extend({
    attr: function (e, t) {
      return Re(this, Se.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        Se.removeAttr(this, e);
      });
    },
  }),
    Se.extend({
      attr: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? Se.prop(e, t, n)
            : ((1 === o && Se.isXMLDoc(e)) ||
                (r =
                  Se.attrHooks[t.toLowerCase()] ||
                  (Se.expr.match.bool.test(t) ? Et : undefined)),
              n !== undefined
                ? null === n
                  ? void Se.removeAttr(e, t)
                  : r && "set" in r && (i = r.set(e, n, t)) !== undefined
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : null == (i = Se.find.attr(e, t))
                ? undefined
                : i);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!ye.radioValue && "radio" === t && o(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          i = 0,
          r = t && t.match(Ie);
        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
      },
    }),
    (Et = {
      set: function (e, t, n) {
        return !1 === t ? Se.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    Se.each(Se.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = At[t] || Se.find.attr;
      At[t] = function (e, t, i) {
        var r,
          o,
          a = t.toLowerCase();
        return (
          i ||
            ((o = At[a]),
            (At[a] = r),
            (r = null != n(e, t, i) ? a : null),
            (At[a] = o)),
          r
        );
      };
    });
  var _t = /^(?:input|select|textarea|button)$/i,
    Ot = /^(?:a|area)$/i;
  Se.fn.extend({
    prop: function (e, t) {
      return Re(this, Se.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[Se.propFix[e] || e];
      });
    },
  }),
    Se.extend({
      prop: function (e, t, n) {
        var i,
          r,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && Se.isXMLDoc(e)) ||
              ((t = Se.propFix[t] || t), (r = Se.propHooks[t])),
            n !== undefined
              ? r && "set" in r && (i = r.set(e, n, t)) !== undefined
                ? i
                : (e[t] = n)
              : r && "get" in r && null !== (i = r.get(e, t))
              ? i
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = Se.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : _t.test(e.nodeName) || (Ot.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    ye.optSelected ||
      (Se.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    Se.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        Se.propFix[this.toLowerCase()] = this;
      }
    ),
    Se.fn.extend({
      addClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          u = 0;
        if ($e(e))
          return this.each(function (t) {
            Se(this).addClass(e.call(this, t, Z(this)));
          });
        if ((t = ee(e)).length)
          for (; (n = this[u++]); )
            if (((r = Z(n)), (i = 1 === n.nodeType && " " + J(r) + " "))) {
              for (a = 0; (o = t[a++]); )
                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
              r !== (s = J(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s,
          u = 0;
        if ($e(e))
          return this.each(function (t) {
            Se(this).removeClass(e.call(this, t, Z(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = ee(e)).length)
          for (; (n = this[u++]); )
            if (((r = Z(n)), (i = 1 === n.nodeType && " " + J(r) + " "))) {
              for (a = 0; (o = t[a++]); )
                for (; i.indexOf(" " + o + " ") > -1; )
                  i = i.replace(" " + o + " ", " ");
              r !== (s = J(i)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          i = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && i
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : $e(e)
          ? this.each(function (n) {
              Se(this).toggleClass(e.call(this, n, Z(this), t), t);
            })
          : this.each(function () {
              var t, r, o, a;
              if (i)
                for (r = 0, o = Se(this), a = ee(e); (t = a[r++]); )
                  o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (e !== undefined && "boolean" !== n) ||
                  ((t = Z(this)) && Ve.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      t || !1 === e ? "" : Ve.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          i = 0;
        for (t = " " + e + " "; (n = this[i++]); )
          if (1 === n.nodeType && (" " + J(Z(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      },
    });
  var Nt = /\r/g;
  Se.fn.extend({
    val: function (e) {
      var t,
        n,
        i,
        r = this[0];
      return arguments.length
        ? ((i = $e(e)),
          this.each(function (n) {
            var r;
            1 === this.nodeType &&
              (null == (r = i ? e.call(this, n, Se(this).val()) : e)
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : Array.isArray(r) &&
                  (r = Se.map(r, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                Se.valHooks[this.type] ||
                Se.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                t.set(this, r, "value") !== undefined) ||
                (this.value = r));
          }))
        : r
        ? (t = Se.valHooks[r.type] || Se.valHooks[r.nodeName.toLowerCase()]) &&
          "get" in t &&
          (n = t.get(r, "value")) !== undefined
          ? n
          : "string" == typeof (n = r.value)
          ? n.replace(Nt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    Se.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = Se.find.attr(e, "value");
            return null != t ? t : J(Se.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              i,
              r = e.options,
              a = e.selectedIndex,
              s = "select-one" === e.type,
              u = s ? null : [],
              l = s ? a + 1 : r.length;
            for (i = a < 0 ? l : s ? a : 0; i < l; i++)
              if (
                ((n = r[i]).selected || i === a) &&
                !n.disabled &&
                (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))
              ) {
                if (((t = Se(n).val()), s)) return t;
                u.push(t);
              }
            return u;
          },
          set: function (e, t) {
            for (
              var n, i, r = e.options, o = Se.makeArray(t), a = r.length;
              a--;

            )
              ((i = r[a]).selected =
                Se.inArray(Se.valHooks.option.get(i), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    Se.each(["radio", "checkbox"], function () {
      (Se.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = Se.inArray(Se(e).val(), t) > -1);
        },
      }),
        ye.checkOn ||
          (Se.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (ye.focusin = "onfocusin" in e);
  var Dt = /^(?:focusinfocus|focusoutblur)$/,
    Mt = function (e) {
      e.stopPropagation();
    };
  Se.extend(Se.event, {
    trigger: function (t, n, i, r) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d,
        p = [i || xe],
        h = me.call(t, "type") ? t.type : t,
        m = me.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = d = s = i = i || xe),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !Dt.test(h + Se.event.triggered) &&
          (h.indexOf(".") > -1 && ((h = (m = h.split(".")).shift()), m.sort()),
          (l = h.indexOf(":") < 0 && "on" + h),
          ((t = t[Se.expando]
            ? t
            : new Se.Event(h, "object" == typeof t && t)).isTrigger = r
            ? 2
            : 3),
          (t.namespace = m.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = undefined),
          t.target || (t.target = i),
          (n = null == n ? [t] : Se.makeArray(n, [t])),
          (f = Se.event.special[h] || {}),
          r || !f.trigger || !1 !== f.trigger.apply(i, n)))
      ) {
        if (!r && !f.noBubble && !be(i)) {
          for (
            u = f.delegateType || h, Dt.test(u + h) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            p.push(a), (s = a);
          s === (i.ownerDocument || xe) &&
            p.push(s.defaultView || s.parentWindow || e);
        }
        for (o = 0; (a = p[o++]) && !t.isPropagationStopped(); )
          (d = a),
            (t.type = o > 1 ? u : f.bindType || h),
            (c =
              (Ve.get(a, "events") || Object.create(null))[t.type] &&
              Ve.get(a, "handle")) && c.apply(a, n),
            (c = l && a[l]) &&
              c.apply &&
              qe(a) &&
              ((t.result = c.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = h),
          r ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(p.pop(), n)) ||
            !qe(i) ||
            (l &&
              $e(i[h]) &&
              !be(i) &&
              ((s = i[l]) && (i[l] = null),
              (Se.event.triggered = h),
              t.isPropagationStopped() && d.addEventListener(h, Mt),
              i[h](),
              t.isPropagationStopped() && d.removeEventListener(h, Mt),
              (Se.event.triggered = undefined),
              s && (i[l] = s))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var i = Se.extend(new Se.Event(), n, { type: e, isSimulated: !0 });
      Se.event.trigger(i, null, t);
    },
  }),
    Se.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          Se.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return Se.event.trigger(e, t, n, !0);
      },
    }),
    ye.focusin ||
      Se.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          Se.event.simulate(t, e.target, Se.event.fix(e));
        };
        Se.event.special[t] = {
          setup: function () {
            var i = this.ownerDocument || this.document || this,
              r = Ve.access(i, t);
            r || i.addEventListener(e, n, !0), Ve.access(i, t, (r || 0) + 1);
          },
          teardown: function () {
            var i = this.ownerDocument || this.document || this,
              r = Ve.access(i, t) - 1;
            r
              ? Ve.access(i, t, r)
              : (i.removeEventListener(e, n, !0), Ve.remove(i, t));
          },
        };
      });
  var It = e.location,
    jt = { guid: Date.now() },
    Pt = /\?/;
  Se.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (i) {
      n = undefined;
    }
    return (
      (n && !n.getElementsByTagName("parsererror").length) ||
        Se.error("Invalid XML: " + t),
      n
    );
  };
  var Rt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    qt = /^(?:input|select|textarea|keygen)/i;
  (Se.param = function (e, t) {
    var n,
      i = [],
      r = function (e, t) {
        var n = $e(t) ? t() : t;
        i[i.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !Se.isPlainObject(e)))
      Se.each(e, function () {
        r(this.name, this.value);
      });
    else for (n in e) te(n, e[n], t, r);
    return i.join("&");
  }),
    Se.fn.extend({
      serialize: function () {
        return Se.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = Se.prop(this, "elements");
          return e ? Se.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !Se(this).is(":disabled") &&
              qt.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !tt.test(e))
            );
          })
          .map(function (e, t) {
            var n = Se(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? Se.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Lt, "\r\n") };
          })
          .get();
      },
    });
  var Vt = /%20/g,
    Ft = /#.*$/,
    Ut = /([?&])_=[^&]*/,
    Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    zt = /^(?:GET|HEAD)$/,
    Gt = /^\/\//,
    Kt = {},
    Xt = {},
    Qt = "*/".concat("*"),
    Yt = xe.createElement("a");
  (Yt.href = It.href),
    Se.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: It.href,
        type: "GET",
        isLocal: Bt.test(It.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Qt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": Se.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? re(re(e, Se.ajaxSettings), t) : re(Se.ajaxSettings, e);
      },
      ajaxPrefilter: ne(Kt),
      ajaxTransport: ne(Xt),
      ajax: function (t, n) {
        function i(t, n, i, s) {
          var l,
            d,
            p,
            b,
            x,
            w = n;
          c ||
            ((c = !0),
            u && e.clearTimeout(u),
            (r = undefined),
            (a = s || ""),
            (C.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && t < 300) || 304 === t),
            i && (b = oe(h, C, i)),
            !l &&
              Se.inArray("script", h.dataTypes) > -1 &&
              (h.converters["text script"] = function () {}),
            (b = ae(h, b, C, l)),
            l
              ? (h.ifModified &&
                  ((x = C.getResponseHeader("Last-Modified")) &&
                    (Se.lastModified[o] = x),
                  (x = C.getResponseHeader("etag")) && (Se.etag[o] = x)),
                204 === t || "HEAD" === h.type
                  ? (w = "nocontent")
                  : 304 === t
                  ? (w = "notmodified")
                  : ((w = b.state), (d = b.data), (l = !(p = b.error))))
              : ((p = w), (!t && w) || ((w = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (n || w) + ""),
            l ? v.resolveWith(m, [d, w, C]) : v.rejectWith(m, [C, w, p]),
            C.statusCode($),
            ($ = undefined),
            f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? d : p]),
            y.fireWith(m, [C, w]),
            f &&
              (g.trigger("ajaxComplete", [C, h]),
              --Se.active || Se.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((n = t), (t = undefined)), (n = n || {});
        var r,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          d,
          p,
          h = Se.ajaxSetup({}, n),
          m = h.context || h,
          g = h.context && (m.nodeType || m.jquery) ? Se(m) : Se.event,
          v = Se.Deferred(),
          y = Se.Callbacks("once memory"),
          $ = h.statusCode || {},
          b = {},
          x = {},
          w = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s)
                  for (s = {}; (t = Wt.exec(a)); )
                    s[t[1].toLowerCase() + " "] = (
                      s[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = s[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (b[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) C.always(e[C.status]);
                else for (t in e) $[t] = [$[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || w;
              return r && r.abort(t), i(0, t), this;
            },
          };
        if (
          (v.promise(C),
          (h.url = ((t || h.url || It.href) + "").replace(
            Gt,
            It.protocol + "//"
          )),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(Ie) || [""]),
          null == h.crossDomain)
        ) {
          l = xe.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain =
                Yt.protocol + "//" + Yt.host != l.protocol + "//" + l.host);
          } catch (S) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = Se.param(h.data, h.traditional)),
          ie(Kt, h, n, C),
          c)
        )
          return C;
        for (d in ((f = Se.event && h.global) &&
          0 == Se.active++ &&
          Se.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !zt.test(h.type)),
        (o = h.url.replace(Ft, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (h.data = h.data.replace(Vt, "+"))
          : ((p = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (Pt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache &&
              ((o = o.replace(Ut, "$1")),
              (p = (Pt.test(o) ? "&" : "?") + "_=" + jt.guid++ + p)),
            (h.url = o + p)),
        h.ifModified &&
          (Se.lastModified[o] &&
            C.setRequestHeader("If-Modified-Since", Se.lastModified[o]),
          Se.etag[o] && C.setRequestHeader("If-None-Match", Se.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          C.setRequestHeader("Content-Type", h.contentType),
        C.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ("*" !== h.dataTypes[0] ? ", " + Qt + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          C.setRequestHeader(d, h.headers[d]);
        if (h.beforeSend && (!1 === h.beforeSend.call(m, C, h) || c))
          return C.abort();
        if (
          ((w = "abort"),
          y.add(h.complete),
          C.done(h.success),
          C.fail(h.error),
          (r = ie(Xt, h, n, C)))
        ) {
          if (((C.readyState = 1), f && g.trigger("ajaxSend", [C, h]), c))
            return C;
          h.async &&
            h.timeout > 0 &&
            (u = e.setTimeout(function () {
              C.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), r.send(b, i);
          } catch (S) {
            if (c) throw S;
            i(-1, S);
          }
        } else i(-1, "No Transport");
        return C;
      },
      getJSON: function (e, t, n) {
        return Se.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return Se.get(e, undefined, t, "script");
      },
    }),
    Se.each(["get", "post"], function (e, t) {
      Se[t] = function (e, n, i, r) {
        return (
          $e(n) && ((r = r || i), (i = n), (n = undefined)),
          Se.ajax(
            Se.extend(
              { url: e, type: t, dataType: r, data: n, success: i },
              Se.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    Se.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (Se._evalUrl = function (e, t, n) {
      return Se.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          Se.globalEval(e, t, n);
        },
      });
    }),
    Se.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            ($e(e) && (e = e.call(this[0])),
            (t = Se(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return $e(e)
          ? this.each(function (t) {
              Se(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = Se(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = $e(e);
        return this.each(function (n) {
          Se(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              Se(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (Se.expr.pseudos.hidden = function (e) {
      return !Se.expr.pseudos.visible(e);
    }),
    (Se.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (Se.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (t) {}
    });
  var Jt = { 0: 200, 1223: 204 },
    Zt = Se.ajaxSettings.xhr();
  (ye.cors = !!Zt && "withCredentials" in Zt),
    (ye.ajax = Zt = !!Zt),
    Se.ajaxTransport(function (t) {
      var n, i;
      if (ye.cors || (Zt && !t.crossDomain))
        return {
          send: function (r, o) {
            var a,
              s = t.xhr();
            if (
              (s.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(t.mimeType),
            t.crossDomain ||
              r["X-Requested-With"] ||
              (r["X-Requested-With"] = "XMLHttpRequest"),
            r))
              s.setRequestHeader(a, r[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n =
                    i =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Jt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (i = s.onerror = s.ontimeout = n("error")),
              s.onabort !== undefined
                ? (s.onabort = i)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && i();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (u) {
              if (n) throw u;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    Se.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    Se.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return Se.globalEval(e), e;
        },
      },
    }),
    Se.ajaxPrefilter("script", function (e) {
      e.cache === undefined && (e.cache = !1),
        e.crossDomain && (e.type = "GET");
    }),
    Se.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (i, r) {
            (t = Se("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(),
                    (n = null),
                    e && r("error" === e.type ? 404 : 200, e.type);
                })
              )),
              xe.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var en,
    tn = [],
    nn = /(=)\?(?=&|$)|\?\?/;
  Se.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = tn.pop() || Se.expando + "_" + jt.guid++;
      return (this[e] = !0), e;
    },
  }),
    Se.ajaxPrefilter("json jsonp", function (t, n, i) {
      var r,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (nn.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              nn.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (r = t.jsonpCallback =
            $e(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(nn, "$1" + r))
            : !1 !== t.jsonp &&
              (t.url += (Pt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
          (t.converters["script json"] = function () {
            return a || Se.error(r + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[r]),
          (e[r] = function () {
            a = arguments;
          }),
          i.always(function () {
            o === undefined ? Se(e).removeProp(r) : (e[r] = o),
              t[r] && ((t.jsonpCallback = n.jsonpCallback), tn.push(r)),
              a && $e(o) && o(a[0]),
              (a = o = undefined);
          }),
          "script"
        );
    }),
    (ye.createHTMLDocument =
      (((en = xe.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === en.childNodes.length)),
    (Se.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (ye.createHTMLDocument
              ? (((i = (t =
                  xe.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = xe.location.href),
                t.head.appendChild(i))
              : (t = xe)),
          (o = !n && []),
          (r = _e.exec(e))
            ? [t.createElement(r[1])]
            : ((r = C([e], t, o)),
              o && o.length && Se(o).remove(),
              Se.merge([], r.childNodes)));
      var i, r, o;
    }),
    (Se.fn.load = function (e, t, n) {
      var i,
        r,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((i = J(e.slice(s))), (e = e.slice(0, s))),
        $e(t)
          ? ((n = t), (t = undefined))
          : t && "object" == typeof t && (r = "POST"),
        a.length > 0 &&
          Se.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(i ? Se("<div>").append(Se.parseHTML(e)).find(i) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (Se.expr.pseudos.animated = function (e) {
      return Se.grep(Se.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (Se.offset = {
      setOffset: function (e, t, n) {
        var i,
          r,
          o,
          a,
          s,
          u,
          l = Se.css(e, "position"),
          c = Se(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = Se.css(e, "top")),
          (u = Se.css(e, "left")),
          ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1
            ? ((a = (i = c.position()).top), (r = i.left))
            : ((a = parseFloat(o) || 0), (r = parseFloat(u) || 0)),
          $e(t) && (t = t.call(e, n, Se.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + r),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    Se.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return e === undefined
            ? this
            : this.each(function (t) {
                Se.offset.setOffset(this, e, t);
              });
        var t,
          n,
          i = this[0];
        return i
          ? i.getClientRects().length
            ? ((t = i.getBoundingClientRect()),
              (n = i.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            i = this[0],
            r = { top: 0, left: 0 };
          if ("fixed" === Se.css(i, "position")) t = i.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = i.ownerDocument,
                e = i.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === Se.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== i &&
              1 === e.nodeType &&
              (((r = Se(e).offset()).top += Se.css(e, "borderTopWidth", !0)),
              (r.left += Se.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - r.top - Se.css(i, "marginTop", !0),
            left: t.left - r.left - Se.css(i, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === Se.css(e, "position");

          )
            e = e.offsetParent;
          return e || Ke;
        });
      },
    }),
    Se.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = "pageYOffset" === t;
        Se.fn[e] = function (i) {
          return Re(
            this,
            function (e, i, r) {
              var o;
              if (
                (be(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                r === undefined)
              )
                return o ? o[t] : e[i];
              o
                ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset)
                : (e[i] = r);
            },
            e,
            i,
            arguments.length
          );
        };
      }
    ),
    Se.each(["top", "left"], function (e, t) {
      Se.cssHooks[t] = L(ye.pixelPosition, function (e, n) {
        if (n)
          return (n = R(e, t)), dt.test(n) ? Se(e).position()[t] + "px" : n;
      });
    }),
    Se.each({ Height: "height", Width: "width" }, function (e, t) {
      Se.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, i) {
          Se.fn[i] = function (r, o) {
            var a = arguments.length && (n || "boolean" != typeof r),
              s = n || (!0 === r || !0 === o ? "margin" : "border");
            return Re(
              this,
              function (t, n, r) {
                var o;
                return be(t)
                  ? 0 === i.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((o = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      o["scroll" + e],
                      t.body["offset" + e],
                      o["offset" + e],
                      o["client" + e]
                    ))
                  : r === undefined
                  ? Se.css(t, n, s)
                  : Se.style(t, n, r, s);
              },
              t,
              a ? r : undefined,
              a
            );
          };
        }
      );
    }),
    Se.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        Se.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    Se.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    Se.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        Se.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    );
  var rn = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (Se.proxy = function (e, t) {
    var n, i, r;
    return (
      "string" == typeof t && ((n = e[t]), (t = e), (e = n)),
      $e(e)
        ? ((i = le.call(arguments, 2)),
          ((r = function () {
            return e.apply(t || this, i.concat(le.call(arguments)));
          }).guid = e.guid =
            e.guid || Se.guid++),
          r)
        : undefined
    );
  }),
    (Se.holdReady = function (e) {
      e ? Se.readyWait++ : Se.ready(!0);
    }),
    (Se.isArray = Array.isArray),
    (Se.parseJSON = JSON.parse),
    (Se.nodeName = o),
    (Se.isFunction = $e),
    (Se.isWindow = be),
    (Se.camelCase = h),
    (Se.type = i),
    (Se.now = Date.now),
    (Se.isNumeric = function (e) {
      var t = Se.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (Se.trim = function (e) {
      return null == e ? "" : (e + "").replace(rn, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return Se;
      });
  var on = e.jQuery,
    an = e.$;
  return (
    (Se.noConflict = function (t) {
      return (
        e.$ === Se && (e.$ = an), t && e.jQuery === Se && (e.jQuery = on), Se
      );
    }),
    void 0 === t && (e.jQuery = e.$ = Se),
    Se
  );
}),
  (function (e, t) {
    "use strict";
    var n;
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var i = e(document);
    (e.rails = n =
      {
        linkClickSelector:
          "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector:
          "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector:
          "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector:
          "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector:
          "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector:
          "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector:
          "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector:
          "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
          return e("meta[name=csrf-token]").attr("content");
        },
        csrfParam: function () {
          return e("meta[name=csrf-param]").attr("content");
        },
        CSRFProtection: function (e) {
          var t = n.csrfToken();
          t && e.setRequestHeader("X-CSRF-Token", t);
        },
        refreshCSRFTokens: function () {
          e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken());
        },
        fire: function (t, n, i) {
          var r = e.Event(n);
          return t.trigger(r, i), !1 !== r.result;
        },
        confirm: function (e) {
          return confirm(e);
        },
        ajax: function (t) {
          return e.ajax(t);
        },
        href: function (e) {
          return e[0].href;
        },
        isRemote: function (e) {
          return e.data("remote") !== t && !1 !== e.data("remote");
        },
        handleRemote: function (i) {
          var r, o, a, s, u, l;
          if (n.fire(i, "ajax:before")) {
            if (
              ((s = i.data("with-credentials") || null),
              (u =
                i.data("type") || (e.ajaxSettings && e.ajaxSettings.dataType)),
              i.is("form"))
            ) {
              (r = i.data("ujs:submit-button-formmethod") || i.attr("method")),
                (o =
                  i.data("ujs:submit-button-formaction") || i.attr("action")),
                (a = e(i[0]).serializeArray());
              var c = i.data("ujs:submit-button");
              c && (a.push(c), i.data("ujs:submit-button", null)),
                i.data("ujs:submit-button-formmethod", null),
                i.data("ujs:submit-button-formaction", null);
            } else
              i.is(n.inputChangeSelector)
                ? ((r = i.data("method")),
                  (o = i.data("url")),
                  (a = i.serialize()),
                  i.data("params") && (a = a + "&" + i.data("params")))
                : i.is(n.buttonClickSelector)
                ? ((r = i.data("method") || "get"),
                  (o = i.data("url")),
                  (a = i.serialize()),
                  i.data("params") && (a = a + "&" + i.data("params")))
                : ((r = i.data("method")),
                  (o = n.href(i)),
                  (a = i.data("params") || null));
            return (
              (l = {
                type: r || "GET",
                data: a,
                dataType: u,
                beforeSend: function (e, r) {
                  if (
                    (r.dataType === t &&
                      e.setRequestHeader(
                        "accept",
                        "*/*;q=0.5, " + r.accepts.script
                      ),
                    !n.fire(i, "ajax:beforeSend", [e, r]))
                  )
                    return !1;
                  i.trigger("ajax:send", e);
                },
                success: function (e, t, n) {
                  i.trigger("ajax:success", [e, t, n]);
                },
                complete: function (e, t) {
                  i.trigger("ajax:complete", [e, t]);
                },
                error: function (e, t, n) {
                  i.trigger("ajax:error", [e, t, n]);
                },
                crossDomain: n.isCrossDomain(o),
              }),
              s && (l.xhrFields = { withCredentials: s }),
              o && (l.url = o),
              n.ajax(l)
            );
          }
          return !1;
        },
        isCrossDomain: function (e) {
          var t = document.createElement("a");
          t.href = location.href;
          var n = document.createElement("a");
          try {
            return (
              (n.href = e),
              (n.href = n.href),
              !(
                ((!n.protocol || ":" === n.protocol) && !n.host) ||
                t.protocol + "//" + t.host == n.protocol + "//" + n.host
              )
            );
          } catch (i) {
            return !0;
          }
        },
        handleMethod: function (i) {
          var r = n.href(i),
            o = i.data("method"),
            a = i.attr("target"),
            s = n.csrfToken(),
            u = n.csrfParam(),
            l = e('<form method="post" action="' + r + '"></form>'),
            c = '<input name="_method" value="' + o + '" type="hidden" />';
          u === t ||
            s === t ||
            n.isCrossDomain(r) ||
            (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'),
            a && l.attr("target", a),
            l.hide().append(c).appendTo("body"),
            l.submit();
        },
        formElements: function (t, n) {
          return t.is("form") ? e(t[0].elements).filter(n) : t.find(n);
        },
        disableFormElements: function (t) {
          n.formElements(t, n.disableSelector).each(function () {
            n.disableFormElement(e(this));
          });
        },
        disableFormElement: function (e) {
          var n, i;
          (n = e.is("button") ? "html" : "val"),
            (i = e.data("disable-with")) !== t &&
              (e.data("ujs:enable-with", e[n]()), e[n](i)),
            e.prop("disabled", !0),
            e.data("ujs:disabled", !0);
        },
        enableFormElements: function (t) {
          n.formElements(t, n.enableSelector).each(function () {
            n.enableFormElement(e(this));
          });
        },
        enableFormElement: function (e) {
          var n = e.is("button") ? "html" : "val";
          e.data("ujs:enable-with") !== t &&
            (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")),
            e.prop("disabled", !1),
            e.removeData("ujs:disabled");
        },
        allowAction: function (e) {
          var t,
            i = e.data("confirm"),
            r = !1;
          if (!i) return !0;
          if (n.fire(e, "confirm")) {
            try {
              r = n.confirm(i);
            } catch (o) {
              (console.error || console.log).call(console, o.stack || o);
            }
            t = n.fire(e, "confirm:complete", [r]);
          }
          return r && t;
        },
        blankInputs: function (t, n, i) {
          var r,
            o,
            a,
            s = e(),
            u = n || "input,textarea",
            l = t.find(u),
            c = {};
          return (
            l.each(function () {
              (r = e(this)).is("input[type=radio]")
                ? ((a = r.attr("name")),
                  c[a] ||
                    (0 ===
                      t.find('input[type=radio]:checked[name="' + a + '"]')
                        .length &&
                      ((o = t.find('input[type=radio][name="' + a + '"]')),
                      (s = s.add(o))),
                    (c[a] = a)))
                : (r.is("input[type=checkbox],input[type=radio]")
                    ? r.is(":checked")
                    : !!r.val()) === i && (s = s.add(r));
            }),
            !!s.length && s
          );
        },
        nonBlankInputs: function (e, t) {
          return n.blankInputs(e, t, !0);
        },
        stopEverything: function (t) {
          return (
            e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
          );
        },
        disableElement: function (e) {
          var i = e.data("disable-with");
          i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)),
            e.bind("click.railsDisable", function (e) {
              return n.stopEverything(e);
            }),
            e.data("ujs:disabled", !0);
        },
        enableElement: function (e) {
          e.data("ujs:enable-with") !== t &&
            (e.html(e.data("ujs:enable-with")),
            e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable"),
            e.removeData("ujs:disabled");
        },
      }),
      n.fire(i, "rails:attachBindings") &&
        (e.ajaxPrefilter(function (e, t, i) {
          e.crossDomain || n.CSRFProtection(i);
        }),
        e(window).on("pageshow.rails", function () {
          e(e.rails.enableSelector).each(function () {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t);
          }),
            e(e.rails.linkDisableSelector).each(function () {
              var t = e(this);
              t.data("ujs:disabled") && e.rails.enableElement(t);
            });
        }),
        i.on("ajax:complete", n.linkDisableSelector, function () {
          n.enableElement(e(this));
        }),
        i.on("ajax:complete", n.buttonDisableSelector, function () {
          n.enableFormElement(e(this));
        }),
        i.on("click.rails", n.linkClickSelector, function (t) {
          var i = e(this),
            r = i.data("method"),
            o = i.data("params"),
            a = t.metaKey || t.ctrlKey;
          if (!n.allowAction(i)) return n.stopEverything(t);
          if (
            (!a && i.is(n.linkDisableSelector) && n.disableElement(i),
            n.isRemote(i))
          ) {
            if (a && (!r || "GET" === r) && !o) return !0;
            var s = n.handleRemote(i);
            return (
              !1 === s
                ? n.enableElement(i)
                : s.fail(function () {
                    n.enableElement(i);
                  }),
              !1
            );
          }
          return r ? (n.handleMethod(i), !1) : void 0;
        }),
        i.on("click.rails", n.buttonClickSelector, function (t) {
          var i = e(this);
          if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
          i.is(n.buttonDisableSelector) && n.disableFormElement(i);
          var r = n.handleRemote(i);
          return (
            !1 === r
              ? n.enableFormElement(i)
              : r.fail(function () {
                  n.enableFormElement(i);
                }),
            !1
          );
        }),
        i.on("change.rails", n.inputChangeSelector, function (t) {
          var i = e(this);
          return n.allowAction(i) && n.isRemote(i)
            ? (n.handleRemote(i), !1)
            : n.stopEverything(t);
        }),
        i.on("submit.rails", n.formSubmitSelector, function (i) {
          var r,
            o,
            a = e(this),
            s = n.isRemote(a);
          if (!n.allowAction(a)) return n.stopEverything(i);
          if (a.attr("novalidate") === t)
            if (a.data("ujs:formnovalidate-button") === t) {
              if (
                (r = n.blankInputs(a, n.requiredInputSelector, !1)) &&
                n.fire(a, "ajax:aborted:required", [r])
              )
                return n.stopEverything(i);
            } else a.data("ujs:formnovalidate-button", t);
          if (s) {
            if ((o = n.nonBlankInputs(a, n.fileInputSelector))) {
              setTimeout(function () {
                n.disableFormElements(a);
              }, 13);
              var u = n.fire(a, "ajax:aborted:file", [o]);
              return (
                u ||
                  setTimeout(function () {
                    n.enableFormElements(a);
                  }, 13),
                u
              );
            }
            return n.handleRemote(a), !1;
          }
          setTimeout(function () {
            n.disableFormElements(a);
          }, 13);
        }),
        i.on("click.rails", n.formInputClickSelector, function (t) {
          var i = e(this);
          if (!n.allowAction(i)) return n.stopEverything(t);
          var r = i.attr("name"),
            o = r ? { name: r, value: i.val() } : null,
            a = i.closest("form");
          0 === a.length && (a = e("#" + i.attr("form"))),
            a.data("ujs:submit-button", o),
            a.data("ujs:formnovalidate-button", i.attr("formnovalidate")),
            a.data("ujs:submit-button-formaction", i.attr("formaction")),
            a.data("ujs:submit-button-formmethod", i.attr("formmethod"));
        }),
        i.on("ajax:send.rails", n.formSubmitSelector, function (t) {
          this === t.target && n.disableFormElements(e(this));
        }),
        i.on("ajax:complete.rails", n.formSubmitSelector, function (t) {
          this === t.target && n.enableFormElements(e(this));
        }),
        e(function () {
          n.refreshCSRFTokens();
        }));
  })(jQuery),
  (function (e) {
    (e.flexslider = function (t, n) {
      var i = e(t);
      i.vars = e.extend({}, e.flexslider.defaults, n);
      var r,
        o = i.vars.namespace,
        a =
          window.navigator &&
          window.navigator.msPointerEnabled &&
          window.MSGesture,
        s =
          ("ontouchstart" in window ||
            a ||
            (window.DocumentTouch && document instanceof DocumentTouch)) &&
          i.vars.touch,
        u = "click touchend MSPointerUp",
        l = "",
        c = "vertical" === i.vars.direction,
        f = i.vars.reverse,
        d = i.vars.itemWidth > 0,
        p = "fade" === i.vars.animation,
        h = "" !== i.vars.asNavFor,
        m = {},
        g = !0;
      e.data(t, "flexslider", i),
        (m = {
          init: function () {
            (i.animating = !1),
              (i.currentSlide = parseInt(i.vars.startAt ? i.vars.startAt : 0)),
              isNaN(i.currentSlide) && (i.currentSlide = 0),
              (i.animatingTo = i.currentSlide),
              (i.atEnd = 0 === i.currentSlide || i.currentSlide === i.last),
              (i.containerSelector = i.vars.selector.substr(
                0,
                i.vars.selector.search(" ")
              )),
              (i.slides = e(i.vars.selector, i)),
              (i.container = e(i.containerSelector, i)),
              (i.count = i.slides.length),
              (i.syncExists = e(i.vars.sync).length > 0),
              "slide" === i.vars.animation && (i.vars.animation = "swing"),
              (i.prop = c ? "top" : "marginLeft"),
              (i.args = {}),
              (i.manualPause = !1),
              (i.stopped = !1),
              (i.started = !1),
              (i.startTimeout = null),
              (i.transitions =
                !i.vars.video &&
                !p &&
                i.vars.useCSS &&
                (function () {
                  var e = document.createElement("div"),
                    t = [
                      "perspectiveProperty",
                      "WebkitPerspective",
                      "MozPerspective",
                      "OPerspective",
                      "msPerspective",
                    ];
                  for (var n in t)
                    if (e.style[t[n]] !== undefined)
                      return (
                        (i.pfx = t[n].replace("Perspective", "").toLowerCase()),
                        (i.prop = "-" + i.pfx + "-transform"),
                        !0
                      );
                  return !1;
                })()),
              "" !== i.vars.controlsContainer &&
                (i.controlsContainer =
                  e(i.vars.controlsContainer).length > 0 &&
                  e(i.vars.controlsContainer)),
              "" !== i.vars.manualControls &&
                (i.manualControls =
                  e(i.vars.manualControls).length > 0 &&
                  e(i.vars.manualControls)),
              i.vars.randomize &&
                (i.slides.sort(function () {
                  return Math.round(Math.random()) - 0.5;
                }),
                i.container.empty().append(i.slides)),
              i.doMath(),
              i.setup("init"),
              i.vars.controlNav && m.controlNav.setup(),
              i.vars.directionNav && m.directionNav.setup(),
              i.vars.keyboard &&
                (1 === e(i.containerSelector).length ||
                  i.vars.multipleKeyboard) &&
                e(document).bind("keyup", function (e) {
                  var t = e.keyCode;
                  if (!i.animating && (39 === t || 37 === t)) {
                    var n =
                      39 === t
                        ? i.getTarget("next")
                        : 37 === t && i.getTarget("prev");
                    i.flexAnimate(n, i.vars.pauseOnAction);
                  }
                }),
              i.vars.mousewheel &&
                i.bind("mousewheel", function (e, t) {
                  e.preventDefault();
                  var n = t < 0 ? i.getTarget("next") : i.getTarget("prev");
                  i.flexAnimate(n, i.vars.pauseOnAction);
                }),
              i.vars.pausePlay && m.pausePlay.setup(),
              i.vars.slideshow &&
                i.vars.pauseInvisible &&
                m.pauseInvisible.init(),
              i.vars.slideshow &&
                (i.vars.pauseOnHover &&
                  i.hover(
                    function () {
                      i.manualPlay || i.manualPause || i.pause();
                    },
                    function () {
                      i.manualPause || i.manualPlay || i.stopped || i.play();
                    }
                  ),
                (i.vars.pauseInvisible && m.pauseInvisible.isHidden()) ||
                  (i.vars.initDelay > 0
                    ? (i.startTimeout = setTimeout(i.play, i.vars.initDelay))
                    : i.play())),
              h && m.asNav.setup(),
              s && i.vars.touch && m.touch(),
              (!p || (p && i.vars.smoothHeight)) &&
                e(window).bind("resize orientationchange focus", m.resize),
              i.find("img").attr("draggable", "false"),
              setTimeout(function () {
                i.vars.start(i);
              }, 200);
          },
          asNav: {
            setup: function () {
              (i.asNav = !0),
                (i.animatingTo = Math.floor(i.currentSlide / i.move)),
                (i.currentItem = i.currentSlide),
                i.slides
                  .removeClass(o + "active-slide")
                  .eq(i.currentItem)
                  .addClass(o + "active-slide"),
                a
                  ? ((t._slider = i),
                    i.slides.each(function () {
                      var t = this;
                      (t._gesture = new MSGesture()),
                        (t._gesture.target = t),
                        t.addEventListener(
                          "MSPointerDown",
                          function (e) {
                            e.preventDefault(),
                              e.currentTarget._gesture &&
                                e.currentTarget._gesture.addPointer(
                                  e.pointerId
                                );
                          },
                          !1
                        ),
                        t.addEventListener("MSGestureTap", function (t) {
                          t.preventDefault();
                          var n = e(this),
                            r = n.index();
                          e(i.vars.asNavFor).data("flexslider").animating ||
                            n.hasClass("active") ||
                            ((i.direction =
                              i.currentItem < r ? "next" : "prev"),
                            i.flexAnimate(r, i.vars.pauseOnAction, !1, !0, !0));
                        });
                    }))
                  : i.slides.click(function (t) {
                      t.preventDefault();
                      var n = e(this),
                        r = n.index();
                      n.offset().left - e(i).scrollLeft() <= 0 &&
                      n.hasClass(o + "active-slide")
                        ? i.flexAnimate(i.getTarget("prev"), !0)
                        : e(i.vars.asNavFor).data("flexslider").animating ||
                          n.hasClass(o + "active-slide") ||
                          ((i.direction = i.currentItem < r ? "next" : "prev"),
                          i.flexAnimate(r, i.vars.pauseOnAction, !1, !0, !0));
                    });
            },
          },
          controlNav: {
            setup: function () {
              i.manualControls
                ? m.controlNav.setupManual()
                : m.controlNav.setupPaging();
            },
            setupPaging: function () {
              var t,
                n,
                r =
                  "thumbnails" === i.vars.controlNav
                    ? "control-thumbs"
                    : "control-paging",
                a = 1;
              if (
                ((i.controlNavScaffold = e(
                  '<ol class="' + o + "control-nav " + o + r + '"></ol>'
                )),
                i.pagingCount > 1)
              )
                for (var s = 0; s < i.pagingCount; s++) {
                  if (
                    ((n = i.slides.eq(s)),
                    (t =
                      "thumbnails" === i.vars.controlNav
                        ? '<img src="' + n.attr("data-thumb") + '"/>'
                        : "<a>" + a + "</a>"),
                    "thumbnails" === i.vars.controlNav &&
                      !0 === i.vars.thumbCaptions)
                  ) {
                    var c = n.attr("data-thumbcaption");
                    "" != c &&
                      undefined != c &&
                      (t += '<span class="' + o + 'caption">' + c + "</span>");
                  }
                  i.controlNavScaffold.append("<li>" + t + "</li>"), a++;
                }
              i.controlsContainer
                ? e(i.controlsContainer).append(i.controlNavScaffold)
                : i.append(i.controlNavScaffold),
                m.controlNav.set(),
                m.controlNav.active(),
                i.controlNavScaffold.delegate("a, img", u, function (t) {
                  if ((t.preventDefault(), "" === l || l === t.type)) {
                    var n = e(this),
                      r = i.controlNav.index(n);
                    n.hasClass(o + "active") ||
                      ((i.direction = r > i.currentSlide ? "next" : "prev"),
                      i.flexAnimate(r, i.vars.pauseOnAction));
                  }
                  "" === l && (l = t.type), m.setToClearWatchedEvent();
                });
            },
            setupManual: function () {
              (i.controlNav = i.manualControls),
                m.controlNav.active(),
                i.controlNav.bind(u, function (t) {
                  if ((t.preventDefault(), "" === l || l === t.type)) {
                    var n = e(this),
                      r = i.controlNav.index(n);
                    n.hasClass(o + "active") ||
                      (r > i.currentSlide
                        ? (i.direction = "next")
                        : (i.direction = "prev"),
                      i.flexAnimate(r, i.vars.pauseOnAction));
                  }
                  "" === l && (l = t.type), m.setToClearWatchedEvent();
                });
            },
            set: function () {
              var t = "thumbnails" === i.vars.controlNav ? "img" : "a";
              i.controlNav = e(
                "." + o + "control-nav li " + t,
                i.controlsContainer ? i.controlsContainer : i
              );
            },
            active: function () {
              i.controlNav
                .removeClass(o + "active")
                .eq(i.animatingTo)
                .addClass(o + "active");
            },
            update: function (t, n) {
              i.pagingCount > 1 && "add" === t
                ? i.controlNavScaffold.append(
                    e("<li><a>" + i.count + "</a></li>")
                  )
                : 1 === i.pagingCount
                ? i.controlNavScaffold.find("li").remove()
                : i.controlNav.eq(n).closest("li").remove(),
                m.controlNav.set(),
                i.pagingCount > 1 && i.pagingCount !== i.controlNav.length
                  ? i.update(n, t)
                  : m.controlNav.active();
            },
          },
          directionNav: {
            setup: function () {
              var t = e(
                '<ul class="' +
                  o +
                  'direction-nav"><li><a class="' +
                  o +
                  'prev" href="#">' +
                  i.vars.prevText +
                  '</a></li><li><a class="' +
                  o +
                  'next" href="#">' +
                  i.vars.nextText +
                  "</a></li></ul>"
              );
              i.controlsContainer
                ? (e(i.controlsContainer).append(t),
                  (i.directionNav = e(
                    "." + o + "direction-nav li a",
                    i.controlsContainer
                  )))
                : (i.append(t),
                  (i.directionNav = e("." + o + "direction-nav li a", i))),
                m.directionNav.update(),
                i.directionNav.bind(u, function (t) {
                  var n;
                  t.preventDefault(),
                    ("" !== l && l !== t.type) ||
                      ((n = e(this).hasClass(o + "next")
                        ? i.getTarget("next")
                        : i.getTarget("prev")),
                      i.flexAnimate(n, i.vars.pauseOnAction)),
                    "" === l && (l = t.type),
                    m.setToClearWatchedEvent();
                });
            },
            update: function () {
              var e = o + "disabled";
              1 === i.pagingCount
                ? i.directionNav.addClass(e).attr("tabindex", "-1")
                : i.vars.animationLoop
                ? i.directionNav.removeClass(e).removeAttr("tabindex")
                : 0 === i.animatingTo
                ? i.directionNav
                    .removeClass(e)
                    .filter("." + o + "prev")
                    .addClass(e)
                    .attr("tabindex", "-1")
                : i.animatingTo === i.last
                ? i.directionNav
                    .removeClass(e)
                    .filter("." + o + "next")
                    .addClass(e)
                    .attr("tabindex", "-1")
                : i.directionNav.removeClass(e).removeAttr("tabindex");
            },
          },
          pausePlay: {
            setup: function () {
              var t = e('<div class="' + o + 'pauseplay"><a></a></div>');
              i.controlsContainer
                ? (i.controlsContainer.append(t),
                  (i.pausePlay = e(
                    "." + o + "pauseplay a",
                    i.controlsContainer
                  )))
                : (i.append(t), (i.pausePlay = e("." + o + "pauseplay a", i))),
                m.pausePlay.update(i.vars.slideshow ? o + "pause" : o + "play"),
                i.pausePlay.bind(u, function (t) {
                  t.preventDefault(),
                    ("" !== l && l !== t.type) ||
                      (e(this).hasClass(o + "pause")
                        ? ((i.manualPause = !0), (i.manualPlay = !1), i.pause())
                        : ((i.manualPause = !1),
                          (i.manualPlay = !0),
                          i.play())),
                    "" === l && (l = t.type),
                    m.setToClearWatchedEvent();
                });
            },
            update: function (e) {
              "play" === e
                ? i.pausePlay
                    .removeClass(o + "pause")
                    .addClass(o + "play")
                    .html(i.vars.playText)
                : i.pausePlay
                    .removeClass(o + "play")
                    .addClass(o + "pause")
                    .html(i.vars.pauseText);
            },
          },
          touch: function () {
            var e,
              n,
              r,
              o,
              s,
              u,
              l = !1,
              h = 0,
              m = 0,
              g = 0;
            if (a) {
              function v(e) {
                e.stopPropagation(),
                  i.animating
                    ? e.preventDefault()
                    : (i.pause(),
                      t._gesture.addPointer(e.pointerId),
                      (g = 0),
                      (o = c ? i.h : i.w),
                      (u = Number(new Date())),
                      (r =
                        d && f && i.animatingTo === i.last
                          ? 0
                          : d && f
                          ? i.limit -
                            (i.itemW + i.vars.itemMargin) *
                              i.move *
                              i.animatingTo
                          : d && i.currentSlide === i.last
                          ? i.limit
                          : d
                          ? (i.itemW + i.vars.itemMargin) *
                            i.move *
                            i.currentSlide
                          : f
                          ? (i.last - i.currentSlide + i.cloneOffset) * o
                          : (i.currentSlide + i.cloneOffset) * o));
              }
              function y(e) {
                e.stopPropagation();
                var n = e.target._slider;
                if (n) {
                  var i = -e.translationX,
                    a = -e.translationY;
                  (s = g += c ? a : i),
                    (l = c
                      ? Math.abs(g) < Math.abs(-i)
                      : Math.abs(g) < Math.abs(-a)),
                    e.detail !== e.MSGESTURE_FLAG_INERTIA
                      ? (!l || Number(new Date()) - u > 500) &&
                        (e.preventDefault(),
                        !p &&
                          n.transitions &&
                          (n.vars.animationLoop ||
                            (s =
                              g /
                              ((0 === n.currentSlide && g < 0) ||
                              (n.currentSlide === n.last && g > 0)
                                ? Math.abs(g) / o + 2
                                : 1)),
                          n.setProps(r + s, "setTouch")))
                      : setImmediate(function () {
                          t._gesture.stop();
                        });
                }
              }
              function $(t) {
                t.stopPropagation();
                var i = t.target._slider;
                if (i) {
                  if (i.animatingTo === i.currentSlide && !l && null !== s) {
                    var a = f ? -s : s,
                      c = a > 0 ? i.getTarget("next") : i.getTarget("prev");
                    i.canAdvance(c) &&
                    ((Number(new Date()) - u < 550 && Math.abs(a) > 50) ||
                      Math.abs(a) > o / 2)
                      ? i.flexAnimate(c, i.vars.pauseOnAction)
                      : p ||
                        i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0);
                  }
                  (e = null), (n = null), (s = null), (r = null), (g = 0);
                }
              }
              (t.style.msTouchAction = "none"),
                (t._gesture = new MSGesture()),
                (t._gesture.target = t),
                t.addEventListener("MSPointerDown", v, !1),
                (t._slider = i),
                t.addEventListener("MSGestureChange", y, !1),
                t.addEventListener("MSGestureEnd", $, !1);
            } else {
              function b(a) {
                i.animating
                  ? a.preventDefault()
                  : (window.navigator.msPointerEnabled ||
                      1 === a.touches.length) &&
                    (i.pause(),
                    (o = c ? i.h : i.w),
                    (u = Number(new Date())),
                    (h = a.touches[0].pageX),
                    (m = a.touches[0].pageY),
                    (r =
                      d && f && i.animatingTo === i.last
                        ? 0
                        : d && f
                        ? i.limit -
                          (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo
                        : d && i.currentSlide === i.last
                        ? i.limit
                        : d
                        ? (i.itemW + i.vars.itemMargin) *
                          i.move *
                          i.currentSlide
                        : f
                        ? (i.last - i.currentSlide + i.cloneOffset) * o
                        : (i.currentSlide + i.cloneOffset) * o),
                    (e = c ? m : h),
                    (n = c ? h : m),
                    t.addEventListener("touchmove", x, !1),
                    t.addEventListener("touchend", w, !1));
              }
              function x(t) {
                (h = t.touches[0].pageX),
                  (m = t.touches[0].pageY),
                  (s = c ? e - m : e - h);
                var a = 500;
                (!(l = c
                  ? Math.abs(s) < Math.abs(h - n)
                  : Math.abs(s) < Math.abs(m - n)) ||
                  Number(new Date()) - u > a) &&
                  (t.preventDefault(),
                  !p &&
                    i.transitions &&
                    (i.vars.animationLoop ||
                      (s /=
                        (0 === i.currentSlide && s < 0) ||
                        (i.currentSlide === i.last && s > 0)
                          ? Math.abs(s) / o + 2
                          : 1),
                    i.setProps(r + s, "setTouch")));
              }
              function w() {
                if (
                  (t.removeEventListener("touchmove", x, !1),
                  i.animatingTo === i.currentSlide && !l && null !== s)
                ) {
                  var a = f ? -s : s,
                    c = a > 0 ? i.getTarget("next") : i.getTarget("prev");
                  i.canAdvance(c) &&
                  ((Number(new Date()) - u < 550 && Math.abs(a) > 50) ||
                    Math.abs(a) > o / 2)
                    ? i.flexAnimate(c, i.vars.pauseOnAction)
                    : p ||
                      i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, !0);
                }
                t.removeEventListener("touchend", w, !1),
                  (e = null),
                  (n = null),
                  (s = null),
                  (r = null);
              }
              t.addEventListener("touchstart", b, !1);
            }
          },
          resize: function () {
            !i.animating &&
              i.is(":visible") &&
              (d || i.doMath(),
              p
                ? m.smoothHeight()
                : d
                ? (i.slides.width(i.computedW),
                  i.update(i.pagingCount),
                  i.setProps())
                : c
                ? (i.viewport.height(i.h), i.setProps(i.h, "setTotal"))
                : (i.vars.smoothHeight && m.smoothHeight(),
                  i.newSlides.width(i.computedW),
                  i.setProps(i.computedW, "setTotal")));
          },
          smoothHeight: function (e) {
            if (!c || p) {
              var t = p ? i : i.viewport;
              e
                ? t.animate({ height: i.slides.eq(i.animatingTo).height() }, e)
                : t.height(i.slides.eq(i.animatingTo).height());
            }
          },
          sync: function (t) {
            var n = e(i.vars.sync).data("flexslider"),
              r = i.animatingTo;
            switch (t) {
              case "animate":
                n.flexAnimate(r, i.vars.pauseOnAction, !1, !0);
                break;
              case "play":
                n.playing || n.asNav || n.play();
                break;
              case "pause":
                n.pause();
            }
          },
          pauseInvisible: {
            visProp: null,
            init: function () {
              var e = ["webkit", "moz", "ms", "o"];
              if ("hidden" in document) return "hidden";
              for (var t = 0; t < e.length; t++)
                e[t] + "Hidden" in document &&
                  (m.pauseInvisible.visProp = e[t] + "Hidden");
              if (m.pauseInvisible.visProp) {
                var n =
                  m.pauseInvisible.visProp.replace(/[H|h]idden/, "") +
                  "visibilitychange";
                document.addEventListener(n, function () {
                  m.pauseInvisible.isHidden()
                    ? i.startTimeout
                      ? clearTimeout(i.startTimeout)
                      : i.pause()
                    : i.started
                    ? i.play()
                    : i.vars.initDelay > 0
                    ? setTimeout(i.play, i.vars.initDelay)
                    : i.play();
                });
              }
            },
            isHidden: function () {
              return document[m.pauseInvisible.visProp] || !1;
            },
          },
          setToClearWatchedEvent: function () {
            clearTimeout(r),
              (r = setTimeout(function () {
                l = "";
              }, 3e3));
          },
        }),
        (i.flexAnimate = function (t, n, r, a, u) {
          if (
            (i.vars.animationLoop ||
              t === i.currentSlide ||
              (i.direction = t > i.currentSlide ? "next" : "prev"),
            h &&
              1 === i.pagingCount &&
              (i.direction = i.currentItem < t ? "next" : "prev"),
            !i.animating && (i.canAdvance(t, u) || r) && i.is(":visible"))
          ) {
            if (h && a) {
              var l = e(i.vars.asNavFor).data("flexslider");
              if (
                ((i.atEnd = 0 === t || t === i.count - 1),
                l.flexAnimate(t, !0, !1, !0, u),
                (i.direction = i.currentItem < t ? "next" : "prev"),
                (l.direction = i.direction),
                Math.ceil((t + 1) / i.visible) - 1 === i.currentSlide ||
                  0 === t)
              )
                return (
                  (i.currentItem = t),
                  i.slides
                    .removeClass(o + "active-slide")
                    .eq(t)
                    .addClass(o + "active-slide"),
                  !1
                );
              (i.currentItem = t),
                i.slides
                  .removeClass(o + "active-slide")
                  .eq(t)
                  .addClass(o + "active-slide"),
                (t = Math.floor(t / i.visible));
            }
            if (
              ((i.animating = !0),
              (i.animatingTo = t),
              n && i.pause(),
              i.vars.before(i),
              i.syncExists && !u && m.sync("animate"),
              i.vars.controlNav && m.controlNav.active(),
              d ||
                i.slides
                  .removeClass(o + "active-slide")
                  .eq(t)
                  .addClass(o + "active-slide"),
              (i.atEnd = 0 === t || t === i.last),
              i.vars.directionNav && m.directionNav.update(),
              t === i.last &&
                (i.vars.end(i), i.vars.animationLoop || i.pause()),
              p)
            )
              s
                ? (i.slides.eq(i.currentSlide).css({ opacity: 0, zIndex: 1 }),
                  i.slides.eq(t).css({ opacity: 1, zIndex: 2 }),
                  i.wrapup($))
                : (i.slides
                    .eq(i.currentSlide)
                    .css({ zIndex: 1 })
                    .animate(
                      { opacity: 0 },
                      i.vars.animationSpeed,
                      i.vars.easing
                    ),
                  i.slides
                    .eq(t)
                    .css({ zIndex: 2 })
                    .animate(
                      { opacity: 1 },
                      i.vars.animationSpeed,
                      i.vars.easing,
                      i.wrapup
                    ));
            else {
              var g,
                v,
                y,
                $ = c ? i.slides.filter(":first").height() : i.computedW;
              d
                ? ((g = i.vars.itemMargin),
                  (v =
                    (y = (i.itemW + g) * i.move * i.animatingTo) > i.limit &&
                    1 !== i.visible
                      ? i.limit
                      : y))
                : (v =
                    0 === i.currentSlide &&
                    t === i.count - 1 &&
                    i.vars.animationLoop &&
                    "next" !== i.direction
                      ? f
                        ? (i.count + i.cloneOffset) * $
                        : 0
                      : i.currentSlide === i.last &&
                        0 === t &&
                        i.vars.animationLoop &&
                        "prev" !== i.direction
                      ? f
                        ? 0
                        : (i.count + 1) * $
                      : f
                      ? (i.count - 1 - t + i.cloneOffset) * $
                      : (t + i.cloneOffset) * $),
                i.setProps(v, "", i.vars.animationSpeed),
                i.transitions
                  ? ((i.vars.animationLoop && i.atEnd) ||
                      ((i.animating = !1), (i.currentSlide = i.animatingTo)),
                    i.container.unbind("webkitTransitionEnd transitionend"),
                    i.container.bind(
                      "webkitTransitionEnd transitionend",
                      function () {
                        i.wrapup($);
                      }
                    ))
                  : i.container.animate(
                      i.args,
                      i.vars.animationSpeed,
                      i.vars.easing,
                      function () {
                        i.wrapup($);
                      }
                    );
            }
            i.vars.smoothHeight && m.smoothHeight(i.vars.animationSpeed);
          }
        }),
        (i.wrapup = function (e) {
          p ||
            d ||
            (0 === i.currentSlide &&
            i.animatingTo === i.last &&
            i.vars.animationLoop
              ? i.setProps(e, "jumpEnd")
              : i.currentSlide === i.last &&
                0 === i.animatingTo &&
                i.vars.animationLoop &&
                i.setProps(e, "jumpStart")),
            (i.animating = !1),
            (i.currentSlide = i.animatingTo),
            i.vars.after(i);
        }),
        (i.animateSlides = function () {
          !i.animating && g && i.flexAnimate(i.getTarget("next"));
        }),
        (i.pause = function () {
          clearInterval(i.animatedSlides),
            (i.animatedSlides = null),
            (i.playing = !1),
            i.vars.pausePlay && m.pausePlay.update("play"),
            i.syncExists && m.sync("pause");
        }),
        (i.play = function () {
          i.playing && clearInterval(i.animatedSlides),
            (i.animatedSlides =
              i.animatedSlides ||
              setInterval(i.animateSlides, i.vars.slideshowSpeed)),
            (i.started = i.playing = !0),
            i.vars.pausePlay && m.pausePlay.update("pause"),
            i.syncExists && m.sync("play");
        }),
        (i.stop = function () {
          i.pause(), (i.stopped = !0);
        }),
        (i.canAdvance = function (e, t) {
          var n = h ? i.pagingCount - 1 : i.last;
          return (
            !!t ||
            !(
              !h ||
              i.currentItem !== i.count - 1 ||
              0 !== e ||
              "prev" !== i.direction
            ) ||
            ((!h ||
              0 !== i.currentItem ||
              e !== i.pagingCount - 1 ||
              "next" === i.direction) &&
              !(e === i.currentSlide && !h) &&
              (!!i.vars.animationLoop ||
                ((!i.atEnd ||
                  0 !== i.currentSlide ||
                  e !== n ||
                  "next" === i.direction) &&
                  (!i.atEnd ||
                    i.currentSlide !== n ||
                    0 !== e ||
                    "next" !== i.direction))))
          );
        }),
        (i.getTarget = function (e) {
          return (
            (i.direction = e),
            "next" === e
              ? i.currentSlide === i.last
                ? 0
                : i.currentSlide + 1
              : 0 === i.currentSlide
              ? i.last
              : i.currentSlide - 1
          );
        }),
        (i.setProps = function (e, t, n) {
          var r,
            o =
              ((r =
                e || (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo),
              -1 *
                (function () {
                  if (d)
                    return "setTouch" === t
                      ? e
                      : f && i.animatingTo === i.last
                      ? 0
                      : f
                      ? i.limit -
                        (i.itemW + i.vars.itemMargin) * i.move * i.animatingTo
                      : i.animatingTo === i.last
                      ? i.limit
                      : r;
                  switch (t) {
                    case "setTotal":
                      return f
                        ? (i.count - 1 - i.currentSlide + i.cloneOffset) * e
                        : (i.currentSlide + i.cloneOffset) * e;
                    case "setTouch":
                      return e;
                    case "jumpEnd":
                      return f ? e : i.count * e;
                    case "jumpStart":
                      return f ? i.count * e : e;
                    default:
                      return e;
                  }
                })() +
                "px");
          i.transitions &&
            ((o = c
              ? "translate3d(0," + o + ",0)"
              : "translate3d(" + o + ",0,0)"),
            (n = n !== undefined ? n / 1e3 + "s" : "0s"),
            i.container.css("-" + i.pfx + "-transition-duration", n)),
            (i.args[i.prop] = o),
            (i.transitions || n === undefined) && i.container.css(i.args);
        }),
        (i.setup = function (t) {
          var n, r;
          p
            ? (i.slides.css({
                width: "100%",
                float: "left",
                marginRight: "-100%",
                position: "relative",
              }),
              "init" === t &&
                (s
                  ? i.slides
                      .css({
                        opacity: 0,
                        display: "block",
                        webkitTransition:
                          "opacity " + i.vars.animationSpeed / 1e3 + "s ease",
                        zIndex: 1,
                      })
                      .eq(i.currentSlide)
                      .css({ opacity: 1, zIndex: 2 })
                  : i.slides
                      .css({ opacity: 0, display: "block", zIndex: 1 })
                      .eq(i.currentSlide)
                      .css({ zIndex: 2 })
                      .animate(
                        { opacity: 1 },
                        i.vars.animationSpeed,
                        i.vars.easing
                      )),
              i.vars.smoothHeight && m.smoothHeight())
            : ("init" === t &&
                ((i.viewport = e('<div class="' + o + 'viewport"></div>')
                  .css({ overflow: "hidden", position: "relative" })
                  .appendTo(i)
                  .append(i.container)),
                (i.cloneCount = 0),
                (i.cloneOffset = 0),
                f &&
                  ((r = e.makeArray(i.slides).reverse()),
                  (i.slides = e(r)),
                  i.container.empty().append(i.slides))),
              i.vars.animationLoop &&
                !d &&
                ((i.cloneCount = 2),
                (i.cloneOffset = 1),
                "init" !== t && i.container.find(".clone").remove(),
                i.container
                  .append(
                    i.slides
                      .first()
                      .clone()
                      .addClass("clone")
                      .attr("aria-hidden", "true")
                  )
                  .prepend(
                    i.slides
                      .last()
                      .clone()
                      .addClass("clone")
                      .attr("aria-hidden", "true")
                  )),
              (i.newSlides = e(i.vars.selector, i)),
              (n = f
                ? i.count - 1 - i.currentSlide + i.cloneOffset
                : i.currentSlide + i.cloneOffset),
              c && !d
                ? (i.container
                    .height(200 * (i.count + i.cloneCount) + "%")
                    .css("position", "absolute")
                    .width("100%"),
                  setTimeout(
                    function () {
                      i.newSlides.css({ display: "block" }),
                        i.doMath(),
                        i.viewport.height(i.h),
                        i.setProps(n * i.h, "init");
                    },
                    "init" === t ? 100 : 0
                  ))
                : (i.container.width(200 * (i.count + i.cloneCount) + "%"),
                  i.setProps(n * i.computedW, "init"),
                  setTimeout(
                    function () {
                      i.doMath(),
                        i.newSlides.css({
                          width: i.computedW,
                          float: "left",
                          display: "block",
                        }),
                        i.vars.smoothHeight && m.smoothHeight();
                    },
                    "init" === t ? 100 : 0
                  )));
          d ||
            i.slides
              .removeClass(o + "active-slide")
              .eq(i.currentSlide)
              .addClass(o + "active-slide");
        }),
        (i.doMath = function () {
          var e = i.slides.first(),
            t = i.vars.itemMargin,
            n = i.vars.minItems,
            r = i.vars.maxItems;
          (i.w = i.viewport === undefined ? i.width() : i.viewport.width()),
            (i.h = e.height()),
            (i.boxPadding = e.outerWidth() - e.width()),
            d
              ? ((i.itemT = i.vars.itemWidth + t),
                (i.minW = n ? n * i.itemT : i.w),
                (i.maxW = r ? r * i.itemT - t : i.w),
                (i.itemW =
                  i.minW > i.w
                    ? (i.w - t * (n - 1)) / n
                    : i.maxW < i.w
                    ? (i.w - t * (r - 1)) / r
                    : i.vars.itemWidth > i.w
                    ? i.w
                    : i.vars.itemWidth),
                (i.visible = Math.floor(i.w / i.itemW)),
                (i.move =
                  i.vars.move > 0 && i.vars.move < i.visible
                    ? i.vars.move
                    : i.visible),
                (i.pagingCount = Math.ceil((i.count - i.visible) / i.move + 1)),
                (i.last = i.pagingCount - 1),
                (i.limit =
                  1 === i.pagingCount
                    ? 0
                    : i.vars.itemWidth > i.w
                    ? i.itemW * (i.count - 1) + t * (i.count - 1)
                    : (i.itemW + t) * i.count - i.w - t))
              : ((i.itemW = i.w),
                (i.pagingCount = i.count),
                (i.last = i.count - 1)),
            (i.computedW = i.itemW - i.boxPadding);
        }),
        (i.update = function (e, t) {
          i.doMath(),
            d ||
              (e < i.currentSlide
                ? (i.currentSlide += 1)
                : e <= i.currentSlide && 0 !== e && (i.currentSlide -= 1),
              (i.animatingTo = i.currentSlide)),
            i.vars.controlNav &&
              !i.manualControls &&
              (("add" === t && !d) || i.pagingCount > i.controlNav.length
                ? m.controlNav.update("add")
                : (("remove" === t && !d) ||
                    i.pagingCount < i.controlNav.length) &&
                  (d &&
                    i.currentSlide > i.last &&
                    ((i.currentSlide -= 1), (i.animatingTo -= 1)),
                  m.controlNav.update("remove", i.last))),
            i.vars.directionNav && m.directionNav.update();
        }),
        (i.addSlide = function (t, n) {
          var r = e(t);
          (i.count += 1),
            (i.last = i.count - 1),
            c && f
              ? n !== undefined
                ? i.slides.eq(i.count - n).after(r)
                : i.container.prepend(r)
              : n !== undefined
              ? i.slides.eq(n).before(r)
              : i.container.append(r),
            i.update(n, "add"),
            (i.slides = e(i.vars.selector + ":not(.clone)", i)),
            i.setup(),
            i.vars.added(i);
        }),
        (i.removeSlide = function (t) {
          var n = isNaN(t) ? i.slides.index(e(t)) : t;
          (i.count -= 1),
            (i.last = i.count - 1),
            isNaN(t)
              ? e(t, i.slides).remove()
              : c && f
              ? i.slides.eq(i.last).remove()
              : i.slides.eq(t).remove(),
            i.doMath(),
            i.update(n, "remove"),
            (i.slides = e(i.vars.selector + ":not(.clone)", i)),
            i.setup(),
            i.vars.removed(i);
        }),
        m.init();
    }),
      e(window)
        .blur(function () {
          focused = !1;
        })
        .focus(function () {
          focused = !0;
        }),
      (e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {},
        before: function () {},
        after: function () {},
        end: function () {},
        added: function () {},
        removed: function () {},
      }),
      (e.fn.flexslider = function (t) {
        if ((t === undefined && (t = {}), "object" == typeof t))
          return this.each(function () {
            var n = e(this),
              i = t.selector ? t.selector : ".slides > li",
              r = n.find(i);
            (1 === r.length && !0 === t.allowOneSlide) || 0 === r.length
              ? (r.fadeIn(400), t.start && t.start(n))
              : n.data("flexslider") === undefined && new e.flexslider(this, t);
          });
        var n = e(this).data("flexslider");
        switch (t) {
          case "play":
            n.play();
            break;
          case "pause":
            n.pause();
            break;
          case "stop":
            n.stop();
            break;
          case "next":
            n.flexAnimate(n.getTarget("next"), !0);
            break;
          case "prev":
          case "previous":
            n.flexAnimate(n.getTarget("prev"), !0);
            break;
          default:
            "number" == typeof t && n.flexAnimate(t, !0);
        }
      });
  })(jQuery),
  (function (e) {
    (e.browserTest = function (t, n) {
      var i = "unknown",
        r = "X",
        o = function (e, t) {
          for (var n = 0; n < t.length; n += 1) e = e.replace(t[n][0], t[n][1]);
          return e;
        },
        a = function (t, n, a, s) {
          var u = { name: o((n.exec(t) || [i, i])[1], a) };
          return (
            (u[u.name] = !0),
            (u.version = (s.exec(t) || [r, r, r, r])[3]),
            u.name.match(/safari/) && u.version > 400 && (u.version = "2.0"),
            "presto" === u.name &&
              (u.version = e.browser.version > 9.27 ? "futhark" : "linear_b"),
            (u.versionNumber = parseFloat(u.version, 10) || 0),
            (u.versionX = u.version !== r ? (u.version + "").substr(0, 1) : r),
            (u.className = u.name + u.versionX),
            u
          );
        };
      (t = (
        t.match(/Opera|Navigator|Minefield|KHTML|Chrome/)
          ? o(t, [
              [/(Firefox|MSIE|KHTML,\slike\sGecko|Konqueror)/, ""],
              ["Chrome Safari", "Chrome"],
              ["KHTML", "Konqueror"],
              ["Minefield", "Firefox"],
              ["Navigator", "Netscape"],
            ])
          : t
      ).toLowerCase()),
        (e.browser = e.extend(
          n ? {} : e.browser,
          a(
            t,
            /(camino|chrome|firefox|netscape|konqueror|lynx|msie|opera|safari)/,
            [],
            /(camino|chrome|firefox|netscape|netscape6|opera|version|konqueror|lynx|msie|safari)(\/|\s)([a-z0-9\.\+]*?)(\;|dev|rel|\s|$)/
          )
        )),
        (e.layout = a(
          t,
          /(gecko|konqueror|msie|opera|webkit)/,
          [
            ["konqueror", "khtml"],
            ["msie", "trident"],
            ["opera", "presto"],
          ],
          /(applewebkit|rv|konqueror|msie)(\:|\/|\s)([a-z0-9\.]*?)(\;|\)|\s)/
        )),
        (e.os = {
          name: (/(win|mac|linux|sunos|solaris|iphone)/.exec(
            navigator.platform.toLowerCase()
          ) || [i])[0].replace("sunos", "solaris"),
        }),
        n ||
          e("html").addClass(
            [
              e.os.name,
              e.browser.name,
              e.browser.className,
              e.layout.name,
              e.layout.className,
            ].join(" ")
          );
    }),
      e.browserTest(navigator.userAgent);
  })(jQuery),
  (function (e, t, n, i) {
    function r(n, i) {
      (this.element = n),
        (this.options = e.extend({}, a, i)),
        (this._defaults = a),
        (this._name = o),
        (t._curtainsIgnoreHashChange = !1),
        this.init();
    }
    var o = "curtain",
      a = {
        scrollSpeed: 400,
        bodyHeight: 0,
        linksArray: [],
        mobile: !1,
        scrollButtons: {},
        controls: null,
        curtainLinks: ".curtain-links",
        enableKeys: !0,
        easing: "swing",
        disabled: !1,
        nextSlide: function () {},
        prevSlide: function () {},
        fixedNavEl: null,
        disableCurtains: !1,
      };
    (r.prototype = {
      init: function () {
        var i = this;
        (this.$element = e(this.element)),
          (this.$li = e(this.element).find(">section")),
          (this.$liLength = this.$li.length),
          (i.$windowHeight = e(t).height()),
          (i.$elDatas = {}),
          (i.$document = e(n)),
          (i.$window = e(t)),
          (i.webkit =
            navigator.userAgent.indexOf("Chrome") > -1 ||
            navigator.userAgent.indexOf("Safari") > -1),
          (e.Android = navigator.userAgent.match(/Android/i)),
          (e.iPhone =
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPod/i)),
          (e.iPad = navigator.userAgent.match(/iPad/i)),
          (e.iOs4 = /OS [1-4]_[0-9_]+ like Mac OS X/i.test(
            navigator.userAgent
          )),
          (e.oldSafari = e.browser.versionNumber <= 5.1 && e.browser.safari),
          (e.oldIE = e.browser.versionNumber <= 9 && e.browser.msie),
          (e.oldIE ||
            e.oldSafari ||
            e.iPhone ||
            e.iPad ||
            e.Android ||
            i.options.disabled) &&
            ((this.options.mobile = !0),
            this.$li.css({ position: "relative" }),
            this.$element.find(".fixed").css({ position: "absolute" })),
          this.options.mobile
            ? (this.scrollEl = this.$element)
            : (this.scrollEl = e("body, html")),
          i.options.controls &&
            ((i.options.scrollButtons.up = e(i.options.controls).find(
              '[href="#up"]'
            )),
            (i.options.scrollButtons.down = e(i.options.controls).find(
              '[href="#down"]'
            )),
            e.iOs4 ||
              (!e.iPhone && !e.iPad) ||
              (i.$element.css({
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                "-webkit-overflow-scrolling": "touch",
                overflow: "auto",
              }),
              e(i.options.controls).css({ position: "absolute" })));
        var r = function () {
          if (i.options.disableCurtains)
            return (
              e("html").addClass("no-curtains"),
              i.disableCurtains(),
              void e(t).on("resize", function () {
                i.disableCurtains(!0);
              })
            );
          i.setDimensions(),
            i.$li.eq(0).addClass("current"),
            i.setCache(),
            i.options.mobile ||
              (i.$li.eq(1).length && i.$li.eq(1).nextAll().addClass("hidden")),
            i.setLinks(),
            i.isHashIsOnList(location.hash.substring(1)),
            i.setEvents();
        };
        i.$element.find("img").length ? i.imageLoaded(r) : r();
      },
      doneScrollingCallback: function () {
        t._curtainsIgnoreHashChange = !1;
      },
      scrollToPosition: function (t) {
        var n = null,
          r = this;
        if ("up" === t || "down" == t) {
          var o = "up" === t ? r.$current.prev() : r.$current.next();
          if (r.$step) {
            r.$current.find(".current-step").length ||
              r.$step.eq(0).addClass("current-step");
            var a =
              "up" === t
                ? r.$current.find(".current-step").prev(".step")
                : r.$current.find(".current-step").next(".step");
            a.length &&
              (r.options.mobile,
              (n =
                a.position().top +
                r.$elDatas[r.$current.index()]["data-position"]));
          }
          null !==
            (n =
              n ||
              (r.$elDatas[o.index()] === i
                ? null
                : r.$elDatas[o.index()]["data-position"])) &&
            r.scrollEl
              .stop()
              .animate(
                { scrollTop: n },
                r.options.scrollSpeed,
                r.options.easing,
                r.doneScrollingCallback
              );
        } else if ("top" === t)
          r.scrollEl
            .stop()
            .animate(
              { scrollTop: 0 },
              r.options.scrollSpeed,
              r.options.easing,
              r.doneScrollingCallback
            );
        else if ("bottom" === t)
          r.scrollEl
            .stop()
            .animate(
              { scrollTop: r.options.bodyHeight },
              r.options.scrollSpeed,
              r.options.easing,
              r.doneScrollingCallback
            );
        else {
          var s = e("#" + t).index(),
            u =
              (Math.abs(r.currentIndex - s) * (4 * this.options.scrollSpeed)) /
              r.$liLength;
          r.scrollEl
            .stop()
            .animate(
              { scrollTop: r.$elDatas[s]["data-position"] || null },
              u <= r.options.scrollSpeed ? r.options.scrollSpeed : u,
              this.options.easing,
              r.doneScrollingCallback
            );
        }
      },
      scrollEvent: function () {
        // var n = this,
        //   i = n.$document.scrollTop();
        // if (i < n.currentP && n.currentIndex > 0)
        //   (t._curtainsIgnoreHashChange = !0),
        //     n.$current.prev().attr("id") &&
        //       n.setHash(n.$current.prev().attr("id")),
        //     n.$current
        //       .removeClass("current")
        //       .css(
        //         n.webkit
        //           ? { "-webkit-transform": "translateY(0px) translateZ(0)" }
        //           : { marginTop: 0 }
        //       )
        //       .nextAll()
        //       .addClass("hidden")
        //       .end()
        //       .prev()
        //       .addClass("current")
        //       .removeClass("hidden"),
        //     n.setCache(),
        //     n.options.prevSlide();
        // else if (i < n.currentP + n.currentHeight) {
        //   if (
        //     (n.webkit
        //       ? n.$current.css({
        //           "-webkit-transform":
        //             "translateY(" + -(i - n.currentP) + "px) translateZ(0)",
        //         })
        //       : n.$current.css({ marginTop: -(i - n.currentP) }),
        //     n.$fixedLength)
        //   ) {
        //     parseInt(n.$fixed.attr("data-top"), 10);
        //     i + n.$windowHeight >= n.currentP + n.currentHeight
        //       ? n.$fixed.css({ position: "fixed" })
        //       : n.$fixed.css({
        //           position: "absolute",
        //           marginTop: Math.abs(i - n.currentP),
        //         });
        //   }
        //   n.$stepLength &&
        //     e.each(n.$step, function (t, r) {
        //       if (
        //         e(r).position().top + n.currentP <= i + 5 &&
        //         e(r).position().top + n.currentP + e(r).height() >= i + 5 &&
        //         !e(r).hasClass("current-step")
        //       )
        //         return (
        //           n.$step.removeClass("current-step"),
        //           e(r).addClass("current-step"),
        //           !1
        //         );
        //     }),
        //     n.parallaxBg &&
        //       n.$current.css({ "background-position-y": i * n.parallaxBg }),
        //     n.$fade.length &&
        //       n.$fade.css({ opacity: 1 - i / n.$fade.attr("data-fade") }),
        //     n.$slowScroll.length &&
        //       n.$slowScroll.css({
        //         "margin-top": i / n.$slowScroll.attr("data-slow-scroll"),
        //       });
        // } else
        //   (t._curtainsIgnoreHashChange = !0),
        //     n.$current.next().attr("id") &&
        //       n.setHash(n.$current.next().attr("id")),
        //     n.$current
        //       .removeClass("current")
        //       .addClass("hidden")
        //       .next("section")
        //       .addClass("current")
        //       .next("section")
        //       .removeClass("hidden"),
        //     n.setCache(),
        //     n.options.nextSlide();
      },
      scrollMobileEvent: function () {
        var n = this,
          i = n.$element.scrollTop();
        i + 10 < n.currentP && n.currentIndex > 0
          ? ((t._curtainsIgnoreHashChange = !0),
            n.$current.prev().attr("id") &&
              n.setHash(n.$current.prev().attr("id")),
            n.$current.removeClass("current").prev().addClass("current"),
            n.setCache(),
            n.options.prevSlide())
          : i + 10 < n.currentP + n.currentHeight
          ? n.$stepLength &&
            e.each(n.$step, function (t, r) {
              e(r).position().top + n.currentP <= i &&
                e(r).position().top + n.currentP + e(r).outerHeight() >= i &&
                (e(r).hasClass("current-step") ||
                  (n.$step.removeClass("current-step"),
                  e(r).addClass("current-step")));
            })
          : ((t._curtainsIgnoreHashChange = !0),
            n.$current.next().attr("id") &&
              n.setHash(n.$current.next().attr("id")),
            n.$current.removeClass("current").next().addClass("current"),
            n.setCache(),
            n.options.nextSlide());
      },
      setDimensions: function () {
        var n = this,
          i = 0,
          r = null,
          o = e(n.options.fixedNavEl).height();
        (n.$windowHeight = n.$window.height()),
          this.$li.each(function (t) {
            var a = e(this);
            if (
              (a.hasClass("cover")
                ? (a
                    .css({ height: n.$windowHeight, zIndex: 999 - t })
                    .attr("data-height", n.$windowHeight)
                    .attr("data-position", i),
                  (n.$elDatas[a.index()] = {
                    "data-height": parseInt(n.$windowHeight, 10),
                    "data-position": parseInt(i, 10),
                  }),
                  (i += n.$windowHeight))
                : ((r =
                    a.outerHeight() <= n.$windowHeight
                      ? n.$windowHeight
                      : a.outerHeight()),
                  (r += o),
                  a
                    .css({ zIndex: 999 - t, "padding-top": o })
                    .attr("data-height", r)
                    .attr("data-position", i),
                  (n.$elDatas[a.index()] = {
                    "data-height": parseInt(r, 10),
                    "data-position": parseInt(i, 10),
                  }),
                  (i += r)),
              a.find(".fixed").length)
            ) {
              var s = a.find(".fixed").css("top");
              a.find(".fixed").attr("data-top", s);
            }
          }),
          this.options.mobile || this.setBodyHeight();
        var a = function () {
          t.curtainsResizeNow
            ? ((t.curtainsResizeNow = !1), n.setDimensions())
            : setTimeout(a, 1e3);
        };
        setTimeout(a, 1e3);
      },
      disableCurtains: function (n) {
        var i,
          r = this,
          o = e("div.curtains > section"),
          a = e(r.options.fixedNavEl).height() - 20,
          s = e(o[0]),
          u = parseInt(s.css("padding-top"));
        i = u > a ? u : a;
        var l = function (t) {
          e("section" + t)
            .css({
              "-webkit-box-shadow": "none",
              "-moz-box-shadow": "none",
              "box-shadow": "none",
            })
            .show();
        };
        (function () {
          o.css({ position: "relative", "padding-top": i });
        })(),
          n ||
            (o.hide(),
            e("a.curtain-links").on("click", function () {
              var t = e(this).attr("href");
              o.hide(), r.options.nextSlide(), l(t);
            }),
            "" !== t.location.hash ? l(t.location.hash) : l("#" + s.attr("id")),
            e(t).on("popstate", function () {
              var e = t.location.hash;
              o.hide(), r.options.nextSlide(), l(e);
            }));
      },
      setEvents: function () {
        // var n = this;
        // e(t).on("resize", function () {
        //   n.setDimensions();
        // }),
        //   n.options.mobile
        //     ? n.$element.on("scroll", function () {
        //         n.scrollMobileEvent();
        //       })
        //     : n.$window.on("scroll", function () {
        //         n.scrollEvent();
        //       }),
        //   n.options.enableKeys &&
        //     n.$document.on("keydown", function (e) {
        //       return (
        //         38 === e.keyCode || e.keyCode,
        //         40 === e.keyCode || e.keyCode,
        //         36 === e.keyCode
        //           ? (n.scrollToPosition("top"), e.preventDefault(), !1)
        //           : 35 === e.keyCode
        //           ? (n.scrollToPosition("bottom"), e.preventDefault(), !1)
        //           : void 0
        //       );
        //     }),
        //   n.options.scrollButtons &&
        //     (n.options.scrollButtons.up &&
        //       n.options.scrollButtons.up.on("click", function (e) {
        //         e.preventDefault(), n.scrollToPosition("up");
        //       }),
        //     n.options.scrollButtons.down &&
        //       n.options.scrollButtons.down.on("click", function (e) {
        //         e.preventDefault(), n.scrollToPosition("down");
        //       })),
        //   n.options.curtainLinks &&
        //     !this.options.mobile &&
        //     e(n.options.curtainLinks).on("click", function (t) {
        //       t.preventDefault();
        //       var i = e(this).attr("href");
        //       if (n.isHashIsOnList(i.substring(1))) return !1;
        //       var r = n.$elDatas[e(i).index()]["data-position"] || null;
        //       return (
        //         r &&
        //           n.scrollEl.animate(
        //             { scrollTop: r },
        //             n.options.scrollSpeed,
        //             n.options.easing,
        //             n.doneScrollingCallback
        //           ),
        //         !1
        //       );
        //     }),
        //   n.$window.on("hashchange", function () {
        //     !1 === t._curtainsIgnoreHashChange &&
        //       n.isHashIsOnList(location.hash.substring(1)),
        //       (t._curtainsIgnoreHashChange = !1);
        //   });
      },
      setBodyHeight: function () {
        var t = 0;
        for (var n in this.$elDatas) {
          t += this.$elDatas[n]["data-height"];
        }
        (this.options.bodyHeight = t), e("body").height(t);
      },
      setLinks: function () {
        var t = this;
        this.$li.each(function () {
          var n = e(this).attr("id") || 0;
          t.options.linksArray.push(n);
        });
      },
      setHash: function (n) {
        (el = e("[href='#" + n + "']")),
          el.parent().siblings("li").removeClass("active"),
          el.parent().addClass("active"),
          history.pushState
            ? history.pushState(null, null, "#" + n)
            : (location.hash = n),
          (t._curtainsIgnoreHashChange = !1);
      },
      setCache: function () {
        var t = this;
        if (
          ((t.$current = t.$element.find(".current")), 0 == t.$current.length)
        ) {
          var n = 0;
          for (var i in t.$elDatas) n++;
          e(e(t.$element).children()[n - 1])
            .addClass("current")
            .removeClass("hidden"),
            (t.$current = t.$element.find(".current"));
        }
        (t.$fixed = t.$current.find(".fixed")),
          (t.$fixedLength = t.$fixed.length),
          (t.$step = t.$current.find(".step")),
          (t.$stepLength = t.$step.length),
          (t.currentIndex = t.$current.index()),
          (t.currentP = t.$elDatas[t.currentIndex]["data-position"]),
          (t.currentHeight = t.$elDatas[t.currentIndex]["data-height"]),
          (t.parallaxBg = t.$current.attr("data-parallax-background")),
          (t.$fade = t.$current.find("[data-fade]")),
          (t.$slowScroll = t.$current.find("[data-slow-scroll]"));
      },
      isHashIsOnList: function (t) {
        var n = this,
          i = !1;
        return (
          e.each(n.options.linksArray, function (e, r) {
            r === t && (n.scrollToPosition(t), (i = !0));
          }),
          i
        );
      },
      readyElement: function (e, t) {
        var n = setInterval(function () {
          e.length && (t(e.length), clearInterval(n));
        }, 60);
      },
      imageLoaded: function (t) {
        var n = this.$element.find("img"),
          r = n.length,
          o =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        n.bind("load.imgloaded", function () {
          ((--r <= 0 && this.src !== o) || e(this).not(":visible")) &&
            (n.unbind("load.imgloaded"), t.call(n, this));
        }).each(function () {
          if (this.complete || this.complete === i) {
            var e = this.src;
            (this.src = o), (this.src = e);
          }
        });
      },
    }),
      (e.fn[o] = function (t) {
        return this.each(function () {
          e.data(this, "plugin_" + o) ||
            e.data(this, "plugin_" + o, new r(this, t));
        });
      });
  })(jQuery, window, document),
  (function (e, t) {
    function n(t, n, i, r) {
      var o,
        a = t.text().split(n),
        s = "";
      if (a.length) {
        e(a).each(function (e, t) {
          (o = ""),
            " " === t && ((o = " empty"), (t = "&nbsp;")),
            (s += '<span class="' + i + (e + 1) + o + '">' + t + "</span>" + r);
        });
        var u = t.clone().removeClass().addClass("duped-orig-arctext").hide();
        t.empty().append(s), t.after(u);
      }
    }
    e.fn.fitText = function (t, n) {
      var i = {
        minFontSize: Number.NEGATIVE_INFINITY,
        maxFontSize: Number.POSITIVE_INFINITY,
      };
      return this.each(function () {
        var r = e(this),
          o = t || 1;
        n && e.extend(i, n);
        var a = function () {
          r.css(
            "font-size",
            Math.max(
              Math.min(r.width() / (10 * o), parseFloat(i.maxFontSize)),
              parseFloat(i.minFontSize)
            )
          );
        };
        a(), e(window).resize(a);
      });
    };
    var i = {
      init: function () {
        return this.each(function () {
          n(e(this), "", "char", "");
        });
      },
      words: function () {
        return this.each(function () {
          n(e(this), " ", "word", " ");
        });
      },
      lines: function () {
        return this.each(function () {
          var t = "eefec303079ad17405c889e092e105b0";
          n(e(this).children("br").replaceWith(t).end(), t, "line", "");
        });
      },
    };
    (e.fn.lettering = function (t) {
      return t && i[t]
        ? i[t].apply(this, [].slice.call(arguments, 1))
        : "letters" !== t && t
        ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this)
        : i.init.apply(this, [].slice.call(arguments, 0));
    }),
      (e.Arctext = function (t, n) {
        (this.$el = e(n)), this._init(t);
      }),
      (e.Arctext.defaults = { radius: 0, dir: 1, rotate: !0, fitText: !1 }),
      (e.Arctext.prototype = {
        _init: function (t) {
          (this.options = e.extend(!0, {}, e.Arctext.defaults, t)),
            this._applyLettering(),
            this.$el.data("arctext", !0),
            this._calc(),
            this._rotateWord(),
            this._loadEvents();
        },
        _applyLettering: function () {
          this.$el.lettering(),
            this.options.fitText && this.$el.fitText(),
            (this.$letters = this.$el
              .find("span")
              .css("display", "inline-block"));
        },
        _calc: function () {
          if (-1 === this.options.radius) return !1;
          this._calcBase(), this._calcLetters();
        },
        _calcBase: function () {
          this.dtWord = 0;
          var t = this;
          this.$letters.each(function () {
            var n = e(this),
              i = n.outerWidth(!0);
            (t.dtWord += i), n.data("center", t.dtWord - i / 2);
          });
          var n = this.dtWord / 2;
          this.options.radius < n && (this.options.radius = n),
            (this.dtArcBase = this.dtWord);
          var i = 2 * Math.asin(this.dtArcBase / (2 * this.options.radius));
          this.dtArc = this.options.radius * i;
        },
        _calcLetters: function () {
          var t = this,
            n = 0;
          this.$letters.each(function () {
            var i = e(this),
              r = ((i.outerWidth(!0) / t.dtWord) * t.dtArc) / t.options.radius,
              o = t.options.radius * Math.cos(r / 2),
              a = Math.acos((t.dtWord / 2 - n) / t.options.radius) + r / 2,
              s = Math.cos(a) * o,
              u = Math.sin(a) * o,
              l = n + Math.abs(t.dtWord / 2 - s - n),
              c = 0 | (l - i.data("center")),
              f = 0 | (t.options.radius - u),
              d = t.options.rotate
                ? 0 | (-Math.asin(s / t.options.radius) * (180 / Math.PI))
                : 0;
            (n = 2 * l - n),
              i.data({
                x: c,
                y: 1 === t.options.dir ? f : -f,
                a: 1 === t.options.dir ? d : -d,
              });
          });
        },
        _rotateWord: function (t) {
          if (!this.$el.data("arctext")) return !1;
          var n = this;
          this.$letters.each(function () {
            var i = e(this),
              r =
                -1 === n.options.radius
                  ? "none"
                  : "translateX(" +
                    i.data("x") +
                    "px) translateY(" +
                    i.data("y") +
                    "px) rotate(" +
                    i.data("a") +
                    "deg)",
              o = t
                ? "all " + (t.speed || 0) + "ms " + (t.easing || "linear")
                : "none";
            i.css({
              "-webkit-transition": o,
              "-moz-transition": o,
              "-o-transition": o,
              "-ms-transition": o,
              transition: o,
            }).css({
              "-webkit-transform": r,
              "-moz-transform": r,
              "-o-transform": r,
              "-ms-transform": r,
              transform: r,
            });
          });
        },
        _loadEvents: function () {
          if (this.options.fitText) {
            var t = this;
            e(window).on("resize.arctext", function () {
              t._calc(), t._rotateWord();
            });
          }
        },
        set: function (e) {
          if (!e.radius && !e.dir && "undefined" === e.rotate) return !1;
          (this.options.radius = e.radius || this.options.radius),
            (this.options.dir = e.dir || this.options.dir),
            e.rotate !== t && (this.options.rotate = e.rotate),
            this._calc(),
            this._rotateWord(e.animation);
        },
        destroy: function () {
          (this.options.radius = -1),
            this._rotateWord(),
            this.$letters.removeData("x y a center"),
            this.$el.removeData("arctext"),
            e(window).off(".arctext");
        },
      });
    var r = function (e) {
      this.console && console.error(e);
    };
    e.fn.arctext = function (t) {
      if ("string" == typeof t) {
        var n = Array.prototype.slice.call(arguments, 1);
        this.each(function () {
          var i = e.data(this, "arctext");
          i
            ? e.isFunction(i[t]) && "_" !== t.charAt(0)
              ? i[t].apply(i, n)
              : r("no such method '" + t + "' for arctext instance")
            : r(
                "cannot call methods on arctext prior to initialization; attempted to call method '" +
                  t +
                  "'"
              );
        });
      } else
        this.each(function () {
          e.data(this, "arctext") ||
            e.data(this, "arctext", new e.Arctext(t, this));
        });
      return this;
    };
  })(jQuery);
var RGFontEffects = (function (e) {
  var t,
    n,
    i,
    r = { arctextOptions: { radius: 100, dir: 1, rotate: !0 } },
    o = function (i) {
      if (null == i) return !1;
      var o = e.extend({}, r.arctextOptions, i.arctext_options);
      e("#rg-fonteffect-title"),
        (t = e("#rg-fonteffect-subtitle")),
        (n = e("#rg-fonteffect-logo")),
        -1 !== i.effects.indexOf("subtitle_arc") && t.find("span").arctext(o),
        -1 !== i.effects.indexOf("subtitle_lines") && a(),
        -1 !== i.effects.indexOf("icon_lines") && s(),
        -1 !== i.effects.indexOf("ribbon_lines") && u();
    },
    a = function () {
      var n = t.width(),
        i = t.find("span").width(),
        r = t.find(".before"),
        o = t.find(".after"),
        s = (n - i) / 2 - r.width() - 10;
      r.css("left", s),
        o.css("right", s),
        e(window).resize(function () {
          l(a, 200, "#subtitle");
        });
    },
    s = function () {
      var t = n.width(),
        i = n.find(".before"),
        r = n.find(".after"),
        o = t / 2 - i.width() - 50;
      i.css("left", o),
        r.css("right", o),
        e(window).resize(function () {
          l(s, 200, "#logo");
        });
    },
    u = function () {
      var n = t.find(".before"),
        i = t.find(".after");
      (textWidth = t.find("span").width()),
        (spacing = (t.width() - textWidth) / 2 - 50),
        n.css("left", spacing),
        i.css("right", spacing),
        e(window).resize(function () {
          l(u, 200, "#ribbon");
        });
    },
    l =
      ((i = {}),
      function (e, t, n) {
        i[n] && clearTimeout(i[n]), (i[n] = setTimeout(e, t));
      });
  return { initWithEffects: o };
})(jQuery);
(function () {
  function e(e) {
    function t(t, n, i, r, o, a) {
      for (; o >= 0 && o < a; o += e) {
        var s = r ? r[o] : o;
        i = n(i, t[s], s, t);
      }
      return i;
    }
    return function (n, i, r, o) {
      i = y(i, o, 4);
      var a = !C(n) && v.keys(n),
        s = (a || n).length,
        u = e > 0 ? 0 : s - 1;
      return (
        arguments.length < 3 && ((r = n[a ? a[u] : u]), (u += e)),
        t(n, i, r, a, u, s)
      );
    };
  }
  function t(e) {
    return function (t, n, i) {
      n = $(n, i);
      for (
        var r = null != t && t.length, o = e > 0 ? 0 : r - 1;
        o >= 0 && o < r;
        o += e
      )
        if (n(t[o], o, t)) return o;
      return -1;
    };
  }
  function n(e, t) {
    var n = A.length,
      i = e.constructor,
      r = (v.isFunction(i) && i.prototype) || a,
      o = "constructor";
    for (v.has(e, o) && !v.contains(t, o) && t.push(o); n--; )
      (o = A[n]) in e && e[o] !== r[o] && !v.contains(t, o) && t.push(o);
  }
  var i = this,
    r = i._,
    o = Array.prototype,
    a = Object.prototype,
    s = Function.prototype,
    u = o.push,
    l = o.slice,
    c = a.toString,
    f = a.hasOwnProperty,
    d = Array.isArray,
    p = Object.keys,
    h = s.bind,
    m = Object.create,
    g = function () {},
    v = function (e) {
      return e instanceof v
        ? e
        : this instanceof v
        ? void (this._wrapped = e)
        : new v(e);
    };
  "undefined" != typeof exports
    ? ("undefined" != typeof module &&
        module.exports &&
        (exports = module.exports = v),
      (exports._ = v))
    : (i._ = v),
    (v.VERSION = "1.8.2");
  var y = function (e, t, n) {
      if (void 0 === t) return e;
      switch (null == n ? 3 : n) {
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function (n, i, r) {
            return e.call(t, n, i, r);
          };
        case 4:
          return function (n, i, r, o) {
            return e.call(t, n, i, r, o);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    $ = function (e, t, n) {
      return null == e
        ? v.identity
        : v.isFunction(e)
        ? y(e, t, n)
        : v.isObject(e)
        ? v.matcher(e)
        : v.property(e);
    };
  v.iteratee = function (e, t) {
    return $(e, t, Infinity);
  };
  var b = function (e, t) {
      return function (n) {
        var i = arguments.length;
        if (i < 2 || null == n) return n;
        for (var r = 1; r < i; r++)
          for (
            var o = arguments[r], a = e(o), s = a.length, u = 0;
            u < s;
            u++
          ) {
            var l = a[u];
            (t && void 0 !== n[l]) || (n[l] = o[l]);
          }
        return n;
      };
    },
    x = function (e) {
      if (!v.isObject(e)) return {};
      if (m) return m(e);
      g.prototype = e;
      var t = new g();
      return (g.prototype = null), t;
    },
    w = Math.pow(2, 53) - 1,
    C = function (e) {
      var t = e && e.length;
      return "number" == typeof t && t >= 0 && t <= w;
    };
  (v.each = v.forEach =
    function (e, t, n) {
      var i, r;
      if (((t = y(t, n)), C(e)))
        for (i = 0, r = e.length; i < r; i++) t(e[i], i, e);
      else {
        var o = v.keys(e);
        for (i = 0, r = o.length; i < r; i++) t(e[o[i]], o[i], e);
      }
      return e;
    }),
    (v.map = v.collect =
      function (e, t, n) {
        t = $(t, n);
        for (
          var i = !C(e) && v.keys(e), r = (i || e).length, o = Array(r), a = 0;
          a < r;
          a++
        ) {
          var s = i ? i[a] : a;
          o[a] = t(e[s], s, e);
        }
        return o;
      }),
    (v.reduce = v.foldl = v.inject = e(1)),
    (v.reduceRight = v.foldr = e(-1)),
    (v.find = v.detect =
      function (e, t, n) {
        var i;
        if (
          void 0 !== (i = C(e) ? v.findIndex(e, t, n) : v.findKey(e, t, n)) &&
          -1 !== i
        )
          return e[i];
      }),
    (v.filter = v.select =
      function (e, t, n) {
        var i = [];
        return (
          (t = $(t, n)),
          v.each(e, function (e, n, r) {
            t(e, n, r) && i.push(e);
          }),
          i
        );
      }),
    (v.reject = function (e, t, n) {
      return v.filter(e, v.negate($(t)), n);
    }),
    (v.every = v.all =
      function (e, t, n) {
        t = $(t, n);
        for (
          var i = !C(e) && v.keys(e), r = (i || e).length, o = 0;
          o < r;
          o++
        ) {
          var a = i ? i[o] : o;
          if (!t(e[a], a, e)) return !1;
        }
        return !0;
      }),
    (v.some = v.any =
      function (e, t, n) {
        t = $(t, n);
        for (
          var i = !C(e) && v.keys(e), r = (i || e).length, o = 0;
          o < r;
          o++
        ) {
          var a = i ? i[o] : o;
          if (t(e[a], a, e)) return !0;
        }
        return !1;
      }),
    (v.contains =
      v.includes =
      v.include =
        function (e, t, n) {
          return (
            C(e) || (e = v.values(e)),
            v.indexOf(e, t, "number" == typeof n && n) >= 0
          );
        }),
    (v.invoke = function (e, t) {
      var n = l.call(arguments, 2),
        i = v.isFunction(t);
      return v.map(e, function (e) {
        var r = i ? t : e[t];
        return null == r ? r : r.apply(e, n);
      });
    }),
    (v.pluck = function (e, t) {
      return v.map(e, v.property(t));
    }),
    (v.where = function (e, t) {
      return v.filter(e, v.matcher(t));
    }),
    (v.findWhere = function (e, t) {
      return v.find(e, v.matcher(t));
    }),
    (v.max = function (e, t, n) {
      var i,
        r,
        o = -Infinity,
        a = -Infinity;
      if (null == t && null != e)
        for (var s = 0, u = (e = C(e) ? e : v.values(e)).length; s < u; s++)
          (i = e[s]) > o && (o = i);
      else
        (t = $(t, n)),
          v.each(e, function (e, n, i) {
            ((r = t(e, n, i)) > a || (r === -Infinity && o === -Infinity)) &&
              ((o = e), (a = r));
          });
      return o;
    }),
    (v.min = function (e, t, n) {
      var i,
        r,
        o = Infinity,
        a = Infinity;
      if (null == t && null != e)
        for (var s = 0, u = (e = C(e) ? e : v.values(e)).length; s < u; s++)
          (i = e[s]) < o && (o = i);
      else
        (t = $(t, n)),
          v.each(e, function (e, n, i) {
            ((r = t(e, n, i)) < a || (r === Infinity && o === Infinity)) &&
              ((o = e), (a = r));
          });
      return o;
    }),
    (v.shuffle = function (e) {
      for (
        var t, n = C(e) ? e : v.values(e), i = n.length, r = Array(i), o = 0;
        o < i;
        o++
      )
        (t = v.random(0, o)) !== o && (r[o] = r[t]), (r[t] = n[o]);
      return r;
    }),
    (v.sample = function (e, t, n) {
      return null == t || n
        ? (C(e) || (e = v.values(e)), e[v.random(e.length - 1)])
        : v.shuffle(e).slice(0, Math.max(0, t));
    }),
    (v.sortBy = function (e, t, n) {
      return (
        (t = $(t, n)),
        v.pluck(
          v
            .map(e, function (e, n, i) {
              return { value: e, index: n, criteria: t(e, n, i) };
            })
            .sort(function (e, t) {
              var n = e.criteria,
                i = t.criteria;
              if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (n < i || void 0 === i) return -1;
              }
              return e.index - t.index;
            }),
          "value"
        )
      );
    });
  var S = function (e) {
    return function (t, n, i) {
      var r = {};
      return (
        (n = $(n, i)),
        v.each(t, function (i, o) {
          var a = n(i, o, t);
          e(r, i, a);
        }),
        r
      );
    };
  };
  (v.groupBy = S(function (e, t, n) {
    v.has(e, n) ? e[n].push(t) : (e[n] = [t]);
  })),
    (v.indexBy = S(function (e, t, n) {
      e[n] = t;
    })),
    (v.countBy = S(function (e, t, n) {
      v.has(e, n) ? e[n]++ : (e[n] = 1);
    })),
    (v.toArray = function (e) {
      return e
        ? v.isArray(e)
          ? l.call(e)
          : C(e)
          ? v.map(e, v.identity)
          : v.values(e)
        : [];
    }),
    (v.size = function (e) {
      return null == e ? 0 : C(e) ? e.length : v.keys(e).length;
    }),
    (v.partition = function (e, t, n) {
      t = $(t, n);
      var i = [],
        r = [];
      return (
        v.each(e, function (e, n, o) {
          (t(e, n, o) ? i : r).push(e);
        }),
        [i, r]
      );
    }),
    (v.first =
      v.head =
      v.take =
        function (e, t, n) {
          if (null != e)
            return null == t || n ? e[0] : v.initial(e, e.length - t);
        }),
    (v.initial = function (e, t, n) {
      return l.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
    }),
    (v.last = function (e, t, n) {
      if (null != e)
        return null == t || n
          ? e[e.length - 1]
          : v.rest(e, Math.max(0, e.length - t));
    }),
    (v.rest =
      v.tail =
      v.drop =
        function (e, t, n) {
          return l.call(e, null == t || n ? 1 : t);
        }),
    (v.compact = function (e) {
      return v.filter(e, v.identity);
    });
  var T = function (e, t, n, i) {
    for (var r = [], o = 0, a = i || 0, s = e && e.length; a < s; a++) {
      var u = e[a];
      if (C(u) && (v.isArray(u) || v.isArguments(u))) {
        t || (u = T(u, t, n));
        var l = 0,
          c = u.length;
        for (r.length += c; l < c; ) r[o++] = u[l++];
      } else n || (r[o++] = u);
    }
    return r;
  };
  (v.flatten = function (e, t) {
    return T(e, t, !1);
  }),
    (v.without = function (e) {
      return v.difference(e, l.call(arguments, 1));
    }),
    (v.uniq = v.unique =
      function (e, t, n, i) {
        if (null == e) return [];
        v.isBoolean(t) || ((i = n), (n = t), (t = !1)),
          null != n && (n = $(n, i));
        for (var r = [], o = [], a = 0, s = e.length; a < s; a++) {
          var u = e[a],
            l = n ? n(u, a, e) : u;
          t
            ? ((a && o === l) || r.push(u), (o = l))
            : n
            ? v.contains(o, l) || (o.push(l), r.push(u))
            : v.contains(r, u) || r.push(u);
        }
        return r;
      }),
    (v.union = function () {
      return v.uniq(T(arguments, !0, !0));
    }),
    (v.intersection = function (e) {
      if (null == e) return [];
      for (var t = [], n = arguments.length, i = 0, r = e.length; i < r; i++) {
        var o = e[i];
        if (!v.contains(t, o)) {
          for (var a = 1; a < n && v.contains(arguments[a], o); a++);
          a === n && t.push(o);
        }
      }
      return t;
    }),
    (v.difference = function (e) {
      var t = T(arguments, !0, !0, 1);
      return v.filter(e, function (e) {
        return !v.contains(t, e);
      });
    }),
    (v.zip = function () {
      return v.unzip(arguments);
    }),
    (v.unzip = function (e) {
      for (
        var t = (e && v.max(e, "length").length) || 0, n = Array(t), i = 0;
        i < t;
        i++
      )
        n[i] = v.pluck(e, i);
      return n;
    }),
    (v.object = function (e, t) {
      for (var n = {}, i = 0, r = e && e.length; i < r; i++)
        t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
      return n;
    }),
    (v.indexOf = function (e, t, n) {
      var i = 0,
        r = e && e.length;
      if ("number" == typeof n) i = n < 0 ? Math.max(0, r + n) : n;
      else if (n && r) return e[(i = v.sortedIndex(e, t))] === t ? i : -1;
      if (t != t) return v.findIndex(l.call(e, i), v.isNaN);
      for (; i < r; i++) if (e[i] === t) return i;
      return -1;
    }),
    (v.lastIndexOf = function (e, t, n) {
      var i = e ? e.length : 0;
      if (
        ("number" == typeof n && (i = n < 0 ? i + n + 1 : Math.min(i, n + 1)),
        t != t)
      )
        return v.findLastIndex(l.call(e, 0, i), v.isNaN);
      for (; --i >= 0; ) if (e[i] === t) return i;
      return -1;
    }),
    (v.findIndex = t(1)),
    (v.findLastIndex = t(-1)),
    (v.sortedIndex = function (e, t, n, i) {
      for (var r = (n = $(n, i, 1))(t), o = 0, a = e.length; o < a; ) {
        var s = Math.floor((o + a) / 2);
        n(e[s]) < r ? (o = s + 1) : (a = s);
      }
      return o;
    }),
    (v.range = function (e, t, n) {
      arguments.length <= 1 && ((t = e || 0), (e = 0)), (n = n || 1);
      for (
        var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0;
        o < i;
        o++, e += n
      )
        r[o] = e;
      return r;
    });
  var k = function (e, t, n, i, r) {
    if (!(i instanceof t)) return e.apply(n, r);
    var o = x(e.prototype),
      a = e.apply(o, r);
    return v.isObject(a) ? a : o;
  };
  (v.bind = function (e, t) {
    if (h && e.bind === h) return h.apply(e, l.call(arguments, 1));
    if (!v.isFunction(e))
      throw new TypeError("Bind must be called on a function");
    var n = l.call(arguments, 2),
      i = function () {
        return k(e, i, t, this, n.concat(l.call(arguments)));
      };
    return i;
  }),
    (v.partial = function (e) {
      var t = l.call(arguments, 1),
        n = function () {
          for (var i = 0, r = t.length, o = Array(r), a = 0; a < r; a++)
            o[a] = t[a] === v ? arguments[i++] : t[a];
          for (; i < arguments.length; ) o.push(arguments[i++]);
          return k(e, n, this, this, o);
        };
      return n;
    }),
    (v.bindAll = function (e) {
      var t,
        n,
        i = arguments.length;
      if (i <= 1) throw new Error("bindAll must be passed function names");
      for (t = 1; t < i; t++) e[(n = arguments[t])] = v.bind(e[n], e);
      return e;
    }),
    (v.memoize = function (e, t) {
      var n = function (i) {
        var r = n.cache,
          o = "" + (t ? t.apply(this, arguments) : i);
        return v.has(r, o) || (r[o] = e.apply(this, arguments)), r[o];
      };
      return (n.cache = {}), n;
    }),
    (v.delay = function (e, t) {
      var n = l.call(arguments, 2);
      return setTimeout(function () {
        return e.apply(null, n);
      }, t);
    }),
    (v.defer = v.partial(v.delay, v, 1)),
    (v.throttle = function (e, t, n) {
      var i,
        r,
        o,
        a = null,
        s = 0;
      n || (n = {});
      var u = function () {
        (s = !1 === n.leading ? 0 : v.now()),
          (a = null),
          (o = e.apply(i, r)),
          a || (i = r = null);
      };
      return function () {
        var l = v.now();
        s || !1 !== n.leading || (s = l);
        var c = t - (l - s);
        return (
          (i = this),
          (r = arguments),
          c <= 0 || c > t
            ? (a && (clearTimeout(a), (a = null)),
              (s = l),
              (o = e.apply(i, r)),
              a || (i = r = null))
            : a || !1 === n.trailing || (a = setTimeout(u, c)),
          o
        );
      };
    }),
    (v.debounce = function (e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        u = function () {
          var l = v.now() - a;
          l < t && l >= 0
            ? (i = setTimeout(u, t - l))
            : ((i = null), n || ((s = e.apply(o, r)), i || (o = r = null)));
        };
      return function () {
        (o = this), (r = arguments), (a = v.now());
        var l = n && !i;
        return (
          i || (i = setTimeout(u, t)),
          l && ((s = e.apply(o, r)), (o = r = null)),
          s
        );
      };
    }),
    (v.wrap = function (e, t) {
      return v.partial(t, e);
    }),
    (v.negate = function (e) {
      return function () {
        return !e.apply(this, arguments);
      };
    }),
    (v.compose = function () {
      var e = arguments,
        t = e.length - 1;
      return function () {
        for (var n = t, i = e[t].apply(this, arguments); n--; )
          i = e[n].call(this, i);
        return i;
      };
    }),
    (v.after = function (e, t) {
      return function () {
        if (--e < 1) return t.apply(this, arguments);
      };
    }),
    (v.before = function (e, t) {
      var n;
      return function () {
        return (
          --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
        );
      };
    }),
    (v.once = v.partial(v.before, 2));
  var E = !{ toString: null }.propertyIsEnumerable("toString"),
    A = [
      "valueOf",
      "isPrototypeOf",
      "toString",
      "propertyIsEnumerable",
      "hasOwnProperty",
      "toLocaleString",
    ];
  (v.keys = function (e) {
    if (!v.isObject(e)) return [];
    if (p) return p(e);
    var t = [];
    for (var i in e) v.has(e, i) && t.push(i);
    return E && n(e, t), t;
  }),
    (v.allKeys = function (e) {
      if (!v.isObject(e)) return [];
      var t = [];
      for (var i in e) t.push(i);
      return E && n(e, t), t;
    }),
    (v.values = function (e) {
      for (var t = v.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++)
        i[r] = e[t[r]];
      return i;
    }),
    (v.mapObject = function (e, t, n) {
      t = $(t, n);
      for (var i, r = v.keys(e), o = r.length, a = {}, s = 0; s < o; s++)
        a[(i = r[s])] = t(e[i], i, e);
      return a;
    }),
    (v.pairs = function (e) {
      for (var t = v.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++)
        i[r] = [t[r], e[t[r]]];
      return i;
    }),
    (v.invert = function (e) {
      for (var t = {}, n = v.keys(e), i = 0, r = n.length; i < r; i++)
        t[e[n[i]]] = n[i];
      return t;
    }),
    (v.functions = v.methods =
      function (e) {
        var t = [];
        for (var n in e) v.isFunction(e[n]) && t.push(n);
        return t.sort();
      }),
    (v.extend = b(v.allKeys)),
    (v.extendOwn = v.assign = b(v.keys)),
    (v.findKey = function (e, t, n) {
      t = $(t, n);
      for (var i, r = v.keys(e), o = 0, a = r.length; o < a; o++)
        if (t(e[(i = r[o])], i, e)) return i;
    }),
    (v.pick = function (e, t, n) {
      var i,
        r,
        o = {},
        a = e;
      if (null == a) return o;
      v.isFunction(t)
        ? ((r = v.allKeys(a)), (i = y(t, n)))
        : ((r = T(arguments, !1, !1, 1)),
          (i = function (e, t, n) {
            return t in n;
          }),
          (a = Object(a)));
      for (var s = 0, u = r.length; s < u; s++) {
        var l = r[s],
          c = a[l];
        i(c, l, a) && (o[l] = c);
      }
      return o;
    }),
    (v.omit = function (e, t, n) {
      if (v.isFunction(t)) t = v.negate(t);
      else {
        var i = v.map(T(arguments, !1, !1, 1), String);
        t = function (e, t) {
          return !v.contains(i, t);
        };
      }
      return v.pick(e, t, n);
    }),
    (v.defaults = b(v.allKeys, !0)),
    (v.clone = function (e) {
      return v.isObject(e) ? (v.isArray(e) ? e.slice() : v.extend({}, e)) : e;
    }),
    (v.tap = function (e, t) {
      return t(e), e;
    }),
    (v.isMatch = function (e, t) {
      var n = v.keys(t),
        i = n.length;
      if (null == e) return !i;
      for (var r = Object(e), o = 0; o < i; o++) {
        var a = n[o];
        if (t[a] !== r[a] || !(a in r)) return !1;
      }
      return !0;
    });
  var _ = function (e, t, n, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return e === t;
    e instanceof v && (e = e._wrapped), t instanceof v && (t = t._wrapped);
    var r = c.call(e);
    if (r !== c.call(t)) return !1;
    switch (r) {
      case "[object RegExp]":
      case "[object String]":
        return "" + e == "" + t;
      case "[object Number]":
        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +e == +t;
    }
    var o = "[object Array]" === r;
    if (!o) {
      if ("object" != typeof e || "object" != typeof t) return !1;
      var a = e.constructor,
        s = t.constructor;
      if (
        a !== s &&
        !(
          v.isFunction(a) &&
          a instanceof a &&
          v.isFunction(s) &&
          s instanceof s
        ) &&
        "constructor" in e &&
        "constructor" in t
      )
        return !1;
    }
    i = i || [];
    for (var u = (n = n || []).length; u--; ) if (n[u] === e) return i[u] === t;
    if ((n.push(e), i.push(t), o)) {
      if ((u = e.length) !== t.length) return !1;
      for (; u--; ) if (!_(e[u], t[u], n, i)) return !1;
    } else {
      var l,
        f = v.keys(e);
      if (((u = f.length), v.keys(t).length !== u)) return !1;
      for (; u--; )
        if (((l = f[u]), !v.has(t, l) || !_(e[l], t[l], n, i))) return !1;
    }
    return n.pop(), i.pop(), !0;
  };
  (v.isEqual = function (e, t) {
    return _(e, t);
  }),
    (v.isEmpty = function (e) {
      return (
        null == e ||
        (C(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e))
          ? 0 === e.length
          : 0 === v.keys(e).length)
      );
    }),
    (v.isElement = function (e) {
      return !(!e || 1 !== e.nodeType);
    }),
    (v.isArray =
      d ||
      function (e) {
        return "[object Array]" === c.call(e);
      }),
    (v.isObject = function (e) {
      var t = typeof e;
      return "function" === t || ("object" === t && !!e);
    }),
    v.each(
      ["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"],
      function (e) {
        v["is" + e] = function (t) {
          return c.call(t) === "[object " + e + "]";
        };
      }
    ),
    v.isArguments(arguments) ||
      (v.isArguments = function (e) {
        return v.has(e, "callee");
      }),
    "function" != typeof /./ &&
      "object" != typeof Int8Array &&
      (v.isFunction = function (e) {
        return "function" == typeof e || !1;
      }),
    (v.isFinite = function (e) {
      return isFinite(e) && !isNaN(parseFloat(e));
    }),
    (v.isNaN = function (e) {
      return v.isNumber(e) && e !== +e;
    }),
    (v.isBoolean = function (e) {
      return !0 === e || !1 === e || "[object Boolean]" === c.call(e);
    }),
    (v.isNull = function (e) {
      return null === e;
    }),
    (v.isUndefined = function (e) {
      return void 0 === e;
    }),
    (v.has = function (e, t) {
      return null != e && f.call(e, t);
    }),
    (v.noConflict = function () {
      return (i._ = r), this;
    }),
    (v.identity = function (e) {
      return e;
    }),
    (v.constant = function (e) {
      return function () {
        return e;
      };
    }),
    (v.noop = function () {}),
    (v.property = function (e) {
      return function (t) {
        return null == t ? void 0 : t[e];
      };
    }),
    (v.propertyOf = function (e) {
      return null == e
        ? function () {}
        : function (t) {
            return e[t];
          };
    }),
    (v.matcher = v.matches =
      function (e) {
        return (
          (e = v.extendOwn({}, e)),
          function (t) {
            return v.isMatch(t, e);
          }
        );
      }),
    (v.times = function (e, t, n) {
      var i = Array(Math.max(0, e));
      t = y(t, n, 1);
      for (var r = 0; r < e; r++) i[r] = t(r);
      return i;
    }),
    (v.random = function (e, t) {
      return (
        null == t && ((t = e), (e = 0)),
        e + Math.floor(Math.random() * (t - e + 1))
      );
    }),
    (v.now =
      Date.now ||
      function () {
        return new Date().getTime();
      });
  var O = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
    },
    N = v.invert(O),
    D = function (e) {
      var t = function (t) {
          return e[t];
        },
        n = "(?:" + v.keys(e).join("|") + ")",
        i = RegExp(n),
        r = RegExp(n, "g");
      return function (e) {
        return (e = null == e ? "" : "" + e), i.test(e) ? e.replace(r, t) : e;
      };
    };
  (v.escape = D(O)),
    (v.unescape = D(N)),
    (v.result = function (e, t, n) {
      var i = null == e ? void 0 : e[t];
      return void 0 === i && (i = n), v.isFunction(i) ? i.call(e) : i;
    });
  var M = 0;
  (v.uniqueId = function (e) {
    var t = ++M + "";
    return e ? e + t : t;
  }),
    (v.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g,
    });
  var I = /(.)^/,
    j = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\u2028": "u2028",
      "\u2029": "u2029",
    },
    P = /\\|'|\r|\n|\u2028|\u2029/g,
    R = function (e) {
      return "\\" + j[e];
    };
  (v.template = function (e, t, n) {
    !t && n && (t = n), (t = v.defaults({}, t, v.templateSettings));
    var i = RegExp(
        [
          (t.escape || I).source,
          (t.interpolate || I).source,
          (t.evaluate || I).source,
        ].join("|") + "|$",
        "g"
      ),
      r = 0,
      o = "__p+='";
    e.replace(i, function (t, n, i, a, s) {
      return (
        (o += e.slice(r, s).replace(P, R)),
        (r = s + t.length),
        n
          ? (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
          : i
          ? (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
          : a && (o += "';\n" + a + "\n__p+='"),
        t
      );
    }),
      (o += "';\n"),
      t.variable || (o = "with(obj||{}){\n" + o + "}\n"),
      (o =
        "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
        o +
        "return __p;\n");
    try {
      var a = new Function(t.variable || "obj", "_", o);
    } catch (l) {
      throw ((l.source = o), l);
    }
    var s = function (e) {
        return a.call(this, e, v);
      },
      u = t.variable || "obj";
    return (s.source = "function(" + u + "){\n" + o + "}"), s;
  }),
    (v.chain = function (e) {
      var t = v(e);
      return (t._chain = !0), t;
    });
  var L = function (e, t) {
    return e._chain ? v(t).chain() : t;
  };
  (v.mixin = function (e) {
    v.each(v.functions(e), function (t) {
      var n = (v[t] = e[t]);
      v.prototype[t] = function () {
        var e = [this._wrapped];
        return u.apply(e, arguments), L(this, n.apply(v, e));
      };
    });
  }),
    v.mixin(v),
    v.each(
      ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
      function (e) {
        var t = o[e];
        v.prototype[e] = function () {
          var n = this._wrapped;
          return (
            t.apply(n, arguments),
            ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0],
            L(this, n)
          );
        };
      }
    ),
    v.each(["concat", "join", "slice"], function (e) {
      var t = o[e];
      v.prototype[e] = function () {
        return L(this, t.apply(this._wrapped, arguments));
      };
    }),
    (v.prototype.value = function () {
      return this._wrapped;
    }),
    (v.prototype.valueOf = v.prototype.toJSON = v.prototype.value),
    (v.prototype.toString = function () {
      return "" + this._wrapped;
    }),
    "function" == typeof define &&
      define.amd &&
      define("underscore", [], function () {
        return v;
      });
}).call(this),
  (function (e) {
    "use strict";
    function t(e) {
      if (!x(e)) return Ji;
      b(e.objectMaxDepth) &&
        (Ji.objectMaxDepth = n(e.objectMaxDepth) ? e.objectMaxDepth : NaN);
    }
    function n(e) {
      return S(e) && e > 0;
    }
    function i(e, t) {
      return (
        (t = t || Error),
        function () {
          var n,
            i,
            r = arguments[0],
            o = arguments[1],
            a = "[" + (e ? e + ":" : "") + r + "] ",
            s = G(arguments, 2).map(function (e) {
              return Te(e, Ji.objectMaxDepth);
            });
          for (
            a += o.replace(/\{\d+\}/g, function (e) {
              var t = +e.slice(1, -1);
              return t < s.length ? s[t] : e;
            }),
              a +=
                "\nhttp://errors.angularjs.org/1.6.6/" + (e ? e + "/" : "") + r,
              i = 0,
              n = "?";
            i < s.length;
            i++, n = "&"
          )
            a += n + "p" + i + "=" + encodeURIComponent(s[i]);
          return new t(a);
        }
      );
    }
    function r(e) {
      if (null == e || _(e)) return !1;
      if ($r(e) || C(e) || (sr && e instanceof sr)) return !0;
      var t = "length" in Object(e) && e.length;
      return (
        S(t) &&
        ((t >= 0 && (t - 1 in e || e instanceof Array)) ||
          "function" == typeof e.item)
      );
    }
    function o(e, t, n) {
      var i, a;
      if (e)
        if (E(e))
          for (i in e)
            "prototype" !== i &&
              "length" !== i &&
              "name" !== i &&
              e.hasOwnProperty(i) &&
              t.call(n, e[i], i, e);
        else if ($r(e) || r(e)) {
          var s = "object" != typeof e;
          for (i = 0, a = e.length; i < a; i++)
            (s || i in e) && t.call(n, e[i], i, e);
        } else if (e.forEach && e.forEach !== o) e.forEach(t, n, e);
        else if (w(e)) for (i in e) t.call(n, e[i], i, e);
        else if ("function" == typeof e.hasOwnProperty)
          for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e);
        else for (i in e) tr.call(e, i) && t.call(n, e[i], i, e);
      return e;
    }
    function a(e, t, n) {
      for (var i = Object.keys(e).sort(), r = 0; r < i.length; r++)
        t.call(n, e[i[r]], i[r]);
      return i;
    }
    function s(e) {
      return function (t, n) {
        e(n, t);
      };
    }
    function u() {
      return ++vr;
    }
    function l(e, t) {
      t ? (e.$$hashKey = t) : delete e.$$hashKey;
    }
    function c(e, t, n) {
      for (var i = e.$$hashKey, r = 0, o = t.length; r < o; ++r) {
        var a = t[r];
        if (x(a) || E(a))
          for (var s = Object.keys(a), u = 0, f = s.length; u < f; u++) {
            var d = s[u],
              p = a[d];
            n && x(p)
              ? T(p)
                ? (e[d] = new Date(p.valueOf()))
                : A(p)
                ? (e[d] = new RegExp(p))
                : p.nodeName
                ? (e[d] = p.cloneNode(!0))
                : L(p)
                ? (e[d] = p.clone())
                : (x(e[d]) || (e[d] = $r(p) ? [] : {}), c(e[d], [p], !0))
              : (e[d] = p);
          }
      }
      return l(e, i), e;
    }
    function f(e) {
      return c(e, cr.call(arguments, 1), !1);
    }
    function d(e) {
      return c(e, cr.call(arguments, 1), !0);
    }
    function p(e) {
      return parseInt(e, 10);
    }
    function h(e, t) {
      return f(Object.create(e), t);
    }
    function m() {}
    function g(e) {
      return e;
    }
    function v(e) {
      return function () {
        return e;
      };
    }
    function y(e) {
      return E(e.toString) && e.toString !== pr;
    }
    function $(e) {
      return void 0 === e;
    }
    function b(e) {
      return void 0 !== e;
    }
    function x(e) {
      return null !== e && "object" == typeof e;
    }
    function w(e) {
      return null !== e && "object" == typeof e && !hr(e);
    }
    function C(e) {
      return "string" == typeof e;
    }
    function S(e) {
      return "number" == typeof e;
    }
    function T(e) {
      return "[object Date]" === pr.call(e);
    }
    function k(e) {
      switch (pr.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return e instanceof Error;
      }
    }
    function E(e) {
      return "function" == typeof e;
    }
    function A(e) {
      return "[object RegExp]" === pr.call(e);
    }
    function _(e) {
      return e && e.window === e;
    }
    function O(e) {
      return e && e.$evalAsync && e.$watch;
    }
    function N(e) {
      return "[object File]" === pr.call(e);
    }
    function D(e) {
      return "[object FormData]" === pr.call(e);
    }
    function M(e) {
      return "[object Blob]" === pr.call(e);
    }
    function I(e) {
      return "boolean" == typeof e;
    }
    function j(e) {
      return e && E(e.then);
    }
    function P(e) {
      return e && S(e.length) && br.test(pr.call(e));
    }
    function R(e) {
      return "[object ArrayBuffer]" === pr.call(e);
    }
    function L(e) {
      return !(!e || !(e.nodeName || (e.prop && e.attr && e.find)));
    }
    function H(e) {
      var t,
        n = {},
        i = e.split(",");
      for (t = 0; t < i.length; t++) n[i[t]] = !0;
      return n;
    }
    function q(e) {
      return nr(e.nodeName || (e[0] && e[0].nodeName));
    }
    function V(e, t) {
      return -1 !== Array.prototype.indexOf.call(e, t);
    }
    function F(e, t) {
      var n = e.indexOf(t);
      return n >= 0 && e.splice(n, 1), n;
    }
    function U(e, t, i) {
      function r(e, t, n) {
        if (--n < 0) return "...";
        var i,
          r = t.$$hashKey;
        if ($r(e)) for (var o = 0, s = e.length; o < s; o++) t.push(a(e[o], n));
        else if (w(e)) for (i in e) t[i] = a(e[i], n);
        else if (e && "function" == typeof e.hasOwnProperty)
          for (i in e) e.hasOwnProperty(i) && (t[i] = a(e[i], n));
        else for (i in e) tr.call(e, i) && (t[i] = a(e[i], n));
        return l(t, r), t;
      }
      function a(e, t) {
        if (!x(e)) return e;
        var n = u.indexOf(e);
        if (-1 !== n) return c[n];
        if (_(e) || O(e))
          throw mr(
            "cpws",
            "Can't copy! Making copies of Window or Scope instances is not supported."
          );
        var i = !1,
          o = s(e);
        return (
          o === undefined &&
            ((o = $r(e) ? [] : Object.create(hr(e))), (i = !0)),
          u.push(e),
          c.push(o),
          i ? r(e, o, t) : o
        );
      }
      function s(e) {
        switch (pr.call(e)) {
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return new e.constructor(a(e.buffer), e.byteOffset, e.length);
          case "[object ArrayBuffer]":
            if (!e.slice) {
              var t = new ArrayBuffer(e.byteLength);
              return new Uint8Array(t).set(new Uint8Array(e)), t;
            }
            return e.slice(0);
          case "[object Boolean]":
          case "[object Number]":
          case "[object String]":
          case "[object Date]":
            return new e.constructor(e.valueOf());
          case "[object RegExp]":
            var n = new RegExp(e.source, e.toString().match(/[^/]*$/)[0]);
            return (n.lastIndex = e.lastIndex), n;
          case "[object Blob]":
            return new e.constructor([e], { type: e.type });
        }
        if (E(e.cloneNode)) return e.cloneNode(!0);
      }
      var u = [],
        c = [];
      if (((i = n(i) ? i : NaN), t)) {
        if (P(t) || R(t))
          throw mr(
            "cpta",
            "Can't copy! TypedArray destination cannot be mutated."
          );
        if (e === t)
          throw mr("cpi", "Can't copy! Source and destination are identical.");
        return (
          $r(t)
            ? (t.length = 0)
            : o(t, function (e, n) {
                "$$hashKey" !== n && delete t[n];
              }),
          u.push(e),
          c.push(t),
          r(e, t, i)
        );
      }
      return a(e, i);
    }
    function W(e, t) {
      return e === t || (e != e && t != t);
    }
    function B(e, t) {
      if (e === t) return !0;
      if (null === e || null === t) return !1;
      if (e != e && t != t) return !0;
      var n,
        i,
        r,
        o = typeof e;
      if (o === typeof t && "object" === o) {
        if (!$r(e)) {
          if (T(e)) return !!T(t) && W(e.getTime(), t.getTime());
          if (A(e)) return !!A(t) && e.toString() === t.toString();
          if (O(e) || O(t) || _(e) || _(t) || $r(t) || T(t) || A(t)) return !1;
          for (i in ((r = be()), e))
            if ("$" !== i.charAt(0) && !E(e[i])) {
              if (!B(e[i], t[i])) return !1;
              r[i] = !0;
            }
          for (i in t)
            if (!(i in r) && "$" !== i.charAt(0) && b(t[i]) && !E(t[i]))
              return !1;
          return !0;
        }
        if (!$r(t)) return !1;
        if ((n = e.length) === t.length) {
          for (i = 0; i < n; i++) if (!B(e[i], t[i])) return !1;
          return !0;
        }
      }
      return !1;
    }
    function z(e, t, n) {
      return e.concat(cr.call(t, n));
    }
    function G(e, t) {
      return cr.call(e, t || 0);
    }
    function K(e, t) {
      var n = arguments.length > 2 ? G(arguments, 2) : [];
      return !E(t) || t instanceof RegExp
        ? t
        : n.length
        ? function () {
            return arguments.length
              ? t.apply(e, z(n, arguments, 0))
              : t.apply(e, n);
          }
        : function () {
            return arguments.length ? t.apply(e, arguments) : t.call(e);
          };
    }
    function X(t, n) {
      var i = n;
      return (
        "string" == typeof t && "$" === t.charAt(0) && "$" === t.charAt(1)
          ? (i = undefined)
          : _(n)
          ? (i = "$WINDOW")
          : n && e.document === n
          ? (i = "$DOCUMENT")
          : O(n) && (i = "$SCOPE"),
        i
      );
    }
    function Q(e, t) {
      return $(e)
        ? undefined
        : (S(t) || (t = t ? 2 : null), JSON.stringify(e, X, t));
    }
    function Y(e) {
      return C(e) ? JSON.parse(e) : e;
    }
    function J(e, t) {
      e = e.replace(Tr, "");
      var n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
      return yr(n) ? t : n;
    }
    function Z(e, t) {
      return (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e;
    }
    function ee(e, t, n) {
      n = n ? -1 : 1;
      var i = e.getTimezoneOffset();
      return Z(e, n * (J(t, i) - i));
    }
    function te(e) {
      e = sr(e).clone().empty();
      var t = sr("<div>").append(e).html();
      try {
        return e[0].nodeType === Dr
          ? nr(t)
          : t.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (e, t) {
              return "<" + nr(t);
            });
      } catch (n) {
        return nr(t);
      }
    }
    function ne(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {}
    }
    function ie(e) {
      var t = {};
      return (
        o((e || "").split("&"), function (e) {
          var n, i, r;
          e &&
            ((i = e = e.replace(/\+/g, "%20")),
            -1 !== (n = e.indexOf("=")) &&
              ((i = e.substring(0, n)), (r = e.substring(n + 1))),
            b((i = ne(i))) &&
              ((r = !b(r) || ne(r)),
              tr.call(t, i)
                ? $r(t[i])
                  ? t[i].push(r)
                  : (t[i] = [t[i], r])
                : (t[i] = r)));
        }),
        t
      );
    }
    function re(e) {
      var t = [];
      return (
        o(e, function (e, n) {
          $r(e)
            ? o(e, function (e) {
                t.push(ae(n, !0) + (!0 === e ? "" : "=" + ae(e, !0)));
              })
            : t.push(ae(n, !0) + (!0 === e ? "" : "=" + ae(e, !0)));
        }),
        t.length ? t.join("&") : ""
      );
    }
    function oe(e) {
      return ae(e, !0)
        .replace(/%26/gi, "&")
        .replace(/%3D/gi, "=")
        .replace(/%2B/gi, "+");
    }
    function ae(e, t) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%3B/gi, ";")
        .replace(/%20/g, t ? "%20" : "+");
    }
    function se(e, t) {
      var n,
        i,
        r = kr.length;
      for (i = 0; i < r; ++i)
        if (((n = kr[i] + t), C((n = e.getAttribute(n))))) return n;
      return null;
    }
    function ue(t) {
      var n = t.currentScript;
      if (!n) return !0;
      if (
        !(n instanceof e.HTMLScriptElement || n instanceof e.SVGScriptElement)
      )
        return !1;
      var i = n.attributes;
      return [
        i.getNamedItem("src"),
        i.getNamedItem("href"),
        i.getNamedItem("xlink:href"),
      ].every(function (e) {
        if (!e) return !0;
        if (!e.value) return !1;
        var n = t.createElement("a");
        if (((n.href = e.value), t.location.origin === n.origin)) return !0;
        switch (n.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "blob:":
          case "file:":
          case "data:":
            return !0;
          default:
            return !1;
        }
      });
    }
    function le(t, n) {
      var i,
        r,
        a = {};
      if (
        (o(kr, function (e) {
          var n = e + "app";
          !i &&
            t.hasAttribute &&
            t.hasAttribute(n) &&
            ((i = t), (r = t.getAttribute(n)));
        }),
        o(kr, function (e) {
          var n,
            o = e + "app";
          !i &&
            (n = t.querySelector("[" + o.replace(":", "\\:") + "]")) &&
            ((i = n), (r = n.getAttribute(o)));
        }),
        i)
      ) {
        if (!Er)
          return void e.console.error(
            "Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."
          );
        (a.strictDi = null !== se(i, "strict-di")), n(i, r ? [r] : [], a);
      }
    }
    function ce(t, n, i) {
      x(i) || (i = {}), (i = f({ strictDi: !1 }, i));
      var r = function () {
          if ((t = sr(t)).injector()) {
            var r = t[0] === e.document ? "document" : te(t);
            throw mr(
              "btstrpd",
              "App already bootstrapped with this element '{0}'",
              r.replace(/</, "&lt;").replace(/>/, "&gt;")
            );
          }
          (n = n || []).unshift([
            "$provide",
            function (e) {
              e.value("$rootElement", t);
            },
          ]),
            i.debugInfoEnabled &&
              n.push([
                "$compileProvider",
                function (e) {
                  e.debugInfoEnabled(!0);
                },
              ]),
            n.unshift("ng");
          var o = dt(n, i.strictDi);
          return (
            o.invoke([
              "$rootScope",
              "$rootElement",
              "$compile",
              "$injector",
              function (e, t, n, i) {
                e.$apply(function () {
                  t.data("$injector", i), n(t)(e);
                });
              },
            ]),
            o
          );
        },
        a = /^NG_ENABLE_DEBUG_INFO!/,
        s = /^NG_DEFER_BOOTSTRAP!/;
      if (
        (e &&
          a.test(e.name) &&
          ((i.debugInfoEnabled = !0), (e.name = e.name.replace(a, ""))),
        e && !s.test(e.name))
      )
        return r();
      (e.name = e.name.replace(s, "")),
        (gr.resumeBootstrap = function (e) {
          return (
            o(e, function (e) {
              n.push(e);
            }),
            r()
          );
        }),
        E(gr.resumeDeferredBootstrap) && gr.resumeDeferredBootstrap();
    }
    function fe() {
      (e.name = "NG_ENABLE_DEBUG_INFO!" + e.name), e.location.reload();
    }
    function de(e) {
      var t = gr.element(e).injector();
      if (!t)
        throw mr(
          "test",
          "no injector found for element argument to getTestability"
        );
      return t.get("$$testability");
    }
    function pe(e, t) {
      return (
        (t = t || "_"),
        e.replace(Ar, function (e, n) {
          return (n ? t : "") + e.toLowerCase();
        })
      );
    }
    function he() {
      var t;
      if (!_r) {
        var n = Sr();
        (ur = $(n) ? e.jQuery : n ? e[n] : undefined) && ur.fn.on
          ? ((sr = ur),
            f(ur.fn, {
              scope: Xr.scope,
              isolateScope: Xr.isolateScope,
              controller: Xr.controller,
              injector: Xr.injector,
              inheritedData: Xr.inheritedData,
            }),
            (t = ur.cleanData),
            (ur.cleanData = function (e) {
              for (var n, i, r = 0; null != (i = e[r]); r++)
                (n = ur._data(i, "events")) &&
                  n.$destroy &&
                  ur(i).triggerHandler("$destroy");
              t(e);
            }))
          : (sr = Re),
          (gr.element = sr),
          (_r = !0);
      }
    }
    function me(e, t, n) {
      if (!e)
        throw mr("areq", "Argument '{0}' is {1}", t || "?", n || "required");
      return e;
    }
    function ge(e, t, n) {
      return (
        n && $r(e) && (e = e[e.length - 1]),
        me(
          E(e),
          t,
          "not a function, got " +
            (e && "object" == typeof e
              ? e.constructor.name || "Object"
              : typeof e)
        ),
        e
      );
    }
    function ve(e, t) {
      if ("hasOwnProperty" === e)
        throw mr("badname", "hasOwnProperty is not a valid {0} name", t);
    }
    function ye(e, t, n) {
      if (!t) return e;
      for (var i, r = t.split("."), o = e, a = r.length, s = 0; s < a; s++)
        (i = r[s]), e && (e = (o = e)[i]);
      return !n && E(e) ? K(o, e) : e;
    }
    function $e(e) {
      for (
        var t, n = e[0], i = e[e.length - 1], r = 1;
        n !== i && (n = n.nextSibling);
        r++
      )
        (t || e[r] !== n) && (t || (t = sr(cr.call(e, 0, r))), t.push(n));
      return t || e;
    }
    function be() {
      return Object.create(null);
    }
    function xe(e) {
      if (null == e) return "";
      switch (typeof e) {
        case "string":
          break;
        case "number":
          e = "" + e;
          break;
        default:
          e = !y(e) || $r(e) || T(e) ? Q(e) : e.toString();
      }
      return e;
    }
    function we(e) {
      function t(e, t, n) {
        return e[t] || (e[t] = n());
      }
      var n = i("$injector"),
        r = i("ng"),
        o = t(e, "angular", Object);
      return (
        (o.$$minErr = o.$$minErr || i),
        t(o, "module", function () {
          var e = {};
          return function (i, o, a) {
            var s = {};
            return (
              (function (e, t) {
                if ("hasOwnProperty" === e)
                  throw r(
                    "badname",
                    "hasOwnProperty is not a valid {0} name",
                    t
                  );
              })(i, "module"),
              o && e.hasOwnProperty(i) && (e[i] = null),
              t(e, i, function () {
                function e(e, t, n, i) {
                  return (
                    i || (i = u),
                    function () {
                      return i[n || "push"]([e, t, arguments]), d;
                    }
                  );
                }
                function t(e, t, n) {
                  return (
                    n || (n = u),
                    function (r, o) {
                      return (
                        o && E(o) && (o.$$moduleName = i),
                        n.push([e, t, arguments]),
                        d
                      );
                    }
                  );
                }
                if (!o)
                  throw n(
                    "nomod",
                    "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",
                    i
                  );
                var u = [],
                  l = [],
                  c = [],
                  f = e("$injector", "invoke", "push", l),
                  d = {
                    _invokeQueue: u,
                    _configBlocks: l,
                    _runBlocks: c,
                    info: function (e) {
                      if (b(e)) {
                        if (!x(e))
                          throw r(
                            "aobj",
                            "Argument '{0}' must be an object",
                            "value"
                          );
                        return (s = e), this;
                      }
                      return s;
                    },
                    requires: o,
                    name: i,
                    provider: t("$provide", "provider"),
                    factory: t("$provide", "factory"),
                    service: t("$provide", "service"),
                    value: e("$provide", "value"),
                    constant: e("$provide", "constant", "unshift"),
                    decorator: t("$provide", "decorator", l),
                    animation: t("$animateProvider", "register"),
                    filter: t("$filterProvider", "register"),
                    controller: t("$controllerProvider", "register"),
                    directive: t("$compileProvider", "directive"),
                    component: t("$compileProvider", "component"),
                    config: f,
                    run: function (e) {
                      return c.push(e), this;
                    },
                  };
                return a && f(a), d;
              })
            );
          };
        })
      );
    }
    function Ce(e, t) {
      if ($r(e)) {
        t = t || [];
        for (var n = 0, i = e.length; n < i; n++) t[n] = e[n];
      } else if (x(e))
        for (var r in ((t = t || {}), e))
          ("$" === r.charAt(0) && "$" === r.charAt(1)) || (t[r] = e[r]);
      return t || e;
    }
    function Se(e, t) {
      var i = [];
      return (
        n(t) && (e = gr.copy(e, null, t)),
        JSON.stringify(e, function (e, t) {
          if (x((t = X(e, t)))) {
            if (i.indexOf(t) >= 0) return "...";
            i.push(t);
          }
          return t;
        })
      );
    }
    function Te(e, t) {
      return "function" == typeof e
        ? e.toString().replace(/ \{[\s\S]*$/, "")
        : $(e)
        ? "undefined"
        : "string" != typeof e
        ? Se(e, t)
        : e;
    }
    function ke(n) {
      f(n, {
        errorHandlingConfig: t,
        bootstrap: ce,
        copy: U,
        extend: f,
        merge: d,
        equals: B,
        element: sr,
        forEach: o,
        injector: dt,
        noop: m,
        bind: K,
        toJson: Q,
        fromJson: Y,
        identity: g,
        isUndefined: $,
        isDefined: b,
        isString: C,
        isFunction: E,
        isObject: x,
        isNumber: S,
        isElement: L,
        isArray: $r,
        version: Pr,
        isDate: T,
        lowercase: nr,
        uppercase: ir,
        callbacks: { $$counter: 0 },
        getTestability: de,
        reloadWithDebugInfo: fe,
        $$minErr: i,
        $$csp: Cr,
        $$encodeUriSegment: oe,
        $$encodeUriQuery: ae,
        $$stringify: xe,
      }),
        (lr = we(e))(
          "ng",
          ["ngLocale"],
          [
            "$provide",
            function (e) {
              e.provider({ $$sanitizeUri: jn }),
                e
                  .provider("$compile", Ct)
                  .directive({
                    a: aa,
                    input: ka,
                    textarea: ka,
                    form: da,
                    script: bs,
                    select: Cs,
                    option: Ss,
                    ngBind: _a,
                    ngBindHtml: Na,
                    ngBindTemplate: Oa,
                    ngClass: Ma,
                    ngClassEven: ja,
                    ngClassOdd: Ia,
                    ngCloak: Pa,
                    ngController: Ra,
                    ngForm: pa,
                    ngHide: ps,
                    ngIf: qa,
                    ngInclude: Va,
                    ngInit: Ua,
                    ngNonBindable: rs,
                    ngPluralize: us,
                    ngRepeat: ls,
                    ngShow: ds,
                    ngStyle: hs,
                    ngSwitch: ms,
                    ngSwitchWhen: gs,
                    ngSwitchDefault: vs,
                    ngOptions: ss,
                    ngTransclude: $s,
                    ngModel: ts,
                    ngList: Wa,
                    ngChange: Da,
                    pattern: ks,
                    ngPattern: ks,
                    required: Ts,
                    ngRequired: Ts,
                    minlength: As,
                    ngMinlength: As,
                    maxlength: Es,
                    ngMaxlength: Es,
                    ngValue: Aa,
                    ngModelOptions: is,
                  })
                  .directive({ ngInclude: Fa })
                  .directive(sa)
                  .directive(La),
                e.provider({
                  $anchorScroll: pt,
                  $animate: ho,
                  $animateCss: vo,
                  $$animateJs: fo,
                  $$animateQueue: po,
                  $$AnimateRunner: go,
                  $$animateAsyncRun: mo,
                  $browser: $t,
                  $cacheFactory: bt,
                  $controller: _t,
                  $document: Ot,
                  $$isDocumentHidden: Nt,
                  $exceptionHandler: Dt,
                  $filter: Qn,
                  $$forceReflow: So,
                  $interpolate: zt,
                  $interval: Gt,
                  $http: Ft,
                  $httpParamSerializer: It,
                  $httpParamSerializerJQLike: jt,
                  $httpBackend: Wt,
                  $xhrFactory: Ut,
                  $jsonpCallbacks: Do,
                  $location: ln,
                  $log: cn,
                  $parse: kn,
                  $rootScope: In,
                  $q: En,
                  $$q: An,
                  $sce: qn,
                  $sceDelegate: Hn,
                  $sniffer: Vn,
                  $templateCache: xt,
                  $templateRequest: Fn,
                  $$testability: Un,
                  $timeout: Wn,
                  $window: Gn,
                  $$rAF: Mn,
                  $$jqLite: ot,
                  $$Map: to,
                  $$cookieReader: Xn,
                });
            },
          ]
        ).info({ angularVersion: "1.6.6" });
    }
    function Ee() {
      return ++Lr;
    }
    function Ae(e) {
      return Oe(e.replace(qr, "ms-"));
    }
    function _e(e, t) {
      return t.toUpperCase();
    }
    function Oe(e) {
      return e.replace(Hr, _e);
    }
    function Ne(e) {
      return !Wr.test(e);
    }
    function De(e) {
      var t = e.nodeType;
      return t === Or || !t || t === Ir;
    }
    function Me(e) {
      for (var t in Rr[e.ng339]) return !0;
      return !1;
    }
    function Ie(e, t) {
      var n,
        i,
        r,
        a,
        s = t.createDocumentFragment(),
        u = [];
      if (Ne(e)) u.push(t.createTextNode(e));
      else {
        for (
          n = s.appendChild(t.createElement("div")),
            i = (Br.exec(e) || ["", ""])[1].toLowerCase(),
            r = Gr[i] || Gr._default,
            n.innerHTML = r[1] + e.replace(zr, "<$1></$2>") + r[2],
            a = r[0];
          a--;

        )
          n = n.lastChild;
        (u = z(u, n.childNodes)), ((n = s.firstChild).textContent = "");
      }
      return (
        (s.textContent = ""),
        (s.innerHTML = ""),
        o(u, function (e) {
          s.appendChild(e);
        }),
        s
      );
    }
    function je(t, n) {
      var i;
      return (
        (n = n || e.document),
        (i = Ur.exec(t))
          ? [n.createElement(i[1])]
          : (i = Ie(t, n))
          ? i.childNodes
          : []
      );
    }
    function Pe(e, t) {
      var n = e.parentNode;
      n && n.replaceChild(t, e), t.appendChild(e);
    }
    function Re(e) {
      if (e instanceof Re) return e;
      var t;
      if ((C(e) && ((e = xr(e)), (t = !0)), !(this instanceof Re))) {
        if (t && "<" !== e.charAt(0))
          throw Fr(
            "nosel",
            "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element"
          );
        return new Re(e);
      }
      t ? Ge(this, je(e)) : E(e) ? Ze(e) : Ge(this, e);
    }
    function Le(e) {
      return e.cloneNode(!0);
    }
    function He(e, t) {
      !t && De(e) && sr.cleanData([e]),
        e.querySelectorAll && sr.cleanData(e.querySelectorAll("*"));
    }
    function qe(e, t, n, i) {
      if (b(i))
        throw Fr(
          "offargs",
          "jqLite#off() does not support the `selector` argument"
        );
      var r = Fe(e),
        a = r && r.events,
        s = r && r.handle;
      if (s)
        if (t) {
          var u = function (t) {
            var i = a[t];
            b(n) && F(i || [], n),
              (b(n) && i && i.length > 0) ||
                (e.removeEventListener(t, s), delete a[t]);
          };
          o(t.split(" "), function (e) {
            u(e), Vr[e] && u(Vr[e]);
          });
        } else
          for (t in a)
            "$destroy" !== t && e.removeEventListener(t, s), delete a[t];
    }
    function Ve(e, t) {
      var n = e.ng339,
        i = n && Rr[n];
      if (i) {
        if (t) return void delete i.data[t];
        i.handle && (i.events.$destroy && i.handle({}, "$destroy"), qe(e)),
          delete Rr[n],
          (e.ng339 = undefined);
      }
    }
    function Fe(e, t) {
      var n = e.ng339,
        i = n && Rr[n];
      return (
        t &&
          !i &&
          ((e.ng339 = n = Ee()),
          (i = Rr[n] = { events: {}, data: {}, handle: undefined })),
        i
      );
    }
    function Ue(e, t, n) {
      if (De(e)) {
        var i,
          r = b(n),
          o = !r && t && !x(t),
          a = !t,
          s = Fe(e, !o),
          u = s && s.data;
        if (r) u[Oe(t)] = n;
        else {
          if (a) return u;
          if (o) return u && u[Oe(t)];
          for (i in t) u[Oe(i)] = t[i];
        }
      }
    }
    function We(e, t) {
      return (
        !!e.getAttribute &&
        (" " + (e.getAttribute("class") || "") + " ")
          .replace(/[\n\t]/g, " ")
          .indexOf(" " + t + " ") > -1
      );
    }
    function Be(e, t) {
      t &&
        e.setAttribute &&
        o(t.split(" "), function (t) {
          e.setAttribute(
            "class",
            xr(
              (" " + (e.getAttribute("class") || "") + " ")
                .replace(/[\n\t]/g, " ")
                .replace(" " + xr(t) + " ", " ")
            )
          );
        });
    }
    function ze(e, t) {
      if (t && e.setAttribute) {
        var n = (" " + (e.getAttribute("class") || "") + " ").replace(
          /[\n\t]/g,
          " "
        );
        o(t.split(" "), function (e) {
          (e = xr(e)), -1 === n.indexOf(" " + e + " ") && (n += e + " ");
        }),
          e.setAttribute("class", xr(n));
      }
    }
    function Ge(e, t) {
      if (t)
        if (t.nodeType) e[e.length++] = t;
        else {
          var n = t.length;
          if ("number" == typeof n && t.window !== t) {
            if (n) for (var i = 0; i < n; i++) e[e.length++] = t[i];
          } else e[e.length++] = t;
        }
    }
    function Ke(e, t) {
      return Xe(e, "$" + (t || "ngController") + "Controller");
    }
    function Xe(e, t, n) {
      e.nodeType === Ir && (e = e.documentElement);
      for (var i = $r(t) ? t : [t]; e; ) {
        for (var r = 0, o = i.length; r < o; r++)
          if (b((n = sr.data(e, i[r])))) return n;
        e = e.parentNode || (e.nodeType === jr && e.host);
      }
    }
    function Qe(e) {
      for (He(e, !0); e.firstChild; ) e.removeChild(e.firstChild);
    }
    function Ye(e, t) {
      t || He(e);
      var n = e.parentNode;
      n && n.removeChild(e);
    }
    function Je(t, n) {
      "complete" === (n = n || e).document.readyState
        ? n.setTimeout(t)
        : sr(n).on("load", t);
    }
    function Ze(t) {
      function n() {
        e.document.removeEventListener("DOMContentLoaded", n),
          e.removeEventListener("load", n),
          t();
      }
      "complete" === e.document.readyState
        ? e.setTimeout(t)
        : (e.document.addEventListener("DOMContentLoaded", n),
          e.addEventListener("load", n));
    }
    function et(e, t) {
      var n = Qr[t.toLowerCase()];
      return n && Yr[q(e)] && n;
    }
    function tt(e) {
      return Jr[e];
    }
    function nt(e, t) {
      var n = function (n, i) {
        n.isDefaultPrevented = function () {
          return n.defaultPrevented;
        };
        var r = t[i || n.type],
          o = r ? r.length : 0;
        if (o) {
          if ($(n.immediatePropagationStopped)) {
            var a = n.stopImmediatePropagation;
            n.stopImmediatePropagation = function () {
              (n.immediatePropagationStopped = !0),
                n.stopPropagation && n.stopPropagation(),
                a && a.call(n);
            };
          }
          n.isImmediatePropagationStopped = function () {
            return !0 === n.immediatePropagationStopped;
          };
          var s = r.specialHandlerWrapper || it;
          o > 1 && (r = Ce(r));
          for (var u = 0; u < o; u++)
            n.isImmediatePropagationStopped() || s(e, n, r[u]);
        }
      };
      return (n.elem = e), n;
    }
    function it(e, t, n) {
      n.call(e, t);
    }
    function rt(e, t, n) {
      var i = t.relatedTarget;
      (i && (i === e || Kr.call(e, i))) || n.call(e, t);
    }
    function ot() {
      this.$get = function () {
        return f(Re, {
          hasClass: function (e, t) {
            return e.attr && (e = e[0]), We(e, t);
          },
          addClass: function (e, t) {
            return e.attr && (e = e[0]), ze(e, t);
          },
          removeClass: function (e, t) {
            return e.attr && (e = e[0]), Be(e, t);
          },
        });
      };
    }
    function at(e, t) {
      var n = e && e.$$hashKey;
      if (n) return "function" == typeof n && (n = e.$$hashKey()), n;
      var i = typeof e;
      return (n =
        "function" === i || ("object" === i && null !== e)
          ? (e.$$hashKey = i + ":" + (t || u)())
          : i + ":" + e);
    }
    function st() {
      (this._keys = []),
        (this._values = []),
        (this._lastKey = NaN),
        (this._lastIndex = -1);
    }
    function ut(e) {
      return Function.prototype.toString.call(e);
    }
    function lt(e) {
      var t = ut(e).replace(ao, "");
      return t.match(no) || t.match(io);
    }
    function ct(e) {
      var t = lt(e);
      return t
        ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")"
        : "fn";
    }
    function ft(e, t, n) {
      var i, r;
      if ("function" == typeof e) {
        if (!(i = e.$inject)) {
          if (((i = []), e.length)) {
            if (t)
              throw (
                ((C(n) && n) || (n = e.name || ct(e)),
                so(
                  "strictdi",
                  "{0} is not using explicit annotation and cannot be invoked in strict mode",
                  n
                ))
              );
            o(lt(e)[1].split(ro), function (e) {
              e.replace(oo, function (e, t, n) {
                i.push(n);
              });
            });
          }
          e.$inject = i;
        }
      } else
        $r(e)
          ? (ge(e[(r = e.length - 1)], "fn"), (i = e.slice(0, r)))
          : ge(e, "fn", !0);
      return i;
    }
    function dt(e, t) {
      function n(e) {
        return function (t, n) {
          if (!x(t)) return e(t, n);
          o(t, s(e));
        };
      }
      function i(e, t) {
        if (
          (ve(e, "service"), (E(t) || $r(t)) && (t = w.instantiate(t)), !t.$get)
        )
          throw so(
            "pget",
            "Provider '{0}' must define $get factory method.",
            e
          );
        return (b[e + m] = t);
      }
      function r(e, t) {
        return function () {
          var n = k.invoke(t, this);
          if ($(n))
            throw so(
              "undef",
              "Provider '{0}' must return a value from $get factory method.",
              e
            );
          return n;
        };
      }
      function a(e, t, n) {
        return i(e, { $get: !1 !== n ? r(e, t) : t });
      }
      function u(e, t) {
        return a(e, [
          "$injector",
          function (e) {
            return e.instantiate(t);
          },
        ]);
      }
      function l(e, t) {
        return a(e, v(t), !1);
      }
      function c(e, t) {
        ve(e, "constant"), (b[e] = t), (S[e] = t);
      }
      function f(e, t) {
        var n = w.get(e + m),
          i = n.$get;
        n.$get = function () {
          var e = k.invoke(i, n);
          return k.invoke(t, null, { $delegate: e });
        };
      }
      function d(e) {
        me($(e) || $r(e), "modulesToLoad", "not an array");
        var t,
          n = [];
        return (
          o(e, function (e) {
            function i(e) {
              var t, n;
              for (t = 0, n = e.length; t < n; t++) {
                var i = e[t],
                  r = w.get(i[0]);
                r[i[1]].apply(r, i[2]);
              }
            }
            if (!y.get(e)) {
              y.set(e, !0);
              try {
                C(e)
                  ? ((t = lr(e)),
                    (k.modules[e] = t),
                    (n = n.concat(d(t.requires)).concat(t._runBlocks)),
                    i(t._invokeQueue),
                    i(t._configBlocks))
                  : E(e)
                  ? n.push(w.invoke(e))
                  : $r(e)
                  ? n.push(w.invoke(e))
                  : ge(e, "module");
              } catch (r) {
                throw (
                  ($r(e) && (e = e[e.length - 1]),
                  r.message &&
                    r.stack &&
                    -1 === r.stack.indexOf(r.message) &&
                    (r = r.message + "\n" + r.stack),
                  so(
                    "modulerr",
                    "Failed to instantiate module {0} due to:\n{1}",
                    e,
                    r.stack || r.message || r
                  ))
                );
              }
            }
          }),
          n
        );
      }
      function p(e, n) {
        function i(t, i) {
          if (e.hasOwnProperty(t)) {
            if (e[t] === h)
              throw so(
                "cdep",
                "Circular dependency found: {0}",
                t + " <- " + g.join(" <- ")
              );
            return e[t];
          }
          try {
            return g.unshift(t), (e[t] = h), (e[t] = n(t, i)), e[t];
          } catch (r) {
            throw (e[t] === h && delete e[t], r);
          } finally {
            g.shift();
          }
        }
        function r(e, n, r) {
          for (
            var o = [], a = dt.$$annotate(e, t, r), s = 0, u = a.length;
            s < u;
            s++
          ) {
            var l = a[s];
            if ("string" != typeof l)
              throw so(
                "itkn",
                "Incorrect injection token! Expected service name as string, got {0}",
                l
              );
            o.push(n && n.hasOwnProperty(l) ? n[l] : i(l, r));
          }
          return o;
        }
        function o(e) {
          if (ar || "function" != typeof e) return !1;
          var t = e.$$ngIsClass;
          return (
            I(t) ||
              (t = e.$$ngIsClass = /^(?:class\b|constructor\()/.test(ut(e))),
            t
          );
        }
        function a(e, t, n, i) {
          "string" == typeof n && ((i = n), (n = null));
          var a = r(e, n, i);
          return (
            $r(e) && (e = e[e.length - 1]),
            o(e)
              ? (a.unshift(null), new (Function.prototype.bind.apply(e, a))())
              : e.apply(t, a)
          );
        }
        function s(e, t, n) {
          var i = $r(e) ? e[e.length - 1] : e,
            o = r(e, t, n);
          return o.unshift(null), new (Function.prototype.bind.apply(i, o))();
        }
        return {
          invoke: a,
          instantiate: s,
          get: i,
          annotate: dt.$$annotate,
          has: function (t) {
            return b.hasOwnProperty(t + m) || e.hasOwnProperty(t);
          },
        };
      }
      t = !0 === t;
      var h = {},
        m = "Provider",
        g = [],
        y = new eo(),
        b = {
          $provide: {
            provider: n(i),
            factory: n(a),
            service: n(u),
            value: n(l),
            constant: n(c),
            decorator: f,
          },
        },
        w = (b.$injector = p(b, function (e, t) {
          throw (
            (gr.isString(t) && g.push(t),
            so("unpr", "Unknown provider: {0}", g.join(" <- ")))
          );
        })),
        S = {},
        T = p(S, function (e, t) {
          var n = w.get(e + m, t);
          return k.invoke(n.$get, n, undefined, e);
        }),
        k = T;
      (b["$injector" + m] = { $get: v(T) }), (k.modules = w.modules = be());
      var A = d(e);
      return (
        ((k = T.get("$injector")).strictDi = t),
        o(A, function (e) {
          e && k.invoke(e);
        }),
        k
      );
    }
    function pt() {
      var e = !0;
      (this.disableAutoScrolling = function () {
        e = !1;
      }),
        (this.$get = [
          "$window",
          "$location",
          "$rootScope",
          function (t, n, i) {
            function r(e) {
              var t = null;
              return (
                Array.prototype.some.call(e, function (e) {
                  if ("a" === q(e)) return (t = e), !0;
                }),
                t
              );
            }
            function o() {
              var e = s.yOffset;
              if (E(e)) e = e();
              else if (L(e)) {
                var n = e[0];
                e =
                  "fixed" !== t.getComputedStyle(n).position
                    ? 0
                    : n.getBoundingClientRect().bottom;
              } else S(e) || (e = 0);
              return e;
            }
            function a(e) {
              if (e) {
                e.scrollIntoView();
                var n = o();
                if (n) {
                  var i = e.getBoundingClientRect().top;
                  t.scrollBy(0, i - n);
                }
              } else t.scrollTo(0, 0);
            }
            function s(e) {
              var t;
              (e = C(e) ? e : S(e) ? e.toString() : n.hash())
                ? (t = u.getElementById(e))
                  ? a(t)
                  : (t = r(u.getElementsByName(e)))
                  ? a(t)
                  : "top" === e && a(null)
                : a(null);
            }
            var u = t.document;
            return (
              e &&
                i.$watch(
                  function () {
                    return n.hash();
                  },
                  function (e, t) {
                    (e === t && "" === e) ||
                      Je(function () {
                        i.$evalAsync(s);
                      });
                  }
                ),
              s
            );
          },
        ]);
    }
    function ht(e, t) {
      return e || t
        ? e
          ? t
            ? ($r(e) && (e = e.join(" ")),
              $r(t) && (t = t.join(" ")),
              e + " " + t)
            : e
          : t
        : "";
    }
    function mt(e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        if (n.nodeType === lo) return n;
      }
    }
    function gt(e) {
      C(e) && (e = e.split(" "));
      var t = be();
      return (
        o(e, function (e) {
          e.length && (t[e] = !0);
        }),
        t
      );
    }
    function vt(e) {
      return x(e) ? e : {};
    }
    function yt(e, t, n, i) {
      function r(e) {
        try {
          e.apply(null, G(arguments, 1));
        } finally {
          if (0 === --v)
            for (; y.length; )
              try {
                y.pop()();
              } catch (t) {
                n.error(t);
              }
        }
      }
      function a(e) {
        var t = e.indexOf("#");
        return -1 === t ? "" : e.substr(t);
      }
      function s() {
        (S = null), l();
      }
      function u() {
        B((b = $((b = T())) ? null : b), A) && (b = A), (A = b), (x = b);
      }
      function l() {
        var e = x;
        u(),
          (w === c.url() && e === b) ||
            ((w = c.url()),
            (x = b),
            o(k, function (e) {
              e(c.url(), b);
            }));
      }
      var c = this,
        f = e.location,
        d = e.history,
        p = e.setTimeout,
        h = e.clearTimeout,
        g = {};
      c.isMock = !1;
      var v = 0,
        y = [];
      (c.$$completeOutstandingRequest = r),
        (c.$$incOutstandingRequestCount = function () {
          v++;
        }),
        (c.notifyWhenNoOutstandingRequests = function (e) {
          0 === v ? e() : y.push(e);
        });
      var b,
        x,
        w = f.href,
        C = t.find("base"),
        S = null,
        T = i.history
          ? function () {
              try {
                return d.state;
              } catch (e) {}
            }
          : m;
      u(),
        (c.url = function (t, n, r) {
          if (
            ($(r) && (r = null),
            f !== e.location && (f = e.location),
            d !== e.history && (d = e.history),
            t)
          ) {
            var o = x === r;
            if (w === t && (!i.history || o)) return c;
            var s = w && Zt(w) === Zt(t);
            return (
              (w = t),
              (x = r),
              !i.history || (s && o)
                ? (s || (S = t),
                  n ? f.replace(t) : s ? (f.hash = a(t)) : (f.href = t),
                  f.href !== t && (S = t))
                : (d[n ? "replaceState" : "pushState"](r, "", t), u()),
              S && (S = t),
              c
            );
          }
          return S || f.href.replace(/%27/g, "'");
        }),
        (c.state = function () {
          return b;
        });
      var k = [],
        E = !1,
        A = null;
      (c.onUrlChange = function (t) {
        return (
          E ||
            (i.history && sr(e).on("popstate", s),
            sr(e).on("hashchange", s),
            (E = !0)),
          k.push(t),
          t
        );
      }),
        (c.$$applicationDestroyed = function () {
          sr(e).off("hashchange popstate", s);
        }),
        (c.$$checkUrlChange = l),
        (c.baseHref = function () {
          var e = C.attr("href");
          return e ? e.replace(/^(https?:)?\/\/[^/]*/, "") : "";
        }),
        (c.defer = function (e, t) {
          var n;
          return (
            v++,
            (n = p(function () {
              delete g[n], r(e);
            }, t || 0)),
            (g[n] = !0),
            n
          );
        }),
        (c.defer.cancel = function (e) {
          return !!g[e] && (delete g[e], h(e), r(m), !0);
        });
    }
    function $t() {
      this.$get = [
        "$window",
        "$log",
        "$sniffer",
        "$document",
        function (e, t, n, i) {
          return new yt(e, i, t, n);
        },
      ];
    }
    function bt() {
      this.$get = function () {
        function e(e, n) {
          function r(e) {
            e !== d &&
              (p ? p === e && (p = e.n) : (p = e),
              o(e.n, e.p),
              o(e, d),
              ((d = e).n = null));
          }
          function o(e, t) {
            e !== t && (e && (e.p = t), t && (t.n = e));
          }
          if (e in t)
            throw i("$cacheFactory")(
              "iid",
              "CacheId '{0}' is already taken!",
              e
            );
          var a = 0,
            s = f({}, n, { id: e }),
            u = be(),
            l = (n && n.capacity) || Number.MAX_VALUE,
            c = be(),
            d = null,
            p = null;
          return (t[e] = {
            put: function (e, t) {
              if (!$(t)) {
                if (l < Number.MAX_VALUE) r(c[e] || (c[e] = { key: e }));
                return (
                  e in u || a++, (u[e] = t), a > l && this.remove(p.key), t
                );
              }
            },
            get: function (e) {
              if (l < Number.MAX_VALUE) {
                var t = c[e];
                if (!t) return;
                r(t);
              }
              return u[e];
            },
            remove: function (e) {
              if (l < Number.MAX_VALUE) {
                var t = c[e];
                if (!t) return;
                t === d && (d = t.p),
                  t === p && (p = t.n),
                  o(t.n, t.p),
                  delete c[e];
              }
              e in u && (delete u[e], a--);
            },
            removeAll: function () {
              (u = be()), (a = 0), (c = be()), (d = p = null);
            },
            destroy: function () {
              (u = null), (s = null), (c = null), delete t[e];
            },
            info: function () {
              return f({}, s, { size: a });
            },
          });
        }
        var t = {};
        return (
          (e.info = function () {
            var e = {};
            return (
              o(t, function (t, n) {
                e[n] = t.info();
              }),
              e
            );
          }),
          (e.get = function (e) {
            return t[e];
          }),
          e
        );
      };
    }
    function xt() {
      this.$get = [
        "$cacheFactory",
        function (e) {
          return e("templates");
        },
      ];
    }
    function wt() {}
    function Ct(t, n) {
      function i(e, t, n) {
        var i = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/,
          r = be();
        return (
          o(e, function (e, o) {
            if (e in A) r[o] = A[e];
            else {
              var a = e.match(i);
              if (!a)
                throw yo(
                  "iscp",
                  "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",
                  t,
                  o,
                  e,
                  n
                    ? "controller bindings definition"
                    : "isolate scope definition"
                );
              (r[o] = {
                mode: a[1][0],
                collection: "*" === a[2],
                optional: "?" === a[3],
                attrName: a[4] || o,
              }),
                a[4] && (A[e] = r[o]);
            }
          }),
          r
        );
      }
      function r(e, t) {
        var n = { isolateScope: null, bindToController: null };
        if (
          (x(e.scope) &&
            (!0 === e.bindToController
              ? ((n.bindToController = i(e.scope, t, !0)),
                (n.isolateScope = {}))
              : (n.isolateScope = i(e.scope, t, !1))),
          x(e.bindToController) &&
            (n.bindToController = i(e.bindToController, t, !0)),
          n.bindToController && !e.controller)
        )
          throw yo(
            "noctrl",
            "Cannot bind to controller without directive '{0}'s controller.",
            t
          );
        return n;
      }
      function a(e) {
        var t = e.charAt(0);
        if (!t || t !== nr(t))
          throw yo(
            "baddir",
            "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",
            e
          );
        if (e !== e.trim())
          throw yo(
            "baddir",
            "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",
            e
          );
      }
      function u(e) {
        var t = e.require || (e.controller && e.name);
        return (
          !$r(t) &&
            x(t) &&
            o(t, function (e, n) {
              var i = e.match(S);
              e.substring(i[0].length) || (t[n] = i[0] + n);
            }),
          t
        );
      }
      function l(e, t) {
        if (e && (!C(e) || !/[EACM]/.test(e)))
          throw yo(
            "badrestrict",
            "Restrict property '{0}' of directive '{1}' is invalid",
            e,
            t
          );
        return e || "EA";
      }
      var c = {},
        d = "Directive",
        p = /^\s*directive:\s*([\w-]+)\s+(.*)$/,
        y = /(([\w-]+)(?::([^;]+))?;?)/,
        w = H("ngSrc,ngSrcset,src,srcset"),
        S = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        T = /^(on[a-z]+|formaction)$/,
        A = be();
      (this.directive = function R(e, n) {
        return (
          me(e, "name"),
          ve(e, "directive"),
          C(e)
            ? (a(e),
              me(n, "directiveFactory"),
              c.hasOwnProperty(e) ||
                ((c[e] = []),
                t.factory(e + d, [
                  "$injector",
                  "$exceptionHandler",
                  function (t, n) {
                    var i = [];
                    return (
                      o(c[e], function (r, o) {
                        try {
                          var a = t.invoke(r);
                          E(a)
                            ? (a = { compile: v(a) })
                            : !a.compile && a.link && (a.compile = v(a.link)),
                            (a.priority = a.priority || 0),
                            (a.index = o),
                            (a.name = a.name || e),
                            (a.require = u(a)),
                            (a.restrict = l(a.restrict, e)),
                            (a.$$moduleName = r.$$moduleName),
                            i.push(a);
                        } catch (s) {
                          n(s);
                        }
                      }),
                      i
                    );
                  },
                ])),
              c[e].push(n))
            : o(e, s(R)),
          this
        );
      }),
        (this.component = function L(e, t) {
          function n(e) {
            function n(t) {
              return E(t) || $r(t)
                ? function (n, i) {
                    return e.invoke(t, this, { $element: n, $attrs: i });
                  }
                : t;
            }
            var r = t.template || t.templateUrl ? t.template : "",
              a = {
                controller: i,
                controllerAs: At(t.controller) || t.controllerAs || "$ctrl",
                template: n(r),
                templateUrl: n(t.templateUrl),
                transclude: t.transclude,
                scope: {},
                bindToController: t.bindings || {},
                restrict: "E",
                require: t.require,
              };
            return (
              o(t, function (e, t) {
                "$" === t.charAt(0) && (a[t] = e);
              }),
              a
            );
          }
          if (!C(e)) return o(e, s(K(this, L))), this;
          var i = t.controller || function () {};
          return (
            o(t, function (e, t) {
              "$" === t.charAt(0) && ((n[t] = e), E(i) && (i[t] = e));
            }),
            (n.$inject = ["$injector"]),
            this.directive(e, n)
          );
        }),
        (this.aHrefSanitizationWhitelist = function (e) {
          return b(e)
            ? (n.aHrefSanitizationWhitelist(e), this)
            : n.aHrefSanitizationWhitelist();
        }),
        (this.imgSrcSanitizationWhitelist = function (e) {
          return b(e)
            ? (n.imgSrcSanitizationWhitelist(e), this)
            : n.imgSrcSanitizationWhitelist();
        });
      var _ = !0;
      this.debugInfoEnabled = function (e) {
        return b(e) ? ((_ = e), this) : _;
      };
      var N = !1;
      this.preAssignBindingsEnabled = function (e) {
        return b(e) ? ((N = e), this) : N;
      };
      var D = !1;
      this.strictComponentBindingsEnabled = function (e) {
        return b(e) ? ((D = e), this) : D;
      };
      var M = 10;
      this.onChangesTtl = function (e) {
        return arguments.length ? ((M = e), this) : M;
      };
      var j = !0;
      this.commentDirectivesEnabled = function (e) {
        return arguments.length ? ((j = e), this) : j;
      };
      var P = !0;
      (this.cssClassDirectivesEnabled = function (e) {
        return arguments.length ? ((P = e), this) : P;
      }),
        (this.$get = [
          "$injector",
          "$interpolate",
          "$exceptionHandler",
          "$templateRequest",
          "$parse",
          "$controller",
          "$rootScope",
          "$sce",
          "$animate",
          "$$sanitizeUri",
          function (t, n, i, a, s, u, l, v, A, R) {
            function L() {
              try {
                if (!--Me)
                  throw (
                    ((Ee = undefined),
                    yo(
                      "infchng",
                      "{0} $onChanges() iterations reached. Aborting!\n",
                      M
                    ))
                  );
                l.$apply(function () {
                  for (var e = [], t = 0, n = Ee.length; t < n; ++t)
                    try {
                      Ee[t]();
                    } catch (i) {
                      e.push(i);
                    }
                  if (((Ee = undefined), e.length)) throw e;
                });
              } finally {
                Me++;
              }
            }
            function H(e, t) {
              if (t) {
                var n,
                  i,
                  r,
                  o = Object.keys(t);
                for (n = 0, i = o.length; n < i; n++) this[(r = o[n])] = t[r];
              } else this.$attr = {};
              this.$$element = e;
            }
            function V(e, t, n) {
              _e.innerHTML = "<span " + t + ">";
              var i = _e.firstChild.attributes,
                r = i[0];
              i.removeNamedItem(r.name),
                (r.value = n),
                e.attributes.setNamedItem(r);
            }
            function U(e, t) {
              try {
                e.addClass(t);
              } catch (n) {}
            }
            function z(e, t, n, i, r) {
              e instanceof sr || (e = sr(e));
              var o = Q(e, t, e, n, i, r);
              z.$$addScopeClass(e);
              var a = null;
              return function (t, n, i) {
                if (!e)
                  throw yo(
                    "multilink",
                    "This element has already been linked."
                  );
                me(t, "scope"), r && r.needsNewScope && (t = t.$parent.$new());
                var s,
                  u = (i = i || {}).parentBoundTranscludeFn,
                  l = i.transcludeControllers,
                  c = i.futureParentElement;
                if (
                  (u && u.$$boundTransclude && (u = u.$$boundTransclude),
                  a || (a = X(c)),
                  (s =
                    "html" !== a
                      ? sr(ye(a, sr("<div>").append(e).html()))
                      : n
                      ? Xr.clone.call(e)
                      : e),
                  l)
                )
                  for (var f in l)
                    s.data("$" + f + "Controller", l[f].instance);
                return (
                  z.$$addScopeInfo(s, t),
                  n && n(s, t),
                  o && o(t, s, s, u),
                  n || (e = o = null),
                  s
                );
              };
            }
            function X(e) {
              var t = e && e[0];
              return t && "foreignobject" !== q(t) && pr.call(t).match(/SVG/)
                ? "svg"
                : "html";
            }
            function Q(e, t, n, i, r, o) {
              function a(e, n, i, r) {
                var o, a, s, u, l, c, f, d;
                if (p) {
                  var m = n.length;
                  for (d = new Array(m), l = 0; l < h.length; l += 3)
                    d[(f = h[l])] = n[f];
                } else d = n;
                for (l = 0, c = h.length; l < c; )
                  (s = d[h[l++]]),
                    (o = h[l++]),
                    (a = h[l++]),
                    o
                      ? (o.scope
                          ? ((u = e.$new()), z.$$addScopeInfo(sr(s), u))
                          : (u = e),
                        o(
                          a,
                          u,
                          s,
                          i,
                          o.transcludeOnThisElement
                            ? J(e, o.transclude, r)
                            : !o.templateOnThisElement && r
                            ? r
                            : !r && t
                            ? J(e, t)
                            : null
                        ))
                      : a && a(e, s.childNodes, undefined, r);
              }
              for (
                var s,
                  u,
                  l,
                  c,
                  f,
                  d,
                  p,
                  h = [],
                  m = $r(e) || e instanceof sr,
                  g = 0;
                g < e.length;
                g++
              )
                (s = new H()),
                  11 === ar && Y(e, g, m),
                  (l = (u = Z(e[g], [], s, 0 === g ? i : undefined, r)).length
                    ? oe(u, e[g], s, t, n, null, [], [], o)
                    : null) &&
                    l.scope &&
                    z.$$addScopeClass(s.$$element),
                  (f =
                    (l && l.terminal) || !(c = e[g].childNodes) || !c.length
                      ? null
                      : Q(
                          c,
                          l
                            ? (l.transcludeOnThisElement ||
                                !l.templateOnThisElement) &&
                                l.transclude
                            : t
                        )),
                  (l || f) && (h.push(g, l, f), (d = !0), (p = p || l)),
                  (o = null);
              return d ? a : null;
            }
            function Y(e, t, n) {
              var i,
                r = e[t],
                o = r.parentNode;
              if (r.nodeType === Dr)
                for (
                  ;
                  (i = o ? r.nextSibling : e[t + 1]) && i.nodeType === Dr;

                )
                  (r.nodeValue = r.nodeValue + i.nodeValue),
                    i.parentNode && i.parentNode.removeChild(i),
                    n && i === e[t + 1] && e.splice(t + 1, 1);
            }
            function J(e, t, n) {
              function i(i, r, o, a, s) {
                return (
                  i || ((i = e.$new(!1, s)).$$transcluded = !0),
                  t(i, r, {
                    parentBoundTranscludeFn: n,
                    transcludeControllers: o,
                    futureParentElement: a,
                  })
                );
              }
              var r = (i.$$slots = be());
              for (var o in t.$$slots)
                t.$$slots[o] ? (r[o] = J(e, t.$$slots[o], n)) : (r[o] = null);
              return i;
            }
            function Z(e, t, n, i, r) {
              var o,
                a,
                s,
                u = e.nodeType,
                l = n.$attr;
              switch (u) {
                case Or:
                  le(t, Tt((a = q(e))), "E", i, r);
                  for (
                    var c,
                      f,
                      d,
                      p,
                      h,
                      m,
                      g = e.attributes,
                      v = 0,
                      $ = g && g.length;
                    v < $;
                    v++
                  ) {
                    var b = !1,
                      w = !1;
                    (f = (c = g[v]).name),
                      (h = c.value),
                      (p = Tt(f)),
                      (m = Re.test(p)) &&
                        (f = f
                          .replace(bo, "")
                          .substr(8)
                          .replace(/_(.)/g, function (e, t) {
                            return t.toUpperCase();
                          }));
                    var S = p.match(He);
                    S &&
                      ce(S[1]) &&
                      ((b = f),
                      (w = f.substr(0, f.length - 5) + "end"),
                      (f = f.substr(0, f.length - 6))),
                      (l[(d = Tt(f.toLowerCase()))] = f),
                      (!m && n.hasOwnProperty(d)) ||
                        ((n[d] = h), et(e, d) && (n[d] = !0)),
                      xe(e, t, h, d, m),
                      le(t, d, "A", i, r, b, w);
                  }
                  if (
                    ("input" === a &&
                      "hidden" === e.getAttribute("type") &&
                      e.setAttribute("autocomplete", "off"),
                    !De)
                  )
                    break;
                  if (
                    (x((s = e.className)) && (s = s.animVal), C(s) && "" !== s)
                  )
                    for (; (o = y.exec(s)); )
                      le(t, (d = Tt(o[2])), "C", i, r) && (n[d] = xr(o[3])),
                        (s = s.substr(o.index + o[0].length));
                  break;
                case Dr:
                  ve(t, e.nodeValue);
                  break;
                case Mr:
                  if (!Oe) break;
                  ee(e, t, n, i, r);
              }
              return t.sort(he), t;
            }
            function ee(e, t, n, i, r) {
              try {
                var o = p.exec(e.nodeValue);
                if (o) {
                  var a = Tt(o[1]);
                  le(t, a, "M", i, r) && (n[a] = xr(o[2]));
                }
              } catch (s) {}
            }
            function ne(e, t, n) {
              var i = [],
                r = 0;
              if (t && e.hasAttribute && e.hasAttribute(t)) {
                do {
                  if (!e)
                    throw yo(
                      "uterdir",
                      "Unterminated attribute, found '{0}' but no matching '{1}' found.",
                      t,
                      n
                    );
                  e.nodeType === Or &&
                    (e.hasAttribute(t) && r++, e.hasAttribute(n) && r--),
                    i.push(e),
                    (e = e.nextSibling);
                } while (r > 0);
              } else i.push(e);
              return sr(i);
            }
            function ie(e, t, n) {
              return function (i, r, o, a, s) {
                return (r = ne(r[0], t, n)), e(i, r, o, a, s);
              };
            }
            function re(e, t, n, i, r, o) {
              var a;
              return e
                ? z(t, n, i, r, o)
                : function () {
                    return (
                      a || ((a = z(t, n, i, r, o)), (t = n = o = null)),
                      a.apply(this, arguments)
                    );
                  };
            }
            function oe(e, t, n, r, a, s, u, l, c) {
              function d(e, t, n, i) {
                e &&
                  (n && (e = ie(e, n, i)),
                  (e.require = h.require),
                  (e.directiveName = m),
                  (S === h || h.$$isolateScope) &&
                    (e = Ce(e, { isolateScope: !0 })),
                  u.push(e)),
                  t &&
                    (n && (t = ie(t, n, i)),
                    (t.require = h.require),
                    (t.directiveName = m),
                    (S === h || h.$$isolateScope) &&
                      (t = Ce(t, { isolateScope: !0 })),
                    l.push(t));
              }
              function p(e, r, a, s, c) {
                function d(e, t, n, i) {
                  var r;
                  if (
                    (O(e) || ((i = n), (n = t), (t = e), (e = undefined)),
                    D && (r = y),
                    n || (n = D ? k.parent() : k),
                    !i)
                  )
                    return c(e, t, r, n, L);
                  var o = c.$$slots[i];
                  if (o) return o(e, t, r, n, L);
                  if ($(o))
                    throw yo(
                      "noslot",
                      'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',
                      i,
                      te(k)
                    );
                }
                var p, h, m, g, v, y, b, k, A, _;
                for (var M in (t === a
                  ? ((A = n), (k = n.$$element))
                  : (A = new H((k = sr(a)), n)),
                (v = r),
                S ? (g = r.$new(!0)) : w && (v = r.$parent),
                c &&
                  (((b = d).$$boundTransclude = c),
                  (b.isSlotFilled = function (e) {
                    return !!c.$$slots[e];
                  })),
                C && (y = se(k, A, b, C, g, r, S)),
                S &&
                  (z.$$addScopeInfo(
                    k,
                    g,
                    !0,
                    !(T && (T === S || T === S.$$originalDirective))
                  ),
                  z.$$addScopeClass(k, !0),
                  (g.$$isolateBindings = S.$$isolateBindings),
                  (_ = ke(r, A, g, g.$$isolateBindings, S)).removeWatches &&
                    g.$on("$destroy", _.removeWatches)),
                y)) {
                  var I = C[M],
                    j = y[M],
                    P = I.$$bindings.bindToController;
                  if (N) {
                    j.bindingInfo = P ? ke(v, A, j.instance, P, I) : {};
                    var R = j();
                    R !== j.instance &&
                      ((j.instance = R),
                      k.data("$" + I.name + "Controller", R),
                      j.bindingInfo.removeWatches &&
                        j.bindingInfo.removeWatches(),
                      (j.bindingInfo = ke(v, A, j.instance, P, I)));
                  } else
                    (j.instance = j()),
                      k.data("$" + I.name + "Controller", j.instance),
                      (j.bindingInfo = ke(v, A, j.instance, P, I));
                }
                for (
                  o(C, function (e, t) {
                    var n = e.require;
                    e.bindToController &&
                      !$r(n) &&
                      x(n) &&
                      f(y[t].instance, ae(t, n, k, y));
                  }),
                    o(y, function (e) {
                      var t = e.instance;
                      if (E(t.$onChanges))
                        try {
                          t.$onChanges(e.bindingInfo.initialChanges);
                        } catch (n) {
                          i(n);
                        }
                      if (E(t.$onInit))
                        try {
                          t.$onInit();
                        } catch (n) {
                          i(n);
                        }
                      E(t.$doCheck) &&
                        (v.$watch(function () {
                          t.$doCheck();
                        }),
                        t.$doCheck()),
                        E(t.$onDestroy) &&
                          v.$on("$destroy", function () {
                            t.$onDestroy();
                          });
                    }),
                    p = 0,
                    h = u.length;
                  p < h;
                  p++
                )
                  Se(
                    (m = u[p]),
                    m.isolateScope ? g : r,
                    k,
                    A,
                    m.require && ae(m.directiveName, m.require, k, y),
                    b
                  );
                var L = r;
                for (
                  S && (S.template || null === S.templateUrl) && (L = g),
                    e && e(L, a.childNodes, undefined, c),
                    p = l.length - 1;
                  p >= 0;
                  p--
                )
                  Se(
                    (m = l[p]),
                    m.isolateScope ? g : r,
                    k,
                    A,
                    m.require && ae(m.directiveName, m.require, k, y),
                    b
                  );
                o(y, function (e) {
                  var t = e.instance;
                  E(t.$postLink) && t.$postLink();
                });
              }
              c = c || {};
              for (
                var h,
                  m,
                  g,
                  v,
                  y,
                  b = -Number.MAX_VALUE,
                  w = c.newScopeDirective,
                  C = c.controllerDirectives,
                  S = c.newIsolateScopeDirective,
                  T = c.templateDirective,
                  k = c.nonTlbTranscludeDirective,
                  A = !1,
                  _ = !1,
                  D = c.hasElementTranscludeDirective,
                  M = (n.$$element = sr(t)),
                  I = s,
                  j = r,
                  P = !1,
                  R = !1,
                  L = 0,
                  V = e.length;
                L < V;
                L++
              ) {
                var F = (h = e[L]).$$start,
                  U = h.$$end;
                if ((F && (M = ne(t, F, U)), (g = undefined), b > h.priority))
                  break;
                if (
                  ((y = h.scope) &&
                    (h.templateUrl ||
                      (x(y)
                        ? (ge("new/isolated scope", S || w, h, M), (S = h))
                        : ge("new/isolated scope", S, h, M)),
                    (w = w || h)),
                  (m = h.name),
                  !P &&
                    ((h.replace && (h.templateUrl || h.template)) ||
                      (h.transclude && !h.$$tlb)))
                ) {
                  for (var W, B = L + 1; (W = e[B++]); )
                    if (
                      (W.transclude && !W.$$tlb) ||
                      (W.replace && (W.templateUrl || W.template))
                    ) {
                      R = !0;
                      break;
                    }
                  P = !0;
                }
                if (
                  (!h.templateUrl &&
                    h.controller &&
                    ((C = C || be()),
                    ge("'" + m + "' controller", C[m], h, M),
                    (C[m] = h)),
                  (y = h.transclude))
                )
                  if (
                    ((A = !0),
                    h.$$tlb || (ge("transclusion", k, h, M), (k = h)),
                    "element" === y)
                  )
                    (D = !0),
                      (b = h.priority),
                      (g = M),
                      (M = n.$$element = sr(z.$$createComment(m, n[m]))),
                      (t = M[0]),
                      we(a, G(g), t),
                      (g[0].$$parentNode = g[0].parentNode),
                      (j = re(R, g, r, b, I && I.name, {
                        nonTlbTranscludeDirective: k,
                      }));
                  else {
                    var X = be();
                    if (x(y)) {
                      g = [];
                      var Q = be(),
                        Y = be();
                      for (var J in (o(y, function (e, t) {
                        var n = "?" === e.charAt(0);
                        (e = n ? e.substring(1) : e),
                          (Q[e] = t),
                          (X[t] = null),
                          (Y[t] = n);
                      }),
                      o(M.contents(), function (e) {
                        var t = Q[Tt(q(e))];
                        t
                          ? ((Y[t] = !0), (X[t] = X[t] || []), X[t].push(e))
                          : g.push(e);
                      }),
                      o(Y, function (e, t) {
                        if (!e)
                          throw yo(
                            "reqslot",
                            "Required transclusion slot `{0}` was not filled.",
                            t
                          );
                      }),
                      X))
                        X[J] && (X[J] = re(R, X[J], r));
                    } else g = sr(Le(t)).contents();
                    M.empty(),
                      ((j = re(R, g, r, undefined, undefined, {
                        needsNewScope: h.$$isolateScope || h.$$newScope,
                      })).$$slots = X);
                  }
                if (h.template)
                  if (
                    ((_ = !0),
                    ge("template", T, h, M),
                    (T = h),
                    (y = E(h.template) ? h.template(M, n) : h.template),
                    (y = Pe(y)),
                    h.replace)
                  ) {
                    if (
                      ((I = h),
                      (g = Ne(y) ? [] : Et(ye(h.templateNamespace, xr(y)))),
                      (t = g[0]),
                      1 !== g.length || t.nodeType !== Or)
                    )
                      throw yo(
                        "tplrt",
                        "Template for directive '{0}' must have exactly one root element. {1}",
                        m,
                        ""
                      );
                    we(a, M, t);
                    var ee = { $attr: {} },
                      oe = Z(t, [], ee),
                      le = e.splice(L + 1, e.length - (L + 1));
                    (S || w) && ue(oe, S, w),
                      (e = e.concat(oe).concat(le)),
                      fe(n, ee),
                      (V = e.length);
                  } else M.html(y);
                if (h.templateUrl)
                  (_ = !0),
                    ge("template", T, h, M),
                    (T = h),
                    h.replace && (I = h),
                    (p = de(e.splice(L, e.length - L), M, n, a, A && j, u, l, {
                      controllerDirectives: C,
                      newScopeDirective: w !== h && w,
                      newIsolateScopeDirective: S,
                      templateDirective: T,
                      nonTlbTranscludeDirective: k,
                    })),
                    (V = e.length);
                else if (h.compile)
                  try {
                    v = h.compile(M, n, j);
                    var ce = h.$$originalDirective || h;
                    E(v)
                      ? d(null, K(ce, v), F, U)
                      : v && d(K(ce, v.pre), K(ce, v.post), F, U);
                  } catch (pe) {
                    i(pe, te(M));
                  }
                h.terminal &&
                  ((p.terminal = !0), (b = Math.max(b, h.priority)));
              }
              return (
                (p.scope = w && !0 === w.scope),
                (p.transcludeOnThisElement = A),
                (p.templateOnThisElement = _),
                (p.transclude = j),
                (c.hasElementTranscludeDirective = D),
                p
              );
            }
            function ae(e, t, n, i) {
              var r;
              if (C(t)) {
                var a = t.match(S),
                  s = t.substring(a[0].length),
                  u = a[1] || a[3],
                  l = "?" === a[2];
                if (
                  ("^^" === u
                    ? (n = n.parent())
                    : (r = (r = i && i[s]) && r.instance),
                  !r)
                ) {
                  var c = "$" + s + "Controller";
                  r = u ? n.inheritedData(c) : n.data(c);
                }
                if (!r && !l)
                  throw yo(
                    "ctreq",
                    "Controller '{0}', required by directive '{1}', can't be found!",
                    s,
                    e
                  );
              } else if ($r(t)) {
                r = [];
                for (var f = 0, d = t.length; f < d; f++)
                  r[f] = ae(e, t[f], n, i);
              } else
                x(t) &&
                  ((r = {}),
                  o(t, function (t, o) {
                    r[o] = ae(e, t, n, i);
                  }));
              return r || null;
            }
            function se(e, t, n, i, r, o, a) {
              var s = be();
              for (var l in i) {
                var c = i[l],
                  f = {
                    $scope: c === a || c.$$isolateScope ? r : o,
                    $element: e,
                    $attrs: t,
                    $transclude: n,
                  },
                  d = c.controller;
                "@" === d && (d = t[c.name]);
                var p = u(d, f, !0, c.controllerAs);
                (s[c.name] = p),
                  e.data("$" + c.name + "Controller", p.instance);
              }
              return s;
            }
            function ue(e, t, n) {
              for (var i = 0, r = e.length; i < r; i++)
                e[i] = h(e[i], { $$isolateScope: t, $$newScope: n });
            }
            function le(e, n, i, o, a, s, u) {
              if (n === a) return null;
              var l = null;
              if (c.hasOwnProperty(n))
                for (var f, p = t.get(n + d), m = 0, g = p.length; m < g; m++)
                  if (
                    ((f = p[m]),
                    ($(o) || o > f.priority) && -1 !== f.restrict.indexOf(i))
                  ) {
                    if (
                      (s && (f = h(f, { $$start: s, $$end: u })), !f.$$bindings)
                    ) {
                      var v = (f.$$bindings = r(f, f.name));
                      x(v.isolateScope) &&
                        (f.$$isolateBindings = v.isolateScope);
                    }
                    e.push(f), (l = f);
                  }
              return l;
            }
            function ce(e) {
              if (c.hasOwnProperty(e))
                for (var n = t.get(e + d), i = 0, r = n.length; i < r; i++)
                  if (n[i].multiElement) return !0;
              return !1;
            }
            function fe(e, t) {
              var n = t.$attr,
                i = e.$attr;
              o(e, function (i, r) {
                "$" !== r.charAt(0) &&
                  (t[r] &&
                    t[r] !== i &&
                    (i.length
                      ? (i += ("style" === r ? ";" : " ") + t[r])
                      : (i = t[r])),
                  e.$set(r, i, !0, n[r]));
              }),
                o(t, function (t, r) {
                  e.hasOwnProperty(r) ||
                    "$" === r.charAt(0) ||
                    ((e[r] = t),
                    "class" !== r && "style" !== r && (i[r] = n[r]));
                });
            }
            function de(e, t, n, r, s, u, l, c) {
              var f,
                d,
                p = [],
                m = t[0],
                g = e.shift(),
                v = h(g, {
                  templateUrl: null,
                  transclude: null,
                  replace: null,
                  $$originalDirective: g,
                }),
                y = E(g.templateUrl) ? g.templateUrl(t, n) : g.templateUrl,
                $ = g.templateNamespace;
              return (
                t.empty(),
                a(y)
                  .then(function (i) {
                    var a, h, b, w;
                    if (((i = Pe(i)), g.replace)) {
                      if (
                        ((b = Ne(i) ? [] : Et(ye($, xr(i)))),
                        (a = b[0]),
                        1 !== b.length || a.nodeType !== Or)
                      )
                        throw yo(
                          "tplrt",
                          "Template for directive '{0}' must have exactly one root element. {1}",
                          g.name,
                          y
                        );
                      (h = { $attr: {} }), we(r, t, a);
                      var C = Z(a, [], h);
                      x(g.scope) && ue(C, !0), (e = C.concat(e)), fe(n, h);
                    } else (a = m), t.html(i);
                    for (
                      e.unshift(v),
                        f = oe(e, a, n, s, t, g, u, l, c),
                        o(r, function (e, n) {
                          e === a && (r[n] = t[0]);
                        }),
                        d = Q(t[0].childNodes, s);
                      p.length;

                    ) {
                      var S = p.shift(),
                        T = p.shift(),
                        k = p.shift(),
                        E = p.shift(),
                        A = t[0];
                      if (!S.$$destroyed) {
                        if (T !== m) {
                          var _ = T.className;
                          (c.hasElementTranscludeDirective && g.replace) ||
                            (A = Le(a)),
                            we(k, sr(T), A),
                            U(sr(A), _);
                        }
                        (w = f.transcludeOnThisElement
                          ? J(S, f.transclude, E)
                          : E),
                          f(d, S, A, r, w);
                      }
                    }
                    p = null;
                  })
                  ["catch"](function (e) {
                    k(e) && i(e);
                  }),
                function (e, t, n, i, r) {
                  var o = r;
                  t.$$destroyed ||
                    (p
                      ? p.push(t, n, i, o)
                      : (f.transcludeOnThisElement &&
                          (o = J(t, f.transclude, r)),
                        f(d, t, n, i, o)));
                }
              );
            }
            function he(e, t) {
              var n = t.priority - e.priority;
              return 0 !== n
                ? n
                : e.name !== t.name
                ? e.name < t.name
                  ? -1
                  : 1
                : e.index - t.index;
            }
            function ge(e, t, n, i) {
              function r(e) {
                return e ? " (module: " + e + ")" : "";
              }
              if (t)
                throw yo(
                  "multidir",
                  "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",
                  t.name,
                  r(t.$$moduleName),
                  n.name,
                  r(n.$$moduleName),
                  e,
                  te(i)
                );
            }
            function ve(e, t) {
              var i = n(t, !0);
              i &&
                e.push({
                  priority: 0,
                  compile: function (e) {
                    var t = e.parent(),
                      n = !!t.length;
                    return (
                      n && z.$$addBindingClass(t),
                      function (e, t) {
                        var r = t.parent();
                        n || z.$$addBindingClass(r),
                          z.$$addBindingInfo(r, i.expressions),
                          e.$watch(i, function (e) {
                            t[0].nodeValue = e;
                          });
                      }
                    );
                  },
                });
            }
            function ye(t, n) {
              switch ((t = nr(t || "html"))) {
                case "svg":
                case "math":
                  var i = e.document.createElement("div");
                  return (
                    (i.innerHTML = "<" + t + ">" + n + "</" + t + ">"),
                    i.childNodes[0].childNodes
                  );
                default:
                  return n;
              }
            }
            function $e(e, t) {
              if ("srcdoc" === t) return v.HTML;
              var n = q(e);
              if ("src" === t || "ngSrc" === t) {
                if (
                  -1 === ["img", "video", "audio", "source", "track"].indexOf(n)
                )
                  return v.RESOURCE_URL;
              } else if (
                "xlinkHref" === t ||
                ("form" === n && "action" === t) ||
                ("link" === n && "href" === t)
              )
                return v.RESOURCE_URL;
            }
            function xe(e, t, i, r, o) {
              var a = $e(e, r),
                s = !o,
                u = w[r] || o,
                l = n(i, s, a, u);
              if (l) {
                if ("multiple" === r && "select" === q(e))
                  throw yo(
                    "selmulti",
                    "Binding to the 'multiple' attribute is not supported. Element: {0}",
                    te(e)
                  );
                if (T.test(r))
                  throw yo(
                    "nodomevents",
                    "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead."
                  );
                t.push({
                  priority: 100,
                  compile: function () {
                    return {
                      pre: function (e, t, o) {
                        var s = o.$$observers || (o.$$observers = be()),
                          c = o[r];
                        c !== i && ((l = c && n(c, !0, a, u)), (i = c)),
                          l &&
                            ((o[r] = l(e)),
                            ((s[r] || (s[r] = [])).$$inter = !0),
                            (
                              (o.$$observers && o.$$observers[r].$$scope) ||
                              e
                            ).$watch(l, function (e, t) {
                              "class" === r && e !== t
                                ? o.$updateClass(e, t)
                                : o.$set(r, e);
                            }));
                      },
                    };
                  },
                });
              }
            }
            function we(t, n, i) {
              var r,
                o,
                a = n[0],
                s = n.length,
                u = a.parentNode;
              if (t)
                for (r = 0, o = t.length; r < o; r++)
                  if (t[r] === a) {
                    t[r++] = i;
                    for (
                      var l = r, c = l + s - 1, f = t.length;
                      l < f;
                      l++, c++
                    )
                      c < f ? (t[l] = t[c]) : delete t[l];
                    (t.length -= s - 1), t.context === a && (t.context = i);
                    break;
                  }
              u && u.replaceChild(i, a);
              var d = e.document.createDocumentFragment();
              for (r = 0; r < s; r++) d.appendChild(n[r]);
              for (
                sr.hasData(a) &&
                  (sr.data(i, sr.data(a)), sr(a).off("$destroy")),
                  sr.cleanData(d.querySelectorAll("*")),
                  r = 1;
                r < s;
                r++
              )
                delete n[r];
              (n[0] = i), (n.length = 1);
            }
            function Ce(e, t) {
              return f(
                function () {
                  return e.apply(null, arguments);
                },
                e,
                t
              );
            }
            function Se(e, t, n, r, o, a) {
              try {
                e(t, n, r, o, a);
              } catch (s) {
                i(s, te(n));
              }
            }
            function Te(e, t) {
              if (D)
                throw yo(
                  "missingattr",
                  "Attribute '{0}' of '{1}' is non-optional and must be set!",
                  e,
                  t
                );
            }
            function ke(e, t, i, r, a) {
              function u(t, n, r) {
                E(i.$onChanges) &&
                  !W(n, r) &&
                  (Ee || (e.$$postDigest(L), (Ee = [])),
                  c || ((c = {}), Ee.push(l)),
                  c[t] && (r = c[t].previousValue),
                  (c[t] = new St(r, n)));
              }
              function l() {
                i.$onChanges(c), (c = undefined);
              }
              var c,
                f = [],
                d = {};
              return (
                o(r, function (r, o) {
                  var l,
                    c,
                    p,
                    h,
                    g,
                    v = r.attrName,
                    y = r.optional;
                  switch (r.mode) {
                    case "@":
                      y ||
                        tr.call(t, v) ||
                        (Te(v, a.name), (i[o] = t[v] = undefined)),
                        (g = t.$observe(v, function (e) {
                          if (C(e) || I(e)) {
                            var t = i[o];
                            u(o, e, t), (i[o] = e);
                          }
                        })),
                        (t.$$observers[v].$$scope = e),
                        C((l = t[v])) ? (i[o] = n(l)(e)) : I(l) && (i[o] = l),
                        (d[o] = new St($o, i[o])),
                        f.push(g);
                      break;
                    case "=":
                      if (!tr.call(t, v)) {
                        if (y) break;
                        Te(v, a.name), (t[v] = undefined);
                      }
                      if (y && !t[v]) break;
                      (c = s(t[v])),
                        (h = c.literal ? B : W),
                        (p =
                          c.assign ||
                          function () {
                            throw (
                              ((l = i[o] = c(e)),
                              yo(
                                "nonassign",
                                "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",
                                t[v],
                                v,
                                a.name
                              ))
                            );
                          }),
                        (l = i[o] = c(e));
                      var $ = function (t) {
                        return (
                          h(t, i[o]) ||
                            (h(t, l) ? p(e, (t = i[o])) : (i[o] = t)),
                          (l = t)
                        );
                      };
                      ($.$stateful = !0),
                        (g = r.collection
                          ? e.$watchCollection(t[v], $)
                          : e.$watch(s(t[v], $), null, c.literal)),
                        f.push(g);
                      break;
                    case "<":
                      if (!tr.call(t, v)) {
                        if (y) break;
                        Te(v, a.name), (t[v] = undefined);
                      }
                      if (y && !t[v]) break;
                      var b = (c = s(t[v])).literal,
                        x = (i[o] = c(e));
                      (d[o] = new St($o, i[o])),
                        (g = e.$watch(
                          c,
                          function (e, t) {
                            if (t === e) {
                              if (t === x || (b && B(t, x))) return;
                              t = x;
                            }
                            u(o, e, t), (i[o] = e);
                          },
                          b
                        )),
                        f.push(g);
                      break;
                    case "&":
                      if (
                        (y || tr.call(t, v) || Te(v, a.name),
                        (c = t.hasOwnProperty(v) ? s(t[v]) : m) === m && y)
                      )
                        break;
                      i[o] = function (t) {
                        return c(e, t);
                      };
                  }
                }),
                {
                  initialChanges: d,
                  removeWatches:
                    f.length &&
                    function () {
                      for (var e = 0, t = f.length; e < t; ++e) f[e]();
                    },
                }
              );
            }
            var Ee,
              Ae = /^\w/,
              _e = e.document.createElement("div"),
              Oe = j,
              De = P,
              Me = M;
            H.prototype = {
              $normalize: Tt,
              $addClass: function (e) {
                e && e.length > 0 && A.addClass(this.$$element, e);
              },
              $removeClass: function (e) {
                e && e.length > 0 && A.removeClass(this.$$element, e);
              },
              $updateClass: function (e, t) {
                var n = kt(e, t);
                n && n.length && A.addClass(this.$$element, n);
                var i = kt(t, e);
                i && i.length && A.removeClass(this.$$element, i);
              },
              $set: function (e, t, n, r) {
                var a,
                  s = et(this.$$element[0], e),
                  u = tt(e),
                  l = e;
                if (
                  (s
                    ? (this.$$element.prop(e, t), (r = s))
                    : u && ((this[u] = t), (l = u)),
                  (this[e] = t),
                  r
                    ? (this.$attr[e] = r)
                    : (r = this.$attr[e]) || (this.$attr[e] = r = pe(e, "-")),
                  ("a" === (a = q(this.$$element)) &&
                    ("href" === e || "xlinkHref" === e)) ||
                    ("img" === a && "src" === e))
                )
                  this[e] = t = R(t, "src" === e);
                else if ("img" === a && "srcset" === e && b(t)) {
                  for (
                    var c = "",
                      f = xr(t),
                      d = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                      p = /\s/.test(f) ? d : /(,)/,
                      h = f.split(p),
                      m = Math.floor(h.length / 2),
                      g = 0;
                    g < m;
                    g++
                  ) {
                    var v = 2 * g;
                    (c += R(xr(h[v]), !0)), (c += " " + xr(h[v + 1]));
                  }
                  var y = xr(h[2 * g]).split(/\s/);
                  (c += R(xr(y[0]), !0)),
                    2 === y.length && (c += " " + xr(y[1])),
                    (this[e] = t = c);
                }
                !1 !== n &&
                  (null === t || $(t)
                    ? this.$$element.removeAttr(r)
                    : Ae.test(r)
                    ? this.$$element.attr(r, t)
                    : V(this.$$element[0], r, t));
                var x = this.$$observers;
                x &&
                  o(x[l], function (e) {
                    try {
                      e(t);
                    } catch (n) {
                      i(n);
                    }
                  });
              },
              $observe: function (e, t) {
                var n = this,
                  i = n.$$observers || (n.$$observers = be()),
                  r = i[e] || (i[e] = []);
                return (
                  r.push(t),
                  l.$evalAsync(function () {
                    r.$$inter || !n.hasOwnProperty(e) || $(n[e]) || t(n[e]);
                  }),
                  function () {
                    F(r, t);
                  }
                );
              },
            };
            var Ie = n.startSymbol(),
              je = n.endSymbol(),
              Pe =
                "{{" === Ie && "}}" === je
                  ? g
                  : function (e) {
                      return e.replace(/\{\{/g, Ie).replace(/}}/g, je);
                    },
              Re = /^ngAttr[A-Z]/,
              He = /^(.+)Start$/;
            return (
              (z.$$addBindingInfo = _
                ? function (e, t) {
                    var n = e.data("$binding") || [];
                    $r(t) ? (n = n.concat(t)) : n.push(t),
                      e.data("$binding", n);
                  }
                : m),
              (z.$$addBindingClass = _
                ? function (e) {
                    U(e, "ng-binding");
                  }
                : m),
              (z.$$addScopeInfo = _
                ? function (e, t, n, i) {
                    var r = n
                      ? i
                        ? "$isolateScopeNoTemplate"
                        : "$isolateScope"
                      : "$scope";
                    e.data(r, t);
                  }
                : m),
              (z.$$addScopeClass = _
                ? function (e, t) {
                    U(e, t ? "ng-isolate-scope" : "ng-scope");
                  }
                : m),
              (z.$$createComment = function (t, n) {
                var i = "";
                return (
                  _ && ((i = " " + (t || "") + ": "), n && (i += n + " ")),
                  e.document.createComment(i)
                );
              }),
              z
            );
          },
        ]);
    }
    function St(e, t) {
      (this.previousValue = e), (this.currentValue = t);
    }
    function Tt(e) {
      return e.replace(bo, "").replace(xo, _e);
    }
    function kt(e, t) {
      var n = "",
        i = e.split(/\s+/),
        r = t.split(/\s+/);
      e: for (var o = 0; o < i.length; o++) {
        for (var a = i[o], s = 0; s < r.length; s++) if (a === r[s]) continue e;
        n += (n.length > 0 ? " " : "") + a;
      }
      return n;
    }
    function Et(e) {
      var t = (e = sr(e)).length;
      if (t <= 1) return e;
      for (; t--; ) {
        var n = e[t];
        (n.nodeType === Mr ||
          (n.nodeType === Dr && "" === n.nodeValue.trim())) &&
          fr.call(e, t, 1);
      }
      return e;
    }
    function At(e, t) {
      if (t && C(t)) return t;
      if (C(e)) {
        var n = Co.exec(e);
        if (n) return n[3];
      }
    }
    function _t() {
      var e = {},
        t = !1;
      (this.has = function (t) {
        return e.hasOwnProperty(t);
      }),
        (this.register = function (t, n) {
          ve(t, "controller"), x(t) ? f(e, t) : (e[t] = n);
        }),
        (this.allowGlobals = function () {
          t = !0;
        }),
        (this.$get = [
          "$injector",
          "$window",
          function (n, r) {
            function o(e, t, n, r) {
              if (!e || !x(e.$scope))
                throw i("$controller")(
                  "noscp",
                  "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",
                  r,
                  t
                );
              e.$scope[t] = n;
            }
            return function (i, a, s, u) {
              var l, c, d, p;
              if (((s = !0 === s), u && C(u) && (p = u), C(i))) {
                if (!(c = i.match(Co)))
                  throw wo(
                    "ctrlfmt",
                    "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",
                    i
                  );
                if (
                  ((d = c[1]),
                  (p = p || c[3]),
                  !(i = e.hasOwnProperty(d)
                    ? e[d]
                    : ye(a.$scope, d, !0) || (t ? ye(r, d, !0) : undefined)))
                )
                  throw wo(
                    "ctrlreg",
                    "The controller with the name '{0}' is not registered.",
                    d
                  );
                ge(i, d, !0);
              }
              if (s) {
                var h = ($r(i) ? i[i.length - 1] : i).prototype;
                return (
                  (l = Object.create(h || null)),
                  p && o(a, p, l, d || i.name),
                  f(
                    function () {
                      var e = n.invoke(i, l, a, d);
                      return (
                        e !== l &&
                          (x(e) || E(e)) &&
                          ((l = e), p && o(a, p, l, d || i.name)),
                        l
                      );
                    },
                    { instance: l, identifier: p }
                  )
                );
              }
              return (
                (l = n.instantiate(i, a, d)), p && o(a, p, l, d || i.name), l
              );
            };
          },
        ]);
    }
    function Ot() {
      this.$get = [
        "$window",
        function (e) {
          return sr(e.document);
        },
      ];
    }
    function Nt() {
      this.$get = [
        "$document",
        "$rootScope",
        function (e, t) {
          function n() {
            r = i.hidden;
          }
          var i = e[0],
            r = i && i.hidden;
          return (
            e.on("visibilitychange", n),
            t.$on("$destroy", function () {
              e.off("visibilitychange", n);
            }),
            function () {
              return r;
            }
          );
        },
      ];
    }
    function Dt() {
      this.$get = [
        "$log",
        function (e) {
          return function () {
            e.error.apply(e, arguments);
          };
        },
      ];
    }
    function Mt(e) {
      return x(e) ? (T(e) ? e.toISOString() : Q(e)) : e;
    }
    function It() {
      this.$get = function () {
        return function (e) {
          if (!e) return "";
          var t = [];
          return (
            a(e, function (e, n) {
              null === e ||
                $(e) ||
                E(e) ||
                ($r(e)
                  ? o(e, function (e) {
                      t.push(ae(n) + "=" + ae(Mt(e)));
                    })
                  : t.push(ae(n) + "=" + ae(Mt(e))));
            }),
            t.join("&")
          );
        };
      };
    }
    function jt() {
      this.$get = function () {
        return function (e) {
          function t(e, i, r) {
            null === e ||
              $(e) ||
              ($r(e)
                ? o(e, function (e, n) {
                    t(e, i + "[" + (x(e) ? n : "") + "]");
                  })
                : x(e) && !T(e)
                ? a(e, function (e, n) {
                    t(e, i + (r ? "" : "[") + n + (r ? "" : "]"));
                  })
                : n.push(ae(i) + "=" + ae(Mt(e))));
          }
          if (!e) return "";
          var n = [];
          return t(e, "", !0), n.join("&");
        };
      };
    }
    function Pt(e, t) {
      if (C(e)) {
        var n = e.replace(_o, "").trim();
        if (n) {
          var i = t("Content-Type"),
            r = i && 0 === i.indexOf(To);
          if (r || Rt(n))
            try {
              e = Y(n);
            } catch (o) {
              if (!r) return e;
              throw Oo(
                "baddata",
                'Data must be a valid JSON object. Received: "{0}". Parse error: "{1}"',
                e,
                o
              );
            }
        }
      }
      return e;
    }
    function Rt(e) {
      var t = e.match(Eo);
      return t && Ao[t[0]].test(e);
    }
    function Lt(e) {
      function t(e, t) {
        e && (i[e] = i[e] ? i[e] + ", " + t : t);
      }
      var n,
        i = be();
      return (
        C(e)
          ? o(e.split("\n"), function (e) {
              (n = e.indexOf(":")),
                t(nr(xr(e.substr(0, n))), xr(e.substr(n + 1)));
            })
          : x(e) &&
            o(e, function (e, n) {
              t(nr(n), xr(e));
            }),
        i
      );
    }
    function Ht(e) {
      var t;
      return function (n) {
        if ((t || (t = Lt(e)), n)) {
          var i = t[nr(n)];
          return i === undefined && (i = null), i;
        }
        return t;
      };
    }
    function qt(e, t, n, i) {
      return E(i)
        ? i(e, t, n)
        : (o(i, function (i) {
            e = i(e, t, n);
          }),
          e);
    }
    function Vt(e) {
      return 200 <= e && e < 300;
    }
    function Ft() {
      var e = (this.defaults = {
          transformResponse: [Pt],
          transformRequest: [
            function (e) {
              return !x(e) || N(e) || M(e) || D(e) ? e : Q(e);
            },
          ],
          headers: {
            common: { Accept: "application/json, text/plain, */*" },
            post: Ce(ko),
            put: Ce(ko),
            patch: Ce(ko),
          },
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          paramSerializer: "$httpParamSerializer",
          jsonpCallbackParam: "callback",
        }),
        t = !1;
      this.useApplyAsync = function (e) {
        return b(e) ? ((t = !!e), this) : t;
      };
      var n = (this.interceptors = []);
      this.$get = [
        "$browser",
        "$httpBackend",
        "$$cookieReader",
        "$cacheFactory",
        "$rootScope",
        "$q",
        "$injector",
        "$sce",
        function (r, a, s, u, l, c, d, p) {
          function h(t) {
            function n(e, t) {
              for (var n = 0, i = t.length; n < i; ) {
                var r = t[n++],
                  o = t[n++];
                e = e.then(r, o);
              }
              return (t.length = 0), e;
            }
            function a() {
              r.$$completeOutstandingRequest(m);
            }
            function s(e, t) {
              var n,
                i = {};
              return (
                o(e, function (e, r) {
                  E(e) ? null != (n = e(t)) && (i[r] = n) : (i[r] = e);
                }),
                i
              );
            }
            function u(t) {
              var n,
                i,
                r,
                o = e.headers,
                a = f({}, t.headers);
              o = f({}, o.common, o[nr(t.method)]);
              e: for (n in o) {
                for (r in ((i = nr(n)), a)) if (nr(r) === i) continue e;
                a[n] = o[n];
              }
              return s(a, Ce(t));
            }
            function l(t) {
              var n = t.headers,
                i = qt(t.data, Ht(n), undefined, t.transformRequest);
              return (
                $(i) &&
                  o(n, function (e, t) {
                    "content-type" === nr(t) && delete n[t];
                  }),
                $(t.withCredentials) &&
                  !$(e.withCredentials) &&
                  (t.withCredentials = e.withCredentials),
                y(t, i).then(h, h)
              );
            }
            function h(e) {
              var t = f({}, e);
              return (
                (t.data = qt(e.data, e.headers, e.status, g.transformResponse)),
                Vt(e.status) ? t : c.reject(t)
              );
            }
            if (!x(t))
              throw i("$http")(
                "badreq",
                "Http request configuration must be an object.  Received: {0}",
                t
              );
            if (!C(p.valueOf(t.url)))
              throw i("$http")(
                "badreq",
                "Http request configuration url must be a string or a $sce trusted object.  Received: {0}",
                t.url
              );
            var g = f(
              {
                method: "get",
                transformRequest: e.transformRequest,
                transformResponse: e.transformResponse,
                paramSerializer: e.paramSerializer,
                jsonpCallbackParam: e.jsonpCallbackParam,
              },
              t
            );
            (g.headers = u(t)),
              (g.method = ir(g.method)),
              (g.paramSerializer = C(g.paramSerializer)
                ? d.get(g.paramSerializer)
                : g.paramSerializer),
              r.$$incOutstandingRequestCount();
            var v = [],
              b = [],
              w = c.resolve(g);
            return (
              o(k, function (e) {
                (e.request || e.requestError) &&
                  v.unshift(e.request, e.requestError),
                  (e.response || e.responseError) &&
                    b.push(e.response, e.responseError);
              }),
              (w = (w = n((w = (w = n(w, v)).then(l)), b))["finally"](a))
            );
          }
          function g() {
            o(arguments, function (e) {
              h[e] = function (t, n) {
                return h(f({}, n || {}, { method: e, url: t }));
              };
            });
          }
          function v() {
            o(arguments, function (e) {
              h[e] = function (t, n, i) {
                return h(f({}, i || {}, { method: e, url: t, data: n }));
              };
            });
          }
          function y(n, i) {
            function r(e) {
              if (e) {
                var n = {};
                return (
                  o(e, function (e, i) {
                    n[i] = function (n) {
                      function i() {
                        e(n);
                      }
                      t ? l.$applyAsync(i) : l.$$phase ? i() : l.$apply(i);
                    };
                  }),
                  n
                );
              }
            }
            function u(e, n, i, r, o) {
              function a() {
                f(n, e, i, r, o);
              }
              g && (Vt(e) ? g.put(_, [e, n, Lt(i), r, o]) : g.remove(_)),
                t ? l.$applyAsync(a) : (a(), l.$$phase || l.$apply());
            }
            function f(e, t, i, r, o) {
              (Vt((t = t >= -1 ? t : 0)) ? y.resolve : y.reject)({
                data: e,
                status: t,
                headers: Ht(i),
                config: n,
                statusText: r,
                xhrStatus: o,
              });
            }
            function d(e) {
              f(e.data, e.status, Ce(e.headers()), e.statusText, e.xhrStatus);
            }
            function m() {
              var e = h.pendingRequests.indexOf(n);
              -1 !== e && h.pendingRequests.splice(e, 1);
            }
            var g,
              v,
              y = c.defer(),
              k = y.promise,
              E = n.headers,
              A = "jsonp" === nr(n.method),
              _ = n.url;
            if (
              (A
                ? (_ = p.getTrustedResourceUrl(_))
                : C(_) || (_ = p.valueOf(_)),
              (_ = w(_, n.paramSerializer(n.params))),
              A && (_ = S(_, n.jsonpCallbackParam)),
              h.pendingRequests.push(n),
              k.then(m, m),
              (!n.cache && !e.cache) ||
                !1 === n.cache ||
                ("GET" !== n.method && "JSONP" !== n.method) ||
                (g = x(n.cache) ? n.cache : x(e.cache) ? e.cache : T),
              g &&
                (b((v = g.get(_)))
                  ? j(v)
                    ? v.then(d, d)
                    : $r(v)
                    ? f(v[1], v[0], Ce(v[2]), v[3], v[4])
                    : f(v, 200, {}, "OK", "complete")
                  : g.put(_, k)),
              $(v))
            ) {
              var O = zn(n.url)
                ? s()[n.xsrfCookieName || e.xsrfCookieName]
                : undefined;
              O && (E[n.xsrfHeaderName || e.xsrfHeaderName] = O),
                a(
                  n.method,
                  _,
                  i,
                  u,
                  E,
                  n.timeout,
                  n.withCredentials,
                  n.responseType,
                  r(n.eventHandlers),
                  r(n.uploadEventHandlers)
                );
            }
            return k;
          }
          function w(e, t) {
            return (
              t.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e
            );
          }
          function S(e, t) {
            if (/[&?][^=]+=JSON_CALLBACK/.test(e))
              throw Oo(
                "badjsonp",
                'Illegal use of JSON_CALLBACK in url, "{0}"',
                e
              );
            if (new RegExp("[&?]" + t + "=").test(e))
              throw Oo(
                "badjsonp",
                'Illegal use of callback param, "{0}", in url, "{1}"',
                t,
                e
              );
            return (e +=
              (-1 === e.indexOf("?") ? "?" : "&") + t + "=JSON_CALLBACK");
          }
          var T = u("$http");
          e.paramSerializer = C(e.paramSerializer)
            ? d.get(e.paramSerializer)
            : e.paramSerializer;
          var k = [];
          return (
            o(n, function (e) {
              k.unshift(C(e) ? d.get(e) : d.invoke(e));
            }),
            (h.pendingRequests = []),
            g("get", "delete", "head", "jsonp"),
            v("post", "put", "patch"),
            (h.defaults = e),
            h
          );
        },
      ];
    }
    function Ut() {
      this.$get = function () {
        return function () {
          return new e.XMLHttpRequest();
        };
      };
    }
    function Wt() {
      this.$get = [
        "$browser",
        "$jsonpCallbacks",
        "$document",
        "$xhrFactory",
        function (e, t, n, i) {
          return Bt(e, i, e.defer, t, n[0]);
        },
      ];
    }
    function Bt(e, t, n, i, r) {
      function a(e, t, n) {
        e = e.replace("JSON_CALLBACK", t);
        var o = r.createElement("script"),
          a = null;
        return (
          (o.type = "text/javascript"),
          (o.src = e),
          (o.async = !0),
          (a = function (e) {
            o.removeEventListener("load", a),
              o.removeEventListener("error", a),
              r.body.removeChild(o),
              (o = null);
            var s = -1,
              u = "unknown";
            e &&
              ("load" !== e.type || i.wasCalled(t) || (e = { type: "error" }),
              (u = e.type),
              (s = "error" === e.type ? 404 : 200)),
              n && n(s, u);
          }),
          o.addEventListener("load", a),
          o.addEventListener("error", a),
          r.body.appendChild(o),
          a
        );
      }
      return function (r, s, u, l, c, f, d, p, h, m) {
        function g() {
          x && x(), w && w.abort();
        }
        function v(e, t, i, r, o, a) {
          b(k) && n.cancel(k), (x = w = null), e(t, i, r, o, a);
        }
        if (((s = s || e.url()), "jsonp" === nr(r)))
          var y = i.createCallback(s),
            x = a(s, y, function (e, t) {
              var n = 200 === e && i.getResponse(y);
              v(l, e, n, "", t, "complete"), i.removeCallback(y);
            });
        else {
          var w = t(r, s);
          w.open(r, s, !0),
            o(c, function (e, t) {
              b(e) && w.setRequestHeader(t, e);
            }),
            (w.onload = function () {
              var e = w.statusText || "",
                t = "response" in w ? w.response : w.responseText,
                n = 1223 === w.status ? 204 : w.status;
              0 === n && (n = t ? 200 : "file" === Bn(s).protocol ? 404 : 0),
                v(l, n, t, w.getAllResponseHeaders(), e, "complete");
            });
          var C = function () {
              v(l, -1, null, null, "", "error");
            },
            S = function () {
              v(l, -1, null, null, "", "abort");
            },
            T = function () {
              v(l, -1, null, null, "", "timeout");
            };
          if (
            ((w.onerror = C),
            (w.onabort = S),
            (w.ontimeout = T),
            o(h, function (e, t) {
              w.addEventListener(t, e);
            }),
            o(m, function (e, t) {
              w.upload.addEventListener(t, e);
            }),
            d && (w.withCredentials = !0),
            p)
          )
            try {
              w.responseType = p;
            } catch (E) {
              if ("json" !== p) throw E;
            }
          w.send($(u) ? null : u);
        }
        if (f > 0) var k = n(g, f);
        else j(f) && f.then(g);
      };
    }
    function zt() {
      var e = "{{",
        t = "}}";
      (this.startSymbol = function (t) {
        return t ? ((e = t), this) : e;
      }),
        (this.endSymbol = function (e) {
          return e ? ((t = e), this) : t;
        }),
        (this.$get = [
          "$parse",
          "$exceptionHandler",
          "$sce",
          function (n, i, r) {
            function o(e) {
              return "\\\\\\" + e;
            }
            function a(n) {
              return n.replace(d, e).replace(p, t);
            }
            function s(e, t, n, i) {
              var r = e.$watch(
                function (e) {
                  return r(), i(e);
                },
                t,
                n
              );
              return r;
            }
            function u(o, u, d, p) {
              function h(e) {
                try {
                  return (e = O(e)), p && !b(e) ? e : xe(e);
                } catch (t) {
                  i(No.interr(o, t));
                }
              }
              if (!o.length || -1 === o.indexOf(e)) {
                var m;
                if (!u)
                  ((m = v(a(o))).exp = o),
                    (m.expressions = []),
                    (m.$$watchDelegate = s);
                return m;
              }
              p = !!p;
              for (
                var g,
                  y,
                  x,
                  w = 0,
                  C = [],
                  S = [],
                  T = o.length,
                  k = [],
                  A = [];
                w < T;

              ) {
                if (
                  -1 === (g = o.indexOf(e, w)) ||
                  -1 === (y = o.indexOf(t, g + l))
                ) {
                  w !== T && k.push(a(o.substring(w)));
                  break;
                }
                w !== g && k.push(a(o.substring(w, g))),
                  (x = o.substring(g + l, y)),
                  C.push(x),
                  S.push(n(x, h)),
                  (w = y + c),
                  A.push(k.length),
                  k.push("");
              }
              if ((d && k.length > 1 && No.throwNoconcat(o), !u || C.length)) {
                var _ = function (e) {
                    for (var t = 0, n = C.length; t < n; t++) {
                      if (p && $(e[t])) return;
                      k[A[t]] = e[t];
                    }
                    return k.join("");
                  },
                  O = function (e) {
                    return d ? r.getTrusted(d, e) : r.valueOf(e);
                  };
                return f(
                  function (e) {
                    var t = 0,
                      n = C.length,
                      r = new Array(n);
                    try {
                      for (; t < n; t++) r[t] = S[t](e);
                      return _(r);
                    } catch (a) {
                      i(No.interr(o, a));
                    }
                  },
                  {
                    exp: o,
                    expressions: C,
                    $$watchDelegate: function (e, t) {
                      var n;
                      return e.$watchGroup(S, function (i, r) {
                        var o = _(i);
                        E(t) && t.call(this, o, i !== r ? n : o, e), (n = o);
                      });
                    },
                  }
                );
              }
            }
            var l = e.length,
              c = t.length,
              d = new RegExp(e.replace(/./g, o), "g"),
              p = new RegExp(t.replace(/./g, o), "g");
            return (
              (u.startSymbol = function () {
                return e;
              }),
              (u.endSymbol = function () {
                return t;
              }),
              u
            );
          },
        ]);
    }
    function Gt() {
      this.$get = [
        "$rootScope",
        "$window",
        "$q",
        "$$q",
        "$browser",
        function (e, t, n, i, r) {
          function o(o, s, u, l) {
            function c() {
              f ? o.apply(null, d) : o(m);
            }
            var f = arguments.length > 4,
              d = f ? G(arguments, 4) : [],
              p = t.setInterval,
              h = t.clearInterval,
              m = 0,
              g = b(l) && !l,
              v = (g ? i : n).defer(),
              y = v.promise;
            return (
              (u = b(u) ? u : 0),
              (y.$$intervalId = p(function () {
                g ? r.defer(c) : e.$evalAsync(c),
                  v.notify(m++),
                  u > 0 &&
                    m >= u &&
                    (v.resolve(m), h(y.$$intervalId), delete a[y.$$intervalId]),
                  g || e.$apply();
              }, s)),
              (a[y.$$intervalId] = v),
              y
            );
          }
          var a = {};
          return (
            (o.cancel = function (e) {
              return (
                !!(e && e.$$intervalId in a) &&
                (Dn(a[e.$$intervalId].promise),
                a[e.$$intervalId].reject("canceled"),
                t.clearInterval(e.$$intervalId),
                delete a[e.$$intervalId],
                !0)
              );
            }),
            o
          );
        },
      ];
    }
    function Kt(e) {
      for (var t = e.split("/"), n = t.length; n--; ) t[n] = oe(t[n]);
      return t.join("/");
    }
    function Xt(e, t) {
      var n = Bn(e);
      (t.$$protocol = n.protocol),
        (t.$$host = n.hostname),
        (t.$$port = p(n.port) || Io[n.protocol] || null);
    }
    function Qt(e, t) {
      if (Po.test(e)) throw jo("badpath", 'Invalid url "{0}".', e);
      var n = "/" !== e.charAt(0);
      n && (e = "/" + e);
      var i = Bn(e);
      (t.$$path = decodeURIComponent(
        n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname
      )),
        (t.$$search = ie(i.search)),
        (t.$$hash = decodeURIComponent(i.hash)),
        t.$$path && "/" !== t.$$path.charAt(0) && (t.$$path = "/" + t.$$path);
    }
    function Yt(e, t) {
      return e.slice(0, t.length) === t;
    }
    function Jt(e, t) {
      if (Yt(t, e)) return t.substr(e.length);
    }
    function Zt(e) {
      var t = e.indexOf("#");
      return -1 === t ? e : e.substr(0, t);
    }
    function en(e) {
      return e.replace(/(#.+)|#$/, "$1");
    }
    function tn(e) {
      return e.substr(0, Zt(e).lastIndexOf("/") + 1);
    }
    function nn(e) {
      return e.substring(0, e.indexOf("/", e.indexOf("//") + 2));
    }
    function rn(e, t, n) {
      (this.$$html5 = !0),
        (n = n || ""),
        Xt(e, this),
        (this.$$parse = function (e) {
          var n = Jt(t, e);
          if (!C(n))
            throw jo(
              "ipthprfx",
              'Invalid url "{0}", missing path prefix "{1}".',
              e,
              t
            );
          Qt(n, this), this.$$path || (this.$$path = "/"), this.$$compose();
        }),
        (this.$$compose = function () {
          var e = re(this.$$search),
            n = this.$$hash ? "#" + oe(this.$$hash) : "";
          (this.$$url = Kt(this.$$path) + (e ? "?" + e : "") + n),
            (this.$$absUrl = t + this.$$url.substr(1)),
            (this.$$urlUpdatedByLocation = !0);
        }),
        (this.$$parseLinkUrl = function (i, r) {
          return r && "#" === r[0]
            ? (this.hash(r.slice(1)), !0)
            : (b((o = Jt(e, i)))
                ? ((a = o),
                  (s = n && b((o = Jt(n, o))) ? t + (Jt("/", o) || o) : e + a))
                : b((o = Jt(t, i)))
                ? (s = t + o)
                : t === i + "/" && (s = t),
              s && this.$$parse(s),
              !!s);
          var o, a, s;
        });
    }
    function on(e, t, n) {
      Xt(e, this),
        (this.$$parse = function (i) {
          function r(e, t, n) {
            var i,
              r = /^\/[A-Z]:(\/.*)/;
            return (
              Yt(t, n) && (t = t.replace(n, "")),
              r.exec(t) ? e : (i = r.exec(e)) ? i[1] : e
            );
          }
          var o,
            a = Jt(e, i) || Jt(t, i);
          $(a) || "#" !== a.charAt(0)
            ? this.$$html5
              ? (o = a)
              : ((o = ""), $(a) && ((e = i), this.replace()))
            : $((o = Jt(n, a))) && (o = a),
            Qt(o, this),
            (this.$$path = r(this.$$path, o, e)),
            this.$$compose();
        }),
        (this.$$compose = function () {
          var t = re(this.$$search),
            i = this.$$hash ? "#" + oe(this.$$hash) : "";
          (this.$$url = Kt(this.$$path) + (t ? "?" + t : "") + i),
            (this.$$absUrl = e + (this.$$url ? n + this.$$url : "")),
            (this.$$urlUpdatedByLocation = !0);
        }),
        (this.$$parseLinkUrl = function (t) {
          return Zt(e) === Zt(t) && (this.$$parse(t), !0);
        });
    }
    function an(e, t, n) {
      (this.$$html5 = !0),
        on.apply(this, arguments),
        (this.$$parseLinkUrl = function (i, r) {
          return r && "#" === r[0]
            ? (this.hash(r.slice(1)), !0)
            : (e === Zt(i)
                ? (o = i)
                : (a = Jt(t, i))
                ? (o = e + n + a)
                : t === i + "/" && (o = t),
              o && this.$$parse(o),
              !!o);
          var o, a;
        }),
        (this.$$compose = function () {
          var t = re(this.$$search),
            i = this.$$hash ? "#" + oe(this.$$hash) : "";
          (this.$$url = Kt(this.$$path) + (t ? "?" + t : "") + i),
            (this.$$absUrl = e + n + this.$$url),
            (this.$$urlUpdatedByLocation = !0);
        });
    }
    function sn(e) {
      return function () {
        return this[e];
      };
    }
    function un(e, t) {
      return function (n) {
        return $(n) ? this[e] : ((this[e] = t(n)), this.$$compose(), this);
      };
    }
    function ln() {
      var e = "!",
        t = { enabled: !1, requireBase: !0, rewriteLinks: !0 };
      (this.hashPrefix = function (t) {
        return b(t) ? ((e = t), this) : e;
      }),
        (this.html5Mode = function (e) {
          return I(e)
            ? ((t.enabled = e), this)
            : x(e)
            ? (I(e.enabled) && (t.enabled = e.enabled),
              I(e.requireBase) && (t.requireBase = e.requireBase),
              (I(e.rewriteLinks) || C(e.rewriteLinks)) &&
                (t.rewriteLinks = e.rewriteLinks),
              this)
            : t;
        }),
        (this.$get = [
          "$rootScope",
          "$browser",
          "$sniffer",
          "$rootElement",
          "$window",
          function (n, i, r, o, a) {
            function s(e, t, n) {
              var r = l.url(),
                o = l.$$state;
              try {
                i.url(e, t, n), (l.$$state = i.state());
              } catch (a) {
                throw (l.url(r), (l.$$state = o), a);
              }
            }
            function u(e, t) {
              n.$broadcast(
                "$locationChangeSuccess",
                l.absUrl(),
                e,
                l.$$state,
                t
              );
            }
            var l,
              c,
              f,
              d = i.baseHref(),
              p = i.url();
            if (t.enabled) {
              if (!d && t.requireBase)
                throw jo(
                  "nobase",
                  "$location in HTML5 mode requires a <base> tag to be present!"
                );
              (f = nn(p) + (d || "/")), (c = r.history ? rn : an);
            } else (f = Zt(p)), (c = on);
            var h = tn(f);
            (l = new c(f, h, "#" + e)).$$parseLinkUrl(p, p),
              (l.$$state = i.state());
            var m = /^\s*(javascript|mailto):/i;
            o.on("click", function (e) {
              var r = t.rewriteLinks;
              if (
                r &&
                !e.ctrlKey &&
                !e.metaKey &&
                !e.shiftKey &&
                2 !== e.which &&
                2 !== e.button
              ) {
                for (var s = sr(e.target); "a" !== q(s[0]); )
                  if (s[0] === o[0] || !(s = s.parent())[0]) return;
                if (!C(r) || !$(s.attr(r))) {
                  var u = s.prop("href"),
                    c = s.attr("href") || s.attr("xlink:href");
                  x(u) &&
                    "[object SVGAnimatedString]" === u.toString() &&
                    (u = Bn(u.animVal).href),
                    m.test(u) ||
                      !u ||
                      s.attr("target") ||
                      e.isDefaultPrevented() ||
                      (l.$$parseLinkUrl(u, c) &&
                        (e.preventDefault(),
                        l.absUrl() !== i.url() &&
                          (n.$apply(),
                          (a.angular["ff-684208-preventDefault"] = !0))));
                }
              }
            }),
              en(l.absUrl()) !== en(p) && i.url(l.absUrl(), !0);
            var g = !0;
            return (
              i.onUrlChange(function (e, t) {
                Yt(e, h)
                  ? (n.$evalAsync(function () {
                      var i,
                        r = l.absUrl(),
                        o = l.$$state;
                      (e = en(e)),
                        l.$$parse(e),
                        (l.$$state = t),
                        (i = n.$broadcast(
                          "$locationChangeStart",
                          e,
                          r,
                          t,
                          o
                        ).defaultPrevented),
                        l.absUrl() === e &&
                          (i
                            ? (l.$$parse(r), (l.$$state = o), s(r, !1, o))
                            : ((g = !1), u(r, o)));
                    }),
                    n.$$phase || n.$digest())
                  : (a.location.href = e);
              }),
              n.$watch(function () {
                if (g || l.$$urlUpdatedByLocation) {
                  l.$$urlUpdatedByLocation = !1;
                  var e = en(i.url()),
                    t = en(l.absUrl()),
                    o = i.state(),
                    a = l.$$replace,
                    c = e !== t || (l.$$html5 && r.history && o !== l.$$state);
                  (g || c) &&
                    ((g = !1),
                    n.$evalAsync(function () {
                      var t = l.absUrl(),
                        i = n.$broadcast(
                          "$locationChangeStart",
                          t,
                          e,
                          l.$$state,
                          o
                        ).defaultPrevented;
                      l.absUrl() === t &&
                        (i
                          ? (l.$$parse(e), (l.$$state = o))
                          : (c && s(t, a, o === l.$$state ? null : l.$$state),
                            u(e, o)));
                    }));
                }
                l.$$replace = !1;
              }),
              l
            );
          },
        ]);
    }
    function cn() {
      var e = !0,
        t = this;
      (this.debugEnabled = function (t) {
        return b(t) ? ((e = t), this) : e;
      }),
        (this.$get = [
          "$window",
          function (n) {
            function i(e) {
              return (
                k(e) &&
                  (e.stack && s
                    ? (e =
                        e.message && -1 === e.stack.indexOf(e.message)
                          ? "Error: " + e.message + "\n" + e.stack
                          : e.stack)
                    : e.sourceURL &&
                      (e = e.message + "\n" + e.sourceURL + ":" + e.line)),
                e
              );
            }
            function r(e) {
              var t = n.console || {},
                r = t[e] || t.log || m;
              return function () {
                var e = [];
                return (
                  o(arguments, function (t) {
                    e.push(i(t));
                  }),
                  Function.prototype.apply.call(r, t, e)
                );
              };
            }
            var a,
              s = ar || /\bEdge\//.test(n.navigator && n.navigator.userAgent);
            return {
              log: r("log"),
              info: r("info"),
              warn: r("warn"),
              error: r("error"),
              debug:
                ((a = r("debug")),
                function () {
                  e && a.apply(t, arguments);
                }),
            };
          },
        ]);
    }
    function fn(e) {
      return e + "";
    }
    function dn(e, t) {
      return void 0 !== e ? e : t;
    }
    function pn(e, t) {
      return void 0 === e ? t : void 0 === t ? e : e + t;
    }
    function hn(e, t) {
      return !e(t).$stateful;
    }
    function mn(e, t) {
      switch (e.type) {
        case Uo.MemberExpression:
          if (e.computed) return !1;
          break;
        case Uo.UnaryExpression:
          return Wo;
        case Uo.BinaryExpression:
          return "+" !== e.operator && Wo;
        case Uo.CallExpression:
          return !1;
      }
      return undefined === t ? Bo : t;
    }
    function gn(e, t, n) {
      var i,
        r,
        a,
        s = (e.isPure = mn(e, n));
      switch (e.type) {
        case Uo.Program:
          (i = !0),
            o(e.body, function (e) {
              gn(e.expression, t, s), (i = i && e.expression.constant);
            }),
            (e.constant = i);
          break;
        case Uo.Literal:
          (e.constant = !0), (e.toWatch = []);
          break;
        case Uo.UnaryExpression:
          gn(e.argument, t, s),
            (e.constant = e.argument.constant),
            (e.toWatch = e.argument.toWatch);
          break;
        case Uo.BinaryExpression:
          gn(e.left, t, s),
            gn(e.right, t, s),
            (e.constant = e.left.constant && e.right.constant),
            (e.toWatch = e.left.toWatch.concat(e.right.toWatch));
          break;
        case Uo.LogicalExpression:
          gn(e.left, t, s),
            gn(e.right, t, s),
            (e.constant = e.left.constant && e.right.constant),
            (e.toWatch = e.constant ? [] : [e]);
          break;
        case Uo.ConditionalExpression:
          gn(e.test, t, s),
            gn(e.alternate, t, s),
            gn(e.consequent, t, s),
            (e.constant =
              e.test.constant && e.alternate.constant && e.consequent.constant),
            (e.toWatch = e.constant ? [] : [e]);
          break;
        case Uo.Identifier:
          (e.constant = !1), (e.toWatch = [e]);
          break;
        case Uo.MemberExpression:
          gn(e.object, t, s),
            e.computed && gn(e.property, t, s),
            (e.constant =
              e.object.constant && (!e.computed || e.property.constant)),
            (e.toWatch = e.constant ? [] : [e]);
          break;
        case Uo.CallExpression:
          (a = !!e.filter && hn(t, e.callee.name)),
            (i = a),
            (r = []),
            o(e.arguments, function (e) {
              gn(e, t, s), (i = i && e.constant), r.push.apply(r, e.toWatch);
            }),
            (e.constant = i),
            (e.toWatch = a ? r : [e]);
          break;
        case Uo.AssignmentExpression:
          gn(e.left, t, s),
            gn(e.right, t, s),
            (e.constant = e.left.constant && e.right.constant),
            (e.toWatch = [e]);
          break;
        case Uo.ArrayExpression:
          (i = !0),
            (r = []),
            o(e.elements, function (e) {
              gn(e, t, s), (i = i && e.constant), r.push.apply(r, e.toWatch);
            }),
            (e.constant = i),
            (e.toWatch = r);
          break;
        case Uo.ObjectExpression:
          (i = !0),
            (r = []),
            o(e.properties, function (e) {
              gn(e.value, t, s),
                (i = i && e.value.constant),
                r.push.apply(r, e.value.toWatch),
                e.computed &&
                  (gn(e.key, t, !1),
                  (i = i && e.key.constant),
                  r.push.apply(r, e.key.toWatch));
            }),
            (e.constant = i),
            (e.toWatch = r);
          break;
        case Uo.ThisExpression:
        case Uo.LocalsExpression:
          (e.constant = !1), (e.toWatch = []);
      }
    }
    function vn(e) {
      if (1 === e.length) {
        var t = e[0].expression,
          n = t.toWatch;
        return 1 !== n.length ? n : n[0] !== t ? n : undefined;
      }
    }
    function yn(e) {
      return e.type === Uo.Identifier || e.type === Uo.MemberExpression;
    }
    function $n(e) {
      if (1 === e.body.length && yn(e.body[0].expression))
        return {
          type: Uo.AssignmentExpression,
          left: e.body[0].expression,
          right: { type: Uo.NGValueParameter },
          operator: "=",
        };
    }
    function bn(e) {
      return (
        0 === e.body.length ||
        (1 === e.body.length &&
          (e.body[0].expression.type === Uo.Literal ||
            e.body[0].expression.type === Uo.ArrayExpression ||
            e.body[0].expression.type === Uo.ObjectExpression))
      );
    }
    function xn(e) {
      return e.constant;
    }
    function wn(e) {
      this.$filter = e;
    }
    function Cn(e) {
      this.$filter = e;
    }
    function Sn(e, t, n) {
      (this.ast = new Uo(e, n)),
        (this.astCompiler = n.csp ? new Cn(t) : new wn(t));
    }
    function Tn(e) {
      return E(e.valueOf) ? e.valueOf() : Ho.call(e);
    }
    function kn() {
      var e,
        t,
        n = be(),
        i = { true: !0, false: !1, null: null, undefined: undefined };
      (this.addLiteral = function (e, t) {
        i[e] = t;
      }),
        (this.setIdentifierFns = function (n, i) {
          return (e = n), (t = i), this;
        }),
        (this.$get = [
          "$filter",
          function (r) {
            function a(e, t) {
              var i, o, a;
              switch (typeof e) {
                case "string":
                  if (((e = e.trim()), !(i = n[(a = e)])))
                    ":" === e.charAt(0) &&
                      ":" === e.charAt(1) &&
                      ((o = !0), (e = e.substring(2))),
                      (i = new Sn(new Fo(p), r, p).parse(e)).constant
                        ? (i.$$watchDelegate = f)
                        : o
                        ? (i.$$watchDelegate = i.literal ? c : l)
                        : i.inputs && (i.$$watchDelegate = u),
                      (n[a] = i);
                  return d(i, t);
                case "function":
                  return d(e, t);
                default:
                  return d(m, t);
              }
            }
            function s(e, t, n) {
              return null == e || null == t
                ? e === t
                : !(
                    "object" == typeof e &&
                    "object" == typeof (e = Tn(e)) &&
                    !n
                  ) &&
                    (e === t || (e != e && t != t));
            }
            function u(e, t, n, i, r) {
              var o,
                a = i.inputs;
              if (1 === a.length) {
                var u = s;
                return (
                  (a = a[0]),
                  e.$watch(
                    function (e) {
                      var t = a(e);
                      return (
                        s(t, u, a.isPure) ||
                          ((o = i(e, undefined, undefined, [t])),
                          (u = t && Tn(t))),
                        o
                      );
                    },
                    t,
                    n,
                    r
                  )
                );
              }
              for (var l = [], c = [], f = 0, d = a.length; f < d; f++)
                (l[f] = s), (c[f] = null);
              return e.$watch(
                function (e) {
                  for (var t = !1, n = 0, r = a.length; n < r; n++) {
                    var u = a[n](e);
                    (t || (t = !s(u, l[n], a[n].isPure))) &&
                      ((c[n] = u), (l[n] = u && Tn(u)));
                  }
                  return t && (o = i(e, undefined, undefined, c)), o;
                },
                t,
                n,
                r
              );
            }
            function l(e, t, n, i, r) {
              function o(e) {
                return i(e);
              }
              function a(e, n, i) {
                (l = e),
                  E(t) && t(e, n, i),
                  b(e) &&
                    i.$$postDigest(function () {
                      b(l) && s();
                    });
              }
              var s, l;
              return (s = i.inputs ? u(e, a, n, i, r) : e.$watch(o, a, n));
            }
            function c(e, t, n, i) {
              function r(e) {
                var t = !0;
                return (
                  o(e, function (e) {
                    b(e) || (t = !1);
                  }),
                  t
                );
              }
              var a, s;
              return (a = e.$watch(
                function (e) {
                  return i(e);
                },
                function (e, n, i) {
                  (s = e),
                    E(t) && t(e, n, i),
                    r(e) &&
                      i.$$postDigest(function () {
                        r(s) && a();
                      });
                },
                n
              ));
            }
            function f(e, t, n, i) {
              var r = e.$watch(
                function (e) {
                  return r(), i(e);
                },
                t,
                n
              );
              return r;
            }
            function d(e, t) {
              if (!t) return e;
              var n = e.$$watchDelegate,
                i = !1,
                r =
                  n !== c && n !== l
                    ? function (n, r, o, a) {
                        var s = i && a ? a[0] : e(n, r, o, a);
                        return t(s, n, r);
                      }
                    : function (n, i, r, o) {
                        var a = e(n, i, r, o),
                          s = t(a, n, i);
                        return b(a) ? s : a;
                      };
              return (
                (i = !e.inputs),
                n && n !== u
                  ? ((r.$$watchDelegate = n), (r.inputs = e.inputs))
                  : t.$stateful ||
                    ((r.$$watchDelegate = u),
                    (r.inputs = e.inputs ? e.inputs : [e])),
                r.inputs &&
                  (r.inputs = r.inputs.map(function (e) {
                    return e.isPure === Bo
                      ? function (t) {
                          return e(t);
                        }
                      : e;
                  })),
                r
              );
            }
            var p = {
              csp: Cr().noUnsafeEval,
              literals: U(i),
              isIdentifierStart: E(e) && e,
              isIdentifierContinue: E(t) && t,
            };
            return a;
          },
        ]);
    }
    function En() {
      var e = !0;
      (this.$get = [
        "$rootScope",
        "$exceptionHandler",
        function (t, n) {
          return _n(
            function (e) {
              t.$evalAsync(e);
            },
            n,
            e
          );
        },
      ]),
        (this.errorOnUnhandledRejections = function (t) {
          return b(t) ? ((e = t), this) : e;
        });
    }
    function An() {
      var e = !0;
      (this.$get = [
        "$browser",
        "$exceptionHandler",
        function (t, n) {
          return _n(
            function (e) {
              t.defer(e);
            },
            n,
            e
          );
        },
      ]),
        (this.errorOnUnhandledRejections = function (t) {
          return b(t) ? ((e = t), this) : e;
        });
    }
    function _n(e, t, n) {
      function r() {
        return new a();
      }
      function a() {
        var e = (this.promise = new s());
        (this.resolve = function (t) {
          d(e, t);
        }),
          (this.reject = function (t) {
            h(e, t);
          }),
          (this.notify = function (t) {
            g(e, t);
          });
      }
      function s() {
        this.$$state = { status: 0 };
      }
      function u(t) {
        var i, r, o;
        (o = t.pending), (t.processScheduled = !1), (t.pending = undefined);
        try {
          for (var a = 0, s = o.length; a < s; ++a) {
            Nn(t), (r = o[a][0]), (i = o[a][t.status]);
            try {
              E(i)
                ? d(r, i(t.value))
                : 1 === t.status
                ? d(r, t.value)
                : h(r, t.value);
            } catch (u) {
              h(r, u);
            }
          }
        } finally {
          --A, n && 0 === A && e(l);
        }
      }
      function l() {
        for (; !A && _.length; ) {
          var e = _.shift();
          if (!On(e)) {
            Nn(e);
            var n = "Possibly unhandled rejection: " + Te(e.value);
            k(e.value) ? t(e.value, n) : t(n);
          }
        }
      }
      function c(t) {
        !n ||
          t.pending ||
          2 !== t.status ||
          On(t) ||
          (0 === A && 0 === _.length && e(l), _.push(t)),
          !t.processScheduled &&
            t.pending &&
            ((t.processScheduled = !0),
            ++A,
            e(function () {
              u(t);
            }));
      }
      function d(e, t) {
        e.$$state.status ||
          (t === e
            ? m(
                e,
                T(
                  "qcycle",
                  "Expected promise to be resolved with value other than itself '{0}'",
                  t
                )
              )
            : p(e, t));
      }
      function p(e, t) {
        function n(t) {
          a || ((a = !0), p(e, t));
        }
        function i(t) {
          a || ((a = !0), m(e, t));
        }
        function r(t) {
          g(e, t);
        }
        var o,
          a = !1;
        try {
          (x(t) || E(t)) && (o = t.then),
            E(o)
              ? ((e.$$state.status = -1), o.call(t, n, i, r))
              : ((e.$$state.value = t), (e.$$state.status = 1), c(e.$$state));
        } catch (s) {
          i(s);
        }
      }
      function h(e, t) {
        e.$$state.status || m(e, t);
      }
      function m(e, t) {
        (e.$$state.value = t), (e.$$state.status = 2), c(e.$$state);
      }
      function g(n, i) {
        var r = n.$$state.pending;
        n.$$state.status <= 0 &&
          r &&
          r.length &&
          e(function () {
            for (var e, n, o = 0, a = r.length; o < a; o++) {
              (n = r[o][0]), (e = r[o][3]);
              try {
                g(n, E(e) ? e(i) : i);
              } catch (s) {
                t(s);
              }
            }
          });
      }
      function v(e) {
        var t = new s();
        return h(t, e), t;
      }
      function y(e, t, n) {
        var i = null;
        try {
          E(n) && (i = n());
        } catch (r) {
          return v(r);
        }
        return j(i)
          ? i.then(function () {
              return t(e);
            }, v)
          : t(e);
      }
      function b(e, t, n, i) {
        var r = new s();
        return d(r, e), r.then(t, n, i);
      }
      function w(e) {
        var t = new s(),
          n = 0,
          i = $r(e) ? [] : {};
        return (
          o(e, function (e, r) {
            n++,
              b(e).then(
                function (e) {
                  (i[r] = e), --n || d(t, i);
                },
                function (e) {
                  h(t, e);
                }
              );
          }),
          0 === n && d(t, i),
          t
        );
      }
      function C(e) {
        var t = r();
        return (
          o(e, function (e) {
            b(e).then(t.resolve, t.reject);
          }),
          t.promise
        );
      }
      function S(e) {
        function t(e) {
          d(i, e);
        }
        function n(e) {
          h(i, e);
        }
        if (!E(e)) throw T("norslvr", "Expected resolverFn, got '{0}'", e);
        var i = new s();
        return e(t, n), i;
      }
      var T = i("$q", TypeError),
        A = 0,
        _ = [];
      f(s.prototype, {
        then: function (e, t, n) {
          if ($(e) && $(t) && $(n)) return this;
          var i = new s();
          return (
            (this.$$state.pending = this.$$state.pending || []),
            this.$$state.pending.push([i, e, t, n]),
            this.$$state.status > 0 && c(this.$$state),
            i
          );
        },
        catch: function (e) {
          return this.then(null, e);
        },
        finally: function (e, t) {
          return this.then(
            function (t) {
              return y(t, O, e);
            },
            function (t) {
              return y(t, v, e);
            },
            t
          );
        },
      });
      var O = b;
      return (
        (S.prototype = s.prototype),
        (S.defer = r),
        (S.reject = v),
        (S.when = b),
        (S.resolve = O),
        (S.all = w),
        (S.race = C),
        S
      );
    }
    function On(e) {
      return !!e.pur;
    }
    function Nn(e) {
      e.pur = !0;
    }
    function Dn(e) {
      Nn(e.$$state);
    }
    function Mn() {
      this.$get = [
        "$window",
        "$timeout",
        function (e, t) {
          var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame,
            i =
              e.cancelAnimationFrame ||
              e.webkitCancelAnimationFrame ||
              e.webkitCancelRequestAnimationFrame,
            r = !!n,
            o = r
              ? function (e) {
                  var t = n(e);
                  return function () {
                    i(t);
                  };
                }
              : function (e) {
                  var n = t(e, 16.66, !1);
                  return function () {
                    t.cancel(n);
                  };
                };
          return (o.supported = r), o;
        },
      ];
    }
    function In() {
      function e(e) {
        function t() {
          (this.$$watchers =
            this.$$nextSibling =
            this.$$childHead =
            this.$$childTail =
              null),
            (this.$$listeners = {}),
            (this.$$listenerCount = {}),
            (this.$$watchersCount = 0),
            (this.$id = u()),
            (this.$$ChildScope = null);
        }
        return (t.prototype = e), t;
      }
      var t = 10,
        n = i("$rootScope"),
        a = null,
        s = null;
      (this.digestTtl = function (e) {
        return arguments.length && (t = e), t;
      }),
        (this.$get = [
          "$exceptionHandler",
          "$parse",
          "$browser",
          function (i, l, c) {
            function f(e) {
              e.currentScope.$$destroyed = !0;
            }
            function d(e) {
              9 === ar &&
                (e.$$childHead && d(e.$$childHead),
                e.$$nextSibling && d(e.$$nextSibling)),
                (e.$parent =
                  e.$$nextSibling =
                  e.$$prevSibling =
                  e.$$childHead =
                  e.$$childTail =
                  e.$root =
                  e.$$watchers =
                    null);
            }
            function p() {
              (this.$id = u()),
                (this.$$phase =
                  this.$parent =
                  this.$$watchers =
                  this.$$nextSibling =
                  this.$$prevSibling =
                  this.$$childHead =
                  this.$$childTail =
                    null),
                (this.$root = this),
                (this.$$destroyed = !1),
                (this.$$listeners = {}),
                (this.$$listenerCount = {}),
                (this.$$watchersCount = 0),
                (this.$$isolateBindings = null);
            }
            function h(e) {
              if (S.$$phase)
                throw n("inprog", "{0} already in progress", S.$$phase);
              S.$$phase = e;
            }
            function g() {
              S.$$phase = null;
            }
            function v(e, t) {
              do {
                e.$$watchersCount += t;
              } while ((e = e.$parent));
            }
            function y(e, t, n) {
              do {
                (e.$$listenerCount[n] -= t),
                  0 === e.$$listenerCount[n] && delete e.$$listenerCount[n];
              } while ((e = e.$parent));
            }
            function b() {}
            function w() {
              for (; A.length; )
                try {
                  A.shift()();
                } catch (e) {
                  i(e);
                }
              s = null;
            }
            function C() {
              null === s &&
                (s = c.defer(function () {
                  S.$apply(w);
                }));
            }
            p.prototype = {
              constructor: p,
              $new: function (t, n) {
                var i;
                return (
                  (n = n || this),
                  t
                    ? ((i = new p()).$root = this.$root)
                    : (this.$$ChildScope || (this.$$ChildScope = e(this)),
                      (i = new this.$$ChildScope())),
                  (i.$parent = n),
                  (i.$$prevSibling = n.$$childTail),
                  n.$$childHead
                    ? ((n.$$childTail.$$nextSibling = i), (n.$$childTail = i))
                    : (n.$$childHead = n.$$childTail = i),
                  (t || n !== this) && i.$on("$destroy", f),
                  i
                );
              },
              $watch: function (e, t, n, i) {
                var r = l(e);
                if (r.$$watchDelegate)
                  return r.$$watchDelegate(this, t, n, r, e);
                var o = this,
                  s = o.$$watchers,
                  u = { fn: t, last: b, get: r, exp: i || e, eq: !!n };
                return (
                  (a = null),
                  E(t) || (u.fn = m),
                  s || ((s = o.$$watchers = []).$$digestWatchIndex = -1),
                  s.unshift(u),
                  s.$$digestWatchIndex++,
                  v(this, 1),
                  function () {
                    var e = F(s, u);
                    e >= 0 &&
                      (v(o, -1),
                      e < s.$$digestWatchIndex && s.$$digestWatchIndex--),
                      (a = null);
                  }
                );
              },
              $watchGroup: function (e, t) {
                function n() {
                  (u = !1), l ? ((l = !1), t(r, r, s)) : t(r, i, s);
                }
                var i = new Array(e.length),
                  r = new Array(e.length),
                  a = [],
                  s = this,
                  u = !1,
                  l = !0;
                if (!e.length) {
                  var c = !0;
                  return (
                    s.$evalAsync(function () {
                      c && t(r, r, s);
                    }),
                    function () {
                      c = !1;
                    }
                  );
                }
                return 1 === e.length
                  ? this.$watch(e[0], function (e, n, o) {
                      (r[0] = e), (i[0] = n), t(r, e === n ? r : i, o);
                    })
                  : (o(e, function (e, t) {
                      var o = s.$watch(e, function (e, o) {
                        (r[t] = e),
                          (i[t] = o),
                          u || ((u = !0), s.$evalAsync(n));
                      });
                      a.push(o);
                    }),
                    function () {
                      for (; a.length; ) a.shift()();
                    });
              },
              $watchCollection: function (e, t) {
                function n(e) {
                  var t, n, i, s;
                  if (!$((o = e))) {
                    if (x(o))
                      if (r(o)) {
                        a !== p && ((g = (a = p).length = 0), f++),
                          (t = o.length),
                          g !== t && (f++, (a.length = g = t));
                        for (var u = 0; u < t; u++)
                          (s = a[u]),
                            (i = o[u]),
                            (s != s && i != i) || s === i || (f++, (a[u] = i));
                      } else {
                        for (n in (a !== h && ((a = h = {}), (g = 0), f++),
                        (t = 0),
                        o))
                          tr.call(o, n) &&
                            (t++,
                            (i = o[n]),
                            (s = a[n]),
                            n in a
                              ? (s != s && i != i) ||
                                s === i ||
                                (f++, (a[n] = i))
                              : (g++, (a[n] = i), f++));
                        if (g > t)
                          for (n in (f++, a))
                            tr.call(o, n) || (g--, delete a[n]);
                      }
                    else a !== o && ((a = o), f++);
                    return f;
                  }
                }
                function i() {
                  if ((m ? ((m = !1), t(o, o, u)) : t(o, s, u), c))
                    if (x(o))
                      if (r(o)) {
                        s = new Array(o.length);
                        for (var e = 0; e < o.length; e++) s[e] = o[e];
                      } else
                        for (var n in ((s = {}), o))
                          tr.call(o, n) && (s[n] = o[n]);
                    else s = o;
                }
                n.$stateful = !0;
                var o,
                  a,
                  s,
                  u = this,
                  c = t.length > 1,
                  f = 0,
                  d = l(e, n),
                  p = [],
                  h = {},
                  m = !0,
                  g = 0;
                return this.$watch(d, i);
              },
              $digest: function () {
                var e,
                  r,
                  o,
                  u,
                  l,
                  f,
                  d,
                  p,
                  m,
                  v = t,
                  y = this,
                  $ = [];
                h("$digest"),
                  c.$$checkUrlChange(),
                  this === S && null !== s && (c.defer.cancel(s), w()),
                  (a = null);
                do {
                  (l = !1), (d = y);
                  for (var x = 0; x < T.length; x++) {
                    try {
                      (0, (m = T[x]).fn)(m.scope, m.locals);
                    } catch (C) {
                      i(C);
                    }
                    a = null;
                  }
                  T.length = 0;
                  e: do {
                    if ((u = d.$$watchers))
                      for (
                        u.$$digestWatchIndex = u.length;
                        u.$$digestWatchIndex--;

                      )
                        try {
                          if ((e = u[u.$$digestWatchIndex]))
                            if (
                              (r = (0, e.get)(d)) === (o = e.last) ||
                              (e.eq ? B(r, o) : yr(r) && yr(o))
                            ) {
                              if (e === a) {
                                l = !1;
                                break e;
                              }
                            } else
                              (l = !0),
                                (a = e),
                                (e.last = e.eq ? U(r, null) : r),
                                (0, e.fn)(r, o === b ? r : o, d),
                                v < 5 &&
                                  ($[(p = 4 - v)] || ($[p] = []),
                                  $[p].push({
                                    msg: E(e.exp)
                                      ? "fn: " +
                                        (e.exp.name || e.exp.toString())
                                      : e.exp,
                                    newVal: r,
                                    oldVal: o,
                                  }));
                        } catch (C) {
                          i(C);
                        }
                    if (
                      !(f =
                        (d.$$watchersCount && d.$$childHead) ||
                        (d !== y && d.$$nextSibling))
                    )
                      for (; d !== y && !(f = d.$$nextSibling); ) d = d.$parent;
                  } while ((d = f));
                  if ((l || T.length) && !v--)
                    throw (
                      (g(),
                      n(
                        "infdig",
                        "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",
                        t,
                        $
                      ))
                    );
                } while (l || T.length);
                for (g(); _ < k.length; )
                  try {
                    k[_++]();
                  } catch (C) {
                    i(C);
                  }
                (k.length = _ = 0), c.$$checkUrlChange();
              },
              $destroy: function () {
                if (!this.$$destroyed) {
                  var e = this.$parent;
                  for (var t in (this.$broadcast("$destroy"),
                  (this.$$destroyed = !0),
                  this === S && c.$$applicationDestroyed(),
                  v(this, -this.$$watchersCount),
                  this.$$listenerCount))
                    y(this, this.$$listenerCount[t], t);
                  e &&
                    e.$$childHead === this &&
                    (e.$$childHead = this.$$nextSibling),
                    e &&
                      e.$$childTail === this &&
                      (e.$$childTail = this.$$prevSibling),
                    this.$$prevSibling &&
                      (this.$$prevSibling.$$nextSibling = this.$$nextSibling),
                    this.$$nextSibling &&
                      (this.$$nextSibling.$$prevSibling = this.$$prevSibling),
                    (this.$destroy =
                      this.$digest =
                      this.$apply =
                      this.$evalAsync =
                      this.$applyAsync =
                        m),
                    (this.$on =
                      this.$watch =
                      this.$watchGroup =
                        function () {
                          return m;
                        }),
                    (this.$$listeners = {}),
                    (this.$$nextSibling = null),
                    d(this);
                }
              },
              $eval: function (e, t) {
                return l(e)(this, t);
              },
              $evalAsync: function (e, t) {
                S.$$phase ||
                  T.length ||
                  c.defer(function () {
                    T.length && S.$digest();
                  }),
                  T.push({ scope: this, fn: l(e), locals: t });
              },
              $$postDigest: function (e) {
                k.push(e);
              },
              $apply: function (e) {
                try {
                  h("$apply");
                  try {
                    return this.$eval(e);
                  } finally {
                    g();
                  }
                } catch (t) {
                  i(t);
                } finally {
                  try {
                    S.$digest();
                  } catch (t) {
                    throw (i(t), t);
                  }
                }
              },
              $applyAsync: function (e) {
                function t() {
                  n.$eval(e);
                }
                var n = this;
                e && A.push(t), (e = l(e)), C();
              },
              $on: function (e, t) {
                var n = this.$$listeners[e];
                n || (this.$$listeners[e] = n = []), n.push(t);
                var i = this;
                do {
                  i.$$listenerCount[e] || (i.$$listenerCount[e] = 0),
                    i.$$listenerCount[e]++;
                } while ((i = i.$parent));
                var r = this;
                return function () {
                  var i = n.indexOf(t);
                  -1 !== i && ((n[i] = null), y(r, 1, e));
                };
              },
              $emit: function (e) {
                var t,
                  n,
                  r,
                  o = [],
                  a = this,
                  s = !1,
                  u = {
                    name: e,
                    targetScope: a,
                    stopPropagation: function () {
                      s = !0;
                    },
                    preventDefault: function () {
                      u.defaultPrevented = !0;
                    },
                    defaultPrevented: !1,
                  },
                  l = z([u], arguments, 1);
                do {
                  for (
                    t = a.$$listeners[e] || o,
                      u.currentScope = a,
                      n = 0,
                      r = t.length;
                    n < r;
                    n++
                  )
                    if (t[n])
                      try {
                        t[n].apply(null, l);
                      } catch (c) {
                        i(c);
                      }
                    else t.splice(n, 1), n--, r--;
                  if (s) return (u.currentScope = null), u;
                  a = a.$parent;
                } while (a);
                return (u.currentScope = null), u;
              },
              $broadcast: function (e) {
                var t = this,
                  n = t,
                  r = t,
                  o = {
                    name: e,
                    targetScope: t,
                    preventDefault: function () {
                      o.defaultPrevented = !0;
                    },
                    defaultPrevented: !1,
                  };
                if (!t.$$listenerCount[e]) return o;
                for (var a, s, u, l = z([o], arguments, 1); (n = r); ) {
                  for (
                    o.currentScope = n,
                      s = 0,
                      u = (a = n.$$listeners[e] || []).length;
                    s < u;
                    s++
                  )
                    if (a[s])
                      try {
                        a[s].apply(null, l);
                      } catch (c) {
                        i(c);
                      }
                    else a.splice(s, 1), s--, u--;
                  if (
                    !(r =
                      (n.$$listenerCount[e] && n.$$childHead) ||
                      (n !== t && n.$$nextSibling))
                  )
                    for (; n !== t && !(r = n.$$nextSibling); ) n = n.$parent;
                }
                return (o.currentScope = null), o;
              },
            };
            var S = new p(),
              T = (S.$$asyncQueue = []),
              k = (S.$$postDigestQueue = []),
              A = (S.$$applyAsyncQueue = []),
              _ = 0;
            return S;
          },
        ]);
    }
    function jn() {
      var e = /^\s*(https?|ftp|mailto|tel|file):/,
        t = /^\s*((https?|ftp|file|blob):|data:image\/)/;
      (this.aHrefSanitizationWhitelist = function (t) {
        return b(t) ? ((e = t), this) : e;
      }),
        (this.imgSrcSanitizationWhitelist = function (e) {
          return b(e) ? ((t = e), this) : t;
        }),
        (this.$get = function () {
          return function (n, i) {
            var r,
              o = i ? t : e;
            return "" === (r = Bn(n).href) || r.match(o) ? n : "unsafe:" + r;
          };
        });
    }
    function Pn(e) {
      return e.replace(Ko, _e);
    }
    function Rn(e) {
      if ("self" === e) return e;
      if (C(e)) {
        if (e.indexOf("***") > -1)
          throw zo(
            "iwcard",
            "Illegal sequence *** in string matcher.  String: {0}",
            e
          );
        return (
          (e = wr(e)
            .replace(/\\\*\\\*/g, ".*")
            .replace(/\\\*/g, "[^:/.?&;]*")),
          new RegExp("^" + e + "$")
        );
      }
      if (A(e)) return new RegExp("^" + e.source + "$");
      throw zo(
        "imatcher",
        'Matchers may only be "self", string patterns or RegExp objects'
      );
    }
    function Ln(e) {
      var t = [];
      return (
        b(e) &&
          o(e, function (e) {
            t.push(Rn(e));
          }),
        t
      );
    }
    function Hn() {
      this.SCE_CONTEXTS = Go;
      var e = ["self"],
        t = [];
      (this.resourceUrlWhitelist = function (t) {
        return arguments.length && (e = Ln(t)), e;
      }),
        (this.resourceUrlBlacklist = function (e) {
          return arguments.length && (t = Ln(e)), t;
        }),
        (this.$get = [
          "$injector",
          function (n) {
            function i(e, t) {
              return "self" === e ? zn(t) : !!e.exec(t.href);
            }
            function r(n) {
              var r,
                o,
                a = Bn(n.toString()),
                s = !1;
              for (r = 0, o = e.length; r < o; r++)
                if (i(e[r], a)) {
                  s = !0;
                  break;
                }
              if (s)
                for (r = 0, o = t.length; r < o; r++)
                  if (i(t[r], a)) {
                    s = !1;
                    break;
                  }
              return s;
            }
            function o(e) {
              var t = function (e) {
                this.$$unwrapTrustedValue = function () {
                  return e;
                };
              };
              return (
                e && (t.prototype = new e()),
                (t.prototype.valueOf = function () {
                  return this.$$unwrapTrustedValue();
                }),
                (t.prototype.toString = function () {
                  return this.$$unwrapTrustedValue().toString();
                }),
                t
              );
            }
            function a(e, t) {
              var n = f.hasOwnProperty(e) ? f[e] : null;
              if (!n)
                throw zo(
                  "icontext",
                  "Attempted to trust a value in invalid context. Context: {0}; Value: {1}",
                  e,
                  t
                );
              if (null === t || $(t) || "" === t) return t;
              if ("string" != typeof t)
                throw zo(
                  "itype",
                  "Attempted to trust a non-string value in a content requiring a string: Context: {0}",
                  e
                );
              return new n(t);
            }
            function s(e) {
              return e instanceof c ? e.$$unwrapTrustedValue() : e;
            }
            function u(e, t) {
              if (null === t || $(t) || "" === t) return t;
              var n = f.hasOwnProperty(e) ? f[e] : null;
              if (n && t instanceof n) return t.$$unwrapTrustedValue();
              if (e === Go.RESOURCE_URL) {
                if (r(t)) return t;
                throw zo(
                  "insecurl",
                  "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",
                  t.toString()
                );
              }
              if (e === Go.HTML) return l(t);
              throw zo(
                "unsafe",
                "Attempting to use an unsafe value in a safe context."
              );
            }
            var l = function () {
              throw zo(
                "unsafe",
                "Attempting to use an unsafe value in a safe context."
              );
            };
            n.has("$sanitize") && (l = n.get("$sanitize"));
            var c = o(),
              f = {};
            return (
              (f[Go.HTML] = o(c)),
              (f[Go.CSS] = o(c)),
              (f[Go.URL] = o(c)),
              (f[Go.JS] = o(c)),
              (f[Go.RESOURCE_URL] = o(f[Go.URL])),
              { trustAs: a, getTrusted: u, valueOf: s }
            );
          },
        ]);
    }
    function qn() {
      var e = !0;
      (this.enabled = function (t) {
        return arguments.length && (e = !!t), e;
      }),
        (this.$get = [
          "$parse",
          "$sceDelegate",
          function (t, n) {
            if (e && ar < 8)
              throw zo(
                "iequirks",
                "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information."
              );
            var i = Ce(Go);
            (i.isEnabled = function () {
              return e;
            }),
              (i.trustAs = n.trustAs),
              (i.getTrusted = n.getTrusted),
              (i.valueOf = n.valueOf),
              e ||
                ((i.trustAs = i.getTrusted =
                  function (e, t) {
                    return t;
                  }),
                (i.valueOf = g)),
              (i.parseAs = function (e, n) {
                var r = t(n);
                return r.literal && r.constant
                  ? r
                  : t(n, function (t) {
                      return i.getTrusted(e, t);
                    });
              });
            var r = i.parseAs,
              a = i.getTrusted,
              s = i.trustAs;
            return (
              o(Go, function (e, t) {
                var n = nr(t);
                (i[Pn("parse_as_" + n)] = function (t) {
                  return r(e, t);
                }),
                  (i[Pn("get_trusted_" + n)] = function (t) {
                    return a(e, t);
                  }),
                  (i[Pn("trust_as_" + n)] = function (t) {
                    return s(e, t);
                  });
              }),
              i
            );
          },
        ]);
    }
    function Vn() {
      this.$get = [
        "$window",
        "$document",
        function (e, t) {
          var n = {},
            i =
              !(
                !(e.nw && e.nw.process) &&
                e.chrome &&
                ((e.chrome.app && e.chrome.app.runtime) ||
                  (!e.chrome.app && e.chrome.runtime && e.chrome.runtime.id))
              ) &&
              e.history &&
              e.history.pushState,
            r = p(
              (/android (\d+)/.exec(nr((e.navigator || {}).userAgent)) || [])[1]
            ),
            o = /Boxee/i.test((e.navigator || {}).userAgent),
            a = t[0] || {},
            s = a.body && a.body.style,
            u = !1,
            l = !1;
          return (
            s &&
              ((u = !!("transition" in s || "webkitTransition" in s)),
              (l = !!("animation" in s || "webkitAnimation" in s))),
            {
              history: !(!i || r < 4 || o),
              hasEvent: function (e) {
                if ("input" === e && ar) return !1;
                if ($(n[e])) {
                  var t = a.createElement("div");
                  n[e] = "on" + e in t;
                }
                return n[e];
              },
              csp: Cr(),
              transitions: u,
              animations: l,
              android: r,
            }
          );
        },
      ];
    }
    function Fn() {
      var e;
      (this.httpOptions = function (t) {
        return t ? ((e = t), this) : e;
      }),
        (this.$get = [
          "$exceptionHandler",
          "$templateCache",
          "$http",
          "$q",
          "$sce",
          function (t, n, i, r, o) {
            function a(s, u) {
              function l(e) {
                return (
                  u ||
                    ((e = Xo(
                      "tpload",
                      "Failed to load template: {0} (HTTP status: {1} {2})",
                      s,
                      e.status,
                      e.statusText
                    )),
                    t(e)),
                  r.reject(e)
                );
              }
              a.totalPendingRequests++,
                (C(s) && !$(n.get(s))) || (s = o.getTrustedResourceUrl(s));
              var c = i.defaults && i.defaults.transformResponse;
              return (
                $r(c)
                  ? (c = c.filter(function (e) {
                      return e !== Pt;
                    }))
                  : c === Pt && (c = null),
                i
                  .get(s, f({ cache: n, transformResponse: c }, e))
                  ["finally"](function () {
                    a.totalPendingRequests--;
                  })
                  .then(function (e) {
                    return n.put(s, e.data), e.data;
                  }, l)
              );
            }
            return (a.totalPendingRequests = 0), a;
          },
        ]);
    }
    function Un() {
      this.$get = [
        "$rootScope",
        "$browser",
        "$location",
        function (e, t, n) {
          var i = {
            findBindings: function (e, t, n) {
              var i = e.getElementsByClassName("ng-binding"),
                r = [];
              return (
                o(i, function (e) {
                  var i = gr.element(e).data("$binding");
                  i &&
                    o(i, function (i) {
                      n
                        ? new RegExp("(^|\\s)" + wr(t) + "(\\s|\\||$)").test(
                            i
                          ) && r.push(e)
                        : -1 !== i.indexOf(t) && r.push(e);
                    });
                }),
                r
              );
            },
            findModels: function (e, t, n) {
              for (
                var i = ["ng-", "data-ng-", "ng\\:"], r = 0;
                r < i.length;
                ++r
              ) {
                var o = n ? "=" : "*=",
                  a = "[" + i[r] + "model" + o + '"' + t + '"]',
                  s = e.querySelectorAll(a);
                if (s.length) return s;
              }
            },
            getLocation: function () {
              return n.url();
            },
            setLocation: function (t) {
              t !== n.url() && (n.url(t), e.$digest());
            },
            whenStable: function (e) {
              t.notifyWhenNoOutstandingRequests(e);
            },
          };
          return i;
        },
      ];
    }
    function Wn() {
      this.$get = [
        "$rootScope",
        "$browser",
        "$q",
        "$$q",
        "$exceptionHandler",
        function (e, t, n, i, r) {
          function o(o, s, u) {
            E(o) || ((u = s), (s = o), (o = m));
            var l,
              c = G(arguments, 3),
              f = b(u) && !u,
              d = (f ? i : n).defer(),
              p = d.promise;
            return (
              (l = t.defer(function () {
                try {
                  d.resolve(o.apply(null, c));
                } catch (t) {
                  d.reject(t), r(t);
                } finally {
                  delete a[p.$$timeoutId];
                }
                f || e.$apply();
              }, s)),
              (p.$$timeoutId = l),
              (a[l] = d),
              p
            );
          }
          var a = {};
          return (
            (o.cancel = function (e) {
              return (
                !!(e && e.$$timeoutId in a) &&
                (Dn(a[e.$$timeoutId].promise),
                a[e.$$timeoutId].reject("canceled"),
                delete a[e.$$timeoutId],
                t.defer.cancel(e.$$timeoutId))
              );
            }),
            o
          );
        },
      ];
    }
    function Bn(e) {
      var t = e;
      return (
        ar && (Qo.setAttribute("href", t), (t = Qo.href)),
        Qo.setAttribute("href", t),
        {
          href: Qo.href,
          protocol: Qo.protocol ? Qo.protocol.replace(/:$/, "") : "",
          host: Qo.host,
          search: Qo.search ? Qo.search.replace(/^\?/, "") : "",
          hash: Qo.hash ? Qo.hash.replace(/^#/, "") : "",
          hostname: Qo.hostname,
          port: Qo.port,
          pathname:
            "/" === Qo.pathname.charAt(0) ? Qo.pathname : "/" + Qo.pathname,
        }
      );
    }
    function zn(e) {
      var t = C(e) ? Bn(e) : e;
      return t.protocol === Yo.protocol && t.host === Yo.host;
    }
    function Gn() {
      this.$get = v(e);
    }
    function Kn(e) {
      function t(e) {
        try {
          return e.cookie || "";
        } catch (t) {
          return "";
        }
      }
      function n(e) {
        try {
          return decodeURIComponent(e);
        } catch (t) {
          return e;
        }
      }
      var i = e[0] || {},
        r = {},
        o = "";
      return function () {
        var e,
          a,
          s,
          u,
          l,
          c = t(i);
        if (c !== o)
          for (e = (o = c).split("; "), r = {}, s = 0; s < e.length; s++)
            (u = (a = e[s]).indexOf("=")) > 0 &&
              ((l = n(a.substring(0, u))),
              $(r[l]) && (r[l] = n(a.substring(u + 1))));
        return r;
      };
    }
    function Xn() {
      this.$get = Kn;
    }
    function Qn(e) {
      function t(i, r) {
        if (x(i)) {
          var a = {};
          return (
            o(i, function (e, n) {
              a[n] = t(n, e);
            }),
            a
          );
        }
        return e.factory(i + n, r);
      }
      var n = "Filter";
      (this.register = t),
        (this.$get = [
          "$injector",
          function (e) {
            return function (t) {
              return e.get(t + n);
            };
          },
        ]),
        t("currency", ti),
        t("date", gi),
        t("filter", Yn),
        t("json", vi),
        t("limitTo", yi),
        t("lowercase", ra),
        t("number", ni),
        t("orderBy", bi),
        t("uppercase", oa);
    }
    function Yn() {
      return function (e, t, n, o) {
        if (!r(e)) {
          if (null == e) return e;
          throw i("filter")("notarray", "Expected array but received: {0}", e);
        }
        var a, s;
        switch (((o = o || "$"), ei(t))) {
          case "function":
            a = t;
            break;
          case "boolean":
          case "null":
          case "number":
          case "string":
            s = !0;
          case "object":
            a = Jn(t, n, o, s);
            break;
          default:
            return e;
        }
        return Array.prototype.filter.call(e, a);
      };
    }
    function Jn(e, t, n, i) {
      var r = x(e) && n in e;
      return (
        !0 === t
          ? (t = B)
          : E(t) ||
            (t = function (e, t) {
              return (
                !$(e) &&
                (null === e || null === t
                  ? e === t
                  : !(x(t) || (x(e) && !y(e))) &&
                    ((e = nr("" + e)), (t = nr("" + t)), -1 !== e.indexOf(t)))
              );
            }),
        function (o) {
          return r && !x(o) ? Zn(o, e[n], t, n, !1) : Zn(o, e, t, n, i);
        }
      );
    }
    function Zn(e, t, n, i, r, o) {
      var a = ei(e),
        s = ei(t);
      if ("string" === s && "!" === t.charAt(0))
        return !Zn(e, t.substring(1), n, i, r);
      if ($r(e))
        return e.some(function (e) {
          return Zn(e, t, n, i, r);
        });
      switch (a) {
        case "object":
          var u;
          if (r) {
            for (u in e)
              if (u.charAt && "$" !== u.charAt(0) && Zn(e[u], t, n, i, !0))
                return !0;
            return !o && Zn(e, t, n, i, !1);
          }
          if ("object" === s) {
            for (u in t) {
              var l = t[u];
              if (!E(l) && !$(l)) {
                var c = u === i;
                if (!Zn(c ? e : e[u], l, n, i, c, c)) return !1;
              }
            }
            return !0;
          }
          return n(e, t);
        case "function":
          return !1;
        default:
          return n(e, t);
      }
    }
    function ei(e) {
      return null === e ? "null" : typeof e;
    }
    function ti(e) {
      var t = e.NUMBER_FORMATS;
      return function (e, n, i) {
        return (
          $(n) && (n = t.CURRENCY_SYM),
          $(i) && (i = t.PATTERNS[1].maxFrac),
          null == e
            ? e
            : oi(e, t.PATTERNS[1], t.GROUP_SEP, t.DECIMAL_SEP, i).replace(
                /\u00A4/g,
                n
              )
        );
      };
    }
    function ni(e) {
      var t = e.NUMBER_FORMATS;
      return function (e, n) {
        return null == e
          ? e
          : oi(e, t.PATTERNS[0], t.GROUP_SEP, t.DECIMAL_SEP, n);
      };
    }
    function ii(e) {
      var t,
        n,
        i,
        r,
        o,
        a = 0;
      for (
        (n = e.indexOf(Zo)) > -1 && (e = e.replace(Zo, "")),
          (i = e.search(/e/i)) > 0
            ? (n < 0 && (n = i),
              (n += +e.slice(i + 1)),
              (e = e.substring(0, i)))
            : n < 0 && (n = e.length),
          i = 0;
        e.charAt(i) === ea;
        i++
      );
      if (i === (o = e.length)) (t = [0]), (n = 1);
      else {
        for (o--; e.charAt(o) === ea; ) o--;
        for (n -= i, t = [], r = 0; i <= o; i++, r++) t[r] = +e.charAt(i);
      }
      return (
        n > Jo && ((t = t.splice(0, Jo - 1)), (a = n - 1), (n = 1)),
        { d: t, e: a, i: n }
      );
    }
    function ri(e, t, n, i) {
      var r = e.d,
        o = r.length - e.i,
        a = (t = $(t) ? Math.min(Math.max(n, o), i) : +t) + e.i,
        s = r[a];
      if (a > 0) {
        r.splice(Math.max(e.i, a));
        for (var u = a; u < r.length; u++) r[u] = 0;
      } else {
        (o = Math.max(0, o)),
          (e.i = 1),
          (r.length = Math.max(1, (a = t + 1))),
          (r[0] = 0);
        for (var l = 1; l < a; l++) r[l] = 0;
      }
      if (s >= 5)
        if (a - 1 < 0) {
          for (var c = 0; c > a; c--) r.unshift(0), e.i++;
          r.unshift(1), e.i++;
        } else r[a - 1]++;
      for (; o < Math.max(0, t); o++) r.push(0);
      var f = r.reduceRight(function (e, t, n, i) {
        return (t += e), (i[n] = t % 10), Math.floor(t / 10);
      }, 0);
      f && (r.unshift(f), e.i++);
    }
    function oi(e, t, n, i, r) {
      if ((!C(e) && !S(e)) || isNaN(e)) return "";
      var o,
        a = !isFinite(e),
        s = !1,
        u = Math.abs(e) + "",
        l = "";
      if (a) l = "\u221e";
      else {
        ri((o = ii(u)), r, t.minFrac, t.maxFrac);
        var c = o.d,
          f = o.i,
          d = o.e,
          p = [];
        for (
          s = c.reduce(function (e, t) {
            return e && !t;
          }, !0);
          f < 0;

        )
          c.unshift(0), f++;
        f > 0 ? (p = c.splice(f, c.length)) : ((p = c), (c = [0]));
        var h = [];
        for (
          c.length >= t.lgSize &&
          h.unshift(c.splice(-t.lgSize, c.length).join(""));
          c.length > t.gSize;

        )
          h.unshift(c.splice(-t.gSize, c.length).join(""));
        c.length && h.unshift(c.join("")),
          (l = h.join(n)),
          p.length && (l += i + p.join("")),
          d && (l += "e+" + d);
      }
      return e < 0 && !s ? t.negPre + l + t.negSuf : t.posPre + l + t.posSuf;
    }
    function ai(e, t, n, i) {
      var r = "";
      for (
        (e < 0 || (i && e <= 0)) && (i ? (e = 1 - e) : ((e = -e), (r = "-"))),
          e = "" + e;
        e.length < t;

      )
        e = ea + e;
      return n && (e = e.substr(e.length - t)), r + e;
    }
    function si(e, t, n, i, r) {
      return (
        (n = n || 0),
        function (o) {
          var a = o["get" + e]();
          return (
            (n > 0 || a > -n) && (a += n),
            0 === a && -12 === n && (a = 12),
            ai(a, t, i, r)
          );
        }
      );
    }
    function ui(e, t, n) {
      return function (i, r) {
        var o = i["get" + e]();
        return r[ir((n ? "STANDALONE" : "") + (t ? "SHORT" : "") + e)][o];
      };
    }
    function li(e, t, n) {
      var i = -1 * n,
        r = i >= 0 ? "+" : "";
      return (r +=
        ai(Math[i > 0 ? "floor" : "ceil"](i / 60), 2) +
        ai(Math.abs(i % 60), 2));
    }
    function ci(e) {
      var t = new Date(e, 0, 1).getDay();
      return new Date(e, 0, (t <= 4 ? 5 : 12) - t);
    }
    function fi(e) {
      return new Date(
        e.getFullYear(),
        e.getMonth(),
        e.getDate() + (4 - e.getDay())
      );
    }
    function di(e) {
      return function (t) {
        var n = ci(t.getFullYear()),
          i = +fi(t) - +n;
        return ai(1 + Math.round(i / 6048e5), e);
      };
    }
    function pi(e, t) {
      return e.getHours() < 12 ? t.AMPMS[0] : t.AMPMS[1];
    }
    function hi(e, t) {
      return e.getFullYear() <= 0 ? t.ERAS[0] : t.ERAS[1];
    }
    function mi(e, t) {
      return e.getFullYear() <= 0 ? t.ERANAMES[0] : t.ERANAMES[1];
    }
    function gi(e) {
      function t(e) {
        var t;
        if ((t = e.match(n))) {
          var i = new Date(0),
            r = 0,
            o = 0,
            a = t[8] ? i.setUTCFullYear : i.setFullYear,
            s = t[8] ? i.setUTCHours : i.setHours;
          t[9] && ((r = p(t[9] + t[10])), (o = p(t[9] + t[11]))),
            a.call(i, p(t[1]), p(t[2]) - 1, p(t[3]));
          var u = p(t[4] || 0) - r,
            l = p(t[5] || 0) - o,
            c = p(t[6] || 0),
            f = Math.round(1e3 * parseFloat("0." + (t[7] || 0)));
          return s.call(i, u, l, c, f), i;
        }
        return e;
      }
      var n =
        /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
      return function (n, i, r) {
        var a,
          s,
          u = "",
          l = [];
        if (
          ((i = i || "mediumDate"),
          (i = e.DATETIME_FORMATS[i] || i),
          C(n) && (n = ia.test(n) ? p(n) : t(n)),
          S(n) && (n = new Date(n)),
          !T(n) || !isFinite(n.getTime()))
        )
          return n;
        for (; i; )
          (s = na.exec(i))
            ? (i = (l = z(l, s, 1)).pop())
            : (l.push(i), (i = null));
        var c = n.getTimezoneOffset();
        return (
          r && ((c = J(r, c)), (n = ee(n, r, !0))),
          o(l, function (t) {
            (a = ta[t]),
              (u += a
                ? a(n, e.DATETIME_FORMATS, c)
                : "''" === t
                ? "'"
                : t.replace(/(^'|'$)/g, "").replace(/''/g, "'"));
          }),
          u
        );
      };
    }
    function vi() {
      return function (e, t) {
        return $(t) && (t = 2), Q(e, t);
      };
    }
    function yi() {
      return function (e, t, n) {
        return (
          (t = Math.abs(Number(t)) === Infinity ? Number(t) : p(t)),
          yr(t)
            ? e
            : (S(e) && (e = e.toString()),
              r(e)
                ? ((n =
                    (n = !n || isNaN(n) ? 0 : p(n)) < 0
                      ? Math.max(0, e.length + n)
                      : n),
                  t >= 0
                    ? $i(e, n, n + t)
                    : 0 === n
                    ? $i(e, t, e.length)
                    : $i(e, Math.max(0, n + t), n))
                : e)
        );
      };
    }
    function $i(e, t, n) {
      return C(e) ? e.slice(t, n) : cr.call(e, t, n);
    }
    function bi(e) {
      function t(t) {
        return t.map(function (t) {
          var n = 1,
            i = g;
          if (E(t)) i = t;
          else if (
            C(t) &&
            (("+" !== t.charAt(0) && "-" !== t.charAt(0)) ||
              ((n = "-" === t.charAt(0) ? -1 : 1), (t = t.substring(1))),
            "" !== t && (i = e(t)).constant)
          ) {
            var r = i();
            i = function (e) {
              return e[r];
            };
          }
          return { get: i, descending: n };
        });
      }
      function n(e) {
        switch (typeof e) {
          case "number":
          case "boolean":
          case "string":
            return !0;
          default:
            return !1;
        }
      }
      function o(e) {
        return E(e.valueOf) && n((e = e.valueOf()))
          ? e
          : (y(e) && n((e = e.toString())), e);
      }
      function a(e, t) {
        var n = typeof e;
        return (
          null === e
            ? ((n = "string"), (e = "null"))
            : "object" === n && (e = o(e)),
          { value: e, type: n, index: t }
        );
      }
      function s(e, t) {
        var n = 0,
          i = e.type,
          r = t.type;
        if (i === r) {
          var o = e.value,
            a = t.value;
          "string" === i
            ? ((o = o.toLowerCase()), (a = a.toLowerCase()))
            : "object" === i && (x(o) && (o = e.index), x(a) && (a = t.index)),
            o !== a && (n = o < a ? -1 : 1);
        } else n = i < r ? -1 : 1;
        return n;
      }
      return function (e, n, o, u) {
        function l(e, t) {
          return {
            value: e,
            tieBreaker: { value: t, type: "number", index: t },
            predicateValues: f.map(function (n) {
              return a(n.get(e), t);
            }),
          };
        }
        function c(e, t) {
          for (var n = 0, i = f.length; n < i; n++) {
            var r = p(e.predicateValues[n], t.predicateValues[n]);
            if (r) return r * f[n].descending * d;
          }
          return (
            (p(e.tieBreaker, t.tieBreaker) || s(e.tieBreaker, t.tieBreaker)) * d
          );
        }
        if (null == e) return e;
        if (!r(e))
          throw i("orderBy")("notarray", "Expected array but received: {0}", e);
        $r(n) || (n = [n]), 0 === n.length && (n = ["+"]);
        var f = t(n),
          d = o ? -1 : 1,
          p = E(u) ? u : s,
          h = Array.prototype.map.call(e, l);
        return (
          h.sort(c),
          (e = h.map(function (e) {
            return e.value;
          }))
        );
      };
    }
    function xi(e) {
      return E(e) && (e = { link: e }), (e.restrict = e.restrict || "AC"), v(e);
    }
    function wi(e, t) {
      e.$name = t;
    }
    function Ci(e, t, n, i, r) {
      (this.$$controls = []),
        (this.$error = {}),
        (this.$$success = {}),
        (this.$pending = undefined),
        (this.$name = r(t.name || t.ngForm || "")(n)),
        (this.$dirty = !1),
        (this.$pristine = !0),
        (this.$valid = !0),
        (this.$invalid = !1),
        (this.$submitted = !1),
        (this.$$parentForm = ua),
        (this.$$element = e),
        (this.$$animate = i),
        Si(this);
    }
    function Si(e) {
      (e.$$classCache = {}),
        (e.$$classCache[za] = !(e.$$classCache[Ba] = e.$$element.hasClass(Ba)));
    }
    function Ti(e) {
      function t(e, t, n, i) {
        e[t] || (e[t] = {}), a(e[t], n, i);
      }
      function n(e, t, n, i) {
        e[t] && s(e[t], n, i), ki(e[t]) && (e[t] = undefined);
      }
      function i(e, t, n) {
        n && !e.$$classCache[t]
          ? (e.$$animate.addClass(e.$$element, t), (e.$$classCache[t] = !0))
          : !n &&
            e.$$classCache[t] &&
            (e.$$animate.removeClass(e.$$element, t), (e.$$classCache[t] = !1));
      }
      function r(e, t, n) {
        (t = t ? "-" + pe(t, "-") : ""),
          i(e, Ba + t, !0 === n),
          i(e, za + t, !1 === n);
      }
      var o = e.clazz,
        a = e.set,
        s = e.unset;
      o.prototype.$setValidity = function (e, o, u) {
        var l;
        $(o) ? t(this, "$pending", e, u) : n(this, "$pending", e, u),
          I(o)
            ? o
              ? (s(this.$error, e, u), a(this.$$success, e, u))
              : (a(this.$error, e, u), s(this.$$success, e, u))
            : (s(this.$error, e, u), s(this.$$success, e, u)),
          this.$pending
            ? (i(this, la, !0),
              (this.$valid = this.$invalid = undefined),
              r(this, "", null))
            : (i(this, la, !1),
              (this.$valid = ki(this.$error)),
              (this.$invalid = !this.$valid),
              r(this, "", this.$valid)),
          r(
            this,
            e,
            (l =
              this.$pending && this.$pending[e]
                ? undefined
                : !this.$error[e] && (!!this.$$success[e] || null))
          ),
          this.$$parentForm.$setValidity(e, l, this);
      };
    }
    function ki(e) {
      if (e) for (var t in e) if (e.hasOwnProperty(t)) return !1;
      return !0;
    }
    function Ei(e) {
      e.$formatters.push(function (t) {
        return e.$isEmpty(t) ? t : t.toString();
      });
    }
    function Ai(e, t, n, i, r, o) {
      _i(e, t, n, i, r, o), Ei(i);
    }
    function _i(e, t, n, i, r, o) {
      var a,
        s = nr(t[0].type);
      if (!r.android) {
        var u = !1;
        t.on("compositionstart", function () {
          u = !0;
        }),
          t.on("compositionend", function () {
            (u = !1), l();
          });
      }
      var l = function (e) {
        if ((a && (o.defer.cancel(a), (a = null)), !u)) {
          var r = t.val(),
            l = e && e.type;
          "password" === s || (n.ngTrim && "false" === n.ngTrim) || (r = xr(r)),
            (i.$viewValue !== r || ("" === r && i.$$hasNativeValidators)) &&
              i.$setViewValue(r, l);
        }
      };
      if (r.hasEvent("input")) t.on("input", l);
      else {
        var c = function (e, t, n) {
          a ||
            (a = o.defer(function () {
              (a = null), (t && t.value === n) || l(e);
            }));
        };
        t.on("keydown", function (e) {
          var t = e.keyCode;
          91 === t ||
            (15 < t && t < 19) ||
            (37 <= t && t <= 40) ||
            c(e, this, this.value);
        }),
          r.hasEvent("paste") && t.on("paste cut", c);
      }
      t.on("change", l),
        Sa[s] &&
          i.$$hasNativeValidators &&
          s === n.type &&
          t.on(Ca, function (e) {
            if (!a) {
              var t = this[er],
                n = t.badInput,
                i = t.typeMismatch;
              a = o.defer(function () {
                (a = null), (t.badInput === n && t.typeMismatch === i) || l(e);
              });
            }
          }),
        (i.$render = function () {
          var e = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
          t.val() !== e && t.val(e);
        });
    }
    function Oi(e, t) {
      if (T(e)) return e;
      if (C(e)) {
        ba.lastIndex = 0;
        var n = ba.exec(e);
        if (n) {
          var i = +n[1],
            r = +n[2],
            o = 0,
            a = 0,
            s = 0,
            u = 0,
            l = ci(i),
            c = 7 * (r - 1);
          return (
            t &&
              ((o = t.getHours()),
              (a = t.getMinutes()),
              (s = t.getSeconds()),
              (u = t.getMilliseconds())),
            new Date(i, 0, l.getDate() + c, o, a, s, u)
          );
        }
      }
      return NaN;
    }
    function Ni(e, t) {
      return function (n, i) {
        var r, a;
        if (T(n)) return n;
        if (C(n)) {
          if (
            ('"' === n.charAt(0) &&
              '"' === n.charAt(n.length - 1) &&
              (n = n.substring(1, n.length - 1)),
            ha.test(n))
          )
            return new Date(n);
          if (((e.lastIndex = 0), (r = e.exec(n))))
            return (
              r.shift(),
              (a = i
                ? {
                    yyyy: i.getFullYear(),
                    MM: i.getMonth() + 1,
                    dd: i.getDate(),
                    HH: i.getHours(),
                    mm: i.getMinutes(),
                    ss: i.getSeconds(),
                    sss: i.getMilliseconds() / 1e3,
                  }
                : { yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0, ss: 0, sss: 0 }),
              o(r, function (e, n) {
                n < t.length && (a[t[n]] = +e);
              }),
              new Date(
                a.yyyy,
                a.MM - 1,
                a.dd,
                a.HH,
                a.mm,
                a.ss || 0,
                1e3 * a.sss || 0
              )
            );
        }
        return NaN;
      };
    }
    function Di(e, t, n, i) {
      return function (r, o, a, s, u, l, c) {
        function f(e) {
          return e && !(e.getTime && e.getTime() != e.getTime());
        }
        function d(e) {
          return b(e) && !T(e) ? n(e) || undefined : e;
        }
        Mi(r, o, a, s), _i(r, o, a, s, u, l);
        var p,
          h,
          m,
          g = s && s.$options.getOption("timezone");
        ((s.$$parserName = e),
        s.$parsers.push(function (e) {
          if (s.$isEmpty(e)) return null;
          if (t.test(e)) {
            var i = n(e, p);
            return g && (i = ee(i, g)), i;
          }
          return undefined;
        }),
        s.$formatters.push(function (e) {
          if (e && !T(e)) throw Za("datefmt", "Expected `{0}` to be a date", e);
          return f(e)
            ? ((p = e) && g && (p = ee(p, g, !0)), c("date")(e, i, g))
            : ((p = null), "");
        }),
        b(a.min) || a.ngMin) &&
          ((s.$validators.min = function (e) {
            return !f(e) || $(h) || n(e) >= h;
          }),
          a.$observe("min", function (e) {
            (h = d(e)), s.$validate();
          }));
        (b(a.max) || a.ngMax) &&
          ((s.$validators.max = function (e) {
            return !f(e) || $(m) || n(e) <= m;
          }),
          a.$observe("max", function (e) {
            (m = d(e)), s.$validate();
          }));
      };
    }
    function Mi(e, t, n, i) {
      var r = t[0];
      (i.$$hasNativeValidators = x(r.validity)) &&
        i.$parsers.push(function (e) {
          var n = t.prop(er) || {};
          return n.badInput || n.typeMismatch ? undefined : e;
        });
    }
    function Ii(e) {
      (e.$$parserName = "number"),
        e.$parsers.push(function (t) {
          return e.$isEmpty(t) ? null : va.test(t) ? parseFloat(t) : undefined;
        }),
        e.$formatters.push(function (t) {
          if (!e.$isEmpty(t)) {
            if (!S(t)) throw Za("numfmt", "Expected `{0}` to be a number", t);
            t = t.toString();
          }
          return t;
        });
    }
    function ji(e) {
      return b(e) && !S(e) && (e = parseFloat(e)), yr(e) ? undefined : e;
    }
    function Pi(e) {
      return (0 | e) === e;
    }
    function Ri(e) {
      var t = e.toString(),
        n = t.indexOf(".");
      if (-1 === n) {
        if (-1 < e && e < 1) {
          var i = /e-(\d+)$/.exec(t);
          if (i) return Number(i[1]);
        }
        return 0;
      }
      return t.length - n - 1;
    }
    function Li(e, t, n) {
      var i = Number(e),
        r = !Pi(i),
        o = !Pi(t),
        a = !Pi(n);
      if (r || o || a) {
        var s = r ? Ri(i) : 0,
          u = o ? Ri(t) : 0,
          l = a ? Ri(n) : 0,
          c = Math.max(s, u, l),
          f = Math.pow(10, c);
        (i *= f),
          (t *= f),
          (n *= f),
          r && (i = Math.round(i)),
          o && (t = Math.round(t)),
          a && (n = Math.round(n));
      }
      return (i - t) % n == 0;
    }
    function Hi(e, t, n, i, r, o) {
      var a, s, u;
      (Mi(e, t, n, i),
      Ii(i),
      _i(e, t, n, i, r, o),
      (b(n.min) || n.ngMin) &&
        ((i.$validators.min = function (e) {
          return i.$isEmpty(e) || $(a) || e >= a;
        }),
        n.$observe("min", function (e) {
          (a = ji(e)), i.$validate();
        })),
      (b(n.max) || n.ngMax) &&
        ((i.$validators.max = function (e) {
          return i.$isEmpty(e) || $(s) || e <= s;
        }),
        n.$observe("max", function (e) {
          (s = ji(e)), i.$validate();
        })),
      b(n.step) || n.ngStep) &&
        ((i.$validators.step = function (e, t) {
          return i.$isEmpty(t) || $(u) || Li(t, a || 0, u);
        }),
        n.$observe("step", function (e) {
          (u = ji(e)), i.$validate();
        }));
    }
    function qi(e, t, n, i, r, o) {
      function a(e, i) {
        t.attr(e, n[e]), n.$observe(e, i);
      }
      function s(e) {
        if (((f = ji(e)), !yr(i.$modelValue)))
          if (c) {
            var n = t.val();
            f > n && ((n = f), t.val(n)), i.$setViewValue(n);
          } else i.$validate();
      }
      function u(e) {
        if (((d = ji(e)), !yr(i.$modelValue)))
          if (c) {
            var n = t.val();
            d < n && (t.val(d), (n = d < f ? f : d)), i.$setViewValue(n);
          } else i.$validate();
      }
      function l(e) {
        (p = ji(e)),
          yr(i.$modelValue) ||
            (c && i.$viewValue !== t.val()
              ? i.$setViewValue(t.val())
              : i.$validate());
      }
      Mi(e, t, n, i), Ii(i), _i(e, t, n, i, r, o);
      var c = i.$$hasNativeValidators && "range" === t[0].type,
        f = c ? 0 : undefined,
        d = c ? 100 : undefined,
        p = c ? 1 : undefined,
        h = t[0].validity,
        m = b(n.min),
        g = b(n.max),
        v = b(n.step),
        y = i.$render;
      (i.$render =
        c && b(h.rangeUnderflow) && b(h.rangeOverflow)
          ? function () {
              y(), i.$setViewValue(t.val());
            }
          : y),
        m &&
          ((i.$validators.min = c
            ? function () {
                return !0;
              }
            : function (e, t) {
                return i.$isEmpty(t) || $(f) || t >= f;
              }),
          a("min", s)),
        g &&
          ((i.$validators.max = c
            ? function () {
                return !0;
              }
            : function (e, t) {
                return i.$isEmpty(t) || $(d) || t <= d;
              }),
          a("max", u)),
        v &&
          ((i.$validators.step = c
            ? function () {
                return !h.stepMismatch;
              }
            : function (e, t) {
                return i.$isEmpty(t) || $(p) || Li(t, f || 0, p);
              }),
          a("step", l));
    }
    function Vi(e, t, n, i, r, o) {
      _i(e, t, n, i, r, o),
        Ei(i),
        (i.$$parserName = "url"),
        (i.$validators.url = function (e, t) {
          var n = e || t;
          return i.$isEmpty(n) || ma.test(n);
        });
    }
    function Fi(e, t, n, i, r, o) {
      _i(e, t, n, i, r, o),
        Ei(i),
        (i.$$parserName = "email"),
        (i.$validators.email = function (e, t) {
          var n = e || t;
          return i.$isEmpty(n) || ga.test(n);
        });
    }
    function Ui(e, t, n, i) {
      var r = !n.ngTrim || "false" !== xr(n.ngTrim);
      $(n.name) && t.attr("name", u());
      var o = function (e) {
        var o;
        t[0].checked &&
          ((o = n.value), r && (o = xr(o)), i.$setViewValue(o, e && e.type));
      };
      t.on("click", o),
        (i.$render = function () {
          var e = n.value;
          r && (e = xr(e)), (t[0].checked = e === i.$viewValue);
        }),
        n.$observe("value", i.$render);
    }
    function Wi(e, t, n, i, r) {
      var o;
      if (b(i)) {
        if (!(o = e(i)).constant)
          throw Za(
            "constexpr",
            "Expected constant expression for `{0}`, but saw `{1}`.",
            n,
            i
          );
        return o(t);
      }
      return r;
    }
    function Bi(e, t, n, i, r, o, a, s) {
      var u = Wi(s, e, "ngTrueValue", n.ngTrueValue, !0),
        l = Wi(s, e, "ngFalseValue", n.ngFalseValue, !1),
        c = function (e) {
          i.$setViewValue(t[0].checked, e && e.type);
        };
      t.on("click", c),
        (i.$render = function () {
          t[0].checked = i.$viewValue;
        }),
        (i.$isEmpty = function (e) {
          return !1 === e;
        }),
        i.$formatters.push(function (e) {
          return B(e, u);
        }),
        i.$parsers.push(function (e) {
          return e ? u : l;
        });
    }
    function zi(e, t) {
      function n(e, t) {
        if (!e || !e.length) return [];
        if (!t || !t.length) return e;
        var n = [];
        e: for (var i = 0; i < e.length; i++) {
          for (var r = e[i], o = 0; o < t.length; o++)
            if (r === t[o]) continue e;
          n.push(r);
        }
        return n;
      }
      function i(e) {
        return e && e.split(" ");
      }
      function r(e) {
        var t = e;
        return (
          $r(e)
            ? (t = e.map(r).join(" "))
            : x(e) &&
              (t = Object.keys(e)
                .filter(function (t) {
                  return e[t];
                })
                .join(" ")),
          t
        );
      }
      function a(e) {
        var t = e;
        if ($r(e)) t = e.map(a);
        else if (x(e)) {
          var n = !1;
          (t = Object.keys(e).filter(function (t) {
            var i = e[t];
            return !n && $(i) && (n = !0), i;
          })),
            n && t.push(undefined);
        }
        return t;
      }
      var s;
      return (
        (e = "ngClass" + e),
        [
          "$parse",
          function (u) {
            return {
              restrict: "AC",
              link: function (l, c, f) {
                function d(e) {
                  (e = m(i(e), 1)), f.$addClass(e);
                }
                function p(e) {
                  (e = m(i(e), -1)), f.$removeClass(e);
                }
                function h(e, t) {
                  var r = i(e),
                    o = i(t),
                    a = n(r, o),
                    s = n(o, r),
                    u = m(a, -1),
                    l = m(s, 1);
                  f.$addClass(l), f.$removeClass(u);
                }
                function m(e, t) {
                  var n = [];
                  return (
                    o(e, function (e) {
                      (t > 0 || S[e]) &&
                        ((S[e] = (S[e] || 0) + t),
                        S[e] === +(t > 0) && n.push(e));
                    }),
                    n.join(" ")
                  );
                }
                function g(e) {
                  e === t ? d($) : p($), (T = e);
                }
                function v(e) {
                  var t = r(e);
                  t !== $ && y(t);
                }
                function y(e) {
                  T === t && h($, e), ($ = e);
                }
                var $,
                  b = f[e].trim(),
                  x = ":" === b.charAt(0) && ":" === b.charAt(1),
                  w = u(b, x ? a : r),
                  C = x ? v : y,
                  S = c.data("$classCounts"),
                  T = !0;
                S || ((S = be()), c.data("$classCounts", S)),
                  "ngClass" !== e &&
                    (s ||
                      (s = u("$index", function (e) {
                        return 1 & e;
                      })),
                    l.$watch(s, g)),
                  l.$watch(w, C, x);
              },
            };
          },
        ]
      );
    }
    function Gi(e, t, n, i, r, o, a, s, u) {
      (this.$viewValue = Number.NaN),
        (this.$modelValue = Number.NaN),
        (this.$$rawModelValue = undefined),
        (this.$validators = {}),
        (this.$asyncValidators = {}),
        (this.$parsers = []),
        (this.$formatters = []),
        (this.$viewChangeListeners = []),
        (this.$untouched = !0),
        (this.$touched = !1),
        (this.$pristine = !0),
        (this.$dirty = !1),
        (this.$valid = !0),
        (this.$invalid = !1),
        (this.$error = {}),
        (this.$$success = {}),
        (this.$pending = undefined),
        (this.$name = u(n.name || "", !1)(e)),
        (this.$$parentForm = ua),
        (this.$options = es),
        (this.$$parsedNgModel = r(n.ngModel)),
        (this.$$parsedNgModelAssign = this.$$parsedNgModel.assign),
        (this.$$ngModelGet = this.$$parsedNgModel),
        (this.$$ngModelSet = this.$$parsedNgModelAssign),
        (this.$$pendingDebounce = null),
        (this.$$parserValid = undefined),
        (this.$$currentValidationRunId = 0),
        Object.defineProperty(this, "$$scope", { value: e }),
        (this.$$attr = n),
        (this.$$element = i),
        (this.$$animate = o),
        (this.$$timeout = a),
        (this.$$parse = r),
        (this.$$q = s),
        (this.$$exceptionHandler = t),
        Si(this),
        Ki(this);
    }
    function Ki(e) {
      e.$$scope.$watch(function (t) {
        var n = e.$$ngModelGet(t);
        if (n !== e.$modelValue && (e.$modelValue == e.$modelValue || n == n)) {
          (e.$modelValue = e.$$rawModelValue = n),
            (e.$$parserValid = undefined);
          for (var i = e.$formatters, r = i.length, o = n; r--; ) o = i[r](o);
          e.$viewValue !== o &&
            (e.$$updateEmptyClasses(o),
            (e.$viewValue = e.$$lastCommittedViewValue = o),
            e.$render(),
            e.$$runValidators(e.$modelValue, e.$viewValue, m));
        }
        return n;
      });
    }
    function Xi(e) {
      this.$$options = e;
    }
    function Qi(e, t) {
      o(t, function (t, n) {
        b(e[n]) || (e[n] = t);
      });
    }
    function Yi(e, t) {
      e.prop("selected", t), e.attr("selected", t);
    }
    var Ji = { objectMaxDepth: 5 },
      Zi = /^\/(.+)\/([a-z]*)$/,
      er = "validity",
      tr = Object.prototype.hasOwnProperty,
      nr = function (e) {
        return C(e) ? e.toLowerCase() : e;
      },
      ir = function (e) {
        return C(e) ? e.toUpperCase() : e;
      },
      rr = function (e) {
        return C(e)
          ? e.replace(/[A-Z]/g, function (e) {
              return String.fromCharCode(32 | e.charCodeAt(0));
            })
          : e;
      },
      or = function (e) {
        return C(e)
          ? e.replace(/[a-z]/g, function (e) {
              return String.fromCharCode(-33 & e.charCodeAt(0));
            })
          : e;
      };
    "i" !== "I".toLowerCase() && ((nr = rr), (ir = or));
    var ar,
      sr,
      ur,
      lr,
      cr = [].slice,
      fr = [].splice,
      dr = [].push,
      pr = Object.prototype.toString,
      hr = Object.getPrototypeOf,
      mr = i("ng"),
      gr = e.angular || (e.angular = {}),
      vr = 0;
    ar = e.document.documentMode;
    var yr =
      Number.isNaN ||
      function (e) {
        return e != e;
      };
    (m.$inject = []), (g.$inject = []);
    var $r = Array.isArray,
      br =
        /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
      xr = function (e) {
        return C(e) ? e.trim() : e;
      },
      wr = function (e) {
        return e
          .replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, "\\$1")
          .replace(/\x08/g, "\\x08");
      },
      Cr = function () {
        function t() {
          try {
            return new Function(""), !1;
          } catch (e) {
            return !0;
          }
        }
        if (!b(Cr.rules)) {
          var n =
            e.document.querySelector("[ng-csp]") ||
            e.document.querySelector("[data-ng-csp]");
          if (n) {
            var i = n.getAttribute("ng-csp") || n.getAttribute("data-ng-csp");
            Cr.rules = {
              noUnsafeEval: !i || -1 !== i.indexOf("no-unsafe-eval"),
              noInlineStyle: !i || -1 !== i.indexOf("no-inline-style"),
            };
          } else Cr.rules = { noUnsafeEval: t(), noInlineStyle: !1 };
        }
        return Cr.rules;
      },
      Sr = function () {
        if (b(Sr.name_)) return Sr.name_;
        var t,
          n,
          i,
          r,
          o = kr.length;
        for (n = 0; n < o; ++n)
          if (
            ((i = kr[n]),
            (t = e.document.querySelector("[" + i.replace(":", "\\:") + "jq]")))
          ) {
            r = t.getAttribute(i + "jq");
            break;
          }
        return (Sr.name_ = r);
      },
      Tr = /:/g,
      kr = ["ng-", "data-ng-", "ng:", "x-ng-"],
      Er = ue(e.document),
      Ar = /[A-Z]/g,
      _r = !1,
      Or = 1,
      Nr = 2,
      Dr = 3,
      Mr = 8,
      Ir = 9,
      jr = 11,
      Pr = {
        full: "1.6.6",
        major: 1,
        minor: 6,
        dot: 6,
        codeName: "interdimensional-cable",
      };
    Re.expando = "ng339";
    var Rr = (Re.cache = {}),
      Lr = 1;
    Re._data = function (e) {
      return this.cache[e[this.expando]] || {};
    };
    var Hr = /-([a-z])/g,
      qr = /^-ms-/,
      Vr = { mouseleave: "mouseout", mouseenter: "mouseover" },
      Fr = i("jqLite"),
      Ur = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      Wr = /<|&#?\w+;/,
      Br = /<([\w:-]+)/,
      zr =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      Gr = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Gr.optgroup = Gr.option),
      (Gr.tbody = Gr.tfoot = Gr.colgroup = Gr.caption = Gr.thead),
      (Gr.th = Gr.td);
    var Kr =
        e.Node.prototype.contains ||
        function (e) {
          return !!(16 & this.compareDocumentPosition(e));
        },
      Xr = (Re.prototype = {
        ready: Ze,
        toString: function () {
          var e = [];
          return (
            o(this, function (t) {
              e.push("" + t);
            }),
            "[" + e.join(", ") + "]"
          );
        },
        eq: function (e) {
          return sr(e >= 0 ? this[e] : this[this.length + e]);
        },
        length: 0,
        push: dr,
        sort: [].sort,
        splice: [].splice,
      }),
      Qr = {};
    o(
      "multiple,selected,checked,disabled,readOnly,required,open".split(","),
      function (e) {
        Qr[nr(e)] = e;
      }
    );
    var Yr = {};
    o(
      "input,select,option,textarea,button,form,details".split(","),
      function (e) {
        Yr[e] = !0;
      }
    );
    var Jr = {
      ngMinlength: "minlength",
      ngMaxlength: "maxlength",
      ngMin: "min",
      ngMax: "max",
      ngPattern: "pattern",
      ngStep: "step",
    };
    o(
      {
        data: Ue,
        removeData: Ve,
        hasData: Me,
        cleanData: function (e) {
          for (var t = 0, n = e.length; t < n; t++) Ve(e[t]);
        },
      },
      function (e, t) {
        Re[t] = e;
      }
    ),
      o(
        {
          data: Ue,
          inheritedData: Xe,
          scope: function (e) {
            return (
              sr.data(e, "$scope") ||
              Xe(e.parentNode || e, ["$isolateScope", "$scope"])
            );
          },
          isolateScope: function (e) {
            return (
              sr.data(e, "$isolateScope") ||
              sr.data(e, "$isolateScopeNoTemplate")
            );
          },
          controller: Ke,
          injector: function (e) {
            return Xe(e, "$injector");
          },
          removeAttr: function (e, t) {
            e.removeAttribute(t);
          },
          hasClass: We,
          css: function (e, t, n) {
            if (((t = Ae(t)), !b(n))) return e.style[t];
            e.style[t] = n;
          },
          attr: function (e, t, n) {
            var i,
              r = e.nodeType;
            if (r !== Dr && r !== Nr && r !== Mr && e.getAttribute) {
              var o = nr(t),
                a = Qr[o];
              if (!b(n))
                return (
                  (i = e.getAttribute(t)),
                  a && null !== i && (i = o),
                  null === i ? undefined : i
                );
              null === n || (!1 === n && a)
                ? e.removeAttribute(t)
                : e.setAttribute(t, a ? o : n);
            }
          },
          prop: function (e, t, n) {
            if (!b(n)) return e[t];
            e[t] = n;
          },
          text: (function () {
            function e(e, t) {
              if ($(t)) {
                var n = e.nodeType;
                return n === Or || n === Dr ? e.textContent : "";
              }
              e.textContent = t;
            }
            return (e.$dv = ""), e;
          })(),
          val: function (e, t) {
            if ($(t)) {
              if (e.multiple && "select" === q(e)) {
                var n = [];
                return (
                  o(e.options, function (e) {
                    e.selected && n.push(e.value || e.text);
                  }),
                  n
                );
              }
              return e.value;
            }
            e.value = t;
          },
          html: function (e, t) {
            if ($(t)) return e.innerHTML;
            He(e, !0), (e.innerHTML = t);
          },
          empty: Qe,
        },
        function (e, t) {
          Re.prototype[t] = function (t, n) {
            var i,
              r,
              o = this.length;
            if (e !== Qe && $(2 === e.length && e !== We && e !== Ke ? t : n)) {
              if (x(t)) {
                for (i = 0; i < o; i++)
                  if (e === Ue) e(this[i], t);
                  else for (r in t) e(this[i], r, t[r]);
                return this;
              }
              for (
                var a = e.$dv, s = $(a) ? Math.min(o, 1) : o, u = 0;
                u < s;
                u++
              ) {
                var l = e(this[u], t, n);
                a = a ? a + l : l;
              }
              return a;
            }
            for (i = 0; i < o; i++) e(this[i], t, n);
            return this;
          };
        }
      ),
      o(
        {
          removeData: Ve,
          on: function (e, t, n, i) {
            if (b(i))
              throw Fr(
                "onargs",
                "jqLite#on() does not support the `selector` or `eventData` parameters"
              );
            if (De(e)) {
              var r = Fe(e, !0),
                o = r.events,
                a = r.handle;
              a || (a = r.handle = nt(e, o));
              for (
                var s = t.indexOf(" ") >= 0 ? t.split(" ") : [t],
                  u = s.length,
                  l = function (t, i, r) {
                    var s = o[t];
                    s ||
                      (((s = o[t] = []).specialHandlerWrapper = i),
                      "$destroy" === t || r || e.addEventListener(t, a)),
                      s.push(n);
                  };
                u--;

              )
                (t = s[u]), Vr[t] ? (l(Vr[t], rt), l(t, undefined, !0)) : l(t);
            }
          },
          off: qe,
          one: function (e, t, n) {
            (e = sr(e)).on(t, function i() {
              e.off(t, n), e.off(t, i);
            }),
              e.on(t, n);
          },
          replaceWith: function (e, t) {
            var n,
              i = e.parentNode;
            He(e),
              o(new Re(t), function (t) {
                n ? i.insertBefore(t, n.nextSibling) : i.replaceChild(t, e),
                  (n = t);
              });
          },
          children: function (e) {
            var t = [];
            return (
              o(e.childNodes, function (e) {
                e.nodeType === Or && t.push(e);
              }),
              t
            );
          },
          contents: function (e) {
            return e.contentDocument || e.childNodes || [];
          },
          append: function (e, t) {
            var n = e.nodeType;
            if (n === Or || n === jr)
              for (var i = 0, r = (t = new Re(t)).length; i < r; i++) {
                var o = t[i];
                e.appendChild(o);
              }
          },
          prepend: function (e, t) {
            if (e.nodeType === Or) {
              var n = e.firstChild;
              o(new Re(t), function (t) {
                e.insertBefore(t, n);
              });
            }
          },
          wrap: function (e, t) {
            Pe(e, sr(t).eq(0).clone()[0]);
          },
          remove: Ye,
          detach: function (e) {
            Ye(e, !0);
          },
          after: function (e, t) {
            var n = e,
              i = e.parentNode;
            if (i)
              for (var r = 0, o = (t = new Re(t)).length; r < o; r++) {
                var a = t[r];
                i.insertBefore(a, n.nextSibling), (n = a);
              }
          },
          addClass: ze,
          removeClass: Be,
          toggleClass: function (e, t, n) {
            t &&
              o(t.split(" "), function (t) {
                var i = n;
                $(i) && (i = !We(e, t)), (i ? ze : Be)(e, t);
              });
          },
          parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== jr ? t : null;
          },
          next: function (e) {
            return e.nextElementSibling;
          },
          find: function (e, t) {
            return e.getElementsByTagName ? e.getElementsByTagName(t) : [];
          },
          clone: Le,
          triggerHandler: function (e, t, n) {
            var i,
              r,
              a,
              s = t.type || t,
              u = Fe(e),
              l = u && u.events,
              c = l && l[s];
            c &&
              ((i = {
                preventDefault: function () {
                  this.defaultPrevented = !0;
                },
                isDefaultPrevented: function () {
                  return !0 === this.defaultPrevented;
                },
                stopImmediatePropagation: function () {
                  this.immediatePropagationStopped = !0;
                },
                isImmediatePropagationStopped: function () {
                  return !0 === this.immediatePropagationStopped;
                },
                stopPropagation: m,
                type: s,
                target: e,
              }),
              t.type && (i = f(i, t)),
              (r = Ce(c)),
              (a = n ? [i].concat(n) : [i]),
              o(r, function (t) {
                i.isImmediatePropagationStopped() || t.apply(e, a);
              }));
          },
        },
        function (e, t) {
          Re.prototype[t] = function (t, n, i) {
            for (var r, o = 0, a = this.length; o < a; o++)
              $(r)
                ? b((r = e(this[o], t, n, i))) && (r = sr(r))
                : Ge(r, e(this[o], t, n, i));
            return b(r) ? r : this;
          };
        }
      ),
      (Re.prototype.bind = Re.prototype.on),
      (Re.prototype.unbind = Re.prototype.off);
    var Zr = Object.create(null);
    st.prototype = {
      _idx: function (e) {
        return e === this._lastKey
          ? this._lastIndex
          : ((this._lastKey = e),
            (this._lastIndex = this._keys.indexOf(e)),
            this._lastIndex);
      },
      _transformKey: function (e) {
        return yr(e) ? Zr : e;
      },
      get: function (e) {
        e = this._transformKey(e);
        var t = this._idx(e);
        if (-1 !== t) return this._values[t];
      },
      set: function (e, t) {
        e = this._transformKey(e);
        var n = this._idx(e);
        -1 === n && (n = this._lastIndex = this._keys.length),
          (this._keys[n] = e),
          (this._values[n] = t);
      },
      delete: function (e) {
        e = this._transformKey(e);
        var t = this._idx(e);
        return (
          -1 !== t &&
          (this._keys.splice(t, 1),
          this._values.splice(t, 1),
          (this._lastKey = NaN),
          (this._lastIndex = -1),
          !0)
        );
      },
    };
    var eo = st,
      to = [
        function () {
          this.$get = [
            function () {
              return eo;
            },
          ];
        },
      ],
      no = /^([^(]+?)=>/,
      io = /^[^(]*\(\s*([^)]*)\)/m,
      ro = /,/,
      oo = /^\s*(_?)(\S+?)\1\s*$/,
      ao = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      so = i("$injector");
    dt.$$annotate = ft;
    var uo = i("$animate"),
      lo = 1,
      co = "ng-animate",
      fo = function () {
        this.$get = m;
      },
      po = function () {
        var e = new eo(),
          t = [];
        this.$get = [
          "$$AnimateRunner",
          "$rootScope",
          function (n, i) {
            function r(e, t, n) {
              var i = !1;
              return (
                t &&
                  o((t = C(t) ? t.split(" ") : $r(t) ? t : []), function (t) {
                    t && ((i = !0), (e[t] = n));
                  }),
                i
              );
            }
            function a() {
              o(t, function (t) {
                var n = e.get(t);
                if (n) {
                  var i = gt(t.attr("class")),
                    r = "",
                    a = "";
                  o(n, function (e, t) {
                    e !== !!i[t] &&
                      (e
                        ? (r += (r.length ? " " : "") + t)
                        : (a += (a.length ? " " : "") + t));
                  }),
                    o(t, function (e) {
                      r && ze(e, r), a && Be(e, a);
                    }),
                    e["delete"](t);
                }
              }),
                (t.length = 0);
            }
            function s(n, o, s) {
              var u = e.get(n) || {},
                l = r(u, o, !0),
                c = r(u, s, !1);
              (l || c) &&
                (e.set(n, u), t.push(n), 1 === t.length && i.$$postDigest(a));
            }
            return {
              enabled: m,
              on: m,
              off: m,
              pin: m,
              push: function (e, t, i, r) {
                r && r(),
                  (i = i || {}).from && e.css(i.from),
                  i.to && e.css(i.to),
                  (i.addClass || i.removeClass) &&
                    s(e, i.addClass, i.removeClass);
                var o = new n();
                return o.complete(), o;
              },
            };
          },
        ];
      },
      ho = [
        "$provide",
        function (e) {
          var t = this,
            n = null,
            i = null;
          (this.$$registeredAnimations = Object.create(null)),
            (this.register = function (n, i) {
              if (n && "." !== n.charAt(0))
                throw uo(
                  "notcsel",
                  "Expecting class selector starting with '.' got '{0}'.",
                  n
                );
              var r = n + "-animation";
              (t.$$registeredAnimations[n.substr(1)] = r), e.factory(r, i);
            }),
            (this.customFilter = function (e) {
              return 1 === arguments.length && (i = E(e) ? e : null), i;
            }),
            (this.classNameFilter = function (e) {
              if (
                1 === arguments.length &&
                (n = e instanceof RegExp ? e : null) &&
                new RegExp("[(\\s|\\/)]" + co + "[(\\s|\\/)]").test(
                  n.toString()
                )
              )
                throw (
                  ((n = null),
                  uo(
                    "nongcls",
                    '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',
                    co
                  ))
                );
              return n;
            }),
            (this.$get = [
              "$$animateQueue",
              function (e) {
                function t(e, t, n) {
                  if (n) {
                    var i = mt(n);
                    !i ||
                      i.parentNode ||
                      i.previousElementSibling ||
                      (n = null);
                  }
                  n ? n.after(e) : t.prepend(e);
                }
                return {
                  on: e.on,
                  off: e.off,
                  pin: e.pin,
                  enabled: e.enabled,
                  cancel: function (e) {
                    e.end && e.end();
                  },
                  enter: function (n, i, r, o) {
                    return (
                      (i = i && sr(i)),
                      (r = r && sr(r)),
                      t(n, (i = i || r.parent()), r),
                      e.push(n, "enter", vt(o))
                    );
                  },
                  move: function (n, i, r, o) {
                    return (
                      (i = i && sr(i)),
                      (r = r && sr(r)),
                      t(n, (i = i || r.parent()), r),
                      e.push(n, "move", vt(o))
                    );
                  },
                  leave: function (t, n) {
                    return e.push(t, "leave", vt(n), function () {
                      t.remove();
                    });
                  },
                  addClass: function (t, n, i) {
                    return (
                      ((i = vt(i)).addClass = ht(i.addclass, n)),
                      e.push(t, "addClass", i)
                    );
                  },
                  removeClass: function (t, n, i) {
                    return (
                      ((i = vt(i)).removeClass = ht(i.removeClass, n)),
                      e.push(t, "removeClass", i)
                    );
                  },
                  setClass: function (t, n, i, r) {
                    return (
                      ((r = vt(r)).addClass = ht(r.addClass, n)),
                      (r.removeClass = ht(r.removeClass, i)),
                      e.push(t, "setClass", r)
                    );
                  },
                  animate: function (t, n, i, r, o) {
                    return (
                      ((o = vt(o)).from = o.from ? f(o.from, n) : n),
                      (o.to = o.to ? f(o.to, i) : i),
                      (r = r || "ng-inline-animate"),
                      (o.tempClasses = ht(o.tempClasses, r)),
                      e.push(t, "animate", o)
                    );
                  },
                };
              },
            ]);
        },
      ],
      mo = function () {
        this.$get = [
          "$$rAF",
          function (e) {
            function t(t) {
              n.push(t),
                n.length > 1 ||
                  e(function () {
                    for (var e = 0; e < n.length; e++) n[e]();
                    n = [];
                  });
            }
            var n = [];
            return function () {
              var e = !1;
              return (
                t(function () {
                  e = !0;
                }),
                function (n) {
                  e ? n() : t(n);
                }
              );
            };
          },
        ];
      },
      go = function () {
        this.$get = [
          "$q",
          "$sniffer",
          "$$animateAsyncRun",
          "$$isDocumentHidden",
          "$timeout",
          function (e, t, n, i, r) {
            function a(e) {
              this.setHost(e);
              var t = n(),
                o = function (e) {
                  r(e, 0, !1);
                };
              (this._doneCallbacks = []),
                (this._tick = function (e) {
                  i() ? o(e) : t(e);
                }),
                (this._state = 0);
            }
            var s = 0,
              u = 1,
              l = 2;
            return (
              (a.chain = function (e, t) {
                function n() {
                  i !== e.length
                    ? e[i](function (e) {
                        !1 !== e ? (i++, n()) : t(!1);
                      })
                    : t(!0);
                }
                var i = 0;
                n();
              }),
              (a.all = function (e, t) {
                function n(n) {
                  (r = r && n), ++i === e.length && t(r);
                }
                var i = 0,
                  r = !0;
                o(e, function (e) {
                  e.done(n);
                });
              }),
              (a.prototype = {
                setHost: function (e) {
                  this.host = e || {};
                },
                done: function (e) {
                  this._state === l ? e() : this._doneCallbacks.push(e);
                },
                progress: m,
                getPromise: function () {
                  if (!this.promise) {
                    var t = this;
                    this.promise = e(function (e, n) {
                      t.done(function (t) {
                        !1 === t ? n() : e();
                      });
                    });
                  }
                  return this.promise;
                },
                then: function (e, t) {
                  return this.getPromise().then(e, t);
                },
                catch: function (e) {
                  return this.getPromise()["catch"](e);
                },
                finally: function (e) {
                  return this.getPromise()["finally"](e);
                },
                pause: function () {
                  this.host.pause && this.host.pause();
                },
                resume: function () {
                  this.host.resume && this.host.resume();
                },
                end: function () {
                  this.host.end && this.host.end(), this._resolve(!0);
                },
                cancel: function () {
                  this.host.cancel && this.host.cancel(), this._resolve(!1);
                },
                complete: function (e) {
                  var t = this;
                  t._state === s &&
                    ((t._state = u),
                    t._tick(function () {
                      t._resolve(e);
                    }));
                },
                _resolve: function (e) {
                  this._state !== l &&
                    (o(this._doneCallbacks, function (t) {
                      t(e);
                    }),
                    (this._doneCallbacks.length = 0),
                    (this._state = l));
                },
              }),
              a
            );
          },
        ];
      },
      vo = function () {
        this.$get = [
          "$$rAF",
          "$q",
          "$$AnimateRunner",
          function (e, t, n) {
            return function (t, i) {
              function r() {
                return (
                  e(function () {
                    o(), s || u.complete(), (s = !0);
                  }),
                  u
                );
              }
              function o() {
                a.addClass && (t.addClass(a.addClass), (a.addClass = null)),
                  a.removeClass &&
                    (t.removeClass(a.removeClass), (a.removeClass = null)),
                  a.to && (t.css(a.to), (a.to = null));
              }
              var a = i || {};
              a.$$prepared || (a = U(a)),
                a.cleanupStyles && (a.from = a.to = null),
                a.from && (t.css(a.from), (a.from = null));
              var s,
                u = new n();
              return { start: r, end: r };
            };
          },
        ];
      },
      yo = i("$compile"),
      $o = new wt();
    (Ct.$inject = ["$provide", "$$sanitizeUriProvider"]),
      (St.prototype.isFirstChange = function () {
        return this.previousValue === $o;
      });
    var bo = /^((?:x|data)[:\-_])/i,
      xo = /[:\-_]+(.)/g,
      wo = i("$controller"),
      Co = /^(\S+)(\s+as\s+([\w$]+))?$/,
      So = function () {
        this.$get = [
          "$document",
          function (e) {
            return function (t) {
              return (
                t
                  ? !t.nodeType && t instanceof sr && (t = t[0])
                  : (t = e[0].body),
                t.offsetWidth + 1
              );
            };
          },
        ];
      },
      To = "application/json",
      ko = { "Content-Type": To + ";charset=utf-8" },
      Eo = /^\[|^\{(?!\{)/,
      Ao = { "[": /]$/, "{": /}$/ },
      _o = /^\)]\}',?\n/,
      Oo = i("$http"),
      No = (gr.$interpolateMinErr = i("$interpolate"));
    (No.throwNoconcat = function (e) {
      throw No(
        "noconcat",
        "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",
        e
      );
    }),
      (No.interr = function (e, t) {
        return No("interr", "Can't interpolate: {0}\n{1}", e, t.toString());
      });
    var Do = function () {
        this.$get = function () {
          function e(e) {
            var t = function (e) {
              (t.data = e), (t.called = !0);
            };
            return (t.id = e), t;
          }
          var t = gr.callbacks,
            n = {};
          return {
            createCallback: function () {
              var i = "_" + (t.$$counter++).toString(36),
                r = "angular.callbacks." + i,
                o = e(i);
              return (n[r] = t[i] = o), r;
            },
            wasCalled: function (e) {
              return n[e].called;
            },
            getResponse: function (e) {
              return n[e].data;
            },
            removeCallback: function (e) {
              var i = n[e];
              delete t[i.id], delete n[e];
            },
          };
        };
      },
      Mo = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
      Io = { http: 80, https: 443, ftp: 21 },
      jo = i("$location"),
      Po = /^\s*[\\/]{2,}/,
      Ro = {
        $$absUrl: "",
        $$html5: !1,
        $$replace: !1,
        absUrl: sn("$$absUrl"),
        url: function (e) {
          if ($(e)) return this.$$url;
          var t = Mo.exec(e);
          return (
            (t[1] || "" === e) && this.path(decodeURIComponent(t[1])),
            (t[2] || t[1] || "" === e) && this.search(t[3] || ""),
            this.hash(t[5] || ""),
            this
          );
        },
        protocol: sn("$$protocol"),
        host: sn("$$host"),
        port: sn("$$port"),
        path: un("$$path", function (e) {
          return "/" === (e = null !== e ? e.toString() : "").charAt(0)
            ? e
            : "/" + e;
        }),
        search: function (e, t) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (C(e) || S(e)) (e = e.toString()), (this.$$search = ie(e));
              else {
                if (!x(e))
                  throw jo(
                    "isrcharg",
                    "The first argument of the `$location#search()` call must be a string or an object."
                  );
                o((e = U(e, {})), function (t, n) {
                  null == t && delete e[n];
                }),
                  (this.$$search = e);
              }
              break;
            default:
              $(t) || null === t
                ? delete this.$$search[e]
                : (this.$$search[e] = t);
          }
          return this.$$compose(), this;
        },
        hash: un("$$hash", function (e) {
          return null !== e ? e.toString() : "";
        }),
        replace: function () {
          return (this.$$replace = !0), this;
        },
      };
    o([an, on, rn], function (e) {
      (e.prototype = Object.create(Ro)),
        (e.prototype.state = function (t) {
          if (!arguments.length) return this.$$state;
          if (e !== rn || !this.$$html5)
            throw jo(
              "nostate",
              "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API"
            );
          return (
            (this.$$state = $(t) ? null : t),
            (this.$$urlUpdatedByLocation = !0),
            this
          );
        });
    });
    var Lo = i("$parse"),
      Ho = {}.constructor.prototype.valueOf,
      qo = be();
    o("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (e) {
      qo[e] = !0;
    });
    var Vo = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "\t",
        v: "\x0B",
        "'": "'",
        '"': '"',
      },
      Fo = function (e) {
        this.options = e;
      };
    Fo.prototype = {
      constructor: Fo,
      lex: function (e) {
        for (
          this.text = e, this.index = 0, this.tokens = [];
          this.index < this.text.length;

        ) {
          var t = this.text.charAt(this.index);
          if ('"' === t || "'" === t) this.readString(t);
          else if (
            this.isNumber(t) ||
            ("." === t && this.isNumber(this.peek()))
          )
            this.readNumber();
          else if (this.isIdentifierStart(this.peekMultichar()))
            this.readIdent();
          else if (this.is(t, "(){}[].,;:?"))
            this.tokens.push({ index: this.index, text: t }), this.index++;
          else if (this.isWhitespace(t)) this.index++;
          else {
            var n = t + this.peek(),
              i = n + this.peek(2),
              r = qo[t],
              o = qo[n],
              a = qo[i];
            if (r || o || a) {
              var s = a ? i : o ? n : t;
              this.tokens.push({ index: this.index, text: s, operator: !0 }),
                (this.index += s.length);
            } else
              this.throwError(
                "Unexpected next character ",
                this.index,
                this.index + 1
              );
          }
        }
        return this.tokens;
      },
      is: function (e, t) {
        return -1 !== t.indexOf(e);
      },
      peek: function (e) {
        var t = e || 1;
        return (
          this.index + t < this.text.length && this.text.charAt(this.index + t)
        );
      },
      isNumber: function (e) {
        return "0" <= e && e <= "9" && "string" == typeof e;
      },
      isWhitespace: function (e) {
        return (
          " " === e ||
          "\r" === e ||
          "\t" === e ||
          "\n" === e ||
          "\x0B" === e ||
          "\xa0" === e
        );
      },
      isIdentifierStart: function (e) {
        return this.options.isIdentifierStart
          ? this.options.isIdentifierStart(e, this.codePointAt(e))
          : this.isValidIdentifierStart(e);
      },
      isValidIdentifierStart: function (e) {
        return (
          ("a" <= e && e <= "z") ||
          ("A" <= e && e <= "Z") ||
          "_" === e ||
          "$" === e
        );
      },
      isIdentifierContinue: function (e) {
        return this.options.isIdentifierContinue
          ? this.options.isIdentifierContinue(e, this.codePointAt(e))
          : this.isValidIdentifierContinue(e);
      },
      isValidIdentifierContinue: function (e, t) {
        return this.isValidIdentifierStart(e, t) || this.isNumber(e);
      },
      codePointAt: function (e) {
        return 1 === e.length
          ? e.charCodeAt(0)
          : (e.charCodeAt(0) << 10) + e.charCodeAt(1) - 56613888;
      },
      peekMultichar: function () {
        var e = this.text.charAt(this.index),
          t = this.peek();
        if (!t) return e;
        var n = e.charCodeAt(0),
          i = t.charCodeAt(0);
        return n >= 55296 && n <= 56319 && i >= 56320 && i <= 57343 ? e + t : e;
      },
      isExpOperator: function (e) {
        return "-" === e || "+" === e || this.isNumber(e);
      },
      throwError: function (e, t, n) {
        n = n || this.index;
        var i = b(t)
          ? "s " + t + "-" + this.index + " [" + this.text.substring(t, n) + "]"
          : " " + n;
        throw Lo(
          "lexerr",
          "Lexer Error: {0} at column{1} in expression [{2}].",
          e,
          i,
          this.text
        );
      },
      readNumber: function () {
        for (var e = "", t = this.index; this.index < this.text.length; ) {
          var n = nr(this.text.charAt(this.index));
          if ("." === n || this.isNumber(n)) e += n;
          else {
            var i = this.peek();
            if ("e" === n && this.isExpOperator(i)) e += n;
            else if (
              this.isExpOperator(n) &&
              i &&
              this.isNumber(i) &&
              "e" === e.charAt(e.length - 1)
            )
              e += n;
            else {
              if (
                !this.isExpOperator(n) ||
                (i && this.isNumber(i)) ||
                "e" !== e.charAt(e.length - 1)
              )
                break;
              this.throwError("Invalid exponent");
            }
          }
          this.index++;
        }
        this.tokens.push({ index: t, text: e, constant: !0, value: Number(e) });
      },
      readIdent: function () {
        var e = this.index;
        for (
          this.index += this.peekMultichar().length;
          this.index < this.text.length;

        ) {
          var t = this.peekMultichar();
          if (!this.isIdentifierContinue(t)) break;
          this.index += t.length;
        }
        this.tokens.push({
          index: e,
          text: this.text.slice(e, this.index),
          identifier: !0,
        });
      },
      readString: function (e) {
        var t = this.index;
        this.index++;
        for (var n = "", i = e, r = !1; this.index < this.text.length; ) {
          var o = this.text.charAt(this.index);
          if (((i += o), r)) {
            if ("u" === o) {
              var a = this.text.substring(this.index + 1, this.index + 5);
              a.match(/[\da-f]{4}/i) ||
                this.throwError("Invalid unicode escape [\\u" + a + "]"),
                (this.index += 4),
                (n += String.fromCharCode(parseInt(a, 16)));
            } else {
              n += Vo[o] || o;
            }
            r = !1;
          } else if ("\\" === o) r = !0;
          else {
            if (o === e)
              return (
                this.index++,
                void this.tokens.push({
                  index: t,
                  text: i,
                  constant: !0,
                  value: n,
                })
              );
            n += o;
          }
          this.index++;
        }
        this.throwError("Unterminated quote", t);
      },
    };
    var Uo = function (e, t) {
      (this.lexer = e), (this.options = t);
    };
    (Uo.Program = "Program"),
      (Uo.ExpressionStatement = "ExpressionStatement"),
      (Uo.AssignmentExpression = "AssignmentExpression"),
      (Uo.ConditionalExpression = "ConditionalExpression"),
      (Uo.LogicalExpression = "LogicalExpression"),
      (Uo.BinaryExpression = "BinaryExpression"),
      (Uo.UnaryExpression = "UnaryExpression"),
      (Uo.CallExpression = "CallExpression"),
      (Uo.MemberExpression = "MemberExpression"),
      (Uo.Identifier = "Identifier"),
      (Uo.Literal = "Literal"),
      (Uo.ArrayExpression = "ArrayExpression"),
      (Uo.Property = "Property"),
      (Uo.ObjectExpression = "ObjectExpression"),
      (Uo.ThisExpression = "ThisExpression"),
      (Uo.LocalsExpression = "LocalsExpression"),
      (Uo.NGValueParameter = "NGValueParameter"),
      (Uo.prototype = {
        ast: function (e) {
          (this.text = e), (this.tokens = this.lexer.lex(e));
          var t = this.program();
          return (
            0 !== this.tokens.length &&
              this.throwError("is an unexpected token", this.tokens[0]),
            t
          );
        },
        program: function () {
          for (var e = []; ; )
            if (
              (this.tokens.length > 0 &&
                !this.peek("}", ")", ";", "]") &&
                e.push(this.expressionStatement()),
              !this.expect(";"))
            )
              return { type: Uo.Program, body: e };
        },
        expressionStatement: function () {
          return {
            type: Uo.ExpressionStatement,
            expression: this.filterChain(),
          };
        },
        filterChain: function () {
          for (var e = this.expression(); this.expect("|"); )
            e = this.filter(e);
          return e;
        },
        expression: function () {
          return this.assignment();
        },
        assignment: function () {
          var e = this.ternary();
          if (this.expect("=")) {
            if (!yn(e))
              throw Lo("lval", "Trying to assign a value to a non l-value");
            e = {
              type: Uo.AssignmentExpression,
              left: e,
              right: this.assignment(),
              operator: "=",
            };
          }
          return e;
        },
        ternary: function () {
          var e,
            t,
            n = this.logicalOR();
          return this.expect("?") &&
            ((e = this.expression()), this.consume(":"))
            ? ((t = this.expression()),
              {
                type: Uo.ConditionalExpression,
                test: n,
                alternate: e,
                consequent: t,
              })
            : n;
        },
        logicalOR: function () {
          for (var e = this.logicalAND(); this.expect("||"); )
            e = {
              type: Uo.LogicalExpression,
              operator: "||",
              left: e,
              right: this.logicalAND(),
            };
          return e;
        },
        logicalAND: function () {
          for (var e = this.equality(); this.expect("&&"); )
            e = {
              type: Uo.LogicalExpression,
              operator: "&&",
              left: e,
              right: this.equality(),
            };
          return e;
        },
        equality: function () {
          for (
            var e, t = this.relational();
            (e = this.expect("==", "!=", "===", "!=="));

          )
            t = {
              type: Uo.BinaryExpression,
              operator: e.text,
              left: t,
              right: this.relational(),
            };
          return t;
        },
        relational: function () {
          for (
            var e, t = this.additive();
            (e = this.expect("<", ">", "<=", ">="));

          )
            t = {
              type: Uo.BinaryExpression,
              operator: e.text,
              left: t,
              right: this.additive(),
            };
          return t;
        },
        additive: function () {
          for (var e, t = this.multiplicative(); (e = this.expect("+", "-")); )
            t = {
              type: Uo.BinaryExpression,
              operator: e.text,
              left: t,
              right: this.multiplicative(),
            };
          return t;
        },
        multiplicative: function () {
          for (var e, t = this.unary(); (e = this.expect("*", "/", "%")); )
            t = {
              type: Uo.BinaryExpression,
              operator: e.text,
              left: t,
              right: this.unary(),
            };
          return t;
        },
        unary: function () {
          var e;
          return (e = this.expect("+", "-", "!"))
            ? {
                type: Uo.UnaryExpression,
                operator: e.text,
                prefix: !0,
                argument: this.unary(),
              }
            : this.primary();
        },
        primary: function () {
          var e, t;
          for (
            this.expect("(")
              ? ((e = this.filterChain()), this.consume(")"))
              : this.expect("[")
              ? (e = this.arrayDeclaration())
              : this.expect("{")
              ? (e = this.object())
              : this.selfReferential.hasOwnProperty(this.peek().text)
              ? (e = U(this.selfReferential[this.consume().text]))
              : this.options.literals.hasOwnProperty(this.peek().text)
              ? (e = {
                  type: Uo.Literal,
                  value: this.options.literals[this.consume().text],
                })
              : this.peek().identifier
              ? (e = this.identifier())
              : this.peek().constant
              ? (e = this.constant())
              : this.throwError("not a primary expression", this.peek());
            (t = this.expect("(", "[", "."));

          )
            "(" === t.text
              ? ((e = {
                  type: Uo.CallExpression,
                  callee: e,
                  arguments: this.parseArguments(),
                }),
                this.consume(")"))
              : "[" === t.text
              ? ((e = {
                  type: Uo.MemberExpression,
                  object: e,
                  property: this.expression(),
                  computed: !0,
                }),
                this.consume("]"))
              : "." === t.text
              ? (e = {
                  type: Uo.MemberExpression,
                  object: e,
                  property: this.identifier(),
                  computed: !1,
                })
              : this.throwError("IMPOSSIBLE");
          return e;
        },
        filter: function (e) {
          for (
            var t = [e],
              n = {
                type: Uo.CallExpression,
                callee: this.identifier(),
                arguments: t,
                filter: !0,
              };
            this.expect(":");

          )
            t.push(this.expression());
          return n;
        },
        parseArguments: function () {
          var e = [];
          if (")" !== this.peekToken().text)
            do {
              e.push(this.filterChain());
            } while (this.expect(","));
          return e;
        },
        identifier: function () {
          var e = this.consume();
          return (
            e.identifier || this.throwError("is not a valid identifier", e),
            { type: Uo.Identifier, name: e.text }
          );
        },
        constant: function () {
          return { type: Uo.Literal, value: this.consume().value };
        },
        arrayDeclaration: function () {
          var e = [];
          if ("]" !== this.peekToken().text)
            do {
              if (this.peek("]")) break;
              e.push(this.expression());
            } while (this.expect(","));
          return this.consume("]"), { type: Uo.ArrayExpression, elements: e };
        },
        object: function () {
          var e,
            t = [];
          if ("}" !== this.peekToken().text)
            do {
              if (this.peek("}")) break;
              (e = { type: Uo.Property, kind: "init" }),
                this.peek().constant
                  ? ((e.key = this.constant()),
                    (e.computed = !1),
                    this.consume(":"),
                    (e.value = this.expression()))
                  : this.peek().identifier
                  ? ((e.key = this.identifier()),
                    (e.computed = !1),
                    this.peek(":")
                      ? (this.consume(":"), (e.value = this.expression()))
                      : (e.value = e.key))
                  : this.peek("[")
                  ? (this.consume("["),
                    (e.key = this.expression()),
                    this.consume("]"),
                    (e.computed = !0),
                    this.consume(":"),
                    (e.value = this.expression()))
                  : this.throwError("invalid key", this.peek()),
                t.push(e);
            } while (this.expect(","));
          return (
            this.consume("}"), { type: Uo.ObjectExpression, properties: t }
          );
        },
        throwError: function (e, t) {
          throw Lo(
            "syntax",
            "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",
            t.text,
            e,
            t.index + 1,
            this.text,
            this.text.substring(t.index)
          );
        },
        consume: function (e) {
          if (0 === this.tokens.length)
            throw Lo("ueoe", "Unexpected end of expression: {0}", this.text);
          var t = this.expect(e);
          return (
            t ||
              this.throwError(
                "is unexpected, expecting [" + e + "]",
                this.peek()
              ),
            t
          );
        },
        peekToken: function () {
          if (0 === this.tokens.length)
            throw Lo("ueoe", "Unexpected end of expression: {0}", this.text);
          return this.tokens[0];
        },
        peek: function (e, t, n, i) {
          return this.peekAhead(0, e, t, n, i);
        },
        peekAhead: function (e, t, n, i, r) {
          if (this.tokens.length > e) {
            var o = this.tokens[e],
              a = o.text;
            if (
              a === t ||
              a === n ||
              a === i ||
              a === r ||
              (!t && !n && !i && !r)
            )
              return o;
          }
          return !1;
        },
        expect: function (e, t, n, i) {
          var r = this.peek(e, t, n, i);
          return !!r && (this.tokens.shift(), r);
        },
        selfReferential: {
          this: { type: Uo.ThisExpression },
          $locals: { type: Uo.LocalsExpression },
        },
      });
    var Wo = 1,
      Bo = 2;
    (wn.prototype = {
      compile: function (e) {
        var t = this;
        (this.state = {
          nextId: 0,
          filters: {},
          fn: { vars: [], body: [], own: {} },
          assign: { vars: [], body: [], own: {} },
          inputs: [],
        }),
          gn(e, t.$filter);
        var n,
          i = "";
        if (((this.stage = "assign"), (n = $n(e)))) {
          this.state.computing = "assign";
          var r = this.nextId();
          this.recurse(n, r),
            this.return_(r),
            (i = "fn.assign=" + this.generateFunction("assign", "s,v,l"));
        }
        var a = vn(e.body);
        (t.stage = "inputs"),
          o(a, function (e, n) {
            var i = "fn" + n;
            (t.state[i] = { vars: [], body: [], own: {} }),
              (t.state.computing = i);
            var r = t.nextId();
            t.recurse(e, r),
              t.return_(r),
              t.state.inputs.push({ name: i, isPure: e.isPure }),
              (e.watchId = n);
          }),
          (this.state.computing = "fn"),
          (this.stage = "main"),
          this.recurse(e);
        var s =
            '"' +
            this.USE +
            " " +
            this.STRICT +
            '";\n' +
            this.filterPrefix() +
            "var fn=" +
            this.generateFunction("fn", "s,l,a,i") +
            i +
            this.watchFns() +
            "return fn;",
          u = new Function("$filter", "getStringValue", "ifDefined", "plus", s)(
            this.$filter,
            fn,
            dn,
            pn
          );
        return (this.state = this.stage = undefined), u;
      },
      USE: "use",
      STRICT: "strict",
      watchFns: function () {
        var e = [],
          t = this.state.inputs,
          n = this;
        return (
          o(t, function (t) {
            e.push("var " + t.name + "=" + n.generateFunction(t.name, "s")),
              t.isPure &&
                e.push(t.name, ".isPure=" + JSON.stringify(t.isPure) + ";");
          }),
          t.length &&
            e.push(
              "fn.inputs=[" +
                t
                  .map(function (e) {
                    return e.name;
                  })
                  .join(",") +
                "];"
            ),
          e.join("")
        );
      },
      generateFunction: function (e, t) {
        return (
          "function(" + t + "){" + this.varsPrefix(e) + this.body(e) + "};"
        );
      },
      filterPrefix: function () {
        var e = [],
          t = this;
        return (
          o(this.state.filters, function (n, i) {
            e.push(n + "=$filter(" + t.escape(i) + ")");
          }),
          e.length ? "var " + e.join(",") + ";" : ""
        );
      },
      varsPrefix: function (e) {
        return this.state[e].vars.length
          ? "var " + this.state[e].vars.join(",") + ";"
          : "";
      },
      body: function (e) {
        return this.state[e].body.join("");
      },
      recurse: function (e, t, n, i, r, a) {
        var s,
          u,
          l,
          c,
          f,
          d = this;
        if (((i = i || m), !a && b(e.watchId)))
          return (
            (t = t || this.nextId()),
            void this.if_(
              "i",
              this.lazyAssign(t, this.computedMember("i", e.watchId)),
              this.lazyRecurse(e, t, n, i, r, !0)
            )
          );
        switch (e.type) {
          case Uo.Program:
            o(e.body, function (t, n) {
              d.recurse(t.expression, undefined, undefined, function (e) {
                u = e;
              }),
                n !== e.body.length - 1
                  ? d.current().body.push(u, ";")
                  : d.return_(u);
            });
            break;
          case Uo.Literal:
            (c = this.escape(e.value)), this.assign(t, c), i(t || c);
            break;
          case Uo.UnaryExpression:
            this.recurse(e.argument, undefined, undefined, function (e) {
              u = e;
            }),
              (c = e.operator + "(" + this.ifDefined(u, 0) + ")"),
              this.assign(t, c),
              i(c);
            break;
          case Uo.BinaryExpression:
            this.recurse(e.left, undefined, undefined, function (e) {
              s = e;
            }),
              this.recurse(e.right, undefined, undefined, function (e) {
                u = e;
              }),
              (c =
                "+" === e.operator
                  ? this.plus(s, u)
                  : "-" === e.operator
                  ? this.ifDefined(s, 0) + e.operator + this.ifDefined(u, 0)
                  : "(" + s + ")" + e.operator + "(" + u + ")"),
              this.assign(t, c),
              i(c);
            break;
          case Uo.LogicalExpression:
            (t = t || this.nextId()),
              d.recurse(e.left, t),
              d.if_(
                "&&" === e.operator ? t : d.not(t),
                d.lazyRecurse(e.right, t)
              ),
              i(t);
            break;
          case Uo.ConditionalExpression:
            (t = t || this.nextId()),
              d.recurse(e.test, t),
              d.if_(
                t,
                d.lazyRecurse(e.alternate, t),
                d.lazyRecurse(e.consequent, t)
              ),
              i(t);
            break;
          case Uo.Identifier:
            (t = t || this.nextId()),
              n &&
                ((n.context =
                  "inputs" === d.stage
                    ? "s"
                    : this.assign(
                        this.nextId(),
                        this.getHasOwnProperty("l", e.name) + "?l:s"
                      )),
                (n.computed = !1),
                (n.name = e.name)),
              d.if_(
                "inputs" === d.stage || d.not(d.getHasOwnProperty("l", e.name)),
                function () {
                  d.if_("inputs" === d.stage || "s", function () {
                    r &&
                      1 !== r &&
                      d.if_(
                        d.isNull(d.nonComputedMember("s", e.name)),
                        d.lazyAssign(d.nonComputedMember("s", e.name), "{}")
                      ),
                      d.assign(t, d.nonComputedMember("s", e.name));
                  });
                },
                t && d.lazyAssign(t, d.nonComputedMember("l", e.name))
              ),
              i(t);
            break;
          case Uo.MemberExpression:
            (s = (n && (n.context = this.nextId())) || this.nextId()),
              (t = t || this.nextId()),
              d.recurse(
                e.object,
                s,
                undefined,
                function () {
                  d.if_(
                    d.notNull(s),
                    function () {
                      e.computed
                        ? ((u = d.nextId()),
                          d.recurse(e.property, u),
                          d.getStringValue(u),
                          r &&
                            1 !== r &&
                            d.if_(
                              d.not(d.computedMember(s, u)),
                              d.lazyAssign(d.computedMember(s, u), "{}")
                            ),
                          (c = d.computedMember(s, u)),
                          d.assign(t, c),
                          n && ((n.computed = !0), (n.name = u)))
                        : (r &&
                            1 !== r &&
                            d.if_(
                              d.isNull(d.nonComputedMember(s, e.property.name)),
                              d.lazyAssign(
                                d.nonComputedMember(s, e.property.name),
                                "{}"
                              )
                            ),
                          (c = d.nonComputedMember(s, e.property.name)),
                          d.assign(t, c),
                          n && ((n.computed = !1), (n.name = e.property.name)));
                    },
                    function () {
                      d.assign(t, "undefined");
                    }
                  ),
                    i(t);
                },
                !!r
              );
            break;
          case Uo.CallExpression:
            (t = t || this.nextId()),
              e.filter
                ? ((u = d.filter(e.callee.name)),
                  (l = []),
                  o(e.arguments, function (e) {
                    var t = d.nextId();
                    d.recurse(e, t), l.push(t);
                  }),
                  (c = u + "(" + l.join(",") + ")"),
                  d.assign(t, c),
                  i(t))
                : ((u = d.nextId()),
                  (s = {}),
                  (l = []),
                  d.recurse(e.callee, u, s, function () {
                    d.if_(
                      d.notNull(u),
                      function () {
                        o(e.arguments, function (t) {
                          d.recurse(
                            t,
                            e.constant ? undefined : d.nextId(),
                            undefined,
                            function (e) {
                              l.push(e);
                            }
                          );
                        }),
                          (c = s.name
                            ? d.member(s.context, s.name, s.computed) +
                              "(" +
                              l.join(",") +
                              ")"
                            : u + "(" + l.join(",") + ")"),
                          d.assign(t, c);
                      },
                      function () {
                        d.assign(t, "undefined");
                      }
                    ),
                      i(t);
                  }));
            break;
          case Uo.AssignmentExpression:
            (u = this.nextId()),
              (s = {}),
              this.recurse(
                e.left,
                undefined,
                s,
                function () {
                  d.if_(d.notNull(s.context), function () {
                    d.recurse(e.right, u),
                      (c =
                        d.member(s.context, s.name, s.computed) +
                        e.operator +
                        u),
                      d.assign(t, c),
                      i(t || c);
                  });
                },
                1
              );
            break;
          case Uo.ArrayExpression:
            (l = []),
              o(e.elements, function (t) {
                d.recurse(
                  t,
                  e.constant ? undefined : d.nextId(),
                  undefined,
                  function (e) {
                    l.push(e);
                  }
                );
              }),
              (c = "[" + l.join(",") + "]"),
              this.assign(t, c),
              i(t || c);
            break;
          case Uo.ObjectExpression:
            (l = []),
              (f = !1),
              o(e.properties, function (e) {
                e.computed && (f = !0);
              }),
              f
                ? ((t = t || this.nextId()),
                  this.assign(t, "{}"),
                  o(e.properties, function (e) {
                    e.computed
                      ? ((s = d.nextId()), d.recurse(e.key, s))
                      : (s =
                          e.key.type === Uo.Identifier
                            ? e.key.name
                            : "" + e.key.value),
                      (u = d.nextId()),
                      d.recurse(e.value, u),
                      d.assign(d.member(t, s, e.computed), u);
                  }))
                : (o(e.properties, function (t) {
                    d.recurse(
                      t.value,
                      e.constant ? undefined : d.nextId(),
                      undefined,
                      function (e) {
                        l.push(
                          d.escape(
                            t.key.type === Uo.Identifier
                              ? t.key.name
                              : "" + t.key.value
                          ) +
                            ":" +
                            e
                        );
                      }
                    );
                  }),
                  (c = "{" + l.join(",") + "}"),
                  this.assign(t, c)),
              i(t || c);
            break;
          case Uo.ThisExpression:
            this.assign(t, "s"), i(t || "s");
            break;
          case Uo.LocalsExpression:
            this.assign(t, "l"), i(t || "l");
            break;
          case Uo.NGValueParameter:
            this.assign(t, "v"), i(t || "v");
        }
      },
      getHasOwnProperty: function (e, t) {
        var n = e + "." + t,
          i = this.current().own;
        return (
          i.hasOwnProperty(n) ||
            (i[n] = this.nextId(
              !1,
              e + "&&(" + this.escape(t) + " in " + e + ")"
            )),
          i[n]
        );
      },
      assign: function (e, t) {
        if (e) return this.current().body.push(e, "=", t, ";"), e;
      },
      filter: function (e) {
        return (
          this.state.filters.hasOwnProperty(e) ||
            (this.state.filters[e] = this.nextId(!0)),
          this.state.filters[e]
        );
      },
      ifDefined: function (e, t) {
        return "ifDefined(" + e + "," + this.escape(t) + ")";
      },
      plus: function (e, t) {
        return "plus(" + e + "," + t + ")";
      },
      return_: function (e) {
        this.current().body.push("return ", e, ";");
      },
      if_: function (e, t, n) {
        if (!0 === e) t();
        else {
          var i = this.current().body;
          i.push("if(", e, "){"),
            t(),
            i.push("}"),
            n && (i.push("else{"), n(), i.push("}"));
        }
      },
      not: function (e) {
        return "!(" + e + ")";
      },
      isNull: function (e) {
        return e + "==null";
      },
      notNull: function (e) {
        return e + "!=null";
      },
      nonComputedMember: function (e, t) {
        var n = /[^$_a-zA-Z0-9]/g;
        return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t)
          ? e + "." + t
          : e + '["' + t.replace(n, this.stringEscapeFn) + '"]';
      },
      computedMember: function (e, t) {
        return e + "[" + t + "]";
      },
      member: function (e, t, n) {
        return n ? this.computedMember(e, t) : this.nonComputedMember(e, t);
      },
      getStringValue: function (e) {
        this.assign(e, "getStringValue(" + e + ")");
      },
      lazyRecurse: function (e, t, n, i, r, o) {
        var a = this;
        return function () {
          a.recurse(e, t, n, i, r, o);
        };
      },
      lazyAssign: function (e, t) {
        var n = this;
        return function () {
          n.assign(e, t);
        };
      },
      stringEscapeRegex: /[^ a-zA-Z0-9]/g,
      stringEscapeFn: function (e) {
        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
      },
      escape: function (e) {
        if (C(e))
          return (
            "'" + e.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'"
          );
        if (S(e)) return e.toString();
        if (!0 === e) return "true";
        if (!1 === e) return "false";
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        throw Lo("esc", "IMPOSSIBLE");
      },
      nextId: function (e, t) {
        var n = "v" + this.state.nextId++;
        return e || this.current().vars.push(n + (t ? "=" + t : "")), n;
      },
      current: function () {
        return this.state[this.state.computing];
      },
    }),
      (Cn.prototype = {
        compile: function (e) {
          var t,
            n,
            i = this;
          gn(e, i.$filter), (t = $n(e)) && (n = this.recurse(t));
          var r,
            a = vn(e.body);
          a &&
            ((r = []),
            o(a, function (e, t) {
              var n = i.recurse(e);
              (n.isPure = e.isPure), (e.input = n), r.push(n), (e.watchId = t);
            }));
          var s = [];
          o(e.body, function (e) {
            s.push(i.recurse(e.expression));
          });
          var u =
            0 === e.body.length
              ? m
              : 1 === e.body.length
              ? s[0]
              : function (e, t) {
                  var n;
                  return (
                    o(s, function (i) {
                      n = i(e, t);
                    }),
                    n
                  );
                };
          return (
            n &&
              (u.assign = function (e, t, i) {
                return n(e, i, t);
              }),
            r && (u.inputs = r),
            u
          );
        },
        recurse: function (e, t, n) {
          var i,
            r,
            a,
            s = this;
          if (e.input) return this.inputs(e.input, e.watchId);
          switch (e.type) {
            case Uo.Literal:
              return this.value(e.value, t);
            case Uo.UnaryExpression:
              return (
                (r = this.recurse(e.argument)), this["unary" + e.operator](r, t)
              );
            case Uo.BinaryExpression:
            case Uo.LogicalExpression:
              return (
                (i = this.recurse(e.left)),
                (r = this.recurse(e.right)),
                this["binary" + e.operator](i, r, t)
              );
            case Uo.ConditionalExpression:
              return this["ternary?:"](
                this.recurse(e.test),
                this.recurse(e.alternate),
                this.recurse(e.consequent),
                t
              );
            case Uo.Identifier:
              return s.identifier(e.name, t, n);
            case Uo.MemberExpression:
              return (
                (i = this.recurse(e.object, !1, !!n)),
                e.computed || (r = e.property.name),
                e.computed && (r = this.recurse(e.property)),
                e.computed
                  ? this.computedMember(i, r, t, n)
                  : this.nonComputedMember(i, r, t, n)
              );
            case Uo.CallExpression:
              return (
                (a = []),
                o(e.arguments, function (e) {
                  a.push(s.recurse(e));
                }),
                e.filter && (r = this.$filter(e.callee.name)),
                e.filter || (r = this.recurse(e.callee, !0)),
                e.filter
                  ? function (e, n, i, o) {
                      for (var s = [], u = 0; u < a.length; ++u)
                        s.push(a[u](e, n, i, o));
                      var l = r.apply(undefined, s, o);
                      return t
                        ? { context: undefined, name: undefined, value: l }
                        : l;
                    }
                  : function (e, n, i, o) {
                      var s,
                        u = r(e, n, i, o);
                      if (null != u.value) {
                        for (var l = [], c = 0; c < a.length; ++c)
                          l.push(a[c](e, n, i, o));
                        s = u.value.apply(u.context, l);
                      }
                      return t ? { value: s } : s;
                    }
              );
            case Uo.AssignmentExpression:
              return (
                (i = this.recurse(e.left, !0, 1)),
                (r = this.recurse(e.right)),
                function (e, n, o, a) {
                  var s = i(e, n, o, a),
                    u = r(e, n, o, a);
                  return (s.context[s.name] = u), t ? { value: u } : u;
                }
              );
            case Uo.ArrayExpression:
              return (
                (a = []),
                o(e.elements, function (e) {
                  a.push(s.recurse(e));
                }),
                function (e, n, i, r) {
                  for (var o = [], s = 0; s < a.length; ++s)
                    o.push(a[s](e, n, i, r));
                  return t ? { value: o } : o;
                }
              );
            case Uo.ObjectExpression:
              return (
                (a = []),
                o(e.properties, function (e) {
                  e.computed
                    ? a.push({
                        key: s.recurse(e.key),
                        computed: !0,
                        value: s.recurse(e.value),
                      })
                    : a.push({
                        key:
                          e.key.type === Uo.Identifier
                            ? e.key.name
                            : "" + e.key.value,
                        computed: !1,
                        value: s.recurse(e.value),
                      });
                }),
                function (e, n, i, r) {
                  for (var o = {}, s = 0; s < a.length; ++s)
                    a[s].computed
                      ? (o[a[s].key(e, n, i, r)] = a[s].value(e, n, i, r))
                      : (o[a[s].key] = a[s].value(e, n, i, r));
                  return t ? { value: o } : o;
                }
              );
            case Uo.ThisExpression:
              return function (e) {
                return t ? { value: e } : e;
              };
            case Uo.LocalsExpression:
              return function (e, n) {
                return t ? { value: n } : n;
              };
            case Uo.NGValueParameter:
              return function (e, n, i) {
                return t ? { value: i } : i;
              };
          }
        },
        "unary+": function (e, t) {
          return function (n, i, r, o) {
            var a = e(n, i, r, o);
            return (a = b(a) ? +a : 0), t ? { value: a } : a;
          };
        },
        "unary-": function (e, t) {
          return function (n, i, r, o) {
            var a = e(n, i, r, o);
            return (a = b(a) ? -a : -0), t ? { value: a } : a;
          };
        },
        "unary!": function (e, t) {
          return function (n, i, r, o) {
            var a = !e(n, i, r, o);
            return t ? { value: a } : a;
          };
        },
        "binary+": function (e, t, n) {
          return function (i, r, o, a) {
            var s = pn(e(i, r, o, a), t(i, r, o, a));
            return n ? { value: s } : s;
          };
        },
        "binary-": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a),
              u = t(i, r, o, a),
              l = (b(s) ? s : 0) - (b(u) ? u : 0);
            return n ? { value: l } : l;
          };
        },
        "binary*": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) * t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary/": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) / t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary%": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) % t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary===": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) === t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary!==": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) !== t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary==": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) == t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary!=": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) != t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary<": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) < t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary>": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) > t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary<=": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) <= t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary>=": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) >= t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary&&": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) && t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "binary||": function (e, t, n) {
          return function (i, r, o, a) {
            var s = e(i, r, o, a) || t(i, r, o, a);
            return n ? { value: s } : s;
          };
        },
        "ternary?:": function (e, t, n, i) {
          return function (r, o, a, s) {
            var u = e(r, o, a, s) ? t(r, o, a, s) : n(r, o, a, s);
            return i ? { value: u } : u;
          };
        },
        value: function (e, t) {
          return function () {
            return t ? { context: undefined, name: undefined, value: e } : e;
          };
        },
        identifier: function (e, t, n) {
          return function (i, r) {
            var o = r && e in r ? r : i;
            n && 1 !== n && o && null == o[e] && (o[e] = {});
            var a = o ? o[e] : undefined;
            return t ? { context: o, name: e, value: a } : a;
          };
        },
        computedMember: function (e, t, n, i) {
          return function (r, o, a, s) {
            var u,
              l,
              c = e(r, o, a, s);
            return (
              null != c &&
                ((u = fn((u = t(r, o, a, s)))),
                i && 1 !== i && c && !c[u] && (c[u] = {}),
                (l = c[u])),
              n ? { context: c, name: u, value: l } : l
            );
          };
        },
        nonComputedMember: function (e, t, n, i) {
          return function (r, o, a, s) {
            var u = e(r, o, a, s);
            i && 1 !== i && u && null == u[t] && (u[t] = {});
            var l = null != u ? u[t] : undefined;
            return n ? { context: u, name: t, value: l } : l;
          };
        },
        inputs: function (e, t) {
          return function (n, i, r, o) {
            return o ? o[t] : e(n, i, r);
          };
        },
      }),
      (Sn.prototype = {
        constructor: Sn,
        parse: function (e) {
          var t = this.ast.ast(e),
            n = this.astCompiler.compile(t);
          return (n.literal = bn(t)), (n.constant = xn(t)), n;
        },
      });
    var zo = i("$sce"),
      Go = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js",
      },
      Ko = /_([a-z])/g,
      Xo = i("$compile"),
      Qo = e.document.createElement("a"),
      Yo = Bn(e.location.href);
    (Kn.$inject = ["$document"]), (Qn.$inject = ["$provide"]);
    var Jo = 22,
      Zo = ".",
      ea = "0";
    (ti.$inject = ["$locale"]), (ni.$inject = ["$locale"]);
    var ta = {
        yyyy: si("FullYear", 4, 0, !1, !0),
        yy: si("FullYear", 2, 0, !0, !0),
        y: si("FullYear", 1, 0, !1, !0),
        MMMM: ui("Month"),
        MMM: ui("Month", !0),
        MM: si("Month", 2, 1),
        M: si("Month", 1, 1),
        LLLL: ui("Month", !1, !0),
        dd: si("Date", 2),
        d: si("Date", 1),
        HH: si("Hours", 2),
        H: si("Hours", 1),
        hh: si("Hours", 2, -12),
        h: si("Hours", 1, -12),
        mm: si("Minutes", 2),
        m: si("Minutes", 1),
        ss: si("Seconds", 2),
        s: si("Seconds", 1),
        sss: si("Milliseconds", 3),
        EEEE: ui("Day"),
        EEE: ui("Day", !0),
        a: pi,
        Z: li,
        ww: di(2),
        w: di(1),
        G: hi,
        GG: hi,
        GGG: hi,
        GGGG: mi,
      },
      na =
        /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
      ia = /^-?\d+$/;
    gi.$inject = ["$locale"];
    var ra = v(nr),
      oa = v(ir);
    bi.$inject = ["$parse"];
    var aa = v({
        restrict: "E",
        compile: function (e, t) {
          if (!t.href && !t.xlinkHref)
            return function (e, t) {
              if ("a" === t[0].nodeName.toLowerCase()) {
                var n =
                  "[object SVGAnimatedString]" === pr.call(t.prop("href"))
                    ? "xlink:href"
                    : "href";
                t.on("click", function (e) {
                  t.attr(n) || e.preventDefault();
                });
              }
            };
        },
      }),
      sa = {};
    o(Qr, function (e, t) {
      function n(e, n, r) {
        e.$watch(r[i], function (e) {
          r.$set(t, !!e);
        });
      }
      if ("multiple" !== e) {
        var i = Tt("ng-" + t),
          r = n;
        "checked" === e &&
          (r = function (e, t, r) {
            r.ngModel !== r[i] && n(e, t, r);
          }),
          (sa[i] = function () {
            return { restrict: "A", priority: 100, link: r };
          });
      }
    }),
      o(Jr, function (e, t) {
        sa[t] = function () {
          return {
            priority: 100,
            link: function (e, n, i) {
              if ("ngPattern" === t && "/" === i.ngPattern.charAt(0)) {
                var r = i.ngPattern.match(Zi);
                if (r) return void i.$set("ngPattern", new RegExp(r[1], r[2]));
              }
              e.$watch(i[t], function (e) {
                i.$set(t, e);
              });
            },
          };
        };
      }),
      o(["src", "srcset", "href"], function (e) {
        var t = Tt("ng-" + e);
        sa[t] = function () {
          return {
            priority: 99,
            link: function (n, i, r) {
              var o = e,
                a = e;
              "href" === e &&
                "[object SVGAnimatedString]" === pr.call(i.prop("href")) &&
                ((a = "xlinkHref"), (r.$attr[a] = "xlink:href"), (o = null)),
                r.$observe(t, function (t) {
                  t
                    ? (r.$set(a, t), ar && o && i.prop(o, r[a]))
                    : "href" === e && r.$set(a, null);
                });
            },
          };
        };
      });
    var ua = {
        $addControl: m,
        $$renameControl: wi,
        $removeControl: m,
        $setValidity: m,
        $setDirty: m,
        $setPristine: m,
        $setSubmitted: m,
      },
      la = "ng-pending",
      ca = "ng-submitted";
    (Ci.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"]),
      (Ci.prototype = {
        $rollbackViewValue: function () {
          o(this.$$controls, function (e) {
            e.$rollbackViewValue();
          });
        },
        $commitViewValue: function () {
          o(this.$$controls, function (e) {
            e.$commitViewValue();
          });
        },
        $addControl: function (e) {
          ve(e.$name, "input"),
            this.$$controls.push(e),
            e.$name && (this[e.$name] = e),
            (e.$$parentForm = this);
        },
        $$renameControl: function (e, t) {
          var n = e.$name;
          this[n] === e && delete this[n], (this[t] = e), (e.$name = t);
        },
        $removeControl: function (e) {
          e.$name && this[e.$name] === e && delete this[e.$name],
            o(
              this.$pending,
              function (t, n) {
                this.$setValidity(n, null, e);
              },
              this
            ),
            o(
              this.$error,
              function (t, n) {
                this.$setValidity(n, null, e);
              },
              this
            ),
            o(
              this.$$success,
              function (t, n) {
                this.$setValidity(n, null, e);
              },
              this
            ),
            F(this.$$controls, e),
            (e.$$parentForm = ua);
        },
        $setDirty: function () {
          this.$$animate.removeClass(this.$$element, Ga),
            this.$$animate.addClass(this.$$element, Ka),
            (this.$dirty = !0),
            (this.$pristine = !1),
            this.$$parentForm.$setDirty();
        },
        $setPristine: function () {
          this.$$animate.setClass(this.$$element, Ga, Ka + " " + ca),
            (this.$dirty = !1),
            (this.$pristine = !0),
            (this.$submitted = !1),
            o(this.$$controls, function (e) {
              e.$setPristine();
            });
        },
        $setUntouched: function () {
          o(this.$$controls, function (e) {
            e.$setUntouched();
          });
        },
        $setSubmitted: function () {
          this.$$animate.addClass(this.$$element, ca),
            (this.$submitted = !0),
            this.$$parentForm.$setSubmitted();
        },
      }),
      Ti({
        clazz: Ci,
        set: function (e, t, n) {
          var i = e[t];
          i ? -1 === i.indexOf(n) && i.push(n) : (e[t] = [n]);
        },
        unset: function (e, t, n) {
          var i = e[t];
          i && (F(i, n), 0 === i.length && delete e[t]);
        },
      });
    var fa = function (e) {
        return [
          "$timeout",
          "$parse",
          function (t, n) {
            function i(e) {
              return "" === e ? n('this[""]').assign : n(e).assign || m;
            }
            return {
              name: "form",
              restrict: e ? "EAC" : "E",
              require: ["form", "^^?form"],
              controller: Ci,
              compile: function (n, r) {
                n.addClass(Ga).addClass(Ba);
                var o = r.name ? "name" : !(!e || !r.ngForm) && "ngForm";
                return {
                  pre: function (e, n, r, a) {
                    var s = a[0];
                    if (!("action" in r)) {
                      var u = function (t) {
                        e.$apply(function () {
                          s.$commitViewValue(), s.$setSubmitted();
                        }),
                          t.preventDefault();
                      };
                      n[0].addEventListener("submit", u),
                        n.on("$destroy", function () {
                          t(
                            function () {
                              n[0].removeEventListener("submit", u);
                            },
                            0,
                            !1
                          );
                        });
                    }
                    (a[1] || s.$$parentForm).$addControl(s);
                    var l = o ? i(s.$name) : m;
                    o &&
                      (l(e, s),
                      r.$observe(o, function (t) {
                        s.$name !== t &&
                          (l(e, undefined),
                          s.$$parentForm.$$renameControl(s, t),
                          (l = i(s.$name))(e, s));
                      })),
                      n.on("$destroy", function () {
                        s.$$parentForm.$removeControl(s),
                          l(e, undefined),
                          f(s, ua);
                      });
                  },
                };
              },
            };
          },
        ];
      },
      da = fa(),
      pa = fa(!0),
      ha =
        /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      ma =
        /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      ga =
        /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      va = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      ya = /^(\d{4,})-(\d{2})-(\d{2})$/,
      $a = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      ba = /^(\d{4,})-W(\d\d)$/,
      xa = /^(\d{4,})-(\d\d)$/,
      wa = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Ca = "keydown wheel mousedown",
      Sa = be();
    o("date,datetime-local,month,time,week".split(","), function (e) {
      Sa[e] = !0;
    });
    var Ta = {
        text: Ai,
        date: Di("date", ya, Ni(ya, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": Di(
          "datetimelocal",
          $a,
          Ni($a, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]),
          "yyyy-MM-ddTHH:mm:ss.sss"
        ),
        time: Di("time", wa, Ni(wa, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: Di("week", ba, Oi, "yyyy-Www"),
        month: Di("month", xa, Ni(xa, ["yyyy", "MM"]), "yyyy-MM"),
        number: Hi,
        url: Vi,
        email: Fi,
        radio: Ui,
        range: qi,
        checkbox: Bi,
        hidden: m,
        button: m,
        submit: m,
        reset: m,
        file: m,
      },
      ka = [
        "$browser",
        "$sniffer",
        "$filter",
        "$parse",
        function (e, t, n, i) {
          return {
            restrict: "E",
            require: ["?ngModel"],
            link: {
              pre: function (r, o, a, s) {
                s[0] && (Ta[nr(a.type)] || Ta.text)(r, o, a, s[0], t, e, n, i);
              },
            },
          };
        },
      ],
      Ea = /^(true|false|\d+)$/,
      Aa = function () {
        function e(e, t, n) {
          var i = b(n) ? n : 9 === ar ? "" : null;
          e.prop("value", i), t.$set("value", n);
        }
        return {
          restrict: "A",
          priority: 100,
          compile: function (t, n) {
            return Ea.test(n.ngValue)
              ? function (t, n, i) {
                  e(n, i, t.$eval(i.ngValue));
                }
              : function (t, n, i) {
                  t.$watch(i.ngValue, function (t) {
                    e(n, i, t);
                  });
                };
          },
        };
      },
      _a = [
        "$compile",
        function (e) {
          return {
            restrict: "AC",
            compile: function (t) {
              return (
                e.$$addBindingClass(t),
                function (t, n, i) {
                  e.$$addBindingInfo(n, i.ngBind),
                    (n = n[0]),
                    t.$watch(i.ngBind, function (e) {
                      n.textContent = xe(e);
                    });
                }
              );
            },
          };
        },
      ],
      Oa = [
        "$interpolate",
        "$compile",
        function (e, t) {
          return {
            compile: function (n) {
              return (
                t.$$addBindingClass(n),
                function (n, i, r) {
                  var o = e(i.attr(r.$attr.ngBindTemplate));
                  t.$$addBindingInfo(i, o.expressions),
                    (i = i[0]),
                    r.$observe("ngBindTemplate", function (e) {
                      i.textContent = $(e) ? "" : e;
                    });
                }
              );
            },
          };
        },
      ],
      Na = [
        "$sce",
        "$parse",
        "$compile",
        function (e, t, n) {
          return {
            restrict: "A",
            compile: function (i, r) {
              var o = t(r.ngBindHtml),
                a = t(r.ngBindHtml, function (t) {
                  return e.valueOf(t);
                });
              return (
                n.$$addBindingClass(i),
                function (t, i, r) {
                  n.$$addBindingInfo(i, r.ngBindHtml),
                    t.$watch(a, function () {
                      var n = o(t);
                      i.html(e.getTrustedHtml(n) || "");
                    });
                }
              );
            },
          };
        },
      ],
      Da = v({
        restrict: "A",
        require: "ngModel",
        link: function (e, t, n, i) {
          i.$viewChangeListeners.push(function () {
            e.$eval(n.ngChange);
          });
        },
      }),
      Ma = zi("", !0),
      Ia = zi("Odd", 0),
      ja = zi("Even", 1),
      Pa = xi({
        compile: function (e, t) {
          t.$set("ngCloak", undefined), e.removeClass("ng-cloak");
        },
      }),
      Ra = [
        function () {
          return { restrict: "A", scope: !0, controller: "@", priority: 500 };
        },
      ],
      La = {},
      Ha = { blur: !0, focus: !0 };
    o(
      "click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(
        " "
      ),
      function (e) {
        var t = Tt("ng-" + e);
        La[t] = [
          "$parse",
          "$rootScope",
          function (n, i) {
            return {
              restrict: "A",
              compile: function (r, o) {
                var a = n(o[t]);
                return function (t, n) {
                  n.on(e, function (n) {
                    var r = function () {
                      a(t, { $event: n });
                    };
                    Ha[e] && i.$$phase ? t.$evalAsync(r) : t.$apply(r);
                  });
                };
              },
            };
          },
        ];
      }
    );
    var qa = [
        "$animate",
        "$compile",
        function (e, t) {
          return {
            multiElement: !0,
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function (n, i, r, o, a) {
              var s, u, l;
              n.$watch(r.ngIf, function (n) {
                n
                  ? u ||
                    a(function (n, o) {
                      (u = o),
                        (n[n.length++] = t.$$createComment("end ngIf", r.ngIf)),
                        (s = { clone: n }),
                        e.enter(n, i.parent(), i);
                    })
                  : (l && (l.remove(), (l = null)),
                    u && (u.$destroy(), (u = null)),
                    s &&
                      ((l = $e(s.clone)),
                      e.leave(l).done(function (e) {
                        !1 !== e && (l = null);
                      }),
                      (s = null)));
              });
            },
          };
        },
      ],
      Va = [
        "$templateRequest",
        "$anchorScroll",
        "$animate",
        function (e, t, n) {
          return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: gr.noop,
            compile: function (i, r) {
              var o = r.ngInclude || r.src,
                a = r.onload || "",
                s = r.autoscroll;
              return function (i, r, u, l, c) {
                var f,
                  d,
                  p,
                  h = 0,
                  m = function () {
                    d && (d.remove(), (d = null)),
                      f && (f.$destroy(), (f = null)),
                      p &&
                        (n.leave(p).done(function (e) {
                          !1 !== e && (d = null);
                        }),
                        (d = p),
                        (p = null));
                  };
                i.$watch(o, function (o) {
                  var u = function (e) {
                      !1 === e || !b(s) || (s && !i.$eval(s)) || t();
                    },
                    d = ++h;
                  o
                    ? (e(o, !0).then(
                        function (e) {
                          if (!i.$$destroyed && d === h) {
                            var t = i.$new();
                            l.template = e;
                            var s = c(t, function (e) {
                              m(), n.enter(e, null, r).done(u);
                            });
                            (p = s),
                              (f = t).$emit("$includeContentLoaded", o),
                              i.$eval(a);
                          }
                        },
                        function () {
                          i.$$destroyed ||
                            (d === h &&
                              (m(), i.$emit("$includeContentError", o)));
                        }
                      ),
                      i.$emit("$includeContentRequested", o))
                    : (m(), (l.template = null));
                });
              };
            },
          };
        },
      ],
      Fa = [
        "$compile",
        function (t) {
          return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function (n, i, r, o) {
              if (pr.call(i[0]).match(/SVG/))
                return (
                  i.empty(),
                  void t(Ie(o.template, e.document).childNodes)(
                    n,
                    function (e) {
                      i.append(e);
                    },
                    { futureParentElement: i }
                  )
                );
              i.html(o.template), t(i.contents())(n);
            },
          };
        },
      ],
      Ua = xi({
        priority: 450,
        compile: function () {
          return {
            pre: function (e, t, n) {
              e.$eval(n.ngInit);
            },
          };
        },
      }),
      Wa = function () {
        return {
          restrict: "A",
          priority: 100,
          require: "ngModel",
          link: function (e, t, n, i) {
            var r = n.ngList || ", ",
              a = "false" !== n.ngTrim,
              s = a ? xr(r) : r,
              u = function (e) {
                if (!$(e)) {
                  var t = [];
                  return (
                    e &&
                      o(e.split(s), function (e) {
                        e && t.push(a ? xr(e) : e);
                      }),
                    t
                  );
                }
              };
            i.$parsers.push(u),
              i.$formatters.push(function (e) {
                return $r(e) ? e.join(r) : undefined;
              }),
              (i.$isEmpty = function (e) {
                return !e || !e.length;
              });
          },
        };
      },
      Ba = "ng-valid",
      za = "ng-invalid",
      Ga = "ng-pristine",
      Ka = "ng-dirty",
      Xa = "ng-untouched",
      Qa = "ng-touched",
      Ya = "ng-empty",
      Ja = "ng-not-empty",
      Za = i("ngModel");
    (Gi.$inject = [
      "$scope",
      "$exceptionHandler",
      "$attrs",
      "$element",
      "$parse",
      "$animate",
      "$timeout",
      "$q",
      "$interpolate",
    ]),
      (Gi.prototype = {
        $$initGetterSetters: function () {
          if (this.$options.getOption("getterSetter")) {
            var e = this.$$parse(this.$$attr.ngModel + "()"),
              t = this.$$parse(this.$$attr.ngModel + "($$$p)");
            (this.$$ngModelGet = function (t) {
              var n = this.$$parsedNgModel(t);
              return E(n) && (n = e(t)), n;
            }),
              (this.$$ngModelSet = function (e, n) {
                E(this.$$parsedNgModel(e))
                  ? t(e, { $$$p: n })
                  : this.$$parsedNgModelAssign(e, n);
              });
          } else if (!this.$$parsedNgModel.assign)
            throw Za(
              "nonassign",
              "Expression '{0}' is non-assignable. Element: {1}",
              this.$$attr.ngModel,
              te(this.$$element)
            );
        },
        $render: m,
        $isEmpty: function (e) {
          return $(e) || "" === e || null === e || e != e;
        },
        $$updateEmptyClasses: function (e) {
          this.$isEmpty(e)
            ? (this.$$animate.removeClass(this.$$element, Ja),
              this.$$animate.addClass(this.$$element, Ya))
            : (this.$$animate.removeClass(this.$$element, Ya),
              this.$$animate.addClass(this.$$element, Ja));
        },
        $setPristine: function () {
          (this.$dirty = !1),
            (this.$pristine = !0),
            this.$$animate.removeClass(this.$$element, Ka),
            this.$$animate.addClass(this.$$element, Ga);
        },
        $setDirty: function () {
          (this.$dirty = !0),
            (this.$pristine = !1),
            this.$$animate.removeClass(this.$$element, Ga),
            this.$$animate.addClass(this.$$element, Ka),
            this.$$parentForm.$setDirty();
        },
        $setUntouched: function () {
          (this.$touched = !1),
            (this.$untouched = !0),
            this.$$animate.setClass(this.$$element, Xa, Qa);
        },
        $setTouched: function () {
          (this.$touched = !0),
            (this.$untouched = !1),
            this.$$animate.setClass(this.$$element, Qa, Xa);
        },
        $rollbackViewValue: function () {
          this.$$timeout.cancel(this.$$pendingDebounce),
            (this.$viewValue = this.$$lastCommittedViewValue),
            this.$render();
        },
        $validate: function () {
          if (!yr(this.$modelValue)) {
            var e = this.$$lastCommittedViewValue,
              t = this.$$rawModelValue,
              n = this.$valid,
              i = this.$modelValue,
              r = this.$options.getOption("allowInvalid"),
              o = this;
            this.$$runValidators(t, e, function (e) {
              r ||
                n === e ||
                ((o.$modelValue = e ? t : undefined),
                o.$modelValue !== i && o.$$writeModelToScope());
            });
          }
        },
        $$runValidators: function (e, t, n) {
          function i() {
            var e = c.$$parserName || "parse";
            return $(c.$$parserValid)
              ? (s(e, null), !0)
              : (c.$$parserValid ||
                  (o(c.$validators, function (e, t) {
                    s(t, null);
                  }),
                  o(c.$asyncValidators, function (e, t) {
                    s(t, null);
                  })),
                s(e, c.$$parserValid),
                c.$$parserValid);
          }
          function r() {
            var n = !0;
            return (
              o(c.$validators, function (i, r) {
                var o = Boolean(i(e, t));
                (n = n && o), s(r, o);
              }),
              !!n ||
                (o(c.$asyncValidators, function (e, t) {
                  s(t, null);
                }),
                !1)
            );
          }
          function a() {
            var n = [],
              i = !0;
            o(c.$asyncValidators, function (r, o) {
              var a = r(e, t);
              if (!j(a))
                throw Za(
                  "nopromise",
                  "Expected asynchronous validator to return a promise but got '{0}' instead.",
                  a
                );
              s(o, undefined),
                n.push(
                  a.then(
                    function () {
                      s(o, !0);
                    },
                    function () {
                      (i = !1), s(o, !1);
                    }
                  )
                );
            }),
              n.length
                ? c.$$q.all(n).then(function () {
                    u(i);
                  }, m)
                : u(!0);
          }
          function s(e, t) {
            l === c.$$currentValidationRunId && c.$setValidity(e, t);
          }
          function u(e) {
            l === c.$$currentValidationRunId && n(e);
          }
          this.$$currentValidationRunId++;
          var l = this.$$currentValidationRunId,
            c = this;
          i() && r() ? a() : u(!1);
        },
        $commitViewValue: function () {
          var e = this.$viewValue;
          this.$$timeout.cancel(this.$$pendingDebounce),
            (this.$$lastCommittedViewValue !== e ||
              ("" === e && this.$$hasNativeValidators)) &&
              (this.$$updateEmptyClasses(e),
              (this.$$lastCommittedViewValue = e),
              this.$pristine && this.$setDirty(),
              this.$$parseAndValidate());
        },
        $$parseAndValidate: function () {
          function e() {
            n.$modelValue !== r && n.$$writeModelToScope();
          }
          var t = this.$$lastCommittedViewValue,
            n = this;
          if (((this.$$parserValid = !$(t) || undefined), this.$$parserValid))
            for (var i = 0; i < this.$parsers.length; i++)
              if ($((t = this.$parsers[i](t)))) {
                this.$$parserValid = !1;
                break;
              }
          yr(this.$modelValue) &&
            (this.$modelValue = this.$$ngModelGet(this.$$scope));
          var r = this.$modelValue,
            o = this.$options.getOption("allowInvalid");
          (this.$$rawModelValue = t),
            o && ((this.$modelValue = t), e()),
            this.$$runValidators(
              t,
              this.$$lastCommittedViewValue,
              function (i) {
                o || ((n.$modelValue = i ? t : undefined), e());
              }
            );
        },
        $$writeModelToScope: function () {
          this.$$ngModelSet(this.$$scope, this.$modelValue),
            o(
              this.$viewChangeListeners,
              function (e) {
                try {
                  e();
                } catch (t) {
                  this.$$exceptionHandler(t);
                }
              },
              this
            );
        },
        $setViewValue: function (e, t) {
          (this.$viewValue = e),
            this.$options.getOption("updateOnDefault") &&
              this.$$debounceViewValueCommit(t);
        },
        $$debounceViewValueCommit: function (e) {
          var t = this.$options.getOption("debounce");
          S(t[e]) ? (t = t[e]) : S(t["default"]) && (t = t["default"]),
            this.$$timeout.cancel(this.$$pendingDebounce);
          var n = this;
          t > 0
            ? (this.$$pendingDebounce = this.$$timeout(function () {
                n.$commitViewValue();
              }, t))
            : this.$$scope.$root.$$phase
            ? this.$commitViewValue()
            : this.$$scope.$apply(function () {
                n.$commitViewValue();
              });
        },
        $overrideModelOptions: function (e) {
          this.$options = this.$options.createChild(e);
        },
      }),
      Ti({
        clazz: Gi,
        set: function (e, t) {
          e[t] = !0;
        },
        unset: function (e, t) {
          delete e[t];
        },
      });
    var es,
      ts = [
        "$rootScope",
        function (e) {
          return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: Gi,
            priority: 1,
            compile: function (t) {
              return (
                t.addClass(Ga).addClass(Xa).addClass(Ba),
                {
                  pre: function (e, t, n, i) {
                    var r = i[0],
                      o = i[1] || r.$$parentForm,
                      a = i[2];
                    a && (r.$options = a.$options),
                      r.$$initGetterSetters(),
                      o.$addControl(r),
                      n.$observe("name", function (e) {
                        r.$name !== e && r.$$parentForm.$$renameControl(r, e);
                      }),
                      e.$on("$destroy", function () {
                        r.$$parentForm.$removeControl(r);
                      });
                  },
                  post: function (t, n, i, r) {
                    function o() {
                      a.$setTouched();
                    }
                    var a = r[0];
                    a.$options.getOption("updateOn") &&
                      n.on(a.$options.getOption("updateOn"), function (e) {
                        a.$$debounceViewValueCommit(e && e.type);
                      }),
                      n.on("blur", function () {
                        a.$touched ||
                          (e.$$phase ? t.$evalAsync(o) : t.$apply(o));
                      });
                  },
                }
              );
            },
          };
        },
      ],
      ns = /(\s+|^)default(\s+|$)/;
    (Xi.prototype = {
      getOption: function (e) {
        return this.$$options[e];
      },
      createChild: function (e) {
        var t = !1;
        return (
          o(
            (e = f({}, e)),
            function (n, i) {
              "$inherit" === n
                ? "*" === i
                  ? (t = !0)
                  : ((e[i] = this.$$options[i]),
                    "updateOn" === i &&
                      (e.updateOnDefault = this.$$options.updateOnDefault))
                : "updateOn" === i &&
                  ((e.updateOnDefault = !1),
                  (e[i] = xr(
                    n.replace(ns, function () {
                      return (e.updateOnDefault = !0), " ";
                    })
                  )));
            },
            this
          ),
          t && (delete e["*"], Qi(e, this.$$options)),
          Qi(e, es.$$options),
          new Xi(e)
        );
      },
    }),
      (es = new Xi({
        updateOn: "",
        updateOnDefault: !0,
        debounce: 0,
        getterSetter: !1,
        allowInvalid: !1,
        timezone: null,
      }));
    var is = function () {
        function e(e, t) {
          (this.$$attrs = e), (this.$$scope = t);
        }
        return (
          (e.$inject = ["$attrs", "$scope"]),
          (e.prototype = {
            $onInit: function () {
              var e = this.parentCtrl ? this.parentCtrl.$options : es,
                t = this.$$scope.$eval(this.$$attrs.ngModelOptions);
              this.$options = e.createChild(t);
            },
          }),
          {
            restrict: "A",
            priority: 10,
            require: { parentCtrl: "?^^ngModelOptions" },
            bindToController: !0,
            controller: e,
          }
        );
      },
      rs = xi({ terminal: !0, priority: 1e3 }),
      os = i("ngOptions"),
      as =
        /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      ss = [
        "$compile",
        "$document",
        "$parse",
        function (t, n, i) {
          function a(e, t, n) {
            function o(e, t, n, i, r) {
              (this.selectValue = e),
                (this.viewValue = t),
                (this.label = n),
                (this.group = i),
                (this.disabled = r);
            }
            function a(e) {
              var t;
              if (!l && r(e)) t = e;
              else
                for (var n in ((t = []), e))
                  e.hasOwnProperty(n) && "$" !== n.charAt(0) && t.push(n);
              return t;
            }
            var s = e.match(as);
            if (!s)
              throw os(
                "iexp",
                "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",
                e,
                te(t)
              );
            var u = s[5] || s[7],
              l = s[6],
              c = / as /.test(s[0]) && s[1],
              f = s[9],
              d = i(s[2] ? s[1] : u),
              p = (c && i(c)) || d,
              h = f && i(f),
              m = f
                ? function (e, t) {
                    return h(n, t);
                  }
                : function (e) {
                    return at(e);
                  },
              g = function (e, t) {
                return m(e, w(e, t));
              },
              v = i(s[2] || s[1]),
              y = i(s[3] || ""),
              $ = i(s[4] || ""),
              b = i(s[8]),
              x = {},
              w = l
                ? function (e, t) {
                    return (x[l] = t), (x[u] = e), x;
                  }
                : function (e) {
                    return (x[u] = e), x;
                  };
            return {
              trackBy: f,
              getTrackByValue: g,
              getWatchables: i(b, function (e) {
                for (
                  var t = [], i = a((e = e || [])), r = i.length, o = 0;
                  o < r;
                  o++
                ) {
                  var u = e === i ? o : i[o],
                    l = e[u],
                    c = w(l, u),
                    f = m(l, c);
                  if ((t.push(f), s[2] || s[1])) {
                    var d = v(n, c);
                    t.push(d);
                  }
                  if (s[4]) {
                    var p = $(n, c);
                    t.push(p);
                  }
                }
                return t;
              }),
              getOptions: function () {
                for (
                  var e = [],
                    t = {},
                    i = b(n) || [],
                    r = a(i),
                    s = r.length,
                    u = 0;
                  u < s;
                  u++
                ) {
                  var l = i === r ? u : r[u],
                    c = i[l],
                    d = w(c, l),
                    h = p(n, d),
                    x = m(h, d),
                    C = new o(x, h, v(n, d), y(n, d), $(n, d));
                  e.push(C), (t[x] = C);
                }
                return {
                  items: e,
                  selectValueMap: t,
                  getOptionFromViewValue: function (e) {
                    return t[g(e)];
                  },
                  getViewValueFromOption: function (e) {
                    return f ? U(e.viewValue) : e.viewValue;
                  },
                };
              },
            };
          }
          function s(e, i, r, s) {
            function c(e, t) {
              var n = u.cloneNode(!1);
              t.appendChild(n), d(e, n);
            }
            function f(e) {
              var t = x.getOptionFromViewValue(e),
                n = t && t.element;
              return n && !n.selected && (n.selected = !0), t;
            }
            function d(e, t) {
              (e.element = t),
                (t.disabled = e.disabled),
                e.label !== t.label &&
                  ((t.label = e.label), (t.textContent = e.label)),
                (t.value = e.selectValue);
            }
            function p() {
              var e = x && h.readValue();
              if (x)
                for (var t = x.items.length - 1; t >= 0; t--) {
                  var n = x.items[t];
                  b(n.group) ? Ye(n.element.parentNode) : Ye(n.element);
                }
              x = C.getOptions();
              var r = {};
              if (
                (x.items.forEach(function (e) {
                  var t;
                  b(e.group)
                    ? ((t = r[e.group]) ||
                        ((t = l.cloneNode(!1)),
                        S.appendChild(t),
                        (t.label = null === e.group ? "null" : e.group),
                        (r[e.group] = t)),
                      c(e, t))
                    : c(e, S);
                }),
                i[0].appendChild(S),
                m.$render(),
                !m.$isEmpty(e))
              ) {
                var o = h.readValue();
                (C.trackBy || g ? B(e, o) : e === o) ||
                  (m.$setViewValue(o), m.$render());
              }
            }
            for (
              var h = s[0],
                m = s[1],
                g = r.multiple,
                v = 0,
                y = i.children(),
                $ = y.length;
              v < $;
              v++
            )
              if ("" === y[v].value) {
                (h.hasEmptyOption = !0), (h.emptyOption = y.eq(v));
                break;
              }
            i.empty();
            var x,
              w = !!h.emptyOption;
            sr(u.cloneNode(!1)).val("?");
            var C = a(r.ngOptions, i, e),
              S = n[0].createDocumentFragment();
            (h.generateUnknownOptionValue = function () {
              return "?";
            }),
              g
                ? ((h.writeValue = function (e) {
                    if (x) {
                      var t = (e && e.map(f)) || [];
                      x.items.forEach(function (e) {
                        e.element.selected &&
                          !V(t, e) &&
                          (e.element.selected = !1);
                      });
                    }
                  }),
                  (h.readValue = function () {
                    var e = i.val() || [],
                      t = [];
                    return (
                      o(e, function (e) {
                        var n = x.selectValueMap[e];
                        n && !n.disabled && t.push(x.getViewValueFromOption(n));
                      }),
                      t
                    );
                  }),
                  C.trackBy &&
                    e.$watchCollection(
                      function () {
                        if ($r(m.$viewValue))
                          return m.$viewValue.map(function (e) {
                            return C.getTrackByValue(e);
                          });
                      },
                      function () {
                        m.$render();
                      }
                    ))
                : ((h.writeValue = function (e) {
                    if (x) {
                      var t = i[0].options[i[0].selectedIndex],
                        n = x.getOptionFromViewValue(e);
                      t && t.removeAttribute("selected"),
                        n
                          ? (i[0].value !== n.selectValue &&
                              (h.removeUnknownOption(),
                              (i[0].value = n.selectValue),
                              (n.element.selected = !0)),
                            n.element.setAttribute("selected", "selected"))
                          : h.selectUnknownOrEmptyOption(e);
                    }
                  }),
                  (h.readValue = function () {
                    var e = x.selectValueMap[i.val()];
                    return e && !e.disabled
                      ? (h.unselectEmptyOption(),
                        h.removeUnknownOption(),
                        x.getViewValueFromOption(e))
                      : null;
                  }),
                  C.trackBy &&
                    e.$watch(
                      function () {
                        return C.getTrackByValue(m.$viewValue);
                      },
                      function () {
                        m.$render();
                      }
                    )),
              w &&
                (t(h.emptyOption)(e),
                i.prepend(h.emptyOption),
                h.emptyOption[0].nodeType === Mr
                  ? ((h.hasEmptyOption = !1),
                    (h.registerOption = function (e, t) {
                      "" === t.val() &&
                        ((h.hasEmptyOption = !0),
                        (h.emptyOption = t),
                        h.emptyOption.removeClass("ng-scope"),
                        m.$render(),
                        t.on("$destroy", function () {
                          var e = h.$isEmptyOptionSelected();
                          (h.hasEmptyOption = !1),
                            (h.emptyOption = undefined),
                            e && m.$render();
                        }));
                    }))
                  : h.emptyOption.removeClass("ng-scope")),
              e.$watchCollection(C.getWatchables, p);
          }
          var u = e.document.createElement("option"),
            l = e.document.createElement("optgroup");
          return {
            restrict: "A",
            terminal: !0,
            require: ["select", "ngModel"],
            link: {
              pre: function (e, t, n, i) {
                i[0].registerOption = m;
              },
              post: s,
            },
          };
        },
      ],
      us = [
        "$locale",
        "$interpolate",
        "$log",
        function (e, t, n) {
          var i = /{}/g,
            r = /^when(Minus)?(.+)$/;
          return {
            link: function (a, s, u) {
              function l(e) {
                s.text(e || "");
              }
              var c,
                f = u.count,
                d = u.$attr.when && s.attr(u.$attr.when),
                p = u.offset || 0,
                h = a.$eval(d) || {},
                g = {},
                v = t.startSymbol(),
                y = t.endSymbol(),
                b = v + f + "-" + p + y,
                x = gr.noop;
              o(u, function (e, t) {
                var n = r.exec(t);
                if (n) {
                  var i = (n[1] ? "-" : "") + nr(n[2]);
                  h[i] = s.attr(u.$attr[t]);
                }
              }),
                o(h, function (e, n) {
                  g[n] = t(e.replace(i, b));
                }),
                a.$watch(f, function (t) {
                  var i = parseFloat(t),
                    r = yr(i);
                  if (
                    (r || i in h || (i = e.pluralCat(i - p)),
                    !(i === c || (r && yr(c))))
                  ) {
                    x();
                    var o = g[i];
                    $(o)
                      ? (null != t &&
                          n.debug(
                            "ngPluralize: no rule defined for '" +
                              i +
                              "' in " +
                              d
                          ),
                        (x = m),
                        l())
                      : (x = a.$watch(o, l)),
                      (c = i);
                  }
                });
            },
          };
        },
      ],
      ls = [
        "$parse",
        "$animate",
        "$compile",
        function (e, t, n) {
          var a = "$$NG_REMOVED",
            s = i("ngRepeat"),
            u = function (e, t, n, i, r, o, a) {
              (e[n] = i),
                r && (e[r] = o),
                (e.$index = t),
                (e.$first = 0 === t),
                (e.$last = t === a - 1),
                (e.$middle = !(e.$first || e.$last)),
                (e.$odd = !(e.$even = 0 == (1 & t)));
            },
            l = function (e) {
              return e.clone[0];
            },
            c = function (e) {
              return e.clone[e.clone.length - 1];
            };
          return {
            restrict: "A",
            multiElement: !0,
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            compile: function (i, f) {
              var d = f.ngRepeat,
                p = n.$$createComment("end ngRepeat", d),
                h = d.match(
                  /^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/
                );
              if (!h)
                throw s(
                  "iexp",
                  "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
                  d
                );
              var m = h[1],
                g = h[2],
                v = h[3],
                y = h[4];
              if (
                !(h = m.match(
                  /^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/
                ))
              )
                throw s(
                  "iidexp",
                  "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",
                  m
                );
              var $,
                b,
                x,
                w,
                C = h[3] || h[1],
                S = h[2];
              if (
                v &&
                (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(v) ||
                  /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(
                    v
                  ))
              )
                throw s(
                  "badident",
                  "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",
                  v
                );
              var T = { $id: at };
              return (
                y
                  ? ($ = e(y))
                  : ((x = function (e, t) {
                      return at(t);
                    }),
                    (w = function (e) {
                      return e;
                    })),
                function (e, n, i, f, h) {
                  $ &&
                    (b = function (t, n, i) {
                      return (
                        S && (T[S] = t), (T[C] = n), (T.$index = i), $(e, T)
                      );
                    });
                  var m = be();
                  e.$watchCollection(g, function (i) {
                    var f,
                      g,
                      y,
                      $,
                      T,
                      k,
                      E,
                      A,
                      _,
                      O,
                      N,
                      D,
                      M = n[0],
                      I = be();
                    if ((v && (e[v] = i), r(i))) (_ = i), (A = b || x);
                    else
                      for (var j in ((A = b || w), (_ = []), i))
                        tr.call(i, j) && "$" !== j.charAt(0) && _.push(j);
                    for ($ = _.length, N = new Array($), f = 0; f < $; f++)
                      if (
                        ((T = i === _ ? f : _[f]),
                        (k = i[T]),
                        (E = A(T, k, f)),
                        m[E])
                      )
                        (O = m[E]), delete m[E], (I[E] = O), (N[f] = O);
                      else {
                        if (I[E])
                          throw (
                            (o(N, function (e) {
                              e && e.scope && (m[e.id] = e);
                            }),
                            s(
                              "dupes",
                              "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",
                              d,
                              E,
                              k
                            ))
                          );
                        (N[f] = { id: E, scope: undefined, clone: undefined }),
                          (I[E] = !0);
                      }
                    for (var P in m) {
                      if (
                        ((D = $e((O = m[P]).clone)),
                        t.leave(D),
                        D[0].parentNode)
                      )
                        for (f = 0, g = D.length; f < g; f++) D[f][a] = !0;
                      O.scope.$destroy();
                    }
                    for (f = 0; f < $; f++)
                      if (
                        ((T = i === _ ? f : _[f]), (k = i[T]), (O = N[f]).scope)
                      ) {
                        y = M;
                        do {
                          y = y.nextSibling;
                        } while (y && y[a]);
                        l(O) !== y && t.move($e(O.clone), null, M),
                          (M = c(O)),
                          u(O.scope, f, C, k, S, T, $);
                      } else
                        h(function (e, n) {
                          O.scope = n;
                          var i = p.cloneNode(!1);
                          (e[e.length++] = i),
                            t.enter(e, null, M),
                            (M = i),
                            (O.clone = e),
                            (I[O.id] = O),
                            u(O.scope, f, C, k, S, T, $);
                        });
                    m = I;
                  });
                }
              );
            },
          };
        },
      ],
      cs = "ng-hide",
      fs = "ng-hide-animate",
      ds = [
        "$animate",
        function (e) {
          return {
            restrict: "A",
            multiElement: !0,
            link: function (t, n, i) {
              t.$watch(i.ngShow, function (t) {
                e[t ? "removeClass" : "addClass"](n, cs, { tempClasses: fs });
              });
            },
          };
        },
      ],
      ps = [
        "$animate",
        function (e) {
          return {
            restrict: "A",
            multiElement: !0,
            link: function (t, n, i) {
              t.$watch(i.ngHide, function (t) {
                e[t ? "addClass" : "removeClass"](n, cs, { tempClasses: fs });
              });
            },
          };
        },
      ],
      hs = xi(function (e, t, n) {
        e.$watch(
          n.ngStyle,
          function (e, n) {
            n &&
              e !== n &&
              o(n, function (e, n) {
                t.css(n, "");
              }),
              e && t.css(e);
          },
          !0
        );
      }),
      ms = [
        "$animate",
        "$compile",
        function (e, t) {
          return {
            require: "ngSwitch",
            controller: [
              "$scope",
              function () {
                this.cases = {};
              },
            ],
            link: function (n, i, r, a) {
              var s = r.ngSwitch || r.on,
                u = [],
                l = [],
                c = [],
                f = [],
                d = function (e, t) {
                  return function (n) {
                    !1 !== n && e.splice(t, 1);
                  };
                };
              n.$watch(s, function (n) {
                for (var i, r; c.length; ) e.cancel(c.pop());
                for (i = 0, r = f.length; i < r; ++i) {
                  var s = $e(l[i].clone);
                  f[i].$destroy(), (c[i] = e.leave(s)).done(d(c, i));
                }
                (l.length = 0),
                  (f.length = 0),
                  (u = a.cases["!" + n] || a.cases["?"]) &&
                    o(u, function (n) {
                      n.transclude(function (i, r) {
                        f.push(r);
                        var o = n.element;
                        i[i.length++] = t.$$createComment("end ngSwitchWhen");
                        var a = { clone: i };
                        l.push(a), e.enter(i, o.parent(), o);
                      });
                    });
              });
            },
          };
        },
      ],
      gs = xi({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (e, t, n, i, r) {
          o(
            n.ngSwitchWhen
              .split(n.ngSwitchWhenSeparator)
              .sort()
              .filter(function (e, t, n) {
                return n[t - 1] !== e;
              }),
            function (e) {
              (i.cases["!" + e] = i.cases["!" + e] || []),
                i.cases["!" + e].push({ transclude: r, element: t });
            }
          );
        },
      }),
      vs = xi({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function (e, t, n, i, r) {
          (i.cases["?"] = i.cases["?"] || []),
            i.cases["?"].push({ transclude: r, element: t });
        },
      }),
      ys = i("ngTransclude"),
      $s = [
        "$compile",
        function (e) {
          return {
            restrict: "EAC",
            terminal: !0,
            compile: function (t) {
              var n = e(t.contents());
              return (
                t.empty(),
                function (e, t, i, r, o) {
                  function a(e, n) {
                    e.length && u(e) ? t.append(e) : (s(), n.$destroy());
                  }
                  function s() {
                    n(e, function (e) {
                      t.append(e);
                    });
                  }
                  function u(e) {
                    for (var t = 0, n = e.length; t < n; t++) {
                      var i = e[t];
                      if (i.nodeType !== Dr || i.nodeValue.trim()) return !0;
                    }
                  }
                  if (!o)
                    throw ys(
                      "orphan",
                      "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",
                      te(t)
                    );
                  i.ngTransclude === i.$attr.ngTransclude &&
                    (i.ngTransclude = "");
                  var l = i.ngTransclude || i.ngTranscludeSlot;
                  o(a, null, l), l && !o.isSlotFilled(l) && s();
                }
              );
            },
          };
        },
      ],
      bs = [
        "$templateCache",
        function (e) {
          return {
            restrict: "E",
            terminal: !0,
            compile: function (t, n) {
              if ("text/ng-template" === n.type) {
                var i = n.id,
                  r = t[0].text;
                e.put(i, r);
              }
            },
          };
        },
      ],
      xs = { $setViewValue: m, $render: m },
      ws = [
        "$element",
        "$scope",
        function (t, n) {
          function i() {
            s ||
              ((s = !0),
              n.$$postDigest(function () {
                (s = !1), o.ngModelCtrl.$render();
              }));
          }
          function r(e) {
            u ||
              ((u = !0),
              n.$$postDigest(function () {
                n.$$destroyed ||
                  ((u = !1),
                  o.ngModelCtrl.$setViewValue(o.readValue()),
                  e && o.ngModelCtrl.$render());
              }));
          }
          var o = this,
            a = new eo();
          (o.selectValueMap = {}),
            (o.ngModelCtrl = xs),
            (o.multiple = !1),
            (o.unknownOption = sr(e.document.createElement("option"))),
            (o.hasEmptyOption = !1),
            (o.emptyOption = undefined),
            (o.renderUnknownOption = function (e) {
              var n = o.generateUnknownOptionValue(e);
              o.unknownOption.val(n),
                t.prepend(o.unknownOption),
                Yi(o.unknownOption, !0),
                t.val(n);
            }),
            (o.updateUnknownOption = function (e) {
              var n = o.generateUnknownOptionValue(e);
              o.unknownOption.val(n), Yi(o.unknownOption, !0), t.val(n);
            }),
            (o.generateUnknownOptionValue = function (e) {
              return "? " + at(e) + " ?";
            }),
            (o.removeUnknownOption = function () {
              o.unknownOption.parent() && o.unknownOption.remove();
            }),
            (o.selectEmptyOption = function () {
              o.emptyOption && (t.val(""), Yi(o.emptyOption, !0));
            }),
            (o.unselectEmptyOption = function () {
              o.hasEmptyOption && Yi(o.emptyOption, !1);
            }),
            n.$on("$destroy", function () {
              o.renderUnknownOption = m;
            }),
            (o.readValue = function () {
              var e = t.val(),
                n = e in o.selectValueMap ? o.selectValueMap[e] : e;
              return o.hasOption(n) ? n : null;
            }),
            (o.writeValue = function (e) {
              var n = t[0].options[t[0].selectedIndex];
              if ((n && Yi(sr(n), !1), o.hasOption(e))) {
                o.removeUnknownOption();
                var i = at(e);
                t.val(i in o.selectValueMap ? i : e);
                var r = t[0].options[t[0].selectedIndex];
                Yi(sr(r), !0);
              } else o.selectUnknownOrEmptyOption(e);
            }),
            (o.addOption = function (e, t) {
              if (t[0].nodeType !== Mr) {
                ve(e, '"option value"'),
                  "" === e && ((o.hasEmptyOption = !0), (o.emptyOption = t));
                var n = a.get(e) || 0;
                a.set(e, n + 1), i();
              }
            }),
            (o.removeOption = function (e) {
              var t = a.get(e);
              t &&
                (1 === t
                  ? (a["delete"](e),
                    "" === e &&
                      ((o.hasEmptyOption = !1), (o.emptyOption = undefined)))
                  : a.set(e, t - 1));
            }),
            (o.hasOption = function (e) {
              return !!a.get(e);
            }),
            (o.$hasEmptyOption = function () {
              return o.hasEmptyOption;
            }),
            (o.$isUnknownOptionSelected = function () {
              return t[0].options[0] === o.unknownOption[0];
            }),
            (o.$isEmptyOptionSelected = function () {
              return (
                o.hasEmptyOption &&
                t[0].options[t[0].selectedIndex] === o.emptyOption[0]
              );
            }),
            (o.selectUnknownOrEmptyOption = function (e) {
              null == e && o.emptyOption
                ? (o.removeUnknownOption(), o.selectEmptyOption())
                : o.unknownOption.parent().length
                ? o.updateUnknownOption(e)
                : o.renderUnknownOption(e);
            });
          var s = !1,
            u = !1;
          o.registerOption = function (e, t, n, a, s) {
            if (n.$attr.ngValue) {
              var u,
                l = NaN;
              n.$observe("value", function (e) {
                var n,
                  i = t.prop("selected");
                b(l) &&
                  (o.removeOption(u), delete o.selectValueMap[l], (n = !0)),
                  (l = at(e)),
                  (u = e),
                  (o.selectValueMap[l] = e),
                  o.addOption(e, t),
                  t.attr("value", l),
                  n && i && r();
              });
            } else
              a
                ? n.$observe("value", function (e) {
                    var n;
                    o.readValue();
                    var i = t.prop("selected");
                    b(u) && (o.removeOption(u), (n = !0)),
                      (u = e),
                      o.addOption(e, t),
                      n && i && r();
                  })
                : s
                ? e.$watch(s, function (e, i) {
                    n.$set("value", e);
                    var a = t.prop("selected");
                    i !== e && o.removeOption(i),
                      o.addOption(e, t),
                      i && a && r();
                  })
                : o.addOption(n.value, t);
            n.$observe("disabled", function (e) {
              ("true" === e || (e && t.prop("selected"))) &&
                (o.multiple
                  ? r(!0)
                  : (o.ngModelCtrl.$setViewValue(null),
                    o.ngModelCtrl.$render()));
            }),
              t.on("$destroy", function () {
                var e = o.readValue(),
                  t = n.value;
                o.removeOption(t),
                  i(),
                  ((o.multiple && e && -1 !== e.indexOf(t)) || e === t) &&
                    r(!0);
              });
          };
        },
      ],
      Cs = function () {
        function e(e, t, n, i) {
          var r = i[0],
            a = i[1];
          if (a) {
            if (
              ((r.ngModelCtrl = a),
              t.on("change", function () {
                r.removeUnknownOption(),
                  e.$apply(function () {
                    a.$setViewValue(r.readValue());
                  });
              }),
              n.multiple)
            ) {
              (r.multiple = !0),
                (r.readValue = function () {
                  var e = [];
                  return (
                    o(t.find("option"), function (t) {
                      if (t.selected && !t.disabled) {
                        var n = t.value;
                        e.push(n in r.selectValueMap ? r.selectValueMap[n] : n);
                      }
                    }),
                    e
                  );
                }),
                (r.writeValue = function (e) {
                  o(t.find("option"), function (t) {
                    var n =
                      !!e && (V(e, t.value) || V(e, r.selectValueMap[t.value]));
                    n !== t.selected && Yi(sr(t), n);
                  });
                });
              var s,
                u = NaN;
              e.$watch(function () {
                u !== a.$viewValue ||
                  B(s, a.$viewValue) ||
                  ((s = Ce(a.$viewValue)), a.$render()),
                  (u = a.$viewValue);
              }),
                (a.$isEmpty = function (e) {
                  return !e || 0 === e.length;
                });
            }
          } else r.registerOption = m;
        }
        function t(e, t, n, i) {
          var r = i[1];
          if (r) {
            var o = i[0];
            r.$render = function () {
              o.writeValue(r.$viewValue);
            };
          }
        }
        return {
          restrict: "E",
          require: ["select", "?ngModel"],
          controller: ws,
          priority: 1,
          link: { pre: e, post: t },
        };
      },
      Ss = [
        "$interpolate",
        function (e) {
          return {
            restrict: "E",
            priority: 100,
            compile: function (t, n) {
              var i, r;
              return (
                b(n.ngValue) ||
                  (b(n.value)
                    ? (i = e(n.value, !0))
                    : (r = e(t.text(), !0)) || n.$set("value", t.text())),
                function (e, t, n) {
                  var o = "$selectController",
                    a = t.parent(),
                    s = a.data(o) || a.parent().data(o);
                  s && s.registerOption(e, t, n, i, r);
                }
              );
            },
          };
        },
      ],
      Ts = function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (e, t, n, i) {
            i &&
              ((n.required = !0),
              (i.$validators.required = function (e, t) {
                return !n.required || !i.$isEmpty(t);
              }),
              n.$observe("required", function () {
                i.$validate();
              }));
          },
        };
      },
      ks = function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (e, t, n, r) {
            if (r) {
              var o,
                a = n.ngPattern || n.pattern;
              n.$observe("pattern", function (e) {
                if (
                  (C(e) && e.length > 0 && (e = new RegExp("^" + e + "$")),
                  e && !e.test)
                )
                  throw i("ngPattern")(
                    "noregexp",
                    "Expected {0} to be a RegExp but was {1}. Element: {2}",
                    a,
                    e,
                    te(t)
                  );
                (o = e || undefined), r.$validate();
              }),
                (r.$validators.pattern = function (e, t) {
                  return r.$isEmpty(t) || $(o) || o.test(t);
                });
            }
          },
        };
      },
      Es = function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (e, t, n, i) {
            if (i) {
              var r = -1;
              n.$observe("maxlength", function (e) {
                var t = p(e);
                (r = yr(t) ? -1 : t), i.$validate();
              }),
                (i.$validators.maxlength = function (e, t) {
                  return r < 0 || i.$isEmpty(t) || t.length <= r;
                });
            }
          },
        };
      },
      As = function () {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function (e, t, n, i) {
            if (i) {
              var r = 0;
              n.$observe("minlength", function (e) {
                (r = p(e) || 0), i.$validate();
              }),
                (i.$validators.minlength = function (e, t) {
                  return i.$isEmpty(t) || t.length >= r;
                });
            }
          },
        };
      };
    e.angular.bootstrap
      ? e.console &&
        console.log("WARNING: Tried to load angular more than once.")
      : (he(),
        ke(gr),
        gr.module(
          "ngLocale",
          [],
          [
            "$provide",
            function (e) {
              function t(e) {
                var t = (e += "").indexOf(".");
                return -1 == t ? 0 : e.length - t - 1;
              }
              function n(e, n) {
                var i = n;
                undefined === i && (i = Math.min(t(e), 3));
                var r = Math.pow(10, i);
                return { v: i, f: ((e * r) | 0) % r };
              }
              var i = {
                ZERO: "zero",
                ONE: "one",
                TWO: "two",
                FEW: "few",
                MANY: "many",
                OTHER: "other",
              };
              e.value("$locale", {
                DATETIME_FORMATS: {
                  AMPMS: ["AM", "PM"],
                  DAY: [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  ERANAMES: ["Before Christ", "Anno Domini"],
                  ERAS: ["BC", "AD"],
                  FIRSTDAYOFWEEK: 6,
                  MONTH: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  SHORTMONTH: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                  ],
                  STANDALONEMONTH: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  WEEKENDRANGE: [5, 6],
                  fullDate: "EEEE, MMMM d, y",
                  longDate: "MMMM d, y",
                  medium: "MMM d, y h:mm:ss a",
                  mediumDate: "MMM d, y",
                  mediumTime: "h:mm:ss a",
                  short: "M/d/yy h:mm a",
                  shortDate: "M/d/yy",
                  shortTime: "h:mm a",
                },
                NUMBER_FORMATS: {
                  CURRENCY_SYM: "$",
                  DECIMAL_SEP: ".",
                  GROUP_SEP: ",",
                  PATTERNS: [
                    {
                      gSize: 3,
                      lgSize: 3,
                      maxFrac: 3,
                      minFrac: 0,
                      minInt: 1,
                      negPre: "-",
                      negSuf: "",
                      posPre: "",
                      posSuf: "",
                    },
                    {
                      gSize: 3,
                      lgSize: 3,
                      maxFrac: 2,
                      minFrac: 2,
                      minInt: 1,
                      negPre: "-\xa4",
                      negSuf: "",
                      posPre: "\xa4",
                      posSuf: "",
                    },
                  ],
                },
                id: "en-us",
                localeID: "en_US",
                pluralCat: function (e, t) {
                  var r = 0 | e,
                    o = n(e, t);
                  return 1 == r && 0 == o.v ? i.ONE : i.OTHER;
                },
              });
            },
          ]
        ),
        sr(function () {
          le(e.document, ce);
        }));
  })(window),
  !window.angular.$$csp().noInlineStyle &&
    window.angular
      .element(document.head)
      .prepend(
        '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'
      ),
  (function (e, t) {
    "use strict";
    function n() {
      function n(e, t) {
        var n,
          i = {},
          r = e.split(",");
        for (n = 0; n < r.length; n++) i[t ? u(r[n]) : r[n]] = !0;
        return i;
      }
      function i(e, t) {
        null === e || e === undefined
          ? (e = "")
          : "string" != typeof e && (e = "" + e);
        var n = j(e);
        if (!n) return "";
        var i = 5;
        do {
          if (0 === i)
            throw p(
              "uinput",
              "Failed to sanitize html because the input is unstable"
            );
          i--, (e = n.innerHTML), (n = j(e));
        } while (e !== n.innerHTML);
        for (var r = n.firstChild; r; ) {
          switch (r.nodeType) {
            case 1:
              t.start(r.nodeName.toLowerCase(), h(r.attributes));
              break;
            case 3:
              t.chars(r.textContent);
          }
          var o;
          if (
            !(
              (o = r.firstChild) ||
              (1 === r.nodeType && t.end(r.nodeName.toLowerCase()),
              (o = y("nextSibling", r)))
            )
          )
            for (; null == o && (r = y("parentNode", r)) !== n; )
              (o = y("nextSibling", r)),
                1 === r.nodeType && t.end(r.nodeName.toLowerCase());
          r = o;
        }
        for (; (r = n.firstChild); ) n.removeChild(r);
      }
      function h(e) {
        for (var t = {}, n = 0, i = e.length; n < i; n++) {
          var r = e[n];
          t[r.name] = r.value;
        }
        return t;
      }
      function m(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(b, function (e) {
            return (
              "&#" +
              (1024 * (e.charCodeAt(0) - 55296) +
                (e.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(x, function (e) {
            return "&#" + e.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function g(e, t) {
        var n = !1,
          i = r(e, e.push);
        return {
          start: function (e, r) {
            (e = u(e)),
              !n && _[e] && (n = e),
              n ||
                !0 !== O[e] ||
                (i("<"),
                i(e),
                a(r, function (n, r) {
                  var o = u(r),
                    a = ("img" === e && "src" === o) || "background" === o;
                  !0 !== I[o] ||
                    (!0 === N[o] && !t(n, a)) ||
                    (i(" "), i(r), i('="'), i(m(n)), i('"'));
                }),
                i(">"));
          },
          end: function (e) {
            (e = u(e)),
              n || !0 !== O[e] || !0 === w[e] || (i("</"), i(e), i(">")),
              e == n && (n = !1);
          },
          chars: function (e) {
            n || i(m(e));
          },
        };
      }
      function v(t) {
        for (; t; ) {
          if (t.nodeType === e.Node.ELEMENT_NODE)
            for (var n = t.attributes, i = 0, r = n.length; i < r; i++) {
              var o = n[i],
                a = o.name.toLowerCase();
              ("xmlns:ns1" !== a && 0 !== a.lastIndexOf("ns1:", 0)) ||
                (t.removeAttributeNode(o), i--, r--);
            }
          var s = t.firstChild;
          s && v(s), (t = y("nextSibling", t));
        }
      }
      function y(e, t) {
        var n = t[e];
        if (n && c.call(t, n))
          throw p(
            "elclob",
            "Failed to sanitize html because the element is clobbered: {0}",
            t.outerHTML || t.outerText
          );
        return n;
      }
      var $ = !1;
      (this.$get = [
        "$$sanitizeUri",
        function (e) {
          return (
            $ && o(O, A),
            function (t) {
              var n = [];
              return (
                f(
                  t,
                  d(n, function (t, n) {
                    return !/^unsafe:/.test(e(t, n));
                  })
                ),
                n.join("")
              );
            }
          );
        },
      ]),
        (this.enableSvg = function (e) {
          return s(e) ? (($ = e), this) : $;
        }),
        (r = t.bind),
        (o = t.extend),
        (a = t.forEach),
        (s = t.isDefined),
        (u = t.lowercase),
        (l = t.noop),
        (f = i),
        (d = g),
        (c =
          e.Node.prototype.contains ||
          function (e) {
            return !!(16 & this.compareDocumentPosition(e));
          });
      var b = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        x = /([^#-~ |!])/g,
        w = n("area,br,col,hr,img,wbr"),
        C = n("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        S = n("rp,rt"),
        T = o({}, S, C),
        k = o(
          {},
          C,
          n(
            "address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"
          )
        ),
        E = o(
          {},
          S,
          n(
            "a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"
          )
        ),
        A = n(
          "circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"
        ),
        _ = n("script,style"),
        O = o({}, w, k, E, T),
        N = n("background,cite,href,longdesc,src,xlink:href"),
        D = n(
          "abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"
        ),
        M = n(
          "accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
          !0
        ),
        I = o({}, N, M, D),
        j = (function (e, t) {
          function n(t) {
            t = "<remove></remove>" + t;
            try {
              t = encodeURI(t);
            } catch (r) {
              return undefined;
            }
            var n = new e.XMLHttpRequest();
            (n.responseType = "document"),
              n.open("GET", "data:text/html;charset=utf-8," + t, !1),
              n.send(null);
            var i = n.response.body;
            return i.firstChild.remove(), i;
          }
          function i(t) {
            t = "<remove></remove>" + t;
            try {
              var n = new e.DOMParser().parseFromString(t, "text/html").body;
              return n.firstChild.remove(), n;
            } catch (i) {
              return undefined;
            }
          }
          function r(e) {
            return (a.innerHTML = e), t.documentMode && v(a), a;
          }
          var o;
          if (!t || !t.implementation)
            throw p("noinert", "Can't create an inert html document");
          var a = (
            (o = t.implementation.createHTMLDocument("inert"))
              .documentElement || o.getDocumentElement()
          ).querySelector("body");
          return (
            (a.innerHTML =
              '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            a.querySelector("svg")
              ? ((a.innerHTML =
                  '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                a.querySelector("svg img") ? i : r)
              : n
          );
        })(e, e.document);
    }
    function i(e) {
      var t = [];
      return d(t, l).chars(e), t.join("");
    }
    var r,
      o,
      a,
      s,
      u,
      l,
      c,
      f,
      d,
      p = t.$$minErr("$sanitize");
    t
      .module("ngSanitize", [])
      .provider("$sanitize", n)
      .info({ angularVersion: "1.6.6" }),
      t.module("ngSanitize").filter("linky", [
        "$sanitize",
        function (e) {
          var n =
              /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
            r = /^mailto:/i,
            o = t.$$minErr("linky"),
            a = t.isDefined,
            s = t.isFunction,
            u = t.isObject,
            l = t.isString;
          return function (t, c, f) {
            function d(e) {
              e && $.push(i(e));
            }
            function p(e, t) {
              var n,
                i = v(e);
              for (n in ($.push("<a "), i)) $.push(n + '="' + i[n] + '" ');
              !a(c) || "target" in i || $.push('target="', c, '" '),
                $.push('href="', e.replace(/"/g, "&quot;"), '">'),
                d(t),
                $.push("</a>");
            }
            if (null == t || "" === t) return t;
            if (!l(t))
              throw o("notstring", "Expected string but received: {0}", t);
            for (
              var h,
                m,
                g,
                v = s(f)
                  ? f
                  : u(f)
                  ? function () {
                      return f;
                    }
                  : function () {
                      return {};
                    },
                y = t,
                $ = [];
              (h = y.match(n));

            )
              (m = h[0]),
                h[2] || h[4] || (m = (h[3] ? "http://" : "mailto:") + m),
                (g = h.index),
                d(y.substr(0, g)),
                p(m, h[0].replace(r, "")),
                (y = y.substring(g + h[0].length));
            return d(y), e($.join(""));
          };
        },
      ]);
  })(window, window.angular);
var timerModule = angular.module("timer", []).directive("timer", [
  "$compile",
  function (e) {
    return {
      restrict: "EAC",
      replace: !1,
      scope: {
        interval: "=interval",
        startTimeAttr: "=startTime",
        endTimeAttr: "=endTime",
        countdownattr: "=countdown",
        finishCallback: "&finishCallback",
        autoStart: "&autoStart",
        maxTimeUnit: "=",
      },
      controller: [
        "$scope",
        "$element",
        "$attrs",
        "$timeout",
        function (t, n, i, r) {
          function o() {
            t.timeoutId && clearTimeout(t.timeoutId);
          }
          function a() {
            t.maxTimeUnit && "day" !== t.maxTimeUnit
              ? "second" === t.maxTimeUnit
                ? ((t.seconds = Math.floor(t.millis / 1e3)),
                  (t.minutes = 0),
                  (t.hours = 0),
                  (t.days = 0),
                  (t.months = 0),
                  (t.years = 0))
                : "minute" === t.maxTimeUnit
                ? ((t.seconds = Math.floor((t.millis / 1e3) % 60)),
                  (t.minutes = Math.floor(t.millis / 6e4)),
                  (t.hours = 0),
                  (t.days = 0),
                  (t.months = 0),
                  (t.years = 0))
                : "hour" === t.maxTimeUnit
                ? ((t.seconds = Math.floor((t.millis / 1e3) % 60)),
                  (t.minutes = Math.floor((t.millis / 6e4) % 60)),
                  (t.hours = Math.floor(t.millis / 36e5)),
                  (t.days = 0),
                  (t.months = 0),
                  (t.years = 0))
                : "month" === t.maxTimeUnit
                ? ((t.seconds = Math.floor((t.millis / 1e3) % 60)),
                  (t.minutes = Math.floor((t.millis / 6e4) % 60)),
                  (t.hours = Math.floor((t.millis / 36e5) % 24)),
                  (t.days = Math.floor((t.millis / 36e5 / 24) % 30)),
                  (t.months = Math.floor(t.millis / 36e5 / 24 / 30)),
                  (t.years = 0))
                : "year" === t.maxTimeUnit &&
                  ((t.seconds = Math.floor((t.millis / 1e3) % 60)),
                  (t.minutes = Math.floor((t.millis / 6e4) % 60)),
                  (t.hours = Math.floor((t.millis / 36e5) % 24)),
                  (t.days = Math.floor((t.millis / 36e5 / 24) % 30)),
                  (t.months = Math.floor((t.millis / 36e5 / 24 / 30) % 12)),
                  (t.years = Math.floor(t.millis / 36e5 / 24 / 365)))
              : ((t.seconds = Math.floor((t.millis / 1e3) % 60)),
                (t.minutes = Math.floor((t.millis / 6e4) % 60)),
                (t.hours = Math.floor((t.millis / 36e5) % 24)),
                (t.days = Math.floor(t.millis / 36e5 / 24)),
                (t.months = 0),
                (t.years = 0)),
              (t.sseconds = t.seconds < 10 ? "0" + t.seconds : t.seconds),
              (t.mminutes = t.minutes < 10 ? "0" + t.minutes : t.minutes),
              (t.hhours = t.hours < 10 ? "0" + t.hours : t.hours),
              (t.ddays = t.days < 10 ? "0" + t.days : t.days),
              (t.mmonths = t.months < 10 ? "0" + t.months : t.months),
              (t.yyears = t.years < 10 ? "0" + t.years : t.years);
          }
          "function" != typeof String.prototype.trim &&
            (String.prototype.trim = function () {
              return this.replace(/^\s+|\s+$/g, "");
            }),
            (t.autoStart = i.autoStart || i.autostart),
            0 === n.html().trim().length
              ? n.append(e("<span>{{millis}}</span>")(t))
              : n.append(e(n.contents())(t)),
            (t.startTime = null),
            (t.endTime = null),
            (t.timeoutId = null),
            (t.countdown =
              t.countdownattr && parseInt(t.countdownattr, 10) >= 0
                ? parseInt(t.countdownattr, 10)
                : undefined),
            (t.isRunning = !1),
            t.$on("timer-start", function () {
              t.start();
            }),
            t.$on("timer-resume", function () {
              t.resume();
            }),
            t.$on("timer-stop", function () {
              t.stop();
            }),
            t.$on("timer-clear", function () {
              t.clear();
            }),
            t.$on("timer-set-countdown", function (e, n) {
              t.countdown = n;
            }),
            t.$watch("endTimeAttr", function () {
              t.stop(), t.start();
            }),
            t.$watch("startTimeAttr", function () {
              t.stop(), t.start();
            }),
            (t.start = n[0].start =
              function () {
                (t.startTime = t.startTimeAttr
                  ? new Date(t.startTimeAttr)
                  : new Date()),
                  (t.endTime = t.endTimeAttr ? new Date(t.endTimeAttr) : null),
                  t.countdown ||
                    (t.countdown =
                      t.countdownattr && parseInt(t.countdownattr, 10) > 0
                        ? parseInt(t.countdownattr, 10)
                        : undefined),
                  o(),
                  s(),
                  (t.isRunning = !0);
              }),
            (t.resume = n[0].resume =
              function () {
                o(),
                  t.countdownattr && (t.countdown += 1),
                  (t.startTime = new Date() - (t.stoppedTime - t.startTime)),
                  s(),
                  (t.isRunning = !0);
              }),
            (t.stop =
              t.pause =
              n[0].stop =
              n[0].pause =
                function () {
                  var e = t.timeoutId;
                  t.clear(),
                    t.$emit("timer-stopped", {
                      timeoutId: e,
                      millis: t.millis,
                      seconds: t.seconds,
                      minutes: t.minutes,
                      hours: t.hours,
                      days: t.days,
                    });
                }),
            (t.clear = n[0].clear =
              function () {
                (t.stoppedTime = new Date()),
                  o(),
                  (t.timeoutId = null),
                  (t.isRunning = !1);
              }),
            n.bind("$destroy", function () {
              o(), (t.isRunning = !1);
            }),
            t.countdownattr
              ? ((t.millis = 1e3 * t.countdownattr),
                (t.addCDSeconds = n[0].addCDSeconds =
                  function (e) {
                    (t.countdown += e), t.$digest(), t.isRunning || t.start();
                  }),
                t.$on("timer-add-cd-seconds", function (e, n) {
                  r(function () {
                    t.addCDSeconds(n);
                  });
                }),
                t.$on("timer-set-countdown-seconds", function (e, n) {
                  t.isRunning || t.clear(),
                    (t.countdown = n),
                    (t.millis = 1e3 * n),
                    a();
                }))
              : (t.millis = 0),
            a();
          var s = function () {
            t.millis = new Date() - t.startTime;
            var e = t.millis % 1e3;
            if (
              (t.endTimeAttr &&
                ((t.millis = t.endTime - new Date()),
                (e = t.interval - (t.millis % 1e3))),
              t.countdownattr && (t.millis = 1e3 * t.countdown),
              t.millis < 0)
            )
              return (
                t.stop(),
                (t.millis = 0),
                a(),
                void (t.finishCallback && t.$eval(t.finishCallback))
              );
            a(),
              (t.timeoutId = setTimeout(function () {
                s(), t.$digest();
              }, t.interval - e)),
              t.$emit("timer-tick", {
                timeoutId: t.timeoutId,
                millis: t.millis,
              }),
              t.countdown > 0
                ? t.countdown--
                : t.countdown <= 0 &&
                  (t.stop(), t.finishCallback && t.$eval(t.finishCallback));
          };
          (t.autoStart !== undefined && !0 !== t.autoStart) || t.start();
        },
      ],
    };
  },
]);
"undefined" != typeof module &&
  "undefined" != typeof exports &&
  module.exports === exports &&
  (module.exports = timerModule),
  (function (e, t) {
    "use strict";
    function n(e) {
      return t.lowercase(e.nodeName || (e[0] && e[0].nodeName));
    }
    function i(e, n) {
      var i = !1,
        r = !1;
      (this.ngClickOverrideEnabled = function (o) {
        return t.isDefined(o)
          ? (o &&
              !r &&
              ((r = !0),
              (a.$$moduleName = "ngTouch"),
              n.directive("ngClick", a),
              e.decorator("ngClickDirective", [
                "$delegate",
                function (e) {
                  if (i) e.shift();
                  else
                    for (var t = e.length - 1; t >= 0; ) {
                      if ("ngTouch" === e[t].$$moduleName) {
                        e.splice(t, 1);
                        break;
                      }
                      t--;
                    }
                  return e;
                },
              ])),
            (i = o),
            this)
          : i;
      }),
        (this.$get = function () {
          return {
            ngClickOverrideEnabled: function () {
              return i;
            },
          };
        });
    }
    function r(e, n, i) {
      o.directive(e, [
        "$parse",
        "$swipe",
        function (r, o) {
          var a = 75,
            s = 0.3,
            u = 30;
          return function (l, c, f) {
            function d(e) {
              if (!p) return !1;
              var t = Math.abs(e.y - p.y),
                i = (e.x - p.x) * n;
              return h && t < a && i > 0 && i > u && t / i < s;
            }
            var p,
              h,
              m = r(f[e]),
              g = ["touch"];
            t.isDefined(f.ngSwipeDisableMouse) || g.push("mouse"),
              o.bind(
                c,
                {
                  start: function (e) {
                    (p = e), (h = !0);
                  },
                  cancel: function () {
                    h = !1;
                  },
                  end: function (e, t) {
                    d(e) &&
                      l.$apply(function () {
                        c.triggerHandler(i), m(l, { $event: t });
                      });
                  },
                },
                g
              );
          };
        },
      ]);
    }
    var o = t.module("ngTouch", []);
    o.info({ angularVersion: "1.6.6" }),
      o.provider("$touch", i),
      (i.$inject = ["$provide", "$compileProvider"]),
      o.factory("$swipe", [
        function () {
          function e(e) {
            var t = e.originalEvent || e,
              n = t.touches && t.touches.length ? t.touches : [t],
              i = (t.changedTouches && t.changedTouches[0]) || n[0];
            return { x: i.clientX, y: i.clientY };
          }
          function n(e, n) {
            var i = [];
            return (
              t.forEach(e, function (e) {
                var t = r[e][n];
                t && i.push(t);
              }),
              i.join(" ")
            );
          }
          var i = 10,
            r = {
              mouse: { start: "mousedown", move: "mousemove", end: "mouseup" },
              touch: {
                start: "touchstart",
                move: "touchmove",
                end: "touchend",
                cancel: "touchcancel",
              },
              pointer: {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
                cancel: "pointercancel",
              },
            };
          return {
            bind: function (t, r, o) {
              var a,
                s,
                u,
                l,
                c = !1;
              (o = o || ["mouse", "touch", "pointer"]),
                t.on(n(o, "start"), function (t) {
                  (u = e(t)),
                    (c = !0),
                    (a = 0),
                    (s = 0),
                    (l = u),
                    r.start && r.start(u, t);
                });
              var f = n(o, "cancel");
              f &&
                t.on(f, function (e) {
                  (c = !1), r.cancel && r.cancel(e);
                }),
                t.on(n(o, "move"), function (t) {
                  if (c && u) {
                    var n = e(t);
                    if (
                      ((a += Math.abs(n.x - l.x)),
                      (s += Math.abs(n.y - l.y)),
                      (l = n),
                      !(a < i && s < i))
                    )
                      return s > a
                        ? ((c = !1), void (r.cancel && r.cancel(t)))
                        : (t.preventDefault(), void (r.move && r.move(n, t)));
                  }
                }),
                t.on(n(o, "end"), function (t) {
                  c && ((c = !1), r.end && r.end(e(t), t));
                });
            },
          };
        },
      ]);
    var a = [
      "$parse",
      "$timeout",
      "$rootElement",
      function (e, i, r) {
        function o(e, t, n, i) {
          return Math.abs(e - n) < g && Math.abs(t - i) < g;
        }
        function a(e, t, n) {
          for (var i = 0; i < e.length; i += 2)
            if (o(e[i], e[i + 1], t, n)) return e.splice(i, i + 2), !0;
          return !1;
        }
        function s(e) {
          if (!(Date.now() - c > m)) {
            var t = e.touches && e.touches.length ? e.touches : [e],
              i = t[0].clientX,
              r = t[0].clientY;
            (i < 1 && r < 1) ||
              (d && d[0] === i && d[1] === r) ||
              (d && (d = null),
              "label" === n(e.target) && (d = [i, r]),
              a(f, i, r) ||
                (e.stopPropagation(),
                e.preventDefault(),
                e.target && e.target.blur && e.target.blur()));
          }
        }
        function u(e) {
          var t = e.touches && e.touches.length ? e.touches : [e],
            n = t[0].clientX,
            r = t[0].clientY;
          f.push(n, r),
            i(
              function () {
                for (var e = 0; e < f.length; e += 2)
                  if (f[e] === n && f[e + 1] === r)
                    return void f.splice(e, e + 2);
              },
              m,
              !1
            );
        }
        function l(e, t) {
          f ||
            (r[0].addEventListener("click", s, !0),
            r[0].addEventListener("touchstart", u, !0),
            (f = [])),
            (c = Date.now()),
            a(f, e, t);
        }
        var c,
          f,
          d,
          p = 750,
          h = 12,
          m = 2500,
          g = 25,
          v = "ng-click-active";
        return function (n, i, r) {
          function o() {
            (d = !1), i.removeClass(v);
          }
          var a,
            s,
            u,
            c,
            f = e(r.ngClick),
            d = !1;
          i.on("touchstart", function (e) {
            (d = !0),
              3 === (a = e.target ? e.target : e.srcElement).nodeType &&
                (a = a.parentNode),
              i.addClass(v),
              (s = Date.now());
            var t = e.originalEvent || e,
              n = (t.touches && t.touches.length ? t.touches : [t])[0];
            (u = n.clientX), (c = n.clientY);
          }),
            i.on("touchcancel", function () {
              o();
            }),
            i.on("touchend", function (e) {
              var n = Date.now() - s,
                f = e.originalEvent || e,
                m = (
                  f.changedTouches && f.changedTouches.length
                    ? f.changedTouches
                    : f.touches && f.touches.length
                    ? f.touches
                    : [f]
                )[0],
                g = m.clientX,
                v = m.clientY,
                y = Math.sqrt(Math.pow(g - u, 2) + Math.pow(v - c, 2));
              d &&
                n < p &&
                y < h &&
                (l(g, v),
                a && a.blur(),
                (t.isDefined(r.disabled) && !1 !== r.disabled) ||
                  i.triggerHandler("click", [e])),
                o();
            }),
            (i.onclick = function () {}),
            i.on("click", function (e, t) {
              n.$apply(function () {
                f(n, { $event: t || e });
              });
            }),
            i.on("mousedown", function () {
              i.addClass(v);
            }),
            i.on("mousemove mouseup", function () {
              i.removeClass(v);
            });
        };
      },
    ];
    r("ngSwipeLeft", -1, "swipeleft"), r("ngSwipeRight", 1, "swiperight");
  })(window, window.angular),
  angular
    .module("RGSharedDirectives", [])
    .directive("templateColorPalette", function () {
      return {
        restrict: "AE",
        scope: { colors: "=", sourceColor: "=", updateColorFn: "&" },
        templateUrl: "templateColorPalette.html",
        link: function (e) {
          (e.changeColor = function (t, n) {
            e.updateColorFn()(t),
              $(".color-circle").removeClass("selected"),
              $(n.target).closest(".color-circle").addClass("selected");
          }),
            (e.isColorSelected = function (t) {
              return t.id == e.sourceColor.id;
            });
        },
      };
    })
    .directive("rgFader", function () {
      return function (e, t, n) {
        e.$watch(n.rgFader, function () {
          $(t).stop().hide().fadeIn({ duration: 300, easing: "swing" });
        });
      };
    }),
  (function (e, t, n, i) {
    "use strict";
    var r = n("html"),
      o = n(e),
      a = n(t),
      s = (n.fancybox = function () {
        s.open.apply(this, arguments);
      }),
      u = navigator.userAgent.match(/msie/i),
      l = null,
      c = t.createTouch !== i,
      f = function (e) {
        return e && e.hasOwnProperty && e instanceof n;
      },
      d = function (e) {
        return e && "string" === n.type(e);
      },
      p = function (e) {
        return d(e) && e.indexOf("%") > 0;
      },
      h = function (e) {
        return (
          e &&
          !(e.style.overflow && "hidden" === e.style.overflow) &&
          ((e.clientWidth && e.scrollWidth > e.clientWidth) ||
            (e.clientHeight && e.scrollHeight > e.clientHeight))
        );
      },
      m = function (e, t) {
        var n = parseInt(e, 10) || 0;
        return t && p(e) && (n = (s.getViewport()[t] / 100) * n), Math.ceil(n);
      },
      g = function (e, t) {
        return m(e, t) + "px";
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
        autoCenter: !c,
        fitToView: !0,
        aspectRatio: !1,
        topRatio: 0.5,
        leftRatio: 0.5,
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
        ajax: { dataType: "html", headers: { "X-fancyBox": !0 } },
        iframe: { scrolling: "auto", preload: !0 },
        swf: {
          wmode: "transparent",
          allowfullscreen: "true",
          allowscriptaccess: "always",
        },
        keys: {
          next: { 13: "left", 34: "up", 39: "left", 40: "up" },
          prev: { 8: "right", 33: "down", 37: "right", 38: "down" },
          close: [27],
          play: [32],
          toggle: [70],
        },
        direction: { next: "left", prev: "right" },
        scrollOutside: !0,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        tpl: {
          wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
          image: '<img class="fancybox-image" src="{href}" alt="" />',
          iframe:
            '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
            (u ? ' allowtransparency="true"' : "") +
            "></iframe>",
          error:
            '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
          closeBtn:
            '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
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
        helpers: { overlay: !0, title: !0 },
        onCancel: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeChange: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
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
      player: { timer: null, isActive: !1 },
      ajaxLoad: null,
      imgPreload: null,
      transitions: {},
      helpers: {},
      open: function (e, t) {
        if (e && (n.isPlainObject(t) || (t = {}), !1 !== s.close(!0)))
          return (
            n.isArray(e) || (e = f(e) ? n(e).get() : [e]),
            n.each(e, function (r, o) {
              var a,
                u,
                l,
                c,
                p,
                h,
                m,
                g = {};
              "object" === n.type(o) &&
                (o.nodeType && (o = n(o)),
                f(o)
                  ? ((g = {
                      href: o.data("fancybox-href") || o.attr("href"),
                      title: o.data("fancybox-title") || o.attr("title"),
                      isDom: !0,
                      element: o,
                    }),
                    n.metadata && n.extend(!0, g, o.metadata()))
                  : (g = o)),
                (a = t.href || g.href || (d(o) ? o : null)),
                (u = t.title !== i ? t.title : g.title || ""),
                !(c = (l = t.content || g.content)
                  ? "html"
                  : t.type || g.type) &&
                  g.isDom &&
                  ((c = o.data("fancybox-type")) ||
                    (c = (p = o.prop("class").match(/fancybox\.(\w+)/))
                      ? p[1]
                      : null)),
                d(a) &&
                  (c ||
                    (s.isImage(a)
                      ? (c = "image")
                      : s.isSWF(a)
                      ? (c = "swf")
                      : "#" === a.charAt(0)
                      ? (c = "inline")
                      : d(o) && ((c = "html"), (l = o))),
                  "ajax" === c &&
                    ((a = (h = a.split(/\s+/, 2)).shift()), (m = h.shift()))),
                l ||
                  ("inline" === c
                    ? a
                      ? (l = n(d(a) ? a.replace(/.*(?=#[^\s]+$)/, "") : a))
                      : g.isDom && (l = o)
                    : "html" === c
                    ? (l = a)
                    : c || a || !g.isDom || ((c = "inline"), (l = o))),
                n.extend(g, {
                  href: a,
                  type: c,
                  content: l,
                  title: u,
                  selector: m,
                }),
                (e[r] = g);
            }),
            (s.opts = n.extend(!0, {}, s.defaults, t)),
            t.keys !== i &&
              (s.opts.keys = !!t.keys && n.extend({}, s.defaults.keys, t.keys)),
            (s.group = e),
            s._start(s.opts.index)
          );
      },
      cancel: function () {
        var e = s.coming;
        e &&
          !1 !== s.trigger("onCancel") &&
          (s.hideLoading(),
          s.ajaxLoad && s.ajaxLoad.abort(),
          (s.ajaxLoad = null),
          s.imgPreload && (s.imgPreload.onload = s.imgPreload.onerror = null),
          e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
          (s.coming = null),
          s.current || s._afterZoomOut(e));
      },
      close: function (e) {
        s.cancel(),
          !1 !== s.trigger("beforeClose") &&
            (s.unbindEvents(),
            s.isActive &&
              (s.isOpen && !0 !== e
                ? ((s.isOpen = s.isOpened = !1),
                  (s.isClosing = !0),
                  n(".fancybox-item, .fancybox-nav").remove(),
                  s.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                  s.transitions[s.current.closeMethod]())
                : (n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                  s._afterZoomOut())));
      },
      play: function (e) {
        var t = function () {
            clearTimeout(s.player.timer);
          },
          n = function () {
            t(),
              s.current &&
                s.player.isActive &&
                (s.player.timer = setTimeout(s.next, s.current.playSpeed));
          },
          i = function () {
            t(),
              a.unbind(".player"),
              (s.player.isActive = !1),
              s.trigger("onPlayEnd");
          },
          r = function () {
            s.current &&
              (s.current.loop || s.current.index < s.group.length - 1) &&
              ((s.player.isActive = !0),
              a.bind({
                "onCancel.player beforeClose.player": i,
                "onUpdate.player": n,
                "beforeLoad.player": t,
              }),
              n(),
              s.trigger("onPlayStart"));
          };
        !0 === e || (!s.player.isActive && !1 !== e) ? r() : i();
      },
      next: function (e) {
        var t = s.current;
        t && (d(e) || (e = t.direction.next), s.jumpto(t.index + 1, e, "next"));
      },
      prev: function (e) {
        var t = s.current;
        t && (d(e) || (e = t.direction.prev), s.jumpto(t.index - 1, e, "prev"));
      },
      jumpto: function (e, t, n) {
        var r = s.current;
        r &&
          ((e = m(e)),
          (s.direction = t || r.direction[e >= r.index ? "next" : "prev"]),
          (s.router = n || "jumpto"),
          r.loop &&
            (e < 0 && (e = r.group.length + (e % r.group.length)),
            (e %= r.group.length)),
          r.group[e] !== i && (s.cancel(), s._start(e)));
      },
      reposition: function (e, t) {
        // var i,
        //   r = s.current,
        //   o = r ? r.wrap : null;
        // o &&
        //   ((i = s._getPosition(t)),
        //   e && "scroll" === e.type
        //     ? (delete i.position, o.stop(!0, !0).animate(i, 200))
        //     : (o.css(i), (r.pos = n.extend({}, r.dim, i))));
      },
      update: function (e) {
        // var t = e && e.type,
        //   n = !t || "orientationchange" === t;
        // n && (clearTimeout(l), (l = null)),
        //   s.isOpen &&
        //     !l &&
        //     (l = setTimeout(
        //       function () {
        //         var i = s.current;
        //         i &&
        //           !s.isClosing &&
        //           (s.wrap.removeClass("fancybox-tmp"),
        //           (n || "load" === t || ("resize" === t && i.autoResize)) &&
        //             s._setDimension(),
        //           ("scroll" === t && i.canShrink) || s.reposition(e),
        //           s.trigger("onUpdate"),
        //           (l = null));
        //       },
        //       n && !c ? 0 : 300
        //     ));
      },
      toggle: function (e) {
        s.isOpen &&
          ((s.current.fitToView =
            "boolean" === n.type(e) ? e : !s.current.fitToView),
          c &&
            (s.wrap.removeAttr("style").addClass("fancybox-tmp"),
            s.trigger("onUpdate")),
          s.update());
      },
      hideLoading: function () {
        a.unbind(".loading"), n("#fancybox-loading").remove();
      },
      showLoading: function () {
        var e, t;
        s.hideLoading(),
          (e = n('<div id="fancybox-loading"><div></div></div>')
            .click(s.cancel)
            .appendTo("body")),
          a.bind("keydown.loading", function (e) {
            27 === (e.which || e.keyCode) && (e.preventDefault(), s.cancel());
          }),
          s.defaults.fixed ||
            ((t = s.getViewport()),
            e.css({
              position: "absolute",
              top: 0.5 * t.h + t.y,
              left: 0.5 * t.w + t.x,
            }));
      },
      getViewport: function () {
        var t = (s.current && s.current.locked) || !1,
          n = { x: o.scrollLeft(), y: o.scrollTop() };
        return (
          t
            ? ((n.w = t[0].clientWidth), (n.h = t[0].clientHeight))
            : ((n.w = c && e.innerWidth ? e.innerWidth : o.width()),
              (n.h = c && e.innerHeight ? e.innerHeight : o.height())),
          n
        );
      },
      unbindEvents: function () {
        s.wrap && f(s.wrap) && s.wrap.unbind(".fb"),
          a.unbind(".fb"),
          o.unbind(".fb");
      },
      bindEvents: function () {
        // var e,
        //   t = s.current;
        // t &&
        //   (o.bind(
        //     "orientationchange.fb" +
        //       (c ? "" : " resize.fb") +
        //       (t.autoCenter && !t.locked ? " scroll.fb" : ""),
        //     s.update
        //   ),
        //   (e = t.keys) &&
        //     a.bind("keydown.fb", function (r) {
        //       var o = r.which || r.keyCode,
        //         a = r.target || r.srcElement;
        //       if (27 === o && s.coming) return !1;
        //       r.ctrlKey ||
        //         r.altKey ||
        //         r.shiftKey ||
        //         r.metaKey ||
        //         (a && (a.type || n(a).is("[contenteditable]"))) ||
        //         n.each(e, function (e, a) {
        //           return t.group.length > 1 && a[o] !== i
        //             ? (s[e](a[o]), r.preventDefault(), !1)
        //             : n.inArray(o, a) > -1
        //             ? (s[e](), r.preventDefault(), !1)
        //             : void 0;
        //         });
        //     }),
        //   n.fn.mousewheel &&
        //     t.mouseWheel &&
        //     s.wrap.bind("mousewheel.fb", function (e, i, r, o) {
        //       for (
        //         var a = e.target || null, u = n(a), l = !1;
        //         u.length &&
        //         !(l || u.is(".fancybox-skin") || u.is(".fancybox-wrap"));

        //       )
        //         (l = h(u[0])), (u = n(u).parent());
        //       0 === i ||
        //         l ||
        //         (s.group.length > 1 &&
        //           !t.canShrink &&
        //           (o > 0 || r > 0
        //             ? s.prev(o > 0 ? "down" : "left")
        //             : (o < 0 || r < 0) && s.next(o < 0 ? "up" : "right"),
        //           e.preventDefault()));
        //     }));
      },
      trigger: function (e, t) {
        var i,
          r = t || s.coming || s.current;
        if (r) {
          if (
            (n.isFunction(r[e]) &&
              (i = r[e].apply(r, Array.prototype.slice.call(arguments, 1))),
            !1 === i)
          )
            return !1;
          r.helpers &&
            n.each(r.helpers, function (t, i) {
              i &&
                s.helpers[t] &&
                n.isFunction(s.helpers[t][e]) &&
                s.helpers[t][e](n.extend(!0, {}, s.helpers[t].defaults, i), r);
            }),
            a.trigger(e);
        }
      },
      isImage: function (e) {
        return (
          d(e) &&
          e.match(
            /(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i
          )
        );
      },
      isSWF: function (e) {
        return d(e) && e.match(/\.(swf)((\?|#).*)?$/i);
      },
      _start: function (e) {
        var t,
          i,
          r,
          o,
          a,
          u = {};
        if (((e = m(e)), !(t = s.group[e] || null))) return !1;
        if (
          ((o = (u = n.extend(!0, {}, s.opts, t)).margin),
          (a = u.padding),
          "number" === n.type(o) && (u.margin = [o, o, o, o]),
          "number" === n.type(a) && (u.padding = [a, a, a, a]),
          u.modal &&
            n.extend(!0, u, {
              closeBtn: !1,
              closeClick: !1,
              nextClick: !1,
              arrows: !1,
              mouseWheel: !1,
              keys: null,
              helpers: { overlay: { closeClick: !1 } },
            }),
          u.autoSize && (u.autoWidth = u.autoHeight = !0),
          "auto" === u.width && (u.autoWidth = !0),
          "auto" === u.height && (u.autoHeight = !0),
          (u.group = s.group),
          (u.index = e),
          (s.coming = u),
          !1 !== s.trigger("beforeLoad"))
        ) {
          if (((r = u.type), (i = u.href), !r))
            return (
              (s.coming = null),
              !(!s.current || !s.router || "jumpto" === s.router) &&
                ((s.current.index = e), s[s.router](s.direction))
            );
          if (
            ((s.isActive = !0),
            ("image" !== r && "swf" !== r) ||
              ((u.autoHeight = u.autoWidth = !1), (u.scrolling = "visible")),
            "image" === r && (u.aspectRatio = !0),
            "iframe" === r && c && (u.scrolling = "scroll"),
            (u.wrap = n(u.tpl.wrap)
              .addClass(
                "fancybox-" +
                  (c ? "mobile" : "desktop") +
                  " fancybox-type-" +
                  r +
                  " fancybox-tmp " +
                  u.wrapCSS
              )
              .appendTo(u.parent || "body")),
            n.extend(u, {
              skin: n(".fancybox-skin", u.wrap),
              outer: n(".fancybox-outer", u.wrap),
              inner: n(".fancybox-inner", u.wrap),
            }),
            n.each(["Top", "Right", "Bottom", "Left"], function (e, t) {
              u.skin.css("padding" + t, g(u.padding[e]));
            }),
            s.trigger("onReady"),
            "inline" === r || "html" === r)
          ) {
            if (!u.content || !u.content.length) return s._error("content");
          } else if (!i) return s._error("href");
          "image" === r
            ? s._loadImage()
            : "ajax" === r
            ? s._loadAjax()
            : "iframe" === r
            ? s._loadIframe()
            : s._afterLoad();
        } else s.coming = null;
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
          content: s.coming.tpl.error,
        }),
          s._afterLoad();
      },
      _loadImage: function () {
        var e = (s.imgPreload = new Image());
        (e.onload = function () {
          (this.onload = this.onerror = null),
            (s.coming.width = this.width / s.opts.pixelRatio),
            (s.coming.height = this.height / s.opts.pixelRatio),
            s._afterLoad();
        }),
          (e.onerror = function () {
            (this.onload = this.onerror = null), s._error("image");
          }),
          (e.src = s.coming.href),
          !0 !== e.complete && s.showLoading();
      },
      _loadAjax: function () {
        var e = s.coming;
        s.showLoading(),
          (s.ajaxLoad = n.ajax(
            n.extend({}, e.ajax, {
              url: e.href,
              error: function (e, t) {
                s.coming && "abort" !== t
                  ? s._error("ajax", e)
                  : s.hideLoading();
              },
              success: function (t, n) {
                "success" === n && ((e.content = t), s._afterLoad());
              },
            })
          ));
      },
      _loadIframe: function () {
        var e = s.coming,
          t = n(e.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
            .attr("scrolling", c ? "auto" : e.iframe.scrolling)
            .attr("src", e.href);
        n(e.wrap).bind("onReset", function () {
          try {
            n(this)
              .find("iframe")
              .hide()
              .attr("src", "//about:blank")
              .end()
              .empty();
          } catch (e) {}
        }),
          e.iframe.preload &&
            (s.showLoading(),
            t.one("load", function () {
              n(this).data("ready", 1),
                c || n(this).bind("load.fb", s.update),
                n(this)
                  .parents(".fancybox-wrap")
                  .width("100%")
                  .removeClass("fancybox-tmp")
                  .show(),
                s._afterLoad();
            })),
          (e.content = t.appendTo(e.inner)),
          e.iframe.preload || s._afterLoad();
      },
      _preloadImages: function () {
        var e,
          t,
          n = s.group,
          i = s.current,
          r = n.length,
          o = i.preload ? Math.min(i.preload, r - 1) : 0;
        for (t = 1; t <= o; t += 1)
          "image" === (e = n[(i.index + t) % r]).type &&
            e.href &&
            (new Image().src = e.href);
      },
      _afterLoad: function () {
        var e,
          t,
          i,
          r,
          o,
          a,
          u = s.coming,
          l = s.current,
          c = "fancybox-placeholder";
        if ((s.hideLoading(), u && !1 !== s.isActive)) {
          if (!1 === s.trigger("afterLoad", u, l))
            return (
              u.wrap.stop(!0).trigger("onReset").remove(),
              void (s.coming = null)
            );
          switch (
            (l &&
              (s.trigger("beforeChange", l),
              l.wrap
                .stop(!0)
                .removeClass("fancybox-opened")
                .find(".fancybox-item, .fancybox-nav")
                .remove()),
            s.unbindEvents(),
            (e = u),
            (t = u.content),
            (i = u.type),
            (r = u.scrolling),
            n.extend(s, {
              wrap: e.wrap,
              skin: e.skin,
              outer: e.outer,
              inner: e.inner,
              current: e,
              previous: l,
            }),
            (o = e.href),
            i)
          ) {
            case "inline":
            case "ajax":
            case "html":
              e.selector
                ? (t = n("<div>").html(t).find(e.selector))
                : f(t) &&
                  (t.data(c) ||
                    t.data(
                      c,
                      n('<div class="' + c + '"></div>')
                        .insertAfter(t)
                        .hide()
                    ),
                  (t = t.show().detach()),
                  e.wrap.bind("onReset", function () {
                    n(this).find(t).length &&
                      t.hide().replaceAll(t.data(c)).data(c, !1);
                  }));
              break;
            case "image":
              t = e.tpl.image.replace("{href}", o);
              break;
            case "swf":
              (t =
                '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' +
                o +
                '"></param>'),
                (a = ""),
                n.each(e.swf, function (e, n) {
                  (t += '<param name="' + e + '" value="' + n + '"></param>'),
                    (a += " " + e + '="' + n + '"');
                }),
                (t +=
                  '<embed src="' +
                  o +
                  '" type="application/x-shockwave-flash" width="100%" height="100%"' +
                  a +
                  "></embed></object>");
          }
          (f(t) && t.parent().is(e.inner)) || e.inner.append(t),
            s.trigger("beforeShow"),
            e.inner.css(
              "overflow",
              "yes" === r ? "scroll" : "no" === r ? "hidden" : r
            ),
            s._setDimension(),
            s.reposition(),
            (s.isOpen = !1),
            (s.coming = null),
            s.bindEvents(),
            s.isOpened
              ? l.prevMethod && s.transitions[l.prevMethod]()
              : n(".fancybox-wrap")
                  .not(e.wrap)
                  .stop(!0)
                  .trigger("onReset")
                  .remove(),
            s.transitions[s.isOpened ? e.nextMethod : e.openMethod](),
            s._preloadImages();
        }
      },
      _setDimension: function () {
        var e,
          t,
          i,
          r,
          o,
          a,
          u,
          l,
          c,
          f,
          d,
          h,
          v,
          y,
          $,
          b = s.getViewport(),
          x = 0,
          w = !1,
          C = !1,
          S = s.wrap,
          T = s.skin,
          k = s.inner,
          E = s.current,
          A = E.width,
          _ = E.height,
          O = E.minWidth,
          N = E.minHeight,
          D = E.maxWidth,
          M = E.maxHeight,
          I = E.scrolling,
          j = E.scrollOutside ? E.scrollbarWidth : 0,
          P = E.margin,
          R = m(P[1] + P[3]),
          L = m(P[0] + P[2]);
        if (
          (S.add(T)
            .add(k)
            .width("auto")
            .height("auto")
            .removeClass("fancybox-tmp"),
          (i = R + (e = m(T.outerWidth(!0) - T.width()))),
          (r = L + (t = m(T.outerHeight(!0) - T.height()))),
          (o = p(A) ? ((b.w - i) * m(A)) / 100 : A),
          (a = p(_) ? ((b.h - r) * m(_)) / 100 : _),
          "iframe" === E.type)
        ) {
          if (((y = E.content), E.autoHeight && 1 === y.data("ready")))
            try {
              y[0].contentWindow.document.location &&
                (k.width(o).height(9999),
                ($ = y.contents().find("body")),
                j && $.css("overflow-x", "hidden"),
                (a = $.outerHeight(!0)));
            } catch (H) {}
        } else
          (E.autoWidth || E.autoHeight) &&
            (k.addClass("fancybox-tmp"),
            E.autoWidth || k.width(o),
            E.autoHeight || k.height(a),
            E.autoWidth && (o = k.width()),
            E.autoHeight && (a = k.height()),
            k.removeClass("fancybox-tmp"));
        if (
          ((A = m(o)),
          (_ = m(a)),
          (c = o / a),
          (O = m(p(O) ? m(O, "w") - i : O)),
          (D = m(p(D) ? m(D, "w") - i : D)),
          (N = m(p(N) ? m(N, "h") - r : N)),
          (u = D),
          (l = M = m(p(M) ? m(M, "h") - r : M)),
          E.fitToView &&
            ((D = Math.min(b.w - i, D)), (M = Math.min(b.h - r, M))),
          (h = b.w - R),
          (v = b.h - L),
          E.aspectRatio
            ? (A > D && (_ = m((A = D) / c)),
              _ > M && (A = m((_ = M) * c)),
              A < O && (_ = m((A = O) / c)),
              _ < N && (A = m((_ = N) * c)))
            : ((A = Math.max(O, Math.min(A, D))),
              E.autoHeight &&
                "iframe" !== E.type &&
                (k.width(A), (_ = k.height())),
              (_ = Math.max(N, Math.min(_, M)))),
          E.fitToView)
        )
          if (
            (k.width(A).height(_),
            S.width(A + e),
            (f = S.width()),
            (d = S.height()),
            E.aspectRatio)
          )
            for (; (f > h || d > v) && A > O && _ > N && !(x++ > 19); )
              (_ = Math.max(N, Math.min(M, _ - 10))),
                (A = m(_ * c)) < O && (_ = m((A = O) / c)),
                A > D && (_ = m((A = D) / c)),
                k.width(A).height(_),
                S.width(A + e),
                (f = S.width()),
                (d = S.height());
          else
            (A = Math.max(O, Math.min(A, A - (f - h)))),
              (_ = Math.max(N, Math.min(_, _ - (d - v))));
        j && "auto" === I && _ < a && A + e + j < h && (A += j),
          k.width(A).height(_),
          S.width(A + e),
          (f = S.width()),
          (d = S.height()),
          (w = (f > h || d > v) && A > O && _ > N),
          (C = E.aspectRatio
            ? A < u && _ < l && A < o && _ < a
            : (A < u || _ < l) && (A < o || _ < a)),
          n.extend(E, {
            dim: { width: g(f), height: g(d) },
            origWidth: o,
            origHeight: a,
            canShrink: w,
            canExpand: C,
            wPadding: e,
            hPadding: t,
            wrapSpace: d - T.outerHeight(!0),
            skinSpace: T.height() - _,
          }),
          !y && E.autoHeight && _ > N && _ < M && !C && k.height("auto");
      },
      _getPosition: function (e) {
        var t = s.current,
          n = s.getViewport(),
          i = t.margin,
          r = s.wrap.width() + i[1] + i[3],
          o = s.wrap.height() + i[0] + i[2],
          a = { position: "absolute", top: i[0], left: i[3] };
        return (
          t.autoCenter && t.fixed && !e && o <= n.h && r <= n.w
            ? (a.position = "fixed")
            : t.locked || ((a.top += n.y), (a.left += n.x)),
          (a.top = g(Math.max(a.top, a.top + (n.h - o) * t.topRatio))),
          (a.left = g(Math.max(a.left, a.left + (n.w - r) * t.leftRatio))),
          a
        );
      },
      _afterZoomIn: function () {
        var e = s.current;
        e &&
          ((s.isOpen = s.isOpened = !0),
          s.wrap.css("overflow", "visible").addClass("fancybox-opened"),
          s.update(),
          (e.closeClick || (e.nextClick && s.group.length > 1)) &&
            s.inner.css("cursor", "pointer").bind("click.fb", function (t) {
              n(t.target).is("a") ||
                n(t.target).parent().is("a") ||
                (t.preventDefault(), s[e.closeClick ? "close" : "next"]());
            }),
          e.closeBtn &&
            n(e.tpl.closeBtn)
              .appendTo(s.skin)
              .bind("click.fb", function (e) {
                e.preventDefault(), s.close();
              }),
          e.arrows &&
            s.group.length > 1 &&
            ((e.loop || e.index > 0) &&
              n(e.tpl.prev).appendTo(s.outer).bind("click.fb", s.prev),
            (e.loop || e.index < s.group.length - 1) &&
              n(e.tpl.next).appendTo(s.outer).bind("click.fb", s.next)),
          s.trigger("afterShow"),
          e.loop || e.index !== e.group.length - 1
            ? s.opts.autoPlay &&
              !s.player.isActive &&
              ((s.opts.autoPlay = !1), s.play())
            : s.play(!1));
      },
      _afterZoomOut: function (e) {
        (e = e || s.current),
          n(".fancybox-wrap").trigger("onReset").remove(),
          n.extend(s, {
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
            inner: null,
          }),
          s.trigger("afterClose", e);
      },
    }),
      (s.transitions = {
        getOrigPosition: function () {
          var e = s.current,
            t = e.element,
            n = e.orig,
            i = {},
            r = 50,
            o = 50,
            a = e.hPadding,
            u = e.wPadding,
            l = s.getViewport();
          return (
            !n &&
              e.isDom &&
              t.is(":visible") &&
              ((n = t.find("img:first")).length || (n = t)),
            f(n)
              ? ((i = n.offset()),
                n.is("img") && ((r = n.outerWidth()), (o = n.outerHeight())))
              : ((i.top = l.y + (l.h - o) * e.topRatio),
                (i.left = l.x + (l.w - r) * e.leftRatio)),
            ("fixed" === s.wrap.css("position") || e.locked) &&
              ((i.top -= l.y), (i.left -= l.x)),
            (i = {
              top: g(i.top - a * e.topRatio),
              left: g(i.left - u * e.leftRatio),
              width: g(r + u),
              height: g(o + a),
            })
          );
        },
        step: function (e, t) {
          var n,
            i,
            r = t.prop,
            o = s.current,
            a = o.wrapSpace,
            u = o.skinSpace;
          ("width" !== r && "height" !== r) ||
            ((n = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start)),
            s.isClosing && (n = 1 - n),
            (i = e - ("width" === r ? o.wPadding : o.hPadding)),
            s.skin[r](m("width" === r ? i : i - a * n)),
            s.inner[r](m("width" === r ? i : i - a * n - u * n)));
        },
        zoomIn: function () {
          var e = s.current,
            t = e.pos,
            i = e.openEffect,
            r = "elastic" === i,
            o = n.extend({ opacity: 1 }, t);
          delete o.position,
            r
              ? ((t = this.getOrigPosition()),
                e.openOpacity && (t.opacity = 0.1))
              : "fade" === i && (t.opacity = 0.1),
            s.wrap
              .css(t)
              .animate(o, {
                duration: "none" === i ? 0 : e.openSpeed,
                easing: e.openEasing,
                step: r ? this.step : null,
                complete: s._afterZoomIn,
              });
        },
        zoomOut: function () {
          var e = s.current,
            t = e.closeEffect,
            n = "elastic" === t,
            i = { opacity: 0.1 };
          n &&
            ((i = this.getOrigPosition()), e.closeOpacity && (i.opacity = 0.1)),
            s.wrap.animate(i, {
              duration: "none" === t ? 0 : e.closeSpeed,
              easing: e.closeEasing,
              step: n ? this.step : null,
              complete: s._afterZoomOut,
            });
        },
        changeIn: function () {
          var e,
            t = s.current,
            n = t.nextEffect,
            i = t.pos,
            r = { opacity: 1 },
            o = s.direction,
            a = 200;
          (i.opacity = 0.1),
            "elastic" === n &&
              ((e = "down" === o || "up" === o ? "top" : "left"),
              "down" === o || "right" === o
                ? ((i[e] = g(m(i[e]) - a)), (r[e] = "+=" + a + "px"))
                : ((i[e] = g(m(i[e]) + a)), (r[e] = "-=" + a + "px"))),
            "none" === n
              ? s._afterZoomIn()
              : s.wrap
                  .css(i)
                  .animate(r, {
                    duration: t.nextSpeed,
                    easing: t.nextEasing,
                    complete: s._afterZoomIn,
                  });
        },
        changeOut: function () {
          var e = s.previous,
            t = e.prevEffect,
            i = { opacity: 0.1 },
            r = s.direction,
            o = 200;
          "elastic" === t &&
            (i["down" === r || "up" === r ? "top" : "left"] =
              ("up" === r || "left" === r ? "-" : "+") + "=" + o + "px"),
            e.wrap.animate(i, {
              duration: "none" === t ? 0 : e.prevSpeed,
              easing: e.prevEasing,
              complete: function () {
                n(this).trigger("onReset").remove();
              },
            });
        },
      }),
      (s.helpers.overlay = {
        defaults: {
          closeClick: !0,
          speedOut: 200,
          showEarly: !0,
          css: {},
          locked: !c,
          fixed: !0,
        },
        overlay: null,
        fixed: !1,
        el: n("html"),
        create: function (e) {
          (e = n.extend({}, this.defaults, e)),
            this.overlay && this.close(),
            (this.overlay = n('<div class="fancybox-overlay"></div>').appendTo(
              s.coming ? s.coming.parent : e.parent
            )),
            (this.fixed = !1),
            e.fixed &&
              s.defaults.fixed &&
              (this.overlay.addClass("fancybox-overlay-fixed"),
              (this.fixed = !0));
        },
        open: function (e) {
          var t = this;
          (e = n.extend({}, this.defaults, e)),
            this.overlay
              ? this.overlay.unbind(".overlay").width("auto").height("auto")
              : this.create(e),
            this.fixed ||
              (o.bind("resize.overlay", n.proxy(this.update, this)),
              this.update()),
            e.closeClick &&
              this.overlay.bind("click.overlay", function (e) {
                if (n(e.target).hasClass("fancybox-overlay"))
                  return s.isActive ? s.close() : t.close(), !1;
              }),
            this.overlay.css(e.css).show();
        },
        close: function () {
          var e, t;
          o.unbind("resize.overlay"),
            this.el.hasClass("fancybox-lock") &&
              (n(".fancybox-margin").removeClass("fancybox-margin"),
              (e = o.scrollTop()),
              (t = o.scrollLeft()),
              this.el.removeClass("fancybox-lock"),
              o.scrollTop(e).scrollLeft(t)),
            n(".fancybox-overlay").remove().hide(),
            n.extend(this, { overlay: null, fixed: !1 });
        },
        update: function () {
          var e,
            n = "100%";
          this.overlay.width(n).height("100%"),
            u
              ? ((e = Math.max(
                  t.documentElement.offsetWidth,
                  t.body.offsetWidth
                )),
                a.width() > e && (n = a.width()))
              : a.width() > o.width() && (n = a.width()),
            this.overlay.width(n).height(a.height());
        },
        onReady: function (e, t) {
          var i = this.overlay;
          n(".fancybox-overlay").stop(!0, !0),
            i || this.create(e),
            e.locked &&
              this.fixed &&
              t.fixed &&
              (i ||
                (this.margin =
                  a.height() > o.height() &&
                  n("html").css("margin-right").replace("px", "")),
              (t.locked = this.overlay.append(t.wrap)),
              (t.fixed = !1)),
            !0 === e.showEarly && this.beforeShow.apply(this, arguments);
        },
        beforeShow: function (e, t) {
          var i, r;
          t.locked &&
            (!1 !== this.margin &&
              (n("*")
                .filter(function () {
                  return (
                    "fixed" === n(this).css("position") &&
                    !n(this).hasClass("fancybox-overlay") &&
                    !n(this).hasClass("fancybox-wrap")
                  );
                })
                .addClass("fancybox-margin"),
              this.el.addClass("fancybox-margin")),
            (i = o.scrollTop()),
            (r = o.scrollLeft()),
            this.el.addClass("fancybox-lock"),
            o.scrollTop(i).scrollLeft(r)),
            this.open(e);
        },
        onUpdate: function () {
          this.fixed || this.update();
        },
        afterClose: function (e) {
          this.overlay &&
            !s.coming &&
            this.overlay.fadeOut(e.speedOut, n.proxy(this.close, this));
        },
      }),
      (s.helpers.title = {
        defaults: { type: "float", position: "bottom" },
        beforeShow: function (e) {
          var t,
            i,
            r = s.current,
            o = r.title,
            a = e.type;
          if (
            (n.isFunction(o) && (o = o.call(r.element, r)),
            d(o) && "" !== n.trim(o))
          ) {
            switch (
              ((t = n(
                '<div class="fancybox-title fancybox-title-' +
                  a +
                  '-wrap">' +
                  o +
                  "</div>"
              )),
              a)
            ) {
              case "inside":
                i = s.skin;
                break;
              case "outside":
                i = s.wrap;
                break;
              case "over":
                i = s.inner;
                break;
              default:
                (i = s.skin),
                  t.appendTo("body"),
                  u && t.width(t.width()),
                  t.wrapInner('<span class="child"></span>'),
                  (s.current.margin[2] += Math.abs(m(t.css("margin-bottom"))));
            }
            t["top" === e.position ? "prependTo" : "appendTo"](i);
          }
        },
      }),
      (n.fn.fancybox = function (e) {
        var t,
          i = n(this),
          r = this.selector || "",
          o = function (o) {
            var a,
              u,
              l = n(this).blur(),
              c = t;
            o.ctrlKey ||
              o.altKey ||
              o.shiftKey ||
              o.metaKey ||
              l.is(".fancybox-wrap") ||
              ((a = e.groupAttr || "data-fancybox-group"),
              (u = l.attr(a)) || ((a = "rel"), (u = l.get(0)[a])),
              u &&
                "" !== u &&
                "nofollow" !== u &&
                (c = (l = (l = r.length ? n(r) : i).filter(
                  "[" + a + '="' + u + '"]'
                )).index(this)),
              (e.index = c),
              !1 !== s.open(l, e) && o.preventDefault());
          };
        return (
          (t = (e = e || {}).index || 0),
          r && !1 !== e.live
            ? a
                .undelegate(r, "click.fb-start")
                .delegate(
                  r + ":not('.fancybox-item, .fancybox-nav')",
                  "click.fb-start",
                  o
                )
            : i.unbind("click.fb-start").bind("click.fb-start", o),
          this.filter("[data-fancybox-start=1]").trigger("click"),
          this
        );
      }),
      a.ready(function () {
        var t, o, a, u;
        n.scrollbarWidth === i &&
          (n.scrollbarWidth = function () {
            var e = n(
                '<div style="width:50px;height:50px;overflow:auto"><div/></div>'
              ).appendTo("body"),
              t = e.children(),
              i = t.innerWidth() - t.height(99).innerWidth();
            return e.remove(), i;
          }),
          n.support.fixedPosition === i &&
            (n.support.fixedPosition =
              ((a = n('<div style="position:fixed;top:20px;"></div>').appendTo(
                "body"
              )),
              (u = 20 === a[0].offsetTop || 15 === a[0].offsetTop),
              a.remove(),
              u)),
          n.extend(s.defaults, {
            scrollbarWidth: n.scrollbarWidth(),
            fixed: n.support.fixedPosition,
            parent: n("body"),
          }),
          (t = n(e).width()),
          r.addClass("fancybox-lock-test"),
          (o = n(e).width()),
          r.removeClass("fancybox-lock-test"),
          n(
            "<style type='text/css'>.fancybox-margin{margin-right:" +
              (o - t) +
              "px;}</style>"
          ).appendTo("head");
      });
  })(window, document, jQuery),
  (function (e) {
    var t = e.fancybox;
    t.helpers.buttons = {
      defaults: {
        skipSingle: !1,
        position: "top",
        tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>',
      },
      list: null,
      buttons: null,
      beforeLoad: function (e, t) {
        if (e.skipSingle && t.group.length < 2)
          return (t.helpers.buttons = !1), void (t.closeBtn = !0);
        t.margin["bottom" === e.position ? 2 : 0] += 30;
      },
      onPlayStart: function () {
        this.buttons &&
          this.buttons.play
            .attr("title", "Pause slideshow")
            .addClass("btnPlayOn");
      },
      onPlayEnd: function () {
        this.buttons &&
          this.buttons.play
            .attr("title", "Start slideshow")
            .removeClass("btnPlayOn");
      },
      afterShow: function (n, i) {
        var r = this.buttons;
        r ||
          ((this.list = e(n.tpl).addClass(n.position).appendTo("body")),
          (r = {
            prev: this.list.find(".btnPrev").click(t.prev),
            next: this.list.find(".btnNext").click(t.next),
            play: this.list.find(".btnPlay").click(t.play),
            toggle: this.list.find(".btnToggle").click(t.toggle),
            close: this.list.find(".btnClose").click(t.close),
          })),
          i.index > 0 || i.loop
            ? r.prev.removeClass("btnDisabled")
            : r.prev.addClass("btnDisabled"),
          i.loop || i.index < i.group.length - 1
            ? (r.next.removeClass("btnDisabled"),
              r.play.removeClass("btnDisabled"))
            : (r.next.addClass("btnDisabled"), r.play.addClass("btnDisabled")),
          (this.buttons = r),
          this.onUpdate(n, i);
      },
      onUpdate: function (e, t) {
        var n;
        this.buttons &&
          ((n = this.buttons.toggle.removeClass("btnDisabled btnToggleOn")),
          t.canShrink
            ? n.addClass("btnToggleOn")
            : t.canExpand || n.addClass("btnDisabled"));
      },
      beforeClose: function () {
        this.list && this.list.remove(),
          (this.list = null),
          (this.buttons = null);
      },
    };
  })(jQuery),
  (function (e) {
    e.fancybox.helpers.thumbs = {
      defaults: {
        width: 50,
        height: 50,
        position: "bottom",
        source: function (t) {
          var n;
          return (
            t.element && (n = e(t.element).find("img").attr("src")),
            !n && "image" === t.type && t.href && (n = t.href),
            n
          );
        },
      },
      wrap: null,
      list: null,
      width: 0,
      init: function (t, n) {
        var i,
          r = this,
          o = t.width,
          a = t.height,
          s = t.source;
        i = "";
        for (var u = 0; u < n.group.length; u++)
          i +=
            '<li><a style="width:' +
            o +
            "px;height:" +
            a +
            'px;" href="javascript:jQuery.fancybox.jumpto(' +
            u +
            ');"></a></li>';
        (this.wrap = e('<div id="fancybox-thumbs"></div>')
          .addClass(t.position)
          .appendTo("body")),
          (this.list = e("<ul>" + i + "</ul>").appendTo(this.wrap)),
          e.each(n.group, function (t) {
            var i = s(n.group[t]);
            i &&
              e("<img />")
                .load(function () {
                  var n,
                    i,
                    s,
                    u = this.width,
                    l = this.height;
                  r.list &&
                    u &&
                    l &&
                    ((n = u / o),
                    (i = l / a),
                    (s = r.list.children().eq(t).find("a")),
                    n >= 1 &&
                      i >= 1 &&
                      (n > i
                        ? ((u = Math.floor(u / i)), (l = a))
                        : ((u = o), (l = Math.floor(l / n)))),
                    e(this).css({
                      width: u,
                      height: l,
                      top: Math.floor(a / 2 - l / 2),
                      left: Math.floor(o / 2 - u / 2),
                    }),
                    s.width(o).height(a),
                    e(this).hide().appendTo(s).fadeIn(300));
                })
                .attr("src", i);
          }),
          (this.width = this.list.children().eq(0).outerWidth(!0)),
          this.list
            .width(this.width * (n.group.length + 1))
            .css(
              "left",
              Math.floor(
                0.5 * e(window).width() -
                  (n.index * this.width + 0.5 * this.width)
              )
            );
      },
      beforeLoad: function (e, t) {
        t.group.length < 2
          ? (t.helpers.thumbs = !1)
          : (t.margin["top" === e.position ? 0 : 2] += e.height + 15);
      },
      afterShow: function (e, t) {
        this.list ? this.onUpdate(e, t) : this.init(e, t),
          this.list
            .children()
            .removeClass("active")
            .eq(t.index)
            .addClass("active");
      },
      onUpdate: function (t, n) {
        this.list &&
          this.list
            .stop(!0)
            .animate(
              {
                left: Math.floor(
                  0.5 * e(window).width() -
                    (n.index * this.width + 0.5 * this.width)
                ),
              },
              150
            );
      },
      beforeClose: function () {
        this.wrap && this.wrap.remove(),
          (this.wrap = null),
          (this.list = null),
          (this.width = 0);
      },
    };
  })(jQuery),
  (function (e) {
    "use strict";
    var t = e.fancybox,
      n = function (t, n, i) {
        return (
          (i = i || ""),
          "object" === e.type(i) && (i = e.param(i, !0)),
          e.each(n, function (e, n) {
            t = t.replace("$" + e, n || "");
          }),
          i.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + i),
          t
        );
      };
    t.helpers.media = {
      defaults: {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: "opaque",
            enablejsapi: 1,
          },
          type: "iframe",
          url: "//www.youtube.com/embed/$3",
        },
        vimeo: {
          matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          type: "iframe",
          url: "//player.vimeo.com/video/$1",
        },
        metacafe: {
          matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
          params: { autoPlay: "yes" },
          type: "swf",
          url: function (t, n, i) {
            return (
              (i.swf.flashVars = "playerVars=" + e.param(n, !0)),
              "//www.metacafe.com/fplayer/" + t[1] + "/.swf"
            );
          },
        },
        dailymotion: {
          matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
          params: { additionalInfos: 0, autoStart: 1 },
          type: "swf",
          url: "//www.dailymotion.com/swf/video/$1",
        },
        twitvid: {
          matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
          params: { autoplay: 0 },
          type: "iframe",
          url: "//www.twitvid.com/embed.php?guid=$1",
        },
        twitpic: {
          matcher:
            /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
          type: "image",
          url: "//twitpic.com/show/full/$1/",
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: "image",
          url: "//$1/p/$2/media/?size=l",
        },
        google_maps: {
          matcher:
            /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
          type: "iframe",
          url: function (e) {
            return (
              "//maps.google." +
              e[1] +
              "/" +
              e[3] +
              e[4] +
              "&output=" +
              (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
            );
          },
        },
      },
      beforeLoad: function (t, i) {
        var r,
          o,
          a,
          s,
          u = i.href || "",
          l = !1;
        for (r in t)
          if (t.hasOwnProperty(r) && ((o = t[r]), (a = u.match(o.matcher)))) {
            (l = o.type),
              (s = e.extend(
                !0,
                {},
                o.params,
                i[r] || (e.isPlainObject(t[r]) ? t[r].params : null)
              )),
              (u =
                "function" === e.type(o.url)
                  ? o.url.call(this, a, s, i)
                  : n(o.url, a, s));
            break;
          }
        l && ((i.href = u), (i.type = l), (i.autoHeight = !1));
      },
    };
  })(jQuery);
var RGThrowException = function (e, t) {
    var n = new Error(e);
    throw ((n.stacktrace = t), n);
  },
  RGErrorHandler = function (e) {
    var t = null,
      n = {
        logErrorName: null,
        requestPayload: null,
        requestUrl: null,
        requestVerb: null,
        prettyErrorMessage: "Sorry, but an error occurred. Try again?",
        handler: function () {},
        preHandler: null,
        errorExtras: {},
        suppressClientDisconnected: !0,
      },
      i = $.extend({}, n, e);
    return (
      i.logErrorName ||
        RGThrowException("RGErrorHandler requires 'logErrorName' property", t),
      function (e) {
        if (!i.suppressClientDisconnected || (0 != e.status && 499 != e.status))
          if (
            /\.rileygrey\.com$/.test(window.location.hostname) &&
            401 == e.status
          )
            alert(
              "It looks like you are no longer logged into Riley & Grey. Please refresh this page to log back into Riley & Grey."
            );
          else if (
            /\.rileygrey\.com$/.test(window.location.hostname) &&
            503 == e.status
          )
            alert(
              "It looks like Riley & Grey is briefly down for maintenance. Please try again in a few minutes. We apologize for any inconvenience."
            );
          else {
            var t = $.extend(
              {},
              { "xhr.status": e.status, "xhr.statusText": e.statusText },
              i.errorExtras
            );
            try {
              if (
                ((t["xhr.headers"] = e.getAllResponseHeaders()),
                i.requestPayload && (t["xhr.request"] = i.requestPayload),
                i.requestUrl && (t["xhr.url"] = i.requestUrl),
                i.requestVerb && (t["xhr.verb"] = i.requestVerb),
                i.requestId && (t["xhr.rid"] = i.requestId),
                e.responseJSON)
              )
                t["xhr.response"] = e.responseJSON;
              else {
                var n = 2500,
                  r = Math.round(e.responseText.length / 2),
                  o = r - n / 2;
                o < 0 && (o = 0);
                var a = r + n / 2;
                a > e.responseText.length && (a = e.responseText.length),
                  (t["xhr.response"] = e.responseText.substring(o, a));
              }
            } catch (e) {
              t["xhr.trycatch"] = e;
            }
            var s = !0;
            i.preHandler && (s = !i.preHandler(e)),
              s &&
                (Sentry.captureMessage(i.logErrorName, { extra: t }),
                alert(i.prettyErrorMessage)),
              i.handler && i.handler(e);
          }
      }
    );
  },
  RGAJAX = function (e) {
    var t = null,
      n = {
        url: null,
        type: "GET",
        data: null,
        success: function () {},
        error: { logErrorName: null },
      },
      i = function () {
        return (
          "ajax-" +
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
            var t = (16 * Math.random()) | 0;
            return ("x" == e ? t : (3 & t) | 8).toString(16);
          })
        );
      },
      r = $.extend({}, n, e),
      o = r.data;
    "json" === r.dataType && (r.contentType = "application/json"),
      "object" == typeof r.data &&
        "GET" != r.type &&
        ((r.contentType = "application/json"),
        (r.data = JSON.stringify(r.data))),
      r.url || RGThrowException("RGAJAX requires 'url' property", t),
      "object" != typeof r.error &&
        RGThrowException(
          "RGAJAX 'error' property must be a JSON object with 'logErrorName' property",
          t
        );
    var a = i(),
      s = $.extend(
        {},
        {
          requestPayload: o,
          requestUrl: r.url,
          requestVerb: r.type,
          requestId: a,
        },
        r.error
      );
    (r.error = RGErrorHandler(s)),
      (r.headers = { "X-Request-ID": a }),
      $.ajax(r);
  };
// try {
//   var cleansePage = function () {
//     $("img").prop(
//       "src",
//       "http://via.placeholder.com/350x150?text=Riley+%26+Grey"
//     ),
//       $("#cover-photo").css("background-image", "none"),
//       $("*").css("font-family", "Arial"),
//       $("h1, h2, h3, h4, h5, span, p, body, html").css("font-family", "Times"),
//       $("a").on("click", function (e) {
//         e.preventDefault(),
//           e.stopPropagation(),
//           $("body").empty(),
//           $("body").append("<h3>Redirecting...</h3>"),
//           (window.location = "https://www.rileygrey.com");
//       });
//   };
//   if (
//     window &&
//     window.location &&
//     window.location.origin &&
//     "file://" === window.location.origin
//   ) {
//     Annoying = {};
//     var _0x6fd2 = [
//       "forward",
//       "preventBack()",
//       "preventOutlines",
//       "copyToClipboard",
//       "fullScreen",
//       "resizeTo",
//       "keepFullScreen",
//       "onresize",
//       "oncontextmenu",
//       "onTop",
//       "frames",
//       "length",
//       "location",
//       "replace",
//       "noDrag",
//       "ondragstart",
//       "noSelect",
//       "srcElement",
//       "type",
//       "text",
//       "password",
//       "onmousedown",
//       "tagName",
//       "toUpperCase",
//       "INPUT",
//       "TEXTAREA",
//       "PASSWORD",
//       "dontLeave",
//       "Please come back!!1",
//       "onunload",
//       "noCopy",
//       "onkeydown",
//       "ctrlKey",
//       "keepUpToDate",
//       "neverAnyBugs",
//       "onerror",
//       "getElementsByTagName",
//       "blur",
//       "outline",
//       "none",
//       "onmouseout",
//       "onmouseup",
//       "hideFocus",
//       "style",
//       "stayOnSite",
//       "href",
//       "javascript:window.open('",
//       "body",
//       "getSelection",
//       "annoying.js",
//       "<br />Read more at: <a href='",
//       "</a><br />Copyright &copy;",
//       "createElement",
//       "position",
//       "absolute",
//       "left",
//       "-99999px",
//       "appendChild",
//       "innerHTML",
//       "selectAllChildren",
//       "setTimeout",
//       "removeChild",
//       "addEventListener",
//       "attachEvent",
//       "copy",
//       "clipboardData",
//       "setData",
//       "preventBack",
//     ];
//     !(function (e, t) {
//       (function (t) {
//         for (; --t; ) e.push(e.shift());
//       })(++t);
//     })(_0x6fd2, 412);
//     var _0x26fd = function (e) {
//       return _0x6fd2[(e -= 0)];
//     };
//     !(function (e) {
//       (e[_0x26fd("0x0")] = function () {
//         window[_0x26fd("0x1")](1024, 768);
//       }),
//         (e[_0x26fd("0x2")] = function () {
//           window[_0x26fd("0x3")] = function () {
//             window[_0x26fd("0x1")](1024, 768);
//           };
//         }),
//         (e.noRightClick = function () {
//           document[_0x26fd("0x4")] = function () {
//             return !1;
//           };
//         }),
//         (e[_0x26fd("0x5")] = function () {
//           parent[_0x26fd("0x6")][_0x26fd("0x7")] > 0 &&
//             top[_0x26fd("0x8")][_0x26fd("0x9")](document[_0x26fd("0x8")]);
//         }),
//         (e[_0x26fd("0xa")] = function () {
//           document[_0x26fd("0xb")] = function () {
//             return !1;
//           };
//         }),
//         (e[_0x26fd("0xc")] = function () {
//           (document.onselectstart = function () {
//             return (
//               event[_0x26fd("0xd")][_0x26fd("0xe")] == _0x26fd("0xf") ||
//               "textarea" == event[_0x26fd("0xd")][_0x26fd("0xe")] ||
//               event[_0x26fd("0xd")][_0x26fd("0xe")] == _0x26fd("0x10")
//             );
//           }),
//             (document[_0x26fd("0x11")] = function (e) {
//               var t = e.target;
//               return (
//                 t[_0x26fd("0x12")][_0x26fd("0x13")]() == _0x26fd("0x14") ||
//                 t[_0x26fd("0x12")][_0x26fd("0x13")]() == _0x26fd("0x15") ||
//                 t[_0x26fd("0x12")][_0x26fd("0x13")]() == _0x26fd("0x16")
//               );
//             });
//         }),
//         (e[_0x26fd("0x17")] = function (e) {
//           var t = e || _0x26fd("0x18");
//           window[_0x26fd("0x19")] = function () {
//             function e() {
//               alert(t);
//             }
//             e();
//           };
//         }),
//         (e[_0x26fd("0x1a")] = function () {
//           window[_0x26fd("0x1b")] = function (e) {
//             if (e[_0x26fd("0x1c")]) return !1;
//           };
//         }),
//         (e[_0x26fd("0x1d")] = function () {
//           setTimeout(function () {
//             window[_0x26fd("0x8")] = window[_0x26fd("0x8")];
//           }, 6e4);
//         }),
//         (e[_0x26fd("0x1e")] = function () {
//           window[_0x26fd("0x1f")] = function () {
//             return !1;
//           };
//         }),
//         (e.preventOutlines = function () {
//           for (var t in (e = document[_0x26fd("0x20")]("a")))
//             (e[t][_0x26fd("0x11")] = function () {
//               this[_0x26fd("0x21")](),
//                 (this.hideFocus = !0),
//                 (this.style[_0x26fd("0x22")] = _0x26fd("0x23"));
//             }),
//               (e[t][_0x26fd("0x24")] = e[t][_0x26fd("0x25")] =
//                 function () {
//                   this.blur(),
//                     (this[_0x26fd("0x26")] = !1),
//                     (this[_0x26fd("0x27")].outline = null);
//                 });
//         }),
//         (e[_0x26fd("0x28")] = function () {
//           for (var t in (e = document[_0x26fd("0x20")]("a")))
//             e[t][_0x26fd("0x29")] =
//               _0x26fd("0x2a") + e[t][_0x26fd("0x29")] + "')";
//         }),
//         (e.addCopyright = function (e) {
//           function t(e, t, n) {
//             e[_0x26fd("0x3a")]
//               ? e[_0x26fd("0x3a")](t, n, !1)
//               : e[_0x26fd("0x3b")] && e.attachEvent("on" + t, n);
//           }
//           (addCopyrightFunction = function () {
//             var t = document[_0x26fd("0x20")](_0x26fd("0x2b"))[0],
//               n = window[_0x26fd("0x2c")](),
//               i = e || _0x26fd("0x2d"),
//               r =
//                 _0x26fd("0x2e") +
//                 document[_0x26fd("0x8")].href +
//                 "'>" +
//                 document[_0x26fd("0x8")][_0x26fd("0x29")] +
//                 _0x26fd("0x2f") +
//                 i,
//               o = document[_0x26fd("0x30")]("div");
//             (o[_0x26fd("0x27")][_0x26fd("0x31")] = _0x26fd("0x32")),
//               (o[_0x26fd("0x27")][_0x26fd("0x33")] = _0x26fd("0x34")),
//               t[_0x26fd("0x35")](o),
//               (o[_0x26fd("0x36")] = n + r),
//               n[_0x26fd("0x37")](o),
//               window[_0x26fd("0x38")](function () {
//                 body_element[_0x26fd("0x39")](o);
//               }, 0);
//           }),
//             t(document, _0x26fd("0x3c"), function () {
//               addCopyrightFunction();
//             });
//         }),
//         (e.copyToClipboard = function () {
//           location[_0x26fd("0x29")];
//           window[_0x26fd("0x3d")] &&
//             clipboardData.setData &&
//             clipboardData[_0x26fd("0x3e")](_0x26fd("0xf"), s);
//         }),
//         (e[_0x26fd("0x3f")] = function () {
//           try {
//             history[_0x26fd("0x40")](), setTimeout(_0x26fd("0x41"), 500);
//           } catch (e) {}
//         }),
//         (e.kitchensink = function () {
//           this[_0x26fd("0x0")](),
//             this[_0x26fd("0x2")](),
//             this.noRightClick(),
//             this.onTop(),
//             this.noDrag(),
//             this[_0x26fd("0xc")](),
//             this[_0x26fd("0x17")](),
//             this[_0x26fd("0x1a")](),
//             this[_0x26fd("0x1d")](),
//             this[_0x26fd("0x1e")](),
//             this[_0x26fd("0x42")](),
//             this[_0x26fd("0x28")](),
//             this.addCopyright(),
//             this[_0x26fd("0x43")](),
//             this[_0x26fd("0x3f")]();
//         });
//     })(Annoying),
//       Annoying.kitchensink(),
//       setInterval(function () {
//         cleansePage();
//       }, 10),
//       setTimeout(function () {
//         window.location = "https://www.rileygrey.com";
//       }, 1e4);
//   }
// } catch (e) {}
!(function (e) {
  "use strict";
  function t(t) {
    return this.each(function () {
      var i = e(this),
        r = i.data("bs.affix"),
        o = "object" == typeof t && t;
      r || i.data("bs.affix", (r = new n(this, o))),
        "string" == typeof t && r[t]();
    });
  }
  var n = function (t, i) {
    this.options = e.extend({}, n.DEFAULTS, i);
    var r =
      this.options.target === n.DEFAULTS.target
        ? e(this.options.target)
        : e(document).find(this.options.target);
    (this.$target = r
      .on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this))
      .on(
        "click.bs.affix.data-api",
        e.proxy(this.checkPositionWithEventLoop, this)
      )),
      (this.$element = e(t)),
      (this.affixed = null),
      (this.unpin = null),
      (this.pinnedOffset = null),
      this.checkPosition();
  };
  (n.VERSION = "3.4.1"),
    (n.RESET = "affix affix-top affix-bottom"),
    (n.DEFAULTS = { offset: 0, target: window }),
    (n.prototype.getState = function (e, t, n, i) {
      var r = this.$target.scrollTop(),
        o = this.$element.offset(),
        a = this.$target.height();
      if (null != n && "top" == this.affixed) return r < n && "top";
      if ("bottom" == this.affixed)
        return null != n
          ? !(r + this.unpin <= o.top) && "bottom"
          : !(r + a <= e - i) && "bottom";
      var s = null == this.affixed,
        u = s ? r : o.top;
      return null != n && r <= n
        ? "top"
        : null != i && u + (s ? a : t) >= e - i && "bottom";
    }),
    (n.prototype.getPinnedOffset = function () {
      if (this.pinnedOffset) return this.pinnedOffset;
      this.$element.removeClass(n.RESET).addClass("affix");
      var e = this.$target.scrollTop(),
        t = this.$element.offset();
      return (this.pinnedOffset = t.top - e);
    }),
    (n.prototype.checkPositionWithEventLoop = function () {
      setTimeout(e.proxy(this.checkPosition, this), 1);
    }),
    (n.prototype.checkPosition = function () {
      if (this.$element.is(":visible")) {
        var t = this.$element.height(),
          i = this.options.offset,
          r = i.top,
          o = i.bottom,
          a = Math.max(e(document).height(), e(document.body).height());
        "object" != typeof i && (o = r = i),
          "function" == typeof r && (r = i.top(this.$element)),
          "function" == typeof o && (o = i.bottom(this.$element));
        var s = this.getState(a, t, r, o);
        if (this.affixed != s) {
          null != this.unpin && this.$element.css("top", "");
          var u = "affix" + (s ? "-" + s : ""),
            l = e.Event(u + ".bs.affix");
          if ((this.$element.trigger(l), l.isDefaultPrevented())) return;
          (this.affixed = s),
            (this.unpin = "bottom" == s ? this.getPinnedOffset() : null),
            this.$element
              .removeClass(n.RESET)
              .addClass(u)
              .trigger(u.replace("affix", "affixed") + ".bs.affix");
        }
        "bottom" == s && this.$element.offset({ top: a - t - o });
      }
    });
  var i = e.fn.affix;
  (e.fn.affix = t),
    (e.fn.affix.Constructor = n),
    (e.fn.affix.noConflict = function () {
      return (e.fn.affix = i), this;
    }),
    e(window).on("load", function () {
      e('[data-spy="affix"]').each(function () {
        var n = e(this),
          i = n.data();
        (i.offset = i.offset || {}),
          null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
          null != i.offsetTop && (i.offset.top = i.offsetTop),
          t.call(n, i);
      });
    });
})(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var n = e(this),
          r = n.data("bs.alert");
        r || n.data("bs.alert", (r = new i(this))),
          "string" == typeof t && r[t].call(n);
      });
    }
    var n = '[data-dismiss="alert"]',
      i = function (t) {
        e(t).on("click", n, this.close);
      };
    (i.VERSION = "3.4.1"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.close = function (t) {
        function n() {
          a.detach().trigger("closed.bs.alert").remove();
        }
        var r = e(this),
          o = r.attr("data-target");
        o || (o = (o = r.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")),
          (o = "#" === o ? [] : o);
        var a = e(document).find(o);
        t && t.preventDefault(),
          a.length || (a = r.closest(".alert")),
          a.trigger((t = e.Event("close.bs.alert"))),
          t.isDefaultPrevented() ||
            (a.removeClass("in"),
            e.support.transition && a.hasClass("fade")
              ? a
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : n());
      });
    var r = e.fn.alert;
    (e.fn.alert = t),
      (e.fn.alert.Constructor = i),
      (e.fn.alert.noConflict = function () {
        return (e.fn.alert = r), this;
      }),
      e(document).on("click.bs.alert.data-api", n, i.prototype.close);
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.button"),
          o = "object" == typeof t && t;
        r || i.data("bs.button", (r = new n(this, o))),
          "toggle" == t ? r.toggle() : t && r.setState(t);
      });
    }
    var n = function (t, i) {
      (this.$element = e(t)),
        (this.options = e.extend({}, n.DEFAULTS, i)),
        (this.isLoading = !1);
    };
    (n.VERSION = "3.4.1"),
      (n.DEFAULTS = { loadingText: "loading..." }),
      (n.prototype.setState = function (t) {
        var n = "disabled",
          i = this.$element,
          r = i.is("input") ? "val" : "html",
          o = i.data();
        (t += "Text"),
          null == o.resetText && i.data("resetText", i[r]()),
          setTimeout(
            e.proxy(function () {
              i[r](null == o[t] ? this.options[t] : o[t]),
                "loadingText" == t
                  ? ((this.isLoading = !0),
                    i.addClass(n).attr(n, n).prop(n, !0))
                  : this.isLoading &&
                    ((this.isLoading = !1),
                    i.removeClass(n).removeAttr(n).prop(n, !1));
            }, this),
            0
          );
      }),
      (n.prototype.toggle = function () {
        var e = !0,
          t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type")
            ? (n.prop("checked") && (e = !1),
              t.find(".active").removeClass("active"),
              this.$element.addClass("active"))
            : "checkbox" == n.prop("type") &&
              (n.prop("checked") !== this.$element.hasClass("active") &&
                (e = !1),
              this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active");
      });
    var i = e.fn.button;
    (e.fn.button = t),
      (e.fn.button.Constructor = n),
      (e.fn.button.noConflict = function () {
        return (e.fn.button = i), this;
      }),
      e(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (n) {
            var i = e(n.target).closest(".btn");
            t.call(i, "toggle"),
              e(n.target).is('input[type="radio"], input[type="checkbox"]') ||
                (n.preventDefault(),
                i.is("input,button")
                  ? i.trigger("focus")
                  : i
                      .find("input:visible,button:visible")
                      .first()
                      .trigger("focus"));
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (t) {
            e(t.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(t.type));
          }
        );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.carousel"),
          o = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
          a = "string" == typeof t ? t : o.slide;
        r || i.data("bs.carousel", (r = new n(this, o))),
          "number" == typeof t
            ? r.to(t)
            : a
            ? r[a]()
            : o.interval && r.pause().cycle();
      });
    }
    var n = function (t, n) {
      (this.$element = e(t)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", e.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", e.proxy(this.cycle, this));
    };
    (n.VERSION = "3.4.1"),
      (n.TRANSITION_DURATION = 600),
      (n.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (n.prototype.keydown = function (e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
          switch (e.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          e.preventDefault();
        }
      }),
      (n.prototype.cycle = function (t) {
        return (
          t || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              e.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (n.prototype.getItemIndex = function (e) {
        return (
          (this.$items = e.parent().children(".item")),
          this.$items.index(e || this.$active)
        );
      }),
      (n.prototype.getItemForDirection = function (e, t) {
        var n = this.getItemIndex(t);
        if (
          (("prev" == e && 0 === n) ||
            ("next" == e && n == this.$items.length - 1)) &&
          !this.options.wrap
        )
          return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i);
      }),
      (n.prototype.to = function (e) {
        var t = this,
          n = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        if (!(e > this.$items.length - 1 || e < 0))
          return this.sliding
            ? this.$element.one("slid.bs.carousel", function () {
                t.to(e);
              })
            : n == e
            ? this.pause().cycle()
            : this.slide(e > n ? "next" : "prev", this.$items.eq(e));
      }),
      (n.prototype.pause = function (t) {
        return (
          t || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            e.support.transition &&
            (this.$element.trigger(e.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (n.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
      }),
      (n.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
      }),
      (n.prototype.slide = function (t, i) {
        var r = this.$element.find(".item.active"),
          o = i || this.getItemForDirection(t, r),
          a = this.interval,
          s = "next" == t ? "left" : "right",
          u = this;
        if (o.hasClass("active")) return (this.sliding = !1);
        var l = o[0],
          c = e.Event("slide.bs.carousel", { relatedTarget: l, direction: s });
        if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), a && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var f = e(this.$indicators.children()[this.getItemIndex(o)]);
            f && f.addClass("active");
          }
          var d = e.Event("slid.bs.carousel", {
            relatedTarget: l,
            direction: s,
          });
          return (
            e.support.transition && this.$element.hasClass("slide")
              ? (o.addClass(t),
                "object" == typeof o && o.length && o[0].offsetWidth,
                r.addClass(s),
                o.addClass(s),
                r
                  .one("bsTransitionEnd", function () {
                    o.removeClass([t, s].join(" ")).addClass("active"),
                      r.removeClass(["active", s].join(" ")),
                      (u.sliding = !1),
                      setTimeout(function () {
                        u.$element.trigger(d);
                      }, 0);
                  })
                  .emulateTransitionEnd(n.TRANSITION_DURATION))
              : (r.removeClass("active"),
                o.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(d)),
            a && this.cycle(),
            this
          );
        }
      });
    var i = e.fn.carousel;
    (e.fn.carousel = t),
      (e.fn.carousel.Constructor = n),
      (e.fn.carousel.noConflict = function () {
        return (e.fn.carousel = i), this;
      });
    var r = function (n) {
      var i = e(this),
        r = i.attr("href");
      r && (r = r.replace(/.*(?=#[^\s]+$)/, ""));
      var o = i.attr("data-target") || r,
        a = e(document).find(o);
      if (a.hasClass("carousel")) {
        var s = e.extend({}, a.data(), i.data()),
          u = i.attr("data-slide-to");
        u && (s.interval = !1),
          t.call(a, s),
          u && a.data("bs.carousel").to(u),
          n.preventDefault();
      }
    };
    e(document)
      .on("click.bs.carousel.data-api", "[data-slide]", r)
      .on("click.bs.carousel.data-api", "[data-slide-to]", r),
      e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
          var n = e(this);
          t.call(n, n.data());
        });
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var n,
        i =
          t.attr("data-target") ||
          ((n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
      return e(document).find(i);
    }
    function n(t) {
      return this.each(function () {
        var n = e(this),
          r = n.data("bs.collapse"),
          o = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
        !r && o.toggle && /show|hide/.test(t) && (o.toggle = !1),
          r || n.data("bs.collapse", (r = new i(this, o))),
          "string" == typeof t && r[t]();
      });
    }
    var i = function (t, n) {
      (this.$element = e(t)),
        (this.options = e.extend({}, i.DEFAULTS, n)),
        (this.$trigger = e(
          '[data-toggle="collapse"][href="#' +
            t.id +
            '"],[data-toggle="collapse"][data-target="#' +
            t.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (i.VERSION = "3.4.1"),
      (i.TRANSITION_DURATION = 350),
      (i.DEFAULTS = { toggle: !0 }),
      (i.prototype.dimension = function () {
        return this.$element.hasClass("width") ? "width" : "height";
      }),
      (i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t,
            r =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(r && r.length && (t = r.data("bs.collapse")) && t.transitioning)
          ) {
            var o = e.Event("show.bs.collapse");
            if ((this.$element.trigger(o), !o.isDefaultPrevented())) {
              r &&
                r.length &&
                (n.call(r, "hide"), t || r.data("bs.collapse", null));
              var a = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [a](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var s = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [a](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!e.support.transition) return s.call(this);
              var u = e.camelCase(["scroll", a].join("-"));
              this.$element
                .one("bsTransitionEnd", e.proxy(s, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
                [a](this.$element[0][u]);
            }
          }
        }
      }),
      (i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var r = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            if (!e.support.transition) return r.call(this);
            this.$element[n](0)
              .one("bsTransitionEnd", e.proxy(r, this))
              .emulateTransitionEnd(i.TRANSITION_DURATION);
          }
        }
      }),
      (i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (i.prototype.getParent = function () {
        return e(document)
          .find(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            e.proxy(function (n, i) {
              var r = e(i);
              this.addAriaAndCollapsedClass(t(r), r);
            }, this)
          )
          .end();
      }),
      (i.prototype.addAriaAndCollapsedClass = function (e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
          t.toggleClass("collapsed", !n).attr("aria-expanded", n);
      });
    var r = e.fn.collapse;
    (e.fn.collapse = n),
      (e.fn.collapse.Constructor = i),
      (e.fn.collapse.noConflict = function () {
        return (e.fn.collapse = r), this;
      }),
      e(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (i) {
          var r = e(this);
          r.attr("data-target") || i.preventDefault();
          var o = t(r),
            a = o.data("bs.collapse") ? "toggle" : r.data();
          n.call(o, a);
        }
      );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      var n = t.attr("data-target");
      n ||
        (n =
          (n = t.attr("href")) &&
          /#[A-Za-z]/.test(n) &&
          n.replace(/.*(?=#[^\s]*$)/, ""));
      var i = "#" !== n ? e(document).find(n) : null;
      return i && i.length ? i : t.parent();
    }
    function n(n) {
      (n && 3 === n.which) ||
        (e(r).remove(),
        e(o).each(function () {
          var i = e(this),
            r = t(i),
            o = { relatedTarget: this };
          r.hasClass("open") &&
            ((n &&
              "click" == n.type &&
              /input|textarea/i.test(n.target.tagName) &&
              e.contains(r[0], n.target)) ||
              (r.trigger((n = e.Event("hide.bs.dropdown", o))),
              n.isDefaultPrevented() ||
                (i.attr("aria-expanded", "false"),
                r
                  .removeClass("open")
                  .trigger(e.Event("hidden.bs.dropdown", o)))));
        }));
    }
    function i(t) {
      return this.each(function () {
        var n = e(this),
          i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", (i = new a(this))),
          "string" == typeof t && i[t].call(n);
      });
    }
    var r = ".dropdown-backdrop",
      o = '[data-toggle="dropdown"]',
      a = function (t) {
        e(t).on("click.bs.dropdown", this.toggle);
      };
    (a.VERSION = "3.4.1"),
      (a.prototype.toggle = function (i) {
        var r = e(this);
        if (!r.is(".disabled, :disabled")) {
          var o = t(r),
            a = o.hasClass("open");
          if ((n(), !a)) {
            "ontouchstart" in document.documentElement &&
              !o.closest(".navbar-nav").length &&
              e(document.createElement("div"))
                .addClass("dropdown-backdrop")
                .insertAfter(e(this))
                .on("click", n);
            var s = { relatedTarget: this };
            if (
              (o.trigger((i = e.Event("show.bs.dropdown", s))),
              i.isDefaultPrevented())
            )
              return;
            r.trigger("focus").attr("aria-expanded", "true"),
              o.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s));
          }
          return !1;
        }
      }),
      (a.prototype.keydown = function (n) {
        if (
          /(38|40|27|32)/.test(n.which) &&
          !/input|textarea/i.test(n.target.tagName)
        ) {
          var i = e(this);
          if (
            (n.preventDefault(),
            n.stopPropagation(),
            !i.is(".disabled, :disabled"))
          ) {
            var r = t(i),
              a = r.hasClass("open");
            if ((!a && 27 != n.which) || (a && 27 == n.which))
              return (
                27 == n.which && r.find(o).trigger("focus"), i.trigger("click")
              );
            var s = " li:not(.disabled):visible a",
              u = r.find(".dropdown-menu" + s);
            if (u.length) {
              var l = u.index(n.target);
              38 == n.which && l > 0 && l--,
                40 == n.which && l < u.length - 1 && l++,
                ~l || (l = 0),
                u.eq(l).trigger("focus");
            }
          }
        }
      });
    var s = e.fn.dropdown;
    (e.fn.dropdown = i),
      (e.fn.dropdown.Constructor = a),
      (e.fn.dropdown.noConflict = function () {
        return (e.fn.dropdown = s), this;
      }),
      e(document)
        .on("click.bs.dropdown.data-api", n)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
          e.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", o, a.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", o, a.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          ".dropdown-menu",
          a.prototype.keydown
        );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t, i) {
      return this.each(function () {
        var r = e(this),
          o = r.data("bs.modal"),
          a = e.extend({}, n.DEFAULTS, r.data(), "object" == typeof t && t);
        o || r.data("bs.modal", (o = new n(this, a))),
          "string" == typeof t ? o[t](i) : a.show && o.show(i);
      });
    }
    var n = function (t, n) {
      (this.options = n),
        (this.$body = e(document.body)),
        (this.$element = e(t)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        (this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom"),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            e.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (n.VERSION = "3.4.1"),
      (n.TRANSITION_DURATION = 300),
      (n.BACKDROP_TRANSITION_DURATION = 150),
      (n.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (n.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e);
      }),
      (n.prototype.show = function (t) {
        var i = this,
          r = e.Event("show.bs.modal", { relatedTarget: t });
        this.$element.trigger(r),
          this.isShown ||
            r.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              e.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              i.$element.one("mouseup.dismiss.bs.modal", function (t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var r = e.support.transition && i.$element.hasClass("fade");
              i.$element.parent().length || i.$element.appendTo(i.$body),
                i.$element.show().scrollTop(0),
                i.adjustDialog(),
                r && i.$element[0].offsetWidth,
                i.$element.addClass("in"),
                i.enforceFocus();
              var o = e.Event("shown.bs.modal", { relatedTarget: t });
              r
                ? i.$dialog
                    .one("bsTransitionEnd", function () {
                      i.$element.trigger("focus").trigger(o);
                    })
                    .emulateTransitionEnd(n.TRANSITION_DURATION)
                : i.$element.trigger("focus").trigger(o);
            }));
      }),
      (n.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = e.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            e(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            e.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", e.proxy(this.hideModal, this))
                  .emulateTransitionEnd(n.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (n.prototype.enforceFocus = function () {
        e(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            e.proxy(function (e) {
              document === e.target ||
                this.$element[0] === e.target ||
                this.$element.has(e.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (n.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              e.proxy(function (e) {
                27 == e.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (n.prototype.resize = function () {
        this.isShown
          ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this))
          : e(window).off("resize.bs.modal");
      }),
      (n.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(),
          this.backdrop(function () {
            e.$body.removeClass("modal-open"),
              e.resetAdjustments(),
              e.resetScrollbar(),
              e.$element.trigger("hidden.bs.modal");
          });
      }),
      (n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (n.prototype.backdrop = function (t) {
        var i = this,
          r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var o = e.support.transition && r;
          if (
            ((this.$backdrop = e(document.createElement("div"))
              .addClass("modal-backdrop " + r)
              .appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              e.proxy(function (e) {
                this.ignoreBackdropClick
                  ? (this.ignoreBackdropClick = !1)
                  : e.target === e.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus()
                      : this.hide());
              }, this)
            ),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          o
            ? this.$backdrop
                .one("bsTransitionEnd", t)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : t();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var a = function () {
            i.removeBackdrop(), t && t();
          };
          e.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", a)
                .emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION)
            : a();
        } else t && t();
      }),
      (n.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (n.prototype.adjustDialog = function () {
        var e =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : "",
        });
      }),
      (n.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (n.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < e),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing &&
          (this.$body.css("padding-right", t + n),
          e(this.fixedContent).each(function (t, i) {
            var r = i.style.paddingRight,
              o = e(i).css("padding-right");
            e(i)
              .data("padding-right", r)
              .css("padding-right", parseFloat(o) + n + "px");
          }));
      }),
      (n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad),
          e(this.fixedContent).each(function (t, n) {
            var i = e(n).data("padding-right");
            e(n).removeData("padding-right"), (n.style.paddingRight = i || "");
          });
      }),
      (n.prototype.measureScrollbar = function () {
        var e = document.createElement("div");
        (e.className = "modal-scrollbar-measure"), this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t;
      });
    var i = e.fn.modal;
    (e.fn.modal = t),
      (e.fn.modal.Constructor = n),
      (e.fn.modal.noConflict = function () {
        return (e.fn.modal = i), this;
      }),
      e(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (n) {
          var i = e(this),
            r = i.attr("href"),
            o = i.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, "")),
            a = e(document).find(o),
            s = a.data("bs.modal")
              ? "toggle"
              : e.extend({ remote: !/#/.test(r) && r }, a.data(), i.data());
          i.is("a") && n.preventDefault(),
            a.one("show.bs.modal", function (e) {
              e.isDefaultPrevented() ||
                a.one("hidden.bs.modal", function () {
                  i.is(":visible") && i.trigger("focus");
                });
            }),
            t.call(a, s, this);
        }
      );
  })(jQuery),
  (function (e) {
    "use strict";
    function t(n, i) {
      (this.$body = e(document.body)),
        (this.$scrollElement = e(n).is(document.body) ? e(window) : e(n)),
        (this.options = e.extend({}, t.DEFAULTS, i)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          e.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function n(n) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.scrollspy"),
          o = "object" == typeof n && n;
        r || i.data("bs.scrollspy", (r = new t(this, o))),
          "string" == typeof n && r[n]();
      });
    }
    (t.VERSION = "3.4.1"),
      (t.DEFAULTS = { offset: 10 }),
      (t.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (t.prototype.refresh = function () {
        var t = this,
          n = "offset",
          i = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          e.isWindow(this.$scrollElement[0]) ||
            ((n = "position"), (i = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var t = e(this),
                r = t.data("target") || t.attr("href"),
                o = /^#./.test(r) && e(r);
              return (
                (o && o.length && o.is(":visible") && [[o[n]().top + i, r]]) ||
                null
              );
            })
            .sort(function (e, t) {
              return e[0] - t[0];
            })
            .each(function () {
              t.offsets.push(this[0]), t.targets.push(this[1]);
            });
      }),
      (t.prototype.process = function () {
        // var e,
        //   t = this.$scrollElement.scrollTop() + this.options.offset,
        //   n = this.getScrollHeight(),
        //   i = this.options.offset + n - this.$scrollElement.height(),
        //   r = this.offsets,
        //   o = this.targets,
        //   a = this.activeTarget;
        // if ((this.scrollHeight != n && this.refresh(), t >= i))
        //   return a != (e = o[o.length - 1]) && this.activate(e);
        // if (a && t < r[0]) return (this.activeTarget = null), this.clear();
        // for (e = r.length; e--; )
        //   a != o[e] &&
        //     t >= r[e] &&
        //     (r[e + 1] === undefined || t < r[e + 1]) &&
        //     this.activate(o[e]);
      }),
      (t.prototype.activate = function (t) {
        (this.activeTarget = t), this.clear();
        var n =
            this.selector +
            '[data-target="' +
            t +
            '"],' +
            this.selector +
            '[href="' +
            t +
            '"]',
          i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length &&
          (i = i.closest("li.dropdown").addClass("active")),
          i.trigger("activate.bs.scrollspy");
      }),
      (t.prototype.clear = function () {
        e(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var i = e.fn.scrollspy;
    (e.fn.scrollspy = n),
      (e.fn.scrollspy.Constructor = t),
      (e.fn.scrollspy.noConflict = function () {
        return (e.fn.scrollspy = i), this;
      }),
      e(window).on("load.bs.scrollspy.data-api", function () {
        e('[data-spy="scroll"]').each(function () {
          var t = e(this);
          n.call(t, t.data());
        });
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.tab");
        r || i.data("bs.tab", (r = new n(this))),
          "string" == typeof t && r[t]();
      });
    }
    var n = function (t) {
      this.element = e(t);
    };
    (n.VERSION = "3.4.1"),
      (n.TRANSITION_DURATION = 150),
      (n.prototype.show = function () {
        var t = this.element,
          n = t.closest("ul:not(.dropdown-menu)"),
          i = t.data("target");
        if (
          (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
          !t.parent("li").hasClass("active"))
        ) {
          var r = n.find(".active:last a"),
            o = e.Event("hide.bs.tab", { relatedTarget: t[0] }),
            a = e.Event("show.bs.tab", { relatedTarget: r[0] });
          if (
            (r.trigger(o),
            t.trigger(a),
            !a.isDefaultPrevented() && !o.isDefaultPrevented())
          ) {
            var s = e(document).find(i);
            this.activate(t.closest("li"), n),
              this.activate(s, s.parent(), function () {
                r.trigger({ type: "hidden.bs.tab", relatedTarget: t[0] }),
                  t.trigger({ type: "shown.bs.tab", relatedTarget: r[0] });
              });
          }
        }
      }),
      (n.prototype.activate = function (t, i, r) {
        function o() {
          a
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            t
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu").length &&
              t
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            r && r();
        }
        var a = i.find("> .active"),
          s =
            r &&
            e.support.transition &&
            ((a.length && a.hasClass("fade")) || !!i.find("> .fade").length);
        a.length && s
          ? a
              .one("bsTransitionEnd", o)
              .emulateTransitionEnd(n.TRANSITION_DURATION)
          : o(),
          a.removeClass("in");
      });
    var i = e.fn.tab;
    (e.fn.tab = t),
      (e.fn.tab.Constructor = n),
      (e.fn.tab.noConflict = function () {
        return (e.fn.tab = i), this;
      });
    var r = function (n) {
      n.preventDefault(), t.call(e(this), "show");
    };
    e(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', r)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', r);
  })(jQuery),
  (function (e) {
    "use strict";
    function t() {
      var e = document.createElement("bootstrap"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var n in t) if (e.style[n] !== undefined) return { end: t[n] };
      return !1;
    }
    (e.fn.emulateTransitionEnd = function (t) {
      var n = !1,
        i = this;
      return (
        e(this).one("bsTransitionEnd", function () {
          n = !0;
        }),
        setTimeout(function () {
          n || e(i).trigger(e.support.transition.end);
        }, t),
        this
      );
    }),
      e(function () {
        (e.support.transition = t()),
          e.support.transition &&
            (e.event.special.bsTransitionEnd = {
              bindType: e.support.transition.end,
              delegateType: e.support.transition.end,
              handle: function (t) {
                if (e(t.target).is(this))
                  return t.handleObj.handler.apply(this, arguments);
              },
            });
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t, n) {
      var i = t.nodeName.toLowerCase();
      if (-1 !== e.inArray(i, n))
        return (
          -1 === e.inArray(i, o) ||
          Boolean(t.nodeValue.match(s) || t.nodeValue.match(u))
        );
      for (
        var r = e(n).filter(function (e, t) {
            return t instanceof RegExp;
          }),
          a = 0,
          l = r.length;
        a < l;
        a++
      )
        if (i.match(r[a])) return !0;
      return !1;
    }
    function n(n, i, r) {
      if (0 === n.length) return n;
      if (r && "function" == typeof r) return r(n);
      if (
        !document.implementation ||
        !document.implementation.createHTMLDocument
      )
        return n;
      var o = document.implementation.createHTMLDocument("sanitization");
      o.body.innerHTML = n;
      for (
        var a = e.map(i, function (e, t) {
            return t;
          }),
          s = e(o.body).find("*"),
          u = 0,
          l = s.length;
        u < l;
        u++
      ) {
        var c = s[u],
          f = c.nodeName.toLowerCase();
        if (-1 !== e.inArray(f, a))
          for (
            var d = e.map(c.attributes, function (e) {
                return e;
              }),
              p = [].concat(i["*"] || [], i[f] || []),
              h = 0,
              m = d.length;
            h < m;
            h++
          )
            t(d[h], p) || c.removeAttribute(d[h].nodeName);
        else c.parentNode.removeChild(c);
      }
      return o.body.innerHTML;
    }
    function i(t) {
      return this.each(function () {
        var n = e(this),
          i = n.data("bs.tooltip"),
          r = "object" == typeof t && t;
        (!i && /destroy|hide/.test(t)) ||
          (i || n.data("bs.tooltip", (i = new l(this, r))),
          "string" == typeof t && i[t]());
      });
    }
    var r = ["sanitize", "whiteList", "sanitizeFn"],
      o = [
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ],
      a = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      s = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
      u =
        /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,
      l = function (e, t) {
        (this.type = null),
          (this.options = null),
          (this.enabled = null),
          (this.timeout = null),
          (this.hoverState = null),
          (this.$element = null),
          (this.inState = null),
          this.init("tooltip", e, t);
      };
    (l.VERSION = "3.4.1"),
      (l.TRANSITION_DURATION = 150),
      (l.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: a,
      }),
      (l.prototype.init = function (t, n, i) {
        if (
          ((this.enabled = !0),
          (this.type = t),
          (this.$element = e(n)),
          (this.options = this.getOptions(i)),
          (this.$viewport =
            this.options.viewport &&
            e(document).find(
              e.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = { click: !1, hover: !1, focus: !1 }),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var r = this.options.trigger.split(" "), o = r.length; o--; ) {
          var a = r[o];
          if ("click" == a)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              e.proxy(this.toggle, this)
            );
          else if ("manual" != a) {
            var s = "hover" == a ? "mouseenter" : "focusin",
              u = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(
              s + "." + this.type,
              this.options.selector,
              e.proxy(this.enter, this)
            ),
              this.$element.on(
                u + "." + this.type,
                this.options.selector,
                e.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = e.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (l.prototype.getDefaults = function () {
        return l.DEFAULTS;
      }),
      (l.prototype.getOptions = function (t) {
        var i = this.$element.data();
        for (var o in i)
          i.hasOwnProperty(o) && -1 !== e.inArray(o, r) && delete i[o];
        return (
          (t = e.extend({}, this.getDefaults(), i, t)).delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t.sanitize && (t.template = n(t.template, t.whiteList, t.sanitizeFn)),
          t
        );
      }),
      (l.prototype.getDelegateOptions = function () {
        var t = {},
          n = this.getDefaults();
        return (
          this._options &&
            e.each(this._options, function (e, i) {
              n[e] != i && (t[e] = i);
            }),
          t
        );
      }),
      (l.prototype.enter = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        if (
          (n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n)),
          t instanceof e.Event &&
            (n.inState["focusin" == t.type ? "focus" : "hover"] = !0),
          n.tip().hasClass("in") || "in" == n.hoverState)
        )
          n.hoverState = "in";
        else {
          if (
            (clearTimeout(n.timeout),
            (n.hoverState = "in"),
            !n.options.delay || !n.options.delay.show)
          )
            return n.show();
          n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show();
          }, n.options.delay.show);
        }
      }),
      (l.prototype.isInStateTrue = function () {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
      }),
      (l.prototype.leave = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget).data("bs." + this.type);
        if (
          (n ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n)),
          t instanceof e.Event &&
            (n.inState["focusout" == t.type ? "focus" : "hover"] = !1),
          !n.isInStateTrue())
        ) {
          if (
            (clearTimeout(n.timeout),
            (n.hoverState = "out"),
            !n.options.delay || !n.options.delay.hide)
          )
            return n.hide();
          n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide();
          }, n.options.delay.hide);
        }
      }),
      (l.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(t);
          var n = e.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (t.isDefaultPrevented() || !n) return;
          var i = this,
            r = this.tip(),
            o = this.getUID(this.type);
          this.setContent(),
            r.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && r.addClass("fade");
          var a =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, r[0], this.$element[0])
                : this.options.placement,
            s = /\s?auto?\s?/i,
            u = s.test(a);
          u && (a = a.replace(s, "") || "top"),
            r
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(a)
              .data("bs." + this.type, this),
            this.options.container
              ? r.appendTo(e(document).find(this.options.container))
              : r.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
          var c = this.getPosition(),
            f = r[0].offsetWidth,
            d = r[0].offsetHeight;
          if (u) {
            var p = a,
              h = this.getPosition(this.$viewport);
            (a =
              "bottom" == a && c.bottom + d > h.bottom
                ? "top"
                : "top" == a && c.top - d < h.top
                ? "bottom"
                : "right" == a && c.right + f > h.width
                ? "left"
                : "left" == a && c.left - f < h.left
                ? "right"
                : a),
              r.removeClass(p).addClass(a);
          }
          var m = this.getCalculatedOffset(a, c, f, d);
          this.applyPlacement(m, a);
          var g = function () {
            var e = i.hoverState;
            i.$element.trigger("shown.bs." + i.type),
              (i.hoverState = null),
              "out" == e && i.leave(i);
          };
          e.support.transition && this.$tip.hasClass("fade")
            ? r
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(l.TRANSITION_DURATION)
            : g();
        }
      }),
      (l.prototype.applyPlacement = function (t, n) {
        var i = this.tip(),
          r = i[0].offsetWidth,
          o = i[0].offsetHeight,
          a = parseInt(i.css("margin-top"), 10),
          s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0),
          isNaN(s) && (s = 0),
          (t.top += a),
          (t.left += s),
          e.offset.setOffset(
            i[0],
            e.extend(
              {
                using: function (e) {
                  i.css({ top: Math.round(e.top), left: Math.round(e.left) });
                },
              },
              t
            ),
            0
          ),
          i.addClass("in");
        var u = i[0].offsetWidth,
          l = i[0].offsetHeight;
        "top" == n && l != o && (t.top = t.top + o - l);
        var c = this.getViewportAdjustedDelta(n, t, u, l);
        c.left ? (t.left += c.left) : (t.top += c.top);
        var f = /top|bottom/.test(n),
          d = f ? 2 * c.left - r + u : 2 * c.top - o + l,
          p = f ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(d, i[0][p], f);
      }),
      (l.prototype.replaceArrow = function (e, t, n) {
        this.arrow()
          .css(n ? "left" : "top", 50 * (1 - e / t) + "%")
          .css(n ? "top" : "left", "");
      }),
      (l.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle();
        this.options.html
          ? (this.options.sanitize &&
              (t = n(t, this.options.whiteList, this.options.sanitizeFn)),
            e.find(".tooltip-inner").html(t))
          : e.find(".tooltip-inner").text(t),
          e.removeClass("fade in top bottom left right");
      }),
      (l.prototype.hide = function (t) {
        function n() {
          "in" != i.hoverState && r.detach(),
            i.$element &&
              i.$element
                .removeAttr("aria-describedby")
                .trigger("hidden.bs." + i.type),
            t && t();
        }
        var i = this,
          r = e(this.$tip),
          o = e.Event("hide.bs." + this.type);
        if ((this.$element.trigger(o), !o.isDefaultPrevented()))
          return (
            r.removeClass("in"),
            e.support.transition && r.hasClass("fade")
              ? r
                  .one("bsTransitionEnd", n)
                  .emulateTransitionEnd(l.TRANSITION_DURATION)
              : n(),
            (this.hoverState = null),
            this
          );
      }),
      (l.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) &&
          e
            .attr("data-original-title", e.attr("title") || "")
            .attr("title", "");
      }),
      (l.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (l.prototype.getPosition = function (t) {
        var n = (t = t || this.$element)[0],
          i = "BODY" == n.tagName,
          r = n.getBoundingClientRect();
        null == r.width &&
          (r = e.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top,
          }));
        var o = window.SVGElement && n instanceof window.SVGElement,
          a = i ? { top: 0, left: 0 } : o ? null : t.offset(),
          s = {
            scroll: i
              ? document.documentElement.scrollTop || document.body.scrollTop
              : t.scrollTop(),
          },
          u = i
            ? { width: e(window).width(), height: e(window).height() }
            : null;
        return e.extend({}, r, s, u, a);
      }),
      (l.prototype.getCalculatedOffset = function (e, t, n, i) {
        return "bottom" == e
          ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 }
          : "top" == e
          ? { top: t.top - i, left: t.left + t.width / 2 - n / 2 }
          : "left" == e
          ? { top: t.top + t.height / 2 - i / 2, left: t.left - n }
          : { top: t.top + t.height / 2 - i / 2, left: t.left + t.width };
      }),
      (l.prototype.getViewportAdjustedDelta = function (e, t, n, i) {
        var r = { top: 0, left: 0 };
        if (!this.$viewport) return r;
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
          var s = t.top - o - a.scroll,
            u = t.top + o - a.scroll + i;
          s < a.top
            ? (r.top = a.top - s)
            : u > a.top + a.height && (r.top = a.top + a.height - u);
        } else {
          var l = t.left - o,
            c = t.left + o + n;
          l < a.left
            ? (r.left = a.left - l)
            : c > a.right && (r.left = a.left + a.width - c);
        }
        return r;
      }),
      (l.prototype.getTitle = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-original-title") ||
          ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
        );
      }),
      (l.prototype.getUID = function (e) {
        do {
          e += ~~(1e6 * Math.random());
        } while (document.getElementById(e));
        return e;
      }),
      (l.prototype.tip = function () {
        if (
          !this.$tip &&
          ((this.$tip = e(this.options.template)), 1 != this.$tip.length)
        )
          throw new Error(
            this.type +
              " `template` option must consist of exactly 1 top-level element!"
          );
        return this.$tip;
      }),
      (l.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (l.prototype.enable = function () {
        this.enabled = !0;
      }),
      (l.prototype.disable = function () {
        this.enabled = !1;
      }),
      (l.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (l.prototype.toggle = function (t) {
        var n = this;
        t &&
          ((n = e(t.currentTarget).data("bs." + this.type)) ||
            ((n = new this.constructor(
              t.currentTarget,
              this.getDelegateOptions()
            )),
            e(t.currentTarget).data("bs." + this.type, n))),
          t
            ? ((n.inState.click = !n.inState.click),
              n.isInStateTrue() ? n.enter(n) : n.leave(n))
            : n.tip().hasClass("in")
            ? n.leave(n)
            : n.enter(n);
      }),
      (l.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            e.$element.off("." + e.type).removeData("bs." + e.type),
              e.$tip && e.$tip.detach(),
              (e.$tip = null),
              (e.$arrow = null),
              (e.$viewport = null),
              (e.$element = null);
          });
      }),
      (l.prototype.sanitizeHtml = function (e) {
        return n(e, this.options.whiteList, this.options.sanitizeFn);
      });
    var c = e.fn.tooltip;
    (e.fn.tooltip = i),
      (e.fn.tooltip.Constructor = l),
      (e.fn.tooltip.noConflict = function () {
        return (e.fn.tooltip = c), this;
      });
  })(jQuery),
  (function (e) {
    "use strict";
    function t(t) {
      return this.each(function () {
        var i = e(this),
          r = i.data("bs.popover"),
          o = "object" == typeof t && t;
        (!r && /destroy|hide/.test(t)) ||
          (r || i.data("bs.popover", (r = new n(this, o))),
          "string" == typeof t && r[t]());
      });
    }
    var n = function (e, t) {
      this.init("popover", e, t);
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (n.VERSION = "3.4.1"),
      (n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)),
      (n.prototype.constructor = n),
      (n.prototype.getDefaults = function () {
        return n.DEFAULTS;
      }),
      (n.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle(),
          n = this.getContent();
        if (this.options.html) {
          var i = typeof n;
          this.options.sanitize &&
            ((t = this.sanitizeHtml(t)),
            "string" === i && (n = this.sanitizeHtml(n))),
            e.find(".popover-title").html(t),
            e
              .find(".popover-content")
              .children()
              .detach()
              .end()
              ["string" === i ? "html" : "append"](n);
        } else
          e.find(".popover-title").text(t),
            e.find(".popover-content").children().detach().end().text(n);
        e.removeClass("fade top bottom left right in"),
          e.find(".popover-title").html() || e.find(".popover-title").hide();
      }),
      (n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (n.prototype.getContent = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-content") ||
          ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        );
      }),
      (n.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var i = e.fn.popover;
    (e.fn.popover = t),
      (e.fn.popover.Constructor = n),
      (e.fn.popover.noConflict = function () {
        return (e.fn.popover = i), this;
      });
  })(jQuery),
  (function () {
    const t = angular.module("WeddingSite", ["timer", "ngSanitize", "ngTouch"]);
    t.controller("WebsiteController", [
      "$scope",
      "$http",
      "$parse",
      "$sanitize",
      "SmartRsvpDataService",
      function (e, t, n, i, r) {
        (e.pages = {}),
          (e.rsvp = r.data),
          (e.rsvp_config = r.config),
          e.$on("windowHashChanged", (t, n) => {
            e.$apply(() => {
              e.changePage(n[0]);
            });
          }),
          e.$on("v2SaveSuccess", (t, n) => {
            const i = n[0],
              r = n[1];
            e.$apply(() => {
              e.pages[i] = r;
            }),
              "undefined" != typeof window.initMap && window.initMap();
          }),
          e.$on("v1SaveSuccess", (e, t) => {
            const n = t[0],
              i = (t[1], t[2]);
            $(`#${n}`).html(i);
          }),
          (e.setBackgroundPhoto = function (e) {
            if (!e) return {};
            return { "background-image": `url(${e})` };
          }),
          (e.isValidWindowHash = function () {
            const { hash: t } = window.location,
              n = t.replace("#page-", "").replace("#", "");
            try {
              return (
                "" !== t &&
                _.findIndex(Object.keys(e.pages), (e) => e === n) > -1
              );
            } catch (i) {
              return !1;
            }
          }),
          (e.getPageFromHash = function () {
            return window.location.hash.replace("#page-", "").replace("#", "");
          }),
          (e.pushState = function (e) {
            if (window.history.pushState) {
              let t = window.location.pathname;
              "/" === t && (t = ""),
                window.location.origin ||
                  (window.location.origin = `${window.location.protocol}//${
                    window.location.hostname
                  }${window.location.port ? `:${window.location.port}` : ""}`),
                window.history.pushState(
                  e,
                  null,
                  `${window.location.origin + t}#page-${e}`
                );
            }
          }),
          (e.setDefaultPage = function () {
            window.history.state || e.pushState(e.currentPage);
          }),
          (e.rg_cdnify_url = function (e, t) {
            return e && e.length
              ? e.replace(
                  /http(s){0,1}:\/\/s3\.amazonaws\.com\/cdn-rileygrey\//,
                  "https://cdn.rileygrey.com/"
                )
              : t || e;
          }),
          (e.registry_links_enabled = function () {
            return (
              "undefined" == typeof e.pages.registry.mode ||
              null === e.pages.registry.mode ||
              "links" === e.pages.registry.mode
            );
          }),
          (e.currentPage = e.isValidWindowHash()
            ? window.location.hash.replace("#page-", "").replace("#", "")
            : "home");
      },
    ]),
      t.controller("SmartRsvpController", [
        "$scope",
        "$http",
        "$parse",
        function (e) {
          function t() {
            if (
              ((e.rsvp.attending_response = e.rsvp.attending_options[0].value),
              e.rsvp.guest_access_enabled ||
                (e.rsvp.attending_can_bring_response =
                  e.rsvp.attending_can_bring_options[0].value),
              e.rsvp.travel_methods &&
                (e.rsvp.travel_method_response =
                  e.rsvp.travel_methods[0].value),
              e.rsvp.travel_departure_methods &&
                (e.rsvp.travel_departure_method_response =
                  e.rsvp.travel_departure_methods[0].value),
              (e.rsvp.food_appetizer_my_response =
                e.rsvp.food_appetizer_options[0].value),
              (e.rsvp.food_entree_my_response =
                e.rsvp.food_entree_options[0].value),
              (e.rsvp.food_dessert_my_response =
                e.rsvp.food_dessert_options[0].value),
              (e.rsvp.food_allergy_response =
                e.rsvp.food_allergy_options[0].value),
              (e.rsvp.attending_bringing_list = e.populateGuestArray()),
              e.rsvp.events.length <= 1 &&
                (e.rsvp.attending_events = e.rsvp.events),
              (e.rsvp.show_event_selector =
                e.rsvp.events.length > 1 || e.rsvp.events_grand_total > 1),
              e.rsvp.guest_access_enabled &&
                e.rsvp.advanced_mode_force_all_events &&
                ((e.rsvp.show_event_selector = !1),
                (e.rsvp.attending_events = e.rsvp.events)),
              e.rsvp.custom_sections && e.rsvp.custom_sections.length > 0)
            )
              for (let t = 0; t < e.rsvp.custom_sections.length; t++) {
                const n = e.rsvp.custom_sections[t];
                2 == n.response_type &&
                  (n.dropdown_response = n.dropdown_options[0].value);
              }
            e.isGuest() && (e.rsvp.attending_name = e.rsvp.guest.full_name);
          }
          (e.isGuest = function () {
            return !("undefined" == typeof e.rsvp.guest);
          }),
            (e.getGuestCount = function () {
              return e.rsvp.guest_access_enabled
                ? e.rsvp.guest.guests_allowed
                : e.rsvp.guests_enabled
                ? e.rsvp.guest_count_map[e.rsvp.attending_can_bring_response]
                : 0;
            }),
            (e.capitalizeTextForLabel = function (e) {
              const t = e.split(" ");
              for (let e = 0; e < t.length; e++)
                t[e] =
                  t[e].charAt(0).toUpperCase() + t[e].slice(1).toLowerCase();
              return t.join(" ");
            }),
            (e.populateGuestArray = function () {
              (e.rsvp.attending_bringing_list = []),
                (e.rsvp.food_appetizer_guest_response = []),
                (e.rsvp.food_entree_guest_response = []),
                (e.rsvp.food_dessert_guest_response = []);
              for (let t = 0; t < e.getGuestCount(); t++)
                e.rsvp.guest &&
                e.rsvp.guest.guests_names.length >= t + 1 &&
                e.rsvp.guest.guests_names[t].full_name.trim().length > 0
                  ? e.rsvp.attending_bringing_list.push({
                      name: e.rsvp.guest.guests_names[t].full_name,
                      attending_response: "AM",
                    })
                  : e.rsvp.attending_bringing_list.push({
                      name: "",
                      attending_response: "AM",
                    }),
                  e.rsvp.food_appetizer_guest_response.push(
                    e.rsvp.food_appetizer_options[0].value
                  ),
                  e.rsvp.food_entree_guest_response.push(
                    e.rsvp.food_entree_options[0].value
                  ),
                  e.rsvp.food_dessert_guest_response.push(
                    e.rsvp.food_dessert_options[0].value
                  );
              return e.rsvp.attending_bringing_list;
            }),
            (e.hasPlusOnes = function () {
              return e.rsvp.guest.guests_allowed > 0;
            }),
            (e.showAdditionalTravelSection = function () {
              const t = e.rsvp.travel_method_response;
              return (
                "car " !== (t || "").toLowerCase().slice(0, 4) &&
                ("Car" !== t || void 0)
              );
            }),
            (e.getTravelMethodResponse = function (t) {
              return e.rsvp.travel_method_word_disabled ? "" : t;
            }),
            (e.hasDefinedPlusOnes = function () {
              if (!e.rsvp.guest) return !1;
              if (
                !e.rsvp.guest.is_group_party &&
                e.rsvp.guest.guests_names.length < e.rsvp.guest.guests_allowed
              )
                return !1;
              const t = e.rsvp.guest.guests_names;
              for (let e = 0; e < t.length; e++)
                if (t[e].full_name.trim().length > 0) return !0;
              return !1;
            }),
            (e.isDefinedPlusOne = function (t) {
              if (!e.rsvp.guest) return !1;
              const n = e.rsvp.guest.guests_names;
              for (let e = 0; e < n.length; e++)
                if (
                  n[e].full_name.trim().length > 0 &&
                  n[e].full_name.trim() === t.name
                )
                  return !0;
              return !1;
            }),
            (e.toPlusOnesSentence = function () {
              const t = [];
              for (let n = 0; n < e.rsvp.guest.guests_names.length; n++)
                t.push(e.rsvp.guest.guests_names[n].full_name);
              switch (t.length) {
                case 0:
                  return "";
                case 1:
                  return t[0];
                case 2:
                  return `${t[0]} and ${t[1]}`;
                default:
                  var n = t.pop();
                  return `${t.join(", ")} and ${n}`;
              }
            }),
            (e.allPeopleAreNotAttending = function () {
              if ("AM NOT" != e.rsvp.attending_response) return !1;
              for (let t = 0; t < e.rsvp.attending_bringing_list.length; t++)
                if (
                  "AM NOT" !=
                  e.rsvp.attending_bringing_list[t].attending_response
                )
                  return !1;
              return !0;
            }),
            (e.showIfPrimaryGuestIsAttendingOrSomeoneWithinGroupIsAttending =
              function () {
                return (
                  !(!e.rsvp.guest && "AM NOT" === e.rsvp.attending_response) &&
                  ("AM NOT" != e.rsvp.attending_response ||
                    (!(e.rsvp.guest && !e.rsvp.guest.is_group_party) &&
                      !e.allPeopleAreNotAttending()))
                );
              }),
            (e.formShouldShowAndCollectPlusOneNames = function () {
              return (
                e.showIfPrimaryGuestIsAttendingOrSomeoneWithinGroupIsAttending() &&
                ((!e.rsvp.guest && e.rsvp.guests_enabled) ||
                  (e.rsvp.guest &&
                    e.hasPlusOnes() &&
                    !e.hasDefinedPlusOnes())) &&
                "AM NOT" !== e.rsvp.attending_response
              );
            });
          let n = {};
          (e.getCustomSectionMultiSelectorOptions = function (e) {
            const { uuid: t } = e;
            return (
              n[t] || (n[t] = _.map(e.dropdown_options, (e) => e.value)), n[t]
            );
          }),
            (e.logicalXOR = function (e, t) {
              return (e && !t) || (!e && t);
            });
          let i = !1;
          (e.submitRsvp = function () {
            i = !0;
            const t = angular.copy(e.rsvp),
              n = function () {
                $("#rsvp-form button")
                  .removeAttr("disabled")
                  .text(e.rsvp_config.submitCopy);
              };
            if (
              ((function () {
                $("#rsvp-form button")
                  .attr("disabled", "disabled")
                  .text("Submitting...");
              })(),
              e.rsvp_config.disabled)
            )
              return (
                alert("The RSVP has been turned off for this demo."), n(), !1
              );
            if ("" != $("#the_bot_detect").val()) {
              const t = { bot: $("#the_bot_detect").val() };
              return (
                e.rsvp_config.guest && (t["guest.email"] = e.rsvp_config.guest),
                Sentry.captureMessage("RSVP error 2", { extra: t }),
                alert(
                  "Sorry, but this RSVP could not be submitted. Please press the button again.\n\nIf you see this error multiple times in a row, please email help@rileygrey.com for assistance. err=2"
                ),
                n(),
                !1
              );
            }
            if (t.attending_enabled) {
              if (!t.attending_name || 0 == t.attending_name.trim().length)
                return (
                  alert("The name field is required to submit this RSVP."),
                  n(),
                  !1
                );
              if (t.show_event_selector && "AM NOT" !== t.attending_response) {
                if (0 == t.attending_events.length)
                  return (
                    alert(
                      `Sorry, please select at least one ${e.rsvp_config.attendingNoun} that you will be attending.`
                    ),
                    n(),
                    !1
                  );
                let i = !0;
                if (
                  ($.each(t.attending_bringing_list, (t, n) => {
                    n.name &&
                      n.name.trim().length > 0 &&
                      "AM" == n.attending_response &&
                      0 == n.attending_events.length &&
                      (alert(
                        `Sorry, please select at least one ${e.rsvp_config.attendingNoun} that ${n.name} will be attending.`
                      ),
                      (i = !1));
                  }),
                  !i)
                )
                  return n(), !1;
              }
            }
            const r = {
                rsvp: { user_id: e.rsvp_config.userId },
                smart_rsvp_data: t,
              },
              o = {};
            e.rsvp_config.guest && (o["guest.email"] = e.rsvp_config.guest),
              e.rsvp_config.guest &&
                ("undefined" == typeof e.rsvp_config.guest.firstName
                  ? (r.guest_login_email = e.rsvp_config.guest)
                  : ((r.guest_login_first_name = e.rsvp_config.guest.firstName),
                    (r.guest_login_last_name = e.rsvp_config.guest.lastName))),
              RGAJAX({
                type: "POST",
                url: e.rsvp_config.postToURL,
                data: r,
                success(t, n, i) {
                  $("#rsvp #rsvp-form").remove(),
                    $("#rsvp .section-title")
                      .append(
                        `<h4 style='text-align:center;'>${e.rsvp_config.thanksCopy}</h4>`
                      )
                      .show(),
                    $(window).scrollTop($("#rsvp").offset().top),
                    200 !== i.status &&
                      RGErrorHandler({ logErrorName: "RSVP error 3" })(i);
                },
                error: {
                  logErrorName: "RSVP error 1.2",
                  prettyErrorMessage:
                    "Sorry, but this RSVP could not be submitted. Please press the button again.\n\nIf you see this error multiple times in a row, please email help@rileygrey.com for assistance. err=1.2",
                  errorExtras: o,
                  handler: n,
                  suppressClientDisconnected: !1,
                  preHandler: (e) =>
                    503 == e.status &&
                    (alert(
                      "Sorry, RSVP could not be submitted. This website is down briefly for maintenance. Please try to submit your RSVP again in a few minutes."
                    ),
                    !0),
                },
              });
          }),
            e.$watch("rsvp", () => {
              t();
            }),
            e.$watch("pages.rsvp", () => {
              void 0 !== e.pages.rsvp && ((n = {}), (e.rsvp = e.pages.rsvp));
            });
          let r = !1;
          const o = _.debounce(
            (t) => {
              i ||
                e.rsvp_config.disabled ||
                $.get("/rsvp/dupecheck", { check_guest_name: t }, (n) => {
                  if (!n || !n.is_dupe) return;
                  let i;
                  (r = !0),
                    (i = e.rsvp_config.isGroupParty
                      ? e.rsvp_config.rsvpAlreadySubmittedGroup
                      : e.rsvp_config.rsvpAlreadySubmittedGuest.replace(
                          "{{ GUEST_NAME }}",
                          t
                        )),
                    window.alert(
                      `${i}\n\n${e.rsvp_config.rsvpAlreadySubmittedAppend}`
                    );
                });
            },
            800,
            !1
          );
          e.$watch("rsvp.attending_name", (t) => {
            t && ((e.isGuest() && !r) || o(t));
          }),
            (e.handleRsvpSectionClick = function () {
              r || o(e.rsvp.attending_name);
            });
        },
      ]),
      t.controller("InstagramController", [
        "$scope",
        "$sce",
        "$http",
        "$compile",
        "$templateCache",
        function (e) {
          const t = {
            columns: { 4: "four-columns", 5: "five-columns", 6: "six-columns" },
            style: { 0: "stitched", 1: "spaced", 2: "polaroid" },
          };
          (e.setInstagramData = function () {
            e.pages.instagram = window._instagramSectionPhotosData;
          }),
            (e.dataToStyle = function (n) {
              const i = e.pages.instagram[n];
              return t[n][i];
            });
        },
      ]),
      t.directive("dropdownMenu", () => ({
        restrict: "AE",
        scope: {
          ngModel: "=",
          listItems: "=",
          groupIndex: "=",
          last: "=",
          noun: "=",
          nounp: "=",
          uncheckAll: "=",
          name: "@",
          guestName: "@",
        },
        templateUrl: "dropdownMenu.html",
        link(t, n, i) {
          function r() {
            try {
              var n;
              n = /.[a-zA-Z]$/.test(t.noun) ? t.nounp : t.noun;
            } catch (e) {
              console.warn(
                `RSVP setFakeSelectOptionText error... scope.noun: ${t.noun}`
              ),
                (n = t.nounp);
            }
            1 === t.ngModel.length
              ? (t.options = [`1 ${t.noun}`])
              : (t.options = [`${t.ngModel.length} ${n}`]),
              (t.fakeSelectOption = t.options[0]);
          }
          function o() {
            $(".ng-dropdown-menu").each((e, t) => {
              $(t)
                .scope()
                .$apply((e) => {
                  e.shouldHide = !0;
                });
            });
          }
          function a() {
            t.uncheckAll
              ? (t.ngModel = [])
              : (t.ngModel = angular.copy(t.listItems)),
              r();
          }
          let s = !0;
          (t.shouldHide = !0),
            a(),
            n.on("mousedown", ".highlight", (e) => {
              if ((e.preventDefault(), t.shouldHide)) {
                if (
                  (o(),
                  t.$apply(() => {
                    t.shouldHide = !1;
                  }),
                  s)
                ) {
                  s = !1;
                  const e = $(n).find(".highlight"),
                    t = $("#rsvp").height(),
                    i = e[0].getBoundingClientRect(),
                    r =
                      (i.width - $(n).find(".dropdown-menu-panel").width()) / 2,
                    o = i.height + e.position().top + 1;
                  $(n)
                    .find(".dropdown-menu-panel")
                    .css({ left: `${r}px`, top: `${o}px` }),
                    t < o + $(n).find(".dropdown-menu-panel").height() &&
                      $("#rsvp").height(
                        o + $(n).find(".dropdown-menu-panel").height()
                      );
                }
              } else
                t.$apply(() => {
                  t.shouldHide = !0;
                });
            });
          const u = function (e) {
            const n = e.prop("checked"),
              i = e.prop("value"),
              o = t.ngModel.indexOf(i);
            n && -1 == o ? t.ngModel.push(i) : t.ngModel.splice(o, 1), r();
          };
          n.on("change", "input", function () {
            t.$apply(u($(this)));
          }),
            n.on("click", "span.delegate-label", function () {
              const e = $(this).prev("input");
              t.$apply(() => {
                e.prop("checked", !0), u(e);
              });
            }),
            n.find(".dropdown-menu-panel").on("click", (e) => {
              $(e.target).hasClass("delegate-label") || e.stopPropagation();
            }),
            n.on("click", (e) => {
              e.stopPropagation();
            }),
            $(document).on("click", o),
            t.$watch("ngModel", () => {
              t.ngModel || a();
            });
        },
      })),
      t.directive("heightEqualizer", [
        "$window",
        function (e) {
          return {
            restrict: "A",
            scope: { identifier: "@", dataToWatch: "=" },
            link(t, n, i) {
              const r = function () {
                const e = angular.element(t.identifier);
                let n,
                  i = 0;
                angular.forEach(e, (e) => {
                  const t = $(e).actual("height");
                  t > i && ((i = t), (n = e));
                }),
                  angular.forEach(e, (e) => {
                    e !== n && angular.element(e).height(i);
                  });
              };
              angular.element(e).bind("load", () => {
                r();
              }),
                t.$watch("scope.dataToWatch", () => {
                  "complete" === document.readyState && r();
                });
            },
          };
        },
      ]);
  })();
var $body = $("body"),
  fixSlider = function () {
    var e = $("ul.slides li#sched-slide-1");
    if (0 === e.length || e.width() > 0) return !1;
    $("#schedule-slider").data("flexslider").resize(),
      window.setTimeout(fixSlider, 500);
  };
$(document).ready(function () {
  $("input, textarea").placeholder();
}),
  $(window).on("load", function () {
    $(".curtains").curtain({
      disableCurtains: window._rgDisableCurtains,
      fixedNavEl: $(".nav-bar"),
      nextSlide: function () {
        fixSlider();
      },
      prevSlide: function () {
        fixSlider();
      },
    });
  }),
  (function (e, t, n) {
    function i(e) {
      var t = {},
        i = /^jQuery\d+$/;
      return (
        n.each(e.attributes, function (e, n) {
          n.specified && !i.test(n.name) && (t[n.name] = n.value);
        }),
        t
      );
    }
    function r(e, i) {
      var r = this,
        o = n(r);
      if (r.value == o.attr("placeholder") && o.hasClass("placeholder"))
        if (o.data("placeholder-password")) {
          if (
            ((o = o
              .hide()
              .next()
              .show()
              .attr("id", o.removeAttr("id").data("placeholder-id"))),
            !0 === e)
          )
            return (o[0].value = i);
          o.focus();
        } else
          (r.value = ""),
            o.removeClass("placeholder"),
            r == t.activeElement && r.select();
    }
    function o() {
      var e,
        t = this,
        o = n(t),
        a = this.id;
      if ("" == t.value) {
        if ("password" == t.type) {
          if (!o.data("placeholder-textinput")) {
            try {
              e = o.clone().attr({ type: "text" });
            } catch (s) {
              e = n("<input>").attr(n.extend(i(this), { type: "text" }));
            }
            e
              .removeAttr("name")
              .data({ "placeholder-password": !0, "placeholder-id": a })
              .bind("focus.placeholder", r),
              o
                .data({ "placeholder-textinput": e, "placeholder-id": a })
                .before(e);
          }
          o = o.removeAttr("id").hide().prev().attr("id", a).show();
        }
        o.addClass("placeholder"), (o[0].value = o.attr("placeholder"));
      } else o.removeClass("placeholder");
    }
    var a,
      s,
      u = "placeholder" in t.createElement("input"),
      l = "placeholder" in t.createElement("textarea"),
      c = n.fn,
      f = n.valHooks;
    u && l
      ? ((s = c.placeholder =
          function () {
            return this;
          }).input = s.textarea =
          !0)
      : (((s = c.placeholder =
          function () {
            var e = this;
            return (
              e
                .filter((u ? "textarea" : ":input") + "[placeholder]")
                .not(".placeholder")
                .bind({ "focus.placeholder": r, "blur.placeholder": o })
                .data("placeholder-enabled", !0)
                .trigger("blur.placeholder"),
              e
            );
          }).input = u),
        (s.textarea = l),
        (a = {
          get: function (e) {
            var t = n(e);
            return t.data("placeholder-enabled") && t.hasClass("placeholder")
              ? ""
              : e.value;
          },
          set: function (e, i) {
            var a = n(e);
            return a.data("placeholder-enabled")
              ? ("" == i
                  ? ((e.value = i), e != t.activeElement && o.call(e))
                  : (a.hasClass("placeholder") && r.call(e, !0, i)) ||
                    (e.value = i),
                a)
              : (e.value = i);
          },
        }),
        u || (f.input = a),
        l || (f.textarea = a),
        n(function () {
          n(t).delegate("form", "submit.placeholder", function () {
            var e = n(".placeholder", this).each(r);
            setTimeout(function () {
              e.each(o);
            }, 10);
          });
        }),
        n(e).bind("beforeunload.placeholder", function () {
          n(".placeholder").each(function () {
            this.value = "";
          });
        }));
  })(this, document, jQuery),
  angular.module("WeddingSite").controller("RGWebsiteController", [
    "$scope",
    "$controller",
    function (e, t) {
      $.extend(this, t("WebsiteController", { $scope: e })),
        (e.changePage = function (e) {
          return (window.location.hash = "#" + e), !1;
        }),
        e.$on("v2SaveSuccess", function (e, t) {
          var n = t[0];
          t[1], "instagram" === n && customResizeCurtains();
        }),
        window.addEventListener("rgEditorChangePage", function (t) {
          e.$apply(function () {
            e.changePage(t.detail);
          });
        });
    },
  ]);
