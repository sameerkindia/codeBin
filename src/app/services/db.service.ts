import { Injectable } from '@angular/core';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
} from 'firebase/firestore';
import { AuthService } from './auth.service';
import { Snippet } from '../../models/snippets';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db?: any;
  constructor(private authService: AuthService) {
    this.db = getFirestore();
  }

  async createSnippit(snippet: Snippet) {
    try {
      console.log('working');
      const docRef = await addDoc(collection(this.db, 'snippets'), {
        ...snippet,
        by: this.authService.getUid(),
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('error while creating');
    }
  }

  async getAllSnippet() {
    let results: any[] = [];
    const querySnapshot = await getDocs(collection(this.db, 'snippets'));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      results.push({ id: doc.id, ...doc.data() });
    });

    return results;
  }

  async getSnippetById(docId: string) {
    const docRef = doc(this.db, 'snippets', docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
      return {
        id: '',
        title: 'not found',
        code: 'not found',
      };
    }
  }
}
