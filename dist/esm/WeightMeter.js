import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16 2H8C5 2 3 4 3 7v10c0 3 2 5 5 5h8c3 0 5-2 5-5V7c0-3-2-5-5-5Zm1.57 6.48-2.18 3.5c-.06.09-.16.16-.26.17h-.05c-.09 0-.18-.03-.25-.09a4.244 4.244 0 0 0-5.64 0 .369.369 0 0 1-.56-.08l-2.18-3.5c-.12-.15-.09-.35.05-.48a8.274 8.274 0 0 1 11 0c.14.13.17.33.07.48Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M3 12.98V15c0 5 2 7 7 7h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.25 8.292a7.905 7.905 0 0 0-10.5 0l2.18 3.5a4.613 4.613 0 0 1 6.14 0",
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
    d: "M8 22h8c3 0 5-2 5-5V7c0-3-2-5-5-5H8C5 2 3 4 3 7v10c0 3 2 5 5 5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.5 7.999a8.274 8.274 0 0 0-11 0c-.14.13-.17.33-.07.48l2.18 3.5c.06.09.16.16.26.17.11.02.22-.02.3-.09a4.244 4.244 0 0 1 5.64 0c.07.06.16.09.25.09h.05c.11-.02.21-.08.26-.17l2.18-3.5c.12-.15.09-.35-.05-.48Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.25 8.29a7.905 7.905 0 0 0-10.5 0l2.18 3.5a4.613 4.613 0 0 1 6.14 0l2.18-3.5Z",
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
    d: "M14 22.75h-4c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-4-20C5.39 2.75 3.75 4.39 3.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-4Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.07 12.542c-.18 0-.36-.07-.5-.19a3.875 3.875 0 0 0-5.14 0c-.16.15-.38.21-.61.18a.748.748 0 0 1-.53-.35l-2.18-3.5a.763.763 0 0 1 .14-.96 8.666 8.666 0 0 1 11.5 0c.27.24.33.65.14.96l-2.18 3.5a.78.78 0 0 1-.53.35c-.04 0-.08.01-.11.01ZM12 9.872c1 0 1.99.28 2.86.83l1.4-2.25c-2.53-1.88-6-1.88-8.53 0l1.4 2.25c.88-.56 1.87-.83 2.87-.83Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M17.25 8.292a7.905 7.905 0 0 0-10.5 0l2.18 3.5a4.613 4.613 0 0 1 6.14 0l2.18-3.5Z",
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

var WeightMeter = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
WeightMeter.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
WeightMeter.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
WeightMeter.displayName = 'WeightMeter';

export { WeightMeter as default };
