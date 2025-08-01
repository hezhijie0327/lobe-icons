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
        d="M5.861 18.918c-.829-1.368-1.838-2.504-3.04-3.289a.74.74 0 01-.18-1.045C4.817 11.764 8.199 4.378 9.97.359c.264-.601 1.17-.4 1.17.256v10.71a2.719 2.719 0 00-1.35 3.611l-3.935 3.982h.006zm.871 1.678c.415.924.763 1.92 1.04 2.948a.605.605 0 00.582.456h7.748a.61.61 0 00.583-.456 19.585 19.585 0 011.039-2.948l-2.06-2.085-1.718 1.738c.042.158.066.323.066.493 0 .997-.799 1.805-1.784 1.805a1.795 1.795 0 01-1.784-1.805c0-.997.799-1.806 1.784-1.806.15 0 .3.019.438.055l1.736-1.757-.979-.99a2.68 2.68 0 01-2.378 0l-4.3 4.352h-.013zm11.863-1.678c.829-1.368 1.838-2.504 3.04-3.289a.74.74 0 00.18-1.045C19.64 11.764 16.257 4.378 14.485.359c-.264-.601-1.17-.4-1.17.256v10.71a2.719 2.719 0 011.35 3.611l3.935 3.982h-.006z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'NovelAIMono';

export default Icon;
