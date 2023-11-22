import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 16.5v3a2.5 2.5 0 0 1-2.5 2.5h-7.14c-.89 0-1.33-1.07-.71-1.7l5.87-6c.19-.19.45-.3.71-.3h1.27a2.5 2.5 0 0 1 2.5 2.5ZM18.37 11.29 15.66 14l-2.46 2.45c-.63.63-1.71.19-1.71-.7V7.26c0-.27.11-.52.29-.71l.92-.92c.98-.98 2.56-.98 3.54 0l2.12 2.12c.99.98.99 2.56.01 3.54ZM7.5 2h-3C3 2 2 3 2 4.5V18c0 .27.03.54.08.8.03.13.06.26.1.39.05.15.1.3.16.44.01.01.01.02.01.02.01 0 .01 0 0 .01.14.28.3.55.49.8.11.13.22.25.33.37.11.12.23.22.36.32l.01.01c.25.19.52.35.8.49.01-.01.01-.01.01 0 .15.07.3.12.46.17.13.04.26.07.39.1.26.05.53.08.8.08.41 0 .83-.06 1.22-.19.11-.04.22-.08.33-.13.35-.14.69-.34.99-.6.09-.07.19-.16.28-.25l.04-.04C9.56 20.07 10 19.08 10 18V4.5C10 3 9 2 7.5 2ZM6 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 4.5C2 3 3 2 4.5 2h3C9 2 10 3 10 4.5V18c0 1.08-.44 2.07-1.14 2.79l-.04.04c-.09.09-.19.18-.28.25-.3.26-.64.46-.99.6-.11.05-.22.09-.33.13-.39.13-.81.19-1.22.19-.27 0-.54-.03-.8-.08-.13-.03-.26-.06-.39-.1-.16-.05-.31-.1-.46-.17 0-.01 0-.01-.01 0-.28-.14-.55-.3-.8-.49l-.01-.01c-.13-.1-.25-.2-.36-.32-.11-.12-.22-.24-.33-.37-.19-.25-.35-.52-.49-.8.01-.01.01-.01 0-.01 0 0 0-.01-.01-.02-.06-.14-.11-.29-.16-.44a5.58 5.58 0 0 1-.1-.39c-.05-.26-.08-.53-.08-.8V8.57",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6c.41 0 .83-.06 1.22-.19.11-.04.22-.08.33-.13.35-.14.69-.34.99-.6.09-.07.19-.16.28-.25l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5ZM4.81 21.821c-.6-.18-1.17-.51-1.64-.99-.48-.47-.81-1.04-.99-1.64a4.02 4.02 0 0 0 2.63 2.63Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.37 11.29 15.66 14l-6.8 6.79C9.56 20.07 10 19.08 10 18V8.34l2.71-2.71c1.06-1.06 2.48-1.06 3.54 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54ZM6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
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
    d: "M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6c.41 0 .83-.06 1.22-.19.11-.04.22-.08.33-.13.35-.14.69-.34.99-.6.09-.07.19-.16.28-.25l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".6",
    d: "M18.37 11.29 15.66 14l-6.8 6.79C9.56 20.07 10 19.08 10 18V8.34l2.71-2.71c1.06-1.06 2.48-1.06 3.54 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 2h-3C3 2 2 3 2 4.5V18c0 .27.03.54.08.8.03.13.06.26.1.39.05.15.1.3.16.44.01.01.01.02.01.02.01 0 .01 0 0 .01.14.28.3.55.49.8.11.13.22.25.33.37.11.12.23.22.36.32l.01.01c.25.19.52.35.8.49.01-.01.01-.01.01 0 .15.07.3.12.46.17.13.04.26.07.39.1.26.05.53.08.8.08.41 0 .83-.06 1.22-.19.11-.04.22-.08.33-.13.35-.14.69-.34.99-.6.09-.07.19-.16.28-.25l.04-.04C9.56 20.07 10 19.08 10 18V4.5C10 3 9 2 7.5 2ZM6 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M10 4.5V18c0 1.08-.44 2.07-1.14 2.79l-.04.04c-.09.09-.19.18-.28.25-.3.26-.64.46-.99.6-.11.05-.22.09-.33.13-.39.13-.81.19-1.22.19-.27 0-.54-.03-.8-.08-.13-.03-.26-.06-.39-.1-.16-.05-.31-.1-.46-.17 0-.01 0-.01-.01 0-.28-.14-.55-.3-.8-.49l-.01-.01c-.13-.1-.25-.2-.36-.32-.11-.12-.22-.24-.33-.37-.19-.25-.35-.52-.49-.8.01-.01.01-.01 0-.01 0 0 0-.01-.01-.02-.06-.14-.11-.29-.16-.44a5.58 5.58 0 01-.1-.39c-.05-.26-.08-.53-.08-.8V4.5C2 3 3 2 4.5 2h3C9 2 10 3 10 4.5z"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6c.41 0 .83-.06 1.22-.19.11-.04.22-.08.33-.13.35-.14.69-.34.99-.6.09-.07.19-.16.28-.25l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5zM4.81 21.82c-.6-.18-1.17-.51-1.64-.99-.48-.47-.81-1.04-.99-1.64a4.02 4.02 0 002.63 2.63z"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M18.37 11.29L15.66 14l-6.8 6.79C9.56 20.07 10 19.08 10 18V8.34l2.71-2.71c1.06-1.06 2.48-1.06 3.54 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54zM6 19a1 1 0 100-2 1 1 0 000 2z"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6 22.752c-.3 0-.62-.03-.94-.09-.17-.04-.32-.08-.47-.12-.17-.05-.33-.11-.48-.17-.04-.01-.07-.03-.1-.04a6.59 6.59 0 0 1-.92-.56c-.02-.01-.03-.03-.05-.04a3.79 3.79 0 0 1-.42-.38c-.14-.15-.24-.27-.35-.39-.23-.3-.42-.6-.59-.95-.02-.03-.03-.07-.04-.11-.06-.14-.11-.28-.15-.43-.06-.21-.1-.35-.13-.5-.07-.35-.1-.66-.1-.96v-13.5c0-1.91 1.34-3.25 3.25-3.25h3c1.91 0 3.25 1.34 3.25 3.25v13.49c0 1.24-.48 2.42-1.35 3.31-.16.16-.28.27-.39.36-.32.28-.73.53-1.17.71-.1.04-.22.09-.35.14-.49.15-1 .23-1.5.23Zm-1.26-1.75c.1.04.2.07.3.1l.33.09c.55.1 1.14.07 1.61-.09.07-.03.17-.06.26-.1.32-.13.58-.29.81-.48.1-.08.17-.15.24-.21.63-.65.96-1.45.96-2.3v-13.5c0-1.08-.67-1.75-1.75-1.75h-3c-1.08 0-1.75.67-1.75 1.75v13.49c0 .21.02.43.07.66.02.09.05.2.08.32.04.11.07.2.11.3.02.03.03.06.04.08.01.02.02.05.03.07.12.22.24.41.37.58.07.08.16.18.25.28.11.12.2.19.3.27.01.01.03.02.04.03.16.12.34.23.55.34.02.01.04.01.06.02.02.01.05.03.09.05Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.5 22.752H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.35 0 .69-.05.98-.15.07-.03.17-.06.26-.1.32-.13.58-.29.81-.48.1-.08.17-.15.24-.21l6.84-6.83a.75.75 0 0 1 .53-.22h3.84c1.91 0 3.25 1.34 3.25 3.25v3c0 1.9-1.34 3.24-3.25 3.24Zm-10.04-1.5H19.5c1.08 0 1.75-.67 1.75-1.75v-3c0-1.08-.67-1.75-1.75-1.75h-3.53l-6.51 6.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.81 22.568c-.07 0-.14-.01-.21-.03-.74-.22-1.42-.63-1.96-1.18-.54-.53-.95-1.21-1.17-1.95-.12-.4.1-.81.5-.93s.81.1.94.49a3.27 3.27 0 0 0 2.14 2.14c.39.12.61.54.49.94-.11.31-.41.52-.73.52ZM8.86 21.542a.754.754 0 0 1-.54-1.28c.6-.61.93-1.42.93-2.27v-9.66c0-.2.08-.39.22-.53l2.71-2.71c1.31-1.31 3.29-1.31 4.6 0l2.12 2.12c1.35 1.35 1.35 3.25 0 4.6l-9.51 9.5c-.15.16-.34.23-.53.23Zm1.89-12.89v9.19l7.09-7.08c.76-.76.76-1.71 0-2.48l-2.12-2.12c-.75-.75-1.73-.75-2.48 0l-2.49 2.49ZM6 19.75c-.96 0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75Zm0-2c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10 4.5V18c0 1.08-.44 2.07-1.14 2.79l-.04.04c-.09.09-.19.18-.28.25-.3.26-.64.46-.99.6-.11.05-.22.09-.33.13-.39.13-.81.19-1.22.19-.27 0-.54-.03-.8-.08-.13-.03-.26-.06-.39-.1-.16-.05-.31-.1-.46-.17 0-.01 0-.01-.01 0-.28-.14-.55-.3-.8-.49l-.01-.01c-.13-.1-.25-.2-.36-.32-.11-.12-.22-.24-.33-.37-.19-.25-.35-.52-.49-.8.01-.01.01-.01 0-.01 0 0 0-.01-.01-.02-.06-.14-.11-.29-.16-.44a5.58 5.58 0 0 1-.1-.39c-.05-.26-.08-.53-.08-.8V4.5C2 3 3 2 4.5 2h3C9 2 10 3 10 4.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6c.41 0 .83-.06 1.22-.19.11-.04.22-.08.33-.13.35-.14.69-.34.99-.6.09-.07.19-.16.28-.25l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.81 21.821c-.6-.18-1.17-.51-1.64-.99-.48-.47-.81-1.04-.99-1.64a4.02 4.02 0 0 0 2.63 2.63ZM18.37 11.29 15.66 14l-6.8 6.79C9.56 20.07 10 19.08 10 18V8.34l2.71-2.71c1.06-1.06 2.48-1.06 3.54 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
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

var ColorSwatch = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ColorSwatch.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ColorSwatch.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ColorSwatch.displayName = 'ColorSwatch';

export { ColorSwatch as default };
