"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { sleep } from "../../../../utils/sleep";

interface LinkAnimationProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

const LinkAnimation = ({ children, href, ...props }: LinkAnimationProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLink = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === href) return;

    e.preventDefault();

    const main = document.querySelector("main");

    main?.classList.add("link-animation");

    await sleep(500);

    router.push(href);

    await sleep(500);

    main?.classList.remove("link-animation");
  };

  return (
    <Link onClick={handleLink} href={href} {...props}>
      {children}
    </Link>
  );
};

export default LinkAnimation;
