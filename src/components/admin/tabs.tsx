import { TabLink } from "@/components/admin/tab-link";
import { LayoutDashboard, Receipt, Users } from "lucide-react";

export function Tabs() {
    return (
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8 overflow-x-auto no-scrollbar">
            <div aria-label="Tabs" className="flex space-x-8 min-w-max">
                <TabLink link="/admin">
                    <LayoutDashboard size={17} />
                    Overview
                </TabLink>
                <TabLink link="/admin/classes">
                    <Users size={17} />
                    Classes
                </TabLink>
                <TabLink link="/admin/teachers">
                    <Receipt size={17} />
                    Teachers
                </TabLink>
                <TabLink link="/admin/students">
                    <Receipt size={17} />
                    Students
                </TabLink>
                <TabLink link="/admin/applications">
                    <Receipt size={17} />
                    Class Applications
                </TabLink>
                <TabLink link="/admin/payment-receipts">
                    <Receipt size={17} />
                    Payment Receipts
                </TabLink>
            </div>
        </div>
    );
}
