import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m19.12 14.941.32.65c.16.32.57.62.91.68l.43.07c1.31.22 1.61 1.18.68 2.12l-.4.4c-.27.27-.41.79-.33 1.17l.05.24c.36 1.58-.48 2.19-1.85 1.36l-.29-.18c-.35-.21-.93-.21-1.28 0l-.29.18c-1.38.83-2.21.22-1.85-1.36l.05-.24c.08-.37-.06-.9-.33-1.17l-.4-.4c-.93-.95-.63-1.9.68-2.12l.43-.07c.35-.06.75-.36.91-.68l.32-.65c.62-1.25 1.62-1.25 2.24 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.38C2 19.83 4.17 22 7.81 22h5.28c.35 0 .6-.36.56-.71-.04-.38-.02-.83.1-1.35.02-.07 0-.15-.06-.21l-.22-.22c-.85-.86-1.16-1.9-.86-2.85.31-.94 1.17-1.6 2.36-1.8l.3-.05.27-.54c.55-1.12 1.45-1.77 2.46-1.77s1.91.65 2.46 1.77l.15.31c.07.15.21.25.37.28l.27.06c.35.09.75-.19.75-.56V7.81C22 4.17 19.83 2 16.19 2Zm.07 6.96-2.31 2.98c-.29.37-.7.61-1.17.66-.46.06-.93-.07-1.29-.36l-1.83-1.42a.22.22 0 0 0-.19-.05c-.04 0-.11.02-.17.1l-2.38 3.09a.758.758 0 0 1-1.06.13.749.749 0 0 1-.14-1.05L8.1 9.95c.29-.37.7-.61 1.17-.67.47-.06.93.07 1.3.36l1.83 1.44c.07.06.14.05.19.05.04 0 .11-.02.17-.1l2.31-2.98c.25-.33.72-.39 1.05-.13.34.25.39.72.14 1.04Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m7.33 14.492 2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98M20.55 16.98c-.3-.05-.66-.32-.8-.6l-.28-.57c-.54-1.09-1.42-1.09-1.95 0l-.28.57c-.14.28-.49.54-.8.6l-.38.06c-1.14.19-1.41 1.03-.59 1.86l.35.35c.23.24.36.7.29 1.02l-.05.21c-.31 1.38.42 1.91 1.62 1.19l.26-.15c.31-.18.81-.18 1.12 0l.26.15c1.21.73 1.94.19 1.62-1.19l-.05-.21",
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
    d: "M22 7.81v7.35c-.29-.14-.61-.24-.97-.3l-.31-.05-.26-.54c-.55-1.12-1.45-1.77-2.46-1.77s-1.91.65-2.46 1.77l-.27.54-.3.05c-1.19.2-2.05.86-2.36 1.8-.3.95.01 1.99.86 2.85l.31.31-.03.12c-.2.89-.12 1.57.07 2.06H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m19.12 14.941.32.65c.16.32.57.62.91.68l.43.07c1.31.22 1.61 1.18.68 2.12l-.4.4c-.27.27-.41.79-.33 1.17l.05.24c.36 1.58-.48 2.19-1.85 1.36l-.29-.18c-.35-.21-.93-.21-1.28 0l-.29.18c-1.38.83-2.21.22-1.85-1.36l.05-.24c.08-.37-.06-.9-.33-1.17l-.4-.4c-.93-.95-.63-1.9.68-2.12l.43-.07c.35-.06.75-.36.91-.68l.32-.65c.62-1.25 1.62-1.25 2.24 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.13 7.919a.75.75 0 0 1 .133 1.052l-2.315 2.986a1.762 1.762 0 0 1-2.456.298l-.006-.004-1.826-1.437a.254.254 0 0 0-.356.046l-2.38 3.09a.75.75 0 1 1-1.188-.916l2.38-3.09a1.754 1.754 0 0 1 2.463-.316l.005.004 1.827 1.438a.262.262 0 0 0 .36-.042l2.306-2.976a.75.75 0 0 1 1.053-.133Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m7.33 14.49 2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98M19.48 15.82l.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0Z",
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
    d: "M13 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7.33 15.242c-.16 0-.32-.05-.46-.16a.749.749 0 0 1-.14-1.05l2.38-3.09c.29-.37.7-.61 1.17-.67.47-.06.93.07 1.3.36l1.83 1.44c.07.06.14.05.19.05.04 0 .11-.02.17-.1l2.31-2.98c.25-.33.72-.39 1.05-.13.33.25.39.72.13 1.05l-2.31 2.98c-.29.37-.7.61-1.17.66-.46.06-.93-.07-1.29-.36l-1.83-1.44a.22.22 0 0 0-.19-.05c-.04 0-.11.02-.17.1l-2.38 3.09c-.14.2-.36.3-.59.3ZM20.26 22.748c-.35 0-.8-.11-1.33-.43l-.25-.15a.525.525 0 0 0-.35 0l-.25.15c-1.15.69-1.88.4-2.2.16-.33-.24-.84-.84-.54-2.16l.05-.21c.02-.08-.04-.27-.09-.33l-.35-.35c-.59-.6-.82-1.3-.62-1.93.2-.62.79-1.06 1.62-1.2l.38-.06c.07-.02.21-.12.25-.19l.28-.57c.39-.79.99-1.24 1.65-1.24.66 0 1.26.45 1.65 1.24l.28.56c.04.07.18.17.25.19l.38.06c.83.14 1.42.58 1.62 1.2.2.62-.02 1.32-.62 1.93l-.35.35c-.05.06-.11.25-.09.33l.05.21c.3 1.32-.21 1.92-.54 2.16-.18.14-.47.28-.88.28Zm-1.77-7c-.01.01-.15.11-.29.4l-.28.57c-.24.49-.81.91-1.34 1l-.38.06c-.32.05-.43.16-.44.18 0 .02.03.18.26.41l.35.35c.41.42.62 1.14.49 1.71l-.05.21c-.09.39-.05.56-.03.62.03-.02.2-.04.53-.24l.25-.15c.55-.33 1.34-.33 1.89 0l.25.15c.41.25.58.22.59.22-.04 0 .01-.2-.08-.6l-.05-.21c-.13-.58.08-1.29.49-1.71l.35-.35c.23-.23.26-.39.26-.42-.01-.02-.12-.12-.44-.18l-.38-.06c-.54-.09-1.1-.51-1.34-1l-.28-.56c-.16-.3-.3-.39-.33-.4Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m7.33 14.492 2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m19.48 15.821.28.57c.14.28.49.54.8.6l.38.06c1.14.19 1.41 1.03.59 1.86l-.35.35c-.23.24-.36.7-.29 1.02l.05.21c.31 1.38-.42 1.91-1.62 1.19l-.26-.15c-.31-.18-.81-.18-1.12 0l-.26.15c-1.21.73-1.94.19-1.62-1.19l.05-.21c.07-.32-.06-.78-.29-1.02l-.35-.35c-.82-.83-.55-1.67.59-1.86l.38-.06c.3-.05.66-.32.8-.6l.28-.57c.54-1.09 1.42-1.09 1.96 0Z",
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

var FavoriteChart = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
FavoriteChart.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FavoriteChart.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
FavoriteChart.displayName = 'FavoriteChart';

export { FavoriteChart as default };
