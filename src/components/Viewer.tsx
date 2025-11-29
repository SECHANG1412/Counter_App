type ViewerProps = {
  count: number;
};

const Viewer = ({ count }: ViewerProps) => {
  return (
    <div>
      <div>현재 카운트</div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;
