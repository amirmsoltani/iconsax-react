import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M15 15.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M22 8.5c0 3.26-2.4 5.95-5.52 6.42v-.06c-.31-3.88-3.46-7.03-7.37-7.34h-.03A6.495 6.495 0 0115.5 2 6.5 6.5 0 0122 8.5zM5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2zM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.509 6.509 0 0 0-5.96-5.96A6.5 6.5 0 1 1 22 8.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.68 20.76A6.5 6.5 0 1 1 8.5 22M5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2ZM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M15 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.509 6.509 0 0 0-5.96-5.96A6.5 6.5 0 1 1 22 8.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2ZM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.509 6.509 0 0 0-5.96-5.96A6.5 6.5 0 1 1 22 8.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2ZM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M15.5 15.75c-.18 0-.38-.01-.57-.02a.751.751 0 0 1-.7-.69c-.22-2.79-2.49-5.05-5.27-5.27a.751.751 0 0 1-.69-.7c-.01-.19-.02-.38-.02-.57 0-4 3.25-7.25 7.25-7.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25ZM9.75 8.36c2.98.52 5.37 2.91 5.89 5.89a5.755 5.755 0 0 0 5.61-5.75c0-3.17-2.58-5.75-5.75-5.75-3.12 0-5.67 2.5-5.75 5.61Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 22.75c-4 0-7.25-3.25-7.25-7.25a7.255 7.255 0 0 1 7.82-7.23c3.53.28 6.39 3.14 6.66 6.65.01.2.02.39.02.58 0 4-3.25 7.25-7.25 7.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75a5.757 5.757 0 0 0 5.73-6.22c-.22-2.77-2.48-5.04-5.27-5.26-.14-.01-.3-.02-.46-.02ZM3 7.34a1.737 1.737 0 0 1-1.75-1.75V3c0-.96.79-1.75 1.75-1.75h2.59a1.752 1.752 0 0 1 1.24 2.99L4.24 6.83c-.34.33-.78.51-1.24.51Zm0-4.59c-.14 0-.25.11-.25.25v2.59c0 .15.1.21.15.23.06.02.17.05.27-.05l2.59-2.59c.1-.1.08-.21.05-.27-.03-.06-.09-.15-.23-.15H3v-.01ZM20.999 22.749h-2.59a1.752 1.752 0 0 1-1.24-2.99l2.59-2.59c.5-.5 1.25-.65 1.91-.38.66.27 1.08.91 1.08 1.62v2.59c0 .96-.79 1.75-1.75 1.75Zm-.01-4.59a.24.24 0 0 0-.17.08l-2.59 2.59c-.1.1-.08.21-.05.27.03.06.09.15.23.15h2.59c.14 0 .25-.11.25-.25v-2.59c0-.15-.1-.21-.15-.23a.36.36 0 0 0-.11-.02Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 8.5a6.5 6.5 0 0 1-7.02 6.48 6.509 6.509 0 0 0-5.96-5.96A6.5 6.5 0 1 1 22 8.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 15.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M5.59 2H3c-.55 0-1 .45-1 1v2.59c0 .89 1.08 1.34 1.71.71L6.3 3.71C6.92 3.08 6.48 2 5.59 2ZM18.41 22H21c.55 0 1-.45 1-1v-2.59c0-.89-1.08-1.34-1.71-.71l-2.59 2.59c-.62.63-.18 1.71.71 1.71Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var chooseVariant = function chooseVariant(variant, color, strokeWidth) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React.createElement(Bold, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Broken':
      return /*#__PURE__*/React.createElement(Broken, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Bulk':
      return /*#__PURE__*/React.createElement(Bulk, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Linear':
      return /*#__PURE__*/React.createElement(Linear, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'Outline':
      return /*#__PURE__*/React.createElement(Outline, {
        color: color,
        strokeWidth: strokeWidth
      });

    case 'TwoTone':
      return /*#__PURE__*/React.createElement(TwoTone, {
        color: color,
        strokeWidth: strokeWidth
      });

    default:
      return /*#__PURE__*/React.createElement(Linear, {
        color: color,
        strokeWidth: strokeWidth
      });
  }
};

var Trade = /*#__PURE__*/forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      strokeWidth = _ref7.strokeWidth,
      rest = _objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React.createElement(Svg, _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color, strokeWidth));
});
Trade.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Trade.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Trade.displayName = 'Trade';

export { Trade as default };
