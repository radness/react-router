import React from 'react';
import queryString from 'query-string';

// About 경로로 들어왔을 때 보여줄 페이지입니다.
const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>
                About {match.params.name}
            </h2>
            {detail && 'detail: asd11'}
        </div>
    );
};

export default About;