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
    d: "M10.981 6.19l-3.71-3.71a.782.782 0 00-.26-.17c-.01 0-.02 0-.03-.01a.696.696 0 00-.25-.05c-.2 0-.39.08-.53.22l-3.73 3.72c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l2.45-2.45V21c0 .41.34.75.75.75s.75-.34.75-.75V4.81l2.44 2.44c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06zM21.528 16.75a.754.754 0 00-1.06 0l-2.45 2.45V3c0-.41-.34-.75-.75-.75s-.75.34-.75.75v16.19l-2.44-2.44a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l3.71 3.71c.07.07.16.13.26.17.01 0 .02 0 .03.01.08.03.17.05.26.05.2 0 .39-.08.53-.22l3.72-3.72c.29-.3.29-.77 0-1.06z"
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
    strokeWidth: strokeWidth,
    d: "M13.55 17.28L17.27 21l3.72-3.72M17.27 10.01V21M17.27 3v2.99M10.45 6.72L6.73 3 3.01 6.72M6.73 3v11.09M6.73 21v-2.97"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M10.98 6.19L7.27 2.48a.782.782 0 00-.26-.17c-.01 0-.02 0-.03-.01a.751.751 0 00-.26-.05c-.2 0-.39.08-.53.22L2.47 6.19c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0L5.98 4.8V21c0 .41.34.75.75.75s.75-.34.75-.75V4.81l2.44 2.44c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M21.53 16.75a.754.754 0 00-1.06 0l-2.45 2.45V3c0-.41-.34-.75-.75-.75s-.75.34-.75.75v16.19l-2.44-2.44a.754.754 0 00-1.06 0c-.29.29-.29.77 0 1.06l3.71 3.71c.07.07.16.13.26.17.01 0 .02 0 .03.01.08.03.17.05.26.05.2 0 .39-.08.53-.22l3.72-3.72c.29-.3.29-.77 0-1.06z",
    opacity: ".4"
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
    strokeWidth: strokeWidth,
    d: "M10.45 6.72L6.73 3 3.01 6.72M6.73 21V3M13.55 17.28L17.27 21l3.72-3.72M17.27 3v18"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M10.45 7.47c-.19 0-.38-.07-.53-.22L6.73 4.06 3.54 7.25c-.29.29-.77.29-1.06 0a.754.754 0 010-1.06L6.2 2.47a.75.75 0 011.06 0l3.72 3.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M6.73 21.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v18c0 .41-.34.75-.75.75zM17.28 21.75a.75.75 0 01-.53-.22l-3.72-3.72a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l3.19 3.19 3.19-3.19c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.72 3.72c-.14.14-.34.22-.53.22z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M17.27 21.75c-.41 0-.75-.34-.75-.75V3c0-.41.34-.75.75-.75s.75.34.75.75v18c0 .41-.33.75-.75.75z"
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
    strokeWidth: strokeWidth,
    d: "M10.45 6.72L6.73 3 3.01 6.72M6.73 21V3"
  })), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M13.55 17.28L17.27 21l3.72-3.72M17.27 3v18"
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

var ArrangeVertical = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ArrangeVertical.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ArrangeVertical.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ArrangeVertical.displayName = 'ArrangeVertical';

export { ArrangeVertical as default };
