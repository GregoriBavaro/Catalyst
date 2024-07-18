"use client";

import { usePathname } from "next/navigation";

import { IoIosArrowForward } from "react-icons/io";
import { RiHomeLine } from "react-icons/ri";

import LinkAnimation from "../../common/animations/linkAnimation/linkAnimation";

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
          <LinkAnimation href="/">
            <RiHomeLine />
            <span>Home</span>
          </LinkAnimation>
        </li>
        {arrOfPaths?.map((str, index) => (
          <li key={str}>
            <LinkAnimation href={buildPath(index)}>
              <IoIosArrowForward />
              <span>{str}</span>
            </LinkAnimation>
          </li>
        ))}
      </ul>
      <h1>{header}</h1>
    </div>
  );
};

export default PageHeader;
