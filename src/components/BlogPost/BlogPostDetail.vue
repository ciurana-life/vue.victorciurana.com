<template>
    <article>
        <h2>{{blog_post.title}}</h2>
        <div v-html="compiledMarkdown"></div>
    </article>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js/lib/core';

export default {
    name: 'BlogPostDetail',
    data() {
        return {
            blog_post: {},
            loaded: false
        }
    },
    computed: {
        compiledMarkdown: function () {
            if (this.loaded) return marked(this.blog_post.content)
            return 'Loading ...'
        }
    },
    methods: {
        async fetchBlogPost() {
            const res = await fetch(`https://victorciurana.com/blog_api/blogposts/${this.$route.params.id}`)
            const data = await res.json()
            return data
        }
    },
    async created() {
        this.blog_post = await this.fetchBlogPost()
        this.loaded = true
        setTimeout(()=>{hljs.highlightAll() }, 1)
    }
}
</script>


<style lang="scss">
// Variables
$padding: 20px;

article {
    box-sizing: border-box;
    padding: $padding/2;
    max-width: 600px;
    width: 100%;
    pre {
        border: 1px solid lightgrey;
        border-radius: 3px;
        padding: $padding/2;;
        overflow: scroll;
    }
}
</style>