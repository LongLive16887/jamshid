"use strict";
(() => {
  var e = {};
  (e.id = 381),
    (e.ids = [381, 660]),
    (e.modules = {
      2299: (e, t, r) => {
        r.r(t),
          r.d(t, {
            config: () => P,
            default: () => d,
            getServerSideProps: () => S,
            getStaticPaths: () => g,
            getStaticProps: () => c,
            reportWebVitals: () => b,
            routeModule: () => f,
            unstable_getServerProps: () => x,
            unstable_getServerSideProps: () => h,
            unstable_getStaticParams: () => _,
            unstable_getStaticPaths: () => v,
            unstable_getStaticProps: () => m,
          });
        var s = r(1499),
          a = r(5909),
          i = r(1456),
          l = r(9840),
          o = r.n(l),
          n = r(524),
          u = r.n(n),
          p = r(6521);
        let d = (0, i.l)(p, "default"),
          c = (0, i.l)(p, "getStaticProps"),
          g = (0, i.l)(p, "getStaticPaths"),
          S = (0, i.l)(p, "getServerSideProps"),
          P = (0, i.l)(p, "config"),
          b = (0, i.l)(p, "reportWebVitals"),
          m = (0, i.l)(p, "unstable_getStaticProps"),
          v = (0, i.l)(p, "unstable_getStaticPaths"),
          _ = (0, i.l)(p, "unstable_getStaticParams"),
          x = (0, i.l)(p, "unstable_getServerProps"),
          h = (0, i.l)(p, "unstable_getServerSideProps"),
          f = new s.PagesRouteModule({
            definition: {
              kind: a.x.PAGES,
              page: "/contact/AddressImg",
              pathname: "/contact/AddressImg",
              bundlePath: "",
              filename: "",
            },
            components: { App: u(), Document: o() },
            userland: p,
          });
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
    s = t.X(0, [840, 514], () => r(2299));
  module.exports = s;
})();
