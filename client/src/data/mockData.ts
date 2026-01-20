import { Calendar, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export const stats = [
    { label: 'Active Projects', value: '24', change: '+3 this week', icon: Clock, color: 'text-blue-500' },
    { label: 'Pending Inspections', value: '7', change: '-2 from yesterday', icon: AlertTriangle, color: 'text-orange-500' },
    { label: 'Installations Done', value: '156', change: '+12 this month', icon: CheckCircle, color: 'text-green-500' },
    { label: 'Revenue (MTD)', value: '$245k', change: '+18% vs last month', icon: Calendar, color: 'text-yellow-500' }, // Yellow typically for money/gold in this verification
];

export const customers = [
    { id: 'C001', name: 'James Anderson', email: 'james.a@example.com', phone: '(555) 123-4567', address: '123 Sunny Lane, CA' },
    { id: 'C002', name: 'Sarah Miller', email: 'sarah.m@example.com', phone: '(555) 987-6543', address: '456 Oak Drive, AZ' },
    { id: 'C003', name: 'Michael Chen', email: 'm.chen@example.com', phone: '(555) 456-7890', address: '789 Pine Street, NV' },
    { id: 'C004', name: 'Emily Davis', email: 'emily.d@example.com', phone: '(555) 789-0123', address: '321 Maple Ave, TX' },
    { id: 'C005', name: 'Robert Wilson', email: 'r.wilson@example.com', phone: '(555) 321-6547', address: '654 Cedar Blvd, FL' },
];

export const projects = [
    { id: 'P-101', customerId: 'C001', systemSize: 8.4, stage: 'Site Survey', status: 'Scheduled', address: '123 Sunny Lane, CA', lastUpdate: '2 hours ago' },
    { id: 'P-102', customerId: 'C002', systemSize: 12.2, stage: 'Install', status: 'In Progress', address: '456 Oak Drive, AZ', lastUpdate: '1 day ago' },
    { id: 'P-103', customerId: 'C003', systemSize: 6.5, stage: 'Inspection', status: 'Pending', address: '789 Pine Street, NV', lastUpdate: '3 hours ago' },
    { id: 'P-104', customerId: 'C004', systemSize: 5.8, stage: 'Lead', status: 'New', address: '321 Maple Ave, TX', lastUpdate: 'Just now' },
    { id: 'P-105', customerId: 'C005', systemSize: 9.6, stage: 'Site Survey', status: 'Completed', address: '654 Cedar Blvd, FL', lastUpdate: '5 hours ago' },
];

export const events = [
    { id: 'E-001', projectId: 'P-101', title: 'Site Survey - Anderson', type: 'Survey', date: '2026-01-21T10:00:00', status: 'Scheduled', engineer: 'Mike Ross' },
    { id: 'E-002', projectId: 'P-102', title: 'Install - Miller', type: 'Install', date: '2026-01-22T08:00:00', status: 'In Progress', engineer: 'Display Crew A' },
    { id: 'E-003', projectId: 'P-103', title: 'Inspection - Chen', type: 'Inspection', date: '2026-01-23T14:00:00', status: 'Pending', engineer: 'City Inspector' },
    { id: 'E-004', projectId: 'P-105', title: 'Site Survey - Wilson', type: 'Survey', date: '2026-01-20T09:00:00', status: 'Completed', engineer: 'Mike Ross' },
];

export const recentActivity = [
    { id: 1, user: 'System', action: 'New Lead Created', target: 'P-104 (Emily Davis)', time: '10 mins ago' },
    { id: 2, user: 'Mike Ross', action: 'Completed Survey', target: 'P-105 (Robert Wilson)', time: '2 hours ago' },
    { id: 3, user: 'Admin', action: 'Scheduled Install', target: 'P-102 (Sarah Miller)', time: '1 day ago' },
    { id: 4, user: 'City Inspector', action: 'Inspection Pending', target: 'P-103 (Michael Chen)', time: '1 day ago' },
];

export const dummyEmails = [
    { id: 1, sender: "John Doe (CEO)", subject: "Q1 Targets Achieved", preview: "Great work team, we have surpassed our Q1 installation targets...", date: "10:30 AM", read: false },
    { id: 2, sender: "HR Department", subject: "New Policy Update", preview: "Please review the attached document regarding the new field safety protocols...", date: "Yesterday", read: true },
    { id: 3, sender: "Sarah Miller (Client)", subject: "Installation Feedback", preview: "I just wanted to say that the crew was fantastic today...", date: "Jan 18", read: true },
    { id: 4, sender: "Vendor Support", subject: "Invoice #4023 Overdue", preview: "This is a reminder that invoice #4023 for solar panels is now overdue...", date: "Jan 15", read: true },
    { id: 5, sender: "Mike Ross", subject: "Sick Leave Request", preview: "Hey, I'm not feeling well and won't be able to make it to the survey tomorrow...", date: "Jan 14", read: true },
];

export const teamHierarchy = [
    {
        id: "CEO-1", name: "Alex Sterling", role: "CEO", children: [
            {
                id: "VP-OPS-1", name: "Marcus Thorne", role: "VP of Operations", children: [
                    {
                        id: "MGR-1", name: "Elena Rodriguez", role: "Regional Manager (West)", children: [
                            { id: "CREW-1", name: "Mike Ross", role: "Surveyor" },
                            { id: "CREW-2", name: "Jessica Suits", role: "Lead Installer" },
                            { id: "CREW-3", name: "Harvey Specter", role: "Inspector" }
                        ]
                    },
                    {
                        id: "MGR-2", name: "David Kim", role: "Regional Manager (East)", children: [
                            { id: "CREW-4", name: "Louis Litt", role: "Installer" },
                            { id: "CREW-5", name: "Donna Paulsen", role: "Coordinator" }
                        ]
                    }
                ]
            },
            {
                id: "VP-SALES-1", name: "Rachel Zane", role: "VP of Sales", children: [
                    { id: "SALES-1", name: "Katrina Bennett", role: "Sales Lead" },
                    { id: "SALES-2", name: "Harold Gunderson", role: "Sales Rep" }
                ]
            }
        ]
    }
];
