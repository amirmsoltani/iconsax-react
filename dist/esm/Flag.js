import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m18.02 12.33-1.22-1.22a1.39 1.39 0 0 1-.47-1.03c-.02-.45.16-.9.49-1.23l1.2-1.2c1.04-1.04 1.43-2.04 1.1-2.83-.32-.78-1.31-1.21-2.77-1.21H5.9v-.86c0-.41-.34-.75-.75-.75s-.75.34-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-4.88h10.45c1.44 0 2.41-.44 2.74-1.23.33-.79-.05-1.78-1.07-2.81Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.15 2v20M16.35 4c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15M5.15 4H12",
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
    d: "M5.15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m18.02 12.33-1.22-1.22a1.39 1.39 0 0 1-.47-1.03c-.02-.45.16-.9.49-1.23l1.2-1.2c1.04-1.04 1.43-2.04 1.1-2.83-.32-.78-1.31-1.21-2.77-1.21H5.15c-.21.01-.38.18-.38.39v12c0 .21.17.38.38.38h11.2c1.44 0 2.41-.44 2.74-1.23.33-.8-.05-1.79-1.07-2.82Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.15 2v20M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15",
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
    d: "M5.15 22.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v20c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.35 16.75H5.15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11.2c1.09 0 1.6-.29 1.7-.54.1-.25-.05-.81-.83-1.58l-1.2-1.2c-.49-.43-.79-1.08-.82-1.8-.03-.76.27-1.51.82-2.06l1.2-1.2c.74-.74.97-1.34.86-1.6-.11-.26-.68-.52-1.73-.52H5.15a.749.749 0 1 1 0-1.5h11.2c2.19 0 2.89.91 3.12 1.45.22.54.37 1.68-1.19 3.24l-1.2 1.2c-.25.25-.39.6-.38.95.01.3.13.57.34.76l1.24 1.23c1.53 1.53 1.38 2.67 1.16 3.22-.23.53-.94 1.45-3.09 1.45Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M5.15 2v20",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".34",
    d: "M5.15 4h11.2c2.7 0 3.3 1.5 1.4 3.4l-1.2 1.2c-.8.8-.8 2.1 0 2.8l1.2 1.2c1.9 1.9 1.2 3.4-1.4 3.4H5.15",
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

var Flag = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Flag.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Flag.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Flag.displayName = 'Flag';

export { Flag as default };