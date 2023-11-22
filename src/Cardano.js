import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';

const Bold = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      fill={color}
      d="M17.148 10a1 1 0 100-2 1 1 0 000 2zM17.148 16a1 1 0 100-2 1 1 0 000 2zM19.75 13a1 1 0 100-2 1 1 0 000 2zM6.799 10a1 1 0 100-2 1 1 0 000 2zM6.799 16a1 1 0 100-2 1 1 0 000 2zM4.2 13a1 1 0 100-2 1 1 0 000 2zM15.898 6.2a1 1 0 100-2 1 1 0 000 2zM8.1 6.2a1 1 0 100-2 1 1 0 000 2zM12.049 7a1 1 0 100-2 1 1 0 000 2zM15.898 20a1 1 0 100-2 1 1 0 000 2zM8.1 20a1 1 0 100-2 1 1 0 000 2zM12.049 19.2a1 1 0 100-2 1 1 0 000 2zM13.75 10.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM10.25 10.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM15.5 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM8.5 13.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM10.25 16.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM13.75 16.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
    ></Path>
    <G>
      <Path
        fill={color}
        d="M12 3.33c-.49 0-.88-.39-.88-.88s.39-.88.88-.88.88.39.88.88-.39.88-.88.88z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M17.25 3.602c-.42 0-.76-.34-.76-.75s.34-.75.75-.75.76.34.76.75-.33.75-.75.75z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M6.75 3.602a.749.749 0 110-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M12 22.381c-.49 0-.88-.39-.88-.88s.39-.88.88-.88.88.39.88.88-.39.88-.88.88z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M17.25 21.852c-.42 0-.76-.34-.76-.75s.34-.75.75-.75.76.34.76.75-.33.75-.75.75z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M6.75 21.852a.749.749 0 110-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M1.55 12.881a.88.88 0 01-.88-.87v-.01c0-.48.39-.88.88-.88s.88.39.88.88-.4.88-.88.88z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M3.75 17.748c-.41 0-.75-.33-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M3.75 7.762c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.74v.01c0 .41-.34.75-.75.75z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M22.5 12.881a.88.88 0 01-.88-.87v-.01a.881.881 0 011.76 0c0 .49-.4.88-.88.88z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M20.3 17.748c-.41 0-.75-.33-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76z"
      ></Path>
    </G>
    <G>
      <Path
        fill={color}
        d="M20.3 7.762c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.75v.01c0 .4-.34.74-.75.74z"
      ></Path>
    </G>
  </>
);

const Broken = ({ color, strokeWidth = 2 }) => (
  <>
    <Path d="M13.75 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" stroke={color} strokeMiterlimit="10"></Path>
    <Path
      d="M10.25 10c.55 0 1-.45 1-1s-.45-1-1-1"
      stroke={color}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M15.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.15 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.15 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.2 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      stroke={color}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M8.85 19c0 .41-.34.75-.75.75s-.75-.34-.75-.75"
      stroke={color}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12.05 18.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke={color}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M14.75 15c0-.55-.45-1-1-1s-1 .45-1 1"
      stroke={color}
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.95 2.5v0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17.45 2.898v0M17.45 21.25v0M19.95 16.55v0M19.95 7.05v0M3.95 16.55v0M3.95 7.05v0M6.45 2.898v0M6.45 21.25v0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M11.95 21.55v0M1.5 12.05v0M22.45 12.05v0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
  </>
);

const Bulk = ({ color, strokeWidth = 2 }) => (
  <>
    <G opacity=".6" fill={color}>
      <Path
        opacity=".6"
        d="M17.148 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.148 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19.75 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.799 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.799 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4.2 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.898 6.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.1 6.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.049 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.898 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8.1 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12.049 19.2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      ></Path>
    </G>
    <Path
      d="M13.75 10.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM10.25 10.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.5 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM8.5 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM10.25 16.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM13.75 16.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill={color}
    ></Path>
    <Path
      opacity=".4"
      d="M12 3.328c-.49 0-.88-.39-.88-.88s.39-.87.88-.87.88.39.88.88-.39.87-.88.87ZM17.25 3.602c-.42 0-.76-.34-.76-.75s.34-.75.75-.75.76.34.76.75-.33.75-.75.75ZM6.75 3.602a.749.749 0 1 1 0-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75ZM12 22.381c-.49 0-.88-.39-.88-.88s.39-.88.88-.88.88.39.88.88-.39.88-.88.88ZM17.25 21.852c-.42 0-.76-.34-.76-.75s.34-.75.75-.75.76.34.76.75-.33.75-.75.75ZM6.75 21.852a.749.749 0 1 1 0-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75ZM1.55 12.881a.88.88 0 0 1-.88-.87v-.01c0-.48.39-.88.88-.88s.87.39.87.88-.39.88-.87.88ZM3.75 17.748c-.41 0-.75-.34-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76ZM3.75 7.762c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.74v.01c0 .41-.34.75-.75.75ZM22.5 12.881a.88.88 0 0 1-.88-.87v-.01c0-.48.39-.88.88-.88s.88.39.88.88-.4.88-.88.88ZM20.3 17.748c-.41 0-.75-.33-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76ZM20.3 7.762c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.74v.01c0 .41-.34.75-.75.75Z"
      fill={color}
    ></Path>
  </>
);

