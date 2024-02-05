use("crudDb");
// console.log(db);
db.createCollection("courses");
// CRUD OPERATIONS
// CREATE
// db.courses.insertOne({
//     name: "JavaScript Course",
//     price: 25000,
//     assignment: 12,
//     projects: 25
// })

// db.courses.insertMany([
//     {
//         "name": "Python Course",
//         "price": 20000,
//         "assignment": 10,
//         "projects": 20
//     },
//     {
//         "name": "Java Course",
//         "price": 28000,
//         "assignment": 15,
//         "projects": 30
//     },
//     {
//         "name": "Web Development Bootcamp",
//         "price": 35000,
//         "assignment": 18,
//         "projects": 40
//     },
//     {
//         "name": "Data Science Certification",
//         "price": 30000,
//         "assignment": 14,
//         "projects": 28
//     },
//     {
//         "name": "Mobile App Development",
//         "price": 32000,
//         "assignment": 20,
//         "projects": 35
//     },
//     {
//         "name": "Machine Learning Workshop",
//         "price": 40000,
//         "assignment": 22,
//         "projects": 45
//     },
//     {
//         "name": "Front-end Development Course",
//         "price": 27000,
//         "assignment": 12,
//         "projects": 22
//     },
//     {
//         "name": "Cybersecurity Training",
//         "price": 38000,
//         "assignment": 25,
//         "projects": 38
//     },
//     {
//         "name": "UI/UX Design Masterclass",
//         "price": 30000,
//         "assignment": 15,
//         "projects": 30
//     },
//     {
//         "name": "Blockchain Fundamentals",
//         "price": 35000,
//         "assignment": 18,
//         "projects": 35
//     }
// ]
// );

// READ
// let a = db.courses.find({ price: 35000 });
// console.log(a);
// console.log(a.count());
// console.log(a.toArray());

// let b = db.courses.findOne({ price: 30000 });
// console.log(b);

// UPDATE
// db.courses.updateOne({ price: 28000 }, { $set: { price: 29000 } });

// db.courses.updateMany({ price: 30000 }, { $set: { price: 55000 } });



// DELETE
// db.courses.deleteOne({ price: 25000 })
// db.courses.deleteMany({ price: 28000 })