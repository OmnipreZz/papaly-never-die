let li = ["https://vuejs.org/v2/guide/","https://github.com/15Dkatz/vue-guides"]
let app = new Vue({
  el: '#app',
  data: {
    title: 'PapaVue',
<<<<<<< HEAD
      link: "toto",
      linkArray: listLink
=======
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
>>>>>>> 2bd8629e5e3533215452b95c9cddcf82f29abf66
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
<<<<<<< HEAD
            this.linkArray.push(this.link)
=======
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
>>>>>>> 2bd8629e5e3533215452b95c9cddcf82f29abf66
        },
        removeLink: function (index) {
          this.linkArray.splice(index, 1);
        }
    }
})