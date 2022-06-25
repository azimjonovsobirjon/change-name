function changeName(){
    let result = document.querySelector('#res')
    let inputValuee = document.querySelector('#inputValue').value;
    result.innerHTML = inputValuee;
    document.querySelector('#inputValue').value = ''
}
