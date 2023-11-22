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
    fill: color,
    d: "M7.93 5.481l3.13 3.13c.52.52 1.37.52 1.89 0l3.13-3.13c.84-.84.25-2.29-.95-2.29H8.87c-1.19 0-1.79 1.45-.94 2.29zM7.93 18.52l3.13-3.13a1.34 1.34 0 011.89 0l3.13 3.13c.84.84.25 2.29-.95 2.29H8.87c-1.19 0-1.79-1.45-.94-2.29zM2.16 11.43l2.29-3.6c.36-.57 1.16-.66 1.64-.18l3.6 3.6c.41.41.41 1.08 0 1.49l-3.6 3.6c-.48.48-1.27.39-1.64-.18l-2.29-3.6c-.21-.34-.21-.78 0-1.13zM21.84 11.43l-2.29-3.6c-.36-.57-1.16-.66-1.64-.18l-3.6 3.6c-.41.41-.41 1.08 0 1.49l3.6 3.6c.48.48 1.27.39 1.64-.18l2.29-3.6c.21-.34.21-.78 0-1.13z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m8.52 5.15 2.67 2.67c.45.45 1.17.45 1.62 0l2.67-2.67c.72-.72.21-1.95-.81-1.95H9.32c-1.01-.01-1.52 1.23-.8 1.95ZM8.52 18.851l2.67-2.67a1.14 1.14 0 0 1 1.62 0l2.67 2.67c.72.72.21 1.95-.81 1.95H9.32c-1.01.01-1.52-1.23-.8-1.95ZM2.16 11.45l2.21-3.48c.35-.55 1.12-.63 1.58-.17l3.48 3.48c.4.4.4 1.04 0 1.44L5.95 16.2c-.46.46-1.23.38-1.58-.17l-2.21-3.48a1.04 1.04 0 0 1 0-1.1ZM18.05 7.8c.46-.46 1.23-.38 1.58.17l2.21 3.48c.21.33.21.76 0 1.09l-2.21 3.48c-.35.55-1.12.63-1.58.17l-3.48-3.48c-.4-.4-.4-1.04 0-1.44l.36-.36",
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
    d: "m7.93 5.481 3.13 3.13c.52.52 1.37.52 1.89 0l3.13-3.13c.84-.84.25-2.29-.95-2.29H8.87c-1.19 0-1.79 1.45-.94 2.29ZM7.93 18.52l3.13-3.13a1.34 1.34 0 0 1 1.89 0l3.13 3.13c.84.84.25 2.29-.95 2.29H8.87c-1.19 0-1.79-1.45-.94-2.29Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m2.16 11.43 2.29-3.6c.36-.57 1.16-.66 1.64-.18l3.6 3.6c.41.41.41 1.08 0 1.49l-3.6 3.6c-.48.48-1.27.39-1.64-.18l-2.29-3.6c-.21-.34-.21-.78 0-1.13ZM21.84 11.43l-2.29-3.6c-.36-.57-1.16-.66-1.64-.18l-3.6 3.6c-.41.41-.41 1.08 0 1.49l3.6 3.6c.48.48 1.27.39 1.64-.18l2.29-3.6c.21-.34.21-.78 0-1.13Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m8.5 5.1 2.7 2.7c.4.4 1.2.4 1.6 0l2.7-2.7c.7-.7.2-2-.8-2H9.3c-1 .1-1.5 1.3-.8 2ZM8.5 18.9l2.7-2.7c.4-.4 1.2-.4 1.6 0l2.7 2.7c.7.7.2 2-.8 2H9.3c-1-.1-1.5-1.3-.8-2ZM2.2 11.5 4.4 8c.3-.6 1.1-.7 1.6-.2l3.5 3.5c.4.4.4 1 0 1.4L6 16.2c-.5.5-1.2.4-1.6-.2l-2.2-3.5c-.3-.3-.3-.7 0-1ZM21.8 11.5 19.6 8c-.3-.5-1.1-.6-1.6-.2l-3.5 3.5c-.4.4-.4 1 0 1.4l3.5 3.5c.5.5 1.2.4 1.6-.2l2.2-3.5c.3-.3.3-.7 0-1Z",
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
    d: "M12 8.91c-.49 0-.97-.18-1.34-.55L7.99 5.69a1.89 1.89 0 0 1-.41-2.07c.29-.71.98-1.17 1.75-1.17h5.35c.77 0 1.46.46 1.75 1.17.29.71.13 1.52-.41 2.07l-2.67 2.67c-.38.36-.86.55-1.35.55ZM9.05 4.62l2.67 2.67c.15.15.4.15.56 0l2.67-2.67a.36.36 0 0 0 .08-.43c-.04-.07-.13-.24-.36-.24H9.32c-.24 0-.33.17-.36.24-.03.07-.08.26.09.43ZM14.67 21.56H9.32c-.77 0-1.46-.46-1.75-1.17-.29-.71-.13-1.52.41-2.07l2.67-2.67c.72-.72 1.96-.72 2.68 0L16 18.32c.54.54.71 1.36.41 2.07a1.86 1.86 0 0 1-1.74 1.17Zm-5.62-2.18a.36.36 0 0 0-.08.43c.04.07.13.24.36.24h5.35c.24 0 .33-.17.36-.24.03-.07.08-.26-.08-.43l-2.67-2.67a.405.405 0 0 0-.56 0l-2.68 2.67ZM5.23 17.25c-.06 0-.13 0-.2-.01-.54-.06-1.01-.35-1.3-.81l-2.21-3.48c-.37-.58-.37-1.32 0-1.9l2.21-3.48a1.76 1.76 0 0 1 2.74-.3l3.48 3.48c.33.33.52.78.52 1.25s-.18.92-.52 1.25l-3.47 3.48c-.33.33-.78.52-1.25.52Zm-2.44-5.39c-.06.09-.06.2 0 .29L5 15.63c.06.09.15.12.2.12.05 0 .14 0 .22-.08l3.48-3.48a.268.268 0 0 0 0-.38L5.42 8.33c-.08-.08-.17-.08-.22-.08-.05.01-.14.03-.2.12l-2.21 3.49ZM18.77 17.25c-.47 0-.91-.18-1.25-.52l-3.48-3.48c-.33-.33-.52-.78-.52-1.25s.18-.92.52-1.25l3.47-3.48a1.76 1.76 0 0 1 2.74.3l2.21 3.48c.37.58.37 1.32 0 1.9l-2.21 3.48c-.29.46-.76.75-1.3.81-.05 0-.12.01-.18.01Zm0-8.99c-.05 0-.12.01-.19.08l-3.48 3.48c-.07.07-.08.15-.08.19 0 .04.01.12.08.19l3.48 3.48c.08.08.17.08.22.08.05-.01.14-.03.2-.12l2.21-3.48c.06-.09.06-.2 0-.29L19 8.39a.258.258 0 0 0-.2-.12c-.01-.01-.02-.01-.03-.01Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m8.52 5.15 2.67 2.67c.45.45 1.17.45 1.62 0l2.67-2.67c.72-.72.21-1.95-.81-1.95H9.32c-1.01-.01-1.52 1.23-.8 1.95ZM8.52 18.851l2.67-2.67a1.14 1.14 0 0 1 1.62 0l2.67 2.67c.72.72.21 1.95-.81 1.95H9.32c-1.01.01-1.52-1.23-.8-1.95Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m2.16 11.45 2.21-3.48c.35-.55 1.12-.63 1.58-.17l3.48 3.48c.4.4.4 1.04 0 1.44L5.95 16.2c-.46.46-1.23.38-1.58-.17l-2.21-3.48a1.04 1.04 0 0 1 0-1.1ZM21.84 11.45l-2.21-3.48c-.35-.55-1.12-.63-1.58-.17l-3.48 3.48c-.4.4-.4 1.04 0 1.44l3.48 3.48c.46.46 1.23.38 1.58-.17l2.21-3.48c.21-.34.21-.76 0-1.1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
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

var Educare = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Educare.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Educare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Educare.displayName = 'Educare';

module.exports = Educare;
