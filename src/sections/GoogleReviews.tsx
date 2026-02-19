import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviews = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const reviews = [
        {
            id: 1,
            name: 'Sarah Jenkins',
            date: '2 months ago',
            rating: 5,
            text: "Attributes of this academy are excellent. The teachers are very supportive and the environment is very friendly. I highly recommend this place for OTHM courses.",
            image: null
        },
        {
            id: 2,
            name: 'Michael Chen',
            date: '1 month ago',
            rating: 5,
            text: "Great experience with Greenway Academy. The staff is very professional and helpful. They guided me through the entire process of university application.",
            image: null
        },
        {
            id: 3,
            name: 'Priya Patel',
            date: '3 weeks ago',
            rating: 5,
            text: "I completed my Level 3 diploma here. The course material was comprehensive and easy to understand. The tutors were always available to clarify doubts.",
            image: null
        },
        {
            id: 4,
            name: 'James Wilson',
            date: '1 week ago',
            rating: 4,
            text: "Good institution for higher education. The campus is well-maintained and the facilities are top-notch. Would definitely recommend to others.",
            image: null
        },
        {
            id: 5,
            name: 'Anita Roy',
            date: 'Just now',
            rating: 5,
            text: "Best place for IELTS preparation! I got my desired band score within 2 months of coaching. Thank you Greenway Academy!",
            image: null
        },
        {
            id: 6,
            name: 'David Thompson',
            date: '4 months ago',
            rating: 5,
            text: "Highly recommended for students looking for affordable yet quality education. The management is very transparent and helpful.",
            image: null
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as any // Matches --ease-expo-out
            }
        }
    };

    return (
        <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden bg-background">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl translate-x-1/2" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
                    >
                        <Star className="w-4 h-4 fill-blue-400" />
                        <span className="uppercase tracking-wider">Google Reviews</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Trusted by <span className="gradient-text">Hundreds</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        See what our students and parents have to say about their experience with Greenway Academy on Google.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 flex items-center justify-center gap-2"
                    >
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-bold text-foreground">4.9</span>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                        </div>
                        <span className="text-muted-foreground">based on 128 reviews</span>
                    </motion.div>
                </div>

                {/* Reviews Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {reviews.map((review) => (
                        <motion.div
                            key={review.id}
                            variants={itemVariants}
                            className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors relative group h-full flex flex-col"
                        >
                            {/* Google Logo Watermark */}
                            <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.333.533 12S5.867 24 12.48 24c3.44 0 6.013-1.147 8.027-3.24 2.053-2.053 2.72-5.2 2.72-7.813 0-.8-.133-1.52-.373-2.267h-10.373z" />
                                </svg>
                            </div>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-lg">
                                    {review.image ? (
                                        <img src={review.image} alt={review.name} className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        review.name.charAt(0)
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                                    <p className="text-xs text-muted-foreground">{review.date}</p>
                                </div>
                            </div>

                            <div className="flex mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                                "{review.text}"
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://g.page/r/YOUR_GOOGLE_ID" // Replace with actual link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10"
                    >
                        <span>Write a Review</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default GoogleReviews;
