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
    d: "m20.19 14.06-1.13-1.88c-.25-.41-.47-1.2-.47-1.68V8.63c0-3.63-2.95-6.58-6.57-6.58C8.39 2.06 5.44 5 5.44 8.63v1.86c0 .48-.22 1.27-.46 1.68l-1.13 1.88c-.43.73-.53 1.56-.26 2.28.27.73.88 1.31 1.68 1.57 1.08.36 2.17.62 3.28.81.11.02.22.03.33.05l.44.06c.26.04.52.07.79.09a20.187 20.187 0 0 0 3.79 0c.23-.02.46-.04.68-.07.18-.02.36-.04.54-.07.11-.01.22-.03.33-.05 1.12-.18 2.23-.46 3.31-.82a2.65 2.65 0 0 0 1.64-1.58c.28-.75.2-1.57-.21-2.26ZM12.75 10a.76.76 0 1 1-1.52 0V6.9a.76.76 0 1 1 1.52 0V10ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 6.441v3.33M20.59 15.17c.73 1.22.15 2.8-1.2 3.25a23.34 23.34 0 0 1-14.73 0c-1.44-.48-1.99-1.94-1.2-3.25l1.27-2.12c.35-.58.63-1.61.63-2.28v-2.1A6.66 6.66 0 0 1 12.02 2c3.66 0 6.66 3 6.66 6.66v2.1c0 .18.02.38.05.59",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.4 16.33c-.28.75-.87 1.32-1.64 1.58-1.08.36-2.19.63-3.31.82-.11.02-.22.04-.33.05-.18.03-.36.05-.54.07-.22.03-.45.05-.68.07-.63.05-1.25.08-1.88.08-.64 0-1.28-.03-1.91-.09-.27-.02-.53-.05-.79-.09l-.44-.06c-.11-.02-.22-.03-.33-.05-1.11-.18-2.21-.45-3.28-.81-.8-.27-1.41-.84-1.68-1.57-.27-.72-.17-1.56.26-2.28l1.13-1.88c.24-.41.46-1.2.46-1.68V8.63c0-3.63 2.95-6.58 6.58-6.58 3.62 0 6.57 2.95 6.57 6.58v1.86c0 .48.22 1.27.47 1.68l1.13 1.88c.41.7.49 1.52.21 2.28Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 10.76a.76.76 0 0 1-.76-.76V6.9a.76.76 0 1 1 1.52 0V10c-.01.42-.35.76-.76.76ZM14.83 20.01A3.014 3.014 0 0 1 12 22c-.79 0-1.57-.32-2.12-.89-.32-.3-.56-.7-.7-1.11.13.02.26.03.4.05.23.03.47.06.71.08.57.05 1.15.08 1.73.08.57 0 1.14-.03 1.7-.08.21-.02.42-.03.62-.06l.49-.06Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 6.44v3.33M12.02 2C8.34 2 5.36 4.98 5.36 8.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1C18.68 5 15.68 2 12.02 2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 10.521c-.41 0-.75-.34-.75-.75v-3.33c0-.41.34-.75.75-.75s.75.34.75.75v3.33c0 .42-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.02 20.348c-2.58 0-5.15-.41-7.6-1.23-.91-.3-1.6-.95-1.9-1.77-.3-.82-.2-1.76.29-2.58l1.27-2.12c.28-.47.53-1.35.53-1.9v-2.1c0-4.09 3.32-7.41 7.41-7.41s7.41 3.32 7.41 7.41v2.1c0 .54.25 1.43.53 1.9l1.27 2.12c.47.78.55 1.71.24 2.56-.31.85-.99 1.5-1.85 1.79-2.45.83-5.02 1.23-7.6 1.23Zm0-17.6c-3.26 0-5.91 2.65-5.91 5.91v2.1c0 .81-.32 1.98-.74 2.67l-1.27 2.13c-.26.43-.32.89-.17 1.29s.49.7.97.86c4.6 1.53 9.66 1.53 14.26 0 .43-.14.76-.46.91-.88.16-.42.11-.88-.12-1.27l-1.27-2.12c-.42-.69-.74-1.86-.74-2.67v-2.1c-.01-3.27-2.66-5.92-5.92-5.92Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22.9c-1.07 0-2.12-.44-2.88-1.2-.76-.76-1.2-1.81-1.2-2.88h1.5c0 .68.28 1.34.76 1.82s1.14.76 1.82.76c1.42 0 2.58-1.16 2.58-2.58h1.5c0 2.25-1.83 4.08-4.08 4.08Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M12 6.441v3.33",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12.02 2C8.34 2 5.36 4.98 5.36 8.66v2.1c0 .68-.28 1.7-.63 2.28l-1.27 2.12c-.78 1.31-.24 2.77 1.2 3.25a23.34 23.34 0 0 0 14.73 0 2.22 2.22 0 0 0 1.2-3.25l-1.27-2.12c-.35-.58-.63-1.61-.63-2.28v-2.1C18.68 5 15.68 2 12.02 2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
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

var NotificationBing = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
NotificationBing.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
NotificationBing.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
NotificationBing.displayName = 'NotificationBing';

module.exports = NotificationBing;