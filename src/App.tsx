import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {selectAllMessages} from "./BLL/allMessages/allMessages.selector";
import {fetchMessages} from "./BLL/allMessages/allMessages.slice";
import {AppWrapper, FlexBox} from "./AppStyledComponent";

function App() {
    const dispatch = useDispatch();
    const {dataMessages, errors} = useSelector(selectAllMessages);
debugger
    useEffect(() => {
        dispatch(fetchMessages());
    }, []);

    console.log('messagesData', dataMessages);

    return (
        <AppWrapper >
            <FlexBox>

            </FlexBox>

        </AppWrapper>
    );
}

export default App;
