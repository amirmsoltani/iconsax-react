import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16 1.969H8c-4 0-6 2-6 6v5c0 5 2 6 6 6h.5c.28 0 .64.18.8.4l1.5 2c.66.88 1.74.88 2.4 0l1.5-2c.19-.25.49-.4.8-.4h.5c4 0 6-2 6-6v-5c0-4-2-6-6-6Zm-7.47 10.2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-1.47 1.47 1.47 1.47Zm5.16-3.51-2 4.67c-.12.28-.4.45-.69.45a.745.745 0 0 1-.69-1.05l2-4.67c.16-.38.6-.56.99-.39.38.17.55.61.39.99Zm4.84 2.57-2 2c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 11.999v.97c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.17-.22-.53-.4-.8-.4H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m8 8.7-2 2 2 2M16 8.7l2 2-2 2M13 8.371l-2 4.66",
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
    opacity: ".4",
    d: "M8.5 18.969H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 13.45c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 10.7l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM16 13.45c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22ZM11 13.78a.745.745 0 0 1-.69-1.05l2-4.67c.16-.38.6-.56.99-.39.38.16.56.6.39.99l-2 4.67c-.12.28-.4.45-.69.45Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 18.97H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m8 8.7-2 2 2 2M16 8.7l2 2-2 2M13 8.37l-2 4.66",
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
    d: "M12 22.779c-.69 0-1.34-.35-1.8-.96l-1.5-2a.471.471 0 0 0-.2-.1H8c-4.17 0-6.75-1.13-6.75-6.75v-5c0-4.42 2.33-6.75 6.75-6.75h8c4.42 0 6.75 2.33 6.75 6.75v5c0 4.42-2.33 6.75-6.75 6.75h-.5c-.08 0-.15.04-.2.1l-1.5 2c-.46.61-1.11.96-1.8.96ZM8 2.719c-3.58 0-5.25 1.67-5.25 5.25v5c0 4.52 1.55 5.25 5.25 5.25h.5c.51 0 1.09.29 1.4.7l1.5 2c.35.46.85.46 1.2 0l1.5-2c.33-.44.85-.7 1.4-.7h.5c3.58 0 5.25-1.67 5.25-5.25v-5c0-3.58-1.67-5.25-5.25-5.25H8Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 13.45c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L7.06 10.7l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM16 13.45c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.47-1.47-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22ZM11 13.78a.745.745 0 0 1-.69-1.05l2-4.67c.16-.38.6-.56.99-.39.38.16.56.6.39.99l-2 4.67c-.12.28-.4.45-.69.45Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M8.5 18.969H8c-4 0-6-1-6-6v-5c0-4 2-6 6-6h8c4 0 6 2 6 6v5c0 4-2 6-6 6h-.5c-.31 0-.61.15-.8.4l-1.5 2c-.66.88-1.74.88-2.4 0l-1.5-2c-.16-.22-.52-.4-.8-.4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m8 8.7-2 2 2 2M16 8.7l2 2-2 2M13 8.371l-2 4.66",
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

var MessageProgramming = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
MessageProgramming.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MessageProgramming.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
MessageProgramming.displayName = 'MessageProgramming';

export { MessageProgramming as default };