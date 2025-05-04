/**
 * Animates a counter element from 0 to the target value
 * @param element The element to animate
 * @param target The target number to count up to
 */
export const animateCounter = (element: HTMLElement, target: number) => {
  const duration = 2000; // Animation duration in ms
  const frameDuration = 1000 / 60; // Frame duration for 60fps
  const totalFrames = Math.round(duration / frameDuration);
  let frame = 0;
  
  const counter = setInterval(() => {
    frame++;
    const progress = frame / totalFrames;
    const currentCount = Math.round(target * progress);
    
    if (element) {
      element.textContent = currentCount.toString();
    }
    
    if (frame === totalFrames) {
      clearInterval(counter);
      if (element) {
        element.textContent = target.toString();
      }
    }
  }, frameDuration);
};
