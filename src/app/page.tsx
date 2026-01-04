import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    ClassesLocationCard,
    ClassesTypeCard,
    ReviewCard,
} from "@/components/cards";

export default async function Page() {
    return (
        <>
            <section className="max-w-7xl mx-auto pt-[31px] px-4 sm:px-6 lg:px-8">
                <div className="h-[85vh] min-h-[600px] relative rounded-3xl shadow-2xl shadow-primary/20 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 z-0">
                        <img
                            alt="Students collaborating in a modern workspace"
                            className="w-full h-full object-cover object-center transform scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpy0HTZEmKngRdnTTw_wsviGlDQtcE68ew9NXrXwNd2YoG2mjClMT8RohdsAwUhj4KvRPgGrgpanbsECB3GYQ1cI64tCFdy2mu_oIpM0iKq1DAZ9uxcGYc2HnGharu60Ve6Q9uGocmhrI6hQC906RU6R-Cg_Es55k1UYaQjOAcY0aLD8E7Or7MlBnhqGPUmAHsWvACmYyB6uKDikhnC_-UJCd02Lw4yxQIbOVPPmX26KDvQX260FUlMmusUMAg0epltXMNt7SSOwk"
                        />
                        <div className="absolute inset-0 bg-linear-to-br from-[#1F6E55]/95 via-[#36816C]/90 to-[#6FA593]/85 mix-blend-normal"></div>
                    </div>
                    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1] mb-6 tracking-tight">
                            Structured Learning
                            <br />
                            Your Workspace
                            <br />
                            <span className="text-white/40">2026</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-green-50 mb-12 max-w-2xl mx-auto font-normal leading-relaxed text-opacity-90">
                            Developing future-ready skills through collaborative
                            environments. Join structured classes led by expert
                            faculty in a distraction-free space.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="#upcoming-classes"
                                className={cn(
                                    buttonVariants(),
                                    "h-[56px] px-8 py-4 text-base font-bold bg-white hover:bg-gray-50 text-primary shadow-xl",
                                )}
                            >
                                View Upcoming Classes
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-800 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div className="p-2">
                            <div className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-primary-light mb-3 tracking-tight">
                                250
                                <sup className="text-3xl align-top text-primary/40 font-medium">
                                    +
                                </sup>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                Active Classes
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-primary-light mb-3 tracking-tight">
                                1k
                                <sup className="text-3xl align-top text-primary/40 font-medium">
                                    +
                                </sup>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                Students
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-primary-light mb-3 tracking-tight">
                                50
                                <sup className="text-3xl align-top text-primary/40 font-medium">
                                    +
                                </sup>
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                Faculty
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="text-5xl md:text-6xl font-display font-bold text-primary dark:text-primary-light mb-3 tracking-tight">
                                1:1
                            </div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                Workspace Ratio
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-gray-50 dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4 tracking-tight">
                            Our Campus Locations
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-normal">
                            Visit us at one of our three convenient branches
                            across the city.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ClassesLocationCard
                            title="Downtown Campus"
                            description="Our main hub located in the heart of the
                                business district, featuring large lecture halls
                                and a library."
                            address="1200 Market Street San Francisco, CA"
                            hours="Mon-Fri: 8am - 9pm"
                            actionLink="#"
                        />
                        <ClassesLocationCard
                            title="North Branch"
                            description="A quiet, focused environment surrounded by
                                greenery, perfect for intensive language
                                workshops."
                            address="450 Redwood Blvd San Rafael, CA"
                            hours="Mon-Sat: 9am - 6pm"
                            actionLink="#"
                        />
                        <ClassesLocationCard
                            title="Westside Center"
                            description="Conveniently located near the university,
                                specializing in academic preparation courses."
                            address="2200 19th Avenue San Francisco, CA"
                            hours="Mon-Thu: 10am - 8pm"
                            actionLink="#"
                        />
                    </div>
                </div>
            </section>

            <section
                className="py-20 md:py-28 bg-white dark:bg-gray-900"
                id="upcoming-classes"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4 tracking-tight">
                            Upcoming Classes
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-normal mb-8">
                            Select a class format that fits your schedule.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <ClassesTypeCard
                            type="online"
                            code="MKT-203"
                            title="Digital Marketing Strategy 3"
                            startDate="April 22, 2024"
                            schedule="Tue, Thu • 07:00 PM"
                            platform="Live via zoom"
                            fee="$200"
                            isUpcoming={true}
                            classLink="/classes/1"
                        />
                        <ClassesTypeCard
                            type="online"
                            code="MKT-201"
                            title="Digital Marketing Strategy 1"
                            startDate="April 22, 2024"
                            schedule="Tue, Thu • 07:00 PM"
                            platform="Live via zoom"
                            fee="$300"
                            isUpcoming={true}
                            classLink="/classes/1"
                        />
                        <ClassesTypeCard
                            type="in-person"
                            code="MKT-202"
                            title="Digital Marketing Strategy 2"
                            startDate="April 22, 2024"
                            schedule="Tue, Thu • 07:00 PM"
                            location="North Branch"
                            fee="$400"
                            isUpcoming={true}
                            classLink="/classes/1"
                        />
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            className="inline-flex items-center text-primary font-bold hover:text-primary-light transition group"
                            href="/classes"
                        >
                            View All Classes
                            <ArrowRight
                                size="15"
                                className="ml-1 transform group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-28 bg-secondary dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary dark:text-white mb-4 tracking-tight">
                            Student Stories
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 font-normal">
                            Real experiences from students who transformed their
                            careers.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ReviewCard
                            content="&#34;Having a structured schedule and live
                                sessions kept me accountable. The instructors
                                are truly invested in your success.&#34;"
                            reviewerName="Michal"
                            reviewerClass="CS Graduate"
                        />
                        <ReviewCard
                            content="&#34;I loved the small cohort size. It felt like
                                a real classroom where the teacher actually knew
                                my name and my learning style.&#34;"
                            reviewerName="Robert T."
                            reviewerClass="CS Graduate"
                        />
                        <ReviewCard
                            content="&#34;Having a structured schedule and live
                                sessions kept me accountable. The instructors
                                are truly invested in your success.&#34;"
                            reviewerName="Jessica L."
                            reviewerClass="Design Dept."
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
