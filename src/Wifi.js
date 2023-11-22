import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M19.09 12.588c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29Z"
      fill={color}
    ></Path>
    <Path
      d="M22 9.108c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13a.74.74 0 0 1 .13-1.05c6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29ZM17.21 16.241c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29ZM14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.31 10.21c.97.4 1.9.94 2.78 1.62M4.91 11.839c2.44-1.89 5.3-2.7 8.1-2.44M8.36 5.28c4.63-1.1 9.55-.08 13.64 3.08M2 8.36c.94-.72 1.92-1.34 2.93-1.84M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0"
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
      d="M19.09 12.588c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29Z"
      fill={color}
    ></Path>
    <Path
      d="M22 9.108c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29ZM17.21 16.241c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M4.91 11.84c4.3-3.32 9.89-3.32 14.19 0M2 8.36c6.06-4.68 13.94-4.68 20 0M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0"
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
      d="M19.09 12.588c-.16 0-.32-.05-.46-.16-4.03-3.11-9.24-3.11-13.27 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 4.59-3.55 10.52-3.55 15.1 0 .33.25.39.72.13 1.05-.13.19-.35.29-.58.29Z"
      fill={color}
    ></Path>
    <Path
      d="M22 9.108c-.16 0-.32-.05-.46-.16-5.8-4.48-13.29-4.48-19.08 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 6.35-4.91 14.56-4.91 20.92 0 .33.25.39.72.13 1.05-.14.19-.37.29-.59.29ZM17.21 16.241c-.16 0-.32-.05-.46-.16-2.88-2.23-6.61-2.23-9.5 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 3.44-2.66 7.89-2.66 11.33 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29ZM14.6 19.9c-.16 0-.32-.05-.46-.16-1.3-1.01-2.99-1.01-4.29 0-.33.25-.8.19-1.05-.13-.25-.33-.19-.8.13-1.05 1.86-1.44 4.26-1.44 6.12 0 .33.25.39.72.13 1.05a.72.72 0 0 1-.58.29Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M4.91 11.842c4.3-3.32 9.89-3.32 14.19 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 8.362c6.06-4.68 13.94-4.68 20 0M6.79 15.49c3.15-2.44 7.26-2.44 10.41 0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M9.4 19.15c1.58-1.22 3.63-1.22 5.21 0"
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

const Wifi = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Wifi.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Wifi.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Wifi.displayName = 'Wifi';
export default Wifi;
