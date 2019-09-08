function nameCheck(){
    var name = document.getElementById('Name').value;
    var check = confirm("Is " + name + " your name?");
    if (check == true){
        alert(name + ", welcome to Digi-Safari Git workshop !");
    }
    else{
        alert("Please enter full name.");
    }
}