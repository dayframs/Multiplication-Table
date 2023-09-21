function multiply() {
   i = inp1.value;
    j = inp2.value;
    k = result.innerText;
for (let i = 1; i <= inp1.value; i++){
    for (let j = 1; j <= inp2.value; j++){
        result.innerText +=
            (i + '*' + j +'='+ (i*j));
        console.log(i + '*' + j +'='+ (i*j));
    }
}
}

