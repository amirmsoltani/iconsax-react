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
    d: "M4.5 10.488v5.94c0 .31.14.61.37.81l5.36 4.59c.7.6 1.77.1 1.77-.81v-4.1h4.91c.95 0 1.43-1.15.76-1.83L12 9.418H5.57c-.59-.01-1.07.47-1.07 1.07zM18.43 1.91H7.09c-.95 0-1.43 1.15-.76 1.83L12 9.41h6.43c.59 0 1.07-.48 1.07-1.07V2.98c0-.59-.48-1.07-1.07-1.07z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5 10.52V9h14V2H5l14 14H5v-.78M12 16v6l-7-6h7Z",
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
    d: "M4.5 10.488v5.94c0 .31.14.61.37.81l5.36 4.59c.7.6 1.77.1 1.77-.81v-4.1h4.91c.95 0 1.43-1.15.76-1.83L12 9.418H5.57c-.59-.01-1.07.47-1.07 1.07Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M18.43 1.91H7.09c-.95 0-1.43 1.15-.76 1.83L12 9.41h6.43c.59 0 1.07-.48 1.07-1.07V2.98c0-.59-.48-1.07-1.07-1.07Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m5 2 14 14H5V9h14V2H5ZM12 16v6l-7-6h7Z",
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
    d: "M19 16.75H5c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75h5.19L4.47 2.53A.751.751 0 0 1 5 1.25h14c.41 0 .75.34.75.75v7c0 .41-.34.75-.75.75h-5.19l5.72 5.72a.751.751 0 0 1-.53 1.28Zm-13.25-1.5h11.44l-5.5-5.5H5.75v5.5Zm6.56-7h5.94v-5.5H6.81l5.5 5.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.75c-.18 0-.35-.06-.49-.18l-7-6a.765.765 0 0 1-.22-.83c.11-.29.39-.49.7-.49h7c.41 0 .75.34.75.75v6c0 .29-.17.56-.44.68-.09.05-.19.07-.3.07Zm-4.97-6 4.22 3.62v-3.62H7.03Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m5 2 14 14H5V9h14V2H5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M12 16v6l-7-6h7Z",
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

var Framer = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Framer.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Framer.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Framer.displayName = 'Framer';

export { Framer as default };
