document.getElementById('changeTextBtn').addEventListener('click', function() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Text has been changed dynamically!';
});

document.getElementById('toggleStyleBtn').addEventListener('click', function() {
    const textElement = document.getElementById('dynamicText');
    textElement.classList.toggle('highlight');
});

let elementCount = 0;
document.getElementById('addRemoveElementBtn').addEventListener('click', function() {
    const container = document.getElementById('elementContainer');
    if (elementCount === 0) {
        const newElement = document.createElement('p');
        newElement.id = 'newElement';
        newElement.textContent = 'This is a new element added dynamically!';
        container.appendChild(newElement);
        elementCount++;
        this.textContent = 'Remove Element';
    } else {
        const newElement = document.getElementById('newElement');
        if (newElement) {
            newElement.remove();
            elementCount--;
            this.textContent = 'Add Element';
        }
    }
});