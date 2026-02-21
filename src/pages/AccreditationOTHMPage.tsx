import { motion } from 'framer-motion';
import { CheckCircle, Award, Shield, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

const AccreditationOTHMPage = () => {
    const highlights = [
        { icon: Shield, title: 'Ofqual Regulated', desc: 'OTHM qualifications are regulated by Ofqual and listed on the Regulated Qualifications Framework (RQF) in the UK.' },
        { icon: Award, title: 'University Progression', desc: 'Students can progress to UK universities at the final year of a bachelor\'s degree or to master\'s programmes.' },
        { icon: BookOpen, title: 'Business & Management Focus', desc: 'OTHM specialises in business, management, construction, health and social care qualifications recognised globally.' },
    ];

    const programmes = [
        { code: 'OTHM 3', name: 'Level 3 Foundation Diploma in Business', entry: 'O-Level / SSC', duration: '6 months', credits: '60 Credits' },
        { code: 'OTHM 4', name: 'Level 4 Diploma in Business Management', entry: 'A-Level / HSC', duration: '9 months', credits: '120 Credits' },
        { code: 'OTHM 5', name: 'Level 5 Diploma in Business Management', entry: 'Level 4 or equivalent', duration: '12 months', credits: '120 Credits' },
        { code: 'OTHM 6', name: 'Level 6 Diploma in Business Management', entry: 'Level 5 or equivalent', duration: '12 months', credits: '120 Credits' },
        { code: 'OTHM 7', name: 'Level 7 Diploma in Business Management', entry: "Bachelor's Degree", duration: '12 months', credits: '120 Credits' },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                            <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">Accreditation</span>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                OTHM <span className="gradient-text">Accreditation</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                OTHM Qualifications is a UK awarding organisation providing internationally recognised qualifications in Business Management, Health & Social Care, and more — regulated by Ofqual.
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <Link to="/apply-now" className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                                    Enroll Now <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 glass border border-white/10 text-foreground font-semibold rounded-xl hover:border-green-500/30 transition-all">
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-green-500/20 rounded-3xl blur-3xl" />
                            <div className="glass rounded-3xl p-8 border border-white/10 relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30">
                                        <span className="text-xl font-bold text-white">OTHM</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">OTHM</h3>
                                        <p className="text-muted-foreground text-sm">OTHM Qualifications (UK)</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mb-4">
                                    {[
                                        'Regulated by Ofqual (UK)',
                                        'Listed on the RQF (Regulated Qualifications Framework)',
                                        'Accepted by 100+ UK universities',
                                        'Level 3 – 7 programmes available',
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-4 bg-orange-500/10 rounded-xl border border-orange-500/20 text-center">
                                    <p className="text-sm text-orange-400 font-semibold">Greenway Academy is an authorized OTHM centre in Bangladesh</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-green-400">OTHM</span>?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {highlights.map((h, i) => {
                            const Icon = h.icon;
                            return (
                                <motion.div key={h.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }}
                                    className="glass p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
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

            {/* Programmes Table */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Available <span className="text-green-400">Programmes</span></h2>
                    </div>
                    <div className="glass rounded-3xl border border-white/5 overflow-hidden">
                        <div className="grid grid-cols-4 bg-white/5 px-6 py-4 text-sm font-semibold text-muted-foreground">
                            <span>Programme</span>
                            <span>Entry Requirement</span>
                            <span>Duration</span>
                            <span>Credits</span>
                        </div>
                        {programmes.map((p, i) => (
                            <motion.div key={p.code} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                                className={`grid grid-cols-4 px-6 py-5 gap-4 items-center ${i % 2 === 0 ? '' : 'bg-white/3'} hover:bg-white/5 transition-colors border-t border-white/5`}>
                                <div>
                                    <p className="font-semibold text-sm">{p.name}</p>
                                    <span className="text-xs text-orange-400">{p.code}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{p.entry}</span>
                                <span className="text-sm text-muted-foreground">{p.duration}</span>
                                <span className="text-sm font-medium text-green-400">{p.credits}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white/3">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Your OTHM Journey</h2>
                    <p className="text-muted-foreground mb-8">Earn a UK-accredited qualification and open doors to top universities worldwide.</p>
                    <Link to="/apply-now" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                        Apply for OTHM Programme <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AccreditationOTHMPage;
