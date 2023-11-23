import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M20 12v6c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4v-6c0-.55.45-1 1-1h1.97c.55 0 1 .45 1 1v3.14a2.014 2.014 0 0 0 2 2.01c.38 0 .76-.11 1.09-.33l.95-.62.88.59c.61.41 1.39.46 2.04.11.66-.35 1.07-1.02 1.07-1.77V12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1ZM21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0l2.72 2.72ZM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3ZM13.971 11c.55 0 1 .45 1 1v3.13c0 .8-.89 1.28-1.55.83l-.9-.6a1 1 0 0 0-1.1 0l-.94.62c-.66.44-1.54-.04-1.54-.83V12c0-.55.45-1 1-1h4.03Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M3.969 18c0 3 1 4 4 4h8c3 0 4-1 4-4v-8h-16v3.84M21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0l2.72 2.72ZM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3ZM8.941 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10h-6.03Z",
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
    d: "M19.969 10v8c0 3-1 4-4 4h-8c-3 0-4-1-4-4v-8h16Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0l2.72 2.72ZM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".6",
    d: "M8.941 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10h-6.03Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.97 10h-16v8c0 3 1 4 4 4h8c3 0 4-1 4-4v-8ZM21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2ZM11.64 5H6.12a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0L11.64 5ZM17.87 5h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8.94 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10H8.94Z",
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
    d: "M15.969 22.75h-8c-3.42 0-4.75-1.33-4.75-4.75v-8c0-.41.34-.75.75-.75h16c.41 0 .75.34.75.75v8c0 3.42-1.33 4.75-4.75 4.75Zm-11.25-12V18c0 2.58.67 3.25 3.25 3.25h8c2.58 0 3.25-.67 3.25-3.25v-7.25h-14.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19.5 10.75h-15c-1.75 0-2.75-1-2.75-2.75V7c0-1.75 1-2.75 2.75-2.75h15c1.7 0 2.75 1.05 2.75 2.75v1c0 1.7-1.05 2.75-2.75 2.75Zm-15-5c-.91 0-1.25.34-1.25 1.25v1c0 .91.34 1.25 1.25 1.25h15c.88 0 1.25-.37 1.25-1.25V7c0-.88-.37-1.25-1.25-1.25h-15Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.64 5.749H6.12c-.21 0-.41-.09-.55-.24-.61-.67-.59-1.7.05-2.34l1.42-1.42c.66-.66 1.75-.66 2.41 0l2.72 2.72c.21.21.28.54.16.82-.11.28-.38.46-.69.46Zm-4.97-1.5h3.17l-1.45-1.44a.205.205 0 0 0-.29 0l-1.42 1.42c0 .01-.01.01-.01.02Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.87 5.749h-5.52a.74.74 0 0 1-.69-.46c-.12-.28-.05-.6.16-.82l2.72-2.72c.66-.66 1.75-.66 2.41 0l1.42 1.42c.64.64.67 1.67.05 2.34-.14.15-.34.24-.55.24Zm-3.7-1.5h3.17l-.02-.02-1.42-1.42a.205.205 0 0 0-.29 0l-1.44 1.44ZM9.941 16.9a1.752 1.752 0 0 1-1.75-1.75V10c0-.41.34-.75.75-.75h6.04c.41 0 .75.34.75.75v5.13c0 .65-.35 1.24-.92 1.54-.57.31-1.26.27-1.8-.09l-.89-.6a.24.24 0 0 0-.28 0l-.94.62c-.29.2-.63.3-.96.3Zm-.25-6.15v4.39c0 .13.08.19.13.22s.15.06.26-.01l.94-.62c.59-.39 1.35-.39 1.93 0l.89.6c.11.07.21.04.26.01.05-.03.13-.09.13-.22v-4.38h-4.54v.01Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M19.969 10h-16v8c0 3 1 4 4 4h8c3 0 4-1 4-4v-8ZM21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0l2.72 2.72ZM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3ZM8.941 10v5.14c0 .8.88 1.27 1.55.84l.94-.62a1 1 0 0 1 1.1 0l.89.6a.997.997 0 0 0 1.55-.83V10h-6.03Z",
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

var Gift = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Gift.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Gift.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Gift.displayName = 'Gift';

export { Gift as default };
