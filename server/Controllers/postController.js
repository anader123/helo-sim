const getPosts = (req, res) => {
    const id = req.session.userid; 
    const { user, title } = req.query; 
    const db = req.app.get('db'); 

    if(user === true && title !== '') {
        db.get_all_posts_search([title])
            .then(posts => {
                res.status(200).send(posts)
            })
            .catch(err => console.log(err))
    } 
    
    else if(user === false && title === '') {
        db.get_non_user([id])   
            .then(posts => {
                res.status(200).send(posts)
            })
            .catch(err => console.log(err))
    }

    else if(user === false && title !== '') {
        db.get_non_user_search([id, title])
            .then(posts => {
                res.status(200).send(posts)
            })
            .catch(err => console.log(err))
    }

    else {
        db.get_all_posts()
            .then(posts => {
                res.status(200).send(posts)
            })
            .catch(err => console.log(err))
    };
};

const getPost = (req, res) => {
    const id = req.session.userid; 
    const db = req.app.get('db'); 
    db.get_single_post([id])
        .then(post => {
            res.status(200).send(post)
        })
        .catch(err => console.log(err))
};

const createPost = (req, res) => {
    const id = req.session.userid; 
    const { title, img, content } = req.body; 
    const db = req.app.get('db'); 
    console.log(id)
    db.create_post([title, img, content, id])
        .then( () => {
            res.status(200).send('Post has been created.')
        })
        .catch(err => console.log(err))        
}

module.exports = {
    getPosts,
    getPost,
    createPost
}