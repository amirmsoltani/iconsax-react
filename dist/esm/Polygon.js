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
    d: "M21.38 11.448l-4.5-2.6a.77.77 0 00-.75 0l-4.5 2.6s0 .01-.01.01l-4.12 2.38-3.75-2.17v-4.33l3.75-2.17 3.75 2.17v1.14c0 .41.34.75.75.75s.75-.34.75-.75v-1.58c0-.27-.14-.52-.38-.65l-4.5-2.6a.77.77 0 00-.75 0l-4.5 2.6c-.23.13-.38.38-.38.65v5.2c0 .27.14.52.38.65l4.5 2.6c.12.07.25.1.38.1s.26-.03.38-.1l4.5-2.6s0-.01.01-.01l4.12-2.38 3.75 2.17v4.33l-3.75 2.17-3.75-2.17v-1.22c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.65c0 .27.14.52.38.65l4.5 2.6c.12.07.25.1.38.1s.26-.03.38-.1l4.5-2.6c.23-.13.38-.38.38-.65v-5.2a.84.84 0 00-.4-.64z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M4.5 8.35v2.31c0 .36.19.69.5.87l2 1.15c.31.18.69.18 1 0l2-1.15c.31-.18.5-.51.5-.87V8.35c0-.36-.19-.69-.5-.87L8 6.33a.993.993 0 00-1 0L5 7.48c-.31.18-.5.51-.5.87zM13.5 13.55v2.31c0 .36.19.69.5.87l2 1.15c.31.18.69.18 1 0l2-1.15c.31-.18.5-.51.5-.87v-2.31c0-.36-.19-.69-.5-.87l-2-1.15a.993.993 0 00-1 0l-2 1.15c-.31.18-.5.51-.5.87z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m12 12.1-4.5 2.6L3 12.1V6.9l4.5-2.6L12 6.9v1.57M21 15.98v1.31l-4.5 2.6-4.5-2.6v-1.65M12 12.1l4.5-2.6 4.5 2.6",
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
    d: "m21.38 11.448-4.5-2.6a.77.77 0 0 0-.75 0l-4.5 2.6s0 .01-.01.01l-4.12 2.38-3.75-2.17v-4.34l3.75-2.17 3.75 2.17v1.14c0 .41.34.75.75.75s.75-.34.75-.75v-1.57c0-.27-.14-.52-.38-.65l-4.5-2.6a.77.77 0 0 0-.75 0l-4.5 2.6c-.23.13-.38.38-.38.65v5.2c0 .27.14.52.38.65l4.5 2.6c.12.07.25.1.38.1s.26-.03.38-.1l4.5-2.6s0-.01.01-.01l4.12-2.38 3.75 2.17v4.33l-3.75 2.17-3.75-2.17v-1.22c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.65c0 .27.14.52.38.65l4.5 2.6c.12.07.25.1.38.1s.26-.03.38-.1l4.5-2.6c.23-.13.38-.38.38-.65v-5.2a.84.84 0 0 0-.4-.64Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M4.5 8.35v2.31c0 .36.19.69.5.87l2 1.15c.31.18.69.18 1 0l2-1.15c.31-.18.5-.51.5-.87V8.35c0-.36-.19-.69-.5-.87L8 6.33a.993.993 0 0 0-1 0L5 7.48c-.31.18-.5.51-.5.87ZM13.5 13.55v2.31c0 .36.19.69.5.87l2 1.15c.31.18.69.18 1 0l2-1.15c.31-.18.5-.51.5-.87v-2.31c0-.36-.19-.69-.5-.87l-2-1.15a.993.993 0 0 0-1 0l-2 1.15c-.31.18-.5.51-.5.87Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m12 12.1-4.5 2.6L3 12.1V6.9l4.5-2.6L12 6.9v1.6M12 12.1l4.5-2.6 4.5 2.6v5.2l-4.5 2.6-4.5-2.6v-1.7",
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
    d: "M7.5 15.448c-.13 0-.26-.03-.38-.1l-4.5-2.6a.752.752 0 0 1-.38-.65v-5.2c0-.27.14-.52.38-.65l4.5-2.6a.77.77 0 0 1 .75 0l4.5 2.6c.23.13.38.38.38.65v1.57c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.14L7.5 5.158l-3.75 2.17v4.33l3.75 2.17 4.12-2.38a.746.746 0 0 1 .75 1.29l-4.5 2.6c-.11.07-.24.11-.37.11Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 20.641c-.13 0-.26-.03-.38-.1l-4.5-2.6a.752.752 0 0 1-.38-.65v-1.65c0-.41.34-.75.75-.75s.75.34.75.75v1.22l3.75 2.17 3.75-2.17v-4.33l-3.75-2.17-4.12 2.38a.746.746 0 0 1-.75-1.29l4.5-2.6a.77.77 0 0 1 .75 0l4.5 2.6c.23.13.38.38.38.65v5.2c0 .27-.14.52-.38.65l-4.5 2.6c-.11.06-.24.09-.37.09Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m12 12.1-4.5 2.6L3 12.1V6.9l4.5-2.6L12 6.9v1.57",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m12 12.1 4.5-2.6 4.5 2.6v5.19l-4.5 2.6-4.5-2.6v-1.65",
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

var Polygon = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Polygon.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Polygon.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Polygon.displayName = 'Polygon';

export { Polygon as default };