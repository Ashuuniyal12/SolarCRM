import { useState } from 'react';
import { teamHierarchy } from '../../data/mockData';
import { Phone, Mail, FileText, Linkedin, MoreHorizontal, ZoomIn, ZoomOut, RotateCcw, Plus, X } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const EmployeeCard = ({ node }: { node: any }) => {
    // Determine border color based on role for visual distinction
    const getBorderColor = (role: string) => {
        if (role.includes('CEO')) return 'border-orange-500';
        if (role.includes('VP')) return 'border-purple-500';
        if (role.includes('Manager')) return 'border-blue-500';
        return 'border-slate-500';
    };

    return (
        <div className={`relative bg-slate-900 border border-slate-700/50 rounded-xl shadow-xl p-0 w-[280px] group transition-all hover:-translate-y-1 duration-300 hover:shadow-2xl hover:shadow-blue-500/10`}>
            {/* Colorful Top Border */}
            <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl ${getBorderColor(node.role)} bg-gradient-to-r from-current to-current shadow-[0_0_10px_currentColor] opacity-80`} />

            <div className="p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-slate-700 shrink-0 shadow-inner">
                    {/* Placeholder Avatar */}
                    <span className="text-xl font-bold text-slate-400">
                        {node.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                </div>
                <div>
                    <h3 className="font-bold text-white text-lg leading-tight">{node.name}</h3>
                    <p className="text-slate-400 text-sm font-medium mt-0.5">{node.role}</p>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-800 mx-4" />

            {/* Action Footer */}
            <div className="px-4 py-3 flex items-center justify-between text-slate-500">
                <button className="hover:text-blue-400 hover:bg-blue-500/10 p-1.5 rounded-lg transition-all"><Phone size={16} /></button>
                <button className="hover:text-blue-400 hover:bg-blue-500/10 p-1.5 rounded-lg transition-all"><Mail size={16} /></button>
                <button className="hover:text-blue-500 hover:bg-blue-600/10 p-1.5 rounded-lg transition-all"><Linkedin size={16} /></button>
                <button className="hover:text-slate-300 hover:bg-slate-700 p-1.5 rounded-lg transition-all"><FileText size={16} /></button>
                <button className="hover:text-slate-300 hover:bg-slate-700 p-1.5 rounded-lg transition-all"><MoreHorizontal size={16} /></button>
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OrgTreeNode = ({ node }: { node: any }) => {
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className="flex flex-col items-center">
            {/* The Node Card */}
            <div className="relative z-10 mb-8">
                <EmployeeCard node={node} />

                {/* Vertical line going down from parent */}
                {hasChildren && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-700/50" />
                )}
            </div>

            {/* The Children */}
            {hasChildren && (
                <div className="relative flex gap-8 pt-8">
                    {/* Horizontal connector line */}
                    {node.children.length > 1 && (
                        <div className="absolute top-0 left-[calc(140px)] right-[calc(140px)] h-0.5 bg-slate-700/50 transform -translate-y-1/2" />
                    )}

                    {/* Render children recursively */}
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {node.children.map((child: any) => (
                        <div key={child.id} className="relative flex flex-col items-center">
                            {/* Vertical line going up to the connector/parent */}
                            <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-700/50">
                                {/* Rounded corner logic could go here for perfect curves, but simple lines work for this MVP */}
                            </div>

                            <OrgTreeNode node={child} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const AddMemberModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden scale-100 animate-in zoom-in-95 duration-200">
                <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Add Team Member</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                        <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="e.g. John Doe" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Role / Title</label>
                            <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="e.g. Sales Manager" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Department</label>
                            <select className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                                <option>Sales</option>
                                <option>Operations</option>
                                <option>Installation</option>
                                <option>Management</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email Address</label>
                        <input type="email" className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500" placeholder="john@pipesolar.com" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Reports To</label>
                        <select className="w-full bg-slate-800 border-slate-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                            <option value="">Select Manager...</option>
                            <option value="1">Bagus Fikri (CEO)</option>
                            <option value="2">Mufti Hidayat (Project Manager)</option>
                            <option value="3">Bryan (Design Manager)</option>
                        </select>
                    </div>
                </div>

                <div className="p-6 border-t border-slate-700 flex justify-end gap-3 bg-slate-900/50">
                    <button onClick={onClose} className="px-4 py-2 text-slate-300 hover:text-white font-medium hover:bg-slate-800 rounded-lg transition-colors">
                        Cancel
                    </button>
                    <button onClick={onClose} className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all transform active:scale-95">
                        Add Member
                    </button>
                </div>
            </div>
        </div>
    );
};

const Team = () => {
    const [zoom, setZoom] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2.0));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.4));
    const handleReset = () => setZoom(1);

    return (
        <div className="h-full flex flex-col relative">
            <div className="mb-6 px-4 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Team Hierarchy</h1>
                    <p className="text-slate-400 mt-2">Organization structure and reporting lines.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all group"
                >
                    <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                    <span>Add Member</span>
                </button>
            </div>

            {/* Scrollable Container for the massive chart */}
            <div className="flex-1 overflow-auto bg-slate-900/30 rounded-2xl border border-slate-800 relative">
                <div
                    className="min-w-max flex justify-center pb-20 pt-10 transition-transform duration-200 origin-top"
                    style={{ transform: `scale(${zoom})` }}
                >
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {teamHierarchy.map((root: any) => (
                        <OrgTreeNode key={root.id} node={root} />
                    ))}
                </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-8 right-8 flex flex-col gap-2 bg-slate-900 border border-slate-700 p-2 rounded-xl shadow-xl z-20">
                <button
                    onClick={handleZoomIn}
                    className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                    title="Zoom In"
                >
                    <ZoomIn size={20} />
                </button>
                <button
                    onClick={handleReset}
                    className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                    title="Reset Zoom"
                >
                    <RotateCcw size={20} />
                </button>
                <button
                    onClick={handleZoomOut}
                    className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                    title="Zoom Out"
                >
                    <ZoomOut size={20} />
                </button>
            </div>

            <AddMemberModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Team;
