
db.Estudiantes.insertMany([
    { "nombre": "Kevin", "edad": 20, "ciudad": "Bogotá" },
    { "nombre": "Carlos", "edad": 22, "ciudad": "Medellín" },
    { "nombre": "Ricardo", "edad": 19, "ciudad": "Cali" }
]);

db.Estudiantes.find();

db.Estudiantes.find({ "ciudad": "Medellín" });

db.Estudiantes.find({ "edad": { $gt: 20 } });