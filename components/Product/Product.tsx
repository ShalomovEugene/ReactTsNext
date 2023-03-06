import { IProductProps } from "./Product.props";
import styles from "./Product.module.css";
import cn from "classnames";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { decOfNum, priceUa } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";

export const Product = motion(
  forwardRef(
    (
      { product, className, ...props }: IProductProps,
      ref: ForwardedRef<HTMLDivElement>
    ): JSX.Element => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);
      const variants = {
        visible: { opacity: 1, height: "auto" },
        hidden: { opacity: 0, height: 0 },
      };

      const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };

      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <img
                src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                alt={product.title}
                width={70}
                height={70}
              />
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>
              {priceUa(product.price)}
              {product.oldPrice && (
                <Tag className={styles.oldPrice} color="green">
                  {priceUa(product.price - product.oldPrice)}
                </Tag>
              )}
            </div>
            <div className={styles.credit}>
              {priceUa(product.credit)}/
              <span className={styles.month}>Month</span>
            </div>
            <div className={styles.rating}>
              <Rating rating={product.reviewAvg ?? product.initialRating} />
            </div>
            <div className={styles.tags}>
              {product.categories.map((c) => (
                <Tag key={c} color="ghost" className={styles.categories}>
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>price</div>
            <div className={styles.creditTitle}>credit</div>
            <div className={styles.rateTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {product.reviewCount}
                {/* {decOfNum(product.reviewCount, ["review", "reviews"])} // ru version*/}
                {decOfNum(product.reviewCount, [" review", " reviews"])}
              </a>
            </div>
            <Divider className={cn(styles.hr, styles.hr2)} />
            <div className={styles.description}>{product.description}</div>
            <div className={styles.feature}>
              {product.characteristics.map((c) => (
                <div key={c.name} className={styles.characteristics}>
                  <span className={styles.characteristicsName}>{c.name}</span>
                  <span className={styles.characteristicsDots}></span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {product.advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>advantages</div>
                  <div>{product.advantages}</div>
                </div>
              )}
              {product.disadvantages && (
                <div className={styles.disadvantages}>
                  <div className={styles.advTitle}>disadvantages</div>
                  <div>{product.disadvantages}</div>
                </div>
              )}
            </div>
            <Divider className={styles.hr} />
            <div className={styles.actions}>
              <Button appearance="primary">More</Button>

              {product.reviews.length > 0 && (
                <Button
                  appearance="ghost"
                  arrow={isReviewOpened ? "down" : "right"}
                  className={styles.reviewButton}
                  onClick={() => setIsReviewOpened(!isReviewOpened)}
                  aria-expanded={isReviewOpened}
                >
                  Read reviews
                </Button>
              )}
            </div>
          </Card>
          <motion.div
            animate={isReviewOpened ? "visible" : "hidden"}
            variants={variants}
            initial="hidden"
          >
            <Card color="blue" className={styles.reviews} ref={reviewRef}>
              {product.reviews.length > 0 &&
                product.reviews.map((r) => (
                  <div key={r._id}>
                    <Review review={r} />
                    <Divider />
                  </div>
                ))}
              <ReviewForm productId={product._id} />
            </Card>
          </motion.div>
        </div>
      );
    }
  )
);
