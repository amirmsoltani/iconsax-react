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
    d: "m22.019 16.82-3.13-7.32c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72l-1.73 3.45c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76ZM6.97 8.381a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.332 12.84c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45c-1.2 2.4.55 5.23 3.23 5.23h12.76c2.59 0 4.34-2.65 3.32-5.04l-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22M9.969 5c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3c.36 0 .7.06 1.01.18",
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
    d: "m22.019 16.82-3.13-7.32c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72l-1.73 3.45c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M6.97 8.381a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.68 16.96-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22l-1.89 3.41c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45C1.16 19.17 2.91 22 5.59 22h12.76c2.6 0 4.35-2.65 3.33-5.04ZM6.97 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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
    d: "M18.36 22.75H5.59c-1.52 0-2.91-.77-3.71-2.07a4.35 4.35 0 0 1-.19-4.25l1.72-3.45c.56-1.12 1.46-1.82 2.47-1.93 1.01-.11 2.04.39 2.82 1.36l.22.28c.44.54.95.83 1.45.78.5-.04.96-.4 1.3-1.01l1.89-3.41c.78-1.41 1.82-2.14 2.95-2.09 1.12.06 2.08.9 2.72 2.38l3.13 7.31a4.35 4.35 0 0 1-.37 4.12 4.284 4.284 0 0 1-3.63 1.98Zm-12.2-10.2c-.04 0-.08 0-.12.01-.5.05-.96.45-1.29 1.1l-1.72 3.45c-.45.89-.4 1.94.12 2.79.52.85 1.44 1.36 2.44 1.36h12.76c.98 0 1.85-.47 2.39-1.29.54-.82.63-1.8.24-2.7l-3.13-7.31c-.38-.9-.91-1.45-1.42-1.47-.47-.03-1.08.47-1.56 1.32l-1.89 3.41c-.58 1.04-1.49 1.69-2.48 1.78-.99.08-2-.4-2.75-1.34l-.22-.28c-.42-.55-.9-.83-1.37-.83ZM6.969 8.75c-2.06 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25S9.219 6.24 9.219 5s-1.01-2.25-2.25-2.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.68 16.96-3.13-7.31c-1.06-2.48-3.01-2.58-4.32-.22l-1.89 3.41c-.96 1.73-2.75 1.88-3.99.33l-.22-.28c-1.29-1.62-3.11-1.42-4.04.43l-1.72 3.45C1.16 19.17 2.91 22 5.59 22h12.76c2.6 0 4.35-2.65 3.33-5.04Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M6.969 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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

var Image = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Image.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Image.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Image.displayName = 'Image';

module.exports = Image;
