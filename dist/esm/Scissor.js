import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.25 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2L14 11.05 8.45 6.89a.76.76 0 0 0-1.05.15c-.25.33-.18.8.15 1.05l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2L14 12.92l7.55 5.65c.13.1.29.15.45.15a.75.75 0 0 0 .45-1.35l-7.2-5.39Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.5 3C7.43 3 9 4.57 9 6.5S7.43 10 5.5 10 2 8.43 2 6.5M5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM22 6 8.65 15.98M22 17.97 8.65 7.98",
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
    d: "M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m15.25 11.98 7.2-5.38a.75.75 0 0 0-.9-1.2L14 11.05 8.45 6.9a.75.75 0 0 0-.9 1.2l5.2 3.89-5.9 4.42a.75.75 0 0 0 .9 1.2l6.26-4.68 7.55 5.65c.13.1.29.15.45.15a.75.75 0 0 0 .45-1.35l-7.21-5.4Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M5.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM5.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM22 6L8.65 15.98M22 17.97L8.65 7.98"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.5 10.75A4.26 4.26 0 0 1 1.25 6.5 4.26 4.26 0 0 1 5.5 2.25 4.26 4.26 0 0 1 9.75 6.5a4.26 4.26 0 0 1-4.25 4.25Zm0-7c-1.52 0-2.75 1.23-2.75 2.75S3.98 9.25 5.5 9.25 8.25 8.02 8.25 6.5 7.02 3.75 5.5 3.75ZM5.5 21.75a4.26 4.26 0 0 1-4.25-4.25 4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Zm0-7c-1.52 0-2.75 1.23-2.75 2.75s1.23 2.75 2.75 2.75 2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.65 16.73a.75.75 0 0 1-.45-1.35L21.55 5.4a.75.75 0 0 1 .9 1.2L9.1 16.58c-.13.1-.29.15-.45.15Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 18.719a.76.76 0 0 1-.45-.15L8.2 8.589a.75.75 0 0 1 .9-1.2l13.35 9.98a.75.75 0 0 1-.45 1.35Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM5.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
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
    d: "M22 6 8.65 15.98M22 17.97 8.65 7.98"
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

var Scissor = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Scissor.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Scissor.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Scissor.displayName = 'Scissor';

export { Scissor as default };
