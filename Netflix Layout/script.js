
document.getElementById('getbutton').addEventListener('click', () => {

    let emailID = document.querySelector('#email').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID \"@\" , \".\"  ")
        document.querySelector('#email').value = '';

        return false;
    }
    else {
        confirm("Congratulation.... You Sign Up Succesfull");
        document.querySelector('#email').value = '';

    }
});

document.getElementById('getbutton2').addEventListener('click', () => {

    let emailID = document.querySelector('#email2').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email ID \"@\" , \".\"  ")
        document.querySelector('#email2').value = '';

        return false;
    }
    else {
        confirm("Congratulation.... You Sign Up Succesfull");
        document.querySelector('#email2').value = '';

    }


});

document.querySelector('#email').addEventListener('keyup', () => {
    document.getElementById('demo').innerHTML = '';


})
