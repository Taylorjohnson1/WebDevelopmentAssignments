// Call the initialize function on page load.
window.onload=initialize;

function initialize()
{
    // Display start message
    console.log("In initialize()");
}

// If and Switch statements.
function conditions()
{
    // Create some variables to compare
    let num1 = 10;
    let num2 = 5;
    let text1 = "Mark";
    let text2 = "Marry";

    // Do some comparisons with If statements using numbers
    if(num1 == num2)
        console.log("Number 1 is equal to Number 2");
    else   
        console.log("Number 1 is not equal to Number 2");
    if(num2 > num1)
        console.log("Number 2 is greater than Number 1");
    else if(num2 < num1)
        console.log("Number 2 is less than Number 1");
    else
        console.log("Number 2 is equal to Number 2")
    // Do a comparison with If statements using strings.
    if (text1 == text2)
        console.log("Number 1 is equal to Number 2");
    else
        console.log("Text 1 is not equal to Text 2");
    if (text1 >= text2)
        console.log("Text 1 is greater than or equal to Text 2")
    else
        console.log("Text 1 is less than to Text 2");
    // Do a comparisons with a Switch statement using numbers.
    switch(num2)
    {
        case 0:
            console.log("Number 2 is equal to 0");
            break;
        case 1:
            console.log("Number 2 is equal to 1");
            break;
        case 2:
            console.log("Number 2 is equal to 2");
            break;
        case 3:
            console.log("Number 2 is equal to 3");
            break;
        case 4:
            console.log("Number 2 is equal to 4");
            break;
        case 5:
            console.log("Number 2 is equal to 5");
            break;
        default:
            console.log("Number 2 is unknown value");
            break;
    }
    // Do a comparison with the ternary operator.
    num1 == num2 ? console.log("Using Ternary Operator - Number 1 is equal to Number 2") : console.log("Using Ternary Operator - Number 1 is not equal to Number 2");
}    

// Loop statements.
function loops()
{
    // Creates an array that we can loop over.
    let shapes = new Array("Triangle", "Circle", "Square");3

    // Loops
    // for Loop(that prints all array elements)
    for(index=0; index < shapes.length;++index)
    {
        console.log("Using For Loops getting Array value of " + shapes[index] + " at " + index)
    }
    // For Loops (that prints out array elements)
    for(index=0; index < shapes.length;++index)
    {
        if(index%2 == 0)
            console.log("Array value of " + shapes[index] + " at even index of " + index)
    }
    // While Loops (that prints all array elements)
    let i = 0;
    while(i < shapes.length)
    {
        console.log("Using While Loop getting Array value of " + shapes[i] + " at " +  i);
        ++i;
    }
    // Do while Loops (that prints all array elements)
    i = 0;
    do
    {
        console.log("Using Do While Loops getting Array value of " + shapes[i] + " at " +  i);
        ++i;
    }while(i < shapes.length)
}

// Objects
function objects()
{
    // Create Person 1 object with some properties using JavaScript notation
    let person1 =
    {
        firstName: "Bob",
        lastName: "Johnson",
        age: 25,
        occupation: "Student"
    };
    console.log("This is person 1 " + person1.firstName + " " + person1.lastName + " who is of age " + person1.age + " and is a " + person1.occupation);
    // Create Person 2 object with some properties using an Object.
    let person2 = new Object();
    person2.firstName = "Billy";
    person2.lastName = "White";
    person2.age = 35;
    person2.occupation = "Professor";
    console.log("This is Person 2 " + person2.firstName + ' ' + person2.lastName + " who is of age " + person2.age + " and is a " + person2.occupation);
    // Create Person object with some properties and a constructor
    function Person(firstName, lastName, age, occupation)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
    }
    let person3 = new Person("Mary", "Jackson", 50, "Dean");
    let person4 = new Person("John", "Lennon", 80, "Musician");
    console.log("This is Person 3 " + person3.firstName + ' ' + person3.lastName + " who is of age " + person3.age + " and is a " + person3.occupation);
    console.log("This is Person 4 " + person4.firstName + ' ' + person4.lastName + " who is of age " + person4.age + " and is a " + person4.occupation);
    // Create another Person object with some properties and a constructor and method to display its properties.
    function EnhancedPerson(firstName, lastName, age, occupation)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
        this.display = function()
        {
            console.log("This is an Enhanced Person " + this.firstName + ' ' + this.lastName + " who is of age " + this.age + " and is a " + this.occupation);
        };
    }
    let person5 = new EnhancedPerson("Paul", "McCartney", 78, "Musician");
    person5.display();
}

var input = 1;
while (input <= 10) {
 console.log(input);
 input++;
}