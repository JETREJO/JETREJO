import styles from "./ellipticalButton.module.css";

interface EllipticalButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  style?: any;
}

const EllipticalButton: React.FC<EllipticalButtonProps> = ( {children, style, disabled, onClick, type} ) => {
  return (
    <button
      className={styles.button}
      type={type}{...(disabled && {disabled: disabled} || {})}
      style={{...(style || {})}}
      onClick={onClick}>
        {children}
    </button>
  );
}

export default EllipticalButton;
