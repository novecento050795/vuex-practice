<template>
  <form @submit.prevent="createPost">
    <input type="text" v-model="title" placeholder="title">
    <input type="text" v-model="body" placeholder="body">
    <button>Create post</button>
  </form>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        title: "",
        body: "",
      }
    },
    methods: {
      ...mapMutations(['addPost']),
      createPost() {
        if (this.title && this.body) {
          this.addPost({
            id: Date.now(),
            title: this.title,
            body: this.body
          });

          this.body = this.title = ''
        }
        else {
          alert("Enter title and body")
        }
        
      }
    }
  }
</script>

<style scoped>
  input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
  }
  button:hover {
    cursor: pointer;
  }
</style>