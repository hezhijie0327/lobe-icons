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
        d="M5.257 1.808C8.768 6.74 14.431 9.45 20.064 8.403a7.398 7.398 0 001.281-.38c.855-.33 1.975 1.01 1.326 1.658-.43.428-.84.82-1.208 1.147a51.149 51.149 0 01-8.389 6.044 51.146 51.146 0 01-9.49 4.263c-.453.15-.98.304-1.546.457-.885.238-1.484-1.4-.77-1.975.378-.306.713-.617.978-.927C5.969 14.336 6.299 8.174 3.717 2.697a18.2 18.2 0 01-.364-.84C2.995.98 4.042.335 4.656 1.055c.243.284.453.545.601.753zM19.53 13.695c-2.324 2.863-2.816 5.944-2.378 8.583l.024.16c.117.79-.816 1.277-1.448.788a12.813 12.813 0 00-.093-.072c-2.12-1.614-4.62-2.828-7.948-2.446a27.95 27.95 0 006.086-2.627c2.21-1.275 4.147-2.774 5.756-4.386z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'JimengMono';

export default Icon;
