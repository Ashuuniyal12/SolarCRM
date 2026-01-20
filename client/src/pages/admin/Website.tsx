import { Globe, PenTool, Eye, Layout } from 'lucide-react';

const Website = () => {
    return (
        <div className="h-full">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Website Manager</h1>
                    <p className="text-slate-400 mt-2">Manage your public facing landing page.</p>
                </div>
                <button
                    onClick={() => window.open('/', '_blank')}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors"
                >
                    <Eye size={20} /> View Live Site
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                        <Layout size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Structure & Layout</h3>
                    <p className="text-slate-400 text-sm mb-4">Edit the main sections, navigation, and footer of your landing page.</p>
                    <button className="text-blue-400 text-sm font-medium hover:text-blue-300">Edit Layout &rarr;</button>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-4">
                        <PenTool size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Content Editor</h3>
                    <p className="text-slate-400 text-sm mb-4">Update text, images, and marketing copy across the site.</p>
                    <button className="text-blue-400 text-sm font-medium hover:text-blue-300">Manage Content &rarr;</button>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 mb-4">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">SEO & Metadata</h3>
                    <p className="text-slate-400 text-sm mb-4">Configure title tags, meta descriptions, and social sharing images.</p>
                    <button className="text-blue-400 text-sm font-medium hover:text-blue-300">Configure SEO &rarr;</button>
                </div>
            </div>

            <div className="mt-8 p-8 border border-slate-800 border-dashed rounded-2xl flex flex-col items-center justify-center text-center">
                <div className="w-full max-w-2xl bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-2xl opacity-50 blur-sm select-none pointer-events-none transform scale-95">
                    <div className="h-4 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <div className="h-32 bg-slate-900" />
                </div>
                <p className="mt-4 text-slate-500">Live preview of your changes appears here</p>
            </div>
        </div>
    );
};

export default Website;