const Linear = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M13.75 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM17.15 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.15 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.2 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 18.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13.75 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke={color}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M12 2.45v0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M17.5 2.85v0M17.5 21.2v0M20 16.5v0M20 7v0M4 16.5v0M4 7v0M6.5 2.85v0M6.5 21.2v0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      d="M12 21.5v0M1.55 12v0M22.5 12v0"
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
      d="M13.75 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm0-2c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM10.25 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm0-2c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM15.5 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm0-2c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM17.15 10.25a1.25 1.25 0 1 1 .001-2.5 1.25 1.25 0 0 1 0 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM17.15 16.25a1.25 1.25 0 1 1 .001-2.5 1.25 1.25 0 0 1 0 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM19.75 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM6.8 10.25a1.25 1.25 0 1 1 .002-2.5 1.25 1.25 0 0 1-.001 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM6.8 16.25a1.25 1.25 0 1 1 .002-2.5 1.25 1.25 0 0 1-.001 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM4.2 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM15.9 6.45a1.25 1.25 0 1 1 .001-2.502 1.25 1.25 0 0 1 0 2.501Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM8.1 6.45a1.25 1.25 0 1 1 0-2.502 1.25 1.25 0 0 1 0 2.501Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM12.05 7.25a1.25 1.25 0 1 1 .002-2.5 1.25 1.25 0 0 1-.001 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM15.9 20.25a1.25 1.25 0 1 1 .001-2.5 1.25 1.25 0 0 1 0 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM8.1 20.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM12.05 19.45a1.25 1.25 0 1 1 .002-2.502 1.25 1.25 0 0 1-.001 2.501Zm0-1.5c-.14 0-.25.11-.25.25 0 .28.5.28.5 0 0-.14-.11-.25-.25-.25ZM8.5 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm0-2c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM10.25 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm0-2c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM13.75 16.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm0-2c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5ZM12 3.45c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1ZM17.25 3.602c-.42 0-.76-.34-.76-.75s.34-.75.75-.75.76.34.76.75-.33.75-.75.75ZM6.75 3.602a.749.749 0 1 1 0-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75ZM12 22.5c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.43 1-.99 1ZM17.25 21.852c-.42 0-.76-.34-.76-.75s.34-.75.75-.75.76.34.76.75-.33.75-.75.75ZM6.75 21.852a.749.749 0 1 1 0-1.5h.01c.41 0 .75.34.75.75s-.34.75-.76.75ZM1.55 13c-.55 0-1-.44-1-1 0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1ZM3.75 17.748c-.41 0-.75-.33-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76ZM3.75 7.762c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.74v.01c0 .41-.34.75-.75.75ZM22.5 13c-.55 0-1-.44-1-1 0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1ZM20.3 17.748c-.41 0-.75-.33-.75-.75v-.01c0-.41.34-.75.75-.75s.75.34.75.75-.34.76-.75.76ZM20.3 7.762c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.33.75.75v.01c0 .4-.34.74-.75.74Z"
      fill={color}
    ></Path>
  </>
);

const TwoTone = ({ color, strokeWidth = 2 }) => (
  <>
    <Path
      d="M13.75 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke={color}
      strokeMiterlimit="10"
    ></Path>
    <Path
      opacity=".4"
      d="M17.15 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM17.15 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.75 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 9.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM6.8 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.2 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 5.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 6.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15.9 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.1 19.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.05 18.95a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      stroke={color}
      strokeMiterlimit="10"
    ></Path>
    <Path
      d="M8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10.25 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM13.75 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      stroke={color}
      strokeMiterlimit="10"
    ></Path>
    <Path
      opacity=".4"
      d="M12 2.45v0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M17.5 2.852v0M17.5 21.2v0M20 16.5v0M20 7v0M4 16.5v0M4 7v0M6.5 2.852v0M6.5 21.2v0"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    ></Path>
    <Path
      opacity=".4"
      d="M12 21.5v0M1.55 12v0M22.5 12v0"
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

const Cardano = forwardRef(({ variant, color, size, ...rest }, ref) => {
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
Cardano.propTypes = {
  variant: PropTypes.oneOf(['Linear', 'Bold', 'Broken', 'Bulk', 'Outline', 'TwoTone']),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Cardano.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: '24',
};
Cardano.displayName = 'Cardano';
export default Cardano;