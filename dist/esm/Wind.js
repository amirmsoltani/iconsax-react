import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M18.5 22.75a4.26 4.26 0 0 1-4.25-4.25V18c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25ZM18.5 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5a4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.31 9.751H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.31c1.07 0 1.94-.87 1.94-1.94 0-1.07-.87-1.94-1.94-1.94-1.07 0-1.94.87-1.94 1.94v.38a.749.749 0 1 1-1.5 0v-.38a3.44 3.44 0 1 1 3.44 3.44Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18M9.05 12h9.45c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9M2 12h2.98M2 9.001h7.31a2.69 2.69 0 1 0-2.69-2.69v.38",
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
    d: "M18.5 22.75a4.26 4.26 0 0 1-4.25-4.25V18c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M18.5 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5a4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.31 9.751H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.31c1.07 0 1.94-.87 1.94-1.94 0-1.07-.87-1.94-1.94-1.94-1.07 0-1.94.87-1.94 1.94v.38a.749.749 0 1 1-1.5 0v-.38a3.44 3.44 0 1 1 3.44 3.44Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18M2 12h16.5c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 9h7.31a2.69 2.69 0 1 0-2.69-2.69v.38",
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
    d: "M18.5 22.75a4.26 4.26 0 0 1-4.25-4.25V18c0-.41.34-.75.75-.75s.75.34.75.75v.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75-1.23-2.75-2.75-2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5a4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25ZM18.5 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.5c1.52 0 2.75-1.23 2.75-2.75s-1.23-2.75-2.75-2.75-2.75 1.23-2.75 2.75V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5a4.26 4.26 0 0 1 4.25-4.25 4.26 4.26 0 0 1 4.25 4.25 4.26 4.26 0 0 1-4.25 4.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.31 9.751H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.31c1.07 0 1.94-.87 1.94-1.94 0-1.07-.87-1.94-1.94-1.94-1.07 0-1.94.87-1.94 1.94v.38c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.38a3.44 3.44 0 1 1 3.44 3.44Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 15h16.5c1.93 0 3.5 1.57 3.5 3.5S20.43 22 18.5 22 15 20.43 15 18.5V18",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M2 12h16.5c1.92 0 3.5-1.57 3.5-3.5C22 6.58 20.42 5 18.5 5A3.51 3.51 0 0 0 15 8.5V9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 9.001h7.31a2.69 2.69 0 1 0-2.69-2.69v.38",
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

var Wind = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Wind.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Wind.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Wind.displayName = 'Wind';

export { Wind as default };