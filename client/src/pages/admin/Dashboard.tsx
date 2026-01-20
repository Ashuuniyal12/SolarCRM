import { stats, recentActivity } from '../../data/mockData';
import { TrendingUp, Activity } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h1>
                <p className="text-slate-400 mt-2">Welcome back, here's what's happening with your projects today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-colors group">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                                <stat.icon size={24} className={stat.color} />
                            </div>
                            <span className={`text-xs font-medium px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-sm text-slate-400">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Activity size={20} className="text-blue-500" />
                            Recent Activity
                        </h2>
                        <button className="text-sm text-blue-400 hover:text-blue-300 font-medium">View All</button>
                    </div>
                    <div className="space-y-6">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex items-start gap-4 pb-6 border-b border-slate-800/50 last:border-0 last:pb-0">
                                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
                                <div className="flex-1">
                                    <p className="text-white font-medium">
                                        {activity.user} <span className="text-slate-400 font-normal">{activity.action}</span>
                                    </p>
                                    <p className="text-sm text-blue-400 mt-1">{activity.target}</p>
                                </div>
                                <span className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Mini Stats */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />

                    <h3 className="text-xl font-bold mb-2 relative z-10">Sales Goal</h3>
                    <p className="text-blue-100 mb-6 relative z-10">You're 84% of the way to your monthly target.</p>

                    <div className="w-full bg-black/20 h-3 rounded-full mb-2 overflow-hidden relative z-10">
                        <div className="h-full bg-white w-[84%] rounded-full" />
                    </div>
                    <div className="flex justify-between text-sm font-medium relative z-10">
                        <span>$245k</span>
                        <span className="opacity-70">Goal: $290k</span>
                    </div>

                    <button className="mt-8 w-full bg-white text-blue-700 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 relative z-10">
                        View Performance <TrendingUp size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
