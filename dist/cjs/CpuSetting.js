'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');
var PropTypes = require('prop-types');
var Svg = require('react-native-svg');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4.09 8.08ZM4 15Zm4.09 4.91Zm0-15.82Zm7.83 0Zm3.99 3.99ZM22 8.3c0 .42-.33.75-.75.75H20v1.837a.432.432 0 0 1-.65.373c-.43-.25-.93-.33-1.41-.2-.308.074-.68-.125-.68-.442V9.74c0-1.65-1.35-3-3-3H9.74c-1.65 0-3 1.35-3 3v4.52c0 1.65 1.35 3 3 3h.45a.21.21 0 0 1 .21.21c0 .963.698 1.774 1.617 1.96.173.035.29.242.233.408a.235.235 0 0 1-.22.162H9.06v1.25a.749.749 0 1 1-1.5 0v-1.47a5.004 5.004 0 0 1-3.33-3.33H2.75a.749.749 0 1 1 0-1.5H4v-2.2H2.75a.749.749 0 1 1 0-1.5H4v-2.2H2.75a.749.749 0 1 1 0-1.5h1.48a5.004 5.004 0 0 1 3.33-3.33V2.75a.749.749 0 1 1 1.5 0V4h2.19V2.75c0-.41.34-.75.75-.75s.75.34.75.75V4h2.2V2.75c0-.41.34-.75.75-.75s.75.34.75.75v1.48c1.59.48 2.84 1.73 3.32 3.32h1.48c.42 0 .75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.99 15.531c-.68 0-1.07-.34-1.07-.84 0-.2.06-.43.2-.67a1 1 0 0 0-.37-1.37l-.91-.53a.885.885 0 0 0-1.21.32l-.06.1c-.48.83-1.26.83-1.74 0l-.06-.1a.873.873 0 0 0-1.2-.32l-.92.53c-.32.18-.51.52-.51.87 0 .17.05.34.14.5.14.24.21.47.21.67 0 .5-.4.84-1.08.84-.55 0-1.01.45-1.01 1v.94c0 .55.46 1 1.01 1 .68 0 1.08.34 1.08.84 0 .2-.07.43-.21.67a1 1 0 0 0 .37 1.37l.92.53c.41.25.96.1 1.2-.32l.06-.1c.48-.83 1.26-.83 1.74 0l.06.1c.25.42.79.57 1.21.32l.91-.53c.32-.18.51-.52.51-.87 0-.17-.05-.34-.14-.5-.14-.24-.2-.47-.2-.67 0-.5.39-.84 1.07-.84.56 0 1.01-.45 1.01-1v-.94c0-.55-.45-1-1.01-1Zm-4.29 3.19a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.25 10.02v.572c0 .335-.445.546-.77.468-.5-.13-1-.06-1.41.19l-.91.53a1.993 1.993 0 0 0-1.012 1.92c.032.386-.238.855-.589 1.02a2.023 2.023 0 0 0-1.042 1.142c-.078.216-.267.388-.497.388-1.26 0-2.27-1.01-2.27-2.27v-3.96c0-1.26 1.01-2.27 2.27-2.27h3.96c1.26 0 2.27 1.01 2.27 2.27Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.35 8c-.55-.7-1.47-1-2.85-1h-3C8 7 7 8 7 10.5v3c0 1.38.3 2.3.99 2.85M8.01 4V2M12 4V2M16 4V2M20 8h2M8.01 20v2M2 8h2M2 12h2M2 16h2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.71 18.59a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.41 17.462v-.93c0-.55.45-1 1-1 .96 0 1.35-.68.87-1.51a1 1 0 0 1 .37-1.37l.91-.53c.42-.25.96-.1 1.21.32l.06.1c.48.83 1.26.83 1.74 0l.06-.1c.25-.42.79-.56 1.21-.32l.91.53c.48.28.65.89.37 1.37-.48.83-.09 1.51.87 1.51.55 0 1 .45 1 1v.93c0 .55-.45 1-1 1-.96 0-1.35.68-.87 1.51a1 1 0 0 1-.37 1.37l-.91.53c-.42.25-.96.1-1.21-.32l-.06-.1c-.48-.83-1.26-.83-1.74 0l-.06.1c-.25.42-.79.56-1.21.32l-.91-.53c-.48-.28-.65-.89-.37-1.37.48-.83.09-1.51-.87-1.51a.99.99 0 0 1-1-1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20 9v2.92l-.78-.45c-.64-.37-1.44-.26-1.96.24-.11.1-.2.22-.28.35l-.06.11c-.11.19-.2.24-.21.25-.02-.01-.12-.06-.23-.26l-.06-.1c-.22-.38-.57-.64-.99-.75-.43-.12-.87-.06-1.24.16l-.91.53c-.41.23-.7.61-.82 1.06-.12.46-.06.93.17 1.34.11.18.11.29.11.31-.01.01-.11.07-.33.07-.97 0-1.76.79-1.76 1.75v.94c0 .96.79 1.75 1.76 1.75.22 0 .32.06.32.07.01.01.01.13-.1.31-.07.13-.13.26-.16.4H9c-2.76 0-5-2.24-5-5V9c0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.26 9.738v1.97c-.11.1-.2.22-.28.35l-.06.11c-.11.19-.2.24-.21.25-.02-.01-.12-.06-.23-.26l-.06-.1c-.22-.38-.57-.64-.99-.75-.43-.12-.87-.06-1.24.16l-.91.53c-.41.23-.7.61-.82 1.06-.12.46-.06.93.17 1.34.11.18.11.29.11.31-.01.01-.11.07-.33.07-.97 0-1.76.79-1.76 1.75v.73h-.91c-1.65 0-3-1.35-3-3v-4.52c0-1.65 1.35-3 3-3h4.52c1.65 0 3 1.35 3 3ZM9.06 2.75V4H9c-.5 0-.98.07-1.44.21V2.75a.749.749 0 1 1 1.5 0ZM12.75 2.75V4h-1.5V2.75c0-.41.34-.75.75-.75s.75.34.75.75ZM16.45 2.75v1.46C15.99 4.07 15.5 4 15 4h-.05V2.75c0-.41.34-.75.75-.75s.75.34.75.75ZM22 8.3c0 .42-.33.75-.75.75H20V9c0-.5-.07-.99-.21-1.45h1.46c.42 0 .75.34.75.75ZM9.06 20v1.25a.749.749 0 1 1-1.5 0v-1.46c.46.14.94.21 1.44.21h.06ZM4.21 7.55C4.07 8.01 4 8.5 4 9v.05H2.75a.749.749 0 1 1 0-1.5h1.46ZM4 11.25v1.5H2.75a.749.749 0 1 1 0-1.5H4ZM4.21 16.45H2.75a.749.749 0 1 1 0-1.5H4V15c0 .5.07.99.21 1.45Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.99 15.531c-.68 0-1.07-.34-1.07-.84 0-.2.06-.43.2-.67a1 1 0 0 0-.37-1.37l-.91-.53a.885.885 0 0 0-1.21.32l-.06.1c-.48.83-1.26.83-1.74 0l-.06-.1a.873.873 0 0 0-1.2-.32l-.92.53c-.32.18-.51.52-.51.87 0 .17.05.34.14.5.14.24.21.47.21.67 0 .5-.4.84-1.08.84-.55 0-1.01.45-1.01 1v.94c0 .55.46 1 1.01 1 .68 0 1.08.34 1.08.84 0 .2-.07.43-.21.67a1 1 0 0 0 .37 1.37l.92.53c.41.25.96.1 1.2-.32l.06-.1c.48-.83 1.26-.83 1.74 0l.06.1c.25.42.79.57 1.21.32l.91-.53c.32-.18.51-.52.51-.87 0-.17-.05-.34-.14-.5-.14-.24-.2-.47-.2-.67 0-.5.39-.84 1.07-.84.56 0 1.01-.45 1.01-1v-.94c0-.55-.45-1-1.01-1Zm-4.29 3.19a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.42 17.001a1.72 1.72 0 1 1-3.44 0 1.72 1.72 0 0 1 3.44 0Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.35 8c-.55-.7-1.47-1-2.85-1h-3C8 7 7 8 7 10.5v3c0 1.38.3 2.3.99 2.85M8.01 4V2M12 4V2M16 4V2M20 8h2M8.01 20v2M2 8h2M2 12h2M2 16h2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.71 18.59a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.41 17.46v-.93c0-.55.45-1 1-1 .96 0 1.35-.68.87-1.51a1 1 0 0 1 .37-1.37l.91-.53c.42-.25.96-.1 1.21.32l.06.1c.48.83 1.26.83 1.74 0l.06-.1c.25-.42.79-.56 1.21-.32l.91.53c.48.28.65.89.37 1.37-.48.83-.09 1.51.87 1.51.55 0 1 .45 1 1v.93c0 .55-.45 1-1 1-.96 0-1.35.68-.87 1.51a1 1 0 0 1-.37 1.37l-.91.53c-.42.25-.96.1-1.21-.32l-.06-.1c-.48-.83-1.26-.83-1.74 0l-.06.1c-.25.42-.79.56-1.21.32l-.91-.53c-.48-.28-.65-.89-.37-1.37.48-.83.09-1.51-.87-1.51a.99.99 0 0 1-1-1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.6 20.75c-4.39 0-6.35-1.96-6.35-6.35V9.6c0-4.39 1.96-6.35 6.35-6.35h4.8c4.39 0 6.35 1.96 6.35 6.35 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-3.58-1.27-4.85-4.85-4.85H9.6c-3.58 0-4.85 1.27-4.85 4.85v4.8c0 3.58 1.27 4.85 4.85 4.85.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.99 17.1c-.16 0-.33-.05-.47-.16-.87-.69-1.28-1.79-1.28-3.44v-3c0-2.9 1.35-4.25 4.25-4.25h3c1.65 0 2.74.41 3.44 1.28.26.32.2.8-.12 1.05-.32.26-.8.21-1.05-.12-.24-.31-.74-.71-2.26-.71h-3c-2.08 0-2.75.67-2.75 2.75v3c0 1.52.41 2.02.71 2.26.32.26.38.73.12 1.05-.15.19-.37.29-.59.29ZM8.01 4.75c-.42 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM16 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 8.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM8.01 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 8.75H2a.749.749 0 1 1 0-1.5h2a.749.749 0 1 1 0 1.5ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM4 16.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM16.71 19.34c-1.29 0-2.34-1.05-2.34-2.34 0-1.29 1.05-2.34 2.34-2.34 1.29 0 2.34 1.05 2.34 2.34a2.35 2.35 0 0 1-2.34 2.34Zm0-3.18c-.46 0-.84.38-.84.84 0 .46.38.84.84.84.46 0 .84-.38.84-.84a.852.852 0 0 0-.84-.84Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.4 22.748c-.56 0-1.11-.29-1.41-.81l-.07-.11c-.11-.19-.2-.24-.22-.25-.01 0-.11.06-.22.25l-.06.1a1.63 1.63 0 0 1-2.24.59l-.9-.52c-.41-.23-.7-.61-.82-1.07-.12-.45-.06-.93.17-1.33.11-.19.11-.3.1-.32-.01-.01-.1-.06-.32-.06-.97 0-1.76-.79-1.76-1.75v-.93c0-.97.79-1.75 1.75-1.75.22 0 .31-.06.33-.07 0-.01 0-.12-.11-.31-.23-.41-.3-.88-.17-1.33.12-.45.41-.83.82-1.07l.91-.53c.76-.45 1.77-.19 2.22.59l.06.11c.11.19.2.24.22.25.01 0 .11-.06.22-.25l.06-.1c.47-.79 1.47-1.05 2.24-.59l.93.51c.41.23.7.61.82 1.07.12.45.06.93-.17 1.33-.11.19-.11.3-.1.32.01.01.1.06.32.06.97 0 1.76.79 1.76 1.75v.93c0 .97-.79 1.75-1.75 1.75-.22 0-.31.06-.33.07 0 .01 0 .12.11.31.23.41.3.88.17 1.33-.12.45-.41.83-.82 1.07l-.91.53c-.27.15-.55.23-.83.23Zm-1.69-2.67c.6 0 1.15.36 1.52 1l.06.11c.03.05.11.08.17.04l.92-.53c.08-.04.11-.12.12-.16.01-.04.02-.11-.02-.19-.37-.63-.4-1.29-.1-1.81.3-.52.89-.82 1.62-.82.14 0 .26-.12.26-.25v-.93c0-.14-.12-.25-.25-.25-.73 0-1.33-.3-1.62-.82-.3-.52-.26-1.18.1-1.81.05-.08.04-.16.02-.19a.267.267 0 0 0-.12-.16l-.91-.53c-.07-.04-.15-.01-.19.05l-.05.09c-.37.64-.92 1-1.52 1s-1.15-.36-1.52-1l-.06-.1c-.03-.06-.12-.08-.17-.05l-.92.53c-.08.04-.11.12-.12.16-.01.04-.02.11.02.19.37.63.4 1.29.1 1.81-.3.52-.89.82-1.62.82-.14 0-.26.12-.26.25v.93c0 .14.12.25.25.25.73 0 1.33.3 1.62.82.3.52.26 1.18-.1 1.81a.268.268 0 0 0 .1.35l.91.53c.07.04.15.01.19-.05l.05-.1c.36-.63.92-.99 1.52-.99Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.35 8c-.55-.7-1.47-1-2.85-1h-3C8 7 7 8 7 10.5v3c0 1.38.3 2.3.99 2.85",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M8.01 4V2M12 4V2M16 4V2M20 8h2M8.01 20v2M2 8h2M2 12h2M2 16h2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M16.71 18.59a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M11.41 17.462v-.93c0-.55.45-1 1-1 .96 0 1.35-.68.87-1.51a1 1 0 0 1 .37-1.37l.91-.53c.42-.25.96-.1 1.21.32l.06.1c.48.83 1.26.83 1.74 0l.06-.1c.25-.42.79-.56 1.21-.32l.91.53c.48.28.65.89.37 1.37-.48.83-.09 1.51.87 1.51.55 0 1 .45 1 1v.93c0 .55-.45 1-1 1-.96 0-1.35.68-.87 1.51a1 1 0 0 1-.37 1.37l-.91.53c-.42.25-.96.1-1.21-.32l-.06-.1c-.48-.83-1.26-.83-1.74 0l-.06.1c-.25.42-.79.56-1.21.32l-.91-.53c-.48-.28-.65-.89-.37-1.37.48-.83.09-1.51-.87-1.51a.99.99 0 0 1-1-1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color, strokeWidth) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React__default["default"].createElement(Bold, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Broken':
      return /*#__PURE__*/React__default["default"].createElement(Broken, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Bulk':
      return /*#__PURE__*/React__default["default"].createElement(Bulk, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Linear':
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Outline':
      return /*#__PURE__*/React__default["default"].createElement(Outline, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'TwoTone':
      return /*#__PURE__*/React__default["default"].createElement(TwoTone, {
        color: color,
        strokeWidth: strokeWidth
      });

    default:
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color,
        strokeWidth: strokeWidth
      });
  }
};

var CpuSetting = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      strokeWidth = _ref7.strokeWidth,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], _rollupPluginBabelHelpers._extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color, strokeWidth));
});
CpuSetting.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
CpuSetting.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
CpuSetting.displayName = 'CpuSetting';

module.exports = CpuSetting;
