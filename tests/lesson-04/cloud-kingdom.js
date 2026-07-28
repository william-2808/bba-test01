// Loại power-up mà Mario nhận được.
const powerUp = "mushroom";

// Lưu hiệu ứng tương ứng của power-up.
let effect;

// Kiểm tra từng loại power-up.
if (powerUp === "mushroom") {
    effect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    effect = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
    effect = "Mario is invincible!";
} else if (powerUp === "none") {
    effect = "Mario is normal";
} else {
    // Trường hợp không hợp lệ.
    effect = "Unknown power-up";
}
console.log(effect);