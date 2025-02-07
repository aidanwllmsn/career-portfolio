declare namespace HSCarousel {
    function autoInit(selector?: string | string[]): void;
    function getInstance(element: HTMLElement, createIfNotExists?: boolean): {
      destroy: () => void;
    };
  }
  
  interface Window {
    HSCarousel: typeof HSCarousel;
  }