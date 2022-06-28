import React, {useEffect} from "react";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {selectAllMessages} from "./BLL/allMessages/allMessages.selector";
import {fetchMessages} from "./BLL/allMessages/allMessages.slice";
import {AppWrapper, FlexRow} from "./AppStyledComponent";
import Footer from "./UI/components/Footer/Footer";
import Decor from "./UI/components/Decoration/Decoration";
import FeedbackFormPage from "./UI/pages/FeedbackPage";
import background from "../src/assets/back.jpg";

function App() {
    const dispatch = useDispatch();
    const {dataMessages} = useSelector(selectAllMessages);
    useEffect(() => {
        dispatch(fetchMessages({}));
    }, []);

    useEffect(() => {
        console.log("messagesData", dataMessages);
    }, [dataMessages])

    return (
        <AppWrapper background={background}>
            <FlexRow>
                <FeedbackFormPage/>
                <Decor/>
            </FlexRow>
            <Footer/>
        </AppWrapper>
    );
}

export default App;
