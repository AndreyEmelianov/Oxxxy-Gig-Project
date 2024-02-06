import { FC, HTMLAttributes, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ISectionMotionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const SectionMotion: FC<ISectionMotionProps> = ({ children, ...restProps }) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const backgroundY = useTransform(scrollYProgress, [0, 2], ['0%', '100%']);

  return (
    <section {...restProps} ref={ref}>
      <motion.div style={{ y: backgroundY }}>{children}</motion.div>
    </section>
  );
};
