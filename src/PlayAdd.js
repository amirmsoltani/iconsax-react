import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M21.85 10.25c-.78-4.45-4.61-7.9-9.12-8.22-6.1-.44-11.14 4.61-10.7 10.7.32 4.51 3.77 8.33 8.22 9.11 1.15.2 2.27.2 3.34.02.31-.05.49-.39.37-.67-.3-.68-.46-1.43-.46-2.2 0-1.69.75-3.25 2.07-4.29.97-.78 2.19-1.21 3.43-1.21.78 0 1.52.16 2.19.46.29.13.62-.06.68-.37.18-1.06.18-2.18-.02-3.33Zm-7.35 3.32-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57V10.61c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.88 1.49 2.28 0 3.15Z"
      fill={color}
    ></Path>
    <Path
      d="M19 15c-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 19c0 .75.21 1.46.58 2.06A3.97 3.97 0 0 0 19 23c1.01 0 1.93-.37 2.63-1 .31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4Zm1.5 4.73h-.75v.78c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.78h-.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.75c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 15 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 19ZM20.492 18.98h-2.98M19 17.52v2.99"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7.969 2.85c1.23-.55 2.6-.85 4.03-.85 5.52 0 10 4.48 10 10 0 1.31-.25 2.57-.72 3.72M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10 1.32 0 2.58-.26 3.73-.73"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M22 12c0 1.31-.25 2.57-.72 3.72-.65-.45-1.44-.72-2.28-.72-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 19c0 .75.21 1.46.58 2.06.04.07.09.14.15.21A9.84 9.84 0 0 1 12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10Z"
      fill={color}
    ></Path>
    <Path
      d="M9.379 12.002v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57v-1.36ZM19 15c-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 19c0 .75.21 1.46.58 2.06A3.97 3.97 0 0 0 19 23c1.01 0 1.93-.37 2.63-1 .31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4Zm1.5 4.73h-.75v.78c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.78h-.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.71c0-.41.34-.75.75-.75s.75.34.75.75v.71h.75c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 12c0 1.31-.25 2.57-.72 3.72-.65-.45-1.44-.72-2.28-.72-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 19c0 .75.21 1.46.58 2.06.04.07.09.14.15.21A9.84 9.84 0 0 1 12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9.38 12v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57V12ZM23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 15 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 19ZM20.49 18.98h-2.98M19 17.52v2.99"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12c0 1.4-.26 2.74-.78 4-.09.21-.26.37-.48.43a.73.73 0 0 1-.64-.1 3.303 3.303 0 0 0-3.89.13 3.224 3.224 0 0 0-.75 4.2c.03.05.05.08.08.11.16.18.22.43.17.67-.05.24-.22.43-.45.52-1.27.53-2.62.79-4.01.79Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25c.9 0 1.78-.13 2.63-.39-.25-.58-.38-1.21-.38-1.86 0-1.46.65-2.81 1.78-3.71 1.36-1.08 3.27-1.33 4.83-.66.25-.84.38-1.73.38-2.64.01-5.09-4.14-9.24-9.24-9.24Z"
      fill={color}
    ></Path>
    <Path
      d="M10.879 16.069c-.39 0-.76-.09-1.08-.28-.74-.43-1.17-1.3-1.17-2.4v-2.78c0-1.1.43-1.97 1.17-2.4.75-.43 1.72-.36 2.67.19l2.4 1.39c.95.55 1.49 1.36 1.49 2.21 0 .85-.54 1.67-1.49 2.21l-2.4 1.39c-.54.31-1.08.47-1.59.47Zm.01-6.64c-.13 0-.24.03-.34.08-.27.16-.42.56-.42 1.1v2.78c0 .54.15.95.42 1.1.27.15.69.09 1.17-.19l2.4-1.39c.47-.27.74-.61.74-.92 0-.31-.27-.64-.74-.92l-2.4-1.39c-.31-.16-.59-.25-.83-.25ZM19 23.75c-1.66 0-3.22-.88-4.06-2.31-.45-.72-.69-1.57-.69-2.44 0-1.46.65-2.81 1.78-3.71.84-.67 1.9-1.04 2.97-1.04 2.62 0 4.75 2.13 4.75 4.75 0 .87-.24 1.72-.69 2.45-.25.42-.57.8-.95 1.12-.83.76-1.94 1.18-3.11 1.18Zm0-8c-.74 0-1.44.25-2.03.72a3.224 3.224 0 0 0-.75 4.2c.58.98 1.65 1.58 2.78 1.58.79 0 1.55-.29 2.13-.81.26-.22.48-.48.64-.76.32-.51.48-1.09.48-1.68 0-1.79-1.46-3.25-3.25-3.25Z"
      fill={color}
    ></Path>
    <Path
      d="M20.498 19.73h-2.99c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.99c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M19 21.26c-.41 0-.75-.34-.75-.75v-2.99c0-.41.34-.75.75-.75s.75.34.75.75v2.99c0 .42-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M22 12c0 1.31-.25 2.57-.72 3.72-.65-.45-1.44-.72-2.28-.72-.94 0-1.81.33-2.5.88A3.97 3.97 0 0 0 15 19c0 .75.21 1.46.58 2.06.04.07.09.14.15.21A9.84 9.84 0 0 1 12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M9.379 12.002v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57v-1.36ZM23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.97 3.97 0 0 1-3.42-1.94A3.92 3.92 0 0 1 15 19c0-1.26.58-2.39 1.5-3.12A3.999 3.999 0 0 1 23 19Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M20.492 18.98h-2.98M19 17.52v2.99"></Path>
    </G>
  </>
);

const chooseVariant = (variant, color) => {
  switch (variant) {
    case 'Bold':
      return <Bold color={color} />;

    case 'Broken':
      return <Broken color={color} />;

    case 'Bulk':
      return <Bulk color={color} />;

    case 'Linear':
      return <Linear color={color} />;

    case 'Outline':
      return <Outline color={color} />;

    case 'TwoTone':
      return <TwoTone color={color} />;

    default:
      return <Linear color={color} />;
  }
};

const PlayAdd = forwardRef(({ variant, color, size, ...rest }, ref) => {
  return (
    <Svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {chooseVariant(variant, color)}
    </Svg>
  );
});
PlayAdd.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
PlayAdd.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
PlayAdd.displayName = 'PlayAdd';
export default PlayAdd;
