
estudiantes = ["Kevin", "Carlos", "Ricardo"]
for estudiante in estudiantes:
    print(f"Estudiante: {estudiante}")

contactos = {
    "Kevin": "kevin@example.com",
    "Carlos": "carlos@example.com"
}
for clave, valor in contactos.items():
    print(f"Nombre: {clave}, Correo: {valor}")

nuevo_estudiante = input("Digite el nombre de un nuevo estudiante: ")
estudiantes.append(nuevo_estudiante)
print("Lista actualizada de estudiantes:", estudiantes)

nuevo_contacto = input("Digite un nombre para actualizar/agregar: ")
nuevo_correo = input("Digite el correo de este contacto: ")
contactos[nuevo_contacto] = nuevo_correo
print("Contactos actualizados:", contactos)