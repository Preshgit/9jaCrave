/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-expressions */
export function AboutUsImage(text: string) {
  switch (text) {
    case "Discover":
      return {
        image: "/images/jollof rice sisi yemmie.jpg",
        text: "Discover a wide array of traditional and modern Nigerian recipes,curated to bring the rich and diverse flavors of Nigeria to yourkitchen. Easily find the perfect dish by searching based on theingredients you have at hand, making your cooking experience bothconvenient and flavorful.",
        link: "/explore",
        linkName: "explore",
      };
      break;
    case "Share":
      return {
        image: "/images/jimmy-dean-my1mDMraGf0-unsplash-1200x800.jpg",
        text: "Whether you’re a seasoned chef or a home cook, your contributions help expand our collective love for Nigerian culinary.           Upload your recipes, add your personal touch, and watch as others discover and enjoy your creations, making you a part of the growing Naija Crave family",
        link: "/share",
        linkName: "share",
      };
      break;
    case "Chronicles":
      return {
        image: "/images/41.jpg",
        text: " Uncover the stories behind Nigeria’s beloved dishes, exploring the cultural heritage and personal tales that make each recipe special.",
        link: "/food-chronicles",
        linkName: "food chronicles",
      };
  }
}
