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
        d="M5.988 1.622A8.539 8.539 0 003.45 8.446c.349 4.408 4.506 7.995 8.276 7.995 3.507 0 4.88-3.061 4.541-5.14a4.318 4.318 0 00-.95-2.073c.632.34 1.244.776 1.809 1.3 1.52 1.415 2.44 3.229 2.587 5.1C20.04 19.763 16.98 24 11.863 24c-1.695 0-3.48-.432-4.98-1.143C2.816 20.937 0 16.797 0 12.002 0 7.571 2.405 3.7 5.988 1.622zM12.136 0c1.696 0 3.481.432 4.98 1.143C21.186 3.063 24 7.203 24 11.998c0 4.431-2.405 8.303-5.988 10.38a8.539 8.539 0 002.538-6.824c-.349-4.408-4.506-7.995-8.276-7.995-3.507 0-4.88 3.061-4.541 5.14a4.3 4.3 0 00.953 2.073 8.723 8.723 0 01-1.81-1.3c-1.52-1.415-2.44-3.227-2.589-5.1C3.96 4.237 7.02 0 12.137 0z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'DeepMindMono';

export default Icon;
