import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m21.058 11.822-.16-.22c-.28-.34-.61-.61-.99-.81-.51-.29-1.09-.44-1.69-.44H5.768c-.6 0-1.17.15-1.69.44-.39.21-.74.5-1.03.86-.57.73-.84 1.63-.75 2.53l.37 4.67c.13 1.41.3 3.15 3.47 3.15h11.72c3.17 0 3.33-1.74 3.47-3.16l.37-4.65c.09-.84-.13-1.68-.64-2.37Zm-6.67 5.52h-4.79c-.39 0-.7-.32-.7-.7 0-.38.31-.7.7-.7h4.79c.39 0 .7.32.7.7 0 .39-.31.7-.7.7ZM20.56 8.596c.038.383-.378.64-.742.517a4.979 4.979 0 0 0-1.59-.253H5.769c-.556 0-1.104.09-1.616.262-.36.121-.773-.127-.773-.507V6.66c0-3.57 1.09-4.66 4.66-4.66h1.18c1.43 0 1.88.46 2.46 1.21l1.2 1.6c.25.34.26.36.7.36h2.38c3.126 0 4.347.837 4.601 3.426Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m21.37 18.02-.1 1.28c-.15 1.53-.27 2.7-2.98 2.7H5.71C3 22 2.88 20.83 2.73 19.3l-.4-5c-.08-.83.18-1.6.65-2.19l.02-.02C3.55 11.42 4.38 11 5.31 11h13.38c.93 0 1.75.42 2.29 1.07.01.01.02.02.02.03.49.59.76 1.36.67 2.2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 11.431v-5.15c0-3.4.85-4.25 4.25-4.25h1.27c1.27 0 1.56.38 2.04 1.02l1.27 1.7c.32.42.51.68 1.36.68h2.55c3.4 0 4.25.85 4.25 4.25v1.79M9.43 17h5.14",
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
    d: "m21.058 11.822-.16-.22c-.28-.34-.61-.61-.99-.81-.51-.29-1.09-.44-1.69-.44H5.768c-.6 0-1.17.15-1.69.44-.39.21-.74.5-1.03.86-.57.73-.84 1.63-.75 2.53l.37 4.67c.13 1.41.3 3.15 3.47 3.15h11.72c3.17 0 3.33-1.74 3.47-3.16l.37-4.65c.09-.84-.13-1.68-.64-2.37Zm-6.67 5.52h-4.79c-.39 0-.7-.32-.7-.7 0-.38.31-.7.7-.7h4.79c.39 0 .7.32.7.7 0 .39-.31.7-.7.7Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M3.379 11.31c.22-.2.44-.38.7-.52.51-.29 1.09-.44 1.69-.44h12.46c.6 0 1.17.15 1.69.44.26.14.49.32.7.53v-1.5c0-3.57-1.09-4.66-4.66-4.66h-2.38c-.44 0-.45-.01-.71-.35l-1.2-1.61c-.57-.74-1.02-1.2-2.45-1.2h-1.18c-3.57 0-4.66 1.09-4.66 4.66V11.31Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m21.67 14.3-.4 5c-.15 1.53-.27 2.7-2.98 2.7H5.71C3 22 2.88 20.83 2.73 19.3l-.4-5c-.08-.83.18-1.6.65-2.19l.02-.02C3.55 11.42 4.38 11 5.31 11h13.38c.93 0 1.75.42 2.29 1.07.01.01.02.02.02.03.49.59.76 1.36.67 2.2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.5 11.43V6.28c0-3.4.85-4.25 4.25-4.25h1.27c1.27 0 1.56.38 2.04 1.02l1.27 1.7c.32.42.51.68 1.36.68h2.55c3.4 0 4.25.85 4.25 4.25v1.79M9.43 17h5.14",
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
    d: "M18.289 22.75H5.709c-3.4 0-3.58-1.87-3.73-3.38l-.4-5.01c-.09-.97.19-1.94.81-2.72a3.74 3.74 0 0 1 2.92-1.39h13.38c1.11 0 2.16.49 2.87 1.34l.17.23c.54.74.78 1.64.69 2.55l-.4 4.99c-.15 1.52-.33 3.39-3.73 3.39Zm-12.98-11c-.67 0-1.31.3-1.73.82l-.07.07c-.32.41-.49.99-.43 1.59l.4 5.01c.14 1.46.2 2.01 2.23 2.01h12.58c2.04 0 2.09-.55 2.23-2.02l.4-5.01a2.18 2.18 0 0 0-.5-1.64l-.1-.12c-.45-.47-1.02-.71-1.64-.71H5.309Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.5 12.221c-.41 0-.75-.34-.75-.75v-1.79c0-2.98-.52-3.5-3.5-3.5H13.7c-1.13 0-1.52-.4-1.95-.97l-1.29-1.71c-.44-.58-.54-.72-1.44-.72H7.75c-2.98 0-3.5.52-3.5 3.5v5.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5.15c0-3.83 1.17-5 5-5h1.28c1.54 0 2.02.5 2.64 1.32l1.28 1.7c.27.36.29.38.76.38h2.55c3.83 0 5 1.17 5 5v1.79a.77.77 0 0 1-.76.75ZM14.57 17.75H9.43c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.14a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m21.67 14.3-.4 5c-.15 1.53-.27 2.7-2.98 2.7H5.71C3 22 2.88 20.83 2.73 19.3l-.4-5c-.08-.83.18-1.6.65-2.19l.02-.02C3.55 11.42 4.38 11 5.31 11h13.38c.93 0 1.75.42 2.29 1.07.01.01.02.02.02.03.49.59.76 1.36.67 2.2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M3.5 11.431v-5.15c0-3.4.85-4.25 4.25-4.25h1.27c1.27 0 1.56.38 2.04 1.02l1.27 1.7c.32.42.51.68 1.36.68h2.55c3.4 0 4.25.85 4.25 4.25v1.79M9.43 17h5.14",
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

var FolderOpen = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
FolderOpen.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FolderOpen.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
FolderOpen.displayName = 'FolderOpen';

export { FolderOpen as default };
