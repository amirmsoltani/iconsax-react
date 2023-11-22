import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.21 15.012c-1.09-.07-2.21.33-3.04 1.16a4.008 4.008 0 0 0 0 5.66c.53.53 1.18.88 1.87 1.05.38.1.78.13 1.18.11.95-.04 1.88-.42 2.61-1.15a3.98 3.98 0 0 0 1.05-3.79c-.16-.69-.52-1.34-1.05-1.87a3.952 3.952 0 0 0-2.62-1.17Zm2.03 3.97c0 .21-.08.39-.22.53s-.32.22-.53.22h-.74v.78c0 .21-.08.39-.22.53s-.32.22-.53.22c-.41 0-.75-.34-.75-.75v-.78h-.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74c.42 0 .75.34.75.75ZM12.228 12.07c-.41 0-.74.33-.74.74s.33.74.74.74.74-.33.74-.74-.33-.74-.74-.74ZM6.76 13.059c-.41 0-.74.33-.74.74s.33.74.74.74.74-.33.74-.74-.33-.74-.74-.74Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.19 2H7.81c-.28 0-.55.01-.81.05-3.15.29-5 2.4-5 5.76v8.38c0 3.36 1.85 5.47 5 5.76.26.04.53.05.81.05h5.69c.39 0 .64-.44.49-.8-.29-.69-.49-1.49-.49-2.2 0-3.03 2.47-5.5 5.5-5.5.76 0 1.5.15 2.18.45.37.16.82-.09.82-.49V7.81C22 4.17 19.83 2 16.19 2Zm-1.71 6.05v4.76c0 .01-.01.02-.01.04a2.243 2.243 0 0 1-2.24 2.21c-1.24 0-2.24-1.01-2.24-2.24 0-1.24 1.01-2.24 2.24-2.24.26 0 .51.05.75.14V9.03l-3.97 1.08v3.7c0 .01-.01.02-.01.03a2.234 2.234 0 0 1-2.24 2.2c-1.24 0-2.24-1.01-2.24-2.24a2.25 2.25 0 0 1 2.24-2.24c.26 0 .51.05.74.14V7.79c0-.93.58-1.68 1.47-1.92l2.98-.82c.93-.25 1.5 0 1.82.24.46.35.69.92.69 1.68v1.08h.02Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 8.65C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65v5.7c0 .34-.01.67-.03.98A3.944 3.944 0 0 0 18 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.2.34.46.65.76.91-.31.02-.64.03-.99.03h-5.7C3.9 21 2 19.1 2 14.35v-1.38",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.72 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.48 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.028 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9ZM8.168 8.829l5.31-1.45",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-2.21 1.79-4 4-4s4 1.79 4 4ZM19.492 17.98h-2.98M18 16.52v2.99",
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
    d: "M19.21 15.012c-1.09-.07-2.21.33-3.04 1.16a4.008 4.008 0 0 0 0 5.66c.53.53 1.18.88 1.87 1.05.38.1.78.13 1.18.11.95-.04 1.88-.42 2.61-1.15a3.98 3.98 0 0 0 1.05-3.79c-.16-.69-.52-1.34-1.05-1.87a3.952 3.952 0 0 0-2.62-1.17Zm2.03 3.97c0 .21-.08.39-.22.53s-.32.22-.53.22h-.74v.78c0 .21-.08.39-.22.53s-.32.22-.53.22c-.41 0-.75-.34-.75-.75v-.78h-.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.74c.42 0 .75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M16.34 21.97c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0 1 15 19c0-2.21 1.79-4 4-4 1.18 0 2.25.51 2.97 1.33.01.01.01.02.02.02 0-.06.01-.11.01-.16V7.81C22 4.17 19.83 2 16.19 2H7.81c-.28 0-.55.01-.81.05-3.15.29-5 2.4-5 5.76v8.38c0 3.36 1.85 5.47 5 5.76.26.04.53.05.81.05h8.38c.06 0 .11-.01.17-.01 0-.01-.01-.01-.02-.02Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.781 5.299c-.32-.25-.9-.49-1.82-.24l-2.98.82c-.89.23-1.47.98-1.47 1.92v3.91c-.23-.08-.48-.14-.74-.14-1.24 0-2.24 1.01-2.24 2.24a2.25 2.25 0 0 0 2.24 2.24c1.22 0 2.22-.99 2.24-2.2 0-.01.01-.02.01-.03v-3.7l3.97-1.08v1.68c-.23-.08-.48-.14-.75-.14-1.24 0-2.24 1.01-2.24 2.24 0 1.24 1.01 2.24 2.24 2.24 1.22 0 2.22-.99 2.24-2.21 0-.01.01-.02.01-.04v-5.83c-.01-.76-.25-1.33-.71-1.68Zm-7.02 9.25c-.41 0-.74-.33-.74-.74s.33-.74.74-.74.74.33.74.74-.33.74-.74.74Zm5.47-1c-.41 0-.74-.33-.74-.74s.33-.74.74-.74.74.33.74.74-.33.74-.74.74Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21 8.65v5.7c0 .34-.01.67-.03.98A3.944 3.944 0 0 0 18 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.2.34.46.65.76.91-.31.02-.64.03-.99.03h-5.7C3.9 21 2 19.1 2 14.35v-5.7C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.72 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.48 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.03 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9ZM8.17 8.83l5.31-1.45",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-2.21 1.79-4 4-4s4 1.79 4 4ZM19.49 17.98h-2.98M18 16.52v2.99",
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
    d: "M14.35 21.75h-5.7c-5.19 0-7.4-2.21-7.4-7.4v-5.7c0-5.19 2.21-7.4 7.4-7.4h5.7c5.19 0 7.4 2.21 7.4 7.4v5.7c0 .36-.01.7-.03 1.03-.02.3-.22.56-.51.66-.29.1-.6.01-.81-.21-.6-.68-1.48-1.08-2.41-1.08-1.79 0-3.25 1.46-3.25 3.25 0 .59.16 1.17.47 1.67.16.28.37.53.61.74.23.2.32.52.22.8-.1.29-.36.49-.66.51-.32.02-.66.03-1.03.03Zm-5.7-19c-4.36 0-5.9 1.54-5.9 5.9v5.7c0 4.36 1.54 5.9 5.9 5.9h5.17a4.7 4.7 0 0 1-.57-2.25c0-2.62 2.13-4.75 4.75-4.75.8 0 1.57.2 2.25.56V8.65c0-4.36-1.54-5.9-5.9-5.9h-5.7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.72 15.17c-1.21 0-2.2-.99-2.2-2.2 0-1.21.99-2.2 2.2-2.2 1.21 0 2.2.99 2.2 2.2 0 1.21-.99 2.2-2.2 2.2Zm0-2.9c-.38 0-.7.31-.7.7 0 .38.31.7.7.7.39 0 .7-.31.7-.7 0-.39-.31-.7-.7-.7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.172 13.721c-.41 0-.75-.34-.75-.75v-5.83c0-.91.57-1.65 1.44-1.89l2.9-.79c.9-.25 1.47-.01 1.78.23.31.24.69.72.69 1.65v5.66c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.66c0-.32-.07-.44-.1-.46-.03-.02-.17-.06-.48.02l-2.89.79c-.3.08-.34.29-.34.44v5.83c0 .42-.34.76-.75.76Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.028 14.2c-1.21 0-2.2-.99-2.2-2.2 0-1.21.99-2.2 2.2-2.2 1.21 0 2.2.99 2.2 2.2a2.2 2.2 0 0 1-2.2 2.2Zm0-2.89c-.38 0-.7.31-.7.7 0 .38.31.7.7.7.39 0 .7-.31.7-.7 0-.39-.32-.7-.7-.7ZM8.169 9.58a.747.747 0 0 1-.19-1.47l5.31-1.45c.4-.1.81.13.92.53.11.4-.13.81-.53.92l-5.31 1.45c-.07.01-.14.02-.2.02ZM18 22.75c-1.66 0-3.22-.88-4.06-2.31-.45-.72-.69-1.57-.69-2.44 0-2.62 2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75c0 .87-.24 1.72-.69 2.45-.84 1.42-2.4 2.3-4.06 2.3Zm0-8c-1.79 0-3.25 1.46-3.25 3.25 0 .59.16 1.17.47 1.67.59 1 1.63 1.58 2.78 1.58s2.19-.59 2.78-1.57c.31-.51.47-1.08.47-1.68 0-1.79-1.46-3.25-3.25-3.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.49 18.73H16.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.99a.749.749 0 1 1 0 1.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 20.26c-.41 0-.75-.34-.75-.75v-2.99c0-.41.34-.75.75-.75s.75.34.75.75v2.99c0 .42-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21 8.65v5.7c0 .34-.01.67-.03.98A3.944 3.944 0 0 0 18 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.2.34.46.65.76.91-.31.02-.64.03-.99.03h-5.7C3.9 21 2 19.1 2 14.35v-5.7C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65Z",
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
    d: "M6.72 14.42a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9Z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.48 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.028 13.45a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9ZM8.168 8.829l5.31-1.45"
  })), /*#__PURE__*/React.createElement(Path, {
    d: "M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0 1 18 22a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 14 18c0-2.21 1.79-4 4-4s4 1.79 4 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M19.492 17.98h-2.98M18 16.52v2.99"
  })));
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

var MusicSquareAdd = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
MusicSquareAdd.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MusicSquareAdd.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MusicSquareAdd.displayName = 'MusicSquareAdd';

export { MusicSquareAdd as default };
