export const SYMBOLS_CLASSIC = [
    '🍋', '🍊', '🍉', '🍈', '🍇', '🥝', '🍓', '🍒', '🌟', '🍀', '💎', '🎰'];

export const SYMBOLS_CHRISTMAS = [
    '🧣', '⛄', '🎄', '🎁', '🎀', '🍾', '🍷', '🔔', '🌟', '🦌', '🎅'];

export const SYMBOLS_HALLOWEEN = [
    '🌚', '🎃', '🦇', '😈', '🧠', '👹', '👽', '🤡', '👻', '🧟‍', '🧛‍', '💀'];

export const SYMBOLS_ANIMALS = [
    '🐞', '🐟', '🐭', '🐸', '🐓', '🐷', '🦀', '🐍', '🦊‍', '🦁', '🦕', '🦖'];

export const SYMBOLS_SPORTS = [
    '🎯', '🎱', '🏐', '⛳', '⚾', '🏈', '🏀', '⚽', '🥉', '🥈', '🥇', '🏆'];

export const SYMBOLS_LOVE = [
    '💌', '🎁', '📸', '💘', '💋', '🔞', '💑', '💍', '💎', '💖',
];

export const SYMBOLS_FORTUNE = [
    '🎴', '🎲', '🕶', '🥃', '💷', '💴', '💵', '💰', '🍀', '💎', '🎰', '🧞‍️', '🃏'];

export const SYMBOLS_FOOD = ['slot-icon/01.jpg', 'slot-icon/02.jpg', 'slot-icon/03.jpg', 'slot-icon/04.jpg', 'slot-icon/05.jpg', 'slot-icon/06.jpg'];

export const ALL_SYMBOLS = [
    // SYMBOLS_CLASSIC,
    // SYMBOLS_CHRISTMAS,
    // SYMBOLS_HALLOWEEN,
    // SYMBOLS_ANIMALS,
    // SYMBOLS_SPORTS,
    // SYMBOLS_LOVE,
    // SYMBOLS_FORTUNE,
    SYMBOLS_FOOD,
];

export const SYMBOLS_RANDOM = ALL_SYMBOLS[Math.random() * ALL_SYMBOLS.length | 0];
