import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.9 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.35 5.25 5.25V9c0 .41-.34.75-.75.75ZM17.5 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c2.07 0 3.75-1.68 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.9-2.36 5.25-5.25 5.25ZM9 22.75H6.5c-2.89 0-5.25-2.35-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 5.25H7c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2c1.14 0 1.75-.6 1.75-1.75V7c0-1.15-.61-1.75-1.75-1.75ZM17 5.25h-2c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2c1.14 0 1.75-.6 1.75-1.75V7c0-1.15-.61-1.75-1.75-1.75ZM9 13.25H7c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2c1.14 0 1.75-.6 1.75-1.75v-2c0-1.15-.61-1.75-1.75-1.75ZM17 13.25h-2c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2c1.14 0 1.75-.6 1.75-1.75v-2c0-1.15-.61-1.75-1.75-1.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M10.5 7v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5V7C5.5 6 6 5.5 7 5.5h2c1 0 1.5.5 1.5 1.5ZM13.5 9V7c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5v2c0 1-.5 1.5-1.5 1.5M7 13.5h2c1 0 1.5.5 1.5 1.5v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5M18.5 15v2c0 1-.5 1.5-1.5 1.5h-2c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5Z",
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
    d: "M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.9 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.35 5.25 5.25V9c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M17.5 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c2.07 0 3.75-1.68 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.9-2.36 5.25-5.25 5.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 22.75H6.5c-2.89 0-5.25-2.35-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75ZM9 5.25H7c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2c1.14 0 1.75-.6 1.75-1.75V7c0-1.15-.61-1.75-1.75-1.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M17 5.25h-2c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2c1.14 0 1.75-.6 1.75-1.75V7c0-1.15-.61-1.75-1.75-1.75ZM9 13.25H7c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2c1.14 0 1.75-.6 1.75-1.75v-2c0-1.15-.61-1.75-1.75-1.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 13.25h-2c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2c1.14 0 1.75-.6 1.75-1.75v-2c0-1.15-.61-1.75-1.75-1.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M10.5 7v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5V7C5.5 6 6 5.5 7 5.5h2c1 0 1.5.5 1.5 1.5ZM18.5 7v2c0 1-.5 1.5-1.5 1.5h-2c-1 0-1.5-.5-1.5-1.5V7c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5ZM10.5 15v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5ZM18.5 15v2c0 1-.5 1.5-1.5 1.5h-2c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5Z",
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
    d: "M2 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.9 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5c-2.07 0-3.75 1.68-3.75 3.75V9c0 .41-.34.75-.75.75ZM22 9.75c-.41 0-.75-.34-.75-.75V6.5c0-2.07-1.68-3.75-3.75-3.75H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.5c2.89 0 5.25 2.35 5.25 5.25V9c0 .41-.34.75-.75.75ZM17.5 22.75H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.5c2.07 0 3.75-1.68 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.9-2.36 5.25-5.25 5.25ZM9 22.75H6.5c-2.89 0-5.25-2.35-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 2.07 1.68 3.75 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 11.25H7c-1.41 0-2.25-.84-2.25-2.25V7c0-1.41.84-2.25 2.25-2.25h2c1.41 0 2.25.84 2.25 2.25v2c0 1.41-.84 2.25-2.25 2.25Zm-2-5c-.59 0-.75.16-.75.75v2c0 .59.16.75.75.75h2c.59 0 .75-.16.75-.75V7c0-.59-.16-.75-.75-.75H7ZM17 11.25h-2c-1.41 0-2.25-.84-2.25-2.25V7c0-1.41.84-2.25 2.25-2.25h2c1.41 0 2.25.84 2.25 2.25v2c0 1.41-.84 2.25-2.25 2.25Zm-2-5c-.59 0-.75.16-.75.75v2c0 .59.16.75.75.75h2c.59 0 .75-.16.75-.75V7c0-.59-.16-.75-.75-.75h-2ZM9 19.25H7c-1.41 0-2.25-.84-2.25-2.25v-2c0-1.41.84-2.25 2.25-2.25h2c1.41 0 2.25.84 2.25 2.25v2c0 1.41-.84 2.25-2.25 2.25Zm-2-5c-.59 0-.75.16-.75.75v2c0 .59.16.75.75.75h2c.59 0 .75-.16.75-.75v-2c0-.59-.16-.75-.75-.75H7ZM17 19.25h-2c-1.41 0-2.25-.84-2.25-2.25v-2c0-1.41.84-2.25 2.25-2.25h2c1.41 0 2.25.84 2.25 2.25v2c0 1.41-.84 2.25-2.25 2.25Zm-2-5c-.59 0-.75.16-.75.75v2c0 .59.16.75.75.75h2c.59 0 .75-.16.75-.75v-2c0-.59-.16-.75-.75-.75h-2Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M10.5 7v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5V7C5.5 6 6 5.5 7 5.5h2c1 0 1.5.5 1.5 1.5ZM18.5 7v2c0 1-.5 1.5-1.5 1.5h-2c-1 0-1.5-.5-1.5-1.5V7c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5ZM10.5 15v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5ZM18.5 15v2c0 1-.5 1.5-1.5 1.5h-2c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5Z",
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

var ScanBarcode = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ScanBarcode.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ScanBarcode.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ScanBarcode.displayName = 'ScanBarcode';

export { ScanBarcode as default };