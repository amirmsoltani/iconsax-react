import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M15.98 19.379h1.04c1.59 0 2.23-.6 2.23-2.12V5.379h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12ZM7.48 14.379h1.04c1.59 0 2.23-.61 2.23-2.12v-6.88h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.25 6.119H2.75c-.41 0-.75-.33-.75-.74s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.26 5.102v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1v-11.8M10.76 5.102v6.8c0 1.5-.64 2.1-2.23 2.1M5.26 5.102v6.8M2 5h20",
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
    d: "M15.98 19.379h1.04c1.59 0 2.23-.6 2.23-2.12V5.379h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M7.48 14.379h1.04c1.59 0 2.23-.61 2.23-2.12v-6.88h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.25 6.119H2.75c-.41 0-.75-.33-.75-.74s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.26 5.1v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1V5.1M5.26 5.1v6.8c0 1.5.64 2.1 2.23 2.1h1.04c1.59 0 2.23-.6 2.23-2.1V5.1M2 5h20",
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
    d: "M17.03 19.752h-1.04c-2.01 0-2.98-.93-2.98-2.85v-11.8c0-.41.34-.75.75-.75s.75.34.75.75v11.8c0 1.01.21 1.35 1.48 1.35h1.04c1.27 0 1.48-.34 1.48-1.35v-11.8c0-.41.34-.75.75-.75s.75.34.75.75v11.8c0 1.92-.97 2.85-2.98 2.85ZM8.53 14.752H7.49c-2.01 0-2.98-.93-2.98-2.85v-6.8c0-.41.34-.75.75-.75s.75.34.75.75v6.8c0 1.01.21 1.35 1.48 1.35h1.04c1.27 0 1.48-.34 1.48-1.35v-6.8c0-.41.34-.75.75-.75s.75.34.75.75v6.8c0 1.92-.97 2.85-2.98 2.85Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 5.75H2a.749.749 0 1 1 0-1.5h20a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M19.26 5.102v11.8c0 1.5-.64 2.1-2.23 2.1h-1.04c-1.59 0-2.23-.6-2.23-2.1v-11.8M5.26 5.102v6.8c0 1.5.64 2.1 2.23 2.1h1.04c1.59 0 2.23-.6 2.23-2.1v-6.8",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 5h20",
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

var AlignTop = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
AlignTop.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlignTop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
AlignTop.displayName = 'AlignTop';

export { AlignTop as default };
