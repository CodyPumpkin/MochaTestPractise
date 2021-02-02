
## MochaTestPractise Introduction
```
# MochaTestPractise is an automation framework for api testing which currently only supports http protocol.
```
## Project Tree
```
MochaTestPractise
├─ .DS_Store
├─ .babelrc
├─ config
│  └─ host.js
├─ httpClient
│  └─ httpClientWrapper.js
├─ package-lock.json
├─ package.json
├─ test
│  ├─ .DS_Store
│  ├─ bank.test.js
│  ├─ data
│  │  └─ customerBankInfoData.json
│  ├─ mocha.opt
│  └─ mochawesome-report
│     ├─ assets
│     │  ├─ MaterialIcons-Regular.woff
│     │  ├─ MaterialIcons-Regular.woff2
│     │  ├─ app.css
│     │  ├─ app.js
│     │  ├─ roboto-light-webfont.woff
│     │  ├─ roboto-light-webfont.woff2
│     │  ├─ roboto-medium-webfont.woff
│     │  ├─ roboto-medium-webfont.woff2
│     │  ├─ roboto-regular-webfont.woff
│     │  └─ roboto-regular-webfont.woff2
│     ├─ mochawesome.html
│     └─ mochawesome.json
└─ util
   └─ getCaseDesc.js

```
##### Basic Usage

### Configuration
* You should install the below tools based on Node.js: 
    * [Mocha](https://github.com/mochajs/mocha/blob/master/README.md) Simple, flexible, fun JavaScript test framework for Node.js & The Browser, it is used for collecting tests and assertion.
    * [chai](https://github.com/chaijs/chai/blob/master/README.md) A BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
    * [axios]](https://github.com/axios/axios/blob/master/README.md) Promise based HTTP client for the browser and node.js.
    * [mochawesome](https://github.com/adamgruber/mochawesome/blob/master/README.md) A Gorgeous HTML/CSS Reporter for Mocha.js.
* Then configure the host of the test env at /config/host.js

### Add test cases 
* Update the json file at /test/data (csv file should be supported in future.)
* Sample:
<!-- {
        "name":"Sucess, send with valid data(US + SWIFT code + mandatory data)",     //test description
        "enable":true,    //if it will be tested
        "reqestInfo":     
            {
                "url": "{host}/bank",
                "method": "POST",
                "header": {
                    "Content-Type": "application/json"
                    },
                "data":{
                    "payment_method": "SWIFT",
                    "bank_country_code": "US",
                    "account_name": "John Smith",
                    "account_number": "123",
                    "swift_code": "ICBCUSBJ",
                    "aba": "11122233A"

                }
            },
        "expect":{
            "status_code":200,
            "body":{
                "success": "Bank details saved"
            }
        }
    } -->
### Run with the main.test.js file 
* cd test, then run: "mocha --reporter mochawesome main.test.js"
* or just run: "mocha" at the home dir since it's configured in mocha.opt

### Generate report by using mochawesome report tool.
* The test reports should be found at /test/mochawesome-report
* The test result will include Pass/Pending/Fail.



