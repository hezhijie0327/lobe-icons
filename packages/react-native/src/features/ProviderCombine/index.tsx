import React, { memo, useMemo } from 'react';
import { View, type ViewStyle } from 'react-native';

import { rnProviderMappings } from '../providerConfig';

export interface RNProviderCombineProps {
    provider?: string;
    size?: number;
    style?: ViewStyle;
    type?: 'mono' | 'color';
}

const RNProviderCombineMain = memo<RNProviderCombineProps>(
    ({ provider: originProvider, size = 12, type = 'color', style, ...rest }) => {
        const Render = useMemo(() => {
            if (!originProvider) return undefined;
            const provider = originProvider.toLowerCase();

            for (const item of rnProviderMappings) {
                if (item.keywords.some((keyword) => keyword.toLowerCase() === provider)) {
                    return item;
                }
            }
            return undefined;
        }, [originProvider]);

        const iconProps = {
            size: size * (Render?.combineMultiple || 1),
            type,
            ...Render?.props,
        };

        let icon = Render?.Combine ? (
            <Render.Combine {...iconProps} />
        ) : Render?.Icon?.Combine ? (
            <Render.Icon.Combine {...iconProps} />
        ) : Render?.Icon?.Text ? (
            <Render.Icon.Text {...iconProps} />
        ) : (
            <View style={{ backgroundColor: '#f0f0f0', height: size, width: size }} />
        );

        return (
            <View
                style={[
                    {
                        alignItems: 'center',
                        height: size * 1.5,
                        justifyContent: 'center',
                    },
                    style,
                ]}
                {...rest}
            >
                {icon}
            </View>
        );
    },
);

RNProviderCombineMain.displayName = 'RNProviderCombineMain';

export default RNProviderCombineMain; 