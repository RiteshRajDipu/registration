const { 
    create, 
    getUserByUserId, 
    getUsers, 
    updateUser, 
    deleteUser 
} = require("./user.service");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
            console.log(err);
            return res.status(500).json({
               success: 0,
               message: "Database connection error"
            });
          }
          return res.status(200).json({
              success: 1,
              data: results
          });
        });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "No Record Found"
                });
            }
            return res.json({
                success: 1,  
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateUsers: (req, res) => {
        const body = req.body;
        updateUser(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }  
            if (!results) {
                return res.json({
                   success: 0,
                   message: "user updation failed"  
                });
            }
            return res.json({
                success: 1,
                message: "updated successfully!"
            });    
        });
    },
    deleteUser: (req, res) => {
        const data = req.body;
        deleteUser(data, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Opps.. Record Not Found"
                });
            }
            return res.json({
                success: 1,
                 message: "deleted successfully!"
            });
        });
    }
};