export const emojis = {
    alive: '😎',
    death: '💀',
    human: '🌎',
    alien: '👽',
    male: '👨',
    female: '👧',
    questionMark: '❓'
};

export const getEmoji = (type) => {
    return emojis[type] ?? '❓'
}