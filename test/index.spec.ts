/* global describe it */
import chai from 'chai'
import Index from '../src/index'

chai.should()

describe('Index', () => {
  describe('constructor', () => {
    it('should NOT throw', () => {
      new Index()
    })
  })

  describe('.say', () => {
    const index = new Index()
    it('should be equal true', () => {
      index.say().should.to.be.equal('Hello World')
    })
  })
})
