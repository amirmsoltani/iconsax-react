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
    d: "M21.98 11.41c-.34-5.8-5.61-10.27-11.68-9.27-4.18.69-7.53 4.08-8.18 8.26-.38 2.42.12 4.71 1.21 6.6l-.89 3.31c-.2.75.49 1.43 1.23 1.22l3.26-.9c1.48.87 3.21 1.37 5.06 1.37 5.64 0 10.32-4.97 9.99-10.59zm-5.1 4.31a2.279 2.279 0 01-1.16 1.1c-.3.13-.63.19-.98.19-.51 0-1.06-.12-1.63-.37a9.16 9.16 0 01-1.72-.99c-.58-.42-1.12-.89-1.64-1.4-.52-.52-.98-1.07-1.4-1.64-.41-.57-.74-1.14-.98-1.71-.24-.57-.36-1.12-.36-1.64 0-.34.06-.67.18-.97.12-.31.31-.59.58-.84.32-.32.67-.47 1.04-.47.14 0 .28.03.41.09.13.06.25.15.34.28l1.16 1.64c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24-.11.36s-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64a13.482 13.482 0 001.53 1.53c.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07.11.05.23.11.35.2l1.66 1.18c.13.09.22.2.28.32.05.13.08.25.08.39-.06.17-.1.36-.18.54z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10c-1.84 0-3.57-.5-5.06-1.37L2 22l1.34-5A9.966 9.966 0 0 1 2 12c0-3.7 2.01-6.93 5-8.66",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 15.17c0 .18-.04.37-.13.55a2.279 2.279 0 0 1-1.16 1.1c-.3.13-.63.19-.98.19-.51 0-1.06-.12-1.63-.37-.58-.25-1.15-.58-1.72-.99-.58-.42-1.12-.89-1.64-1.4-.52-.52-.98-1.07-1.4-1.64-.41-.57-.74-1.14-.98-1.71C7.12 10.33 7 9.78 7 9.26c0-.34.06-.67.18-.97.12-.31.31-.59.58-.84.32-.32.67-.47 1.04-.47.14 0 .28.03.41.09.13.06.25.15.34.28l1.16 1.64c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24-.11.36s-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64a13.48 13.48 0 0 0 1.53 1.53c.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07.11.05.23.11.35.2l1.66 1.18c.13.09.22.2.28.32 0 .12.03.24.03.38Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6.94 20.63C8.43 21.5 10.16 22 12 22c5.63 0 10.31-4.97 9.98-10.59-.34-5.8-5.61-10.27-11.68-9.27-4.18.69-7.53 4.08-8.18 8.26-.38 2.42.12 4.71 1.21 6.6l-.89 3.31c-.2.75.49 1.43 1.23 1.22l3.27-.9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 15.17c0 .18-.04.37-.13.55a2.279 2.279 0 0 1-1.16 1.1c-.3.13-.63.19-.98.19-.51 0-1.06-.12-1.63-.37-.58-.25-1.15-.58-1.72-.99-.58-.42-1.12-.89-1.64-1.4a14.3 14.3 0 0 1-1.4-1.64c-.41-.57-.74-1.14-.98-1.71C7.12 10.33 7 9.78 7 9.26c0-.34.06-.67.18-.97.12-.31.31-.59.58-.84.32-.32.67-.47 1.04-.47.14 0 .28.03.41.09.13.06.25.15.34.28L10.7 9c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24-.11.36s-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64a13.482 13.482 0 0 0 1.53 1.53c.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07.11.05.23.11.35.2l1.66 1.18c.13.09.22.2.28.32.01.11.04.23.04.37Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.9 20.6c1.5.9 3.3 1.4 5.1 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5l-.86 3.306a1 1 0 0 0 1.243 1.213L6.9 20.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 14.848c0 .162-.036.329-.113.491a1.856 1.856 0 0 1-.306.459c-.221.243-.464.418-.74.531-.27.113-.563.171-.878.171-.46 0-.951-.108-1.47-.328a7.922 7.922 0 0 1-1.55-.892 12.95 12.95 0 0 1-1.478-1.26 12.79 12.79 0 0 1-1.257-1.471 8.02 8.02 0 0 1-.884-1.534C7.608 10.5 7.5 10.01 7.5 9.543c0-.306.054-.598.162-.868.108-.275.28-.527.519-.752.288-.284.603-.423.937-.423.126 0 .252.027.365.081.117.054.22.135.302.252l1.046 1.472c.08.112.14.216.18.315.04.094.063.189.063.274a.61.61 0 0 1-.095.32 1.53 1.53 0 0 1-.252.319l-.343.356a.24.24 0 0 0-.072.18c0 .035.005.067.014.103.013.036.027.063.036.09.08.149.22.342.419.576.203.234.419.473.653.711.244.239.478.459.717.662.234.197.428.332.581.413l.082.037a.311.311 0 0 0 .112.018.248.248 0 0 0 .185-.077l.342-.338c.113-.112.221-.197.325-.252a.6.6 0 0 1 .32-.094.72.72 0 0 1 .275.059c.099.04.203.098.315.175l1.492 1.058a.683.683 0 0 1 .248.287.921.921 0 0 1 .072.351Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 22.748a.76.76 0 0 1-.73-.95l1.26-4.71c-.84-1.56-1.28-3.32-1.28-5.1 0-5.93 4.82-10.75 10.75-10.75s10.75 4.82 10.75 10.75-4.82 10.75-10.75 10.75c-1.81 0-3.58-.45-5.16-1.31l-4.64 1.29c-.07.02-.13.03-.2.03Zm4.94-2.87c.13 0 .26.04.38.1 1.41.83 3.03 1.27 4.68 1.27 5.1 0 9.25-4.15 9.25-9.25S17.1 2.748 12 2.748s-9.25 4.15-9.25 9.25c0 1.63.43 3.22 1.24 4.62.1.17.13.38.08.57l-1 3.74 3.68-1.02c.06-.02.13-.03.19-.03Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.74 17.76c-.62 0-1.26-.14-1.93-.43-.63-.27-1.26-.63-1.87-1.08-.6-.44-1.19-.94-1.73-1.48-.54-.55-1.04-1.13-1.48-1.73-.45-.63-.81-1.25-1.07-1.86-.28-.66-.42-1.31-.42-1.93 0-.44.08-.86.23-1.25.16-.41.42-.78.76-1.1.64-.63 1.56-.86 2.29-.51.25.11.46.29.62.53l1.16 1.63c.12.16.21.33.28.5.08.2.13.4.13.59 0 .26-.07.52-.21.75-.09.15-.22.33-.39.5l-.13.14c.06.08.13.18.24.3.21.24.44.5.69.75.25.24.5.48.75.69.12.1.22.18.3.23l.14-.14c.18-.18.36-.32.54-.41.33-.21.84-.26 1.29-.07.16.06.32.15.49.27l1.67 1.18c.23.16.41.38.53.63.1.25.14.47.14.7 0 .3-.07.59-.2.87-.13.26-.28.49-.46.7-.32.35-.69.61-1.09.78-.4.17-.83.25-1.27.25ZM8.79 7.74c-.06 0-.26 0-.51.25-.19.18-.32.37-.41.58-.09.21-.13.45-.13.69 0 .42.1.87.3 1.35.21.5.52 1.03.9 1.56.39.53.83 1.06 1.32 1.55.49.48 1.01.93 1.55 1.33.52.38 1.05.68 1.58.91.76.33 1.46.41 2.03.17.2-.08.38-.22.56-.4.09-.1.16-.2.22-.33.03-.07.05-.15.05-.22 0-.02 0-.05-.03-.11l-1.67-1.16a.808.808 0 0 0-.2-.11c-.04.02-.1.05-.21.16l-.38.38c-.29.29-.75.37-1.12.24l-.18-.08c-.23-.12-.49-.3-.78-.55-.28-.24-.55-.49-.84-.77-.28-.29-.53-.56-.77-.84a5.47 5.47 0 0 1-.56-.77l-.11-.26a1.1 1.1 0 0 1-.04-.31c0-.28.1-.53.29-.73l.38-.39c.11-.11.15-.17.17-.21a1.06 1.06 0 0 0-.12-.2L8.91 7.82l-.12-.08Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.94 20.63C8.42 21.5 10.15 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l4.94-1.37Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M17 15.17c0 .18-.04.37-.13.55a2.279 2.279 0 0 1-1.16 1.1c-.3.13-.63.19-.98.19-.51 0-1.06-.12-1.63-.37-.58-.25-1.15-.58-1.72-.99-.58-.42-1.12-.89-1.64-1.4-.52-.52-.98-1.07-1.4-1.64-.41-.57-.74-1.14-.98-1.71C7.12 10.33 7 9.78 7 9.26c0-.34.06-.67.18-.97.12-.31.31-.59.58-.84.32-.32.67-.47 1.04-.47.14 0 .28.03.41.09.13.06.25.15.34.28l1.16 1.64c.09.13.16.24.2.35.05.11.07.21.07.31 0 .12-.04.24-.11.36s-.16.24-.28.36l-.38.4c-.06.06-.08.12-.08.2 0 .04.01.08.02.12.02.04.03.07.04.1.09.17.25.38.47.64a13.48 13.48 0 0 0 1.53 1.53c.26.22.48.37.65.46.03.01.06.03.09.04.04.02.08.02.13.02.09 0 .15-.03.21-.09l.38-.38c.13-.13.25-.22.36-.28.12-.07.23-.11.36-.11.1 0 .2.02.31.07.11.05.23.11.35.2l1.66 1.18c.13.09.22.2.28.32 0 .12.03.24.03.38Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
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

var Whatsapp = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Whatsapp.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Whatsapp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Whatsapp.displayName = 'Whatsapp';

export { Whatsapp as default };
