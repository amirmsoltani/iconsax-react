import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9.93 12.75H3c-.55 0-1 .45-1 1v2.44C2 19.4 4.6 22 7.81 22h1.7c.77 0 1.24-.82.87-1.5-.79-1.47-1.1-3.24-.71-5.1.14-.68.38-1.32.7-1.92a.498.498 0 0 0-.44-.73ZM6.75 18c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2ZM16.19 2H7.81C4.6 2 2 4.6 2 7.81v2.44c0 .55.45 1 1 1h8.84c.22 0 .43-.08.61-.22.86-.66 1.87-1.14 2.95-1.36 1.86-.39 3.63-.08 5.1.71.68.36 1.5-.1 1.5-.87v-1.7C22 4.6 19.4 2 16.19 2ZM6.75 8.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2Zm4 0c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2ZM18 8h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75S18.41 8 18 8ZM17 11c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Zm2.93 7.2c-.16.39-.39.74-.69 1.04a3.139 3.139 0 0 1-4.1.31v.14c0 .31-.25.57-.57.57a.578.578 0 0 1-.57-.58v-1.44c0-.31.25-.57.57-.57h1.44c.31 0 .57.25.57.57 0 .29-.21.51-.49.55.76.37 1.73.25 2.34-.36a2 2 0 0 0 .44-.67c.12-.29.45-.43.74-.31.3.12.44.46.32.75Zm.07-2.44c0 .31-.25.57-.57.57h-1.44a.57.57 0 0 1-.57-.57c0-.29.21-.51.49-.55-.76-.37-1.73-.25-2.35.36-.17.17-.3.36-.4.57a.565.565 0 0 1-.75.28.567.567 0 0 1-.27-.76c.16-.33.37-.63.62-.89a3.139 3.139 0 0 1 4.1-.31v-.13c0-.31.25-.57.57-.57.32 0 .57.24.57.56v1.44Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6 6.25v2M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3M10 6.25v2M6 16v2M10 16v2M14 7.25h4M2 12h16",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.56 20.33a3.24 3.24 0 0 1-2.81 1.62c-1.79 0-2.89-1.8-2.89-1.8m.07-3.06c.56-.98 1.61-1.63 2.82-1.63 2.17 0 3.25 1.8 3.25 1.8m0-2.01v2h-2m-2.14 2.89h-2V22",
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
    d: "M22 7.81v1.7c0 .77-.82 1.23-1.5.87-1.47-.79-3.24-1.1-5.1-.71-1.2.25-2.31.81-3.22 1.58a7.38 7.38 0 0 0-2.51 4.15c-.39 1.86-.08 3.63.71 5.1.36.68-.1 1.5-.87 1.5h-1.7C4.6 22 2 19.4 2 16.19V7.81C2 4.6 4.6 2 7.81 2h8.38C19.4 2 22 4.6 22 7.81Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.18 11.25c-.52.43-.98.94-1.37 1.5H2v-1.5h10.18ZM6 9c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM10 9c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM6 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM18 8h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75S18.41 8 18 8ZM17 11c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6Zm2.93 7.2c-.16.39-.39.74-.69 1.04a3.139 3.139 0 0 1-4.1.31v.14a.57.57 0 1 1-1.14 0v-1.44c0-.31.25-.57.57-.57h1.44c.31 0 .57.25.57.57 0 .29-.21.51-.49.55.76.37 1.73.25 2.34-.36a2 2 0 0 0 .44-.67c.12-.29.45-.43.74-.31.3.11.44.45.32.74Zm.07-2.44c0 .31-.25.57-.57.57h-1.44a.57.57 0 0 1-.57-.57c0-.29.21-.51.49-.55-.76-.37-1.73-.25-2.35.36-.17.17-.3.36-.4.57a.565.565 0 0 1-.75.28.567.567 0 0 1-.27-.76c.16-.33.37-.63.62-.89a3.139 3.139 0 0 1 4.1-.31v-.13c0-.31.25-.57.57-.57.32 0 .57.24.57.56v1.44Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6 6.25v2M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3M10 6.25v2M6 16v2M10 16v2M14 7.25h4M2 12h20",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.56 20.33a3.24 3.24 0 0 1-2.81 1.62c-1.79 0-2.89-1.8-2.89-1.8m.07-3.06c.56-.98 1.61-1.63 2.82-1.63 2.17 0 3.25 1.8 3.25 1.8m0-2.01v2h-2m-2.14 2.89h-2V22",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color,
      _ref5$strokeWidth = _ref5.strokeWidth,
      strokeWidth = _ref5$strokeWidth === void 0 ? 2 : _ref5$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M6 9c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v3c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9c0-4.61-1.64-6.25-6.25-6.25H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h3c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10 9c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM6 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM10 18.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM18 8h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75S18.41 8 18 8ZM22 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.56 20.33a3.24 3.24 0 0 1-2.81 1.62c-1.79 0-2.89-1.8-2.89-1.8m.07-3.06c.56-.98 1.61-1.63 2.82-1.63 2.17 0 3.25 1.8 3.25 1.8m0-2.01v2h-2m-2.14 2.89h-2V22",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6 6.25v2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 12V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M10 6.25v2M6 16v2M10 16v2M14 7.25h4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2 12h20M21.56 20.33a3.24 3.24 0 0 1-2.81 1.62c-1.79 0-2.89-1.8-2.89-1.8m.07-3.06c.56-.98 1.61-1.63 2.82-1.63 2.17 0 3.25 1.8 3.25 1.8m0-2.01v2h-2m-2.14 2.89h-2V22",
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

var DriverRefresh = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
DriverRefresh.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DriverRefresh.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
DriverRefresh.displayName = 'DriverRefresh';

export { DriverRefresh as default };
