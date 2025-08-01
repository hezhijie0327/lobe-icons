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
        clipRule="evenodd"
        d="M5.493 21.234c-1.112-1.451-1.109-4.263-.081-7.459l-4.557-2.63a1.683 1.683 0 01-.85-1.304 1.505 1.505 0 01.08-.622 13.18 13.18 0 011.037-2.255c3.476-6.02 10.916-8.23 16.619-4.938.46.266.82.67 1.081 1.184.785 1.545.685 4.096-.234 6.954l4.557 2.631c.339.196.596.492.736.832a1.53 1.53 0 01.034 1.093 13.146 13.146 0 01-1.037 2.255c-3.476 6.02-10.916 8.23-16.619 4.938a2.6 2.6 0 01-.766-.68zm11.096-6.615c-2.073 3.591-5.808 5.316-8.343 3.852-1.267-.731-1.994-2.122-2.145-3.778-.095-1.035.036-2.173.4-3.32.217-.684.517-1.37.902-2.039l.008-.014c2.073-3.59 5.808-5.315 8.343-3.852.633.366 1.13.895 1.49 1.54.986 1.772.922 4.415-.285 6.914-.111.23-.232.457-.362.683l-.008.014z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'KlingMono';

export default Icon;
