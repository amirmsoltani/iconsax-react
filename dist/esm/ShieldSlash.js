import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.36 4.64 5.83 18.17l-1.1-.82c-.65-.49-1.18-1.55-1.18-2.37V6.89c0-1.13.86-2.37 1.91-2.77l5.5-2.06c.57-.21 1.51-.21 2.08 0l5.5 2.06c.29.11.57.29.82.52ZM20.449 14.979c0 .82-.53 1.88-1.18 2.37l-5.5 4.11c-.98.72-2.56.72-3.54 0l-1.76-1.31c-.49-.36-.54-1.08-.11-1.51l10.38-10.38c.63-.63 1.71-.18 1.71.71v6.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m7.84 20.021 1.59 1.19c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-7.44M3.41 11.04v3.52c0 1.18.78 2.73 1.73 3.44l.2.15M18.98 4.339c-.15-.09-.31-.17-.47-.24l-4.99-1.87c-.83-.31-2.19-.31-3.02 0l-5 1.88c-1.15.43-2.09 1.79-2.09 3.01M22 2 2 22",
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
    d: "M19.36 4.64 5.83 18.17l-1.1-.82c-.65-.49-1.18-1.55-1.18-2.37V6.89c0-1.13.86-2.37 1.91-2.77l5.5-2.06c.57-.21 1.51-.21 2.08 0l5.5 2.06c.29.11.57.29.82.52ZM20.45 6.888v8.09c0 .82-.53 1.88-1.18 2.37l-5.5 4.11c-.98.72-2.56.72-3.54 0l-2.69-2 12.88-12.88c.02.1.03.21.03.31Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m7.84 20.02 1.59 1.19c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12M18.98 4.34c-.15-.09-.31-.17-.47-.24l-4.99-1.87c-.83-.31-2.19-.31-3.02 0l-5 1.88c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l.2.15M22 2 2 22",
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
    d: "M12 22.761c-1.09 0-2.17-.32-3.02-.95l-1.59-1.19a.75.75 0 0 1 .9-1.2l1.59 1.19c1.15.86 3.1.86 4.25 0l4.3-3.21c.76-.57 1.42-1.9 1.42-2.84v-7.44c0-.41.34-.75.75-.75s.75.34.75.75v7.43c0 1.42-.89 3.19-2.03 4.04l-4.3 3.21c-.85.64-1.93.96-3.02.96ZM5.328 18.901a.76.76 0 0 1-.45-.15l-.2-.15c-1.14-.85-2.03-2.63-2.03-4.04v-7.44c0-1.54 1.13-3.18 2.58-3.72l4.99-1.87c.99-.37 2.55-.37 3.54 0l5 1.87c.21.08.41.18.61.3a.747.747 0 1 1-.79 1.27c-.11-.07-.22-.13-.34-.17l-5-1.87c-.66-.25-1.83-.25-2.49 0l-4.99 1.88c-.86.32-1.61 1.4-1.61 2.32v7.43c0 .95.67 2.28 1.42 2.84l.2.15c.33.25.4.72.15 1.05a.72.72 0 0 1-.59.3Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m7.84 20.021 1.59 1.19c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44v-7.44",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.98 4.339c-.15-.09-.31-.17-.47-.24l-4.99-1.87c-.83-.31-2.19-.31-3.02 0l-5 1.88c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l.2.15M22 2 2 22",
    stroke: color,
    strokeWidth: strokeWidth,
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

var ShieldSlash = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ShieldSlash.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ShieldSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ShieldSlash.displayName = 'ShieldSlash';

export { ShieldSlash as default };
