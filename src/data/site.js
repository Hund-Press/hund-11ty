module.exports = {
  url: process.env.SITE_URL || "http://localhost:8080",
  name: "Kiran Van Dael",
  description: "Writing here on my website when I feel like it.",
  isProduction: Boolean(process.env.PRODUCTION),
  language: "en",
  nav: [{ url: "/posts", label: "Posts" }],
  color: {
    theme: "#000",
    background: "#fff",
  },
  og: {
    type: "website",
    image: {
      src: "",
      alt: "",
      width: "1200",
      height: "600",
    },
  },
};
