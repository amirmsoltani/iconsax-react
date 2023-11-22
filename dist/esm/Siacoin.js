import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-1.49.3-2.92.89-4.28a.76.76 0 01.99-.39c.38.17.55.61.39.99-.5 1.16-.76 2.4-.76 3.68 0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25c-1.29 0-2.55.26-3.72.78a.75.75 0 01-.61-1.37c1.37-.6 2.82-.91 4.33-.91 5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M16 15.25V12c0-2.35-1.9-4.25-4.25-4.25S7.5 9.65 7.5 12s1.9 4.25 4.25 4.25H15c.55 0 1-.45 1-1zM5 6.881a1.88 1.88 0 100-3.76 1.88 1.88 0 000 3.76z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.3 21.03c-1.3.62-2.76.97-4.3.97-5.52 0-10-4.48-10-10 0-1.41.29-2.76.82-3.98M7.97 2.84C9.2 2.3 10.56 2 12 2c5.52 0 10 4.48 10 10 0 2.29-.77 4.4-2.06 6.08",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 16.25V12c0-2.35-1.9-4.25-4.25-4.25S7.5 9.65 7.5 12s1.9 4.25 4.25 4.25H16ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
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
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-1.49.3-2.92.89-4.28a.76.76 0 0 1 .99-.39c.38.17.55.61.39.99-.5 1.16-.76 2.4-.76 3.68 0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75c-1.29 0-2.55.26-3.72.78a.75.75 0 0 1-.61-1.37c1.37-.6 2.82-.91 4.33-.91 5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 15.25V12c0-2.35-1.9-4.25-4.25-4.25S7.5 9.65 7.5 12s1.9 4.25 4.25 4.25H15c.55 0 1-.45 1-1ZM5 6.881a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M8 2.8c1.2-.5 2.6-.8 4-.8 5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12c0-1.4.3-2.8.8-4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 16.2V12c0-2.3-1.9-4.2-4.2-4.2-2.3 0-4.2 1.9-4.2 4.2 0 2.3 1.9 4.2 4.2 4.2H16ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
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
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-1.49.3-2.92.89-4.28a.76.76 0 0 1 .99-.39c.38.17.55.61.39.99-.5 1.16-.76 2.4-.76 3.68 0 5.1 4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25c-1.29 0-2.55.26-3.72.78a.75.75 0 0 1-.61-1.37c1.37-.6 2.82-.91 4.33-.91 5.93 0 10.75 4.82 10.75 10.75S17.93 22.75 12 22.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 17h-4.25c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5v4.25c0 .41-.34.75-.75.75Zm-4.25-8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5h3.5V12c0-1.93-1.57-3.5-3.5-3.5ZM5 7.25C3.76 7.25 2.75 6.24 2.75 5S3.76 2.75 5 2.75 7.25 3.76 7.25 5 6.24 7.25 5 7.25Zm0-3c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7.97 2.84C9.2 2.3 10.56 2 12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12c0-1.41.29-2.76.82-3.98",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M16 16.25V12c0-2.35-1.9-4.25-4.25-4.25S7.5 9.65 7.5 12s1.9 4.25 4.25 4.25H16ZM5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
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

var Siacoin = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Siacoin.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Siacoin.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Siacoin.displayName = 'Siacoin';

export { Siacoin as default };
