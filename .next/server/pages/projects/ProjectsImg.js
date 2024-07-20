"use strict";
(() => {
  var e = {};
  (e.id = 677),
    (e.ids = [677, 660]),
    (e.modules = {
      1456: (e, t) => {
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
      53: (e, t, r) => {
        r.r(t),
          r.d(t, {
            config: () => g,
            default: () => P,
            getServerSideProps: () => f,
            getStaticPaths: () => c,
            getStaticProps: () => d,
            reportWebVitals: () => S,
            routeModule: () => A,
            unstable_getServerProps: () => v,
            unstable_getServerSideProps: () => j,
            unstable_getStaticParams: () => m,
            unstable_getStaticPaths: () => _,
            unstable_getStaticProps: () => b,
          });
        var n = r(1499),
          a = r(5909),
          o = r(1456),
          s = r(9840),
          i = r.n(s),
          u = r(524),
          l = r.n(u),
          p = r(5971);
        let P = (0, o.l)(p, "default"),
          d = (0, o.l)(p, "getStaticProps"),
          c = (0, o.l)(p, "getStaticPaths"),
          f = (0, o.l)(p, "getServerSideProps"),
          g = (0, o.l)(p, "config"),
          S = (0, o.l)(p, "reportWebVitals"),
          b = (0, o.l)(p, "unstable_getStaticProps"),
          _ = (0, o.l)(p, "unstable_getStaticPaths"),
          m = (0, o.l)(p, "unstable_getStaticParams"),
          v = (0, o.l)(p, "unstable_getServerProps"),
          j = (0, o.l)(p, "unstable_getServerSideProps"),
          A = new n.PagesRouteModule({
            definition: {
              kind: a.x.PAGES,
              page: "/projects/ProjectsImg",
              pathname: "/projects/ProjectsImg",
              bundlePath: "",
              filename: "",
            },
            components: { App: l(), Document: i() },
            userland: p,
          });
      },
      524: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let n = r(810),
          a = r(997),
          o = n._(r(6689)),
          s = r(1865);
        async function i(e) {
          let { Component: t, ctx: r } = e;
          return { pageProps: await (0, s.loadGetInitialProps)(t, r) };
        }
        class u extends o.default.Component {
          render() {
            let { Component: e, pageProps: t } = this.props;
            return (0, a.jsx)(e, { ...t });
          }
        }
        (u.origGetInitialProps = i),
          (u.getInitialProps = i),
          ("function" == typeof t.default ||
            ("object" == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, "__esModule", { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      5909: (e, t) => {
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
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      6689: (e) => {
        e.exports = require("react");
      },
      997: (e) => {
        e.exports = require("react/jsx-runtime");
      },
      1017: (e) => {
        e.exports = require("path");
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [840, 971], () => r(53));
  module.exports = n;
})();
