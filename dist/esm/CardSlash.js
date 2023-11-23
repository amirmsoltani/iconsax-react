import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m19.27 3.648-5.1 5.1H3.2c-.66 0-1.2-.54-1.2-1.2v-.01c0-2.29 1.85-4.14 4.14-4.14h11.71c.5 0 .98.09 1.42.25ZM12.67 10.25l-5.5 5.5H6c-.41 0-.75.34-.75.75 0 .31.2.59.48.69l-2.35 2.35A4.087 4.087 0 0 1 2 16.46v-5.01c0-.66.54-1.2 1.2-1.2h9.47ZM21.999 11v5.46c0 2.29-1.85 4.14-4.14 4.14h-9.05c-.89 0-1.34-1.08-.71-1.71l1.35-1.35a.99.99 0 0 1 .71-.29h4.34c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.84c-.89 0-1.34-1.08-.71-1.71l3.46-3.46c.38-.37.89-.58 1.42-.58h3.17c.55 0 1 .45 1 1Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m21.769 3.309-1.16 1.16-4.28 4.28-13.02 13.02c-.15.15-.34.23-.54.23s-.39-.08-.54-.23a.743.743 0 0 1 0-1.08l1.15-1.15 2.35-2.35 13.54-13.54 1.42-1.42c.3-.31.78-.31 1.08 0 .31.3.31.78 0 1.08ZM22 7.41c0-.89-1.08-1.34-1.71-.71L20 7l-.29.29c-.63.63-.19 1.71.7 1.71H21c.55 0 1-.45 1-1v-.59Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 8.5h13.24M6 16.5h1.29M11 16.5h3.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.98 20.5h9.58c3.56 0 4.44-.88 4.44-4.39V6.89M2 14.969v1.14c0 2.34.39 3.51 1.71 4.03M19.99 3.75c-.62-.18-1.42-.25-2.43-.25H6.44C2.89 3.5 2 4.38 2 7.89v3.05M22 2 2 22",
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
    d: "M21.998 9v7.46c0 2.29-1.86 4.14-4.15 4.14H6.398l3.57-3.57 1.28-1.28L17.998 9h4ZM15 9 4 20c-1.2-.72-2-2.04-2-3.54V9h13Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 7.541v1.46h-4l3.47-3.47c.34.59.53 1.28.53 2.01ZM20 3.998l-5 5H2v-1.46c0-2.29 1.86-4.14 4.15-4.14h11.7c.79 0 1.52.22 2.15.6ZM8.21 15.79l-1.46 1.46H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.07 0 .14.01.21.04ZM15.249 16.5c0 .41-.34.75-.75.75h-4c-.2 0-.39-.09-.53-.22l1.28-1.28h3.25c.41 0 .75.34.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.769 2.229c-.3-.3-.79-.3-1.09 0l-18.45 18.46c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01l18.46-18.46c.31-.3.31-.78 0-1.08Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 8.5h13.24M6 16.5h1.29M11 16.5h3.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.98 20.5h9.58c3.56 0 4.44-.88 4.44-4.39V6.89M19.99 3.75c-.62-.18-1.42-.25-2.43-.25H6.44C2.89 3.5 2 4.38 2 7.89v8.21c0 2.34.39 3.51 1.71 4.03M22 2 2 22",
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
    d: "M15.24 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13.24c.41 0 .75.34.75.75s-.34.75-.75.75ZM7.29 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.29a.749.749 0 1 1 0 1.5ZM14.5 17.25H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.56 21.25H7.98c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.58c3.14 0 3.69-.54 3.69-3.64V6.89c0-.41.34-.75.75-.75s.75.34.75.75v9.21c0 3.95-1.21 5.15-5.19 5.15ZM3.71 20.89c-.09 0-.19-.02-.28-.05-1.81-.72-2.18-2.41-2.18-4.73V7.89c0-3.94 1.21-5.14 5.19-5.14h11.11c1.14 0 1.98.09 2.64.29.4.12.62.53.51.93-.12.4-.54.62-.93.51-.52-.15-1.22-.22-2.22-.22H6.44c-3.14 0-3.69.54-3.69 3.64v8.21c0 2.39.43 3.02 1.24 3.34a.745.745 0 0 1-.28 1.44Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.001 22.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l20-20c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-20 20c-.15.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 8.5h13.24M6 16.5h1.29",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M11 16.5h3.5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M7.98 20.5h9.58c3.56 0 4.44-.88 4.44-4.39V6.89",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.99 3.75c-.62-.18-1.42-.25-2.43-.25H6.44C2.89 3.5 2 4.38 2 7.89v8.21c0 2.34.39 3.51 1.71 4.03M22 2 2 22",
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

var CardSlash = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
CardSlash.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CardSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
CardSlash.displayName = 'CardSlash';

export { CardSlash as default };
