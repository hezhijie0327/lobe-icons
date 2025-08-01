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
      viewBox="0 0 93 24"
      width={size * 3.88} // 保持宽高比
      {...rest}
    >
      <Path
        d="M33.212 2H25.15v2.283h4.616a.63.63 0 01.61.79l-4.128 15.742A.945.945 0 0027.162 22h16.255l1.26-2.205h-14.96l4.409-16.608A.945.945 0 0033.213 2z"
        fill={color}
      />
      <Path
        d="M40.898 2h4.252l-6.615 6.457h-4.803L40.898 2zM39.244 11.134h-4.646l5.355 5.827h4.645l-5.354-5.827z"
        fill={color}
      />
      <Path
        clipRule="evenodd"
        d="M49.323 2.079h17.165c.522 0 .945.423.945.945v8.74h-7.638v1.417h7.638v1.732h-7.638v1.733h7.638v1.732h-7.638v1.417h7.638V22h-18.11v-2.205h7.323v-1.417h-7.323v-1.732h7.323v-1.733h-7.323l2.283-3.15h-1.338a.945.945 0 01-.945-.944v-8.74zm5.433 9.685h1.81v1.417h-2.913l1.103-1.417zm9.37-7.638H52.551v1.968h10.63l-1.023 1.89H52.55v1.733h11.575V4.126z"
        fill={color}
      />
      <Path
        d="M79.087 2.079h3.307v9.842L90.66 22h-4.173l-5.67-7.087L75.072 22h-4.016l7.953-10.079.079-9.842z"
        fill={color}
      />
      <Path
        d="M74.362 2.079h-3.228l2.44 9.685h3.23l-2.442-9.685zM90.425 2.079h-3.307l-2.283 9.685h3.15l2.44-9.685zM2 2.079h4.41V4.44H2V2.079zM9.087 2.079v2.283h1.968v6.457H8.93v2.283h2.126V22h3.15v-8.898h2.047V10.82h-2.047V4.362h2.913c.435 0 .788.353.788.788V22h3.543l1.102-2.126h-1.496V2.866a.787.787 0 00-.787-.787H9.087zM5.622 8.85H2v2.363h1.26v9.842c0 .522.423.945.945.945h2.913l1.024-2.284H6.409V9.639a.787.787 0 00-.787-.788z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'SparkText';

export default Icon;
