webpackHotUpdate(0,{

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nexports.default = getRoutes;\n\nvar _react = __webpack_require__(3);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(26);\n\nvar _App = __webpack_require__(289);\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _Home = __webpack_require__(294);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Contact = __webpack_require__(290);\n\nvar _Contact2 = _interopRequireDefault(_Contact);\n\nvar _Amizade = __webpack_require__(536);\n\nvar _Amizade2 = _interopRequireDefault(_Amizade);\n\nvar _NotFound = __webpack_require__(299);\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nvar _Login = __webpack_require__(285);\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _Signup = __webpack_require__(288);\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _Profile = __webpack_require__(286);\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _Forgot = __webpack_require__(284);\n\nvar _Forgot2 = _interopRequireDefault(_Forgot);\n\nvar _Reset = __webpack_require__(287);\n\nvar _Reset2 = _interopRequireDefault(_Reset);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction getRoutes(store) {\n  var ensureAuthenticated = function ensureAuthenticated(nextState, replace) {\n    if (!store.getState().auth.token) {\n      replace('/login');\n    }\n  };\n  var skipIfAuthenticated = function skipIfAuthenticated(nextState, replace) {\n    if (store.getState().auth.token) {\n      replace('/');\n    }\n  };\n  var clearMessages = function clearMessages() {\n    store.dispatch({\n      type: 'CLEAR_MESSAGES'\n    });\n  };\n\n  var _Route_Component = _get__('Route');\n\n  var _IndexRoute_Component = _get__('IndexRoute');\n\n  var _Route_Component2 = _get__('Route');\n\n  var _Route_Component3 = _get__('Route');\n\n  var _Route_Component4 = _get__('Route');\n\n  var _Route_Component5 = _get__('Route');\n\n  var _Route_Component6 = _get__('Route');\n\n  var _Route_Component7 = _get__('Route');\n\n  var _Route_Component8 = _get__('Route');\n\n  var _Route_Component9 = _get__('Route');\n\n  return _react2.default.createElement(\n    _Route_Component,\n    { path: '/', component: _get__('App') },\n    _react2.default.createElement(_IndexRoute_Component, { component: _get__('Home'), onLeave: clearMessages }),\n    _react2.default.createElement(_Route_Component2, { path: '/contact', component: _get__('Contact'), onLeave: clearMessages }),\n    _react2.default.createElement(_Route_Component3, { path: '/amizade', component: _get__('Amizade'), onLeave: clearMessages }),\n    _react2.default.createElement(_Route_Component4, { path: '/login', component: _get__('Login'), onEnter: skipIfAuthenticated, onLeave: clearMessages }),\n    _react2.default.createElement(_Route_Component5, { path: '/signup', component: _get__('Signup'), onEnter: skipIfAuthenticated, onLeave: clearMessages }),\n    _react2.default.createElement(_Route_Component6, { path: '/account', component: _get__('Profile'), onEnter: ensureAuthenticated, onLeave: clearMessages }),\n    _react2.default.createElement(_Route_Component7, { path: '/forgot', component: _get__('Forgot'), onEnter: skipIfAuthenticated, onLeave: clearMessages }),\n    _react2.default.createElement(_Route_Component8, { path: '/reset/:token', component: _get__('Reset'), onEnter: skipIfAuthenticated, onLeave: clearMessages }),\n    _react2.default.createElement(_Route_Component9, { path: '*', component: _get__('NotFound'), onLeave: clearMessages })\n  );\n}\n\nvar _RewiredData__ = Object.create(null);\n\nvar INTENTIONAL_UNDEFINED = '__INTENTIONAL_UNDEFINED__';\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _get_original__(variableName);\n  } else {\n    var value = _RewiredData__[variableName];\n\n    if (value === INTENTIONAL_UNDEFINED) {\n      return undefined;\n    } else {\n      return value;\n    }\n  }\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'Route':\n      return _reactRouter.Route;\n\n    case 'App':\n      return _App2.default;\n\n    case 'IndexRoute':\n      return _reactRouter.IndexRoute;\n\n    case 'Home':\n      return _Home2.default;\n\n    case 'Contact':\n      return _Contact2.default;\n\n    case 'Amizade':\n      return _Amizade2.default;\n\n    case 'Login':\n      return _Login2.default;\n\n    case 'Signup':\n      return _Signup2.default;\n\n    case 'Profile':\n      return _Profile2.default;\n\n    case 'Forgot':\n      return _Forgot2.default;\n\n    case 'Reset':\n      return _Reset2.default;\n\n    case 'NotFound':\n      return _NotFound2.default;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    if (value === undefined) {\n      _RewiredData__[variableName] = INTENTIONAL_UNDEFINED;\n    } else {\n      _RewiredData__[variableName] = value;\n    }\n\n    return value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof getRoutes === 'undefined' ? 'undefined' : _typeof(getRoutes);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(getRoutes, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(getRoutes)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9yb3V0ZXMuanM/NmRiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW5kZXhSb3V0ZSwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29tcG9uZW50cy9Db250YWN0JztcbmltcG9ydCBBbWl6YWRlIGZyb20gJy4vY29tcG9uZW50cy9BbWl6YWRlJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9BY2NvdW50L0xvZ2luJztcbmltcG9ydCBTaWdudXAgZnJvbSAnLi9jb21wb25lbnRzL0FjY291bnQvU2lnbnVwJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vY29tcG9uZW50cy9BY2NvdW50L1Byb2ZpbGUnO1xuaW1wb3J0IEZvcmdvdCBmcm9tICcuL2NvbXBvbmVudHMvQWNjb3VudC9Gb3Jnb3QnO1xuaW1wb3J0IFJlc2V0IGZyb20gJy4vY29tcG9uZW50cy9BY2NvdW50L1Jlc2V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Um91dGVzKHN0b3JlKSB7XG4gIGNvbnN0IGVuc3VyZUF1dGhlbnRpY2F0ZWQgPSAobmV4dFN0YXRlLCByZXBsYWNlKSA9PiB7XG4gICAgaWYgKCFzdG9yZS5nZXRTdGF0ZSgpLmF1dGgudG9rZW4pIHtcbiAgICAgIHJlcGxhY2UoJy9sb2dpbicpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2tpcElmQXV0aGVudGljYXRlZCA9IChuZXh0U3RhdGUsIHJlcGxhY2UpID0+IHtcbiAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5hdXRoLnRva2VuKSB7XG4gICAgICByZXBsYWNlKCcvJyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjbGVhck1lc3NhZ2VzID0gKCkgPT4ge1xuICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdDTEVBUl9NRVNTQUdFUydcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnRhY3RcIiBjb21wb25lbnQ9e0NvbnRhY3R9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2FtaXphZGVcIiBjb21wb25lbnQ9e0FtaXphZGV9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgY29tcG9uZW50PXtMb2dpbn0gb25FbnRlcj17c2tpcElmQXV0aGVudGljYXRlZH0gb25MZWF2ZT17Y2xlYXJNZXNzYWdlc30vPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvc2lnbnVwXCIgY29tcG9uZW50PXtTaWdudXB9IG9uRW50ZXI9e3NraXBJZkF1dGhlbnRpY2F0ZWR9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2FjY291bnRcIiBjb21wb25lbnQ9e1Byb2ZpbGV9IG9uRW50ZXI9e2Vuc3VyZUF1dGhlbnRpY2F0ZWR9IG9uTGVhdmU9e2NsZWFyTWVzc2FnZXN9Lz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZvcmdvdFwiIGNvbXBvbmVudD17Rm9yZ290fSBvbkVudGVyPXtza2lwSWZBdXRoZW50aWNhdGVkfSBvbkxlYXZlPXtjbGVhck1lc3NhZ2VzfS8+XG4gICAgICA8Um91dGUgcGF0aD0nL3Jlc2V0Lzp0b2tlbicgY29tcG9uZW50PXtSZXNldH0gb25FbnRlcj17c2tpcElmQXV0aGVudGljYXRlZH0gb25MZWF2ZT17Y2xlYXJNZXNzYWdlc30vPlxuICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gb25MZWF2ZT17Y2xlYXJNZXNzYWdlc30vPlxuICAgIDwvUm91dGU+XG4gICk7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBhcHAvcm91dGVzLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFhQTtBQUNBO0FBZEE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQWhCQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOUJBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})