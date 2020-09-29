export interface featureProducts {
    id: number,
    img: string,
    title: string,
    category: string,
    price: number,
    brand: string,
    product_code: string,
    reward_point: number,
    avaiblity: boolean,
    inCart: boolean,
    details: string,
    qty: number,
    addition_information: string,
    best_seller: boolean,
    related_imgs: relatedImgs[],
    related_products: relatedProducts[]
    sub_category?: string
}

interface relatedImgs {
    img: string
}

interface relatedProducts {
    id: number
}

export const saleTags: featureProducts[] = [
    {
        id: 18,
        img: "themes/images/ladies/10.jpg",
        title: "Ut wisi enim ad",
        category: "Commodo consequat",
        price: 17.25,
        brand: "Google",
        product_code: " Product 14",
        reward_point: 1,
        avaiblity: true,
        inCart: false,
        best_seller: true,
        qty: 1,
        related_products: [
            {
                id: 4
            },
            {
                id: 3
            },
            {
                id: 2
            }
        ],

        addition_information: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur sed alias dolores repellat vero quaerat quidem aliquam officia aliquid. Cumque ab nam doloremque praesentium labore possimus officiis error quos. Mollitia veritatis inventore earum ea molestias enim sint animi facere odit? Ipsa quidem explicabo quia minima dolor est nobis earum omnis. Facere doloribus cum nesciunt eaque numquam deserunt neque. Assumenda dolor labore nesciunt ratione, consequuntur quis doloremque iusto voluptatem repudiandae delectus, voluptas, atque aspernatur illum fuga. Officia, explicabo. Expedita ex ducimus rem, porro necessitatibus ad animi consectetur, quibusdam voluptates tenetur laudantium quidem quos illo fuga excepturi molestias sit, vel distinctio.`,
        details: `Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem`,
        related_imgs: [

        ]
    },
    {
        id: 19,
        img: "themes/images/ladies/laura-chouette-79UccCHqTJA-unsplash.jpg",
        title: "Quis nostrud exerci tation",
        category: "woman",
        price: 32.50,
        brand: "Apple",
        product_code: " Product 14",
        reward_point: 1,
        avaiblity: true,
        inCart: false,
        best_seller: true,
        qty: 1,
        sub_category: "White",
        related_products: [
            {
                id: 4
            },
            {
                id: 3
            },
            {
                id: 2
            }
        ],
        addition_information: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur sed alias dolores repellat vero quaerat quidem aliquam officia aliquid. Cumque ab nam doloremque praesentium labore possimus officiis error quos. Mollitia veritatis inventore earum ea molestias enim sint animi facere odit? Ipsa quidem explicabo quia minima dolor est nobis earum omnis. Facere doloribus cum nesciunt eaque numquam deserunt neque. Assumenda dolor labore nesciunt ratione, consequuntur quis doloremque iusto voluptatem repudiandae delectus, voluptas, atque aspernatur illum fuga. Officia, explicabo. Expedita ex ducimus rem, porro necessitatibus ad animi consectetur, quibusdam voluptates tenetur laudantium quidem quos illo fuga excepturi molestias sit, vel distinctio.`,
        details: `Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem`,
        related_imgs: [
            {
                img: "themes/images/ladies/laura-chouette-lyogsIO8cHE-unsplash.jpg"
            },
            {
                img: "themes/images/ladies/laura-chouette-qAeP0GPLeNE-unsplash.jpg"
            },
        ]
    },
    {
        id: 20,
        img: "themes/images/ladies/engin-akyurt-N7YaZf7szz0-unsplash.jpg",
        title: "Know exactly turned",
        category: " Quis nostrud",
        price: 14.20,
        brand: "Apple",
        product_code: " Product 14",
        reward_point: 1,
        avaiblity: true,
        inCart: false,
        best_seller: true,
        qty: 1,
        related_products: [
            {
                id: 4
            },
            {
                id: 3
            },
            {
                id: 2
            }
        ],
        addition_information: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur sed alias dolores repellat vero quaerat quidem aliquam officia aliquid. Cumque ab nam doloremque praesentium labore possimus officiis error quos. Mollitia veritatis inventore earum ea molestias enim sint animi facere odit? Ipsa quidem explicabo quia minima dolor est nobis earum omnis. Facere doloribus cum nesciunt eaque numquam deserunt neque. Assumenda dolor labore nesciunt ratione, consequuntur quis doloremque iusto voluptatem repudiandae delectus, voluptas, atque aspernatur illum fuga. Officia, explicabo. Expedita ex ducimus rem, porro necessitatibus ad animi consectetur, quibusdam voluptates tenetur laudantium quidem quos illo fuga excepturi molestias sit, vel distinctio.`,
        details: `Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem`,
        related_imgs: [

        ]
    },
    {
        id: 21,
        img: "themes/images/ladies/vladimir-fedotov-s76ACd3Am6A-unsplash.jpg",
        title: "You think fast",
        category: "woman",
        price: 31.45,
        brand: "Apple",
        product_code: " Product 14",
        reward_point: 1,
        avaiblity: true,
        inCart: false,
        best_seller: true,
        qty: 1,
        sub_category: "Black",
        related_products: [
            {
                id: 4
            },
            {
                id: 3
            },
            {
                id: 2
            }
        ],
        addition_information: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur sed alias dolores repellat vero quaerat quidem aliquam officia aliquid. Cumque ab nam doloremque praesentium labore possimus officiis error quos. Mollitia veritatis inventore earum ea molestias enim sint animi facere odit? Ipsa quidem explicabo quia minima dolor est nobis earum omnis. Facere doloribus cum nesciunt eaque numquam deserunt neque. Assumenda dolor labore nesciunt ratione, consequuntur quis doloremque iusto voluptatem repudiandae delectus, voluptas, atque aspernatur illum fuga. Officia, explicabo. Expedita ex ducimus rem, porro necessitatibus ad animi consectetur, quibusdam voluptates tenetur laudantium quidem quos illo fuga excepturi molestias sit, vel distinctio.`,
        details: `Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem`,
        related_imgs: [

        ]
    },
]

