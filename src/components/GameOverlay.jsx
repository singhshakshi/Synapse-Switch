import React from 'react';
import { GAME_STATUS } from '../constants';
import { RotateCcw, ArrowRight, Skull, Trophy } from 'lucide-react';

const GameOverlay = ({ status, onRestart, onNextLevel, isLastLevel }) => {
    if (status === GAME_STATUS.PLAYING) return null;

    const isWin = status === GAME_STATUS.WON;

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
            <div className={`w-full max-w-sm p-8 rounded-2xl shadow-2xl transform transition-all scale-100 animate-[popIn_0.3s_ease-out]
        ${isWin ? 'bg-white text-gray-900' : 'bg-gray-900 border border-red-900/50 text-white'}`}>

                <div className="flex flex-col items-center text-center gap-4">
                    <div className={`p-4 rounded-full ${isWin ? 'bg-green-100 text-green-600' : 'bg-red-900/30 text-red-500'}`}>
                        {isWin ? <Trophy className="w-12 h-12" /> : <Skull className="w-12 h-12" />}
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-2">
                            {isWin ? 'Level Complete!' : 'Game Over'}
                        </h2>
                        <p className={`text-sm ${isWin ? 'text-gray-500' : 'text-gray-400'}`}>
                            {isWin ? "Excellent work! Ready for the next challenge?" : "The shadows claimed you. Try again."}
                        </p>
                    </div>

                    <div className="flex gap-3 w-full mt-4">
                        <button
                            onClick={onRestart}
                            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-transform active:scale-95
                ${isWin
                                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                    : 'bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/50'}`}
                        >
                            <RotateCcw className="w-4 h-4" />
                            Try Again
                        </button>

                        {isWin && (
                            <button
                                onClick={onNextLevel}
                                disabled={isLastLevel}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95
                  ${isLastLevel
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/30'}`}
                            >
                                {isLastLevel ? "Finished!" : "Next Level"}
                                {!isLastLevel && <ArrowRight className="w-4 h-4" />}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameOverlay;
