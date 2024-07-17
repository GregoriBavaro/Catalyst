"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";

import classes from "./PageHeader.module.scss";

interface PageHeaderProps {
  header?: string;
}

const PageHeader = ({ header }: PageHeaderProps) => {
  const path = usePathname();
  const arrOfPaths = path.split("/").filter(Boolean);

  const buildPath = (index: number) => {
    return `/${arrOfPaths.slice(0, index + 1).join("/")}`;
  };

  return (
    <div className={classes.pageHeader}>
      <ul>
        <li>
          <Link href="/">
            <RiHomeLine />
            <span>Home</span>
          </Link>
        </li>
        {arrOfPaths?.map((str, index) => (
          <li key={str}>
            <Link href={buildPath(index)}>
              <IoIosArrowForward />
              <span>{str}</span>
            </Link>
          </li>
        ))}
      </ul>
      <h1>{header}</h1>
    </div>
  );
};

export default PageHeader;
