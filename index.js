function greet(){
    var name = prompt('What is your name?')
    alert('Hello ' + name)
    var ageStr = prompt('How old are you?')
    var age = parseInt(ageStr)
    var birthday = confirm('Have you had a birthday this year?')
}