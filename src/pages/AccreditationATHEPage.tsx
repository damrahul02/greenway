import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

const AccreditationATHEPage = () => {
    const highlights = [
        { icon: Star, title: 'Ofqual Regulated', desc: 'ATHE qualifications are regulated by Ofqual (Office of Qualifications and Examinations Regulation) in the UK.' },
        { icon: TrendingUp, title: 'University Progression', desc: 'ATHE Level 4 and 5 qualifications provide direct entry into Year 2 or 3 of UK university degree programmes.' },
        { icon: BookOpen, title: 'Flexible Learning', desc: 'Designed for working professionals and school leavers, combining academic rigour with practical business skills.' },
    ];

    const levels = [
        { level: 'Level 3', title: 'Foundation Diploma', entry: 'O-Level / SSC', duration: '6 months' },
        { level: 'Level 4', title: 'Higher National Certificate', entry: 'A-Level / HSC or Level 3', duration: '9 months' },
        { level: 'Level 5', title: 'Higher National Diploma', entry: 'Level 4 or equivalent', duration: '12 months' },
        { level: 'Level 6', title: 'Graduate Diploma', entry: 'Level 5 or equivalent', duration: '12 months' },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                            <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">Accreditation</span>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                ATHE <span className="gradient-text">Accreditation</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                Awards for Training and Higher Education (ATHE) is a UK awarding organisation offering internationally recognised qualifications across business, management, health and social care.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/apply-now" className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                                    Enroll Now <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 glass border border-white/10 text-foreground font-semibold rounded-xl hover:border-green-500/30 transition-all">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-green-500/20 rounded-3xl blur-3xl" />
                            <div className="glass rounded-3xl p-8 border border-white/10 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                                        <span className="text-xl font-bold text-white">ATHE</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">ATHE</h3>
                                        <p className="text-muted-foreground text-sm">Awards for Training & Higher Education</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span>Regulated by Ofqual (UK)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span>Globally recognised qualification</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        <span>University top-up pathway available</span>
                                    </div>
                                </div>
                                <div className="mt-4 p-4 bg-green-500/10 rounded-xl border border-green-500/20 text-center">
                                    <p className="text-sm text-green-400 font-semibold">Greenway Academy is an authorized ATHE centre</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-20 bg-white/3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-green-400">ATHE</span>?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {highlights.map((h, i) => {
                            const Icon = h.icon;
                            return (
                                <motion.div key={h.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                                    className="glass p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-colors group">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{h.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{h.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Qualification Levels */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Qualification <span className="text-green-400">Levels</span></h2>
                        <p className="text-muted-foreground">ATHE offers qualifications from Level 3 to Level 7</p>
                    </div>
                    <div className="space-y-4">
                        {levels.map((l, i) => (
                            <motion.div key={l.level} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                                className="glass p-6 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-colors flex items-center gap-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 border border-purple-500/20">
                                    <span className="text-xs text-muted-foreground">UK</span>
                                    <span className="text-purple-400 font-bold text-lg">{l.level}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold mb-1">{l.title}</h4>
                                    <div className="flex gap-6 text-sm text-muted-foreground">
                                        <span>Entry: {l.entry}</span>
                                        <span>Duration: {l.duration}</span>
                                    </div>
                                </div>
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white/3">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Advance Your Career with ATHE</h2>
                    <p className="text-muted-foreground mb-8">Get a UK-recognised qualification and progress to top universities worldwide.</p>
                    <Link to="/apply-now" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                        Apply for ATHE Programme <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AccreditationATHEPage;
