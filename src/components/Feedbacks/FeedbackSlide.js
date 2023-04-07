import useData from '../../hooks/use-data';

const transformData = (dataObj) => {
  const loadedData = [];
  for (const key in dataObj) {
    loadedData.push({
      id: key,
      name: dataObj[key].name,
      feedback: dataObj[key].feedback,
      date: dataObj[key].date,
    });
  }
  return loadedData;
};
const url =
  'https://home-services-40fc3-default-rtdb.firebaseio.com/feedback.json';

const FeedbackSlide = () => {
  const [data, isLoading, error] = useData(url, transformData);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p>{error.message}</p>
      </section>
    );
  }

  const feedback = data.map((el) => (
    <div key={el.id}>
      <p>{el.feedback}</p>
      <p>{el.name}</p>
      <p>{el.date}</p>
    </div>
  ));

  return <div>{feedback}</div>;
};

export default FeedbackSlide;
