import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M16.8 9h-4.05v4.44l2.07-2.07c.15-.15.34-.22.53-.22s.38.07.53.22c.29.29.29.77 0 1.06l-3.35 3.35c-.29.29-.77.29-1.06 0l-3.35-3.35a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.07 2.07V9H7.2C4 9 2 11 2 14.2v2.59C2 20 4 22 7.2 22h9.59c3.2 0 5.2-2 5.2-5.2v-2.6C22 11 20 9 16.8 9zM12.75 2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V9h1.5V2.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M8.74 21.5c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26h-2.24M12 2v12.88M15.35 12.65L12 16l-3.35-3.35"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M16.8 9H7.2C4 9 2 11 2 14.2v2.59C2 20 4 22 7.2 22h9.59c3.2 0 5.2-2 5.2-5.2v-2.6C22 11 20 9 16.8 9z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M15.88 12.43l-3.35 3.35c-.29.29-.77.29-1.06 0l-3.35-3.35a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.07 2.07V2.75c0-.41.34-.75.75-.75s.75.34.75.75v10.69l2.07-2.07c.15-.15.34-.22.53-.22s.38.07.53.22c.3.29.3.76 0 1.06z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 2v12.88"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M15.35 12.65L12 16l-3.35-3.35"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M15.26 22.25H8.74c-4.91 0-7.01-2.1-7.01-7.01v-.13c0-4.44 1.75-6.58 5.67-6.95.4-.03.78.27.82.68.04.41-.26.78-.68.82-3.14.29-4.31 1.77-4.31 5.46v.13c0 4.07 1.44 5.51 5.51 5.51h6.52c4.07 0 5.51-1.44 5.51-5.51v-.13c0-3.71-1.19-5.19-4.39-5.46a.75.75 0 01-.68-.81c.04-.41.39-.72.81-.68 3.98.34 5.76 2.49 5.76 6.96v.13c0 4.89-2.1 6.99-7.01 6.99z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 15.63c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v12.88c0 .42-.34.75-.75.75z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 16.75c-.19 0-.38-.07-.53-.22l-3.35-3.35a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0L12 14.94l2.82-2.82c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.35 3.35c-.15.15-.34.22-.53.22z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4"
  }, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 2v12.88M15.35 12.65L12 16l-3.35-3.35"
  })));
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

var ImportCurve = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ImportCurve.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ImportCurve.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ImportCurve.displayName = 'ImportCurve';

export { ImportCurve as default };
