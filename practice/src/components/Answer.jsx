import { checkHeding, replaceHedingStar } from "../helper";

const Answer = ({ ans, index }) => {
  const heading = checkHeding(ans);

  return (
    <div>
      {index === 0 ? (
        <span className="pt-2 text-2xl block">{ans}</span>
      ) : heading ? (
        <h2 className="py-5 block font-bold text-xl">
          {replaceHedingStar(ans)}
        </h2>
      ) : (
        <span>{ans}</span>
      )}
    </div>
  );
};

export default Answer;