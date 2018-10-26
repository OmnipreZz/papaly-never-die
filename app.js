let li = ["https://vuejs.org/v2/guide/","https://github.com/15Dkatz/vue-guides"]
let app = new Vue({
  el: '#app',
  data: {
    title: 'PapaVue',
      listCat: {},
      link: null,
      cat: null,
      linkArray: li,
      catError: false
    },
    mounted() {
      if (localStorage.getItem('saveLink')) {
        try {
          this.listCat = JSON.parse(localStorage.getItem('saveLink'));
        } catch(e) {
         // localStorage.removeItem('saveLink');
        }
      }
    },
    methods: {
        addCategorie(){
          this.listCat[this.cat] = [this.link]
          if(!this.link){
            this.listCat[this.cat].shift()
          }
          
          console.table(this.listCat)
          this.cat = ""
          localStorage.setItem('saveLink',JSON.stringify(this.listCat))
        },
        addLink(){
        if(this.cat){
          if(!this.listCat[this.cat]){
            this.listCat[this.cat] = [this.link]
          } else {
            this.listCat[this.cat].push(this.link)
          }
        } else {
          this.catError = true
          //faire une alerte flash
        } 

        localStorage.setItem('saveLink', JSON.stringify(this.listCat))
        this.link = "" 
          console.table(this.listCat)
        },
        removeLink: function (index) {
          this.linkArray.splice(index, 1);
        }
    }
})