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
        const textArea = field.querySelector('textArea');

        if((input !== null) && (input !== undefined)) input.value = '';
        if((textArea !== null) && (textArea !== undefined)) textArea.value = '';
    });
}

function clearResults(success, error) {
    success.innerHTML = '';
    error.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => { //Interação com meu arquivo HTML
    const form = document.getElementById('form-product');

    const form_success = document.querySelector('form .results .success');
    const form_error = document.querySelector('form .results .error');

    const fields = document.querySelectorAll('form .field');

    form.addEventListener('submit', async (event) => {//ouvinte de evento ao formulário para o evento de submissão (submit).
        event.preventDefault();

        clearErrors(fields);
        clearResults(form_success, form_error);

        const productCode = document.getElementById('productCode').value; //valores dos campos do formulário de entrada
        const productName = document.getElementById('productName').value;
        const productDescription = document.getElementById('productDescription').value;
        const productPrice = document.getElementById('productPrice').value;
        const productUnit = document.getElementById('productUnit').value;
        const productCategory = document.getElementById('productCategory').value;
        const productWeight = document.getElementById('productWeight').value;
        const productWidth = document.getElementById('productWidth').value;
        const productHeight = document.getElementById('productHeight').value;
        const productLength = document.getElementById('productLength').value;
        const productItemsPerBox = document.getElementById('productItemsPerBox').value;
        const productEAN = document.getElementById('productEAN').value;
        const productPromotion = document.getElementById('productPromotion').value;
        const productPromotionValue = document.getElementById('productPromotionValue').value;
        const productStock = document.getElementById('productStock').value;

        let has_error = false;

        fields.forEach(field => {
            const input = field.querySelector('input');
            const textArea = field.querySelector('textarea');

            const error = field.querySelector('.error');
            error.innerHTML = '';

            if((input !== null) && (input !== undefined) && isEmpty(input.value)) {
                has_error = true;
                error.innerHTML += 'Esse campo não pode estar vazio.</br>';
            }

            if((textArea !== null) && (textArea !== undefined) && isEmpty(textArea.value)) {
                has_error = true;
                error.innerHTML += 'Esse campo não pode estar vazio.</br>';
            }
        });

        if(has_error) return;
        
        try {
            await axios.post('http://localhost:8000/product', { //Utilizando a Biblioteca axios para envio (POST) de dados para o servidor 
                sku: productCode,
                name: productName,
                description: productDescription,
                price: productPrice,
                unit_type: productUnit,
                category: productCategory,
                weight: productWeight,
                width: productWidth,
                height: productHeight,
                length: productLength,
                qty_items_per_box: productItemsPerBox,
                ean: productEAN,
                promo: productPromotion,
                promo_discount: productPromotionValue,
                qty_stock: productStock
            });

       
            clearFields(fields);
            form_success.innerHTML = 'Produto cadastrado com sucesso.';

        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);

            form_error.innerHTML = 'Erro ao cadastrar produto. Verifique os dados e tente novamente.';
        }
    });
});


