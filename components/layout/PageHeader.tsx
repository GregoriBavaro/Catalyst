import classes from "./PageHeader.module.scss";

const PageHeader = ({ header }: { header: string }) => {
  return (
    <div className={classes.pageHeader}>
      <h1>{header}</h1>
    </div>
  );
};

export default PageHeader;
