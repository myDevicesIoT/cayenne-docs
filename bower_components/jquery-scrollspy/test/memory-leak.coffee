drool = require('drool')
assert = require('assert')
path = require('path')

driver = drool.start
  chromeOptions: 'no-sandbox'

webdriver = drool.webdriver

drool.flow({
  repeatCount: 5
  setup: ->
    driver.get('file://' + path.join(__dirname, '/demo.html'))
  action: ->
    driver.findElement(webdriver.By.css('#add')).click()
    driver.findElement(webdriver.By.css('#remove')).click()
  assert: (after, initial) ->
    assert.equal(initial.nodes, after.nodes, 'node count should match')

}, driver)

driver.quit()