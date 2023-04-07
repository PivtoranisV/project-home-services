import React, { useEffect, useState } from 'react';

const FeedbackSlide = () => {
  const [loadedFeedback, setLoadedFeedback] = useState([]);

  useEffect(() => {
    fetch(
      'https://home-services-40fc3-default-rtdb.firebaseio.com/feedback.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const loadedData = [];
        for (const key in data) {
          loadedData.push({
            id: key,
            name: data[key].name,
            feedback: data[key].feedback,
            date: data[key].date,
          });
          setLoadedFeedback(loadedData);
        }
      });
  }, []);

  const feedback = loadedFeedback.map((el) => (
    <div key={el.id}>
      <p>{el.feedback}</p>
      <p>{el.name}</p>
      <p>{el.date}</p>
    </div>
  ));

  return <div>{feedback}</div>;
};

export default FeedbackSlide;
