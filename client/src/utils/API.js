import axios from 'axios';
import filterParams from './filterParams';

export default {
    getArticles: function(params) {
            return axios.get('/api/nyt',{params: filterParams(params)});
    },

    saveArticle: function(articleData){
        return axios.post('/api/articles', articleData);
    },

    deleteArticle: function(id){
        return axios.delete('/api/articles/' + id);
    },

    getSavedArticles: function(){
        return axios.get('/api/articles');
    }
}