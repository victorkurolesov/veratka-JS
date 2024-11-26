document.addEventListener('DOMContentLoaded', () => {
    const addContactForm = document.getElementById('add-contact-form');
    const photoInput = document.getElementById('photo');

    addContactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        const file = photoInput.files[0];
        let photoBase64 = null;

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            photoBase64 = await new Promise((resolve) => {
                reader.onloadend = () => {
                    resolve(reader.result);
                };
            });
        }

        saveNewContact({ name, phone, favorite: false, photo: photoBase64 });
        alert('контакт добавлен');
        window.location.href = 'index.html';
    });

    function saveNewContact(newContact) {
        console.log('новый контакт:', newContact);
    }
});