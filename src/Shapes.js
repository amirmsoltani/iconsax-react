import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M13.43 15.001H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24 2.18-3.97c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55Z"
      fill={color}
    ></Path>
    <Path
      d="M22.65 15.999a6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.31-4.93c-.07-.3.16-.57.47-.57h3.77c1.39 0 2.65-.72 3.36-1.91.7-1.2.73-2.64.05-3.86l-.5-.92c-.19-.34.08-.75.46-.68 2.96.6 5.2 3.22 5.2 6.37Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M6.81 3.241c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M22 15.5a6.5 6.5 0 1 1-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0 1 22 15.5Z"
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
      d="M13.43 15.001H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24 2.18-3.97c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M22 15.5a6.5 6.5 0 1 1-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0 1 22 15.5Z"
      fill={color}
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
      d="M16.97 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C1.97 8.5 3.47 7 7.22 7h4.5c3.75 0 5.25 1.5 5.25 5.25z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M21.97 7.5c0 2.87-2.19 5.22-5 5.47v-.72c0-3.75-1.5-5.25-5.25-5.25H11c.25-2.81 2.6-5 5.47-5 2.79 0 5.09 2.07 5.44 4.77.04.23.06.48.06.73z"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M13.43 15.748H4.4c-1.12 0-2.14-.58-2.71-1.55-.57-.97-.59-2.13-.05-3.12l4.51-8.21a3.105 3.105 0 0 1 2.76-1.63c1.17 0 2.2.61 2.76 1.63l4.52 8.21c.54.98.52 2.15-.05 3.12-.57.97-1.59 1.55-2.71 1.55Zm-4.52-13c-.61 0-1.15.32-1.44.85l-4.51 8.21c-.28.52-.27 1.12.02 1.63.3.51.83.81 1.42.81h9.03c.59 0 1.12-.3 1.42-.81.3-.51.31-1.11.02-1.63l-4.52-8.21c-.29-.53-.83-.85-1.44-.85Z"
      fill={color}
    ></Path>
    <Path
      d="M15.5 22.75c-4 0-7.25-3.25-7.25-7.25 0-.18.01-.36.02-.54.02-.4.35-.71.75-.71h4.41c.59 0 1.12-.3 1.42-.81.3-.51.31-1.11.02-1.63l-1.28-2.33a.742.742 0 0 1-.02-.68c.1-.22.3-.37.53-.42.45-.09.92-.13 1.4-.13 4 0 7.25 3.25 7.25 7.25s-3.25 7.25-7.25 7.25Zm-5.74-7c.13 3.06 2.66 5.5 5.74 5.5 3.17 0 5.75-2.58 5.75-5.75s-2.58-5.75-5.75-5.75h-.05l.74 1.34c.54.98.52 2.15-.05 3.12a3.11 3.11 0 0 1-2.71 1.55H9.76v-.01Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M13.43 15.001H4.4c-1.82 0-2.98-1.95-2.1-3.55l2.33-4.24 2.18-3.97c.91-1.65 3.29-1.65 4.2 0l2.19 3.97 1.05 1.91 1.28 2.33c.88 1.6-.28 3.55-2.1 3.55Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M22 15.5a6.5 6.5 0 1 1-13 0c0-.17.01-.33.02-.5h4.41c1.82 0 2.98-1.95 2.1-3.55l-1.28-2.33A6.5 6.5 0 0 1 22 15.5Z"
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

const Shapes = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Shapes.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Shapes.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Shapes.displayName = 'Shapes';
export default Shapes;
