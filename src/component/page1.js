const Page1 = ({ setPage }) => {
  return (
    <div>
      <div>1페이지</div>
      <button
        onClick={() => {
          setPage(0);
        }}
      >홈으로</button>
      <button
        onClick={() => {
          setPage(2);
        }}
      >2페이지</button>
    </div>
  );
};

export default Page1;
