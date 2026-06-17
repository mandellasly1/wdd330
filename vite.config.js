import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        product_listing: resolve(__dirname, "src/product_listing/index.html"),
 
      
        // Travel Safe Adventure project
        travel_safe_adventure: resolve(__dirname, "src/travel_safe_adventure/index.html")

      },
    },
  },

   server: {
    open: "/travel_safe_adventure/index.html" // 👈 auto-open your project
  }
});

  

/*
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // project root at wdd330

  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        // SleepOutside coursework entries
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        product: resolve(__dirname, "src/product_pages/index.html"),
        product_listing: resolve(__dirname, "src/product_listing/index.html"),

        // Travel Safe Adventure project
        travel_safe_adventure: resolve(__dirname, "travel-safe-adventure/index.html")
      },
    },
  },

  server: {
    open: "/travel-safe-adventure/index.html" // auto-open your project
  }
});
*/
