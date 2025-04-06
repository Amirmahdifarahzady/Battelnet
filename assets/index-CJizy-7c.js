import Swiper from "./swiper/swiper-bundle.min.mjs";
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = e(n);
    fetch(n.href, r);
  }
})();
function re(i) {
  return (
    i !== null &&
    typeof i == "object" &&
    "constructor" in i &&
    i.constructor === Object
  );
}
function te(i, t) {
  i === void 0 && (i = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((e) => {
      typeof i[e] > "u"
        ? (i[e] = t[e])
        : re(t[e]) &&
          re(i[e]) &&
          Object.keys(t[e]).length > 0 &&
          te(i[e], t[e]);
    });
}
const pe = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function $() {
  const i = typeof document < "u" ? document : {};
  return te(i, pe), i;
}
const ye = {
  document: pe,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(i) {
    return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
  },
  cancelAnimationFrame(i) {
    typeof setTimeout > "u" || clearTimeout(i);
  },
};
function L() {
  const i = typeof window < "u" ? window : {};
  return te(i, ye), i;
}
function Ee(i) {
  return (
    i === void 0 && (i = ""),
    i
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Me(i) {
  const t = i;
  Object.keys(t).forEach((e) => {
    try {
      t[e] = null;
    } catch {}
    try {
      delete t[e];
    } catch {}
  });
}
function Q(i, t) {
  return t === void 0 && (t = 0), setTimeout(i, t);
}
function N() {
  return Date.now();
}
function Pe(i) {
  const t = L();
  let e;
  return (
    t.getComputedStyle && (e = t.getComputedStyle(i, null)),
    !e && i.currentStyle && (e = i.currentStyle),
    e || (e = i.style),
    e
  );
}
function Ie(i, t) {
  t === void 0 && (t = "x");
  const e = L();
  let s, n, r;
  const o = Pe(i);
  return (
    e.WebKitCSSMatrix
      ? ((n = o.transform || o.webkitTransform),
        n.split(",").length > 6 &&
          (n = n
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (r = new e.WebKitCSSMatrix(n === "none" ? "" : n)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    t === "x" &&
      (e.WebKitCSSMatrix
        ? (n = r.m41)
        : s.length === 16
        ? (n = parseFloat(s[12]))
        : (n = parseFloat(s[4]))),
    t === "y" &&
      (e.WebKitCSSMatrix
        ? (n = r.m42)
        : s.length === 16
        ? (n = parseFloat(s[13]))
        : (n = parseFloat(s[5]))),
    n || 0
  );
}
function F(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    i.constructor &&
    Object.prototype.toString.call(i).slice(8, -1) === "Object"
  );
}
function Ce(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? i instanceof HTMLElement
    : i && (i.nodeType === 1 || i.nodeType === 11);
}
function A() {
  const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let e = 1; e < arguments.length; e += 1) {
    const s = e < 0 || arguments.length <= e ? void 0 : arguments[e];
    if (s != null && !Ce(s)) {
      const n = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, o = n.length; r < o; r += 1) {
        const l = n[r],
          a = Object.getOwnPropertyDescriptor(s, l);
        a !== void 0 &&
          a.enumerable &&
          (F(i[l]) && F(s[l])
            ? s[l].__swiper__
              ? (i[l] = s[l])
              : A(i[l], s[l])
            : !F(i[l]) && F(s[l])
            ? ((i[l] = {}), s[l].__swiper__ ? (i[l] = s[l]) : A(i[l], s[l]))
            : (i[l] = s[l]));
      }
    }
  }
  return i;
}
function j(i, t, e) {
  i.style.setProperty(t, e);
}
function me(i) {
  let { swiper: t, targetPosition: e, side: s } = i;
  const n = L(),
    r = -t.translate;
  let o = null,
    l;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(t.cssModeFrameID);
  const d = e > r ? "next" : "prev",
    f = (p, u) => (d === "next" && p >= u) || (d === "prev" && p <= u),
    c = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const p = Math.max(Math.min((l - o) / a, 1), 0),
        u = 0.5 - Math.cos(p * Math.PI) / 2;
      let m = r + u * (e - r);
      if ((f(m, e) && (m = e), t.wrapperEl.scrollTo({ [s]: m }), f(m, e))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [s]: m });
          }),
          n.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = n.requestAnimationFrame(c);
    };
  c();
}
function G(i, t) {
  t === void 0 && (t = "");
  const e = L(),
    s = [...i.children];
  return (
    e.HTMLSlotElement &&
      i instanceof HTMLSlotElement &&
      s.push(...i.assignedElements()),
    t ? s.filter((n) => n.matches(t)) : s
  );
}
function ze(i, t) {
  var s, n;
  const e = [t];
  for (; e.length > 0; ) {
    const r = e.shift();
    if (i === r) return !0;
    e.push(
      ...r.children,
      ...(((s = r.shadowRoot) == null ? void 0 : s.children) || []),
      ...(((n = r.assignedElements) == null ? void 0 : n.call(r)) || [])
    );
  }
}
function Le(i, t) {
  const e = L();
  let s = t.contains(i);
  return (
    !s &&
      e.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(i)), s || (s = ze(i, t))),
    s
  );
}
function q(i) {
  try {
    console.warn(i);
    return;
  } catch {}
}
function J(i, t) {
  t === void 0 && (t = []);
  const e = document.createElement(i);
  return e.classList.add(...(Array.isArray(t) ? t : Ee(t))), e;
}
function Oe(i, t) {
  const e = [];
  for (; i.previousElementSibling; ) {
    const s = i.previousElementSibling;
    t ? s.matches(t) && e.push(s) : e.push(s), (i = s);
  }
  return e;
}
function Ae(i, t) {
  const e = [];
  for (; i.nextElementSibling; ) {
    const s = i.nextElementSibling;
    t ? s.matches(t) && e.push(s) : e.push(s), (i = s);
  }
  return e;
}
function V(i, t) {
  return L().getComputedStyle(i, null).getPropertyValue(t);
}
function ae(i) {
  let t = i,
    e;
  if (t) {
    for (e = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (e += 1);
    return e;
  }
}
function ke(i, t) {
  const e = [];
  let s = i.parentElement;
  for (; s; ) e.push(s), (s = s.parentElement);
  return e;
}
function le(i, t, e) {
  const s = L();
  return (
    i[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      s
        .getComputedStyle(i, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      s
        .getComputedStyle(i, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
let R;
function _e() {
  const i = L(),
    t = $();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in i ||
      (i.DocumentTouch && t instanceof i.DocumentTouch)
    ),
  };
}
function he() {
  return R || (R = _e()), R;
}
let W;
function Ge(i) {
  let { userAgent: t } = i === void 0 ? {} : i;
  const e = he(),
    s = L(),
    n = s.navigator.platform,
    r = t || s.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = s.screen.width,
    a = s.screen.height,
    d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let f = r.match(/(iPad).*OS\s([\d_]+)/);
  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !f && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    u = n === "Win32";
  let m = n === "MacIntel";
  const h = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !f &&
      m &&
      e.touch &&
      h.indexOf(`${l}x${a}`) >= 0 &&
      ((f = r.match(/(Version)\/([\d.]+)/)),
      f || (f = [0, 1, "13_0_0"]),
      (m = !1)),
    d && !u && ((o.os = "android"), (o.android = !0)),
    (f || p || c) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function ge(i) {
  return i === void 0 && (i = {}), W || (W = Ge(i)), W;
}
let Y;
function De() {
  const i = L(),
    t = ge();
  let e = !1;
  function s() {
    const l = i.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (s()) {
    const l = String(i.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, d] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((f) => Number(f));
      e = a < 16 || (a === 16 && d < 2);
    }
  }
  const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      i.navigator.userAgent
    ),
    r = s(),
    o = r || (n && t.ios);
  return {
    isSafari: e || r,
    needPerspectiveFix: e,
    need3dFix: o,
    isWebView: n,
  };
}
function ve() {
  return Y || (Y = De()), Y;
}
function Ve(i) {
  let { swiper: t, on: e, emit: s } = i;
  const n = L();
  let r = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((c) => {
          o = n.requestAnimationFrame(() => {
            const { width: p, height: u } = t;
            let m = p,
              h = u;
            c.forEach((E) => {
              let { contentBoxSize: v, contentRect: S, target: w } = E;
              (w && w !== t.el) ||
                ((m = S ? S.width : (v[0] || v).inlineSize),
                (h = S ? S.height : (v[0] || v).blockSize));
            }),
              (m !== p || h !== u) && l();
          });
        })),
        r.observe(t.el));
    },
    d = () => {
      o && n.cancelAnimationFrame(o),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null));
    },
    f = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange");
    };
  e("init", () => {
    if (t.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return;
    }
    n.addEventListener("resize", l), n.addEventListener("orientationchange", f);
  }),
    e("destroy", () => {
      d(),
        n.removeEventListener("resize", l),
        n.removeEventListener("orientationchange", f);
    });
}
function $e(i) {
  let { swiper: t, extendParams: e, on: s, emit: n } = i;
  const r = [],
    o = L(),
    l = function (f, c) {
      c === void 0 && (c = {});
      const p = o.MutationObserver || o.WebkitMutationObserver,
        u = new p((m) => {
          if (t.__preventObserver__) return;
          if (m.length === 1) {
            n("observerUpdate", m[0]);
            return;
          }
          const h = function () {
            n("observerUpdate", m[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(h)
            : o.setTimeout(h, 0);
        });
      u.observe(f, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: t.isElement || (typeof c.childList > "u" ? !0 : c).childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        r.push(u);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const f = ke(t.hostEl);
          for (let c = 0; c < f.length; c += 1) l(f[c]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    d = () => {
      r.forEach((f) => {
        f.disconnect();
      }),
        r.splice(0, r.length);
    };
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", a),
    s("destroy", d);
}
var Be = {
  on(i, t, e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const n = e ? "unshift" : "push";
    return (
      i.split(" ").forEach((r) => {
        s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][n](t);
      }),
      s
    );
  },
  once(i, t, e) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    function n() {
      s.off(i, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, o = new Array(r), l = 0; l < r; l++)
        o[l] = arguments[l];
      t.apply(s, o);
    }
    return (n.__emitterProxy = t), s.on(i, n, e);
  },
  onAny(i, t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || typeof i != "function") return e;
    const s = t ? "unshift" : "push";
    return e.eventsAnyListeners.indexOf(i) < 0 && e.eventsAnyListeners[s](i), e;
  },
  offAny(i) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const e = t.eventsAnyListeners.indexOf(i);
    return e >= 0 && t.eventsAnyListeners.splice(e, 1), t;
  },
  off(i, t) {
    const e = this;
    return (
      !e.eventsListeners ||
        e.destroyed ||
        !e.eventsListeners ||
        i.split(" ").forEach((s) => {
          typeof t > "u"
            ? (e.eventsListeners[s] = [])
            : e.eventsListeners[s] &&
              e.eventsListeners[s].forEach((n, r) => {
                (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                  e.eventsListeners[s].splice(r, 1);
              });
        }),
      e
    );
  },
  emit() {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
    let t, e, s;
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((t = r[0]), (e = r.slice(1, r.length)), (s = i))
        : ((t = r[0].events), (e = r[0].data), (s = r[0].context || i)),
      e.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        i.eventsAnyListeners &&
          i.eventsAnyListeners.length &&
          i.eventsAnyListeners.forEach((d) => {
            d.apply(s, [a, ...e]);
          }),
          i.eventsListeners &&
            i.eventsListeners[a] &&
            i.eventsListeners[a].forEach((d) => {
              d.apply(s, e);
            });
      }),
      i
    );
  },
};
function Fe() {
  const i = this;
  let t, e;
  const s = i.el;
  typeof i.params.width < "u" && i.params.width !== null
    ? (t = i.params.width)
    : (t = s.clientWidth),
    typeof i.params.height < "u" && i.params.height !== null
      ? (e = i.params.height)
      : (e = s.clientHeight),
    !((t === 0 && i.isHorizontal()) || (e === 0 && i.isVertical())) &&
      ((t =
        t -
        parseInt(V(s, "padding-left") || 0, 10) -
        parseInt(V(s, "padding-right") || 0, 10)),
      (e =
        e -
        parseInt(V(s, "padding-top") || 0, 10) -
        parseInt(V(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(e) && (e = 0),
      Object.assign(i, {
        width: t,
        height: e,
        size: i.isHorizontal() ? t : e,
      }));
}
function je() {
  const i = this;
  function t(g, y) {
    return parseFloat(g.getPropertyValue(i.getDirectionLabel(y)) || 0);
  }
  const e = i.params,
    { wrapperEl: s, slidesEl: n, size: r, rtlTranslate: o, wrongRTL: l } = i,
    a = i.virtual && e.virtual.enabled,
    d = a ? i.virtual.slides.length : i.slides.length,
    f = G(n, `.${i.params.slideClass}, swiper-slide`),
    c = a ? i.virtual.slides.length : f.length;
  let p = [];
  const u = [],
    m = [];
  let h = e.slidesOffsetBefore;
  typeof h == "function" && (h = e.slidesOffsetBefore.call(i));
  let E = e.slidesOffsetAfter;
  typeof E == "function" && (E = e.slidesOffsetAfter.call(i));
  const v = i.snapGrid.length,
    S = i.slidesGrid.length;
  let w = e.spaceBetween,
    T = -h,
    x = 0,
    C = 0;
  if (typeof r > "u") return;
  typeof w == "string" && w.indexOf("%") >= 0
    ? (w = (parseFloat(w.replace("%", "")) / 100) * r)
    : typeof w == "string" && (w = parseFloat(w)),
    (i.virtualSize = -w),
    f.forEach((g) => {
      o ? (g.style.marginLeft = "") : (g.style.marginRight = ""),
        (g.style.marginBottom = ""),
        (g.style.marginTop = "");
    }),
    e.centeredSlides &&
      e.cssMode &&
      (j(s, "--swiper-centered-offset-before", ""),
      j(s, "--swiper-centered-offset-after", ""));
  const I = e.grid && e.grid.rows > 1 && i.grid;
  I ? i.grid.initSlides(f) : i.grid && i.grid.unsetSlides();
  let M;
  const _ =
    e.slidesPerView === "auto" &&
    e.breakpoints &&
    Object.keys(e.breakpoints).filter(
      (g) => typeof e.breakpoints[g].slidesPerView < "u"
    ).length > 0;
  for (let g = 0; g < c; g += 1) {
    M = 0;
    let y;
    if (
      (f[g] && (y = f[g]),
      I && i.grid.updateSlide(g, y, f),
      !(f[g] && V(y, "display") === "none"))
    ) {
      if (e.slidesPerView === "auto") {
        _ && (f[g].style[i.getDirectionLabel("width")] = "");
        const P = getComputedStyle(y),
          b = y.style.transform,
          z = y.style.webkitTransform;
        if (
          (b && (y.style.transform = "none"),
          z && (y.style.webkitTransform = "none"),
          e.roundLengths)
        )
          M = i.isHorizontal() ? le(y, "width") : le(y, "height");
        else {
          const O = t(P, "width"),
            D = t(P, "padding-left"),
            xe = t(P, "padding-right"),
            ie = t(P, "margin-left"),
            se = t(P, "margin-right"),
            ne = P.getPropertyValue("box-sizing");
          if (ne && ne === "border-box") M = O + ie + se;
          else {
            const { clientWidth: be, offsetWidth: Te } = y;
            M = O + D + xe + ie + se + (Te - be);
          }
        }
        b && (y.style.transform = b),
          z && (y.style.webkitTransform = z),
          e.roundLengths && (M = Math.floor(M));
      } else
        (M = (r - (e.slidesPerView - 1) * w) / e.slidesPerView),
          e.roundLengths && (M = Math.floor(M)),
          f[g] && (f[g].style[i.getDirectionLabel("width")] = `${M}px`);
      f[g] && (f[g].swiperSlideSize = M),
        m.push(M),
        e.centeredSlides
          ? ((T = T + M / 2 + x / 2 + w),
            x === 0 && g !== 0 && (T = T - r / 2 - w),
            g === 0 && (T = T - r / 2 - w),
            Math.abs(T) < 1 / 1e3 && (T = 0),
            e.roundLengths && (T = Math.floor(T)),
            C % e.slidesPerGroup === 0 && p.push(T),
            u.push(T))
          : (e.roundLengths && (T = Math.floor(T)),
            (C - Math.min(i.params.slidesPerGroupSkip, C)) %
              i.params.slidesPerGroup ===
              0 && p.push(T),
            u.push(T),
            (T = T + M + w)),
        (i.virtualSize += M + w),
        (x = M),
        (C += 1);
    }
  }
  if (
    ((i.virtualSize = Math.max(i.virtualSize, r) + E),
    o &&
      l &&
      (e.effect === "slide" || e.effect === "coverflow") &&
      (s.style.width = `${i.virtualSize + w}px`),
    e.setWrapperSize &&
      (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + w}px`),
    I && i.grid.updateWrapperSize(M, p),
    !e.centeredSlides)
  ) {
    const g = [];
    for (let y = 0; y < p.length; y += 1) {
      let P = p[y];
      e.roundLengths && (P = Math.floor(P)),
        p[y] <= i.virtualSize - r && g.push(P);
    }
    (p = g),
      Math.floor(i.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(i.virtualSize - r);
  }
  if (a && e.loop) {
    const g = m[0] + w;
    if (e.slidesPerGroup > 1) {
      const y = Math.ceil(
          (i.virtual.slidesBefore + i.virtual.slidesAfter) / e.slidesPerGroup
        ),
        P = g * e.slidesPerGroup;
      for (let b = 0; b < y; b += 1) p.push(p[p.length - 1] + P);
    }
    for (let y = 0; y < i.virtual.slidesBefore + i.virtual.slidesAfter; y += 1)
      e.slidesPerGroup === 1 && p.push(p[p.length - 1] + g),
        u.push(u[u.length - 1] + g),
        (i.virtualSize += g);
  }
  if ((p.length === 0 && (p = [0]), w !== 0)) {
    const g =
      i.isHorizontal() && o ? "marginLeft" : i.getDirectionLabel("marginRight");
    f.filter((y, P) =>
      !e.cssMode || e.loop ? !0 : P !== f.length - 1
    ).forEach((y) => {
      y.style[g] = `${w}px`;
    });
  }
  if (e.centeredSlides && e.centeredSlidesBounds) {
    let g = 0;
    m.forEach((P) => {
      g += P + (w || 0);
    }),
      (g -= w);
    const y = g > r ? g - r : 0;
    p = p.map((P) => (P <= 0 ? -h : P > y ? y + E : P));
  }
  if (e.centerInsufficientSlides) {
    let g = 0;
    m.forEach((P) => {
      g += P + (w || 0);
    }),
      (g -= w);
    const y = (e.slidesOffsetBefore || 0) + (e.slidesOffsetAfter || 0);
    if (g + y < r) {
      const P = (r - g - y) / 2;
      p.forEach((b, z) => {
        p[z] = b - P;
      }),
        u.forEach((b, z) => {
          u[z] = b + P;
        });
    }
  }
  if (
    (Object.assign(i, {
      slides: f,
      snapGrid: p,
      slidesGrid: u,
      slidesSizesGrid: m,
    }),
    e.centeredSlides && e.cssMode && !e.centeredSlidesBounds)
  ) {
    j(s, "--swiper-centered-offset-before", `${-p[0]}px`),
      j(
        s,
        "--swiper-centered-offset-after",
        `${i.size / 2 - m[m.length - 1] / 2}px`
      );
    const g = -i.snapGrid[0],
      y = -i.slidesGrid[0];
    (i.snapGrid = i.snapGrid.map((P) => P + g)),
      (i.slidesGrid = i.slidesGrid.map((P) => P + y));
  }
  if (
    (c !== d && i.emit("slidesLengthChange"),
    p.length !== v &&
      (i.params.watchOverflow && i.checkOverflow(),
      i.emit("snapGridLengthChange")),
    u.length !== S && i.emit("slidesGridLengthChange"),
    e.watchSlidesProgress && i.updateSlidesOffset(),
    i.emit("slidesUpdated"),
    !a && !e.cssMode && (e.effect === "slide" || e.effect === "fade"))
  ) {
    const g = `${e.containerModifierClass}backface-hidden`,
      y = i.el.classList.contains(g);
    c <= e.maxBackfaceHiddenSlides
      ? y || i.el.classList.add(g)
      : y && i.el.classList.remove(g);
  }
}
function He(i) {
  const t = this,
    e = [],
    s = t.virtual && t.params.virtual.enabled;
  let n = 0,
    r;
  typeof i == "number"
    ? t.setTransition(i)
    : i === !0 && t.setTransition(t.params.speed);
  const o = (l) => (s ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        e.push(l);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const l = t.activeIndex + r;
        if (l > t.slides.length && !s) break;
        e.push(o(l));
      }
  else e.push(o(t.activeIndex));
  for (r = 0; r < e.length; r += 1)
    if (typeof e[r] < "u") {
      const l = e[r].offsetHeight;
      n = l > n ? l : n;
    }
  (n || n === 0) && (t.wrapperEl.style.height = `${n}px`);
}
function Ne() {
  const i = this,
    t = i.slides,
    e = i.isElement
      ? i.isHorizontal()
        ? i.wrapperEl.offsetLeft
        : i.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (i.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
      e -
      i.cssOverflowAdjustment();
}
const oe = (i, t, e) => {
  t && !i.classList.contains(e)
    ? i.classList.add(e)
    : !t && i.classList.contains(e) && i.classList.remove(e);
};
function qe(i) {
  i === void 0 && (i = (this && this.translate) || 0);
  const t = this,
    e = t.params,
    { slides: s, rtlTranslate: n, snapGrid: r } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -i;
  n && (o = i), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let l = e.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < s.length; a += 1) {
    const d = s[a];
    let f = d.swiperSlideOffset;
    e.cssMode && e.centeredSlides && (f -= s[0].swiperSlideOffset);
    const c =
        (o + (e.centeredSlides ? t.minTranslate() : 0) - f) /
        (d.swiperSlideSize + l),
      p =
        (o - r[0] + (e.centeredSlides ? t.minTranslate() : 0) - f) /
        (d.swiperSlideSize + l),
      u = -(o - f),
      m = u + t.slidesSizesGrid[a],
      h = u >= 0 && u <= t.size - t.slidesSizesGrid[a],
      E =
        (u >= 0 && u < t.size - 1) ||
        (m > 1 && m <= t.size) ||
        (u <= 0 && m >= t.size);
    E && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(a)),
      oe(d, E, e.slideVisibleClass),
      oe(d, h, e.slideFullyVisibleClass),
      (d.progress = n ? -c : c),
      (d.originalProgress = n ? -p : p);
  }
}
function Re(i) {
  const t = this;
  if (typeof i > "u") {
    const f = t.rtlTranslate ? -1 : 1;
    i = (t && t.translate && t.translate * f) || 0;
  }
  const e = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: r, isEnd: o, progressLoop: l } = t;
  const a = r,
    d = o;
  if (s === 0) (n = 0), (r = !0), (o = !0);
  else {
    n = (i - t.minTranslate()) / s;
    const f = Math.abs(i - t.minTranslate()) < 1,
      c = Math.abs(i - t.maxTranslate()) < 1;
    (r = f || n <= 0), (o = c || n >= 1), f && (n = 0), c && (n = 1);
  }
  if (e.loop) {
    const f = t.getSlideIndexByData(0),
      c = t.getSlideIndexByData(t.slides.length - 1),
      p = t.slidesGrid[f],
      u = t.slidesGrid[c],
      m = t.slidesGrid[t.slidesGrid.length - 1],
      h = Math.abs(i);
    h >= p ? (l = (h - p) / m) : (l = (h + m - u) / m), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: n, progressLoop: l, isBeginning: r, isEnd: o }),
    (e.watchSlidesProgress || (e.centeredSlides && e.autoHeight)) &&
      t.updateSlidesProgress(i),
    r && !a && t.emit("reachBeginning toEdge"),
    o && !d && t.emit("reachEnd toEdge"),
    ((a && !r) || (d && !o)) && t.emit("fromEdge"),
    t.emit("progress", n);
}
const X = (i, t, e) => {
  t && !i.classList.contains(e)
    ? i.classList.add(e)
    : !t && i.classList.contains(e) && i.classList.remove(e);
};
function We() {
  const i = this,
    { slides: t, params: e, slidesEl: s, activeIndex: n } = i,
    r = i.virtual && e.virtual.enabled,
    o = i.grid && e.grid && e.grid.rows > 1,
    l = (c) => G(s, `.${e.slideClass}${c}, swiper-slide${c}`)[0];
  let a, d, f;
  if (r)
    if (e.loop) {
      let c = n - i.virtual.slidesBefore;
      c < 0 && (c = i.virtual.slides.length + c),
        c >= i.virtual.slides.length && (c -= i.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${c}"]`));
    } else a = l(`[data-swiper-slide-index="${n}"]`);
  else
    o
      ? ((a = t.find((c) => c.column === n)),
        (f = t.find((c) => c.column === n + 1)),
        (d = t.find((c) => c.column === n - 1)))
      : (a = t[n]);
  a &&
    (o ||
      ((f = Ae(a, `.${e.slideClass}, swiper-slide`)[0]),
      e.loop && !f && (f = t[0]),
      (d = Oe(a, `.${e.slideClass}, swiper-slide`)[0]),
      e.loop && !d === 0 && (d = t[t.length - 1]))),
    t.forEach((c) => {
      X(c, c === a, e.slideActiveClass),
        X(c, c === f, e.slideNextClass),
        X(c, c === d, e.slidePrevClass);
    }),
    i.emitSlidesClasses();
}
const H = (i, t) => {
    if (!i || i.destroyed || !i.params) return;
    const e = () => (i.isElement ? "swiper-slide" : `.${i.params.slideClass}`),
      s = t.closest(e());
    if (s) {
      let n = s.querySelector(`.${i.params.lazyPreloaderClass}`);
      !n &&
        i.isElement &&
        (s.shadowRoot
          ? (n = s.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((n = s.shadowRoot.querySelector(
                  `.${i.params.lazyPreloaderClass}`
                )),
                n && n.remove());
            })),
        n && n.remove();
    }
  },
  K = (i, t) => {
    if (!i.slides[t]) return;
    const e = i.slides[t].querySelector('[loading="lazy"]');
    e && e.removeAttribute("loading");
  },
  ee = (i) => {
    if (!i || i.destroyed || !i.params) return;
    let t = i.params.lazyPreloadPrevNext;
    const e = i.slides.length;
    if (!e || !t || t < 0) return;
    t = Math.min(t, e);
    const s =
        i.params.slidesPerView === "auto"
          ? i.slidesPerViewDynamic()
          : Math.ceil(i.params.slidesPerView),
      n = i.activeIndex;
    if (i.params.grid && i.params.grid.rows > 1) {
      const o = n,
        l = [o - t];
      l.push(...Array.from({ length: t }).map((a, d) => o + s + d)),
        i.slides.forEach((a, d) => {
          l.includes(a.column) && K(i, d);
        });
      return;
    }
    const r = n + s - 1;
    if (i.params.rewind || i.params.loop)
      for (let o = n - t; o <= r + t; o += 1) {
        const l = ((o % e) + e) % e;
        (l < n || l > r) && K(i, l);
      }
    else
      for (let o = Math.max(n - t, 0); o <= Math.min(r + t, e - 1); o += 1)
        o !== n && (o > r || o < n) && K(i, o);
  };
function Ye(i) {
  const { slidesGrid: t, params: e } = i,
    s = i.rtlTranslate ? i.translate : -i.translate;
  let n;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u"
      ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (n = r)
        : s >= t[r] && s < t[r + 1] && (n = r + 1)
      : s >= t[r] && (n = r);
  return e.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function Xe(i) {
  const t = this,
    e = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: n, activeIndex: r, realIndex: o, snapIndex: l } = t;
  let a = i,
    d;
  const f = (u) => {
    let m = u - t.virtual.slidesBefore;
    return (
      m < 0 && (m = t.virtual.slides.length + m),
      m >= t.virtual.slides.length && (m -= t.virtual.slides.length),
      m
    );
  };
  if ((typeof a > "u" && (a = Ye(t)), s.indexOf(e) >= 0)) d = s.indexOf(e);
  else {
    const u = Math.min(n.slidesPerGroupSkip, a);
    d = u + Math.floor((a - u) / n.slidesPerGroup);
  }
  if ((d >= s.length && (d = s.length - 1), a === r && !t.params.loop)) {
    d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"));
    return;
  }
  if (a === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = f(a);
    return;
  }
  const c = t.grid && n.grid && n.grid.rows > 1;
  let p;
  if (t.virtual && n.virtual.enabled && n.loop) p = f(a);
  else if (c) {
    const u = t.slides.find((h) => h.column === a);
    let m = parseInt(u.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(m) && (m = Math.max(t.slides.indexOf(u), 0)),
      (p = Math.floor(m / n.grid.rows));
  } else if (t.slides[a]) {
    const u = t.slides[a].getAttribute("data-swiper-slide-index");
    u ? (p = parseInt(u, 10)) : (p = a);
  } else p = a;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: d,
    previousRealIndex: o,
    realIndex: p,
    previousIndex: r,
    activeIndex: a,
  }),
    t.initialized && ee(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== p && t.emit("realIndexChange"), t.emit("slideChange"));
}
function Ke(i, t) {
  const e = this,
    s = e.params;
  let n = i.closest(`.${s.slideClass}, swiper-slide`);
  !n &&
    e.isElement &&
    t &&
    t.length > 1 &&
    t.includes(i) &&
    [...t.slice(t.indexOf(i) + 1, t.length)].forEach((l) => {
      !n && l.matches && l.matches(`.${s.slideClass}, swiper-slide`) && (n = l);
    });
  let r = !1,
    o;
  if (n) {
    for (let l = 0; l < e.slides.length; l += 1)
      if (e.slides[l] === n) {
        (r = !0), (o = l);
        break;
      }
  }
  if (n && r)
    (e.clickedSlide = n),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt(
            n.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (e.clickedIndex = o);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  s.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
var Ze = {
  updateSize: Fe,
  updateSlides: je,
  updateAutoHeight: He,
  updateSlidesOffset: Ne,
  updateSlidesProgress: qe,
  updateProgress: Re,
  updateSlidesClasses: We,
  updateActiveIndex: Xe,
  updateClickedSlide: Ke,
};
function Ue(i) {
  i === void 0 && (i = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: e, rtlTranslate: s, translate: n, wrapperEl: r } = t;
  if (e.virtualTranslate) return s ? -n : n;
  if (e.cssMode) return n;
  let o = Ie(r, i);
  return (o += t.cssOverflowAdjustment()), s && (o = -o), o || 0;
}
function Qe(i, t) {
  const e = this,
    { rtlTranslate: s, params: n, wrapperEl: r, progress: o } = e;
  let l = 0,
    a = 0;
  const d = 0;
  e.isHorizontal() ? (l = s ? -i : i) : (a = i),
    n.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (e.previousTranslate = e.translate),
    (e.translate = e.isHorizontal() ? l : a),
    n.cssMode
      ? (r[e.isHorizontal() ? "scrollLeft" : "scrollTop"] = e.isHorizontal()
          ? -l
          : -a)
      : n.virtualTranslate ||
        (e.isHorizontal()
          ? (l -= e.cssOverflowAdjustment())
          : (a -= e.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${l}px, ${a}px, ${d}px)`));
  let f;
  const c = e.maxTranslate() - e.minTranslate();
  c === 0 ? (f = 0) : (f = (i - e.minTranslate()) / c),
    f !== o && e.updateProgress(i),
    e.emit("setTranslate", e.translate, t);
}
function Je() {
  return -this.snapGrid[0];
}
function et() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function tt(i, t, e, s, n) {
  i === void 0 && (i = 0),
    t === void 0 && (t = this.params.speed),
    e === void 0 && (e = !0),
    s === void 0 && (s = !0);
  const r = this,
    { params: o, wrapperEl: l } = r;
  if (r.animating && o.preventInteractionOnTransition) return !1;
  const a = r.minTranslate(),
    d = r.maxTranslate();
  let f;
  if (
    (s && i > a ? (f = a) : s && i < d ? (f = d) : (f = i),
    r.updateProgress(f),
    o.cssMode)
  ) {
    const c = r.isHorizontal();
    if (t === 0) l[c ? "scrollLeft" : "scrollTop"] = -f;
    else {
      if (!r.support.smoothScroll)
        return (
          me({ swiper: r, targetPosition: -f, side: c ? "left" : "top" }), !0
        );
      l.scrollTo({ [c ? "left" : "top"]: -f, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(f),
        e && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(f),
        e && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (p) {
              !r ||
                r.destroyed ||
                (p.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  (r.animating = !1),
                  e && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var it = {
  getTranslate: Ue,
  setTranslate: Qe,
  minTranslate: Je,
  maxTranslate: et,
  translateTo: tt,
};
function st(i, t) {
  const e = this;
  e.params.cssMode ||
    ((e.wrapperEl.style.transitionDuration = `${i}ms`),
    (e.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : "")),
    e.emit("setTransition", i, t);
}
function we(i) {
  let { swiper: t, runCallbacks: e, direction: s, step: n } = i;
  const { activeIndex: r, previousIndex: o } = t;
  let l = s;
  if (
    (l || (r > o ? (l = "next") : r < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${n}`),
    e && r !== o)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${n}`);
      return;
    }
    t.emit(`slideChangeTransition${n}`),
      l === "next"
        ? t.emit(`slideNextTransition${n}`)
        : t.emit(`slidePrevTransition${n}`);
  }
}
function nt(i, t) {
  i === void 0 && (i = !0);
  const e = this,
    { params: s } = e;
  s.cssMode ||
    (s.autoHeight && e.updateAutoHeight(),
    we({ swiper: e, runCallbacks: i, direction: t, step: "Start" }));
}
function rt(i, t) {
  i === void 0 && (i = !0);
  const e = this,
    { params: s } = e;
  (e.animating = !1),
    !s.cssMode &&
      (e.setTransition(0),
      we({ swiper: e, runCallbacks: i, direction: t, step: "End" }));
}
var at = { setTransition: st, transitionStart: nt, transitionEnd: rt };
function lt(i, t, e, s, n) {
  i === void 0 && (i = 0),
    e === void 0 && (e = !0),
    typeof i == "string" && (i = parseInt(i, 10));
  const r = this;
  let o = i;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: d,
    previousIndex: f,
    activeIndex: c,
    rtlTranslate: p,
    wrapperEl: u,
    enabled: m,
  } = r;
  if (
    (!m && !s && !n) ||
    r.destroyed ||
    (r.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = r.params.speed);
  const h = Math.min(r.params.slidesPerGroupSkip, o);
  let E = h + Math.floor((o - h) / r.params.slidesPerGroup);
  E >= a.length && (E = a.length - 1);
  const v = -a[E];
  if (l.normalizeSlideIndex)
    for (let I = 0; I < d.length; I += 1) {
      const M = -Math.floor(v * 100),
        _ = Math.floor(d[I] * 100),
        g = Math.floor(d[I + 1] * 100);
      typeof d[I + 1] < "u"
        ? M >= _ && M < g - (g - _) / 2
          ? (o = I)
          : M >= _ && M < g && (o = I + 1)
        : M >= _ && (o = I);
    }
  if (
    r.initialized &&
    o !== c &&
    ((!r.allowSlideNext &&
      (p
        ? v > r.translate && v > r.minTranslate()
        : v < r.translate && v < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        v > r.translate &&
        v > r.maxTranslate() &&
        (c || 0) !== o))
  )
    return !1;
  o !== (f || 0) && e && r.emit("beforeSlideChangeStart"), r.updateProgress(v);
  let S;
  o > c ? (S = "next") : o < c ? (S = "prev") : (S = "reset");
  const w = r.virtual && r.params.virtual.enabled;
  if (!(w && n) && ((p && -v === r.translate) || (!p && v === r.translate)))
    return (
      r.updateActiveIndex(o),
      l.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      l.effect !== "slide" && r.setTranslate(v),
      S !== "reset" && (r.transitionStart(e, S), r.transitionEnd(e, S)),
      !1
    );
  if (l.cssMode) {
    const I = r.isHorizontal(),
      M = p ? v : -v;
    if (t === 0)
      w &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        w && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              u[I ? "scrollLeft" : "scrollTop"] = M;
            }))
          : (u[I ? "scrollLeft" : "scrollTop"] = M),
        w &&
          requestAnimationFrame(() => {
            (r.wrapperEl.style.scrollSnapType = ""), (r._immediateVirtual = !1);
          });
    else {
      if (!r.support.smoothScroll)
        return (
          me({ swiper: r, targetPosition: M, side: I ? "left" : "top" }), !0
        );
      u.scrollTo({ [I ? "left" : "top"]: M, behavior: "smooth" });
    }
    return !0;
  }
  const C = ve().isSafari;
  return (
    w && !n && C && r.isElement && r.virtual.update(!1, !1, o),
    r.setTransition(t),
    r.setTranslate(v),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(e, S),
    t === 0
      ? r.transitionEnd(e, S)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (M) {
            !r ||
              r.destroyed ||
              (M.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(e, S)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function ot(i, t, e, s) {
  i === void 0 && (i = 0),
    e === void 0 && (e = !0),
    typeof i == "string" && (i = parseInt(i, 10));
  const n = this;
  if (n.destroyed) return;
  typeof t > "u" && (t = n.params.speed);
  const r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let o = i;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled) o = o + n.virtual.slidesBefore;
    else {
      let l;
      if (r) {
        const p = o * n.params.grid.rows;
        l = n.slides.find(
          (u) => u.getAttribute("data-swiper-slide-index") * 1 === p
        ).column;
      } else l = n.getSlideIndexByData(o);
      const a = r
          ? Math.ceil(n.slides.length / n.params.grid.rows)
          : n.slides.length,
        { centeredSlides: d } = n.params;
      let f = n.params.slidesPerView;
      f === "auto"
        ? (f = n.slidesPerViewDynamic())
        : ((f = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
          d && f % 2 === 0 && (f = f + 1));
      let c = a - l < f;
      if (
        (d && (c = c || l < Math.ceil(f / 2)),
        s && d && n.params.slidesPerView !== "auto" && !r && (c = !1),
        c)
      ) {
        const p = d
          ? l < n.activeIndex
            ? "prev"
            : "next"
          : l - n.activeIndex - 1 < n.params.slidesPerView
          ? "next"
          : "prev";
        n.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? l + 1 : l - a + 1,
          slideRealIndex: p === "next" ? n.realIndex : void 0,
        });
      }
      if (r) {
        const p = o * n.params.grid.rows;
        o = n.slides.find(
          (u) => u.getAttribute("data-swiper-slide-index") * 1 === p
        ).column;
      } else o = n.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      n.slideTo(o, t, e, s);
    }),
    n
  );
}
function dt(i, t, e) {
  t === void 0 && (t = !0);
  const s = this,
    { enabled: n, params: r, animating: o } = s;
  if (!n || s.destroyed) return s;
  typeof i > "u" && (i = s.params.speed);
  let l = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    d = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (o && !d && r.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + a, i, t, e);
        }),
        !0
      );
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, i, t, e)
    : s.slideTo(s.activeIndex + a, i, t, e);
}
function ct(i, t, e) {
  t === void 0 && (t = !0);
  const s = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: d,
    } = s;
  if (!a || s.destroyed) return s;
  typeof i > "u" && (i = s.params.speed);
  const f = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !f && n.loopPreventsSliding) return !1;
    s.loopFix({ direction: "prev" }), (s._clientLeft = s.wrapperEl.clientLeft);
  }
  const c = l ? s.translate : -s.translate;
  function p(S) {
    return S < 0 ? -Math.floor(Math.abs(S)) : Math.floor(S);
  }
  const u = p(c),
    m = r.map((S) => p(S)),
    h = n.freeMode && n.freeMode.enabled;
  let E = r[m.indexOf(u) - 1];
  if (typeof E > "u" && (n.cssMode || h)) {
    let S;
    r.forEach((w, T) => {
      u >= w && (S = T);
    }),
      typeof S < "u" && (E = h ? r[S] : r[S > 0 ? S - 1 : S]);
  }
  let v = 0;
  if (
    (typeof E < "u" &&
      ((v = o.indexOf(E)),
      v < 0 && (v = s.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((v = v - s.slidesPerViewDynamic("previous", !0) + 1),
        (v = Math.max(v, 0)))),
    n.rewind && s.isBeginning)
  ) {
    const S =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(S, i, t, e);
  } else if (n.loop && s.activeIndex === 0 && n.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(v, i, t, e);
      }),
      !0
    );
  return s.slideTo(v, i, t, e);
}
function ft(i, t, e) {
  t === void 0 && (t = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof i > "u" && (i = s.params.speed), s.slideTo(s.activeIndex, i, t, e)
    );
}
function ut(i, t, e, s) {
  t === void 0 && (t = !0), s === void 0 && (s = 0.5);
  const n = this;
  if (n.destroyed) return;
  typeof i > "u" && (i = n.params.speed);
  let r = n.activeIndex;
  const o = Math.min(n.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / n.params.slidesPerGroup),
    a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[l]) {
    const d = n.snapGrid[l],
      f = n.snapGrid[l + 1];
    a - d > (f - d) * s && (r += n.params.slidesPerGroup);
  } else {
    const d = n.snapGrid[l - 1],
      f = n.snapGrid[l];
    a - d <= (f - d) * s && (r -= n.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, n.slidesGrid.length - 1)),
    n.slideTo(r, i, t, e)
  );
}
function pt() {
  const i = this;
  if (i.destroyed) return;
  const { params: t, slidesEl: e } = i,
    s = t.slidesPerView === "auto" ? i.slidesPerViewDynamic() : t.slidesPerView;
  let n = i.clickedIndex,
    r;
  const o = i.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (i.animating) return;
    (r = parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? n < i.loopedSlides - s / 2 ||
          n > i.slides.length - i.loopedSlides + s / 2
          ? (i.loopFix(),
            (n = i.getSlideIndex(
              G(e, `${o}[data-swiper-slide-index="${r}"]`)[0]
            )),
            Q(() => {
              i.slideTo(n);
            }))
          : i.slideTo(n)
        : n > i.slides.length - s
        ? (i.loopFix(),
          (n = i.getSlideIndex(
            G(e, `${o}[data-swiper-slide-index="${r}"]`)[0]
          )),
          Q(() => {
            i.slideTo(n);
          }))
        : i.slideTo(n);
  } else i.slideTo(n);
}
var mt = {
  slideTo: lt,
  slideToLoop: ot,
  slideNext: dt,
  slidePrev: ct,
  slideReset: ft,
  slideToClosest: ut,
  slideToClickedSlide: pt,
};
function ht(i) {
  const t = this,
    { params: e, slidesEl: s } = t;
  if (!e.loop || (t.virtual && t.params.virtual.enabled)) return;
  const n = () => {
      G(s, `.${e.slideClass}, swiper-slide`).forEach((c, p) => {
        c.setAttribute("data-swiper-slide-index", p);
      });
    },
    r = t.grid && e.grid && e.grid.rows > 1,
    o = e.slidesPerGroup * (r ? e.grid.rows : 1),
    l = t.slides.length % o !== 0,
    a = r && t.slides.length % e.grid.rows !== 0,
    d = (f) => {
      for (let c = 0; c < f; c += 1) {
        const p = t.isElement
          ? J("swiper-slide", [e.slideBlankClass])
          : J("div", [e.slideClass, e.slideBlankClass]);
        t.slidesEl.append(p);
      }
    };
  if (l) {
    if (e.loopAddBlankSlides) {
      const f = o - (t.slides.length % o);
      d(f), t.recalcSlides(), t.updateSlides();
    } else
      q(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    n();
  } else if (a) {
    if (e.loopAddBlankSlides) {
      const f = e.grid.rows - (t.slides.length % e.grid.rows);
      d(f), t.recalcSlides(), t.updateSlides();
    } else
      q(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    n();
  } else n();
  t.loopFix({
    slideRealIndex: i,
    direction: e.centeredSlides ? void 0 : "next",
  });
}
function gt(i) {
  let {
    slideRealIndex: t,
    slideTo: e = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    byController: o,
    byMousewheel: l,
  } = i === void 0 ? {} : i;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: d,
      allowSlidePrev: f,
      allowSlideNext: c,
      slidesEl: p,
      params: u,
    } = a,
    { centeredSlides: m } = u;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && u.virtual.enabled)
  ) {
    e &&
      (!u.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : u.centeredSlides && a.snapIndex < u.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = f),
      (a.allowSlideNext = c),
      a.emit("loopFix");
    return;
  }
  let h = u.slidesPerView;
  h === "auto"
    ? (h = a.slidesPerViewDynamic())
    : ((h = Math.ceil(parseFloat(u.slidesPerView, 10))),
      m && h % 2 === 0 && (h = h + 1));
  const E = u.slidesPerGroupAuto ? h : u.slidesPerGroup;
  let v = E;
  v % E !== 0 && (v += E - (v % E)),
    (v += u.loopAdditionalSlides),
    (a.loopedSlides = v);
  const S = a.grid && u.grid && u.grid.rows > 1;
  d.length < h + v
    ? q(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : S &&
      u.grid.fill === "row" &&
      q(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const w = [],
    T = [];
  let x = a.activeIndex;
  typeof r > "u"
    ? (r = a.getSlideIndex(
        d.find((b) => b.classList.contains(u.slideActiveClass))
      ))
    : (x = r);
  const C = s === "next" || !s,
    I = s === "prev" || !s;
  let M = 0,
    _ = 0;
  const g = S ? Math.ceil(d.length / u.grid.rows) : d.length,
    P = (S ? d[r].column : r) + (m && typeof n > "u" ? -h / 2 + 0.5 : 0);
  if (P < v) {
    M = Math.max(v - P, E);
    for (let b = 0; b < v - P; b += 1) {
      const z = b - Math.floor(b / g) * g;
      if (S) {
        const O = g - z - 1;
        for (let D = d.length - 1; D >= 0; D -= 1)
          d[D].column === O && w.push(D);
      } else w.push(g - z - 1);
    }
  } else if (P + h > g - v) {
    _ = Math.max(P - (g - v * 2), E);
    for (let b = 0; b < _; b += 1) {
      const z = b - Math.floor(b / g) * g;
      S
        ? d.forEach((O, D) => {
            O.column === z && T.push(D);
          })
        : T.push(z);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    I &&
      w.forEach((b) => {
        (d[b].swiperLoopMoveDOM = !0),
          p.prepend(d[b]),
          (d[b].swiperLoopMoveDOM = !1);
      }),
    C &&
      T.forEach((b) => {
        (d[b].swiperLoopMoveDOM = !0),
          p.append(d[b]),
          (d[b].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    u.slidesPerView === "auto"
      ? a.updateSlides()
      : S &&
        ((w.length > 0 && I) || (T.length > 0 && C)) &&
        a.slides.forEach((b, z) => {
          a.grid.updateSlide(z, b, a.slides);
        }),
    u.watchSlidesProgress && a.updateSlidesOffset(),
    e)
  ) {
    if (w.length > 0 && I) {
      if (typeof t > "u") {
        const b = a.slidesGrid[x],
          O = a.slidesGrid[x + M] - b;
        l
          ? a.setTranslate(a.translate - O)
          : (a.slideTo(x + Math.ceil(M), 0, !1, !0),
            n &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - O),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - O)));
      } else if (n) {
        const b = S ? w.length / u.grid.rows : w.length;
        a.slideTo(a.activeIndex + b, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (T.length > 0 && C)
      if (typeof t > "u") {
        const b = a.slidesGrid[x],
          O = a.slidesGrid[x - _] - b;
        l
          ? a.setTranslate(a.translate - O)
          : (a.slideTo(x - _, 0, !1, !0),
            n &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - O),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - O)));
      } else {
        const b = S ? T.length / u.grid.rows : T.length;
        a.slideTo(a.activeIndex - b, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = f),
    (a.allowSlideNext = c),
    a.controller && a.controller.control && !o)
  ) {
    const b = {
      slideRealIndex: t,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((z) => {
          !z.destroyed &&
            z.params.loop &&
            z.loopFix({
              ...b,
              slideTo: z.params.slidesPerView === u.slidesPerView ? e : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...b,
          slideTo:
            a.controller.control.params.slidesPerView === u.slidesPerView
              ? e
              : !1,
        });
  }
  a.emit("loopFix");
}
function vt() {
  const i = this,
    { params: t, slidesEl: e } = i;
  if (!t.loop || (i.virtual && i.params.virtual.enabled)) return;
  i.recalcSlides();
  const s = [];
  i.slides.forEach((n) => {
    const r =
      typeof n.swiperSlideIndex > "u"
        ? n.getAttribute("data-swiper-slide-index") * 1
        : n.swiperSlideIndex;
    s[r] = n;
  }),
    i.slides.forEach((n) => {
      n.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((n) => {
      e.append(n);
    }),
    i.recalcSlides(),
    i.slideTo(i.realIndex, 0);
}
var wt = { loopCreate: ht, loopFix: gt, loopDestroy: vt };
function St(i) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const e = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (e.style.cursor = "move"),
    (e.style.cursor = i ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function xt() {
  const i = this;
  (i.params.watchOverflow && i.isLocked) ||
    i.params.cssMode ||
    (i.isElement && (i.__preventObserver__ = !0),
    (i[
      i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    i.isElement &&
      requestAnimationFrame(() => {
        i.__preventObserver__ = !1;
      }));
}
var bt = { setGrabCursor: St, unsetGrabCursor: xt };
function Tt(i, t) {
  t === void 0 && (t = this);
  function e(s) {
    if (!s || s === $() || s === L()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(i);
    return !n && !s.getRootNode ? null : n || e(s.getRootNode().host);
  }
  return e(t);
}
function de(i, t, e) {
  const s = L(),
    { params: n } = i,
    r = n.edgeSwipeDetection,
    o = n.edgeSwipeThreshold;
  return r && (e <= o || e >= s.innerWidth - o)
    ? r === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function yt(i) {
  const t = this,
    e = $();
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  const n = t.touchEventsData;
  if (s.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
    n.pointerId = s.pointerId;
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (n.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    de(t, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: o, enabled: l } = t;
  if (
    !l ||
    (!r.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let a = s.target;
  if (
    (r.touchEventsTarget === "wrapper" && !Le(a, t.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const d = !!r.noSwipingClass && r.noSwipingClass !== "",
    f = s.composedPath ? s.composedPath() : s.path;
  d && s.target && s.target.shadowRoot && f && (a = f[0]);
  const c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    p = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (p ? Tt(c, a) : a.closest(c))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler)) return;
  (o.currentX = s.pageX), (o.currentY = s.pageY);
  const u = o.currentX,
    m = o.currentY;
  if (!de(t, s, u)) return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = u),
    (o.startY = m),
    (n.touchStartTime = N()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (n.allowThresholdMove = !1);
  let h = !0;
  a.matches(n.focusableElements) &&
    ((h = !1), a.nodeName === "SELECT" && (n.isTouched = !1)),
    e.activeElement &&
      e.activeElement.matches(n.focusableElements) &&
      e.activeElement !== a &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !a.matches(n.focusableElements))) &&
      e.activeElement.blur();
  const E = h && t.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || E) &&
    !a.isContentEditable &&
    s.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s);
}
function Et(i) {
  const t = $(),
    e = this,
    s = e.touchEventsData,
    { params: n, touches: r, rtlTranslate: o, enabled: l } = e;
  if (!l || (!n.simulateTouch && i.pointerType === "mouse")) return;
  let a = i;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (s.touchId !== null || a.pointerId !== s.pointerId))
  )
    return;
  let d;
  if (a.type === "touchmove") {
    if (
      ((d = [...a.changedTouches].find((x) => x.identifier === s.touchId)),
      !d || d.identifier !== s.touchId)
    )
      return;
  } else d = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && e.emit("touchMoveOpposite", a);
    return;
  }
  const f = d.pageX,
    c = d.pageY;
  if (a.preventedByNestedSwiper) {
    (r.startX = f), (r.startY = c);
    return;
  }
  if (!e.allowTouchMove) {
    a.target.matches(s.focusableElements) || (e.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: f, startY: c, currentX: f, currentY: c }),
        (s.touchStartTime = N()));
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (e.isVertical()) {
      if (
        (c < r.startY && e.translate <= e.maxTranslate()) ||
        (c > r.startY && e.translate >= e.minTranslate())
      ) {
        (s.isTouched = !1), (s.isMoved = !1);
        return;
      }
    } else if (
      (f < r.startX && e.translate <= e.maxTranslate()) ||
      (f > r.startX && e.translate >= e.minTranslate())
    )
      return;
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(s.focusableElements) &&
      t.activeElement !== a.target &&
      a.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      a.target === t.activeElement &&
      a.target.matches(s.focusableElements))
  ) {
    (s.isMoved = !0), (e.allowClick = !1);
    return;
  }
  s.allowTouchCallbacks && e.emit("touchMove", a),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = f),
    (r.currentY = c);
  const p = r.currentX - r.startX,
    u = r.currentY - r.startY;
  if (e.params.threshold && Math.sqrt(p ** 2 + u ** 2) < e.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let x;
    (e.isHorizontal() && r.currentY === r.startY) ||
    (e.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : p * p + u * u >= 25 &&
        ((x = (Math.atan2(Math.abs(u), Math.abs(p)) * 180) / Math.PI),
        (s.isScrolling = e.isHorizontal()
          ? x > n.touchAngle
          : 90 - x > n.touchAngle));
  }
  if (
    (s.isScrolling && e.emit("touchMoveOpposite", a),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (a.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  (e.allowClick = !1),
    !n.cssMode && a.cancelable && a.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let m = e.isHorizontal() ? p : u,
    h = e.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement &&
    ((m = Math.abs(m) * (o ? 1 : -1)), (h = Math.abs(h) * (o ? 1 : -1))),
    (r.diff = m),
    (m *= n.touchRatio),
    o && ((m = -m), (h = -h));
  const E = e.touchesDirection;
  (e.swipeDirection = m > 0 ? "prev" : "next"),
    (e.touchesDirection = h > 0 ? "prev" : "next");
  const v = e.params.loop && !n.cssMode,
    S =
      (e.touchesDirection === "next" && e.allowSlideNext) ||
      (e.touchesDirection === "prev" && e.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (v && S && e.loopFix({ direction: e.swipeDirection }),
      (s.startTranslate = e.getTranslate()),
      e.setTransition(0),
      e.animating)
    ) {
      const x = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      e.wrapperEl.dispatchEvent(x);
    }
    (s.allowMomentumBounce = !1),
      n.grabCursor &&
        (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
        e.setGrabCursor(!0),
      e.emit("sliderFirstMove", a);
  }
  if (
    (new Date().getTime(),
    n._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      E !== e.touchesDirection &&
      v &&
      S &&
      Math.abs(m) >= 1)
  ) {
    Object.assign(r, {
      startX: f,
      startY: c,
      currentX: f,
      currentY: c,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate);
    return;
  }
  e.emit("sliderMove", a),
    (s.isMoved = !0),
    (s.currentTranslate = m + s.startTranslate);
  let w = !0,
    T = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (T = 0),
    m > 0
      ? (v &&
          S &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (n.centeredSlides
              ? e.minTranslate() -
                e.slidesSizesGrid[e.activeIndex + 1] -
                (n.slidesPerView !== "auto" &&
                e.slides.length - n.slidesPerView >= 2
                  ? e.slidesSizesGrid[e.activeIndex + 1] + e.params.spaceBetween
                  : 0) -
                e.params.spaceBetween
              : e.minTranslate()) &&
          e.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > e.minTranslate() &&
          ((w = !1),
          n.resistance &&
            (s.currentTranslate =
              e.minTranslate() -
              1 +
              (-e.minTranslate() + s.startTranslate + m) ** T)))
      : m < 0 &&
        (v &&
          S &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (n.centeredSlides
              ? e.maxTranslate() +
                e.slidesSizesGrid[e.slidesSizesGrid.length - 1] +
                e.params.spaceBetween +
                (n.slidesPerView !== "auto" &&
                e.slides.length - n.slidesPerView >= 2
                  ? e.slidesSizesGrid[e.slidesSizesGrid.length - 1] +
                    e.params.spaceBetween
                  : 0)
              : e.maxTranslate()) &&
          e.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              e.slides.length -
              (n.slidesPerView === "auto"
                ? e.slidesPerViewDynamic()
                : Math.ceil(parseFloat(n.slidesPerView, 10))),
          }),
        s.currentTranslate < e.maxTranslate() &&
          ((w = !1),
          n.resistance &&
            (s.currentTranslate =
              e.maxTranslate() +
              1 -
              (e.maxTranslate() - s.startTranslate - m) ** T))),
    w && (a.preventedByNestedSwiper = !0),
    !e.allowSlideNext &&
      e.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !e.allowSlidePrev &&
      e.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !e.allowSlidePrev &&
      !e.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
  )
    if (Math.abs(m) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        (s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = e.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY);
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger ||
    n.cssMode ||
    (((n.freeMode && n.freeMode.enabled && e.freeMode) ||
      n.watchSlidesProgress) &&
      (e.updateActiveIndex(), e.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && e.freeMode && e.freeMode.onTouchMove(),
    e.updateProgress(s.currentTranslate),
    e.setTranslate(s.currentTranslate));
}
function Mt(i) {
  const t = this,
    e = t.touchEventsData;
  let s = i;
  s.originalEvent && (s = s.originalEvent);
  let n;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((n = [...s.changedTouches].find((x) => x.identifier === e.touchId)),
      !n || n.identifier !== e.touchId)
    )
      return;
  } else {
    if (e.touchId !== null || s.pointerId !== e.pointerId) return;
    n = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (e.pointerId = null), (e.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: d,
    enabled: f,
  } = t;
  if (!f || (!o.simulateTouch && s.pointerType === "mouse")) return;
  if (
    (e.allowTouchCallbacks && t.emit("touchEnd", s),
    (e.allowTouchCallbacks = !1),
    !e.isTouched)
  ) {
    e.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (e.isMoved = !1),
      (e.startMoving = !1);
    return;
  }
  o.grabCursor &&
    e.isMoved &&
    e.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = N(),
    p = c - e.touchStartTime;
  if (t.allowClick) {
    const x = s.path || (s.composedPath && s.composedPath());
    t.updateClickedSlide((x && x[0]) || s.target, x),
      t.emit("tap click", s),
      p < 300 &&
        c - e.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", s);
  }
  if (
    ((e.lastClickTime = N()),
    Q(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !e.isTouched ||
      !e.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !e.loopSwapReset) ||
      (e.currentTranslate === e.startTranslate && !e.loopSwapReset))
  ) {
    (e.isTouched = !1), (e.isMoved = !1), (e.startMoving = !1);
    return;
  }
  (e.isTouched = !1), (e.isMoved = !1), (e.startMoving = !1);
  let u;
  if (
    (o.followFinger
      ? (u = a ? t.translate : -t.translate)
      : (u = -e.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: u });
    return;
  }
  const m = u >= -t.maxTranslate() && !t.params.loop;
  let h = 0,
    E = t.slidesSizesGrid[0];
  for (
    let x = 0;
    x < d.length;
    x += x < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const C = x < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof d[x + C] < "u"
      ? (m || (u >= d[x] && u < d[x + C])) && ((h = x), (E = d[x + C] - d[x]))
      : (m || u >= d[x]) && ((h = x), (E = d[d.length - 1] - d[d.length - 2]));
  }
  let v = null,
    S = null;
  o.rewind &&
    (t.isBeginning
      ? (S =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (v = 0));
  const w = (u - d[h]) / E,
    T = h < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (p > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (w >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? v : h + T)
        : t.slideTo(h)),
      t.swipeDirection === "prev" &&
        (w > 1 - o.longSwipesRatio
          ? t.slideTo(h + T)
          : S !== null && w < 0 && Math.abs(w) > o.longSwipesRatio
          ? t.slideTo(S)
          : t.slideTo(h));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(h + T)
        : t.slideTo(h)
      : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : h + T),
        t.swipeDirection === "prev" && t.slideTo(S !== null ? S : h));
  }
}
function ce() {
  const i = this,
    { params: t, el: e } = i;
  if (e && e.offsetWidth === 0) return;
  t.breakpoints && i.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = i,
    o = i.virtual && i.params.virtual.enabled;
  (i.allowSlideNext = !0),
    (i.allowSlidePrev = !0),
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  i.isEnd &&
  !i.isBeginning &&
  !i.params.centeredSlides &&
  !l
    ? i.slideTo(i.slides.length - 1, 0, !1, !0)
    : i.params.loop && !o
    ? i.slideToLoop(i.realIndex, 0, !1, !0)
    : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay &&
      i.autoplay.running &&
      i.autoplay.paused &&
      (clearTimeout(i.autoplay.resizeTimeout),
      (i.autoplay.resizeTimeout = setTimeout(() => {
        i.autoplay &&
          i.autoplay.running &&
          i.autoplay.paused &&
          i.autoplay.resume();
      }, 500))),
    (i.allowSlidePrev = n),
    (i.allowSlideNext = s),
    i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow();
}
function Pt(i) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && i.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (i.stopPropagation(), i.stopImmediatePropagation())));
}
function It() {
  const i = this,
    { wrapperEl: t, rtlTranslate: e, enabled: s } = i;
  if (!s) return;
  (i.previousTranslate = i.translate),
    i.isHorizontal()
      ? (i.translate = -t.scrollLeft)
      : (i.translate = -t.scrollTop),
    i.translate === 0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
  let n;
  const r = i.maxTranslate() - i.minTranslate();
  r === 0 ? (n = 0) : (n = (i.translate - i.minTranslate()) / r),
    n !== i.progress && i.updateProgress(e ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1);
}
function Ct(i) {
  const t = this;
  H(t, i.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function zt() {
  const i = this;
  i.documentTouchHandlerProceeded ||
    ((i.documentTouchHandlerProceeded = !0),
    i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
}
const Se = (i, t) => {
  const e = $(),
    { params: s, el: n, wrapperEl: r, device: o } = i,
    l = !!s.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    d = t;
  !n ||
    typeof n == "string" ||
    (e[a]("touchstart", i.onDocumentTouchStart, { passive: !1, capture: l }),
    n[a]("touchstart", i.onTouchStart, { passive: !1 }),
    n[a]("pointerdown", i.onTouchStart, { passive: !1 }),
    e[a]("touchmove", i.onTouchMove, { passive: !1, capture: l }),
    e[a]("pointermove", i.onTouchMove, { passive: !1, capture: l }),
    e[a]("touchend", i.onTouchEnd, { passive: !0 }),
    e[a]("pointerup", i.onTouchEnd, { passive: !0 }),
    e[a]("pointercancel", i.onTouchEnd, { passive: !0 }),
    e[a]("touchcancel", i.onTouchEnd, { passive: !0 }),
    e[a]("pointerout", i.onTouchEnd, { passive: !0 }),
    e[a]("pointerleave", i.onTouchEnd, { passive: !0 }),
    e[a]("contextmenu", i.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      n[a]("click", i.onClick, !0),
    s.cssMode && r[a]("scroll", i.onScroll),
    s.updateOnWindowResize
      ? i[d](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          ce,
          !0
        )
      : i[d]("observerUpdate", ce, !0),
    n[a]("load", i.onLoad, { capture: !0 }));
};
function Lt() {
  const i = this,
    { params: t } = i;
  (i.onTouchStart = yt.bind(i)),
    (i.onTouchMove = Et.bind(i)),
    (i.onTouchEnd = Mt.bind(i)),
    (i.onDocumentTouchStart = zt.bind(i)),
    t.cssMode && (i.onScroll = It.bind(i)),
    (i.onClick = Pt.bind(i)),
    (i.onLoad = Ct.bind(i)),
    Se(i, "on");
}
function Ot() {
  Se(this, "off");
}
var At = { attachEvents: Lt, detachEvents: Ot };
const fe = (i, t) => i.grid && t.grid && t.grid.rows > 1;
function kt() {
  const i = this,
    { realIndex: t, initialized: e, params: s, el: n } = i,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const o = $(),
    l =
      s.breakpointsBase === "window" || !s.breakpointsBase
        ? s.breakpointsBase
        : "container",
    a =
      ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase
        ? i.el
        : o.querySelector(s.breakpointsBase),
    d = i.getBreakpoint(r, l, a);
  if (!d || i.currentBreakpoint === d) return;
  const c = (d in r ? r[d] : void 0) || i.originalParams,
    p = fe(i, s),
    u = fe(i, c),
    m = i.params.grabCursor,
    h = c.grabCursor,
    E = s.enabled;
  p && !u
    ? (n.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`
      ),
      i.emitContainerClasses())
    : !p &&
      u &&
      (n.classList.add(`${s.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") ||
        (!c.grid.fill && s.grid.fill === "column")) &&
        n.classList.add(`${s.containerModifierClass}grid-column`),
      i.emitContainerClasses()),
    m && !h ? i.unsetGrabCursor() : !m && h && i.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((C) => {
      if (typeof c[C] > "u") return;
      const I = s[C] && s[C].enabled,
        M = c[C] && c[C].enabled;
      I && !M && i[C].disable(), !I && M && i[C].enable();
    });
  const v = c.direction && c.direction !== s.direction,
    S = s.loop && (c.slidesPerView !== s.slidesPerView || v),
    w = s.loop;
  v && e && i.changeDirection(), A(i.params, c);
  const T = i.params.enabled,
    x = i.params.loop;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev,
  }),
    E && !T ? i.disable() : !E && T && i.enable(),
    (i.currentBreakpoint = d),
    i.emit("_beforeBreakpoint", c),
    e &&
      (S
        ? (i.loopDestroy(), i.loopCreate(t), i.updateSlides())
        : !w && x
        ? (i.loopCreate(t), i.updateSlides())
        : w && !x && i.loopDestroy()),
    i.emit("breakpoint", c);
}
function _t(i, t, e) {
  if ((t === void 0 && (t = "window"), !i || (t === "container" && !e))) return;
  let s = !1;
  const n = L(),
    r = t === "window" ? n.innerHeight : e.clientHeight,
    o = Object.keys(i).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: r * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: d } = o[l];
    t === "window"
      ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = a)
      : d <= e.clientWidth && (s = a);
  }
  return s || "max";
}
var Gt = { setBreakpoint: kt, getBreakpoint: _t };
function Dt(i, t) {
  const e = [];
  return (
    i.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((n) => {
            s[n] && e.push(t + n);
          })
        : typeof s == "string" && e.push(t + s);
    }),
    e
  );
}
function Vt() {
  const i = this,
    { classNames: t, params: e, rtl: s, el: n, device: r } = i,
    o = Dt(
      [
        "initialized",
        e.direction,
        { "free-mode": i.params.freeMode && e.freeMode.enabled },
        { autoheight: e.autoHeight },
        { rtl: s },
        { grid: e.grid && e.grid.rows > 1 },
        {
          "grid-column": e.grid && e.grid.rows > 1 && e.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": e.cssMode },
        { centered: e.cssMode && e.centeredSlides },
        { "watch-progress": e.watchSlidesProgress },
      ],
      e.containerModifierClass
    );
  t.push(...o), n.classList.add(...t), i.emitContainerClasses();
}
function $t() {
  const i = this,
    { el: t, classNames: e } = i;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...e), i.emitContainerClasses());
}
var Bt = { addClasses: Vt, removeClasses: $t };
function Ft() {
  const i = this,
    { isLocked: t, params: e } = i,
    { slidesOffsetBefore: s } = e;
  if (s) {
    const n = i.slides.length - 1,
      r = i.slidesGrid[n] + i.slidesSizesGrid[n] + s * 2;
    i.isLocked = i.size > r;
  } else i.isLocked = i.snapGrid.length === 1;
  e.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    e.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    t && t !== i.isLocked && (i.isEnd = !1),
    t !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
}
var jt = { checkOverflow: Ft },
  ue = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Ht(i, t) {
  return function (s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0],
      r = s[n];
    if (typeof r != "object" || r === null) {
      A(t, s);
      return;
    }
    if (
      (i[n] === !0 && (i[n] = { enabled: !0 }),
      n === "navigation" &&
        i[n] &&
        i[n].enabled &&
        !i[n].prevEl &&
        !i[n].nextEl &&
        (i[n].auto = !0),
      ["pagination", "scrollbar"].indexOf(n) >= 0 &&
        i[n] &&
        i[n].enabled &&
        !i[n].el &&
        (i[n].auto = !0),
      !(n in i && "enabled" in r))
    ) {
      A(t, s);
      return;
    }
    typeof i[n] == "object" && !("enabled" in i[n]) && (i[n].enabled = !0),
      i[n] || (i[n] = { enabled: !1 }),
      A(t, s);
  };
}
const Z = {
    eventsEmitter: Be,
    update: Ze,
    translate: it,
    transition: at,
    slide: mt,
    loop: wt,
    grabCursor: bt,
    events: At,
    breakpoints: Gt,
    checkOverflow: jt,
    classes: Bt,
  },
  U = {};
class k {
  constructor() {
    let t, e;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
      n[r] = arguments[r];
    n.length === 1 &&
    n[0].constructor &&
    Object.prototype.toString.call(n[0]).slice(8, -1) === "Object"
      ? (e = n[0])
      : ([t, e] = n),
      e || (e = {}),
      (e = A({}, e)),
      t && !e.el && (e.el = t);
    const o = $();
    if (
      e.el &&
      typeof e.el == "string" &&
      o.querySelectorAll(e.el).length > 1
    ) {
      const f = [];
      return (
        o.querySelectorAll(e.el).forEach((c) => {
          const p = A({}, e, { el: c });
          f.push(new k(p));
        }),
        f
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = he()),
      (l.device = ge({ userAgent: e.userAgent })),
      (l.browser = ve()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      e.modules && Array.isArray(e.modules) && l.modules.push(...e.modules);
    const a = {};
    l.modules.forEach((f) => {
      f({
        params: e,
        swiper: l,
        extendParams: Ht(e, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const d = A({}, ue, a);
    return (
      (l.params = A({}, d, U, e)),
      (l.originalParams = A({}, l.params)),
      (l.passedParams = A({}, e)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((f) => {
          l.on(f, l.params.on[f]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: e, params: s } = this,
      n = G(e, `.${s.slideClass}, swiper-slide`),
      r = ae(n[0]);
    return ae(t) - r;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.find(
        (e) => e.getAttribute("data-swiper-slide-index") * 1 === t
      )
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: e, params: s } = t;
    t.slides = G(e, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, e) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const n = s.minTranslate(),
      o = (s.maxTranslate() - n) * t + n;
    s.translateTo(o, typeof e > "u" ? 0 : e),
      s.updateActiveIndex(),
      s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const e = t.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", e.join(" "));
  }
  getSlideClasses(t) {
    const e = this;
    return e.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(e.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const e = [];
    t.slides.forEach((s) => {
      const n = t.getSlideClasses(s);
      e.push({ slideEl: s, classNames: n }), t.emit("_slideClass", s, n);
    }),
      t.emit("_slideClasses", e);
  }
  slidesPerViewDynamic(t, e) {
    t === void 0 && (t = "current"), e === void 0 && (e = !1);
    const s = this,
      {
        params: n,
        slides: r,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: d,
      } = s;
    let f = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let c = r[d] ? Math.ceil(r[d].swiperSlideSize) : 0,
        p;
      for (let u = d + 1; u < r.length; u += 1)
        r[u] &&
          !p &&
          ((c += Math.ceil(r[u].swiperSlideSize)), (f += 1), c > a && (p = !0));
      for (let u = d - 1; u >= 0; u -= 1)
        r[u] &&
          !p &&
          ((c += r[u].swiperSlideSize), (f += 1), c > a && (p = !0));
    } else if (t === "current")
      for (let c = d + 1; c < r.length; c += 1)
        (e ? o[c] + l[c] - o[d] < a : o[c] - o[d] < a) && (f += 1);
    else for (let c = d - 1; c >= 0; c -= 1) o[d] - o[c] < a && (f += 1);
    return f;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: e, params: s } = t;
    s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && H(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function n() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      n(), s.autoHeight && t.updateAutoHeight();
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const o = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(o.length - 1, 0, !1, !0);
      } else r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || n();
    }
    s.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, e) {
    e === void 0 && (e = !0);
    const s = this,
      n = s.params.direction;
    return (
      t || (t = n === "horizontal" ? "vertical" : "horizontal"),
      t === n ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        e && s.update()),
      s
    );
  }
  changeLanguageDirection(t) {
    const e = this;
    (e.rtl && t === "rtl") ||
      (!e.rtl && t === "ltr") ||
      ((e.rtl = t === "rtl"),
      (e.rtlTranslate = e.params.direction === "horizontal" && e.rtl),
      e.rtl
        ? (e.el.classList.add(`${e.params.containerModifierClass}rtl`),
          (e.el.dir = "rtl"))
        : (e.el.classList.remove(`${e.params.containerModifierClass}rtl`),
          (e.el.dir = "ltr")),
      e.update());
  }
  mount(t) {
    const e = this;
    if (e.mounted) return !0;
    let s = t || e.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    (s.swiper = e),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
          e.params.swiperElementNodeName.toUpperCase() &&
        (e.isElement = !0);
    const n = () =>
      `.${(e.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(n())
        : G(s, n())[0];
    return (
      !o &&
        e.params.createElements &&
        ((o = J("div", e.params.wrapperClass)),
        s.append(o),
        G(s, `.${e.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(e, {
        el: s,
        wrapperEl: o,
        slidesEl:
          e.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : o,
        hostEl: e.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || V(s, "direction") === "rtl",
        rtlTranslate:
          e.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || V(s, "direction") === "rtl"),
        wrongRTL: V(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const e = this;
    if (e.initialized || e.mount(t) === !1) return e;
    e.emit("beforeInit"),
      e.params.breakpoints && e.setBreakpoint(),
      e.addClasses(),
      e.updateSize(),
      e.updateSlides(),
      e.params.watchOverflow && e.checkOverflow(),
      e.params.grabCursor && e.enabled && e.setGrabCursor(),
      e.params.loop && e.virtual && e.params.virtual.enabled
        ? e.slideTo(
            e.params.initialSlide + e.virtual.slidesBefore,
            0,
            e.params.runCallbacksOnInit,
            !1,
            !0
          )
        : e.slideTo(
            e.params.initialSlide,
            0,
            e.params.runCallbacksOnInit,
            !1,
            !0
          ),
      e.params.loop && e.loopCreate(),
      e.attachEvents();
    const n = [...e.el.querySelectorAll('[loading="lazy"]')];
    return (
      e.isElement && n.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),
      n.forEach((r) => {
        r.complete
          ? H(e, r)
          : r.addEventListener("load", (o) => {
              H(e, o.target);
            });
      }),
      ee(e),
      (e.initialized = !0),
      ee(e),
      e.emit("init"),
      e.emit("afterInit"),
      e
    );
  }
  destroy(t, e) {
    t === void 0 && (t = !0), e === void 0 && (e = !0);
    const s = this,
      { params: n, el: r, wrapperEl: o, slides: l } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        e &&
          (s.removeClasses(),
          r && typeof r != "string" && r.removeAttribute("style"),
          o && o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                n.slideVisibleClass,
                n.slideFullyVisibleClass,
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((a) => {
          s.off(a);
        }),
        t !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), Me(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    A(U, t);
  }
  static get extendedDefaults() {
    return U;
  }
  static get defaults() {
    return ue;
  }
  static installModule(t) {
    k.prototype.__modules__ || (k.prototype.__modules__ = []);
    const e = k.prototype.__modules__;
    typeof t == "function" && e.indexOf(t) < 0 && e.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((e) => k.installModule(e)), k)
      : (k.installModule(t), k);
  }
}
Object.keys(Z).forEach((i) => {
  Object.keys(Z[i]).forEach((t) => {
    k.prototype[t] = Z[i][t];
  });
});
k.use([Ve, $e]);
let swiper;

let genrateSlider = () => {
  swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

let warSlides = document.querySelector("#warSlides");

let slidesGetter = async () => {
  let req = await fetch(
    "https://amirmahdifarahzady.github.io/BattleAPI/dbswiper.json"
  );
  let res = await req.json();
  let data = res.map((e) => {
    return `<div class="swiper-slide w-[1319px] h-[360px]"><img class="w-[1319px] rounded-[4px] h-[360px] object-cover" src="${e.image}" alt="slide-${e.id}"></div>`;
  });
  warSlides.insertAdjacentHTML("afterbegin", data.join(""));
  genrateSlider();
};

slidesGetter();
document.querySelector(".sde").addEventListener("click", () => {
  document.querySelector(".mnu").classList.toggle("hidden"),
    document.querySelector(".mnu2").classList !== "hidden" &&
      document.querySelector(".mnu2").classList.add("hidden");
});
document.querySelector(".mc20").addEventListener("click", () => {
  document.querySelector(".mnu").classList.toggle("hidden");
});
document.querySelector(".mju").addEventListener("click", () => {
  document.querySelector(".mnu2").classList.toggle("hidden"),
    document.querySelector(".mnu").classList !== "hidden" &&
      document.querySelector(".mnu").classList.add("hidden");
});
document.querySelector(".mc22").addEventListener("click", () => {
  document.querySelector(".mnu2").classList.toggle("hidden");
});
document.querySelector(".bbh").addEventListener("click", () => {
  document.querySelector(".bbh").classList.toggle("bg-white"),
  swiper && (swiper.autoplay.running ? swiper.autoplay.stop() : swiper.autoplay.start());
});
console.log("دکمه استاپ و استارت سوییپر کار میکند");
let Wt = document.querySelector(".p1"),
  Yt = async () => {
    let e = (
      await (
        await fetch(
          "https://amirmahdifarahzady.github.io/BattleAPI/New%20folder%20(2)/dbrecommand.json"
        )
      ).json()
    ).map(
      (s) => `<div class="flex flex-col  relative">
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta3edb166df401d70/67e19dc2357d64a792a98699/HS_32p0_ITED_Mega_Phoenix_Franchise_ArtOnly_1920x1080_MMZ02.png?imwidth=332&imdensity=1"
            alt="${s.id}"
            class=""
          />
          <div class="p-6">
            <div class="flex gap-[5px] items-center mb-[10px]">
              <img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta3edb166df401d70/67e19dc2357d64a792a98699/HS_32p0_ITED_Mega_Phoenix_Franchise_ArtOnly_1920x1080_MMZ02.png?imwidth=332&imdensity=1" alt="${s.id}" class="w-6 h-6 object-contain">
              <span class="text-[#ffffffb8] text-[16px] font-bold font-Object capitalize">${s.textfrontofsmimg}</span>
            </div>
            <div class="text-[#ffffffd6] text-[18px] font-bold font-Object capitalize leading-[21.6px]">${s.bigtext}</div>
            <span class="text-[#ffb400] text-[14px] mt-[10px] capitalize leading-[-11.6px]">${s.yellotext}</span>
            <span class="text-[#ffffffb8] block text-[12px] mt-[4px] capitalize">${s.lowtext}</span>
            <span class="text-[#ffffffd6] block text-[16px] mt-[24px] absolute bottom-[24px] font-bold font-Object capitalize">${s.price}</span>
          </div>
        </div>`
    );
    Wt.insertAdjacentHTML("afterbegin", e.join(""));
  };
Yt();
let Xt = document.querySelector(".p2"),
  Kt = async () => {
    let e = (
      await (
        await fetch(
          "https://amirmahdifarahzady.github.io/BattleAPI/New%20folder%20(2)/dbrecommand.json"
        )
      ).json()
    ).map(
      (s) => `<div class="flex flex-col relative">
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta3edb166df401d70/67e19dc2357d64a792a98699/HS_32p0_ITED_Mega_Phoenix_Franchise_ArtOnly_1920x1080_MMZ02.png?imwidth=332&imdensity=1"
            alt="${s.id}"
            class=""
          />
          <div class="p-6">
            <div class="flex gap-[5px] items-center mb-[10px]">
              <img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta3edb166df401d70/67e19dc2357d64a792a98699/HS_32p0_ITED_Mega_Phoenix_Franchise_ArtOnly_1920x1080_MMZ02.png?imwidth=332&imdensity=1" alt="${s.id}" class="w-6 h-6 object-contain">
              <span class="text-[#ffffffb8] text-[16px] font-bold font-Object capitalize">${s.textfrontofsmimg}</span>
            </div>
            <div class="text-[#ffffffd6] text-[18px] font-bold font-Object capitalize leading-[21.6px]">${s.bigtext}</div>
            <span class="text-[#ffb400] text-[14px] mt-[10px] capitalize leading-[-11.6px]">${s.yellotext}</span>
            <span class="text-[#ffffffb8] block text-[12px] mt-[4px] capitalize">${s.lowtext}</span>
            <span class="text-[#ffffffd6] block text-[16px] mt-[24px] absolute bottom-[24px] font-bold font-Object capitalize">${s.price}</span>
          </div>
        </div>`
    );
    Xt.insertAdjacentHTML("afterbegin", e.join(""));
  };
Kt();
let Zt = document.querySelector(".p3"),
  Ut = async () => {
    let e = (
      await (
        await fetch(
          "https://amirmahdifarahzady.github.io/BattleAPI/New%20folder%20(2)/dbrecommand.json"
        )
      ).json()
    ).map(
      (s) => `<div class="flex flex-col  relative">
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta3edb166df401d70/67e19dc2357d64a792a98699/HS_32p0_ITED_Mega_Phoenix_Franchise_ArtOnly_1920x1080_MMZ02.png?imwidth=332&imdensity=1"
            alt="${s.id}"
            class=""
          />
          <div class="p-6">
            <div class="flex gap-[5px] items-center mb-[10px]">
              <img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta3edb166df401d70/67e19dc2357d64a792a98699/HS_32p0_ITED_Mega_Phoenix_Franchise_ArtOnly_1920x1080_MMZ02.png?imwidth=332&imdensity=1" alt="${s.id}" class="w-6 h-6 object-contain">
              <span class="text-[#ffffffb8] text-[16px] font-bold font-Object capitalize">${s.textfrontofsmimg}</span>
            </div>
            <div class="text-[#ffffffd6] text-[18px] font-bold font-Object capitalize leading-[21.6px]">${s.bigtext}</div>
            <span class="text-[#ffb400] text-[14px] mt-[10px] capitalize leading-[-11.6px]">${s.yellotext}</span>
            <span class="text-[#ffffffb8] block text-[12px] mt-[4px] capitalize">${s.lowtext}</span>
            <span class="text-[#ffffffd6] block text-[16px] mt-[24px] absolute bottom-[24px] font-bold font-Object capitalize">${s.price}</span>
          </div>
        </div>`
    );
    Zt.insertAdjacentHTML("afterbegin", e.join(""));
  };
Ut();
let Qt = document.querySelector(".p4"),
  Jt = async () => {
    let e = (
      await (
        await fetch(
          "https://amirmahdifarahzady.github.io/BattleAPI/New%20folder%20(2)/dbrecommand.json"
        )
      ).json()
    ).map(
      (s) => `<div class="flex flex-col relative">
          <img
            src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta3edb166df401d70/67e19dc2357d64a792a98699/HS_32p0_ITED_Mega_Phoenix_Franchise_ArtOnly_1920x1080_MMZ02.png?imwidth=332&imdensity=1"
            alt="${s.id}"
            class=""
          />
          <div class="p-6">
            <div class="flex gap-[5px] items-center mb-[10px]">
              <img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blta3edb166df401d70/67e19dc2357d64a792a98699/HS_32p0_ITED_Mega_Phoenix_Franchise_ArtOnly_1920x1080_MMZ02.png?imwidth=332&imdensity=1" alt="${s.id}" class="w-6 h-6 object-contain">
              <span class="text-[#ffffffb8] text-[16px] font-bold font-Object capitalize">${s.textfrontofsmimg}</span>
            </div>
            <div class="text-[#ffffffd6] text-[18px] font-bold font-Object capitalize leading-[21.6px]">${s.bigtext}</div>
            <span class="text-[#ffb400] text-[14px] mt-[10px] capitalize leading-[-11.6px]">${s.yellotext}</span>
            <span class="text-[#ffffffb8] block text-[12px] mt-[4px] capitalize">${s.lowtext}</span>
            <span class="text-[#ffffffd6] block text-[16px] mt-[24px] absolute bottom-[24px] font-bold font-Object capitalize">${s.price}</span>
          </div>
        </div>`
    );
    Qt.insertAdjacentHTML("afterbegin", e.join(""));
  };
Jt();
