import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7.649 20.91c-.03 0-.07.02-.1.02-1.94-.96-3.52-2.55-4.49-4.49 0-.03.02-.07.02-.1 1.22.36 2.48.63 3.73.84.22 1.26.48 2.51.84 3.73ZM20.94 16.45c-.99 1.99-2.64 3.6-4.65 4.57.38-1.27.7-2.55.91-3.84 1.26-.21 2.5-.48 3.72-.84-.01.04.02.08.02.11ZM21.02 7.71c-1.26-.38-2.53-.69-3.82-.91-.21-1.29-.52-2.57-.91-3.82 2.07.99 3.74 2.66 4.73 4.73ZM7.65 3.089c-.36 1.22-.62 2.46-.83 3.72-1.29.2-2.57.52-3.84.9.97-2.01 2.58-3.66 4.57-4.65.03 0 .07.03.1.03ZM15.492 6.59c-2.32-.26-4.66-.26-6.98 0 .25-1.37.57-2.74 1.02-4.06.02-.08.01-.14.02-.22.79-.19 1.6-.31 2.45-.31.84 0 1.66.12 2.44.31.01.08.01.14.03.22.45 1.33.77 2.69 1.02 4.06ZM6.59 15.492c-1.38-.25-2.74-.57-4.06-1.02-.08-.02-.14-.01-.22-.02-.19-.79-.31-1.6-.31-2.45 0-.84.12-1.66.31-2.44.08-.01.14-.01.22-.03 1.33-.44 2.68-.77 4.06-1.02-.25 2.32-.25 4.66 0 6.98ZM22 12.002c0 .85-.12 1.66-.31 2.45-.08.01-.14 0-.22.02-1.33.44-2.69.77-4.06 1.02.26-2.32.26-4.66 0-6.98 1.37.25 2.74.57 4.06 1.02.08.02.14.03.22.03.19.79.31 1.6.31 2.44ZM15.492 17.41c-.25 1.38-.57 2.74-1.02 4.06-.02.08-.02.14-.03.22-.78.19-1.6.31-2.44.31-.85 0-1.66-.12-2.45-.31-.01-.08 0-.14-.02-.22a29.77 29.77 0 0 1-1.02-4.06c1.16.13 2.32.22 3.49.22 1.17 0 2.34-.09 3.49-.22ZM15.763 15.763a30.035 30.035 0 0 1-7.526 0 30.039 30.039 0 0 1 0-7.526 30.039 30.039 0 0 1 7.526 0 30.035 30.035 0 0 1 0 7.526Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.54 12c0 3.04.49 6.08 1.46 9H8M7.998 3h1c-.49 1.46-.85 2.95-1.1 4.46M16.13 16.36c-.25 1.56-.62 3.12-1.13 4.64M15 3c.97 2.92 1.46 5.96 1.46 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 16v-1a28.424 28.424 0 0 0 18 0v1M3 9.002a28.424 28.424 0 0 1 18 0",
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
    d: "M7.649 20.91c-.03 0-.07.02-.1.02-1.94-.96-3.52-2.55-4.49-4.49 0-.03.02-.07.02-.1 1.22.36 2.48.63 3.73.84.22 1.26.48 2.51.84 3.73ZM20.94 16.45c-.99 1.99-2.64 3.6-4.65 4.57.38-1.27.7-2.55.91-3.84 1.26-.21 2.5-.48 3.72-.84-.01.04.02.08.02.11ZM21.02 7.71c-1.26-.38-2.53-.69-3.82-.91-.21-1.29-.52-2.57-.91-3.82 2.07.99 3.74 2.66 4.73 4.73ZM7.65 3.089c-.36 1.22-.62 2.46-.83 3.72-1.29.2-2.57.52-3.84.9.97-2.01 2.58-3.66 4.57-4.65.03 0 .07.03.1.03Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.492 6.59c-2.32-.26-4.66-.26-6.98 0 .25-1.37.57-2.74 1.02-4.06.02-.08.01-.14.02-.22.79-.19 1.6-.31 2.45-.31.84 0 1.66.12 2.44.31.01.08.01.14.03.22.45 1.33.77 2.69 1.02 4.06ZM6.59 15.492c-1.38-.25-2.74-.57-4.06-1.02-.08-.02-.14-.01-.22-.02-.19-.79-.31-1.6-.31-2.45 0-.84.12-1.66.31-2.44.08-.01.14-.01.22-.03 1.33-.44 2.68-.77 4.06-1.02-.25 2.32-.25 4.66 0 6.98ZM22 12.002c0 .85-.12 1.66-.31 2.45-.08.01-.14 0-.22.02-1.33.44-2.69.77-4.06 1.02.26-2.32.26-4.66 0-6.98 1.37.25 2.74.57 4.06 1.02.08.02.14.03.22.03.19.79.31 1.6.31 2.44ZM15.492 17.41c-.25 1.38-.57 2.74-1.02 4.06-.02.08-.02.14-.03.22-.78.19-1.6.31-2.44.31-.85 0-1.66-.12-2.45-.31-.01-.08 0-.14-.02-.22a29.77 29.77 0 0 1-1.02-4.06c1.16.13 2.32.22 3.49.22 1.17 0 2.34-.09 3.49-.22ZM15.763 15.763a30.035 30.035 0 0 1-7.526 0 30.039 30.039 0 0 1 0-7.526 30.039 30.039 0 0 1 7.526 0 30.035 30.035 0 0 1 0 7.526Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 3h1a28.424 28.424 0 0 0 0 18H8M15 3a28.424 28.424 0 0 1 0 18",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 16v-1a28.424 28.424 0 0 0 18 0v1M3 9a28.424 28.424 0 0 1 18 0",
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
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.998 21.75h-1c-.41 0-.75-.34-.75-.75s.32-.74.73-.75a29.49 29.49 0 0 1 0-16.5.745.745 0 0 1-.73-.75c0-.41.34-.75.75-.75h1c.24 0 .47.12.61.31.14.2.18.45.1.68a27.948 27.948 0 0 0 0 17.53c.08.23.04.48-.1.68-.14.18-.37.3-.61.3ZM14.998 21.75a.745.745 0 0 1-.71-.99 27.948 27.948 0 0 0 0-17.53.749.749 0 1 1 1.42-.48 29.318 29.318 0 0 1 0 18.47c-.1.33-.4.53-.71.53Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 17.2c-2.79 0-5.57-.39-8.25-1.18-.01.4-.34.73-.75.73s-.75-.34-.75-.75v-1c0-.24.12-.47.31-.61.2-.14.45-.18.68-.1a27.948 27.948 0 0 0 17.53 0 .75.75 0 0 1 .68.1c.2.14.31.37.31.61v1c0 .41-.34.75-.75.75s-.74-.32-.75-.73c-2.69.79-5.47 1.18-8.26 1.18ZM21 9.75c-.08 0-.16-.01-.24-.04a27.948 27.948 0 0 0-17.53 0c-.4.13-.82-.08-.95-.47-.12-.4.09-.82.48-.95a29.318 29.318 0 0 1 18.47 0c.39.13.61.56.47.95a.73.73 0 0 1-.7.51Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4"
  }, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M8 3h1a28.424 28.424 0 000 18H8M15 3a28.424 28.424 0 010 18"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M3 16v-1a28.424 28.424 0 0018 0v1M3 9a28.424 28.424 0 0118 0"
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

var Global = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Global.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Global.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Global.displayName = 'Global';

export { Global as default };