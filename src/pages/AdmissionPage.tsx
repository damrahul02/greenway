import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Info, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

interface Session {
    name: string;
    month: string;
    lastAdmissionDate: string;
    classStartDate: string;
    applyInfo: string;
    admissionInfo: string;
    image: string;
    color: string;
}

const sessions: Session[] = [
    {
        name: 'January Session',
        month: 'January',
        lastAdmissionDate: '7 January',
        classStartDate: '9 January',
        applyInfo: 'Apply directly from our website or contact us.',
        admissionInfo: 'For admission info visit our Contact Us page.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'March Session',
        month: 'March',
        lastAdmissionDate: '7 March',
        classStartDate: '9 March',
        applyInfo: 'Apply directly from our website or contact us.',
        admissionInfo: 'For admission info visit our Contact Us page.',
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80',
        color: 'from-green-500 to-emerald-500',
    },
    {
        name: 'May Session',
        month: 'May',
        lastAdmissionDate: '7 May',
        classStartDate: '9 May',
        applyInfo: 'Apply directly from our website or contact us.',
        admissionInfo: 'For admission info visit our Contact Us page.',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80',
        color: 'from-yellow-500 to-orange-500',
    },
    {
        name: 'September Session',
        month: 'September',
        lastAdmissionDate: '7 September',
        classStartDate: '9 September',
        applyInfo: 'Apply directly from our website or contact us.',
        admissionInfo: 'For admission info visit our Contact Us page.',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
        color: 'from-purple-500 to-indigo-500',
    },
    {
        name: 'November Session',
        month: 'November',
        lastAdmissionDate: '7 November',
        classStartDate: '9 November',
        applyInfo: 'Apply directly from our website or contact us.',
        admissionInfo: 'For admission info visit our Contact Us page.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
        color: 'from-red-500 to-pink-500',
    },
];

const tableRows = [
    { label: 'Session', icon: Calendar, key: 'month' as keyof Session },
    { label: 'Last Admission Date', icon: Clock, key: 'lastAdmissionDate' as keyof Session },
    { label: 'Class Start Date', icon: Clock, key: 'classStartDate' as keyof Session },
    { label: 'Apply Info', icon: ArrowRight, key: 'applyInfo' as keyof Session },
    { label: 'Admission Info', icon: Info, key: 'admissionInfo' as keyof Session },
];

const AdmissionPage = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-background/60 to-background" />
                    <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        {/* Decorative dash */}
                        <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mb-6" />
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Admission
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Choose your intake session and begin your journey at Greenway Academy. We welcome new students throughout the year.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Session Rows */}
            <section className="pb-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                    {sessions.map((session, _index) => (
                        <motion.div
                            key={session.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: '-80px' }}
                            className="group"
                        >
                            {/* Session Label */}
                            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3">
                                <span className={`inline-block w-3 h-3 rounded-full bg-gradient-to-br ${session.color}`} />
                                {session.name}
                            </h2>

                            {/* Row Layout: Image + Table */}
                            <div className="grid lg:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden border border-white/8 shadow-xl shadow-black/20 group-hover:border-white/15 transition-colors duration-300">
                                {/* Image */}
                                <div className="relative h-56 lg:h-auto overflow-hidden">
                                    <img
                                        src={session.image}
                                        alt={session.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 via-black/20 to-transparent`} />
                                    {/* Badge */}
                                    <div className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-gradient-to-r ${session.color} text-white text-sm font-bold shadow-lg`}>
                                        {session.month}
                                    </div>
                                </div>

                                {/* Info Table */}
                                <div className="bg-card/60 backdrop-blur-sm">
                                    {/* Table Header */}
                                    <div className="grid grid-cols-2 bg-white/5 px-6 py-3 border-b border-white/8">
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Title</span>
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Details</span>
                                    </div>

                                    {/* Rows */}
                                    {tableRows.map((row, i) => {
                                        const Icon = row.icon;
                                        const value = session[row.key];
                                        const isLink = row.key === 'applyInfo' || row.key === 'admissionInfo';
                                        return (
                                            <div
                                                key={row.label}
                                                className={`grid grid-cols-2 px-6 py-4 border-b border-white/5 last:border-b-0 items-center ${i % 2 === 0 ? 'bg-white/0' : 'bg-white/3'} hover:bg-white/5 transition-colors`}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <Icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                    <span className="text-sm font-medium text-foreground/80">{row.label}</span>
                                                </div>
                                                <span className="text-sm text-muted-foreground">
                                                    {isLink ? (
                                                        <>
                                                            {row.key === 'applyInfo' ? (
                                                                <>
                                                                    Directly Apply from our website or{' '}
                                                                    <Link to="/contact" className="text-green-400 hover:underline">Contact</Link>
                                                                    {' '}us.
                                                                </>
                                                            ) : (
                                                                <>
                                                                    For admission info visit our{' '}
                                                                    <Link to="/contact" className="text-green-400 hover:underline">Contact Us</Link>
                                                                    {' '}page.
                                                                </>
                                                            )}
                                                        </>
                                                    ) : (
                                                        value
                                                    )}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-20 bg-white/3">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="glass rounded-3xl p-12 border border-white/10">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Need Help with Admission?</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Our friendly admissions team is available to guide you through every step of the process.
                            </p>
                            <div className="flex gap-4 justify-center flex-wrap">
                                <Link to="/apply-now" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95">
                                    Apply Now <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 glass border border-white/10 text-foreground font-semibold rounded-xl hover:border-green-500/30 transition-all">
                                    Contact Admissions
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AdmissionPage;
