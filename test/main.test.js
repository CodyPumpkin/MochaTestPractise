
const wrapper =  require('../httpclient/httpclientwrapper')

const g = require('../util/getCaseDesc.js')

//Test Data 
var testData = g.getCaseData('/test/data/customerBankInfoData.json');

// Test entry point
describe("Mocha Test", async function () {
    this.timeout(20000)
    describe("Test start", async function(){
        testData.forEach(test => {
            it("Test scenario: Expect " + test.name, async function () {
                if(test.enable){
                    await wrapper.httpClientWrapper(test.reqestInfo, test.expect.status_code, test.expect.body);
                    }
                else{
                    this.skip()   //skip a test case
                    }
                })
        })
    }) 
})