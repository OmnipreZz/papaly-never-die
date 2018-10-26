let listLink = ["https://vuejs.org/v2/guide/","https://github.com/15Dkatz/vue-guides"]
let app = new Vue({
  el: '#app',
  data: {
    title: 'PapaVue',
      link: "toto",
      linkArray: listLink
    },
    methods: {
        addLink(){
            this.linkArray.push(this.link)
        },
        removeLink: function (index) {
          this.linkArray.splice(index, 1);
        }
    },
})