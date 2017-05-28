# react-ecommerce

Things that didn't worked well:
1. Design and Architecture issue#1:
    > Every feature ( header, profile ) has their own actioncreators. Ex - Update profile action belongs to profile screen.

    Problem: This approach could not scale well, because, updating an user may require changes in other features ( header, profile, Cart, Account etc ). So, in order to copy changes in all of them, we need to listen to "update ( or any arbitrary event)" in all the affecting components. This will be cumbersome in big/medium sized project. 

    Solution: Action creators should belong to entities instead of feature.
2. Design and Architecture issue#2:
