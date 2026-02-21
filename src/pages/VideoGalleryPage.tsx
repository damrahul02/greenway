import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

const VideoGalleryPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/3 w-96 h-96 bg-green-500/6 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">Watch & Learn</span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Video <span className="gradient-text">Gallery</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore campus tours, student testimonials, event highlights, and learning resources.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="py-20">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                        className="glass rounded-3xl p-16 border border-white/10">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/20">
                            <Play className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
                        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                            We're producing amazing video content to showcase Greenway Academy life. Stay tuned!
                        </p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                            Contact Us <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default VideoGalleryPage;
