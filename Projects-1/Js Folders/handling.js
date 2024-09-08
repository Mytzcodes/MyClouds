const handler = document.querySelector('.maintence-Handler');
let handlerCount = 1;

// Used The Logic 0 to off the Maintence and 1 to On Maintenance Pages
if (handlerCount === 0) {  
    handler.style.display = 'none';
} else if (handlerCount === 1 || handlerCount > 1) {
    handler.style.display = 'block';
}