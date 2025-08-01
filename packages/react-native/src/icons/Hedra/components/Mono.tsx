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
        d="M9.964 22.717l1.67-2.89L14.043 24l3.04-1.754-2.742-4.746-.682-1.18-.8-1.385h-2.453l-.8 1.385-.682 1.18-2.001 3.463 3.04 1.754zm-8.268-7.124h3.338l-2.41 4.172 3.04 1.755 2.742-4.747.682-1.18.8-1.384-1.227-2.123H1.696v3.507zm2.04-10.717l1.67 2.89H.583v3.507h8.448L10.26 9.15l-.8-1.385-.682-1.18-2.001-3.462-3.04 1.753zm10.308-3.593l-1.67 2.89L9.965 0l-3.04 1.754L9.666 6.5l.683 1.18.8 1.385h2.453l.8-1.385.681-1.18 2.001-3.463-3.04-1.754zm8.268 7.124h-3.338l2.41-4.172-3.04-1.754-2.742 4.746-.682 1.18-.8 1.385 1.227 2.122H22.312V8.407zm-2.04 10.716l-1.67-2.889h4.822v-3.507h-8.448L13.75 14.85l.8 1.385.682 1.18 2 3.463 3.041-1.755z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'HedraMono';

export default Icon;
