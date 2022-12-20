const Page2 = ({ setPage }) => {
  return (
    <div>
      <div>2페이지</div>
      <button onClick={() => setPage(0)}>홈으로</button>
      <button onClick={() => setPage(1)}>1페이지</button>
    </div>
  );
};

export default Page2;
