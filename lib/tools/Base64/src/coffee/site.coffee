base64 = new Base64

$ = (id) ->
  return document.getElementById id

class Site
  init: () ->
    this.bindEvent()

  bindEvent: () ->
    $('encode').onclick = ->
      $('output').value = base64.encode $('input').value
    $('decode').onclick = =>
      $('output').value = base64.decode $('input').value

site = new Site
site.init()
