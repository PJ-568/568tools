# simple base64 encoder and decoder using `window.atob()` and `window.btoa()`
class Base64
    encode: (str) ->
      str = str.replace /\n/g, ''
                .replace /\s/g, ''
      try
        window.btoa str
      catch err
        alert err

    decode: (str) ->
      try
        JSON.stringify(JSON.parse(window.atob(str)), undefined, 2)
      catch err
        window.atob(str)
