const practiseJest = require("./practise")

// testing practiseJest function
const require = ('./practise')

test('return my congratulatory message...', ()=>{
    expect(practiseJest()).toBe('Congratulations! You have passed all your tests.')
})