
const Offer = {
    data(){
        return{
            "person":{
                picture:{},
                name:{},
                location:{},
                dob:{}
            }
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
        }
    },
    created(){          //event book funtion "created()" by vue.js allows you to attach to the event
        this.fetchUserData();
    }        
      
}
Vue.createApp(Offer).mount('#offerApp');