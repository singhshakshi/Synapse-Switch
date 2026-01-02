import React from 'react';
import { WORLD_STATES } from '../constants';
import { Sun, Moon, RefreshCw } from 'lucide-react';

const HUD = ({ gameState, onRestart, level }) => {
    const isLight = gameState.worldState === WORLD_STATES.LIGHT;
    const isDark = !isLight;

    return (
        <div className={`w-full flex items-center justify-between px-6 py-4 rounded-xl backdrop-blur-md shadow-lg transition-all duration-300 mb-6
      ${isLight ? 'bg-white/80 text-gray-800' : 'bg-black/40 text-white'}`}>

            <div className="flex flex-col">
                <h2 className="text-xl font-bold tracking-tight">{level.name}</h2>
                <p className={`text-xs font-medium uppercase tracking-wider opacity-70`}>
                    {level.hint}
                </p>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                    <span className="text-xs font-bold uppercase opacity-60">Moves</span>
                    <span className="text-2xl font-mono font-bold leading-none">{gameState.moveCount}</span>
                </div>

                <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors duration-300
          ${isLight ? 'bg-amber-100 border-amber-300 text-amber-700' : 'bg-purple-900/50 border-purple-500 text-purple-200'}`}>
                    {isLight ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span className="font-bold w-20 text-center text-sm">
                        {isLight ? 'LIGHT' : 'SHADOW'}
                    </span>
                </div>

                <button
                    onClick={onRestart}
                    className={`p-3 rounded-full transition-all duration-200 hover:scale-110 active:scale-90
            ${isLight
                            ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                            : 'bg-white/10 hover:bg-white/20 text-white'}`}
                    title="Restart Level"
                >
                    <RefreshCw className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default HUD;
