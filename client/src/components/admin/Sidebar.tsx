import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Kanban, Calendar, Users, FileText, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
    const navItems = [
        { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Pipeline', path: '/admin/pipeline', icon: Kanban },
        { name: 'Schedule', path: '/admin/schedule', icon: Calendar },
        { name: 'Customers', path: '/admin/customers', icon: Users },
        { name: 'Reports', path: '/admin/reports', icon: FileText },
    ];

    return (
        <aside className="w-64 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col h-screen fixed left-0 top-0 z-20">
            <div className="p-6 flex items-center gap-3 border-b border-slate-800">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">Pipe Solar</span>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                                : 'hover:bg-slate-800 hover:text-white'
                            }`
                        }
                    >
                        <item.icon size={20} className="group-hover:scale-105 transition-transform" />
                        <span className="font-medium">{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-4 py-3 w-full text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors">
                    <Settings size={20} />
                    <span className="font-medium">Settings</span>
                </button>
                <NavLink to="/login" className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:text-red-300 hover:bg-red-900/10 rounded-xl transition-colors mt-1">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;
