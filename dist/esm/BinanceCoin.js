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
    d: "M11.65 2.35L6.36 7.64c-.2.2-.2.51 0 .71l1.29 1.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l1.29-1.29c.2-.2.2-.51 0-.71l-5.29-5.29a.513.513 0 00-.71 0zM11.65 21.65l-5.29-5.29c-.2-.2-.2-.51 0-.71l1.29-1.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l1.29 1.29c.2.2.2.51 0 .71l-5.29 5.29c-.2.19-.52.19-.71 0zM20.1 10.1l1.54 1.54c.2.2.2.51 0 .71l-1.54 1.54c-.2.2-.51.2-.71 0l-1.54-1.54c-.2-.2-.2-.51 0-.71l1.54-1.54c.2-.19.52-.19.71 0zM4.6 10.1l1.54 1.54c.2.2.2.51 0 .71L4.6 13.89c-.2.2-.51.2-.71 0l-1.54-1.54c-.2-.2-.2-.51 0-.71l1.54-1.54c.2-.19.52-.19.71 0z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12.35 9.88l1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77c-.2.2-.51.2-.71 0l-1.77-1.77c-.2-.2-.2-.51 0-.71l1.77-1.77c.2-.2.52-.2.71 0z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9.05 4.95 6 8l2 2 4-4 4 4 2-2-6-6M12 22l-6-6 2-2 4 4 4-4 2 2-6 6ZM19.749 9.751 17.5 12l2.249 2.249L21.997 12 19.75 9.751ZM4.249 9.751 2 12l2.249 2.249L6.497 12 4.25 9.751Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.998 9.525 9.523 12l2.475 2.475L14.473 12l-2.475-2.475Z",
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
    d: "m11.65 2.348-5.3 5.3c-.2.2-.2.51 0 .71l1.29 1.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l1.29-1.29c.2-.2.2-.51 0-.71l-5.29-5.29c-.19-.2-.51-.2-.7-.01ZM11.65 21.65l-5.29-5.29c-.2-.2-.2-.51 0-.71l1.29-1.29c.2-.2.51-.2.71 0l3.29 3.29c.2.2.51.2.71 0l3.29-3.29c.2-.2.51-.2.71 0l1.29 1.29c.2.2.2.51 0 .71l-5.29 5.29c-.2.19-.52.19-.71 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m20.1 10.098 1.54 1.54c.2.2.2.51 0 .71l-1.54 1.55c-.2.2-.51.2-.71 0l-1.54-1.54c-.2-.2-.2-.51 0-.71l1.54-1.54c.2-.2.52-.2.71-.01ZM4.6 10.1l1.54 1.54c.2.2.2.51 0 .71L4.6 13.9c-.2.2-.51.2-.71 0l-1.54-1.54c-.2-.2-.2-.51 0-.71L3.9 10.1c.19-.19.51-.19.7 0ZM12.35 9.88l1.77 1.77c.2.2.2.51 0 .71l-1.77 1.77c-.2.2-.51.2-.71 0l-1.77-1.77c-.2-.2-.2-.51 0-.71l1.77-1.77c.2-.2.52-.2.71 0Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2 6 8l2 2 4-4 4 4 2-2-6-6ZM12 22l-6-6 2-2 4 4 4-4 2 2-6 6ZM19.785 9.702l-2.262 2.263 2.262 2.262 2.263-2.262-2.263-2.263ZM4.285 9.702l-2.263 2.263 2.263 2.262 2.263-2.262-2.263-2.263Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.93 9.525 9.453 12l2.475 2.475L14.404 12l-2.475-2.475Z",
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
    d: "M16 10.751c-.19 0-.38-.07-.53-.22L12 7.061l-3.47 3.47c-.29.29-.77.29-1.06 0l-2-2a.754.754 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0l6 6c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Zm-4-5.5c.19 0 .38.07.53.22L16 8.941l.94-.94L12 3.061l-4.94 4.94.94.94 3.47-3.47c.15-.15.34-.22.53-.22ZM12 22.751c-.19 0-.38-.07-.53-.22l-6-6a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0l3.47 3.47 3.47-3.47c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22Zm-4.94-6.75 4.94 4.94 4.94-4.94-.94-.94-3.47 3.47c-.29.29-.77.29-1.06 0L8 15.061l-.94.94ZM19.75 15.001c-.19 0-.38-.07-.53-.22l-2.25-2.25a.754.754 0 0 1 0-1.06l2.25-2.25c.29-.29.77-.29 1.06 0l2.25 2.25c.29.29.29.77 0 1.06l-2.25 2.25c-.15.15-.34.22-.53.22Zm-1.19-3 1.19 1.19 1.19-1.19-1.19-1.19-1.19 1.19ZM4.25 15.001c-.19 0-.38-.07-.53-.22l-2.25-2.25a.754.754 0 0 1 0-1.06l2.25-2.25c.29-.29.77-.29 1.06 0l2.25 2.25c.29.29.29.77 0 1.06l-2.25 2.25c-.15.15-.34.22-.53.22Zm-1.19-3 1.19 1.19 1.19-1.19-1.19-1.19-1.19 1.19Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 15.23c-.19 0-.38-.07-.53-.22l-2.48-2.48a.754.754 0 0 1 0-1.06l2.48-2.48c.29-.29.77-.29 1.06 0l2.48 2.48c.29.29.29.77 0 1.06l-2.48 2.48c-.15.14-.34.22-.53.22ZM10.58 12 12 13.42 13.42 12 12 10.58 10.58 12Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2 6 8l2 2 4-4 4 4 2-2-6-6ZM12 22l-6-6 2-2 4 4 4-4 2 2-6 6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M19.749 9.751 17.5 12l2.249 2.249L21.997 12 19.75 9.751ZM4.249 9.751 2 12l2.249 2.249L6.497 12 4.25 9.751ZM11.998 9.525 9.523 12l2.475 2.475L14.473 12l-2.475-2.475Z",
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

var BinanceCoin = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
BinanceCoin.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BinanceCoin.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
BinanceCoin.displayName = 'BinanceCoin';

export { BinanceCoin as default };
