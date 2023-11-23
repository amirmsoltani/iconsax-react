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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4.06 8.56c0-1.86 1.51-3.38 3.38-3.38 1.87 0 3.38 1.51 3.38 3.38 0 1.87-1.51 3.38-3.38 3.38-1.87 0-3.38-1.51-3.38-3.38zm7.65 4.78l-3 3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l3-3c.29-.29.77-.29 1.06 0 .29.29.3.77 0 1.06zm.92-7.03c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M11.31 13.94a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.06 14.809-3 3",
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
    d: "M11.31 13.94a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76ZM16.51 8.309c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1-.01.55-.46 1-1.01 1ZM12.06 18.56c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.14.15-.34.22-.53.22Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M11.3 14a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.1 14.8-3 3M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 7.313v0",
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
    d: "M11.31 14.69c-2.27 0-4.12-1.85-4.12-4.12s1.85-4.12 4.12-4.12 4.12 1.85 4.12 4.12a4.12 4.12 0 0 1-4.12 4.12Zm0-6.75c-1.45 0-2.62 1.18-2.62 2.62 0 1.44 1.18 2.62 2.62 2.62 1.44 0 2.62-1.18 2.62-2.62 0-1.44-1.17-2.62-2.62-2.62ZM16.51 8.309c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1ZM12.06 18.56c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3-3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3 3c-.14.15-.34.22-.53.22Z",
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
    d: "M11.31 13.94a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m15.06 14.809-3 3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M17.5 9.313v0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var TheGraph = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
TheGraph.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TheGraph.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
TheGraph.displayName = 'TheGraph';

export { TheGraph as default };
