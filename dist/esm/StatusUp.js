import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2ZM7.63 18.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75v2.07Zm5.12 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75v4.15Zm5.12 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75v6.22Zm0-9.38c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.8a19.532 19.532 0 0 1-9.31 5.36c-.06.02-.12.02-.18.02-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91a18.07 18.07 0 0 0 8.75-5.11H14.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.93c.04 0 .07.02.11.02.05.01.1.01.15.03.05.02.09.05.14.08.03.02.06.03.09.05.01.01.01.02.02.02.04.04.07.08.1.12.03.04.06.07.07.11.02.04.02.08.03.13.01.05.03.1.03.16 0 .01.01.02.01.03v2.93h-.01Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.88 18.148v-2.07M12 18.152v-4.14M17.12 18.15v-6.22M17.12 5.852l-.46.54a18.882 18.882 0 0 1-9.78 6.04",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.19 5.852h2.93v2.92",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 12.97V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
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
    d: "M6.88 18.898c-.41 0-.75-.34-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75v2.07c0 .42-.34.75-.75.75ZM12 18.9c-.41 0-.75-.34-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75v4.15c0 .42-.34.75-.75.75ZM17.12 18.9c-.41 0-.75-.34-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75v6.22c0 .42-.33.75-.75.75ZM17.871 5.822c0-.05-.02-.11-.03-.16l-.03-.13c-.02-.04-.05-.07-.07-.11-.03-.04-.06-.09-.1-.12-.01-.01-.01-.02-.02-.02-.03-.02-.06-.03-.09-.05a.638.638 0 0 0-.14-.08c-.05-.02-.1-.02-.15-.03-.04-.01-.07-.02-.11-.02h-2.93c-.41 0-.75.34-.75.75s.34.75.75.75h1.25c-2.38 2.5-5.38 4.26-8.75 5.11-.4.1-.65.51-.55.91.08.34.39.57.73.57.06 0 .12-.01.18-.02 3.57-.89 6.76-2.74 9.31-5.36v.97c0 .41.34.75.75.75s.75-.34.75-.75v-2.96Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6.88 18.15v-2.07M12 18.15v-4.14M17.12 18.15v-6.22M17.12 5.85l-.46.54a18.882 18.882 0 0 1-9.78 6.04",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.19 5.85h2.93v2.92",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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
    d: "M6.88 18.898c-.41 0-.75-.34-.75-.75v-2.07c0-.41.34-.75.75-.75s.75.34.75.75v2.07c0 .42-.34.75-.75.75ZM12 18.9c-.41 0-.75-.34-.75-.75V14c0-.41.34-.75.75-.75s.75.34.75.75v4.15c0 .42-.34.75-.75.75ZM17.12 18.9c-.41 0-.75-.34-.75-.75v-6.22c0-.41.34-.75.75-.75s.75.34.75.75v6.22c0 .42-.33.75-.75.75ZM6.88 13.181c-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91 3.68-.92 6.92-2.93 9.39-5.8l.46-.54c.27-.31.74-.35 1.06-.08.31.27.35.74.08 1.06l-.46.54a19.513 19.513 0 0 1-10.17 6.28c-.06.02-.12.02-.18.02Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.12 9.522c-.41 0-.75-.34-.75-.75v-2.17h-2.18c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.93c.41 0 .75.34.75.75v2.93c0 .41-.33.74-.75.74Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6.88 18.148v-2.07M12 18.152v-4.14M17.12 18.15v-6.22",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "m17.119 5.852-.46.54a18.882 18.882 0 0 1-9.78 6.04"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.19 5.852h2.93v2.92",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement(Path, {
    d: "M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z",
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

var StatusUp = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
StatusUp.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
StatusUp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
StatusUp.displayName = 'StatusUp';

export { StatusUp as default };