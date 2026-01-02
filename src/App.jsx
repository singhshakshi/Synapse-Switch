import React, { useEffect } from 'react';
import { useGameState } from './hooks/useGameState';
import GameBoard from './components/GameBoard';
import HUD from './components/HUD';
import GameOverlay from './components/GameOverlay';
import { WORLD_STATES } from './constants';

function App() {
    const { gameState, currentLevel, movePlayer, resetLevel, nextLevel, isLastLevel } = useGameState();

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Prevent default scrolling for arrow keys
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
                e.preventDefault();
            }

            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                case 'W':
                    movePlayer(0, -1);
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    movePlayer(0, 1);
                    break;
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    movePlayer(-1, 0);
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    movePlayer(1, 0);
                    break;
                case 'r':
                case 'R':
                    resetLevel();
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [movePlayer, resetLevel]);

    const isLight = gameState.worldState === WORLD_STATES.LIGHT;

    return (
        <div className={`w-full h-screen relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-500 ease-in-out
      ${isLight ? 'bg-amber-50' : 'bg-purple-950'}`}>

            {/* Background decoration */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500
        ${isLight ? 'opacity-100' : 'opacity-20'}`}>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>

            <div className="max-w-4xl w-full z-10 flex flex-col items-center px-4">

                <HUD
                    gameState={gameState}
                    level={currentLevel}
                    onRestart={resetLevel}
                />

                <div className="relative">
                    <GameBoard
                        level={currentLevel}
                        playerPos={gameState.playerPos}
                        worldState={gameState.worldState}
                    />

                    <GameOverlay
                        status={gameState.status}
                        onRestart={resetLevel}
                        onNextLevel={nextLevel}
                        isLastLevel={isLastLevel}
                    />
                </div>

                {/* Controls Hint */}
                <div className={`mt-8 text-sm font-medium transition-colors duration-300
          ${isLight ? 'text-gray-400' : 'text-purple-400/50'}`}>
                    Use <span className="font-bold border px-1 rounded mx-1 border-current">Arrow Keys</span> or <span className="font-bold border px-1 rounded mx-1 border-current">WASD</span> to move • Each move flips reality
                </div>

            </div>
        </div>
    );
}

export default App;
