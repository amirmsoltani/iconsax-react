import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M18.47 2h-4c-1.492 0-2.726 1.286-2.96 2.752-.043.273.185.498.46.498h4.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 .5.5h2.31c.41 0 .75.34.75.75s-.34.75-.75.75h-2.31a.5.5 0 0 0-.5.5v1.455a.5.5 0 0 0 .496.5l4.505.045c.42 0 .75.34.75.76-.01.41-.34.74-.75.74h-.01l-4.485-.045a.5.5 0 0 0-.505.5v1.545a.5.5 0 0 0 .5.5h3.4a.749.749 0 1 1 0 1.5h-3.4c-.276 0-.504.225-.46.498.233 1.466 1.467 2.752 2.96 2.752h4c1.65 0 3-1.34 3-3V5c0-1.66-1.35-3-3-3ZM8.44 4.95v.8a.5.5 0 0 1-.5.5H3.03a.5.5 0 0 1-.5-.5v-.8C2.53 3.33 3.86 2 5.49 2c1.62 0 2.95 1.33 2.95 2.95ZM2.53 17.91c0 .45.19 1.14.43 1.52l.81 1.36c.95 1.58 2.49 1.58 3.43 0l.82-1.36c.23-.38.42-1.07.42-1.52V8.25a.5.5 0 0 0-.5-.5H3.03a.5.5 0 0 0-.5.5v9.66Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M14.47 2c-2 0-3 1-3 3v14c0 2 1 3 3 3h4c2 0 3-1 3-3V5c0-2-1-3-3-3M11.47 6h5M11.47 18h4M11.47 13.95l5 .05M11.47 10h3M2.53 9.02V4.95C2.53 3.33 3.86 2 5.49 2c1.62 0 2.95 1.33 2.95 2.95v12.96c0 .45-.19 1.13-.42 1.52l-.82 1.36c-.94 1.57-2.49 1.57-3.43 0l-.82-1.36c-.23-.39-.42-1.07-.42-1.52v-3.96M8.44 7H2.53",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M21.47 5v14c0 1.66-1.35 3-3 3h-4c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h4c1.65 0 3 1.34 3 3Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.22 6c0 .41-.34.75-.75.75h-5v-1.5h5c.41 0 .75.34.75.75ZM16.12 18c0 .41-.33.75-.75.75h-3.9v-1.5h3.9c.42 0 .75.34.75.75ZM17.22 14.01c-.01.41-.34.74-.75.74h-.01l-4.99-.05v-1.5l5 .05c.42 0 .75.34.75.76ZM15.03 10c0 .41-.34.75-.75.75h-2.81v-1.5h2.81c.41 0 .75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M8.44 4.95v12.96c0 .45-.19 1.14-.42 1.52l-.82 1.36c-.94 1.58-2.48 1.58-3.43 0l-.81-1.36c-.24-.38-.43-1.07-.43-1.52V4.95C2.53 3.33 3.86 2 5.49 2c1.62 0 2.95 1.33 2.95 2.95Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.44 6.25H2.53v1.5h5.91v-1.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeWidth: strokeWidth,
    d: "M21.47 19V5c0-2-1-3-3-3h-4c-2 0-3 1-3 3v14c0 2 1 3 3 3h4c2 0 3-1 3-3zM11.47 6h5M11.47 18h4M11.47 13.95l5 .05M11.47 10h3M5.49 2C3.86 2 2.53 3.33 2.53 4.95v12.96c0 .45.19 1.13.42 1.52l.82 1.36c.94 1.57 2.49 1.57 3.43 0l.82-1.36c.23-.39.42-1.07.42-1.52V4.95C8.44 3.33 7.11 2 5.49 2zM8.44 7H2.53"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M18.47 22.75h-4c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h4c2.42 0 3.75 1.33 3.75 3.75v14c0 2.42-1.34 3.75-3.75 3.75Zm-4-20c-1.58 0-2.25.67-2.25 2.25v14c0 1.58.67 2.25 2.25 2.25h4c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25h-4Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.47 6.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM15.47 18.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.47 14.75c-.01 0-.01 0 0 0l-5.01-.05c-.41 0-.75-.34-.74-.76 0-.41.34-.74.75-.74h.01l5 .05c.41 0 .75.34.74.76-.01.41-.34.74-.75.74ZM14.47 10.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM5.49 22.72c-.91 0-1.77-.56-2.36-1.54l-.82-1.36c-.3-.5-.53-1.32-.53-1.9V4.95c0-2.04 1.66-3.7 3.7-3.7s3.7 1.66 3.7 3.7v12.96c0 .58-.23 1.4-.53 1.9l-.82 1.36c-.57.99-1.43 1.55-2.34 1.55Zm0-19.97c-1.21 0-2.2.99-2.2 2.2v12.96c0 .31.15.86.31 1.13l.82 1.36c.31.52.7.81 1.07.81.37 0 .76-.3 1.07-.81l.82-1.36c.16-.27.31-.82.31-1.13V4.95c0-1.21-.99-2.2-2.2-2.2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.44 7.75H2.53c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.91c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.47 19V5c0-2-1-3-3-3h-4c-2 0-3 1-3 3v14c0 2 1 3 3 3h4c2 0 3-1 3-3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M11.47 6h5M11.47 18h4M11.47 13.95l5 .05M11.47 10h3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M5.49 2C3.86 2 2.53 3.33 2.53 4.95v12.96c0 .45.19 1.13.42 1.52l.82 1.36c.94 1.57 2.49 1.57 3.43 0l.82-1.36c.23-.39.42-1.07.42-1.52V4.95C8.44 3.33 7.11 2 5.49 2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M8.44 7H2.53",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
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

var RulerPen = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
RulerPen.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RulerPen.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
RulerPen.displayName = 'RulerPen';

export { RulerPen as default };
