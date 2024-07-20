"use strict";
(() => {
  var e = {};
  (e.id = 559),
    (e.ids = [559, 660]),
    (e.modules = {
      5014: (e, t, r) => {
        r.r(t),
          r.d(t, {
            config: () => P,
            default: () => c,
            getServerSideProps: () => d,
            getStaticPaths: () => S,
            getStaticProps: () => g,
            reportWebVitals: () => b,
            routeModule: () => f,
            unstable_getServerProps: () => _,
            unstable_getServerSideProps: () => h,
            unstable_getStaticParams: () => v,
            unstable_getStaticPaths: () => x,
            unstable_getStaticProps: () => m,
          });
        var a = r(1499),
          s = r(5909),
          i = r(1456),
          l = r(9840),
          n = r.n(l),
          o = r(524),
          p = r.n(o),
          u = r(1048);
        let c = (0, i.l)(u, "default"),
          g = (0, i.l)(u, "getStaticProps"),
          S = (0, i.l)(u, "getStaticPaths"),
          d = (0, i.l)(u, "getServerSideProps"),
          P = (0, i.l)(u, "config"),
          b = (0, i.l)(u, "reportWebVitals"),
          m = (0, i.l)(u, "unstable_getStaticProps"),
          x = (0, i.l)(u, "unstable_getStaticPaths"),
          v = (0, i.l)(u, "unstable_getStaticParams"),
          _ = (0, i.l)(u, "unstable_getServerProps"),
          h = (0, i.l)(u, "unstable_getServerSideProps"),
          f = new a.PagesRouteModule({
            definition: {
              kind: s.x.PAGES,
              page: "/experience/ExperienceImg",
              pathname: "/experience/ExperienceImg",
              bundlePath: "",
              filename: "",
            },
            components: { App: p(), Document: n() },
            userland: u,
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
    a = t.X(0, [840, 389], () => r(5014));
  module.exports = a;
})();
