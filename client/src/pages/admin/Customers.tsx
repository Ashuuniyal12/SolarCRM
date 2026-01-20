import { useState } from 'react';
import { customers } from '../../data/mockData';
import { Mail, Phone, MapPin, Search, Filter, Plus, X } from 'lucide-react';

const AddCustomerModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Add New Customer</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                        <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="e.g. Jane Smith" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Email Address</label>
                            <input type="email" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="jane@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Phone Number</label>
                            <input type="tel" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="(555) 123-4567" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Property Address</label>
                        <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="123 Solar Way, Sunnyville, CA" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Estimated System Size</label>
                            <select className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                <option value="">Select Size...</option>
                                <option value="4kw">4 kW</option>
                                <option value="6kw">6 kW</option>
                                <option value="8kw">8 kW</option>
                                <option value="10kw+">10+ kW</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Status</label>
                            <select className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                <option value="lead">New Lead</option>
                                <option value="contacted">Contacted</option>
                                <option value="survey">Site Survey</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-700 flex justify-end gap-3 bg-slate-900/50">
                    <button onClick={onClose} className="px-4 py-2 text-slate-300 hover:text-white font-medium hover:bg-slate-800 rounded-lg transition-colors">
                        Cancel
                    </button>
                    <button onClick={onClose} className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all transform active:scale-95">
                        Add Customer
                    </button>
                </div>
            </div>
        </div>
    );
};

const Customers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="space-y-8 relative">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Customers</h1>
                    <p className="text-slate-400 mt-2">View and manage your customer base.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2 font-semibold"
                    >
                        <Plus size={20} />
                        <span>Add Customer</span>
                    </button>
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

            <AddCustomerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Customers;
