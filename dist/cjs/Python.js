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
    d: "M15.02 2.229c-2-.31-4.04-.31-6.04 0-.82.13-1.42.83-1.42 1.65v3.68H3.88c-.82 0-1.52.6-1.65 1.42-.31 2-.31 4.04 0 6.04.13.82.83 1.42 1.65 1.42h1.68c.28 0 .5-.22.5-.5v-1.72c0-2.05 1.67-3.72 3.72-3.72h4.44c.4 0 .72-.32.72-.72v-3.22c0-.28.22-.5.5-.5h.5c.28 0 .5-.22.5-.5v-1.68c0-.82-.6-1.52-1.42-1.65zm-4.69 3.35c-.41 0-.8-.39-.8-.8 0-.42.39-.81.8-.81.2 0 .42.09.56.23.15.14.25.37.25.58 0 .41-.39.8-.81.8z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: color,
    d: "M21.77 8.979c-.13-.82-.83-1.42-1.65-1.42h-3.18c-.28 0-.5.22-.5.5v1.72c0 1.22-.99 2.22-2.22 2.22H9.78c-1.23 0-2.22.99-2.22 2.22v5.9c0 .82.6 1.52 1.42 1.65 2 .31 4.04.31 6.04 0 .82-.13 1.42-.83 1.42-1.65v-3.68h3.68c.82 0 1.52-.6 1.65-1.42.31-2 .31-4.04 0-6.04zm-8.1 11.05c-.41 0-.81-.39-.81-.81 0-.42.39-.81.81-.81.19 0 .42.09.56.22.15.14.25.38.25.58-.01.43-.4.82-.81.82z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.56 7.56V3.89c0-.83.61-1.52 1.42-1.65 2-.31 4.04-.31 6.04 0 .82.13 1.42.83 1.42 1.65v5.89c0 1.23-.99 2.22-2.22 2.22H9.78c-1.23 0-2.22.99-2.22 2.22v5.89c0 .83.61 1.52 1.42 1.65 2 .31 4.04.31 6.04 0 .82-.13 1.42-.83 1.42-1.65v-3.67",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.44 7.559h3.67c.83 0 1.52.61 1.65 1.42.31 2 .31 4.04 0 6.04-.13.82-.83 1.42-1.65 1.42H12M2.02 12.98c.03.68.1 1.36.21 2.04.13.82.83 1.42 1.65 1.42h3.67M12 7.559H3.88c-.83 0-1.52.61-1.65 1.42M10.39 4.779c0 .03-.02.06-.06.06-.04 0-.06-.02-.06-.06 0-.03.02-.06.06-.06.01 0 .03.01.04.02.01.01.02.02.02.04ZM13.72 19.22c0 .03-.02.06-.06.06-.03 0-.06-.02-.06-.06 0-.03.02-.06.06-.06.01 0 .03.01.04.02.02.01.02.03.02.04Z",
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
    d: "M15.02 2.229c-2-.31-4.04-.31-6.04 0-.82.13-1.42.83-1.42 1.65v3.68H3.88c-.82 0-1.52.6-1.65 1.42-.31 2-.31 4.04 0 6.04.13.82.83 1.42 1.65 1.42h3.68v-2.22c0-1.23.99-2.22 2.22-2.22h4.44c1.23 0 2.22-1 2.22-2.22v-5.9c0-.82-.6-1.52-1.42-1.65Zm-4.69 3.35c-.41 0-.81-.39-.81-.81 0-.42.39-.8.81-.8.19 0 .42.09.56.22.15.14.25.38.25.58 0 .42-.39.81-.81.81Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M21.77 8.979c-.13-.82-.83-1.42-1.65-1.42h-3.68v2.22c0 1.22-.99 2.22-2.22 2.22H9.78c-1.23 0-2.22.99-2.22 2.22v5.9c0 .82.6 1.52 1.42 1.65 2 .31 4.04.31 6.04 0 .82-.13 1.42-.83 1.42-1.65v-3.68h3.68c.82 0 1.52-.6 1.65-1.42.31-2 .31-4.04 0-6.04Zm-8.1 11.05c-.41 0-.81-.39-.81-.81 0-.42.39-.81.81-.81.19 0 .42.09.56.22.15.14.25.38.25.58-.01.43-.4.82-.81.82Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.6 7.6V3.9c0-.8.6-1.5 1.4-1.7 2-.3 4-.3 6 0 .8.1 1.4.8 1.4 1.7v5.9c0 1.2-1 2.2-2.2 2.2H9.8c-1.2 0-2.2 1-2.2 2.2v5.9c0 .8.6 1.5 1.4 1.7 2 .3 4 .3 6 0 .8-.1 1.4-.8 1.4-1.7v-3.7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.4 7.6h3.7c.8 0 1.5.6 1.7 1.4.3 2 .3 4 0 6-.1.8-.8 1.4-1.7 1.4H12M12 7.6H3.9c-.8 0-1.5.6-1.7 1.4-.3 2-.3 4 0 6 .1.8.8 1.4 1.7 1.4h3.7M10 4.85v0M14 19.15v0",
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
    d: "M12 22.75c-1.05 0-2.101-.08-3.141-.24a2.42 2.42 0 0 1-2.06-2.39v-5.9a2.97 2.97 0 0 1 2.97-2.97h4.44c.81 0 1.47-.66 1.47-1.47V3.89c0-.46-.33-.84-.79-.91-1.93-.3-3.88-.3-5.81 0-.45.07-.79.46-.79.92v3.67c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.9c.01-1.2.87-2.21 2.06-2.39 2.08-.32 4.19-.32 6.27 0a2.42 2.42 0 0 1 2.06 2.39v5.9a2.97 2.97 0 0 1-2.97 2.97h-4.44c-.81 0-1.47.66-1.47 1.47v5.89c0 .46.33.84.79.91 1.93.3 3.88.3 5.81 0 .45-.07.79-.46.79-.92v-3.67c0-.41.34-.75.75-.75s.75.34.75.75v3.67a2.42 2.42 0 0 1-2.06 2.39c-1.03.16-2.08.24-3.13.24Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 17.19c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8.12c.46 0 .84-.33.91-.79.3-1.93.3-3.88 0-5.81a.916.916 0 0 0-.91-.79h-3.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.67c1.2.01 2.21.87 2.39 2.06.32 2.08.32 4.19 0 6.27a2.42 2.42 0 0 1-2.39 2.06H12ZM7.56 17.19H3.89a2.42 2.42 0 0 1-2.39-2.06c-.32-2.08-.32-4.19 0-6.27A2.42 2.42 0 0 1 3.89 6.8H12c.41 0 .75.34.75.75s-.34.75-.75.75H3.88c-.46 0-.84.33-.91.79-.3 1.93-.3 3.88 0 5.81.07.46.45.79.91.79h3.67c.41 0 .75.34.75.75s-.33.75-.74.75ZM10.33 5.579c-.41 0-.81-.39-.81-.81 0-.42.39-.8.81-.8.19 0 .42.09.56.22.15.14.25.38.25.58 0 .42-.39.81-.81.81ZM13.67 20.03c-.41 0-.81-.39-.81-.81 0-.42.39-.81.81-.81.19 0 .42.09.56.22.15.14.25.38.25.58-.01.43-.4.82-.81.82Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M7.56 7.56V3.89c0-.83.61-1.52 1.42-1.65 2-.31 4.04-.31 6.04 0 .82.13 1.42.83 1.42 1.65v5.89c0 1.23-.99 2.22-2.22 2.22H9.78c-1.23 0-2.22.99-2.22 2.22v5.89c0 .83.61 1.52 1.42 1.65 2 .31 4.04.31 6.04 0 .82-.13 1.42-.83 1.42-1.65v-3.67",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.44 7.559h3.67c.83 0 1.52.61 1.65 1.42.31 2 .31 4.04 0 6.04-.13.82-.83 1.42-1.65 1.42H12M12 7.559H3.88c-.83 0-1.52.61-1.65 1.42-.31 2-.31 4.04 0 6.04.13.82.83 1.42 1.65 1.42h3.67",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M10 4.852v0M14 19.148v0",
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

var Python = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Python.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Python.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Python.displayName = 'Python';

module.exports = Python;
