function a(number){
    if(number<1)
    return;
    else{
        console.log(number," ")
        a(number-1);
        console.log(number, " ")
        return
    }
}
a(3)