function greet(){
    var name = prompt('What is your name?')
    alert('Hello ' + name)
    var ageStr = prompt('How old are you?')
    var age = parseInt(ageStr)
    var birthday = confirm('Have you had a birthday this year?')
    if(birthday){
        alert('You were born in' + (new Date().getFullYear() - age))
    }
    if(!birthday){
        alert('You were born in ' +(new Date().getFullYear()- (age + 1)))
    }
}