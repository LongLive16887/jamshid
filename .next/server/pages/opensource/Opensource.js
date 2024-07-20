(() => {
  var t = {};
  (t.id = 931),
    (t.ids = [931, 660]),
    (t.modules = {
      7052: (t, e, s) => {
        "use strict";
        s.r(e),
          s.d(e, {
            config: () => R,
            default: () => z,
            getServerSideProps: () => S,
            getStaticPaths: () => B,
            getStaticProps: () => X,
            reportWebVitals: () => G,
            routeModule: () => I,
            unstable_getServerProps: () => P,
            unstable_getServerSideProps: () => q,
            unstable_getStaticParams: () => C,
            unstable_getStaticPaths: () => _,
            unstable_getStaticProps: () => j,
          });
        var o = {};
        s.r(o), s.d(o, { default: () => F });
        var r = s(1499),
          a = s(5909),
          i = s(1456),
          n = s(9840),
          l = s.n(n),
          u = s(524),
          c = s.n(u),
          h = s(997),
          d = s(6689),
          b = s(4790),
          p = s(2266);
        let m = require("react-chartjs-2");
        var g = s(4931);
        s(4889);
        let f = JSON.parse(
          '{"QW":33,"aT":[{"id":"MDExOlB1bGxSZXF1ZXN0NDA5NDQxNDk1","title":"Migrated some files from TF 1.0 to 2.0","url":"https://github.com/tensorflow/addons/pull/1746","state":"OPEN","mergedBy":null,"createdAt":"2020-04-27T11:34:31Z","number":1746,"changedFiles":2,"additions":1,"deletions":6,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA5MDU3MDUz","title":"Added tutorial notebooks for Focal and Contrastive losses","url":"https://github.com/tensorflow/addons/pull/1732","state":"CLOSED","mergedBy":null,"createdAt":"2020-04-26T10:17:22Z","number":1732,"changedFiles":2,"additions":567,"deletions":0,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA4OTAxNTAy","title":"Fixed CyclicLearningRate and its tests\' errors","url":"https://github.com/tensorflow/addons/pull/1729","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/18154355?u=7bcba6c98d214c5935b46334ec888b43893f3b89&v=4","url":"https://github.com/seanpmorgan","login":"seanpmorgan"},"createdAt":"2020-04-25T12:33:41Z","number":1729,"changedFiles":2,"additions":60,"deletions":12,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA4ODY0NDU1","title":"Added serializability tests in all optimizers and fixed serializability bug in yogi","url":"https://github.com/tensorflow/addons/pull/1728","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/18154355?u=7bcba6c98d214c5935b46334ec888b43893f3b89&v=4","url":"https://github.com/seanpmorgan","login":"seanpmorgan"},"createdAt":"2020-04-25T07:19:04Z","number":1728,"changedFiles":10,"additions":80,"deletions":2,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA3ODkzNjM0","title":"Setting up complete workflow for project","url":"https://github.com/ashutosh1919/masterPortfolio/pull/4","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919","login":"ashutosh1919"},"createdAt":"2020-04-23T12:48:04Z","number":4,"changedFiles":19,"additions":38,"deletions":47,"baseRepository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","login":"ashutosh1919","url":"https://github.com/ashutosh1919"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA3ODgxNTk0","title":"Test PR to setup workflow","url":"https://github.com/ashutosh1919/masterPortfolio/pull/3","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919","login":"ashutosh1919"},"createdAt":"2020-04-23T12:24:42Z","number":3,"changedFiles":1,"additions":32,"deletions":0,"baseRepository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","login":"ashutosh1919","url":"https://github.com/ashutosh1919"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA3MDkwMTk5","title":"Added layer_test in addons and refactoring the code","url":"https://github.com/tensorflow/addons/pull/1715","state":"OPEN","mergedBy":null,"createdAt":"2020-04-22T07:05:25Z","number":1715,"changedFiles":1,"additions":72,"deletions":2,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA1NTk5NjAx","title":"Added Center loss","url":"https://github.com/tensorflow/addons/pull/1709","state":"OPEN","mergedBy":null,"createdAt":"2020-04-19T03:52:25Z","number":1709,"changedFiles":3,"additions":131,"deletions":1,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA1NDkyMDkw","title":"Fixed _save_model not working for batches in ModelCheckpoint Callback","url":"https://github.com/tensorflow/tensorflow/pull/38669","state":"CLOSED","mergedBy":null,"createdAt":"2020-04-18T12:26:37Z","number":38669,"changedFiles":1,"additions":15,"deletions":7,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA1NDQ3MTk1","title":"Fixed average_model_checkpoint to have integer save_freq","url":"https://github.com/tensorflow/addons/pull/1702","state":"CLOSED","mergedBy":null,"createdAt":"2020-04-18T05:20:34Z","number":1702,"changedFiles":2,"additions":27,"deletions":1,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA1MTAzNjY3","title":"Added LossFunctionWrapper for losses and simplified code","url":"https://github.com/tensorflow/addons/pull/1688","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/11615393?u=9734b198bd7f7498157e95d48371c39e44b5002b&v=4","url":"https://github.com/WindQAQ","login":"WindQAQ"},"createdAt":"2020-04-17T12:27:37Z","number":1688,"changedFiles":6,"additions":46,"deletions":90,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDA0MTU2NDUy","title":"Added Multi Similarity loss","url":"https://github.com/tensorflow/addons/pull/1679","state":"OPEN","mergedBy":null,"createdAt":"2020-04-16T06:59:30Z","number":1679,"changedFiles":4,"additions":548,"deletions":0,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAzNzQwMjM1","title":"Added demo of TQDMProgressBar() for evaluate()","url":"https://github.com/tensorflow/addons/pull/1674","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/16867893?u=afbda060ede35cddb90255a8295460f6a2395135&v=4","url":"https://github.com/shun-lin","login":"shun-lin"},"createdAt":"2020-04-15T12:51:00Z","number":1674,"changedFiles":1,"additions":19,"deletions":1,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAzMTcxMjA3","title":"Added tests for AverageModelCheckpoint() callback","url":"https://github.com/tensorflow/addons/pull/1667","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/12891691?u=7f49c0407749c186e5df5e1cecb8b2daa47846e3&v=4","url":"https://github.com/gabrieldemarmiesse","login":"gabrieldemarmiesse"},"createdAt":"2020-04-14T13:04:03Z","number":1667,"changedFiles":1,"additions":199,"deletions":0,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAyOTg1MDU4","title":"Added code to call register_all() before loading model","url":"https://github.com/tensorflow/addons/pull/1665","state":"CLOSED","mergedBy":null,"createdAt":"2020-04-14T05:58:52Z","number":1665,"changedFiles":1,"additions":2,"deletions":0,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAyNjMyMzcz","title":"Added code to pass appropriate logs to on_test|train_end() methods","url":"https://github.com/tensorflow/tensorflow/pull/38499","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-04-13T12:57:08Z","number":38499,"changedFiles":2,"additions":10,"deletions":6,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAyMjg2MTk1","title":"Added TQDM Progressbar for evaluate()","url":"https://github.com/tensorflow/addons/pull/1649","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/12891691?u=7f49c0407749c186e5df5e1cecb8b2daa47846e3&v=4","url":"https://github.com/gabrieldemarmiesse","login":"gabrieldemarmiesse"},"createdAt":"2020-04-12T04:42:01Z","number":1649,"changedFiles":2,"additions":102,"deletions":58,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAyMTg1MzUy","title":"Added new flexible loss named GeneralLoss","url":"https://github.com/tensorflow/addons/pull/1647","state":"OPEN","mergedBy":null,"createdAt":"2020-04-11T12:44:29Z","number":1647,"changedFiles":3,"additions":687,"deletions":0,"baseRepository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAyMTM5OTM5","title":"Adding progress bar also while evaluating the model","url":"https://github.com/tensorflow/tensorflow/pull/38447","state":"CLOSED","mergedBy":null,"createdAt":"2020-04-11T04:46:51Z","number":38447,"changedFiles":1,"additions":3,"deletions":1,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAxNzgxODEy","title":"Fixed broken links for post training quant and xla","url":"https://github.com/tensorflow/docs/pull/1535","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/47575114?u=14981fca962fe7d59cb7ab71cc53773edab7f494&v=4","url":"https://github.com/TensorFlow-Docs-Copybara","login":"TensorFlow-Docs-Copybara"},"createdAt":"2020-04-10T06:46:53Z","number":1535,"changedFiles":1,"additions":2,"deletions":2,"baseRepository":{"name":"docs","url":"https://github.com/tensorflow/docs","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0NDAwMTA5MjQ0","title":"Fixed broken link for seo.js","url":"https://github.com/apollographql/gatsby-theme-apollo/pull/111","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/1216917?u=ed1a893911759f92e030c88d764dd2b84a8ccb15&v=4","url":"https://github.com/trevorblades","login":"trevorblades"},"createdAt":"2020-04-07T08:09:48Z","number":111,"changedFiles":1,"additions":1,"deletions":1,"baseRepository":{"name":"gatsby-theme-apollo","url":"https://github.com/apollographql/gatsby-theme-apollo","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/17189275?v=4","login":"apollographql","url":"https://github.com/apollographql"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzk5NTk4Mjk2","title":"Modified Social Card Design","url":"https://github.com/firecamp-io/firecamp-doc/pull/37","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/5078921?u=d767ecc4f7897ef750ce123b35fb23ac3ced2589&v=4","url":"https://github.com/Nishchit14","login":"Nishchit14"},"createdAt":"2020-04-06T12:06:58Z","number":37,"changedFiles":2,"additions":105,"deletions":0,"baseRepository":{"name":"firecamp-doc","url":"https://github.com/firecamp-io/firecamp-doc","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/45025286?v=4","login":"firecamp-io","url":"https://github.com/firecamp-io"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzk5MDI1MDc3","title":"header-button.js component shadowed to show the correct link","url":"https://github.com/firecamp-io/firecamp-doc/pull/35","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/5078921?u=d767ecc4f7897ef750ce123b35fb23ac3ced2589&v=4","url":"https://github.com/Nishchit14","login":"Nishchit14"},"createdAt":"2020-04-05T10:57:55Z","number":35,"changedFiles":1,"additions":49,"deletions":0,"baseRepository":{"name":"firecamp-doc","url":"https://github.com/firecamp-io/firecamp-doc","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/45025286?v=4","login":"firecamp-io","url":"https://github.com/firecamp-io"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzk4MDc0NjYy","title":"Added Basic Reveal Fade animations","url":"https://github.com/saadpasta/developerFolio/pull/76","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/48270786?u=dab5f6dc64923f646b354f47f52af65f44fd9e7e&v=4","url":"https://github.com/kartikcho","login":"kartikcho"},"createdAt":"2020-04-03T09:52:10Z","number":76,"changedFiles":15,"additions":45,"deletions":0,"baseRepository":{"name":"developerFolio","url":"https://github.com/saadpasta/developerFolio","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/23307811?u=eab46b153eef3f5183930e61898b462447af9219&v=4","login":"saadpasta","url":"https://github.com/saadpasta"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzk3OTQzMTk3","title":"Added basic animations","url":"https://github.com/saadpasta/developerFolio/pull/74","state":"CLOSED","mergedBy":null,"createdAt":"2020-04-03T05:21:40Z","number":74,"changedFiles":18,"additions":463,"deletions":295,"baseRepository":{"name":"developerFolio","url":"https://github.com/saadpasta/developerFolio","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/23307811?u=eab46b153eef3f5183930e61898b462447af9219&v=4","login":"saadpasta","url":"https://github.com/saadpasta"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzk3NDkxODM2","title":"Added doc for absolute import from gatsby eslint rules or other tools","url":"https://github.com/gatsbyjs/gatsby/pull/22750","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/15000607?u=96821f18af94d1574d81f3f50918fb51b595d2bf&v=4","url":"https://github.com/laurieontech","login":"laurieontech"},"createdAt":"2020-04-02T10:32:52Z","number":22750,"changedFiles":1,"additions":13,"deletions":0,"baseRepository":{"name":"gatsby","url":"https://github.com/gatsbyjs/gatsby","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/12551863?v=4","login":"gatsbyjs","url":"https://github.com/gatsbyjs"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzk2OTUwMDgy","title":"Corrected order of params of loss fn in custom_training.ipynb","url":"https://github.com/tensorflow/docs/pull/1528","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/47575114?u=14981fca962fe7d59cb7ab71cc53773edab7f494&v=4","url":"https://github.com/TensorFlow-Docs-Copybara","login":"TensorFlow-Docs-Copybara"},"createdAt":"2020-04-01T12:00:52Z","number":1528,"changedFiles":1,"additions":4,"deletions":4,"baseRepository":{"name":"docs","url":"https://github.com/tensorflow/docs","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzk0MDU1Njc1","title":"docs(accordion):  add ul wrapper for standalone panel","url":"https://github.com/uber/baseweb/pull/3119","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/5317799?u=2f6807ffe87dc49ae9e07bdf0089affc75d67f3d&v=4","url":"https://github.com/chasestarr","login":"chasestarr"},"createdAt":"2020-03-26T09:36:30Z","number":3119,"changedFiles":2,"additions":6,"deletions":2,"baseRepository":{"name":"baseweb","url":"https://github.com/uber/baseweb","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/538264?v=4","login":"uber","url":"https://github.com/uber"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkzOTY1MDAz","title":"Added VariableV2 and VarHandleOp in python API of tesorflow","url":"https://github.com/tensorflow/tensorflow/pull/37925","state":"CLOSED","mergedBy":null,"createdAt":"2020-03-26T05:27:07Z","number":37925,"changedFiles":1,"additions":94,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkzNDgxODcy","title":"Modified docstring for minlex","url":"https://github.com/sympy/sympy/pull/18949","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/90703?u=71efaf421eece4f1d4d342751045acdd15108c50&v=4","url":"https://github.com/smichr","login":"smichr"},"createdAt":"2020-03-25T09:39:40Z","number":18949,"changedFiles":1,"additions":9,"deletions":6,"baseRepository":{"name":"sympy","url":"https://github.com/sympy/sympy","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/260832?v=4","login":"sympy","url":"https://github.com/sympy"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkzNDU3NDQ2","title":"Added New book dao tests","url":"https://github.com/kiwix/kiwix-android/pull/1958","state":"CLOSED","mergedBy":null,"createdAt":"2020-03-25T08:43:57Z","number":1958,"changedFiles":1,"additions":90,"deletions":0,"baseRepository":{"name":"kiwix-android","url":"https://github.com/kiwix/kiwix-android","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/826219?v=4","login":"kiwix","url":"https://github.com/kiwix"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkyODI5NzM5","title":"Changed message for opening link in new tab dialog","url":"https://github.com/kiwix/kiwix-android/pull/1951","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/3358282?v=4","url":"https://github.com/macgills","login":"macgills"},"createdAt":"2020-03-24T07:46:29Z","number":1951,"changedFiles":1,"additions":2,"deletions":2,"baseRepository":{"name":"kiwix-android","url":"https://github.com/kiwix/kiwix-android","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/826219?v=4","login":"kiwix","url":"https://github.com/kiwix"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkyNzc5NTI3","title":"Add behavioral note to VariableV2 and VarhandleOp","url":"https://github.com/tensorflow/tensorflow/pull/37855","state":"CLOSED","mergedBy":null,"createdAt":"2020-03-24T05:09:43Z","number":37855,"changedFiles":2,"additions":7,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkyNzY2NzIy","title":"Added example and description about numpy_function() in Dataset.map()","url":"https://github.com/tensorflow/tensorflow/pull/37853","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-24T04:19:08Z","number":37853,"changedFiles":1,"additions":17,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkyNDAyOTI2","title":"Modified TensorScatterAdd to correctly specify examples for shape of tensor","url":"https://github.com/tensorflow/tensorflow/pull/37832","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-23T13:58:48Z","number":37832,"changedFiles":1,"additions":7,"deletions":6,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkyMzA4MDUy","title":"Removed unnecessary examples for shape attribute which is not there in tensor_scatter_nd_add","url":"https://github.com/tensorflow/java/pull/35","state":"CLOSED","mergedBy":null,"createdAt":"2020-03-23T10:51:46Z","number":35,"changedFiles":1,"additions":7,"deletions":6,"baseRepository":{"name":"java","url":"https://github.com/tensorflow/java","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkyMTcxNjYw","title":"Modified spacing and comments in interpreter code in order to show it in codelabs","url":"https://github.com/tensorflow/examples/pull/178","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/47573996?u=802a3f06345c20b7ec61bcd70779bbd88e6bc56b&v=4","url":"https://github.com/TensorFlow-Examples-Copybara","login":"TensorFlow-Examples-Copybara"},"createdAt":"2020-03-23T05:44:31Z","number":178,"changedFiles":1,"additions":1,"deletions":3,"baseRepository":{"name":"examples","url":"https://github.com/tensorflow/examples","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkyMTYxMjc3","title":"Added description of effect of regularization on validation and test","url":"https://github.com/tensorflow/tensorflow/pull/37816","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-23T05:11:44Z","number":37816,"changedFiles":1,"additions":6,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkxOTY4ODE2","title":"Modified expand_path in config_parser to add environment var for mypy_path","url":"https://github.com/python/mypy/pull/8574","state":"CLOSED","mergedBy":null,"createdAt":"2020-03-22T07:43:55Z","number":8574,"changedFiles":1,"additions":4,"deletions":0,"baseRepository":{"name":"mypy","url":"https://github.com/python/mypy","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/1525981?v=4","login":"python","url":"https://github.com/python"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzkxOTYwMDI5","title":"Added example in the doc for TypeVar in using generic classes","url":"https://github.com/python/mypy/pull/8573","state":"CLOSED","mergedBy":null,"createdAt":"2020-03-22T05:38:59Z","number":8573,"changedFiles":1,"additions":38,"deletions":0,"baseRepository":{"name":"mypy","url":"https://github.com/python/mypy","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/1525981?v=4","login":"python","url":"https://github.com/python"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg4MTg3MTgx","title":" Added evaluation metric mean_absolute_relative_error","url":"https://github.com/scikit-learn/scikit-learn/pull/16689","state":"CLOSED","mergedBy":null,"createdAt":"2020-03-14T06:43:13Z","number":16689,"changedFiles":10,"additions":162,"deletions":5,"baseRepository":{"name":"scikit-learn","url":"https://github.com/scikit-learn/scikit-learn","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/365630?v=4","login":"scikit-learn","url":"https://github.com/scikit-learn"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg4MTY2Nzc4","title":"Added preprocessing and corrected example of RGB images before feeding rgb_to_yub","url":"https://github.com/tensorflow/tensorflow/pull/37592","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-14T05:28:38Z","number":37592,"changedFiles":1,"additions":8,"deletions":8,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg3ODA4OTcz","title":"Added pytype in tfds/core/lazy_imports_lib.py patch-9","url":"https://github.com/tensorflow/datasets/pull/1642","state":"OPEN","mergedBy":null,"createdAt":"2020-03-13T14:32:36Z","number":1642,"changedFiles":1,"additions":22,"deletions":20,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg3NzgyMjI5","title":"Added description for call() in tf.keras.layers.Layer","url":"https://github.com/tensorflow/tensorflow/pull/37574","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-13T13:39:28Z","number":37574,"changedFiles":1,"additions":6,"deletions":1,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg3NjYwMDQz","title":"Added code for preprocessing of YUV images before feeding yuv_to_rgb","url":"https://github.com/tensorflow/tensorflow/pull/37565","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-13T08:48:58Z","number":37565,"changedFiles":1,"additions":25,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg3MjU5MDU4","title":"Corrected order of parameters in keras WideDeepModel","url":"https://github.com/tensorflow/tensorflow/pull/37539","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-12T13:57:32Z","number":37539,"changedFiles":1,"additions":5,"deletions":5,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg3MjUwMTU0","title":"Added doc and examples for tf.keras.losses.get","url":"https://github.com/tensorflow/tensorflow/pull/37538","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-12T13:41:13Z","number":37538,"changedFiles":1,"additions":21,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg3MTcxMDQy","title":"Fixed broken link for Bug & Performance issues","url":"https://github.com/tensorflow/community/pull/216","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/9475?v=4","url":"https://github.com/ewilderj","login":"ewilderj"},"createdAt":"2020-03-12T10:49:48Z","number":216,"changedFiles":1,"additions":2,"deletions":1,"baseRepository":{"name":"community","url":"https://github.com/tensorflow/community","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg3MTU0NDY5","title":" Added code and descriptions for complete beginners in overview.ipynb","url":"https://github.com/tensorflow/datasets/pull/1633","state":"CLOSED","mergedBy":null,"createdAt":"2020-03-12T10:16:34Z","number":1633,"changedFiles":1,"additions":28,"deletions":1,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg3MTA3NzU0","title":"Added example related to top_k parameter in tf.keras.metrics.Precision","url":"https://github.com/tensorflow/tensorflow/pull/37528","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-03-12T08:34:26Z","number":37528,"changedFiles":1,"additions":12,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg0NjUzNjI3","title":"Added pytype in tfds/core/hashing.py patch-8","url":"https://github.com/tensorflow/datasets/pull/1592","state":"OPEN","mergedBy":null,"createdAt":"2020-03-06T06:18:21Z","number":1592,"changedFiles":1,"additions":6,"deletions":4,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg0NjQxMjUx","title":"Added pytype in tfds/core/file_format_adapter.py patch-7","url":"https://github.com/tensorflow/datasets/pull/1591","state":"OPEN","mergedBy":null,"createdAt":"2020-03-06T05:27:59Z","number":1591,"changedFiles":2,"additions":52,"deletions":19,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg0MDgxMzI2","title":"Added pytype in tfds/core/example_serializer.py patch-6","url":"https://github.com/tensorflow/datasets/pull/1578","state":"OPEN","mergedBy":null,"createdAt":"2020-03-05T05:51:54Z","number":1578,"changedFiles":2,"additions":31,"deletions":11,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzg0MDY5Nzk5","title":"Added pytype in tfds/core/example_parser.py patch-5","url":"https://github.com/tensorflow/datasets/pull/1576","state":"OPEN","mergedBy":null,"createdAt":"2020-03-05T05:06:18Z","number":1576,"changedFiles":2,"additions":22,"deletions":9,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzgzNTkwMTcy","title":"Added pytype in tfds/core/dataset_utils.py patch-4","url":"https://github.com/tensorflow/datasets/pull/1570","state":"OPEN","mergedBy":null,"createdAt":"2020-03-04T14:25:28Z","number":1570,"changedFiles":2,"additions":42,"deletions":13,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzgzNDQ4ODc1","title":"Added pytype in tfds/core/dataset_info.py patch-3","url":"https://github.com/tensorflow/datasets/pull/1569","state":"OPEN","mergedBy":null,"createdAt":"2020-03-04T09:59:07Z","number":1569,"changedFiles":1,"additions":77,"deletions":59,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzgyNDY0ODAy","title":"Added pytype in tfds/core patch-2","url":"https://github.com/tensorflow/datasets/pull/1554","state":"OPEN","mergedBy":null,"createdAt":"2020-03-02T15:58:16Z","number":1554,"changedFiles":2,"additions":223,"deletions":106,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzgyMTg2NjQx","title":"Added pytype in tfds/core patch-1","url":"https://github.com/tensorflow/datasets/pull/1550","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/46831603?v=4","url":"https://github.com/tfds-copybara","login":"tfds-copybara"},"createdAt":"2020-03-02T05:42:03Z","number":1550,"changedFiles":2,"additions":42,"deletions":8,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzgxODU4Njg5","title":"Specifying about representative_datasets in TfLiteConverter","url":"https://github.com/tensorflow/tensorflow/pull/37192","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-02-29T14:28:26Z","number":37192,"changedFiles":2,"additions":4,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzgxODU1NDYy","title":"Corrected the default value for name param in Nadam","url":"https://github.com/tensorflow/tensorflow/pull/37188","state":"CLOSED","mergedBy":null,"createdAt":"2020-02-29T14:03:05Z","number":37188,"changedFiles":1,"additions":1,"deletions":1,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzgxODE4Njg0","title":"Added code to insert tfds dir into sys.path","url":"https://github.com/tensorflow/datasets/pull/1545","state":"CLOSED","mergedBy":null,"createdAt":"2020-02-29T08:38:18Z","number":1545,"changedFiles":1,"additions":3,"deletions":0,"baseRepository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc5MDE2MTEw","title":"Modified metric_utils.py to fix conflicts with floatx and float32","url":"https://github.com/tensorflow/tensorflow/pull/37020","state":"CLOSED","mergedBy":null,"createdAt":"2020-02-24T14:20:44Z","number":37020,"changedFiles":1,"additions":1,"deletions":1,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4OTUyODQ0","title":"Modified doc for specifically mentioning about saving optimizer","url":"https://github.com/tensorflow/docs/pull/1472","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/47575114?u=14981fca962fe7d59cb7ab71cc53773edab7f494&v=4","url":"https://github.com/TensorFlow-Docs-Copybara","login":"TensorFlow-Docs-Copybara"},"createdAt":"2020-02-24T11:59:40Z","number":1472,"changedFiles":1,"additions":8,"deletions":8,"baseRepository":{"name":"docs","url":"https://github.com/tensorflow/docs","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4OTAxMDU0","title":"Added reduce_variance for RaggedTensor with extra optimization","url":"https://github.com/tensorflow/tensorflow/pull/37014","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/in/44061?v=4","url":"https://github.com/apps/copybara-service","login":"copybara-service"},"createdAt":"2020-02-24T09:59:46Z","number":37014,"changedFiles":4,"additions":105,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4NzExNjM2","title":"Added doc for all application models for decode_prediction() and preprocess_input()","url":"https://github.com/tensorflow/tensorflow/pull/36995","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-02-23T14:27:24Z","number":36995,"changedFiles":8,"additions":189,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4NzEwMjM0","title":"Added doc in inception_resnet_v2 for decode_prediction() and preprocess_input()","url":"https://github.com/tensorflow/tensorflow/pull/36994","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-02-23T14:14:15Z","number":36994,"changedFiles":1,"additions":25,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4NzA5MTM2","title":"Added doc in DenseNet for decode_prediction() and preprocess_input()","url":"https://github.com/tensorflow/tensorflow/pull/36993","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-02-23T14:05:28Z","number":36993,"changedFiles":1,"additions":25,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4NzA4NDAy","title":"Added doc in MobileNet for decode_predictions() and preprocess_input()","url":"https://github.com/tensorflow/tensorflow/pull/36992","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-02-23T13:57:39Z","number":36992,"changedFiles":1,"additions":25,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4NzAxMDM3","title":"Added example of from_tensors and from_tensor_slices","url":"https://github.com/tensorflow/tensorflow/pull/36989","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-02-23T12:38:54Z","number":36989,"changedFiles":1,"additions":10,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4MjA1MzIx","title":"Added doc corresponding to decode_prediction() and preprocess_input()","url":"https://github.com/tensorflow/tensorflow/pull/36951","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-02-21T10:14:44Z","number":36951,"changedFiles":1,"additions":22,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mzc4MTM3MjQ5","title":"Modifying keras.py to print the KeyError with new line \\\\n","url":"https://github.com/tensorflow/estimator/pull/51","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/323199?u=dd45e7615e210711761056afbfc44c8679d87a87&v=4","url":"https://github.com/mihaimaruseac","login":"mihaimaruseac"},"createdAt":"2020-02-21T07:08:28Z","number":51,"changedFiles":2,"additions":20,"deletions":3,"baseRepository":{"name":"estimator","url":"https://github.com/tensorflow/estimator","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzcxMTc1NDAz","title":"Fix formatting of ops_version.md","url":"https://github.com/tensorflow/tensorflow/pull/36479","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-02-05T04:20:12Z","number":36479,"changedFiles":1,"additions":3,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzY5NTEwMjYz","title":"Gradient Doc Changed for v2","url":"https://github.com/tensorflow/tensorflow/pull/36365","state":"CLOSED","mergedBy":null,"createdAt":"2020-01-31T10:21:07Z","number":36365,"changedFiles":1,"additions":16,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzY5NDg1MTI3","title":"embedding_lookup_sparse divide by zero fixed","url":"https://github.com/tensorflow/tensorflow/pull/36364","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/in/44061?v=4","url":"https://github.com/apps/copybara-service","login":"copybara-service"},"createdAt":"2020-01-31T09:20:35Z","number":36364,"changedFiles":2,"additions":25,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzY3MzEwNjA1","title":"Python version corrected in doc","url":"https://github.com/tensorflow/docs/pull/1435","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/47575114?u=14981fca962fe7d59cb7ab71cc53773edab7f494&v=4","url":"https://github.com/TensorFlow-Docs-Copybara","login":"TensorFlow-Docs-Copybara"},"createdAt":"2020-01-27T04:50:23Z","number":1435,"changedFiles":2,"additions":2,"deletions":1,"baseRepository":{"name":"docs","url":"https://github.com/tensorflow/docs","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzY3MTMyNzEx","title":"Gradient doc changed to accurately show the returned params","url":"https://github.com/tensorflow/tensorflow/pull/36206","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/33434372?u=04b846f1363b0968dd000a320b908dd60b95d938&v=4","url":"https://github.com/tensorflow-copybara","login":"tensorflow-copybara"},"createdAt":"2020-01-25T16:49:54Z","number":36206,"changedFiles":1,"additions":16,"deletions":2,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzY3MTI2MDk0","title":"Quantile Huber Loss to predict Specific Quantile Value","url":"https://github.com/tensorflow/tensorflow/pull/36204","state":"CLOSED","mergedBy":null,"createdAt":"2020-01-25T15:24:48Z","number":36204,"changedFiles":2,"additions":161,"deletions":1,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzYyOTY0NTc3","title":"CUDA and requirements","url":"https://github.com/NVlabs/stylegan/pull/11","state":"CLOSED","mergedBy":null,"createdAt":"2020-01-15T05:32:01Z","number":11,"changedFiles":2,"additions":127,"deletions":0,"baseRepository":{"name":"stylegan","url":"https://github.com/NVlabs/stylegan","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/2695301?v=4","login":"NVlabs","url":"https://github.com/NVlabs"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzI0OTk2OTQ0","title":"PR4","url":"https://github.com/nischaypandey/HF1/pull/4","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/26094362?u=d320e78775be2cd716b0e941a49aef1f8859563c&v=4","url":"https://github.com/nischaypandey","login":"nischaypandey"},"createdAt":"2019-10-06T03:33:23Z","number":4,"changedFiles":1,"additions":2,"deletions":0,"baseRepository":{"name":"HF1","url":"https://github.com/nischaypandey/HF1","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/26094362?u=d320e78775be2cd716b0e941a49aef1f8859563c&v=4","login":"nischaypandey","url":"https://github.com/nischaypandey"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzI0OTk2ODgx","title":"PR3","url":"https://github.com/nischaypandey/HF1/pull/3","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/26094362?u=d320e78775be2cd716b0e941a49aef1f8859563c&v=4","url":"https://github.com/nischaypandey","login":"nischaypandey"},"createdAt":"2019-10-06T03:31:54Z","number":3,"changedFiles":1,"additions":2,"deletions":0,"baseRepository":{"name":"HF1","url":"https://github.com/nischaypandey/HF1","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/26094362?u=d320e78775be2cd716b0e941a49aef1f8859563c&v=4","login":"nischaypandey","url":"https://github.com/nischaypandey"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzI0OTk2Nzkw","title":"PR2","url":"https://github.com/nischaypandey/HF1/pull/2","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/26094362?u=d320e78775be2cd716b0e941a49aef1f8859563c&v=4","url":"https://github.com/nischaypandey","login":"nischaypandey"},"createdAt":"2019-10-06T03:30:15Z","number":2,"changedFiles":1,"additions":2,"deletions":0,"baseRepository":{"name":"HF1","url":"https://github.com/nischaypandey/HF1","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/26094362?u=d320e78775be2cd716b0e941a49aef1f8859563c&v=4","login":"nischaypandey","url":"https://github.com/nischaypandey"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzI0OTk2NzI1","title":"PR1","url":"https://github.com/nischaypandey/HF1/pull/1","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/26094362?u=d320e78775be2cd716b0e941a49aef1f8859563c&v=4","url":"https://github.com/nischaypandey","login":"nischaypandey"},"createdAt":"2019-10-06T03:28:47Z","number":1,"changedFiles":1,"additions":2,"deletions":0,"baseRepository":{"name":"HF1","url":"https://github.com/nischaypandey/HF1","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/26094362?u=d320e78775be2cd716b0e941a49aef1f8859563c&v=4","login":"nischaypandey","url":"https://github.com/nischaypandey"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzE5NTg0OTgz","title":"JSON Related errors are resolved and json files are compatible to json in python","url":"https://github.com/DataTurks-Engg/Entity-Recognition-In-Resumes-SpaCy/pull/17","state":"CLOSED","mergedBy":null,"createdAt":"2019-09-20T07:00:46Z","number":17,"changedFiles":6742,"additions":7423541,"deletions":228,"baseRepository":{"name":"Entity-Recognition-In-Resumes-SpaCy","url":"https://github.com/DataTurks-Engg/Entity-Recognition-In-Resumes-SpaCy","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/39724935?v=4","login":"DataTurks-Engg","url":"https://github.com/DataTurks-Engg"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzE4NjQyMzk5","title":"Added mean_absolute_percentage_error in metrics fixes #10708","url":"https://github.com/scikit-learn/scikit-learn/pull/15007","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/630936?u=b5970c1f09aabdac20bd07baa3dccfb424ec0d5d&v=4","url":"https://github.com/rth","login":"rth"},"createdAt":"2019-09-18T06:03:48Z","number":15007,"changedFiles":10,"additions":207,"deletions":46,"baseRepository":{"name":"scikit-learn","url":"https://github.com/scikit-learn/scikit-learn","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/365630?v=4","login":"scikit-learn","url":"https://github.com/scikit-learn"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzE3MDI2OTg3","title":"Quantile Huber Loss to predict Specific Quantile Value","url":"https://github.com/tensorflow/tensorflow/pull/32473","state":"CLOSED","mergedBy":null,"createdAt":"2019-09-12T18:11:26Z","number":32473,"changedFiles":0,"additions":0,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzE3MDI0NjAx","title":"Quantile Huber Loss to predict Specific Quantile Value","url":"https://github.com/tensorflow/tensorflow/pull/32472","state":"CLOSED","mergedBy":null,"createdAt":"2019-09-12T18:04:44Z","number":32472,"changedFiles":4479,"additions":243601,"deletions":109886,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzE2NzQyNjUy","title":"Quantile Huber Loss to predict Specific Quantile Value","url":"https://github.com/tensorflow/tensorflow/pull/32455","state":"CLOSED","mergedBy":null,"createdAt":"2019-09-12T06:00:10Z","number":32455,"changedFiles":2,"additions":170,"deletions":0,"baseRepository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","login":"tensorflow","url":"https://github.com/tensorflow"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzA1OTM4NTE2","title":"Closing bracket was missing","url":"https://github.com/netrack/keras-metrics/pull/43","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/1778407?u=6403dc6c797b195dfd01e485afc8680ba3ef9972&v=4","url":"https://github.com/ybubnov","login":"ybubnov"},"createdAt":"2019-08-09T10:48:13Z","number":43,"changedFiles":1,"additions":1,"deletions":1,"baseRepository":{"name":"keras-metrics","url":"https://github.com/netrack/keras-metrics","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/10380772?v=4","login":"netrack","url":"https://github.com/netrack"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzAzNDk3NjY0","title":"Issue Fix #6280","url":"https://github.com/fossasia/open-event-server/pull/6289","state":"CLOSED","mergedBy":null,"createdAt":"2019-08-01T18:13:43Z","number":6289,"changedFiles":1,"additions":6,"deletions":0,"baseRepository":{"name":"open-event-server","url":"https://github.com/fossasia/open-event-server","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/6295529?v=4","login":"fossasia","url":"https://github.com/fossasia"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzAzNDcwNzYz","title":"check integration default check","url":"https://github.com/fossasia/open-event-server/pull/6288","state":"CLOSED","mergedBy":null,"createdAt":"2019-08-01T16:51:30Z","number":6288,"changedFiles":2,"additions":2,"deletions":1,"baseRepository":{"name":"open-event-server","url":"https://github.com/fossasia/open-event-server","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/6295529?v=4","login":"fossasia","url":"https://github.com/fossasia"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzAxNDAwNjgx","title":"Replaced Depricated tf.contrib.deprecated.scalar_summary with tf.compat.v1.summary.scalar","url":"https://github.com/google/mentornet/pull/8","state":"CLOSED","mergedBy":null,"createdAt":"2019-07-26T05:29:39Z","number":8,"changedFiles":2,"additions":3,"deletions":2,"baseRepository":{"name":"mentornet","url":"https://github.com/google/mentornet","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/1342004?v=4","login":"google","url":"https://github.com/google"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzAxMzk5NTg5","title":"Comments","url":"https://github.com/ashutosh1919/mentornet/pull/1","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919","login":"ashutosh1919"},"createdAt":"2019-07-26T05:23:10Z","number":1,"changedFiles":1,"additions":1,"deletions":0,"baseRepository":{"name":"mentornet","url":"https://github.com/ashutosh1919/mentornet","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","login":"ashutosh1919","url":"https://github.com/ashutosh1919"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzAxMTE4NDY2","title":"Removed Unnecessary imports","url":"https://github.com/C-Aniruddh/DeepConversation/pull/1","state":"CLOSED","mergedBy":null,"createdAt":"2019-07-25T12:21:04Z","number":1,"changedFiles":1,"additions":0,"deletions":2,"baseRepository":{"name":"DeepConversation","url":"https://github.com/C-Aniruddh/DeepConversation","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/6713004?u=805b5777ff6b00f95e9aecf1f848622eeec84ff9&v=4","login":"C-Aniruddh","url":"https://github.com/C-Aniruddh"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzAxMDg1Mzc5","title":"Removed Unnecessary import","url":"https://github.com/facebook/FAI-PEP/pull/326","state":"CLOSED","mergedBy":null,"createdAt":"2019-07-25T10:42:49Z","number":326,"changedFiles":1,"additions":0,"deletions":1,"baseRepository":{"name":"FAI-PEP","url":"https://github.com/facebook/FAI-PEP","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/69631?v=4","login":"facebook","url":"https://github.com/facebook"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzAxMDY1ODY4","title":"Replaced Depricated tf.contrib.deprecated.scalar_summary with tf.compat.v1.summary.scalar","url":"https://github.com/google/mentornet/pull/7","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/13424689?u=5a623978c86d2ffb6f5c46764cf57e71c5ced884&v=4","url":"https://github.com/roadjiang","login":"roadjiang"},"createdAt":"2019-07-25T09:48:38Z","number":7,"changedFiles":2,"additions":3,"deletions":2,"baseRepository":{"name":"mentornet","url":"https://github.com/google/mentornet","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/1342004?v=4","login":"google","url":"https://github.com/google"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MzAxMDA1NDA3","title":"Replaced Depricated tf.contrib.deprecated.scalar_summary with tf.compat.v1.summary.scalar","url":"https://github.com/google/mentornet/pull/6","state":"CLOSED","mergedBy":null,"createdAt":"2019-07-25T06:48:42Z","number":6,"changedFiles":2,"additions":2,"deletions":2,"baseRepository":{"name":"mentornet","url":"https://github.com/google/mentornet","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/1342004?v=4","login":"google","url":"https://github.com/google"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mjk5NjIwNDQx","title":"Quantile Huber Loss to predict Specific Quantile Value","url":"https://github.com/keras-team/keras/pull/13129","state":"CLOSED","mergedBy":null,"createdAt":"2019-07-21T08:44:09Z","number":13129,"changedFiles":7,"additions":133,"deletions":70,"baseRepository":{"name":"keras","url":"https://github.com/keras-team/keras","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34455048?v=4","login":"keras-team","url":"https://github.com/keras-team"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mjk3MzIzMjcz","title":"Huber Loss Function for both kind of behavior. ","url":"https://github.com/keras-team/keras/pull/13104","state":"CLOSED","mergedBy":null,"createdAt":"2019-07-13T15:14:42Z","number":13104,"changedFiles":2,"additions":22,"deletions":0,"baseRepository":{"name":"keras","url":"https://github.com/keras-team/keras","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/34455048?v=4","login":"keras-team","url":"https://github.com/keras-team"}}},{"id":"MDExOlB1bGxSZXF1ZXN0Mjg4NTMyMzQz","title":"RC Details","url":"https://github.com/abhinavhinger12/ala/pull/2","state":"MERGED","mergedBy":{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919","login":"ashutosh1919"},"createdAt":"2019-06-15T05:19:37Z","number":2,"changedFiles":3,"additions":555,"deletions":0,"baseRepository":{"name":"ala","url":"https://github.com/abhinavhinger12/ala","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/4638215?u=9c8d81f075a4206c9ce6386e7a97babce38c1037&v=4","login":"abhinavhinger12","url":"https://github.com/abhinavhinger12"}}},{"id":"MDExOlB1bGxSZXF1ZXN0MjQzMzQxOTg5","title":"Face Verification and Recognition","url":"https://github.com/trekhleb/homemade-machine-learning/pull/14","state":"CLOSED","mergedBy":null,"createdAt":"2019-01-09T13:56:53Z","number":14,"changedFiles":268,"additions":1419,"deletions":1,"baseRepository":{"name":"homemade-machine-learning","url":"https://github.com/trekhleb/homemade-machine-learning","owner":{"avatarUrl":"https://avatars.githubusercontent.com/u/3000285?u=1e62782f227030b78b7aa78cbbcab5f8a24e658a&v=4","login":"trekhleb","url":"https://github.com/trekhleb"}}}],"h0":54,"bA":13}'
        );
        class v extends d.Component {
          render() {
            let t = {
              labels: ["Open", "Merged", "Closed"],
              datasets: [
                {
                  data: [f.bA, f.h0, f.QW],
                  backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
                  hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
                },
              ],
            };
            return (0, h.jsxs)("div", {
              className: "pr-chart",
              children: [
                h.jsx(g.Fade, {
                  bottom: !0,
                  duration: 2e3,
                  distance: "20px",
                  children: h.jsx("h2", {
                    className: "pr-chart-header",
                    children: "Pull Request Distribution",
                  }),
                }),
                h.jsx(m.Doughnut, {
                  data: t,
                  options: {
                    padding: "0",
                    margin: "0",
                    responsive: !0,
                    maintainAspectRatio: !0,
                    animation: { duration: 4e3 },
                  },
                }),
              ],
            });
          }
        }
        s(7033);
        let w = JSON.parse(
          '{"QW":51,"aT":[{"id":"I_kwDOJPVIV85h7zXb","closed":true,"title":"Gradio demo for context-cluster","createdAt":"2023-03-28T01:43:37Z","url":"https://github.com/ashutosh1919/context-cluster-pytorch/issues/1","number":1,"assignees":{"nodes":[]},"repository":{"name":"context-cluster-pytorch","url":"https://github.com/ashutosh1919/context-cluster-pytorch","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOKO8qTs5xzjRf","closed":false,"title":"Class-Balanced Loss based on Effectivene number of examples","createdAt":"2022-06-30T00:02:58Z","url":"https://github.com/keras-team/tf-keras/issues/538","number":538,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"},{"avatarUrl":"https://avatars.githubusercontent.com/u/78194266?u=1270684640732eaea36ac2d1725160fec0747089&v=4","name":"Divyashree Sreepathihalli","url":"https://github.com/divyashreepathihalli"}]},"repository":{"name":"tf-keras","url":"https://github.com/keras-team/tf-keras","owner":{"login":"keras-team","avatarUrl":"https://avatars.githubusercontent.com/u/34455048?v=4","url":"https://github.com/keras-team"}}},{"id":"I_kwDOD8zMLc5M2vE_","closed":true,"title":"Class-Balanced Loss based on effective number of samples","createdAt":"2022-06-29T23:59:05Z","url":"https://github.com/keras-team/keras-cv/issues/548","number":548,"assignees":{"nodes":[]},"repository":{"name":"keras-cv","url":"https://github.com/keras-team/keras-cv","owner":{"login":"keras-team","avatarUrl":"https://avatars.githubusercontent.com/u/34455048?v=4","url":"https://github.com/keras-team"}}},{"id":"I_kwDOCX3y2s5Mx1Ch","closed":true,"title":"Class-Balanced Loss Based on Effective Number of Samples","createdAt":"2022-06-29T03:39:00Z","url":"https://github.com/tensorflow/addons/issues/2732","number":2732,"assignees":{"nodes":[]},"repository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"I_kwDOG_vYHM5Gfliz","closed":true,"title":"Adding @L-Pandey as doc contributor.","createdAt":"2022-03-27T22:31:19Z","url":"https://github.com/ashutosh1919/explainable-cnn/issues/1","number":1,"assignees":{"nodes":[]},"repository":{"name":"explainable-cnn","url":"https://github.com/ashutosh1919/explainable-cnn","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5Fl_U2","closed":false,"title":"Remove react-responsive","createdAt":"2022-03-13T13:49:15Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/73","number":73,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"},{"avatarUrl":"https://avatars.githubusercontent.com/u/62668827?u=6c31a500727e963282838c1570eea225a7626f6f&v=4","name":"Bilal Essofyany","url":"https://github.com/essofyany"}]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5FLsXg","closed":true,"title":"Remove Triangle, Square and Hexagon","createdAt":"2022-03-06T19:21:21Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/60","number":60,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/59080942?u=4b2f4f8a2ba229445c92d5bcccda64c7a887df74&v=4","name":"Sachin Chaurasiya","url":"https://github.com/Sachin-chaurasiya"}]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5FJjxd","closed":true,"title":"Create seperate folder for constants","createdAt":"2022-03-04T23:32:11Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/49","number":49,"assignees":{"nodes":[]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOGEx53s5FFKhm","closed":true,"title":"Making reports multi-theme","createdAt":"2022-03-03T22:32:44Z","url":"https://github.com/ashutosh1919/report-curator/issues/5","number":5,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"}]},"repository":{"name":"report-curator","url":"https://github.com/ashutosh1919/report-curator","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5E6xrp","closed":true,"title":"Decouple Web app & Package","createdAt":"2022-03-02T02:48:38Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/43","number":43,"assignees":{"nodes":[]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5EdJXn","closed":true,"title":"Adding Anaghaa as a contributor for design","createdAt":"2022-02-23T19:28:43Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/34","number":34,"assignees":{"nodes":[]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5EdHXm","closed":true,"title":"FavIcon not showing in the deployed website","createdAt":"2022-02-23T19:19:45Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/33","number":33,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"}]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5EdADi","closed":true,"title":"Remove react from peer dependencies without crash","createdAt":"2022-02-23T18:45:44Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/32","number":32,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"}]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5EQWQy","closed":true,"title":"Create Footer for the website","createdAt":"2022-02-20T21:14:51Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/27","number":27,"assignees":{"nodes":[]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5EPM9I","closed":true,"title":"React-Live integration to show editable code snippets on the website","createdAt":"2022-02-19T20:12:29Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/24","number":24,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"}]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5DnWqW","closed":true,"title":"Publish NPM package for the project","createdAt":"2022-02-12T18:12:43Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/14","number":14,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"}]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5DnWbL","closed":true,"title":"Deploying current version of web app to Netlify","createdAt":"2022-02-12T18:11:57Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/13","number":13,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"}]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5DnWQ5","closed":true,"title":"Creating deploy preview workflows","createdAt":"2022-02-12T18:11:26Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/12","number":12,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"}]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOG0_8uc5DiDtD","closed":true,"title":"Test issue to check Webhook integration with discord bot","createdAt":"2022-02-11T19:27:08Z","url":"https://github.com/ashutosh1919/react-awesome-shapes/issues/6","number":6,"assignees":{"nodes":[]},"repository":{"name":"react-awesome-shapes","url":"https://github.com/ashutosh1919/react-awesome-shapes","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"I_kwDOA-t3ps5Bln9c","closed":true,"title":"Checking for broken links in .md files","createdAt":"2022-01-12T14:05:02Z","url":"https://github.com/yy/netsci-course/issues/31","number":31,"assignees":{"nodes":[]},"repository":{"name":"netsci-course","url":"https://github.com/yy/netsci-course","owner":{"login":"yy","avatarUrl":"https://avatars.githubusercontent.com/u/24250?u=8f15defbe4fe2ed12b790722b0597b7b77528f54&v=4","url":"https://github.com/yy"}}},{"id":"I_kwDOA-t3ps5BcjXE","closed":true,"title":"Enable ReviewNB for this repository","createdAt":"2022-01-10T15:02:38Z","url":"https://github.com/yy/netsci-course/issues/27","number":27,"assignees":{"nodes":[]},"repository":{"name":"netsci-course","url":"https://github.com/yy/netsci-course","owner":{"login":"yy","avatarUrl":"https://avatars.githubusercontent.com/u/24250?u=8f15defbe4fe2ed12b790722b0597b7b77528f54&v=4","url":"https://github.com/yy"}}},{"id":"I_kwDOGYXM-c5Ayl3J","closed":true,"title":"[Article Proposal] Fetching GitHub repository Traffic data using API v3","createdAt":"2021-12-22T16:45:25Z","url":"https://github.com/kili-technology/kili-blogger-program/issues/36","number":36,"assignees":{"nodes":[]},"repository":{"name":"kili-blogger-program","url":"https://github.com/kili-technology/kili-blogger-program","owner":{"login":"kili-technology","avatarUrl":"https://avatars.githubusercontent.com/u/50736791?v=4","url":"https://github.com/kili-technology"}}},{"id":"I_kwDOGK1ZZM5APGS8","closed":true,"title":"Please invite me to the GitHub Community Organization","createdAt":"2021-12-12T02:26:57Z","url":"https://github.com/Tech-Phantoms/community/issues/122","number":122,"assignees":{"nodes":[]},"repository":{"name":"community","url":"https://github.com/Tech-Phantoms/community","owner":{"login":"Tech-Phantoms","avatarUrl":"https://avatars.githubusercontent.com/u/61622105?v=4","url":"https://github.com/Tech-Phantoms"}}},{"id":"I_kwDOEOGY2M5AOnXt","closed":true,"title":"Please invite me to the GitHub Community Organization","createdAt":"2021-12-11T15:52:25Z","url":"https://github.com/EddieHubCommunity/support/issues/3089","number":3089,"assignees":{"nodes":[]},"repository":{"name":"support","url":"https://github.com/EddieHubCommunity/support","owner":{"login":"EddieHubCommunity","avatarUrl":"https://avatars.githubusercontent.com/u/66388388?v=4","url":"https://github.com/EddieHubCommunity"}}},{"id":"MDU6SXNzdWU5OTQ4NDc2MTk=","closed":true,"title":"Broken Links and GitHub Workflow","createdAt":"2021-09-13T12:45:59Z","url":"https://github.com/yy/dviz-course/issues/54","number":54,"assignees":{"nodes":[]},"repository":{"name":"dviz-course","url":"https://github.com/yy/dviz-course","owner":{"login":"yy","avatarUrl":"https://avatars.githubusercontent.com/u/24250?u=8f15defbe4fe2ed12b790722b0597b7b77528f54&v=4","url":"https://github.com/yy"}}},{"id":"MDU6SXNzdWU5OTM4NTg5Nzc=","closed":true,"title":"Squashing before merging PR commits","createdAt":"2021-09-11T14:50:57Z","url":"https://github.com/yy/dviz-course/issues/52","number":52,"assignees":{"nodes":[]},"repository":{"name":"dviz-course","url":"https://github.com/yy/dviz-course","owner":{"login":"yy","avatarUrl":"https://avatars.githubusercontent.com/u/24250?u=8f15defbe4fe2ed12b790722b0597b7b77528f54&v=4","url":"https://github.com/yy"}}},{"id":"MDU6SXNzdWU5NzkxMzg1MDA=","closed":true,"title":"Automated testing of syntax errors in Notebooks","createdAt":"2021-08-25T13:16:23Z","url":"https://github.com/yy/dviz-course/issues/39","number":39,"assignees":{"nodes":[]},"repository":{"name":"dviz-course","url":"https://github.com/yy/dviz-course","owner":{"login":"yy","avatarUrl":"https://avatars.githubusercontent.com/u/24250?u=8f15defbe4fe2ed12b790722b0597b7b77528f54&v=4","url":"https://github.com/yy"}}},{"id":"MDU6SXNzdWU5NzcyOTQyMzM=","closed":true,"title":"Rendering Notebook diffs","createdAt":"2021-08-23T18:13:51Z","url":"https://github.com/yy/dviz-course/issues/36","number":36,"assignees":{"nodes":[]},"repository":{"name":"dviz-course","url":"https://github.com/yy/dviz-course","owner":{"login":"yy","avatarUrl":"https://avatars.githubusercontent.com/u/24250?u=8f15defbe4fe2ed12b790722b0597b7b77528f54&v=4","url":"https://github.com/yy"}}},{"id":"MDU6SXNzdWU5NzcwNTgwMDI=","closed":true,"title":"Broken Link","createdAt":"2021-08-23T13:49:05Z","url":"https://github.com/yy/dviz-course/issues/34","number":34,"assignees":{"nodes":[]},"repository":{"name":"dviz-course","url":"https://github.com/yy/dviz-course","owner":{"login":"yy","avatarUrl":"https://avatars.githubusercontent.com/u/24250?u=8f15defbe4fe2ed12b790722b0597b7b77528f54&v=4","url":"https://github.com/yy"}}},{"id":"MDU6SXNzdWU5MDc5OTM5MjQ=","closed":true,"title":"Modify tf.math.reduce_std so that it is compatible with ragged tensors","createdAt":"2021-06-01T07:33:49Z","url":"https://github.com/tensorflow/tensorflow/issues/49941","number":49941,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/81610181?v=4","name":null,"url":"https://github.com/tilakrayal"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU5MDA3MDgxNjg=","closed":true,"title":"reduce_variance gives error in case of RaggedTensor when axis=0","createdAt":"2021-05-25T11:58:36Z","url":"https://github.com/tensorflow/tensorflow/issues/49606","number":49606,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/81610181?v=4","name":null,"url":"https://github.com/tilakrayal"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU4OTI1ODU5MzA=","closed":true,"title":"Windows Bazel build always fails","createdAt":"2021-05-16T03:28:00Z","url":"https://github.com/tensorflow/tensorflow/issues/49210","number":49210,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/323199?u=3606bf51cc6bc14acbb068eb4ae4eacc96083bed&v=4","name":"Mihai Maruseac","url":"https://github.com/mihaimaruseac"},{"avatarUrl":"https://avatars.githubusercontent.com/u/42785357?u=c4fe495e25d054662eadf0964f652122b81e5aff&v=4","name":"Yasir Modak","url":"https://github.com/ymodak"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU4Nzg1MTUwMDE=","closed":true,"title":"Sanity Tests & Unity Test checking fails ","createdAt":"2021-05-07T06:30:41Z","url":"https://github.com/tensorflow/tensorflow/issues/48954","number":48954,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/42785357?u=c4fe495e25d054662eadf0964f652122b81e5aff&v=4","name":"Yasir Modak","url":"https://github.com/ymodak"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU3ODUxNjU2MDA=","closed":false,"title":"The Hover Animation issue for What\'s New Button","createdAt":"2021-01-13T14:45:08Z","url":"https://github.com/ashutosh1919/react-liquidswipe/issues/4","number":4,"assignees":{"nodes":[]},"repository":{"name":"react-liquidswipe","url":"https://github.com/ashutosh1919/react-liquidswipe","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU2OTA5NzE0MzU=","closed":true,"title":"Pretrained models not available","createdAt":"2020-09-02T12:15:36Z","url":"https://github.com/smeetrs/deep_avsr/issues/8","number":8,"assignees":{"nodes":[]},"repository":{"name":"deep_avsr","url":"https://github.com/smeetrs/deep_avsr","owner":{"login":"smeetrs","avatarUrl":"https://avatars.githubusercontent.com/u/29375430?v=4","url":"https://github.com/smeetrs"}}},{"id":"MDU6SXNzdWU2NzU2MzA4NDc=","closed":true,"title":"Need to add new social media","createdAt":"2020-08-09T03:55:15Z","url":"https://github.com/ashutosh1919/masterPortfolio/issues/64","number":64,"assignees":{"nodes":[]},"repository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU2NzMyOTg0MDk=","closed":true,"title":"Need modification in experience cards.","createdAt":"2020-08-05T06:49:09Z","url":"https://github.com/ashutosh1919/masterPortfolio/issues/58","number":58,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/87069619?u=b5a468eb6b520b71f6cdc0f0d94f2f1f1a33123f&v=4","name":"Vyom Rana","url":"https://github.com/Vyomrana02"}]},"repository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU2NzMyOTgxNjg=","closed":true,"title":"Need modifications in Experience tab cards","createdAt":"2020-08-05T06:48:41Z","url":"https://github.com/ashutosh1919/masterPortfolio/issues/57","number":57,"assignees":{"nodes":[]},"repository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU2NzMyNDk0ODE=","closed":false,"title":"Adding Theme containing gradient to every type of color","createdAt":"2020-08-05T04:45:48Z","url":"https://github.com/ashutosh1919/masterPortfolio/issues/56","number":56,"assignees":{"nodes":[]},"repository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU2NzMyNDMwMDg=","closed":false,"title":"Creation of ReadMe Doc to completely explain how to modify portfolio.js","createdAt":"2020-08-05T04:25:44Z","url":"https://github.com/ashutosh1919/masterPortfolio/issues/55","number":55,"assignees":{"nodes":[]},"repository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU2Njk3MzA0MDU=","closed":false,"title":"Org Logo","createdAt":"2020-07-31T11:44:30Z","url":"https://github.com/ashutosh1919/masterPortfolio/issues/40","number":40,"assignees":{"nodes":[]},"repository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU2MDU0Nzg0NDk=","closed":true,"title":"Setting Up Workflow for the project","createdAt":"2020-04-23T12:06:14Z","url":"https://github.com/ashutosh1919/masterPortfolio/issues/2","number":2,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","name":"Ashutosh Hathidara","url":"https://github.com/ashutosh1919"}]},"repository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU2MDI0NDg3NTY=","closed":true,"title":"In ModelCheckpoint, filepath is not accepting batch as formatting parameter.","createdAt":"2020-04-18T12:25:56Z","url":"https://github.com/tensorflow/tensorflow/issues/38668","number":38668,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/6505863?v=4","name":"Rick Chao","url":"https://github.com/rchao"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU2MDIzODIxNjI=","closed":true,"title":"save_freq is not accepting integer value in AverageModelCheckpoint","createdAt":"2020-04-18T05:19:27Z","url":"https://github.com/tensorflow/addons/issues/1701","number":1701,"assignees":{"nodes":[]},"repository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU1OTg4NzQxMDI=","closed":true,"title":"Currently logs param is None for on_train_end() and on_test_end()","createdAt":"2020-04-13T12:56:17Z","url":"https://github.com/tensorflow/tensorflow/issues/38498","number":38498,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/51902062?v=4","name":null,"url":"https://github.com/ravikyram"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU1OTgyNTg0MTQ=","closed":true,"title":"Need of flexible loss function GeneralLoss which can change behavior based on params","createdAt":"2020-04-11T12:41:54Z","url":"https://github.com/tensorflow/addons/issues/1646","number":1646,"assignees":{"nodes":[]},"repository":{"name":"addons","url":"https://github.com/tensorflow/addons","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU1OTU1NjQyODc=","closed":false,"title":"Not able to customize social-cards","createdAt":"2020-04-07T03:29:37Z","url":"https://github.com/apollographql/gatsby-theme-apollo/issues/110","number":110,"assignees":{"nodes":[]},"repository":{"name":"gatsby-theme-apollo","url":"https://github.com/apollographql/gatsby-theme-apollo","owner":{"login":"apollographql","avatarUrl":"https://avatars.githubusercontent.com/u/17189275?v=4","url":"https://github.com/apollographql"}}},{"id":"MDU6SXNzdWU1OTMyNjQ3NTg=","closed":true,"title":"Adding config to override prettier (if set) in any code editor","createdAt":"2020-04-03T09:59:05Z","url":"https://github.com/saadpasta/developerFolio/issues/77","number":77,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/48270786?u=dab5f6dc64923f646b354f47f52af65f44fd9e7e&v=4","name":"Kartik Choudhary","url":"https://github.com/kartikcho"}]},"repository":{"name":"developerFolio","url":"https://github.com/saadpasta/developerFolio","owner":{"login":"saadpasta","avatarUrl":"https://avatars.githubusercontent.com/u/23307811?u=eab46b153eef3f5183930e61898b462447af9219&v=4","url":"https://github.com/saadpasta"}}},{"id":"MDU6SXNzdWU1OTE2NjAzNTE=","closed":true,"title":"Add Animations to Pinned Projects ","createdAt":"2020-04-01T06:24:47Z","url":"https://github.com/ashutosh1919/masterPortfolio/issues/1","number":1,"assignees":{"nodes":[]},"repository":{"name":"masterPortfolio","url":"https://github.com/ashutosh1919/masterPortfolio","owner":{"login":"ashutosh1919","avatarUrl":"https://avatars.githubusercontent.com/u/20843596?u=6deb5872cde2e3ab5bf5d48ece503bc8b5b0bcf6&v=4","url":"https://github.com/ashutosh1919"}}},{"id":"MDU6SXNzdWU1OTAwMDczMDE=","closed":true,"title":"Improve the TFDS Getting Started Documentation","createdAt":"2020-03-30T05:37:01Z","url":"https://github.com/tensorflow/datasets/issues/1762","number":1762,"assignees":{"nodes":[]},"repository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU1ODk1Nzk0NTc=","closed":true,"title":"BrowserRouter and HashRouter works for three Routes only","createdAt":"2020-03-28T13:40:27Z","url":"https://github.com/remix-run/react-router/issues/7223","number":7223,"assignees":{"nodes":[]},"repository":{"name":"react-router","url":"https://github.com/remix-run/react-router","owner":{"login":"remix-run","avatarUrl":"https://avatars.githubusercontent.com/u/64235328?v=4","url":"https://github.com/remix-run"}}},{"id":"MDU6SXNzdWU1ODk1NzY4Nzg=","closed":true,"title":"BrowserRouter and HashRouter works for three Routes only ","createdAt":"2020-03-28T13:24:25Z","url":"https://github.com/facebook/react/issues/18414","number":18414,"assignees":{"nodes":[]},"repository":{"name":"react","url":"https://github.com/facebook/react","owner":{"login":"facebook","avatarUrl":"https://avatars.githubusercontent.com/u/69631?v=4","url":"https://github.com/facebook"}}},{"id":"MDU6SXNzdWU1ODEwNjk1NjU=","closed":true,"title":"Required mean_absolute_relative_error (MARE) ","createdAt":"2020-03-14T06:39:28Z","url":"https://github.com/scikit-learn/scikit-learn/issues/16688","number":16688,"assignees":{"nodes":[]},"repository":{"name":"scikit-learn","url":"https://github.com/scikit-learn/scikit-learn","owner":{"login":"scikit-learn","avatarUrl":"https://avatars.githubusercontent.com/u/365630?v=4","url":"https://github.com/scikit-learn"}}},{"id":"MDU6SXNzdWU1ODEwNDc0MDc=","closed":true,"title":"Example given in tf.image.rgb_to_yub is contadicting with the description.","createdAt":"2020-03-14T05:25:45Z","url":"https://github.com/tensorflow/tensorflow/issues/37591","number":37591,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/46058173?v=4","name":"Vishnuvardhan Janapati","url":"https://github.com/jvishnuvardhan"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU1NzMyNTA1NjQ=","closed":true,"title":"ModuleNotFoundError: No module named \'tensorflow_datasets\'","createdAt":"2020-02-29T08:28:06Z","url":"https://github.com/tensorflow/datasets/issues/1544","number":1544,"assignees":{"nodes":[]},"repository":{"name":"datasets","url":"https://github.com/tensorflow/datasets","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU1Njk4OTI2MTE=","closed":true,"title":"There are no documentations related to decode_predictions() and preprocess_input() in any keras.applications","createdAt":"2020-02-24T14:28:33Z","url":"https://github.com/tensorflow/tensorflow/issues/37021","number":37021,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/46058173?v=4","name":"Vishnuvardhan Janapati","url":"https://github.com/jvishnuvardhan"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU1NTgwODYwMTM=","closed":true,"title":"Need for more flexible Loss Function","createdAt":"2020-01-31T11:50:06Z","url":"https://github.com/tensorflow/tensorflow/issues/36369","number":36369,"assignees":{"nodes":[{"avatarUrl":"https://avatars.githubusercontent.com/u/13326758?u=af9430e7bc177fa3a1a256dd224b0765bd820bcf&v=4","name":"Pavithra Vijay","url":"https://github.com/pavithrasv"}]},"repository":{"name":"tensorflow","url":"https://github.com/tensorflow/tensorflow","owner":{"login":"tensorflow","avatarUrl":"https://avatars.githubusercontent.com/u/15658638?v=4","url":"https://github.com/tensorflow"}}},{"id":"MDU6SXNzdWU0OTQ1NzMwMzc=","closed":true,"title":"I am not able to import Dataset","createdAt":"2019-09-17T11:46:15Z","url":"https://github.com/aerdem4/lofo-importance/issues/26","number":26,"assignees":{"nodes":[]},"repository":{"name":"lofo-importance","url":"https://github.com/aerdem4/lofo-importance","owner":{"login":"aerdem4","avatarUrl":"https://avatars.githubusercontent.com/u/24624210?u=58887e9c09a3c0576a8ce61ba881132ebf4c137c&v=4","url":"https://github.com/aerdem4"}}},{"id":"MDU6SXNzdWU0ODI4MTcwNjE=","closed":false,"title":"Setup Readme file in proper format","createdAt":"2019-08-20T11:58:49Z","url":"https://github.com/NebutechOpenSource/MLGen/issues/1","number":1,"assignees":{"nodes":[]},"repository":{"name":"MLGen","url":"https://github.com/NebutechOpenSource/MLGen","owner":{"login":"NebutechOpenSource","avatarUrl":"https://avatars.githubusercontent.com/u/53137955?u=2abe60da5dfbd4b442e415e6c553f58a21cf9547&v=4","url":"https://github.com/NebutechOpenSource"}}}],"bA":8}'
        );
        class y extends d.Component {
          render() {
            let t = {
              labels: ["Open", "Closed"],
              datasets: [
                {
                  data: [w.bA, w.QW],
                  backgroundColor: ["#28a745", "#d73a49"],
                  hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
                },
              ],
            };
            return (0, h.jsxs)("div", {
              className: "issue-chart",
              children: [
                h.jsx(g.Fade, {
                  bottom: !0,
                  duration: 2e3,
                  distance: "20px",
                  children: h.jsx("h2", {
                    className: "issue-chart-header",
                    children: "Issue Distribution",
                  }),
                }),
                h.jsx(m.Doughnut, {
                  data: t,
                  options: {
                    margin: "0",
                    padding: "0",
                    responsive: !0,
                    maintainAspectRatio: !0,
                    animation: { duration: 4e3 },
                  },
                }),
              ],
            });
          }
        }
        s(8676);
        class x extends d.Component {
          render() {
            let t = this.props.theme;
            return (0, h.jsxs)("div", {
              className: "main-div",
              children: [
                h.jsx("div", {
                  className: "os-charts-header-div",
                  children: h.jsx(g.Fade, {
                    bottom: !0,
                    duration: 2e3,
                    distance: "20px",
                    children: h.jsx("h1", {
                      className: "os-charts-header",
                      style: { color: t.text },
                      children: "Contributions",
                    }),
                  }),
                }),
                (0, h.jsxs)("div", {
                  className: "os-charts-body-div",
                  children: [h.jsx(v, {}), h.jsx(y, {})],
                }),
              ],
            });
          }
        }
        s(1782), s(3027);
        var M = s(3411);
        class D extends d.Component {
          render() {
            return h.jsx("div", {
              className: "organizations-main-div",
              children: h.jsx("ul", {
                className: "dev-icons-orgs",
                children: this.props.logos.map((t) =>
                  h.jsx(
                    M.Ox,
                    {
                      placement: "top",
                      style: { marginBottom: "5px" },
                      overlay: h.jsx(M.u, {
                        id: "tooltip-top",
                        children: h.jsx("strong", { children: t.login }),
                      }),
                      children: h.jsx("li", {
                        className: "organizations-inline",
                        name: t.login,
                        children: h.jsx(g.Fade, {
                          bottom: !0,
                          duration: 2e3,
                          distance: "40px",
                          children: h.jsx("img", {
                            className: "organizations-img",
                            src: t.avatarUrl,
                            alt: t.login,
                          }),
                        }),
                      }),
                    },
                    t.login
                  )
                ),
              }),
            });
          }
        }
        let N = JSON.parse(
          '{"a":[{"login":"openai","avatarUrl":"https://avatars.githubusercontent.com/u/14957082?v=4","__typename":"Organization"},{"login":"sympy","avatarUrl":"https://avatars1.githubusercontent.com/u/260832?v=4","__typename":"Organization"},{"login":"scikit-learn","avatarUrl":"https://avatars2.githubusercontent.com/u/365630?v=4","__typename":"Organization"},{"login":"python","avatarUrl":"https://avatars3.githubusercontent.com/u/1525981?v=4","__typename":"Organization"},{"login":"facebook","avatarUrl":"https://avatars3.githubusercontent.com/u/69631?v=4","__typename":"Organization"},{"login":"ReactTraining","avatarUrl":"https://avatars1.githubusercontent.com/u/11823761?v=4","__typename":"Organization"},{"login":"keras-team","avatarUrl":"https://avatars0.githubusercontent.com/u/34455048?v=4","__typename":"Organization"},{"login":"fossasia","avatarUrl":"https://avatars3.githubusercontent.com/u/6295529?v=4","__typename":"Organization"},{"login":"gatsbyjs","avatarUrl":"https://avatars1.githubusercontent.com/u/12551863?v=4","__typename":"Organization"},{"login":"tensorflow","avatarUrl":"https://avatars1.githubusercontent.com/u/15658638?v=4","__typename":"Organization"},{"login":"kiwix","avatarUrl":"https://avatars3.githubusercontent.com/u/826219?v=4","__typename":"Organization"},{"login":"uber","avatarUrl":"https://avatars3.githubusercontent.com/u/538264?v=4","__typename":"Organization"},{"login":"netrack","avatarUrl":"https://avatars2.githubusercontent.com/u/10380772?v=4","__typename":"Organization"},{"login":"DataTurks-Engg","avatarUrl":"https://avatars1.githubusercontent.com/u/39724935?v=4","__typename":"Organization"},{"login":"google","avatarUrl":"https://avatars1.githubusercontent.com/u/1342004?v=4","__typename":"Organization"},{"login":"apollographql","avatarUrl":"https://avatars0.githubusercontent.com/u/17189275?v=4","__typename":"Organization"},{"login":"NVlabs","avatarUrl":"https://avatars3.githubusercontent.com/u/2695301?v=4","__typename":"Organization"},{"login":"dsc-iiitdmk","avatarUrl":"https://avatars0.githubusercontent.com/u/53558593?v=4","__typename":"Organization"},{"login":"firecampapp","avatarUrl":"https://avatars3.githubusercontent.com/u/45025286?v=4","__typename":"Organization"}]}'
        );
        class U extends d.Component {
          render() {
            let t = this.props.theme;
            return (0, h.jsxs)("div", {
              id: "organizations",
              children: [
                h.jsx("div", {
                  className: "organizations-header-div",
                  children: h.jsx(g.Fade, {
                    bottom: !0,
                    duration: 2e3,
                    distance: "20px",
                    children: h.jsx("h1", {
                      className: "organizations-header",
                      style: { color: t.text },
                      children: "Contributed Organizations",
                    }),
                  }),
                }),
                h.jsx(D, { logos: N.a }),
              ],
            });
          }
        }
        s(9062), s(5963);
        class Z extends d.Component {
          render() {
            let t = this.props.pullRequest;
            "OPEN" === t.state
              ? ((e = {
                  iconifyClass: "octicon:git-pull-request",
                  style: { color: "#28a745" },
                }),
                (s = "#dcffe4"))
              : "MERGED" === t.state
              ? ((e = {
                  iconifyClass: "octicon:git-merge",
                  style: { color: "#6f42c1" },
                }),
                (s = "#f5f0ff"))
              : ((e = {
                  iconifyClass: "octicon:git-pull-request",
                  style: { color: "#d73a49" },
                }),
                (s = "#ffdce0"));
            var e,
              s,
              o,
              r = "#" + t.number + " opened on " + t.createdAt.split("T")[0];
            if (null !== t.mergedBy) {
              let e = t.mergedBy.login;
              o = h.jsx(
                M.Ox,
                {
                  placement: "top",
                  style: { marginBottom: "5px" },
                  overlay: h.jsx(M.u, {
                    id: "tooltip-top",
                    children: h.jsx("strong", { children: `Merged by ${e}` }),
                  }),
                  children: h.jsx("a", {
                    href: t.mergedBy.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: h.jsx("img", {
                      className: "merge-by-img",
                      src: t.mergedBy.avatarUrl,
                      alt: "",
                    }),
                  }),
                },
                e
              );
            } else o = h.jsx("noscript", {});
            return h.jsx(g.Fade, {
              bottom: !0,
              duration: 2e3,
              distance: "40px",
              children: (0, h.jsxs)("div", {
                className: "pull-request-card",
                style: {
                  backgroundColor: s,
                  border: `1px solid ${e.style.color}`,
                },
                children: [
                  (0, h.jsxs)("div", {
                    className: "pr-top",
                    children: [
                      (0, h.jsxs)("div", {
                        className: "pr-header",
                        children: [
                          h.jsx("span", {
                            className: "iconify pr-icons",
                            "data-icon": e.iconifyClass,
                            style: e.style,
                            "data-inline": "false",
                          }),
                          (0, h.jsxs)("div", {
                            className: "pr-title-header",
                            children: [
                              h.jsx("p", {
                                className: "pr-title",
                                children: h.jsx("a", {
                                  href: t.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: t.title,
                                }),
                              }),
                              h.jsx("p", {
                                className: "pr-subtitle",
                                children: r,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, h.jsxs)("div", {
                        className: "files-changed-header",
                        children: [
                          h.jsx("p", {
                            className: "files-changed-text",
                            style: { backgroundColor: e.style.color },
                            children: t.changedFiles,
                          }),
                          h.jsx("p", {
                            className: "files-changed-text-2",
                            children: "Files Changed",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, h.jsxs)("div", {
                    className: "pr-down",
                    children: [
                      (0, h.jsxs)("div", {
                        className: "changes-repo",
                        children: [
                          (0, h.jsxs)("p", {
                            className: "parent-repo",
                            children: [
                              "Repository:",
                              " ",
                              (0, h.jsxs)("a", {
                                style: { color: e.style.color },
                                href: t.baseRepository.url,
                                children: [
                                  t.baseRepository.owner.login,
                                  "/",
                                  t.baseRepository.name,
                                ],
                              }),
                            ],
                          }),
                          (0, h.jsxs)("div", {
                            className: "changes-files",
                            children: [
                              h.jsx("p", {
                                className: "additions-files",
                                children: (0, h.jsxs)("strong", {
                                  children: [t.additions, " + "],
                                }),
                              }),
                              h.jsx("p", {
                                className: "deletions-files",
                                children: (0, h.jsxs)("strong", {
                                  children: [t.deletions, " - "],
                                }),
                              }),
                              o,
                            ],
                          }),
                        ],
                      }),
                      h.jsx("div", {
                        className: "owner-img-div",
                        children: h.jsx("a", {
                          href: t.baseRepository.owner.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: h.jsx("img", {
                            className: "owner-img",
                            src: t.baseRepository.owner.avatarUrl,
                            alt: "",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        }
        class E extends d.Component {
          render() {
            let t = this.props.theme;
            return (0, h.jsxs)("div", {
              children: [
                h.jsx("div", {
                  className: "pull-requests-header-div",
                  children: h.jsx(g.Fade, {
                    bottom: !0,
                    duration: 2e3,
                    distance: "20px",
                    children: h.jsx("h1", {
                      className: "pull-requests-header",
                      style: { color: t.text },
                      children: "Pull Requests",
                    }),
                  }),
                }),
                h.jsx("div", {
                  className: "pull-request-body-div",
                  children: f.aT.map((t) => h.jsx(Z, { pullRequest: t })),
                }),
              ],
            });
          }
        }
        s(5385), s(7361);
        class A extends d.Component {
          render() {
            let t = this.props.issue;
            !1 === t.closed
              ? ((e = {
                  iconifyClass: "octicon:issue-opened",
                  style: { color: "#28a745" },
                }),
                (s = "#dcffe4"))
              : ((e = {
                  iconifyClass: "octicon:issue-closed",
                  style: { color: "#d73a49" },
                }),
                (s = "#ffdce0"));
            var e,
              s,
              o,
              r = "#" + t.number + " opened on " + t.createdAt.split("T")[0];
            if (t.assignees.nodes.length > 0) {
              let e = t.assignees.nodes[0].name;
              o = h.jsx(
                M.Ox,
                {
                  placement: "top",
                  style: { marginBottom: "5px" },
                  overlay: h.jsx(M.u, {
                    id: "tooltip-top",
                    children: h.jsx("strong", { children: `Assigned to ${e}` }),
                  }),
                  children: h.jsx("a", {
                    href: t.assignees.nodes[0].url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: h.jsx("img", {
                      className: "assigned-to-img",
                      src: t.assignees.nodes[0].avatarUrl,
                      alt: "",
                    }),
                  }),
                },
                e
              );
            } else o = h.jsx("noscript", {});
            return h.jsx(g.Fade, {
              bottom: !0,
              duration: 2e3,
              distance: "40px",
              children: (0, h.jsxs)("div", {
                className: "issue-card",
                style: {
                  backgroundColor: s,
                  border: `1px solid ${e.style.color}`,
                },
                children: [
                  h.jsx("div", {
                    className: "issue-top",
                    children: (0, h.jsxs)("div", {
                      className: "issue-header",
                      children: [
                        h.jsx("span", {
                          className: "iconify issue-icons",
                          "data-icon": e.iconifyClass,
                          style: e.style,
                          "data-inline": "false",
                        }),
                        (0, h.jsxs)("div", {
                          className: "issue-title-header",
                          children: [
                            h.jsx("p", {
                              className: "issue-title",
                              children: h.jsx("a", {
                                href: t.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: t.title,
                              }),
                            }),
                            h.jsx("p", {
                              className: "issue-subtitle",
                              children: r,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, h.jsxs)("div", {
                    className: "issue-down",
                    children: [
                      (0, h.jsxs)("div", {
                        className: "assignee-repo",
                        children: [
                          (0, h.jsxs)("p", {
                            className: "parent-repo",
                            children: [
                              "Repository:",
                              " ",
                              (0, h.jsxs)("a", {
                                style: { color: e.style.color },
                                href: t.repository.url,
                                children: [
                                  t.repository.owner.login,
                                  "/",
                                  t.repository.name,
                                ],
                              }),
                            ],
                          }),
                          h.jsx("div", {
                            className: "assignee-info",
                            children: o,
                          }),
                        ],
                      }),
                      h.jsx("div", {
                        className: "owner-img-div",
                        children: h.jsx("a", {
                          href: t.repository.owner.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: h.jsx("img", {
                            className: "owner-img",
                            src: t.repository.owner.avatarUrl,
                            alt: "",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          }
        }
        class T extends d.Component {
          render() {
            let t = this.props.theme;
            return (0, h.jsxs)("div", {
              children: [
                h.jsx("div", {
                  className: "issues-header-div",
                  children: h.jsx(g.Fade, {
                    bottom: !0,
                    duration: 2e3,
                    distance: "20px",
                    children: h.jsx("h1", {
                      className: "issues-header",
                      style: { color: t.text },
                      children: "Issues",
                    }),
                  }),
                }),
                h.jsx("div", {
                  className: "issues-body-div",
                  children: w.aT.map((t) => h.jsx(A, { issue: t })),
                }),
              ],
            });
          }
        }
        var O = s(3120);
        s(4333);
        class k extends d.Component {
          render() {
            return (0, h.jsxs)("div", {
              className: "opensource-main",
              children: [
                h.jsx(b.Z, { theme: this.props.theme }),
                h.jsx(U, { theme: this.props.theme }),
                h.jsx(x, { theme: this.props.theme }),
                h.jsx(E, { theme: this.props.theme }),
                h.jsx(T, { theme: this.props.theme }),
                h.jsx(p.Z, {
                  theme: this.props.theme,
                  onToggle: this.props.onToggle,
                }),
                h.jsx(O.Z, { theme: this.props.theme }),
              ],
            });
          }
        }
        let F = k,
          z = (0, i.l)(o, "default"),
          X = (0, i.l)(o, "getStaticProps"),
          B = (0, i.l)(o, "getStaticPaths"),
          S = (0, i.l)(o, "getServerSideProps"),
          R = (0, i.l)(o, "config"),
          G = (0, i.l)(o, "reportWebVitals"),
          j = (0, i.l)(o, "unstable_getStaticProps"),
          _ = (0, i.l)(o, "unstable_getStaticPaths"),
          C = (0, i.l)(o, "unstable_getStaticParams"),
          P = (0, i.l)(o, "unstable_getServerProps"),
          q = (0, i.l)(o, "unstable_getServerSideProps"),
          I = new r.PagesRouteModule({
            definition: {
              kind: a.x.PAGES,
              page: "/opensource/Opensource",
              pathname: "/opensource/Opensource",
              bundlePath: "",
              filename: "",
            },
            components: { App: c(), Document: l() },
            userland: o,
          });
      },
      7361: () => {},
      7033: () => {},
      3027: () => {},
      5963: () => {},
      4889: () => {},
      5385: () => {},
      8676: () => {},
      1782: () => {},
      9062: () => {},
      4333: () => {},
      6449: (t) => {
        "use strict";
        t.exports = require("@restart/hooks/useCallbackRef");
      },
      7578: (t) => {
        "use strict";
        t.exports = require("@restart/hooks/useCommittedRef");
      },
      5205: (t) => {
        "use strict";
        t.exports = require("@restart/hooks/useEventCallback");
      },
      3067: (t) => {
        "use strict";
        t.exports = require("@restart/hooks/useForceUpdate");
      },
      3282: (t) => {
        "use strict";
        t.exports = require("@restart/hooks/useMergedRefs");
      },
      2541: (t) => {
        "use strict";
        t.exports = require("@restart/hooks/useTimeout");
      },
      8333: (t) => {
        "use strict";
        t.exports = require("@restart/hooks/useUpdateEffect");
      },
      6816: (t) => {
        "use strict";
        t.exports = require("@restart/hooks/useWillUnmount");
      },
      9003: (t) => {
        "use strict";
        t.exports = require("classnames");
      },
      5918: (t) => {
        "use strict";
        t.exports = require("dom-helpers/addEventListener");
      },
      7719: (t) => {
        "use strict";
        t.exports = require("dom-helpers/camelize");
      },
      7107: (t) => {
        "use strict";
        t.exports = require("dom-helpers/canUseDOM");
      },
      6375: (t) => {
        "use strict";
        t.exports = require("dom-helpers/contains");
      },
      7836: (t) => {
        "use strict";
        t.exports = require("dom-helpers/css");
      },
      7674: (t) => {
        "use strict";
        t.exports = require("dom-helpers/hasClass");
      },
      2902: (t) => {
        "use strict";
        t.exports = require("dom-helpers/ownerDocument");
      },
      6117: (t) => {
        "use strict";
        t.exports = require("dom-helpers/querySelectorAll");
      },
      8951: (t) => {
        "use strict";
        t.exports = require("dom-helpers/removeEventListener");
      },
      7233: (t) => {
        "use strict";
        t.exports = require("dom-helpers/scrollbarSize");
      },
      6479: (t) => {
        "use strict";
        t.exports = require("dom-helpers/transitionEnd");
      },
      7644: (t) => {
        "use strict";
        t.exports = require("invariant");
      },
      2785: (t) => {
        "use strict";
        t.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      580: (t) => {
        "use strict";
        t.exports = require("prop-types");
      },
      3462: (t) => {
        "use strict";
        t.exports = require("prop-types-extra/lib/all");
      },
      8361: (t) => {
        "use strict";
        t.exports = require("prop-types-extra/lib/isRequiredForA11y");
      },
      6689: (t) => {
        "use strict";
        t.exports = require("react");
      },
      2791: (t) => {
        "use strict";
        t.exports = require("react-helmet");
      },
      8157: (t) => {
        "use strict";
        t.exports = require("react-overlays/Dropdown");
      },
      867: (t) => {
        "use strict";
        t.exports = require("react-overlays/DropdownMenu");
      },
      7775: (t) => {
        "use strict";
        t.exports = require("react-overlays/DropdownToggle");
      },
      8164: (t) => {
        "use strict";
        t.exports = require("react-overlays/Modal");
      },
      8285: (t) => {
        "use strict";
        t.exports = require("react-overlays/ModalManager");
      },
      3501: (t) => {
        "use strict";
        t.exports = require("react-overlays/Overlay");
      },
      2063: (t) => {
        "use strict";
        t.exports = require("react-overlays/safeFindDOMNode");
      },
      4931: (t) => {
        "use strict";
        t.exports = require("react-reveal");
      },
      4661: (t) => {
        "use strict";
        t.exports = require("react-router-dom");
      },
      7967: (t) => {
        "use strict";
        t.exports = require("react-transition-group/Transition");
      },
      997: (t) => {
        "use strict";
        t.exports = require("react/jsx-runtime");
      },
      3372: (t) => {
        "use strict";
        t.exports = require("uncontrollable");
      },
      5548: (t) => {
        "use strict";
        t.exports = require("warning");
      },
      1017: (t) => {
        "use strict";
        t.exports = require("path");
      },
    });
  var e = require("../../webpack-runtime.js");
  e.C(t);
  var s = (t) => e((e.s = t)),
    o = e.X(0, [840, 822, 498], () => s(7052));
  module.exports = o;
})();
