import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

// WebApplication에 BrowserRouter를 적용합니다.
// Redux를 적용할 때, 여기서 Provider를 통하여 프로젝트에 Redux를 연결해줍니다.
const Root = () => (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);

export default Root;