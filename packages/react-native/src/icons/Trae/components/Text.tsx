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
      viewBox="0 0 91 24"
      width={size * 3.79} // 保持宽高比
      {...rest}
    >
      <Path
        d="M13.235 2.029H2v4.114h7.12V22h4.115V6.143H20.358V2.029H13.236zM41.283 8.638c0-3.635-2.975-6.61-6.61-6.61h-8.282V6.14h8.282a2.517 2.517 0 012.499 2.498 2.517 2.517 0 01-2.499 2.499h-8.282v4.11h6.714L37.143 22h4.79l-4.422-7.397c2.226-1.066 3.772-3.343 3.772-5.965zM55.561 2l-7.914 20h4.375l5.727-13.99L63.474 22h4.375L59.936 2H55.56zM89.016 17.885H73.474V22h15.542v-4.114zM89.016 9.959H73.474v4.114h15.542V9.959zM89.016 2.029H73.474v4.114h15.542V2.029z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'TraeText';

export default Icon;
