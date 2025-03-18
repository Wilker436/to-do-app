# Proyecto Ionic Angular con Firebase / Firestore

Este proyecto es una aplicación basada en **Ionic Angular** que utiliza **Firebase** como backend para almacenamiento de datos en **Firestore**.

## 🚀 Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- [Angular CLI](https://angular.io/cli)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Firebase](https://firebase.google.com/)

## 📦 Instalación

Clona este repositorio y accede a la carpeta del proyecto:

```sh
git clone [https://github.com/usuario/proyecto-ionic.git](https://github.com/Wilker436/to-do-app.git)
cd Taller-1-Firebase
npm install

```

## 🔥 Configuración de Firebase 
Ve a Firebase Console y crea un nuevo proyecto.

- Habilita Firestore en la configuración del proyecto.
- Agrega una aplicación web y copia la configuración de Firebase.
- Crea un archivo src/environments/environment.ts y agrega la configuración:

```sh
  export const environment = {
  production: false,
  firebaseConfig: {
  apiKey: "AIzaSyAnF7hnzeHgaA7syFbPYppcR6NvEyXM4QI",
  authDomain: "taller1-mobile.firebaseapp.com",
  projectId: "taller1-mobile",
  storageBucket: "taller1-mobile.firebasestorage.app",
  messagingSenderId: "791891563911",
  appId: "1:791891563911:web:2ca02ef585b6cad2296f22"
  }
};

```

- Instala Firebase y AngularFire en el proyecto:
```sh
npm install firebase @angular/fire
```


## 📌 Características
- ✅ Autenticación con Firebase (Google, Email/Password)
- ✅ CRUD de datos en Firestore
- ✅ Integración con Ionic UI Components
- ✅ Soporte para dispositivos móviles con Capacitor
