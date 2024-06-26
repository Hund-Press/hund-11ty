module.exports = {
  url: process.env.SITE_URL || "http://localhost:8080",
  name: "Kulap Agnarsson",
  description: "Writing here on my website when I feel like it.",
  isProduction: Boolean(process.env.PRODUCTION),
  language: "en",
  nav: [],
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
