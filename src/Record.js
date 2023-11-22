import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M19.63 7.238c.3.47.14 1.1-.34 1.39l-.59.35-13.11 7.86c-.48.29-1.11.13-1.39-.36-1-1.74-1.45-3.86-1.06-6.08.66-3.77 3.76-6.77 7.55-7.31a9.003 9.003 0 0 1 8.94 4.15ZM20.89 13.43c-.68 4.25-4.44 7.5-8.75 7.57-1.9.03-3.66-.52-5.12-1.51-.62-.41-.6-1.33.04-1.71l12.41-7.29c.65-.38 1.45.06 1.51.81.05.7.02 1.41-.09 2.13Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M5.25 6.04A8.997 8.997 0 0 0 3 12a9 9 0 1 0 6.94-8.76"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m20.12 8.13-1.42.85-13.94 8.36A8.973 8.973 0 0 1 3 12a9 9 0 0 1 9-9c3.58 0 6.68 2.1 8.12 5.13Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M21.002 12a9 9 0 0 1-9 9c-2.47 0-4.7-.99-6.33-2.61l.09-.05 13.94-8.36.93-.55c.24.82.37 1.68.37 2.57Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Outline = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75Zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
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

const Record = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Record.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Record.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Record.displayName = 'Record';
export default Record;