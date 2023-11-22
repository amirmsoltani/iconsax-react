import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 22H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2ZM3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10ZM17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 13.01V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.5 11.57v4.93a2 2 0 1 1-4 0v-9c0-1.1.9-2 2-2s2 .9 2 2M8.5 18.5c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2s-2 .9-2 2v3.5a2 2 0 0 0 2 2Z",
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
    d: "M22 22H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10ZM17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7 10.74v3.2M12 9v6.68M17 10.74v3.2M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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
    d: "M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM5.6 19.749H4c-.96 0-1.75-.79-1.75-1.75v-8.62c0-.96.79-1.75 1.75-1.75h1.6c.96 0 1.75.79 1.75 1.75v8.62c0 .96-.79 1.75-1.75 1.75ZM4 9.119c-.14 0-.25.11-.25.25v8.63c0 .14.11.25.25.25h1.6c.14 0 .25-.11.25-.25v-8.62c0-.14-.11-.25-.25-.25H4v-.01ZM12.8 19.751h-1.6c-.96 0-1.75-.79-1.75-1.75V6.191c0-.96.79-1.75 1.75-1.75h1.6c.96 0 1.75.79 1.75 1.75v11.81c0 .96-.79 1.75-1.75 1.75Zm-1.6-13.81c-.14 0-.25.11-.25.25v11.81c0 .14.11.25.25.25h1.6c.14 0 .25-.11.25-.25V6.191c0-.14-.11-.25-.25-.25h-1.6ZM20 19.75h-1.6c-.96 0-1.75-.79-1.75-1.75V3c0-.96.79-1.75 1.75-1.75H20c.96 0 1.75.79 1.75 1.75v15c0 .96-.79 1.75-1.75 1.75Zm-1.6-17c-.14 0-.25.11-.25.25v15c0 .14.11.25.25.25H20c.14 0 .25-.11.25-.25V3c0-.14-.11-.25-.25-.25h-1.6Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 22h20",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.75 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M3 10v12h4V10c0-1.1-.4-2-1.6-2h-.8C3.4 8 3 8.9 3 10ZM17 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2Z",
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

var Chart21 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Chart21.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Chart21.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Chart21.displayName = 'Chart21';

export { Chart21 as default };
