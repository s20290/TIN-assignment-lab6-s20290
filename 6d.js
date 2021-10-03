function submitForm(){
    let formArr = document.querySelector('#myform')
    
    
    var tbodyRef = document.getElementById('mytable');
    let neededRows = formArr.length - tbodyRef.rows.length
    if(neededRows > 0){
        for(let i= 0; i<neededRows;i++){
            var newRow = tbodyRef.insertRow()
            newRow.insertCell()
        }
    }
    let table = document.querySelector("#mytable").getElementsByTagName('td')
    for(let i = 0;i<formArr.length;i++){
        table[i].innerText = `${formArr[i].id} ${formArr[i].value}`
    }
}