export const TILES = {
    EMPTY: 'EMPTY',
    PLATFORM: 'PLATFORM',
    WALL: 'WALL',
    SPIKE: 'SPIKE',
    EXIT: 'EXIT',
};

export const LEVEL_CHAR_MAP = {
    '.': TILES.EMPTY,
    'P': TILES.PLATFORM,
    'W': TILES.WALL,
    'S': TILES.SPIKE,
    'E': TILES.EXIT,
};

export const LEVELS = [
    {
        name: "Tutorial 1: The First Flip",
        grid: [
            ['W', 'W', 'W', 'W', 'W'],
            ['W', '.', '.', 'E', 'W'],
            ['W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 1, y: 1 },
        hint: "Move right twice. Each move flips the world!"
    },
    {
        name: "Tutorial 2: Wall Phase",
        grid: [
            ['W', 'W', 'W', 'W', 'W'],
            ['W', '.', 'W', 'E', 'W'],
            ['W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 1, y: 1 },
        hint: "Walls block in LIGHT, but are passable in SHADOW."
    },
    {
        name: "Tutorial 3: Platform Gap",
        grid: [
            ['W', 'W', 'W', 'W', 'W', 'W'],
            ['W', '.', 'P', '.', 'P', 'W'],
            ['W', '.', 'P', '.', 'E', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 1, y: 1 },
        hint: "Platforms are solid in LIGHT, but transparent (deadly) in SHADOW."
    },
    {
        name: "Level 4: The Maze Gauntlet",
        grid: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['W', '.', 'W', 'S', 'W', '.', 'E', 'W'],
            ['W', '.', 'W', '.', 'W', '.', 'W', 'W'],
            ['W', '.', 'S', '.', '.', '.', 'S', 'W'],
            ['W', 'W', 'W', 'W', 'W', '.', 'W', 'W'],
            ['W', '.', '.', '.', 'W', '.', '.', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 1, y: 5 },
        hint: "Walls are only illusions in the dark. Find the rhythm."
    },
    {
        name: "Level 5: Synapse Master",
        grid: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['W', '.', 'P', 'W', 'S', '.', '.', 'W'],
            ['W', '.', 'P', 'S', '.', 'W', '.', 'W'],
            ['W', 'W', '.', 'W', 'P', 'W', '.', 'W'],
            ['W', 'E', '.', 'S', '.', 'P', '.', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 1, y: 1 },
        hint: "Combine everything. Plan your path carefully."
    },
    {
        name: "Level 6: The Long Bridge",
        grid: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['W', '.', '.', '.', 'W', 'S', 'E', 'W'],
            ['W', 'W', 'W', 'P', 'W', 'P', 'W', 'W'],
            ['W', '.', 'P', '.', 'P', '.', 'W', 'W'],
            ['W', '.', 'W', 'W', 'W', '.', '.', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 1, y: 4 },
        hint: "A long path of platforms. Don't fall into the void."
    },
    {
        name: "Level 7: Spike Field",
        grid: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['W', 'E', 'S', 'S', 'S', '.', 'W'],
            ['W', 'S', 'S', '.', 'S', 'S', 'W'],
            ['W', '.', 'S', 'P', 'S', '.', 'W'],
            ['W', '.', '.', '.', '.', '.', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 1, y: 4 },
        hint: "Spikes are hidden in LIGHT. Remember where they are."
    },
    {
        name: "Level 8: Blind Faith",
        grid: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['W', 'E', '.', 'W', '.', '.', '.', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', '.', 'W'],
            ['W', '.', '.', '.', 'W', '.', '.', 'W'],
            ['W', '.', 'W', 'W', 'W', 'W', '.', 'W'],
            ['W', '.', '.', '.', '.', '.', '.', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 6, y: 5 },
        hint: "Some walls aren't real in the dark. Find the hidden path."
    },
    {
        name: "Level 9: The Rhythm Maze",
        grid: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['W', 'E', '.', 'S', '.', 'S', '.', 'W'],
            ['W', 'W', '.', 'W', '.', 'W', '.', 'W'],
            ['W', 'S', '.', 'S', '.', 'S', '.', 'W'],
            ['W', 'W', '.', 'W', '.', 'W', '.', 'W'],
            ['W', '.', '.', '.', '.', '.', '.', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 6, y: 5 },
        hint: "Spikes breathe. Move when they sleep."
    },
    {
        name: "Level 10: Grand Finale",
        grid: [
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
            ['W', 'E', 'W', 'P', 'W', 'S', '.', 'S', 'W'],
            ['W', '.', 'W', 'S', 'W', 'P', '.', 'P', 'W'],
            ['W', '.', 'S', 'P', 'S', 'S', '.', '.', 'W'],
            ['W', '.', '.', '.', '.', '.', '.', '.', 'W'],
            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W']
        ],
        playerStart: { x: 7, y: 4 },
        hint: "Master the switch. Every tile tells a story."
    }
];

export const WORLD_STATES = {
    LIGHT: 'light',
    SHADOW: 'shadow',
};

export const GAME_STATUS = {
    PLAYING: 'playing',
    WON: 'won',
    LOST: 'lost',
};
