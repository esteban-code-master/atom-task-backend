import { firestore } from "firebase-admin";
import { injectable } from "inversify";
import { FirestoreService } from "../interface/firestore.interface";

@injectable()
export class FirestoreServiceImpl implements FirestoreService {
  private db: firestore.Firestore;

  constructor() {
    this.db = firestore();
  }

  getCollection(name: string): firestore.CollectionReference {
    return this.db.collection(name);
  }
}
