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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.42 14.58a.74.74 0 01-.61.31c-.15 0-.3-.05-.44-.14a5.55 5.55 0 00-5.27-.65.753.753 0 01-.97-.42.75.75 0 01.42-.97c2.24-.89 4.74-.58 6.69.82.35.25.42.72.18 1.05zm1.1-2.79a.74.74 0 01-.61.31c-.15 0-.3-.05-.44-.14a7.604 7.604 0 00-7.26-.89.753.753 0 01-.97-.42.75.75 0 01.42-.97 9.08 9.08 0 018.68 1.07c.34.24.42.71.18 1.04zm1.57-2.68a.74.74 0 01-.61.31c-.15 0-.3-.05-.44-.14-2.98-2.14-6.8-2.61-10.2-1.25a.75.75 0 01-.97-.42c-.15-.38.04-.82.42-.97 3.88-1.54 8.23-1.01 11.63 1.43.34.23.42.7.17 1.04z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.57 9.33c3.63-1.44 7.74-.93 10.92 1.34M7.94 12.378a8.385 8.385 0 0 1 7.97.98M8.83 15.412c1.99-.79 4.24-.51 5.98.73",
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
    d: "M17.48 11.421c-.15 0-.3-.05-.44-.14-2.98-2.14-6.8-2.61-10.2-1.25a.75.75 0 0 1-.97-.42c-.15-.38.04-.82.42-.97 3.88-1.54 8.23-1.01 11.63 1.43.34.24.41.71.17 1.05-.14.19-.37.3-.61.3Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.91 14.11c-.15 0-.3-.05-.44-.14a7.604 7.604 0 0 0-7.26-.89.753.753 0 0 1-.97-.42.75.75 0 0 1 .42-.97 9.08 9.08 0 0 1 8.68 1.07c.34.24.41.71.17 1.05-.14.19-.37.3-.6.3ZM14.81 16.9c-.15 0-.3-.05-.44-.14a5.55 5.55 0 0 0-5.27-.65.753.753 0 0 1-.97-.42.75.75 0 0 1 .42-.97c2.24-.89 4.74-.58 6.69.82.34.24.41.71.17 1.05a.71.71 0 0 1-.6.31Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.6 9.3c3.6-1.4 7.7-.9 10.9 1.3M7.9 12.4c2.7-1 5.7-.7 8 1M8.8 15.4c2-.8 4.2-.5 6 .7",
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.48 11.421c-.15 0-.3-.05-.44-.14-2.98-2.14-6.8-2.61-10.2-1.25a.75.75 0 0 1-.97-.42c-.15-.38.04-.82.42-.97 3.88-1.54 8.23-1.01 11.63 1.43.34.24.41.71.17 1.05-.14.19-.37.3-.61.3Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.91 14.11c-.15 0-.3-.05-.44-.14a7.604 7.604 0 0 0-7.26-.89.753.753 0 0 1-.97-.42.75.75 0 0 1 .42-.97 9.08 9.08 0 0 1 8.68 1.07c.34.24.41.71.17 1.05-.14.19-.37.3-.6.3ZM14.81 16.9c-.15 0-.3-.05-.44-.14a5.55 5.55 0 0 0-5.27-.65.753.753 0 0 1-.97-.42.75.75 0 0 1 .42-.97c2.24-.89 4.74-.58 6.69.82.34.24.41.71.17 1.05a.71.71 0 0 1-.6.31Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6.57 9.33c3.63-1.44 7.74-.93 10.92 1.34M7.94 12.378a8.385 8.385 0 0 1 7.97.98M8.83 15.412c1.99-.79 4.24-.51 5.98.73",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
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

var Spotify = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Spotify.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Spotify.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Spotify.displayName = 'Spotify';

export { Spotify as default };