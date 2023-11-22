'use strict';

var _rollupPluginBabelHelpers = require('./_rollupPluginBabelHelpers-4cdf345c.js');
var React = require('react');
var PropTypes = require('prop-types');
var Svg = require('react-native-svg');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.5 9c.55 0 1-.45 1-1V7c0-3-1.53-5-5-5h-7c-3.53 0-5 2-5 5v10c0 2.314.878 4.026 2.895 4.684.301.098.594-.142.593-.46L6.98 19c0-1.66 1.35-3 3-3h4.01c1.64 0 2.99 1.34 3 2.98l.016 2.247c.002.317.296.553.596.452C19.59 21.013 20.5 19.303 20.5 17v-1.17c0-.53-.21-1.04-.59-1.42l-.82-.82c-.38-.38-.59-.89-.59-1.42V10c0-.55.45-1 1-1Zm-5.53-.47h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6a.749.749 0 1 1 0 1.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.01 20.97a1 1 0 0 1-1 1.01H8.994a1 1 0 0 1-1-.993L7.98 19a2 2 0 0 1 2-2h4.01c1.1 0 1.99.89 2 1.99l.02 1.98Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.5 11v6c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7c-3.53 0-5 2-5 5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.99 21.97 7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99M13.97 7.781h-6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18.5 10v2.17c0 .53.21 1.04.59 1.42l.82.82c.38.38.59.89.59 1.42V17c0 2.85-1.38 4.8-4.49 4.98l-.02-2.99c-.01-1.1-.9-1.99-2-1.99H9.98a2 2 0 0 0-2 2l.01 2.98C4.83 21.8 3.5 19.85 3.5 17V7c0-3 1.47-5 5-5h7c3.47 0 5 2 5 5v1c0 .55-.45 1-1 1s-1 .45-1 1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.01 21.98c-.16.01-.33.02-.51.02h-7c-.18 0-.35 0-.51-.02L7.98 19a2 2 0 0 1 2-2h4.01c1.1 0 1.99.89 2 1.99l.02 2.99ZM13.97 8.531h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.5 7v10c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7C4.97 2 3.5 4 3.5 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.99 21.97 7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99M13.97 7.78h-6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.5 22.75h-7c-3.71 0-5.75-2.04-5.75-5.75V7c0-3.71 2.04-5.75 5.75-5.75h7c3.65 0 5.75 2.1 5.75 5.75v1c0 .96-.79 1.75-1.75 1.75-.14 0-.25.11-.25.25v2.17c0 .33.13.65.37.88l.83.83c.52.52.81 1.21.81 1.94V17c-.01 3.65-2.11 5.75-5.76 5.75Zm-7-20C5.64 2.75 4.25 4.14 4.25 7v10c0 2.86 1.39 4.25 4.25 4.25h7c2.82 0 4.25-1.43 4.25-4.25v-1.17c0-.33-.13-.65-.37-.88l-.83-.83c-.52-.52-.81-1.21-.81-1.94V10c0-.96.79-1.75 1.75-1.75.14 0 .25-.11.25-.25V7c0-2.82-1.43-4.25-4.25-4.25H8.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.01 22.718c-.41 0-.75-.33-.75-.74l-.03-2.99c0-.69-.57-1.24-1.25-1.24h-4a1.249 1.249 0 0 0-1.25 1.25l.01 2.97a.749.749 0 1 1-1.5 0l-.01-2.97c0-.74.28-1.43.8-1.95s1.21-.81 1.95-.81h4.01c1.51 0 2.74 1.23 2.75 2.73l.03 2.98c0 .43-.34.77-.76.77 0 0 .01 0 0 0ZM13.97 8.531h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3.5 7v10c0 3 1.47 5 5 5h7c3.47 0 5-2 5-5v-1.17c0-.53-.21-1.04-.59-1.41l-.83-.83c-.38-.38-.59-.88-.59-1.41V10c0-.55.45-1 1-1s1-.45 1-1V7c0-3-1.53-5-5-5h-7C4.97 2 3.5 4 3.5 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M7.99 21.97 7.98 19c0-1.11.89-2 2-2h4.01c1.1 0 1.99.89 2 1.99l.03 2.99M13.97 7.781h-6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React__default["default"].createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React__default["default"].createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React__default["default"].createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React__default["default"].createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React__default["default"].createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React__default["default"].createElement(Linear, {
        color: color
      });
  }
};

var Ram = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      rest = _rollupPluginBabelHelpers._objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], _rollupPluginBabelHelpers._extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
Ram.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Ram.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ram.displayName = 'Ram';

module.exports = Ram;
