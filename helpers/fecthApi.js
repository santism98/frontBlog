
const consultation = async(url,method,body) => {
 
    let options={}
    if(method=='post' || method=='put'){
        
       const data={...body};
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    }

    if(method=='delete'){
        options={
            method: method,
        }
    }

    if(method=='get'){
        options={
            method: method,
        }
    }
    
      return await fetch(`${ process.env.URLBASE}${url}`,options);
}

module.exports = {
    consultation
}
