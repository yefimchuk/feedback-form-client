import axios from "axios";
import { CreateMessageBodyTypes } from "../types/serviceTypes";

class FeedbackService {
  API_URL = process.env.REACT_APP_API_URL;

  async fetchMessages() {
    return axios.get(`${this.API_URL}feedback`);
  }

  async createMessage(values: CreateMessageBodyTypes) {
    return axios.post(`${this.API_URL}feedback`, values);
  }
}

const feedbackServiceInstance = new FeedbackService();
export default feedbackServiceInstance;
