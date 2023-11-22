import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m17.29 4.14-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.37-.43.54-1.23.37-1.77L4.27 6.42c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.67-1.19 3-.49 2.96 1.56Z"
      fill={color}
    ></Path>
    <Path
      d="m21.44 20.47-3.03-3.03a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l3.03 3.03c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M4.27 6.42c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.67-1.2 3-.5 2.96 1.55l-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.19-.22.32-.52.39-.84M21.91 21.999l-3.03-3.03"
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
      d="m17.29 4.141-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.37-.43.54-1.23.37-1.77l-1.01-3.23c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.66-1.2 2.99-.5 2.95 1.55Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="m21.44 20.47-3.03-3.03a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l3.03 3.03c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m17.29 4.14-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.37-.43.54-1.23.37-1.77L4.28 6.43c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.66-1.2 2.99-.5 2.95 1.55ZM21.91 22l-3.03-3.03"
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
      d="M13.01 22.499c-.6 0-1.53-.29-2.42-1.75l-1.76-2.85c-.17-.28-.69-.55-1.01-.53l-3.34.17c-2 .1-2.7-.73-2.95-1.23s-.47-1.57.83-3.09l1.98-2.3c.2-.24.31-.76.22-1.06l-1.01-3.23c-.51-1.62.06-2.49.44-2.87.38-.38 1.26-.93 2.88-.39l2.95.97c.27.09.77.01 1-.15l3.08-2.22c1.41-1.02 2.43-.75 2.9-.5.47.25 1.27.93 1.24 2.67l-.07 3.79c-.01.28.22.74.44.91l2.48 1.88c1.35 1.03 1.4 2.06 1.31 2.59-.09.53-.49 1.49-2.11 1.99l-3.23 1.01c-.3.09-.67.48-.75.78l-.77 2.94c-.51 1.93-1.51 2.36-2.07 2.44-.07.02-.16.03-.26.03Zm-5.16-6.63c.86 0 1.81.52 2.25 1.24l1.76 2.85c.5.82.95 1.07 1.19 1.03.23-.03.59-.41.84-1.33l.77-2.94c.21-.8.96-1.59 1.75-1.83l3.23-1.01c.62-.19 1.02-.5 1.08-.82.06-.32-.22-.74-.74-1.14l-2.48-1.88c-.61-.46-1.05-1.38-1.04-2.14l.07-3.79c.01-.67-.15-1.17-.44-1.32-.29-.15-.78 0-1.33.39l-3.08 2.22c-.61.44-1.62.6-2.35.36l-2.95-.97c-.62-.2-1.12-.19-1.35.04-.23.23-.25.73-.06 1.35l1.01 3.23c.25.79.03 1.86-.51 2.48l-1.98 2.3c-.63.73-.73 1.24-.62 1.45.1.21.58.44 1.53.39l3.34-.17c.04.01.08.01.11.01ZM21.91 22.75c-.19 0-.38-.07-.53-.22l-3.03-3.03a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.03 3.03c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="m17.29 4.141-.07 3.79c-.01.52.32 1.21.74 1.52l2.48 1.88c1.59 1.2 1.33 2.67-.57 3.27l-3.23 1.01c-.54.17-1.11.76-1.25 1.31l-.77 2.94c-.61 2.32-2.13 2.55-3.39.51l-1.76-2.85c-.32-.52-1.08-.91-1.68-.88l-3.34.17c-2.39.12-3.07-1.26-1.51-3.08l1.98-2.3c.37-.43.54-1.23.37-1.77l-1.01-3.23c-.59-1.9.47-2.95 2.36-2.33l2.95.97c.5.16 1.25.05 1.67-.26l3.08-2.22c1.66-1.2 2.99-.5 2.95 1.55Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m21.91 21.999-3.03-3.03"
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

const MagicStar = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
MagicStar.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
MagicStar.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
MagicStar.displayName = 'MagicStar';
export default MagicStar;