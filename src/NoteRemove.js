import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M5.97 1H3.03C1.76 1 1 1.76 1 3.03v2.94C1 7.24 1.76 8 3.03 8h2.94C7.24 8 8 7.24 8 5.97V3.03C8 1.76 7.24 1 5.97 1Zm.5 4.56c.25.25.25.66 0 .91a.661.661 0 0 1-.91 0L4.49 5.41 3.45 6.47a.674.674 0 0 1-.92 0 .646.646 0 0 1 0-.91L3.6 4.5 2.54 3.45a.646.646 0 0 1 0-.91c.25-.25.66-.25.91 0L4.49 3.6l1.06-1.06c.25-.25.66-.25.91 0s.25.66 0 .91L5.41 4.5l1.06 1.06ZM21.5 15.82c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2-.33 0-.65-.26-.65-.64v-3.5c0-1.46 1.24-2.67 2.76-2.67.95-.01 2.27-.01 3.4-.01.39 0 .65.31.65.64Z"
      fill={color}
    ></Path>
    <Path
      d="M21.5 15.82c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2-.33 0-.65-.26-.65-.64v-3.5c0-1.46 1.24-2.67 2.76-2.67.95-.01 2.27-.01 3.4-.01.39 0 .65.31.65.64Z"
      fill={color}
    ></Path>
    <Path
      d="M16.63 2H10.5c-.55 0-1 .45-1 1v3.5c0 1.66-1.34 3-3 3h-3c-.55 0-1 .45-1 1v6.63A4.87 4.87 0 0 0 7.37 22h4.82c.55 0 1-.45 1-1v-3.14c0-2.3 1.91-4.17 4.26-4.17.53-.01 1.82-.01 3.05-.01.55 0 1-.44 1-1V6.87A4.87 4.87 0 0 0 16.63 2ZM8.72 17.01H6.08a.755.755 0 0 1 0-1.51h2.64c.43 0 .75.34.75.76 0 .41-.32.75-.75.75Zm2.79-3.71H6.08a.755.755 0 0 1 0-1.51h5.43c.41 0 .76.34.76.76 0 .41-.35.75-.76.75Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M7 14h5M7 5.96 3.25 2.21M6.96 2.25 3.21 6M7 10h8M21 12v4M10 2h6c3.33.18 5 1.41 5 5.99M3 9.012v6.97c0 4.01 1 6.02 6 6.02h6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m21 16-6 6v-3c0-2 1-3 3-3h3Z"
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
      d="M5.97 1H3.03C1.76 1 1 1.76 1 3.03v2.94C1 7.24 1.76 8 3.03 8h2.94C7.24 8 8 7.24 8 5.97V3.03C8 1.76 7.24 1 5.97 1Zm.5 4.56c.25.25.25.66 0 .91a.661.661 0 0 1-.91 0L4.49 5.41 3.45 6.47a.674.674 0 0 1-.92 0 .646.646 0 0 1 0-.91L3.6 4.5 2.54 3.45a.646.646 0 0 1 0-.91c.25-.25.66-.25.91 0L4.49 3.6l1.06-1.06c.25-.25.66-.25.91 0s.25.66 0 .91L5.41 4.5l1.06 1.06Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M16.63 2H7.78c.14.29.22.63.22 1.03v2.94C8 7.24 7.24 8 5.97 8H3.03c-.19 0-.36-.02-.53-.06v9.19A4.87 4.87 0 0 0 7.37 22h7.97c.17 0 .34-.06.47-.2l5.51-5.55a.59.59 0 0 0 .18-.43V6.87A4.87 4.87 0 0 0 16.63 2Z"
      fill={color}
    ></Path>
    <Path
      d="M21.5 15.82c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2-.33 0-.65-.26-.65-.64v-3.5c0-1.46 1.24-2.67 2.76-2.67.95-.01 2.27-.01 3.4-.01.39 0 .65.31.65.64ZM14.78 12.71H7.36a.749.749 0 1 1 0-1.5h7.42a.749.749 0 1 1 0 1.5ZM12 16.422H7.36a.749.749 0 1 1 0-1.5H12a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M7 14h5M7 5.96 3.25 2.21M6.96 2.25 3.21 6M7 10h8M10 2h6c3.33.18 5 1.41 5 5.99V16M3 9.01v6.97C3 19.99 4 22 9 22h6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m21 16-6 6v-3c0-2 1-3 3-3h3Z"
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
      d="M12 14.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75ZM7 6.708c-.19 0-.38-.07-.53-.22l-3.75-3.75a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.75 3.75c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z"
      fill={color}
    ></Path>
    <Path
      d="M3.21 6.751c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.75-3.75c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.75 3.75c-.14.15-.34.22-.53.22ZM15 10.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M21 16.75c-.41 0-.75-.34-.75-.75V7.99c0-4.23-1.44-5.09-4.29-5.24H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c4.1.22 5.75 2.17 5.75 6.74V16c0 .41-.34.75-.75.75ZM15 22.752H9c-5.62 0-6.75-2.59-6.75-6.77v-6.97c0-.41.34-.75.75-.75s.75.34.75.75v6.97c0 3.72.73 5.27 5.25 5.27h6c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M15 22.75a.753.753 0 0 1-.75-.75v-3c0-2.42 1.33-3.75 3.75-3.75h3c.3 0 .58.18.69.46.11.28.05.6-.16.82l-6 6c-.14.14-.34.22-.53.22Zm3-6c-1.58 0-2.25.67-2.25 2.25v1.19l3.44-3.44H18Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M7 14h5"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <G
      opacity=".4"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M7 5.96 3.25 2.21M6.96 2.25 3.21 6"></Path>
    </G>
    <Path
      opacity=".4"
      d="M7 10h8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10 2h6c3.33.18 5 1.41 5 5.99V16M3 9.012v6.97c0 4.01 1 6.02 6 6.02h6"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m21 16-6 6v-3c0-2 1-3 3-3h3Z"
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

const NoteRemove = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
NoteRemove.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
NoteRemove.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
NoteRemove.displayName = 'NoteRemove';
export default NoteRemove;
