import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 25 25" width={size} {...rest}>
      <Path
        d="M20.297.7H5.289A4.496 4.496 0 00.793 5.195v15.007a4.496 4.496 0 004.496 4.496h15.008a4.496 4.496 0 004.496-4.496V5.196A4.497 4.497 0 0020.297.699z"
        fill="#68C3FF"
      />
      <Path
        clipRule="evenodd"
        d="M19.779 5.834a.03.03 0 01.036-.01.03.03 0 01.018.024c.005.04.009.08.01.12.012.61.015 1.221.01 1.832a4.443 4.443 0 01-.547 2.138 4.162 4.162 0 01-2.277 1.882c-.34.12-.691.189-1.053.205-3.392.004-6.784.004-10.177 0-.071-.004-.149-.04-.159-.11a.156.156 0 01-.001-.014c-.03-1.067.317-1.988 1.042-2.764a3.855 3.855 0 012.43-1.208c2.016-.016 4.033-.025 6.05-.026a8.74 8.74 0 001.437-.195 5.856 5.856 0 001.737-.632c.208-.11.409-.233.6-.368.205-.156.394-.33.566-.524.094-.116.186-.233.278-.35zM19.721 12.098c.025-.033.075-.026.081.015.01.564.016 1.127.016 1.69.005.435-.038.865-.132 1.29a4.071 4.071 0 01-1.76 2.498c-.499.32-1.041.53-1.628.627a7.12 7.12 0 01-.326.031c-3.417.004-6.834.004-10.25 0a.123.123 0 01-.114-.076.439.439 0 01-.021-.11 4.007 4.007 0 01.605-2.117 4.08 4.08 0 011.535-1.398 3.83 3.83 0 01.76-.293c.224-.06.457-.076.688-.078l5.907-.05a7.493 7.493 0 003.343-.89c.41-.24.775-.536 1.098-.887a4.68 4.68 0 00.198-.252z"
        fill="#191B20"
        fillRule="evenodd"
      />
    </Svg>
  );
});

Icon.displayName = 'TargonColor';

export default Icon;
