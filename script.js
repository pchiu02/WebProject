var app = new Vue({
    el: '#app',
    data: {
        open: false,
        text1: 'Happy 1 Year Sayanggg!!!',
        text2: 'I LOVE YOUU !!!'
    },
    methods: {
        click: function(){
            this.open = !this.open;
        }
    },
    watch:{
        open: function(){
            if(this.open == true){
                document.body.className = 'open';
            }
            else{
                document.body.className = '';
            }
        }
    }
})