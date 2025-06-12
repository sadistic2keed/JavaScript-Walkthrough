## var
Declare a variable. <br>

    Eg: var message; <br>
        message = "Hello, Geeks!"
        console.log(message);
        Outputs: Hello, Geeks! 

## let
Modern way to declare. <br>

    Eg: let text = "JavaScript is the best!";
        console.log(text); // 
        Outputs: JavaScript is the best!

## const
Declare variables once for all and not change it. <br>

    Eg: const number = 10;
        console.log(number); // Outputs: 10

NOTE: const can't be reassigned. <br

    const number = 10;
    number = 20; // Error: Assignment to constant variable.

## Variable Naming Convention
+ We can use $, _. but no special characters like @, #, etc.

## assigning multiple values 
We use {} for mixed values and [] for array. These are considered object under 'typeof'

    Eg: const personDetails = {Name: "Manash", age: 18, Roll No.:21};
        console.log (personDetails);
    AND
        const arrays = [1,2,3,4,5,6,7,8,9,0];
        console.log (arrays);   
