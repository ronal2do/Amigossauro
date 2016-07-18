webpackHotUpdate(0,{

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(10);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(8);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(9);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(243);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _reactYoutube = __webpack_require__(559);\n\nvar _reactYoutube2 = _interopRequireDefault(_reactYoutube);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Video: {\n    displayName: 'Video'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Video/Video.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/sotaquedev/Desktop/Amigossauro-React/teste2/app/components/Video/Video.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar videoIdA = 'XxVg_s8xAms';\nvar videoIdB = '-DX3vJiqxm4';\n\nvar Video = _wrapComponent('Video')(function (_get__$Component) {\n  _inherits(Video, _get__$Component);\n\n  function Video(props) {\n    _classCallCheck(this, Video);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Video).call(this, props));\n\n    _this.state = {\n      videoId: _get__('videoIdA'),\n      player: null\n    };\n\n    _this.onReady = _this.onReady.bind(_this);\n    _this.onChangeVideo = _this.onChangeVideo.bind(_this);\n    _this.onPlayVideo = _this.onPlayVideo.bind(_this);\n    _this.onPauseVideo = _this.onPauseVideo.bind(_this);\n    return _this;\n  }\n\n  _createClass(Video, [{\n    key: 'onReady',\n    value: function onReady(event) {\n      console.log('YouTube Player object for videoId: \"' + this.state.videoId + '\" has been saved to state.'); // eslint-disable-line\n      this.setState({\n        player: event.target\n      });\n    }\n  }, {\n    key: 'onPlayVideo',\n    value: function onPlayVideo() {\n      this.state.player.playVideo();\n    }\n  }, {\n    key: 'onPauseVideo',\n    value: function onPauseVideo() {\n      this.state.player.pauseVideo();\n    }\n  }, {\n    key: 'onChangeVideo',\n    value: function onChangeVideo() {\n      this.setState({\n        videoId: this.state.videoId === _get__('videoIdA') ? _get__('videoIdB') : _get__('videoIdA')\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _YouTube_Component = _get__('YouTube');\n\n      return _react3.default.createElement(\n        'div',\n        null,\n        'oi',\n        _react3.default.createElement(_YouTube_Component, { videoId: this.state.videoId, onReady: this.onReady }),\n        _react3.default.createElement(\n          'button',\n          { onClick: this.onPlayVideo },\n          'Play'\n        ),\n        _react3.default.createElement(\n          'button',\n          { onClick: this.onPauseVideo },\n          'Pause'\n        ),\n        _react3.default.createElement(\n          'button',\n          { onClick: this.onChangeVideo },\n          'Change Video'\n        )\n      );\n    }\n  }]);\n\n  return Video;\n}(_get__('React').Component));\n\nexports.default = _get__('Video');\n\nvar _RewiredData__ = Object.create(null);\n\nvar INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _get_original__(variableName);\n  } else {\n    var value = _RewiredData__[variableName];\n\n    if (value === INTENTIONAL_UNDEFINED) {\n      return undefined;\n    } else {\n      return value;\n    }\n  }\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'videoIdA':\n      return videoIdA;\n\n    case 'videoIdB':\n      return videoIdB;\n\n    case 'YouTube':\n      return _reactYoutube2.default;\n\n    case 'React':\n      return _react3.default;\n\n    case 'Video':\n      return Video;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    if (value === undefined) {\n      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;\n    } else {\n      _RewiredData__[variableName] = value;\n    }\n\n    return value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof Video === 'undefined' ? 'undefined' : _typeof(Video);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(Video, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(Video)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTQwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1ZpZGVvL1ZpZGVvLmpzPzNiMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgWW91VHViZSBmcm9tICdyZWFjdC15b3V0dWJlJztcblxuY29uc3QgdmlkZW9JZEEgPSAnWHhWZ19zOHhBbXMnO1xuY29uc3QgdmlkZW9JZEIgPSAnLURYM3ZKaXF4bTQnO1xuXG5jbGFzcyBWaWRlbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlkZW9JZDogdmlkZW9JZEEsXG4gICAgICBwbGF5ZXI6IG51bGwsXG4gICAgfTtcblxuICAgIHRoaXMub25SZWFkeSA9IHRoaXMub25SZWFkeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25DaGFuZ2VWaWRlbyA9IHRoaXMub25DaGFuZ2VWaWRlby5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25QbGF5VmlkZW8gPSB0aGlzLm9uUGxheVZpZGVvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblBhdXNlVmlkZW8gPSB0aGlzLm9uUGF1c2VWaWRlby5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25SZWFkeShldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGBZb3VUdWJlIFBsYXllciBvYmplY3QgZm9yIHZpZGVvSWQ6IFwiJHt0aGlzLnN0YXRlLnZpZGVvSWR9XCIgaGFzIGJlZW4gc2F2ZWQgdG8gc3RhdGUuYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBsYXllcjogZXZlbnQudGFyZ2V0LFxuICAgIH0pO1xuICB9XG5cbiAgb25QbGF5VmlkZW8oKSB7XG4gICAgdGhpcy5zdGF0ZS5wbGF5ZXIucGxheVZpZGVvKCk7XG4gIH1cblxuICBvblBhdXNlVmlkZW8oKSB7XG4gICAgdGhpcy5zdGF0ZS5wbGF5ZXIucGF1c2VWaWRlbygpO1xuICB9XG5cbiAgb25DaGFuZ2VWaWRlbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZpZGVvSWQ6IHRoaXMuc3RhdGUudmlkZW9JZCA9PT0gdmlkZW9JZEEgPyB2aWRlb0lkQiA6IHZpZGVvSWRBLFxuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICBvaVxuICAgICAgICA8WW91VHViZSB2aWRlb0lkPXt0aGlzLnN0YXRlLnZpZGVvSWR9IG9uUmVhZHk9e3RoaXMub25SZWFkeX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uUGxheVZpZGVvfT5QbGF5PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vblBhdXNlVmlkZW99PlBhdXNlPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkNoYW5nZVZpZGVvfT5DaGFuZ2UgVmlkZW88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKFZpZGVvKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvY29tcG9uZW50cy9WaWRlby9WaWRlby5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQVlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBOzs7O0FBaERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQTtBQUNBOztBQURBOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})