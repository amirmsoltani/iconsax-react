import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M18.69 11.53c-.57-.15-1.24-.23-2.04-.23-1.11 0-1.52.27-2.09.7-.03.02-.06.05-.09.08l-.95 1.01c-.79.85-2.24.85-3.04 0l-.95-1a.382.382 0 0 0-.09-.09c-.58-.43-.99-.7-2.09-.7-.8 0-1.47.07-2.04.23-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44c3.55 0 5.35-1.8 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M14.79 2H9.21C4.79 2 4.79 4.35 4.79 6.42v3.7c.04-.02.09-.03.13-.04.7-.19 1.49-.28 2.43-.28 1.54 0 2.27.45 2.99 1 .1.07.2.16.29.26l.94.99c.1.11.26.17.43.17.17 0 .33-.06.42-.16l.96-1.01c.08-.08.17-.17.27-.24.74-.56 1.46-1.01 3-1.01.94 0 1.73.09 2.43.28.04.01.09.02.13.04v-3.7c0-2.07 0-4.42-4.42-4.42Zm-1.24 6.5h-3.1c-.38 0-.7-.32-.7-.7 0-.39.32-.7.7-.7h3.1c.38 0 .7.31.7.7 0 .38-.32.7-.7.7Zm.78-2.79H9.67a.7.7 0 0 1-.69-.7c0-.39.31-.7.69-.7h4.66c.38 0 .69.31.69.7a.7.7 0 0 1-.69.7Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12ZM5 9.96V12M19 12V6c0-2.21 0-4-4-4H9C5 2 5 3.79 5 6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.328 9.2h3.33M13.66 6.2h.84M9.5 6.2h1.58",
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
    d: "M18.69 11.53c-.57-.15-1.24-.23-2.04-.23-1.11 0-1.52.27-2.09.7-.03.02-.06.05-.09.08l-.95 1.01c-.8.84-2.24.85-3.04-.01l-.95-1c-.03-.03-.06-.06-.09-.08-.57-.43-.98-.7-2.09-.7-.8 0-1.47.08-2.04.23-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44c3.55 0 5.35-1.8 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19Zm-4.36 6.87H9.67c-.38 0-.69-.31-.69-.7 0-.39.31-.7.69-.7h4.66c.38 0 .69.31.69.7 0 .39-.31.7-.69.7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M14.79 2H9.21C4.79 2 4.79 4.35 4.79 6.42v5.79c0 .22.1.42.27.55.17.13.4.18.61.12.45-.12 1.01-.18 1.68-.18.67 0 .81.08 1.21.38l.91.96a3.48 3.48 0 0 0 5.08 0l.91-.96c.4-.3.54-.38 1.21-.38.67 0 1.23.06 1.68.18.21.06.43.01.61-.12.17-.13.27-.34.27-.55V6.42C19.21 4.35 19.21 2 14.79 2ZM15.02 17.7c0 .39-.31.7-.69.7H9.67c-.38 0-.69-.31-.69-.7 0-.39.31-.7.69-.7h4.66c.38 0 .69.31.69.7Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12ZM19 12V6c0-2.21 0-4-4-4H9C5 2 5 3.79 5 6v6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.55 9.23h3.33M9.72 6.23h5",
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
    d: "M16 22.75H8c-5.75 0-5.75-3.05-5.75-5.75v-1c0-2.23 0-4.75 4.75-4.75 1.19 0 1.63.29 2.25.75.03.03.07.05.1.09l1.02 1.08c.86.91 2.42.91 3.28 0l1.02-1.08c.03-.03.06-.06.1-.09.62-.47 1.06-.75 2.25-.75 4.75 0 4.75 2.52 4.75 4.75v1c-.02 3.82-1.95 5.75-5.77 5.75Zm-9-10c-3.25 0-3.25 1.02-3.25 3.25v1c0 2.74 0 4.25 4.25 4.25h8c2.98 0 4.25-1.27 4.25-4.25v-1c0-2.23 0-3.25-3.25-3.25-.72 0-.87.09-1.3.41l-.97 1.03A3.73 3.73 0 0 1 12 15.37a3.73 3.73 0 0 1-2.73-1.18l-.97-1.03c-.43-.32-.58-.41-1.3-.41Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19 12.75c-.41 0-.75-.34-.75-.75V6c0-2.23 0-3.25-3.25-3.25H9C5.75 2.75 5.75 3.77 5.75 6v6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6c0-2.23 0-4.75 4.75-4.75h6c4.75 0 4.75 2.52 4.75 4.75v6c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.88 9.98h-3.33c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.33a.749.749 0 1 1 0 1.5ZM14.719 6.98h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a2.999 2.999 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12ZM19 12V6c0-2.21 0-4-4-4H9C5 2 5 3.79 5 6v6",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M10.55 9.23h3.33M9.719 6.23h5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
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

var DirectboxNotif = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
DirectboxNotif.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DirectboxNotif.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DirectboxNotif.displayName = 'DirectboxNotif';

export { DirectboxNotif as default };
