import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'John',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'Jane',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products: [
        {
            id: 1,
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: '70',
            brand: 'Nike',
            rating: '4.5',
            numReviews: '10',
            countInStock: '10',
            description: 'A very nice shirt'
        },
        {
            id: 2,
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: '70',
            brand: 'Nike',
            rating: '4.2',
            numReviews: '12',
            countInStock: '20',
            description: 'A very nice shirt'
        },
        {
            id: 3,
            name: 'Classic Shirt',
            slug: 'classic-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: '70',
            brand: 'Nike',
            rating: '4.2',
            numReviews: '12',
            countInStock: '20',
            description: 'A very nice shirt'
        },
        {
            id: 4,
            name: 'Slim Pants',
            slug: 'slim-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: '70',
            brand: 'Nike',
            rating: '4.5',
            numReviews: '10',
            countInStock: '10',
            description: 'A very nice shirt'
        },
        {
            id: 5,
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: '70',
            brand: 'Nike',
            rating: '4.5',
            numReviews: '10',
            countInStock: '10',
            description: 'A very nice shirt'
        },
        {
            id: 6,
            name: 'Classic Pants',
            slug: 'classic-pants',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: '70',
            brand: 'Nike',
            rating: '4.5',
            numReviews: '10',
            countInStock: '10',
            description: 'A popular pants'
        },
    ]
}

export default data