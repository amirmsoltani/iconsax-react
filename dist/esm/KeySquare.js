import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M13.25 12a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-.3 11.47a3.782 3.782 0 0 1-3.8.93l-1.06 1.05c-.09.09-.25.09-.35 0l-.97-.97a.387.387 0 0 0-.53 0c-.15.14-.14.38 0 .53l.97.97c.1.1.1.26 0 .35l-.41.41c-.17.18-.5.29-.74.26l-1.09-.15c-.36-.05-.69-.39-.75-.75l-.15-1.09c-.04-.24.08-.57.24-.74l2.35-2.35c-.4-1.3-.09-2.77.94-3.8 1.47-1.47 3.87-1.47 5.35 0a3.778 3.778 0 0 1 0 5.35Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.28 13.61a4.147 4.147 0 0 1-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58c-.44-1.43-.1-3.05 1.03-4.18 1.62-1.62 4.26-1.62 5.89 0 1.62 1.61 1.62 4.25 0 5.88ZM10.45 16.282l-.85-.86",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.395 10.7h.009",
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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.89 8.11c-1.48-1.47-3.88-1.47-5.35 0a3.782 3.782 0 0 0-.94 3.8l-2.35 2.35c-.16.17-.28.5-.24.74l.15 1.09c.05.36.39.7.75.75L9 17c.24.03.57-.07.74-.25l.41-.41c.1-.09.1-.25 0-.35l-.97-.97a.387.387 0 0 1 0-.53c.14-.14.38-.14.53 0l.97.97c.09.09.25.09.35 0l1.06-1.05c1.29.4 2.77.09 3.8-.93a3.802 3.802 0 0 0 0-5.37ZM13.25 12a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z",
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
    d: "M16.28 13.61a4.147 4.147 0 0 1-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58c-.44-1.43-.1-3.05 1.03-4.18 1.62-1.62 4.26-1.62 5.89 0 1.62 1.61 1.62 4.25 0 5.88ZM10.45 16.28l-.85-.86",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.395 10.7h.008",
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
    d: "M8.81 18.25c-.07 0-.15 0-.22-.02l-1.19-.16c-.72-.1-1.35-.72-1.46-1.46l-.17-1.21c-.07-.48.13-1.09.48-1.45l2.28-2.28c-.34-1.62.15-3.3 1.34-4.48a4.919 4.919 0 0 1 6.94 0c.93.93 1.44 2.16 1.44 3.47s-.51 2.55-1.44 3.47a4.913 4.913 0 0 1-4.48 1.33l-2.29 2.28c-.29.31-.78.51-1.23.51Zm4.53-11c-.87 0-1.75.33-2.41 1-.9.9-1.22 2.21-.85 3.43.08.27.01.55-.19.75l-2.58 2.58c-.02.03-.06.14-.06.18l.17 1.2c.01.06.12.17.18.18l1.2.17c.05-.01.15-.03.18-.06l2.59-2.59c.2-.2.49-.26.75-.18 1.21.38 2.52.06 3.42-.84.64-.64 1-1.5 1-2.41 0-.91-.35-1.77-1-2.41-.65-.66-1.53-1-2.4-1Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.45 17.03c-.19 0-.38-.07-.53-.22l-.86-.86a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.86.86c.29.29.29.77 0 1.06a.71.71 0 0 1-.53.22ZM13.38 11.802c-.14 0-.27-.02-.39-.07s-.23-.13-.32-.22a.976.976 0 0 1 0-1.41c.23-.24.58-.35.9-.28.06.02.13.03.19.06s.12.06.17.09c.05.04.11.08.15.13a.976.976 0 0 1 .22 1.09c-.05.12-.12.23-.22.32-.19.19-.44.29-.7.29Z",
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
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M16.28 13.61a4.147 4.147 0 0 1-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58c-.44-1.43-.1-3.05 1.03-4.18 1.62-1.62 4.26-1.62 5.89 0 1.62 1.61 1.62 4.25 0 5.88ZM10.45 16.282l-.85-.86",
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.395 10.703h.009",
    strokeWidth: strokeWidth
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

var KeySquare = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
KeySquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
KeySquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
KeySquare.displayName = 'KeySquare';

export { KeySquare as default };
