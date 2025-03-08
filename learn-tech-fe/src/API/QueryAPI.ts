import { client } from "../client";

export const sendQuery = async (payload: any) => {
    const sendResponse = await client("POST", "https://learn-tech-it-solutions-be.onrender.com/courses/send-query", payload);
    return { status: sendResponse?.status, data: sendResponse?.data }
}

export const sendReview = async (payload: any) => {
    const sendResponse = await client("POST", "https://learn-tech-it-solutions-be.onrender.com/contact/send-review", payload);
    return { status: sendResponse?.status, data: sendResponse?.data }
}