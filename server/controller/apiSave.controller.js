exports.saveUser= async function(req, res) {
    const data = req.body;

    const newUser = new newUser(data);

    newUser.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        return res.json({
            msg: 'Your data has been saved.'
        });
    });
}