import { useEffect, useState } from "react";

const useFixedHeader = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const handleScroll = () => {
    setIsHeaderFixed(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isHeaderFixed, handleScroll };
};

export default useFixedHeader;
