import { ChevronDown, Search } from "lucide-react";
import { ClassesTypeCard } from "@/components/cards";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { db } from "@/db/drizzle";
import { classTable } from "@/db/schema";

export default async function Page() {
    const classes = await db.select().from(classTable).limit(10);

    return (
        <>
            <section className="relative py-16 md:py-20 bg-primary overflow-hidden">
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
                                { label: "Classes" },
                            ]}
                        />
                        <div className="w-full lg:w-3/4">
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                                Available Classes
                            </h1>
                            <p className="text-lg text-white/80 max-w-2xl font-normal leading-relaxed">
                                Explore our diverse catalog of courses designed
                                to help you master new skills and advance your
                                career.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white dark:bg-gray-900 min-h-screen">
                <Tabs
                    defaultValue="all"
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                        <div className="relative group w-full md:w-auto">
                            <InputGroup>
                                <InputGroupInput placeholder="Search..." />
                                <InputGroupAddon>
                                    <Search />
                                </InputGroupAddon>
                                <InputGroupAddon align="inline-end">
                                    12 results
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="in-person">
                                In Person
                            </TabsTrigger>
                            <TabsTrigger value="online">Online</TabsTrigger>
                        </TabsList>
                    </div>
                    <div className="mb-8 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm font-bold text-primary cursor-pointer hover:underline">
                            Sort by: Newest
                            <ChevronDown size={15} />
                        </div>
                    </div>
                    <TabsContent value="all">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {classes.map((cls) => (
                                <ClassesTypeCard
                                    key={cls.id}
                                    classId={cls.id}
                                    type={cls.type as "in-person" | "online"}
                                    code="MKT-203"
                                    title={cls.title}
                                    startDate="May 22, 2024"
                                    schedule="Tue, Thu • 07:00 PM"
                                    location="Downtown Campus"
                                    fee="$200"
                                    isUpcoming={cls.status === "upcoming"}
                                    classLink={`/classes/${cls.id}`}
                                />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="in-person">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ClassesTypeCard
                                classId={123}
                                type="in-person"
                                code="MKT-203"
                                title="Digital Marketing Strategy 3"
                                startDate="May 22, 2024"
                                schedule="Tue, Thu • 07:00 PM"
                                location="Downtown Campus"
                                fee="$200"
                                isUpcoming={true}
                                classLink="/classes/1"
                            />
                            <ClassesTypeCard
                                classId={123}
                                type="in-person"
                                code="MKT-203"
                                title="Digital Marketing Strategy 3"
                                startDate="April 22, 2024"
                                schedule="Tue, Thu • 07:00 PM"
                                location="Downtown Campus"
                                fee="$200"
                                isUpcoming={false}
                                classLink="/classes/1"
                            />
                        </div>
                    </TabsContent>
                    <TabsContent value="online">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ClassesTypeCard
                                classId={123}
                                type="online"
                                code="MKT-203"
                                title="Digital Marketing Strategy 3"
                                startDate="May 22, 2024"
                                schedule="Tue, Thu • 07:00 PM"
                                platform="Live via zoom"
                                fee="$200"
                                isUpcoming={true}
                                classLink="/classes/1"
                            />
                            <ClassesTypeCard
                                classId={123}
                                type="online"
                                code="MKT-203"
                                title="Digital Marketing Strategy 3"
                                startDate="April 22, 2024"
                                schedule="Tue, Thu • 07:00 PM"
                                platform="Live via zoom"
                                fee="$200"
                                isUpcoming={false}
                                classLink="/classes/1"
                            />
                            <ClassesTypeCard
                                classId={123}
                                type="online"
                                code="MKT-203"
                                title="Digital Marketing Strategy 3"
                                startDate="May 22, 2024"
                                schedule="Tue, Thu • 07:00 PM"
                                platform="Live via zoom"
                                fee="$200"
                                isUpcoming={true}
                                classLink="/classes/1"
                            />
                        </div>
                    </TabsContent>
                    <div className="mt-16 text-center">
                        <button className="inline-flex items-center px-8 py-3.5 border border-gray-200 dark:border-gray-700 text-sm font-bold rounded-full text-gray-600 dark:text-gray-300 bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-all shadow-sm">
                            Load More Classes
                            <ChevronDown size={15} className="ml-2" />
                        </button>
                    </div>
                </Tabs>
            </section>
        </>
    );
}
