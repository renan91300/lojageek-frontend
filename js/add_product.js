document.addEventListener('DOMContentLoaded', () => { //Interação com meu arquivo HTML
    const form = document.getElementById('form-product');

    form.addEventListener('submit', async (event) => {//ouvinte de evento ao formulário para o evento de submissão (submit).
        event.preventDefault();

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

       
            alert('Produto cadastrado com sucesso.');

        } catch (error) {
            console.error('Erro ao cadastrar produto:', error);
            alert('Erro ao cadastrar produto. Verifique os dados e tente novamente.');
        }
    });
});


