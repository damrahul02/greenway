import { motion } from 'framer-motion';
import { GraduationCap, Linkedin, Mail } from 'lucide-react';
import Footer from '../sections/Footer';

const FacultiesPage = () => {
    const faculties = [
        {
            id: 1,
            name: "Dr. Eleanor Sterling",
            role: "Head of Academic Affairs",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
            bio: "Ph.D. in Education with 15+ years of experience in curriculum development and student mentorship.",
            specialty: "Educational Leadership"
        },
        {
            id: 2,
            name: "Prof. Marcus Chen",
            role: "Senior Lecturer, Business",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
            bio: "Former Fortune 500 consultant specializing in strategic management and international business relations.",
            specialty: "Business Strategy"
        },
        {
            id: 3,
            name: "Sarah Hawthorne",
            role: "IELTS Coordinator",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
            bio: "Certified TESOL instructor with a track record of helping students achieve band 8.0+ scores.",
            specialty: "English Literature"
        },
        {
            id: 4,
            name: "James Wilson",
            role: "OTHM Programme Director",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
            bio: "Expert in vocational education ensuring our OTHM programs meet the highest UK standards.",
            specialty: "Vocational Studies"
        },
        {
            id: 5,
            name: "Dr. Aisha Patel",
            role: "Lecturer, Social Sciences",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
            bio: "Published researcher in sociology with a passion for interactive and critical teaching methods.",
            specialty: "Sociology"
        },
        {
            id: 6,
            name: "Robert Fox",
            role: "Student Support Lead",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
            bio: "Dedicated to student well-being and academic success support throughout their journey.",
            specialty: "Counseling"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -translate-x-1/2" />
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-green-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Academic Excellence
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Meet Our <span className="gradient-text">Faculty</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Learn from industry experts and dedicated educators committed to your academic and professional success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Faculty Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {faculties.map((faculty, index) => (
                            <motion.div
                                key={faculty.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative glass p-6 rounded-3xl border border-white/5 h-full flex flex-col overflow-hidden">
                                    {/* Image Container */}
                                    <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5] group-hover:scale-[1.02] transition-transform duration-500">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                        {/* Floating Icons */}
                                        <div className="absolute bottom-4 left-4 flex gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <button className="p-2 glass rounded-full hover:bg-white text-white hover:text-black transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 glass rounded-full hover:bg-white text-white hover:text-black transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <GraduationCap className="w-5 h-5 text-green-400" />
                                            <span className="text-sm font-medium text-green-400">{faculty.specialty}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-1">{faculty.name}</h3>
                                        <p className="text-blue-400 font-medium mb-3">{faculty.role}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {faculty.bio}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FacultiesPage;
