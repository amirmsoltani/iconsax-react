import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M21.98 15.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5a4.5 4.5 0 0 0 1.66 3.48h.01c.77.64 1.76 1.02 2.83 1.02 1.14 0 2.17-.42 2.96-1.12A4.5 4.5 0 0 0 23 18.5c0-1.08-.38-2.08-1.02-2.85Zm-1.22 2.29-2.4 2.22c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.11-1.11a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.6.6 1.87-1.73c.3-.28.78-.26 1.06.04.29.31.27.78-.04 1.06ZM14.73 5.86V2.5c0-.28-.22-.5-.5-.5H9.77c-.28 0-.5.22-.5.5v3.36c0 .28.22.5.5.5h4.46c.28 0 .5-.22.5-.5ZM7.249 2.02c-2.56.16-4.31 1.48-4.96 3.68-.1.33.14.66.48.66h4.5c.28 0 .5-.22.5-.5V2.52a.5.5 0 0 0-.52-.5ZM16.75 2.009c2.56.16 4.31 1.48 4.96 3.68.1.33-.14.66-.48.66h-4.5c-.28 0-.5-.22-.5-.5v-3.34a.5.5 0 0 1 .52-.5Z"
      fill={color}
    ></Path>
    <Path
      d="M22 8.36v4.38c0 .37-.39.61-.72.44a6.013 6.013 0 0 0-7.08 1.13 5.94 5.94 0 0 0-1.7 4.19c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H7.81C4.6 22 2 19.4 2 16.19V8.36c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5Z"
      fill={color}
    ></Path>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M2 9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7v-1.97M2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M23 18.5a4.5 4.5 0 0 1-1.54 3.38c-.79.7-1.82 1.12-2.96 1.12-1.07 0-2.06-.38-2.83-1.02h-.01A4.5 4.5 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m16.75 18.5 1.11 1.11 2.4-2.22"
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
      d="M21.98 15.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5a4.5 4.5 0 0 0 1.66 3.48h.01c.77.64 1.76 1.02 2.83 1.02 1.14 0 2.17-.42 2.96-1.12A4.5 4.5 0 0 0 23 18.5c0-1.08-.38-2.08-1.02-2.85Zm-1.22 2.29-2.4 2.22c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-1.11-1.11a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.6.6 1.87-1.73c.3-.28.78-.26 1.06.04.29.31.27.78-.04 1.06Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M22 7.81v7.89c0-.01-.01-.02-.02-.03-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 0 0-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14h.01c.01.01.02.02.03.02h-7.9C4.17 22 2 19.83 2 16.19V7.81c0-.51.04-1 .13-1.45C2.64 3.61 4.67 2.01 7.77 2h8.46c3.1.01 5.13 1.61 5.64 4.36.09.45.13.94.13 1.45Z"
      fill={color}
    ></Path>
    <Path
      d="M22 7.81v.05H2v-.05c0-.51.04-1 .13-1.45h5.64V2h1.5v4.36h5.46V2h1.5v4.36h5.64c.09.45.13.94.13 1.45Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 9v6c0 .22 0 .44-.02.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5a4.5 4.5 0 0 0 1.66 3.48c-.21.02-.43.02-.66.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7ZM2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M23 18.5a4.5 4.5 0 0 1-1.54 3.38c-.79.7-1.82 1.12-2.96 1.12-1.07 0-2.06-.38-2.83-1.02h-.01A4.5 4.5 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="m16.75 18.5 1.11 1.11 2.4-2.22"
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
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 .24 0 .49-.02.72-.03.3-.24.56-.53.65a.744.744 0 0 1-.8-.25 3.716 3.716 0 0 0-2.9-1.37c-.85 0-1.68.29-2.34.82-.9.71-1.41 1.77-1.41 2.93 0 .67.19 1.34.54 1.93.22.37.51.7.84.96.24.19.34.51.25.8-.09.29-.34.5-.65.53-.23.03-.48.03-.73.03Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h5.03c-.01-.01-.02-.03-.03-.04-.5-.82-.76-1.76-.76-2.71 0-1.62.72-3.11 1.98-4.1 1.68-1.36 4.23-1.48 6.02-.38V9c0-4.61-1.64-6.25-6.25-6.25H9Z"
      fill={color}
    ></Path>
    <Path
      d="M21.48 7.86H2.52c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18.96a.749.749 0 1 1 0 1.5Z"
      fill={color}
    ></Path>
    <Path
      d="M8.52 7.72c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.86c0 .41-.34.75-.75.75ZM15.48 7.27c-.41 0-.75-.34-.75-.75V2.11c0-.41.34-.75.75-.75s.75.34.75.75v4.41c0 .42-.33.75-.75.75ZM18.5 23.75c-1.18 0-2.32-.4-3.24-1.13-.02-.02-.05-.03-.07-.05-.47-.38-.87-.83-1.18-1.36-.5-.82-.76-1.76-.76-2.71 0-1.62.72-3.11 1.98-4.1.92-.74 2.08-1.15 3.27-1.15 1.59 0 3.07.7 4.06 1.93.76.92 1.19 2.1 1.19 3.32 0 .95-.26 1.88-.76 2.71-.29.48-.64.89-1.04 1.24a5.19 5.19 0 0 1-3.45 1.3Zm-2.43-2.4c.03.02.05.04.08.06.66.55 1.49.85 2.35.85.92 0 1.77-.32 2.46-.93.29-.25.54-.55.75-.88a3.8 3.8 0 0 0 .54-1.93c0-.87-.3-1.71-.85-2.37a3.709 3.709 0 0 0-2.9-1.38c-.85 0-1.68.29-2.34.82-.9.71-1.41 1.77-1.41 2.93 0 .67.19 1.34.54 1.93.21.33.47.64.78.9Z"
      fill={color}
    ></Path>
    <Path
      d="M17.85 20.359c-.19 0-.38-.07-.53-.22l-1.11-1.11a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.6.6 1.87-1.73c.3-.28.78-.26 1.06.04s.26.78-.04 1.06l-2.4 2.22c-.14.13-.32.2-.51.2Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M22 9v6c0 .22 0 .44-.02.65A4.46 4.46 0 0 0 18.5 14c-1.06 0-2.04.37-2.81.99A4.448 4.448 0 0 0 14 18.5a4.5 4.5 0 0 0 1.66 3.48c-.21.02-.43.02-.66.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7Z"
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
      <Path d="M2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"></Path>
    </G>
    <Path
      d="M23 18.5a4.5 4.5 0 0 1-1.54 3.38c-.79.7-1.82 1.12-2.96 1.12-1.07 0-2.06-.38-2.83-1.02h-.01A4.5 4.5 0 0 1 14 18.5c0-1.42.65-2.69 1.69-3.51A4.47 4.47 0 0 1 18.5 14c1.41 0 2.66.64 3.48 1.65.64.77 1.02 1.77 1.02 2.85Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="m16.75 18.5 1.11 1.11 2.4-2.22"
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

const VideoTick = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
VideoTick.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
VideoTick.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
VideoTick.displayName = 'VideoTick';
export default VideoTick;
