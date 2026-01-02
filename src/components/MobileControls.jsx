import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

const MobileControls = ({ onMove }) => {
    return (
        <div className="md:hidden grid grid-cols-3 gap-2 mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/5 shadow-lg">
            <div className="col-start-2">
                <button
                    className="w-14 h-14 flex items-center justify-center bg-gray-200/20 active:bg-gray-200/40 text-current rounded-xl backdrop-blur-sm transition-all active:scale-95"
                    onClick={() => onMove(0, -1)}
                    aria-label="Move Up"
                >
                    <ArrowUp className="w-8 h-8" />
                </button>
            </div>
            <div className="col-start-1 row-start-2">
                <button
                    className="w-14 h-14 flex items-center justify-center bg-gray-200/20 active:bg-gray-200/40 text-current rounded-xl backdrop-blur-sm transition-all active:scale-95"
                    onClick={() => onMove(-1, 0)}
                    aria-label="Move Left"
                >
                    <ArrowLeft className="w-8 h-8" />
                </button>
            </div>
            <div className="col-start-2 row-start-2">
                <button
                    className="w-14 h-14 flex items-center justify-center bg-gray-200/20 active:bg-gray-200/40 text-current rounded-xl backdrop-blur-sm transition-all active:scale-95"
                    onClick={() => onMove(0, 1)}
                    aria-label="Move Down"
                >
                    <ArrowDown className="w-8 h-8" />
                </button>
            </div>
            <div className="col-start-3 row-start-2">
                <button
                    className="w-14 h-14 flex items-center justify-center bg-gray-200/20 active:bg-gray-200/40 text-current rounded-xl backdrop-blur-sm transition-all active:scale-95"
                    onClick={() => onMove(1, 0)}
                    aria-label="Move Right"
                >
                    <ArrowRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
};

export default MobileControls;
