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
    d: "M15.08 11.342H8.92c-.64 0-1.27-.26-1.72-.72-.14-.14-.26-.29-.36-.46-.18-.3-.5-.49-.85-.49H3.5c-.55 0-1 .45-1 1v6.83c0 2.49 2.01 4.5 4.5 4.5h10c2.49 0 4.5-2.01 4.5-4.5v-6.83c0-.55-.45-1-1-1H18c-.36 0-.68.2-.86.51a2.42 2.42 0 0 1-2.06 1.16ZM17 2H7C4.51 2 2.5 4.01 2.5 6.5v.67c0 .55.45 1 1 1H6c.36 0 .68-.2.86-.51A2.42 2.42 0 0 1 8.92 6.5h5.99c.61 0 1.49.32 1.91.75.13.13.23.27.33.42.18.3.5.5.86.5h2.5c.55 0 1-.45 1-1V6.5A4.509 4.509 0 0 0 17 2Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.62 10.97V8.25c0-.77.03-1.46.11-2.07C3.1 2.89 4.65 2 8.88 2h6.25c4.22 0 5.78.89 6.14 4.18.09.61.11 1.3.11 2.07v7.5c0 .77-.03 1.46-.11 2.08-.37 3.28-1.92 4.17-6.15 4.17H8.88c-4.22 0-5.78-.89-6.14-4.17-.09-.62-.12-1.31-.12-2.08v-.74M21.23 8.922h-4.1M6.87 8.922h-4.1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.13 8.921c0 1.13-.92 2.05-2.05 2.05H8.92c-.56 0-1.08-.23-1.45-.61-.37-.36-.6-.87-.6-1.44 0-1.13.92-2.05 2.05-2.05h6.15c.56 0 1.08.23 1.45.61.38.37.61.88.61 1.44Z",
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
    d: "M21.5 6.5v11c0 2.49-2.01 4.5-4.5 4.5H7c-2.49 0-4.5-2.01-4.5-4.5v-11C2.5 4.01 4.51 2 7 2h10c2.49 0 4.5 2.01 4.5 4.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.5 8.17v1.5h-4.13c-.31.97-1.22 1.67-2.29 1.67H8.92c-.64 0-1.27-.26-1.72-.72-.27-.26-.46-.59-.58-.95H2.5v-1.5h4.13C6.94 7.2 7.85 6.5 8.92 6.5h6.15c.65 0 1.27.26 1.72.72.27.27.47.59.58.95h4.13Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.62 15.75v-7.5c0-.77.03-1.46.11-2.07C3.1 2.89 4.65 2 8.88 2h6.25c4.22 0 5.78.89 6.14 4.18.09.61.11 1.3.11 2.07v7.5c0 .77-.03 1.46-.11 2.08-.37 3.28-1.92 4.17-6.15 4.17H8.88c-4.22 0-5.78-.89-6.14-4.17-.09-.62-.12-1.31-.12-2.08ZM21.23 8.92h-4.1M6.87 8.92h-4.1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17.13 8.92c0 1.13-.92 2.05-2.05 2.05H8.92c-.56 0-1.08-.23-1.45-.61-.37-.36-.6-.87-.6-1.44 0-1.13.92-2.05 2.05-2.05h6.15c.56 0 1.08.23 1.45.61.38.37.61.88.61 1.44Z",
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
    d: "M15.12 22.75H8.88c-4.03 0-6.44-.79-6.88-4.84-.08-.58-.12-1.27-.12-2.16v-7.5c0-.86.04-1.57.12-2.17.46-4.06 2.77-4.83 6.89-4.83h6.25c4.12 0 6.44.77 6.88 4.85.1.67.12 1.43.12 2.15v7.5c0 .87-.04 1.56-.12 2.18-.46 4.05-2.78 4.82-6.9 4.82Zm-6.24-20c-4.25 0-5.11.92-5.4 3.51-.08.55-.11 1.2-.11 1.99v7.5c0 .82.04 1.44.11 1.97.29 2.61 1.14 3.53 5.4 3.53h6.24c4.25 0 5.11-.92 5.4-3.5.07-.55.11-1.2.11-2v-7.5c0-.66-.01-1.36-.1-1.96-.29-2.62-1.14-3.54-5.4-3.54H8.88Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.23 9.672h-4.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.1c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.87 9.672h-4.1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.1c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.08 11.721H8.92c-.75 0-1.47-.3-1.99-.84a2.71 2.71 0 0 1-.81-1.96c0-1.54 1.26-2.8 2.8-2.8h6.15c.75 0 1.47.31 1.99.84.52.51.82 1.21.82 1.96 0 1.54-1.26 2.8-2.8 2.8Zm-6.16-4.1c-.72 0-1.3.58-1.3 1.3 0 .35.13.67.37.9.25.26.58.4.93.4h6.16c.72 0 1.3-.58 1.3-1.3 0-.34-.14-.66-.38-.9-.25-.26-.58-.4-.93-.4H8.92Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.62 15.75v-7.5c0-.77.03-1.46.11-2.07C3.1 2.89 4.65 2 8.88 2h6.25c4.22 0 5.78.89 6.14 4.18.09.61.11 1.3.11 2.07v7.5c0 .77-.03 1.46-.11 2.08-.37 3.28-1.92 4.17-6.15 4.17H8.88c-4.22 0-5.78-.89-6.14-4.17-.09-.62-.12-1.31-.12-2.08Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.229 8.922h-4.1M6.87 8.922h-4.1M17.131 8.921c0 1.13-.92 2.05-2.05 2.05h-6.16c-.56 0-1.08-.23-1.45-.61-.37-.36-.6-.87-.6-1.44 0-1.13.92-2.05 2.05-2.05h6.15c.56 0 1.08.23 1.45.61.38.37.61.88.61 1.44Z"
  })));
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

var Airpod = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Airpod.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Airpod.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Airpod.displayName = 'Airpod';

module.exports = Airpod;
