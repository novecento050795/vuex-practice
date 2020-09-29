<template>
  <div>
    <AddPost />
    <h1>{{postCount}}</h1>
    <div 
      v-for="post in allPosts" 
      :key="post.id"
      class="post"
    >
      <h2>
        {{post.title}}
        <hr>
      </h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import AddPost from './AddPost'

  export default {
    name: 'Posts',
    computed: {
      ...mapGetters([
        'allPosts',
        'postCount'
      ])
    },
    mounted() {
      this.getPosts(3)
    },
    methods: {
      ...mapActions([
        'getPosts'
      ])
    },
    components: {
      AddPost
    }
  }
</script>

<style scoped>
  .post {
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }
  hr{
    width: 50%;
  }
</style>