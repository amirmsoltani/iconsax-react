import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.85 12.1c-.04.09-.09.17-.16.24l-3.04 3.04c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l1.76-1.76h-8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.31c.1 0 .19.02.29.06.18.08.33.22.41.41.06.18.06.39-.01.57zm-.7-3.17H6.85c-.1 0-.2-.02-.29-.06a.782.782 0 01-.41-.41.707.707 0 010-.57c.04-.09.09-.17.16-.24l3.04-3.04c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L8.66 9.43h8.5c.41 0 .75.34.75.75s-.34.75-.76.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M17.15 13.82l-3.04 3.04M6.85 13.82h10.3M6.85 10.18l3.04-3.04M14.11 10.18H6.85M17.149 10.18h-.52"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M17.85 13.53a.783.783 0 00-.41-.41.717.717 0 00-.29-.06H6.84c-.41 0-.75.34-.75.75s.34.75.75.75h8.5l-1.76 1.76c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.04-3.04c.07-.07.12-.15.16-.24a.75.75 0 00.01-.57zM17.15 9.43h-8.5l1.76-1.76c.29-.29.29-.77 0-1.06a.755.755 0 00-1.06 0L6.31 9.65c-.07.07-.12.15-.16.24-.08.18-.08.39 0 .57.08.18.22.33.41.41.09.04.19.06.29.06h10.31c.41 0 .75-.34.75-.75s-.34-.75-.76-.75z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M17.15 13.82l-3.04 3.04M6.85 13.82h10.3M6.85 10.18l3.04-3.04M17.15 10.18H6.85"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M14.11 17.61c-.19 0-.38-.07-.53-.22a.754.754 0 010-1.06l3.04-3.04c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04a.75.75 0 01-.53.22z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M17.15 14.57H6.84c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.31a.749.749 0 110 1.5zM6.85 10.93c-.19 0-.38-.07-.53-.22a.755.755 0 010-1.06l3.039-3.04c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04c-.15.15-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M17.15 10.93H6.84c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.31a.749.749 0 110 1.5z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(G, {
    opacity: ".4"
  }, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: strokeWidth,
    d: "M17.15 13.82l-3.04 3.04M6.85 13.82h10.3M6.85 10.18l3.04-3.04M17.15 10.18H6.85"
  })), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }));
};

var chooseVariant = function chooseVariant(variant, color) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React.createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React.createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React.createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React.createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React.createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React.createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React.createElement(Linear, {
        color: color
      });
  }
};

var ArrangeHorizontalCircle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      rest = _objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React.createElement(Svg, _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
ArrangeHorizontalCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrangeHorizontalCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrangeHorizontalCircle.displayName = 'ArrangeHorizontalCircle';

export { ArrangeHorizontalCircle as default };
