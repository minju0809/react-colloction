const Home = (props) => {
  return (
    <div> 
      <div>홈</div>
      <button onClick={() => {
        props.setPage(1);
      }}>1페이지</button>
      <button onClick={() => {
        props.setPage(2);
      }}>2페이지</button>
    </div>
  );
};

export default Home;
