const fortuneCookies = [
    'Conquer your fears, or they conquer you',
    'Rivers need sources',
    'Dont be afraid of the unknown',
    'A pleasant surprise awaits you',
    'Practice makes perfect.',
    'Never put off until tomorrow what you can do today.',
    'If a job is worth doing it is worth doing well.', 
    'A cat in gloves catches no mice.',
    'Actions speak louder than words.'
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}