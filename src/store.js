import { reactive } from 'vue'

export const store = reactive({
    userSearchInput:'',
    searchResult:{
        movies:'',
        series:'',
    },
    trending:{
        movies:'',
        series:''
    },
    displayInfo: '',
});