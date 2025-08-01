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
      viewBox="0 0 41 24"
      width={size * 1.71} // 保持宽高比
      {...rest}
    >
      <Path
        d="M36.867 2h2.577v20h-2.577V2zM23.875 2h2.717l7.759 20H31.55l-2.101-5.574h-8.571L18.777 22h-2.69l7.788-20zm4.79 12.185l-3.53-9.272-3.473 9.272h7.003zM7.35 14.381L2.504 7.518h2.857l3.446 5.126 3.585-5.126h2.605l-4.762 6.835L15.501 22h-2.829l-3.977-5.854L4.689 22H2l5.35-7.619z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'XAIText';

export default Icon;
