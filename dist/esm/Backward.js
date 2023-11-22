import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.998 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.83-3.17-1.83-.49-.28v-2.82l.49-.28 3.17-1.83 3.17-1.83c1.3-.75 2.93.19 2.93 1.69Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.241 8.34v7.32c0 1.5-1.63 2.44-2.92 1.69l-3.18-1.83-3.17-1.83c-1.29-.75-1.29-2.63 0-3.38l3.17-1.83 3.18-1.83c1.29-.75 2.92.19 2.92 1.69Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.998 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-.2-.12-.36-.25-.49-.41v-2.56c.13-.16.29-.29.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.319 6.65c1.3-.75 2.93.19 2.93 1.69v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-1.3-.75-1.3-2.62 0-3.38l2.41-1.39",
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
    d: "M21.998 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.83-3.17-1.83-.49-.28v-2.82l.49-.28 3.17-1.83 3.17-1.83c1.3-.75 2.93.19 2.93 1.69Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.241 8.34v7.32c0 1.5-1.63 2.44-2.92 1.69l-3.18-1.83-3.17-1.83c-1.29-.75-1.29-2.63 0-3.38l3.17-1.83 3.18-1.83c1.29-.75 2.92.19 2.92 1.69Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-.2-.12-.36-.25-.49-.41v-2.56c.13-.16.29-.29.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67ZM12.24 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-1.3-.75-1.3-2.62 0-3.38l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67Z",
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
    d: "M20.05 18.359c-.46 0-.93-.12-1.35-.37l-6.34-3.66c-.29-.17-.52-.37-.69-.59a.733.733 0 0 1-.17-.47v-2.56c0-.17.06-.34.17-.47.18-.22.41-.42.69-.58l6.35-3.67c.84-.49 1.85-.49 2.7 0 .85.49 1.35 1.36 1.35 2.34v7.32c0 .98-.5 1.85-1.35 2.34-.43.25-.9.37-1.36.37Zm-7.06-5.4c.04.03.08.06.12.08l6.33 3.65c.38.22.83.22 1.2 0 .38-.22.6-.61.6-1.04v-7.32c0-.43-.22-.82-.6-1.04-.38-.22-.82-.22-1.2 0l-6.34 3.66c-.04.02-.08.05-.11.08v1.93Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.29 18.359c-.46 0-.93-.12-1.35-.37l-6.34-3.66a2.684 2.684 0 0 1-1.35-2.34c0-.98.5-1.85 1.35-2.34l6.34-3.66c.84-.49 1.85-.49 2.7 0 .85.49 1.35 1.36 1.35 2.34v7.32c0 .98-.5 1.85-1.35 2.34-.42.25-.89.37-1.35.37Zm0-11.22c-.21 0-.41.05-.6.16l-6.34 3.66c-.38.22-.6.61-.6 1.04 0 .43.22.82.6 1.04l6.34 3.66c.38.22.83.22 1.2 0 .38-.22.6-.6.6-1.04v-7.32c0-.43-.22-.82-.6-1.04-.19-.11-.39-.16-.6-.16Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M21.998 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-.2-.12-.36-.25-.49-.41v-2.56c.13-.16.29-.29.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.241 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83c-1.3-.75-1.3-2.62 0-3.38l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67Z",
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

var Backward = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Backward.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Backward.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Backward.displayName = 'Backward';

export { Backward as default };
