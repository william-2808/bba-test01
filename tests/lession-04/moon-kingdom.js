// Tạo dữ liệu nhân vật.
const characters = [
    { name: "Mario", level: 10, health: 500 },
    { name: "Luigi", level: 15, health: 800 },
    { name: "Peach", level: 20, health: 400 },
    { name: "Bowser", level: 40, health: 700 }
];

// Hàm tạo nhân vật sau khi được power-up.
function createCharacters(characters) {

    // Dùng map() để tạo một mảng mới.
    const charactersPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });

    // Lọc những nhân vật có health lớn hơn 1000.
    const possibleWinners = charactersPowerUp.filter(character => {
        return character.health > 1000;
    });

    return {
        charactersPowerUp,
        possibleWinners
    };
}

// Test
const result = createCharacters(characters);

console.log(result.charactersPowerUp);
console.log(result.possibleWinners);