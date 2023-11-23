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
    d: "M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6zM4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6zM20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.94 14H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6h-8.64",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M20 3.5H5.5c-.3 0-.6.1-.8.4l-1.5 2A1 1 0 0 0 4 7.5h14.5c.3 0 .6-.1.8-.4l1.5-2a1 1 0 0 0-.8-1.6ZM4 10h14.5c.3 0 .6.1.8.4l1.5 2A1 1 0 0 1 20 14H5.5c-.3 0-.6-.1-.8-.4l-1.5-2A1 1 0 0 1 4 10ZM20 16.5H5.5c-.3 0-.6.1-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.3 0 .6-.1.8-.4l1.5-2a1 1 0 0 0-.8-1.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M18.5 8.25H4c-.67 0-1.27-.37-1.56-.97-.3-.6-.24-1.3.16-1.83l1.5-2c.33-.44.85-.7 1.4-.7H20c.67 0 1.27.37 1.56.97.3.6.241 1.3-.159 1.83l-1.5 2c-.33.44-.85.7-1.4.7Zm-13-4c-.08 0-.15.04-.2.1l-1.5 2c-.08.11-.049.21-.019.26.03.05.09.14.22.14h14.5c.08 0 .15-.04.2-.1l1.5-2c.08-.11.05-.21.02-.26-.03-.05-.09-.14-.22-.14H5.5ZM20 14.75H5.5c-.55 0-1.07-.26-1.4-.7l-1.5-2c-.4-.53-.46-1.24-.17-1.83.3-.6.9-.97 1.56-.97h14.5c.55 0 1.071.26 1.401.7l1.5 2c.4.53.46 1.24.17 1.83-.29.6-.89.97-1.56.97Zm-16-4c-.129 0-.199.09-.219.14-.03.05-.06.15.02.26l1.5 2c.05.06.12.1.2.1H20c.13 0 .2-.09.22-.14.03-.05.06-.15-.02-.26l-1.5-2a.261.261 0 0 0-.2-.1H4ZM18.5 21.25H4c-.67 0-1.27-.37-1.56-.97-.3-.6-.24-1.3.16-1.83l1.5-2c.33-.44.85-.7 1.4-.7H20c.67 0 1.27.37 1.56.97.3.6.241 1.3-.159 1.83l-1.5 2c-.33.44-.85.7-1.4.7Zm-13-4c-.08 0-.15.04-.2.1l-1.5 2c-.08.11-.049.21-.019.26.03.05.09.14.22.14h14.5c.08 0 .15-.04.2-.1l1.5-2c.08-.11.05-.21.02-.26-.03-.05-.09-.14-.22-.14H5.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M20 3.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M4 10h14.5c.31 0 .61.15.8.4l1.5 2c.49.66.02 1.6-.8 1.6H5.5c-.31 0-.61-.15-.8-.4l-1.5-2c-.49-.66-.02-1.6.8-1.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20 16.5H5.5c-.31 0-.61.15-.8.4l-1.5 2c-.49.66-.02 1.6.8 1.6h14.5c.31 0 .61-.15.8-.4l1.5-2c.49-.66.02-1.6-.8-1.6Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
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

var Solana = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Solana.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Solana.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Solana.displayName = 'Solana';

export { Solana as default };