const app = Vue.createApp({
    data() {
        return {
            showBooks : true,
            url : 'https://github.com/Harun1804',
            books : [
                {title : 'The Hobbit', author : 'J.R.R. Tolkien',img:'assets/1.jpeg', isFavorite : false},
                {title : 'Book 2', author : 'Author 2',img:'assets/2.jpeg',isFavorite:true},
                {title : 'Book 3', author : 'Author 3',img:'assets/3.jpeg',isFavorite:false},
            ]
        }
    },
    methods : {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toogleFavorite(book) {
            book.isFavorite = !book.isFavorite;
        }
    },
    computed : {
        filteredBooks (){
            return this.books.filter((book) => book.isFavorite)
        }
    }
});

app.mount('#app');
