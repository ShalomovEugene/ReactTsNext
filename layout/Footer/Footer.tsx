import { IFooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")}</div>
      <a href="#" target="_blank">
        Пользовательское
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
