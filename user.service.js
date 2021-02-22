const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
          `insert into oregistration(firstName, lastName, email, number, university, college, year, branch, USN, gender, adress)
                    values(?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.number,
                data.university,
                data.college,
                data.year,
                data.branch,
                data.USN,
                data.gender,
                data.adress
            ],
            (error, results, fields) => {
                if (error) {
                 return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select id,firstName,lastName,email,number,university,college,year,branch,USN,gender,adress from oregistration`,
           [],
           (error, results, fields) => {
             if (error) {
               return callBack(error);  
               }
            return callBack(null, results);
           } 
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
          `select id,firstName,lastName,email,number,university,college,year,branch,USN,gender,adress where id = ?`,  
         [id],
         (error, results, fields) => {
             if (error) {
                 callBack(error);
             }
             return callBack(null, results);
          }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
           `update oregistration set firstName=?, lastName=?, email=?, number=?, university=?, college=?, year=?, branch=?, USN=?, gender=?, adress=? where id = ?`,
           [
            data.first_name,
            data.last_name,
            data.email,
            data.number,
            data.university,
            data.college,
            data.year,
            data.branch,
            data.USN,
            data.gender,
            data.adress,
            data.id 
           ],
           (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results); 
           },  
        );
    },
    deleteUser: (data, callBack) => {
        pool.query(
          `delete from oregistration where id = ?`,
          [data.id],
          (error, results, fields) => {
              if (error) {
                 return callBack(error);
              }
              return callBack(null, results[0]);
          }
        );
    }
};