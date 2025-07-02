import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Common
      'app.name': 'Initial Dashboard',
      'loading': 'Loading...',
      'error': 'Error',
      'success': 'Success',
      'cancel': 'Cancel',
      'save': 'Save',
      'delete': 'Delete',
      'edit': 'Edit',
      'close': 'Close',
      'back': 'Back',
      'next': 'Next',
      'previous': 'Previous',
      
      // Navigation
      'nav.dashboard': 'Dashboard',
      'nav.users': 'Users',
      'nav.settings': 'Settings',
      'nav.profile': 'Profile',
      'nav.userManagement': 'User Management',
      
      // Auth
      'auth.login': 'Login',
      'auth.logout': 'Logout',
      'auth.register': 'Register',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.confirmPassword': 'Confirm Password',
      'auth.forgotPassword': 'Forgot Password?',
      'auth.rememberMe': 'Remember Me',
      'auth.loginTitle': 'Sign In to Your Account',
      'auth.registerTitle': 'Create New Account',
      'auth.loginSuccess': 'Login successful!',
      'auth.loginError': 'Invalid email or password',
      'auth.registerSuccess': 'Registration successful!',
      'auth.logoutSuccess': 'Logged out successfully',
      'auth.username': 'Username',
      
      // User
      'user.profile': 'User Profile',
      'user.firstName': 'First Name',
      'user.lastName': 'Last Name',
      'user.username': 'Username',
      'user.role': 'Role',
      'user.status': 'Status',
      'user.changePassword': 'Change Password',
      'user.currentPassword': 'Current Password',
      'user.newPassword': 'New Password',
      'user.updateProfile': 'Update Profile',
      'user.profileUpdated': 'Profile updated successfully',
      'user.passwordChanged': 'Password changed successfully',
      'user.management': 'User Management',
      'user.addUser': 'Add User',
      'user.editUser': 'Edit User',
      'user.deleteUser': 'Delete User',
      'user.active': 'Active',
      'user.inactive': 'Inactive',
      'user.admin': 'Admin',
      'user.staff': 'Staff',
      
      // Dashboard
      'dashboard.welcome': 'Welcome to Initial Dashboard',
      'dashboard.overview': 'Overview',
      'dashboard.stats': 'Statistics',
      'dashboard.recentActivity': 'Recent Activity',
      
      // Menu
      'menu.userName': 'User Name',
      'menu.role': 'Role',
      'menu.changePassword': 'Change Password',
      'menu.logout': 'Logout',
      'menu.userManagement': 'User Management',
      'menu.changeLanguage': 'Change Language',
      
      // Validation
      'validation.required': 'This field is required',
      'validation.email': 'Please enter a valid email',
      'validation.minLength': 'Must be at least {{min}} characters',
      'validation.passwordMatch': 'Passwords must match',
    }
  },
  es: {
    translation: {
      // Common
      'app.name': 'Panel de Control Inicial',
      'loading': 'Cargando...',
      'error': 'Error',
      'success': 'Éxito',
      'cancel': 'Cancelar',
      'save': 'Guardar',
      'delete': 'Eliminar',
      'edit': 'Editar',
      'close': 'Cerrar',
      'back': 'Atrás',
      'next': 'Siguiente',
      'previous': 'Anterior',
      
      // Navigation
      'nav.dashboard': 'Panel de Control',
      'nav.users': 'Usuarios',
      'nav.settings': 'Configuración',
      'nav.profile': 'Perfil',
      'nav.userManagement': 'Gestión de Usuarios',
      
      // Auth
      'auth.login': 'Iniciar Sesión',
      'auth.logout': 'Cerrar Sesión',
      'auth.register': 'Registrarse',
      'auth.email': 'Correo Electrónico',
      'auth.password': 'Contraseña',
      'auth.confirmPassword': 'Confirmar Contraseña',
      'auth.forgotPassword': '¿Olvidaste tu contraseña?',
      'auth.rememberMe': 'Recordarme',
      'auth.loginTitle': 'Inicia Sesión en tu Cuenta',
      'auth.registerTitle': 'Crear Nueva Cuenta',
      'auth.loginSuccess': '¡Inicio de sesión exitoso!',
      'auth.loginError': 'Correo o contraseña inválidos',
      'auth.registerSuccess': '¡Registro exitoso!',
      'auth.logoutSuccess': 'Sesión cerrada exitosamente',
      'auth.username': 'Nombre de Usuario',
      
      // User
      'user.profile': 'Perfil de Usuario',
      'user.firstName': 'Nombre',
      'user.lastName': 'Apellido',
      'user.username': 'Nombre de Usuario',
      'user.role': 'Rol',
      'user.status': 'Estado',
      'user.changePassword': 'Cambiar Contraseña',
      'user.currentPassword': 'Contraseña Actual',
      'user.newPassword': 'Nueva Contraseña',
      'user.updateProfile': 'Actualizar Perfil',
      'user.profileUpdated': 'Perfil actualizado exitosamente',
      'user.passwordChanged': 'Contraseña cambiada exitosamente',
      'user.management': 'Gestión de Usuarios',
      'user.addUser': 'Agregar Usuario',
      'user.editUser': 'Editar Usuario',
      'user.deleteUser': 'Eliminar Usuario',
      'user.active': 'Activo',
      'user.inactive': 'Inactivo',
      'user.admin': 'Administrador',
      'user.staff': 'Personal',
      
      // Dashboard
      'dashboard.welcome': 'Bienvenido al Panel de Control Inicial',
      'dashboard.overview': 'Resumen',
      'dashboard.stats': 'Estadísticas',
      'dashboard.recentActivity': 'Actividad Reciente',
      
      // Menu
      'menu.userName': 'Nombre de Usuario',
      'menu.role': 'Rol',
      'menu.changePassword': 'Cambiar Contraseña',
      'menu.logout': 'Cerrar Sesión',
      'menu.userManagement': 'Gestión de Usuarios',
      'menu.changeLanguage': 'Cambiar Idioma',
      
      // Validation
      'validation.required': 'Este campo es requerido',
      'validation.email': 'Por favor ingrese un correo válido',
      'validation.minLength': 'Debe tener al menos {{min}} caracteres',
      'validation.passwordMatch': 'Las contraseñas deben coincidir',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 