import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17.56 2H6.41C3.98 2 2 3.98 2 6.41v6.7a4.41 4.41 0 0 0 4.41 4.41h3.84c.55 0 1 .45 1 1v.97c0 .55-.45 1-1 1H7.83a.755.755 0 0 0 0 1.51h8.35c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.42c-.55 0-1-.45-1-1v-.97c0-.55.45-1 1-1h3.81a4.41 4.41 0 0 0 4.41-4.41v-6.7C21.97 3.98 19.99 2 17.56 2Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 10.63v2.15c0 3.56-.89 4.44-4.44 4.44H6.44c-3.55 0-4.44-.89-4.44-4.44V6.44C2 2.89 2.89 2 6.44 2h11.11C21.11 2 22 2.89 22 6.44M12 17.219v4.78M2 13h20M7.5 22h9",
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
    d: "M21.97 6.41v6.5H2v-6.5C2 3.98 3.98 2 6.41 2h11.15c2.43 0 4.41 1.98 4.41 4.41Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 12.922v.2a4.41 4.41 0 0 0 4.41 4.41h3.84c.55 0 1 .45 1 1v.97c0 .55-.45 1-1 1H7.83a.749.749 0 1 0 0 1.5h8.35c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.42c-.55 0-1-.45-1-1v-.97c0-.55.45-1 1-1h3.81a4.41 4.41 0 0 0 4.41-4.41v-.2H2Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.44 2h11.11C21.11 2 22 2.89 22 6.44v6.33c0 3.56-.89 4.44-4.44 4.44H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2ZM12 17.22V22M2 13h20M7.5 22h9",
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
    d: "M17.56 17.97H6.44c-3.98 0-5.19-1.21-5.19-5.19V6.44c0-3.98 1.21-5.19 5.19-5.19h11.11c3.98 0 5.19 1.21 5.19 5.19v6.33c.01 3.99-1.2 5.2-5.18 5.2ZM6.44 2.75c-3.14 0-3.69.55-3.69 3.69v6.33c0 3.14.55 3.69 3.69 3.69h11.11c3.14 0 3.69-.55 3.69-3.69V6.44c0-3.14-.55-3.69-3.69-3.69H6.44Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.749c-.41 0-.75-.34-.75-.75v-4.78c0-.41.34-.75.75-.75s.75.34.75.75v4.78c0 .41-.34.75-.75.75ZM22 13.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 22.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.44 2h11.11C21.11 2 22 2.89 22 6.44v6.33c0 3.56-.89 4.44-4.44 4.44H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M12 17.219v4.78M2 13h20",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 22h9",
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

var Monitor = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Monitor.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Monitor.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Monitor.displayName = 'Monitor';

export { Monitor as default };