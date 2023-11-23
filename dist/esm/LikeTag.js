import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M18 2H6C4.34 2 3 3.33 3 4.97v10.91c0 1.64 1.34 2.97 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69c.56-.56 1.33-.87 2.12-.87H18c1.66 0 3-1.33 3-2.97V4.97C21 3.33 19.66 2 18 2Zm-1.32 8.5-1.17 3.56c-.15.59-.78 1.07-1.42 1.07h-1.85c-.32 0-.77-.11-.97-.31L9.8 13.67c-.03.64-.32.91-1.03.91h-.48c-.74 0-1.04-.29-1.04-.99V8.82c0-.7.3-.99 1.04-.99h.49c.74 0 1.04.29 1.04.99v.36l1.94-2.88c.2-.31.71-.53 1.14-.36.47.16.77.68.67 1.14l-.24 1.56c-.03.13 0 .27.09.36.08.09.2.15.33.15h1.95c.38 0 .7.15.89.42.18.26.21.59.09.93Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m9.65 13.801 1.61 1.25c.21.21.68.31.99.31h1.98c.62 0 1.3-.47 1.46-1.09l1.25-3.79c.26-.73-.21-1.35-.99-1.35h-2.08c-.31 0-.57-.26-.52-.62l.26-1.66c.1-.47-.21-.99-.68-1.14-.42-.16-.94.05-1.14.36l-2.13 3.17",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 13.803v-5.09c0-.73.31-.99 1.04-.99h.52c.73 0 1.04.26 1.04.99v5.09c0 .73-.31.99-1.04.99h-.52c-.73 0-1.04-.26-1.04-.99Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3 4.97C3 3.33 4.34 2 6 2h12c1.66 0 3 1.33 3 2.97v10.91c0 1.64-1.34 2.97-3 2.97h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V9.07",
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
    d: "M18 18.862h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.982c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.58 9.569c-.19-.27-.51-.42-.89-.42h-1.95c-.13 0-.25-.05-.33-.15a.478.478 0 0 1-.1-.37l.24-1.56c.1-.46-.21-.99-.67-1.14-.43-.16-.94.06-1.14.36L9.8 9.169v-.36c0-.7-.3-.99-1.04-.99h-.49c-.74 0-1.04.29-1.04.99v4.78c0 .7.3.99 1.04.99h.49c.7 0 1-.27 1.03-.91l1.47 1.13c.2.2.65.31.97.31h1.85c.64 0 1.28-.48 1.42-1.07l1.17-3.56c.13-.32.1-.65-.09-.91Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m9.65 13.8 1.61 1.25c.21.21.68.31.99.31h1.98c.62 0 1.3-.47 1.46-1.09l1.25-3.79c.26-.73-.21-1.35-.99-1.35h-2.08c-.31 0-.57-.26-.52-.62l.26-1.66c.1-.47-.21-.99-.68-1.14-.42-.16-.94.05-1.14.36L9.66 9.24",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 13.8V8.71c0-.73.31-.99 1.04-.99h.52c.73 0 1.04.26 1.04.99v5.09c0 .73-.31.99-1.04.99h-.52c-.73 0-1.04-.26-1.04-.99Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
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
    d: "M14.23 16.108h-1.98c-.46 0-1.13-.14-1.52-.53l-1.54-1.19.92-1.19 1.61 1.25c.12.09.34.15.53.15h1.98c.3 0 .66-.26.73-.52l1.26-3.85c.03-.08.06-.19.01-.27-.04-.06-.15-.1-.28-.1h-2.08c-.37 0-.72-.16-.97-.44-.24-.28-.35-.66-.3-1.04l.26-1.67a.295.295 0 0 0-.17-.32c-.09-.03-.24.02-.28.07l-2.13 3.17-1.25-.84 2.13-3.17c.42-.63 1.31-.92 2.03-.65.81.27 1.33 1.17 1.15 2.01l-.21 1.37h1.82c.63 0 1.18.27 1.51.74.32.46.39 1.05.19 1.62l-1.24 3.78c-.23.89-1.19 1.62-2.18 1.62Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.56 15.539h-.52c-1.56 0-1.79-1.09-1.79-1.74v-5.09c0-.65.23-1.74 1.79-1.74h.52c1.56 0 1.79 1.09 1.79 1.74v5.09c0 .65-.23 1.74-1.79 1.74Zm-.78-1.51c.03 0 .11.01.26.01h.52c.16 0 .25-.02.28-.03 0-.02.01-.08.01-.21v-5.09c0-.13-.01-.2-.02-.22-.02 0-.1-.01-.27-.01h-.52c-.16 0-.25.02-.28.03 0 .02-.01.08-.01.21v5.09c0 .13.01.2.02.23 0-.01.01-.01.01-.01Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.752c-.7 0-1.41-.27-1.94-.8l-1.71-1.69c-.43-.42-.99-.65-1.59-.65H6c-2.07 0-3.75-1.67-3.75-3.72V4.982c0-2.05 1.68-3.72 3.75-3.72h12c2.07 0 3.75 1.67 3.75 3.72v10.91c0 2.05-1.68 3.72-3.75 3.72h-.76c-.6 0-1.17.23-1.59.65l-1.71 1.69c-.53.53-1.24.8-1.94.8Zm-6-20c-1.24 0-2.25 1-2.25 2.22v10.91c0 1.23 1.01 2.22 2.25 2.22h.76c1 0 1.94.39 2.65 1.09l1.71 1.69c.49.48 1.28.48 1.77 0l1.71-1.69c.71-.7 1.65-1.09 2.65-1.09H18c1.24 0 2.25-1 2.25-2.22V4.972c0-1.23-1.01-2.22-2.25-2.22H6Z",
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
    strokeWidth: strokeWidth
  }, /*#__PURE__*/React.createElement(Path, {
    d: "m9.65 13.801 1.61 1.25c.21.21.68.31.99.31h1.98c.62 0 1.3-.47 1.46-1.09l1.25-3.79c.26-.73-.21-1.35-.99-1.35h-2.08c-.31 0-.57-.26-.52-.62l.26-1.66c.1-.47-.21-.99-.68-1.14-.42-.16-.94.05-1.14.36l-2.13 3.17",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 13.803v-5.09c0-.73.31-.99 1.04-.99h.52c.73 0 1.04.26 1.04.99v5.09c0 .73-.31.99-1.04.99h-.52c-.73 0-1.04-.26-1.04-.99Z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement(Path, {
    d: "M18 18.862h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.982c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z",
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

var LikeTag = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
LikeTag.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
LikeTag.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
LikeTag.displayName = 'LikeTag';

export { LikeTag as default };