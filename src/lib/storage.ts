import { storage } from "./appwrite";
import { ID } from "appwrite";

export async function uploadFile(file: File) {
    const data = await storage.createFile(import.meta.env.VITE_APPWRITE_EVENTS_BUCKET_IMAGE_ID, ID.unique(), file)
    return data;
}

export function getPreviewImageById(fileId?: string) {
    if (!fileId) {
        return "";
    }
    
    return storage.getFilePreview(import.meta.env.VITE_APPWRITE_EVENTS_BUCKET_IMAGE_ID, fileId).toString();
}

export function deleteFileById(fileId?: string) {
    if (!fileId) return "";
    return storage.deleteFile(import.meta.env.VITE_APPWRITE_EVENTS_BUCKET_IMAGE_ID, fileId);
}