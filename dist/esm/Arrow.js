import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 14.75c-.41 0-.75-.34-.75-.75v-3c0-4.27 3.48-7.75 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-3.45 0-6.25 2.8-6.25 6.25v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c4.27 0 7.75 3.48 7.75 7.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.001 6.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM20.001 6.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22v-2M12 18v-2M12 14v-3c0-3.87 3.13-7 7-7h3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.45 5.602a6.973 6.973 0 0 1 2.55 5.4v3M2 4h3M4 2 2 4l2 2M20 2l2 2-2 2",
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
    d: "M12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-4.27 3.48-7.75 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-3.45 0-6.25 2.8-6.25 6.25v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c4.27 0 7.75 3.48 7.75 7.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.001 6.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM20.001 6.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22v-2M12 18v-2M12 14v-3c0-3.87 3.13-7 7-7h3M2 4h3c3.87 0 7 3.13 7 7v3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 2 2 4l2 2M20 2l2 2-2 2",
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
    d: "M12 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 14.75c-.41 0-.75-.34-.75-.75v-3c0-4.27 3.48-7.75 7.75-7.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-3.45 0-6.25 2.8-6.25 6.25v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 14.75c-.41 0-.75-.34-.75-.75v-3c0-3.45-2.8-6.25-6.25-6.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c4.27 0 7.75 3.48 7.75 7.75v3c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.001 6.751c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM20.001 6.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 22v-2M12 18v-2",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 14v-3c0-3.87 3.13-7 7-7h3M2 4h3c3.87 0 7 3.13 7 7v3"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M4 2L2 4l2 2M20 2l2 2-2 2"
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

var Arrow = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Arrow.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Arrow.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Arrow.displayName = 'Arrow';

export { Arrow as default };