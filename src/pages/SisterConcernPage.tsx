import { motion } from 'framer-motion';
import { ExternalLink, Globe, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

const SisterConcernPage = () => {
    const companies = [
        {
            name: 'Greenway International',
            tagline: 'Your Gateway to Global Education',
            description:
                'Greenway International is a premier education consultancy firm dedicated to helping students achieve their dreams of studying abroad. We provide comprehensive guidance on university selection, visa processing, scholarships, and career planning. Our experienced counselors work with reputed universities from the UK, USA, Canada, Australia, and beyond, ensuring every student gets the right pathway to their future.',
            icon: Globe,
            color: 'from-blue-500 to-cyan-500',
            shadowColor: 'shadow-blue-500/20',
            borderColor: 'border-blue-500/30',
            href: '#',
            badge: 'Consultancy',
            features: [
                'University Admission Guidance',
                'Visa & Immigration Support',
                'Scholarship Assistance',
                'Career Counseling',
                'Test Preparation (IELTS / TOEFL)',
            ],
        },
        {
            name: 'Greenway Academy',
            tagline: 'Excellence in Education Since Day One',
            description:
                'Greenway Academy is a leading educational institution providing internationally recognized qualification programs including IELTS preparation and accredited OTHM & ATHE qualifications. We are committed to delivering world-class education to students in Bangladesh, equipping them with the skills and credentials to succeed in the global marketplace.',
            icon: GraduationCap,
            color: 'from-green-500 to-emerald-500',
            shadowColor: 'shadow-green-500/20',
            borderColor: 'border-green-500/30',
            href: '/',
            badge: 'Education',
            features: [
                'IELTS Preparation',
                'OTHM Qualifications',
                'ATHE Programmes',
                'Academic Counseling',
                'Career & Placement Support',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Our Family
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Sister <span className="gradient-text">Concern</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Two pillars of the Greenway Group — united by a shared mission to transform lives through world-class education and consultancy services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-20" />

            {/* Company Cards */}
            <section className="py-12 pb-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {companies.map((company, index) => {
                            const Icon = company.icon;
                            return (
                                <motion.div
                                    key={company.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className={`glass rounded-3xl border ${company.borderColor} overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
                                >
                                    {/* Card Header */}
                                    <div className={`bg-gradient-to-br ${company.color} p-8 relative overflow-hidden`}>
                                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                                        <div className="relative z-10 flex items-start justify-between">
                                            <div>
                                                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-4 backdrop-blur-sm">
                                                    {company.badge}
                                                </span>
                                                <h2 className="text-3xl font-bold text-white mb-2">{company.name}</h2>
                                                <p className="text-white/80 font-medium">{company.tagline}</p>
                                            </div>
                                            <div className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg ${company.shadowColor} flex-shrink-0`}>
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-8">
                                        <p className="text-muted-foreground leading-relaxed mb-8">
                                            {company.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-8">
                                            {company.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${company.color} flex items-center justify-center flex-shrink-0`}>
                                                        <span className="w-2 h-2 bg-white rounded-full" />
                                                    </div>
                                                    <span className="text-sm text-foreground/80">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <Link
                                            to={company.href}
                                            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${company.color} text-white font-semibold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg ${company.shadowColor}`}
                                        >
                                            Visit {company.name.split(' ')[1]}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SisterConcernPage;
