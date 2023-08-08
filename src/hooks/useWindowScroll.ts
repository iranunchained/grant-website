import { useCallback, useEffect, useState } from "react";

export const useWindowScroll = () => {
  const [state, setState] = useState({
    lastScrollTop: 0,
    bodyOffset: {},
    scrollY: 0,
    scrollX: 0,
    scrollDirection: "", // down, up
  });

  useEffect(() => {
    setState({
      lastScrollTop: 0,
      bodyOffset: document.body.getBoundingClientRect(),
      scrollY: document.body.getBoundingClientRect().top,
      scrollX: document.body.getBoundingClientRect().left,
      scrollDirection: "", // down, up
    });
  }, []);

  const handleScrollEvent = useCallback(() => {
    setState((prevState: any): any => {
      const prevLastScrollTop = prevState.lastScrollTop;
      const bodyOffset = document.body.getBoundingClientRect();

      return {
        setBodyOffset: bodyOffset,
        scrollY: -bodyOffset.top,
        scrollX: bodyOffset.left,
        scrollDirection: prevLastScrollTop > -bodyOffset.top ? "down" : "up",
        lastScrollTop: -bodyOffset.top,
      };
    });
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      handleScrollEvent();
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [handleScrollEvent]);

  return {
    scrollY: state.scrollY,
    scrollX: state.scrollX,
    scrollDirection: state.scrollDirection,
  };
};
