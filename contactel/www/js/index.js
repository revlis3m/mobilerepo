document.addEventListener('deviceready', function () {
    function getContacts() {
        var options = new ContactFindOptions();
        options.filter = "";
        options.multiple = true;
        var fields = ["displayName", "phoneNumbers"];

        navigator.contacts.find(fields, onSuccess, onError, options);

        function onSuccess(contacts) {
            var contactList = $('#contactList');
            contactList.empty();

            for (var i = 0; i < contacts.length; i++) {
                var contact = contacts[i];
                if (contact.displayName && contact.phoneNumbers && contact.phoneNumbers.length > 0) {
                    var listItem = `
                    <li>
                        <a href="#"><img src="img/utilisateur.png" alt="Contact" class="contactImage">
                        <div class="contactDetails">
                            <h3>${contact.displayName}</h3>
                            <p>${contact.phoneNumbers[0].value}</p>
                        </div>
                        </a>
                    </li>`;
                    contactList.append(listItem);
                }
            }
            contactList.listview('refresh');
        }

        function onError(contactError) {
            alert('Erreur lors de la récupération des contacts!');
        }
    }

    getContacts();

    $('#addContactForm').submit(function(event) {
        event.preventDefault();

        var contactName = $('#contactName').val();
        var contactNumber = $('#contactNumber').val();

        var newContact = navigator.contacts.create();
        newContact.displayName = contactName;
        newContact.nickname = contactName;

        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('mobile', contactNumber, true);
        newContact.phoneNumbers = phoneNumbers;

        newContact.save(onSaveSuccess, onSaveError);

        function onSaveSuccess() {
            alert('Contact ajouté avec succès!');
            addContactToList(contactName, contactNumber);
            $.mobile.changePage('#home');
        }

        function onSaveError(contactError) {
            alert('Erreur lors de l\'ajout du contact!');
        }

        function addContactToList(name, number) {
            var contactList = $('#contactList');
            var listItem = `
            <li>
                <a href="#"><img src="img/utilisateur.png" alt="Contact" class="contactImage">
                <div class="contactDetails">
                    <h3>${name}</h3>
                    <p>${number}</p>
                </div>
                </a>
            </li>`;
            contactList.append(listItem);
            contactList.listview('refresh');
        }
    });
});
