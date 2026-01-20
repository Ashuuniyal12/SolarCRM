import { useNavigate } from 'react-router-dom';
import { Sun, ArrowRight, CheckCircle } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col text-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[100px]" />

            {/* Navbar */}
            <nav className="flex items-center justify-between px-8 py-6 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <Sun className="text-white" size={20} />
                    </div>
                    <span className="text-xl font-bold tracking-tight">Pipe Solar</span>
                </div>
                <button
                    onClick={() => navigate('/login')}
                    className="px-6 py-2.5 rounded-full border border-slate-700 hover:border-blue-500 hover:text-blue-400 transition-all font-medium text-sm"
                >
                    Employee Login
                </button>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 text-blue-400 text-sm font-medium border border-blue-500/20 mb-8 animate-fade-in-up">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Now Live in California & Arizona
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                    The Future of Solar <br />
                    Operations Management.
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
                    Streamline your entire solar pipeline from lead to inspection with Pipe Solar's integrated CRM and FieldOps platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 group"
                    >
                        Get Started
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold text-lg transition-all border border-slate-700">
                        Book a Demo
                    </button>
                </div>

                {/* Feature List */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl">
                    {[
                        "Automated Scheduling",
                        "Real-time Field Sync",
                        "Instant Reporting"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                            <CheckCircle className="text-green-400" size={20} />
                            <span className="font-semibold text-slate-200">{feature}</span>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="py-8 text-center text-slate-600 text-sm relative z-10">
                &copy; 2026 Pipe Solar Inc. All rights reserved.
            </footer>
        </div>
    );
};

export default LandingPage;
