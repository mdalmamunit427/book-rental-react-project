const initialState = {
    cartData: [],
    bookmarkedBooks: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartData: [...state.cartData, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartData: state.cartData.filter(x => x.id !== action.payload.id)
            }
        case "TOGGLE_BOOKMARK":
            const bookIndex = state.bookmarkedBooks.findIndex(book => book.id === action.payload.id);
            if (bookIndex === -1) {
                // If the book is not already bookmarked, add it to the bookmarked list
                return {
                    ...state,
                    bookmarkedBooks: [...state.bookmarkedBooks, action.payload]
                }
            } else {
                // If the book is already bookmarked, remove it from the bookmarked list
                const updatedBookmarkedBooks = [...state.bookmarkedBooks];
                updatedBookmarkedBooks.splice(bookIndex, 1);
                return {
                    ...state,
                    bookmarkedBooks: updatedBookmarkedBooks
                }
            }
        default:
            return state;
    }
}

export {
    initialState,
    cartReducer
}
