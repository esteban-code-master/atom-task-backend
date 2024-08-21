import { inject, injectable } from "inversify";
import { FirestoreService } from "../../../../shared/interface/firestore.interface";
import { firestore } from "firebase-admin";
import { TaskRepository } from "../../domain/repository/task.repository";
import { Task } from "../../domain/model/task.model";
import { NotFoundException } from "../../../../shared/exceptions/not-found";
import { taskConverter } from "../mappers/firestore-data-converter";


@injectable()
export class TaskRepositoryImpl implements TaskRepository {
  private collection: firestore.CollectionReference;

  constructor(
    @inject(FirestoreService) private firestoreService: FirestoreService,
  ) {
    this.collection = this.firestoreService.getCollection("tasks").withConverter(taskConverter);
  }

  async create(task: Task): Promise<Task> {
    const docRef = this.collection.doc();
    task.id = docRef.id;
    await docRef.set(task);

    return task;
  }

  async find(): Promise<Task[]> {
    const result = await this.collection.get();
    if (result.empty) return [];

    return result.docs.map((doc) => doc.data() as Task);
  }

  async findById(id: string): Promise<Task> {
    const doc = await this.collection.doc(id).get();
    return doc.exists ? (doc.data() as Task) : ({} as Task);
  }

  async update(taskId: string, task: Task): Promise<Task> {
    const taskRef = this.collection.doc(taskId);
    const doc = await taskRef.get();

    if (!doc.exists) {
      throw new NotFoundException(`Task with ID ${taskId} not found.`);
    }

    await taskRef.update({ ...task });

    const updatedDoc = await taskRef.get();
    return updatedDoc.exists ? (updatedDoc.data() as Task) : ({} as Task);
  }

  async delete(id: string): Promise<Task> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }
    const task = doc.data() as Task;

    await this.collection.doc(id).delete();
    return task;
  }
}
