class Produts {
    handleSetLocationStorage(element, id) {
        const {pushProduct, products} = localStore.setProduct(id);
        if (pushProduct) {
            element.classList.add('btn_active');
            element.innerHTML="Удалить из корзины";
        } else {
            element.classList.remove('btn_active');
            element.innerHTML="Добавить в корзину";
        }
    }
    render() {
        const productsStore = localStore.getProducts();

        let htmlCatalog='';
        CATALOG.forEach((element)=> {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(element.id.toString())===-1) {
                activeText = "Добавить в корзину";
            } else {
                activeClass='btn_active';
                activeText = "Удалить из корзины";
            }
            htmlCatalog += 
        `<div class="ad_card">
            <div class = "ad_img_part content_ad ">
                <img class = "ad_img" src="${element.img}">
            </div>
            <div class = "ad_info_part content_ad">
                <div class="text content_text content_ad_name">
                    ${element.name}
                </div>
                <div class="text content_text content_ad_cost">
                    ${element.price}p.
                </div>
                <div class="text content_text content_ad_description">
                    ${element.description}
                </div>
                <button class = "text content_text blue_button ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${element.id}');">
                ${activeText}
                </button>
            </div>
        </div>`;
        });
        document.getElementById('content_body').innerHTML = htmlCatalog;
    }
}

const productsPage = new Produts();
productsPage.render();
