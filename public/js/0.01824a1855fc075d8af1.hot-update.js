webpackHotUpdate(0,{

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(9);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(7);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(8);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n\tSocial: {\n\t\tdisplayName: 'Social'\n\t}\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n\tfilename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Social.js',\n\tcomponents: _components,\n\tlocals: [module],\n\timports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n\tfilename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Social.js',\n\tcomponents: _components,\n\tlocals: [],\n\timports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n\treturn function (Component) {\n\t\treturn _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n\t};\n}\n\nvar FontAwesome = __webpack_require__(429);\n\nvar Social = _wrapComponent('Social')(function (_get__$Component) {\n\t_inherits(Social, _get__$Component);\n\n\tfunction Social() {\n\t\t_classCallCheck(this, Social);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(Social).apply(this, arguments));\n\t}\n\n\t_createClass(Social, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _FontAwesome_Component = _get__('FontAwesome');\n\n\t\t\tvar _FontAwesome_Component2 = _get__('FontAwesome');\n\n\t\t\tvar _FontAwesome_Component3 = _get__('FontAwesome');\n\n\t\t\treturn _react3.default.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'col-sm-12' },\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ href: 'https://www.facebook.com/amigossauro/', target: '_blank' },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ 'class': 'fa-stack fa-4x' },\n\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component, {\n\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\tname: 'facebook',\n\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\tstyle: { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ href: 'https://www.youtube.com/channel/UCnBPgN6OQ1zkbYq1JAl9h2Q', target: '_blank' },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ 'class': 'fa-stack fa-4x' },\n\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component2, {\n\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\tname: 'instagram',\n\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\tstyle: { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t'a',\n\t\t\t\t\t{ href: 'https://www.instagram.com/amigossauro/', target: '_blank' },\n\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t'span',\n\t\t\t\t\t\t{ 'class': 'fa-stack fa-4x' },\n\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component3, {\n\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\tname: 'youtube',\n\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\tstyle: { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Social;\n}(_get__('React').Component));\n\nexports.default = _get__('Social');\n\nvar _RewiredData__ = Object.create(null);\n\nvar INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';\nvar _RewireAPI__ = {};\n\n(function () {\n\tfunction addPropertyToAPIObject(name, value) {\n\t\tObject.defineProperty(_RewireAPI__, name, {\n\t\t\tvalue: value,\n\t\t\tenumerable: false,\n\t\t\tconfigurable: true\n\t\t});\n\t}\n\n\taddPropertyToAPIObject('__get__', _get__);\n\taddPropertyToAPIObject('__GetDependency__', _get__);\n\taddPropertyToAPIObject('__Rewire__', _set__);\n\taddPropertyToAPIObject('__set__', _set__);\n\taddPropertyToAPIObject('__reset__', _reset__);\n\taddPropertyToAPIObject('__ResetDependency__', _reset__);\n\taddPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n\tif (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n\t\treturn _get_original__(variableName);\n\t} else {\n\t\tvar value = _RewiredData__[variableName];\n\n\t\tif (value === INTENTIONAL_UNDEFINED) {\n\t\t\treturn undefined;\n\t\t} else {\n\t\t\treturn value;\n\t\t}\n\t}\n}\n\nfunction _get_original__(variableName) {\n\tswitch (variableName) {\n\t\tcase 'FontAwesome':\n\t\t\treturn FontAwesome;\n\n\t\tcase 'React':\n\t\t\treturn _react3.default;\n\n\t\tcase 'Social':\n\t\t\treturn Social;\n\t}\n\n\treturn undefined;\n}\n\nfunction _assign__(variableName, value) {\n\tif (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n\t\treturn _set_original__(variableName, value);\n\t} else {\n\t\treturn _RewiredData__[variableName] = value;\n\t}\n}\n\nfunction _set_original__(variableName, _value) {\n\tswitch (variableName) {}\n\n\treturn undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n\tvar oldValue = _get__(variableName);\n\n\tvar newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n\t_assign__(variableName, newValue);\n\n\treturn prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n\tif ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n\t\tObject.keys(variableName).forEach(function (name) {\n\t\t\t_RewiredData__[name] = variableName[name];\n\t\t});\n\t} else {\n\t\tif (value === undefined) {\n\t\t\t_RewiredData__[variableName] = INTENTIONAL_UNDEFINED;\n\t\t} else {\n\t\t\t_RewiredData__[variableName] = value;\n\t\t}\n\n\t\treturn value;\n\t}\n}\n\nfunction _reset__(variableName) {\n\tdelete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n\tvar rewiredVariableNames = Object.keys(object);\n\tvar previousValues = {};\n\n\tfunction reset() {\n\t\trewiredVariableNames.forEach(function (variableName) {\n\t\t\t_RewiredData__[variableName] = previousValues[variableName];\n\t\t});\n\t}\n\n\treturn function (callback) {\n\t\trewiredVariableNames.forEach(function (variableName) {\n\t\t\tpreviousValues[variableName] = _RewiredData__[variableName];\n\t\t\t_RewiredData__[variableName] = object[variableName];\n\t\t});\n\t\tvar result = callback();\n\n\t\tif (!!result && typeof result.then == 'function') {\n\t\t\tresult.then(reset).catch(reset);\n\t\t} else {\n\t\t\treset();\n\t\t}\n\n\t\treturn result;\n\t};\n}\n\nvar _typeOfOriginalExport = typeof Social === 'undefined' ? 'undefined' : _typeof(Social);\n\nfunction addNonEnumerableProperty(name, value) {\n\tObject.defineProperty(Social, name, {\n\t\tvalue: value,\n\t\tenumerable: false,\n\t\tconfigurable: true\n\t});\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Social)) {\n\taddNonEnumerableProperty('__get__', _get__);\n\taddNonEnumerableProperty('__GetDependency__', _get__);\n\taddNonEnumerableProperty('__Rewire__', _set__);\n\taddNonEnumerableProperty('__set__', _set__);\n\taddNonEnumerableProperty('__reset__', _reset__);\n\taddNonEnumerableProperty('__ResetDependency__', _reset__);\n\taddNonEnumerableProperty('__with__', _with__);\n\taddNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU29jaWFsLmpzPzliMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBGb250QXdlc29tZSA9IHJlcXVpcmUoJ3JlYWN0LWZvbnRhd2Vzb21lJyk7XG5cbmNsYXNzIFNvY2lhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj4gXG5cdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hbWlnb3NzYXVyby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0ICAgICAgXHQ8c3BhbiBjbGFzcz1cImZhLXN0YWNrIGZhLTR4XCI+XG5cdFx0ICAgICAgXHQ8Rm9udEF3ZXNvbWVcblx0XHRcdCAgICAgICAgY2xhc3NOYW1lPSdmYS1mdydcblx0XHRcdCAgICAgICAgbmFtZT0nZmFjZWJvb2snXG5cdFx0XHQgICAgICAgIHNpemU9JzJ4J1xuXHRcdFx0ICAgICAgICBzdHlsZT17eyB0ZXh0U2hhZG93OiAnMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSknIH19XG5cdFx0ICAgICAgXHQvPlxuXHQgICAgICBcdDwvc3Bhbj5cblx0ICAgIDwvYT5cblx0XHQ8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ25CUGdONk9RMXprYllxMUpBbDloMlFcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0ICAgICAgXHQ8c3BhbiBjbGFzcz1cImZhLXN0YWNrIGZhLTR4XCI+XG5cdFx0XHQgICAgIDxGb250QXdlc29tZVxuXHRcdFx0ICAgICAgICBjbGFzc05hbWU9J2ZhLWZ3J1xuXHRcdFx0ICAgICAgICBuYW1lPSdpbnN0YWdyYW0nXG5cdFx0XHQgICAgICAgIHNpemU9JzJ4J1xuXHRcdFx0ICAgICAgICBzdHlsZT17eyB0ZXh0U2hhZG93OiAnMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSknIH19XG5cdFx0XHQgICAgLz4gIFxuXHRcdFx0PC9zcGFuPlxuXHQgICAgPC9hPlxuXHRcdDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FtaWdvc3NhdXJvL1wiIHRhcmdldD1cIl9ibGFua1wiPiAgICAgIFxuXHRcdCAgXHQ8c3BhbiBjbGFzcz1cImZhLXN0YWNrIGZhLTR4XCI+XG5cdFx0XHQgIFx0PEZvbnRBd2Vzb21lXG5cdFx0XHQgICAgICAgIGNsYXNzTmFtZT0nZmEtZncnXG5cdFx0XHQgICAgICAgIG5hbWU9J3lvdXR1YmUnXG5cdFx0XHQgICAgICAgIHNpemU9JzJ4J1xuXHRcdFx0ICAgICAgICBzdHlsZT17eyB0ZXh0U2hhZG93OiAnMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSknIH19XG5cdFx0ICAgICAgXHQvPlxuXHRcdCAgPC9zcGFuPlxuXHQgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoU29jaWFsKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvY29tcG9uZW50cy9Tb2NpYWwuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBREE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFEQTtBQXJCQTtBQWlDQTs7OztBQXBDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTs7QUFEQTs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})