export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../../assets/images/pizzaIcon.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../../assets/images/pizzaIcon.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../../assets/images/pizzaIcon.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../../assets/images/pizzaIcon.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../../assets/images/pizzaIcon.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Almaida',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZp9hRmabJBpfqLPKUKi_aGKDaKHUebajNlKKGg_LnKViTDaqdGxMd_h80HA12SlzInmg&usqp=CAU",
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Tasty ',
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWi1N0pAhsk0ALgaBUfr_PIF6jumqvd7Y3-g&usqp=CAU",
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaIcon.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaIcon.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaIcon.png')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Afgani Pulao',
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg",
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../../assets/images/pizzaDish.png')
                },
            ]
    
        }
    ]
}
