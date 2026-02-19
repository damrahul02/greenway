import { motion } from 'framer-motion';
import { Briefcase, Heart, Lightbulb, Users, ArrowRight } from 'lucide-react';
import Footer from '../sections/Footer';

const CareerPage = () => {
    const values = [
        {
            icon: Heart,
            title: "Student-First Approach",
            description: "Everything we do is focused on helping our students achieve their dreams."
        },
        {
            icon: Users,
            title: "Collaborative Culture",
            description: "We believe in the power of teamwork and diverse perspectives."
        },
        {
            icon: Lightbulb,
            title: "Innovation in Education",
            description: "We constantly explore new ways to make learning more effective."
        },
        {
            icon: Briefcase,
            title: "Professional Growth",
            description: "We invest in our team's development and career progression."
        }
    ];

    const jobs = [
        {
            id: 1,
            title: "IELTS Instructor",
            department: "Academic",
            type: "Full-time",
            location: "Dhaka Campus",
            description: "We are looking for an experienced IELTS instructor with a proven track record of helping students achieve high band scores."
        },
        {
            id: 2,
            title: "Academic Counselor",
            department: "Admissions",
            type: "Full-time",
            location: "Dhaka Campus",
            description: "Guide students through their academic journey, from course selection to university application."
        },
        {
            id: 3,
            title: "Digital Marketing Specialist",
            department: "Marketing",
            type: "Part-time",
            location: "Remote / Hybrid",
            description: "Manage our social media presence and create engaging content to reach potential students."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Join Our Team
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Build Your <span className="gradient-text">Career</span> With Us
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Be part of a passionate team dedicating to transforming lives through education.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            These core principles guide our work and shape our culture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-6 rounded-2xl border border-white/5 text-center hover:bg-white/5 transition-colors"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center text-yellow-400">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explore opportunities to make an impact.
                        </p>
                    </div>

                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-6 items-start md:items-center hover:border-yellow-400/30 transition-colors group"
                            >
                                <div className="flex-1">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20">
                                            {job.department}
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            {job.type}
                                        </span>
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-muted-foreground border border-white/20">
                                            {job.location}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                                        {job.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {job.description}
                                    </p>
                                </div>

                                <div className="flex-shrink-0">
                                    <a
                                        href="mailto:careers@greenwayacademy.com"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-center mt-8 text-muted-foreground"
                        >
                            <p>
                                Don't see a role that fits? Send your CV to <a href="mailto:careers@greenwayacademy.com" className="text-yellow-400 hover:underline">careers@greenwayacademy.com</a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareerPage;
