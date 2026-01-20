import { useState } from 'react';
import { events } from '../../data/mockData';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';

const Schedule = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 20)); // Jan 20, 2026 as per user time

    const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

    const getEventsForDay = (day: number) => {
        return events.filter(e => {
            const eventDate = new Date(e.date);
            return eventDate.getDate() === day &&
                eventDate.getMonth() === currentDate.getMonth() &&
                eventDate.getFullYear() === currentDate.getFullYear();
        });
    };

    const getEventColor = (type: string) => {
        switch (type) {
            case 'Survey': return 'bg-blue-600/20 border-blue-500/50 text-blue-300';
            case 'Install': return 'bg-green-600/20 border-green-500/50 text-green-300';
            case 'Inspection': return 'bg-orange-600/20 border-orange-500/50 text-orange-300';
            default: return 'bg-slate-700/50 border-slate-600 text-slate-300';
        }
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Schedule</h1>
                    <p className="text-slate-400 mt-2">Manage field operations and appointments.</p>
                </div>
                <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl p-1">
                    <button
                        onClick={prevMonth}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <div className="px-4 font-bold text-white min-w-[140px] text-center">
                        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </div>
                    <button
                        onClick={nextMonth}
                        className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden flex flex-col">
                {/* Days Header */}
                <div className="grid grid-cols-7 border-b border-slate-800 bg-slate-900/80">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="py-3 text-center text-sm font-semibold text-slate-400">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 flex-1 auto-rows-fr">
                    {blanks.map(i => (
                        <div key={`blank-${i}`} className="bg-slate-900/30 border-b border-r border-slate-800/50" />
                    ))}

                    {days.map(day => {
                        const dayEvents = getEventsForDay(day);
                        const isToday = day === 20 && currentDate.getMonth() === 0;

                        return (
                            <div key={day} className={`border-b border-r border-slate-800/50 p-2 min-h-[120px] relative group transition-colors hover:bg-slate-800/30 ${isToday ? 'bg-blue-900/10' : ''}`}>
                                <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full mb-2 ${isToday ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-slate-400'}`}>
                                    {day}
                                </span>

                                <div className="space-y-1.5">
                                    {dayEvents.map(event => (
                                        <div key={event.id} className={`text-xs p-1.5 rounded-lg border truncate cursor-pointer hover:opacity-80 transition-opacity ${getEventColor(event.type)}`}>
                                            <div className="font-semibold truncate">{event.title}</div>
                                            <div className="flex items-center gap-1 opacity-70 text-[10px] mt-0.5">
                                                <User size={10} /> {event.engineer}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
