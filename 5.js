var form = document.getElementById('myform')

form.addEventListener('submit', function(event){
    event.preventDefault()
    let x = document.getElementById('num1').value
    let y = document.getElementById('num2').value
    let z = document.getElementById('operacion').value
    let resulta;
        switch(z) {
            case 'suma' :
                resulta = + x + +y; 
                document.getElementById('result').innerHTML= resulta.toLocaleString();
                break;
            case 'resta':
                resulta = x - y;
                document.getElementById('result').innerHTML= resulta.toLocaleString();
                break;
            case 'multiplicacion':
                resulta = x * y;
                document.getElementById('result').innerHTML= resulta.toLocaleString();
                break;
            case 'division':
                resulta = x / y;
                document.getElementById('result').innerHTML= resulta.toLocaleString();
                break;
                default:
                    document.getElementById('result').innerHTML= "Sorry";
        }        
})