import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m17.02 21.292-3.48-1.74c-.97-.48-2.1-.48-3.07 0l-3.48 1.74c-2.99 1.49-6.14-1.72-4.58-4.67l.82-1.54c.11-.21.29-.38.51-.48l12.64-5.7c.52-.23 1.13-.02 1.39.48l3.81 7.24c1.56 2.95-1.58 6.16-4.56 4.67ZM15.6 7.69l-8.28 3.73c-.93.42-1.87-.58-1.39-1.48l3.04-5.77c1.29-2.45 4.79-2.45 6.08 0l1.07 2.04c.28.55.04 1.23-.52 1.48Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M3.071 16.3c-1.45 2.75 1.48 5.74 4.26 4.35l3.24-1.62c.9-.45 1.96-.45 2.86 0l3.24 1.62c2.78 1.39 5.7-1.6 4.26-4.35l-6.1-11.59c-1.2-2.28-4.46-2.28-5.66 0l-3.67 6.97",
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
    d: "m17.02 21.292-3.48-1.74c-.97-.48-2.1-.48-3.07 0l-3.48 1.74c-2.99 1.49-6.14-1.72-4.58-4.67l.82-1.54c.11-.21.29-.38.51-.48l12.64-5.7c.52-.23 1.13-.02 1.39.48l3.81 7.24c1.56 2.95-1.58 6.16-4.56 4.67Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m15.6 7.69-8.28 3.73c-.93.42-1.87-.58-1.39-1.48l3.04-5.77c1.29-2.45 4.79-2.45 6.08 0l1.07 2.04c.28.55.04 1.23-.52 1.48Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9.17 4.71 3.07 16.3c-1.45 2.75 1.48 5.74 4.26 4.35l3.24-1.62c.9-.45 1.96-.45 2.86 0l3.24 1.62c2.78 1.39 5.7-1.6 4.26-4.35l-6.1-11.59c-1.2-2.28-4.46-2.28-5.66 0Z",
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
    d: "M18.122 21.75c-.6 0-1.21-.14-1.79-.43l-3.24-1.62c-.68-.34-1.5-.34-2.19 0l-3.24 1.62c-1.56.78-3.36.48-4.58-.77-1.22-1.25-1.49-3.05-.67-4.6l6.1-11.59a3.93 3.93 0 0 1 3.49-2.11c1.47 0 2.81.81 3.49 2.11l6.1 11.59c.81 1.55.55 3.35-.67 4.6-.77.79-1.77 1.2-2.8 1.2Zm-6.12-3.81c.61 0 1.21.14 1.76.41l3.24 1.62c1.17.59 2.24.14 2.84-.48.6-.62 1.03-1.69.42-2.85l-6.1-11.59c-.43-.81-1.24-1.3-2.16-1.3-.92 0-1.73.49-2.16 1.31l-6.1 11.59c-.61 1.16-.19 2.24.42 2.85.61.61 1.67 1.06 2.84.48l3.24-1.62c.55-.28 1.15-.42 1.76-.42Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M9.17 4.71L3.07 16.3c-1.45 2.75 1.48 5.74 4.26 4.35l3.24-1.62c.9-.45 1.96-.45 2.86 0l3.24 1.62c2.78 1.39 5.7-1.6 4.26-4.35l-6.1-11.59c-1.2-2.28-4.46-2.28-5.66 0z"
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

var DirectUp = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
DirectUp.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DirectUp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DirectUp.displayName = 'DirectUp';

export { DirectUp as default };
