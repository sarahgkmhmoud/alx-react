// Import jQuery
import $ from 'jquery';

// Function to add paragraphs to the body
function addParagraphsToBody() {
    // Add first paragraph
    $('body').append('<p>Holberton Dashboard</p>');
    
    // Add second paragraph
    $('body').append('<p>Dashboard data for the students</p>');

    // Add third paragraph
    $('body').append('<p>Copyright - Holberton School</p>');
}

// Call the function to add paragraphs to the body when the DOM is ready
$(document).ready(function() {
    addParagraphsToBody();
});
