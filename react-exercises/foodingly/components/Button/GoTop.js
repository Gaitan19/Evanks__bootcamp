import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 750) {
        setIsVisible(() => true);
      } else {
        setIsVisible(() => false);
      }
    };

    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <Link href="#Top-bar" className={`Button-top ${isVisible && 'visible'}`}>
      <FaChevronUp className="Button-top-icon" />
    </Link>
  );
};

export default GoTop;
