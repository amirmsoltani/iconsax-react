import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M17 3H7C4 3 2 4.5 2 8v7c0 3.5 2 5 5 5h3.57c.59 0 1.07-.52.99-1.11-.1-.71-.08-1.45.07-2.21.53-2.6 2.67-4.67 5.29-5.1a6.51 6.51 0 0 1 3.66.45c.67.29 1.42-.17 1.42-.9V8c0-3.5-2-5-5-5Zm.47 5.59-3.13 2.5c-.66.53-1.5.79-2.34.79-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.768.768 0 0 1-.12-1.06c.26-.32.73-.38 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.33.21.8-.11 1.06Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 13c-2.76 0-5 2.23-5 5 0 2.76 2.24 5 5 5 2.77 0 5-2.24 5-5 0-2.77-2.23-5-5-5Zm2.05 4.55-.37.36-2.18 2.19c-.1.09-.29.19-.43.21l-.98.14c-.35.05-.6-.2-.55-.55l.14-.98a.87.87 0 0 1 .21-.43l2.18-2.17.36-.37c.24-.24.51-.4.79-.4.24 0 .51.11.81.4.67.65.46 1.16.02 1.6Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3M12 20.499H7c-3 0-5-1.5-5-5v-3.03",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M19.21 14.768l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.7 15.277c.3 1.08 1.14 1.92 2.22 2.22",
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
    d: "M7 3h10c3 0 5 1.5 5 5v3.14c0 .73-.75 1.19-1.42.9a6.51 6.51 0 0 0-3.66-.45c-2.62.43-4.76 2.5-5.29 5.1-.15.76-.17 1.5-.07 2.21.08.59-.4 1.11-.99 1.11H7c-3 0-5-1.5-5-5v-7C2 4.5 4 3 7 3Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 11.872c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79ZM18 13c-2.76 0-5 2.23-5 5 0 2.76 2.24 5 5 5 2.77 0 5-2.24 5-5 0-2.77-2.23-5-5-5Zm2.05 4.55-.37.36-2.17 2.18c-.1.09-.29.19-.43.21l-.98.14c-.35.05-.6-.2-.55-.55l.14-.98a.87.87 0 0 1 .21-.43l2.18-2.17.36-.37c.24-.24.51-.4.79-.4.24 0 .51.11.81.4.66.66.45 1.17.01 1.61Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9M19.21 14.77l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.7 15.28c.3 1.08 1.14 1.92 2.22 2.22",
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
    d: "M12 21.25H7c-3.65 0-5.75-2.1-5.75-5.75v-7c0-3.65 2.1-5.75 5.75-5.75h10c3.65 0 5.75 2.1 5.75 5.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-3c0-2.86-1.39-4.25-4.25-4.25H7c-2.86 0-4.25 1.39-4.25 4.25v7c0 2.86 1.39 4.25 4.25 4.25h5c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.999 12.868c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1-.12-1.05c.26-.32.73-.37 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.79-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79ZM15.82 21.782c-.38 0-.74-.14-1-.4-.31-.31-.45-.76-.38-1.23l.19-1.35c.05-.35.26-.77.51-1.02l3.54-3.54c.48-.48.95-.73 1.46-.78.62-.06 1.24.2 1.82.78.58.58.84 1.19.78 1.82-.05.5-.31.98-.78 1.46l-3.54 3.54c-.25.25-.67.46-1.02.51l-1.35.19c-.08.01-.15.02-.23.02Zm4.49-6.83h-.03c-.14.01-.33.14-.54.35l-3.54 3.54a.38.38 0 0 0-.08.17l-.18 1.25 1.25-.18c.04-.01.14-.06.17-.09l3.54-3.54c.21-.22.34-.4.35-.54.02-.2-.18-.44-.35-.61-.16-.16-.39-.35-.59-.35Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.92 18.25c-.07 0-.14-.01-.2-.03a3.977 3.977 0 0 1-2.74-2.74.76.76 0 0 1 .52-.93c.4-.11.81.12.92.52.23.82.88 1.47 1.7 1.7a.755.755 0 0 1-.2 1.48Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9",
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
    d: "m19.21 14.768-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01Z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.7 15.277c.3 1.08 1.14 1.92 2.22 2.22"
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

var SmsEdit = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
SmsEdit.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SmsEdit.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
SmsEdit.displayName = 'SmsEdit';

export { SmsEdit as default };
