document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('clientRegister');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
 
        const first_name = document.getElementById('clientFirstName').value; 
        const last_name = document.getElementById('clientLastName').value;
        const cpf = document.getElementById('clientCPF').value;
        const phone = document.getElementById('clientPhone').value;
        const email = document.getElementById('clientEmail').value;
        const address = document.getElementById('clientAddress').value;
        const password = document.getElementById('clientPassword').value;
        const confirmPassword = document.getElementById('clientPasswordConfirm').value;

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

            alert('Cliente cadastrado com sucesso.');

            //spam.document.getElementById('registerSuccess').innerHTML = 'Cliente cadastrado com sucesso.';

        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);

            alert('Erro ao cadastrar cliente, por favor, verifique os dados e tente novamente!');

            //spam.document.getElementById('registerError').innerHTML = 'Erro ao cadastrar cliente, por favor, verifique os dados e tente novamente!';

        }
    });

});
