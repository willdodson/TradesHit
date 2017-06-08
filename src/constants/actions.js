const LandingPageActions = {
    // Landing page container actions
    FetchLandingPageStart: 'FetchLandingPageStart',
    FetchLandingPageSuccess: 'FetchLandingPageSuccess',
    FetchLandingPageFail: 'FetchLandingPageFail'
}

const SectionPageActions = {
// Section container actions  
    FetchSectionPageContentStart: 'FetchSectionPageContentStart',
    FetchSectionPageContentSuccess: 'FetchSectionPageContentSuccess',
    FetchSectionPageContentFail: 'FetchSectionPageContentFail'
}

const ProductDetailPageActions = {
// Section container actions  
    FetchProductDetailContentStart: 'FetchProductDetailContentStart',
    FetchProductDetailContentSuccess: 'FetchProductDetailContentSuccess',
    FetchProductDetailContentFail: 'FetchProductDetailContentFail'
}

const SignUpActions = {
    SignupStart: 'SignupStart',
    SignupSuccess: 'SignupSuccess',
    SignupFail: 'SignupFail'
}

const SignInActions = {
    SignInStart: 'SignInStart',
    SignInSuccess: 'SignInSuccess',
    SignInFail: 'SignInFail'
}

const UpdateUserProfileActions = {
    UpdateProfileStart: 'UpdateProfileStart',
    UpdateProfileSuccess: 'UpdateProfileSuccess',
    UpdateProfileEnd: 'UpdateProfileEnd'
}

export {
        LandingPageActions, 
        SectionPageActions, 
        ProductDetailPageActions,
        SignUpActions,
        SignInActions,
        UpdateUserProfileActions 
    };