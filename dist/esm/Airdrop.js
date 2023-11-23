import { _ as _objectWithoutProperties, a as _extends } from './_rollupPluginBabelHelpers-3bc641ae.js';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

var _excluded = ["variant", "color", "size", "strokeWidth"];

var Bold = function Bold(_ref) {
  var color = _ref.color;
      _ref.strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M14.13 11.339a2.206 2.206 0 0 0-2.68-2.68c-.77.19-1.4.82-1.59 1.59a2.206 2.206 0 0 0 2.68 2.68c.78-.19 1.41-.82 1.59-1.59Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.02 17.97c-.18 0-.37-.07-.51-.2a9.545 9.545 0 0 1-3.05-6.98c0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54 0 2.66-1.07 5.12-3.01 6.95-.3.28-.78.27-1.06-.03-.28-.3-.27-.78.03-1.06a7.938 7.938 0 0 0 2.54-5.85c0-4.43-3.61-8.04-8.04-8.04S3.96 6.37 3.96 10.8c0 2.26.91 4.34 2.57 5.88.3.28.32.76.04 1.06a.78.78 0 0 1-.55.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 15.299a.746.746 0 0 1-.54-1.26c.83-.88 1.29-2.04 1.29-3.24 0-2.62-2.13-4.74-4.74-4.74a4.75 4.75 0 0 0-4.74 4.74c0 1.21.46 2.36 1.29 3.24.28.3.27.78-.03 1.06-.3.29-.78.27-1.06-.03a6.229 6.229 0 0 1-1.7-4.27c0-3.44 2.8-6.24 6.24-6.24 3.44 0 6.24 2.8 6.24 6.24 0 1.59-.6 3.11-1.7 4.27a.78.78 0 0 1-.55.23ZM10.3 16.66l-1.44 1.79C7.72 19.88 8.74 22 10.56 22h2.87c1.83 0 2.85-2.12 1.7-3.54l-1.44-1.79a2.16 2.16 0 0 0-3.39-.01Z",
    fill: color
  }));
};

var Broken = function Broken(_ref2) {
  var color = _ref2.color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 2 : _ref2$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M12.55 12.92a2.206 2.206 0 0 1-2.68-2.68 2.205 2.205 0 0 1 4.32.26M7.64 3.148a8.78 8.78 0 0 0-4.43 7.64c0 2.54 1.08 4.83 2.81 6.43M18.01 17.19a8.731 8.731 0 0 0 2.78-6.4A8.79 8.79 0 0 0 12 2",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 14.55c-.92-.98-1.49-2.3-1.49-3.76C6.51 7.76 8.97 5.3 12 5.3c3.03 0 5.49 2.46 5.49 5.49 0 1.46-.57 2.77-1.49 3.76M10.3 16.661l-1.44 1.79c-1.14 1.43-.13 3.54 1.7 3.54h2.87c1.83 0 2.85-2.12 1.7-3.54l-1.44-1.79c-.86-1.09-2.52-1.09-3.39 0Z",
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
    d: "M14.13 11.339a2.206 2.206 0 0 0-2.68-2.68c-.77.19-1.4.82-1.59 1.59a2.206 2.206 0 0 0 2.68 2.68c.78-.19 1.41-.82 1.59-1.59Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M6.02 17.97c-.18 0-.37-.07-.51-.2a9.545 9.545 0 0 1-3.05-6.98c0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54 0 2.66-1.07 5.12-3.01 6.95-.3.28-.78.27-1.06-.03-.28-.3-.27-.78.03-1.06a7.938 7.938 0 0 0 2.54-5.85c0-4.43-3.61-8.04-8.04-8.04S3.96 6.37 3.96 10.8c0 2.26.91 4.34 2.57 5.88.3.28.32.76.04 1.06a.78.78 0 0 1-.55.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M16 15.299a.746.746 0 0 1-.54-1.26c.83-.88 1.29-2.04 1.29-3.24 0-2.62-2.13-4.74-4.74-4.74a4.75 4.75 0 0 0-4.74 4.74c0 1.21.46 2.36 1.29 3.24.28.3.27.78-.03 1.06-.3.29-.78.27-1.06-.03a6.229 6.229 0 0 1-1.7-4.27c0-3.44 2.8-6.24 6.24-6.24 3.44 0 6.24 2.8 6.24 6.24 0 1.59-.6 3.11-1.7 4.27a.78.78 0 0 1-.55.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "m10.3 16.661-1.44 1.79c-1.14 1.43-.13 3.54 1.7 3.54h2.87c1.83 0 2.85-2.12 1.7-3.54l-1.44-1.79c-.86-1.09-2.52-1.09-3.39 0Z",
    fill: color
  }));
};

