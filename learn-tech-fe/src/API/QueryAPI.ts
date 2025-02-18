import { client } from "../client";

export const sendQuery = async (payload: any) => {
    console.log("TestAPI")
    const sendResponse = await client("POST", "http://localhost:8080/courses/send-query", payload);
    return { status: sendResponse?.status, data: sendResponse?.data }
}

export const sendReview = async (payload: any) => {
    console.log("test")
    const sendResponse = await client("POST", "http://localhost:8080/contact/send-review", payload);
    return { status: sendResponse?.status, data: sendResponse?.data }
}