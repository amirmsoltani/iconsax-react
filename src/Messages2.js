import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m18.47 16.83.39 3.16c.1.83-.79 1.41-1.5.98l-3.46-2.06c-.24-.14-.3-.44-.17-.68.5-.92.77-1.96.77-3 0-3.66-3.14-6.64-7-6.64-.79 0-1.56.12-2.28.36a.505.505 0 0 1-.64-.6C5.49 4.71 8.99 2 13.17 2 18.05 2 22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59Z"
      fill={color}
    ></Path>
    <Path
      d="M13 15.23c0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97C2.86 18.4 2 16.91 2 15.23c0-1.76.94-3.31 2.38-4.23.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M13.17 2c-4.88 0-8.83 3.69-8.83 8.24 0 .26.01.51.04.76.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14 0 1.19-.44 2.29-1.18 3.16.44.06.89.09 1.35.09l4.19 2.49c.71.43 1.6-.15 1.5-.98l-.39-3.16c2.14-1.5 3.53-3.89 3.53-6.59 0-3.07-1.8-5.75-4.48-7.17"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M4.38 11c.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14 0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97C2.86 18.4 2 16.91 2 15.23c0-.3.03-.59.08-.87"
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
      d="m18.47 16.83.39 3.16c.1.83-.79 1.41-1.5.98l-4.19-2.49c-.46 0-.91-.03-1.35-.09A4.86 4.86 0 0 0 13 15.23c0-2.84-2.46-5.14-5.5-5.14-1.16 0-2.23.33-3.12.91-.03-.25-.04-.5-.04-.76C4.34 5.69 8.29 2 13.17 2S22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59Z"
      fill={color}
    ></Path>
    <Path
      d="M13 15.23c0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97C2.86 18.4 2 16.91 2 15.23c0-1.76.94-3.31 2.38-4.23.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m18.47 16.83.39 3.16c.1.83-.79 1.41-1.5.98l-4.19-2.49c-.46 0-.91-.03-1.35-.09A4.86 4.86 0 0 0 13 15.23c0-2.84-2.46-5.14-5.5-5.14-1.16 0-2.23.33-3.12.91-.03-.25-.04-.5-.04-.76C4.34 5.69 8.29 2 13.17 2S22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M13 15.23c0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97C2.86 18.4 2 16.91 2 15.23c0-1.76.94-3.31 2.38-4.23.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14Z"
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
      d="M17.868 21.872c-.31 0-.62-.08-.9-.25l-4.01-2.38c-.42-.01-.84-.04-1.24-.1a.76.76 0 0 1-.6-.48c-.1-.26-.05-.54.13-.75.66-.77 1-1.69 1-2.67 0-2.42-2.13-4.39-4.75-4.39-.98 0-1.92.27-2.71.79a.758.758 0 0 1-1.16-.54 7.92 7.92 0 0 1-.05-.85c0-4.96 4.3-8.99 9.58-8.99s9.58 4.03 9.58 8.99c0 2.72-1.26 5.22-3.48 6.93l.34 2.72a1.752 1.752 0 0 1-1.73 1.97Zm-4.72-4.14c.14-.01.28.03.4.11l4.19 2.49c.11.07.2.04.26 0 .05-.03.13-.11.11-.25l-.39-3.16c-.03-.28.09-.55.31-.71 2.04-1.43 3.21-3.61 3.21-5.98 0-4.13-3.62-7.49-8.08-7.49-4.29 0-7.81 3.12-8.07 7.04.75-.29 1.56-.45 2.4-.45 3.45 0 6.25 2.64 6.25 5.89.01.88-.2 1.73-.59 2.51Z"
      fill={color}
    ></Path>
    <Path
      d="M4.578 22.75c-.26 0-.51-.07-.74-.22a1.37 1.37 0 0 1-.63-1.32l.2-1.54c-1.35-1.1-2.15-2.73-2.15-4.44 0-1.95 1.02-3.77 2.73-4.86a6.444 6.444 0 0 1 3.52-1.03c3.45 0 6.25 2.64 6.25 5.89 0 1.32-.48 2.62-1.36 3.65-1.13 1.37-2.82 2.17-4.68 2.23l-2.44 1.45c-.22.13-.46.19-.7.19Zm2.92-11.91c-.98 0-1.92.27-2.71.79-1.28.82-2.04 2.16-2.04 3.6 0 1.39.68 2.66 1.88 3.48.23.16.35.43.32.71l-.22 1.71 2.39-1.42c.12-.07.25-.11.38-.11 1.47 0 2.86-.63 3.74-1.7.66-.78 1.01-1.7 1.01-2.68 0-2.41-2.13-4.38-4.75-4.38Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="m18.47 16.83.39 3.16c.1.83-.79 1.41-1.5.98l-4.19-2.49c-.46 0-.91-.03-1.35-.09A4.86 4.86 0 0 0 13 15.23c0-2.84-2.46-5.14-5.5-5.14-1.16 0-2.23.33-3.12.91-.03-.25-.04-.5-.04-.76C4.34 5.69 8.29 2 13.17 2S22 5.69 22 10.24c0 2.7-1.39 5.09-3.53 6.59Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M13 15.23c0 1.19-.44 2.29-1.18 3.16-.99 1.2-2.56 1.97-4.32 1.97l-2.61 1.55c-.44.27-1-.1-.94-.61l.25-1.97C2.86 18.4 2 16.91 2 15.23c0-1.76.94-3.31 2.38-4.23.89-.58 1.96-.91 3.12-.91 3.04 0 5.5 2.3 5.5 5.14Z"
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

const Messages2 = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Messages2.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Messages2.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Messages2.displayName = 'Messages2';
export default Messages2;
