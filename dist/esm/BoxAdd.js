import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "m17.6 5.311-5.65-3.04a2.02 2.02 0 0 0-1.91 0L4.4 5.311c-.41.23-.67.67-.67 1.15 0 .49.25.93.67 1.15l5.65 3.04a2 2 0 0 0 1.9 0l5.65-3.04c.41-.22.67-.66.67-1.15 0-.48-.26-.92-.67-1.15ZM9.12 11.71 3.87 9.09A1.286 1.286 0 0 0 2 10.24v4.96c0 .86.48 1.63 1.25 2.02l5.25 2.62c.18.09.38.14.58.14.23 0 .47-.07.68-.19.38-.24.61-.65.61-1.1v-4.96c-.01-.86-.49-1.63-1.25-2.02ZM20 10.24v2.46c-.48-.14-.99-.2-1.5-.2-1.36 0-2.69.47-3.74 1.31-1.44 1.13-2.26 2.84-2.26 4.69 0 .49.06.98.19 1.45-.15-.02-.3-.08-.44-.17-.38-.23-.61-.64-.61-1.09v-4.96c0-.86.48-1.63 1.24-2.02l5.25-2.62A1.286 1.286 0 0 1 20 10.24Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M22 15.7c0-.01-.01-.02-.02-.03-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14h.01c.01.01.02.02.03.02.75.63 1.72 1 2.79 1 1.64 0 3.07-.88 3.85-2.18.23-.39.41-.82.52-1.27.09-.34.13-.69.13-1.05 0-1.06-.37-2.04-1-2.8Zm-1.82 3.53h-.93v.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.97h-.93c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.93v-.89c0-.41.34-.75.75-.75s.75.34.75.75v.89h.93a.749.749 0 1 1 0 1.5Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2.5 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M23 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45A3.92 3.92 0 0 1 15 18c0-1.26.58-2.39 1.5-3.12.69-.55 1.56-.88 2.5-.88 1 0 1.9.36 2.6.97.12.09.23.2.33.31C22.59 16 23 16.95 23 18ZM20.492 17.98h-2.98M19 16.52v2.99",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m3.172 7.441 8.83 5.11 8.77-5.08M12 21.613v-9.07",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M2.39 14.83V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96",
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
    d: "M22 15.7c0-.01-.01-.02-.02-.03-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14h.01c.01.01.02.02.03.02.75.63 1.72 1 2.79 1 1.64 0 3.07-.88 3.85-2.18.23-.39.41-.82.52-1.27.09-.34.13-.69.13-1.05 0-1.06-.37-2.04-1-2.8Zm-1.82 3.53h-.93v.97c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.97h-.93c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.93v-.89c0-.41.34-.75.75-.75s.75.34.75.75v.89h.93a.749.749 0 1 1 0 1.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m19.348 5.66-6.29-3.39c-.66-.36-1.46-.36-2.13 0l-6.29 3.39c-.46.25-.74.74-.74 1.28s.28 1.03.74 1.28l6.29 3.39c.33.18.7.27 1.06.27.36 0 .73-.09 1.06-.27l6.29-3.39c.46-.25.74-.74.74-1.28.02-.54-.27-1.03-.73-1.28ZM9.899 12.788l-5.85-2.93c-.45-.23-.97-.2-1.4.06-.43.26-.68.72-.68 1.22v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92c.2.1.42.15.64.15.26 0 .52-.07.75-.22.43-.26.68-.72.68-1.22v-5.53c.01-.94-.52-1.8-1.38-2.23ZM22.03 11.15v4.59c-.01-.01-.02-.03-.03-.04 0-.01-.01-.02-.02-.03-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.01 6.25l-.47.24a1.432 1.432 0 0 1-1.4-.07c-.42-.26-.68-.72-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l5.85-2.92c.45-.23.97-.21 1.4.06.42.26.68.72.68 1.22Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2.5 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M23 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45A3.92 3.92 0 0 1 15 18c0-1.26.58-2.39 1.5-3.12.69-.55 1.56-.88 2.5-.88 1 0 1.9.36 2.6.97.12.09.23.2.33.31C22.59 16 23 16.95 23 18ZM20.49 17.98h-2.98M19 16.52v2.99",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M3.17 7.44 12 12.55l8.77-5.08M12 21.61v-9.07",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.61 9.17v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73Z",
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
    d: "M19.002 22.748c-1.4 0-2.71-.61-3.61-1.68-.01-.02-.07-.07-.12-.15-.11-.11-.24-.31-.35-.5-.44-.71-.68-1.55-.68-2.43 0-1.46.65-2.81 1.78-3.71.84-.67 1.9-1.04 2.97-1.04 1.16 0 2.23.4 3.09 1.15.12.08.26.23.39.37.81.89 1.26 2.03 1.26 3.22 0 .87-.24 1.72-.69 2.45-.24.42-.57.8-.95 1.12-.81.78-1.92 1.2-3.09 1.2Zm0-8c-.74 0-1.44.25-2.03.72a3.224 3.224 0 0 0-.75 4.2c.08.14.16.25.25.36.02.02.08.08.13.16.55.65 1.45 1.07 2.4 1.07.79 0 1.55-.29 2.13-.81.26-.22.48-.48.64-.76.32-.51.48-1.09.48-1.68 0-.81-.31-1.6-.87-2.21-.07-.08-.15-.16-.23-.22a3.16 3.16 0 0 0-2.15-.83Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.49 18.73H17.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.99a.749.749 0 1 1 0 1.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M19 20.26c-.41 0-.75-.34-.75-.75v-2.99c0-.41.34-.75.75-.75s.75.34.75.75v2.99c0 .42-.34.75-.75.75ZM12.001 13.3c-.13 0-.26-.03-.38-.1l-8.83-5.11a.752.752 0 0 1-.27-1.03c.21-.36.67-.48 1.02-.27l8.45 4.89 8.4-4.86c.36-.21.82-.08 1.02.27.21.36.08.82-.27 1.03l-8.77 5.08c-.11.06-.24.1-.37.1Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 22.36c-.41 0-.75-.34-.75-.75v-9.07c0-.41.34-.75.75-.75s.75.34.75.75v9.07c0 .41-.34.75-.75.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M11.999 22.752c-.88 0-1.76-.19-2.44-.58l-5.34-2.96c-1.45-.8-2.59-2.73-2.59-4.39v-5.66c0-1.66 1.14-3.58 2.59-4.39l5.34-2.96c1.36-.77 3.5-.77 4.87 0l5.34 2.96c1.45.8 2.59 2.73 2.59 4.39v5.66c0 .1 0 .18-.02.28-.05.26-.24.48-.49.56-.25.09-.53.03-.74-.14-1.15-1-2.93-1.04-4.14-.07a3.224 3.224 0 0 0-.75 4.2c.08.14.16.25.25.36a.738.738 0 0 1-.21 1.14l-1.83 1.01c-.68.4-1.55.59-2.43.59Zm0-20c-.62 0-1.25.13-1.7.38l-5.34 2.96c-.97.53-1.81 1.97-1.81 3.07v5.66c0 1.1.85 2.54 1.81 3.07l5.34 2.96c.91.51 2.5.51 3.41 0l1.12-.62a4.67 4.67 0 0 1-.57-2.25c0-1.46.65-2.81 1.78-3.71 1.36-1.09 3.31-1.32 4.83-.67v-4.46c0-1.1-.85-2.54-1.81-3.07l-5.34-2.96c-.47-.23-1.1-.36-1.72-.36Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2.5 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M23 18c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1-1.22 0-2.31-.55-3.03-1.41-.02-.03-.05-.05-.07-.08-.12-.14-.23-.29-.32-.45A3.92 3.92 0 0 1 15 18c0-1.26.58-2.39 1.5-3.12.69-.55 1.56-.88 2.5-.88 1 0 1.9.36 2.6.97.12.09.23.2.33.31C22.59 16 23 16.95 23 18ZM20.492 17.98h-2.98M19 16.52v2.99",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".4",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "m3.172 7.441 8.83 5.11 8.77-5.08M12 21.61v-9.07"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M21.61 9.17v5.66c0 .05 0 .09-.01.14-.7-.61-1.6-.97-2.6-.97-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 18c0 .75.21 1.46.58 2.06.09.16.2.31.32.45l-1.83 1.01c-1.14.64-3 .64-4.14 0l-5.34-2.96c-1.21-.67-2.2-2.35-2.2-3.73V9.17c0-1.38.99-3.06 2.2-3.73l5.34-2.96c1.14-.64 3-.64 4.14 0l5.34 2.96c1.21.67 2.2 2.35 2.2 3.73Z"
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

var BoxAdd = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
BoxAdd.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BoxAdd.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
BoxAdd.displayName = 'BoxAdd';

export { BoxAdd as default };
