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
    d: "M17.189 4.96v.02c-.25-.01-.5-.02-.77-.02h-7.7l1.07-1.06c.98-.99 2.06-1.9 3.31-1.9 1.26 0 2.34.91 3.32 1.9l.56.56c.14.13.21.31.21.5ZM20.84 13.17c.39 0 .7-.32.7-.72v-.88c0-3.93-1.2-5.12-5.12-5.12H7.58c-3.92 0-5.12 1.2-5.12 5.12V12c0 .4.31.71.7.71.84 0 1.51.68 1.51 1.51S4 15.74 3.16 15.74c-.39 0-.7.31-.7.71v.43c0 3.93 1.2 5.12 5.12 5.12h8.83c3.92 0 5.12-1.2 5.12-5.12 0-.39-.31-.71-.7-.71a1.5 1.5 0 0 1-1.51-1.5c.01-.83.68-1.5 1.52-1.5Zm-10.02 5.69c0 .39-.32.71-.71.71-.39 0-.71-.32-.71-.71v-2.68c0-.39.32-.71.71-.71.39 0 .71.32.71.71v2.68Zm0-6.59c0 .39-.32.71-.71.71-.39 0-.71-.32-.71-.71V9.59c0-.39.32-.71.71-.71.39 0 .71.32.71.71v2.68Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19.031 14.97c0 1.29 1.06 2.34 2.35 2.34 0 3.75-.94 4.69-4.69 4.69h-9.38c-3.75 0-4.69-.94-4.69-4.69v-.46a2.36 2.36 0 0 0 2.35-2.35 2.36 2.36 0 0 0-2.35-2.35v-.46c.01-3.75.94-4.69 4.69-4.69h9.37c3.75 0 4.69.94 4.69 4.69v.94M16.328 7h-9.09l2.93-2.93c2.39-2.39 3.59-2.39 5.98 0l.6.6c-.63.63-.78 1.56-.42 2.33Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 7v15",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "5 5"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M20.841 13.17c.39 0 .7-.32.7-.72v-.88c0-3.93-1.2-5.12-5.12-5.12h-6.3v2.43c.39 0 .71.32.71.71v2.68c0 .39-.32.71-.71.71v2.51c.39 0 .71.32.71.71v2.68c0 .39-.32.71-.71.71V22h6.3c3.92 0 5.12-1.2 5.12-5.12 0-.39-.31-.71-.7-.71a1.5 1.5 0 1 1 0-3Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.569 6.46c.01 0 .01 0 0 0h9.04c-.01-.02-.01-.03-.01-.05a1.2 1.2 0 0 1 .37-.95c.13-.13.21-.31.21-.5s-.08-.37-.21-.5l-.55-.56c-.98-.99-2.06-1.9-3.32-1.9-1.25 0-2.34.91-3.32 1.9l-2.56 2.56h.35ZM9.41 9.59v2.68c0 .39.32.71.71.71v2.51c-.39 0-.71.32-.71.71v2.68c0 .39.32.71.71.71V22H7.58c-3.92 0-5.12-1.2-5.12-5.12v-.43c0-.4.31-.71.7-.71.84 0 1.51-.68 1.51-1.51S4 12.72 3.16 12.72c-.39 0-.7-.31-.7-.71v-.43c0-3.93 1.2-5.12 5.12-5.12h2.53v2.43c-.38 0-.7.32-.7.7Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.91 14.692c0 1.29 1.06 2.34 2.35 2.34 0 3.75-.94 4.69-4.69 4.69H7.19c-3.75 0-4.69-.94-4.69-4.69v-.46a2.36 2.36 0 0 0 2.35-2.35 2.36 2.36 0 0 0-2.35-2.35v-.46c.01-3.75.94-4.69 4.69-4.69h9.37c3.75 0 4.69.94 4.69 4.69v.94c-1.29 0-2.34 1.04-2.34 2.34Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.211 6.723h-9.09l2.93-2.93c2.39-2.39 3.59-2.39 5.98 0l.6.6c-.63.63-.78 1.56-.42 2.33Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M9.879 6.723v15",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "5 5"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.691 22.75h-9.38c-4.17 0-5.44-1.27-5.44-5.44v-.46c0-.41.34-.75.75-.75.88 0 1.6-.72 1.6-1.6 0-.88-.72-1.6-1.6-1.6-.41 0-.75-.34-.75-.75v-.46c0-4.17 1.27-5.44 5.44-5.44h9.38c4.17 0 5.44 1.27 5.44 5.44v.94c0 .41-.34.75-.75.75-.88 0-1.6.72-1.6 1.6 0 .88.72 1.59 1.6 1.59.41 0 .75.34.75.75-.01 4.16-1.28 5.43-5.44 5.43Zm-13.31-5.24c.02 3.18.65 3.74 3.94 3.74h9.38c3.12 0 3.84-.51 3.93-3.28a3.1 3.1 0 0 1-2.34-3c0-1.45 1-2.67 2.35-3.01v-.28c0-3.35-.59-3.94-3.94-3.94h-9.39c-3.28 0-3.91.57-3.94 3.74a3.11 3.11 0 0 1 2.35 3.01c0 1.45-1 2.68-2.34 3.02Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M10 10.25c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .41-.34.75-.75.75ZM10 16.92c-.41 0-.75-.34-.75-.75v-3.33c0-.41.34-.75.75-.75s.75.34.75.75v3.33c0 .41-.34.75-.75.75ZM10 22.75c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75s.75.34.75.75V22c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M16.33 7.75H7.24a.74.74 0 0 1-.69-.46.772.772 0 0 1 .16-.82l2.93-2.93c2.7-2.7 4.35-2.7 7.04 0l.6.6a.75.75 0 0 1 0 1.06c-.4.4-.51.99-.28 1.5.11.23.09.5-.05.72a.75.75 0 0 1-.62.33Zm-7.28-1.5h6.33c-.02-.53.11-1.06.38-1.52l-.13-.13c-2.09-2.09-2.83-2.09-4.92 0L9.05 6.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M18.91 14.693c0 1.29 1.06 2.34 2.35 2.34 0 3.75-.94 4.69-4.69 4.69H7.19c-3.75 0-4.69-.94-4.69-4.69v-.46a2.36 2.36 0 0 0 2.35-2.35 2.36 2.36 0 0 0-2.35-2.35v-.46c.01-3.75.94-4.69 4.69-4.69h9.37c3.75 0 4.69.94 4.69 4.69v.94c-1.29 0-2.34 1.04-2.34 2.34Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M16.211 6.723h-9.09l2.93-2.93c2.39-2.39 3.59-2.39 5.98 0l.6.6c-.63.63-.78 1.56-.42 2.33Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    opacity: ".4",
    d: "M9.879 6.723v15",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeDasharray: "5 5"
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

var Ticket2 = /*#__PURE__*/React.forwardRef(function (_ref7, ref) {
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
Ticket2.propTypes = {
  variant: PropTypes__default["default"].oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes__default["default"].string,
  size: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number])
};
Ticket2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ticket2.displayName = 'Ticket2';

module.exports = Ticket2;