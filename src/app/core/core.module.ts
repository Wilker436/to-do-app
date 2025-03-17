import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [],
  providers: [ 
    provideFirebaseApp(() => initializeApp(firebaseConfig )),
    provideFirestore(() => getFirestore())
  ]
})
export class CoreModule { }
