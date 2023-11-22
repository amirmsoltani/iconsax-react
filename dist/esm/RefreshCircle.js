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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-5.4 9.23c.17-1.19.7-2.26 1.53-3.1 2-1.99 5.15-2.1 7.29-.36v-.95c0-.41.34-.75.75-.75s.75.34.75.75v2.67c0 .41-.34.75-.75.75H13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75a3.965 3.965 0 00-5.07.45c-.6.6-.98 1.38-1.11 2.25-.05.37-.37.64-.74.64-.04 0-.07 0-.11-.01a.739.739 0 01-.62-.84zm9.27 4.64a5.45 5.45 0 01-3.87 1.6c-1.22 0-2.43-.43-3.43-1.24v.94c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14.5c0-.41.34-.75.75-.75h2.67c.41 0 .75.34.75.75s-.34.75-.75.75h-.75c1.55 1.08 3.69.93 5.07-.45.6-.6.98-1.38 1.11-2.25.06-.41.43-.7.85-.64.41.06.69.44.64.85-.18 1.21-.71 2.28-1.54 3.11z"
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M8.01 14.51c.18.3.4.58.65.83a4.732 4.732 0 006.68 0 4.71 4.71 0 001.32-2.67M7.34 11.33c.14-.98.57-1.92 1.32-2.67a4.732 4.732 0 016.68 0c.26.26.47.54.65.83"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M7.82 17.18v-2.67h2.67M16.18 6.82v2.67h-2.67"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
  }));
};

var Bulk = function Bulk(_ref3) {
  var color = _ref3.color;
      _ref3.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M16.759 11.93a.741.741 0 00-.85.64c-.12.87-.51 1.65-1.11 2.25-1.38 1.38-3.52 1.52-5.07.45h.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.67c-.41 0-.75.34-.75.75v2.67c0 .41.34.75.75.75s.75-.34.75-.75v-.94c1 .81 2.21 1.24 3.43 1.24 1.4 0 2.8-.53 3.87-1.6.83-.83 1.36-1.9 1.53-3.1a.734.734 0 00-.63-.86zM7.34 12.08c.37 0 .69-.27.74-.64.12-.87.51-1.65 1.11-2.25 1.38-1.38 3.52-1.52 5.07-.45h-.75c-.41 0-.75.34-.75.75s.34.75.75.75h2.67c.41 0 .75-.34.75-.75V6.82c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.94c-2.15-1.74-5.3-1.63-7.29.36-.83.83-1.36 1.9-1.53 3.1-.06.41.23.79.64.85.02.01.06.01.09.01z"
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M8.01 14.51c.18.3.4.58.65.83a4.732 4.732 0 006.68 0 4.71 4.71 0 001.32-2.67M7.34 11.33c.14-.98.57-1.92 1.32-2.67a4.732 4.732 0 016.68 0c.26.26.47.54.65.83"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M7.82 17.18v-2.67h2.67M16.18 6.82v2.67h-2.67"
  }));
};

var Outline = function Outline(_ref5) {
  var color = _ref5.color;
      _ref5.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M12 17.47c-1.4 0-2.8-.53-3.87-1.6-.28-.28-.53-.59-.76-.96a.747.747 0 111.27-.79c.17.28.35.5.55.7a3.977 3.977 0 005.62 0c.6-.6.98-1.38 1.11-2.25.06-.41.44-.71.85-.64.41.06.69.44.64.85-.17 1.19-.7 2.26-1.53 3.1A5.522 5.522 0 0112 17.47zM7.34 12.08c-.04 0-.07 0-.11-.01a.754.754 0 01-.64-.85c.17-1.19.7-2.26 1.53-3.1 2.13-2.13 5.6-2.13 7.74 0 .28.28.53.59.76.97a.747.747 0 11-1.27.79c-.17-.27-.35-.5-.55-.7a3.977 3.977 0 00-5.62 0c-.6.6-.98 1.38-1.11 2.25-.04.38-.36.65-.73.65z"
  }), /*#__PURE__*/React.createElement(Path, {
    fill: color,
    d: "M7.82 17.93c-.41 0-.75-.34-.75-.75v-2.67c0-.41.34-.75.75-.75h2.67c.41 0 .75.34.75.75s-.34.75-.75.75H8.57v1.92c0 .41-.33.75-.75.75zM16.18 10.24h-2.67c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.92V6.82c0-.41.34-.75.75-.75s.75.34.75.75v2.67c0 .42-.34.75-.75.75z"
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4"
  }, /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M8.01 14.51c.18.3.4.58.65.83a4.732 4.732 0 006.68 0 4.71 4.71 0 001.32-2.67M7.34 11.33c.14-.98.57-1.92 1.32-2.67a4.732 4.732 0 016.68 0c.26.26.47.54.65.83"
  }), /*#__PURE__*/React.createElement(Path, {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    d: "M7.82 17.18v-2.67h2.67M16.18 6.82v2.67h-2.67"
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

var RefreshCircle = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
RefreshCircle.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RefreshCircle.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
RefreshCircle.displayName = 'RefreshCircle';

export { RefreshCircle as default };
