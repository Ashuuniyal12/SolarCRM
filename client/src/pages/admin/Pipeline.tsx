import { useState } from 'react';
import { projects, customers } from '../../data/mockData';
import { MoreHorizontal, Plus, MapPin, X, DollarSign, Zap, Calendar } from 'lucide-react';

const NewProjectModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Start New Project</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Select Customer</label>
                        <select className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                            <option value="">Choose a customer...</option>
                            {customers.map(c => (
                                <option key={c.id} value={c.id}>{c.name} - {c.address}</option>
                            ))}
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">System Size</label>
                            <div className="relative">
                                <Zap className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="e.g. 8.5 kW" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Panel Type</label>
                            <select className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                <option>Q.PEAK DUO BLK</option>
                                <option>REC Alpha Pure</option>
                                <option>Silfab Prime</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Contract Value</label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="25,000" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Target Install Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                <input type="date" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all [color-scheme:dark]" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Initial Stage</label>
                            <select className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                <option value="Lead">Lead</option>
                                <option value="Site Survey">Site Survey</option>
                                <option value="Design">Design</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Priority</label>
                            <select className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                                <option value="Low">Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-700 flex justify-end gap-3 bg-slate-900/50">
                    <button onClick={onClose} className="px-4 py-2 text-slate-300 hover:text-white font-medium hover:bg-slate-800 rounded-lg transition-colors">
                        Cancel
                    </button>
                    <button onClick={onClose} className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all transform active:scale-95">
                        Create Project
                    </button>
                </div>
            </div>
        </div>
    );
};

const Pipeline = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const stages = ['Lead', 'Site Survey', 'Install', 'Inspection'];

    const getProjectsByStage = (stage: string) => {
        return projects.filter(p => p.stage === stage);
    };

    const getStageColor = (stage: string) => {
        switch (stage) {
            case 'Lead': return 'bg-slate-800 border-slate-700';
            case 'Site Survey': return 'bg-blue-900/20 border-blue-800/50';
            case 'Install': return 'bg-green-900/20 border-green-800/50';
            case 'Inspection': return 'bg-orange-900/20 border-orange-800/50';
            default: return 'bg-slate-800 border-slate-700';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed': return 'text-green-400 bg-green-400/10';
            case 'Scheduled': return 'text-blue-400 bg-blue-400/10';
            case 'In Progress': return 'text-amber-400 bg-amber-400/10';
            case 'Pending': return 'text-orange-400 bg-orange-400/10';
            default: return 'text-slate-400 bg-slate-400/10';
        }
    }

    return (
        <div className="h-full flex flex-col relative">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Project Pipeline</h1>
                    <p className="text-slate-400 mt-2">Manage your solar projects from lead to inspection.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/20"
                >
                    <Plus size={20} /> New Project
                </button>
            </div>

            <div className="flex-1 overflow-x-auto">
                <div className="flex gap-6 min-w-[1000px] h-full pb-4">
                    {stages.map((stage) => (
                        <div key={stage} className="flex-1 min-w-[300px] flex flex-col">
                            <div className={`p-4 rounded-xl border mb-4 flex items-center justify-between ${getStageColor(stage)}`}>
                                <h3 className="font-bold text-white">{stage}</h3>
                                <span className="bg-black/30 text-white text-xs font-bold px-2 py-1 rounded-md">
                                    {getProjectsByStage(stage).length}
                                </span>
                            </div>

                            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                {getProjectsByStage(stage).map((project) => (
                                    <div key={project.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-blue-500/50 transition-all cursor-pointer group shadow-sm">
                                        <div className="flex justify-between items-start mb-3">
                                            <span className="text-xs font-mono text-slate-500">{project.id}</span>
                                            <button className="text-slate-600 hover:text-white transition-colors">
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </div>
                                        <h4 className="text-white font-bold mb-1 truncate">Customer {project.customerId}</h4>
                                        <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                                            <MapPin size={12} />
                                            <span className="truncate">{project.address}</span>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(project.status)}`}>
                                                {project.status}
                                            </div>
                                            <div className="flex items-center gap-1 text-slate-500 text-xs">
                                                <span className="font-semibold text-slate-300">{project.systemSize} kW</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <NewProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Pipeline;
