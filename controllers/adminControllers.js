const {consultation}=require('../helpers/fecthApi')



const mostrarArticulos = async (req, res) => {

    const page=req.query.page

    const respuesta = await consultation(`/entries/?page=${page}`, 'get');
    const {data} = await respuesta.json()
    const {docs}=data

    

    res.render('./admin/indexAdmin',{

        entries: docs
    });

};


const formActualizar=async(req,res)=>{
    
    try {

        const id=req.params.id

       const url=`/entries/${id}`
       
        const respuesta= await consultation(url,'get')

        const unArticulo= await respuesta.json()


        res.render('../views/admin/updateEntry',{
           articulo:unArticulo
        })
         
    } catch (error) {
        console.log(error);
    }

}

const actualizar= async(req,res)=>{

    try {

        const id=req.params.id

        const url=`/entries/${id}`

       

        consultation(url,'put',req.body)

    res.redirect('/admin/')

    } catch (error) {
        console.log(error);
    }
    
}


const formCrear=(req,res)=>{

    res.render('./admin/createEntry')

}


const crear= async(req,res)=>{

    try {

    req.body.image= `http://localhost:4000/uploads/${req.file.filename}`   
    
    
    consultation("/entries",'post',req.body)

    res.redirect('/admin/')

    } catch (error) {

        console.log(error);
    }
    
}



const eliminando=async(req,res)=>{
    try {
        const id=req.params.id

        const urlDeUnaPelicula=`/entries/${id}`

        consultation(urlDeUnaPelicula,'delete',req.body)

        res.redirect('/admin/')
        
    } catch (error) {
        
    }
}





module.exports={
    mostrarArticulos,
    formCrear,
    crear,
    formActualizar,
    actualizar,
    eliminando
}