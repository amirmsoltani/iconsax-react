import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M11.129 15.879c-.25 0-.5-.13-.64-.36-.21-.35-.1-.82.26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .26-.14.51-.36.64l-1.25.75c-.14.07-.27.11-.4.11Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.091 6.98c-.85-.94-2.26-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.08-3.76 3.76v.04h-.24c-2.07 0-3.49.47-4.33 1.41-.99 1.11-.96 2.58-.86 3.59l.01.07.07.805a.5.5 0 0 0 .226.378c.283.183.585.376.874.537.14.09.29.17.44.25 1.13.62 2.34 1.11 3.58 1.45a4.755 4.755 0 0 0 4.75 4.69c2.62 0 4.75-2.13 4.75-4.75v-.04c1.26-.38 2.47-.91 3.6-1.57.06-.03.1-.06.15-.09.395-.215.804-.496 1.178-.761a.498.498 0 0 0 .207-.351l.015-.139.05-.47c.01-.06.01-.11.02-.18.08-1 .06-2.38-.88-3.42ZM8.911 5.53c0-1.7 0-2.34 2.33-2.34h1.52c2.33 0 2.33.64 2.33 2.34v.04h-6.18v-.04Zm3.09 11.72a3.25 3.25 0 0 1-3.22-2.84c-.02-.13-.03-.27-.03-.41 0-1.79 1.46-3.25 3.25-3.25s3.25 1.46 3.25 3.25c0 .12-.01.23-.02.34v.01a3.258 3.258 0 0 1-3.23 2.9Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.042 13.731c.248-.138.57.062.545.345l-.355 3.885c-.21 2-1.03 4.04-5.43 4.04h-7.62c-4.4 0-5.22-2.04-5.42-4.03l-.346-3.703c-.027-.288.28-.482.536-.347.78.43 1.59.81 2.42 1.11a1 1 0 0 1 .62.69c.75 2.6 3.17 4.53 6.01 4.53 2.89 0 5.33-1.97 6.04-4.67a1 1 0 0 1 .61-.7c.84-.33 1.64-.72 2.39-1.15Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.25 12.95v.93c0 .35-.18.68-.49.86l-.76.46",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.95 18.43C20.74 20.39 20.02 22 16 22H8c-4.02 0-4.74-1.61-4.95-3.57l-.75-8C2.03 7.99 2.73 6 7 6h10c4.27 0 4.97 1.99 4.7 4.43L21.37 14M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.652 11a16.335 16.335 0 0 1-5.64 2.64M2.621 11.27c1.67 1.14 3.49 1.95 5.38 2.41",
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
    d: "M11.129 15.879c-.25 0-.5-.13-.64-.36-.21-.35-.1-.82.26-1.03l.89-.53v-1.08c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 .26-.14.51-.36.64l-1.25.75c-.14.07-.27.11-.4.11Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m21.848 11.41-.62 6.78c-.21 2-1.03 4.04-5.43 4.04h-7.62c-4.4 0-5.22-2.04-5.42-4.03l-.61-6.51c.01.01.02.02.04.03.34.22.67.44 1.03.64.14.09.29.17.44.25 1.13.62 2.34 1.11 3.59 1.45.5.15 1.01.26 1.53.35a3.25 3.25 0 0 0 3.22 2.84c1.67 0 3.05-1.27 3.23-2.9v-.01c.51-.1 1.02-.23 1.52-.38 1.25-.39 2.46-.91 3.59-1.57.06-.03.11-.06.15-.09.46-.25.9-.54 1.32-.84.02-.01.03-.03.04-.05Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.091 6.98c-.85-.94-2.26-1.41-4.33-1.41h-.24v-.04c0-1.68 0-3.76-3.76-3.76h-1.52c-3.76 0-3.76 2.08-3.76 3.76v.04h-.24c-2.07 0-3.49.47-4.33 1.41-.99 1.11-.96 2.58-.86 3.59l.01.07.09 1.05c.01.01.03.02.05.03.34.22.67.44 1.03.64.14.09.29.17.44.25 1.13.62 2.34 1.11 3.58 1.45a4.755 4.755 0 0 0 4.75 4.69c2.62 0 4.75-2.13 4.75-4.75v-.04c1.26-.38 2.47-.91 3.6-1.57.06-.03.1-.06.15-.09.46-.25.9-.54 1.32-.84.01-.01.03-.03.04-.05l.04-.36.05-.47c.01-.06.01-.11.02-.18.08-1 .06-2.38-.88-3.42ZM8.911 5.53c0-1.7 0-2.34 2.33-2.34h1.52c2.33 0 2.33.64 2.33 2.34v.04h-6.18v-.04Zm3.09 11.72a3.25 3.25 0 0 1-3.22-2.84c-.02-.13-.03-.27-.03-.41 0-1.79 1.46-3.25 3.25-3.25s3.25 1.46 3.25 3.25c0 .12-.01.23-.02.34v.01a3.258 3.258 0 0 1-3.23 2.9Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.25 12.95v.93c0 .35-.18.68-.49.86l-.76.46",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.65 11a16.335 16.335 0 0 1-5.64 2.64M2.62 11.27c1.67 1.14 3.49 1.95 5.38 2.41",
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
    d: "M12 18.95c-2.62 0-4.75-2.13-4.75-4.75S9.38 9.45 12 9.45s4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25-1.46-3.25-3.25-3.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11 15.95c-.25 0-.5-.13-.64-.36-.21-.36-.1-.82.26-1.03l.76-.46c.08-.04.12-.13.12-.21v-.93c0-.41.34-.75.75-.75s.75.33.75.74v.93c0 .61-.33 1.19-.85 1.5l-.76.46c-.12.08-.26.11-.39.11Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.998 22.752h-8c-4.62 0-5.48-2.15-5.7-4.24l-.75-8.01c-.11-1.05-.14-2.6.9-3.76.9-1 2.39-1.48 4.55-1.48h10c2.17 0 3.66.49 4.55 1.48 1.04 1.16 1.01 2.71.9 3.77l-.75 7.99c-.22 2.1-1.08 4.25-5.7 4.25Zm-9-16c-1.69 0-2.85.33-3.44.99-.49.54-.65 1.37-.52 2.61l.75 8.01c.17 1.58.6 2.89 4.21 2.89h8c3.6 0 4.04-1.31 4.21-2.9l.75-7.99c.13-1.25-.03-2.08-.52-2.62-.59-.66-1.75-.99-3.44-.99h-10Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 6.75c-.41 0-.75-.34-.75-.75v-.8c0-1.78 0-2.45-2.45-2.45h-1.6c-2.45 0-2.45.67-2.45 2.45V6c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.8c0-1.76 0-3.95 3.95-3.95h1.6c3.95 0 3.95 2.19 3.95 3.95V6c0 .41-.34.75-.75.75ZM16.01 14.392c-.34 0-.64-.23-.73-.57-.1-.4.14-.81.54-.91 1.95-.49 3.76-1.34 5.38-2.52.33-.24.8-.17 1.05.17.24.33.17.8-.17 1.05a17.157 17.157 0 0 1-5.9 2.76.88.88 0 0 1-.17.02ZM8 14.42c-.06 0-.12-.01-.18-.02-2.01-.49-3.9-1.34-5.63-2.52a.753.753 0 0 1-.2-1.04c.23-.34.7-.43 1.04-.2 1.58 1.08 3.3 1.85 5.14 2.3.4.1.65.5.55.91-.07.34-.38.57-.72.57Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M12.25 12.95v.93c0 .35-.18.68-.49.86l-.76.46",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6",
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
    d: "M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.648 11a16.335 16.335 0 0 1-5.64 2.64M2.617 11.27c1.67 1.14 3.49 1.95 5.38 2.41"
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

var BrifecaseTimer = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
BrifecaseTimer.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BrifecaseTimer.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
BrifecaseTimer.displayName = 'BrifecaseTimer';

export { BrifecaseTimer as default };