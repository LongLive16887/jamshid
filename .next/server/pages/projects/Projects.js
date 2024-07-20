(() => {
  var e = {};
  (e.id = 157),
    (e.ids = [157, 660]),
    (e.modules = {
      4673: (e, s, t) => {
        "use strict";
        t.r(s),
          t.d(s, {
            config: () => D,
            default: () => w,
            getServerSideProps: () => M,
            getStaticPaths: () => T,
            getStaticProps: () => P,
            reportWebVitals: () => _,
            routeModule: () => O,
            unstable_getServerProps: () => H,
            unstable_getServerSideProps: () => R,
            unstable_getStaticParams: () => F,
            unstable_getStaticPaths: () => A,
            unstable_getStaticProps: () => z,
          });
        var r = {};
        t.r(r), t.d(r, { default: () => C });
        var i = t(1499),
          o = t(5909),
          a = t(1456),
          l = t(9840),
          n = t.n(l),
          c = t(524),
          d = t.n(c),
          u = t(997),
          p = t(6689),
          h = t(4790),
          m = t(2266);
        t(795);
        var x = t(3411);
        class g extends p.Component {
          render() {
            return u.jsx("div", {
              children: u.jsx("div", {
                className: "software-skills-main-div",
                children: u.jsx("ul", {
                  className: "dev-icons-languages",
                  children: this.props.logos.map((e) =>
                    u.jsx(
                      x.Ox,
                      {
                        placement: "top",
                        overlay: u.jsx(x.u, {
                          id: "tooltip-top",
                          children: u.jsx("strong", { children: e.name }),
                        }),
                        children: u.jsx("li", {
                          className: "software-skill-inline-languages",
                          name: e.skillName,
                          children: u.jsx("span", {
                            className: "iconify",
                            "data-icon": e.iconifyClass,
                            "data-inline": "false",
                          }),
                        }),
                      },
                      e.name
                    )
                  ),
                }),
              }),
            });
          }
        }
        t(9138);
        var v = t(4931);
        function j({ repo: e, theme: s }) {
          return u.jsx("div", {
            className: "repo-card-div",
            style: { backgroundColor: s.highlight },
            children: u.jsx(v.Fade, {
              bottom: !0,
              duration: 2e3,
              distance: "40px",
              children: (0, u.jsxs)(
                "div",
                {
                  onClick: () =>
                    (function (e) {
                      window.open(e, "_blank").focus();
                    })(e.url),
                  children: [
                    (0, u.jsxs)("div", {
                      className: "repo-name-div",
                      children: [
                        u.jsx("svg", {
                          "aria-hidden": "true",
                          className: "octicon repo-svg",
                          height: "16",
                          role: "img",
                          viewBox: "0 0 12 16",
                          width: "12",
                          children: u.jsx("path", {
                            "fill-rule": "evenodd",
                            d:
                              "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z",
                          }),
                        }),
                        u.jsx("p", {
                          className: "repo-name",
                          style: { color: s.text },
                          children: e.name,
                        }),
                      ],
                    }),
                    u.jsx("p", {
                      className: "repo-description",
                      style: { color: s.text },
                      children: e.description,
                    }),
                    (0, u.jsxs)("div", {
                      className: "repo-details",
                      children: [
                        (0, u.jsxs)("p", {
                          className: "repo-creation-date subTitle",
                          style: { color: s.secondaryText },
                          children: ["Created on ", e.createdAt.split("T")[0]],
                        }),
                        u.jsx(g, {
                          className: "repo-languages",
                          logos: e.languages,
                        }),
                      ],
                    }),
                  ],
                },
                e.id
              ),
            }),
          });
        }
        function y({ pub: e, theme: s }) {
          return u.jsx("div", {
            className: "publication-card-div",
            style: { backgroundColor: s.highlight },
            children: u.jsx(v.Fade, {
              bottom: !0,
              duration: 2e3,
              distance: "40px",
              children: (0, u.jsxs)(
                "div",
                {
                  onClick: () =>
                    (function (e) {
                      window.open(e, "_blank").focus();
                    })(e.url),
                  children: [
                    u.jsx("div", {
                      className: "publication-name-div",
                      children: u.jsx("p", {
                        className: "publication-name",
                        style: { color: s.text },
                        children: e.name,
                      }),
                    }),
                    u.jsx("p", {
                      className: "publication-description",
                      style: { color: s.text },
                      children: e.description,
                    }),
                    u.jsx("div", {
                      className: "publication-details",
                      children: (0, u.jsxs)("p", {
                        className: "publication-creation-date subTitle",
                        style: { color: s.secondaryText },
                        children: ["Published on ", e.createdAt.split("T")[0]],
                      }),
                    }),
                  ],
                },
                e.id
              ),
            }),
          });
        }
        t(2328);
        var b = t(1539),
          f = t(3120),
          k = t(8801);
        let q = JSON.parse(
          '{"a":[{"id":"R_kgDOJWL0-g","name":"mdp-diffusion","createdAt":"2023-04-13T04:18:19Z","url":"https://github.com/ashutosh1919/mdp-diffusion","description":"Text-guided image editing by manipulating diffusion path without any training.","isFork":false,"languages":[{"name":"Python","iconifyClass":"logos-python"},{"name":"Shell","iconifyClass":"simple-icons:shell"},{"name":"Jupyter Notebook","iconifyClass":"logos-jupyter"}]},{"id":"R_kgDOG_vYHA","name":"explainable-cnn","createdAt":"2022-03-13T20:41:33Z","url":"https://github.com/ashutosh1919/explainable-cnn","description":"\uD83D\uDCE6 PyTorch based visualization package for generating layer-wise explanations for CNNs.","isFork":false,"languages":[{"name":"Python","iconifyClass":"logos-python"}]},{"id":"MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=","name":"masterPortfolio","createdAt":"2020-03-06T16:26:54Z","url":"https://github.com/ashutosh1919/masterPortfolio","description":"\uD83D\uDD25 The Complete Customizable Software Developer Portfolio Template which lets you showcase your work and provides each and every detail about you as Software Developer.","isFork":false,"languages":[{"name":"HTML","iconifyClass":"logos-html-5"},{"name":"CSS","iconifyClass":"logos-css-3"},{"name":"JavaScript","iconifyClass":"logos-javascript"},{"name":"Dockerfile","iconifyClass":"simple-icons:docker"}]},{"id":"R_kgDOG0_8uQ","name":"react-awesome-shapes","createdAt":"2022-02-11T14:50:20Z","url":"https://github.com/ashutosh1919/react-awesome-shapes","description":"\uD83C\uDF00 Insert Awesome Shapes into Your React Site with Ease.","isFork":false,"languages":[{"name":"HTML","iconifyClass":"logos-html-5"},{"name":"CSS","iconifyClass":"logos-css-3"},{"name":"Shell","iconifyClass":"simple-icons:shell"},{"name":"JavaScript","iconifyClass":"logos-javascript"}]},{"id":"R_kgDOGcPKSQ","name":"neuro-symbolic-sudoku-solver","createdAt":"2021-11-26T17:56:07Z","url":"https://github.com/ashutosh1919/neuro-symbolic-sudoku-solver","description":"⚙️ Solving sudoku using Deep Reinforcement learning in combination with powerful symbolic representations.","isFork":false,"languages":[{"name":"Python","iconifyClass":"logos-python"}]},{"id":"MDEwOlJlcG9zaXRvcnkzMjU5NDM1MTE=","name":"react-liquidswipe","createdAt":"2021-01-01T08:31:51Z","url":"https://github.com/ashutosh1919/react-liquidswipe","description":"\uD83D\uDE80 Smooth Liquid Swipe Animation to transition between different components.","isFork":false,"languages":[{"name":"JavaScript","iconifyClass":"logos-javascript"},{"name":"CSS","iconifyClass":"logos-css-3"}]}]}'
        );
        t(6325);
        var N = t(5971);
        class S extends p.Component {
          render() {
            let e = this.props.theme;
            return (0, u.jsxs)("div", {
              className: "projects-main",
              children: [
                u.jsx(h.Z, { theme: e }),
                u.jsx("div", {
                  className: "basic-projects",
                  children: u.jsx(v.Fade, {
                    bottom: !0,
                    duration: 2e3,
                    distance: "40px",
                    children: (0, u.jsxs)("div", {
                      className: "projects-heading-div",
                      children: [
                        u.jsx("div", {
                          className: "projects-heading-img-div",
                          children: u.jsx(N.default, { theme: e }),
                        }),
                        (0, u.jsxs)("div", {
                          className: "projects-heading-text-div",
                          children: [
                            u.jsx("h1", {
                              className: "projects-heading-text",
                              style: { color: e.text },
                              children: k.k$.title,
                            }),
                            u.jsx("p", {
                              className: "projects-header-detail-text subTitle",
                              style: { color: e.secondaryText },
                              children: k.k$.description,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                u.jsx("div", {
                  className: "repo-cards-div-main",
                  children: q.a.map((s) => u.jsx(j, { repo: s, theme: e })),
                }),
                u.jsx(b.Z, {
                  text: "More Projects",
                  className: "project-button",
                  href: k.Qw.githubProfile,
                  newTab: !0,
                  theme: e,
                }),
                k.Po.data.length > 0
                  ? u.jsx("div", {
                      className: "basic-projects",
                      children: u.jsx(v.Fade, {
                        bottom: !0,
                        duration: 2e3,
                        distance: "40px",
                        children: u.jsx("div", {
                          className: "publications-heading-div",
                          children: (0, u.jsxs)("div", {
                            className: "publications-heading-text-div",
                            children: [
                              u.jsx("h1", {
                                className: "publications-heading-text",
                                style: { color: e.text },
                                children: k.Hz.title,
                              }),
                              u.jsx("p", {
                                className:
                                  "projects-header-detail-text subTitle",
                                style: { color: e.secondaryText },
                                children: k.Hz.description,
                              }),
                            ],
                          }),
                        }),
                      }),
                    })
                  : null,
                u.jsx("div", {
                  className: "repo-cards-div-main",
                  children: k.Po.data.map((s) =>
                    u.jsx(y, { pub: s, theme: e })
                  ),
                }),
                u.jsx(m.Z, {
                  theme: this.props.theme,
                  onToggle: this.props.onToggle,
                }),
                u.jsx(f.Z, { theme: this.props.theme }),
              ],
            });
          }
        }
        let C = S,
          w = (0, a.l)(r, "default"),
          P = (0, a.l)(r, "getStaticProps"),
          T = (0, a.l)(r, "getStaticPaths"),
          M = (0, a.l)(r, "getServerSideProps"),
          D = (0, a.l)(r, "config"),
          _ = (0, a.l)(r, "reportWebVitals"),
          z = (0, a.l)(r, "unstable_getStaticProps"),
          A = (0, a.l)(r, "unstable_getStaticPaths"),
          F = (0, a.l)(r, "unstable_getStaticParams"),
          H = (0, a.l)(r, "unstable_getServerProps"),
          R = (0, a.l)(r, "unstable_getServerSideProps"),
          O = new i.PagesRouteModule({
            definition: {
              kind: o.x.PAGES,
              page: "/projects/Projects",
              pathname: "/projects/Projects",
              bundlePath: "",
              filename: "",
            },
            components: { App: d(), Document: n() },
            userland: r,
          });
      },
      1539: (e, s, t) => {
        "use strict";
        t.d(s, { Z: () => a });
        var r = t(997);
        t(6689), t(90);
        let i = (e, s, t) => {
            let r = e.target;
            (r.style.color = s), (r.style.backgroundColor = t);
          },
          o = (e, s, t) => {
            let r = e.target;
            (r.style.color = s), (r.style.backgroundColor = t);
          };
        function a({ text: e, className: s, href: t, newTab: a, theme: l }) {
          return r.jsx("div", {
            className: s,
            children: r.jsx("a", {
              className: "main-button",
              href: t,
              target: a && "_blank",
              style: {
                color: l.body,
                backgroundColor: l.text,
                border: `solid 1px ${l.text}`,
              },
              onMouseEnter: (e) => i(e, l.text, l.body),
              onMouseOut: (e) => o(e, l.body, l.text),
              children: e,
            }),
          });
        }
      },
      90: () => {},
      9138: () => {},
      795: () => {},
      2328: () => {},
      6325: () => {},
      6449: (e) => {
        "use strict";
        e.exports = require("@restart/hooks/useCallbackRef");
      },
      7578: (e) => {
        "use strict";
        e.exports = require("@restart/hooks/useCommittedRef");
      },
      5205: (e) => {
        "use strict";
        e.exports = require("@restart/hooks/useEventCallback");
      },
      3067: (e) => {
        "use strict";
        e.exports = require("@restart/hooks/useForceUpdate");
      },
      3282: (e) => {
        "use strict";
        e.exports = require("@restart/hooks/useMergedRefs");
      },
      2541: (e) => {
        "use strict";
        e.exports = require("@restart/hooks/useTimeout");
      },
      8333: (e) => {
        "use strict";
        e.exports = require("@restart/hooks/useUpdateEffect");
      },
      6816: (e) => {
        "use strict";
        e.exports = require("@restart/hooks/useWillUnmount");
      },
      9003: (e) => {
        "use strict";
        e.exports = require("classnames");
      },
      5918: (e) => {
        "use strict";
        e.exports = require("dom-helpers/addEventListener");
      },
      7719: (e) => {
        "use strict";
        e.exports = require("dom-helpers/camelize");
      },
      7107: (e) => {
        "use strict";
        e.exports = require("dom-helpers/canUseDOM");
      },
      6375: (e) => {
        "use strict";
        e.exports = require("dom-helpers/contains");
      },
      7836: (e) => {
        "use strict";
        e.exports = require("dom-helpers/css");
      },
      7674: (e) => {
        "use strict";
        e.exports = require("dom-helpers/hasClass");
      },
      2902: (e) => {
        "use strict";
        e.exports = require("dom-helpers/ownerDocument");
      },
      6117: (e) => {
        "use strict";
        e.exports = require("dom-helpers/querySelectorAll");
      },
      8951: (e) => {
        "use strict";
        e.exports = require("dom-helpers/removeEventListener");
      },
      7233: (e) => {
        "use strict";
        e.exports = require("dom-helpers/scrollbarSize");
      },
      6479: (e) => {
        "use strict";
        e.exports = require("dom-helpers/transitionEnd");
      },
      7644: (e) => {
        "use strict";
        e.exports = require("invariant");
      },
      2785: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      580: (e) => {
        "use strict";
        e.exports = require("prop-types");
      },
      3462: (e) => {
        "use strict";
        e.exports = require("prop-types-extra/lib/all");
      },
      8361: (e) => {
        "use strict";
        e.exports = require("prop-types-extra/lib/isRequiredForA11y");
      },
      6689: (e) => {
        "use strict";
        e.exports = require("react");
      },
      2791: (e) => {
        "use strict";
        e.exports = require("react-helmet");
      },
      8157: (e) => {
        "use strict";
        e.exports = require("react-overlays/Dropdown");
      },
      867: (e) => {
        "use strict";
        e.exports = require("react-overlays/DropdownMenu");
      },
      7775: (e) => {
        "use strict";
        e.exports = require("react-overlays/DropdownToggle");
      },
      8164: (e) => {
        "use strict";
        e.exports = require("react-overlays/Modal");
      },
      8285: (e) => {
        "use strict";
        e.exports = require("react-overlays/ModalManager");
      },
      3501: (e) => {
        "use strict";
        e.exports = require("react-overlays/Overlay");
      },
      2063: (e) => {
        "use strict";
        e.exports = require("react-overlays/safeFindDOMNode");
      },
      4931: (e) => {
        "use strict";
        e.exports = require("react-reveal");
      },
      4661: (e) => {
        "use strict";
        e.exports = require("react-router-dom");
      },
      7967: (e) => {
        "use strict";
        e.exports = require("react-transition-group/Transition");
      },
      997: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
      3372: (e) => {
        "use strict";
        e.exports = require("uncontrollable");
      },
      5548: (e) => {
        "use strict";
        e.exports = require("warning");
      },
      1017: (e) => {
        "use strict";
        e.exports = require("path");
      },
    });
  var s = require("../../webpack-runtime.js");
  s.C(e);
  var t = (e) => s((s.s = e)),
    r = s.X(0, [840, 822, 498, 971], () => t(4673));
  module.exports = r;
})();
