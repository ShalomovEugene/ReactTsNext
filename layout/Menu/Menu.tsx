import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import {
  IFirstLevelMenuItem,
  IPageItem,
} from "../../interfaces/menu.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/helpers";
import { motion } from "framer-motion";
import { KeyboardEvent } from "react";

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const router = useRouter();
  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened;
          }
          return m;
        })
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>

            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == "Space" || key.code == "Enter") {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split("/")[2])
          ) {
            m.isOpened = true;
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                tabIndex={0}
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
                onKeyDown={(key: KeyboardEvent) => {
                  openSecondLevelKey(key, m._id.secondCategory);
                }}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                className={cn(styles.secondLevelBlock)}
                layout
                variants={variants}
                initial={m.isOpened ? "visible" : "hidden"}
                animate={m.isOpened ? "visible" : "hidden"}
              >
                {buildThirdLevel(m.pages, menuItem.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: IPageItem[], route: string) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={variantsChildren}>
        <Link
          href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath,
          })}
        >
          {p.category}
        </Link>
      </motion.div>
    ));
  };

  return <div className={styles.menu}>{buildFirstLevel()}</div>;
};
