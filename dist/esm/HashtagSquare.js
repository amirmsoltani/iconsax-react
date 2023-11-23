import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M8.05 10.14v1.16h3.26V8.05h-1.16c-1.16 0-2.1.94-2.1 2.09ZM8.05 13.86c0 1.15.94 2.09 2.09 2.09h1.16V12.7H8.05v1.16ZM12.7 15.95h1.16c1.15 0 2.09-.94 2.09-2.09V12.7H12.7v3.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm1.16 11.86a3.5 3.5 0 0 1-3.49 3.49h-3.72c-1.92 0-3.49-1.56-3.49-3.49v-3.72a3.5 3.5 0 0 1 3.49-3.49h3.72c1.92 0 3.49 1.56 3.49 3.49v3.72Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.86 8.05H12.7v3.26h3.26v-1.16c-.01-1.16-.95-2.1-2.1-2.1Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M14 7h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3h4c1.65 0 3-1.35 3-3v-4M12 7v10M7 12h10",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.86 6.648h-3.72c-1.92 0-3.49 1.56-3.49 3.49v3.72a3.5 3.5 0 0 0 3.49 3.49h3.72c1.92 0 3.49-1.56 3.49-3.49v-3.72a3.5 3.5 0 0 0-3.49-3.49Zm2.09 3.49v1.16H12.7v-3.25h1.16c1.15 0 2.09.94 2.09 2.09Zm-5.81-2.09h1.16v3.26H8.05v-1.16c0-1.16.94-2.1 2.09-2.1Zm-2.09 5.81v-1.16h3.26v3.26h-1.16c-1.16-.01-2.1-.95-2.1-2.1Zm5.81 2.09H12.7v-3.25h3.26v1.16a2.11 2.11 0 0 1-2.1 2.09Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 17h4c1.65 0 3-1.35 3-3v-4c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3ZM12 7v10M7 12h10",
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
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14 17.75h-4c-2.07 0-3.75-1.68-3.75-3.75v-4c0-2.07 1.68-3.75 3.75-3.75h4c2.07 0 3.75 1.68 3.75 3.75v4c0 2.07-1.68 3.75-3.75 3.75Zm-4-10c-1.24 0-2.25 1.01-2.25 2.25v4c0 1.24 1.01 2.25 2.25 2.25h4c1.24 0 2.25-1.01 2.25-2.25v-4c0-1.24-1.01-2.25-2.25-2.25h-4Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 17.75c-.41 0-.75-.34-.75-.75V7c0-.41.34-.75.75-.75s.75.34.75.75v10c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M10 17h4c1.65 0 3-1.35 3-3v-4c0-1.65-1.35-3-3-3h-4c-1.65 0-3 1.35-3 3v4c0 1.65 1.35 3 3 3ZM12 7v10M7 12h10"
  })));
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

var HashtagSquare = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
HashtagSquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
HashtagSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
HashtagSquare.displayName = 'HashtagSquare';

export { HashtagSquare as default };
