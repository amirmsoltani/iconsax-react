import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M17.2 12.398c-2.65 0-4.8 2.15-4.8 4.8 0 .9.25 1.75.7 2.47a4.768 4.768 0 0 0 4.1 2.33c1.75 0 3.28-.94 4.1-2.33.44-.72.7-1.57.7-2.47 0-2.65-2.15-4.8-4.8-4.8Zm2.38 4.17-2.56 2.36c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.18-1.18a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.67.67 2.03-1.88c.3-.28.78-.26 1.06.04.28.31.26.79-.04 1.07Z"
      fill={color}
    ></Path>
    <Path
      d="M22 8.73c0 1.19-.19 2.29-.52 3.31-.06.21-.31.27-.49.14a6.346 6.346 0 0 0-3.79-1.24c-3.47 0-6.3 2.83-6.3 6.3 0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81C2.19 11.02 2 9.92 2 8.73c0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M7.56 3.102c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59 0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-1.55.62-2.95 1.63-3.96"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 17.198c0 .9-.25 1.75-.7 2.47a4.768 4.768 0 0 1-4.1 2.33c-1.75 0-3.28-.94-4.1-2.33-.44-.72-.7-1.57-.7-2.47a4.801 4.801 0 0 1 9.6 0Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m15.33 17.2 1.18 1.18 2.56-2.36"
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
      d="M17.2 12.398c-2.65 0-4.8 2.15-4.8 4.8 0 .9.25 1.75.7 2.47a4.768 4.768 0 0 0 4.1 2.33c1.75 0 3.28-.94 4.1-2.33.44-.72.7-1.57.7-2.47 0-2.65-2.15-4.8-4.8-4.8Zm2.38 4.17-2.56 2.36c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.18-1.18a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.67.67 2.03-1.88c.3-.28.78-.26 1.06.04.28.31.26.79-.04 1.07Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M22 8.692c0 1.19-.19 2.29-.52 3.31-.21.67-.48 1.31-.8 1.9-.88-.93-2.11-1.5-3.48-1.5-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0-2.41-.82-7.28-3.81-8.86-8.81-.33-1.02-.52-2.12-.52-3.31 0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 17.2c0 .9-.25 1.75-.7 2.47A4.768 4.768 0 0 1 17.2 22c-1.75 0-3.28-.94-4.1-2.33-.44-.72-.7-1.57-.7-2.47a4.801 4.801 0 0 1 9.6 0Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m15.33 17.2 1.18 1.18 2.56-2.36"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 8.69c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69Z"
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
      d="M17.2 22.748a5.54 5.54 0 0 1-4.75-2.7c-.52-.84-.8-1.84-.8-2.85 0-3.06 2.49-5.55 5.55-5.55 3.06 0 5.55 2.49 5.55 5.55 0 1.02-.28 2.01-.81 2.87-.98 1.65-2.8 2.68-4.74 2.68Zm0-9.6c-2.23 0-4.05 1.82-4.05 4.05 0 .74.2 1.46.58 2.08a3.994 3.994 0 0 0 3.47 1.97c1.44 0 2.73-.73 3.46-1.96.39-.63.59-1.35.59-2.09 0-2.23-1.82-4.05-4.05-4.05Z"
      fill={color}
    ></Path>
    <Path
      d="M16.51 19.13c-.19 0-.38-.07-.53-.22l-1.18-1.18a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.67.67 2.03-1.88c.31-.28.78-.26 1.06.04s.26.78-.04 1.06l-2.56 2.36c-.14.15-.33.21-.51.21Z"
      fill={color}
    ></Path>
    <Path
      d="M12 21.652c-.31 0-.62-.04-.87-.13-2.56-.87-9.88-5.11-9.88-12.83 0-3.5 2.83-6.34 6.31-6.34 1.66 0 3.27.67 4.44 1.84a6.308 6.308 0 0 1 4.44-1.84c3.48 0 6.31 2.84 6.31 6.34 0 1.95-.47 3.82-1.4 5.57a.74.74 0 0 1-.56.39.757.757 0 0 1-.65-.23 4.028 4.028 0 0 0-2.94-1.28c-2.23 0-4.05 1.82-4.05 4.05 0 .99.37 1.95 1.04 2.7.16.18.22.42.17.65-.05.23-.21.43-.42.53-.4.18-.76.33-1.09.44-.24.1-.54.14-.85.14Zm-4.44-17.8c-2.65 0-4.81 2.17-4.81 4.84 0 6.84 6.57 10.62 8.87 11.41.19.07.57.06.75 0l.09-.03c-.53-.86-.81-1.85-.81-2.87 0-3.06 2.49-5.55 5.55-5.55 1.16 0 2.3.37 3.24 1.05.54-1.28.81-2.62.81-4.01 0-2.67-2.16-4.84-4.81-4.84-1.5 0-2.94.72-3.84 1.93-.28.38-.92.38-1.2 0a4.812 4.812 0 0 0-3.84-1.93Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 17.198c0 .9-.25 1.75-.7 2.47a4.768 4.768 0 0 1-4.1 2.33c-1.75 0-3.28-.94-4.1-2.33-.44-.72-.7-1.57-.7-2.47a4.801 4.801 0 0 1 9.6 0Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m15.33 17.2 1.18 1.18 2.56-2.36"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M22 8.692c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 0 0-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12 0-3.09 2.49-5.59 5.56-5.59 1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59Z"
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

const HeartTick = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
HeartTick.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
HeartTick.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
HeartTick.displayName = 'HeartTick';
export default HeartTick;
