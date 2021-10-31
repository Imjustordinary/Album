let display = ['0'];


function evaluateHandler(){
    let val=[...display];
    each = display[display.length-1];
    
    if(each === '+' || each === '-'|| each === '×'|| each === '÷' || each === '%'){
        window.alert(`You can't do like this :3`);
        display = display.filter(function(each){return !each});
        display.push('0');
        document.querySelector('.display').innerHTML = display.join('');
    }
    else{
    val = val.map(function(each){
        if(each === '×'){
            return '*'
        }
        else if(each==='÷'){
            return '/'
        }
        else{
            return each
        }
    })
    
    let answer = eval(val.join('')).toString();
    display = display.filter(function(each){return !each});
    display.push(answer);
    
    document.querySelector('.display').innerHTML = display.join('');
    }
}
function addHandler(){
    let val = event.target.innerHTML;
      
    tester(val);
    
}

function clearHandler(){
    display = display.filter(function(each){return !each});
    display.push('0');
    document.querySelector('.display').innerHTML = display.join('');
}

function deleteHandler(){
    display.splice(display.length-1,1);
    if(display.length === 0){
        display.push('0');
    }
    document.querySelector('.display').innerHTML = display.join('');
    
}

function tester(value){
    let stringNum = [...display];
    
    let numTester = true;
    if(stringNum[0]=== '0'){
        stringNum.shift();
        
    }
    
    stringNum.map(function(each,index){
        if(each === '+' || each === '-'|| each === '×'|| each === '÷'  || each === '%'){
            if(value === '+' || value === '-'|| value === '×'|| value === '÷'  || value === '%')
            {
                    numTester = numTester && false;

                    if(index === stringNum.length-1 || index === 0){
                        stringNum.splice(index,1)
                        
                    }
                    display = [...stringNum];
                    display.push(value);
                    document.querySelector('.display').innerHTML = display.join('');
                
            }
            else{
                numTester = true;
                if(index === 0){
                    stringNum.splice(index,1)
                }
            }
        }
        else{
            
               
            numTester = numTester;
        
    }
    })

    if (numTester){

        stringNum.push(value);
        display = stringNum;
        
                    document.querySelector('.display').innerHTML = display.join('');
             

    }

}