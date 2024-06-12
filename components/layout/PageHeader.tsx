"use client";

import { useState, useEffect } from "react";
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
  const [arrOfPaths, setArrOfPaths] = useState<string[]>(path.split("/").filter(Boolean));

  useEffect(() => {
    const newArr = path.split("/").filter(Boolean);
    setArrOfPaths(newArr);
  }, [path]);

  return (
    <div className={classes.pageHeader}>
      <ul>
        <li>
          <Link href="/">
            <RiHomeLine />
            <span>Home</span>
          </Link>
        </li>
        {arrOfPaths.map((str) => (
          <li key={str}>
            <Link href={`/${str}`}>
              <IoIosArrowForward />
              <span>{str}</span>
            </Link>
          </li>
        ))}
      </ul>
      <h2>{header}</h2>
    </div>
  );
};

export default PageHeader;
