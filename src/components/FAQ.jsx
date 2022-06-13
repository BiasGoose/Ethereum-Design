import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-1 mt-5 overflow-hidden border-b border-primary"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white dark:text-primaryBlack font-bold">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-white dark:text-primaryBlack">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};
// eslint-disable-next-line
export default () => {
  const faqsList = [
    {
      q: "What is Ethereum?",
      a: "Ethereum is open access to digital money and data-friendly services for everyone – no matter your background or location. It's a community-built technology behind the cryptocurrency ether (ETH) and thousands of applications you can use today.      ",
    },
    {
      q: "What are smart contracts?",
      a: "You're probably thinking: I'm not a lawyer! Why would I care about contracts?. For most people, contracts bring to mind needlessly long terms and conditions agreements or boring legal documents.",
    },
    {
      q: "How to buy Ethereum?",
      a: "Yes! there are two ways that you can Buy Ethereum",
    },
    {
      q: "What are the fees?",
      a: "0%",
    },
    {
      q: "What do you mean by decentralized?",
      a: "It means you don't have to trust any central organization or person the way you would a bank. The developers nor team can seize your funds, but they also can't return them if you send them to the wrong address.",
    },
  ];

  return (
    <div className="mt-12">
      <section className="leading-relaxed max-w-screen-xl mx-auto px-4 lg:px-8">
        <div className="space-y-3 text-center">
          <p className="text-4xl text-white font-semibold">FAQ</p>
        </div>
        <div className="mt-14 max-w-2xl mx-auto">
          {faqsList.map((item, idx) => (
            <FaqsCard idx={idx} faqsList={item} />
          ))}
        </div>
      </section>
    </div>
  );
};
