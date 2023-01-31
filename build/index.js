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

// app/routes/tester/indexTester.tsx
var indexTester_exports = {};
__export(indexTester_exports, {
  default: () => JokesIndexRoute
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function JokesIndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Test Working" }, void 0, !1, {
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
  getTodos: () => getTodos,
  links: () => links
});
var import_node2 = require("@remix-run/node"), import_react3 = require("@remix-run/react");

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

// app/styles/index.css
var styles_default = "/build/_assets/index-JQN3IKFX.css";

// app/routes/index.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: styles_default }], _stripe;
async function getStripe() {
  return _stripe || (_stripe = new Client("https://localhost:7166")), _stripe;
}
async function getTodos() {
  let stripe = await getStripe();
  return console.log(stripe), (0, import_node2.json)(stripe.usersAll());
}
function IndexRoute() {
  let data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Users" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: data == null ? void 0 : data.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", {}, item.id, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 60,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "jokes/new", className: "button", children: "Add your own joke" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 55,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links2
});
var import_react4 = require("@remix-run/react");

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-WHPLZ6M7.css";

// app/routes/jokes.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), links2 = () => [{ rel: "stylesheet", href: jokes_default }];
function JokesRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "/", title: "Remix Jokes", "aria-label": "Remix Jokes", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 17,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 18,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: ".", children: "Get a random joke" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Link, { to: "new", className: "button", children: "Add your own" }, void 0, !1, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  default: () => JokeRoute
});
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function JokeRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Here's your hilarious joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/$jokeId.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Why don't you find hippopotamuses hiding in trees? They're really good at it." }, void 0, !1, {
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
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function JokesIndexRoute2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Here's a random joke:" }, void 0, !1, {
      fileName: "app/routes/jokes/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "I was wondering why the frisbee was getting bigger, then it hit me." }, void 0, !1, {
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
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function NewJokeRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, !1, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
        "Name: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "text", name: "name" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { children: [
        "Content: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("textarea", { name: "content" }, void 0, !1, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, !1, {
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

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login,
  links: () => links3
});
var import_react5 = require("@remix-run/react");

// app/styles/login.css
var login_default = "/build/_assets/login-MPWT2RCD.css";

// app/routes/login.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), links3 = () => [
  { rel: "stylesheet", href: login_default }
];
function Login() {
  let [searchParams] = (0, import_react5.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "content", "data-light": "", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("form", { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "input",
          {
            type: "hidden",
            name: "redirectTo",
            value: searchParams.get("redirectTo") ?? void 0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 17,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("fieldset", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("legend", { className: "sr-only", children: "Login or Register?" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 23,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "input",
              {
                type: "radio",
                name: "loginType",
                value: "login",
                defaultChecked: !0
              },
              void 0,
              !1,
              {
                fileName: "app/routes/login.tsx",
                lineNumber: 25,
                columnNumber: 15
              },
              this
            ),
            " ",
            "Login"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "radio", name: "loginType", value: "register" }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 34,
              columnNumber: 15
            }, this),
            " Register"
          ] }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 38,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { type: "text", id: "username-input", name: "username" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 42,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("input", { id: "password-input", name: "password", type: "password" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", className: "button", children: "Submit" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react5.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react5.Link, { to: "/jokes", children: "Jokes" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 56,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "71044dad", entry: { module: "/build/entry.client-LQGHTY4P.js", imports: ["/build/_shared/chunk-RBKT6IN3.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CLRINGVK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-S2LKK4HY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-HVMZQPDW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/$jokeId": { id: "routes/jokes/$jokeId", parentId: "routes/jokes", path: ":jokeId", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/$jokeId-NUFXBQAV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/index": { id: "routes/jokes/index", parentId: "routes/jokes", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/jokes/index-NKKQOIFC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes/new": { id: "routes/jokes/new", parentId: "routes/jokes", path: "new", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes/new-5SZUUFWH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-BHHEHCAC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tester/indexTester": { id: "routes/tester/indexTester", parentId: "root", path: "tester/indexTester", index: void 0, caseSensitive: void 0, module: "/build/routes/tester/indexTester-TFMBG2SX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-71044DAD.js" };

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
  "routes/tester/indexTester": {
    id: "routes/tester/indexTester",
    parentId: "root",
    path: "tester/indexTester",
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
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
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
