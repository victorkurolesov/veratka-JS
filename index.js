document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('header_search');
    const contactsList = document.getElementById('contacts_list');

    let contacts = [];

    function renderContacts() {
        contactsList.innerHTML = '';
        
        const favorites = contacts.filter(contact => contact.favorite);
        favorites.forEach(renderContactCard);

        const others = contacts.filter(contact => !contact.favorite);
        others.forEach(renderContactCard);
    }

    function renderContactCard(contact) {
        const li = document.createElement('li');
        li.className = 'contact_card';

        const icon = document.createElement('div');
        icon.className = 'contact_icon';

        const details = document.createElement('div');
        details.className = 'contact_details';

        const name = document.createElement('p');
        name.className = 'contact_name';
        name.textContent = contact.name;

        const phone = document.createElement('p');
        phone.className = 'contact_phone';
        phone.textContent = contact.phone;

        const actions = document.createElement('div');
        actions.className = 'contact_action_buttons';

        const favoriteIcon = document.createElement('img');
        favoriteIcon.src = contact.favorite ? 'icons/favorite.png' : 'icons/unfavorite.png';
        favoriteIcon.alt = contact.favorite ? 'избранный контакт' : 'не избранный контакт';
        favoriteIcon.onclick = () => toggleFavorite(contact);

        const deleteIcon = document.createElement('img'); // Создаем элемент img для иконки удаления
        deleteIcon.src = 'icons/close.png';      
        deleteIcon.alt = 'удалить контакт';
        deleteIcon.onclick = () => deleteContact(contact);

        if (contact.photo) {
            const contactPhoto = document.createElement('img');
            contactPhoto.className = 'contact_photo';
            contactPhoto.src = contact.photo;
            contactPhoto.alt = `${contact.name}'s photo`;
            icon.appendChild(contactPhoto);
        } else {
            icon.style.backgroundColor = 'lightblue';
            icon.style.borderRadius = '50%';
        }
    
        details.appendChild(name);
        details.appendChild(phone);
    
        actions.appendChild(favoriteIcon);
        actions.appendChild(deleteIcon);
    
        li.appendChild(icon);
        li.appendChild(details);
        li.appendChild(actions);
    
        contactsList.appendChild(li);
    }

    function toggleFavorite(contact) {
        contact.favorite = !contact.favorite;
        renderContacts();
    }

    contacts = [
        {
            name: 'Иван Иванов',
            phone: '+74545454545',
            favorite: true,
            photo: 'img/dfcIySRcWiQ.jpg'
        },
        {
            name: 'Иван Иваныч',
            phone: '+78888888888',
            favorite: false,
            photo: 'img/dfcIySRcWiQ.jpg'
        },
        {
            name: 'Иванов Иваныч',
            phone: '+79999999999',
            favorite: false,
            photo: 'img/dfcIySRcWiQ.jpg'
        }
    ];
    renderContacts();
});

document.addEventListener('DOMContentLoaded', () => {
    const addContactForm = document.getElementById('add-contact-form');
});