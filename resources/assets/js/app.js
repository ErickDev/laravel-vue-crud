new Vue({
    el: '#crud',
    created: function () {
        this.getKeeps();
    },
    data: {
        keeps: []
    },
    methods: {
        getKeeps: function(){
            var urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
            });
        },
        deleteKeep: function (keep) {
            var urlKeep = 'tasks/' + keep.id;
            axios.delete(urlKeep).then(response => {
                this.getKeeps();
            });
        }
    }
});