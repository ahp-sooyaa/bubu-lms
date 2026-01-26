export default async function Page({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="max-w-7xl mx-auto pt-[31px] pb-20 px-4 sm:px-6 lg:px-8">
            {children}
        </section>
    );
}
