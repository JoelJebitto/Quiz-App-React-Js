import Question from "./Question";
import QuizOption from "./QuizOption";

export default function Body() {
  return (
    <div className="h-fit bg-purple-950/70 w-9/10 lg:w-5/6 p-20 flex flex-col  mx-auto m-10  xl:w-[65rem] rounded-3xl">
      <Question>Question 1</Question>
      <QuizOption>btn 1</QuizOption>
      <QuizOption>btn 2</QuizOption>
      <QuizOption>btn 3</QuizOption>
      <QuizOption>btn 4</QuizOption>
    </div>
  );
}
