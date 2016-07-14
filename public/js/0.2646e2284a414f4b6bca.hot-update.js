webpackHotUpdate(0,{

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(9);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(7);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(8);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactFontawesome = __webpack_require__(543);\n\nvar _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Social: {\n    displayName: 'Social'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Social.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Social.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Social = _wrapComponent('Social')(function (_get__$Component) {\n  _inherits(Social, _get__$Component);\n\n  function Social() {\n    _classCallCheck(this, Social);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(Social).apply(this, arguments));\n  }\n\n  _createClass(Social, [{\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        { className: 'col-sm-12' },\n        'facebook instagram youtube'\n      );\n    }\n  }]);\n\n  return Social;\n}(_get__('React').Component));\n\nexports.default = _get__('Social');\n\nvar _RewiredData__ = Object.create(null);\n\nvar INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _get_original__(variableName);\n  } else {\n    var value = _RewiredData__[variableName];\n\n    if (value === INTENTIONAL_UNDEFINED) {\n      return undefined;\n    } else {\n      return value;\n    }\n  }\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'React':\n      return _react3.default;\n\n    case 'Social':\n      return Social;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    if (value === undefined) {\n      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;\n    } else {\n      _RewiredData__[variableName] = value;\n    }\n\n    return value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof Social === 'undefined' ? 'undefined' : _typeof(Social);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(Social, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Social)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvU29jaWFsLmpzPzliMzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEZvbnRBd2Vzb21lIGZyb20gJ3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY2xhc3MgU29jaWFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMlwiPlxuICAgICAgIFx0ZmFjZWJvb2sgaW5zdGFncmFtIHlvdXR1YmVcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKFNvY2lhbCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYXBwL2NvbXBvbmVudHMvU29jaWFsLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7OztBQVBBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n/**\n * A React component for the font-awesome icon library.\n *\n *\n * @param {Boolean} [border=false] Whether or not to show a border radius\n * @param {String} [className] An extra set of CSS classes to add to the component\n * @param {Boolean} [fixedWidth=false] Make buttons fixed width\n * @param {String} [flip=false] Flip the icon's orientation.\n * @param {Boolean} [inverse=false]Inverse the icon's color\n * @param {String} name Name of the icon to use\n * @param {Boolean} [pulse=false] Rotate icon with 8 steps (rather than smoothly)\n * @param {Number} [rotate] The degress to rotate the icon by\n * @param {String} [size] The icon scaling size\n * @param {Boolean} [spin=false] Spin the icon\n * @param {String} [stack] Stack an icon on top of another\n * @module FontAwesome\n * @type {ReactClass}\n */\nexports.default = _react2.default.createClass({\n\n  displayName: 'FontAwesome',\n\n  propTypes: {\n    border: _react2.default.PropTypes.bool,\n    className: _react2.default.PropTypes.string,\n    fixedWidth: _react2.default.PropTypes.bool,\n    flip: _react2.default.PropTypes.oneOf(['horizontal', 'vertical']),\n    inverse: _react2.default.PropTypes.bool,\n    name: _react2.default.PropTypes.string.isRequired,\n    pulse: _react2.default.PropTypes.bool,\n    rotate: _react2.default.PropTypes.oneOf([90, 180, 270]),\n    size: _react2.default.PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),\n    spin: _react2.default.PropTypes.bool,\n    stack: _react2.default.PropTypes.oneOf(['1x', '2x'])\n  },\n\n  render: function render() {\n    var _props = this.props;\n    var border = _props.border;\n    var fixedWidth = _props.fixedWidth;\n    var flip = _props.flip;\n    var inverse = _props.inverse;\n    var name = _props.name;\n    var pulse = _props.pulse;\n    var rotate = _props.rotate;\n    var size = _props.size;\n    var spin = _props.spin;\n    var stack = _props.stack;\n\n    var props = _objectWithoutProperties(_props, ['border', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack']);\n\n    var className = 'fa fa-' + name;\n\n    if (size) {\n      className += ' fa-' + size;\n    }\n\n    if (spin) {\n      className += ' fa-spin';\n    }\n\n    if (pulse) {\n      className += ' fa-pulse';\n    }\n\n    if (border) {\n      className += ' fa-border';\n    }\n\n    if (fixedWidth) {\n      className += ' fa-fw';\n    }\n\n    if (inverse) {\n      className += ' fa-inverse';\n    }\n\n    if (flip) {\n      className += ' fa-flip-' + flip;\n    }\n\n    if (rotate) {\n      className += ' fa-rotate-' + rotate;\n    }\n\n    if (stack) {\n      className += ' fa-stack-' + stack;\n    }\n\n    if (this.props.className) {\n      className += ' ' + this.props.className;\n    }\n\n    return _react2.default.createElement('span', _extends({}, props, {\n      className: className\n    }));\n  }\n});\nmodule.exports = exports['default'];//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mb250YXdlc29tZS9saWIvaW5kZXguanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4vKipcbiAqIEEgUmVhY3QgY29tcG9uZW50IGZvciB0aGUgZm9udC1hd2Vzb21lIGljb24gbGlicmFyeS5cbiAqXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBbYm9yZGVyPWZhbHNlXSBXaGV0aGVyIG9yIG5vdCB0byBzaG93IGEgYm9yZGVyIHJhZGl1c1xuICogQHBhcmFtIHtTdHJpbmd9IFtjbGFzc05hbWVdIEFuIGV4dHJhIHNldCBvZiBDU1MgY2xhc3NlcyB0byBhZGQgdG8gdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIHtCb29sZWFufSBbZml4ZWRXaWR0aD1mYWxzZV0gTWFrZSBidXR0b25zIGZpeGVkIHdpZHRoXG4gKiBAcGFyYW0ge1N0cmluZ30gW2ZsaXA9ZmFsc2VdIEZsaXAgdGhlIGljb24ncyBvcmllbnRhdGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ludmVyc2U9ZmFsc2VdSW52ZXJzZSB0aGUgaWNvbidzIGNvbG9yXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBOYW1lIG9mIHRoZSBpY29uIHRvIHVzZVxuICogQHBhcmFtIHtCb29sZWFufSBbcHVsc2U9ZmFsc2VdIFJvdGF0ZSBpY29uIHdpdGggOCBzdGVwcyAocmF0aGVyIHRoYW4gc21vb3RobHkpXG4gKiBAcGFyYW0ge051bWJlcn0gW3JvdGF0ZV0gVGhlIGRlZ3Jlc3MgdG8gcm90YXRlIHRoZSBpY29uIGJ5XG4gKiBAcGFyYW0ge1N0cmluZ30gW3NpemVdIFRoZSBpY29uIHNjYWxpbmcgc2l6ZVxuICogQHBhcmFtIHtCb29sZWFufSBbc3Bpbj1mYWxzZV0gU3BpbiB0aGUgaWNvblxuICogQHBhcmFtIHtTdHJpbmd9IFtzdGFja10gU3RhY2sgYW4gaWNvbiBvbiB0b3Agb2YgYW5vdGhlclxuICogQG1vZHVsZSBGb250QXdlc29tZVxuICogQHR5cGUge1JlYWN0Q2xhc3N9XG4gKi9cbmV4cG9ydHMuZGVmYXVsdCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG5cbiAgZGlzcGxheU5hbWU6ICdGb250QXdlc29tZScsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgYm9yZGVyOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaXhlZFdpZHRoOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgZmxpcDogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG4gICAgaW52ZXJzZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgcHVsc2U6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICByb3RhdGU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWzkwLCAxODAsIDI3MF0pLFxuICAgIHNpemU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWydsZycsICcyeCcsICczeCcsICc0eCcsICc1eCddKSxcbiAgICBzcGluOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmJvb2wsXG4gICAgc3RhY2s6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoWycxeCcsICcyeCddKVxuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBib3JkZXIgPSBfcHJvcHMuYm9yZGVyO1xuICAgIHZhciBmaXhlZFdpZHRoID0gX3Byb3BzLmZpeGVkV2lkdGg7XG4gICAgdmFyIGZsaXAgPSBfcHJvcHMuZmxpcDtcbiAgICB2YXIgaW52ZXJzZSA9IF9wcm9wcy5pbnZlcnNlO1xuICAgIHZhciBuYW1lID0gX3Byb3BzLm5hbWU7XG4gICAgdmFyIHB1bHNlID0gX3Byb3BzLnB1bHNlO1xuICAgIHZhciByb3RhdGUgPSBfcHJvcHMucm90YXRlO1xuICAgIHZhciBzaXplID0gX3Byb3BzLnNpemU7XG4gICAgdmFyIHNwaW4gPSBfcHJvcHMuc3BpbjtcbiAgICB2YXIgc3RhY2sgPSBfcHJvcHMuc3RhY2s7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ2JvcmRlcicsICdmaXhlZFdpZHRoJywgJ2ZsaXAnLCAnaW52ZXJzZScsICduYW1lJywgJ3B1bHNlJywgJ3JvdGF0ZScsICdzaXplJywgJ3NwaW4nLCAnc3RhY2snXSk7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gJ2ZhIGZhLScgKyBuYW1lO1xuXG4gICAgaWYgKHNpemUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIGZhLScgKyBzaXplO1xuICAgIH1cblxuICAgIGlmIChzcGluKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBmYS1zcGluJztcbiAgICB9XG5cbiAgICBpZiAocHVsc2UpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIGZhLXB1bHNlJztcbiAgICB9XG5cbiAgICBpZiAoYm9yZGVyKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBmYS1ib3JkZXInO1xuICAgIH1cblxuICAgIGlmIChmaXhlZFdpZHRoKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBmYS1mdyc7XG4gICAgfVxuXG4gICAgaWYgKGludmVyc2UpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIGZhLWludmVyc2UnO1xuICAgIH1cblxuICAgIGlmIChmbGlwKSB7XG4gICAgICBjbGFzc05hbWUgKz0gJyBmYS1mbGlwLScgKyBmbGlwO1xuICAgIH1cblxuICAgIGlmIChyb3RhdGUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnIGZhLXJvdGF0ZS0nICsgcm90YXRlO1xuICAgIH1cblxuICAgIGlmIChzdGFjaykge1xuICAgICAgY2xhc3NOYW1lICs9ICcgZmEtc3RhY2stJyArIHN0YWNrO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgY2xhc3NOYW1lICs9ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3BhbicsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgICB9KSk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZm9udGF3ZXNvbWUvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }

})