(() => {
  var e = {};
  (e.id = 859),
    (e.ids = [859, 660]),
    (e.modules = {
      1456: (e, t) => {
        "use strict";
        Object.defineProperty(t, "l", {
          enumerable: !0,
          get: function () {
            return function e(t, r) {
              return r in t
                ? t[r]
                : "then" in t && "function" == typeof t.then
                ? t.then((t) => e(t, r))
                : "function" == typeof t && "default" === r
                ? t
                : void 0;
            };
          },
        });
      },
      7703: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            config: () => j,
            default: () => g,
            getServerSideProps: () => v,
            getStaticPaths: () => _,
            getStaticProps: () => S,
            reportWebVitals: () => A,
            routeModule: () => I,
            unstable_getServerProps: () => q,
            unstable_getServerSideProps: () => O,
            unstable_getStaticParams: () => G,
            unstable_getStaticPaths: () => E,
            unstable_getStaticProps: () => y,
          });
        var s = {};
        r.r(s), r.d(s, { default: () => b });
        var o = r(1499),
          a = r(5909),
          i = r(1456),
          n = r(9840),
          l = r.n(n),
          u = r(524),
          c = r.n(u),
          d = r(997),
          p = r(6689),
          P = r(4790),
          m = r(2266),
          f = r(3120),
          h = r(4931);
        r(8858);
        var x = r(4661);
        class b extends p.Component {
          render() {
            let e = this.props.theme;
            return (0, d.jsxs)("div", {
              className: "error-main",
              children: [
                d.jsx(P.Z, { theme: this.props.theme }),
                d.jsx("div", {
                  className: "error-class",
                  children: (0, d.jsxs)(h.Fade, {
                    bottom: !0,
                    duration: 2e3,
                    distance: "40px",
                    children: [
                      d.jsx("h1", { children: "Woops" }),
                      d.jsx("h1", { className: "error-404", children: "404" }),
                      d.jsx("p", {
                        children:
                          "The requested page is unavailable at the moment!",
                      }),
                      d.jsx(x.Link, {
                        className: "main-button",
                        to: "/home",
                        style: {
                          color: e.body,
                          backgroundColor: e.text,
                          border: `solid 1px ${e.text}`,
                          display: "inline-flex",
                        },
                        children: "Go Home",
                      }),
                    ],
                  }),
                }),
                d.jsx(m.Z, { theme: this.props.theme }),
                d.jsx(f.Z, { theme: this.props.theme }),
              ],
            });
          }
        }
        let g = (0, i.l)(s, "default"),
          S = (0, i.l)(s, "getStaticProps"),
          _ = (0, i.l)(s, "getStaticPaths"),
          v = (0, i.l)(s, "getServerSideProps"),
          j = (0, i.l)(s, "config"),
          A = (0, i.l)(s, "reportWebVitals"),
          y = (0, i.l)(s, "unstable_getStaticProps"),
          E = (0, i.l)(s, "unstable_getStaticPaths"),
          G = (0, i.l)(s, "unstable_getStaticParams"),
          q = (0, i.l)(s, "unstable_getServerProps"),
          O = (0, i.l)(s, "unstable_getServerSideProps"),
          I = new o.PagesRouteModule({
            definition: {
              kind: a.x.PAGES,
              page: "/errors/error404/Error",
              pathname: "/errors/error404/Error",
              bundlePath: "",
              filename: "",
            },
            components: { App: c(), Document: l() },
            userland: s,
          });
      },
      524: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return l;
            },
          });
        let s = r(810),
          o = r(997),
          a = s._(r(6689)),
          i = r(1865);
        async function n(e) {
          let { Component: t, ctx: r } = e;
          return { pageProps: await (0, i.loadGetInitialProps)(t, r) };
        }
        class l extends a.default.Component {
          render() {
            let { Component: e, pageProps: t } = this.props;
            return (0, o.jsx)(e, { ...t });
          }
        }
        (l.origGetInitialProps = n),
          (l.getInitialProps = n),
          ("function" == typeof t.default ||
            ("object" == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, "__esModule", { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      8858: () => {},
      5909: (e, t) => {
        "use strict";
        var r;
        Object.defineProperty(t, "x", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
          (function (e) {
            (e.PAGES = "PAGES"),
              (e.PAGES_API = "PAGES_API"),
              (e.APP_PAGE = "APP_PAGE"),
              (e.APP_ROUTE = "APP_ROUTE");
          })(r || (r = {}));
      },
      2785: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      6689: (e) => {
        "use strict";
        e.exports = require("react");
      },
      2791: (e) => {
        "use strict";
        e.exports = require("react-helmet");
      },
      4931: (e) => {
        "use strict";
        e.exports = require("react-reveal");
      },
      4661: (e) => {
        "use strict";
        e.exports = require("react-router-dom");
      },
      997: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
      1017: (e) => {
        "use strict";
        e.exports = require("path");
      },
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [840, 498], () => r(7703));
  module.exports = s;
})();
