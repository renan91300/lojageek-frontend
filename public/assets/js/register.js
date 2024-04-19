function isEmpty(str) {
    return !str.trim().length;
}

function clearErrors(fields) {
    fields.forEach(field => {
        const error = field.querySelector('.error');

        error.innerHTML = ''
    });
}

function clearFields(fields) {
    fields.forEach(field => {
        const input = field.querySelector('input');

        input.value = '';
    });
}

function clearResults(success, error) {
    success.innerHTML = '';
    error.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('clientRegister');

    const form_success = document.querySelector('form .results .success');
    const form_error = document.querySelector('form .results .error');

    const fields = document.querySelectorAll('form .field');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        clearErrors(fields);
        clearResults(form_success, form_error);

        const first_name = document.getElementById('clientFirstName').value; 
        const last_name = document.getElementById('clientLastName').value;
        const cpf = document.getElementById('clientCPF').value;
        const phone = document.getElementById('clientPhone').value;
        const email = document.getElementById('clientEmail').value;
        const address = document.getElementById('clientAddress').value;
        const password = document.getElementById('clientPassword').value;
        const confirmPassword = document.getElementById('clientPasswordConfirm').value;

        let has_error = false;

        fields.forEach(field => {
            const input = field.querySelector('input');
            const error = field.querySelector('.error');

            if(isEmpty(input.value)) {
                has_error = true;
                error.innerHTML = 'Esse campo não pode estar vazio.</br>';
            }
        });

        if(has_error) return;

        try {
            await axios.post('http://localhost:8000/client', { 
                first_name,
                last_name,
                cpf,
                phone,
                email,
                address,
                password,
                confirmPassword
            });

            clearFields(fields);
            form_success.innerHTML = 'Cliente cadastrado com sucesso.';

        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);

            form_error.innerHTML = 'Erro ao cadastrar cliente, por favor, verifique os dados e tente novamente!';
        }
    });

});
