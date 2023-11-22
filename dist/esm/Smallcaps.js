import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M20.95 4.13c-.29-.42-.66-.79-1.08-1.08C18.92 2.36 17.68 2 16.19 2H7.81c-.2 0-.4.01-.59.03C3.94 2.24 2 4.37 2 7.81v8.38c0 1.49.36 2.73 1.05 3.68.29.42.66.79 1.08 1.08.82.6 1.86.95 3.09 1.03.19.01.39.02.59.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81c0-1.49-.36-2.73-1.05-3.68Zm-9.56 11.75H8.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1V7.91H6.95a.2.2 0 0 0-.2.2v.78c0 .41-.34.74-.75.74s-.75-.33-.75-.75V8.1c0-.94.76-1.7 1.7-1.7h6.64c.94 0 1.7.76 1.7 1.7v.78c0 .41-.34.75-.75.75s-.75-.34-.75-.75V8.1a.2.2 0 0 0-.2-.2h-2.57v6.48h.37c.41 0 .75.34.75.75s-.34.75-.75.75Zm7.36-3.65c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.33H15.7v4.2h.35c.41 0 .75.34.75.75s-.34.75-.75.75h-2.2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.35v-4.2h-.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.6c.79 0 1.43.64 1.43 1.43v.4Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M10.398 2.57h6.36c1.02 0 1.85.83 1.85 1.85v1.51M1.988 5.93V4.42c0-1.02.83-1.85 1.85-1.85h2.75M10.3 18.1V2.57M6.898 18.102h5.58M13.68 10.34h7.01c.73 0 1.32.59 1.32 1.32v.8M16.078 21.431v-10.56M13.941 21.43h4.28",
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
    d: "M22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-.2 0-.4-.01-.59-.02-1.23-.08-2.27-.43-3.09-1.03-.42-.29-.79-.66-1.08-1.08C2.36 18.92 2 17.68 2 16.19V7.81c0-3.44 1.94-5.57 5.22-5.78.19-.02.39-.03.59-.03h8.38c1.49 0 2.73.36 3.68 1.05.42.29.79.66 1.08 1.08.69.95 1.05 2.19 1.05 3.68Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.39 14.378h-.37v-6.47h2.57c.11 0 .2.09.2.2v.78c0 .41.34.75.75.75s.75-.34.75-.75v-.79c0-.94-.76-1.7-1.7-1.7H6.95c-.94 0-1.7.76-1.7 1.7v.78a.749.749 0 1 0 1.5 0v-.78c0-.11.09-.2.2-.2h2.57v6.48h-1c-.41 0-.75.34-.75.75s.34.75.75.75h2.86c.41 0 .75-.34.75-.75s-.33-.75-.74-.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M17.319 10.398h-3.6c-.41 0-.75.34-.75.75s.34.75.75.75h.48v4.2h-.35c-.41 0-.75.34-.75.75s.34.75.75.75h2.2c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.35v-4.2h1.55v.34c0 .41.34.75.75.75s.75-.34.75-.75v-.41c0-.79-.64-1.43-1.43-1.43Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M1.99 5.93V4.42c0-1.02.83-1.85 1.85-1.85h12.92c1.02 0 1.85.83 1.85 1.85v1.51M10.3 18.1V3.32M6.9 18.1h5.58M13.68 10.34h7.01c.73 0 1.32.59 1.32 1.32v.8M16.08 21.43V10.87M13.94 21.43h4.28",
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
    d: "M18.608 6.68c-.41 0-.75-.34-.75-.75V4.42c0-.6-.49-1.1-1.1-1.1H3.828c-.6 0-1.1.49-1.1 1.1v1.51c0 .41-.34.75-.75.75s-.74-.34-.74-.75V4.42c0-1.43 1.17-2.6 2.6-2.6h12.92c1.43 0 2.6 1.16 2.6 2.6v1.51c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M10.3 18.85c-.41 0-.75-.34-.75-.75V3.32c0-.41.34-.75.75-.75s.75.34.75.75V18.1c0 .42-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12.478 18.852h-5.58c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.58c.41 0 .75.34.75.75s-.34.75-.75.75ZM22.01 13.198c-.41 0-.75-.34-.75-.75v-.8c0-.31-.26-.57-.57-.57h-7.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.01c1.14 0 2.07.93 2.07 2.07v.8c0 .42-.33.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16.078 22.181c-.41 0-.75-.34-.75-.75v-10.56c0-.41.34-.75.75-.75s.75.34.75.75v10.56c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.221 22.18h-4.28c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.28c.41 0 .75.34.75.75s-.34.75-.75.75Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M1.988 5.93V4.42c0-1.02.83-1.85 1.85-1.85h12.92c1.02 0 1.85.83 1.85 1.85v1.51M10.3 18.1V3.32M6.898 18.102h5.58",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M13.68 10.34h7.01c.73 0 1.32.59 1.32 1.32v.8M16.078 21.431v-10.56M13.938 21.43h4.28"
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

var Smallcaps = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Smallcaps.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Smallcaps.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Smallcaps.displayName = 'Smallcaps';

export { Smallcaps as default };
