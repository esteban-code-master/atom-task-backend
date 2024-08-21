import { FirestoreDataConverter } from 'firebase-admin/firestore';
import { Task } from '../../domain/model/task.model';

export const taskConverter: FirestoreDataConverter<Task> = {
    toFirestore(task: Task) {
        return {
            ...task
        };
    },
    fromFirestore(snapshot) {
        const data = snapshot.data()
        
        return {
            ...data,
            createAt: data.createAt ? data.createAt.toDate() : undefined
        } as Task;
    }
};
