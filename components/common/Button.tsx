import classes from "./Button.module.scss";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button = ({ label, onClick, type = "button", disabled = false, className }: ButtonProps) => {
  const buttonType = type === undefined ? "button" : type;

  return (
    <div className={classes.buttonWrapper}>
      <button
        // eslint-disable-next-line react/button-has-type
        type={buttonType}
        onClick={onClick}
        disabled={disabled}
        className={`${classes.button} ${className}`}
      >
        <span className={classes.circle} aria-hidden="true">
          <span className={`${classes.icon} ${classes.arrow}`} />
        </span>
        <span className={classes.label}>{label}</span>
      </button>
    </div>
  );
};

export default Button;
