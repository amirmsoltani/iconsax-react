import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47c-.19.8-1.21 1.05-1.74.42l-2.99-3.44a.499.499 0 0 1 .25-.81 8.492 8.492 0 0 0 4.53-2.83c.19-.23.53-.26.74-.05l2.22 2.22c.76.76.49 1.71-.27 1.89ZM2.7 18.47l1.65.39c.37.09.66.37.74.74l.35 1.47c.19.8 1.21 1.05 1.74.42l2.99-3.44c.24-.28.11-.72-.25-.81a8.492 8.492 0 0 1-4.53-2.83.499.499 0 0 0-.74-.05l-2.22 2.22c-.76.76-.49 1.71.27 1.89ZM12 2C8.13 2 5 5.13 5 9c0 1.45.43 2.78 1.17 3.89a6.985 6.985 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02A6.968 6.968 0 0 0 19 9c0-3.87-3.13-7-7-7Zm3.06 6.78-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.85-.83c-.49-.49-.33-.98.35-1.09l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.32-.64.84-.64 1.16 0l.59 1.18c.08.16.29.32.48.35l1.07.18c.67.11.83.6.34 1.09Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.25 3.44A6.986 6.986 0 0 1 19 9c0 1.45-.43 2.78-1.17 3.89a6.985 6.985 0 0 1-4.78 3.02c-.34.06-.69.09-1.05.09-.36 0-.71-.03-1.05-.09a6.985 6.985 0 0 1-4.78-3.02A6.968 6.968 0 0 1 5 9c0-3.87 3.13-7 7-7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m21.25 18.468-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 15.998l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a.996.996 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.986 6.986 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67ZM12.58 5.98l.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0Z",
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
    d: "M19 9c0 1.45-.43 2.78-1.17 3.89a6.985 6.985 0 0 1-4.78 3.02c-.34.06-.69.09-1.05.09-.36 0-.71-.03-1.05-.09a6.985 6.985 0 0 1-4.78-3.02A6.968 6.968 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m21.25 18.468-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 15.998l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a.996.996 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.986 6.986 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67ZM12.58 5.98l.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 9c0 1.45-.43 2.78-1.17 3.89a6.985 6.985 0 0 1-4.78 3.02c-.34.06-.69.09-1.05.09-.36 0-.71-.03-1.05-.09a6.985 6.985 0 0 1-4.78-3.02A6.968 6.968 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m21.25 18.47-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 16l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a.996.996 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.985 6.985 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67ZM12.58 5.98l.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0Z",
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
    d: "M12 16.75c-.4 0-.8-.03-1.18-.1-2.12-.31-4.05-1.53-5.27-3.34A7.767 7.767 0 0 1 4.25 9c0-4.27 3.48-7.75 7.75-7.75S19.75 4.73 19.75 9c0 1.54-.45 3.03-1.3 4.31a7.8 7.8 0 0 1-5.3 3.35c-.35.06-.75.09-1.15.09Zm0-14c-3.45 0-6.25 2.8-6.25 6.25 0 1.25.36 2.45 1.04 3.47a6.254 6.254 0 0 0 4.26 2.69c.64.11 1.27.11 1.86 0 1.75-.25 3.3-1.24 4.29-2.7a6.232 6.232 0 0 0 1.04-3.47c.01-3.44-2.79-6.24-6.24-6.24Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.47 22.588c-.14 0-.27-.02-.41-.05-.65-.15-1.15-.65-1.3-1.3l-.35-1.47a.261.261 0 0 0-.19-.19l-1.65-.39a1.74 1.74 0 0 1-1.28-1.22c-.17-.61 0-1.27.45-1.72l3.9-3.9c.16-.16.38-.24.6-.22.22.02.42.14.55.33.99 1.46 2.54 2.45 4.27 2.7.64.11 1.27.11 1.86 0 1.75-.25 3.3-1.24 4.29-2.7.12-.19.33-.31.55-.33.22-.02.44.06.6.22l3.9 3.9c.45.45.62 1.11.45 1.72a1.74 1.74 0 0 1-1.28 1.22l-1.65.39c-.09.02-.16.09-.19.19l-.35 1.47c-.15.65-.65 1.15-1.3 1.3-.65.16-1.32-.07-1.74-.58l-4.2-4.83-4.2 4.84c-.34.4-.82.62-1.33.62Zm-.38-8.56-3.29 3.29c-.09.09-.08.19-.06.25.01.05.06.15.18.17l1.65.39c.65.15 1.15.65 1.3 1.3l.35 1.47c.03.13.13.17.19.19.06.01.16.02.25-.08l3.83-4.41a7.768 7.768 0 0 1-4.4-2.57Zm7.42 2.56 3.83 4.4c.09.11.2.11.26.09.06-.01.15-.06.19-.19l.35-1.47c.15-.65.65-1.15 1.3-1.3l1.65-.39c.12-.03.17-.12.18-.17.02-.05.03-.16-.06-.25l-3.29-3.29a7.793 7.793 0 0 1-4.41 2.57Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.891 12.888c-.26 0-.57-.07-.94-.29l-.95-.57-.95.56c-.87.52-1.44.22-1.65.07-.21-.15-.66-.6-.43-1.59l.24-1.03-.8-.74c-.44-.44-.6-.97-.45-1.45.15-.48.59-.82 1.21-.92l1.07-.18.51-1.12c.29-.57.74-.89 1.25-.89s.97.33 1.25.9l.59 1.18.99.12c.61.1 1.05.44 1.21.92.15.48-.01 1.01-.45 1.45l-.83.83.26.93c.23.99-.22 1.44-.43 1.59-.11.09-.35.23-.7.23Zm-4.28-4.5.69.69c.32.32.48.86.38 1.3l-.19.8.8-.47c.43-.25 1.01-.25 1.43 0l.8.47-.18-.8c-.1-.45.05-.98.37-1.3l.69-.69-.87-.15c-.42-.07-.84-.38-1.03-.76l-.5-.98-.5 1c-.18.37-.6.69-1.02.76l-.87.13Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 9c0 1.45-.43 2.78-1.17 3.89a6.985 6.985 0 0 1-4.78 3.02c-.34.06-.69.09-1.05.09-.36 0-.71-.03-1.05-.09a6.985 6.985 0 0 1-4.78-3.02A6.968 6.968 0 0 1 5 9c0-3.87 3.13-7 7-7s7 3.13 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m21.25 18.468-1.65.39c-.37.09-.66.37-.74.74l-.35 1.47a1 1 0 0 1-1.74.41L12 15.998l-4.77 5.49a1 1 0 0 1-1.74-.41l-.35-1.47a.996.996 0 0 0-.74-.74l-1.65-.39a1.003 1.003 0 0 1-.48-1.68l3.9-3.9a6.986 6.986 0 0 0 4.78 3.02c.34.06.69.09 1.05.09.36 0 .71-.03 1.05-.09 1.99-.29 3.7-1.42 4.78-3.02l3.9 3.9c.55.54.28 1.49-.48 1.67ZM12.58 5.98l.59 1.18c.08.16.29.32.48.35l1.07.18c.68.11.84.61.35 1.1l-.83.83c-.14.14-.22.41-.17.61l.24 1.03c.19.81-.24 1.13-.96.7l-1-.59a.701.701 0 0 0-.66 0l-1 .59c-.72.42-1.15.11-.96-.7l.24-1.03c.04-.19-.03-.47-.17-.61l-.83-.83c-.49-.49-.33-.98.35-1.1l1.07-.18c.18-.03.39-.19.47-.35l.59-1.18c.29-.64.81-.64 1.13 0Z",
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

var MedalStar = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
MedalStar.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MedalStar.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MedalStar.displayName = 'MedalStar';

export { MedalStar as default };
