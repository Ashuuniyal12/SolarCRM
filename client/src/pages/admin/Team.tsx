import { useState } from 'react';
import { teamHierarchy } from '../../data/mockData';
import { Phone, Mail, FileText, Linkedin, MoreHorizontal, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

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
        <div className={`relative bg-white rounded-xl shadow-lg p-0 w-[280px] group transition-transform hover:-translate-y-1 duration-300`}>
            {/* Colorful Top Border */}
            <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-xl ${getBorderColor(node.role)} bg-gradient-to-r from-current to-current opacity-80`} />

            <div className="p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-slate-50 shrink-0">
                    {/* Placeholder Avatar */}
                    <span className="text-xl font-bold text-slate-400">
                        {node.name.split(' ').map((n: string) => n[0]).join('')}
                    </span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight">{node.name}</h3>
                    <p className="text-slate-500 text-sm font-medium mt-0.5">{node.role}</p>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 mx-4" />

            {/* Action Footer */}
            <div className="px-4 py-3 flex items-center justify-between text-slate-400">
                <button className="hover:text-blue-500 transition-colors"><Phone size={16} /></button>
                <button className="hover:text-blue-500 transition-colors"><Mail size={16} /></button>
                <button className="hover:text-blue-700 transition-colors"><Linkedin size={16} /></button>
                <button className="hover:text-slate-600 transition-colors"><FileText size={16} /></button>
                <button className="hover:text-slate-600 transition-colors"><MoreHorizontal size={16} /></button>
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
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-300" />
                )}
            </div>

            {/* The Children */}
            {hasChildren && (
                <div className="relative flex gap-8 pt-8">
                    {/* Horizontal connector line */}
                    {node.children.length > 1 && (
                        <div className="absolute top-0 left-[calc(140px)] right-[calc(140px)] h-0.5 bg-slate-300 transform -translate-y-1/2" />
                    )}

                    {/* Render children recursively */}
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {node.children.map((child: any) => (
                        <div key={child.id} className="relative flex flex-col items-center">
                            {/* Vertical line going up to the connector/parent */}
                            <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-300">
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

const Team = () => {
    const [zoom, setZoom] = useState(1);

    const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2.0));
    const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.4));
    const handleReset = () => setZoom(1);

    return (
        <div className="h-full flex flex-col relative">
            <div className="mb-6 px-4">
                <h1 className="text-3xl font-bold text-white tracking-tight">Team Hierarchy</h1>
                <p className="text-slate-400 mt-2">Organization structure and reporting lines.</p>
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
        </div>
    );
};

export default Team;
