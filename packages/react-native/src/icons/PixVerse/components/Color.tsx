import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        clipRule="evenodd"
        d="M17.578 9.384c.48 0 .87.39.87.87v3.867l4.245-3.663a.435.435 0 01.72.329v10.732a.436.436 0 01-.71.339l-4.255-3.441v3.891a.87.87 0 01-.209.565l-.087.088a.87.87 0 01-.686.209L6.559 21.76v1.304a.87.87 0 01-.869.87H.87a.87.87 0 01-.87-.869v-12.81c0-.48.39-.87.87-.871h16.708zm-6.158 4.348H6.978a.435.435 0 00-.435.434v2.847c0 .24.195.434.435.434h4.442c.24 0 .434-.194.435-.434v-2.847a.435.435 0 00-.435-.434zM12.826 0a4.354 4.354 0 110 8.708 4.354 4.354 0 010-8.708zm-7.98 1.313a3.628 3.628 0 110 7.256 3.628 3.628 0 010-7.256z"
        fill={fill}
        fillRule="evenodd"
      />
      <Defs>
        <LinearGradient gradientUnits="userSpaceOnUse" id={id} x1="15" x2="-.5" y1="1" y2="24">
          <Stop stopColor="#E8632A" stopOpacity=".996" />
          <Stop offset="58.6%" stopColor="#B465E6" stopOpacity=".996" />
          <Stop offset="100%" stopColor="#979FD9" stopOpacity=".996" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'PixVerseColor';

export default Icon;
