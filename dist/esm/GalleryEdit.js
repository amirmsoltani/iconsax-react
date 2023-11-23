import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1Zm-1.96 5.57c-.03.03-.1.07-.15.07l-1.04.15c-.03.01-.07.01-.1.01-.15 0-.28-.05-.37-.15a.528.528 0 0 1-.14-.47l.15-1.04c.01-.05.04-.12.07-.15l1.7-1.7c.03.07.06.15.09.23.04.08.08.15.12.22.03.06.07.12.11.16.04.06.08.12.11.15a1.848 1.848 0 0 0 .32.33c.02.02.04.04.05.04.05.04.11.09.15.12.06.04.11.08.17.11.07.04.15.08.23.12.08.04.16.07.23.09l-1.7 1.71Zm2.39-2.39-.32.32a.09.09 0 0 1-.08.04h-.03c-.72-.21-1.29-.78-1.5-1.5-.01-.04 0-.08.03-.11l.33-.33c.54-.54 1.05-.53 1.58 0 .27.27.4.53.4.79-.01.26-.14.52-.41.79ZM9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.97 8h-.47v4.61l-.13-.11c-.78-.67-2.04-.67-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28c-.71-.62-1.84-.68-2.64-.14l-3.74 2.51c-.22-.56-.35-1.21-.35-1.97V7.81c0-2.82 1.49-4.31 4.31-4.31H16v-.47c0-.4.07-.74.23-1.03H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84.86 1.9 2.7 2.97 5.25 2.97h8.38c3.64 0 5.81-2.17 5.81-5.81V7.77c-.29.16-.63.23-1.03.23Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2M2 12.89V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5M13 2H9C4 2 2 4 2 9",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m19.139 2.589-3.63 3.63c-.14.14-.28.41-.3.61l-.2 1.39c-.07.5.28.85.78.78l1.39-.2c.19-.03.47-.16.61-.3l3.63-3.63c.63-.63.92-1.35 0-2.27-.93-.94-1.65-.64-2.28-.01Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.621 3.11c.31 1.1 1.17 1.96 2.27 2.27",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m2.672 18.949 4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4",
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
    d: "M21.999 13.899v2.29c0 3.64-2.17 5.81-5.81 5.81h-8.38c-2.55 0-4.39-1.07-5.25-2.97l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M20.97 8h-2.94C16.76 8 16 7.24 16 5.97V3.03c0-.4.08-.74.22-1.03H7.81C4.17 2 2 4.17 2 7.81v8.38c0 1.09.19 2.04.56 2.84l.11-.08 4.92-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9V7.78c-.29.14-.63.22-1.03.22Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M9.001 10.381a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76ZM20.97 1h-2.94C16.76 1 16 1.76 16 3.03v2.94C16 7.24 16.76 8 18.03 8h2.94C22.24 8 23 7.24 23 5.97V3.03C23 1.76 22.24 1 20.97 1Zm-1.96 5.57c-.03.03-.1.07-.15.07l-1.04.15c-.03.01-.07.01-.1.01-.15 0-.28-.05-.37-.15a.528.528 0 0 1-.14-.47l.15-1.04c.01-.05.04-.12.07-.15l1.7-1.7c.03.07.06.15.09.23.04.08.08.15.12.22.03.06.07.12.11.16.04.06.08.12.11.15a1.848 1.848 0 0 0 .32.33c.02.02.04.04.05.04.05.04.11.09.15.12.06.04.11.08.17.11.07.04.15.08.23.12.08.04.16.07.23.09l-1.7 1.71Zm2.39-2.39-.32.32a.09.09 0 0 1-.08.04h-.03c-.72-.21-1.29-.78-1.5-1.5-.01-.04 0-.08.03-.11l.33-.33c.54-.54 1.05-.53 1.58 0 .27.27.4.53.4.79-.01.26-.14.52-.41.79Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m19.14 2.59-3.63 3.63c-.14.14-.28.41-.3.61l-.2 1.39c-.07.5.28.85.78.78l1.39-.2c.19-.03.47-.16.61-.3l3.63-3.63c.63-.63.92-1.35 0-2.27-.93-.94-1.65-.64-2.28-.01Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.62 3.11c.31 1.1 1.17 1.96 2.27 2.27",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m2.67 18.95 4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9",
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
    d: "M9 10.75c-1.52 0-2.75-1.23-2.75-2.75S7.48 5.25 9 5.25 11.75 6.48 11.75 8 10.52 10.75 9 10.75Zm0-4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c.41 0 .75.34.75.75s-.34.75-.75.75H9C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M15.67 9.751c-.39 0-.75-.14-1.01-.41-.31-.31-.46-.77-.39-1.24l.2-1.39c.05-.35.26-.78.52-1.03l3.63-3.63c1.45-1.45 2.71-.62 3.33 0 .59.59.86 1.21.8 1.85-.05.51-.31 1-.8 1.48l-3.63 3.63c-.25.25-.68.46-1.03.52l-1.39.2c-.08.02-.16.02-.23.02Zm4-6.63-3.63 3.63c-.03.03-.08.14-.09.19l-.19 1.3 1.31-.18c.04-.01.15-.06.19-.1l3.63-3.63c.22-.22.35-.42.36-.57.02-.21-.19-.47-.36-.64-.52-.52-.76-.46-1.22 0Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20.9 6.13c-.07 0-.14-.01-.2-.03a4.077 4.077 0 0 1-2.79-2.79c-.11-.4.12-.81.52-.92.4-.11.81.12.92.52.24.84.91 1.52 1.76 1.76.4.11.63.53.52.92a.79.79 0 0 1-.73.54ZM2.67 19.699a.751.751 0 0 1-.42-1.37l4.93-3.31c1.08-.72 2.57-.64 3.55.19l.33.29c.5.43 1.35.43 1.84 0l4.16-3.57c1.06-.91 2.73-.91 3.8 0l1.63 1.4c.31.27.35.74.08 1.06-.27.31-.74.35-1.06.08l-1.63-1.4c-.5-.43-1.35-.43-1.84 0l-4.16 3.57c-1.06.91-2.73.91-3.8 0l-.33-.29c-.46-.39-1.22-.43-1.73-.08l-4.92 3.31c-.14.08-.29.12-.43.12Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(G, {
    opacity: ".45",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "m19.139 2.589-3.63 3.63c-.14.14-.28.41-.3.61l-.2 1.39c-.07.5.28.85.78.78l1.39-.2c.19-.03.47-.16.61-.3l3.63-3.63c.63-.63.92-1.35 0-2.27-.93-.94-1.65-.64-2.28-.01Z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.617 3.11c.31 1.1 1.17 1.96 2.27 2.27"
  })), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "m2.672 18.949 4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4",
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

var GalleryEdit = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
GalleryEdit.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
GalleryEdit.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
GalleryEdit.displayName = 'GalleryEdit';

export { GalleryEdit as default };