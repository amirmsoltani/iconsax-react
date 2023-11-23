import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 5.71v9.58c0 2.76-2.24 5-5 5H7c-.46 0-.9-.06-1.33-.18-.62-.17-.82-.96-.36-1.42L15.94 8.06c.22-.22.55-.27.86-.21.32.06.67-.03.92-.27L20.29 5c.94-.94 1.71-.63 1.71.71ZM14.64 7.36 4.17 17.83c-.48.48-1.28.36-1.6-.24-.37-.68-.57-1.47-.57-2.3V5.71c0-1.34.77-1.65 1.71-.71l2.58 2.59c.39.38 1.03.38 1.42 0L11.29 4c.39-.39 1.03-.39 1.42 0l1.94 1.94c.38.39.38 1.03-.01 1.42Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 10.99V5.71c0-1.33.77-1.65 1.71-.71L6.3 7.59c.39.39 1.03.39 1.41 0L11.29 4a.996.996 0 0 1 1.41 0l3.59 3.59c.39.39 1.03.39 1.41 0L20.29 5c.94-.94 1.71-.62 1.71.71v9.59c0 3-2 5-5 5H7c-2.76 0-5-2.24-5-5",
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
    d: "M22 5.71v9.58c0 2.76-2.24 5-5 5H7c-.46 0-.9-.06-1.33-.18-.62-.17-.82-.96-.36-1.42L15.94 8.06c.22-.22.55-.27.86-.21.32.06.67-.03.92-.27L20.29 5c.94-.94 1.71-.63 1.71.71Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M14.64 7.36 4.17 17.83c-.48.48-1.28.36-1.6-.24-.37-.68-.57-1.47-.57-2.3V5.71c0-1.34.77-1.65 1.71-.71l2.58 2.59c.39.38 1.03.38 1.42 0L11.29 4c.39-.39 1.03-.39 1.42 0l1.94 1.94c.38.39.38 1.03-.01 1.42Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.7 18.98H7.3c-.42 0-.89-.33-1.03-.73L2.13 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l3.66-2.61c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.15.38-.62.71-1.04.71ZM6.5 22h11M9.5 14h5",
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
    d: "M16.7 19.73H7.3c-.74 0-1.49-.53-1.74-1.22L1.42 6.92c-.51-1.46-.14-2.13.26-2.43.4-.3 1.15-.48 2.41.42l3.9 2.79c.12.07.23.1.31.08.09-.03.16-.11.21-.25l1.76-4.69c.53-1.4 1.31-1.61 1.73-1.61.42 0 1.2.21 1.73 1.61l1.76 4.69c.05.13.12.22.21.25s.2 0 .31-.09l3.66-2.61c1.34-.96 2.12-.77 2.55-.46.42.32.81 1.03.26 2.58l-4.04 11.31c-.25.69-1 1.22-1.74 1.22ZM2.68 5.81c.02.14.06.34.16.6L6.98 18c.04.1.22.23.32.23h9.4c.11 0 .29-.13.32-.23l4.04-11.3c.14-.38.18-.64.19-.79-.15.05-.38.16-.71.4l-3.66 2.61c-.5.35-1.09.46-1.62.3-.53-.16-.96-.58-1.18-1.15l-1.76-4.69c-.13-.35-.25-.52-.32-.6-.07.08-.19.25-.32.59L9.92 8.06c-.21.57-.64.99-1.18 1.15-.53.16-1.13.05-1.62-.3l-3.9-2.79a2.76 2.76 0 0 0-.54-.31ZM17.5 22.75h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.5 14.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.7 18.98H7.3c-.42 0-.89-.33-1.03-.73L2.13 6.67c-.59-1.66.1-2.17 1.52-1.15l3.9 2.79c.65.45 1.39.22 1.67-.51l1.76-4.69c.56-1.5 1.49-1.5 2.05 0l1.76 4.69c.28.73 1.02.96 1.66.51l3.66-2.61c1.56-1.12 2.31-.55 1.67 1.26l-4.04 11.31c-.15.38-.62.71-1.04.71Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".34",
    d: "M6.5 22h11M9.5 14h5",
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

var Crown1 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Crown1.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Crown1.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Crown1.displayName = 'Crown1';

export { Crown1 as default };
