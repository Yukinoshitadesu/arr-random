var randomCharacter = function (name) {
    return name[Math.floor(Math.random() * name.length)]; //floor : 用於將一個數向下取整，傳回小於或等於該數的最大整數
}

var font = ["早安", "你好", "吃飽沒"]; 

var randomWord = randomCharacter(font); 
console.log(randomWord);





