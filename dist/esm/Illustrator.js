import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zm-3.13 14.68a.75.75 0 01-.95-.47l-.71-2.13H8.32l-.98 2.2c-.17.38-.61.55-.99.38-.38-.17-.55-.61-.38-.99L9.5 7.74c.13-.28.4-.47.72-.44.31.01.58.22.68.51l2.64 7.93a.76.76 0 01-.48.94zm4.04-.71c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.29c0-.41.34-.75.75-.75s.75.34.75.75v5.29zm.17-7.55c-.05.12-.12.23-.22.32-.09.09-.2.17-.32.22-.12.05-.25.07-.38.07a1.015 1.015 0 01-.93-.61c-.05-.13-.07-.25-.07-.39 0-.13.02-.26.07-.38.06-.12.13-.23.22-.32.09-.1.2-.17.32-.22.37-.15.82-.06 1.09.22a.995.995 0 01.3.7c0 .14-.03.27-.08.39z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M8.98 12.57h1.92l-.82-2.46-1.1 2.46z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M16.25 8v0",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m6.65 15.971 3.53-7.94 2.64 7.94",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.53 13.32h4.41",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.35 15.97v-5.29",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9",
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
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.89 7.8c-.1-.29-.37-.5-.68-.51-.32-.02-.6.16-.72.44l-3.53 7.93c-.17.38 0 .82.38.99.38.17.82 0 .99-.38l.98-2.2h3.08l.71 2.13a.75.75 0 0 0 .95.47c.39-.13.6-.56.47-.95L10.89 7.8Zm-1.91 4.77 1.1-2.47.82 2.47H8.98ZM16.35 9.93c-.41 0-.75.34-.75.75v5.29c0 .41.34.75.75.75s.75-.34.75-.75v-5.29c0-.42-.34-.75-.75-.75ZM17.27 7.651a.875.875 0 0 0-.22-.32c-.27-.28-.72-.37-1.09-.22-.12.05-.23.12-.32.22-.09.09-.16.2-.22.32-.05.12-.07.25-.07.38 0 .14.02.26.07.39a1.016 1.016 0 0 0 1.31.54c.12-.05.23-.13.32-.22.1-.09.17-.2.22-.32.05-.12.08-.25.08-.39 0-.13-.03-.26-.08-.38Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m6.7 16 3.5-8 3.6 8",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.5 13.3h5.4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.3 16v-5.3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.34 8.034v0",
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
    d: "M12.82 16.72a.75.75 0 0 1-.71-.51l-2.03-6.1-2.74 6.17c-.17.38-.61.55-.99.38-.38-.17-.55-.61-.38-.99L9.5 7.74c.13-.28.4-.47.72-.44.31.01.58.22.68.51l2.64 7.93c.13.39-.08.82-.47.95-.09.01-.17.03-.25.03Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.94 12.57H7.53v1.5h4.41v-1.5ZM16.35 16.72c-.41 0-.75-.34-.75-.75v-5.29c0-.41.34-.75.75-.75s.75.34.75.75v5.29c0 .41-.34.75-.75.75ZM16.35 9.031a1.015 1.015 0 0 1-.93-.61c-.05-.13-.07-.25-.07-.39 0-.13.02-.26.07-.38.06-.12.13-.23.22-.32.09-.1.2-.17.32-.22.37-.15.82-.06 1.09.22a.995.995 0 0 1 .3.7c0 .14-.03.27-.08.39s-.12.23-.22.32c-.09.09-.2.17-.32.22-.12.05-.25.07-.38.07Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M6.5 16 10 8l3.6 8",
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.3 13.3h5.4",
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.1 16v-5.3",
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.14 8.035v0",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var chooseVariant = function chooseVariant(variant, color) {
  switch (variant) {
    case 'Bold':
      return /*#__PURE__*/React.createElement(Bold, {
        color: color
      });

    case 'Broken':
      return /*#__PURE__*/React.createElement(Broken, {
        color: color
      });

    case 'Bulk':
      return /*#__PURE__*/React.createElement(Bulk, {
        color: color
      });

    case 'Linear':
      return /*#__PURE__*/React.createElement(Linear, {
        color: color
      });

    case 'Outline':
      return /*#__PURE__*/React.createElement(Outline, {
        color: color
      });

    case 'TwoTone':
      return /*#__PURE__*/React.createElement(TwoTone, {
        color: color
      });

    default:
      return /*#__PURE__*/React.createElement(Linear, {
        color: color
      });
  }
};

var Illustrator = /*#__PURE__*/forwardRef(function (_ref7, ref) {
  var variant = _ref7.variant,
      color = _ref7.color,
      size = _ref7.size,
      rest = _objectWithoutProperties(_ref7, _excluded);

  return /*#__PURE__*/React.createElement(Svg, _extends({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none"
  }), chooseVariant(variant, color));
});
Illustrator.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Illustrator.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Illustrator.displayName = 'Illustrator';

export { Illustrator as default };
