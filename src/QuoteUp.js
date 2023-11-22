import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M8.09 11.631H3.4c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.687.687 0 0 0-.95-.24c-3.38 2-4.56 3.22-4.56 9.03v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c0-1.75-1.33-3.08-3.09-3.08ZM18.909 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M10.368 18.14c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 12.352h5.8c.96 0 1.72.45 2.16 1.14M2 12.351c0-6.05 1.13-7.05 4.53-9.07M13.629 12.352h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8M13.629 12.351c0-6.05 1.13-7.05 4.53-9.07"
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
      d="M8.088 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M18.909 11.631h-4.69c.08-4.67 1-5.44 3.87-7.14.33-.2.44-.62.24-.96a.698.698 0 0 0-.96-.24c-3.38 2-4.56 3.22-4.56 9.04v5.39c0 1.71 1.39 3.09 3.09 3.09h3c1.76 0 3.09-1.33 3.09-3.09v-3c.01-1.76-1.32-3.09-3.08-3.09Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 12.35h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58H4.58C3.16 20.73 2 19.57 2 18.15v-5.8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M2 12.35C2 6.3 3.13 5.3 6.53 3.28M13.63 12.35h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M13.63 12.35c0-6.05 1.13-7.05 4.53-9.07"
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
      d="M7.8 21.47H4.58c-1.83 0-3.33-1.49-3.33-3.33v-5.8c0-.41.34-.75.75-.75h5.8c1.9 0 3.33 1.43 3.33 3.33v3.22c-.01 1.9-1.44 3.33-3.33 3.33ZM2.75 13.1v5.05c0 1.01.82 1.83 1.83 1.83H7.8c1.06 0 1.83-.77 1.83-1.83v-3.22c0-1.06-.77-1.83-1.83-1.83H2.75Z"
      fill={color}
    ></Path>
    <Path
      d="M2 13.099c-.41 0-.75-.34-.75-.75 0-6.25 1.27-7.56 4.9-9.71.36-.21.82-.09 1.03.26.21.36.09.82-.26 1.03-3.24 1.92-4.17 2.72-4.17 8.42 0 .41-.34.75-.75.75ZM19.421 21.47h-3.22c-1.83 0-3.33-1.49-3.33-3.33v-5.8c0-.41.34-.75.75-.75h5.8c1.9 0 3.33 1.43 3.33 3.33v3.22c0 1.9-1.43 3.33-3.33 3.33Zm-5.04-8.37v5.05c0 1.01.82 1.83 1.83 1.83h3.22c1.06 0 1.83-.77 1.83-1.83v-3.22c0-1.06-.77-1.83-1.83-1.83h-5.05Z"
      fill={color}
    ></Path>
    <Path
      d="M13.629 13.099c-.41 0-.75-.34-.75-.75 0-6.25 1.27-7.56 4.9-9.71.36-.21.82-.09 1.03.26.21.36.09.82-.26 1.03-3.24 1.92-4.17 2.72-4.17 8.42 0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M2 12.352h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58H4.58c-1.42 0-2.58-1.16-2.58-2.58v-5.8M2 12.351c0-6.05 1.13-7.05 4.53-9.07"></Path>
    </G>
    <Path
      d="M13.629 12.352h5.8c1.53 0 2.58 1.16 2.58 2.58v3.22c0 1.42-1.05 2.58-2.58 2.58h-3.22c-1.42 0-2.58-1.16-2.58-2.58v-5.8M13.629 12.351c0-6.05 1.13-7.05 4.53-9.07"
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

const QuoteUp = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
QuoteUp.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
QuoteUp.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
QuoteUp.displayName = 'QuoteUp';
export default QuoteUp;
