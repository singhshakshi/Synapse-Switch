import React from 'react';
import { TILES, WORLD_STATES } from '../constants';
import { Ghost, Skull } from 'lucide-react';

const Tile = ({ type, worldState }) => {
    const isLight = worldState === WORLD_STATES.LIGHT;

    let baseClasses = "w-full h-full flex items-center justify-center transition-all duration-300 border-b border-r border-black/5";
    let content = null;

    switch (type) {
        case TILES.EMPTY:
            baseClasses += isLight ? " bg-transparent" : " bg-transparent";
            break;

        case TILES.WALL:
            // Light: Solid Black/Dark Gray
            // Shadow: Translucent Purple (Passable)
            baseClasses += isLight
                ? " bg-gray-900 border-gray-800 shadow-lg z-10"
                : " bg-purple-700/40 border-purple-500/30 z-0";
            break;

        case TILES.PLATFORM:
            // Light: Solid Gray
            // Shadow: Ghostly Transparent (Deadly)
            baseClasses += isLight
                ? " bg-gray-300 border-gray-400"
                : " bg-purple-800/20 border-purple-500/20 animate-pulse";

            if (!isLight) {
                content = <Ghost className="w-4 h-4 text-purple-400/50" />;
            }
            break;

        case TILES.SPIKE:
            // Light: Hidden (looks like floor/safe)
            // Shadow: Extended (Red/Deadly)
            baseClasses += isLight
                ? " bg-gray-200"
                : " bg-red-900/80 border-red-500 animate-pulse";

            if (!isLight) {
                content = <Skull className="w-5 h-5 text-red-500 animate-bounce" />;
            }
            break;

        case TILES.EXIT:
            baseClasses += isLight
                ? " bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                : " bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]";
            break;

        default: // Empty
            break;
    }

    return (
        <div className={baseClasses}>
            {content}
        </div>
    );
};

export default Tile;
