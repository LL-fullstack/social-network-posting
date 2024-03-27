'use strict';

// user.js
export class User {
    constructor(id, name, userName, email) {
        this._id = id;
        this._name = name;
        this._userName = userName;
        this._email = email;
    }

    getInfo() {
        return `${this._name} (${this._userName}) - ${this._email}`;
    }
}

// subscriber.js
import { User } from './user.js';

export class Subscriber extends User {
    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this._pages = pages;
        this._groups = groups;
        this._canMonetize = canMonetize;
    }

    getInfo() {
        return `${super.getInfo()}, Pages: ${this._pages.join(', ')}, Groups: ${this._groups.join(', ')}, Can Monetize: ${this._canMonetize}`;
    }
}

// main.js
import { Subscriber } from './subscriber.js';

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get post text
    const postText = document.getElementById('postText').value;

    // Get uploaded image file
    const imageFile = document.getElementById('imageInput').files[0];
    
    // Create new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    // Display post text
    const textElement = document.createElement('p');
    textElement.textContent = postText;
    postElement.appendChild(textElement);
    
    // Display uploaded image
    if (imageFile) {
        const imageElement = document.createElement('img');
        imageElement.src = URL.createObjectURL(imageFile);
        postElement.appendChild(imageElement);
    }
    
    // Display post element
    document.getElementById('postsSection').appendChild(postElement);
});

// Example of creating a new Subscriber and displaying info in modal
const user = new Subscriber(1, 'John Doe', 'johndoe123', 'john@example.com', ['Page 1', 'Page 2'], ['Group 1', 'Group 2'], true);
const modalContent = document.createElement('p');
modalContent.textContent = user.getInfo();
document.getElementById('modal').appendChild(modalContent);
