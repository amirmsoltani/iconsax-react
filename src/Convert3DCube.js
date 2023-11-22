import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M15 22.75a.745.745 0 0 1-.64-1.13l1.05-1.75c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.27-3.49 7.75-7.76 7.75ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.745.745 0 0 1 .64 1.13L8.59 4.14c-.21.35-.67.47-1.03.25a.746.746 0 0 1-.25-1.03l.27-.45A6.261 6.261 0 0 0 2.75 9c0 .41-.34.75-.75.75ZM10.67 13.848l-3.14-1.69c-.33-.18-.73-.18-1.06 0l-3.14 1.69c-.23.12-.37.37-.37.64s.14.52.37.64l3.14 1.69c.17.09.35.13.53.13.18 0 .36-.04.53-.13l3.14-1.69c.23-.12.37-.37.37-.64s-.15-.51-.37-.64ZM5.95 17.41l-2.92-1.46a.727.727 0 0 0-.7.03c-.2.13-.33.36-.33.61v2.76c0 .48.26.91.69 1.12l2.92 1.46c.1.04.21.07.32.07.13 0 .26-.04.38-.11.21-.13.34-.36.34-.61v-2.76c0-.47-.27-.9-.7-1.11ZM11.662 15.98a.725.725 0 0 0-.7-.03l-2.92 1.46c-.43.21-.69.64-.69 1.12v2.76c0 .25.13.48.34.61.12.06.25.1.38.1.11 0 .22-.03.32-.08l2.92-1.46c.43-.21.69-.64.69-1.12v-2.76c0-.24-.13-.47-.34-.6ZM20.67 3.829l-3.14-1.69c-.33-.18-.73-.18-1.06 0l-3.14 1.69c-.23.12-.37.37-.37.64s.14.52.37.64l3.14 1.69c.17.09.35.13.53.13.18 0 .36-.04.53-.13l3.14-1.69c.23-.12.37-.37.37-.64 0-.28-.15-.52-.37-.64ZM15.95 7.38l-2.92-1.46a.727.727 0 0 0-.7.03c-.2.13-.33.36-.33.61v2.76c0 .48.26.91.69 1.12l2.92 1.46c.1.05.21.08.32.08.13 0 .26-.04.38-.11.21-.13.34-.36.34-.61V8.5c0-.48-.27-.91-.7-1.12ZM21.662 5.95a.725.725 0 0 0-.7-.03l-2.92 1.46c-.43.21-.69.64-.69 1.12v2.76c0 .25.13.48.34.61.12.07.25.11.38.11.11 0 .22-.03.32-.08l2.92-1.46c.43-.22.69-.65.69-1.12V6.56c0-.25-.13-.48-.34-.61Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75M13.703 4.45l3.98 2.3 3.94-2.29M17.684 10.818v-4.08"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m16.742 2.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68V5.22c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.28-1.35-.28-1.87 0ZM2.352 15.453l3.97 2.3 3.95-2.29M6.32 21.822v-4.08"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M10.65 16.231c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.29-1.35-.29-1.87 0l-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33"
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
      d="M15 22.75a.745.745 0 0 1-.64-1.13l1.05-1.75c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.27-3.49 7.75-7.76 7.75ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.745.745 0 0 1 .64 1.13L8.59 4.13c-.21.36-.67.47-1.03.26a.749.749 0 0 1-.26-1.03l.27-.45C4.81 3.56 2.74 6.04 2.74 9a.74.74 0 0 1-.74.75Z"
      fill={color}
    ></Path>
    <Path
      d="m10.667 13.848-3.14-1.69c-.33-.18-.73-.18-1.06 0l-3.14 1.69c-.23.12-.37.37-.37.64s.14.52.37.64l3.14 1.69c.17.09.35.13.53.13.18 0 .36-.04.53-.13l3.14-1.69c.23-.12.37-.37.37-.64s-.15-.51-.37-.64ZM5.948 17.407l-2.92-1.46a.718.718 0 0 0-1.04.64v2.76c0 .48.26.91.69 1.12l2.92 1.46c.1.05.21.08.32.08.13 0 .26-.04.38-.11.21-.13.34-.36.34-.61v-2.76c.01-.48-.26-.91-.69-1.12ZM11.658 15.977a.725.725 0 0 0-.7-.03l-2.92 1.46c-.43.21-.69.64-.69 1.12v2.76c0 .25.13.48.34.61.12.07.25.11.38.11.11 0 .22-.03.32-.08l2.92-1.46c.43-.21.69-.64.69-1.12v-2.76c0-.25-.13-.48-.34-.61ZM20.667 3.829l-3.14-1.69c-.33-.18-.73-.18-1.06 0l-3.14 1.69c-.23.12-.37.37-.37.64s.14.52.37.64l3.14 1.69c.17.09.35.13.53.13.18 0 .36-.04.53-.13l3.14-1.69c.23-.12.37-.37.37-.64 0-.28-.15-.52-.37-.64ZM15.948 7.38l-2.92-1.46a.717.717 0 0 0-1.04.64v2.76c0 .48.26.91.69 1.12l2.92 1.46c.1.05.21.08.32.08.13 0 .26-.04.38-.11.21-.13.34-.36.34-.61V8.5c.01-.48-.26-.91-.69-1.12ZM21.658 5.95a.725.725 0 0 0-.7-.03l-2.92 1.46c-.43.21-.69.64-.69 1.12v2.76c0 .25.13.48.34.61.12.07.25.11.38.11.11 0 .22-.03.32-.08l2.92-1.46c.43-.21.69-.64.69-1.12V6.56c0-.25-.13-.48-.34-.61Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75M13.7 4.45l3.98 2.3 3.94-2.29M17.68 10.82V6.74"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m16.74 2.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68V5.22c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.28-1.35-.28-1.87 0ZM2.35 15.45l3.97 2.3 3.95-2.29M6.32 21.82v-4.08"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m5.39 13.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68v-2.54c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.52-.28-1.36-.28-1.87 0Z"
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
      d="M15 22.75a.745.745 0 0 1-.64-1.13l1.05-1.75c.21-.36.67-.47 1.03-.26.36.21.47.67.26 1.03l-.27.45c2.76-.65 4.83-3.13 4.83-6.09 0-.41.34-.75.75-.75s.75.34.75.75c-.01 4.27-3.49 7.75-7.76 7.75ZM2 9.75c-.41 0-.75-.34-.75-.75 0-4.27 3.48-7.75 7.75-7.75a.745.745 0 0 1 .64 1.13L8.59 4.13c-.21.36-.67.47-1.03.26a.749.749 0 0 1-.26-1.03l.27-.45C4.81 3.56 2.74 6.04 2.74 9a.74.74 0 0 1-.74.75ZM17.68 7.499c-.13 0-.26-.03-.38-.1l-3.97-2.3a.752.752 0 0 1-.27-1.03c.21-.36.67-.48 1.02-.27l3.6 2.08 3.57-2.07c.36-.21.82-.08 1.02.27.21.36.08.82-.27 1.03l-3.95 2.28c-.11.07-.24.11-.37.11Z"
      fill={color}
    ></Path>
    <Path
      d="M17.68 11.568c-.41 0-.75-.34-.75-.75v-4.08c0-.41.34-.75.75-.75s.75.34.75.75v4.08c0 .42-.34.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M17.68 11.75c-.46 0-.93-.1-1.3-.31l-2.4-1.33c-.78-.43-1.37-1.44-1.37-2.33V5.24c0-.9.59-1.9 1.38-2.34l2.4-1.33c.74-.41 1.85-.41 2.6 0l2.4 1.33c.78.43 1.37 1.44 1.37 2.33v2.54c0 .9-.59 1.9-1.37 2.33l-2.4 1.33c-.39.22-.85.32-1.31.32Zm-.57-8.88-2.4 1.33c-.3.17-.6.68-.6 1.02v2.54c0 .35.3.86.6 1.02l2.4 1.34c.29.16.85.16 1.14 0l2.4-1.33c.3-.17.6-.68.6-1.02V5.23c0-.35-.3-.86-.6-1.02l-2.4-1.33c-.29-.17-.86-.17-1.14-.01ZM6.321 18.499c-.13 0-.26-.03-.38-.1l-3.97-2.3a.752.752 0 0 1 .75-1.3l3.6 2.08 3.57-2.07c.36-.21.82-.08 1.02.27.21.36.08.82-.27 1.03l-3.95 2.28c-.11.07-.24.11-.37.11Z"
      fill={color}
    ></Path>
    <Path
      d="M6.32 22.568c-.41 0-.75-.34-.75-.75v-4.08c0-.41.34-.75.75-.75s.75.34.75.75v4.08c0 .42-.33.75-.75.75Z"
      fill={color}
    ></Path>
    <Path
      d="M6.32 22.75c-.46 0-.93-.1-1.3-.31l-2.4-1.33c-.78-.43-1.37-1.44-1.37-2.33v-2.54c0-.9.59-1.9 1.37-2.33l2.4-1.33c.74-.41 1.86-.41 2.6 0l2.4 1.33c.78.43 1.37 1.44 1.37 2.33v2.54c0 .9-.59 1.9-1.38 2.34l-2.4 1.33c-.36.2-.82.3-1.29.3Zm-.57-8.88-2.4 1.33c-.3.17-.6.68-.6 1.02v2.54c0 .35.3.86.6 1.02l2.4 1.33c.29.16.85.16 1.14 0l2.4-1.33c.3-.17.6-.68.6-1.02v-2.54c0-.35-.3-.86-.6-1.02l-2.4-1.34c-.28-.15-.85-.15-1.14.01Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      opacity=".4"
      d="M22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m13.703 4.45 3.98 2.3 3.94-2.29M17.684 10.818v-4.08"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m16.742 2.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68V5.22c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.28-1.35-.28-1.87 0ZM2.352 15.45l3.97 2.3 3.95-2.29M6.32 21.818v-4.08"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m5.39 13.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68v-2.54c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.52-.28-1.36-.28-1.87 0Z"
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

const Convert3DCube = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Convert3DCube.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Convert3DCube.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Convert3DCube.displayName = 'Convert3DCube';
export default Convert3DCube;
