import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [a, b, c, d] = useFillIds(TITLE, 4);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill={a.fill}
      />
      <Path
        clipRule="evenodd"
        d="M12 0c.518 0 1.028.033 1.528.096A6.188 6.188 0 0112.12 12.28l-.12.001c-2.99 0-5.242 2.179-5.554 5.11-.223 2.086.353 4.412 2.242 6.146C3.672 22.1 0 17.479 0 12 0 5.373 5.373 0 12 0z"
        fill={b.fill}
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M5.286 5a2.438 2.438 0 01.682 3.38c-3.962 5.966-3.215 10.743 2.648 15.136C3.636 22.056 0 17.452 0 12c0-1.787.39-3.482 1.09-5.006.253-.435.525-.872.817-1.311A2.438 2.438 0 015.286 5z"
        fill={c.fill}
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M12.98.04c.272.021.543.053.81.093.583.106 1.117.254 1.538.44 6.638 2.927 8.07 10.052 1.748 15.642a4.126 4.126 0 01-5.822-.358c-1.51-1.706-1.3-4.184.357-5.822.858-.848 3.108-1.223 4.045-2.44 1.257-1.635 2.122-6.01-2.523-7.507L12.98.04z"
        fill={d.fill}
        fillRule="evenodd"
      />
      <Path
        clipRule="evenodd"
        d="M13.528.096A6.187 6.187 0 0112 12.281a5.752 5.752 0 00-1.71.255c.147-.905.595-1.784 1.321-2.501.858-.848 3.108-1.223 4.045-2.441 1.27-1.651 2.14-6.104-2.676-7.554.184.014.367.033.548.056z"
        fill="#ECECEE"
        fillRule="evenodd"
      />
      <Defs>
        <LinearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="12" x2="12" y1="0" y2="24">
          <Stop stopColor="#02B2FC" />
          <Stop offset="5%" stopColor="#20CBB6" />
          <Stop offset="100%" stopColor="#13D363" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="9.095"
          x2="9.095"
          y1="0"
          y2="23.537"
        >
          <Stop stopColor="#C3EBEF" />
          <Stop offset="100%" stopColor="#D3F4DD" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="4.308"
          x2="4.308"
          y1="4.593"
          y2="23.516"
        >
          <Stop stopColor="#14D368" />
          <Stop offset="5%" stopColor="#24CEAD" />
          <Stop offset="100%" stopColor="#03B4F8" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={d.id}
          x1="15.685"
          x2="15.685"
          y1=".039"
          y2="17.249"
        >
          <Stop stopColor="#61CFFA" stopOpacity=".996" />
          <Stop offset="100%" stopColor="#79E3C0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'YuanbaoColor';

export default Icon;
