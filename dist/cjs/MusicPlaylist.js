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
    d: "M18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM13.91 16.21c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62ZM9.51 17.739c0-.34-.28-.61-.62-.61-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34-.01.62-.29.62-.63Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18 7H6c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4Zm-1.97 5.46v4.37c0 .02-.01.03-.01.05a2.122 2.122 0 0 1-2.11 2.07 2.121 2.121 0 0 1 0-4.24c.22 0 .42.04.62.1v-1.37l-3.52.96v3.34a2.121 2.121 0 0 1-4.24 0c0-1.17.95-2.12 2.12-2.12.22 0 .42.04.62.1v-3.5c0-.89.55-1.61 1.4-1.83l2.73-.75c.88-.23 1.42 0 1.73.24.3.23.66.7.66 1.59v.99Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M2 12c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-.83M16 4.5h2M6 4.5h7.17M9 2h6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.89 19.111a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.278 16.832v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.91 18.2a1.37 1.37 0 1 0 0-2.739 1.37 1.37 0 0 0 0 2.74ZM10.258 13.83l5.02-1.37",
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
    d: "M18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M18 7H6c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.37 9.89c-.3-.24-.85-.47-1.73-.24l-2.73.75c-.85.22-1.4.94-1.4 1.83v3.5c-.2-.06-.4-.1-.62-.1a2.121 2.121 0 0 0 0 4.24c1.17 0 2.12-.95 2.12-2.12v-3.34l3.52-.96v1.37c-.2-.06-.4-.1-.62-.1a2.121 2.121 0 0 0 0 4.24c1.15 0 2.09-.92 2.11-2.07 0-.02.01-.03.01-.05v-5.35c0-.9-.36-1.37-.66-1.6Zm-6.48 8.47c-.34 0-.62-.28-.62-.62a.621.621 0 0 1 1.24-.01c0 .35-.28.63-.62.63Zm5.02-.91c-.34 0-.62-.28-.62-.62 0-.34.28-.62.62-.62.34 0 .62.28.62.62 0 .34-.28.62-.62.62Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17 22H7c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5ZM6 4.5h12M9 2h6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.89 19.11a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.28 16.83v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.91 18.2a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74ZM10.26 13.83l5.02-1.37",
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
    d: "M17 22.75H7c-3.65 0-5.75-2.1-5.75-5.75v-5c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v5c0 3.65-2.1 5.75-5.75 5.75Zm-10-15c-2.86 0-4.25 1.39-4.25 4.25v5c0 2.86 1.39 4.25 4.25 4.25h10c2.86 0 4.25-1.39 4.25-4.25v-5c0-2.86-1.39-4.25-4.25-4.25H7ZM18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.89 19.861a2.121 2.121 0 0 1 0-4.24 2.121 2.121 0 0 1 0 4.24Zm0-2.74c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10.258 18.49c-.41 0-.75-.34-.75-.75v-5.51c0-.88.55-1.59 1.39-1.82l2.74-.75c.87-.24 1.42-.01 1.72.23.3.23.66.7.66 1.59v5.35c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.35c0-.28-.06-.39-.08-.4-.02-.01-.14-.05-.42.03l-2.73.75c-.25.07-.29.24-.29.38v5.51c.01.4-.33.74-.74.74Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.91 18.95a2.121 2.121 0 0 1 0-4.24 2.121 2.121 0 0 1 0 4.24Zm0-2.74c-.34 0-.62.28-.62.62 0 .34.28.62.62.62.34 0 .62-.28.62-.62 0-.34-.28-.62-.62-.62ZM10.258 14.582a.747.747 0 0 1-.19-1.47l5.01-1.37a.75.75 0 1 1 .39 1.45l-5.01 1.37c-.07.01-.13.02-.2.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M17 22H7c-3 0-5-1.5-5-5v-5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v5c0 3.5-2 5-5 5ZM6 4.5h12M9 2h6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M8.89 19.111a1.37 1.37 0 1 0 0-2.74 1.37 1.37 0 0 0 0 2.74Z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M15.278 16.832v-5.35c0-1.14-.71-1.3-1.44-1.1l-2.74.75c-.5.14-.84.53-.84 1.1v5.51"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M13.91 18.2a1.37 1.37 0 1 0 0-2.739 1.37 1.37 0 0 0 0 2.74ZM10.258 13.83l5.02-1.37"
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

var MusicPlaylist = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
MusicPlaylist.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
MusicPlaylist.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MusicPlaylist.displayName = 'MusicPlaylist';

module.exports = MusicPlaylist;