import React from 'react';

import "./index.css";

const TipsList = () => {
  return (
    <div className='tips--container'>
      <ul>
        <li>
            The app is designed to help you find lost items. You can search for
            an item by category.
          </li>
        <li>
            Please be aware that the app is not a replacement for a real lost
            item. Also be aware of your own security when you contact
            someone. Be sure to meet the person in public and ask them to show
            you the item.
        </li>
        <li>
           If you have lost an item, you can create a post. To create a post
            you must be logged in. You will see a dropdown menu on the top right
            of the page after you login. Click the dropdown and you will see a pop, 
            enter the details of the lost item.
        </li>
      </ul>
    </div>
  )
}

export default TipsList;