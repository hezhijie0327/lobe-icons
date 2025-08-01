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
        d="M11.238 7.603a1.532 1.532 0 011.524 0l10.468 6a1.532 1.532 0 010 2.66l-10.468 6c-.472.27-1.052.27-1.524 0l-10.468-6a1.533 1.533 0 010-2.66l10.468-6zm-6.624 7.33L12 19.166l7.386-4.233L12 10.699l-7.386 4.234z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M11.238 1.733a1.533 1.533 0 011.524 0l10.468 6a1.532 1.532 0 010 2.659l-10.468 6c-.472.27-1.052.27-1.524 0l-10.468-6a1.532 1.532 0 010-2.659l10.468-6zm-6.624 7.33L12 13.296l7.386-4.233L12 4.829 4.614 9.063z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M12.784 10.265L2.291 16.239.774 13.575l10.494-5.974 1.516 2.664z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'GradioMono';

export default Icon;
