const QuizOption = ({ children, ...props }) => {
  return (
    <button
      className="m-2 rounded-4xl text-x l w-full bg-purple-500 mx-auto p-3"
      {...props}
    >
      {children}
    </button>
  );
};

export default QuizOption;
