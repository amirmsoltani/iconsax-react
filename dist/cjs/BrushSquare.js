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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-5.7 14.72c-.34.34-.79.57-1.34.64l-1.35.15c-.74.08-1.37-.55-1.29-1.3l.15-1.36c.13-1.21 1.14-1.98 2.21-2 .1-.01.22 0 .33.01.47.06.92.28 1.3.65.37.37.58.81.64 1.26.01.11.02.22.02.32 0 .62-.23 1.19-.67 1.63Zm6.95-9.17c-.72 1.8-2.37 4.16-3.94 5.7a3.3 3.3 0 0 0-2.8-2.74c1.54-1.58 3.92-3.25 5.73-3.98.32-.12.64-.03.84.17.2.22.3.53.17.85Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M1.97 12.941v2.06c0 5 2 7 7 7h6c5 0 7-2 7-7v-2M10.97 2h-2c-5 0-7 2-7 7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.51 3c.66-.37 1.3-.68 1.9-.92.47-.18.93-.04 1.22.25.3.3.45.76.26 1.23-1.23 3.07-4.32 7.25-6.9 9.32l-1.58 1.26c-.2.15-.4.27-.63.36 0-.15-.01-.3-.03-.46-.09-.67-.39-1.3-.93-1.83-.55-.55-1.21-.86-1.89-.95-.16-.01-.32-.02-.48-.01.09-.25.22-.48.39-.67L11.09 9c1.07-1.34 2.72-2.82 4.49-4.11",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.78 14.489c0 .88-.34 1.72-.97 2.36-.49.49-1.15.83-1.94.93l-1.97.21a1.7 1.7 0 0 1-1.87-1.88l.21-1.97c.19-1.75 1.65-2.87 3.21-2.9.16-.01.32 0 .48.01.68.09 1.34.4 1.89.95.54.54.84 1.16.93 1.83.02.16.03.32.03.46ZM15.82 11.981c0-2.09-1.69-3.79-3.79-3.79",
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
    d: "M14.19 0H5.81C2.17 0 0 2.17 0 5.81v8.37C0 17.83 2.17 20 5.81 20h8.37c3.64 0 5.81-2.17 5.81-5.81V5.81C20 2.17 17.83 0 14.19 0Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.83 1.55c-1.05 2.61-3.43 6.02-5.71 8.25a4.763 4.763 0 0 0-4.05-3.96c2.24-2.28 5.67-4.7 8.29-5.76.46-.18.93-.04 1.21.25.31.3.45.76.26 1.22Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M14.12 9.792c-.4.39-.8.75-1.18 1.05l-1.57 1.26c-.2.14-.4.26-.62.36 0-.15-.02-.3-.03-.46-.09-.66-.39-1.29-.93-1.83a3.31 3.31 0 0 0-1.88-.94c-.16-.02-.33-.02-.48-.02.09-.25.22-.48.39-.67l1.25-1.57c.3-.38.64-.76 1.01-1.14 2.07.29 3.72 1.91 4.04 3.96Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.75 12.47c0 .88-.34 1.72-.97 2.35-.49.49-1.14.83-1.94.93l-1.96.22c-1.07.12-1.99-.8-1.87-1.88l.22-1.96c.19-1.75 1.65-2.87 3.2-2.9.15-.01.32 0 .48.02.68.09 1.33.4 1.88.94.53.53.84 1.17.93 1.83.01.15.03.3.03.45Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M10.97 2h-2c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M21.88 3.56c-1.23 3.07-4.32 7.25-6.9 9.32l-1.58 1.26c-.2.15-.4.27-.63.36 0-.15-.01-.3-.03-.46-.09-.67-.39-1.3-.93-1.83-.55-.55-1.21-.86-1.89-.95-.16-.01-.32-.02-.48-.01.09-.25.22-.48.39-.67L11.09 9c2.07-2.58 6.26-5.69 9.32-6.92.47-.18.93-.04 1.22.25.3.3.44.76.25 1.23z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12.78 14.49c0 .88-.34 1.72-.97 2.36-.49.49-1.15.83-1.94.93l-1.97.21a1.7 1.7 0 01-1.87-1.88l.21-1.97c.19-1.75 1.65-2.87 3.21-2.9.16-.01.32 0 .48.01.68.09 1.34.4 1.89.95.54.54.84 1.16.93 1.83.02.16.03.32.03.46zM15.82 11.98c0-2.09-1.69-3.79-3.79-3.79"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.97 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h2c.41 0 .75.34.75.75s-.34.75-.75.75h-2C4.36 2.75 2.72 4.39 2.72 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 5.43-2.31 7.75-7.75 7.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.78 15.24c-.15 0-.29-.04-.42-.13a.738.738 0 0 1-.33-.62c0-.11-.01-.23-.03-.35-.07-.53-.31-1-.71-1.41-.41-.41-.91-.67-1.46-.74-.08-.01-.21-.02-.33-.01-.25.02-.5-.09-.65-.29a.78.78 0 0 1-.11-.71c.12-.34.31-.66.53-.91l1.23-1.54c2.14-2.67 6.45-5.87 9.63-7.14.73-.28 1.5-.12 2.03.41.55.55.71 1.33.42 2.04-1.27 3.17-4.47 7.49-7.13 9.62l-1.57 1.26c-.31.22-.56.37-.82.47-.09.03-.19.05-.28.05Zm-2.06-4.57c.61.2 1.16.54 1.63 1 .46.46.79.99.98 1.56l1.18-.95c2.49-2 5.49-6.04 6.68-9.01.08-.19-.01-.33-.09-.42-.05-.05-.19-.16-.42-.07-2.96 1.19-7 4.19-9 6.68l-.96 1.21Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.701 18.75c-.64 0-1.25-.25-1.71-.71-.53-.53-.79-1.26-.7-2.01l.21-1.96c.22-2.03 1.87-3.53 3.94-3.57.16-.01.36 0 .55.01a4 4 0 0 1 2.36 1.17c.64.64 1.03 1.4 1.14 2.26a4.061 4.061 0 0 1-1.15 3.45c-.63.63-1.45 1.02-2.38 1.14l-1.98.21c-.1.01-.19.01-.28.01Zm1.9-6.76h-.1c-1.15.03-2.36.8-2.51 2.24l-.21 1.97c-.03.29.07.58.27.78.2.2.48.3.76.27l1.97-.21c.58-.07 1.1-.32 1.49-.71.48-.49.75-1.13.75-1.83 0-.11-.01-.23-.03-.35-.07-.53-.31-1-.71-1.41-.41-.41-.91-.67-1.46-.74-.05-.01-.13-.01-.22-.01ZM15.82 12.731c-.41 0-.75-.34-.75-.75 0-1.67-1.36-3.04-3.04-3.04-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.5 0 4.54 2.03 4.54 4.54 0 .41-.33.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M10.97 2h-2c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M21.88 3.56c-1.23 3.07-4.32 7.25-6.9 9.32l-1.58 1.26c-.2.15-.4.27-.63.36 0-.15-.01-.3-.03-.46-.09-.67-.39-1.3-.93-1.83-.55-.55-1.21-.86-1.89-.95-.16-.01-.32-.02-.48-.01.09-.25.22-.48.39-.67L11.09 9c2.07-2.58 6.26-5.69 9.32-6.92.47-.18.93-.04 1.22.25.3.3.44.76.25 1.23Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.78 14.489c0 .88-.34 1.72-.97 2.36-.49.49-1.15.83-1.94.93l-1.97.21a1.7 1.7 0 0 1-1.87-1.88l.21-1.97c.19-1.75 1.65-2.87 3.21-2.9.16-.01.32 0 .48.01.68.09 1.34.4 1.89.95.54.54.84 1.16.93 1.83.02.16.03.32.03.46Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.82 11.981c0-2.09-1.69-3.79-3.79-3.79",
    stroke: color,
    strokeWidth: strokeWidth,
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

var BrushSquare = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
BrushSquare.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
BrushSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
BrushSquare.displayName = 'BrushSquare';

module.exports = BrushSquare;