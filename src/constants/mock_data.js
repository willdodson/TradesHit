const MasterData = Object.freeze({
    Segments: [
        { displayName: 'Under $20' },
        { displayName: 'Under $50' },
        { displayName: 'Under $100' },
        { displayName: 'NO LIMIT' },
        { displayName: '' }
    ],
    Categories: [
        { displayName: 'Footwear',  segment: 'Fashion',     name: 'Footwear'},
        { displayName: 'Topwear',   segment: 'Fashion',     name: 'Topwear' },
        { displayName: 'Bottomwear',segment: 'Fashion',     name: 'Bottomwear' },
        { displayName: 'Mobiles',   segment: 'Electronics', name: 'Mobile' },
        { displayName: 'Laptops',   segment: 'Electronics', name: 'Laptop' },
        { displayName: 'Tablets',   segment: 'Electronics', name: 'Tablet' },
        { displayName: 'Novels',    segment: 'Books',       name: 'Novel' },
        { displayName: 'Magzines',  segment: 'Books',       name: 'Magzine' },
        { displayName: 'Academics', segment: 'Books',       name: 'Academics' },
        { displayName: 'Toys',      segment: 'Kids',        name: 'Toy' },
        { displayName: 'Baby Care', segment: 'Kids',        name: 'BabyCare' },
        { displayName: 'Sofa',      segment: 'Furniture',   name: 'Sofa' },
        { displayName: 'Bed',       segment: 'Furniture',   name: 'Bed' },
        { displayName: 'Curtains',  segment: 'Furniture',   name: 'Curtain' },
    ],
    Products: {
        

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
            {   displayName: 'Newest Trades',
                name: "new", 
                items: [
                    MasterData.Products.AdidasGOLETTOVI, 
                    MasterData.Products.AppleIphone7, 
                    MasterData.Products.CampusSutraFullSleeve
                ]
            },
            {   displayName: 'Hot Trades', 
                name: "hot", 
                items: [
                    MasterData.Products.BlackCoffeeSlimFitTrousers, 
                    MasterData.Products.LenovoPhab2Plus, 
                    MasterData.Products.Nexus6
                ]
            },
            {   displayName: 'Your Searches', 
                name: "your_searches", 
                items: [
                    MasterData.Products.Digit, 
                    MasterData.Products.WoodenBrownSofa, 
                    MasterData.Products.WoodenHeadRestBed
                ]
            },
        ]
    }
})();

const SectionPageData = function (sectionName) {
    return {
        name: sectionName,
        displayName: 'You are viewing - ' + sectionName,
        items: [
            MasterData.Products.AdidasGOLETTOVI,
            MasterData.Products.AdidasX,
            MasterData.Products.AlienwareCorei7,
            MasterData.Products.AngelsAndDemons,
            MasterData.Products.AppleIphone7,
            MasterData.Products.BigBear,
            MasterData.Products.BlackCoffeeSlimFitTrousers,
            MasterData.Products.BlueCurtains,
            MasterData.Products.CampusSutraSolidMenRoundNeck,
            MasterData.Products.ConceptsßofPhysics,
            MasterData.Products.Digit,
            MasterData.Products.EnteprenuerWorl,
            MasterData.Products.FlyingMachineRegularJeans,
            MasterData.Products.HarryPotter,
            MasterData.Products.IballSlideSnap,
            MasterData.Products.JhonsonBabyPowder,
            MasterData.Products.JohnPlayersSlimFitTrousers,
            MasterData.Products.JohnsonBabyOil,
            MasterData.Products.LenovoPhab2Plus,
            MasterData.Products.LenovoYoga3,
            MasterData.Products.LycanDzire,
            MasterData.Products.ManiacFullSleeveSolid
        ]
    }
}

const ProductDetailData = function (productDisplayName) {
    let productVariables = Object.keys(MasterData.Products);
    const requiredProduct = productVariables.find(variableName => {
        return MasterData.Products[variableName].displayName == productDisplayName;
    });
    return MasterData.Products[requiredProduct];
}

const LoginUser = (function () {
    return {
        firstName: 'Jack',
        lastName: 'Danieal',
        address: '',
        active: true,

    };
})();

export { 
        NavBarData, 
        LandingPageData, 
        SectionPageData, 
        ProductDetailData,
        LoginUser 
    };