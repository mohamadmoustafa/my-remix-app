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
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 9,
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
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 11,
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

// app/routes/tester/indexTester.tsx
var indexTester_exports = {};
__export(indexTester_exports, {
  default: () => JokesIndexRoute
});
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function JokesIndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Test Working" }, void 0, !1, {
    fileName: "app/routes/tester/indexTester.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tester/indexTester.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links
});

// app/styles/index.css
var styles_default = "/build/_assets/index-WNVPOOYG.css";

// app/routes/index.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: "Hello Index Route" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute2,
  links: () => links2,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-WHPLZ6M7.css";

// app/generatedCode/todoApi.ts
var Client = class {
  constructor(baseUrl, http) {
    this.jsonParseReviver = void 0;
    this.http = http || window, this.baseUrl = baseUrl ?? "";
  }
  blogsAll(url, isPublished, publishedFrom, publishedTo) {
    let url_ = this.baseUrl + "/api/Blogs?";
    if (url === null)
      throw new Error("The parameter 'url' cannot be null.");
    if (url !== void 0 && (url_ += "Url=" + encodeURIComponent("" + url) + "&"), isPublished === null)
      throw new Error("The parameter 'isPublished' cannot be null.");
    if (isPublished !== void 0 && (url_ += "IsPublished=" + encodeURIComponent("" + isPublished) + "&"), publishedFrom === null)
      throw new Error("The parameter 'publishedFrom' cannot be null.");
    if (publishedFrom !== void 0 && (url_ += "PublishedFrom=" + encodeURIComponent(publishedFrom ? "" + publishedFrom.toISOString() : "") + "&"), publishedTo === null)
      throw new Error("The parameter 'publishedTo' cannot be null.");
    publishedTo !== void 0 && (url_ += "PublishedTo=" + encodeURIComponent(publishedTo ? "" + publishedTo.toISOString() : "") + "&"), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processBlogsAll(_response));
  }
  processBlogsAll(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 200 ? response.text().then((_responseText) => {
      let result200 = null, resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      if (Array.isArray(resultData200)) {
        result200 = [];
        for (let item of resultData200)
          result200.push(BlogDTO.fromJS(item));
      } else
        result200 = null;
      return result200;
    }) : status !== 200 && status !== 204 ? response.text().then((_responseText) => throwException("An unexpected server error occurred.", status, _responseText, _headers)) : Promise.resolve(null);
  }
  blogsPOST(body) {
    let url_ = this.baseUrl + "/api/Blogs";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processBlogsPOST(_response));
  }
  processBlogsPOST(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 201 ? response.text().then((_responseText) => {
      let result201 = null, resultData201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result201 = BlogDTO.fromJS(resultData201), result201;
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  blogsGET(id) {
    let url_ = this.baseUrl + "/api/Blogs/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processBlogsGET(_response));
  }
  processBlogsGET(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 200 ? response.text().then((_responseText) => {
      let result200 = null, resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result200 = BlogDTO.fromJS(resultData200), result200;
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  blogsPUT(id, body) {
    let url_ = this.baseUrl + "/api/Blogs/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      body: JSON.stringify(body),
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processBlogsPUT(_response));
  }
  processBlogsPUT(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 204 ? response.text().then((_responseText) => {
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  blogsDELETE(id) {
    let url_ = this.baseUrl + "/api/Blogs/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "DELETE",
      headers: {}
    };
    return this.http.fetch(url_, options_).then((_response) => this.processBlogsDELETE(_response));
  }
  processBlogsDELETE(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 204 ? response.text().then((_responseText) => {
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  publish(id) {
    let url_ = this.baseUrl + "/api/Blogs/{id}/publish";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "PUT",
      headers: {}
    };
    return this.http.fetch(url_, options_).then((_response) => this.processPublish(_response));
  }
  processPublish(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 204 ? response.text().then((_responseText) => {
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  postsAll(blogId) {
    let url_ = this.baseUrl + "/api/Posts?";
    if (blogId === null)
      throw new Error("The parameter 'blogId' cannot be null.");
    blogId !== void 0 && (url_ += "blogId=" + encodeURIComponent("" + blogId) + "&"), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processPostsAll(_response));
  }
  processPostsAll(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 200 ? response.text().then((_responseText) => {
      let result200 = null, resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      if (Array.isArray(resultData200)) {
        result200 = [];
        for (let item of resultData200)
          result200.push(PostDTO.fromJS(item));
      } else
        result200 = null;
      return result200;
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  postsPOST(body) {
    let url_ = this.baseUrl + "/api/Posts";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processPostsPOST(_response));
  }
  processPostsPOST(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 201 ? response.text().then((_responseText) => {
      let result201 = null, resultData201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result201 = PostDTO.fromJS(resultData201), result201;
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  postsGET(id) {
    let url_ = this.baseUrl + "/api/Posts/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processPostsGET(_response));
  }
  processPostsGET(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 200 ? response.text().then((_responseText) => {
      let result200 = null, resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result200 = PostDTO.fromJS(resultData200), result200;
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  postsPUT(id, body) {
    let url_ = this.baseUrl + "/api/Posts/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      body: JSON.stringify(body),
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processPostsPUT(_response));
  }
  processPostsPUT(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 204 ? response.text().then((_responseText) => {
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  postsDELETE(id) {
    let url_ = this.baseUrl + "/api/Posts/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "DELETE",
      headers: {}
    };
    return this.http.fetch(url_, options_).then((_response) => this.processPostsDELETE(_response));
  }
  processPostsDELETE(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 204 ? response.text().then((_responseText) => {
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  todosAll(title, status, createdFrom, createdTo) {
    let url_ = this.baseUrl + "/api/Todos?";
    if (title === null)
      throw new Error("The parameter 'title' cannot be null.");
    if (title !== void 0 && (url_ += "Title=" + encodeURIComponent("" + title) + "&"), status === null)
      throw new Error("The parameter 'status' cannot be null.");
    if (status !== void 0 && status && status.forEach((item) => {
      url_ += "Status=" + encodeURIComponent("" + item) + "&";
    }), createdFrom === null)
      throw new Error("The parameter 'createdFrom' cannot be null.");
    if (createdFrom !== void 0 && (url_ += "CreatedFrom=" + encodeURIComponent(createdFrom ? "" + createdFrom.toISOString() : "") + "&"), createdTo === null)
      throw new Error("The parameter 'createdTo' cannot be null.");
    createdTo !== void 0 && (url_ += "CreatedTo=" + encodeURIComponent(createdTo ? "" + createdTo.toISOString() : "") + "&"), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processTodosAll(_response));
  }
  processTodosAll(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 200 ? response.text().then((_responseText) => {
      let result200 = null, resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      if (Array.isArray(resultData200)) {
        result200 = [];
        for (let item of resultData200)
          result200.push(ToDoItemDTO.fromJS(item));
      } else
        result200 = null;
      return result200;
    }) : status !== 200 && status !== 204 ? response.text().then((_responseText) => throwException("An unexpected server error occurred.", status, _responseText, _headers)) : Promise.resolve(null);
  }
  todosPOST(body) {
    let url_ = this.baseUrl + "/api/Todos";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processTodosPOST(_response));
  }
  processTodosPOST(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 201 ? response.text().then((_responseText) => {
      let result201 = null, resultData201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result201 = ToDoItemDTO.fromJS(resultData201), result201;
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  todosGET(id) {
    let url_ = this.baseUrl + "/api/Todos/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processTodosGET(_response));
  }
  processTodosGET(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 200 ? response.text().then((_responseText) => {
      let result200 = null, resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result200 = ToDoItemDTO.fromJS(resultData200), result200;
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  todosPUT(id, body) {
    let url_ = this.baseUrl + "/api/Todos/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      body: JSON.stringify(body),
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processTodosPUT(_response));
  }
  processTodosPUT(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 204 ? response.text().then((_responseText) => {
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  todosDELETE(id) {
    let url_ = this.baseUrl + "/api/Todos/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "DELETE",
      headers: {}
    };
    return this.http.fetch(url_, options_).then((_response) => this.processTodosDELETE(_response));
  }
  processTodosDELETE(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 204 ? response.text().then((_responseText) => {
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  usersAll() {
    let url_ = this.baseUrl + "/api/Users";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processUsersAll(_response));
  }
  processUsersAll(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 200 ? response.text().then((_responseText) => {
      let result200 = null, resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      if (Array.isArray(resultData200)) {
        result200 = [];
        for (let item of resultData200)
          result200.push(UserDTO.fromJS(item));
      } else
        result200 = null;
      return result200;
    }) : status !== 200 && status !== 204 ? response.text().then((_responseText) => throwException("An unexpected server error occurred.", status, _responseText, _headers)) : Promise.resolve(null);
  }
  usersPOST(body) {
    let url_ = this.baseUrl + "/api/Users";
    url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      body: JSON.stringify(body),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processUsersPOST(_response));
  }
  processUsersPOST(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 201 ? response.text().then((_responseText) => {
      let result201 = null, resultData201 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result201 = UserDTO.fromJS(resultData201), result201;
    }) : status === 400 ? response.text().then((_responseText) => {
      let result400 = null, resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result400 = ProblemDetails.fromJS(resultData400), throwException("Bad Request", status, _responseText, _headers, result400);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
  usersGET(id) {
    let url_ = this.baseUrl + "/api/Users/{id}";
    if (id == null)
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace("{id}", encodeURIComponent("" + id)), url_ = url_.replace(/[?&]$/, "");
    let options_ = {
      method: "GET",
      headers: {
        Accept: "text/plain"
      }
    };
    return this.http.fetch(url_, options_).then((_response) => this.processUsersGET(_response));
  }
  processUsersGET(response) {
    let status = response.status, _headers = {};
    return response.headers && response.headers.forEach && response.headers.forEach((v, k) => _headers[k] = v), status === 200 ? response.text().then((_responseText) => {
      let result200 = null, resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result200 = UserDTO.fromJS(resultData200), result200;
    }) : status === 404 ? response.text().then((_responseText) => {
      let result404 = null, resultData404 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return result404 = ProblemDetails.fromJS(resultData404), throwException("Not Found", status, _responseText, _headers, result404);
    }) : response.text().then((_responseText) => {
      let resultdefault = null, resultDatadefault = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
      return resultdefault = ProblemDetails.fromJS(resultDatadefault), throwException("Error", status, _responseText, _headers, resultdefault);
    });
  }
};
var BlogDTO = class {
  constructor(data) {
    if (data)
      for (var property in data)
        data.hasOwnProperty(property) && (this[property] = data[property]);
  }
  init(_data) {
    if (_data && (this.id = _data.id, this.url = _data.url, this.isPublished = _data.isPublished, this.publishedAt = _data.publishedAt ? new Date(_data.publishedAt.toString()) : void 0, Array.isArray(_data.posts))) {
      this.posts = [];
      for (let item of _data.posts)
        this.posts.push(PostDTO.fromJS(item));
    }
  }
  static fromJS(data) {
    data = typeof data == "object" ? data : {};
    let result = new BlogDTO();
    return result.init(data), result;
  }
  toJSON(data) {
    if (data = typeof data == "object" ? data : {}, data.id = this.id, data.url = this.url, data.isPublished = this.isPublished, data.publishedAt = this.publishedAt ? this.publishedAt.toISOString() : void 0, Array.isArray(this.posts)) {
      data.posts = [];
      for (let item of this.posts)
        data.posts.push(item.toJSON());
    }
    return data;
  }
};
var PostDTO = class {
  constructor(data) {
    if (data)
      for (var property in data)
        data.hasOwnProperty(property) && (this[property] = data[property]);
  }
  init(_data) {
    _data && (this.id = _data.id, this.title = _data.title, this.content = _data.content, this.blogId = _data.blogId);
  }
  static fromJS(data) {
    data = typeof data == "object" ? data : {};
    let result = new PostDTO();
    return result.init(data), result;
  }
  toJSON(data) {
    return data = typeof data == "object" ? data : {}, data.id = this.id, data.title = this.title, data.content = this.content, data.blogId = this.blogId, data;
  }
}, ProblemDetails = class {
  constructor(data) {
    if (data)
      for (var property in data)
        data.hasOwnProperty(property) && (this[property] = data[property]);
  }
  init(_data) {
    if (_data) {
      for (var property in _data)
        _data.hasOwnProperty(property) && (this[property] = _data[property]);
      this.type = _data.type, this.title = _data.title, this.status = _data.status, this.detail = _data.detail, this.instance = _data.instance;
    }
  }
  static fromJS(data) {
    data = typeof data == "object" ? data : {};
    let result = new ProblemDetails();
    return result.init(data), result;
  }
  toJSON(data) {
    data = typeof data == "object" ? data : {};
    for (var property in this)
      this.hasOwnProperty(property) && (data[property] = this[property]);
    return data.type = this.type, data.title = this.title, data.status = this.status, data.detail = this.detail, data.instance = this.instance, data;
  }
};
var ToDoItemDTO = class {
  constructor(data) {
    if (data)
      for (var property in data)
        data.hasOwnProperty(property) && (this[property] = data[property]);
  }
  init(_data) {
    _data && (this.id = _data.id, this.title = _data.title, this.description = _data.description, this.createdAt = _data.createdAt ? new Date(_data.createdAt.toString()) : void 0, this.doneAt = _data.doneAt ? new Date(_data.doneAt.toString()) : void 0, this.doneBy = _data.doneBy ? UserDTO.fromJS(_data.doneBy) : void 0, this.status = _data.status);
  }
  static fromJS(data) {
    data = typeof data == "object" ? data : {};
    let result = new ToDoItemDTO();
    return result.init(data), result;
  }
  toJSON(data) {
    return data = typeof data == "object" ? data : {}, data.id = this.id, data.title = this.title, data.description = this.description, data.createdAt = this.createdAt ? this.createdAt.toISOString() : void 0, data.doneAt = this.doneAt ? this.doneAt.toISOString() : void 0, data.doneBy = this.doneBy ? this.doneBy.toJSON() : void 0, data.status = this.status, data;
  }
};
var UserDTO = class {
  constructor(data) {
    if (data)
      for (var property in data)
        data.hasOwnProperty(property) && (this[property] = data[property]);
  }
  init(_data) {
    _data && (this.id = _data.id, this.userName = _data.userName, this.email = _data.email, this.createdAt = _data.createdAt ? new Date(_data.createdAt.toString()) : void 0);
  }
  static fromJS(data) {
    data = typeof data == "object" ? data : {};
    let result = new UserDTO();
    return result.init(data), result;
  }
  toJSON(data) {
    return data = typeof data == "object" ? data : {}, data.id = this.id, data.userName = this.userName, data.email = this.email, data.createdAt = this.createdAt ? this.createdAt.toISOString() : void 0, data;
  }
}, ApiException = class extends Error {
  constructor(message, status, response, headers, result) {
    super();
    this.isApiException = !0;
    this.message = message, this.status = status, this.response = response, this.headers = headers, this.result = result;
  }
  static isApiException(obj) {
    return obj.isApiException === !0;
  }
};
function throwException(message, status, response, headers, result) {
  throw result ?? new ApiException(message, status, response, headers, null);
}

// app/routes/jokes.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: jokes_default }], client = new Client("https://localhost:7166"), loader = async () => (0, import_node2.json)({
  itemsList: await client.usersAll()
});
function JokesRoute2() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Link, { to: "/", title: "Remix Jokes", "aria-label": "Remix Jokes", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 29,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 30,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 27,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Link, { to: ".", children: "Get a random joke" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 39,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ul", { children: data.itemsList.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Link, { to: item.id, children: item.name }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 43,
          columnNumber: 19
        }, this) }, item.id, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 42,
          columnNumber: 17
        }, this)) }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Link, { to: "new", className: "button", children: "Add your own" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 24,
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

// app/routes/jokes/newest.tsx
var newest_exports = {};
__export(newest_exports, {
  default: () => JokesIndexRoute2
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function JokesIndexRoute2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "newest" }, void 0, !1, {
      fileName: "app/routes/jokes/newest.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "I was wondering why the frisbee was getting bigger, then it hit me." }, void 0, !1, {
      fileName: "app/routes/jokes/newest.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes/newest.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  default: () => JokesIndexRoute3
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function JokesIndexRoute3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "I was wondering why the frisbee was getting bigger, then it hit me." }, void 0, !1, {
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
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function NewJokeRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { children: [
        "Name: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("input", { type: "text", name: "name" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("label", { children: [
        "Content: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("textarea", { name: "content" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, !1, {
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
var assets_manifest_default = { version: "03996201", entry: { module: "/build/entry.client-22MQEKAQ.js", imports: ["/build/_shared/chunk-HV74LADH.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-JAPE3P7T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-O6S75TDL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-YM6R3QNR.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$jokeId": { id: "routes/jokes/$jokeId", parentId: "routes/jokes", path: ":jokeId", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$jokeId-NUFXBQAV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-NKKQOIFC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-5SZUUFWH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/newest": { id: "routes/jokes/newest", parentId: "routes/jokes", path: "newest", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/newest-HGADFL5M.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tester": { id: "routes/tester", parentId: "root", path: "tester", index: void 0, caseSensitive: void 0, module: "/build/routes/tester-TSZ3F5X7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tester/indexTester": { id: "routes/tester/indexTester", parentId: "routes/tester", path: "indexTester", index: void 0, caseSensitive: void 0, module: "/build/routes/tester/indexTester-TFMBG2SX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-03996201.js" };

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
  "routes/tester/indexTester": {
    id: "routes/tester/indexTester",
    parentId: "routes/tester",
    path: "indexTester",
    index: void 0,
    caseSensitive: void 0,
    module: indexTester_exports
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
  "routes/jokes/newest": {
    id: "routes/jokes/newest",
    parentId: "routes/jokes",
    path: "newest",
    index: void 0,
    caseSensitive: void 0,
    module: newest_exports
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
