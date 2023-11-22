import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2zM12 18.58c-3.17 0-5.75-2.58-5.75-5.75 0-3.11 2.48-5.64 5.56-5.75l-.37-.43a.756.756 0 01.07-1.06c.31-.27.79-.24 1.06.07l1.66 1.9c.02.02.03.04.05.06.04.06.08.13.1.2l.03.12c.02.09.01.19-.01.28-.02.08-.05.16-.09.24-.01.02-.03.04-.04.06-.04.06-.1.11-.16.15 0 0-.01 0-.01.01l-1.94 1.42a.76.76 0 01-1.05-.16c-.24-.33-.17-.8.16-1.05l.41-.3c-2.2.16-3.94 2-3.94 4.24a4.26 4.26 0 004.25 4.25 4.26 4.26 0 004.25-4.25 4.3 4.3 0 00-.71-2.36.746.746 0 01.21-1.04c.35-.23.81-.14 1.04.21.63.95.97 2.05.97 3.19 0 3.17-2.58 5.75-5.75 5.75z"
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M3.33 13.33C3.33 18.12 7.21 22 12 22s8.67-3.88 8.67-8.67c0-1.78-.54-3.44-1.46-4.82m-4.32-3.43c-.87-.26-1.83-.43-2.89-.43-3.21 0-6.02 1.75-7.51 4.34M15.13 5.32L12.24 2M15.13 5.32l-3.37 2.46"
    ></Path>
  </>
);

const Bulk = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2z"
      opacity=".4"
    ></Path>
    <Path
      fill={color}
      d="M12 18.58c-3.17 0-5.75-2.58-5.75-5.75 0-3.11 2.48-5.64 5.56-5.75l-.37-.43a.756.756 0 01.07-1.06c.31-.27.79-.24 1.06.07l1.66 1.9c.02.02.03.04.05.06.04.06.08.13.1.2l.03.12c.02.09.01.19-.01.28-.02.08-.05.16-.09.24-.01.02-.03.04-.04.06-.04.06-.1.11-.16.15 0 0-.01 0-.01.01l-1.94 1.42a.76.76 0 01-1.05-.16c-.24-.33-.17-.8.16-1.05l.41-.3c-2.2.16-3.94 2-3.94 4.24a4.26 4.26 0 004.25 4.25 4.26 4.26 0 004.25-4.25 4.3 4.3 0 00-.71-2.36.746.746 0 01.21-1.04c.35-.23.81-.14 1.04.21.63.95.97 2.05.97 3.19 0 3.17-2.58 5.75-5.75 5.75z"
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M14.89 5.08c-.87-.26-1.83-.43-2.89-.43-4.79 0-8.67 3.88-8.67 8.67C3.33 18.12 7.21 22 12 22s8.67-3.88 8.67-8.67c0-1.78-.54-3.44-1.46-4.82M16.13 5.32L13.24 2M16.13 5.32l-3.37 2.46"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M12 22.75c-5.2 0-9.42-4.23-9.42-9.42C2.58 8.14 6.8 3.9 12 3.9c1.07 0 2.11.15 3.11.46.4.12.62.54.5.94a.75.75 0 01-.94.5c-.85-.26-1.75-.4-2.67-.4-4.37 0-7.92 3.55-7.92 7.92s3.55 7.92 7.92 7.92a7.925 7.925 0 006.59-12.32.746.746 0 01.21-1.04c.34-.23.81-.14 1.04.21a9.366 9.366 0 011.59 5.24c-.01 5.19-4.23 9.42-9.43 9.42z"
    ></Path>
    <Path
      fill={color}
      d="M16.13 6.07c-.21 0-.42-.09-.57-.26l-2.89-3.32a.756.756 0 01.07-1.06c.31-.27.79-.24 1.06.07l2.89 3.32c.27.31.24.79-.07 1.06-.13.13-.31.19-.49.19z"
    ></Path>
    <Path
      fill={color}
      d="M12.76 8.53c-.23 0-.46-.11-.61-.31-.24-.33-.17-.8.16-1.05l3.37-2.46a.752.752 0 01.89 1.21L13.2 8.39a.7.7 0 01-.44.14z"
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M14.89 5.08c-.87-.26-1.83-.43-2.89-.43-4.79 0-8.67 3.88-8.67 8.67C3.33 18.12 7.21 22 12 22s8.67-3.88 8.67-8.67c0-1.78-.54-3.44-1.46-4.82"
      opacity=".4"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M16.13 5.32L13.24 2M16.13 5.32l-3.37 2.46"
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

const ArrowRotateRight = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
ArrowRotateRight.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
ArrowRotateRight.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
ArrowRotateRight.displayName = 'ArrowRotateRight';
export default ArrowRotateRight;
