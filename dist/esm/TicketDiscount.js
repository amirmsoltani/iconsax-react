import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M21.3 10.84c.39 0 .7-.31.7-.7v-.93c0-4.1-1.25-5.35-5.35-5.35h-9.3C3.25 3.86 2 5.11 2 9.21v.47c0 .39.31.7.7.7.9 0 1.63.73 1.63 1.63 0 .9-.73 1.62-1.63 1.62-.39 0-.7.31-.7.7v.47c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35 0-.39-.31-.7-.7-.7a1.63 1.63 0 0 1 0-3.26ZM9 8.88c.55 0 1 .45 1 1s-.44 1-1 1c-.55 0-1-.45-1-1s.44-1 1-1Zm6 7c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1Zm.9-6.4-6.73 6.73c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5M8.629 15.68l6.73-6.73",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.995 14.75h.009M8.995 9.25h.008",
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
    d: "M21.3 10.84c.39 0 .7-.31.7-.7v-.93c0-4.1-1.25-5.35-5.35-5.35h-9.3C3.25 3.86 2 5.11 2 9.21v.47c0 .39.31.7.7.7.9 0 1.63.73 1.63 1.63 0 .9-.73 1.62-1.63 1.62-.39 0-.7.31-.7.7v.47c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35 0-.39-.31-.7-.7-.7a1.63 1.63 0 0 1 0-3.26Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.998 15.879c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1ZM8.998 10.879c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1ZM8.63 16.43c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.73 6.73c-.14.15-.34.22-.53.22Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.5 12.5A2.5 2.5 0 0 1 22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5ZM9 14.75l6-6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.995 14.75h.009M8.995 9.25h.008",
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
    d: "M17 20.75H7c-4.41 0-5.75-1.34-5.75-5.75v-.5c0-.41.34-.75.75-.75.96 0 1.75-.79 1.75-1.75S2.96 10.25 2 10.25c-.41 0-.75-.34-.75-.75V9c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v1c0 .41-.34.75-.75.75-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75c.41 0 .75.34.75.75 0 4.41-1.34 5.75-5.75 5.75ZM2.75 15.16c.02 3.44.73 4.09 4.25 4.09h10c3.34 0 4.15-.59 4.24-3.59a3.25 3.25 0 0 1-2.49-3.16c0-1.53 1.07-2.82 2.5-3.16V9c0-3.57-.68-4.25-4.25-4.25H7c-3.52 0-4.23.65-4.25 4.09 1.43.34 2.5 1.63 2.5 3.16 0 1.53-1.07 2.82-2.5 3.16Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.998 15.879c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1ZM8.998 10.879c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1ZM8.63 16.43c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.73-6.73c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.73 6.73c-.14.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.5 12.5A2.5 2.5 0 0 1 22 10V9c0-4-1-5-5-5H7C3 4 2 5 2 9v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m9 14.75 6-6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M14.995 14.75h.009M8.995 9.25h.008",
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

var TicketDiscount = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
TicketDiscount.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TicketDiscount.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
TicketDiscount.displayName = 'TicketDiscount';

export { TicketDiscount as default };
