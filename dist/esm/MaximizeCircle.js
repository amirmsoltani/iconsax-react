import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.691 2.71a.782.782 0 0 0-.41-.41.868.868 0 0 0-.28-.05h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.19l-4.72 4.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l4.72-4.72V7c0 .41.34.75.75.75s.75-.34.75-.75V3c0-.1-.02-.19-.06-.29ZM8.47 14.471l-4.72 4.72v-2.19c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .1.02.19.06.29.08.18.22.33.41.41.08.03.18.05.28.05h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4.81l4.72-4.72c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0ZM2.2 14.75c-.35 0-.66-.25-.73-.6-.14-.7-.22-1.43-.22-2.15C1.25 6.07 6.07 1.25 12 1.25c.73 0 1.46.07 2.17.22.41.08.67.48.59.88-.08.41-.49.66-.88.59-.63-.13-1.25-.19-1.88-.19-5.1 0-9.25 4.15-9.25 9.25 0 .62.06 1.25.19 1.85.08.41-.18.8-.59.88-.05.02-.1.02-.15.02ZM12.001 22.748c-.73 0-1.46-.07-2.17-.22a.75.75 0 0 1-.59-.88c.08-.41.49-.66.88-.59.61.12 1.24.19 1.87.19 5.1 0 9.25-4.15 9.25-9.25 0-.62-.06-1.24-.18-1.85-.08-.41.18-.8.59-.88.41-.08.8.18.88.59.14.7.21 1.42.21 2.14.01 5.93-4.81 10.75-10.74 10.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17 3h4v4M15 9l6-6M7 21H3v-4M9 15l-6 6M7.64 3A9.995 9.995 0 0 0 2 12c0 .69.07 1.36.2 2M14.02 2.2C13.37 2.07 12.69 2 12 2M9.98 21.8c.65.13 1.33.2 2.02.2 5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-2",
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
    d: "M21.69 2.708a.783.783 0 0 0-.41-.41.717.717 0 0 0-.29-.06h-4c-.41 0-.75.34-.75.75s.34.75.75.75h2.19l-4.72 4.72c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l4.72-4.72v2.2c0 .41.34.75.75.75s.75-.34.75-.75v-4c.01-.1-.01-.19-.05-.29ZM8.47 14.466l-4.72 4.72v-2.19c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4c0 .1.02.19.06.29.08.18.22.33.41.41.09.04.19.06.29.06h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H4.82l4.72-4.72c.29-.29.29-.77 0-1.06a.767.767 0 0 0-1.07-.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M2.2 14.75c-.35 0-.66-.25-.73-.6-.14-.7-.22-1.43-.22-2.15C1.25 6.07 6.07 1.25 12 1.25c.73 0 1.46.07 2.17.22.41.08.67.48.59.88-.08.41-.49.66-.88.59-.61-.12-1.24-.19-1.87-.19-5.1 0-9.25 4.15-9.25 9.25 0 .62.06 1.25.19 1.85.08.41-.18.8-.59.88-.06.02-.11.02-.16.02ZM12.001 22.748c-.73 0-1.46-.07-2.17-.22a.75.75 0 0 1-.59-.88c.08-.41.49-.66.88-.59.61.12 1.24.19 1.87.19 5.1 0 9.25-4.15 9.25-9.25 0-.62-.06-1.24-.18-1.85-.08-.41.18-.8.59-.88.41-.08.8.18.88.59.14.7.21 1.42.21 2.14.01 5.93-4.81 10.75-10.74 10.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17 3h4v4M15 9l6-6M7 21H3v-4M9 15l-6 6M14.02 2.2C13.37 2.07 12.69 2 12 2 6.48 2 2 6.48 2 12c0 .69.07 1.36.2 2M9.98 21.8c.65.13 1.33.2 2.02.2 5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-2",
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
    d: "M21 7.75c-.41 0-.75-.34-.75-.75V3.75H17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.001 9.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22ZM7 21.75H3c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v3.25H7c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.001 21.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22ZM2.2 14.75c-.35 0-.66-.25-.73-.6-.14-.7-.22-1.43-.22-2.15C1.25 6.07 6.07 1.25 12 1.25c.73 0 1.46.07 2.17.22.41.08.67.48.59.88-.08.41-.49.66-.88.59-.61-.12-1.24-.19-1.87-.19-5.1 0-9.25 4.15-9.25 9.25 0 .62.06 1.25.19 1.85.08.41-.18.8-.59.88-.06.02-.11.02-.16.02ZM12.001 22.748c-.73 0-1.46-.07-2.17-.22a.75.75 0 0 1-.59-.88c.08-.41.49-.66.88-.59.61.12 1.24.19 1.87.19 5.1 0 9.25-4.15 9.25-9.25 0-.62-.06-1.24-.18-1.85a.75.75 0 1 1 1.47-.29c.14.7.21 1.42.21 2.14.01 5.93-4.81 10.75-10.74 10.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color;
      _ref6.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: color
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M16.25 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3.75H17a.75.75 0 0 1-.75-.75Z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.53 2.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0ZM3 16.25a.75.75 0 0 1 .75.75v3.25H7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 .75-.75Z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.53 14.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0Z"
  })), /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.25 12C1.25 6.066 6.066 1.25 12 1.25c.74 0 1.47.075 2.167.215a.75.75 0 1 1-.294 1.47A9.577 9.577 0 0 0 12 2.75c-5.106 0-9.25 4.144-9.25 9.25 0 .64.065 1.26.185 1.85a.75.75 0 0 1-1.47.3A10.8 10.8 0 0 1 1.25 12ZM21.654 9.265a.75.75 0 0 1 .882.588c.14.696.215 1.416.215 2.147 0 5.934-4.816 10.75-10.75 10.75-.74 0-1.47-.075-2.167-.214a.75.75 0 0 1 .294-1.471c.602.12 1.233.185 1.873.185 5.105 0 9.25-4.144 9.25-9.25 0-.628-.065-1.25-.186-1.853a.75.75 0 0 1 .588-.882Z",
    fill: color
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

var MaximizeCircle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
MaximizeCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MaximizeCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MaximizeCircle.displayName = 'MaximizeCircle';

export { MaximizeCircle as default };