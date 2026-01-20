import { useState } from 'react';
import { customers } from '../../data/mockData';
import { Mail, Phone, MapPin, Search, Filter, Plus, X, Calendar, User, Zap, CheckCircle2, FileText, Clock } from 'lucide-react';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomerDetailsModal = ({ customer, onClose }: { customer: any; onClose: () => void }) => {
    if (!customer) return null;

    const timeline = [
        { id: 1, date: 'Jan 15, 2024', title: 'Site Survey Completed', desc: 'Roof structural integrity verified. Dimensions measured.', user: 'Mike Technician', type: 'completed' },
        { id: 2, date: 'Jan 12, 2024', title: 'Consultation Call', desc: 'Discussed energy needs and financing options.', user: 'Sarah Sales', type: 'completed' },
        { id: 3, date: 'Jan 10, 2024', title: 'Lead Created', desc: 'Customer submitted inquiry via website form.', user: 'System', type: 'system' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="p-6 border-b border-slate-800 flex justify-between items-start bg-slate-900/50">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                            {customer.name.charAt(0)}
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-1">{customer.name}</h2>
                            <div className="flex items-center gap-3 text-slate-400 text-sm">
                                <span className="flex items-center gap-1"><MapPin size={14} /> {customer.address}</span>
                                <span className="flex items-center gap-1"><Mail size={14} /> {customer.email}</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={onClose} className="bg-slate-800 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
                        <X size={20} />
                    </button>
                </div>

                {/* Body - Scrollable */}
                <div className="flex-1 overflow-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Left Col: Project Info & Team */}
                    <div className="space-y-8">
                        {/* Project Specs */}
                        <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                            <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
                                <Zap size={18} className="text-yellow-500" /> System Specifications
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                                    <span className="text-slate-400">System Size</span>
                                    <span className="text-white font-medium">8.4 kW</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                                    <span className="text-slate-400">Panel Type</span>
                                    <span className="text-white font-medium">Q.PEAK DUO</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-slate-700 pb-2">
                                    <span className="text-slate-400">Inverter</span>
                                    <span className="text-white font-medium">Enphase IQ8</span>
                                </div>
                                <div className="flex justify-between text-sm pt-1">
                                    <span className="text-slate-400">Est. Production</span>
                                    <span className="text-white font-medium">12,500 kWh/yr</span>
                                </div>
                            </div>
                        </div>

                        {/* Assigned Team */}
                        <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                            <h3 className="text-white font-semibold flex items-center gap-2 mb-4">
                                <User size={18} className="text-blue-500" /> Assigned Team
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">PM</div>
                                    <div>
                                        <div className="text-white text-sm font-medium">Mufti Hidayat</div>
                                        <div className="text-slate-500 text-xs">Project Manager</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">SR</div>
                                    <div>
                                        <div className="text-white text-sm font-medium">Sarah Jenkins</div>
                                        <div className="text-slate-500 text-xs">Sales Rep</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Timeline */}
                    <div className="md:col-span-2">
                        <h3 className="text-white font-semibold flex items-center gap-2 mb-6">
                            <Calendar size={18} className="text-green-500" /> Project Timeline
                        </h3>

                        <div className="relative space-y-8 pl-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-700">
                            {timeline.map((event) => (
                                <div key={event.id} className="relative group">
                                    {/* Dot */}
                                    <div className={`absolute -left-[39px] top-1 w-6 h-6 rounded-full border-4 border-slate-900 ${event.type === 'completed' ? 'bg-green-500' : 'bg-slate-600'} shadow-lg z-10`} />

                                    <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-white font-semibold text-lg">{event.title}</h4>
                                            <span className="text-xs font-medium px-2 py-1 bg-slate-700/50 rounded text-slate-400 border border-slate-600/50">{event.date}</span>
                                        </div>
                                        <p className="text-slate-400 text-sm mb-3">{event.desc}</p>
                                        <div className="flex items-center gap-2 pt-2 border-t border-slate-700/50">
                                            <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px] text-white">
                                                {event.user.charAt(0)}
                                            </div>
                                            <span className="text-xs text-slate-500">Action by <span className="text-slate-300">{event.user}</span></span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Pending Steps */}
                            <div className="relative opacity-60">
                                <div className="absolute -left-[39px] top-1 w-6 h-6 rounded-full border-4 border-slate-900 bg-slate-800 shadow-lg z-10" />
                                <div className="bg-slate-800/20 p-4 rounded-xl border border-slate-700/30 border-dashed">
                                    <h4 className="text-slate-300 font-medium">Design Engineering</h4>
                                    <p className="text-slate-500 text-sm">Pending approval from engineering team.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Footer Buttons */}
                <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 hover:text-white transition-colors">
                        <FileText size={16} /> Documents
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow-lg shadow-blue-500/20 transition-all">
                        <Clock size={16} /> Schedule Update
                    </button>
                </div>
            </div>
        </div>
    );
};

const Customers = () => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null);

    return (
        <div className="space-y-8 relative">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Customers</h1>
                    <p className="text-slate-400 mt-2">View and manage your customer base.</p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
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
                                    <button
                                        onClick={() => setSelectedCustomer(customer)}
                                        className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center justify-end gap-1 w-full"
                                    >
                                        View Projects <CheckCircle2 size={14} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AddCustomerModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
            <CustomerDetailsModal customer={selectedCustomer} onClose={() => setSelectedCustomer(null)} />
        </div>
    );
};

export default Customers;
