import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m15.39 5.211 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42c-.43-.26-1.15-.26-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46c.09-.48-.1-1.13-.43-1.46l-1.99-1.99c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.77-1.52 2.01-1.52 2.78.01ZM8 5.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 19.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM3 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M21.32 11.908c1.17-1.17.79-2.35-.84-2.63l-2.55-.42c-.43-.07-.94-.45-1.13-.84l-1.41-2.82c-.76-1.53-2.01-1.53-2.77 0l-1.41 2.82c-.19.39-.7.76-1.13.84l-2.55.42c-1.63.27-2.01 1.45-.84 2.63l1.99 1.99c.33.33.52.98.41 1.45l-.57 2.46c-.45 1.94.59 2.7 2.3 1.68l2.39-1.42c.43-.26 1.15-.26 1.58 0l2.39 1.42c1.71 1.01 2.75.26 2.3-1.68l-.57-2.46M8 5H2M5 19H2M3 12H2"
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
      d="m15.39 5.21 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42c-.43-.26-1.15-.26-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46c.11-.46-.08-1.11-.41-1.45L6.7 11.92c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.75-1.53 1.99-1.53 2.76 0Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M8 5.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 19.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM3 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m15.39 5.21 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42c-.43-.26-1.15-.26-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46c.11-.46-.08-1.11-.41-1.45L6.7 11.92c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.75-1.53 1.99-1.53 2.76 0ZM8 5H2M5 19H2M3 12H2"
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
      d="M9.481 20.689c-.5 0-.85-.17-1.06-.33-.4-.29-1.02-1.04-.63-2.72l.57-2.46c.05-.21-.06-.59-.21-.75l-1.99-1.99c-1.05-1.05-.96-1.96-.82-2.41.14-.45.6-1.24 2.06-1.49l2.55-.42c.19-.03.5-.26.58-.43l1.41-2.82c.68-1.36 1.58-1.56 2.06-1.56s1.38.2 2.06 1.56l1.41 2.82c.09.17.39.4.58.43l2.55.42c1.46.24 1.92 1.04 2.06 1.49.14.45.23 1.36-.82 2.41l-1.99 1.99c-.15.15-.26.54-.21.75l.57 2.46c.39 1.69-.23 2.43-.63 2.72-.4.29-1.29.66-2.79-.23l-2.39-1.42c-.2-.12-.62-.12-.82 0l-2.39 1.42c-.69.42-1.27.56-1.71.56Zm4.52-15.88c-.16 0-.45.19-.72.73l-1.41 2.82c-.3.61-1.01 1.13-1.68 1.24l-2.55.42c-.57.1-.83.31-.88.47-.05.16.04.48.45.89l1.99 1.99c.51.51.78 1.44.62 2.14l-.57 2.46c-.17.71-.06 1.09.05 1.18.11.08.51.07 1.13-.31l2.4-1.42c.67-.4 1.68-.4 2.34 0l2.39 1.42c.63.37 1.03.39 1.14.31.11-.08.22-.46.05-1.18l-.57-2.46c-.16-.71.1-1.63.62-2.14l1.99-1.99c.41-.41.5-.74.45-.89-.05-.15-.31-.37-.88-.47l-2.55-.42c-.67-.11-1.38-.63-1.68-1.24l-1.41-2.82c-.27-.54-.56-.73-.72-.73ZM8 5.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM5 19.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM3 12.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m15.39 5.21 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42c-.43-.26-1.15-.26-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46c.11-.46-.08-1.11-.41-1.45L6.7 11.92c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.75-1.53 1.99-1.53 2.76 0Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M8 5H2M5 19H2M3 12H2"
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

const Star = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Star.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Star.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Star.displayName = 'Star';
export default Star;
