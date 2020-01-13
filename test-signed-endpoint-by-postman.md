# Test Signed Endpoint by Postman

## 5 Steps to finish the testing of the signed endpoint of Flipay:
![screenshot_01](https://user-images.githubusercontent.com/13026209/72253781-e536e200-3634-11ea-97ae-19e99e4eba2a.png)

  1. Set the environment variables. We need four variables for this example, as shown in the picture below:
    ![screenshot_02](https://user-images.githubusercontent.com/13026209/72253782-e5cf7880-3634-11ea-8ba0-c6ca98291c94.png)

     - host: It's the host name of Flipay API.
     - app_key: Fill the APP key which is generated from dashboard console.
     - app_secret: Fill the APP secret.
     - X-FLP-SIGNATURE: Keep it empty. This filed will be filled by the testing script.

  2. Fill the endpoint path and choose the HTTP method.

  3. Set the HTTP headers:
    ![screenshot_03](https://user-images.githubusercontent.com/13026209/72253783-e5cf7880-3634-11ea-8f0e-c1af33257781.png)

  4. Fill the body (if it's needed).
    ![screenshot_04](https://user-images.githubusercontent.com/13026209/72253784-e5cf7880-3634-11ea-9528-4098ecadcc28.png)


  5. Paste the [pre-request script](https://github.com/flipay/flipay-official-api-docs/blob/master/example-signature-node.js).
    ![screenshot_05](https://user-images.githubusercontent.com/13026209/72253785-e6680f00-3634-11ea-8405-b1d0a6b61869.png)

  6. Send the request. If everything is fine, you will get the result live below:
    ![screenshot_06](https://user-images.githubusercontent.com/13026209/72253787-e6680f00-3634-11ea-8dd0-d5ac6988bcb2.png)
