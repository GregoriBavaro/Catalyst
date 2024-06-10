import { CSSProperties } from "react";

import classes from "./PageHeader.module.scss";

interface PageHeaderProps {
  header: string;
}

const PageHeader = ({ header }: PageHeaderProps) => {
  return (
    <div className={classes.pageHeader}>
      <h2>{header}</h2>
    </div>
  );
};

export default PageHeader;
