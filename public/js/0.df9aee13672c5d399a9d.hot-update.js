webpackHotUpdate(0,{

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\t\tvalue: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(9);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(7);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(8);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n\t\tSocial: {\n\t\t\t\tdisplayName: 'Social'\n\t\t}\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n\t\tfilename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Social.js',\n\t\tcomponents: _components,\n\t\tlocals: [module],\n\t\timports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n\t\tfilename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Social.js',\n\t\tcomponents: _components,\n\t\tlocals: [],\n\t\timports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n\t\treturn function (Component) {\n\t\t\t\treturn _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n\t\t};\n}\n\nvar FontAwesome = __webpack_require__(429);\n\nvar Social = _wrapComponent('Social')(function (_get__$Component) {\n\t\t_inherits(Social, _get__$Component);\n\n\t\tfunction Social() {\n\t\t\t\t_classCallCheck(this, Social);\n\n\t\t\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(Social).apply(this, arguments));\n\t\t}\n\n\t\t_createClass(Social, [{\n\t\t\t\tkey: 'render',\n\t\t\t\tvalue: function render() {\n\t\t\t\t\t\tvar _FontAwesome_Component = _get__('FontAwesome');\n\n\t\t\t\t\t\tvar _FontAwesome_Component2 = _get__('FontAwesome');\n\n\t\t\t\t\t\tvar _FontAwesome_Component3 = _get__('FontAwesome');\n\n\t\t\t\t\t\treturn _react3.default.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'col-sm-12' },\n\t\t\t\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t\t{ href: 'https://www.facebook.com/amigossauro/', target: '_blank' },\n\t\t\t\t\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component, {\n\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\t\t\t\t\t\tname: 'facebook',\n\t\t\t\t\t\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\t\t\t\t\t\tstyle: { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t\t{ href: '', target: '_blank' },\n\t\t\t\t\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component2, {\n\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\t\t\t\t\t\tname: 'instagram',\n\t\t\t\t\t\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\t\t\t\t\t\tstyle: { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\t_react3.default.createElement(\n\t\t\t\t\t\t\t\t\t\t'a',\n\t\t\t\t\t\t\t\t\t\t{ href: '', target: '_blank' },\n\t\t\t\t\t\t\t\t\t\t_react3.default.createElement(_FontAwesome_Component3, {\n\t\t\t\t\t\t\t\t\t\t\t\tclassName: 'fa-fw',\n\t\t\t\t\t\t\t\t\t\t\t\tname: 'youtube',\n\t\t\t\t\t\t\t\t\t\t\t\tsize: '2x',\n\t\t\t\t\t\t\t\t\t\t\t\tstyle: { textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t);\n\t\t\t\t}\n\t\t}]);\n\n\t\treturn Social;\n}(_get__('React').Component));\n\nexports.default = _get__('Social');\n\nvar _RewiredData__ = Object.create(null);\n\nvar INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';\nvar _RewireAPI__ = {};\n\n(function () {\n\t\tfunction addPropertyToAPIObject(name, value) {\n\t\t\t\tObject.defineProperty(_RewireAPI__, name, {\n\t\t\t\t\t\tvalue: value,\n\t\t\t\t\t\tenumerable: false,\n\t\t\t\t\t\tconfigurable: true\n\t\t\t\t});\n\t\t}\n\n\t\taddPropertyToAPIObject('__get__', _get__);\n\t\taddPropertyToAPIObject('__GetDependency__', _get__);\n\t\taddPropertyToAPIObject('__Rewire__', _set__);\n\t\taddPropertyToAPIObject('__set__', _set__);\n\t\taddPropertyToAPIObject('__reset__', _reset__);\n\t\taddPropertyToAPIObject('__ResetDependency__', _reset__);\n\t\taddPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n\t\tif (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n\t\t\t\treturn _get_original__(variableName);\n\t\t} else {\n\t\t\t\tvar value = _RewiredData__[variableName];\n\n\t\t\t\tif (value === INTENTIONAL_UNDEFINED) {\n\t\t\t\t\t\treturn undefined;\n\t\t\t\t} else {\n\t\t\t\t\t\treturn value;\n\t\t\t\t}\n\t\t}\n}\n\nfunction _get_original__(variableName) {\n\t\tswitch (variableName) {\n\t\t\t\tcase 'FontAwesome':\n\t\t\t\t\t\treturn FontAwesome;\n\n\t\t\t\tcase 'React':\n\t\t\t\t\t\treturn _react3.default;\n\n\t\t\t\tcase 'Social':\n\t\t\t\t\t\treturn Social;\n\t\t}\n\n\t\treturn undefined;\n}\n\nfunction _assign__(variableName, value) {\n\t\tif (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n\t\t\t\treturn _set_original__(variableName, value);\n\t\t} else {\n\t\t\t\treturn _RewiredData__[variableName] = value;\n\t\t}\n}\n\nfunction _set_original__(variableName, _value) {\n\t\tswitch (variableName) {}\n\n\t\treturn undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n\t\tvar oldValue = _get__(variableName);\n\n\t\tvar newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n\t\t_assign__(variableName, newValue);\n\n\t\treturn prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n\t\tif ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n\t\t\t\tObject.keys(variableName).forEach(function (name) {\n\t\t\t\t\t\t_RewiredData__[name] = variableName[name];\n\t\t\t\t});\n\t\t} else {\n\t\t\t\tif (value === undefined) {\n\t\t\t\t\t\t_RewiredData__[variableName] = INTENTIONAL_UNDEFINED;\n\t\t\t\t} else {\n\t\t\t\t\t\t_RewiredData__[variableName] = value;\n\t\t\t\t}\n\n\t\t\t\treturn value;\n\t\t}\n}\n\nfunction _reset__(variableName) {\n\t\tdelete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n\t\tvar rewiredVariableNames = Object.keys(object);\n\t\tvar previousValues = {};\n\n\t\tfunction reset() {\n\t\t\t\trewiredVariableNames.forEach(function (variableName) {\n\t\t\t\t\t\t_RewiredData__[variableName] = previousValues[variableName];\n\t\t\t\t});\n\t\t}\n\n\t\treturn function (callback) {\n\t\t\t\trewiredVariableNames.forEach(function (variableName) {\n\t\t\t\t\t\tpreviousValues[variableName] = _RewiredData__[variableName];\n\t\t\t\t\t\t_RewiredData__[variableName] = object[variableName];\n\t\t\t\t});\n\t\t\t\tvar result = callback();\n\n\t\t\t\tif (!!result && typeof result.then == 'function') {\n\t\t\t\t\t\tresult.then(reset).catch(reset);\n\t\t\t\t} else {\n\t\t\t\t\t\treset();\n\t\t\t\t}\n\n\t\t\t\treturn result;\n\t\t};\n}\n\nvar _typeOfOriginalExport = typeof Social === 'undefined' ? 'undefined' : _typeof(Social);\n\nfunction addNonEnumerableProperty(name, value) {\n\t\tObject.defineProperty(Social, name, {\n\t\t\t\tvalue: value,\n\t\t\t\tenumerable: false,\n\t\t\t\tconfigurable: true\n\t\t});\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Social)) {\n\t\taddNonEnumerableProperty('__get__', _get__);\n\t\taddNonEnumerableProperty('__GetDependency__', _get__);\n\t\taddNonEnumerableProperty('__Rewire__', _set__);\n\t\taddNonEnumerableProperty('__set__', _set__);\n\t\taddNonEnumerableProperty('__reset__', _reset__);\n\t\taddNonEnumerableProperty('__ResetDependency__', _reset__);\n\t\taddNonEnumerableProperty('__with__', _with__);\n\t\taddNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU29jaWFsLmpzPzliMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbnZhciBGb250QXdlc29tZSA9IHJlcXVpcmUoJ3JlYWN0LWZvbnRhd2Vzb21lJyk7XG5cbmNsYXNzIFNvY2lhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTJcIj4gXG5cdFx0PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9hbWlnb3NzYXVyby9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0ICAgICAgPEZvbnRBd2Vzb21lXG5cdCAgICAgICAgY2xhc3NOYW1lPSdmYS1mdydcblx0ICAgICAgICBuYW1lPSdmYWNlYm9vaydcblx0ICAgICAgICBzaXplPScyeCdcblx0ICAgICAgICBzdHlsZT17eyB0ZXh0U2hhZG93OiAnMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSknIH19XG5cdCAgICAgIC8+XG5cdCAgICA8L2E+XG5cdFx0PGEgaHJlZj1cIlwiIHRhcmdldD1cIl9ibGFua1wiPlxuXHQgICAgICA8Rm9udEF3ZXNvbWVcblx0ICAgICAgICBjbGFzc05hbWU9J2ZhLWZ3J1xuXHQgICAgICAgIG5hbWU9J2luc3RhZ3JhbSdcblx0ICAgICAgICBzaXplPScyeCdcblx0ICAgICAgICBzdHlsZT17eyB0ZXh0U2hhZG93OiAnMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMSknIH19XG5cdCAgICAgIC8+ICBcblx0ICAgIDwvYT5cblx0XHQ8YSBocmVmPVwiXCIgdGFyZ2V0PVwiX2JsYW5rXCI+ICAgICAgXG5cdFx0PEZvbnRBd2Vzb21lXG5cdCAgICAgICAgY2xhc3NOYW1lPSdmYS1mdydcblx0ICAgICAgICBuYW1lPSd5b3V0dWJlJ1xuXHQgICAgICAgIHNpemU9JzJ4J1xuXHQgICAgICAgIHN0eWxlPXt7IHRleHRTaGFkb3c6ICcwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xKScgfX1cblx0ICAgICAgLz5cblx0ICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKFNvY2lhbCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL2NvbXBvbmVudHMvU29jaWFsLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFBQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFqQkE7QUEyQkE7Ozs7QUE5QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})