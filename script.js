const checkswitch = document.querySelector("#checkswitch");
const basicPrice = document.querySelector("#basic-price");
const profPrice = document.querySelector("#prof-price");
const masterPrice = document.querySelector("#master-price");

const plans = [
    {
        plan: 'basic',
        annual_price: 199.99,
        monthly_price: 19.99,
        storage: 500,
        users: 2,
        upload: 3
    },
    {
        plan: 'professional',
        annual_price: 249.99,
        monthly_price: 24.99,
        storage: 1000,
        users: 5,
        upload: 10
    },
    {
        plan: 'master',
        annual_price: 399.99,
        monthly_price: 39.99,
        storage: 2000,
        users: 10,
        upload: 20
    }
];

checkswitch.addEventListener('click', () => {
    if (!checkswitch.checked) {
        basicPrice.innerHTML = plans[0].annual_price;
        profPrice.innerHTML = plans[1].annual_price;
        masterPrice.innerHTML = plans[2].annual_price;
    } else {
        basicPrice.innerHTML = plans[0].monthly_price;
        profPrice.innerHTML = plans[1].monthly_price;
        masterPrice.innerHTML = plans[2].monthly_price;
    }

})