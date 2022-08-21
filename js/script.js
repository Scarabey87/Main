function ves(){
    let a = prompt("Введите ваш рост ");
    let b = Math.round((a-100)*1.15);
    alert("Ваш идеальный вес " + b);
}