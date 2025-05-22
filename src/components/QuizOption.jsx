const QuizOption = ({ children, ...props }) => {
  return (
    <button
      className="m-2 rounded-4xl w-9/11 bg-purple-500 mx-auto p-3"
      {...props}
    >
      {children}
    </button>
  );
};

export default QuizOption;
