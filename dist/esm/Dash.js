import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06L7.12 3.5z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12.41 10.23H4.7c-1.08 0-2.02.74-2.29 1.78l-.25 1.02c-.09.37.19.73.57.73h7.71c1.08 0 2.02-.74 2.29-1.78l.25-1.02c.1-.37-.19-.73-.57-.73z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.01 20.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06L7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5h-2.56",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.5 10.5H4.31c-.92 0-1.72.62-1.94 1.51L2 13.5h7.19c.92 0 1.72-.62 1.94-1.51l.37-1.49Z",
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
    opacity: ".4",
    d: "M7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06L7.12 3.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.41 10.23H4.7c-1.08 0-2.02.74-2.29 1.78l-.25 1.02c-.09.37.19.73.57.73h7.71c1.08 0 2.02-.74 2.29-1.78l.25-1.02c.1-.37-.19-.73-.57-.73Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7.1 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.9L5 16.2h7.4c3.6 0 5.3-2.2 5.3-5.3v-.2c0-1.8-.8-3-3-3H6.1l1-4.2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.5 10.5H4.3c-.9 0-1.7.6-1.9 1.5L2 13.5h7.2c.9 0 1.7-.6 1.9-1.5l.4-1.5Z",
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
    d: "M13.5 21.25H3.94c-.23 0-.45-.11-.59-.29-.14-.18-.19-.42-.14-.64l1.06-4.25A.75.75 0 0 1 5 15.5h7.44c2.9 0 4.56-1.66 4.56-4.56v-.19c0-1.6-.65-2.25-2.25-2.25H6.06a.754.754 0 0 1-.73-.93l1.06-4.25a.75.75 0 0 1 .73-.57H16c4.16 0 6.75 2.59 6.75 6.75V12c0 5.71-3.54 9.25-9.25 9.25Zm-8.6-1.5h8.6c4.85 0 7.75-2.9 7.75-7.75V9.5c0-3.34-1.91-5.25-5.25-5.25H7.71L7.02 7h7.73c2.42 0 3.75 1.33 3.75 3.75v.19c0 3.74-2.32 6.06-6.06 6.06H5.59l-.69 2.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.19 14.252H2c-.23 0-.45-.11-.59-.29-.14-.18-.19-.42-.14-.64l.37-1.48a2.74 2.74 0 0 1 2.67-2.08h7.19c.23 0 .45.11.59.29.14.18.19.42.14.64l-.37 1.48a2.76 2.76 0 0 1-2.67 2.08Zm-6.23-1.5h6.23c.57 0 1.07-.39 1.21-.95l.14-.55H4.31c-.57 0-1.07.39-1.21.95l-.14.55Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7.12 3.5H16c4 0 6 2.5 6 6V12c0 5-3 8.5-8.5 8.5H3.94L5 16.25h7.44c3.56 0 5.31-2.25 5.31-5.31v-.19c0-1.75-.75-3-3-3H6.06L7.12 3.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M11.5 10.5H4.31c-.92 0-1.72.62-1.94 1.51L2 13.5h7.19c.92 0 1.72-.62 1.94-1.51l.37-1.49Z",
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

var Dash = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Dash.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Dash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Dash.displayName = 'Dash';

export { Dash as default };