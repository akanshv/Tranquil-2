// const sqlite3=require('sqlite3');
// let sql;
// const path = require('path');
// var res,result;

// //connecting to db
// // const sqldb=new sqlite3.Database('./database.db',sqlite3.OPEN_READWRITE,(err)=>{
// //     if(err){
// //         console.log(err);   
// //     }
// //     else{
// //         console.log("Sql Database connected");
// //     }
    
// // })
// // const db_name=path.join(__dirname,"Sqlitedb","data.db");
// // const sqldb=new sqlite3.Database(db_name,err=>{
// //     if(err){
// //         console.log(err.message);
// //         return
// //     }
//     console.log("Local Database Connected");
// // })

// //create table

// createtable=function(){
//     try {
//         sql="Create table if not exists user( name varchar(255),username varchar(255) PRIMARY KEY, password varchar(255) );"
//         sqldb.run(sql);
//         //console.log('create');
//     } catch (error) {
        
//         console.log(error.message);
//     }
//     try {
//         sql=`insert or replace into user values ('Anmol','user1','password1'), ('Divyanshu','user2','password2'), ('Nikhil','user3','password3'), ('Haider','user4','password4'), ('Akansh','user5','password5'), ('Pranav','user6','password6'), ('Animesh','user7','password7'), ('Aman','user8','password8'), ('Akash','user9','password9'), ('Swejan','user10','password10');`
//         sqldb.run(sql);
//         console.log('seeds p[assed');
//     } catch (error) {
        
//     }
    
// }

// logincreatetable=function(){
//     try {
//         sql="Create table if not exists Login(login_call varchar(255),login_bool int);"
//         sqldb.run(sql);
//         //console.log('create');
//     } catch (error) {
        
//         console.log(error.message);
//     }
//     try {
//         sql='Insert or Replace into Login values("Call",0);'
//         sqldb.run(sql);
//         console.log('seeds p[assed');
//     } catch (error) {
        
//     }
    
// }


// //insertintotable

// inserttablecallback=function(name,username,second){
//     // try {
//     //     sql="insert into user values (?,?,?);"
//     //     sqldb.run(sql,[`${name}`,`${username}`,`${password}`],err=>{
//     //         if(err){
//     //             console.log('insert');
//     //             console.log("Enter a unique user name");
//     //         }
//     //     });
//     // } catch (error) {
        
//     // }
//     return new Promise((resolve,reject)=>{
//         sql=`insert into user values (?,?,?);;`
//         sqldb.all(sql,[`${name}`,`${username}`,`${password}`],(err,rows)=>{
//             if(err){
//                 reject('problem in database')
//             }
//             // console.log(rows.length);
//             // if(rows.length===0){
//             //    // console.log('Anmol');
//             //     res ="/Oops Bad Credentials";
//             //     reject(res);
//             // }
//             // else if(rows[0].password===password){
//             //     res ="yes";
//             //     resolve(res)
//             // }
//             // else{
//             //     res ="Oops Bad Credentials";
//             //     reject(res)
//             // }
    
//             // reject('err at end')
//             // second();
//         });
//        })
// }


// function inserttable(name,username,password){
//     // return new Promise((resolve,reject)=>{
//     //     inserttablecallback(name,username,password,function (){
//     //        console.log(res);
//     //        module.exports.result=res;
//     //  }).then(d => {
//     //     console.log(d)
//     //     resolve(d)
//     //  })
//     //  .catch(e => {
//     //    console.log(e)
//     //    reject(e)
//     //  })
//     // })
//     return new Promise((resolve,reject)=>{
//         sql=`insert into user values (?,?,?);;`
//         sqldb.all(sql,[`${name}`,`${username}`,`${password}`],(err,rows)=>{
//             if(err){
//                 reject('fuck');
//             }
//             else{
//                 resolve('good');
//             }
//             // console.log(rows.length);
//             // if(rows.length===0){
//             //    // console.log('Anmol');
//             //     res ="/Oops Bad Credentials";
//             //     reject(res);
//             // }
//             // else if(rows[0].password===password){
//             //     res ="yes";
//             //     resolve(res)
//             // }
//             // else{
//             //     res ="Oops Bad Credentials";
//             //     reject(res)
//             // }
    
//             // reject('err at end')
//             // second();
//         });
//        })
//     // sql="insert into user values (?,?,?);"
//     // sqldb.run(sql,[`${name}`,`${username}`,`${password}`],err=>{
//     //         if(err){
//     //             return 'fuck';
              
//     //     }
//     //     else{
//     //         return 'good';
//     //     }
//     // });

// }

// //checktable




    
// function callbackfunc(username,password,second){
//    return new Promise((resolve,reject)=>{
//     sql=`select password from user where username=?;`
//     sqldb.all(sql,[`${username}`],(err,rows)=>{
//         if(err){
//             reject('problem in database')
//         }
//         console.log(rows.length);
//         if(rows.length===0){
//            // console.log('Anmol');
//             res ="/Oops Bad Credentials";
//             reject(res);
//         }
//         else if(rows[0].password===password){
//             res ="yes";
//             resolve(res)
//         }
//         else{
//             res ="Oops Bad Credentials";
//             reject(res)
//         }

//         reject('err at end')
//         // second();
//     });
//    })
// }

// function checktable(username,password){
//      return new Promise((resolve,reject)=>{
//         callbackfunc(username,password,function (){
//             console.log(res);
//             module.exports.result=res;
//       }).then(d => {
//          console.log(d)
//          resolve(d)
//       })
//       .catch(e => {
//         console.log(e)
//         reject(e)
//       })
//      })
// }
// // function see(){
// //     sql=`select * from user`;
// //     sqldb.all(sql,(err,rows)=>{
// //         if(err){
// //             console.log('erroe');
// //         }
// //         console.log(rows);
// //     })
// // }
// // see();

// createtable();
// //see('hi','you');
// module.exports={inserttable,checktable};
// // inserttable('Someshwar','User11','password12');
// // checktable('User11','password11');

// //sqldb.run('drop table user_info');

