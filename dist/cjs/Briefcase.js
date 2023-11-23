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
    d: "M21.091 6.98c-.85-.94-2.27-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.09-3.76 3.76v.05h-.24c-2.07 0-3.48.47-4.33 1.41-.99 1.1-.96 2.58-.86 3.59l.01.07.077.813c.015.15.095.285.221.367.24.157.641.416.882.55.14.09.29.17.44.25 1.71.94 3.59 1.57 5.5 1.88.09.94.5 2.04 2.69 2.04s2.62-1.09 2.69-2.06c2.04-.33 4.01-1.04 5.79-2.08.06-.03.1-.06.15-.09.397-.225.808-.501 1.183-.772a.493.493 0 0 0 .201-.346l.016-.143.05-.47c.01-.06.01-.11.02-.18.08-1.01.06-2.39-.88-3.43Zm-8 6.85c0 1.06 0 1.22-1.23 1.22s-1.23-.19-1.23-1.21v-1.26h2.46v1.25Zm-4.18-8.26v-.04c0-1.7 0-2.33 2.33-2.33h1.52c2.33 0 2.33.64 2.33 2.33v.05h-6.18v-.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20.873 13.735a.509.509 0 0 1 .726.502l-.36 3.954c-.21 2-1.03 4.04-5.43 4.04H8.19c-4.4 0-5.22-2.04-5.43-4.03l-.34-3.748a.508.508 0 0 1 .716-.506c1.14.516 3.242 1.43 4.541 1.77a.57.57 0 0 1 .37.315c.607 1.298 1.923 1.989 3.824 1.989 1.882 0 3.215-.718 3.824-2.019a.571.571 0 0 1 .37-.315c1.379-.363 3.618-1.385 4.81-1.952Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "m21.37 14 .34-3.57C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22h8c4.02 0 4.74-1.61 4.95-3.57M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2.621 11.27c2.25 1.54 4.79 2.47 7.38 2.76",
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
    d: "M21.091 6.98c-.85-.94-2.27-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.09-3.76 3.76v.05h-.24c-2.07 0-3.48.47-4.33 1.41-.99 1.1-.96 2.58-.86 3.59l.01.07.1 1.05c.01.01.03.03.05.04.33.22.67.44 1.03.64.14.09.29.17.44.25 1.71.94 3.59 1.57 5.5 1.88.09.94.5 2.04 2.69 2.04s2.62-1.09 2.69-2.06c2.04-.33 4.01-1.04 5.79-2.08.06-.03.1-.06.15-.09.46-.26.89-.54 1.31-.85a.12.12 0 0 0 .05-.05l.04-.36.05-.47c.01-.06.01-.11.02-.18.08-1.01.06-2.39-.88-3.43Zm-8 6.85c0 1.06 0 1.22-1.23 1.22s-1.23-.19-1.23-1.21v-1.26h2.46v1.25Zm-4.18-8.26v-.04c0-1.7 0-2.33 2.33-2.33h1.52c2.33 0 2.33.64 2.33 2.33v.05h-6.18v-.01Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "m20.5 12.298-.15.09a17.037 17.037 0 0 1-5.79 2.08c-.08.96-.5 2.06-2.69 2.06s-2.61-1.09-2.69-2.04c-1.91-.3-3.79-.93-5.5-1.88-.15-.08-.3-.16-.44-.25-.36-.2-.7-.42-1.03-.64-.02-.01-.04-.03-.05-.04l.61 6.51c.21 1.99 1.03 4.04 5.43 4.04h7.62c4.4 0 5.22-2.05 5.43-4.05l.63-6.78a.12.12 0 0 1-.05.05c-.43.31-.87.6-1.33.85Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.62 11.27c2.25 1.54 4.79 2.47 7.38 2.76",
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
    d: "M15.998 22.752h-8c-4.62 0-5.48-2.15-5.7-4.24l-.75-8.01c-.11-1.05-.14-2.6.9-3.76.9-1 2.39-1.48 4.55-1.48h10c2.17 0 3.66.49 4.55 1.48 1.04 1.16 1.01 2.71.9 3.77l-.75 7.99c-.22 2.1-1.08 4.25-5.7 4.25Zm-9-16c-1.69 0-2.85.33-3.44.99-.49.54-.65 1.37-.52 2.61l.75 8.01c.17 1.58.6 2.89 4.21 2.89h8c3.6 0 4.04-1.31 4.21-2.9l.75-7.99c.13-1.25-.03-2.08-.52-2.62-.59-.66-1.75-.99-3.44-.99h-10Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16 6.75c-.41 0-.75-.34-.75-.75v-.8c0-1.78 0-2.45-2.45-2.45h-1.6c-2.45 0-2.45.67-2.45 2.45V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.8c0-1.76 0-3.95 3.95-3.95h1.6c3.95 0 3.95 2.19 3.95 3.95V6c0 .41-.34.75-.75.75ZM12 16.75c-2.75 0-2.75-1.7-2.75-2.72V13c0-1.41.34-1.75 1.75-1.75h2c1.41 0 1.75.34 1.75 1.75v1c0 1.04 0 2.75-2.75 2.75Zm-1.25-4v1.28c0 1.03 0 1.22 1.25 1.22s1.25-.16 1.25-1.23v-1.27h-2.5Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14 14.768c-.37 0-.7-.28-.74-.66-.05-.41.24-.79.65-.84 2.64-.33 5.17-1.33 7.3-2.88.33-.25.8-.17 1.05.17.24.33.17.8-.17 1.05-2.34 1.7-5.1 2.79-8 3.16H14ZM10 14.78h-.09c-2.74-.31-5.41-1.31-7.72-2.89a.753.753 0 0 1-.2-1.04c.23-.34.7-.43 1.04-.2 2.11 1.44 4.54 2.35 7.04 2.64.41.05.71.42.66.83-.03.38-.35.66-.73.66Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14 13v1.02c0 1.09-.01 1.98-2 1.98-1.98 0-2-.88-2-1.97V13c0-1 0-1 1-1h2c1 0 1 0 1 1ZM21.65 11A16.484 16.484 0 0 1 14 14.02M2.617 11.27c2.25 1.54 4.79 2.47 7.38 2.76"
  })));
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

var Briefcase = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Briefcase.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Briefcase.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Briefcase.displayName = 'Briefcase';

module.exports = Briefcase;