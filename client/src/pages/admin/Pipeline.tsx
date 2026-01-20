import React from 'react';
import { projects } from '../../data/mockData';
import { MoreHorizontal, Plus, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Pipeline = () => {
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
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Project Pipeline</h1>
                    <p className="text-slate-400 mt-2">Manage your solar projects from lead to inspection.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors">
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
        </div>
    );
};

export default Pipeline;
