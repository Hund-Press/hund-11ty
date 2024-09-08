module.exports = {
  url: process.env.SITE_URL || "http://localhost:8080",
  name: "Dana Babatunde is awesome",
  description: "Writing here on my website when I feel like it.",
  language: "en",
  nav: [
    { url: "/posts/", label: "Posts" },
    { url: "/whatever/", label: "Whatever" },
  ],
  creator: {
    name: "Dana Babatunde",
    bio: "A brief description of me as an author.",
    email: "danaba@example.com",
  },
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
