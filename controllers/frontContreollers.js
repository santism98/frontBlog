const express = require('express')

const { consultation } = require('../helpers/fecthApi')




const getIndex = async (req, res) => {

  const page=req.query.page
    try {

      const respuesta = await consultation(`/entries/?page=${page}`, 'get');
      const { data } = await respuesta.json()
      const { docs }=data
    
    res.render('index', {
    titulo: 'Blog',
    entries:docs,
  })

    } catch (error) {

        console.log(error);
    }

  
}

const stract=async(req,res)=>{

  try {

    const id=req.params.id

    const urlDeUnArticulo=`/entries/${id}`

    const respuesta= await consultation(urlDeUnArticulo,'get',req.body)

    const articuloEncontrado= await respuesta.json()

     res.render('vistaDetalle',articuloEncontrado)
  } catch (error) {
      console.log(error);
  }
 
}


const login=async(req,res)=>{

  res.render('login')
}

const loginOk=async(req,res)=>{

 

  try {
         const respuesta= await consultation("/vip/",'post',req.body)

         const data= await respuesta.json()

         console.log(data);
        
      if (data.ok==false) {

          res.redirect('/login')
      }else{
        
        res.cookie('xtoken', data.data.token)
          res.redirect('/admin')
      }

      
  } catch (error) {
      
  }
  
}

const search=async(req,res)=>{

  try {

    const busqueda=req.query.query

   

  const respuesta= await consultation(`/entries/search/?query=${busqueda}`,'get',req.body)

  const search= await respuesta.json()

  

  res.render('search', {

    titulo: 'Blog',

    data:search.entries,

  })



    
  } catch (error) {
    console.log(error);
  }

 
  
}


module.exports = {
    getIndex,
    stract,
    login,
    loginOk,
    search

  }