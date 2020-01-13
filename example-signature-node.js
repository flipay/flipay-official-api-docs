const env_key_app_secret = 'app_secret'
const header_key_signature = 'X-FLP-SIGNATURE'

var app_secret = pm.environment.get(env_key_app_secret)
var hmac = CryptoJS.HmacSHA512(request.data, app_secret)
var signature = CryptoJS.enc.Base64.stringify(hmac)
pm.environment.set(header_key_signature, signature)