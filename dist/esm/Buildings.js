import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5 8c-1.66 0-3 1.34-3 3v8c0 1.66 1.34 3 3 3h1.5c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2H5Zm1 9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4ZM19 2h-6c-1.66 0-3 1.34-3 3v14c0 1.66 1.34 3 3 3h.5c.28 0 .5-.22.5-.5V18c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3.5c0 .28.22.5.5.5h.5c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3Zm-4.25 11c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5Zm4 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 11c0-2 1-3 3-3h5v11c0 2 1 3 3 3H5c-2 0-3-1-3-3v-4M10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2h3.11ZM14 8v5M18 8v5M17 17h-2c-.55 0-1 .45-1 1v4h4v-4c0-.55-.45-1-1-1ZM6 13v4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 19V5c0-2 1-3 3-3h6c2 0 3 1 3 3v14c0 2-1 3-3 3h-6c-2 0-3-1-3-3Z",
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
    opacity: ".6",
    d: "M10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2h3.11Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 19V8H5c-2 0-3 1-3 3v8c0 2 1 3 3 3h8c-2 0-3-1-3-3Zm-3.25-2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M14 22h-1c-2 0-3-1-3-3V5c0-2 1-3 3-3h6c2 0 3 1 3 3v14c0 2-1 3-3 3h-1",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 18v4h-4v-4c0-.55.45-1 1-1h2c.55 0 1 .45 1 1ZM14 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM18 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M13 22H5c-2 0-3-1-3-3v-8c0-2 1-3 3-3h5v11c0 2 1 3 3 3ZM10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2h3.11ZM14 8v5M18 8v5M17 17h-2c-.55 0-1 .45-1 1v4h4v-4c0-.55-.45-1-1-1ZM6 13v4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 19V5c0-2 1-3 3-3h6c2 0 3 1 3 3v14c0 2-1 3-3 3h-6c-2 0-3-1-3-3Z",
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
    d: "M13 22.75H5c-2.42 0-3.75-1.33-3.75-3.75v-8c0-2.42 1.33-3.75 3.75-3.75h5c.41 0 .75.34.75.75v11c0 1.58.67 2.25 2.25 2.25.41 0 .75.34.75.75s-.34.75-.75.75Zm-8-14c-1.58 0-2.25.67-2.25 2.25v8c0 1.58.67 2.25 2.25 2.25h4.8c-.36-.59-.55-1.34-.55-2.25V8.75H5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 8.75H5c-.41 0-.75-.34-.75-.75V6c0-1.52 1.23-2.75 2.75-2.75h3.11c.23 0 .45.11.59.29.14.19.19.43.13.65-.06.22-.08.47-.08.81v3c0 .41-.34.75-.75.75Zm-4.25-1.5h3.5v-2.5H7c-.69 0-1.25.56-1.25 1.25v1.25ZM14 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM18 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM18 22.75h-4c-.41 0-.75-.34-.75-.75v-4c0-.96.79-1.75 1.75-1.75h2c.96 0 1.75.79 1.75 1.75v4c0 .41-.34.75-.75.75Zm-3.25-1.5h2.5V18c0-.14-.11-.25-.25-.25h-2c-.14 0-.25.11-.25.25v3.25ZM6 17.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19 22.75h-6c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h6c2.42 0 3.75 1.33 3.75 3.75v14c0 2.42-1.33 3.75-3.75 3.75Zm-6-20c-1.58 0-2.25.67-2.25 2.25v14c0 1.58.67 2.25 2.25 2.25h6c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25h-6Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M13 22H5c-2 0-3-1-3-3v-8c0-2 1-3 3-3h5v11c0 2 1 3 3 3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2h3.11ZM14 8v5M18 8v5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17 17h-2c-.55 0-1 .45-1 1v4h4v-4c0-.55-.45-1-1-1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6 13v4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 19V5c0-2 1-3 3-3h6c2 0 3 1 3 3v14c0 2-1 3-3 3h-6c-2 0-3-1-3-3Z",
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

var Buildings = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Buildings.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Buildings.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Buildings.displayName = 'Buildings';

export { Buildings as default };
