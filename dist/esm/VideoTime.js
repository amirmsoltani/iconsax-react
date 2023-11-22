import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.98 15.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5c0 1.41.64 2.66 1.65 3.48.77.64 1.77 1.02 2.85 1.02 1.14 0 2.17-.43 2.97-1.12A4.52 4.52 0 0 0 23 18.5c0-1.08-.38-2.08-1.02-2.85Zm-2.45 3.13c0 .26-.14.51-.36.64l-1.41.84c-.12.07-.25.11-.39.11-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l1.04-.62V17.1c0-.41.34-.75.75-.75s.75.34.75.75v1.68ZM14.73 5.86V2.5c0-.28-.22-.5-.5-.5H9.77c-.28 0-.5.22-.5.5v3.36c0 .28.22.5.5.5h4.46c.28 0 .5-.22.5-.5ZM7.249 2.02c-2.56.16-4.31 1.48-4.96 3.68-.1.33.14.66.48.66h4.5c.28 0 .5-.22.5-.5V2.52a.5.5 0 0 0-.52-.5ZM16.75 2.009c2.56.16 4.31 1.48 4.96 3.68.1.33-.14.66-.48.66h-4.5c-.28 0-.5-.22-.5-.5v-3.34a.5.5 0 0 1 .52-.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 8.36v4.38c0 .37-.39.61-.72.44a6.013 6.013 0 0 0-7.08 1.13 5.94 5.94 0 0 0-1.7 4.19c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H7.81C4.6 22 2 19.4 2 16.19V8.36c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7v-1.97M2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M23 18.5c0 1.35-.6 2.55-1.53 3.38-.8.69-1.83 1.12-2.97 1.12-1.08 0-2.08-.38-2.85-1.02A4.46 4.46 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.779 17.09v1.69l-1.4.84",
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
    d: "M21.98 15.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5c0 1.41.64 2.66 1.65 3.48.77.64 1.77 1.02 2.85 1.02 1.14 0 2.17-.43 2.97-1.12A4.52 4.52 0 0 0 23 18.5c0-1.08-.38-2.08-1.02-2.85Zm-2.45 3.13c0 .26-.14.51-.36.64l-1.41.84c-.12.07-.25.11-.39.11-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l1.04-.62V17.1c0-.41.34-.75.75-.75s.75.34.75.75v1.68Z",
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
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 9v6c0 .22 0 .44-.02.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5c0 1.41.64 2.66 1.65 3.48-.21.02-.43.02-.65.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7ZM2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M23 18.5c0 1.35-.6 2.55-1.53 3.38-.8.69-1.83 1.12-2.97 1.12-1.08 0-2.08-.38-2.85-1.02A4.46 4.46 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.78 17.09v1.69l-1.4.84",
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
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 .24 0 .49-.02.72-.03.3-.24.56-.53.65a.744.744 0 0 1-.8-.25 3.716 3.716 0 0 0-2.9-1.37c-.85 0-1.68.29-2.34.82-.9.71-1.41 1.77-1.41 2.93 0 1.13.5 2.19 1.37 2.9.24.19.33.51.25.8-.09.29-.34.5-.65.53-.23.02-.48.02-.72.02Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h5.02c-.5-.81-.77-1.76-.77-2.75 0-1.62.72-3.11 1.98-4.1 1.68-1.36 4.23-1.48 6.02-.38V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.48 7.86H2.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.96a.749.749 0 1 1 0 1.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.52 7.72c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.86c0 .41-.34.75-.75.75ZM15.48 7.27c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.41c0 .42-.33.75-.75.75ZM18.5 23.75c-1.22 0-2.4-.42-3.33-1.19a5.2 5.2 0 0 1-1.92-4.06c0-1.62.72-3.11 1.98-4.1.92-.74 2.08-1.15 3.27-1.15 1.59 0 3.07.7 4.06 1.93.76.92 1.19 2.1 1.19 3.32 0 1.49-.65 2.93-1.78 3.94-.98.85-2.21 1.31-3.47 1.31Zm0-9c-.85 0-1.68.29-2.34.82-.9.71-1.41 1.77-1.41 2.93 0 1.13.5 2.19 1.37 2.9 1.36 1.13 3.47 1.12 4.86-.09a3.81 3.81 0 0 0 1.27-2.81c0-.87-.3-1.71-.85-2.37a3.709 3.709 0 0 0-2.9-1.38Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.379 20.38c-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l1.04-.62v-1.26c0-.41.34-.75.75-.75s.75.34.75.75v1.69c0 .26-.14.51-.36.64l-1.41.84a.94.94 0 0 1-.39.1Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 9v6c0 .22 0 .44-.02.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5c0 1.41.64 2.66 1.65 3.48-.21.02-.43.02-.65.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7Z",
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
    d: "M23 18.5c0 1.35-.6 2.55-1.53 3.38-.8.69-1.83 1.12-2.97 1.12-1.08 0-2.08-.38-2.85-1.02A4.46 4.46 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M18.779 17.09v1.69l-1.4.84",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
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

var VideoTime = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
VideoTime.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
VideoTime.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
VideoTime.displayName = 'VideoTime';

export { VideoTime as default };
