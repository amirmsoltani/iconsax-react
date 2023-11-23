import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.75 16.11V7.89A2.983 2.983 0 0 0 8 5c0-1.66-1.34-3-3-3S2 3.34 2 5c0 1.4.96 2.56 2.25 2.89v8.21A2.996 2.996 0 0 0 5 22c1.66 0 3-1.34 3-3 0-1.4-.96-2.56-2.25-2.89ZM19.75 16.11V6.5c0-1.52-1.23-2.75-2.75-2.75h-2.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-3 2.5a.761.761 0 0 0 0 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25v9.61A2.983 2.983 0 0 0 16 19c0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.4-.96-2.56-2.25-2.89Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 16V6.5c0-1.1-.9-2-2-2h-4.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15 2-3 2.5L15 7M5 9v7M5.25 2C3.46 2 2 3.46 2 5.25S3.46 8.5 5.25 8.5 8.5 7.04 8.5 5.25M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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
    d: "M5.75 16.112v-8.21A2.992 2.992 0 0 0 5 2.012c-1.66 0-3 1.34-3 3 0 1.4.96 2.56 2.25 2.89v8.21a2.992 2.992 0 0 0 .75 5.89c1.66 0 3-1.34 3-3 0-1.4-.96-2.56-2.25-2.89Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.75 16.11V6.5c0-1.52-1.23-2.75-2.75-2.75h-2.93l1.41-1.17c.32-.27.36-.74.1-1.06a.758.758 0 0 0-1.06-.1l-3 2.5a.761.761 0 0 0 0 1.16l3 2.5c.14.12.31.17.48.17a.75.75 0 0 0 .48-1.33l-1.41-1.17H17c.69 0 1.25.56 1.25 1.25v9.61A2.992 2.992 0 0 0 19 22c1.66 0 3-1.34 3-3 0-1.4-.96-2.56-2.25-2.89Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 16V6.5c0-1.1-.9-2-2-2h-4.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15 2-3 2.5L15 7M5 9v7M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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
    d: "M19 16.75c-.41 0-.75-.34-.75-.75V6.5c0-.69-.56-1.25-1.25-1.25h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17c1.52 0 2.75 1.23 2.75 2.75V16c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 7.75c-.17 0-.34-.06-.48-.17l-3-2.5a.761.761 0 0 1 0-1.16l3-2.5a.75.75 0 0 1 1.06.1c.27.32.22.79-.1 1.06L13.17 4.5l2.31 1.92c.32.27.36.74.1 1.06-.15.18-.37.27-.58.27ZM5 16.75c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.25 9.25c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Zm0-6.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5ZM5 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S3.76 21.25 5 21.25 7.25 20.24 7.25 19 6.24 16.75 5 16.75ZM19 22.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25Z",
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
    d: "M19 16V6.5c0-1.1-.9-2-2-2h-4.5"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15 2-3 2.5L15 7"
  })), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M5 9v7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
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

var ProgrammingArrow = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ProgrammingArrow.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ProgrammingArrow.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ProgrammingArrow.displayName = 'ProgrammingArrow';

export { ProgrammingArrow as default };
