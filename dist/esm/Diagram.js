import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.57.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96a2.78 2.78 0 0 1-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17.97 22H22M2 2v17c0 1.66 1.34 3 3 3h8.98M19.99 8.18 21 7",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11l1.15-1.35",
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
    d: "M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.57.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96a2.78 2.78 0 0 1-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 2v17c0 1.66 1.34 3 3 3h17",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7",
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
    d: "M22 22.75H5c-2.07 0-3.75-1.68-3.75-3.75V2c0-.41.34-.75.75-.75s.75.34.75.75v17c0 1.24 1.01 2.25 2.25 2.25h17c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5 17.75c-.17 0-.35-.06-.49-.18a.756.756 0 0 1-.08-1.06l4.59-5.36c.5-.58 1.22-.93 1.98-.96.76-.02 1.51.26 2.05.8l.95.95c.25.25.58.37.93.37.35-.01.67-.17.9-.44l4.59-5.36c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-4.59 5.36c-.5.58-1.22.93-1.98.96-.76.02-1.51-.26-2.05-.8l-.94-.95c-.25-.25-.58-.38-.93-.37-.35.01-.67.17-.9.44l-4.59 5.36a.8.8 0 0 1-.58.26Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 2v17c0 1.66 1.34 3 3 3h17",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m5 17 4.59-5.36c.76-.88 2.11-.94 2.93-.11l.95.95c.82.82 2.17.77 2.93-.11L21 7",
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

var Diagram = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Diagram.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Diagram.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Diagram.displayName = 'Diagram';

export { Diagram as default };
