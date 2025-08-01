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
      viewBox="0 0 119 24"
      width={size * 4.96} // 保持宽高比
      {...rest}
    >
      <Path
        d="M8.574 21.52h2.885L19.273 0h-3.065l-6.131 17.462h-.12L4.065 0H1l7.574 21.52z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M95.287 21.519h-3.066L100.336 0h3.125l8.115 21.519h-3.065l-2.074-5.83h-9.046l-2.104 5.83zm6.552-18.123l-3.516 9.708h7.152l-3.516-9.708h-.12z"
        fill={color}
      />
      <Path
        d="M116.865 21.52H114.1V0h2.765v21.52zM85.936 21.519l-5.26-7.484 5.14-7.243H82.57l-3.456 5.2-3.637-5.2H72.35l5.08 7.243-5.2 7.484h3.246l3.576-5.44 3.637 5.44h3.246z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M64.465 22c-2.164 0-3.947-.741-5.35-2.224-1.402-1.483-2.104-3.356-2.104-5.62 0-2.244.682-4.108 2.044-5.59 1.363-1.503 3.106-2.255 5.23-2.255 2.184 0 3.917.712 5.2 2.134 1.301 1.403 1.953 3.376 1.953 5.921l-.03.3H59.837c.04 1.443.52 2.605 1.442 3.487.922.882 2.024 1.322 3.306 1.322 1.763 0 3.146-.881 4.148-2.644l2.464 1.202a7.313 7.313 0 01-2.765 2.915C67.27 21.65 65.948 22 64.465 22zm-4.418-9.617h8.445c-.08-1.022-.5-1.864-1.262-2.525-.741-.681-1.743-1.022-3.006-1.022-1.041 0-1.943.32-2.704.962-.742.64-1.233 1.502-1.473 2.584z"
        fill={color}
      />
      <Path
        d="M50.174 20.648c.801.741 1.803 1.112 3.006 1.112.961 0 1.803-.13 2.524-.39l-.872-2.465c-.18.08-.38.15-.6.21-.2.04-.411.06-.632.06-.48 0-.911-.17-1.292-.51-.38-.361-.571-1.032-.571-2.014V9.317h3.606V6.793h-3.606V2.285h-2.765v4.508h-2.585v2.524h2.585v8.235c.02 1.323.42 2.355 1.202 3.096zM38.573 6.792h-2.645V21.52h2.765v-8.114c0-1.223.41-2.224 1.232-3.006.842-.801 1.904-1.202 3.186-1.202l1.233.12V6.432l-.572-.06c-2.564 0-4.257.941-5.079 2.825h-.12V6.793z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M26.427 22c-2.164 0-3.947-.741-5.35-2.224-1.402-1.483-2.104-3.356-2.104-5.62 0-2.244.682-4.108 2.044-5.59 1.363-1.503 3.106-2.255 5.23-2.255 2.184 0 3.917.712 5.2 2.134 1.301 1.403 1.953 3.376 1.953 5.921l-.03.3H21.799c.04 1.443.52 2.605 1.442 3.487s2.024 1.322 3.306 1.322c1.763 0 3.146-.881 4.148-2.644l2.464 1.202a7.313 7.313 0 01-2.765 2.915C29.232 21.65 27.91 22 26.427 22zm-4.418-9.617h8.445c-.08-1.022-.5-1.864-1.262-2.525-.741-.681-1.743-1.022-3.006-1.022-1.041 0-1.943.32-2.704.962-.742.64-1.233 1.502-1.473 2.584z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'VertexAIText';

export default Icon;
