import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Footer from '../sections/Footer';

const EventsPage = () => {
    const events = [
        {
            id: 1,
            title: "University Application Workshop",
            date: "March 15, 2026",
            time: "10:00 AM - 2:00 PM",
            location: "Main Auditorium",
            category: "Workshop",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
            description: "Learn how to craft the perfect personal statement and navigate the UCAS application process with our expert counselors."
        },
        {
            id: 2,
            title: "IELTS Mock Test Day",
            date: "March 22, 2026",
            time: "9:00 AM - 1:00 PM",
            location: "Exam Hall B",
            category: "Assessment",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
            description: "Full-length mock test under exam conditions to assess your readiness. Feedback provided within 48 hours."
        },
        {
            id: 3,
            title: "Spring Career Fair",
            date: "April 05, 2026",
            time: "11:00 AM - 4:00 PM",
            location: "Campus Grounds",
            category: "Career",
            image: "https://images.unsplash.com/photo-1559223607-a43c990c3609?auto=format&fit=crop&q=80&w=800",
            description: "Network with top employers and university representatives. Bring your CV and dress professionally."
        },
        {
            id: 4,
            title: "Guest Lecture: Future of Business",
            date: "April 12, 2026",
            time: "2:00 PM - 3:30 PM",
            location: "Lecture Hall A",
            category: "Seminar",
            image: "https://images.unsplash.com/photo-1475721027767-p753cce59148?auto=format&fit=crop&q=80&w=800",
            description: "Join Dr. Sarah Jenkins from London School of Economics as she discusses emerging trends in global business."
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-purple-400 font-semibold text-sm uppercase tracking-wider mb-4">
                            Mark Your Calendar
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Upcoming <span className="gradient-text">Events</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Stay engaged with our vibrant community through workshops, seminars, and networking opportunities.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events List */}
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image */}
                                        <div className="lg:w-1/3 relative h-64 lg:h-auto overflow-hidden">
                                            <img
                                                src={event.image}
                                                alt={event.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md text-white border border-white/10">
                                                    {event.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="lg:w-2/3 p-8 flex flex-col justify-center">
                                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-purple-400" />
                                                    <span>{event.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-purple-400" />
                                                    <span>{event.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-purple-400" />
                                                    <span>{event.location}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                                                {event.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-6">
                                                {event.description}
                                            </p>

                                            <button className="self-start inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors group/btn">
                                                <span>Register Now</span>
                                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
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

export default EventsPage;
