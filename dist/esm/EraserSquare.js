import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-3.67 13.75-1.26 1.26c-.64.65-1.69.65-2.34 0l-1.93-1.93c-.65-.65-.64-1.69 0-2.34l1.27-1.26c.2-.19.51-.19.71 0l3.56 3.56c.19.2.19.52-.01.71Zm4.49-4.49-3.08 3.08c-.2.2-.51.2-.71 0l-3.56-3.56c-.2-.2-.2-.51 0-.71l3.08-3.08c.64-.65 1.69-.65 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m6.991 15.082 1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34ZM9.313 10.422l4.27 4.27",
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
    d: "M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m13.581 14.692-2.32 2.32c-.64.65-1.69.65-2.34 0l-1.93-1.93c-.65-.65-.65-1.7 0-2.34l2.32-2.32 4.27 4.27Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".6",
    d: "m17.009 11.261-3.43 3.43-4.27-4.27 3.43-3.43c.64-.65 1.69-.65 2.34 0l1.93 1.93c.65.65.65 1.7 0 2.34Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m6.99 15.08 1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34ZM9.31 10.42l4.27 4.27",
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
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.091 18.249c-.62 0-1.23-.23-1.7-.7l-1.94-1.94c-.94-.94-.94-2.46 0-3.4l5.75-5.75c.94-.94 2.46-.94 3.4 0l1.94 1.94c.94.94.94 2.46 0 3.4l-5.75 5.75c-.47.46-1.08.7-1.7.7Zm-2.57-3.7 1.94 1.94c.35.35.93.35 1.28 0l5.75-5.75c.35-.35.35-.93 0-1.28l-1.94-1.94a.911.911 0 0 0-1.28 0l-5.75 5.75c-.35.35-.35.92 0 1.28Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.582 15.442c-.19 0-.38-.07-.53-.22l-4.28-4.28a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l4.28 4.28c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "m6.991 15.082 1.94 1.94c.64.64 1.7.64 2.34 0l5.75-5.75c.64-.64.64-1.7 0-2.34l-1.94-1.94c-.64-.64-1.7-.64-2.34 0l-5.75 5.75c-.65.64-.65 1.69 0 2.34ZM9.313 10.422l4.27 4.27"
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

var EraserSquare = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
EraserSquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
EraserSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
EraserSquare.displayName = 'EraserSquare';

export { EraserSquare as default };