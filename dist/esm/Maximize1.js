import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.48 2H8.52C5.47 2 3 4.47 3 7.52v2.98c0 .55.45 1 1 1h4.5c2.21 0 4 1.79 4 4V20c0 .55.45 1 1 1h2.98c3.45 0 5.52-2.06 5.52-5.52V7.52C22 4.47 19.53 2 16.48 2Zm2.28 7.99c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.2l-3.73 3.74c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.73-3.75H14c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h4.01c.09 0 .18.03.26.06.03.01.05.02.07.03.06.03.11.06.16.11.02.01.04.03.06.05.05.06.09.12.13.19 0 .01.01.02.01.03.04.08.05.17.05.26.01.01.01.01.01.02v4.02Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m13 11 5.01-5.02H14M18.01 5.98v4.01M2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15v2.7C11 21.1 10.1 22 7.85 22h-2.7",
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
    d: "M16.48 2H8.52C5.07 2 3 4.06 3 7.52v7.95C3 18.94 5.07 21 8.52 21h7.95c3.46 0 5.52-2.06 5.52-5.52V7.52C22 4.06 19.93 2 16.48 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15ZM18.75 5.95c0-.09-.02-.17-.05-.26 0-.01-.01-.02-.01-.02a.64.64 0 0 0-.13-.19.265.265 0 0 0-.06-.05c-.05-.04-.1-.08-.15-.1-.02-.01-.05-.02-.07-.03a.751.751 0 0 0-.26-.05H14c-.41 0-.75.34-.75.75s.33.72.75.72h2.21l-3.74 3.75c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l3.73-3.74v2.2c0 .41.34.75.75.75s.75-.34.75-.75V5.97c0-.01 0-.01-.01-.02Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M18 12v-2M6 12h12H6Zm0 0v-2 2Zm0 0v2-2Zm12 0v2-2ZM12 6h2m-2 12V6v12Zm0 0h2-2Zm0 0h-2 2Zm0-12h-2 2Z",
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
    d: "M15 22.75h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v.98c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13 11.749c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.74-3.75H14a.749.749 0 1 1 0-1.5h4.01c.3 0 .58.18.69.46.12.28.05.6-.16.82l-5.01 5.03c-.15.15-.34.22-.53.22Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.01 10.739c-.41 0-.75-.34-.75-.75v-4.02c0-.41.34-.75.75-.75s.75.34.75.75v4.01c0 .42-.34.76-.75.76ZM7.85 22.75h-2.7c-2.66 0-3.9-1.24-3.9-3.9v-2.7c0-2.66 1.24-3.9 3.9-3.9h2.7c2.66 0 3.9 1.24 3.9 3.9v2.7c0 2.66-1.24 3.9-3.9 3.9Zm-2.7-9c-1.84 0-2.4.56-2.4 2.4v2.7c0 1.84.56 2.4 2.4 2.4h2.7c1.84 0 2.4-.56 2.4-2.4v-2.7c0-1.84-.56-2.4-2.4-2.4h-2.7Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".54",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M18 12v-2M6 12h12H6Zm0 0v-2 2Zm0 0v2-2Zm12 0v2-2ZM12 6h2m-2 12V6v12Zm0 0h2-2Zm0 0h-2 2Zm0-12h-2 2Z"
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

var Maximize1 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Maximize1.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Maximize1.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Maximize1.displayName = 'Maximize1';

export { Maximize1 as default };