import { motion } from 'framer-motion';
import { CheckCircle, Globe, Award, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

const AccreditationIELTSPage = () => {
    const highlights = [
        { icon: Globe, title: 'Globally Recognized', desc: 'IELTS is accepted by over 11,000 organizations worldwide including universities, employers, and immigration authorities.' },
        { icon: Award, title: 'Official Test Center', desc: 'Greenway Academy is an authorized IELTS preparation center with experienced trainers and a high pass rate.' },
        { icon: BookOpen, title: 'Comprehensive Training', desc: 'Our curriculum covers all four modules — Listening, Reading, Writing & Speaking — with regular mock tests.' },
    ];

    const bands = [
        { band: '9.0', level: 'Expert User' },
        { band: '8.0–8.5', level: 'Very Good User' },
        { band: '7.0–7.5', level: 'Good User' },
        { band: '6.0–6.5', level: 'Competent User' },
        { band: '5.0–5.5', level: 'Modest User' },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                            <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">Accreditation</span>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                IELTS <span className="gradient-text">Accreditation</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                The International English Language Testing System (IELTS) is the world's most popular English language proficiency test, designed to assess language ability for study, work or migration.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/apply-now" className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                                    Enroll Now <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 glass border border-white/10 text-foreground font-semibold rounded-xl hover:border-green-500/30 transition-all">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl blur-3xl" />
                            <div className="glass rounded-3xl p-8 border border-white/10 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                        <span className="text-2xl font-bold text-white">IE</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">IELTS</h3>
                                        <p className="text-muted-foreground text-sm">International English Language Testing System</p>
                                    </div>
                                </div>
                                <div className="text-center mb-6">
                                    <p className="text-sm text-muted-foreground mb-2">Managed by</p>
                                    <p className="font-semibold">British Council · IDP · Cambridge</p>
                                </div>
                                <div className="space-y-2">
                                    {bands.map((b) => (
                                        <div key={b.band} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                                            <span className="font-bold text-green-400">{b.band}</span>
                                            <span className="text-sm text-muted-foreground">{b.level}</span>
                                        </div>
                                    ))}
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-green-400">IELTS</span> with Greenway?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {highlights.map((h, i) => {
                            const Icon = h.icon;
                            return (
                                <motion.div key={h.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                                    className="glass p-8 rounded-3xl border border-white/5 hover:border-green-500/30 transition-colors group">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
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

            {/* Test Format */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Test <span className="text-green-400">Format</span></h2>
                        <p className="text-muted-foreground">IELTS tests four core English language skills</p>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {[
                            { name: 'Listening', duration: '~30 min', details: '4 sections, 40 questions' },
                            { name: 'Reading', duration: '60 min', details: '3 passages, 40 questions' },
                            { name: 'Writing', duration: '60 min', details: 'Task 1 + Task 2 essay' },
                            { name: 'Speaking', duration: '11–14 min', details: 'Face-to-face interview' },
                        ].map((mod, i) => (
                            <motion.div key={mod.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} viewport={{ once: true }}
                                className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-5">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">{mod.name}</h4>
                                    <p className="text-sm text-muted-foreground">{mod.duration} · {mod.details}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white/3">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your IELTS Journey?</h2>
                    <p className="text-muted-foreground mb-8">Join hundreds of students who have achieved their target band score with Greenway Academy.</p>
                    <Link to="/apply-now" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                        Enroll in IELTS Course <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AccreditationIELTSPage;
