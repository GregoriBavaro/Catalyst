import classes from "./Button.module.scss";

interface ButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  buttonWidth?: string;
}

const Button = ({
  label,
  type = "button",
  disabled = false,
  className,
  buttonWidth,
}: ButtonProps) => {
  const buttonType = type === undefined ? "button" : type;

  return (
    <div className={classes.buttonWrapper}>
      <button
        // eslint-disable-next-line react/button-has-type
        type={buttonType}
        disabled={disabled}
        className={`${classes.button} ${className}`}
        style={{ width: buttonWidth }}
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
