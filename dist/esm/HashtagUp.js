import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10.08 11.832h1.65l.19-1.66h-1.65l-.19 1.66Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.97 7.21c-.2-3.08-2.1-4.98-5.18-5.18-.2-.02-.4-.03-.6-.03H7.81c-.2 0-.4.01-.6.03-3.08.2-4.98 2.1-5.18 5.18-.02.2-.03.4-.03.6v8.38c0 .2.01.4.03.6.2 3.08 2.1 4.98 5.18 5.18.2.02.4.03.6.03h5.69c.55 0 1-.45 1-1v-2.97a3.53 3.53 0 0 1 3.53-3.53H21c.55 0 1-.45 1-1V7.81c0-.2-.01-.4-.03-.6ZM16 10.17h-2.57l-.19 1.66h2.23a.749.749 0 1 1 0 1.5h-2.39l-.28 2.49c-.04.38-.37.67-.75.67-.02 0-.05 0-.08-.01a.74.74 0 0 1-.66-.83l.26-2.32H9.92l-.28 2.49c-.04.38-.37.67-.74.67-.03 0-.06 0-.09-.01a.74.74 0 0 1-.66-.83l.26-2.32H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.57l.19-1.66H6.53a.749.749 0 1 1 0-1.5h2.39l.28-2.49c.05-.41.42-.71.83-.66.41.04.71.41.66.83l-.26 2.32h1.65l.28-2.49c.05-.41.42-.71.83-.66.41.04.71.41.66.83l-.26 2.32H16c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.22 3.31a.62.62 0 0 1-.44.18.62.62 0 0 1-.44-.18l-.18-.18v2.24c0 .35-.28.63-.63.63s-.63-.28-.63-.63v-2.24l-.18.18c-.24.24-.64.24-.88 0a.628.628 0 0 1 0-.88l1.25-1.25c.05-.05.12-.09.19-.12.02-.01.04-.01.06-.02.05-.02.1-.03.16-.03h.06c.07 0 .13.01.2.04h.02c.07.03.13.07.18.12.01.01.01.01.02.01l1.25 1.25c.24.24.24.64-.01.88Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 13.04V15c0 5 2 7 7 7h6M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9M19 22v-6l-2 2M19 16l2 2M9.95 6.262l-1.05 9.47M13.11 6.262l-1.05 9.47M6.53 9.422H16M6 12.578h9.47",
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
    d: "M20.97 16h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03Zm.22 3.31a.62.62 0 0 1-.44.18.62.62 0 0 1-.44-.18l-.18-.18v2.24c0 .35-.28.63-.63.63s-.63-.28-.63-.63v-2.24l-.18.18c-.24.24-.64.24-.88 0a.628.628 0 0 1 0-.88l1.25-1.25c.05-.05.12-.09.19-.12.02-.01.04-.01.06-.02.05-.02.1-.03.16-.03h.06c.07 0 .13.01.2.04h.02c.07.03.13.07.18.12.01.01.01.01.02.01l1.25 1.25c.24.24.24.64-.01.88Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M16 20.97v-2.94c0-1.27.76-2.03 2.03-2.03h2.94c.4 0 .74.08 1.03.22V7.81C22 4.17 19.83 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22H16.22c-.14-.29-.22-.63-.22-1.03Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 10.171c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.41l.26-2.32a.751.751 0 0 0-.66-.83.758.758 0 0 0-.83.66l-.28 2.49h-1.65l.26-2.32a.751.751 0 0 0-.66-.83.751.751 0 0 0-.83.66l-.28 2.49h-2.4c-.41 0-.75.34-.75.75s.34.75.75.75h2.23l-.18 1.66H6c-.41 0-.75.34-.75.75s.34.75.75.75h2.41l-.26 2.32c-.05.41.25.78.66.83h.08c.38 0 .7-.28.74-.67l.28-2.49h1.65l-.26 2.32c-.05.41.25.78.66.83h.08c.38 0 .7-.28.74-.67l.28-2.49h2.4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.23l.18-1.66H16v.02Zm-4.27 1.66h-1.65l.18-1.66h1.65l-.18 1.66Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19 22v-6l-2 2M19 16l2 2M9.95 6.26 8.9 15.73M13.11 6.26l-1.05 9.47M6.53 9.42H16M6 12.58h9.47",
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
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19 22.748c-.41 0-.75-.34-.75-.75v-4.19l-.72.72c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.28.53v6c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21 18.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM8.9 16.491h-.08a.751.751 0 0 1-.66-.83l1.04-9.48c.05-.41.42-.71.83-.66.41.05.71.42.66.83l-1.05 9.47c-.04.38-.37.67-.74.67ZM12.05 16.489h-.08a.751.751 0 0 1-.66-.83l1.05-9.47c.05-.41.42-.71.83-.66.41.05.71.42.66.83l-1.05 9.47c-.04.37-.37.66-.75.66Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 10.172H6.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H16c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.47 13.328H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6",
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
    d: "M19 22v-6l-2 2M19 16l2 2"
  })), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "m9.95 6.258-1.05 9.47M13.11 6.258l-1.05 9.47M6.53 9.418H16M6 12.578h9.47"
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

var HashtagUp = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
HashtagUp.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
HashtagUp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
HashtagUp.displayName = 'HashtagUp';

export { HashtagUp as default };
