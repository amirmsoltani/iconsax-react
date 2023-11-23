import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17.18 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75ZM6.82 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75ZM13.43 11.25h-2.86v1.5h2.86v-1.5ZM22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3ZM3.82 11.3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3s-3-1.35-3-3M9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5",
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
    d: "M17.18 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75ZM6.82 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.43 11.25h-2.86v1.5h2.86v-1.5ZM22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3ZM6.82 18c-2.4 0-3-1.35-3-3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3ZM9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5",
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
    d: "M17.18 18.75c-1.71 0-3.75-.65-3.75-3.75V9c0-3.1 2.04-3.75 3.75-3.75s3.75.65 3.75 3.75v6c0 3.1-2.04 3.75-3.75 3.75Zm0-12c-1.62 0-2.25.63-2.25 2.25v6c0 1.62.63 2.25 2.25 2.25s2.25-.63 2.25-2.25V9c0-1.62-.63-2.25-2.25-2.25ZM6.82 18.75c-1.71 0-3.75-.65-3.75-3.75V9c0-3.1 2.04-3.75 3.75-3.75s3.75.65 3.75 3.75v6c0 3.1-2.04 3.75-3.75 3.75Zm0-12c-1.62 0-2.25.63-2.25 2.25v6c0 1.62.63 2.25 2.25 2.25s2.25-.63 2.25-2.25V9c0-1.62-.63-2.25-2.25-2.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.18 12.75H9.82c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.36a.749.749 0 1 1 0 1.5ZM22.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM1.5 15.25c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17.18 18c2.4 0 3-1.35 3-3V9c0-1.65-.6-3-3-3s-3 1.35-3 3v6c0 1.65.6 3 3 3ZM6.82 18c-2.4 0-3-1.35-3-3V9c0-1.65.6-3 3-3s3 1.35 3 3v6c0 1.65-.6 3-3 3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M9.82 12h4.36M22.5 14.5v-5M1.5 14.5v-5",
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

var Weight = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Weight.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Weight.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Weight.displayName = 'Weight';

export { Weight as default };
