import { useLayoutEffect } from 'react';
// hook from https://usehooks.com/useLockBodyScroll/
export default function useLockBodyScroll(): void {
  useLayoutEffect(
    (): (() => void) => {
      // get original value of body
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // prevent scrolling on mount
      document.body.style.overflow = 'hidden';
      // re-enable scrolling when component unmounts
      return (): void => {
        document.body.style.overflow = originalStyle;
      };
    },
    [], // empty array to ensures effect is only run when mount and unmount
  );
}
