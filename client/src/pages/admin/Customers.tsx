import React from 'react';
import { customers } from '../../data/mockData';
import { Mail, Phone, MapPin, Search, Filter } from 'lucide-react';

const Customers = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Customers</h1>
                    <p className="text-slate-400 mt-2">View and manage your customer base.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search customers..."
                            className="bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-blue-500 w-64"
                        />
                    </div>
                    <button className="bg-slate-900 border border-slate-700 text-slate-300 px-4 py-2.5 rounded-xl hover:text-white hover:border-slate-600 transition-colors flex items-center gap-2">
                        <Filter size={18} /> Filter
                    </button>
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-800 bg-slate-900/80">
                            <th className="p-4 font-semibold text-slate-400 px-6">Name</th>
                            <th className="p-4 font-semibold text-slate-400">Contact Info</th>
                            <th className="p-4 font-semibold text-slate-400">Address</th>
                            <th className="p-4 font-semibold text-slate-400 text-right px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id} className="border-b border-slate-800 last:border-0 hover:bg-slate-800/30 transition-colors">
                                <td className="p-4 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                                            {customer.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">{customer.name}</div>
                                            <div className="text-xs text-slate-500">{customer.id}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2 text-slate-300 text-sm">
                                            <Mail size={14} className="text-slate-500" /> {customer.email}
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-300 text-sm">
                                            <Phone size={14} className="text-slate-500" /> {customer.phone}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center gap-2 text-slate-300">
                                        <MapPin size={16} className="text-slate-500" />
                                        {customer.address}
                                    </div>
                                </td>
                                <td className="p-4 px-6 text-right">
                                    <button className="text-blue-400 hover:text-blue-300 font-medium text-sm">View Projects</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Customers;
