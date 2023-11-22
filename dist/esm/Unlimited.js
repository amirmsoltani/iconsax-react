import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17.45 17.302c-1.68 0-3.23-.79-4.24-2.18-.24-.33-.17-.8.16-1.05s.8-.17 1.05.16c.73.99 1.83 1.56 3.03 1.56 2.09 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-1.42 0-2.76.76-3.49 1.97l-2.65 4.41c-1 1.67-2.83 2.7-4.77 2.7a5.31 5.31 0 0 1-5.3-5.3c0-2.92 2.38-5.3 5.3-5.3 1.68 0 3.23.79 4.24 2.18.24.33.17.8-.16 1.05a.75.75 0 0 1-1.05-.16c-.72-.97-1.82-1.54-3.02-1.54-2.09 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.42 0 2.76-.76 3.49-1.97l2.65-4.41c1-1.67 2.83-2.7 4.77-2.7 2.92 0 5.3 2.38 5.3 5.3s-2.39 5.28-5.31 5.28Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M20 15.77c-.73.49-1.6.78-2.54.78-1.5 0-2.81-.74-3.64-1.87M10.18 9.32a4.474 4.474 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.821 4.821 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12",
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
    d: "M17.45 17.302c-1.68 0-3.23-.79-4.24-2.18-.24-.33-.17-.8.16-1.05s.8-.17 1.05.16c.73.99 1.83 1.56 3.03 1.56 2.09 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-1.42 0-2.76.76-3.49 1.97l-2.65 4.41c-1 1.67-2.83 2.7-4.77 2.7a5.31 5.31 0 0 1-5.3-5.3c0-2.92 2.38-5.3 5.3-5.3 1.68 0 3.23.79 4.24 2.18.24.33.17.8-.16 1.05a.75.75 0 0 1-1.05-.16c-.73-.99-1.83-1.56-3.03-1.56-2.09 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.42 0 2.76-.76 3.49-1.97l2.65-4.41c1-1.67 2.83-2.7 4.77-2.7 2.92 0 5.3 2.38 5.3 5.3s-2.38 5.3-5.3 5.3Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10.18 9.32a4.474 4.474 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.821 4.821 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12s-2.04 4.55-4.55 4.55c-1.5 0-2.81-.74-3.64-1.87",
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
    d: "M17.45 17.302c-1.68 0-3.23-.79-4.24-2.18-.24-.33-.17-.8.16-1.05s.8-.17 1.05.16c.73.99 1.83 1.56 3.03 1.56 2.09 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-1.42 0-2.76.76-3.49 1.97l-2.65 4.41c-1 1.67-2.83 2.7-4.77 2.7a5.31 5.31 0 0 1-5.3-5.3c0-2.92 2.38-5.3 5.3-5.3 1.68 0 3.23.79 4.24 2.18.24.33.17.8-.16 1.05a.76.76 0 0 1-1.05-.16c-.73-.99-1.83-1.56-3.03-1.56-2.09 0-3.8 1.7-3.8 3.8 0 2.1 1.7 3.8 3.8 3.8 1.42 0 2.76-.76 3.49-1.97l2.65-4.41c1-1.67 2.83-2.7 4.77-2.7 2.92 0 5.3 2.38 5.3 5.3s-2.38 5.3-5.3 5.3Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10.18 9.32a4.474 4.474 0 0 0-3.64-1.87c-2.51 0-4.55 2.04-4.55 4.55s2.04 4.55 4.55 4.55c1.69 0 3.26-.89 4.13-2.34L12 12l1.32-2.21a4.821 4.821 0 0 1 4.13-2.34C19.96 7.45 22 9.49 22 12s-2.04 4.55-4.55 4.55c-1.5 0-2.81-.74-3.64-1.87",
    stroke: color,
    strokeWidth: strokeWidth,
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

var Unlimited = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Unlimited.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Unlimited.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Unlimited.displayName = 'Unlimited';

export { Unlimited as default };
