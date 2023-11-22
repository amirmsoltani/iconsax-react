import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m15.7 4.35-9.3 9.3c-.47.47-1.29.37-1.59-.23-.54-1.07-.84-2.24-.84-3.37 0-2.45 1.09-4.74 3-6.28s4.41-2.11 6.86-1.57c.54.12 1.07.29 1.57.52.64.29.8 1.13.3 1.63ZM15.45 20.628c-2.26-.64-4.64-.64-6.9 0-.37.11-.59.49-.48.86.11.37.49.58.86.48 2.01-.57 4.12-.57 6.13 0 .06.02.13.03.19.03.3 0 .58-.2.67-.51.11-.37-.1-.75-.47-.86ZM20.56 1.952a.754.754 0 0 0-1.06 0L3.65 17.802c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l2.46-2.46c.22.18.45.36.69.52v.83c-.01.28-.02.71.31 1.06.35.35.87.4 1.28.4h5.13c.54 0 .95-.15 1.23-.43.39-.4.37-.9.36-1.16v-.7c3.11-2.09 5.06-6.5 3.04-10.56-.22-.43-.49-.84-.79-1.22l2.13-2.13c.3-.29.3-.77.01-1.06Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M20.03 2.48 4.18 18.33M13.6 2.172c1.46.32 2.76 1.1 3.76 2.18M5.25 13.002c-.42-.97-.67-2.02-.67-3.1 0-3.38 1.99-6.26 4.8-7.39M19.06 7.3c1.22 3.88-.75 7.78-3.54 9.57v1.16c0 .29.1.96-.9.96h-5.2c-1.03 0-.9-.43-.9-.96v-1.16c-.48-.3-.93-.67-1.36-1.1M8.5 22c2.29-.65 4.71-.65 7 0"
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
      d="M15.26 21.998c-.06 0-.13-.01-.19-.03-2.01-.57-4.12-.57-6.13 0-.37.1-.76-.11-.86-.48a.69.69 0 0 1 .48-.86c2.26-.64 4.64-.64 6.9 0 .37.11.59.49.48.86-.1.31-.38.51-.68.51ZM4.18 19.082c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L19.5 1.952c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.71 18.862c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M16.63 3.42 5.49 14.56c-.96-1.36-1.52-2.96-1.52-4.51 0-2.45 1.09-4.74 3-6.28s4.41-2.11 6.86-1.57c1.01.22 1.96.64 2.8 1.22ZM16.17 16.919v.7c.01.26.03.76-.36 1.16-.28.28-.69.43-1.23.43H9.45c-.41 0-.93-.05-1.28-.4-.33-.35-.32-.78-.31-1.06v-.83c-.45-.3-.87-.64-1.25-1.02l11.34-11.34c.5.53.93 1.14 1.26 1.8 2.02 4.06.07 8.47-3.04 10.56Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M20.03 2.48 4.18 18.33M5.25 13c-.42-.97-.67-2.02-.67-3.1 0-4.91 4.22-8.78 9.02-7.73 1.46.32 2.76 1.1 3.76 2.18M19.06 7.3c1.22 3.88-.75 7.78-3.54 9.57v1.16c0 .29.1.96-.9.96h-5.2c-1.03 0-.9-.43-.9-.96v-1.16c-.48-.3-.93-.67-1.36-1.1M8.5 22c2.29-.65 4.71-.65 7 0"
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
      d="M4.18 19.082c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L19.5 1.952c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L4.71 18.862c-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
    <Path
      d="M5.25 13.751c-.29 0-.56-.17-.69-.45-.49-1.12-.74-2.26-.74-3.4 0-2.72 1.18-5.23 3.23-6.89 1.92-1.54 4.3-2.1 6.7-1.57 1.58.35 3.02 1.18 4.15 2.4.28.3.26.78-.04 1.06s-.78.26-1.06-.04c-.93-1-2.09-1.68-3.37-1.96-1.95-.42-3.88.03-5.43 1.28-1.7 1.37-2.67 3.45-2.67 5.72 0 .93.21 1.87.61 2.8a.751.751 0 0 1-.69 1.05ZM14.61 19.751H9.42c-.39 0-.94-.04-1.31-.42-.36-.37-.35-.84-.34-1.15v-.91c-.4-.28-.78-.6-1.14-.96a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0 .39.38.8.72 1.23 1 .21.14.35.38.35.63v1.37H14.62c.07 0 .12 0 .16-.01v-1.37c0-.26.13-.49.35-.63 2.47-1.58 4.37-5.08 3.23-8.71a.75.75 0 1 1 1.43-.45c1.31 4.18-.73 8.21-3.51 10.19v.77c.01.31.02.84-.39 1.26-.31.3-.73.45-1.28.45ZM15.5 22.751c-.07 0-.14-.01-.21-.03-2.16-.62-4.43-.62-6.59 0a.76.76 0 0 1-.93-.52c-.12-.4.12-.81.52-.93 2.42-.69 4.99-.69 7.41 0 .4.11.63.53.52.93-.09.34-.39.55-.72.55Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M20.03 2.48 4.18 18.33M5.25 13c-.42-.97-.67-2.02-.67-3.1 0-4.91 4.22-8.78 9.02-7.73 1.46.32 2.76 1.1 3.76 2.18"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M19.06 7.3c1.22 3.88-.75 7.78-3.54 9.57v1.16c0 .29.1.96-.9.96h-5.2c-1.03 0-.9-.43-.9-.96v-1.16c-.48-.3-.93-.67-1.36-1.1M8.5 22c2.29-.65 4.71-.65 7 0"
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

const LampSlash = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
LampSlash.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
LampSlash.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
LampSlash.displayName = 'LampSlash';
export default LampSlash;