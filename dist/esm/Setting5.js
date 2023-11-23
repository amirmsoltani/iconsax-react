import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M18.51 8.25c.5 0 .9-.4.9-.9V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4.65c0 .49.41.9.9.9ZM12 15.75c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9v-4.65c0-.49-.4-.9-.9-.9ZM5.49 8.25c.5 0 .9-.4.9-.9V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v4.65c0 .49.4.9.9.9ZM7.35 10.172H3.63c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.41-.9-.9-.9ZM20.37 10.172h-3.72c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.4-.9-.9-.9ZM13.86 12.03h-.96V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9.33h-.96c-.5 0-.9.4-.9.9s.4.9.9.9h3.72c.5 0 .9-.4.9-.9s-.4-.9-.9-.9Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 18v-7M19 22v-1M5 18v-7M5 22v-1M19 7V2M12 22v-5M12 13V2M5 7V2M3 11h4M17 11h4M10 13h4",
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
    d: "M18.51 1.8c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9V2.7c0-.5-.4-.9-.9-.9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 15.75c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9v-4.65c0-.49-.4-.9-.9-.9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M5.49 1.8c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9V2.7c0-.5-.41-.9-.9-.9ZM7.35 10.172H3.63c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.41-.9-.9-.9ZM20.37 10.172h-3.72c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.4-.9-.9-.9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.86 12.03h-.96V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9.33h-.96c-.5 0-.9.4-.9.9s.4.9.9.9h3.72c.5 0 .9-.4.9-.9s-.4-.9-.9-.9Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 22V11M19 7V2M12 22v-5M12 13V2M5 22V11M5 7V2M3 11h4M17 11h4M10 13h4",
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
    d: "M19 22.75c-.41 0-.75-.34-.75-.75V11c0-.41.34-.75.75-.75s.75.34.75.75v11c0 .41-.34.75-.75.75ZM19 7.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM12 22.75c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75ZM12 13.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v11c0 .41-.34.75-.75.75ZM5 22.75c-.41 0-.75-.34-.75-.75V11c0-.41.34-.75.75-.75s.75.34.75.75v11c0 .41-.34.75-.75.75ZM5 7.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 11.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 11.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75ZM14 13.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 7V2M12 22v-5M5 7V2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M5 22V11M3 11h4"
  })), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M19 22V11M17 11h4"
  })), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 13V2M10 13h4"
  })));
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

var Setting5 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Setting5.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Setting5.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Setting5.displayName = 'Setting5';

export { Setting5 as default };
