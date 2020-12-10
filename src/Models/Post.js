const axios = require('axios')
const Post = {
  /**
   * @returns {Bool || Array} In case of failure, will return false. In success, will return an array of objects describing posts.
   */
  getPosts: async () => {
    const postUrl = process.env.POSTS_URL
    const res = await axios.get(postUrl)
    if (res.status !== 200) {
      return false
    }
    return res.data
  }
}

module.exports = Post
