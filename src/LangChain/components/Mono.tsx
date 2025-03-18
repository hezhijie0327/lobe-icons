'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M8.373 14.502c.013-.06.024-.118.038-.17l.061.145c.115.28.229.557.506.714-.012.254-.334.357-.552.326-.048-.114-.115-.228-.255-.164-.143.056-.3-.01-.266-.185.333-.012.407-.371.468-.666zM18.385 9.245c-.318 0-.616.122-.839.342l-.902.887c-.243.24-.368.572-.343.913l.006.056c.032.262.149.498.337.682.13.128.273.21.447.266a.866.866 0 01-.247.777l-.056.055a2.022 2.022 0 01-1.355-1.555l-.01-.057-.046.037c-.03.024-.06.05-.088.078l-.902.887a1.156 1.156 0 000 1.65c.231.228.535.342.84.342.304 0 .607-.114.838-.341l.902-.888a1.156 1.156 0 00-.436-1.921.953.953 0 01.276-.842 2.062 2.062 0 011.371 1.57l.01.057.047-.037c.03-.024.06-.05.088-.078l.902-.888a1.155 1.155 0 000-1.65 1.188 1.188 0 00-.84-.342z" />
      <path
        clipRule="evenodd"
        d="M17.901 6H6.1C2.736 6 0 8.692 0 12s2.736 6 6.099 6H17.9C21.264 18 24 15.308 24 12s-2.736-6-6.099-6zm-5.821 9.407c-.195.04-.414.047-.562-.106-.045.1-.136.077-.221.056a.797.797 0 00-.061-.014c-.01.025-.017.048-.026.073-.329.021-.575-.309-.732-.558a4.991 4.991 0 00-.473-.21c-.172-.07-.345-.14-.509-.23a2.218 2.218 0 00-.004.173c-.002.244-.004.503-.227.651-.007.295.236.292.476.29.207-.003.41-.005.447.184a.485.485 0 01-.05.003c-.046 0-.092 0-.127.034-.117.111-.242.063-.372.013-.12-.046-.243-.094-.367-.02a2.318 2.318 0 00-.262.154.97.97 0 01-.548.194c-.024-.036-.014-.059.006-.08a.562.562 0 00.043-.056c.019-.028.035-.057.051-.084.054-.095.103-.18.242-.22-.185-.029-.344.055-.5.137l-.004.002a4.21 4.21 0 01-.065.034c-.097.04-.154.009-.212-.023-.082-.045-.168-.092-.376.04-.04-.032-.02-.061.002-.086.091-.109.21-.125.345-.119-.351-.193-.604-.056-.81.055-.182.098-.327.176-.471-.012-.065.017-.102.063-.138.108-.015.02-.03.038-.047.055-.035-.039-.027-.083-.018-.128l.005-.026a.242.242 0 00.003-.03l-.027-.01c-.053-.022-.105-.044-.09-.124-.117-.04-.2.03-.286.094-.054-.041-.01-.095.032-.145a.279.279 0 00.045-.065c.038-.065.103-.067.166-.069.054-.001.108-.003.145-.042.133-.075.297-.036.462.003.121.028.242.057.354.042.203.025.454-.18.352-.385-.186-.233-.184-.528-.183-.813v-.143c-.016-.108-.172-.233-.328-.358-.12-.095-.24-.191-.298-.28-.16-.177-.285-.382-.409-.585l-.015-.024c-.212-.404-.297-.86-.382-1.315-.103-.546-.205-1.09-.526-1.54-.266.144-.612.075-.841-.118-.12.107-.13.247-.138.396l-.001.014c-.297-.292-.26-.844-.023-1.17.097-.128.213-.233.342-.326.03-.021.04-.042.039-.074.235-1.04 1.836-.839 2.342-.103.167.206.281.442.395.678.137.283.273.566.5.795.22.237.452.463.684.689.359.35.718.699 1.032 1.089.49.587.839 1.276 1.144 1.97.05.092.08.193.11.293.044.15.089.299.2.417.026.035.084.088.149.148.156.143.357.328.289.409.009.019.027.04.05.06.032.028.074.058.116.088.122.087.25.178.16.25zm7.778-3.545l-.902.887c-.24.237-.537.413-.859.51l-.017.005-.006.015A2.021 2.021 0 0117.6 14l-.902.888c-.393.387-.916.6-1.474.6-.557 0-1.08-.213-1.474-.6a2.03 2.03 0 010-2.9l.902-.888c.242-.238.531-.409.859-.508l.016-.004.006-.016c.105-.272.265-.516.475-.724l.902-.887c.393-.387.917-.6 1.474-.6.558 0 1.08.213 1.474.6.394.387.61.902.61 1.45 0 .549-.216 1.064-.61 1.45v.001z"
      />
    </svg>
  );
});

export default Icon;
