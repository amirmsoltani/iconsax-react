import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    fillRule: "evenodd",
    d: "M19.1 19.16c.59-.9.81-1.36 1.26-2.37-3.32-1.26-3.85-5.99-.57-7.8-1-1.26-2.41-1.99-3.74-1.99-.96 0-1.62.25-2.21.48-.5.19-.95.36-1.51.36-.6 0-1.13-.19-1.69-.39C10.03 7.23 9.39 7 8.59 7 7.1 7 5.51 7.91 4.5 9.47c-1.42 2.2-1.17 6.32 1.12 9.84.82 1.26 1.92 2.67 3.35 2.69.6.01.99-.17 1.42-.36.49-.22 1.02-.46 1.95-.46.93-.01 1.45.24 1.94.46.42.19.8.37 1.39.36 1.45-.02 2.61-1.58 3.43-2.84zM15.84 2c.16 1.1-.29 2.19-.88 2.95-.63.82-1.73 1.46-2.79 1.42-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49z",
    clipRule: "evenodd"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.16 17.79c.26.58.57 1.16.93 1.72.76 1.17 1.78 2.48 3.11 2.49.55.01.92-.16 1.32-.34.46-.2.95-.43 1.81-.43.86-.01 1.35.22 1.8.43.39.18.75.34 1.29.34 1.33-.01 2.41-1.47 3.17-2.63.55-.84.75-1.26 1.17-2.2-3.08-1.17-3.58-5.56-.53-7.24-.93-1.17-2.24-1.84-3.47-1.84-.89 0-1.5.23-2.05.44-.46.18-.89.34-1.4.34-.56 0-1.05-.18-1.57-.36-.57-.2-1.16-.42-1.9-.42-1.39 0-2.86.85-3.8 2.29-.45.7-.72 1.62-.8 2.65M15.41 2c.16 1.1-.29 2.19-.88 2.95-.63.82-1.73 1.46-2.79 1.42-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49Z",
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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.1 19.16c.59-.9.81-1.36 1.26-2.37-3.32-1.26-3.85-5.99-.57-7.8-1-1.26-2.41-1.99-3.74-1.99-.96 0-1.62.25-2.21.48-.5.19-.95.36-1.51.36-.6 0-1.13-.19-1.69-.39C10.04 7.23 9.4 7 8.6 7c-1.49 0-3.08.91-4.09 2.47-1.42 2.2-1.17 6.32 1.12 9.84.82 1.26 1.92 2.67 3.35 2.69.6.01.99-.17 1.42-.36.49-.22 1.02-.46 1.95-.46.93-.01 1.45.24 1.94.46.42.19.8.37 1.39.36 1.44-.02 2.6-1.58 3.42-2.84Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.84 2c.16 1.1-.29 2.19-.88 2.95-.63.82-1.73 1.46-2.79 1.42-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    clipRule: "evenodd",
    d: "M15.4 2c.2 1.1-.3 2.2-.9 3-.6.8-1.7 1.5-2.8 1.4-.2-1.1.3-2.1.9-2.9.7-.8 1.8-1.4 2.8-1.5Zm3.2 17.4c.5-.8.8-1.3 1.2-2.2-3.1-1.2-3.6-5.6-.5-7.2-.9-1.2-2.2-1.8-3.5-1.8-.9 0-1.5.2-2.1.4-.5.2-.9.3-1.4.3-.6 0-1-.2-1.6-.4-.6-.2-1.2-.4-1.9-.4-1.4 0-2.9.8-3.8 2.3-1.3 2-1.1 5.9 1 9.1.9 1.2 1.9 2.5 3.2 2.5.6 0 .9-.2 1.3-.3.5-.2 1-.4 1.8-.4.9 0 1.3.2 1.8.4.4.2.7.3 1.3.3 1.4 0 2.4-1.5 3.2-2.6Z",
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
    d: "M9.23 22.751h-.04c-1.68-.01-2.88-1.52-3.73-2.83-2.17-3.33-2.61-7.52-1.04-9.95 1.05-1.63 2.75-2.64 4.43-2.64.87 0 1.55.24 2.15.46.48.17.89.32 1.32.32.38 0 .71-.13 1.13-.29.58-.22 1.29-.49 2.32-.49 1.48 0 3 .79 4.06 2.13a.748.748 0 0 1-.22 1.12c-1.13.62-1.75 1.75-1.66 3.03.09 1.3.89 2.4 2.09 2.85.19.07.35.22.43.41.08.19.08.41-.01.59-.44.98-.66 1.43-1.23 2.31-.95 1.46-2.15 2.96-3.79 2.98-.71 0-1.19-.21-1.61-.41-.42-.19-.83-.34-1.48-.36-.7 0-1.07.17-1.5.36-.44.2-.92.41-1.62.41Zm-.38-13.92c-1.18 0-2.39.75-3.17 1.95-1.06 1.64-1.05 5.11 1.04 8.32.65 1 1.52 2.14 2.49 2.15.36-.01.63-.11 1-.27.49-.22 1.1-.49 2.11-.5.99-.02 1.63.27 2.12.5.36.17.6.28.97.27.94-.01 1.85-1.23 2.55-2.29.37-.57.58-.93.81-1.44a4.745 4.745 0 0 1-2.33-3.8c-.11-1.53.51-2.96 1.65-3.91-.7-.62-1.53-.97-2.33-.97-.75 0-1.25.19-1.78.39-.5.19-1.02.39-1.67.39-.69 0-1.26-.21-1.82-.4-.53-.21-1.04-.39-1.64-.39Zm2.97-1.7h-.1a.747.747 0 0 1-.71-.62c-.21-1.13.19-2.43 1.06-3.49.8-.97 2.12-1.69 3.29-1.77.41-.02.74.25.79.64.17 1.17-.2 2.45-1.03 3.52-.81 1.05-2.1 1.72-3.3 1.72Zm2.83-4.18c-.54.22-1.07.59-1.42 1.02-.33.4-.64.96-.74 1.54.54-.18 1.08-.54 1.45-1.02.2-.25.58-.83.71-1.54Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    clipRule: "evenodd",
    d: "M18.59 19.358c.55-.84.75-1.26 1.17-2.2-3.08-1.17-3.58-5.56-.53-7.24-.93-1.17-2.24-1.84-3.47-1.84-.89 0-1.5.23-2.05.44-.46.18-.89.34-1.4.34-.56 0-1.05-.18-1.57-.36-.57-.2-1.16-.42-1.9-.42-1.39 0-2.86.85-3.8 2.29-1.31 2.04-1.09 5.87 1.04 9.14.76 1.17 1.78 2.48 3.11 2.49.55.01.92-.16 1.32-.34.46-.2.95-.43 1.81-.43.86-.01 1.35.22 1.8.43.39.18.75.34 1.29.34 1.34-.01 2.42-1.47 3.18-2.64Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    clipRule: "evenodd",
    d: "M16.01 2.07c.16 1.1-.29 2.19-.88 2.95-.63.82-1.73 1.46-2.79 1.42-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
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

var Apple = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Apple.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Apple.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Apple.displayName = 'Apple';

export { Apple as default };
