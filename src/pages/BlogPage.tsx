import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Footer from '../sections/Footer';

const BlogPage = () => {
    const posts = [
        {
            id: 1,
            title: "Top 5 Tips for IELTS Speaking Test",
            excerpt: "Master the speaking section with these proven strategies from our expert instructors. Boost your confidence and fluency.",
            author: "Sarah Hawthorne",
            date: "Feb 18, 2026",
            category: "IELTS",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
            tags: ["Exam Prep", "Speaking", "Band 8.0"]
        },
        {
            id: 2,
            title: "Benefits of OTHM Level 3 Diploma",
            excerpt: "Discover how the OTHM Level 3 Foundation Diploma can be your gateway to top UK universities without A-Levels.",
            author: "James Wilson",
            date: "Feb 10, 2026",
            category: "OTHM",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
            tags: ["University Access", "Diploma", "Career"]
        },
        {
            id: 3,
            title: "Student Success Story: From Greenway to Manchester",
            excerpt: "Read about Aritra's journey and how Greenway Academy helped him secure a spot at the prestigious University of Manchester.",
            author: "Greenway Team",
            date: "Jan 25, 2026",
            category: "Success Stories",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
            tags: ["Alumni", "Inspiration", "Study Abroad"]
        },
        {
            id: 4,
            title: "Understanding the New UK Student Visa Rules",
            excerpt: "A comprehensive guide to the latest changes in UK student visa regulations and what they mean for international applicants.",
            author: "Dr. Eleanor Sterling",
            date: "Jan 15, 2026",
            category: "Study Abroad",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
            tags: ["Visa", "UK", "Guide"]
        },
        {
            id: 5,
            title: "Why Soft Skills Matter in Today's Job Market",
            excerpt: "Technical skills get you the interview, but soft skills get you the job. Learn how we integrate soft skills training into our curriculum.",
            author: "Robert Fox",
            date: "Jan 05, 2026",
            category: "Career Advice",
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
            tags: ["Soft Skills", "Employability", "Growth"]
        },
        {
            id: 6,
            title: "Mental Health Tips for Exam Season",
            excerpt: "Exam stress is real. Here are some practical tips to manage anxiety and maintain your well-being during high-pressure periods.",
            author: "Robert Fox",
            date: "Dec 20, 2025",
            category: "Wellness",
            image: "https://images.unsplash.com/photo-1544367563-12123d832d34?auto=format&fit=crop&q=80&w=800",
            tags: ["Mental Health", "Study Tips", "Wellness"]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            News & Insights
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Greenway <span className="gradient-text">Blog</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Stay updated with the latest educational trends, exam tips, and success stories from our community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex flex-col h-full"
                            >
                                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-black backdrop-blur-md">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-white/5 text-muted-foreground">
                                                <Tag className="w-3 h-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition-colors mt-auto">
                                        Read Article
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPage;
