'use client';
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var api = require('ytg-reusable-components/api');
var componentbase = require('ytg-reusable-components/componentbase');
var hooks = require('ytg-reusable-components/hooks');
var utils = require('ytg-reusable-components/utils');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var classes = {
  root: function root(_ref) {
    var props = _ref.props;
    return utils.classNames('p-component p-editor-container', props.className);
  },
  toolbar: 'p-editor-toolbar',
  content: 'p-editor-content'
};
var styles = "\n/*!\n * Quill Editor v1.3.7\n * https://quilljs.com/\n * Copyright (c) 2014, Jason Chen\n * Copyright (c) 2013, salesforce.com\n */\n.ql-container {\n    box-sizing: border-box;\n    font-family: Helvetica, Arial, sans-serif;\n    font-size: 13px;\n    height: 100%;\n    margin: 0px;\n    position: relative;\n}\n.ql-container.ql-disabled .ql-tooltip {\n    visibility: hidden;\n}\n.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {\n    pointer-events: none;\n}\n.ql-clipboard {\n    left: -100000px;\n    height: 1px;\n    overflow-y: hidden;\n    position: absolute;\n    top: 50%;\n}\n.ql-clipboard p {\n    margin: 0;\n    padding: 0;\n}\n.ql-editor {\n    box-sizing: border-box;\n    line-height: 1.42;\n    height: 100%;\n    outline: none;\n    overflow-y: auto;\n    padding: 12px 15px;\n    tab-size: 4;\n    -moz-tab-size: 4;\n    text-align: left;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n}\n.ql-editor > * {\n    cursor: text;\n}\n.ql-editor p,\n.ql-editor ol,\n.ql-editor ul,\n.ql-editor pre,\n.ql-editor blockquote,\n.ql-editor h1,\n.ql-editor h2,\n.ql-editor h3,\n.ql-editor h4,\n.ql-editor h5,\n.ql-editor h6 {\n    margin: 0;\n    padding: 0;\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol,\n.ql-editor ul {\n    padding-left: 1.5em;\n}\n.ql-editor ol > li,\n.ql-editor ul > li {\n    list-style-type: none;\n}\n.ql-editor ul > li::before {\n    content: \"\\2022\";\n}\n.ql-editor ul[data-checked=\"true\"],\n.ql-editor ul[data-checked=\"false\"] {\n    pointer-events: none;\n}\n.ql-editor ul[data-checked=\"true\"] > li *,\n.ql-editor ul[data-checked=\"false\"] > li * {\n    pointer-events: all;\n}\n.ql-editor ul[data-checked=\"true\"] > li::before,\n.ql-editor ul[data-checked=\"false\"] > li::before {\n    color: #777;\n    cursor: pointer;\n    pointer-events: all;\n}\n.ql-editor ul[data-checked=\"true\"] > li::before {\n    content: \"\\2611\";\n}\n.ql-editor ul[data-checked=\"false\"] > li::before {\n    content: \"\\2610\";\n}\n.ql-editor li::before {\n    display: inline-block;\n    white-space: nowrap;\n    width: 1.2em;\n}\n.ql-editor li:not(.ql-direction-rtl)::before {\n    margin-left: -1.5em;\n    margin-right: 0.3em;\n    text-align: right;\n}\n.ql-editor li.ql-direction-rtl::before {\n    margin-left: 0.3em;\n    margin-right: -1.5em;\n}\n.ql-editor ol li:not(.ql-direction-rtl),\n.ql-editor ul li:not(.ql-direction-rtl) {\n    padding-left: 1.5em;\n}\n.ql-editor ol li.ql-direction-rtl,\n.ql-editor ul li.ql-direction-rtl {\n    padding-right: 1.5em;\n}\n.ql-editor ol li {\n    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n    counter-increment: list-0;\n}\n.ql-editor ol li:before {\n    content: counter(list-0, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n    counter-increment: list-1;\n}\n.ql-editor ol li.ql-indent-1:before {\n    content: counter(list-1, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-1 {\n    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-2 {\n    counter-increment: list-2;\n}\n.ql-editor ol li.ql-indent-2:before {\n    content: counter(list-2, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-2 {\n    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-3 {\n    counter-increment: list-3;\n}\n.ql-editor ol li.ql-indent-3:before {\n    content: counter(list-3, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-3 {\n    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-4 {\n    counter-increment: list-4;\n}\n.ql-editor ol li.ql-indent-4:before {\n    content: counter(list-4, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-4 {\n    counter-reset: list-5 list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-5 {\n    counter-increment: list-5;\n}\n.ql-editor ol li.ql-indent-5:before {\n    content: counter(list-5, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-5 {\n    counter-reset: list-6 list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-6 {\n    counter-increment: list-6;\n}\n.ql-editor ol li.ql-indent-6:before {\n    content: counter(list-6, decimal) \". \";\n}\n.ql-editor ol li.ql-indent-6 {\n    counter-reset: list-7 list-8 list-9;\n}\n.ql-editor ol li.ql-indent-7 {\n    counter-increment: list-7;\n}\n.ql-editor ol li.ql-indent-7:before {\n    content: counter(list-7, lower-alpha) \". \";\n}\n.ql-editor ol li.ql-indent-7 {\n    counter-reset: list-8 list-9;\n}\n.ql-editor ol li.ql-indent-8 {\n    counter-increment: list-8;\n}\n.ql-editor ol li.ql-indent-8:before {\n    content: counter(list-8, lower-roman) \". \";\n}\n.ql-editor ol li.ql-indent-8 {\n    counter-reset: list-9;\n}\n.ql-editor ol li.ql-indent-9 {\n    counter-increment: list-9;\n}\n.ql-editor ol li.ql-indent-9:before {\n    content: counter(list-9, decimal) \". \";\n}\n.ql-editor .ql-indent-1:not(.ql-direction-rtl) {\n    padding-left: 3em;\n}\n.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {\n    padding-left: 4.5em;\n}\n.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {\n    padding-right: 3em;\n}\n.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {\n    padding-right: 4.5em;\n}\n.ql-editor .ql-indent-2:not(.ql-direction-rtl) {\n    padding-left: 6em;\n}\n.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {\n    padding-left: 7.5em;\n}\n.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {\n    padding-right: 6em;\n}\n.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {\n    padding-right: 7.5em;\n}\n.ql-editor .ql-indent-3:not(.ql-direction-rtl) {\n    padding-left: 9em;\n}\n.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {\n    padding-left: 10.5em;\n}\n.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {\n    padding-right: 9em;\n}\n.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {\n    padding-right: 10.5em;\n}\n.ql-editor .ql-indent-4:not(.ql-direction-rtl) {\n    padding-left: 12em;\n}\n.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {\n    padding-left: 13.5em;\n}\n.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {\n    padding-right: 12em;\n}\n.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {\n    padding-right: 13.5em;\n}\n.ql-editor .ql-indent-5:not(.ql-direction-rtl) {\n    padding-left: 15em;\n}\n.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {\n    padding-left: 16.5em;\n}\n.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {\n    padding-right: 15em;\n}\n.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {\n    padding-right: 16.5em;\n}\n.ql-editor .ql-indent-6:not(.ql-direction-rtl) {\n    padding-left: 18em;\n}\n.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {\n    padding-left: 19.5em;\n}\n.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {\n    padding-right: 18em;\n}\n.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {\n    padding-right: 19.5em;\n}\n.ql-editor .ql-indent-7:not(.ql-direction-rtl) {\n    padding-left: 21em;\n}\n.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {\n    padding-left: 22.5em;\n}\n.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {\n    padding-right: 21em;\n}\n.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {\n    padding-right: 22.5em;\n}\n.ql-editor .ql-indent-8:not(.ql-direction-rtl) {\n    padding-left: 24em;\n}\n.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {\n    padding-left: 25.5em;\n}\n.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {\n    padding-right: 24em;\n}\n.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {\n    padding-right: 25.5em;\n}\n.ql-editor .ql-indent-9:not(.ql-direction-rtl) {\n    padding-left: 27em;\n}\n.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {\n    padding-left: 28.5em;\n}\n.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {\n    padding-right: 27em;\n}\n.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {\n    padding-right: 28.5em;\n}\n.ql-editor .ql-video {\n    display: block;\n    max-width: 100%;\n}\n.ql-editor .ql-video.ql-align-center {\n    margin: 0 auto;\n}\n.ql-editor .ql-video.ql-align-right {\n    margin: 0 0 0 auto;\n}\n.ql-editor .ql-bg-black {\n    background-color: #000;\n}\n.ql-editor .ql-bg-red {\n    background-color: #e60000;\n}\n.ql-editor .ql-bg-orange {\n    background-color: #f90;\n}\n.ql-editor .ql-bg-yellow {\n    background-color: #ff0;\n}\n.ql-editor .ql-bg-green {\n    background-color: #008a00;\n}\n.ql-editor .ql-bg-blue {\n    background-color: #06c;\n}\n.ql-editor .ql-bg-purple {\n    background-color: #93f;\n}\n.ql-editor .ql-color-white {\n    color: #fff;\n}\n.ql-editor .ql-color-red {\n    color: #e60000;\n}\n.ql-editor .ql-color-orange {\n    color: #f90;\n}\n.ql-editor .ql-color-yellow {\n    color: #ff0;\n}\n.ql-editor .ql-color-green {\n    color: #008a00;\n}\n.ql-editor .ql-color-blue {\n    color: #06c;\n}\n.ql-editor .ql-color-purple {\n    color: #93f;\n}\n.ql-editor .ql-font-serif {\n    font-family: Georgia, Times New Roman, serif;\n}\n.ql-editor .ql-font-monospace {\n    font-family: Monaco, Courier New, monospace;\n}\n.ql-editor .ql-size-small {\n    font-size: 0.75em;\n}\n.ql-editor .ql-size-large {\n    font-size: 1.5em;\n}\n.ql-editor .ql-size-huge {\n    font-size: 2.5em;\n}\n.ql-editor .ql-direction-rtl {\n    direction: rtl;\n    text-align: inherit;\n}\n.ql-editor .ql-align-center {\n    text-align: center;\n}\n.ql-editor .ql-align-justify {\n    text-align: justify;\n}\n.ql-editor .ql-align-right {\n    text-align: right;\n}\n.ql-editor.ql-blank::before {\n    color: rgba(0, 0, 0, 0.6);\n    content: attr(data-placeholder);\n    font-style: italic;\n    left: 15px;\n    pointer-events: none;\n    position: absolute;\n    right: 15px;\n}\n.ql-snow.ql-toolbar:after,\n.ql-snow .ql-toolbar:after {\n    clear: both;\n    content: \"\";\n    display: table;\n}\n.ql-snow.ql-toolbar button,\n.ql-snow .ql-toolbar button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    display: inline-block;\n    float: left;\n    height: 24px;\n    padding: 3px 5px;\n    width: 28px;\n}\n.ql-snow.ql-toolbar button svg,\n.ql-snow .ql-toolbar button svg {\n    float: left;\n    height: 100%;\n}\n.ql-snow.ql-toolbar button:active:hover,\n.ql-snow .ql-toolbar button:active:hover {\n    outline: none;\n}\n.ql-snow.ql-toolbar input.ql-image[type=\"file\"],\n.ql-snow .ql-toolbar input.ql-image[type=\"file\"] {\n    display: none;\n}\n.ql-snow.ql-toolbar button:hover,\n.ql-snow .ql-toolbar button:hover,\n.ql-snow.ql-toolbar button:focus,\n.ql-snow .ql-toolbar button:focus,\n.ql-snow.ql-toolbar button.ql-active,\n.ql-snow .ql-toolbar button.ql-active,\n.ql-snow.ql-toolbar .ql-picker-label:hover,\n.ql-snow .ql-toolbar .ql-picker-label:hover,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active,\n.ql-snow.ql-toolbar .ql-picker-item:hover,\n.ql-snow .ql-toolbar .ql-picker-item:hover,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n    color: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n    fill: #06c;\n}\n.ql-snow.ql-toolbar button:hover .ql-stroke,\n.ql-snow .ql-toolbar button:hover .ql-stroke,\n.ql-snow.ql-toolbar button:focus .ql-stroke,\n.ql-snow .ql-toolbar button:focus .ql-stroke,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n.ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n    stroke: #06c;\n}\n@media (pointer: coarse) {\n    .ql-snow.ql-toolbar button:hover:not(.ql-active),\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) {\n        color: #444;\n    }\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {\n        fill: #444;\n    }\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,\n    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,\n    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {\n        stroke: #444;\n    }\n}\n.ql-snow {\n    box-sizing: border-box;\n}\n.ql-snow * {\n    box-sizing: border-box;\n}\n.ql-snow .ql-hidden {\n    display: none;\n}\n.ql-snow .ql-out-bottom,\n.ql-snow .ql-out-top {\n    visibility: hidden;\n}\n.ql-snow .ql-tooltip {\n    position: absolute;\n    transform: translateY(10px);\n}\n.ql-snow .ql-tooltip a {\n    cursor: pointer;\n    text-decoration: none;\n}\n.ql-snow .ql-tooltip.ql-flip {\n    transform: translateY(-10px);\n}\n.ql-snow .ql-formats {\n    display: inline-block;\n    vertical-align: middle;\n}\n.ql-snow .ql-formats:after {\n    clear: both;\n    content: \"\";\n    display: table;\n}\n.ql-snow .ql-stroke {\n    fill: none;\n    stroke: #444;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 2;\n}\n.ql-snow .ql-stroke-miter {\n    fill: none;\n    stroke: #444;\n    stroke-miterlimit: 10;\n    stroke-width: 2;\n}\n.ql-snow .ql-fill,\n.ql-snow .ql-stroke.ql-fill {\n    fill: #444;\n}\n.ql-snow .ql-empty {\n    fill: none;\n}\n.ql-snow .ql-even {\n    fill-rule: evenodd;\n}\n.ql-snow .ql-thin,\n.ql-snow .ql-stroke.ql-thin {\n    stroke-width: 1;\n}\n.ql-snow .ql-transparent {\n    opacity: 0.4;\n}\n.ql-snow .ql-direction svg:last-child {\n    display: none;\n}\n.ql-snow .ql-direction.ql-active svg:last-child {\n    display: inline;\n}\n.ql-snow .ql-direction.ql-active svg:first-child {\n    display: none;\n}\n.ql-snow .ql-editor h1 {\n    font-size: 2em;\n}\n.ql-snow .ql-editor h2 {\n    font-size: 1.5em;\n}\n.ql-snow .ql-editor h3 {\n    font-size: 1.17em;\n}\n.ql-snow .ql-editor h4 {\n    font-size: 1em;\n}\n.ql-snow .ql-editor h5 {\n    font-size: 0.83em;\n}\n.ql-snow .ql-editor h6 {\n    font-size: 0.67em;\n}\n.ql-snow .ql-editor a {\n    text-decoration: underline;\n}\n.ql-snow .ql-editor blockquote {\n    border-left: 4px solid #ccc;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    padding-left: 16px;\n}\n.ql-snow .ql-editor code,\n.ql-snow .ql-editor pre {\n    background-color: #f0f0f0;\n    border-radius: 3px;\n}\n.ql-snow .ql-editor pre {\n    white-space: pre-wrap;\n    margin-bottom: 5px;\n    margin-top: 5px;\n    padding: 5px 10px;\n}\n.ql-snow .ql-editor code {\n    font-size: 85%;\n    padding: 2px 4px;\n}\n.ql-snow .ql-editor pre.ql-syntax {\n    background-color: #23241f;\n    color: #f8f8f2;\n    overflow: visible;\n}\n.ql-snow .ql-editor img {\n    max-width: 100%;\n}\n.ql-snow .ql-picker {\n    color: #444;\n    display: inline-block;\n    float: left;\n    font-size: 14px;\n    font-weight: 500;\n    height: 24px;\n    position: relative;\n    vertical-align: middle;\n}\n.ql-snow .ql-picker-label {\n    cursor: pointer;\n    display: inline-block;\n    height: 100%;\n    padding-left: 8px;\n    padding-right: 2px;\n    position: relative;\n    width: 100%;\n}\n.ql-snow .ql-picker-label::before {\n    display: inline-block;\n    line-height: 22px;\n}\n.ql-snow .ql-picker-options {\n    display: none;\n    min-width: 100%;\n    padding: 4px 8px;\n    position: absolute;\n    white-space: nowrap;\n}\n.ql-snow .ql-picker-options .ql-picker-item {\n    cursor: pointer;\n    display: block;\n    padding-bottom: 5px;\n    padding-top: 5px;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n    color: #ccc;\n    z-index: 2;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {\n    fill: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {\n    stroke: #ccc;\n}\n.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n    display: block;\n    margin-top: -1px;\n    top: 100%;\n    z-index: 1;\n}\n.ql-snow .ql-color-picker,\n.ql-snow .ql-icon-picker {\n    width: 28px;\n}\n.ql-snow .ql-color-picker .ql-picker-label,\n.ql-snow .ql-icon-picker .ql-picker-label {\n    padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-label svg,\n.ql-snow .ql-icon-picker .ql-picker-label svg {\n    right: 4px;\n}\n.ql-snow .ql-icon-picker .ql-picker-options {\n    padding: 4px 0px;\n}\n.ql-snow .ql-icon-picker .ql-picker-item {\n    height: 24px;\n    width: 24px;\n    padding: 2px 4px;\n}\n.ql-snow .ql-color-picker .ql-picker-options {\n    padding: 3px 5px;\n    width: 152px;\n}\n.ql-snow .ql-color-picker .ql-picker-item {\n    border: 1px solid transparent;\n    float: left;\n    height: 16px;\n    margin: 2px;\n    padding: 0px;\n    width: 16px;\n}\n.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n    position: absolute;\n    margin-top: -9px;\n    right: 0;\n    top: 50%;\n    width: 18px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=\"\"])::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=\"\"])::before {\n    content: attr(data-label);\n}\n.ql-snow .ql-picker.ql-header {\n    width: 98px;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item::before {\n    content: \"Normal\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"1\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n    content: \"Heading 1\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"2\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n    content: \"Heading 2\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"3\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n    content: \"Heading 3\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"4\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n    content: \"Heading 4\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"5\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n    content: \"Heading 5\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-label[data-value=\"6\"]::before,\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n    content: \"Heading 6\";\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"1\"]::before {\n    font-size: 2em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"2\"]::before {\n    font-size: 1.5em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"3\"]::before {\n    font-size: 1.17em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"4\"]::before {\n    font-size: 1em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"5\"]::before {\n    font-size: 0.83em;\n}\n.ql-snow .ql-picker.ql-header .ql-picker-item[data-value=\"6\"]::before {\n    font-size: 0.67em;\n}\n.ql-snow .ql-picker.ql-font {\n    width: 108px;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item::before {\n    content: \"Sans Serif\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=\"serif\"]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"serif\"]::before {\n    content: \"Serif\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=\"monospace\"]::before,\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"monospace\"]::before {\n    content: \"Monospace\";\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"serif\"]::before {\n    font-family: Georgia, Times New Roman, serif;\n}\n.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=\"monospace\"]::before {\n    font-family: Monaco, Courier New, monospace;\n}\n.ql-snow .ql-picker.ql-size {\n    width: 98px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item::before {\n    content: \"Normal\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"small\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"small\"]::before {\n    content: \"Small\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"large\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"large\"]::before {\n    content: \"Large\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=\"huge\"]::before,\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"huge\"]::before {\n    content: \"Huge\";\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"small\"]::before {\n    font-size: 10px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"large\"]::before {\n    font-size: 18px;\n}\n.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=\"huge\"]::before {\n    font-size: 32px;\n}\n.ql-snow .ql-color-picker.ql-background .ql-picker-item {\n    background-color: #fff;\n}\n.ql-snow .ql-color-picker.ql-color .ql-picker-item {\n    background-color: #000;\n}\n.ql-toolbar.ql-snow {\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n    padding: 8px;\n}\n.ql-toolbar.ql-snow .ql-formats {\n    margin-right: 15px;\n}\n.ql-toolbar.ql-snow .ql-picker-label {\n    border: 1px solid transparent;\n}\n.ql-toolbar.ql-snow .ql-picker-options {\n    border: 1px solid transparent;\n    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {\n    border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {\n    border-color: #ccc;\n}\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,\n.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {\n    border-color: #000;\n}\n.ql-toolbar.ql-snow + .ql-container.ql-snow {\n    border-top: 0px;\n}\n.ql-snow .ql-tooltip {\n    background-color: #fff;\n    border: 1px solid #ccc;\n    box-shadow: 0px 0px 5px #ddd;\n    color: #444;\n    padding: 5px 12px;\n    white-space: nowrap;\n}\n.ql-snow .ql-tooltip::before {\n    content: \"Visit URL:\";\n    line-height: 26px;\n    margin-right: 8px;\n}\n.ql-snow .ql-tooltip input[type=\"text\"] {\n    display: none;\n    border: 1px solid #ccc;\n    font-size: 13px;\n    height: 26px;\n    margin: 0px;\n    padding: 3px 5px;\n    width: 170px;\n}\n.ql-snow .ql-tooltip a.ql-preview {\n    display: inline-block;\n    max-width: 200px;\n    overflow-x: hidden;\n    text-overflow: ellipsis;\n    vertical-align: top;\n}\n.ql-snow .ql-tooltip a.ql-action::after {\n    border-right: 1px solid #ccc;\n    content: \"Edit\";\n    margin-left: 16px;\n    padding-right: 8px;\n}\n.ql-snow .ql-tooltip a.ql-remove::before {\n    content: \"Remove\";\n    margin-left: 8px;\n}\n.ql-snow .ql-tooltip a {\n    line-height: 26px;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-preview,\n.ql-snow .ql-tooltip.ql-editing a.ql-remove {\n    display: none;\n}\n.ql-snow .ql-tooltip.ql-editing input[type=\"text\"] {\n    display: inline-block;\n}\n.ql-snow .ql-tooltip.ql-editing a.ql-action::after {\n    border-right: 0px;\n    content: \"Save\";\n    padding-right: 0px;\n}\n.ql-snow .ql-tooltip[data-mode=\"link\"]::before {\n    content: \"Enter link:\";\n}\n.ql-snow .ql-tooltip[data-mode=\"formula\"]::before {\n    content: \"Enter formula:\";\n}\n.ql-snow .ql-tooltip[data-mode=\"video\"]::before {\n    content: \"Enter video:\";\n}\n.ql-snow a {\n    color: #06c;\n}\n.ql-container.ql-snow {\n    border: 1px solid #ccc;\n}\n";
var EditorBase = componentbase.ComponentBase.extend({
  defaultProps: {
    __TYPE: 'Editor',
    id: null,
    value: null,
    style: null,
    className: null,
    placeholder: null,
    readOnly: false,
    modules: null,
    formats: null,
    theme: 'snow',
    showHeader: true,
    headerTemplate: null,
    onTextChange: null,
    onSelectionChange: null,
    onLoad: null,
    maxLength: null,
    children: undefined
  },
  css: {
    classes: classes,
    styles: styles
  }
});

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var QuillJS = function () {
  try {
    return Quill;
  } catch (_unused) {
    return null;
  }
}();
var Editor = /*#__PURE__*/React__namespace.memo( /*#__PURE__*/React__namespace.forwardRef(function (inProps, ref) {
  var mergeProps = hooks.useMergeProps();
  var context = React__namespace.useContext(api.PrimeReactContext);
  var props = EditorBase.getProps(inProps, context);
  var _EditorBase$setMetaDa = EditorBase.setMetaData({
      props: props
    }),
    ptm = _EditorBase$setMetaDa.ptm,
    cx = _EditorBase$setMetaDa.cx,
    isUnstyled = _EditorBase$setMetaDa.isUnstyled;
  componentbase.useHandleStyle(EditorBase.css.styles, isUnstyled, {
    name: 'editor'
  });
  var elementRef = React__namespace.useRef(null);
  var contentRef = React__namespace.useRef(null);
  var toolbarRef = React__namespace.useRef(null);
  var quill = React__namespace.useRef(null);
  var isQuillLoaded = React__namespace.useRef(false);
  var _React$useState = React__namespace.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    quillCreated = _React$useState2[0],
    setQuillCreated = _React$useState2[1];
  hooks.useMountEffect(function () {
    if (!isQuillLoaded.current) {
      var configuration = {
        modules: _objectSpread({
          toolbar: props.showHeader ? toolbarRef.current : false
        }, props.modules),
        placeholder: props.placeholder,
        readOnly: props.readOnly,
        theme: props.theme,
        formats: props.formats
      };
      if (QuillJS) {
        // GitHub #3097 loaded by script only
        initQuill(new Quill(contentRef.current, configuration));
      } else {
        Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('quill')); }).then(function (module) {
          if (module && utils.DomHandler.isExist(contentRef.current)) {
            var quillInstance;
            if (module["default"]) {
              // webpack
              quillInstance = new module["default"](contentRef.current, configuration);
            } else {
              // parceljs
              quillInstance = new module(contentRef.current, configuration);
            }
            initQuill(quillInstance);
          }
        });
      }
      isQuillLoaded.current = true;
    }
  });
  var onTextChange = function onTextChange(delta, oldContents, source) {
    var firstChild = contentRef.current.children[0];
    var html = firstChild ? firstChild.innerHTML : null;
    var text = quill.current.getText();
    if (html === '<p><br></p>') {
      html = null;
    }

    // GitHub #2271 prevent infinite loop on clipboard paste of HTML
    if (source === 'api') {
      var htmlValue = contentRef.current.children[0];
      var editorValue = document.createElement('div');
      editorValue.innerHTML = props.value || '';

      // this is necessary because Quill rearranged style elements
      if (utils.DomHandler.isEqualElement(htmlValue, editorValue)) {
        return;
      }
    }
    if (props.maxLength) {
      var length = quill.current.getLength();
      if (length > props.maxLength) {
        quill.current.deleteText(props.maxLength, length);
      }
    }
    if (props.onTextChange) {
      props.onTextChange({
        htmlValue: html,
        textValue: text,
        delta: delta,
        source: source
      });
    }
  };
  var onSelectionChange = function onSelectionChange(range, oldRange, source) {
    if (props.onSelectionChange) {
      props.onSelectionChange({
        range: range,
        oldRange: oldRange,
        source: source
      });
    }
  };
  var initQuill = function initQuill(quillInstance) {
    quill.current = quillInstance;
    if (props.value) {
      quill.current.clipboard.dangerouslyPasteHTML(props.value);
    }
    setQuillCreated(true);
  };
  hooks.useUpdateEffect(function () {
    if (quillCreated) {
      quill.current.on('text-change', onTextChange);
      quill.current.on('selection-change', onSelectionChange);
      return function () {
        quill.current.off('text-change', onTextChange);
        quill.current.off('selection-change', onSelectionChange);
      };
    }
  });
  hooks.useUpdateEffect(function () {
    if (quillCreated) {
      if (quill.current && quill.current.getModule('toolbar')) {
        props.onLoad && props.onLoad(quill.current);
      }
    }
  }, [quillCreated]);
  hooks.useUpdateEffect(function () {
    if (quill.current && !quill.current.hasFocus()) {
      props.value ? quill.current.clipboard.dangerouslyPasteHTML(props.value) : quill.current.setText('');
    }
  }, [props.value]);
  React__namespace.useImperativeHandle(ref, function () {
    return {
      props: props,
      getQuill: function getQuill() {
        return quill.current;
      },
      getElement: function getElement() {
        return elementRef.current;
      },
      getContent: function getContent() {
        return contentRef.current;
      },
      getToolbar: function getToolbar() {
        return toolbarRef.current;
      }
    };
  });
  var createToolbarHeader = function createToolbarHeader() {
    var toolbarProps = mergeProps({
      ref: toolbarRef,
      className: cx('toolbar')
    }, ptm('toolbar'));
    if (props.showHeader === false) {
      return null;
    } else if (props.headerTemplate) {
      return /*#__PURE__*/React__namespace.createElement("div", toolbarProps, props.headerTemplate);
    }
    var getMergeProps = function getMergeProps(params, key) {
      return mergeProps(params && _objectSpread({}, params), ptm(key));
    };
    var formatsProps = mergeProps({
      className: 'ql-formats'
    }, ptm('formats'));
    return /*#__PURE__*/React__namespace.createElement("div", toolbarProps, /*#__PURE__*/React__namespace.createElement("span", formatsProps, /*#__PURE__*/React__namespace.createElement("select", getMergeProps({
      className: 'ql-header',
      defaultValue: '0'
    }, 'header'), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      value: '1'
    }, 'option'), "Heading"), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      value: '2'
    }, 'option'), "Subheading"), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      value: '0'
    }, 'option'), "Normal")), /*#__PURE__*/React__namespace.createElement("select", getMergeProps({
      className: 'ql-font'
    }, 'font'), /*#__PURE__*/React__namespace.createElement("option", getMergeProps(undefined, 'option')), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      value: 'serif'
    }, 'option')), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      value: 'monospace'
    }, 'option')))), /*#__PURE__*/React__namespace.createElement("span", formatsProps, /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-bold',
      'aria-label': 'Bold'
    }, 'bold')), /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-italic',
      'aria-label': 'Italic'
    }, 'italic')), /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-underline',
      'aria-label': 'Underline'
    }, 'underline'))), /*#__PURE__*/React__namespace.createElement("span", formatsProps, /*#__PURE__*/React__namespace.createElement("select", getMergeProps({
      className: 'ql-color'
    }, 'color')), /*#__PURE__*/React__namespace.createElement("select", getMergeProps({
      className: 'ql-background'
    }, 'background'))), /*#__PURE__*/React__namespace.createElement("span", formatsProps, /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-list',
      value: 'ordered',
      'aria-label': 'Ordered List'
    }, 'list')), /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-list',
      value: 'bullet',
      'aria-label': 'Unordered List'
    }, 'list')), /*#__PURE__*/React__namespace.createElement("select", getMergeProps({
      className: 'ql-align'
    }, 'select'), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      defaultValue: true
    }, 'option')), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      value: 'center'
    }, 'option')), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      value: 'right'
    }, 'option')), /*#__PURE__*/React__namespace.createElement("option", getMergeProps({
      value: 'justify'
    }, 'option')))), /*#__PURE__*/React__namespace.createElement("span", formatsProps, /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-link',
      'aria-label': 'Insert Link'
    }, 'link')), /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-image',
      'aria-label': 'Insert Image'
    }, 'image')), /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-code-block',
      'aria-label': 'Insert Code Block'
    }, 'codeBlock'))), /*#__PURE__*/React__namespace.createElement("span", formatsProps, /*#__PURE__*/React__namespace.createElement("button", getMergeProps({
      type: 'button',
      className: 'ql-clean',
      'aria-label': 'Remove Styles'
    }, 'clean'))));
  };
  var header = createToolbarHeader();
  var contentProps = mergeProps({
    ref: contentRef,
    className: cx('content'),
    style: props.style
  }, ptm('content'));
  var content = /*#__PURE__*/React__namespace.createElement("div", contentProps);
  var rootProps = mergeProps({
    className: utils.classNames(props.className, cx('root'))
  }, EditorBase.getOtherProps(props), ptm('root'));
  return /*#__PURE__*/React__namespace.createElement("div", _extends({
    id: props.id,
    ref: elementRef
  }, rootProps), header, content);
}));
Editor.displayName = 'Editor';

exports.Editor = Editor;
