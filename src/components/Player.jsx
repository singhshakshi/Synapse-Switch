import React from 'react';
import { WORLD_STATES } from '../constants';
import { User, Eye } from 'lucide-react';

const Player = ({ worldState }) => {
    const isLight = worldState === WORLD_STATES.LIGHT;

    const classes = `w-4/5 h-4/5 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center relative
    ${isLight
            ? "bg-blue-600 shadow-blue-500/50 scale-100"
            : "bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)] scale-90"
        }`;

    return (
        <div className={classes}>
            {isLight ? (
                <User className="w-2/3 h-2/3 text-white" />
            ) : (
                <Eye className="w-2/3 h-2/3 text-cyan-900" />
            )}
        </div>
    );
};

export default Player;
