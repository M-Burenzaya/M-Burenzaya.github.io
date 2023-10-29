checkinputValue(document.getElementById("yourInputField").value);
function checkinputValues(inputValue){
if (inputValue === "") {
    alert("Please enter a value. This field cannot be epmty.");
} else if (isNaN(inputValue)){
    alert("Please enter a valid number.");
} else if (inputValue < 0){
    alert ("Please enter a positive number.");
}
}
document.getElementById("yourButton").addEventListener("click",function(event){
    event.preventDefault();// тоог 0-т хувааж болохгүй.
});