import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M11.25 18.25H9c-1.1 0-2 .9-2 2v.25H6c-.41 0-.75.34-.75.75s.34.75.75.75h12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1v-.25c0-1.1-.9-2-2-2h-2.25v-2.29c-.25.03-.5.04-.75.04s-.5-.01-.75-.04v2.29Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.48 11.64c.66-.25 1.24-.66 1.7-1.12.93-1.03 1.54-2.26 1.54-3.7 0-1.44-1.13-2.57-2.57-2.57h-.56A3.995 3.995 0 0 0 15 2H9c-1.58 0-2.94.92-3.59 2.25h-.56c-1.44 0-2.57 1.13-2.57 2.57s.61 2.67 1.54 3.7c.46.46 1.04.87 1.7 1.12A6.98 6.98 0 0 0 12 16c2.94 0 5.44-1.8 6.48-4.36Zm-3.64-3.19-.62.76c-.1.11-.17.33-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a.92.92 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a.751.751 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24c.15-.04.33-.18.41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82c.08.13.26.27.41.31l.95.24c.58.15.75.66.36 1.12Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12.15 16.5v2.1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.15 22h10v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.15 22h12M8.51 15.07A6.99 6.99 0 0 1 5 9V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v3c0 3.82-3.05 6.92-6.85 7H12",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.47 11.652c-.75-.24-1.41-.68-1.93-1.2-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65c-.2.46-.3.97-.3 1.5v3c0 1 .21 1.94.58 2.8ZM18.53 11.652c.75-.24 1.41-.68 1.93-1.2.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65c.2.46.3.97.3 1.5v3c0 1-.21 1.94-.58 2.8Z",
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
    d: "M18 20.5h-1v-.25c0-1.1-.9-2-2-2h-2.25v-2.29c-.25.03-.5.04-.75.04s-.5-.01-.75-.04v2.29H9c-1.1 0-2 .9-2 2v.25H6c-.41 0-.75.34-.75.75s.34.75.75.75h12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75ZM5.52 11.64c-.66-.25-1.24-.66-1.7-1.12-.93-1.03-1.54-2.26-1.54-3.7 0-1.44 1.13-2.57 2.57-2.57h.56C5.15 4.78 5 5.37 5 6v3c0 .94.18 1.83.52 2.64ZM21.72 6.82c0 1.44-.61 2.67-1.54 3.7-.46.46-1.04.87-1.7 1.12.34-.81.52-1.7.52-2.64V6c0-.63-.15-1.22-.41-1.75h.56c1.44 0 2.57 1.13 2.57 2.57Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 2H9C6.79 2 5 3.79 5 6v3c0 3.87 3.13 7 7 7s7-3.13 7-7V6c0-2.21-1.79-4-4-4Zm-.16 6.45-.62.76c-.1.11-.17.33-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a.92.92 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a.751.751 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24c.15-.04.33-.18.41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82c.08.13.26.27.41.31l.95.24c.58.15.75.66.36 1.12Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m14.84 8.45-.62.76c-.1.11-.17.33-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a.92.92 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a.751.751 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24c.15-.04.33-.18.41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82c.08.13.26.27.41.31l.95.24c.58.15.75.66.36 1.12Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12.15 16.5v2.1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.15 22h10v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.15 22h12M12 16c-3.87 0-7-3.13-7-7V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v3c0 3.87-3.13 7-7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.47 11.65c-.75-.24-1.41-.68-1.93-1.2-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65c-.2.46-.3.97-.3 1.5v3c0 1 .21 1.94.58 2.8ZM18.53 11.65c.75-.24 1.41-.68 1.93-1.2.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65c.2.46.3.97.3 1.5v3c0 1-.21 1.94-.58 2.8Z",
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
    d: "M12.15 19.35c-.41 0-.75-.34-.75-.75v-2.1c0-.41.34-.75.75-.75s.75.34.75.75v2.1c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.9 22.75H6.4V21c0-1.52 1.23-2.75 2.75-2.75h6c1.52 0 2.75 1.23 2.75 2.75v1.75Zm-10-1.5h8.5V21c0-.69-.56-1.25-1.25-1.25h-6c-.69 0-1.25.56-1.25 1.25v.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.15 22.75h-12c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75ZM18.43 12.439c-.21 0-.42-.09-.57-.26a.74.74 0 0 1-.12-.79c.34-.78.51-1.61.51-2.48v-3c0-.35-.06-.69-.18-1.05a1.64 1.64 0 0 1-.03-.11c-.03-.15-.04-.3-.04-.44 0-.41.34-.75.75-.75h.6c1.79 0 3.25 1.5 3.25 3.35 0 1.53-.63 3.04-1.72 4.13-.02.02-.08.07-.09.08-.59.49-1.26 1.04-2.16 1.29-.07.02-.13.03-.2.03Zm1.25-7.35c.05.27.07.55.07.82v3c0 .41-.03.8-.09 1.2l.17-.14c.8-.8 1.27-1.92 1.27-3.06 0-.9-.61-1.66-1.42-1.82ZM5.58 12.402a.62.62 0 0 1-.23-.04c-.82-.26-1.59-.74-2.23-1.38-1.15-1.27-1.72-2.66-1.72-4.13 0-1.82 1.43-3.25 3.25-3.25h.65c.25 0 .49.13.63.34.14.21.16.48.06.71-.16.36-.24.77-.24 1.2v3c0 .86.17 1.7.52 2.5.12.27.06.58-.13.8-.15.16-.35.25-.56.25ZM4.3 5.132c-.81.16-1.4.86-1.4 1.72 0 1.09.44 2.14 1.31 3.1.04.05.09.09.14.13-.07-.41-.1-.82-.1-1.23v-3c0-.24.02-.48.05-.72Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 16.75c-4.27 0-7.75-3.48-7.75-7.75V6c0-2.62 2.13-4.75 4.75-4.75h6c2.62 0 4.75 2.13 4.75 4.75v3c0 4.27-3.48 7.75-7.75 7.75Zm-3-14C7.21 2.75 5.75 4.21 5.75 6v3c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25V6c0-1.79-1.46-3.25-3.25-3.25H9Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".34",
    d: "M12.15 16.5v2.1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.15 22h10v-1c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.15 22h12M12 16c-3.87 0-7-3.13-7-7V6c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4v3c0 3.87-3.13 7-7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".34",
    d: "M5.47 11.652c-.75-.24-1.41-.68-1.93-1.2-.9-1-1.5-2.2-1.5-3.6s1.1-2.5 2.5-2.5h.65c-.2.46-.3.97-.3 1.5v3c0 1 .21 1.94.58 2.8ZM18.53 11.652c.75-.24 1.41-.68 1.93-1.2.9-1 1.5-2.2 1.5-3.6s-1.1-2.5-2.5-2.5h-.65c.2.46.3.97.3 1.5v3c0 1-.21 1.94-.58 2.8Z",
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

var Cup = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Cup.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Cup.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Cup.displayName = 'Cup';

export { Cup as default };
