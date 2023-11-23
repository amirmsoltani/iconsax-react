import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.82 14.32c-.09.48-.5.82-.98.82H9.3c-.66 0-1.14-.64-.96-1.27l.84-2.95-1.71.34c-.05.01-.1.01-.15.01a.748.748 0 01-.14-1.48l2.47-.49 1.31-4.57c.06-.21.26-.36.48-.36h1.36a1 1 0 01.97 1.26l-.81 3.01 1.93-.39a.75.75 0 11.29 1.47l-2.66.53-.55 2.05H15c.62 0 1.09.56.98 1.18l-.16.84z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M11.56 6.36h2.53l-2.13 7.94h4.22l-.51 2.84h-7.7l3.08-10.78h.51ZM15.02 10.98l-7.7 1.54",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.78 6.36a1 1 0 0 1 .97 1.26l-1.79 6.68h3.03c.62 0 1.1.56.98 1.18l-.15.84c-.09.48-.5.82-.98.82H9.3c-.66 0-1.14-.64-.96-1.27l2.61-9.14c.06-.21.26-.36.48-.36h1.35v-.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.32 13.269a.748.748 0 0 1-.14-1.48l7.7-1.54a.75.75 0 1 1 .29 1.47l-7.7 1.54c-.05.01-.1.01-.15.01Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M11.6 6.4h2.5L12 14.3h4.2l-.5 2.8H8l3-10.7h.6ZM15 11l-7.7 1.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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
    d: "M15.67 17.89h-7.7c-.24 0-.46-.11-.6-.3a.742.742 0 0 1-.12-.66l3.08-10.78a.75.75 0 0 1 .72-.54h3.04c.23 0 .45.11.6.29.14.19.19.43.13.65l-1.87 7h3.25c.22 0 .43.1.58.27.14.17.2.4.16.61l-.51 2.84c-.09.36-.4.62-.76.62Zm-6.71-1.5h6.08l.24-1.34h-3.32c-.23 0-.45-.11-.6-.29a.763.763 0 0 1-.13-.65l1.87-7h-1.5l-2.64 9.28Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.32 13.269a.748.748 0 0 1-.14-1.48l7.7-1.54a.75.75 0 1 1 .29 1.47l-7.7 1.54c-.05.01-.1.01-.15.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
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
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M11.56 6.36h2.53l-2.13 7.94h4.22l-.51 2.84h-7.7l3.08-10.78h.51ZM15.02 10.98l-7.7 1.54"
  })), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var Litecoin = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Litecoin.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Litecoin.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Litecoin.displayName = 'Litecoin';

export { Litecoin as default };