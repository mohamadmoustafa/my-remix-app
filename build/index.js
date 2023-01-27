var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Remix: So great, it's funny!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/tester.tsx
var tester_exports = {};
__export(tester_exports, {
  default: () => JokesRoute
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function JokesRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Test" }, void 0, !1, {
      fileName: "app/routes/tester.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/tester.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tester.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tester.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/tester/index.tsx
var tester_exports2 = {};
__export(tester_exports2, {
  default: () => JokesIndexRoute
});
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function JokesIndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Test Working" }, void 0, !1, {
    fileName: "app/routes/tester/index.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tester/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Hello Index Route" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute2
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function JokesRoute2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: "J\u{1F92A}KES" }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  default: () => JokeRoute
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function JokeRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/$jokeId.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Why don't you find hippopotamuses hiding in trees? They're really good at it." }, void 0, !1, {
      fileName: "app/routes/jokes/$jokeId.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/$jokeId.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokesIndexRoute2
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function JokesIndexRoute2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "I was wondering why the frisbee was getting bigger, then it hit me." }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  default: () => NewJokeRoute
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function NewJokeRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
        "Name: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "text", name: "name" }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 8,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 7,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 6,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
        "Content: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("textarea", { name: "content" }, void 0, !1, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 13,
          columnNumber: 22
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4ce4a3b8", entry: { module: "/build/entry.client-XAGY55HT.js", imports: ["/build/_shared/chunk-BZSTLQW4.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JU5J3VSM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2XVKNKTC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-JW5JRNCC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$jokeId": { id: "routes/jokes/$jokeId", parentId: "routes/jokes", path: ":jokeId", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$jokeId-NUFXBQAV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-NKKQOIFC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-5SZUUFWH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tester": { id: "routes/tester", parentId: "root", path: "tester", index: void 0, caseSensitive: void 0, module: "/build/routes/tester-NVAI4GL7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tester/index": { id: "routes/tester/index", parentId: "routes/tester", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/tester/index-OCV23CLO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-4CE4A3B8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tester": {
    id: "routes/tester",
    parentId: "root",
    path: "tester",
    index: void 0,
    caseSensitive: void 0,
    module: tester_exports
  },
  "routes/tester/index": {
    id: "routes/tester/index",
    parentId: "routes/tester",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: tester_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
