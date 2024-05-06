import $ from 'jquery';
import debounce from 'lodash/debounce';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<Button>Click here to get started</Button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
    // Get the paragraph element with id='count'
    const countParagraph = document.getElementById('count');
    
    // Initialize counter if not exists
    if (!updateCounter.counter) {
        updateCounter.counter = 0;
    }
    
    // Increment the counter
    updateCounter.counter++;
    
    // Update the content of the paragraph element
    countParagraph.textContent = `${updateCounter.counter} clicks on the button`;
}