export const products: featureProducts[] = [
    {
        id: 22,
        img: "themes/images/ladies/rodolfo-marques-0j-y7NTkyKM-unsplash.jpg",
        title: "Know exactly",
        category: "woman",
        price: 22.30,
        brand: "Apple",
        product_code: " Product 14",
        reward_point: 1,
        avaiblity: true,
        inCart: false,
        best_seller: false,
        qty: 1,
        sub_category: "Black",
        related_products: [
            {
                id: 4
            },
            {
                id: 3
            },
            {
                id: 2
            }
        ],
        addition_information: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur sed alias dolores repellat vero quaerat quidem aliquam officia aliquid. Cumque ab nam doloremque praesentium labore possimus officiis error quos. Mollitia veritatis inventore earum ea molestias enim sint animi facere odit? Ipsa quidem explicabo quia minima dolor est nobis earum omnis. Facere doloribus cum nesciunt eaque numquam deserunt neque. Assumenda dolor labore nesciunt ratione, consequuntur quis doloremque iusto voluptatem repudiandae delectus, voluptas, atque aspernatur illum fuga. Officia, explicabo. Expedita ex ducimus rem, porro necessitatibus ad animi consectetur, quibusdam voluptates tenetur laudantium quidem quos illo fuga excepturi molestias sit, vel distinctio.`,
        details: `Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem`,
        related_imgs: [

        ]
    },
    {
        id: 23,
        img: "themes/images/ladies/anna1991anna-w4Wv58_cBXM-unsplash.jpg",
        title: "Ut wisi enim ad",
        category: "Commodo consequat",
        price: 40.25,
        brand: "Apple",
        product_code: " Product 14",
        reward_point: 1,
        avaiblity: true,
        inCart: false,
        best_seller: false,
        qty: 1,
        related_products: [
            {
                id: 4
            },
            {
                id: 3
            },
            {
                id: 2
            }
        ],
        addition_information: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur sed alias dolores repellat vero quaerat quidem aliquam officia aliquid. Cumque ab nam doloremque praesentium labore possimus officiis error quos. Mollitia veritatis inventore earum ea molestias enim sint animi facere odit? Ipsa quidem explicabo quia minima dolor est nobis earum omnis. Facere doloribus cum nesciunt eaque numquam deserunt neque. Assumenda dolor labore nesciunt ratione, consequuntur quis doloremque iusto voluptatem repudiandae delectus, voluptas, atque aspernatur illum fuga. Officia, explicabo. Expedita ex ducimus rem, porro necessitatibus ad animi consectetur, quibusdam voluptates tenetur laudantium quidem quos illo fuga excepturi molestias sit, vel distinctio.`,
        details: `Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem`,
        related_imgs: [

        ]
    },
    {
        id: 24,
        img: "themes/images/ladies/febrian-zakaria-hx-8B01BQ6Q-unsplash.jpg",
        title: "You think water",
        category: "World once",
        price: 10.45,
        brand: "Apple",
        product_code: " Product 14",
        reward_point: 1,
        avaiblity: true,
        inCart: false,
        best_seller: false,
        qty: 1,
        related_products: [
            {
                id: 4
            },
            {
                id: 3
            },
            {
                id: 2
            }
        ],
        addition_information: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur sed alias dolores repellat vero quaerat quidem aliquam officia aliquid. Cumque ab nam doloremque praesentium labore possimus officiis error quos. Mollitia veritatis inventore earum ea molestias enim sint animi facere odit? Ipsa quidem explicabo quia minima dolor est nobis earum omnis. Facere doloribus cum nesciunt eaque numquam deserunt neque. Assumenda dolor labore nesciunt ratione, consequuntur quis doloremque iusto voluptatem repudiandae delectus, voluptas, atque aspernatur illum fuga. Officia, explicabo. Expedita ex ducimus rem, porro necessitatibus ad animi consectetur, quibusdam voluptates tenetur laudantium quidem quos illo fuga excepturi molestias sit, vel distinctio.`,
        details: `Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem`,
        related_imgs: [
            {
                img: "themes/images/ladies/febrian-zakaria-NzG0fulVX64-unsplash.jpg"
            }
        ]
    },
    {
        id: 25,
        img: "themes/images/ladies/p-t-ohehdpoIKwI-unsplash.jpg",
        title: " Quis nostrud exerci",
        category: "Quis nostrud",
        price: 35.50,
        brand: "Apple",
        product_code: " Product 14",
        reward_point: 1,
        avaiblity: false,
        inCart: false,
        best_seller: false,
        qty: 1,
        related_products: [
            {
                id: 4
            },
            {
                id: 3
            },
            {
                id: 2
            }
        ],
        addition_information: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequuntur sed alias dolores repellat vero quaerat quidem aliquam officia aliquid. Cumque ab nam doloremque praesentium labore possimus officiis error quos. Mollitia veritatis inventore earum ea molestias enim sint animi facere odit? Ipsa quidem explicabo quia minima dolor est nobis earum omnis. Facere doloribus cum nesciunt eaque numquam deserunt neque. Assumenda dolor labore nesciunt ratione, consequuntur quis doloremque iusto voluptatem repudiandae delectus, voluptas, atque aspernatur illum fuga. Officia, explicabo. Expedita ex ducimus rem, porro necessitatibus ad animi consectetur, quibusdam voluptates tenetur laudantium quidem quos illo fuga excepturi molestias sit, vel distinctio.`,
        details: `Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas
        sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem
        ipsum quia dolor sit amet, consectetur, adipisci
        velit, sed quia non numquam eius modi tempora incidunt
        ut labore et dolore magnam aliquam quaerat voluptatem`,
        related_imgs: [

        ]

    },
]