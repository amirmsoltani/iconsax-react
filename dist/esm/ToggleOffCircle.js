import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M13.86 3.86h-3.72C5.65 3.86 2 7.51 2 12s3.65 8.14 8.14 8.14h3.72c4.49 0 8.14-3.65 8.14-8.14s-3.65-8.14-8.14-8.14Zm-3.72 12.56c-2.44 0-4.42-1.98-4.42-4.42s1.98-4.42 4.42-4.42 4.42 1.98 4.42 4.42-1.98 4.42-4.42 4.42Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10 20c-4.42 0-8-3.58-8-8s3.58-8 8-8h4c4.42 0 8 3.58 8 8 0 4.08-3.05 7.44-6.99 7.94",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4c0-.48.09-.95.24-1.38",
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
    d: "M13.86 3.86h-3.72C5.65 3.86 2 7.51 2 12s3.65 8.14 8.14 8.14h3.72c4.49 0 8.14-3.65 8.14-8.14s-3.65-8.14-8.14-8.14Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.14 16.418a4.42 4.42 0 1 0 0-8.84 4.42 4.42 0 0 0 0 8.84Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10 4h4c4.42 0 8 3.58 8 8s-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8s3.58-8 8-8Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
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
    d: "M14 20.75h-4c-4.83 0-8.75-3.93-8.75-8.75S5.17 3.25 10 3.25h4c4.83 0 8.75 3.93 8.75 8.75s-3.92 8.75-8.75 8.75Zm-4-16C6 4.75 2.75 8 2.75 12S6 19.25 10 19.25h4c4 0 7.25-3.25 7.25-7.25S18 4.75 14 4.75h-4Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 16.75c-2.62 0-4.75-2.13-4.75-4.75S7.38 7.25 10 7.25s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25S11.79 8.75 10 8.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10 4h4c4.42 0 8 3.58 8 8s-3.58 8-8 8h-4c-4.42 0-8-3.58-8-8s3.58-8 8-8Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M10 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
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

var ToggleOffCircle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ToggleOffCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ToggleOffCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ToggleOffCircle.displayName = 'ToggleOffCircle';

export { ToggleOffCircle as default };
