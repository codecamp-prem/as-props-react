import { ComponentPropsWithoutRef, ElementType } from "react";
import styles from "./Button.module.css";

type ButtonProps<T extends ElementType> = {
  As?: T;
  size?: "sm" | "md" | "lg";
} & ComponentPropsWithoutRef<T>;

const DEFAULT_TYPE = "button";

export function Button<T extends ElementType>({
  As,
  size = "md",
  className = "",
  ...btnProps
}: ButtonProps<T>) {
  const Component = As ?? DEFAULT_TYPE;

  return (
    <Component
      {...btnProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
}
