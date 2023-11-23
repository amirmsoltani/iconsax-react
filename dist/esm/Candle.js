import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 4.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.5H5.5C3.91 4.5 3 5.41 3 7v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-6.5h.25c1.59 0 2.5-.91 2.5-2.5V7c0-1.59-.91-2.5-2.5-2.5ZM18.5 8.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6.5h-.25c-1.59 0-2.5.91-2.5 2.5v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.5h.25c1.59 0 2.5-.91 2.5-2.5v-6c0-1.59-.91-2.5-2.5-2.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.5 22v-7M6.5 5V2M17.5 22v-3M17.5 9V2M9.5 11.02V13c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2M20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2Z",
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
    d: "M7.5 4.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.5H5.5C3.91 4.5 3 5.41 3 7v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-6.5h.25c1.59 0 2.5-.91 2.5-2.5V7c0-1.59-.91-2.5-2.5-2.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.5 8.5h-.25V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v6.5h-.25c-1.59 0-2.5.91-2.5 2.5v6c0 1.59.91 2.5 2.5 2.5h.25V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.5h.25c1.59 0 2.5-.91 2.5-2.5v-6c0-1.59-.91-2.5-2.5-2.5Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.5 22v-7M6.5 5V2M17.5 22v-3M17.5 9V2M9.5 7v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2ZM20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2Z",
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
    d: "M6.5 22.75c-.41 0-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75ZM6.5 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM17.5 22.75c-.41 0-.75-.34-.75-.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM17.5 9.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 15.75h-2c-1.72 0-2.75-1.03-2.75-2.75V7c0-1.72 1.03-2.75 2.75-2.75h2c1.72 0 2.75 1.03 2.75 2.75v6c0 1.72-1.03 2.75-2.75 2.75Zm-2-10c-.89 0-1.25.36-1.25 1.25v6c0 .89.36 1.25 1.25 1.25h2c.89 0 1.25-.36 1.25-1.25V7c0-.89-.36-1.25-1.25-1.25h-2ZM18.5 19.75h-2c-1.72 0-2.75-1.03-2.75-2.75v-6c0-1.72 1.03-2.75 2.75-2.75h2c1.72 0 2.75 1.03 2.75 2.75v6c0 1.72-1.03 2.75-2.75 2.75Zm-2-10c-.89 0-1.25.36-1.25 1.25v6c0 .89.36 1.25 1.25 1.25h2c.89 0 1.25-.36 1.25-1.25v-6c0-.89-.36-1.25-1.25-1.25h-2Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6.5 22v-7M6.5 5V2M17.5 22v-3M17.5 9V2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.5 7v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2V7c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2ZM20.5 11v6c0 1.1-.5 2-2 2h-2c-1.5 0-2-.9-2-2v-6c0-1.1.5-2 2-2h2c1.5 0 2 .9 2 2Z",
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

var Candle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Candle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Candle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Candle.displayName = 'Candle';

export { Candle as default };
