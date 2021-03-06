# Public RESTful APIs of Flipay (2020-01-10)

## General Information

  - The base endpoint: https://api.flipay.co
  - Timestamp is UTC in milliseconds.

## HTTP Status Code of Response

  - Follow the standard.

## Error Status

  - Flipay APIs use literal status instead of status code.
  - There is a message field to describe the situation if there is something wrong.
  - Examples:
    ```
    {
        status: 'successful',
        other_data_fields: ...
    }
    ```
    ```
    {
        status: 'failed',
        message: 'the reason of failure'
    }
    ```

## Endpoint Security

  - Public endpoint can be accessed freely.
  - Signed endpoint need APP key and signature to access.
  - APP key and signature are case sensitive.

## Signed Endpoint

  - `X-FLP-APPKEY` and `X-FLP-SIGNATURE` in HTTP header will be verified.
  - APP key and secret are generated and managed by admin dashboard.
  - Endpoint use SHA512 HMAC signature, which are generated by query string (for GET method) or request body (for POST/PUT/PATCH method) and use APP secret as encrypted key.
  - [Example](https://github.com/flipay/flipay-official-api-docs/blob/master/test-signed-endpoint-by-postman.md) of testing signed endpoint by Postman.

# Payment Endpoints

## Create Payment

  ```
  POST /api/v1/merchant/payments
  ```
  To create a new payment. If succeed, API returns payment `id` and `redirect_url` which can redirect to payment page.

  ### Paramenters:
  ```
    {
        "currency": "THB",
        "customer": {
            "phone_number": "66012345678"
        },
        "successful_url": "https://some.where.you.want.to/after_success",
        "canceled_url": "https://some.where.if.customer/press_cancel",
        "products": [
            {
                "amount": "1",
                "id": "foo_001",
                "name": "foo",
                "unit_price": "200"
            },
            {
                "amount": "2",
                "id": "bar_001",
                "name": "bar",
                "unit_price": "400"
            }
        ],
        "total_price": "1000.00"
    }
  ```
  
  ### Response:
  ```
    {
        "canceled_url": "https://some.where.if.customer/press_cancel",
        "currency": "THB",
        "id": "3e7fwwhYwdIRcwVa",
        "products": [
            {
                "amount": "1",
                "id": "foo_001",
                "name": "foo",
                "unit_price": "200"
            },
            {
                "amount": "2",
                "id": "bar_001",
                "name": "bar",
                "unit_price": "400"
            }
        ],
        "redirect_url": "https://pay.flipay.co/3e7fwwhYwdIRcwVa",
        "status": "pending",
        "successful_url": "https://some.where.you.want.to/after_success",
        "total_price": "1000.00"
    }
  ```
