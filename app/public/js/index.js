
const Offer = {
    data(){
        return{
            "person":{}
        }
    },
    created(){          //event book funtion "created()" by vue.js allows you to attach to the event
        fetch('https://randomuser.me/api/')
        .then(response => response.json())        
        .then((parsedJson) => {            
            console.log(parsedJson);
            this.person = parsedJson.results[0]  
        })
        .catch( err => {
            console.error(err)
        })
    }          
      
}
Vue.createApp(Offer).mount('#offerApp');