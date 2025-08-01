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
      viewBox="0 0 110 24"
      width={size * 4.58} // 保持宽高比
      {...rest}
    >
      <Path
        d="M21.594 2H4.234L2 4.437v15.228L4.335 22h17.36v-5.28H7.28V7.38h14.315V2zM77.736 2H57.939v5.38h7.31v14.518h5.279V7.381h7.106L77.737 2zm-53.706.102v19.796h5.28V2.102h-5.28zm7.716 0v19.796h7.716l8.426-8.426V2.102H42.61v8.426l-5.482 6.091V2.102h-5.38zm18.579 0v19.796h5.28V2.102h-5.28z"
        fill={color}
      />
      <Path
        d="M102.305 2.102v19.796h5.279V2.102h-5.279zm-4.772 0H82.508l-2.335 2.335v17.462h5.279V14.69h9.035v7.208h5.28V4.438l-2.234-2.335zM94.589 9.31h-9.036V7.38h9.036v1.93zM47.888 16.72v5.178h-5.177"
        fill="#1970C2"
      />
    </Svg>
  );
});

Icon.displayName = 'CivitaiTextColor';

export default Icon;
