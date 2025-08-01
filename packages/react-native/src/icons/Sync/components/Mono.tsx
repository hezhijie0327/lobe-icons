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
        d="M12.38 15.993v3.972c-5.181 0-9.38-2.687-9.38-5.99 0-.696.187-1.363.53-1.985 1.285 2.33 4.761 4.003 8.85 4.003zM12.38 0v4.035c-4.074 0-7.54 1.65-8.835 3.96A4.113 4.113 0 013 5.979C3 2.676 7.199 0 12.38 0zM5.396 9.99c-.814.576-1.453 1.254-1.866 2.001A4.084 4.084 0 013 10.004c0-.696.192-1.382.544-2.01.413.742 1.048 1.419 1.853 1.995zm0 0c1.717-1.217 4.21-1.982 6.982-1.982v3.993c-2.774 0-5.265-.78-6.982-2.012zM12.38 8.007V4.035c5.18 0 9.378 2.687 9.378 5.99 0 .696-.187 1.363-.53 1.985-1.285-2.33-4.761-4.003-8.849-4.003zm0 15.993v-4.035c4.072 0 7.538-1.65 8.834-3.96.352.632.544 1.311.544 2.016 0 3.303-4.199 5.979-9.379 5.979zm6.982-9.99c.814-.576 1.453-1.254 1.866-2.001.343.622.53 1.29.53 1.987 0 .696-.192 1.382-.543 2.01-.414-.742-1.048-1.419-1.853-1.995zm0 0c-1.718 1.217-4.21 1.982-6.983 1.982v-3.993c2.774 0 5.265.78 6.983 2.012z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'SyncMono';

export default Icon;
