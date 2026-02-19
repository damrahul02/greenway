import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, FileText, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

const AdmissionPage = () => {
    const steps = [
        {
            id: 1,
            title: "Submit Application",
            description: "Fill out our online application form with your personal details and academic history.",
            icon: FileText
        },
        {
            id: 2,
            title: "Counseling Session",
            description: "Meet with our academic counselors to discuss your goals and choose the right program.",
            icon: Users
        },
        {
            id: 3,
            title: "Receive Offer",
            description: "Successful candidates will receive an offer letter outlining the next steps.",
            icon: GraduationCap
        },
        {
            id: 4,
            title: "Enrollment",
            description: "Complete the enrollment process and start your journey with Greenway Academy.",
            icon: CheckCircle
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-full h-full max-w-4xl bg-green-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Start Your Journey
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Admission <span className="gradient-text">Process</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We've made our admission process simple and transparent. Follow these steps to join our vibrant academic community.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="glass p-8 rounded-3xl border border-white/5 text-center group hover:border-green-500/30 transition-colors"
                                >
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Admission <span className="text-green-400">Requirements</span>
                            </h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                To ensure you're ready for our rigorous programs, we have a few requirements. Don't worry if you don't meet them all perfectly; our counselors can guide you.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Completed application form",
                                    "Valid passport or national ID",
                                    "Previous academic transcripts (O-Levels/SSC/HSC)",
                                    "Two passport-sized photographs",
                                    "English proficiency test score (if applicable)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
                            <div className="glass p-8 rounded-3xl border border-white/10 relative">
                                <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
                                <p className="text-muted-foreground mb-6">
                                    Applications for the next intake are now open. Secure your spot today and take the first step towards your future.
                                </p>
                                <Link
                                    to="/apply-now"
                                    className="inline-flex items-center justify-center w-full gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all active:scale-95"
                                >
                                    Start Application
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <p className="text-center text-xs text-muted-foreground mt-4">
                                    Need help? Contact our <Link to="/contact" className="text-green-400 hover:underline">admissions team</Link>.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AdmissionPage;
