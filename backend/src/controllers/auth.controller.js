const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); // Verifica que esta sea la ruta correcta a tu modelo de usuario

// Función para manejar el inicio de sesión de un usuario
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  console.log('Intento de inicio de sesión para el usuario:', username);

  try {
    const user = await User.findOne({ where: { username } });
    console.log('Usuario encontrado:', user ? user.username : 'No encontrado');

    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado o credenciales incorrectas' });
    }

    // Imprimir contraseñas para depuración (eliminar en producción)
    console.log('Contraseña proporcionada:', password);
    console.log('Contraseña almacenada (hash):', user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log('La contraseña coincide:', isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user.id, tipo: user.tipo },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    console.log('Token generado:', token);

    res.json({
      message: 'Inicio de sesión exitoso',
      user: {
        id: user.id,
        username: user.username,
        tipo: user.tipo,
        email: user.email // Opcional, depende si quieres enviar el email en la respuesta
      },
      token
    });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error del servidor al intentar iniciar sesión' });
  }
};

// Función para manejar el registro de un nuevo usuario
// src/controllers/auth.controller.js
// ... (otros requires)

exports.register = async (req, res) => {
  try {
    // Asumiendo que también estás recibiendo el 'email' en la petición,
    // de lo contrario, deberás quitarlo del objeto de creación.
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      // Elimina la línea de abajo si tu modelo no tiene una columna de 'email'
      // email: req.body.email,
      password: hashedPassword,
      tipo: req.body.tipo
    });

    res.status(201).json({
      message: 'Usuario registrado con éxito',
      userId: newUser.id
    });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({
      message: 'Error al registrar el usuario',
      error: error.message
    });
  }
};
