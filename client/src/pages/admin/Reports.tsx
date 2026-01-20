import React from 'react';
import { BarChart3 } from 'lucide-react';

const Reports = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-slate-500">
            <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mb-6">
                <BarChart3 size={40} className="text-slate-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-300 mb-2">Reports Module</h2>
            <p className="max-w-md text-center">This feature is part of the full simplified proposal. It will include detailed analytics on sales, installations, and team performance.</p>
        </div>
    );
};

export default Reports;
