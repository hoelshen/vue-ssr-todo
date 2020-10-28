exports.ids = [0];
exports.modules = {

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__ = __webpack_require__(54);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e53bb554_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__ = __webpack_require__(70);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(58),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e53bb554"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "1b49640a"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e53bb554_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_vue__ = __webpack_require__(66);
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
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'The Todo App'
  },
  beforeRouteEnter(to, from, next) {
    console.log('todo before enter', this);
    next(vm => {
      console.log('after enter vm.id is ', vm.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log('todo update enter');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('todo leave enter');
    next();
  },
  props: ['id'],
  mounted() {
    // console.log('todo mounted')
    if (this.todos && this.todos.length < 1) {
      this.fetchTodos();
    }
  },
  asyncData({ store, router }) {
    if (store.state.user) {
      return store.dispatch('fetchTodos');
    }
    router.replace('/login');
    return Promise.resolve();
  },
  data() {
    return {
      filter: 'all',
      stats: ['all', 'active', 'completed']
    };
  },
  components: {
    Item: __WEBPACK_IMPORTED_MODULE_1__item_vue__["a" /* default */],
    Helper: __WEBPACK_IMPORTED_MODULE_2__helper_vue__["a" /* default */]
  },
  computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapState"])(['todos']), {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }
      const completed = this.filter === 'completed';
      return this.todos.filter(todo => completed === todo.completed);
    }
  }),
  methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(['fetchTodos', 'addTodo', 'deleteTodo', 'updateTodo', 'deleteAllCompleted']), {
    handleAdd(e) {
      const content = e.target.value.trim();
      if (!content) {
        this.$notify({
          content: '必须输入要做的内容'
        });
        return;
      }
      const todo = {
        content,
        completed: false
      };
      this.addTodo(todo);
      e.target.value = '';
    },
    // deleteTodo (id) {
    //   this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    // },
    toggleTodoState(todo) {
      this.updateTodo({
        id: todo.id,
        todo: Object.assign({}, todo, {
          completed: !todo.completed
        })
      });
    },
    clearAllCompleted() {
      // this.todos = this.todos.filter(todo => !todo.completed)
      this.deleteAllCompleted();
    },
    handleChangeTab(value) {
      this.filter = value;
    }
  })
});

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('del', this.todo.id);
    },
    handleToggle(e) {
      e.preventDefault();
      this.$emit('toggle', this.todo);
    }
  }
});

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  computed: {
    unFinishedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    clearAllCompleted() {
      this.$emit('clearAllCompleted');
    }
  }
});

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(51)
module.exports.__inject__ = function (context) {
  add("56ffcdaa", content, true, context)
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(undefined);
// imports


// module
exports.push([module.i, ".real-app[data-v-e53bb554]{width:600px;margin:0 auto;-webkit-box-shadow:0 0 5px #666;box-shadow:0 0 5px #666}.add-input[data-v-e53bb554]{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;outline:none;color:inherit;padding:6px;border:1px solid #999;-webkit-box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);-webkit-box-sizing:border-box;box-sizing:border-box;font-smoothing:antialiased;padding:16px 16px 16px 60px;border:none;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}.tab-container[data-v-e53bb554]{background-color:#fff;padding:0 15px}", ""]);

// exports


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1c8d2738_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__ = __webpack_require__(65);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(61),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1c8d2738"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "a2976f52"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1c8d2738_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(51)
module.exports.__inject__ = function (context) {
  add("24a60a1a", content, true, context)
};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(undefined);
// imports


// module
exports.push([module.i, ".todo-item[data-v-1c8d2738]{position:relative;background-color:#fff;font-size:24px;border-bottom:1px solid rgba(0,0,0,.06)}.todo-item:hover .destory[data-v-1c8d2738]:after{content:\"\\D7\"}.todo-item label[data-v-1c8d2738]{white-space:pre-line;word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s}.todo-item.completed label[data-v-1c8d2738]{color:#d9d9d9;text-decoration:line-through}.toggle[data-v-1c8d2738]{text-align:center;width:40px;height:40px;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.toggle[data-v-1c8d2738]:after{content:url(" + __webpack_require__(63) + ")}.toggle[data-v-1c8d2738]:checked:after{content:url(" + __webpack_require__(64) + ")}.destory[data-v-1c8d2738]{position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;-webkit-transition:color .2s ease-out;transition:color .2s ease-out;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:0;cursor:pointer;outline:none}", ""]);

// exports


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTEwIC0xOCAxMDAgMTM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWRlZGVkIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTEwIC0xOCAxMDAgMTM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYmRkYWQ1IiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBmaWxsPSIjNWRjMmFmIiBkPSJNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnoiLz48L3N2Zz4="

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['todo-item', _vm.todo.completed ? 'completed' : '']},[_vm._ssrNode("<input type=\"checkbox\""+(_vm._ssrAttr("checked",_vm.todo.completed))+" class=\"toggle\" data-v-1c8d2738> <label data-v-1c8d2738>"+_vm._ssrEscape(_vm._s(_vm.todo.content))+"</label> <button class=\"destory\" data-v-1c8d2738></button>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_helper_vue__ = __webpack_require__(56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_454f3a12_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_helper_vue__ = __webpack_require__(69);
function injectStyle (ssrContext) {
var i
;(i=__webpack_require__(67),i.__inject__&&i.__inject__(ssrContext),i)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-454f3a12"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "01d4bc72"
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_helper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_454f3a12_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_helper_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(51)
module.exports.__inject__ = function (context) {
  add("2de48159", content, true, context)
};

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(50)(undefined);
// imports


// module
exports.push([module.i, ".helper[data-v-454f3a12]{font-weight:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:5px 0;line-height:30px;background-color:#fff;font-size:14px;font-smoothing:antialiased}.clear[data-v-454f3a12],.left[data-v-454f3a12],.tabs[data-v-454f3a12]{padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}.clear[data-v-454f3a12],.left[data-v-454f3a12]{width:150px}.left[data-v-454f3a12]{text-align:left}.clear[data-v-454f3a12]{text-align:right;cursor:pointer}.tabs[data-v-454f3a12]{width:200px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.tabs [data-v-454f3a12]{display:inline-block;padding:0 10px;cursor:pointer;border:1px solid rgba(175,47,47,0)}.tabs .actived[data-v-454f3a12]{border-color:rgba(175,47,47,.4);border-radius:5px}", ""]);

// exports


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"helper"},[_vm._ssrNode("<span class=\"left\" data-v-454f3a12>"+_vm._ssrEscape(_vm._s(_vm.unFinishedTodoLength)+" items left")+"</span> <span class=\"clear\" data-v-454f3a12>Clear Completed</span>")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"real-app"},[_vm._ssrNode("<div class=\"tab-container\" data-v-e53bb554>","</div>",[_c('tabs',{attrs:{"value":_vm.filter},on:{"change":_vm.handleChangeTab}},_vm._l((_vm.stats),function(tab){return _c('tab',{key:tab,attrs:{"label":tab,"index":tab}})}))],1),_vm._ssrNode(" <input type=\"text\" autofocus=\"autofocus\" placeholder=\"接下去要做什么？\" class=\"add-input\" data-v-e53bb554> "),_vm._l((_vm.filteredTodos),function(todo){return _c('item',{key:todo.id,attrs:{"todo":todo},on:{"del":_vm.deleteTodo,"toggle":_vm.toggleTodoState}})}),_vm._ssrNode(" "),_c('helper',{attrs:{"filter":_vm.filter,"todos":_vm.todos},on:{"clearAllCompleted":_vm.clearAllCompleted}})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

};;
//# sourceMappingURL=0.server-entry.js.map