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
    d: "M14.5 18h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.45 0 6.25-2.8 6.25-6.25S17.95 4 14.5 4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c4.27 0 7.75 3.48 7.75 7.75S18.77 18 14.5 18z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M13.81 14.892H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.81c1.62 0 2.94-1.32 2.94-2.94 0-1.62-1.32-2.94-2.94-2.94H3.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.64c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.44-4.44 4.44z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M8.5 11.5h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75zM6.5 21.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.72 14.898a6.977 6.977 0 0 1-5.22 2.35h-11M9.5 3.25h5c3.85 0 7 3.15 7 7M3.17 6.75h10.64a3.7 3.7 0 0 1 3.69 3.69 3.7 3.7 0 0 1-3.69 3.69H8M8.5 10.75h-3M6.5 20.75h-4",
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
    d: "M14.5 18h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.45 0 6.25-2.8 6.25-6.25S17.95 4 14.5 4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c4.27 0 7.75 3.48 7.75 7.75S18.77 18 14.5 18Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M13.81 14.89H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.81c1.62 0 2.94-1.32 2.94-2.94 0-1.62-1.32-2.94-2.94-2.94H3.17a.755.755 0 0 1 0-1.51h10.64c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.45-4.44 4.45Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 11.5h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6.5 21.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9.5 3.2h5c3.8 0 7 3.1 7 7 0 3.8-3.1 7-7 7h-11",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.2 6.8h10.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H8M8.5 10.8h-3M6.5 20.8h-4",
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
    d: "M14.5 18h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c3.45 0 6.25-2.8 6.25-6.25S17.95 4 14.5 4h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c4.27 0 7.75 3.48 7.75 7.75S18.77 18 14.5 18Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.81 14.892H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.81c1.62 0 2.94-1.32 2.94-2.94 0-1.62-1.32-2.94-2.94-2.94H3.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10.64c2.45 0 4.44 1.99 4.44 4.44s-1.99 4.44-4.44 4.44Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 11.5h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM6.5 21.5h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9.5 3.25h5c3.85 0 7 3.15 7 7s-3.15 7-7 7h-11",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M3.17 6.75h10.64a3.7 3.7 0 0 1 3.69 3.69 3.7 3.7 0 0 1-3.69 3.69H8M8.5 10.75h-3M6.5 20.75h-4",
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

var Polyswarm = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Polyswarm.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Polyswarm.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Polyswarm.displayName = 'Polyswarm';

export { Polyswarm as default };