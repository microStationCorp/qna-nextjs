import admin, { ServiceAccount } from "firebase-admin";
import serviceAccount from "../secret.json";

const params: ServiceAccount = {
  clientEmail: serviceAccount.client_email,
  privateKey: serviceAccount.private_key,
  projectId: serviceAccount.project_id,
};

export const verifyIdToken = (token: string) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(params),
      databaseURL: process.env.databaseURL,
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((err) => {
      throw err;
    });
};
