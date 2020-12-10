const Request = require('request')

describe('Server', () => {
  let server
  beforeAll(() => {
    server = require('../../index')
  })
  afterAll(() => {
    server.close()
  })

  describe('GET /api/posts/ Success', () => {
    let data = {}
    beforeAll((done) => {
      Request.get(
        'http://localhost:3001/api/posts',
        (error, response, body) => {
          if (error) {
            console.log('ERROR', error)
          } else {
            data.status = response.statusCode
            data.body = JSON.parse(body)
          }
          done()
        }
      )
    })
    it('Should have a successful status', () => {
      expect(data.status).toEqual(200)
    })
    it('Should return an array of objects', () => {
      expect(data.body.length).toBeGreaterThan(0)
    })
    it('Should have the expected return format', () => {
      const returnFormat = {
        userId: 'number',
        id: 'number',
        title: 'string',
        body: 'string'
      }
      Object.entries(data.body[0]).forEach(([key, value]) => {
        expect(typeof value).toEqual(returnFormat[key])
      })
    })
  })
})
