import styles from "./LiquidPanel.module.css";

function LiquidPanel({ children, className = "" }) {
  return (
    <div className={`${styles.panel} ${className}`}>
      {children}
    </div>
  );
}

export default LiquidPanel;