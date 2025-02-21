import { client } from "../client";

export const sendQuery = async (payload: any) => {
    const sendResponse = await client("POST", "https://learn-tech-it-solutions-be-production.up.railway.app/courses/send-query", payload);
    return { status: sendResponse?.status, data: sendResponse?.data }
}

export const sendReview = async (payload: any) => {
    const sendResponse = await client("POST", "https://learn-tech-it-solutions-be-production.up.railway.app/contact/send-review", payload);
    return { status: sendResponse?.status, data: sendResponse?.data }
}