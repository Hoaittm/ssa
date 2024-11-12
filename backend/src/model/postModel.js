const db = require("../config/conectDatabase");

const getPostAll = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM posts ";
    db.query(query, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);  
    });
  });
};

 const getPostByMenuItem = (topic_id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM posts ,menu WHERE topic_id = menu.table_id ";
    db.query(query, [topic_id], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);  
    });
  });
}
const getPostDetails = (id) =>{
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM posts WHERE id =?";
    db.query(query, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results[0]);  
    });
  });
}
module.exports = {
  getPostByMenuItem,
  getPostAll,
  getPostDetails
};
