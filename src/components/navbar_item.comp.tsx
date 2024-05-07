"use client";

import React, { PropsWithRef } from 'react';

import Link from "next/link";

export type NavItem_props = {
  title: string;
  url: string;
}

const NavItem = ({title, url}: NavItem_props): JSX.Element => {
  return (
    <li className="mr-3 nav__item" key={url}>
      <Link href={url} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:outline-none dark:text-gray-200 dark:hover:text-blue-300">
        {title}
      </Link>
    </li>
  );
}

export default NavItem;
