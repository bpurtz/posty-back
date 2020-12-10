/**
  @type {GET}
*/
const Post = require('../../Models/Post')

module.exports = {
  path: '/api/posts/',
  function: async (_, res) => {
    const ret = await Post.getPosts()
    if (!ret) {
      return res.status(500).json({
        status: 'error',
        message: 'An unexpected error occured, please try again later.'
      })
    }
    res.json(ret)
  }
}
