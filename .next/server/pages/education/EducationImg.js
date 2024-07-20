"use strict";
(() => {
  var t = {};
  (t.id = 45),
    (t.ids = [45, 660]),
    (t.modules = {
      1456: (t, e) => {
        Object.defineProperty(e, "l", {
          enumerable: !0,
          get: function () {
            return function t(e, r) {
              return r in e
                ? e[r]
                : "then" in e && "function" == typeof e.then
                ? e.then((e) => t(e, r))
                : "function" == typeof e && "default" === r
                ? e
                : void 0;
            };
          },
        });
      },
      1923: (t, e, r) => {
        r.r(e),
          r.d(e, {
            config: () => u,
            default: () => h,
            getServerSideProps: () => x,
            getStaticPaths: () => p,
            getStaticProps: () => d,
            reportWebVitals: () => g,
            routeModule: () => S,
            unstable_getServerProps: () => m,
            unstable_getServerSideProps: () => P,
            unstable_getStaticParams: () => b,
            unstable_getStaticPaths: () => j,
            unstable_getStaticProps: () => y,
          });
        var a = r(1499),
          s = r(5909),
          i = r(1456),
          l = r(9840),
          o = r.n(l),
          n = r(524),
          f = r.n(n),
          c = r(842);
        let h = (0, i.l)(c, "default"),
          d = (0, i.l)(c, "getStaticProps"),
          p = (0, i.l)(c, "getStaticPaths"),
          x = (0, i.l)(c, "getServerSideProps"),
          u = (0, i.l)(c, "config"),
          g = (0, i.l)(c, "reportWebVitals"),
          y = (0, i.l)(c, "unstable_getStaticProps"),
          j = (0, i.l)(c, "unstable_getStaticPaths"),
          b = (0, i.l)(c, "unstable_getStaticParams"),
          m = (0, i.l)(c, "unstable_getServerProps"),
          P = (0, i.l)(c, "unstable_getServerSideProps"),
          S = new a.PagesRouteModule({
            definition: {
              kind: s.x.PAGES,
              page: "/education/EducationImg",
              pathname: "/education/EducationImg",
              bundlePath: "",
              filename: "",
            },
            components: { App: f(), Document: o() },
            userland: c,
          });
      },
      524: (t, e, r) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
        let a = r(810),
          s = r(997),
          i = a._(r(6689)),
          l = r(1865);
        async function o(t) {
          let { Component: e, ctx: r } = t;
          return { pageProps: await (0, l.loadGetInitialProps)(e, r) };
        }
        class n extends i.default.Component {
          render() {
            let { Component: t, pageProps: e } = this.props;
            return (0, s.jsx)(t, { ...e });
          }
        }
        (n.origGetInitialProps = o),
          (n.getInitialProps = o),
          ("function" == typeof e.default ||
            ("object" == typeof e.default && null !== e.default)) &&
            void 0 === e.default.__esModule &&
            (Object.defineProperty(e.default, "__esModule", { value: !0 }),
            Object.assign(e.default, e),
            (t.exports = e.default));
      },
      842: (t, e, r) => {
        r.r(e), r.d(e, { default: () => i });
        var a = r(997),
          s = r(6689);
        class i extends s.Component {
          render() {
            let t = this.props.theme;
            return (0, a.jsxs)("svg", {
              id: "eb113788-f1f1-4c1f-be62-f1d0ea2e1eb6",
              "data-name": "Layer 1",
              xmlns: "http://www.w3.org/2000/svg",
              width: "795.39431",
              height: "574.03802",
              viewBox: "0 0 795.39431 574.03802",
              children: [
                a.jsx("defs", {
                  children: (0, a.jsxs)("linearGradient", {
                    id: "b2a81085-935f-40be-bb27-75940df8c338",
                    x1: "-450.78971",
                    y1: "2803.04671",
                    x2: "-450.78971",
                    y2: "2729.34772",
                    gradientTransform:
                      "translate(3217.53309 1009.65784) rotate(90)",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      a.jsx("stop", {
                        offset: "0",
                        stopColor: "gray",
                        stopOpacity: "0.25",
                      }),
                      a.jsx("stop", {
                        offset: "0.53514",
                        stopColor: "gray",
                        stopOpacity: "0.12",
                      }),
                      a.jsx("stop", {
                        offset: "1",
                        stopColor: "gray",
                        stopOpacity: "0.1",
                      }),
                    ],
                  }),
                }),
                a.jsx("title", { children: "Graduation" }),
                a.jsx("ellipse", {
                  cx: "232.05775",
                  cy: "450.06897",
                  rx: "35.09476",
                  ry: "5.26421",
                  transform:
                    "translate(-476.55674 294.92367) rotate(-63.61079)",
                  fill: "#e0e0e0",
                }),
                a.jsx("ellipse", {
                  cx: "670.57742",
                  cy: "667.85592",
                  rx: "35.09476",
                  ry: "3.57677",
                  transform:
                    "translate(-428.03695 808.73554) rotate(-63.61079)",
                  fill: "#e0e0e0",
                }),
                a.jsx("rect", {
                  x: "397.95325",
                  y: "566.93514",
                  width: "21.05685",
                  height: "70.18951",
                  transform: "translate(274.52069 -285.26226) rotate(39.54732)",
                  fill: "#f55f44",
                }),
                a.jsx("rect", {
                  x: "409.32507",
                  y: "573.56618",
                  width: "23.69234",
                  height: "70.18951",
                  transform:
                    "translate(489.54965 1134.58125) rotate(-166.7689)",
                  opacity: "0.05",
                }),
                a.jsx("rect", {
                  x: "411.92558",
                  y: "573.86778",
                  width: "21.05685",
                  height: "70.18951",
                  transform: "translate(492.0121 1135.47005) rotate(-166.7689)",
                  fill: "#f55f44",
                }),
                a.jsx("rect", {
                  x: "414.48638",
                  y: "314.08219",
                  width: "73.69899",
                  height: "489.57186",
                  transform: "translate(-452.20218 551.7936) rotate(-63.61079)",
                  fill: "url(#b2a81085-935f-40be-bb27-75940df8c338)",
                }),
                a.jsx("path", {
                  d:
                    "M655.01556,699.105c-8.584-4.11751-444.8438-220.718-438.55625-217.5983,24.21371-36.95739,31.19689-62.87545,31.19689-62.87545l438.55625,217.5983S670.81132,663.25857,655.01556,699.105Z",
                  transform: "translate(-202.30284 -162.98099)",
                  fill: "#f5f5f5",
                }),
                a.jsx("rect", {
                  x: "421.72508",
                  y: "519.09383",
                  width: "40.35897",
                  height: "70.18951",
                  transform: "translate(90.06389 -301.64381) rotate(26.38921)",
                  opacity: "0.05",
                }),
                a.jsx("rect", {
                  x: "423.47981",
                  y: "519.09383",
                  width: "36.8495",
                  height: "70.18951",
                  transform: "translate(90.06389 -301.64381) rotate(26.38921)",
                  fill: "#f55f44",
                }),
                a.jsx("rect", {
                  x: "428.83545",
                  y: "518.70387",
                  width: "24.56633",
                  height: "70.18951",
                  transform: "translate(89.80867 -301.33512) rotate(26.38921)",
                  opacity: "0.05",
                }),
                a.jsx("rect", {
                  x: "430.59019",
                  y: "518.70387",
                  width: "21.05685",
                  height: "70.18951",
                  transform: "translate(89.80867 -301.33512) rotate(26.38921)",
                  fill: "#f55f44",
                }),
                a.jsx("circle", {
                  cx: "261.30557",
                  cy: "563.92499",
                  r: "2.92569",
                  fill: "#dbdbdb",
                }),
                (0, a.jsxs)("g", {
                  opacity: "0.5",
                  children: [
                    a.jsx("rect", {
                      x: "29.39431",
                      y: "482",
                      width: "3",
                      height: "17",
                      fill: "#47e6b1",
                    }),
                    a.jsx("rect", {
                      x: "231.69716",
                      y: "644.98099",
                      width: "3",
                      height: "17",
                      transform: "translate(684.3753 257.30284) rotate(90)",
                      fill: "#47e6b1",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  opacity: "0.5",
                  children: [
                    a.jsx("rect", {
                      x: "785.39431",
                      y: "270",
                      width: "3",
                      height: "17",
                      fill: "#47e6b1",
                    }),
                    a.jsx("rect", {
                      x: "987.69716",
                      y: "432.98099",
                      width: "3",
                      height: "17",
                      transform: "translate(1228.3753 -710.69716) rotate(90)",
                      fill: "#47e6b1",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  opacity: "0.5",
                  children: [
                    a.jsx("rect", {
                      x: "47.39431",
                      y: "59",
                      width: "3",
                      height: "17",
                      fill: "#47e6b1",
                    }),
                    a.jsx("rect", {
                      x: "249.69716",
                      y: "221.98099",
                      width: "3",
                      height: "17",
                      transform: "translate(279.3753 -183.69716) rotate(90)",
                      fill: "#47e6b1",
                    }),
                  ],
                }),
                (0, a.jsxs)("g", {
                  opacity: "0.5",
                  children: [
                    a.jsx("rect", {
                      x: "695.39431",
                      y: "33",
                      width: "3",
                      height: "17",
                      fill: "#47e6b1",
                    }),
                    a.jsx("rect", {
                      x: "897.69716",
                      y: "195.98099",
                      width: "3",
                      height: "17",
                      transform: "translate(901.3753 -857.69716) rotate(90)",
                      fill: "#47e6b1",
                    }),
                  ],
                }),
                a.jsx("path", {
                  d:
                    "M214.59252,416.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,214.59252,416.4373Z",
                  transform: "translate(-202.30284 -162.98099)",
                  fill: "#4d8af0",
                  opacity: "0.5",
                }),
                a.jsx("path", {
                  d:
                    "M386.59252,219.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,386.59252,219.4373Z",
                  transform: "translate(-202.30284 -162.98099)",
                  fill: "#4d8af0",
                  opacity: "0.5",
                }),
                a.jsx("path", {
                  d:
                    "M596.59252,730.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,596.59252,730.4373Z",
                  transform: "translate(-202.30284 -162.98099)",
                  fill: "#4d8af0",
                  opacity: "0.5",
                }),
                a.jsx("circle", {
                  cx: "759.39431",
                  cy: "444",
                  r: "6",
                  fill: "#f55f44",
                  opacity: "0.5",
                }),
                a.jsx("circle", {
                  cx: "627.39431",
                  cy: "482",
                  r: "6",
                  fill: "#4d8af0",
                  opacity: "0.5",
                }),
                a.jsx("circle", {
                  cx: "103.39431",
                  cy: "541",
                  r: "6",
                  fill: "#47e6b1",
                  opacity: "0.5",
                }),
                a.jsx("circle", {
                  cx: "411.39431",
                  cy: "6",
                  r: "6",
                  fill: "#f55f44",
                  opacity: "0.5",
                }),
                a.jsx("path", {
                  d:
                    "M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z",
                  transform: "translate(-202.30284 -162.98099)",
                  fill: t.imageHighlight,
                }),
                a.jsx("path", {
                  d:
                    "M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z",
                  transform: "translate(-202.30284 -162.98099)",
                  opacity: "0.15",
                }),
                a.jsx("polygon", {
                  points:
                    "715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224",
                  fill: t.imageHighlight,
                }),
                a.jsx("polygon", {
                  points:
                    "715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224",
                  opacity: "0.15",
                }),
                a.jsx("polygon", {
                  points:
                    "553.894 257.32 547.894 257.68 541.184 143.67 547.374 146.53 553.894 257.32",
                  fill: "#f5f5f5",
                }),
                a.jsx("path", {
                  d:
                    "M411.19716,386.481l-28,170s201-65,376,0l-26-180S498.19716,347.481,411.19716,386.481Z",
                  transform: "translate(-202.30284 -162.98099)",
                  fill: t.imageHighlight,
                }),
                a.jsx("ellipse", {
                  cx: "553.39431",
                  cy: "272",
                  rx: "29",
                  ry: "20",
                  fill: "#f5f5f5",
                }),
              ],
            });
          }
        }
      },
      5909: (t, e) => {
        var r;
        Object.defineProperty(e, "x", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
          (function (t) {
            (t.PAGES = "PAGES"),
              (t.PAGES_API = "PAGES_API"),
              (t.APP_PAGE = "APP_PAGE"),
              (t.APP_ROUTE = "APP_ROUTE");
          })(r || (r = {}));
      },
      2785: (t) => {
        t.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      6689: (t) => {
        t.exports = require("react");
      },
      997: (t) => {
        t.exports = require("react/jsx-runtime");
      },
      1017: (t) => {
        t.exports = require("path");
      },
    });
  var e = require("../../webpack-runtime.js");
  e.C(t);
  var r = (t) => e((e.s = t)),
    a = e.X(0, [840], () => r(1923));
  module.exports = a;
})();
