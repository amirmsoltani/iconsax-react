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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm.01 16.25c-1.13 0-2.05-.92-2.05-2.05 0-.66.32-1.24.81-1.62-.42-1.1-1.47-1.86-2.65-1.82l-2.06.01h-.01c-.61 0-1.19-.18-1.68-.49v2.02c.76.3 1.3 1.04 1.3 1.9 0 1.13-.92 2.05-2.05 2.05s-2.05-.92-2.05-2.05c0-.87.54-1.6 1.3-1.9V9.95a2.21 2.21 0 0 1-1.3-2c0-1.21.99-2.2 2.2-2.2 1.21 0 2.2.99 2.2 2.2 0 .98-.65 1.8-1.54 2.09.2.73.86 1.24 1.62 1.24h.01l2.06-.01h.02c1.84 0 3.49 1.17 4.09 2.91 1.03.11 1.84.97 1.84 2.03a2.066 2.066 0 0 1-2.06 2.04Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 13.02V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9M7.8 10.2v4.2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.95 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.8 17.998a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.2 17.998a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.88 10.2a2.425 2.425 0 0 0 2.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41",
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
    d: "M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.41 14.168a4.341 4.341 0 0 0-4.09-2.91h-.02l-2.06.01h-.01c-.76 0-1.42-.51-1.62-1.24.89-.28 1.54-1.11 1.54-2.09 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .89.54 1.66 1.3 2v4.34c-.76.3-1.3 1.04-1.3 1.9 0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05c0-.87-.54-1.6-1.3-1.9v-2.02c.49.31 1.07.49 1.68.49h.01l2.06-.01c1.18-.04 2.23.72 2.65 1.82-.49.38-.81.96-.81 1.62 0 1.13.92 2.05 2.05 2.05s2.05-.92 2.05-2.05c.01-1.04-.8-1.9-1.83-2.01Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.8 10.2v4.2M7.95 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.8 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.2 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.88 10.2a2.425 2.425 0 0 0 2.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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
    d: "M7.8 15.15c-.41 0-.75-.34-.75-.75v-4.2c0-.41.34-.75.75-.75s.75.34.75.75v4.2c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.95 10.65c-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7Zm0-3.9c-.66 0-1.2.54-1.2 1.2 0 .66.54 1.2 1.2 1.2.66 0 1.2-.54 1.2-1.2 0-.66-.54-1.2-1.2-1.2ZM7.8 18.748c-1.41 0-2.55-1.14-2.55-2.55s1.14-2.55 2.55-2.55 2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55Zm0-3.6a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1ZM16.2 18.748c-1.41 0-2.55-1.14-2.55-2.55s1.14-2.55 2.55-2.55 2.55 1.14 2.55 2.55-1.14 2.55-2.55 2.55Zm0-3.6a1.05 1.05 0 1 0 0 2.1 1.05 1.05 0 0 0 0-2.1Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.7 15.171a.75.75 0 0 1-.71-.5c-.4-1.14-1.47-1.9-2.68-1.9h-.01l-2.06.01h-.01c-1.45 0-2.72-.98-3.08-2.38-.1-.4.14-.81.54-.91.39-.1.81.14.91.54.19.74.86 1.26 1.63 1.26h.01l2.06-.01h.02c1.84 0 3.49 1.17 4.1 2.91.14.39-.07.82-.46.96-.09.01-.18.02-.26.02Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.8 10.2v4.2M7.95 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9ZM7.8 17.998a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM16.2 17.998a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.879 10.2a2.425 2.425 0 0 0 2.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41"
  })), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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

var HierarchySquare2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
HierarchySquare2.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
HierarchySquare2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
HierarchySquare2.displayName = 'HierarchySquare2';

module.exports = HierarchySquare2;
