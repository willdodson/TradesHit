const MasterData = Object.freeze({
    Segments: [
        { displayName: 'Fashion' },
        { displayName: 'Electronics' },
        { displayName: 'Books' },
        { displayName: 'Kids' },
        { displayName: 'Furniture' }
    ],
    Categories: {
        Footwear: { displayName: 'Footwear', segment: 'Fashion' },
        Topwear: { displayName: 'Topwear', segment: 'Fashion' },
        Bottomwear: { displayName: 'Bottomwear', segment: 'Fashion' },
        Mobile: { displayName: 'Mobiles', segment: 'Electronics' },
        Laptop: { displayName: 'Laptops', segment: 'Electronics' },
        Tablet: { displayName: 'Tablets', segment: 'Electronics' },
        Novel: { displayName: 'Novels', segment: 'Books' },
        Magzine: { displayName: 'Magzines', segment: 'Books' },
        Academics: { displayName: 'Academics', segment: 'Books' },
        Toy: { displayName: 'Toys', segment: 'Kids' },
        BabyCare: { displayName: 'Baby Care', segment: 'Kids' },
        Sofa: { displayName: 'Sofa', segment: 'Furniture' },
        Bed: { displayName: 'Bed', segment: 'Furniture' },
        Curtain: { displayName: 'Curtains', segment: 'Furniture' },
    },
    Products: {
        // Footwear
        AdidasGOLETTOVI:    { category: 'Footwear', displayName: 'Adidas GOLETTO VI', price: 2399, description: 'Synthetic Leather | Blue'},
        AdidasX:            { category: 'Footwear', displayName: 'Adidas X 16.4 FXG Football Shoes  (Red)', price: 1599, description: 'Synthetic Leather | Blue'},
        PumaEvoSPEED :      { category: 'Footwear', displayName: 'Puma evoSPEED 17.4 FG Football Shoes ', price: 3299, description: 'Synthetic Leather | Blue'},
        LycanDzire:         { category: 'Footwear', displayName: 'Lycan Dzire Football Shoes  (Yellow)', price: 7399, description: 'Synthetic Leather | Blue'},
        // Topwear
        'SayitloudSolidMenRoundNeck':   { category: 'Topwear', displayName: 'Sayitloud Solid Men\'s Round Neck Grey, Black T-Shirt', price: 522, description: ''},
        'CampusSutraSolidMenRoundNeck': { category: 'Topwear', displayName: 'Campus Sutra Solid Men\'s Round Neck Blue T-Shirt', price: 242, description: ''},
        'CampusSutraFullSleeve':        { category: 'Topwear',displayName: 'Campus Sutra Full Sleeve Solid Men\'s Jacket', price: 672, description: ''},
        'ManiacFullSleeveSolid':        { category: 'Topwear',displayName: 'Maniac Full Sleeve Solid Men\'s Jacket', price: 1222, description: ''},
        // BottomWear
        'JohnPlayersSlimFitTrousers':   { category: 'Bottomwear', displayName: 'John Players Slim Fit Men\'s Beige Trousers', price: 892, description: ''},
        'UnitedColorsofBenettonJeans':  { category: 'Bottomwear', displayName: 'United Colors of Benetton Slim Men\'s Jeans', price: 782, description: ''},
        'BlackCoffeeSlimFitTrousers':   { category: 'Bottomwear', displayName: 'Black Coffee Slim Fit Men\'s Grey Trousers', price: 672, description: ''},
        'FlyingMachineRegularJeans':    { category: 'Bottomwear', displayName: 'Flying Machine Regular Men\'s Blue Jeans', price: 2122, description: ''},
        // Mobiles
        AppleIphone7:       { category: 'Mobile', displayName: 'Apple Iphone 7 (Black, 32 Gb)', price: 47999, description: ''},
        SamsungGalaxyC9Pro: { category: 'Mobile', displayName: 'Samsung Galaxy C9 Pro (Gold, 64 GB)  (6 GB RAM)', price: 34500, description: '16MP Rear Camera | 16MP Front Camera'},
        SamsungGalaxyAlpha: { category: 'Mobile', displayName: 'Samsung Galaxy Alpha (Frosted Gold, 32 GB)  (2 GB RAM)', price: 39999, description: '12MP Rear Camera | 2.1MP Front Camera'},
        Nexus6:             { category: 'Mobile', displayName: 'Nexus 6 (Cloud White, 32 GB)  (3 GB RAM)', price: 32999, description: '13MP Rear Camera | 2MP Front Camera'},
        // Laptop
        'Apple MacBook Air Core':   { category: 'Laptop', displayName: 'Apple MacBook Air Core i5 5th gen - (8 GB/256 GB SSD/OS X El Capitan) MMGG2HN/A  (13.3 inch, Silver)', price: 96600, description: ''},
        'AlienwareCorei7':          { category: 'Laptop', displayName: 'Alienware Core i7 7th Gen - (16 GB/1 TB HDD/512 GB SSD/Windows 10 Home/8 GB Graphics) 15 Notebook  (15.6 inch, Anodized Aluminum, 3.49 kg)', price: 203200, description: ''},
        'Dell Inspiron 5000Corei7': { category: 'Laptop', displayName: 'Dell Inspiron 5000 Core i7 6th Gen - (8 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) 5559 Notebook  (15.6 inch, Black Gloss, 2.4 kg)', price: 65322, description: ''},
        'LenovoYoga3':              { category: 'Laptop', displayName: 'Lenovo Yoga 3 Pro Core M 5th Gen - (8 GB/512 GB SSD/Windows 10 Home) Yoga 3 Pro 2 in 1 Laptop  (13.3 inch, Golden, 1.20 kg)', price: 122289, description: ''},
        // Tablets
        'LenovoPhab2Plus':  { category: 'Tablet', displayName: 'Lenovo Phab 2 Plus (Champagne Gold, 32 GB)  (3 GB RAM)', price: 14444, description: ''},
        'SwipeStrike':      { category: 'Tablet', displayName: 'Swipe Strike 4G VoLTE 16 GB 7 inch with Wi-Fi+4G  (Gold)', price: 12222, description: ''},
        'IballSlideSnap':   { category: 'Tablet', displayName: 'Iball Slide Snap 4G2 16 GB 7 inch with Wi-Fi+4G  (Biscuit Gold)', price: 11242, description: ''},
        // Novel
        'HarryPotter':      { category: 'Novel', displayName: 'Harry Potter and the Cursed Child - Parts I and II  (Hardcover, J K Rowling, Jack Thorne, John Tiffany)', price: 462, description: ''},
        'AngelsAndDemons':  { category: 'Novel', displayName: 'Angels And Demons (L)  (English, Paperback, Dan Brown)', price: 462, description: ''},
        // Magzine
        'Digit':            { category: 'Magzine', displayName: 'Digit', price: 162, description: ''},
        'EnteprenuerWorl':  { category: 'Magzine', displayName: 'Enteprenuer\'s World', price: 212, description: ''},
        // Academics
        'QuantitativeAptitude': { category: 'Academics', displayName: 'Quantitative Aptitude For Competitive Examinations  (English, Paperback, R. S. Aggarwal)', price: 412, description: ''},
        'ConceptsßofPhysics':   { category: 'Academics', displayName: 'Concepts of Physics (Volume - 1) 1st Edition  (English, Paperback, H C Verma)', price: 832, description: ''},
        // Sofa
        'WhiteMarbleSofa': { category: 'Sofa', displayName: 'Marble Sofa ( White )', price: 40002, description: ''},
        'WoodenBrownSofa': { category: 'Sofa', displayName: 'Wooden Brown Sofa', price: 56332, description: ''},
        // bed
        'FoldableBed':          { category: 'Bed', displayName: 'Foldable Bed ( Black | Good storage )', price: 12122, description: ''},
        'WoodenHeadRestBed':    { category: 'Bed', displayName: 'Wooden Head Rest Bed ( Brown )', price: 89332, description: ''},
        // curtain
        'BlueCurtains':     { category: 'Curtain', displayName: 'Blue Curtains', price: 1222, description: ''},
        'WhiteCurtains':    { category: 'Curtain', displayName: 'White Curtains', price: 982, description: ''},
        // Toy
        'BigBear': { category: 'Toy', displayName: 'Teddy Bear ( Brown )', price: 923, description: ''},
        'Pikachu': { category: 'Toy', displayName: 'Pikachu ( Pokemon )', price: 439, description: ''},
        // Baby Care
        'JohnsonBabyOil':       { category: 'BabyCare', displayName: 'Jhonson baby Oil', price: 122, description: ''},
        'JhonsonBabyPowder':    { category: 'BabyCare', displayName: 'Jhonson baby powder', price: 72, description: ''},
        

    }
});

const NavBarData = (function fetchNavData() {
    MasterData.Segments.map(segment => {
        let categoryUnderSegment = MasterData.Categories.filter(category => category.segment === segment.displayName);
        return {
            displayName: segment.displayName,
            categories: categoryUnderSegment            
        }
    })
})();

const LandingPageData = (function fetchLandingPageData() {
    return {
        sections: [
            { displayName: 'Top Deals', items: [
                MasterData.Products.AdidasGOLETTOVI, 
                MasterData.Products.AppleIphone7, 
                MasterData.Products.CampusSutraFullSleeve
                ]
            },
            { displayName: 'Top Selling', items: [
                MasterData.Products.BlackCoffeeSlimFitTrousers, 
                MasterData.Products.LenovoPhab2Plus, 
                MasterData.Products.Nexus6
                ]
            },
            { displayName: 'Your searches', items: [
                MasterData.Products.Digit, 
                MasterData.Products.WoodenBrownSofa, 
                MasterData.Products.WoodenHeadRestBed
                ]
            },
        ]
    }
})();

export { NavBarData, LandingPageData };