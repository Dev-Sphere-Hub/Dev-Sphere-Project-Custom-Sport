const { initializeApp } = require("firebase/app");
const {
  ref,
  uploadBytes,
  getDownloadURL,
  getStorage,
  deleteObject,
} = require("firebase/storage");

const dotenv = require("dotenv");

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Storage service
const storage = getStorage(firebaseApp);

const uploadImg = async ({ img, id, folderName }) => {
  // Create firebase reference
  const [originalName, ext] = img.originalname.split("."); // -> [pug, jpg]

  const filename = `${
    process.env.NODE_ENV
  }/${folderName}/${id}/${originalName}-${Date.now()}.${ext}`;

  const imgRef = ref(storage, filename);

  // Upload image to Firebase
  const result = await uploadBytes(imgRef, img.buffer);

  return result.metadata.fullPath;
};

const deleteImg = async (imgUrl) => {
  const imgRef = ref(storage, imgUrl);

  await deleteObject(imgRef);
};

const getImgFromQuery = async (query) => {
  if (Array.isArray(query)) {
    const array = [...query];
    const arrayPromises = array.map(async (element) => {
      if (!element.imageUrl) {
        return;
      }
      if (element.imageUrl.startsWith(process.env.NODE_ENV.toString())) {
        const imgRef = ref(storage, element.imageUrl);

        const imgUrl = await getDownloadURL(imgRef);

        element.imageUrl = imgUrl;
      }
    });
    await Promise.all(arrayPromises);

    return array;
  }

  const object = query;

  if (!object.imageUrl) {
    return object;
  }

  if (!object.imageUrl.startsWith(process.env.NODE_ENV.toString())) {
    return object;
  }

  const imgRef = ref(storage, object.imageUrl);

  const imgUrl = await getDownloadURL(imgRef);

  object.imageUrl = imgUrl;

  return object;
};

module.exports = { uploadImg, getImgFromQuery, deleteImg };
