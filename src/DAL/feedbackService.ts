import axios from "axios";
import {CreateMessageBodyTypes} from "../types/serviceTypes";

class FeedbackService {

    async fetchMessages() {

        return axios.get("https://zenbit-feedback-db.herokuapp.com/feedback");
    }

    async createMessage(values: CreateMessageBodyTypes) {

        return axios.post('https://zenbit-feedback-db.herokuapp.com/feedback', values);
    }
}

const feedbackServiceInstance = new FeedbackService();
export default feedbackServiceInstance;