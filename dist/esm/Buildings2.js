import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10.6 4.15c0 .19-.16.35-.35.35H9.12C6.96 4.5 5.2 6.26 5.2 8.42v9.23c0 .19-.16.35-.35.35h-.7C2.96 18 2 17.04 2 15.85V4.15C2 2.96 2.96 2 4.15 2h4.3c1.19 0 2.15.96 2.15 2.15ZM22 4.15v11.7c0 1.19-.96 2.15-2.15 2.15h-.63c-.19 0-.35-.16-.35-.35V8.42c0-2.16-1.76-3.92-3.92-3.92h-1.2c-.19 0-.35-.16-.35-.35 0-1.19.96-2.15 2.15-2.15h4.3C21.04 2 22 2.96 22 4.15Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.95 6H9.12C7.78 6 6.7 7.08 6.7 8.42v11.16C6.7 20.92 7.78 22 9.12 22h1.63c.28 0 .5-.22.5-.5V19c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .28.22.5.5.5h1.71c1.33 0 2.41-1.08 2.41-2.41V8.42c0-1.34-1.08-2.42-2.42-2.42ZM14 14.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-3h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6M6.7 18H4.15C2.72 18 2 17.28 2 15.85V8.04",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4M10 14h4M12 22v-3",
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
    d: "M10.6 4.15V6H9.12C7.51 6 6.7 6.81 6.7 8.42V18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48V8.42c0-1.61-.8-2.42-2.41-2.42H13.4V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15ZM14 11.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 14.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM12.75 19v3h-1.5v-3c0-.41.34-.75.75-.75s.75.34.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.7 18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4M10 14h4M12 22v-3",
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
    d: "M6.7 18.75H4.15c-1.84 0-2.9-1.06-2.9-2.9V4.15c0-1.84 1.06-2.9 2.9-2.9h4.3c1.84 0 2.9 1.06 2.9 2.9V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.15c0-1.02-.38-1.4-1.4-1.4h-4.3c-1.02 0-1.4.38-1.4 1.4v11.7c0 1.02.38 1.4 1.4 1.4H6.7c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.96 22.75H9.12c-2.01 0-3.17-1.16-3.17-3.17V8.42c0-2.01 1.16-3.17 3.17-3.17h5.84c2.01 0 3.16 1.16 3.16 3.17v11.16c0 2.01-1.15 3.17-3.16 3.17Zm-5.84-16c-1.2 0-1.67.47-1.67 1.67v11.16c0 1.2.47 1.67 1.67 1.67h5.84c1.19 0 1.66-.47 1.66-1.67V8.42c0-1.2-.47-1.67-1.66-1.67H9.12Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.85 18.75h-2.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.48c1.02 0 1.4-.38 1.4-1.4V4.15c0-1.02-.38-1.4-1.4-1.4h-4.3c-1.02 0-1.4.38-1.4 1.4V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.15c0-1.84 1.06-2.9 2.9-2.9h4.3c1.84 0 2.9 1.06 2.9 2.9v11.7c0 1.84-1.06 2.9-2.9 2.9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14 11.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 14.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6.7 18H4.15C2.72 18 2 17.28 2 15.85V4.15C2 2.72 2.72 2 4.15 2h4.3c1.43 0 2.15.72 2.15 2.15V6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.37 8.42v11.16c0 1.61-.8 2.42-2.41 2.42H9.12c-1.61 0-2.42-.81-2.42-2.42V8.42C6.7 6.81 7.51 6 9.12 6h5.84c1.61 0 2.41.81 2.41 2.42Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M13.4 6V4.15c0-1.43.72-2.15 2.15-2.15h4.3C21.28 2 22 2.72 22 4.15v11.7c0 1.43-.72 2.15-2.15 2.15h-2.48M10 11h4M10 14h4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22v-3",
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

var Buildings2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Buildings2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Buildings2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Buildings2.displayName = 'Buildings2';

export { Buildings2 as default };
