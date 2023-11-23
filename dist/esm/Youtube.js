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
    d: "M17 4H7C4 4 2 6 2 9v6c0 3 2 5 5 5h10c3 0 5-2 5-5V9c0-3-2-5-5-5zm-3.11 9.03l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.17.82-1.63 1.82-1.03l2.47 1.48c.95.58.95 1.5 0 2.07z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5H7c-3 0-5-2-5-5v-1.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z",
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
    d: "M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m11.4 9.5 2.5 1.5c.9.6.9 1.5 0 2.1l-2.5 1.5c-1 .6-1.8.1-1.8-1v-3c0-1.3.8-1.7 1.8-1.1Z",
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
    d: "M17 20.75H7c-3.44 0-5.75-2.31-5.75-5.75V9c0-3.44 2.31-5.75 5.75-5.75h10c3.44 0 5.75 2.31 5.75 5.75v6c0 3.44-2.31 5.75-5.75 5.75Zm-10-16C4.42 4.75 2.75 6.42 2.75 9v6c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25V9c0-2.58-1.67-4.25-4.25-4.25H7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.59 15.53c-.29 0-.57-.07-.82-.21-.58-.33-.92-1-.92-1.83v-2.96c0-.83.33-1.5.92-1.83.58-.33 1.33-.27 2.04.16l2.47 1.48c.68.41 1.07 1.02 1.07 1.67 0 .65-.39 1.26-1.07 1.67l-2.47 1.48c-.41.24-.83.37-1.22.37Zm0-5.56a.2.2 0 0 0-.09.02c-.07.04-.15.22-.15.53v2.96c0 .3.08.48.15.53.08.04.27.02.53-.14l2.47-1.48c.25-.15.34-.3.34-.39 0-.09-.09-.23-.34-.39l-2.47-1.48c-.18-.11-.34-.16-.44-.16Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17 20H7c-3 0-5-2-5-5V9c0-3 2-5 5-5h10c3 0 5 2 5 5v6c0 3-2 5-5 5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m11.42 9.49 2.47 1.48c.94.57.94 1.49 0 2.06l-2.47 1.48c-1 .6-1.82.14-1.82-1.03v-2.97c0-1.16.82-1.62 1.82-1.02Z",
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

var Youtube = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Youtube.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Youtube.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Youtube.displayName = 'Youtube';

export { Youtube as default };
