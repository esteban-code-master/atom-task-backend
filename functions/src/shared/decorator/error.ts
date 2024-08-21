import { HttpsError } from "firebase-functions/v2/https";


export function CatchAsyncErrors() {
  return function (
    target: any, 
    propertyName: string, 
    descriptor: TypedPropertyDescriptor<any>
  ) {
    const method = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      try {
        await method.apply(this, args);
      } catch (error) {
       
        const res = args[1];
        if (error instanceof HttpsError) {
          res.status(error.code).json({ message: error.message });
        } else {
          res.status(500).json({ message: 'Internal server error' });
        }
      }
    };

    return descriptor;
  };
}
