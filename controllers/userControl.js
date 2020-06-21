module.exports = (app, UserModel) => {

    app.post('/api/add', (req, res) => {
        try {
            
            let entry = new UserModel({
                name: req.body.name,
                address: req.body.address
            });

            entry.save().then(() => {
                return res.status(201).json({
                    success: true,
                    message: 'User Added Successfully!'
                });
            }).catch((e) => {
                return res.status(400).json({
                    success: false,
                    message: 'Error occurred!'
                });
            });

        } catch (error) {
            res.send(error);
        }
    });

    app.get('/api/fetch', (req, res) => {
        try {
            
            UserModel.find().then((resp) => {
                return res.status(200).json({
                    success: true,
                    message: resp
                });
            }).catch((e) => {
                return res.status(400).json({
                    success: false,
                    message: 'Entry not found!'
                });
            });

        } catch (error) {
            res.send(error);
        }
    });

}