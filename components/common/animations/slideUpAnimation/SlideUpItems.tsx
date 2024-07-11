"use client";

import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import useWindowSize from "../../../../hooks/use-WindowSize";

interface SlideUpProps {
  children: React.ReactNode;
  forwardRef?: any;
  itemClass: string;
  showAllCards?: boolean;
  id: number;
}

const SlideUpItems = ({ children, itemClass, forwardRef, showAllCards, id }: SlideUpProps) => {
  const size = useWindowSize();
  const [showItems, setShowItems] = useState<number>(6);

  useEffect(() => {
    if ((size.width ?? 1110) < 1110 && (size.width ?? 768) > 768) {
      setShowItems(4);
    } else if ((size.width ?? 768) < 768) {
      setShowItems(2);
    } else {
      setShowItems(6);
    }
  }, [size]);

  const itemVariants = {
    visible: {
      opacity: showAllCards || id < showItems ? 1 : 0,
      y: 0,
      transition: {
        duration: 0.5,
        opacity: { duration: 0.5, delay: 0 },
      },
    },
    hidden: { y: 200 },
  };

  return (
    <m.li ref={forwardRef} className={itemClass} variants={itemVariants}>
      {children}
    </m.li>
  );
};

export default SlideUpItems;
