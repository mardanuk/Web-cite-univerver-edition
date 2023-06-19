class Basket {
    render() {
        let summ = 0;
        const productsStore = localStore.getProducts();
        let htmlCatalog = '';
        CATALOG.forEach((element) => {

            if (!(productsStore.indexOf(element.id.toString())===-1))
            {
            summ += element.price;
            htmlCatalog +=
                `
    <div class="ad_card">
        <div class="ad_img_part ">
            <img class="ad_img" src="${element.img}">
        </div>
        <div class="ad_info_part">
            <div class="text basket_ad_name">
                ${element.name}
            </div>
            <div class="text basket_ad_cost">
                ${element.price}p.
            </div>
        </div>
    </div>
    `;
        }
    });
        document.getElementById('basket_body').innerHTML = htmlCatalog;
        document.getElementById('basket_total_cost').innerHTML = summ.toString()+'p.';
    }
}

const basket = new Basket();
basket.render();