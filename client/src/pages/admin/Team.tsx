import { teamHierarchy } from '../../data/mockData';
import { User } from 'lucide-react';

// Recursive component for rendering tree
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TreeNode = ({ node, level = 0 }: { node: any, level?: number }) => {
    const hasChildren = node.children && node.children.length > 0;

    return (
        <div className={`ml-${level > 0 ? '8' : '0'} relative`}>
            {/* Connector lines for deep levels */}
            {level > 0 && (
                <div className="absolute -left-6 top-6 w-6 h-px bg-slate-700" />
            )}
            {level > 0 && (
                <div className="absolute -left-6 -top-2 h-[34px] w-px bg-slate-700" />
            )}

            <div className={`flex items-start gap-4 p-4 rounded-xl border mb-4 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-colors w-full max-w-md relative z-10`}>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <User size={20} className="text-slate-400" />
                </div>
                <div>
                    <h4 className="text-white font-bold">{node.name}</h4>
                    <p className="text-sm text-blue-400">{node.role}</p>
                </div>
            </div>

            {hasChildren && (
                <div className="relative border-l border-slate-800/0 ml-4 pl-4">
                    {/* Vertical line connecting children */}
                    <div className="absolute left-[-2px] top-0 bottom-6 w-px bg-slate-700" />

                    {node.children.map((child: any) => (
                        <TreeNode key={child.id} node={child} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

const Team = () => {
    return (
        <div className="p-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white tracking-tight">Team Hierarchy</h1>
                <p className="text-slate-400 mt-2">Organization structure and reporting lines.</p>
            </div>

            <div className="overflow-x-auto pb-20">
                {teamHierarchy.map((root: any) => (
                    <TreeNode key={root.id} node={root} />
                ))}
            </div>
        </div>
    );
};

export default Team;
