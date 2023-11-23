import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 6.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75Zm0 11c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M4.02 5.97A9.966 9.966 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4",
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
    d: "M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M4.02 5.97A9.966 9.966 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4",
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
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-2.36.75-4.6 2.17-6.48.25-.33.72-.39 1.05-.14.33.25.4.72.15 1.05A9.16 9.16 0 0 0 2.75 12c0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 19.75c-4.27 0-7.75-3.48-7.75-7.75 0-.41.34-.75.75-.75s.75.34.75.75c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25-2.8-6.25-6.25-6.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75s-3.48 7.75-7.75 7.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c1.79 0 3.25-1.46 3.25-3.25S13.79 8.75 12 8.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M4.02 5.97A9.966 9.966 0 0 0 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".34",
    d: "M5 12c0 3.87 3.13 7 7 7s7-3.13 7-7-3.13-7-7-7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".34",
    d: "M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4",
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

var ChartCircle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ChartCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChartCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ChartCircle.displayName = 'ChartCircle';

export { ChartCircle as default };
