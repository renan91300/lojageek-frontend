document.addEventListener('DOMContentLoaded', () => { 
    const table = document.getElementById('clientList');
    const clientsList = table.querySelector('tbody');

    async function loadClients() { 
        try {
            const response = await axios.get('http://localhost:8000/client');
            const clients = response.data.response;
            console.log(clientsList);
            
            clients.forEach(client => { 
                const tr = document.createElement('tr');
                tr.innerHTML = `
                        <td>${String(client.id).padStart(2, '0')}</td>
                        <td>${client.first_name}</td>
                        <td>${client.last_name}</td>
                        <td>${client.email}</td>
                        <td>${client.phone}</td>
                        <td>
                            <a href='' class='text-primary'><i class='fa fa-fw fa-edit'></i> Editar</a> | 
                            <a href='' class='text-danger'><i class='fa fa-fw fa-trash'></i> Apagar</a>
                        </td>
                    `;

                clientsList.appendChild(tr);
            });

            
        } catch (error) { 
            console.error('Erro ao carregar clientes:', error);
            alert('Erro ao carregar clientes. Tente novamente mais tarde.');

            //spam.document.getElementById('client-list').innerHTML = 'Erro ao carregar clientes. Tente novamente mais tarde.';
        }
    }

    loadClients();
});
