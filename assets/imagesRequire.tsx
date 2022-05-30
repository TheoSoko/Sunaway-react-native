 interface imageList {
        mainImage: number
        images: Array<number>
    }

  export const imageList:Array<imageList> = [
    {
        mainImage: require('../assets/img/paris.jpg'),
        images: [
            require('../assets/img/parisSecondary.jpg'),
            require('../assets/img/parisMetro.jpg'),
            require('../assets/img/parisStreet.jpg'),
            require('../assets/img/parisTrash.jpg'),
        ]
    },
    {
        mainImage: require('../assets/img/cancun.jpg'),
        images: [

        ]
    },
    {
        mainImage: require('../assets/img/grece.jpg'),
        images: [

        ]
    },
    {
        mainImage: require('../assets/img/route66.jpg'),
        images: [

        ]
    },
]