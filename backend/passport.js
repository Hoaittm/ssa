// require('dotenv').config();
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const passport = require("passport");
// const db = require('./src/config/conectDatabase');

// passport.use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: "/api/auth/google/callback"
// },
//   async function (accessToken, refreshToken, profile, cb) {
//     try {
//       if (profile?.id) {
//         // Kiểm tra người dùng trong cơ sở dữ liệu
//         db.query('SELECT * FROM users WHERE id = ?', [profile.id], async (err, results) => {
//           if (err) {
//             console.error('Error querying database:', err);
//             return cb(err, null);
//           }
          
//           // Nếu không tìm thấy người dùng
//           if (results.length === 0) {
//             // Tạo người dùng mới
//             const newUser = {
//              id: profile.id,
//               email: profile.emails[0]?.value,
//               firstname: profile.name.givenName, // Truy cập trực tiếp vào thuộc tính givenName
//               lastname: profile.name.familyName 
//             };

//             // Chèn người dùng mới vào cơ sở dữ liệu
//             db.query('INSERT INTO users SET ?', newUser, (insertErr, insertResult) => {
//               if (insertErr) {
//                 console.error('Error inserting new user:', insertErr);
//                 return cb(insertErr, null);
//               }
//               console.log('New user created:', newUser);
//               return cb(null, newUser);
//             });
//           } else {
//             console.log('User found:', results[0]);
//             return cb(null, results[0]);
//           }
//         });
//       }
//     } catch (err) {
//       console.error('Error finding or creating user:', err);
//       return cb(err, null);
//     }
//   }
// ));
// config/passportConfig.js
require('dotenv').config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const UserService = require('./src/service/userService');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback"
},
    async (accessToken, refreshToken, profile, cb) => {
        try {
            const user = await UserService.findOrCreateUser(profile);
            return cb(null, user);
        } catch (err) {
            console.error('Error finding or creating user:', err);
            return cb(err, null);
        }
    }
));

module.exports = passport;
