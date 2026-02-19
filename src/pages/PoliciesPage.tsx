import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Scale, Clock, Users } from 'lucide-react';
import Footer from '../sections/Footer';

const PoliciesPage = () => {
    const [openSection, setOpenSection] = useState<number | null>(0);

    const policies = [
        {
            id: 0,
            title: "Privacy Policy",
            icon: Shield,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        At Greenway Academy, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
                    </p>
                    <h4 className="font-semibold text-foreground">Data Collection</h4>
                    <p>
                        We collect information you provide directly to us, such as when you apply for admission, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and academic records.
                    </p>
                    <h4 className="font-semibold text-foreground">Data Usage</h4>
                    <p>
                        We use your information to process applications, communicate with you, and improve our services. We do not sell your personal data to third parties.
                    </p>
                </div>
            )
        },
        {
            id: 1,
            title: "Academic Integrity",
            icon: Scale,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Academic integrity is fundamental to our mission. We expect all students to maintain high standards of honesty in their academic work.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Plagiarism and cheating are strictly prohibited.</li>
                        <li>All submitted work must be the student's own.</li>
                        <li>Proper citation of sources is required in all assignments.</li>
                    </ul>
                    <p>
                        Violations of this policy may result in disciplinary action, ranging from a warning to expulsion.
                    </p>
                </div>
            )
        },
        {
            id: 2,
            title: "Attendance Policy",
            icon: Clock,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Regular attendance is crucial for academic success. Students are expected to attend all scheduled classes and activities.
                    </p>
                    <p>
                        Students must maintain a minimum attendance of 80% to be eligible for final examinations. Absences due to illness or emergencies must be documented and reported to the administration.
                    </p>
                </div>
            )
        },
        {
            id: 3,
            title: "Code of Conduct",
            icon: Users,
            content: (
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Greenway Academy aims to provide a safe and respectful environment for all. Discrimination, harassment, or bullying of any kind will not be tolerated.
                    </p>
                    <p>
                        We adhere to a zero-tolerance policy regarding violence or threats of violence. All members of the community are expected to treat others with dignity and respect.
                    </p>
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-full h-full max-w-4xl bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Governance & Standards
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Academy <span className="gradient-text">Policies</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Transparency and integrity are at the heart of our operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Policies Accordion */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        {policies.map((policy, index) => (
                            <motion.div
                                key={policy.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass rounded-2xl border border-white/5 overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenSection(openSection === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br transition-colors ${openSection === index ? 'from-green-500 to-blue-500 text-white' : 'from-gray-800 to-gray-900 text-muted-foreground'
                                            }`}>
                                            <policy.icon className="w-6 h-6" />
                                        </div>
                                        <span className={`text-lg font-bold transition-colors ${openSection === index ? 'text-green-400' : 'text-foreground'
                                            }`}>
                                            {policy.title}
                                        </span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openSection === index ? 'rotate-180 text-green-400' : 'text-muted-foreground'
                                        }`} />
                                </button>

                                <AnimatePresence>
                                    {openSection === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-0 border-t border-white/5">
                                                {policy.content}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default PoliciesPage;
