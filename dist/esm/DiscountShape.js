import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m21.529 10.869-1.52-1.52c-.26-.26-.47-.77-.47-1.13v-2.16c0-.88-.72-1.6-1.6-1.6h-2.15c-.36 0-.87-.21-1.13-.47l-1.52-1.52c-.62-.62-1.64-.62-2.26 0l-1.54 1.52c-.25.26-.76.47-1.13.47h-2.15c-.88 0-1.6.72-1.6 1.6v2.15c0 .36-.21.87-.47 1.13l-1.52 1.52c-.62.62-.62 1.64 0 2.26l1.52 1.52c.26.26.47.77.47 1.13v2.15c0 .88.72 1.6 1.6 1.6h2.15c.36 0 .87.21 1.13.47l1.52 1.52c.62.62 1.64.62 2.26 0l1.52-1.52c.26-.26.77-.47 1.13-.47h2.15c.88 0 1.6-.72 1.6-1.6v-2.15c0-.36.21-.87.47-1.13l1.52-1.52c.65-.61.65-1.63.02-2.25Zm-13.53-1.87c0-.55.45-1 1-1s1 .45 1 1-.44 1-1 1c-.55 0-1-.45-1-1Zm1.53 6.53c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6Zm5.47.47c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m14.659 20.01-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47h-2.15c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.36-.21-.87-.47-1.13l-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6M9.34 3.989l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6M9 15l6-6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.495 14.5h.009M9.495 9.5h.008",
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
    d: "m3.989 14.658-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13v-2.15c0-.88.72-1.6 1.6-1.6h2.15c.36 0 .87-.21 1.13-.47l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6h-2.15c-.36 0-.87.21-1.13.47l-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47h-2.15c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.37-.21-.88-.47-1.13Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.998 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1ZM9.01 10C8.45 10 8 9.55 8 9s.45-1 1-1 1 .45 1 1-.44 1-.99 1ZM9.001 15.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m3.989 14.66-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6h2.15c.36 0 .87-.21 1.13-.47l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6h-2.15c-.36 0-.87.21-1.13.47l-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47h-2.15c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.37-.21-.88-.47-1.13ZM9 15l6-6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.495 14.5h.009M9.495 9.5h.008",
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
    d: "M12 22.751c-.63 0-1.22-.24-1.66-.69l-1.52-1.52c-.12-.12-.44-.25-.6-.25H6.06c-1.3 0-2.35-1.05-2.35-2.35v-2.16c0-.16-.13-.48-.25-.6l-1.52-1.52c-.44-.44-.69-1.03-.69-1.66 0-.63.24-1.22.69-1.66l1.52-1.52c.12-.12.25-.44.25-.6v-2.16c0-1.3 1.05-2.35 2.35-2.35h2.16c.16 0 .48-.13.6-.25l1.52-1.52c.88-.88 2.44-.88 3.32 0l1.52 1.52c.12.12.44.25.6.25h2.16c1.3 0 2.35 1.05 2.35 2.35v2.16c0 .16.13.48.25.6l1.52 1.52c.44.44.69 1.03.69 1.66 0 .63-.24 1.22-.69 1.66l-1.52 1.52c-.12.12-.25.44-.25.6v2.16c0 1.3-1.05 2.35-2.35 2.35h-2.16c-.16 0-.48.13-.6.25l-1.52 1.52c-.44.45-1.03.69-1.66.69Zm-7.48-8.63c.4.4.69 1.1.69 1.66v2.16c0 .47.38.85.85.85h2.16c.56 0 1.26.29 1.66.69l1.52 1.52c.32.32.88.32 1.2 0l1.52-1.52c.4-.4 1.1-.69 1.66-.69h2.16c.47 0 .85-.38.85-.85v-2.16c0-.56.29-1.26.69-1.66l1.52-1.52a.84.84 0 0 0 .25-.6.84.84 0 0 0-.25-.6l-1.52-1.52c-.4-.4-.69-1.1-.69-1.66v-2.16a.85.85 0 0 0-.85-.85h-2.16c-.56 0-1.26-.29-1.66-.69l-1.52-1.52a.87.87 0 0 0-1.2 0l-1.52 1.52c-.4.4-1.1.69-1.66.69H6.06a.85.85 0 0 0-.85.85v2.16c0 .56-.29 1.26-.69 1.66L3 11.401a.84.84 0 0 0-.25.6c0 .23.09.44.25.6l1.52 1.52Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.002 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1ZM9.01 10C8.45 10 8 9.55 8 9s.45-1 1-1 1 .45 1 1-.44 1-.99 1ZM9.001 15.751c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m3.989 14.659-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13v-2.15c0-.88.72-1.6 1.6-1.6h2.15c.36 0 .87-.21 1.13-.47l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6h-2.15c-.36 0-.87.21-1.13.47l-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47h-2.15c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.37-.21-.88-.47-1.13Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m9 15 6-6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M14.495 14.5h.009M9.495 9.5h.008",
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

var DiscountShape = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
DiscountShape.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DiscountShape.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DiscountShape.displayName = 'DiscountShape';

export { DiscountShape as default };
