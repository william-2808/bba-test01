const playerName = "Mario";
const currentLives = 3;

function calculateCoins(level1, level2, level3) {

    // Tính tổng số coin của 3 level
    const total = level1 + level2 + level3;

    // Tính số coin trung bình mỗi level
    const average = total / 3;

    // Lấy số coin còn dư khi chia tổng coin cho 3
    const remainder = total % 3;

    console.log(`Total coins: ${total}`);
    console.log(`Average coins: ${average}`);
    console.log(`Remainder coins: ${remainder}`);
}

calculateCoins(25, 30, 45);