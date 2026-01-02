import React from 'react';
import Tile from './Tile';
import Player from './Player';

const GameBoard = ({ level, playerPos, worldState }) => {
    // Grid styling
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${level.grid[0].length}, 1fr)`,
        gridTemplateRows: `repeat(${level.grid.length}, 1fr)`,
    };

    return (
        <div className="relative p-1 bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl border border-white/10">
            <div style={gridStyle} className="gap-1 bg-black/5 p-1 rounded">
                {level.grid.map((row, y) =>
                    row.map((tileChar, x) => (
                        <div key={`${x}-${y}`} className="w-12 h-12 md:w-16 md:h-16 relative">
                            <Tile
                                type={getTileTypeFromChar(tileChar)}
                                worldState={worldState}
                            />
                            {/* Render player if at this position */}
                            {playerPos.x === x && playerPos.y === y && (
                                <div className="absolute inset-0 flex items-center justify-center z-20">
                                    <div className="w-full h-full flex items-center justify-center animate-[pop_0.2s_ease-out]">
                                        <Player worldState={worldState} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

// Helper since we import TILES in Tile but pass chars here usually.
// Or we can import local helper.
import { TILES } from '../constants';
function getTileTypeFromChar(char) {
    const map = {
        'W': TILES.WALL,
        'P': TILES.PLATFORM,
        'S': TILES.SPIKE,
        'E': TILES.EXIT,
        '.': TILES.EMPTY,
    };
    return map[char] || TILES.EMPTY;
}

export default GameBoard;
