import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17.92 10.12a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63Zm1.33 4.01-2.54 2.34c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.17-1.17a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.66.66 2.01-1.85c.31-.28.78-.26 1.06.04.28.31.26.78-.04 1.06Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.58 4.02v2.22c0 .81-.5 1.82-1 2.33l-.18.16c-.14.13-.35.16-.53.1-.2-.07-.4-.12-.6-.17-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01.23.15.32.47.12.65-.07.06-.14.11-.21.16l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.63 14.75c0 .89-.24 1.73-.68 2.45a4.735 4.735 0 0 1-4.07 2.3c-.94 0-1.82-.28-2.56-.77-.62-.38-1.13-.91-1.5-1.53-.44-.72-.69-1.56-.69-2.45 0-2.62 2.13-4.75 4.75-4.75.36 0 .71.04 1.04.12a4.74 4.74 0 0 1 3.71 4.63Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.03 14.748 1.17 1.17 2.53-2.34",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.33 2h13.34c1.11 0 2.02.91 2.02 2.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02",
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
    d: "M17.92 10.12a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63Zm1.33 4.01-2.54 2.34c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.17-1.17a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.66.66 2.01-1.85c.31-.28.78-.26 1.06.04.28.31.26.78-.04 1.06Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.31 8.46c-.5-.51-.9-1.41-.9-2.02V4.12c.01-1.21.91-2.12 2-2.12Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.63 14.75c0 .89-.24 1.73-.68 2.45a4.735 4.735 0 0 1-4.07 2.3c-.94 0-1.82-.28-2.56-.77-.62-.38-1.13-.91-1.5-1.53-.44-.72-.69-1.56-.69-2.45 0-2.62 2.13-4.75 4.75-4.75.36 0 .71.04 1.04.12a4.74 4.74 0 0 1 3.71 4.63Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.03 14.75 1.17 1.17 2.53-2.34",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02Z",
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
    d: "M16.879 20.25a5.32 5.32 0 0 1-2.97-.9 5.236 5.236 0 0 1-1.73-1.77c-.52-.85-.8-1.83-.8-2.83 0-3.03 2.47-5.5 5.5-5.5.42 0 .83.05 1.22.14 2.48.55 4.28 2.8 4.28 5.36 0 1.01-.27 1.99-.79 2.84a5.514 5.514 0 0 1-4.71 2.66Zm0-9.5c-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.06.32.53.75.97 1.25 1.28.66.44 1.4.66 2.17.66 1.4 0 2.71-.74 3.43-1.94.38-.62.57-1.33.57-2.06 0-1.86-1.31-3.5-3.12-3.9-.29-.07-.58-.1-.88-.1Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.199 16.67c-.19 0-.38-.07-.53-.22l-1.17-1.17a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.66.66 2.01-1.85c.31-.28.78-.26 1.06.04s.26.78-.04 1.06l-2.54 2.34c-.14.13-.33.2-.51.2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.93 22.75c-.48 0-.96-.12-1.39-.36-.89-.5-1.42-1.4-1.42-2.41v-5.35c0-.51-.33-1.26-.65-1.65l-3.8-3.99c-.63-.65-1.12-1.74-1.12-2.54V4.12c0-1.61 1.22-2.87 2.77-2.87h13.34a2.77 2.77 0 0 1 2.77 2.77v2.22c0 1.05-.62 2.23-1.23 2.85l-1.8 1.59a.77.77 0 0 1-.67.17c-.27-.07-.56-.1-.86-.1-2.21 0-4 1.79-4 4 0 .73.2 1.44.58 2.06.32.53.75.97 1.25 1.28.22.14.36.38.36.64v.34c0 .79-.48 1.9-1.28 2.37l-1.38.89c-.44.28-.96.42-1.47.42Zm-5.6-20c-.71 0-1.27.6-1.27 1.37v2.33c0 .36.3 1.09.7 1.49l3.85 4.05c.51.63 1.02 1.69 1.02 2.64v5.35c0 .66.46.99.65 1.1.43.24.94.23 1.33-.01l1.4-.9c.27-.16.54-.67.56-1.03-.55-.41-1.03-.94-1.39-1.54-.52-.85-.8-1.83-.8-2.83a5.51 5.51 0 0 1 6.32-5.44l1.48-1.31c.34-.35.76-1.18.76-1.77V4.03c0-.7-.57-1.27-1.27-1.27H5.33v-.01Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.63 14.75c0 .89-.24 1.73-.68 2.45a4.735 4.735 0 0 1-4.07 2.3c-.94 0-1.82-.28-2.56-.77-.62-.38-1.13-.91-1.5-1.53-.44-.72-.69-1.56-.69-2.45 0-2.62 2.13-4.75 4.75-4.75.36 0 .71.04 1.04.12a4.74 4.74 0 0 1 3.71 4.63Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m15.03 14.748 1.17 1.17 2.53-2.34",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M20.69 4.02v2.22c0 .81-.51 1.82-1.01 2.33l-1.76 1.55a4.42 4.42 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53v.34c0 .61-.4 1.42-.91 1.72L12 21.7c-1.31.81-3.13-.1-3.13-1.72v-5.35c0-.71-.41-1.62-.81-2.12L4.22 8.47c-.5-.51-.91-1.42-.91-2.02V4.12C3.31 2.91 4.22 2 5.33 2h13.34c1.11 0 2.02.91 2.02 2.02Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
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

var FilterTick = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
FilterTick.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FilterTick.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
FilterTick.displayName = 'FilterTick';

export { FilterTick as default };
