// Get the button element
const myButton = document.getElementById("myButton");

// Add event listener to button
myButton.addEventListener('click', () => {
    console.log("Button was clicked");
});

<button id="myButton" class="btn-blue">Click me</button>
// Add event listener to button
myButton.addEventListener('click', e => {
    // Access properties of the event object
    console.log(e.target.id);        // ID of clicked element
    console.log(e.target.classList); // CSS class(es) of clicked element
});


document.getElementById('myNewButton').addEventListener('click', () => {
    console.log('Button clicked');
});

document.getElementById('inner').addEventListener('click', () => {
    console.log('Inner div clicked');
});

document.getElementById('outer').addEventListener('click', () => {
    console.log('Outer div clicked');
});


// **** STOPPING PROPAGATION ****

document.getElementById('myNewButton').addEventListener('click', e => {
    console.log('Button clicked - no parent event triggered');
    e.stopPropagation(); // Stops the event from bubbling up
});

// **** EVENT DELEGATION ****
const container = document.getElementById('buttonContainer');

// Add single event listener to container
container.addEventListener('click', e => {
    // Check if clicked element is a button (has CSS class of 'btn')
    if (e.target.classList.contains("btn")) {
        console.log(`You clicked button with this ID: ${e.target.id}`);
        // Add new CSS class to targetted button
        e.target.classList.add('btn-purple');
    }
});