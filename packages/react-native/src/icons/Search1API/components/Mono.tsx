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
        d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.373 12-12c0-6.628-5.373-12-12-12zm3.581 17.071c-.82.701-1.977 1.051-3.473 1.051-1.528 0-2.73-.345-3.606-1.035-.876-.691-1.313-1.64-1.313-2.847h2.315c.075.53.222.926.442 1.19.402.477 1.09.716 2.066.716.584 0 1.058-.063 1.423-.19.692-.241 1.037-.69 1.037-1.346 0-.382-.17-.68-.508-.89-.339-.204-.876-.386-1.611-.542l-1.257-.276c-1.235-.274-2.083-.57-2.545-.89-.783-.535-1.173-1.372-1.173-2.512 0-1.04.382-1.902 1.147-2.59s1.89-1.032 3.372-1.032c1.239 0 2.294.324 3.169.973.874.648 1.332 1.59 1.375 2.823H14.11c-.043-.698-.355-1.194-.936-1.488-.388-.194-.87-.292-1.445-.292-.641 0-1.152.126-1.534.378-.382.252-.573.604-.573 1.055 0 .415.188.725.565.929.242.137.756.297 1.542.48l2.037.48c.892.21 1.562.492 2.007.843.692.546 1.038 1.336 1.038 2.37 0 1.06-.41 1.941-1.23 2.642z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'Search1APIMono';

export default Icon;
