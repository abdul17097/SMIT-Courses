export type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    slug: "future-of-web-development",
    excerpt:
      "Explore the latest trends, technologies, and tools shaping the future of modern web development.",
    category: "Development",
    author: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    publishedAt: "Aug 8, 2026",
    readTime: "6 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Building Better User Experiences",
    slug: "building-better-user-experiences",
    excerpt:
      "Learn practical techniques for creating simple, intuitive, and enjoyable digital experiences.",
    category: "Design",
    author: {
      name: "Sarah Wilson",
      avatar: "https://i.pravatar.cc/100?img=47",
    },
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    publishedAt: "Aug 6, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "How AI Is Changing Businesses",
    slug: "how-ai-is-changing-businesses",
    excerpt:
      "Discover how artificial intelligence is helping companies improve productivity and make better decisions.",
    category: "Business",
    author: {
      name: "Michael Brown",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    publishedAt: "Aug 4, 2026",
    readTime: "8 min read",
  },
  {
    id: 4,
    title: "Modern JavaScript Best Practices",
    slug: "modern-javascript-best-practices",
    excerpt:
      "A practical guide to writing clean, maintainable, and scalable JavaScript applications.",
    category: "Development",
    author: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/100?img=33",
    },
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    publishedAt: "Aug 2, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Design Systems That Scale",
    slug: "design-systems-that-scale",
    excerpt:
      "Learn how a strong design system can improve consistency and speed across your entire product.",
    category: "Design",
    author: {
      name: "Emily Davis",
      avatar: "https://i.pravatar.cc/100?img=44",
    },
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    publishedAt: "Jul 30, 2026",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Starting a Successful Startup",
    slug: "starting-a-successful-startup",
    excerpt:
      "Important lessons and strategies every entrepreneur should know before launching a startup.",
    category: "Business",
    author: {
      name: "David Miller",
      avatar: "https://i.pravatar.cc/100?img=68",
    },
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    publishedAt: "Jul 28, 2026",
    readTime: "9 min read",
  },
];
