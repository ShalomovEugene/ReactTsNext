import { ITextAreaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

export const Textarea = forwardRef(
  (
    { className, error, ...props }: ITextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div className={cn(className, styles.textareaWrapper)}>
        <textarea
          className={cn(styles.textarea, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);