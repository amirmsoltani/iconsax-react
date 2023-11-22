import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M15.26 21.998c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51ZM19.21 6.361c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.973 7.973 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56Zm-5.49 5.26-1.07 1.86c-.14.24-.39.38-.65.38a.754.754 0 0 1-.65-1.12l.85-1.48h-.84c-.5 0-.91-.22-1.13-.59-.22-.38-.2-.84.05-1.28l1.07-1.86c.21-.36.67-.48 1.02-.28.36.21.48.67.28 1.02l-.85 1.48h.84c.5 0 .91.22 1.13.59.22.38.2.85-.05 1.28Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M19.07 6.27c2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1 0-.96-.43-.96-.96v-1.16C6 15.49 4.11 12.78 4.11 9.9c0-4.95 4.55-8.83 9.69-7.71.75.17 1.48.44 2.14.81"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m12 7.89-1.07 1.86c-.24.41-.04.75.43.75h1.27c.48 0 .67.34.43.75L12 13.11M8.5 22c2.29-.65 4.71-.65 7 0"
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
      d="M19.21 6.361c-1.04-2.1-3.05-3.65-5.38-4.16-2.44-.54-4.94.04-6.85 1.58a7.973 7.973 0 0 0-3.01 6.27c0 2.59 1.55 5.3 3.89 6.87v.83c-.01.28-.02.71.32 1.06.35.36.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.38-.39.37-.89.36-1.16v-.7c3.1-2.09 5.05-6.5 3.03-10.56Z"
      fill={color}
    ></Path>
    <Path
      d="M15.26 21.998c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51ZM12 13.85a.754.754 0 0 1-.65-1.12l.85-1.48h-.84c-.5 0-.91-.22-1.13-.59-.22-.38-.2-.84.05-1.28l1.07-1.86c.21-.36.67-.48 1.02-.28.36.21.48.67.28 1.02l-.85 1.49h.84c.5 0 .91.22 1.13.59.22.38.2.84-.05 1.28l-1.07 1.86c-.14.24-.39.37-.65.37Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m12 7.89-1.07 1.86c-.24.41-.04.75.43.75h1.27c.48 0 .67.34.43.75L12 13.11"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M8.3 18.04v-1.16C6 15.49 4.11 12.78 4.11 9.9c0-4.95 4.55-8.83 9.69-7.71 2.26.5 4.24 2 5.27 4.07 2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1.01-.96-.42-.96-.95ZM8.5 22c2.29-.65 4.71-.65 7 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 13.85a.754.754 0 0 1-.65-1.12l.85-1.48h-.84c-.5 0-.91-.22-1.13-.59-.22-.38-.2-.84.05-1.28l1.07-1.86c.21-.36.67-.48 1.02-.28.36.21.48.67.28 1.02l-.85 1.49h.84c.5 0 .91.22 1.13.59.22.38.2.84-.05 1.28l-1.07 1.86c-.14.24-.39.37-.65.37Z"
      fill={color}
    ></Path>
    <Path
      d="M14.77 19.748H9.26c-.44 0-1-.05-1.37-.43-.36-.37-.35-.83-.34-1.14v-.89c-2.52-1.68-4.18-4.6-4.18-7.38a8.62 8.62 0 0 1 3.23-6.74c2.05-1.65 4.74-2.27 7.37-1.69 2.5.55 4.66 2.22 5.78 4.47 2.17 4.37.08 9.1-3.26 11.35v.75c.01.29.02.82-.39 1.24-.31.3-.75.46-1.33.46Zm-5.73-1.51c.05 0 .12.01.21.01h5.52c.1 0 .17-.01.21-.02v-1.36c0-.26.14-.51.36-.64 2.96-1.79 4.92-5.88 3.05-9.63-.92-1.85-2.7-3.22-4.76-3.67-2.18-.48-4.41.03-6.11 1.4a7.127 7.127 0 0 0-2.67 5.58c0 2.78 1.92 5.18 3.82 6.33.23.14.36.38.36.64v1.35c.01 0 .01 0 .01.01ZM15.5 22.751c-.07 0-.14-.01-.21-.03-2.16-.62-4.43-.62-6.59 0a.76.76 0 0 1-.93-.52c-.12-.4.12-.81.52-.93 2.42-.69 4.99-.69 7.41 0 .4.11.63.53.52.93-.09.34-.39.55-.72.55Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="m12 7.89-1.07 1.86c-.24.41-.04.75.43.75h1.27c.48 0 .67.34.43.75L12 13.11"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M8.3 18.04v-1.16C6 15.49 4.11 12.78 4.11 9.9c0-4.95 4.55-8.83 9.69-7.71 2.26.5 4.24 2 5.27 4.07 2.09 4.2-.11 8.66-3.34 10.61v1.16c0 .29.11.96-.96.96H9.26c-1.1.01-.96-.42-.96-.95Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M8.5 22c2.29-.65 4.71-.65 7 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
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

const LampCharge = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
LampCharge.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
LampCharge.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
LampCharge.displayName = 'LampCharge';
export default LampCharge;