var Linear = function Linear(_ref4) {
  var color = _ref4.color,
      _ref4$strokeWidth = _ref4.strokeWidth,
      strokeWidth = _ref4$strokeWidth === void 0 ? 2 : _ref4$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M14.13 11.34a2.206 2.206 0 0 0-2.68-2.68c-.77.19-1.4.82-1.59 1.59a2.206 2.206 0 0 0 2.68 2.68c.78-.19 1.41-.82 1.59-1.59Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.01 17.19a8.731 8.731 0 0 0 2.78-6.4 8.79 8.79 0 1 0-17.58 0c0 2.54 1.08 4.83 2.81 6.43",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 14.55c-.92-.98-1.49-2.3-1.49-3.76C6.51 7.76 8.97 5.3 12 5.3c3.03 0 5.49 2.46 5.49 5.49 0 1.46-.57 2.77-1.49 3.76M10.3 16.66l-1.44 1.79c-1.14 1.43-.13 3.54 1.7 3.54h2.87c1.83 0 2.85-2.12 1.7-3.54l-1.44-1.79c-.86-1.09-2.52-1.09-3.39 0Z",
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
    d: "M12 13.742c-.78 0-1.52-.3-2.09-.86-.73-.73-1.02-1.78-.78-2.81a2.91 2.91 0 0 1 2.14-2.14c1.02-.25 2.07.04 2.81.78.74.74 1.02 1.78.78 2.81a2.91 2.91 0 0 1-2.14 2.14c-.24.05-.48.08-.72.08Zm0-4.4c-.12 0-.25.02-.37.05-.5.12-.91.53-1.03 1.03-.13.52.01 1.03.38 1.39.37.37.87.5 1.4.38.5-.12.91-.53 1.03-1.03.13-.52-.01-1.03-.38-1.39-.28-.28-.64-.43-1.03-.43Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M6.02 17.97c-.18 0-.37-.07-.51-.2a9.545 9.545 0 0 1-3.05-6.98c0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54 0 2.66-1.07 5.12-3.01 6.95-.3.28-.78.27-1.06-.03-.28-.3-.27-.78.03-1.06a7.938 7.938 0 0 0 2.54-5.85c0-4.43-3.61-8.04-8.04-8.04S3.96 6.37 3.96 10.8c0 2.26.91 4.34 2.57 5.88.3.28.32.76.04 1.06a.78.78 0 0 1-.55.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M16 15.299a.746.746 0 0 1-.54-1.26c.83-.88 1.29-2.04 1.29-3.24 0-2.62-2.13-4.74-4.74-4.74a4.75 4.75 0 0 0-4.74 4.74c0 1.21.46 2.36 1.29 3.24.28.3.27.78-.03 1.06-.3.28-.78.27-1.06-.03a6.229 6.229 0 0 1-1.7-4.27c0-3.44 2.8-6.24 6.24-6.24 3.44 0 6.24 2.8 6.24 6.24 0 1.59-.6 3.11-1.7 4.27a.78.78 0 0 1-.55.23Z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M13.44 22.752h-2.87c-1.14 0-2.15-.64-2.64-1.66-.49-1.02-.36-2.21.35-3.1l1.44-1.79c.56-.7 1.39-1.1 2.29-1.1.9 0 1.73.4 2.29 1.1l1.44 1.79c.71.89.85 2.08.35 3.1-.51 1.02-1.52 1.66-2.65 1.66Zm-2.56-5.62-1.44 1.79a1.39 1.39 0 0 0-.17 1.51c.24.51.73.81 1.29.81h2.87c.56 0 1.05-.3 1.29-.81s.18-1.07-.17-1.51l-1.44-1.79c-.54-.68-1.68-.68-2.23 0Z",
    fill: color
  }));
};

var TwoTone = function TwoTone(_ref6) {
  var color = _ref6.color,
      _ref6$strokeWidth = _ref6.strokeWidth,
      strokeWidth = _ref6$strokeWidth === void 0 ? 2 : _ref6$strokeWidth;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M14.13 11.339a2.206 2.206 0 0 0-2.68-2.68c-.77.19-1.4.82-1.59 1.59a2.206 2.206 0 0 0 2.68 2.68c.78-.19 1.41-.82 1.59-1.59Z",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M18.01 17.19a8.731 8.731 0 0 0 2.78-6.4 8.79 8.79 0 1 0-17.58 0c0 2.54 1.08 4.83 2.81 6.43",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(Path, {
    opacity: ".4",
    d: "M8 14.55c-.92-.98-1.49-2.3-1.49-3.76C6.51 7.76 8.97 5.3 12 5.3c3.03 0 5.49 2.46 5.49 5.49 0 1.46-.57 2.77-1.49 3.76M10.3 16.661l-1.44 1.79c-1.14 1.43-.13 3.54 1.7 3.54h2.87c1.83 0 2.85-2.12 1.7-3.54l-1.44-1.79c-.86-1.09-2.52-1.09-3.39 0Z",
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

var Airdrop = /*#__PURE__*/forwardRef(function (_ref7, ref) {
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
Airdrop.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Airdrop.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24'
};
Airdrop.displayName = 'Airdrop';

export { Airdrop as default };
