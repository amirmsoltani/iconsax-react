import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.42 7.951a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0ZM8.25 22.389c-.09 0-.191-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.341-6.73c.05-.41.44-.7.84-.65.41.05.7.43.65.84a9.19 9.19 0 0 0 1.15 5.79 9.104 9.104 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.29-.4.47-.69.47ZM5.85 5.23c-.22 0-.44-.1-.59-.29a.74.74 0 0 1 .13-1.05C7.29 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.153 9.153 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16ZM15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.044 9.044 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.254 6.254 0 0 1 5.02-1.8M8.251 21.639c-2-.8-3.75-2.25-4.91-4.26a9.89 9.89 0 0 1-1.25-6.25M5.85 4.48A9.936 9.936 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.639c2-.8 3.75-2.25 4.91-4.26a9.89 9.89 0 0 0 1.25-6.25",
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
    d: "M16.42 7.951a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M8.25 22.389c-.09 0-.19-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.341-6.73c.05-.41.44-.7.84-.65.41.05.7.43.65.84-.26 2.02.14 4.02 1.15 5.78a9.104 9.104 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.3-.4.48-.69.48ZM5.85 5.23c-.22 0-.44-.1-.59-.29-.26-.33-.2-.8.13-1.05C7.3 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.111 9.111 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16ZM15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.044 9.044 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.42 7.95a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0ZM8.25 21.64c-2-.8-3.75-2.25-4.91-4.26a9.89 9.89 0 0 1-1.25-6.25M5.85 4.48A9.936 9.936 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.64c2-.8 3.75-2.25 4.91-4.26a9.89 9.89 0 0 0 1.25-6.25",
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
    d: "M12 19.369c-1.79 0-3.58-.68-4.95-2.05a7.007 7.007 0 0 1 0-9.9 7.007 7.007 0 0 1 9.9 0 7.007 7.007 0 0 1 0 9.9 6.973 6.973 0 0 1-4.95 2.05Zm0-12.5c-1.41 0-2.82.54-3.89 1.61a5.517 5.517 0 0 0 0 7.78 5.507 5.507 0 0 0 7.78 0 5.517 5.517 0 0 0 0-7.78A5.49 5.49 0 0 0 12 6.869Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.25 22.389c-.09 0-.19-.02-.28-.05-2.25-.9-4.07-2.49-5.29-4.59a10.6 10.6 0 0 1-1.341-6.73c.05-.41.43-.7.84-.65.41.05.7.43.65.84-.26 2.02.14 4.02 1.15 5.78a9.104 9.104 0 0 0 4.54 3.94c.38.16.57.59.42.98-.11.3-.4.48-.69.48ZM5.85 5.23c-.22 0-.44-.1-.59-.29-.26-.33-.2-.8.13-1.05C7.3 2.4 9.58 1.61 12 1.61c2.36 0 4.61.76 6.5 2.2A.749.749 0 1 1 17.59 5 9.111 9.111 0 0 0 12 3.11c-2.08 0-4.05.68-5.69 1.96-.14.11-.3.16-.46.16ZM15.75 22.39c-.3 0-.58-.18-.7-.47a.76.76 0 0 1 .42-.98c1.93-.78 3.5-2.14 4.54-3.94a9.044 9.044 0 0 0 1.15-5.78c-.05-.41.24-.79.65-.84.4-.05.79.24.84.65.3 2.35-.16 4.68-1.34 6.73-1.21 2.1-3.04 3.68-5.29 4.59-.08.02-.17.04-.27.04Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.42 7.951a6.253 6.253 0 0 1 0 8.84 6.253 6.253 0 0 1-8.84 0 6.253 6.253 0 0 1 0-8.84 6.253 6.253 0 0 1 8.84 0Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M8.251 21.639c-2-.8-3.75-2.25-4.91-4.26a9.89 9.89 0 0 1-1.25-6.25M5.85 4.48A9.936 9.936 0 0 1 12 2.36c2.27 0 4.36.77 6.04 2.05M15.75 21.639c2-.8 3.75-2.25 4.91-4.26a9.89 9.89 0 0 0 1.25-6.25",
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

var Story = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Story.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Story.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Story.displayName = 'Story';

export { Story as default };