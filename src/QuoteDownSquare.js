import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2Zm-4.58 12.84c0 1.09-.85 1.94-1.94 1.94H8.19c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83.12-.07.25-.1.38-.1.26 0 .51.13.65.37.21.36.09.82-.26 1.03-1.21.7-1.63.96-1.71 2.77h1.91c1.09 0 1.94.85 1.94 1.94v1.49h-.01Zm6.14 0c0 1.09-.85 1.94-1.94 1.94h-1.49c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-3.08.67-3.77 2.46-4.83.12-.07.25-.1.38-.1.26 0 .51.13.65.37.21.36.09.82-.26 1.03-1.21.72-1.63.98-1.71 2.79h1.91c1.09 0 1.94.85 1.94 1.94v1.47Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68M7 12.159c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68M13.14 12.159c0-2.79.52-3.26 2.09-4.19"
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
      d="M16.192 2h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81Z"
      fill={color}
    ></Path>
    <Path
      d="M8.19 16.779h1.49c1.09 0 1.94-.85 1.94-1.94v-1.49c0-1.09-.85-1.94-1.94-1.94H7.77c.08-1.81.5-2.08 1.71-2.79.36-.21.47-.67.26-1.03a.746.746 0 0 0-.65-.37c-.13 0-.26.03-.38.1-1.79 1.06-2.46 1.75-2.46 4.83v2.67c0 1.09.87 1.96 1.94 1.96ZM14.319 16.779h1.49c1.09 0 1.94-.85 1.94-1.94v-1.49c0-1.09-.85-1.94-1.94-1.94h-1.91c.08-1.81.5-2.08 1.71-2.79.36-.21.47-.67.26-1.03a.746.746 0 0 0-.65-.37c-.13 0-.26.03-.38.1-1.79 1.06-2.46 1.75-2.46 4.83v2.67c.01 1.09.88 1.96 1.94 1.96Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68M7 12.16c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68M13.14 12.16c0-2.79.52-3.26 2.09-4.19"
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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
    <Path
      d="M9.68 16.782H8.19c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-.41.34-.75.75-.75h2.68c1.09 0 1.94.85 1.94 1.94v1.49a1.933 1.933 0 0 1-1.94 1.93Zm-1.93-3.87v1.92c0 .24.2.44.44.44h1.49c.32 0 .44-.24.44-.44v-1.49c0-.2-.11-.44-.44-.44H7.75v.01Z"
      fill={color}
    ></Path>
    <Path
      d="M7 12.91c-.41 0-.75-.34-.75-.75 0-3.08.67-3.77 2.46-4.83a.76.76 0 0 1 1.03.26c.21.35.09.82-.26 1.03-1.36.81-1.73 1.02-1.73 3.54 0 .42-.34.75-.75.75ZM15.809 16.782h-1.49c-1.07 0-1.94-.87-1.94-1.94v-2.67c0-.41.34-.75.75-.75h2.68c1.09 0 1.94.85 1.94 1.94v1.49c0 1.07-.85 1.93-1.94 1.93Zm-1.92-3.87v1.92c0 .24.2.44.44.44h1.49c.32 0 .44-.24.44-.44v-1.49c0-.2-.11-.44-.44-.44h-1.93v.01Z"
      fill={color}
    ></Path>
    <Path
      d="M13.14 12.91c-.41 0-.75-.34-.75-.75 0-3.08.67-3.77 2.46-4.83.36-.21.82-.09 1.03.26.21.35.09.82-.26 1.03-1.36.81-1.73 1.02-1.73 3.54 0 .42-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M7 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19H8.19A1.2 1.2 0 0 1 7 14.84v-2.68M7 12.159c0-2.79.52-3.26 2.09-4.19M13.14 12.16h2.68c.71 0 1.19.54 1.19 1.19v1.49c0 .65-.48 1.19-1.19 1.19h-1.49a1.2 1.2 0 0 1-1.19-1.19v-2.68M13.14 12.159c0-2.79.52-3.26 2.09-4.19"></Path>
    </G>
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

const QuoteDownSquare = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
QuoteDownSquare.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
QuoteDownSquare.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
QuoteDownSquare.displayName = 'QuoteDownSquare';
export default QuoteDownSquare;
