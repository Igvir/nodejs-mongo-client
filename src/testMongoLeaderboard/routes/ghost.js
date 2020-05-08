const express = require('express');
const router = express.Router();
const axios = require('axios');
const GhostContentAPI = require('@tryghost/content-api');
const GhostAdminAPI = require('@tryghost/admin-api');

 
const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: '8e893624c0f9e4cef00dc25f46',
    version: "v3"
  });
  
  const apiAdmin = new GhostAdminAPI({
    url: 'http://localhost:2368',
    key: '5e98cc6b8fd9f4377006d40e:8add595d1e9ffbf4a935648a9367f121b17d76e3f543eb79371cad11104acbcc',
    version: "v3"
  });
   



router.get('/posts', async function (req, res) {
      // fetch 5 posts, including related tags and authors
        api.posts
        .browse({limit: 10, include: 'tags,authors'})
        .then((posts) => {
            console.log(`Total de posts encontrados= ${posts.length}`);
            //console.log(posts);
            /*posts.forEach((post) => {
                console.log(post.title);
            });*/
        })
        .catch((err) => {
            console.error(err);
        });

    /*let response=await axios.get(`http://localhost:2368/ghost/api/v3/content/posts/`, {
        params: {
            key: key
        }
        });
    console.log(response);
    res.json({
        respuesta: response
    });
    */
});


router.post('/new', async function(req,res){
    apiAdmin.posts.add({
        title: 'Posting using ADMIN API',
        html:'<p>Contenido creado usando la API</p>'
    });
});

//Getting all users
router.get('/users', async function(req,res){
    apiAdmin.users
    .browse({limit:10})
    .then((users)=>{
        console.log(`Total de usuarios encontrados= ${users.length} `);
        res.json(users);
    })
    .catch((err)=>{
        console.error(err);
    });

});

//Getting a user information
router.get('/user', async function(req,res){
    //email param to search
    const emailToSearch=req.query.email  //"curso70532@outlook.com";
    console.log(req.query.email);

    apiAdmin.users
    .browse({limit:10,include:'email'})
    .then((users)=>{

        const thisUser=users.filter(obj=>{
            return obj.email==emailToSearch;
        });

        console.log(`Total de usuarios encontrados= ${users.length} `);
        if(thisUser.length>0){
            res.json(thisUser);
        }else{
            res.json({"Result":"User not found"});
        }
        
    })
    .catch((err)=>{
        console.error(err);
    });

});

//Users usando READ
router.get('/user2', async function(req,res){
    //email param to search
    const emailToSearch=req.query.email;  //"curso70532@outlook.com";
    console.log(`Email a buscar: ${emailToSearch}`);

    try {
        const userResponse= await apiAdmin.users.read({email:emailToSearch}); 
        res.json(userResponse);  
    } catch (error) {
        console.error(error);
        res.json({"Result":"User not found"});
    }
});


//Getting a user information filtering email
router.get('/userfilter', async function(req,res){
    //email param to search
    const emailToSearch=req.query.email  //"curso70532@outlook.com";
    console.log(req.query.email);
    const emailFilter=`email:${emailToSearch}`;
    
    apiAdmin.users
    .browse({filter:emailFilter})
    .then((users)=>{
        console.log(`Total de usuarios encontrados= ${users.length} `);
        if(users.length>0){
            res.json(users);
        }else{
            res.json({"Result":"User not found"});
        }
        
    })
    .catch((err)=>{
        console.error(err);
    });

});


//getting post by author
router.get('/postsbyauthor', async function (req, res) {
     //author param to search
     const emailToSearch=req.query.email;  
     const authorFilter=`authors.email:${emailToSearch}`;

      api.posts
      .browse({limit: 10, include: 'tags,authors', filter:authorFilter})
      .then((posts) => {
          console.log(`Total de posts encontrados= ${posts.length}`);
          console.log(posts);
        if(posts.length>0){
            res.json(posts);
        }else{
            res.json({"Result":"Posts not found"});
        }

      })
      .catch((err) => {
          console.error(err);
      });
});


module.exports = router;