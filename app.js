let button = document.querySelectorAll('.button')

let equal = document.getElementById('equal')
let del = document.getElementById('delete')
let AC = document.getElementById('clear')
let input = document.getElementById('input')

let equal_press = 0

window.onload = () =>{
    input.value = '';
}

button.forEach(button => {
    button.addEventListener('click',function(){
        if(equal_press == 1){
            input.value = '';
            equal_press = 0
        }
        input.value += button.value
    })
    
});

equal.addEventListener('click',function(){
    equal_press = 1
    let val = input.value
    try{
        let solution = eval(val)

        if(Number.isInteger(solution)){
            input.value = solution
        }
        else{
            input.value = solution.toFixed(6)
        }
    }
    catch(err){
        input.value = 'error'
    }
});

clear.addEventListener('click',function(){
    input.value = ''
});

del.addEventListener('click',function(){
    let val = input.value
    input.value = val.slice(0, -1)
})

