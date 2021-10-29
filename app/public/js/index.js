
const Offer = {
    data(){
        return{
            "books":[],
            "selectedBook": null,
            "bookForm": {}
        }
    },
    computed: {
        prettyBirthday(){
            return dayjs(this.person.dob.date).format('D MMM YYYY');
        }
    },
    
    methods: {
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },      
        fetchBookData() {
            fetch('/api/book/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
               console.error(err)
            })
        },
        postBook(evt) {
            console.log ("Test:", this.selectedBook);
          if (this.selectedBook) {
              this.postEditBook(evt);
          } else {
              this.postNewBook(evt);
          }
        },
        postEditBook(evt) {
          this.bookForm.id = this.selectedBook.id;

          console.log("Editing!", this.bookForm);
  
          fetch('api/book/update.php', {
              method:'POST',
              body: JSON.stringify(this.bookForm),
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              }
            })
            .then( response => response.json() )
            .then( json => {
              console.log("Returned from post:", json);
              // TODO: test a result was returned!
              this.books = json;
              
              // reset the form
              this.handleResetEdit();
            });
        },
        
        postNewBook(evt) {
             
            fetch('api/book/create.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                  "Accept": 'application/json'
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form                
                this.handleResetEdit();
              })
              .catch( err => {
                alert("Something went horribly wrong.");              
              });
        },

           postDeleteBook(o) {  
            if ( !confirm("Are you sure you want to delete " + o.title + " from the table?") ) {
                return;
            }  
            
            console.log("Delete!", o);
    
            fetch('api/book/delete.php', {
                method:'POST',
                body: JSON.stringify(o),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.handleResetEdit();
              });
          },

          handleEditBook(book) {
            this.selectedBook = book;
            this.bookForm = this.selectedBook;
          },
          handleResetEdit() {
               this.selectedBook = null;
               this.bookForm = {};
           }
         
    },
    created(){          //event book funtion "created()" by vue.js allows you to attach to the event
        
        this.fetchBookData();
    }        
      
}
Vue.createApp(Offer).mount('#offerApp');