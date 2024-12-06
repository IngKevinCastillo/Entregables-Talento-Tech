
CREATE TABLE Estudiantes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    edad INT,
    ciudad VARCHAR(50)
);

INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Kevin', 20, 'Bogotá');
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Carlos', 22, 'Medellín');
INSERT INTO Estudiantes (nombre, edad, ciudad) VALUES ('Ricardo', 19, 'Cali');

SELECT * 
FROM Estudiantes;

SELECT * 
FROM Estudiantes 
WHERE ciudad = 'Medellín';

SELECT * 
FROM Estudiantes 
WHERE edad > 20;