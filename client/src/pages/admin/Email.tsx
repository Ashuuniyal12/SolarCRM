import { dummyEmails } from '../../data/mockData';
import { Mail, Search, Star, Archive } from 'lucide-react';

const Email = () => {
    return (
        <div className="flex h-[calc(100vh-8rem)] bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-800 p-4 flex flex-col gap-2">
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl mb-4 transition-colors">
                    Compose
                </button>
                <div className="space-y-1">
                    <button className="w-full text-left px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 font-medium flex items-center gap-3">
                        <Mail size={18} /> Inbox <span className="ml-auto text-xs bg-blue-500 text-white px-1.5 rounded-full">5</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-400 font-medium flex items-center gap-3 transition-colors">
                        <Star size={18} /> Starred
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800 text-slate-400 font-medium flex items-center gap-3 transition-colors">
                        <Archive size={18} /> Archived
                    </button>
                </div>
            </div>

            {/* List */}
            <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-slate-800 flex items-center gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search mail..."
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {dummyEmails.map((email: any) => (
                        <div key={email.id} className={`p-4 border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer transition-colors ${email.read ? 'opacity-70' : 'bg-slate-800/30'}`}>
                            <div className="flex items-center justify-between mb-1">
                                <h4 className={`text-sm ${email.read ? 'font-medium text-slate-300' : 'font-bold text-white'}`}>
                                    {email.sender}
                                </h4>
                                <span className="text-xs text-slate-500">{email.date}</span>
                            </div>
                            <h5 className={`text-sm mb-1 ${email.read ? 'text-slate-400' : 'text-white font-semibold'}`}>
                                {email.subject}
                            </h5>
                            <p className="text-xs text-slate-500 line-clamp-1">{email.preview}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview (Hidden on small screens, simplified for demo) */}
            <div className="w-[40%] border-l border-slate-800 p-8 hidden lg:block bg-slate-900/30">
                <div className="flex items-center justify-center h-full text-slate-500 flex-col gap-4">
                    <Mail size={48} className="text-slate-700" />
                    <p>Select an email to read</p>
                </div>
            </div>
        </div>
    );
};

export default Email;
