import axios from "axios";
import {CreateMessageBodyTypes} from "../types/serviceTypes";

class FeedbackService {

    async fetchMessages() {
        return (await axios.get('http://localhost:4000/feedback')).data;
    }

    async createMessage(data: CreateMessageBodyTypes ) {
        return (await axios.post('http://localhost:4000/feedback', data)).data;
    }
}

const feedbackServiceInstance = new FeedbackService();
export default feedbackServiceInstance;