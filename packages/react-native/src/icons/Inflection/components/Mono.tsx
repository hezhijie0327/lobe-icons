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
        d="M8.341 24c-.53 0-.841-.308-.841-.824v-.271c0-.514.248-.755.708-.926l1.025-.343c.708-.271.954-.583.954-1.303V3.667c0-.72-.246-1.029-.954-1.303L8.2 2.02c-.46-.171-.701-.408-.701-.926V.824C7.5.309 7.818 0 8.348 0h6.968c.531 0 .85.309.85.824v.271c0 .514-.249.755-.709.926l-1.031.34c-.743.272-.992.583-.992 1.303v16.664c0 .72.249 1.028.992 1.303l1.024.342c.46.172.708.408.708.926v.272c0 .515-.318.824-.85.824L8.342 24z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'InflectionMono';

export default Icon;
