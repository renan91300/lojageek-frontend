function deleteProduct(product_id) {
    try {
        axios.delete('http://localhost:8000/product/'+product_id);
    } catch (error) { 
        console.error('Erro ao excluir produto:', error);
        document.getElementById('span-error').innerHTML = 'Erro ao excluir produto. Tente novamente mais tarde.';
    }
    
}

document.addEventListener('DOMContentLoaded', () => { //Interação com meu arquivo HTML
    const table_body_products = document.getElementById('table_body_products');

    async function carregarProdutos() { //Requisição GET para obter a lista atualizada de produtos do servidor.
        try {
            const response = await axios.get('http://localhost:8000/product');
            const products = response.data; //Armazenando na variável produtos
            console.log(products);
            
            //listaAnimais.innerHTML = ''; //Limpando a lista de produtos e renderizando nova lista

            products.forEach(product => { //cria um novo elemento <tr> para cada produto
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${String(product.id).padStart(2, '0')}</td>
                    <td>
                        <div class="icon"></div>
                    </td>
                    <td>${product.sku}</td>
                    <td>${product.name}</td>
                    <td>${product.qty_stock}</td>
                    <td>
                        <a href="" class="text-primary"><i class="fa fa-fw fa-edit"></i> Editar</a> | 
                        <a href="" onclick="deleteProduct(`+product.id+`)" class="text-danger"><i class="fa fa-fw fa-trash"></i> Apagar</a>
                    </td>
                `;
                table_body_products.appendChild(tr);
            });

        } catch (error) { //Se ocorrer algum erro durante a requisição GET
            console.error('Erro ao carregar produtos:', error);
            document.getElementById('span-error').innerHTML = 'Erro ao carregar produtos. Tente novamente mais tarde.';
        }
    }

    carregarProdutos();
});


