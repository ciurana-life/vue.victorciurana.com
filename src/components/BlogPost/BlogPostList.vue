<template>
    <ul>
        <li v-for="blog_post in blog_posts" :key="blog_post.id">
            <h2>{{blog_post.title}}</h2>
            <time :datetime="blog_post.created_at">{{dateString(blog_post.created_at)}}</time>
            <hr>
            <router-link class="link" :to="`/blogposts/${blog_post.id}`">READ</router-link>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'BlogPostList',
  data() {
    return {
        blog_posts: [],
    }
  },
  methods: {
    async fetchBlogPosts() {
        const res = await fetch('https://victorciurana.com/blog_api/blogposts')
        const data = await res.json()
        return data
    },
    dateString(dateTimeStr) {
      return new Date(dateTimeStr).toDateString()
    }
  },
  async created() {
      this.blog_posts = await this.fetchBlogPosts()
  }
}
</script>

<style scoped>
ul li {
  margin: 10px;
}
.link {
  color: brown;
  font-weight: bolder;
  letter-spacing: 2px;
}
</style>
