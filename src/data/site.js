module.exports = {
  url: process.env.SITE_URL || "http://localhost:8080",
  name: "Dana Babatunde",
  description: "Writing here on my website when I feel like it.",
  isProduction: Boolean(process.env.PRODUCTION),
  language: "en",
  nav: [{ url: "/posts", label: "Posts" }],
  owner: {
    name: "Dana Babatunde",
    email: "danaba@example.com",
    bio: "A brief description of me as an author.",
    image: {
      file: "author.jpg",
      alt: "photo of the author",
    },
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
