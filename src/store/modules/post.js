import axios from 'axios'

export default {
  actions: {
    getPosts({ commit }, limit = 10) {
      axios
        .get('https://jsonplaceholder.typicode.com/posts?_limit=' + limit)
        .then(resp => {
          commit('updatePosts', resp.data)
        })
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    addPost(state, post) {
      state.posts.unshift(post)
    }
  },
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    postCount(state, getters) {
      return getters.allPosts.length
    }
  }
}