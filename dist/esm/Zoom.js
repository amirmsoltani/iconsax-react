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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.63 12.29c0 .51-.41.92-.92.92l-3.68.03a2.768 2.768 0 01-2.79-2.77v-2.8c0-.51.41-.92.92-.92h3.69a2.77 2.77 0 012.77 2.77v2.77h.01zm4.12-.29c0 .43-.48.69-.84.45l-1.92-1.28a.542.542 0 01-.24-.45V11.3c0-.18.09-.35.24-.45l1.92-1.28c.36-.24.84.02.84.45V14z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    clipRule: "evenodd",
    d: "M6 9.682v2.8c0 1.54 1.25 2.78 2.79 2.77l3.68-.03c.51 0 .92-.42.92-.92v-2.77a2.77 2.77 0 0 0-2.77-2.77H6.93a.92.92 0 0 0-.93.92Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    clipRule: "evenodd",
    d: "M18 9.238v5.54l-2.77-1.85v-1.84L18 9.238Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    opacity: ".4",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.25 9.682v2.8c0 1.54 1.25 2.78 2.79 2.77l3.68-.03c.51 0 .92-.42.92-.92v-2.77a2.77 2.77 0 0 0-2.77-2.77H7.18a.92.92 0 0 0-.93.92ZM17.75 10.022v3.98c0 .43-.48.69-.84.45l-1.92-1.28a.542.542 0 0 1-.24-.45v-1.42c0-.18.09-.35.24-.45l1.92-1.28c.36-.24.84.02.84.45Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    clipRule: "evenodd",
    d: "M6 9.7v2.8c0 1.5 1.3 2.8 2.8 2.8h3.7c.5 0 .9-.4.9-.9v-2.8c0-1.5-1.2-2.8-2.8-2.8H6.9c-.5 0-.9.4-.9.9Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    clipRule: "evenodd",
    d: "M18 9.2v5.6l-2.8-1.9v-1.8L18 9.2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M8.77 15.99c-.93 0-1.81-.36-2.48-1.02a3.502 3.502 0 0 1-1.04-2.5v-2.8C5.25 8.75 6 8 6.92 8h3.69c1.94 0 3.52 1.58 3.52 3.52v2.77c0 .92-.75 1.67-1.66 1.67l-3.68.03h-.02ZM6.92 9.51c-.1 0-.17.08-.17.17v2.8c0 .54.21 1.05.6 1.43.38.38.9.62 1.44.59l3.68-.03c.09 0 .17-.08.17-.17v-2.77c0-1.11-.91-2.02-2.02-2.02h-3.7ZM18 15.53c-.15 0-.29-.04-.42-.13l-2.77-1.85a.738.738 0 0 1-.33-.62v-1.85c0-.25.13-.49.33-.62l2.77-1.85a.76.76 0 0 1 .77-.04c.24.13.4.38.4.66v5.54c0 .28-.15.53-.4.66-.11.07-.23.1-.35.1Zm-2.02-3 1.27.85v-2.74l-1.27.85v1.04Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    clipRule: "evenodd",
    d: "M6 9.682v2.8c0 1.54 1.25 2.78 2.79 2.77l3.68-.03c.51 0 .92-.42.92-.92v-2.77a2.77 2.77 0 0 0-2.77-2.77H6.93a.92.92 0 0 0-.93.92Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    clipRule: "evenodd",
    d: "M18 9.238v5.54l-2.77-1.85v-1.84L18 9.238Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
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

var Zoom = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Zoom.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Zoom.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Zoom.displayName = 'Zoom';

export { Zoom as default };
