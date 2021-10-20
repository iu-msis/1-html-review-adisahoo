
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
      
        fetchUserData(){
            fetch('https://randomuser.me/api/')
        .then(response => response.json())        
        .then((parsedJson) => {            
            console.log(parsedJson);
            this.person = parsedJson.results[0]
        })
        .catch( err => {
            console.error(err)
        })
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
              });
           } ,
           handleEditOffer(offer){
            this.selectedOffer = offer;
            this.offerForm = this.selectedOffer;
       },
       handleResetEdit() {
           this.selectedOffer = null;
           this.offerForm = {};
       }
    },
    created(){          //event book funtion "created()" by vue.js allows you to attach to the event
        
        this.fetchBookData();
    }        
      
}
Vue.createApp(Offer).mount('#offerApp');