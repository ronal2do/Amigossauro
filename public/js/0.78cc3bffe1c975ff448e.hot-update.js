webpackHotUpdate(0,{

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(9);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(7);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(8);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n\tSocial: {\n\t\tdisplayName: 'Social'\n\t}\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n\tfilename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Social.js',\n\tcomponents: _components,\n\tlocals: [module],\n\timports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n\tfilename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Social.js',\n\tcomponents: _components,\n\tlocals: [],\n\timports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n\treturn function (Component) {\n\t\treturn _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n\t};\n}\n\nvar FontAwesome = __webpack_require__(429);\nvar Facebook = {\n\tmargin: '10px',\n\tcolor: 'white',\n\tpadding: '5px 10px',\n\tmozBorderRadius: '100px',\n\twebkitBorderRadius: '100px',\n\tborderRadius: '100px',\n\tWebkitTransition: 'all', // note the capital 'W' here\n\tmsTransition: 'all', // 'ms' is the only lowercase vendor prefix\n\tshadow: '0 1px 0 rgba(0, 0, 0, 0.1)',\n\tbackgroundColor: 'blue'\n};\nvar Instagram = {\n\tmargin: '10px',\n\tcolor: 'white',\n\tpadding: '5px 10px',\n\tmozBorderRadius: '100px',\n\twebkitBorderRadius: '100px',\n\tborderRadius: '100px',\n\tWebkitTransition: 'all', // note the capital 'W' here\n\tmsTransition: 'all', // 'ms' is the only lowercase vendor prefix\n\tshadow: '0 1px 0 rgba(0, 0, 0, 0.1)',\n\tbackgroundColor: 'navy'\n};\nvar Youtube = {\n\tmargin: '10px',\n\tcolor: 'white',\n\tpadding: '5px 7px',\n\tmozBorderRadius: '100px',\n\twebkitBorderRadius: '100px',\n\tborderRadius: '100px',\n\tWebkitTransition: 'all', // note the capital 'W' here\n\tmsTransition: 'all', // 'ms' is the only lowercase vendor prefix\n\tshadow: '0 1px 0 rgba(0, 0, 0, 0.1)',\n\tbackgroundColor: 'red'\n};\n\nvar Social = _wrapComponent('Social')(function (_get__$Component) {\n\t_inherits(Social, _get__$Component);\n\n\tfunction Social() {\n\t\t_classCallCheck(this, Social);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(Social).apply(this, arguments));\n\t}\n\n\t_createClass(Social, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _FontAwesome_Component = _get__('FontAwesome');\n\n\t\t\tvar _FontAwesome_Component2 = _get__('FontAwesome');\n\n\t\t\tvar _FontAwesome_Component3 = _get__('FontAwesome');\n\n\t\t\treturn _react3.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: '' },\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ href: 'https://www.facebook.com/amigossauro/', target: '_blank' },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ 'class': 'fa-stack fa-4x' },\n\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component, {\n\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\tname: 'facebook',\n\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\tstyle: _get__('Facebook')\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ href: 'https://www.youtube.com/channel/UCnBPgN6OQ1zkbYq1JAl9h2Q', target: '_blank' },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ 'class': 'fa-stack fa-4x' },\n\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component2, {\n\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\tname: 'instagram',\n\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\tstyle: _get__('Instagram')\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ href: 'https://www.instagram.com/amigossauro/', target: '_blank' },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ 'class': 'fa-stack fa-4x' },\n\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component3, {\n\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\tname: 'youtube',\n\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\tstyle: _get__('Youtube')\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Social;\n}(_get__('React').Component));\n\nexports.default = _get__('Social');\n\nvar _RewiredData__ = Object.create(null);\n\nvar INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';\nvar _RewireAPI__ = {};\n\n(function () {\n\tfunction addPropertyToAPIObject(name, value) {\n\t\tObject.defineProperty(_RewireAPI__, name, {\n\t\t\tvalue: value,\n\t\t\tenumerable: false,\n\t\t\tconfigurable: true\n\t\t});\n\t}\n\n\taddPropertyToAPIObject('__get__', _get__);\n\taddPropertyToAPIObject('__GetDependency__', _get__);\n\taddPropertyToAPIObject('__Rewire__', _set__);\n\taddPropertyToAPIObject('__set__', _set__);\n\taddPropertyToAPIObject('__reset__', _reset__);\n\taddPropertyToAPIObject('__ResetDependency__', _reset__);\n\taddPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n\tif (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n\t\treturn _get_original__(variableName);\n\t} else {\n\t\tvar value = _RewiredData__[variableName];\n\n\t\tif (value === INTENTIONAL_UNDEFINED) {\n\t\t\treturn undefined;\n\t\t} else {\n\t\t\treturn value;\n\t\t}\n\t}\n}\n\nfunction _get_original__(variableName) {\n\tswitch (variableName) {\n\t\tcase 'FontAwesome':\n\t\t\treturn FontAwesome;\n\n\t\tcase 'Facebook':\n\t\t\treturn Facebook;\n\n\t\tcase 'Instagram':\n\t\t\treturn Instagram;\n\n\t\tcase 'Youtube':\n\t\t\treturn Youtube;\n\n\t\tcase 'React':\n\t\t\treturn _react3.default;\n\n\t\tcase 'Social':\n\t\t\treturn Social;\n\t}\n\n\treturn undefined;\n}\n\nfunction _assign__(variableName, value) {\n\tif (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n\t\treturn _set_original__(variableName, value);\n\t} else {\n\t\treturn _RewiredData__[variableName] = value;\n\t}\n}\n\nfunction _set_original__(variableName, _value) {\n\tswitch (variableName) {}\n\n\treturn undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n\tvar oldValue = _get__(variableName);\n\n\tvar newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n\t_assign__(variableName, newValue);\n\n\treturn prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n\tif ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n\t\tObject.keys(variableName).forEach(function (name) {\n\t\t\t_RewiredData__[name] = variableName[name];\n\t\t});\n\t} else {\n\t\tif (value === undefined) {\n\t\t\t_RewiredData__[variableName] = INTENTIONAL_UNDEFINED;\n\t\t} else {\n\t\t\t_RewiredData__[variableName] = value;\n\t\t}\n\n\t\treturn value;\n\t}\n}\n\nfunction _reset__(variableName) {\n\tdelete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n\tvar rewiredVariableNames = Object.keys(object);\n\tvar previousValues = {};\n\n\tfunction reset() {\n\t\trewiredVariableNames.forEach(function (variableName) {\n\t\t\t_RewiredData__[variableName] = previousValues[variableName];\n\t\t});\n\t}\n\n\treturn function (callback) {\n\t\trewiredVariableNames.forEach(function (variableName) {\n\t\t\tpreviousValues[variableName] = _RewiredData__[variableName];\n\t\t\t_RewiredData__[variableName] = object[variableName];\n\t\t});\n\t\tvar result = callback();\n\n\t\tif (!!result && typeof result.then == 'function') {\n\t\t\tresult.then(reset).catch(reset);\n\t\t} else {\n\t\t\treset();\n\t\t}\n\n\t\treturn result;\n\t};\n}\n\nvar _typeOfOriginalExport = typeof Social === 'undefined' ? 'undefined' : _typeof(Social);\n\nfunction addNonEnumerableProperty(name, value) {\n\tObject.defineProperty(Social, name, {\n\t\tvalue: value,\n\t\tenumerable: false,\n\t\tconfigurable: true\n\t});\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Social)) {\n\taddNonEnumerableProperty('__get__', _get__);\n\taddNonEnumerableProperty('__GetDependency__', _get__);\n\taddNonEnumerableProperty('__Rewire__', _set__);\n\taddNonEnumerableProperty('__set__', _set__);\n\taddNonEnumerableProperty('__reset__', _reset__);\n\taddNonEnumerableProperty('__ResetDependency__', _reset__);\n\taddNonEnumerableProperty('__with__', _with__);\n\taddNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU29jaWFsLmpzPzliMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBGb250QXdlc29tZSA9IHJlcXVpcmUoJ3JlYWN0LWZvbnRhd2Vzb21lJyk7XG52YXIgRmFjZWJvb2sgPSB7XG5cdCAgbWFyZ2luOiAnMTBweCcsXG5cdCAgY29sb3I6ICd3aGl0ZScsXG5cdCAgcGFkZGluZzogJzVweCAxMHB4Jyxcblx0ICBtb3pCb3JkZXJSYWRpdXM6ICcxMDBweCcsXG5cdCAgd2Via2l0Qm9yZGVyUmFkaXVzOiAnMTAwcHgnLFxuXHQgIGJvcmRlclJhZGl1czogJzEwMHB4Jyxcblx0ICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsJywgLy8gbm90ZSB0aGUgY2FwaXRhbCAnVycgaGVyZVxuXHQgIG1zVHJhbnNpdGlvbjogJ2FsbCcsIC8vICdtcycgaXMgdGhlIG9ubHkgbG93ZXJjYXNlIHZlbmRvciBwcmVmaXhcblx0ICBzaGFkb3c6ICcwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKScsXG5cdCAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZSdcbiB9O1xuIHZhciBJbnN0YWdyYW0gPSB7XG5cdCAgbWFyZ2luOiAnMTBweCcsXG5cdCAgY29sb3I6ICd3aGl0ZScsXG5cdCAgcGFkZGluZzogJzVweCAxMHB4Jyxcblx0ICBtb3pCb3JkZXJSYWRpdXM6ICcxMDBweCcsXG5cdCAgd2Via2l0Qm9yZGVyUmFkaXVzOiAnMTAwcHgnLFxuXHQgIGJvcmRlclJhZGl1czogJzEwMHB4Jyxcblx0ICBXZWJraXRUcmFuc2l0aW9uOiAnYWxsJywgLy8gbm90ZSB0aGUgY2FwaXRhbCAnVycgaGVyZVxuXHQgIG1zVHJhbnNpdGlvbjogJ2FsbCcsIC8vICdtcycgaXMgdGhlIG9ubHkgbG93ZXJjYXNlIHZlbmRvciBwcmVmaXhcblx0ICBzaGFkb3c6ICcwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKScsXG5cdCAgYmFja2dyb3VuZENvbG9yOiAnbmF2eSdcbiB9O1xudmFyIFlvdXR1YmUgPSB7XG5cdCAgbWFyZ2luOiAnMTBweCcsXG5cdCAgY29sb3I6ICd3aGl0ZScsXG5cdCAgcGFkZGluZzogJzVweCA3cHgnLFxuXHQgIG1vekJvcmRlclJhZGl1czogJzEwMHB4Jyxcblx0ICB3ZWJraXRCb3JkZXJSYWRpdXM6ICcxMDBweCcsXG5cdCAgYm9yZGVyUmFkaXVzOiAnMTAwcHgnLFxuXHQgIFdlYmtpdFRyYW5zaXRpb246ICdhbGwnLCAvLyBub3RlIHRoZSBjYXBpdGFsICdXJyBoZXJlXG5cdCAgbXNUcmFuc2l0aW9uOiAnYWxsJywgLy8gJ21zJyBpcyB0aGUgb25seSBsb3dlcmNhc2UgdmVuZG9yIHByZWZpeFxuXHQgIHNoYWRvdzogJzAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpJyxcblx0ICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnXG4gfTtcblxuY2xhc3MgU29jaWFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPiBcblx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FtaWdvc3NhdXJvL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuXHQgICAgICBcdDxzcGFuIGNsYXNzPVwiZmEtc3RhY2sgZmEtNHhcIj5cblx0XHQgICAgICBcdDxGb250QXdlc29tZVxuXHRcdFx0ICAgICAgICBjbGFzc05hbWU9J2ZhLWZ3J1xuXHRcdFx0ICAgICAgICBuYW1lPSdmYWNlYm9vaydcblx0XHRcdCAgICAgICAgc2l6ZT0nMngnXG5cdFx0XHQgICAgICAgIHN0eWxlPXtGYWNlYm9va31cblx0XHQgICAgICBcdC8+XG5cdCAgICAgIFx0PC9zcGFuPlxuXHQgICAgPC9hPlxuXHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDbkJQZ042T1ExemtiWXExSkFsOWgyUVwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHQgICAgICBcdDxzcGFuIGNsYXNzPVwiZmEtc3RhY2sgZmEtNHhcIj5cblx0XHRcdCAgICAgPEZvbnRBd2Vzb21lXG5cdFx0XHQgICAgICAgIGNsYXNzTmFtZT0nZmEtZncnXG5cdFx0XHQgICAgICAgIG5hbWU9J2luc3RhZ3JhbSdcblx0XHRcdCAgICAgICAgc2l6ZT0nMngnXG5cdFx0XHQgICAgICAgIHN0eWxlPXtJbnN0YWdyYW19XG5cdFx0XHQgICAgLz4gIFxuXHRcdFx0PC9zcGFuPlxuXHQgICAgPC9hPlxuXHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FtaWdvc3NhdXJvL1wiIHRhcmdldD1cIl9ibGFua1wiPiAgICAgIFxuXHRcdCAgXHQ8c3BhbiBjbGFzcz1cImZhLXN0YWNrIGZhLTR4XCI+XG5cdFx0XHQgIFx0PEZvbnRBd2Vzb21lXG5cdFx0XHQgICAgICAgIGNsYXNzTmFtZT0nZmEtZncnXG5cdFx0XHQgICAgICAgIG5hbWU9J3lvdXR1YmUnXG5cdFx0XHQgICAgICAgIHNpemU9JzJ4J1xuXHRcdFx0ICAgICAgICBzdHlsZT17WW91dHViZX1cblx0XHQgICAgICBcdC8+XG5cdFx0ICA8L3NwYW4+XG5cdCAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IChTb2NpYWwpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGFwcC9jb21wb25lbnRzL1NvY2lhbC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7Ozs7Ozs7Ozs7OztBQWFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQURBO0FBckJBO0FBaUNBOzs7O0FBcENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBOztBQURBOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})