const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM post', (err, posts) => {
            if (err) {
                res.json(err);
            }
            res.render('posts', {
                data: posts
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body);
    req.getConnection((err, connection) => {
        const query = connection.query('INSERT INTO post set ?', data, (err, post) => {
            console.log(post);
            res.redirect('/');
        })
    })
};

controller.edit = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM post WHERE id = ?", [id], (err, rows) => {
            res.render('posts_edit', {
                data: rows[0]
            })
        });
    });
};

controller.update = (req, res) => {
    const {id} = req.params;
    const newPost = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE post set ? where id = ?', [newPost, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, connection) => {
        connection.query('DELETE FROM post WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;
