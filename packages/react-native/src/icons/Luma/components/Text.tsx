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
      viewBox="0 0 111 24"
      width={size * 4.63} // 保持宽高比
      {...rest}
    >
      <Path
        d="M2 2h2.314v17.355h8.926v2.15H2V2zm28.402 12.066c0 1.065-.137 2.075-.413 3.03-.257.956-.68 1.8-1.267 2.535-.57.716-1.323 1.295-2.26 1.735-.936.423-2.074.634-3.415.634-1.34 0-2.48-.211-3.416-.634-.937-.44-1.699-1.019-2.287-1.735a7.47 7.47 0 01-1.267-2.535 11.616 11.616 0 01-.386-3.03V2h2.315v11.736c0 .79.082 1.551.247 2.286.166.735.441 1.387.827 1.956.386.57.9 1.028 1.543 1.377.642.331 1.45.496 2.424.496.973 0 1.781-.165 2.424-.496a4.311 4.311 0 001.543-1.377 5.67 5.67 0 00.826-1.956c.166-.735.248-1.497.248-2.286V2h2.314v12.066zM35.171 2h3.443l6.612 15.29h.055L51.948 2h3.36v19.504h-2.313V5.14h-.056l-6.997 16.364h-1.405L37.54 5.14h-.055v16.364H35.17V2zm31.328 0h2.177l8.292 19.504h-2.7l-1.983-4.793h-9.752l-2.011 4.793h-2.618L66.5 2zm1.047 2.975h-.055l-4.05 9.587h7.962l-3.857-9.587zM93.563 2h2.177l8.292 19.504h-2.7l-1.983-4.793h-9.753l-2.01 4.793h-2.618L93.563 2zm1.047 2.975h-.055l-4.05 9.587h7.962L94.61 4.975zM106.624 2h2.314v19.504h-2.314V2z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'LumaText';

export default Icon;
