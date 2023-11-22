import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M21.25 12.75c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H20v-2.2h1.25c.42 0 .75-.33.75-.75 0-.41-.33-.75-.75-.75h-1.48a4.975 4.975 0 0 0-3.32-3.32V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4h-2.2V2.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75V4H9.06V2.75a.749.749 0 1 0-1.5 0v1.48a4.97 4.97 0 0 0-3.33 3.32H2.75a.749.749 0 1 0 0 1.5H4v2.2H2.75a.749.749 0 1 0 0 1.5H4v2.2H2.75a.749.749 0 1 0 0 1.5h1.48a4.95 4.95 0 0 0 3.33 3.32v1.48a.749.749 0 1 0 1.5 0V20h2.2v1.25a.749.749 0 1 0 1.5 0V20h2.19v1.25c0 .41.34.75.75.75s.75-.34.75-.75v-1.48a4.975 4.975 0 0 0 3.32-3.32h1.48c.42 0 .75-.34.75-.75 0-.42-.33-.75-.75-.75H20v-2.2h1.25Zm-3.99 1.51c0 1.65-1.35 3-3 3H9.74c-1.65 0-3-1.35-3-3V9.74c0-1.65 1.35-3 3-3h4.52c1.65 0 3 1.35 3 3v4.52Z"
      fill={color}
    ></Path>
    <Path
      d="M10.02 16.248h3.97c1.25 0 2.27-1.01 2.27-2.27v-3.97c0-1.25-1.01-2.27-2.27-2.27h-3.97c-1.25 0-2.27 1.01-2.27 2.27v3.97c0 1.26 1.01 2.27 2.27 2.27Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7 10.5v3C7 16 8 17 10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3M8.01 4V2M12 4V2M16 4V2M20 8h2M20 12h2M20 16h2M16 20v2M12.01 20v2M8.01 20v2M2 8h2M2 12h2M2 16h2"
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
      d="M15 4H9C6.24 4 4 6.24 4 9v6c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5Zm2.26 10.26c0 1.66-1.34 3-3 3H9.74c-1.66 0-3-1.34-3-3V9.74c0-1.66 1.34-3 3-3h4.51c1.66 0 3 1.34 3 3v4.52h.01Z"
      fill={color}
    ></Path>
    <Path
      d="M9.06 2.75V4H9c-.5 0-.98.07-1.44.21V2.75a.749.749 0 1 1 1.5 0ZM12.75 2.75V4h-1.5V2.75c0-.41.34-.75.75-.75s.75.34.75.75ZM16.45 2.75v1.46C15.99 4.07 15.5 4 15 4h-.05V2.75c0-.41.34-.75.75-.75s.75.34.75.75ZM22 8.3c0 .42-.33.75-.75.75H20V9c0-.5-.07-.99-.21-1.45h1.46c.42 0 .75.34.75.75ZM22 12c0 .41-.33.75-.75.75H20v-1.5h1.25c.42 0 .75.33.75.75ZM22 15.7c0 .41-.33.75-.75.75h-1.46c.14-.46.21-.95.21-1.45v-.05h1.25c.42 0 .75.33.75.75ZM16.45 19.79v1.46c0 .41-.34.75-.75.75s-.75-.34-.75-.75V20H15c.5 0 .99-.07 1.45-.21ZM12.76 20v1.25a.749.749 0 1 1-1.5 0V20h1.5ZM9.06 20v1.25a.749.749 0 1 1-1.5 0v-1.46c.46.14.94.21 1.44.21h.06ZM4.21 7.55C4.07 8.01 4 8.5 4 9v.05H2.75a.749.749 0 1 1 0-1.5h1.46ZM4 11.25v1.5H2.75a.749.749 0 1 1 0-1.5H4ZM4.21 16.45H2.75a.749.749 0 1 1 0-1.5H4V15c0 .5.07.99.21 1.45ZM17.26 9.738v4.51c0 1.66-1.34 3-3 3H9.74c-1.66 0-3-1.34-3-3v-4.51c0-1.66 1.34-3 3-3h4.51a3.01 3.01 0 0 1 3.01 3Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3C8 7 7 8 7 10.5v3C7 16 8 17 10.5 17ZM8.01 4V2M12 4V2M16 4V2M20 8h2M20 12h2M20 16h2M16 20v2M12.01 20v2M8.01 20v2M2 8h2M2 12h2M2 16h2"
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
      d="M14.4 20.75H9.6c-4.39 0-6.35-1.96-6.35-6.35V9.6c0-4.39 1.96-6.35 6.35-6.35h4.8c4.39 0 6.35 1.96 6.35 6.35v4.8c0 4.39-1.96 6.35-6.35 6.35Zm-4.8-16c-3.58 0-4.85 1.27-4.85 4.85v4.8c0 3.58 1.27 4.85 4.85 4.85h4.8c3.58 0 4.85-1.27 4.85-4.85V9.6c0-3.58-1.27-4.85-4.85-4.85H9.6Z"
      fill={color}
    ></Path>
    <Path
      d="M13.5 17.75h-3c-2.9 0-4.25-1.35-4.25-4.25v-3c0-2.9 1.35-4.25 4.25-4.25h3c2.9 0 4.25 1.35 4.25 4.25v3c0 2.9-1.35 4.25-4.25 4.25Zm-3-10c-2.08 0-2.75.67-2.75 2.75v3c0 2.08.67 2.75 2.75 2.75h3c2.08 0 2.75-.67 2.75-2.75v-3c0-2.08-.67-2.75-2.75-2.75h-3ZM8.01 4.75c-.42 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM16 4.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM22 8.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM22 12.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM22 16.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM16 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM12.01 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM8.01 22.75c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .41-.34.75-.75.75ZM4 8.75H2a.749.749 0 1 1 0-1.5h2a.749.749 0 1 1 0 1.5ZM4 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5ZM4 16.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9.6 20h4.8c4 0 5.6-1.6 5.6-5.6V9.6c0-4-1.6-5.6-5.6-5.6H9.6C5.6 4 4 5.6 4 9.6v4.8c0 4 1.6 5.6 5.6 5.6Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M10.5 17h3c2.5 0 3.5-1 3.5-3.5v-3C17 8 16 7 13.5 7h-3C8 7 7 8 7 10.5v3C7 16 8 17 10.5 17ZM8.01 4V2M12 4V2M16 4V2M20 8h2M20 12h2M20 16h2M16 20v2M12.01 20v2M8.01 20v2M2 8h2M2 12h2M2 16h2"
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

const Cpu = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Cpu.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Cpu.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Cpu.displayName = 'Cpu';
export default Cpu;
