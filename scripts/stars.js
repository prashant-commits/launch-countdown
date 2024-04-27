/**
 * 
 * @param {number} size 
 * @param {number} postionX 
 * @param {number} postionY 
 */
export function createStar(size, postionX, postionY) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.setProperty("--size", `${size}px`);
  star.style.position = "absolute";
  star.style.left = `${postionX}px`;
  star.style.top = `${postionY}px`;
  return star;
}

/**
 * 
 * @param {HTMLElement} container 
 */
export function createStars(numberOfStars = 100, container) {
  if(!container) {
    throw new Error("Container is required");
  }
  for (let i = 0; i < numberOfStars; i++) {
    const size = Math.random() * 6;
    const x = Math.random() * (window.innerWidth - size * 2);
    const y = Math.random() * (window.innerHeight - size * 2);
    const star = createStar(size, x, y);
    container.appendChild(star);
  }
}
