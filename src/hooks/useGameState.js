import { useState, useCallback, useEffect } from 'react';
import { TILES, LEVELS, WORLD_STATES, GAME_STATUS } from '../constants';

export function useGameState() {
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [gameState, setGameState] = useState({
        playerPos: { x: 0, y: 0 },
        worldState: WORLD_STATES.LIGHT,
        moveCount: 0,
        status: GAME_STATUS.PLAYING,
    });

    // Initialize level
    useEffect(() => {
        const level = LEVELS[currentLevelIndex];
        if (level) {
            setGameState({
                playerPos: { ...level.playerStart },
                worldState: WORLD_STATES.LIGHT,
                moveCount: 0,
                status: GAME_STATUS.PLAYING,
            });
        }
    }, [currentLevelIndex]);

    const movePlayer = useCallback((dx, dy) => {
        setGameState(prev => {
            if (prev.status !== GAME_STATUS.PLAYING) return prev;

            const level = LEVELS[currentLevelIndex];
            const newX = prev.playerPos.x + dx;
            const newY = prev.playerPos.y + dy;

            // Check bounds
            if (newY < 0 || newY >= level.grid.length || newX < 0 || newX >= level.grid[0].length) {
                return prev;
            }

            // Determine NEXT world state (flip happens BEFORE/DURING move, effectively validating against new state?
            // Requirement: "Every player move flips the world state" -> "Player moves to new tile (if valid in NEW state)"
            const nextWorldState = prev.worldState === WORLD_STATES.LIGHT ? WORLD_STATES.SHADOW : WORLD_STATES.LIGHT;

            const tileChar = level.grid[newY][newX];
            const tileType = getTileType(tileChar);

            // Validation Logic
            if (!canEnter(tileType, nextWorldState)) {
                // Can't move there (e.g. Wall in Light)
                // Does the world flip anyway? usually in these puzzle games valid moves filp, invalid don't?
                // Requirement: "Player presses key -> World state flips -> Player moves (if valid)" 
                // If invalid, does it flip? usually NO.
                return prev;
            }

            // Check Death/Win
            let newStatus = GAME_STATUS.PLAYING;
            if (checkDeath(tileType, nextWorldState)) {
                newStatus = GAME_STATUS.LOST;
            } else if (tileType === TILES.EXIT) {
                newStatus = GAME_STATUS.WON;
            }

            return {
                ...prev,
                playerPos: { x: newX, y: newY },
                worldState: nextWorldState,
                moveCount: prev.moveCount + 1,
                status: newStatus,
            };
        });
    }, [currentLevelIndex]);

    const resetLevel = useCallback(() => {
        const level = LEVELS[currentLevelIndex];
        setGameState({
            playerPos: { ...level.playerStart },
            worldState: WORLD_STATES.LIGHT,
            moveCount: 0,
            status: GAME_STATUS.PLAYING,
        });
    }, [currentLevelIndex]);

    const nextLevel = useCallback(() => {
        if (currentLevelIndex < LEVELS.length - 1) {
            setCurrentLevelIndex(prev => prev + 1);
        }
    }, [currentLevelIndex]);

    return {
        gameState,
        currentLevel: LEVELS[currentLevelIndex],
        movePlayer,
        resetLevel,
        nextLevel,
        isLastLevel: currentLevelIndex === LEVELS.length - 1
    };
}

// Helpers
function getTileType(char) {
    // Use the map or direct mapping if chars are stored in grid
    // In constants we mapped chars to types. 
    // Let's assume grid stores chars 'W', 'P' etc.
    const map = {
        'W': TILES.WALL,
        'P': TILES.PLATFORM,
        'S': TILES.SPIKE,
        'E': TILES.EXIT,
        '.': TILES.EMPTY,
    };
    return map[char] || TILES.EMPTY;
}

function canEnter(tileType, worldState) {
    if (tileType === TILES.WALL && worldState === WORLD_STATES.LIGHT) return false;
    // Ghost platform: In shadow, platform is ghost. Can you enter it? 
    // "Platforms are ghosts (deadly to walk on)" -> usually means you fall through aka DEATH.
    // So you CAN enter, but you die.
    // "Walls are passable" in Shadow -> You can enter.
    return true;
}

function checkDeath(tileType, worldState) {
    if (tileType === TILES.PLATFORM && worldState === WORLD_STATES.SHADOW) return true; // Fall through ghost
    if (tileType === TILES.SPIKE && worldState === WORLD_STATES.SHADOW) return true; // Spike extended
    return false;
}
