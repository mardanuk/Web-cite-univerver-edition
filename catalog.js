const REPAIR = 0;
const PRODUCT = 1;

const CATALOG = [
    {
        id: 0,
        name: 'Колодки тормозные',
        description: 'Колодки тормозные предназначены для ...',
        type: PRODUCT,
        img: 'images/колодки_тормозные.png',
        price: 3000
    },
    {
        id: 1,
        name: 'Замена масла',
        description: 'Замена масла предполагает ...',
        type: REPAIR,
        img: 'images/замена масла.png',
        price: 2000
    },
    {
        id: 2,
        name: 'Диски для авто',
        description: 'Диски сделаны специально для ...',
        type: PRODUCT,
        img: 'images/диск пнг.png',
        price: 7000
    },
    {
        id: 3,
        name: 'Замена лобового стекла',
        description: 'В стоимость замены лобового стекла входит ...',
        type: REPAIR,
        img: 'images/замена_стекла.png',
        price: 15000
    },
    {
        id: 4,
        name: 'Шины зимние',
        type: PRODUCT,
        description: 'Зимние шины выполнены из ...',
        img: 'images/шины.png',
        price: 20000
    }
]