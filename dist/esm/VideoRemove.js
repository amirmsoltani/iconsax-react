import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.98 15.67c-.04-.06-.09-.12-.14-.17-.81-.93-2.01-1.5-3.34-1.5-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.23.38.52.73.86 1.02.05.05.1.09.16.14h.01A4.35 4.35 0 0 0 18.5 23c1.64 0 3.07-.88 3.85-2.18.23-.39.41-.82.52-1.27a4.417 4.417 0 0 0-.89-3.88Zm-1.75 4.54c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.66-.66-.69.69c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.69-.69-.66-.66a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.66.66.63-.63c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.63.63.66.66c.3.29.3.76 0 1.06ZM14.73 5.86V2.5c0-.28-.22-.5-.5-.5H9.77c-.28 0-.5.22-.5.5v3.36c0 .28.22.5.5.5h4.46c.28 0 .5-.22.5-.5ZM7.249 2.02c-2.56.16-4.31 1.48-4.96 3.68-.1.33.14.66.48.66h4.5c.28 0 .5-.22.5-.5V2.52a.5.5 0 0 0-.52-.5ZM16.75 2.009c2.56.16 4.31 1.48 4.96 3.68.1.33-.14.66-.48.66h-4.5c-.28 0-.5-.22-.5-.5v-3.34a.5.5 0 0 1 .52-.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 8.36v4.38c0 .37-.39.61-.72.44a6.013 6.013 0 0 0-7.08 1.13 5.94 5.94 0 0 0-1.7 4.19c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H7.81C4.6 22 2 19.4 2 16.19V8.36c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7v-1.97M2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M23 18.5c0 .36-.04.71-.13 1.05-.11.45-.29.88-.52 1.27A4.487 4.487 0 0 1 18.5 23a4.35 4.35 0 0 1-2.82-1.02h-.01c-.06-.05-.11-.09-.16-.14-.34-.29-.63-.64-.86-1.02a4.5 4.5 0 0 1 .62-5.46c.82-.84 1.97-1.36 3.23-1.36 1.33 0 2.53.57 3.34 1.5.05.05.1.11.14.17.64.77 1.02 1.76 1.02 2.83ZM19.7 19.68l-2.38-2.38M19.68 17.32 17.3 19.7",
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
    d: "M21.98 15.67c-.04-.06-.09-.12-.14-.17-.81-.93-2.01-1.5-3.34-1.5-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.23.38.52.73.86 1.02.05.05.1.09.16.14h.01A4.35 4.35 0 0 0 18.5 23c1.64 0 3.07-.88 3.85-2.18.23-.39.41-.82.52-1.27a4.417 4.417 0 0 0-.89-3.88Zm-1.75 4.54c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.66-.66-.69.69c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.69-.69-.66-.66a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.66.66.63-.63c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.63.63.66.66c.3.29.3.76 0 1.06Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M22 7.81v7.89c0-.01-.01-.02-.02-.03-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14h.01c.01.01.02.02.03.02h-7.9C4.17 22 2 19.83 2 16.19V7.81c0-.51.04-1 .13-1.45C2.64 3.61 4.67 2.01 7.77 2h8.46c3.1.01 5.13 1.61 5.64 4.36.09.45.13.94.13 1.45Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 7.81v.05H2v-.05c0-.51.04-1 .13-1.45h5.64V2h1.5v4.36h5.46V2h1.5v4.36h5.64c.09.45.13.94.13 1.45Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 9v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.81-.93-2.01-1.5-3.34-1.5-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.23.38.52.73.86 1.02.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7ZM2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M23 18.5c0 .36-.04.71-.13 1.05-.11.45-.29.88-.52 1.27A4.487 4.487 0 0 1 18.5 23a4.35 4.35 0 0 1-2.82-1.02h-.01c-.06-.05-.11-.09-.16-.14-.34-.29-.63-.64-.86-1.02a4.5 4.5 0 0 1 .62-5.46c.82-.84 1.97-1.36 3.23-1.36 1.33 0 2.53.57 3.34 1.5.05.05.1.11.14.17.64.77 1.02 1.76 1.02 2.83ZM19.7 19.68l-2.38-2.38M19.68 17.32 17.3 19.7",
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
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 .25 0 .5-.02.74-.03.32-.25.58-.56.66a.742.742 0 0 1-.81-.31.874.874 0 0 1-.08-.1c-.69-.79-1.7-1.24-2.77-1.24a3.741 3.741 0 0 0-3.21 5.68c.19.32.43.6.7.84l.12.11c.23.19.34.52.25.81a.75.75 0 0 1-.63.54c-.23.02-.49.02-.74.02Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h5.03c-.01-.01-.02-.03-.03-.04-.5-.83-.76-1.76-.76-2.71 0-1.38.53-2.68 1.48-3.66a5.29 5.29 0 0 1 3.77-1.59c.99 0 1.94.27 2.75.78V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.48 7.86H2.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.96a.749.749 0 1 1 0 1.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.52 7.72c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.86c0 .41-.34.75-.75.75ZM15.48 7.27c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.41c0 .42-.33.75-.75.75ZM18.498 23.75c-1.18 0-2.33-.4-3.23-1.14-.03-.02-.06-.04-.08-.06-.09-.08-.15-.12-.2-.18-.35-.3-.69-.7-.97-1.16-.5-.83-.76-1.76-.76-2.71 0-1.38.53-2.68 1.48-3.66a5.29 5.29 0 0 1 3.77-1.59c1.51 0 2.93.64 3.91 1.76.05.04.13.14.2.24.72.87 1.15 2.04 1.15 3.25 0 .44-.05.85-.15 1.24-.12.5-.32.99-.6 1.46a5.328 5.328 0 0 1-4.52 2.55Zm-2.41-2.4c.02.02.05.03.07.05.66.55 1.46.84 2.34.84 1.31 0 2.53-.7 3.21-1.82.2-.33.34-.69.43-1.06.07-.28.11-.56.11-.87 0-.86-.3-1.69-.85-2.35-.01-.01-.12-.14-.13-.16-.69-.79-1.7-1.24-2.77-1.24a3.741 3.741 0 0 0-3.21 5.68c.19.32.43.6.7.84l.1.09Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.698 20.428c-.19 0-.38-.07-.53-.22l-2.38-2.38a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.38 2.38c.29.29.29.77 0 1.06-.14.14-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.302 20.452c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.38-2.38c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.38 2.38c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 9v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.81-.93-2.01-1.5-3.34-1.5-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.23.38.52.73.86 1.02.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7Z",
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
    d: "M2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"
  })), /*#__PURE__*/React.createElement(Path, {
    d: "M23 18.5c0 .36-.04.71-.13 1.05-.11.45-.29.88-.52 1.27A4.487 4.487 0 0 1 18.5 23a4.35 4.35 0 0 1-2.82-1.02h-.01c-.06-.05-.11-.09-.16-.14-.34-.29-.63-.64-.86-1.02a4.5 4.5 0 0 1 .62-5.46c.82-.84 1.97-1.36 3.23-1.36 1.33 0 2.53.57 3.34 1.5.05.05.1.11.14.17.64.77 1.02 1.76 1.02 2.83Z",
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
    d: "m19.7 19.68-2.38-2.38M19.68 17.32 17.3 19.7"
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

var VideoRemove = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
VideoRemove.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
VideoRemove.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
VideoRemove.displayName = 'VideoRemove';

export { VideoRemove as default };