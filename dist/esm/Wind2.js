import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM7 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.75.75 0 0 1-.25-1.03c.21-.36.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.89.53-1.89.8-2.89.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9.5 11.6c1.54.92 3.46.92 5 0s3.46-.92 5 0l2.5 1.5M2 13.1l2.5-1.5c.46-.28.96-.47 1.47-.58M2 3.898l2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0l2.5-1.5M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color,
    opacity: ".4"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.998 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.749.749 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.88.53-1.88.8-2.88.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5a.751.751 0 1 1-.77-1.29l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m2 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5M2 3.9l2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0L22 3.9M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5",
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
    d: "M22 13.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5c-.36.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37ZM6.998 6.848c-1 0-2-.27-2.89-.8l-2.5-1.5a.749.749 0 0 1-.26-1.03c.21-.35.67-.47 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.751.751 0 1 1 .77 1.29l-2.5 1.5a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0-.88.53-1.88.8-2.88.8ZM22 20.85a.67.67 0 0 1-.38-.11l-2.5-1.5c-1.3-.78-2.92-.78-4.23 0a5.587 5.587 0 0 1-5.77 0c-1.3-.78-2.92-.78-4.23 0l-2.5 1.5c-.36.21-.82.1-1.03-.26-.21-.36-.1-.82.26-1.03l2.5-1.5a5.587 5.587 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.587 5.587 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m2 13.1 2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m2 3.898 2.5 1.5c1.54.92 3.46.92 5 0s3.46-.92 5 0 3.46.92 5 0l2.5-1.5M2 20.1l2.5-1.5c1.54-.92 3.46-.92 5 0s3.46.92 5 0 3.46-.92 5 0l2.5 1.5",
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

var Wind2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Wind2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Wind2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Wind2.displayName = 'Wind2';

export { Wind2 as default };
