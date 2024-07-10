function check(){
    let input = document.querySelector('input[name="input"]:checked');
    let result='';
    if(input)
    {
        switch(input.value){
            case 'High School':
            case 'UG':
                result="You are eligible for the job";
                break;
            case 'Illiterate':
            case 'PG':
            case 'Doctorate':
                result="You are not eligible for the job";
                break;
            default:
                result="Select educational level";
        }
    }
    else
    {
        result="Select educational level";
    }
    document.getElementById('result').innerHTML = result;
}



