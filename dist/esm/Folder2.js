import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.434 4.034c.133.208-.094.45-.334.396-.47-.14-.99-.21-1.52-.21h-3.3a.5.5 0 0 1-.4-.2l-1.15-1.53c-.141-.2-.008-.49.236-.49h2.754c1.56 0 2.936.81 3.714 2.034Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.14 6.54a4.18 4.18 0 0 0-1.45-.67c-.36-.1-.73-.15-1.11-.15h-3.72c-.58 0-.62-.05-.93-.46l-1.4-1.86C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42v11.16C2 20.02 3.98 22 6.42 22h11.16c2.44 0 4.42-1.98 4.42-4.42v-7.44c0-1.49-.73-2.8-1.86-3.6Zm-5.75 9.8H9.6c-.39 0-.69-.31-.69-.7 0-.38.3-.7.69-.7h4.79c.39 0 .7.32.7.7 0 .39-.31.7-.7.7Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M8 2h9c2 0 3 1 3 3v1.38",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 13.02V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5M22 14.988v2.01c0 4-1 5-5 5H7c-4 0-5-1-5-5",
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
    d: "M15.718 2h-7.44c-.38 0-.7.32-.7.7 0 .38.32.7.7.7h3.26l1.4 1.86c.31.41.35.47.93.47h3.72c.38 0 .75.05 1.11.15.04.18.06.36.06.55v.35c0 .38.32.7.7.7.38 0 .7-.32.7-.7v-.36c-.02-2.44-2-4.42-4.44-4.42Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.14 6.54a4.18 4.18 0 0 0-1.45-.67c-.35-.1-.73-.15-1.11-.15h-3.72c-.58 0-.62-.06-.93-.47l-1.4-1.86C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42v11.16C2 20.02 3.98 22 6.42 22h11.16c2.44 0 4.42-1.98 4.42-4.42v-7.44c0-1.49-.73-2.8-1.86-3.6ZM14.33 16H9.67c-.39 0-.7-.31-.7-.7 0-.38.31-.7.7-.7h4.65c.38 0 .7.32.7.7 0 .39-.31.7-.69.7Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 2h9c2 0 3 1 3 3v1.38",
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
    d: "M17 22.75H7c-4.41 0-5.75-1.34-5.75-5.75V7c0-4.41 1.34-5.75 5.75-5.75h1.5c1.75 0 2.3.57 3 1.5l1.5 2c.33.44.38.5 1 .5h3c4.41 0 5.75 1.34 5.75 5.75v6c0 4.41-1.34 5.75-5.75 5.75Zm-10-20c-3.58 0-4.25.68-4.25 4.25v10c0 3.57.67 4.25 4.25 4.25h10c3.58 0 4.25-.68 4.25-4.25v-6c0-3.57-.67-4.25-4.25-4.25h-3c-1.28 0-1.7-.44-2.2-1.1l-1.5-2c-.52-.69-.68-.9-1.8-.9H7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20 7.13c-.41 0-.75-.34-.75-.75V5c0-1.58-.67-2.25-2.25-2.25H8c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c2.42 0 3.75 1.33 3.75 3.75v1.38c0 .41-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 11v6c0 4-1 5-5 5H7c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M8 2h9c2 0 3 1 3 3v1.38",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
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

var Folder2 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Folder2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Folder2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Folder2.displayName = 'Folder2';

export { Folder2 as default };
