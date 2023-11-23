import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M18 6.34c-.14 0-.58.03-.58.45 0 .29.22.46.58.46s.58-.17.58-.46c0-.33-.3-.45-.58-.45zM18 5.512c.27 0 .44-.15.44-.38 0-.28-.23-.37-.44-.37s-.44.1-.44.37c0 .23.17.38.44.38z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M18 2a3.99 3.99 0 00-3.98 3.66C14 5.77 14 5.89 14 6c0 2.21 1.79 4 4 4 .35 0 .68-.04 1-.13A3.999 3.999 0 0018 2zm0 6.2c-.99 0-1.6-.5-1.6-1.31 0-.39.18-.74.5-.98-.24-.21-.37-.5-.37-.83 0-.77.59-1.28 1.46-1.28s1.46.52 1.46 1.28c0 .33-.12.62-.37.83.33.23.51.58.51.98.01.81-.6 1.31-1.59 1.31z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M18 11.498a5.42 5.42 0 01-3.1-.96.1.1 0 00-.16.08l.01 4.82a.749.749 0 11-1.5 0v-4.94c0-.33.22-.61.52-.71.08-.03.13-.14.07-.2a5.46 5.46 0 01-1.34-3.58c0-.17.01-.35.03-.52 0-.04.01-.07.01-.11a.537.537 0 00-.29-.55l-.9-.43a2.02 2.02 0 00-1.7 0l-6.5 3.06c-.7.33-1.15 1.03-1.15 1.81v7.46c0 .78.45 1.48 1.15 1.81l6.5 3.06c.54.25 1.16.25 1.7 0l6.5-3.06c.7-.33 1.15-1.03 1.15-1.81v-4.71c0-.31-.29-.55-.6-.53-.13.01-.26.01-.4.01zm-6.25 2c0 1.52-1.23 2.75-2.75 2.75s-2.75-1.23-2.75-2.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3a1.25 1.25 0 002.5 0v-3c0-.41.34-.75.75-.75s.75.34.75.75v3z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M2 10.99V9.26c0-.78.45-1.48 1.15-1.81l6.5-3.06a2.02 2.02 0 0 1 1.7 0l2.67 1.26C14 5.77 14 5.89 14 6c0 2.21 1.79 4 4 4 .35 0 .68-.04 1-.13v6.86c0 .78-.45 1.48-1.15 1.81l-6.5 3.06c-.54.25-1.16.25-1.7 0l-6.5-3.06C2.45 18.21 2 17.51 2 16.73v-1.29",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 10.5v3c0 1.1.9 2 2 2s2-.9 2-2v-3M14 10.5v4.94",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 6c0 1.86-1.27 3.43-3 3.87-.32.09-.65.13-1 .13-2.21 0-4-1.79-4-4 0-.11 0-.23.02-.34A3.99 3.99 0 0 1 18 2c2.21 0 4 1.79 4 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.09 5.91c.24-.21.37-.49.37-.83 0-.77-.58-1.28-1.46-1.28s-1.46.52-1.46 1.28c0 .33.13.62.37.83-.32.24-.5.59-.5.98 0 .81.61 1.31 1.6 1.31.99 0 1.6-.5 1.6-1.31a1.2 1.2 0 0 0-.52-.98ZM18 5.51c-.27 0-.44-.15-.44-.38 0-.28.23-.37.44-.37s.44.1.44.37c0 .23-.17.38-.44.38Zm0 .83c.28 0 .58.12.58.45 0 .29-.22.46-.58.46s-.58-.17-.58-.46c0-.41.44-.45.58-.45Z",
    fill: color
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M19 9.868v6.86c0 .78-.45 1.48-1.15 1.81l-6.5 3.06c-.54.25-1.16.25-1.7 0l-6.5-3.06c-.7-.33-1.15-1.03-1.15-1.81v-7.46c0-.78.45-1.48 1.15-1.81l6.5-3.06a2.02 2.02 0 0 1 1.7 0l2.67 1.26c-.02.11-.02.23-.02.34 0 2.21 1.79 4 4 4 .35 0 .68-.04 1-.13Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 16.25c-1.52 0-2.75-1.23-2.75-2.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3a1.25 1.25 0 0 0 2.5 0v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 1.52-1.23 2.75-2.75 2.75ZM14 16.19c-.41 0-.75-.34-.75-.75V10.5c0-.41.34-.75.75-.75s.75.34.75.75v4.94c0 .42-.34.75-.75.75ZM18 6.34c-.14 0-.58.03-.58.45 0 .29.22.46.58.46s.58-.17.58-.46c0-.33-.3-.45-.58-.45ZM18 5.512c.27 0 .44-.15.44-.38 0-.28-.23-.37-.44-.37s-.44.1-.44.37c0 .23.17.38.44.38Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18 2a3.99 3.99 0 0 0-3.98 3.66C14 5.77 14 5.89 14 6c0 2.21 1.79 4 4 4 .35 0 .68-.04 1-.13A3.999 3.999 0 0 0 18 2Zm0 6.2c-.99 0-1.6-.5-1.6-1.31 0-.39.18-.74.5-.98-.24-.21-.37-.5-.37-.83 0-.77.59-1.28 1.46-1.28s1.46.52 1.46 1.28c0 .33-.12.62-.37.83.33.23.51.58.51.98.01.81-.6 1.31-1.59 1.31Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 9.9v6.9c0 .8-.4 1.5-1.1 1.8l-6.5 3.1c-.5.2-1.2.2-1.7 0l-6.5-3.1c-.7-.3-1.1-1-1.1-1.8V9.3c0-.8.4-1.5 1.1-1.8l6.5-3.1c.5-.2 1.2-.2 1.7 0L14 5.7V6c0 2.2 1.8 4 4 4 .4 0 .7 0 1-.1Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 10.5v3c0 1.1.9 2 2 2s2-.9 2-2v-3M14 10.5v4.9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 6c0 1.9-1.3 3.4-3 3.9-.3.1-.6.1-1 .1-2.2 0-4-1.8-4-4v-.3c.2-2 1.9-3.7 4-3.7 2.2 0 4 1.8 4 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.1 5.9c.2-.2.4-.5.4-.8 0-.8-.6-1.3-1.5-1.3s-1.5.5-1.5 1.3c0 .3.1.6.4.8-.3.2-.5.6-.5 1 0 .8.6 1.3 1.6 1.3s1.6-.5 1.6-1.3c0-.4-.2-.8-.5-1ZM18 5.5c-.3 0-.4-.1-.4-.4 0-.3.2-.4.4-.4s.4.1.4.4c0 .3-.1.4-.4.4Zm0 .8c.3 0 .6.1.6.5 0 .3-.2.5-.6.5-.4 0-.6-.2-.6-.5 0-.4.5-.5.6-.5Z",
    fill: color
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10.5 22.54c-.4 0-.79-.09-1.16-.26l-6.5-3.06a2.762 2.762 0 0 1-1.58-2.49V9.27c0-1.06.62-2.04 1.58-2.49l6.5-3.06c.74-.35 1.59-.34 2.33 0l2.67 1.26c.31.15.48.48.42.81-.01.07-.01.14-.01.21a3.256 3.256 0 0 0 4.05 3.15.747.747 0 0 1 .96.72v6.86c0 1.06-.62 2.04-1.58 2.49l-6.5 3.06c-.38.17-.78.26-1.18.26Zm0-17.58c-.18 0-.37.04-.54.12l-6.5 3.06c-.44.21-.72.64-.72 1.13v7.46c0 .49.28.92.72 1.13l6.5 3.06c.34.15.73.16 1.07 0l6.5-3.06c.44-.21.72-.64.72-1.13v-5.99c-.08 0-.17.01-.25.01-2.58 0-4.68-2.06-4.75-4.62l-2.22-1.05c-.17-.08-.35-.12-.53-.12Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9 16.25c-1.52 0-2.75-1.23-2.75-2.75v-3c0-.41.34-.75.75-.75s.75.34.75.75v3a1.25 1.25 0 0 0 2.5 0v-3c0-.41.34-.75.75-.75s.75.34.75.75v3c0 1.52-1.23 2.75-2.75 2.75ZM14 16.19c-.41 0-.75-.34-.75-.75V10.5c0-.41.34-.75.75-.75s.75.34.75.75v4.94c0 .42-.34.75-.75.75ZM18 10.75c-2.62 0-4.75-2.13-4.75-4.75 0-.15 0-.32.03-.47.2-2.41 2.23-4.28 4.72-4.28a4.752 4.752 0 0 1 0 9.5Zm0-8c-1.7 0-3.09 1.28-3.23 2.97-.02.14-.02.21-.02.28a3.256 3.256 0 0 0 4.05 3.15A3.24 3.24 0 0 0 21.25 6c0-1.79-1.46-3.25-3.25-3.25Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.09 5.91c.24-.21.37-.49.37-.83 0-.77-.58-1.28-1.46-1.28s-1.46.52-1.46 1.28c0 .33.13.62.37.83-.32.24-.5.59-.5.98 0 .81.61 1.31 1.6 1.31.99 0 1.6-.5 1.6-1.31a1.2 1.2 0 0 0-.52-.98ZM18 5.51c-.27 0-.44-.15-.44-.38 0-.28.23-.37.44-.37s.44.1.44.37c0 .23-.17.38-.44.38Zm0 .83c.28 0 .58.12.58.45 0 .29-.22.46-.58.46s-.58-.17-.58-.46c0-.41.44-.45.58-.45Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19 9.868v6.86c0 .78-.45 1.48-1.15 1.81l-6.5 3.06c-.54.25-1.16.25-1.7 0l-6.5-3.06c-.7-.33-1.15-1.03-1.15-1.81v-7.46c0-.78.45-1.48 1.15-1.81l6.5-3.06a2.02 2.02 0 0 1 1.7 0l2.67 1.26c-.02.11-.02.23-.02.34 0 2.21 1.79 4 4 4 .35 0 .68-.04 1-.13Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M7 10.5v3c0 1.1.9 2 2 2s2-.9 2-2v-3M14 10.5v4.94",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 6c0 1.86-1.27 3.43-3 3.87-.32.09-.65.13-1 .13-2.21 0-4-1.79-4-4 0-.11 0-.23.02-.34A3.99 3.99 0 0 1 18 2c2.21 0 4 1.79 4 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.09 5.91c.24-.21.37-.49.37-.83 0-.77-.58-1.28-1.46-1.28s-1.46.52-1.46 1.28c0 .33.13.62.37.83-.32.24-.5.59-.5.98 0 .81.61 1.31 1.6 1.31.99 0 1.6-.5 1.6-1.31a1.2 1.2 0 0 0-.52-.98ZM18 5.51c-.27 0-.44-.15-.44-.38 0-.28.23-.37.44-.37s.44.1.44.37c0 .23-.17.38-.44.38Zm0 .83c.28 0 .58.12.58.45 0 .29-.22.46-.58.46s-.58-.17-.58-.46c0-.41.44-.45.58-.45Z",
    fill: color
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

var Ui8 = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Ui8.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Ui8.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Ui8.displayName = 'Ui8';

export { Ui8 as default };