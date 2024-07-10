function check()
{
    let str = document.getElementById('input').value;
    let len=str.length;
    for(let i=0;i<len/2;i++)
        {
            if(str[i]!==str[len-1-i])
                {
                    document.getElementById('result').innerHTML = 'Not a Palindrome'
                    return;
                }
        }
        document.getElementById('result').innerHTML = 'Palindrome'     
} 
      