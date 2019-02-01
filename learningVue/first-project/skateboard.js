var app = new Vue ({
    el:'#app',
    data: {
        product: 'SkateBoards',
        sources: ['amazon.com', 'Meetberrics.com', 'google.com/tonyHawkes'],
        sizes: [7.75,7.25,8.00],
          cart:0
    },
    methods: {
        addToCart: function () {
            this.cart+=1
        },
        removeCart() {
            this.cart-=1
        }
    },
    variants: [
        {
        sizes: 8.0,
        styles: 'pj deck'
        },
        
        {
        sizes: 7.75,
        styles: 'element'
        }

    ]

})
