import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 12.75l-.31-.1-.19.6-1 3-2.5-4.68-.1-.19L6 12.25l2.18-1.09 1.82-.91.47-.21L12 5.25l1.55 3.4.95 2.1-.41.21L18 12.25l-4.5 2.5z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m12 5.25-2.5 8 5-2.5-2.5-5.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.08 10.96 18 12.25l-4.5 2.5-.4-.13L6 12.25l4-2M13 15.25l-1 3-2.5-4.68",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",
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
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m14.5 10.748-.41.21h-.01l-4.68 2.42 1.07-3.34 3.08-1.39.95 2.1Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m13.55 8.65-3.08 1.39L12 5.25l1.55 3.4ZM10.47 10.04 9.4 13.38 6 12.25l2.18-1.09 1.82-.91.47-.21Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m18 12.25-4.5 2.5-.31-.1-.09-.03-3.7-1.24 4.68-2.42h.01L18 12.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m13.19 14.649-.19.6-1 3-2.5-4.68-.1-.19 3.7 1.24.09.03Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m12 5.2-2.5 8 5-2.4L12 5.2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m14.1 11 3.9 1.2-4.5 2.6-.4-.2L6 12.2l4-2M13 15.2l-1 3-2.5-4.6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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
    d: "M9.5 14c-.17 0-.35-.06-.49-.18a.746.746 0 0 1-.23-.79l2.5-8c.09-.3.36-.51.67-.52.32-.02.6.16.73.44l2.5 5.5c.17.37.01.8-.35.98l-5 2.5c-.1.04-.22.07-.33.07Zm2.63-6.65-1.39 4.44 2.78-1.39-1.39-3.05Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.5 15.5c-.08 0-.16-.01-.24-.04l-7.5-2.5a.753.753 0 0 1-.51-.66c-.02-.3.14-.59.41-.72l4-2c.37-.18.82-.03 1.01.34.19.37.04.82-.34 1.01l-2.38 1.19 5.47 1.82 2.72-1.51-2.29-.76a.754.754 0 0 1-.48-.95c.13-.39.55-.61.95-.48l3.92 1.29a.753.753 0 0 1 .13 1.37l-4.5 2.5a.71.71 0 0 1-.37.1Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 19c-.28 0-.53-.15-.66-.4l-2.5-4.68c-.2-.37-.06-.82.31-1.02.37-.2.82-.06 1.02.31l1.68 3.14.45-1.35c.13-.39.56-.6.95-.47.39.13.6.56.47.95l-1 3c-.09.28-.35.48-.65.51-.03.01-.05.01-.07.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "m12 5.25-2.5 8 5-2.5-2.5-5.5Z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.08 10.96 18 12.25l-4.5 2.5-.4-.13L6 12.25l4-2M13 15.25l-1 3-2.5-4.68"
  })), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",
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

var Nebulas = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Nebulas.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Nebulas.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Nebulas.displayName = 'Nebulas';

export { Nebulas as default };
