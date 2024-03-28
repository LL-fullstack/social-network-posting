'use strict';

import { User, Subscriber } from './classes.js';
import { getCurrentDate } from './utility.js';
import { isEmpty } from './utility.js';

document.getElementById('postButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    // Get post text
    const postText = document.getElementById('postText').value;

    // Get uploaded image file
    const imageFile = document.getElementById('imageInput').files[0];

    if(isEmpty(postText) && isEmpty(imageFile)) {
        return;
    }

    // Create the post container
    let postContainer = document.createElement('div');
    postContainer.classList.add('post-section');
    postContainer.classList.add('post-container');

    // Create the first post row
    let postRowHeader = document.createElement('div');
    postRowHeader.classList.add('post-row');

    // Create the user info container
    let userInfoContainer = document.createElement('div');
    userInfoContainer.classList.add('user-info-container');

    // Create the user image
    let userImg = document.createElement('img');
    userImg.src = "./assets/media/user.png";
    userImg.alt = "Sample img";
    userImg.id = "userPic";

    // Create the user info
    let userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    userInfo.textContent = "Lu Liu";

    // Append user image and user info to user info container
    userInfoContainer.appendChild(userImg);
    userInfoContainer.appendChild(userInfo);

    // Create the post date
    let postDate = document.createElement('div');
    postDate.classList.add('post-date');
    postDate.textContent = getCurrentDate();

    // Append user info container and post date to the first post row
    postRowHeader.appendChild(userInfoContainer);
    postRowHeader.appendChild(postDate);

    // Create the second post row
    let postRowContent = document.createElement('div');
    postRowContent.classList.add('post-row');

    // Create the paragraph element
    let paragraph = document.createElement('p');
    paragraph.textContent = postText;

    // Append paragraph to the second post row
    postRowContent.appendChild(paragraph);
    console.log(imageFile);
    let postRowImage = document.createElement('div');
    if (imageFile != null && imageFile != undefined && imageFile != "") {

        
        postRowImage.classList.add('post-row');
    
        // Create the image element
        let postImage = document.createElement('img');
       // postImage.src = "./assets/media/post-pic.jpg";
        postImage.alt = "Uploaded Image";
       postImage.id = "post-pic";
        let reader = new FileReader();
        reader.onload = function() {
            postImage.src = reader.result;
           
        };
        reader.readAsDataURL(imageFile);
         postRowImage.appendChild(postImage);
    }

    // Append all post rows to the post container
    postContainer.appendChild(postRowHeader);
    postContainer.appendChild(postRowContent);
    postContainer.appendChild(postRowImage);

    // Append post container to the document body
    document.body.appendChild(postContainer);
    document.getElementById('postsSection').insertBefore(postContainer, postsSection.firstChild);
    
    // clear everything after post
    document.getElementById('postText').value = '';
    document.getElementById('fileLabel').innerHTML = '';
    document.getElementById('imageInput').value = '';
});


// Get the file input element and the file label element
let imageInput = document.getElementById('imageInput');
let fileLabel = document.getElementById('fileLabel');

// Add event listener to the file input
imageInput.addEventListener('change', function() {
    // Check if files are selected
    if (imageInput.files.length > 0) {
        // Get the filename of the first selected file
        var filename = imageInput.files[0].name;
        // Update the file label with the filename
        fileLabel.textContent = filename;
    }
});



// Example of creating a new Subscriber and displaying info in modal
const subscriber = new Subscriber(1, 'John Doe', 'johndoe123', 'john@example.com', ['Page 1', 'Page 2'], ['Group 1', 'Group 2'], true);

const modalContent = document.createElement('p');
modalContent.textContent = subscriber.getInfo();
document.getElementById('modal').appendChild(modalContent);

const user2 = new User(1, 'John Doe', 'johndoe123', 'john@example.com');
console.log(subscriber.getInfo()); // Accessing name using the getter method

