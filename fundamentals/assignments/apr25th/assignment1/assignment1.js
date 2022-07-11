// Create a program wherein you will given list of name of the people along wiht their
// designation, based on the name you type in from the input field of the given html file
// the revelant designation of the person will be displayed.

let data = {
    'Alex': 'Developer',
    'John': 'Artist',
    'Strek': 'Singer',
    'Smith': 'Actor'
}


function designation() {
    let empName = document.getElementById("name").value;
    if(data[empName] != undefined){
        document.getElementById("designation").innerHTML = empName + " is "+data[empName]
    }
}