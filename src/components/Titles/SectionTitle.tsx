import { FC } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface ISectionTitleProps {
  text: string;
  className?: string;
}

export const SectionTitle: FC<ISectionTitleProps> = ({ text, className }) => {
  return (
    <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft">
      <h2 className={className}>{text}</h2>
    </ScrollAnimation>
  );
};
