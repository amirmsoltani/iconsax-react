import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.8 9.42c-.03.01-.06.01-.09.02-.08.01-.15.02-.24.03a4.16 4.16 0 0 1-1.7-.15 2.46 2.46 0 0 1-.48-.16c-.15-.06-.31-.14-.45-.22a4.483 4.483 0 0 1-1.78-1.78c-.08-.14-.16-.3-.22-.45a2.46 2.46 0 0 1-.16-.48 4.16 4.16 0 0 1-.15-1.7c.01-.09.02-.16.03-.24.01-.03.01-.06.02-.09A1 1 0 0 0 13.6 3H7.52c-.14 0-.28.01-.41.02-.12.01-.23.02-.35.04-.12.01-.24.03-.35.05-2.41.35-3.95 1.88-4.3 4.3-.02.11-.04.23-.05.35-.02.12-.03.23-.04.35-.01.13-.02.27-.02.41v7.96c0 .14.01.28.02.41.01.12.02.23.04.35.01.12.03.24.05.35.35 2.42 1.89 3.95 4.3 4.3.11.02.23.04.35.05.12.02.23.03.35.04.13.01.27.02.41.02h7.96c.14 0 .28-.01.41-.02.12-.01.23-.02.35-.04.12-.01.24-.03.35-.05 2.41-.35 3.95-1.88 4.3-4.3.02-.11.04-.23.05-.35.02-.12.03-.23.04-.35.01-.13.02-.27.02-.41V10.4a1 1 0 0 0-1.2-.98Zm-7.52 5.83c-.53 1.67-2.35 2.57-2.98 2.57-.64 0-2.43-.88-2.97-2.57h-.01c-.35-1.11.05-2.56 1.32-2.97.58-.19 1.2-.08 1.65.27.45-.35 1.08-.46 1.67-.27 1.27.41 1.67 1.86 1.32 2.97Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3c0-.36-.06-.7-.18-1.01M6.81 14.932c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54-.01-2.44-.9-3.01-2.66Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 14.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5M14 2H9C4 2 2 4 2 9v2",
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
    d: "M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M19 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.72.19-1.39.49-2H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V9.01c-.6.3-1.27.49-1.99.49Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.9 12.362c-.57-.18-1.18-.08-1.61.26-.44-.34-1.04-.44-1.6-.26-1.23.4-1.62 1.8-1.27 2.88.53 1.64 2.26 2.49 2.88 2.49.61 0 2.37-.87 2.88-2.49.35-1.08-.05-2.48-1.28-2.88Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.81 14.93c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54-.01-2.44-.9-3.01-2.66Z",
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
    d: "M19 8.75c-2.07 0-3.75-1.68-3.75-3.75 0-2.07 1.68-3.75 3.75-3.75 2.07 0 3.75 1.68 3.75 3.75 0 2.07-1.68 3.75-3.75 3.75Zm0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h5c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.81 18.328c-.92 0-3.06-1.12-3.72-3.18-.45-1.41.07-3.26 1.7-3.79.7-.23 1.43-.12 2.01.25.57-.37 1.32-.48 2.02-.25 1.63.53 2.16 2.38 1.7 3.79-.65 2.1-2.89 3.18-3.71 3.18Zm-2.29-3.63c.46 1.45 2.02 2.11 2.3 2.14.32-.03 1.85-.77 2.27-2.13.23-.73 0-1.67-.73-1.91-.31-.1-.73-.04-.93.25-.14.21-.36.33-.61.34-.24 0-.48-.11-.62-.31-.24-.33-.66-.38-.95-.28-.72.23-.96 1.17-.73 1.9Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6.81 14.932c-.35-1.1.06-2.47 1.22-2.84.61-.2 1.36-.03 1.79.56.4-.61 1.18-.75 1.78-.56 1.16.37 1.57 1.74 1.22 2.84-.55 1.75-2.47 2.66-3 2.66-.54-.01-2.44-.9-3.01-2.66Z",
    stroke: color,
    strokeWidth: strokeWidth,
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

var NotificationFavorite = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
NotificationFavorite.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
NotificationFavorite.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
NotificationFavorite.displayName = 'NotificationFavorite';

export { NotificationFavorite as default };