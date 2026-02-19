import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlaceholderPage = ({ title }: { title: string }) => {
    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-background px-4">
            <div className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">{title}</span>
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
                        We are working hard to bring you this content. Please check back soon!
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default PlaceholderPage;
