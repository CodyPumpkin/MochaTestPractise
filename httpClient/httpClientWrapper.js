const axios =  require('axios') 
axios.defaults.timeout = 10000;
const expect = require('chai').expect; 

exports.httpClientWrapper = async (request, expect_status_code, expect_body) =>{

    return axios(request).then(response => {
     expect(JSON.stringify(expect_body)).to.eql(JSON.stringify(response.data))     
     expect(expect_status_code).to.eql(response.status)      
    })
    .catch(err => {        
      if(err.response) {   
        expect(JSON.stringify(expect_body)).to.eql(JSON.stringify(err.response.data))      
        expect(expect_status_code).to.eql(err.response.status)
      } else {         
        throw err
      }
    })
  }