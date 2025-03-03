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
      viewBox="0 0 72 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M14.376 9.522V3.936h8.38V2H2.663v1.936h8.38V9.538H2v1.936h8.805c-.583 2.799-2.517 6.72-8.805 8.434v2.002c6.15-.927 9.197-4.19 10.709-7.226 1.513 3.035 4.559 6.299 10.709 7.226v-2.002c-6.287-1.714-8.221-5.636-8.805-8.434h8.805V9.538h-9.042v-.016zM69.335 2H49.245v1.936h20.093V2zM70 9.324v1.936H55.432l-2.881 8.496h13.974l-2.19-5.7h2.922l2.008 5.228a1.993 1.993 0 01-1.863 2.705H51.687a1.994 1.994 0 01-1.89-2.63l2.747-8.099h-3.962V9.324H70zm-27.84 9.517h4.338v-1.303h-4.463v-1.092h4.463v-1.303h-4.463v-1.092h3.441c.44 0 .798-.357.798-.797v-3.89a.798.798 0 00-.798-.797H26.674a.798.798 0 00-.799.797v3.89c0 .44.358.797.799.797h3.44v1.092h-4.463v1.303h4.464v1.092h-4.463v1.303h4.337c-.256.682-1.122 1.388-2.345 1.587-.63.102-1.152.155-2.014.175V22c1.373 0 2.512-.096 3.583-.302 1.782-.343 3.091-1.437 3.533-2.857h6.657c.442 1.42 1.751 2.514 3.533 2.857 1.072.206 2.21.302 3.584.302v-1.397a13.201 13.201 0 01-2.015-.175c-1.223-.199-2.088-.905-2.345-1.587zm-4.853-6.022v-1.017h6.504v1.017h-6.504zm6.504-2.003h-6.504V9.8h6.504v1.017zM34.843 9.8v1.017H28.34V9.8h6.504zm-6.504 2.003h6.504v1.017H28.34v-1.017zm4.57 2.249h6.331v1.092h-6.33v-1.092zm0 2.395h6.331v1.092h-6.33v-1.092zm.963-8.846h-8.173V6.352h6.91a.48.48 0 00.48-.48v-.58h-6.945v-.985h6.946v-.58a.48.48 0 00-.48-.479H25.7V2h8.172a1.68 1.68 0 011.681 1.68v2.24a1.68 1.68 0 01-1.681 1.68zm10.653 0h.244a1.68 1.68 0 001.681-1.68V3.68A1.68 1.68 0 0044.77 2h-8.173v1.248h6.91a.48.48 0 01.48.48v.58h-6.945v.985h6.946v.58a.48.48 0 01-.48.479h-6.91V7.6h7.928z"
      />
    </svg>
  );
});

export default Icon;
