import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      <Path
        d="M15.766.004c.65.024 1.293.172 1.896.44a5.43 5.43 0 011.763 1.264 5.877 5.877 0 011.178 1.89c.273.708.413 1.466.413 2.231H8.56V24a6.817 6.817 0 01-2.32-.404 6.179 6.179 0 01-1.965-1.15 5.321 5.321 0 01-1.314-1.722 4.741 4.741 0 01-.461-2.03l.002-.058H2.5V5.598h.006c.012-.303.049-.606.111-.906.234-1.13.81-2.17 1.658-2.984A6.14 6.14 0 017.378.112c.368-.07.739-.108 1.11-.112h7.278v.004z"
        fill={color}
      />
      <Path
        d="M15.766 10.222c.545.01 1.084.136 1.588.375.523.25 1 .614 1.4 1.074.401.46.72 1.006.937 1.607.217.6.328 1.244.328 1.894h-4.317v-.002H11.74v-4.949l4.025.001z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'FastGPTMono';

export default Icon;
