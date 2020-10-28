exports.ids = [1];
exports.modules = {

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__ = __webpack_require__(57);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cf1d754_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__ = __webpack_require__(73);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(71),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9cf1d754"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "ff682bc4"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9cf1d754_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'Login Page'
  },
  data() {
    return {
      username: '',
      password: '',
      errorMsg: ''
    };
  },
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(['login']), {
    doSubmit(e) {
      e.preventDefault();
      if (this.validate()) {
        // 调用接口
        this.login({
          username: this.username,
          password: this.password
        }).then(() => {
          this.$router.replace('/app');
        });
      }
    },
    validate() {
      if (!this.username.trim()) {
        this.errorMsg = '姓名不能为空';
        return false;
      }
      if (!this.password.trim()) {
        this.errorMsg = '密码不能为空';
        return false;
      }
      this.errorMsg = '';
      return true;
    }
  })
});

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(51)
module.exports.__inject__ = function (context) {
  add("3a353d89", content, true, context)
};

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(undefined);
// imports


// module
exports.push([module.i, ".login-form[data-v-9cf1d754]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;width:350px;margin:0 auto;padding:20px;background-color:#fff}.login-form h1[data-v-9cf1d754]{font-weight:100;color:#3d3d3d}.login-input[data-v-9cf1d754]{padding:0 10px;margin-bottom:20px;border:1px solid #aaa;border-radius:0;-webkit-box-shadow:0 0 0;box-shadow:0 0 0}.login-btn[data-v-9cf1d754],.login-input[data-v-9cf1d754]{-webkit-appearance:none;-moz-appearance:none;appearance:none;line-height:30px;width:100%}.login-btn[data-v-9cf1d754]{text-align:center;background-color:#0d60c7;color:#eaeaea;cursor:pointer;border-color:#0d60c7;-webkit-transition:all .3s;transition:all .3s}.login-btn[data-v-9cf1d754]:hover{color:#fff;background-color:#0a4997}.error-msg[data-v-9cf1d754]{font-size:12px;color:red}@media screen and (max-width:600px){.login-form[data-v-9cf1d754]{width:90%}.login-input[data-v-9cf1d754]{line-height:40px}}", ""]);

// exports


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"login-form",on:{"submit":_vm.doSubmit}},[_vm._ssrNode("<h1 data-v-9cf1d754><span data-v-9cf1d754>Login</span> <span class=\"error-msg\""+(_vm._ssrStyle(null,null, { display: (_vm.errorMsg) ? '' : 'none' }))+" data-v-9cf1d754>"+_vm._ssrEscape(_vm._s(_vm.errorMsg))+"</span></h1> <input type=\"text\" placeholder=\"User Name\""+(_vm._ssrAttr("value",(_vm.username)))+" class=\"login-input\" data-v-9cf1d754> <input type=\"password\" placeholder=\"Password\" autocomplete=\"new-password\""+(_vm._ssrAttr("value",(_vm.password)))+" class=\"login-input\" data-v-9cf1d754> <button type=\"submit\" class=\"login-btn\" data-v-9cf1d754>登 录</button>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=1.server-entry.js.map