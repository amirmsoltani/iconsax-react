import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-.39 9.84c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.1-.38.1-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.9c-1.09 0-1.94-.85-1.94-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.68h-.01Zm6.14 0c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.1-.38.1-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c1.21-.72 1.63-.98 1.71-2.79h-1.91c-1.09 0-1.94-.85-1.94-1.94V9.16c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.68Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.999 11.839h-2.68c-.71 0-1.19-.54-1.19-1.19v-1.49c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68ZM17 11.84c0 2.79-.52 3.26-2.09 4.19M10.858 11.839h-2.68c-.71 0-1.19-.54-1.19-1.19v-1.49c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68ZM10.86 11.84c0 2.79-.52 3.26-2.09 4.19",
    stroke: color,
    strokeWidth: strokeWidth,
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
    d: "M15.809 7.219h-1.49c-1.09 0-1.94.85-1.94 1.94v1.49c0 1.09.85 1.94 1.94 1.94h1.91c-.08 1.81-.5 2.08-1.71 2.79-.36.21-.47.67-.26 1.03.14.24.39.37.65.37.13 0 .26-.03.38-.1 1.79-1.06 2.46-1.75 2.46-4.83v-2.67c0-1.09-.87-1.96-1.94-1.96ZM9.68 7.219H8.19c-1.09 0-1.94.85-1.94 1.94v1.49c0 1.09.85 1.94 1.94 1.94h1.91c-.08 1.81-.5 2.08-1.71 2.79-.36.21-.47.67-.26 1.03.14.24.39.37.65.37.13 0 .26-.03.38-.1 1.79-1.06 2.46-1.75 2.46-4.83v-2.67c-.01-1.09-.88-1.96-1.94-1.96Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17 11.84h-2.68c-.71 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68ZM17 11.84c0 2.79-.52 3.26-2.09 4.19M10.86 11.84H8.18c-.71 0-1.19-.54-1.19-1.19V9.16c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68ZM10.86 11.84c0 2.79-.52 3.26-2.09 4.19",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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
    d: "M16.999 12.589h-2.68c-1.09 0-1.94-.85-1.94-1.94v-1.49c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.67c0 .42-.34.76-.75.76Zm-2.68-3.87c-.32 0-.44.24-.44.44v1.49c0 .2.11.44.44.44h1.93v-1.92c0-.24-.2-.44-.44-.44h-1.49v-.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.91 16.78c-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c1.36-.81 1.73-1.02 1.73-3.54 0-.41.34-.75.75-.75s.75.34.75.75c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.11-.38.11ZM10.862 12.589h-2.68c-1.09 0-1.94-.85-1.94-1.94v-1.49c0-1.09.85-1.94 1.94-1.94h1.49c1.07 0 1.94.87 1.94 1.94v2.67c0 .42-.33.76-.75.76Zm-2.67-3.87c-.32 0-.44.24-.44.44v1.49c0 .2.11.44.44.44h1.93v-1.92c0-.24-.2-.44-.44-.44h-1.49v-.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.77 16.78c-.26 0-.51-.13-.65-.37a.758.758 0 0 1 .26-1.03c1.36-.81 1.73-1.02 1.73-3.54 0-.41.34-.75.75-.75s.75.34.75.75c0 3.08-.67 3.77-2.46 4.83-.12.07-.25.11-.38.11Z",
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M17.003 11.839h-2.68c-.71 0-1.19-.54-1.19-1.19v-1.49c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68ZM17 11.84c0 2.79-.52 3.26-2.09 4.19M10.862 11.839h-2.68c-.71 0-1.19-.54-1.19-1.19v-1.49c0-.65.48-1.19 1.19-1.19h1.49c.65 0 1.19.54 1.19 1.19v2.68ZM10.863 11.84c0 2.79-.52 3.26-2.09 4.19"
  })), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var QuoteUpCircle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
QuoteUpCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
QuoteUpCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
QuoteUpCircle.displayName = 'QuoteUpCircle';

export { QuoteUpCircle as default };