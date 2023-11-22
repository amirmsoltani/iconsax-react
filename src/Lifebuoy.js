import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M7.5 12c0-.663.149-1.292.411-1.862.204-.442.169-.978-.175-1.322L5.16 6.24c-.41-.41-1.086-.388-1.417.088A9.904 9.904 0 0 0 1.971 12c0 2.104.65 4.058 1.762 5.67.33.477 1.008.5 1.419.09l2.583-2.576c.344-.344.38-.881.176-1.323-.263-.57-.41-1.199-.41-1.861ZM12 7.5c.664 0 1.294.148 1.864.41.441.204.978.17 1.321-.174l2.55-2.55c.409-.409.388-1.083-.086-1.415A9.883 9.883 0 0 0 11.97 2c-2.104 0-4.051.65-5.66 1.762-.478.33-.501 1.008-.09 1.42l2.56 2.567c.346.346.888.38 1.332.172A4.437 4.437 0 0 1 12 7.5ZM19.89 5.904a.48.48 0 0 0-.72-.036l-3.219 3.21a.54.54 0 0 0-.07.656 4.456 4.456 0 0 1 0 4.529.54.54 0 0 0 .07.655l3.219 3.22a.48.48 0 0 0 .72-.036 9.944 9.944 0 0 0 2.08-6.104 9.913 9.913 0 0 0-2.08-6.094ZM12 16.498a4.455 4.455 0 0 1-2.265-.619.54.54 0 0 0-.656.07l-3.25 3.249a.48.48 0 0 0 .037.72 9.944 9.944 0 0 0 6.103 2.08 9.872 9.872 0 0 0 6.108-2.089.48.48 0 0 0 .034-.719l-3.225-3.224a.54.54 0 0 0-.65-.071 4.459 4.459 0 0 1-2.237.603Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M7.04 3.3A9.99 9.99 0 0 0 1.97 12c0 5.52 4.48 10 10 10s10-4.48 10-10-4.48-10-10-10"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM4.9 4.93l3.54 3.53M4.9 19.07l3.54-3.53M19.05 19.07l-3.54-3.53M19.05 4.93l-3.54 3.53"
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
      d="M21.97 12c0 2.49-.91 4.77-2.42 6.52-.33.38-.68.74-1.06 1.05A9.864 9.864 0 0 1 11.97 22c-2.49 0-4.77-.91-6.52-2.42-.38-.33-.73-.68-1.06-1.06A9.947 9.947 0 0 1 1.97 12c0-2.49.91-4.77 2.43-6.52.32-.38.68-.74 1.06-1.06A9.92 9.92 0 0 1 11.97 2c2.5 0 4.78.91 6.52 2.43.38.32.74.67 1.06 1.06A9.92 9.92 0 0 1 21.97 12Z"
      fill={color}
    ></Path>
    <Path
      d="m15.65 14.622 3.9 3.9c-.33.38-.68.74-1.06 1.05l-3.9-3.9c-.74.52-1.63.83-2.59.83-.98 0-1.88-.32-2.62-.85l-3.93 3.93c-.38-.33-.73-.68-1.06-1.06l3.94-3.93a4.49 4.49 0 0 1-.83-2.59c0-.96.31-1.85.83-2.59L4.4 5.482c.32-.38.68-.74 1.06-1.06l3.92 3.93a4.48 4.48 0 0 1 2.62-.85c.96 0 1.85.31 2.59.83l3.9-3.9c.38.32.74.67 1.06 1.06l-3.9 3.89c.53.74.85 1.64.85 2.62 0 .98-.32 1.88-.85 2.62Z"
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
      d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
    ></Path>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM4.9 4.93l3.54 3.53M4.9 19.07l3.54-3.53M19.05 19.07l-3.54-3.53M19.05 4.93l-3.54 3.53"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M11.97 22.75C6.05 22.75 1.22 17.93 1.22 12S6.05 1.25 11.97 1.25 22.72 6.07 22.72 12 17.9 22.75 11.97 22.75Zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25Z"
      fill={color}
    ></Path>
    <Path
      d="M12 17.25c-2.9 0-5.25-2.36-5.25-5.25S9.1 6.75 12 6.75s5.25 2.36 5.25 5.25-2.35 5.25-5.25 5.25Zm0-9c-2.07 0-3.75 1.68-3.75 3.75 0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75 0-2.07-1.68-3.75-3.75-3.75Z"
      fill={color}
    ></Path>
    <Path
      d="M8.44 9.211c-.19 0-.39-.07-.53-.21l-3.54-3.54a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.54 3.54c.29.29.29.76 0 1.06-.15.14-.34.21-.53.21ZM4.9 19.819c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.54-3.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.54 3.54c-.14.15-.34.22-.53.22ZM19.04 19.819c-.19 0-.38-.07-.53-.22l-3.54-3.54a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.54 3.54c.29.29.29.77 0 1.06a.71.71 0 0 1-.53.22ZM15.51 9.21c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l3.54-3.54c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L16.04 9c-.15.14-.34.21-.53.21Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M11.97 22c5.524 0 10-4.477 10-10s-4.476-10-10-10c-5.522 0-10 4.477-10 10s4.478 10 10 10Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m4.9 4.93 3.54 3.53M4.9 19.07l3.54-3.53M19.05 19.07l-3.54-3.53M19.05 4.93l-3.54 3.53"
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

const Lifebuoy = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Lifebuoy.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Lifebuoy.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Lifebuoy.displayName = 'Lifebuoy';
export default Lifebuoy;
