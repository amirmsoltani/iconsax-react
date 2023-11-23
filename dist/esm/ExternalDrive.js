import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17 2H8C5.79 2 4 3.79 4 6v7.25c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6c0-2.21-1.79-4-4-4ZM8 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-2.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75Zm0-2.5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM4 16.75V18c0 2.21 1.79 4 4 4h9c2.21 0 4-1.79 4-4v-1.25c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1Zm13.71 2.71c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M4 7c0-3 2-5 5-5h7c3 0 5 2 5 5v10c0 3-2 5-5 5H9c-3 0-5-2-5-5v-5.29M4 15h17M7 12h1M7 9.5h1M7 7h1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.494 18.25h.01",
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
    d: "M21 6v7.25a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6c0-2.21 1.79-4 4-4h9c2.21 0 4 1.79 4 4Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 10.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 7.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 15.75a1 1 0 0 0-1 1V18c0 2.21 1.79 4 4 4h9c2.21 0 4-1.79 4-4v-1.25a1 1 0 0 0-1-1H5Zm12.71 3.71c-.19.18-.45.29-.71.29-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.26.11-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .26-.11.52-.29.71Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16 22H9c-3 0-5-2-5-5V7c0-3 2-5 5-5h7c3 0 5 2 5 5v10c0 3-2 5-5 5ZM4 15h17M7 12h1M7 9.5h1M7 7h1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.494 18.25h.01",
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
    d: "M16 22.75H9c-3.44 0-5.75-2.31-5.75-5.75V7c0-3.44 2.31-5.75 5.75-5.75h7c3.44 0 5.75 2.31 5.75 5.75v10c0 3.44-2.31 5.75-5.75 5.75Zm-7-20C6.42 2.75 4.75 4.42 4.75 7v10c0 2.58 1.67 4.25 4.25 4.25h7c2.58 0 4.25-1.67 4.25-4.25V7c0-2.58-1.67-4.25-4.25-4.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21 15.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 12.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 10.25H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 7.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75ZM17 19.499c-.26 0-.52-.11-.71-.29-.18-.19-.29-.45-.29-.71 0-.27.11-.52.29-.71.28-.28.72-.37 1.09-.21.12.05.23.12.33.21.18.19.29.45.29.71 0 .26-.11.52-.29.71-.1.09-.2.16-.33.21-.12.05-.25.08-.38.08Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16 22H9c-3 0-5-2-5-5V7c0-3 2-5 5-5h7c3 0 5 2 5 5v10c0 3-2 5-5 5ZM4 15h17",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M7 12h1M7 9.5h1M7 7h1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M16.494 18.25h.01",
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

var ExternalDrive = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
ExternalDrive.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ExternalDrive.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
ExternalDrive.displayName = 'ExternalDrive';

export { ExternalDrive as default };