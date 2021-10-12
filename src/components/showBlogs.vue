<template>
  <div v-theme="" id="show-blogs"> <!-- v-theme="wide" -->
      <h1>All Blog Articles</h1>
      <input type="search" v-model="search" placeholder="search blogs..">
      <div v-for="(blog, i) in filteredBlogs" :key="i" class="single-blog">
          <router-link :to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title }}</h2></router-link>
          <article>{{ blog.content | snippet }}</article>
      </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
        blogs: [],
        search: '',
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://vue-project-tutorial-default-rtdb.firebaseio.com/posts.json').then(function(data){
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for(let key in data) {
        data[key].id = key;
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    })
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      })
    }
  },
  filters: {
    // Second option for filters
    // 'snippet': function(value) {
    //   return value.slice(0, 100) + '...';
    // }

    // Third option for filters
    snippet(value){
      return value.slice(0, 100) + '...';
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      }
    }
  }
}
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>