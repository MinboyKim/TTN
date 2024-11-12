import { useParams } from "react-router-dom";

const LetterDetail = () => {
  const { id } = useParams<{ id: string }>();

  return <div>LetterDetail {id}</div>;
};

export default LetterDetail;
