import { Breadcrumbs } from "@/components/breadcrumbs";
import {
    ArrowRight,
    Calendar,
    Check,
    Clock,
    Globe,
    Headset,
    Mail,
    MapPin,
    Timer,
} from "lucide-react";

export default function Page() {
    return (
        <>
            <section className="bg-primary py-16 md:py-20 relative overflow-hidden">
                {/*  Diagonal Cross Grid Background */}
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: `
                            linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
                            linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
                        `,
                        backgroundSize: "40px 40px",
                    }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-6">
                        <Breadcrumbs
                            items={[
                                { label: "Home", href: "/" },
                                { label: "Classes", href: "/classes" },
                                { label: "Advanced React Development" },
                            ]}
                        />
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block px-3 py-1 rounded-md bg-white/20 text-xs font-bold tracking-wide uppercase text-white backdrop-blur-sm">
                                        In Person
                                    </span>
                                    <span className="text-xs font-bold text-white/60 tracking-wider">
                                        CS-402
                                    </span>
                                </div>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-4">
                                    Advanced React Development
                                </h1>
                                <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                                    Master modern React patterns, hooks, and
                                    state management techniques to build
                                    scalable, high-performance web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    <div className="lg:col-span-8 space-y-12">
                        <section>
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                About This Class
                            </h2>
                            <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
                                <p className="mb-4">
                                    This intensive course is designed for
                                    developers who have a basic understanding of
                                    JavaScript and React and want to take their
                                    skills to the next level. We move beyond the
                                    basics of components and props to explore
                                    advanced patterns that are essential for
                                    building enterprise-grade applications.
                                </p>
                                <p>
                                    Through a combination of lectures, live
                                    coding sessions, and a comprehensive
                                    capstone project, you will learn how to
                                    architect scalable applications, manage
                                    complex state requirements, and optimize
                                    performance for a seamless user experience.
                                    By the end of this course, you will be
                                    confident in your ability to tackle any
                                    React challenge.
                                </p>
                            </div>
                        </section>
                        <section className="bg-secondary/50 dark:bg-surface-dark p-6 rounded-3xl border border-gray-100 dark:border-gray-700">
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">
                                What You Will Learn
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check
                                            color="currentColor"
                                            size={13}
                                            className="text-primary"
                                        />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        Advanced React Hooks &amp; Custom Hooks
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check
                                            color="currentColor"
                                            size={13}
                                            className="text-primary"
                                        />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        Global State Management (Redux/Context)
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check
                                            color="currentColor"
                                            size={13}
                                            className="text-primary"
                                        />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        Performance Optimization Patterns
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check
                                            color="currentColor"
                                            size={13}
                                            className="text-primary"
                                        />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        Testing React Components (Jest/RTL)
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check
                                            color="currentColor"
                                            size={13}
                                            className="text-primary"
                                        />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        Server-Side Rendering Concepts
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Check
                                            color="currentColor"
                                            size={13}
                                            className="text-primary"
                                        />
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                                        Real-world Application Architecture
                                    </span>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8">
                                Curriculum Outline
                            </h2>
                            <div className="space-y-6 relative before:absolute before:inset-0 before:top-1 before:left-4 before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center z-10">
                                        <span className="text-xs font-bold text-primary">
                                            01
                                        </span>
                                    </div>
                                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            Foundations &amp; Best Practices
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                            Deep dive into JSX internals,
                                            component lifecycle, and setting up
                                            a professional development
                                            environment.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                JSX
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Virtual DOM
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Webpack
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center z-10">
                                        <span className="text-xs font-bold text-primary">
                                            02
                                        </span>
                                    </div>
                                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            Mastering Hooks
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                            Understanding standard hooks in
                                            depth and creating powerful custom
                                            hooks to abstract logic.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                useEffect
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                useMemo
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Custom Hooks
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center z-10">
                                        <span className="text-xs font-bold text-primary">
                                            03
                                        </span>
                                    </div>
                                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            State Management at Scale
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                            Exploring Context API, Reducers, and
                                            external libraries like Redux
                                            Toolkit for managing complex state.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Context API
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Redux Toolkit
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Async Thunks
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center z-10">
                                        <span className="text-xs font-bold text-primary">
                                            04
                                        </span>
                                    </div>
                                    <div className="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-700">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                            Capstone Project
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                                            Applying all learned concepts to
                                            build a fully functional e-commerce
                                            dashboard application.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Architecture
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Deployment
                                            </span>
                                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium">
                                                Review
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 sticky top-28">
                            <div className="flex items-baseline justify-between mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
                                <div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                                        Total Tuition
                                    </p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-display font-bold text-primary dark:text-white">
                                            $399
                                        </span>
                                        <span className="text-sm text-gray-500 font-medium">
                                            / course
                                        </span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">
                                        Open
                                    </span>
                                </div>
                            </div>
                            <div className="space-y-6 mb-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary dark:bg-gray-700 flex items-center justify-center shrink-0">
                                        <Calendar
                                            size={18}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                                            Start Date
                                        </p>
                                        <p className="font-bold text-gray-900 dark:text-white">
                                            April 15, 2024
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary dark:bg-gray-700 flex items-center justify-center shrink-0">
                                        <Clock
                                            size={18}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                                            Schedule
                                        </p>
                                        <p className="font-bold text-gray-900 dark:text-white">
                                            Mon, Wed, Fri
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            09:00 AM - 11:00 AM
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary dark:bg-gray-700 flex items-center justify-center shrink-0">
                                        <Timer
                                            size={18}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                                            Duration
                                        </p>
                                        <p className="font-bold text-gray-900 dark:text-white">
                                            4 Weeks
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            24 Hours Total
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-secondary dark:bg-gray-700 flex items-center justify-center shrink-0">
                                        <MapPin
                                            size={18}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">
                                            Location
                                        </p>
                                        <p className="font-bold text-gray-900 dark:text-white">
                                            Downtown Campus
                                        </p>
                                        <a
                                            className="text-xs text-primary font-bold hover:underline"
                                            href="#"
                                        >
                                            View Map
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-4 bg-primary hover:bg-[#165B48] text-white rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group">
                                Enroll Now
                                <ArrowRight
                                    size={15}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                            <p className="text-center mt-4 text-xs text-gray-400">
                                Limited seats available. Payment plans offered.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-surface-dark p-6 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-700">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                                Your Instructor
                            </h3>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                                    <div className="w-full h-full bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-xl">
                                        SJ
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                                        Sarah Jenkins
                                    </h4>
                                    <p className="text-primary text-sm font-medium">
                                        Senior Frontend Engineer
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                Sarah has over 10 years of experience building
                                scalable web applications for tech giants in
                                Silicon Valley. She is passionate about clean
                                code and mentorship.
                            </p>
                            <div className="flex gap-2">
                                <a
                                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors"
                                    href="#"
                                >
                                    <Mail size={15} />
                                </a>
                                <a
                                    className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors"
                                    href="#"
                                >
                                    <Globe size={15} />
                                </a>
                            </div>
                        </div>
                        <div className="bg-linear-to-br from-gray-900 to-gray-800 p-6 rounded-3xl shadow-lg text-center">
                            <Headset
                                size={30}
                                className="text-gray-500 mx-auto mb-4"
                            />
                            <h3 className="text-white font-bold text-lg mb-2">
                                Have Questions?
                            </h3>
                            <p className="text-white/60 text-sm mb-6">
                                Our academic advisors are here to help you
                                decide if this is the right class for you.
                            </p>
                            <a
                                className="inline-flex items-center justify-center px-6 py-2 border border-white/20 hover:bg-white/10 text-white rounded-full text-sm font-bold transition-all"
                                href="#"
                            >
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
