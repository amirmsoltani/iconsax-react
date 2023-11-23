import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M13.298 2.115a.473.473 0 0 0-.548.477v2.86c0 .199.12.374.286.484.503.336.834.91.834 1.563v2c0 1.03-.84 1.88-1.87 1.88-1.04 0-1.88-.85-1.88-1.88v-2c0-.653.338-1.227.844-1.563.165-.11.286-.285.286-.483v-2.86a.473.473 0 0 0-.548-.478A7.498 7.498 0 0 0 6.7 4.2a7.484 7.484 0 0 0-2.2 5.3v5c0 4.13 3.37 7.5 7.5 7.5s7.5-3.37 7.5-7.5v-5c0-3.69-2.687-6.766-6.202-7.384Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M4.5 13.63v.87c0 4.12 3.37 7.5 7.5 7.5 4.12 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5ZM12 6V2",
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
    d: "M19.5 9.5v5c0 4.13-3.37 7.5-7.5 7.5s-7.5-3.37-7.5-7.5v-5c0-2.06.84-3.94 2.2-5.3a7.499 7.499 0 0 1 4.55-2.16c.24-.03.5-.04.75-.04s.51.01.75.04c3.78.38 6.75 3.58 6.75 7.46Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.87 7.5v2c0 1.03-.84 1.88-1.87 1.88-1.04 0-1.88-.85-1.88-1.88v-2c0-.77.47-1.43 1.13-1.72V2.04c.24-.03.5-.04.75-.04s.51.01.75.04v3.74c.66.29 1.12.95 1.12 1.72Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c4.13 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5v5c0 4.13 3.37 7.5 7.5 7.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5ZM12 6V2",
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
    d: "M12 22.75c-4.55 0-8.25-3.7-8.25-8.25v-5c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25v5c0 4.55-3.7 8.25-8.25 8.25Zm0-20c-3.72 0-6.75 3.03-6.75 6.75v5c0 3.72 3.03 6.75 6.75 6.75s6.75-3.03 6.75-6.75v-5c0-3.72-3.03-6.75-6.75-6.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 11.75c-1.24 0-2.25-1.01-2.25-2.25v-2c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v2c0 1.24-1.01 2.25-2.25 2.25Zm0-5c-.41 0-.75.34-.75.75v2c0 .41.34.75.75.75s.75-.34.75-.75v-2c0-.41-.34-.75-.75-.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 6.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c4.13 0 7.5-3.37 7.5-7.5v-5C19.5 5.37 16.13 2 12 2S4.5 5.37 4.5 9.5v5c0 4.13 3.37 7.5 7.5 7.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 11c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5v2c0 .83-.68 1.5-1.5 1.5ZM12 6V2"
  })));
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

var Mouse = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Mouse.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Mouse.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Mouse.displayName = 'Mouse';

export { Mouse as default };
