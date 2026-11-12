interface HeaderProps {
  name: string
};

interface PartProps {
  name: string;
  exerciseCount: number;
};

interface ContentProps {
  parts: PartProps[];
}

interface TotalProps {
  total: number;
};

const Header = (props: HeaderProps) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
};

const Part = (props: PartProps) => {
  return (
    <>
      <p>
        {props.name} {props.exerciseCount}
      </p>
    </>
  )
};

const Content = (props: ContentProps) => {
  //console.log("Content props:",props.parts[0].name);
  return (
    <>
      <Part name={props.parts[0].name} exerciseCount={props.parts[0].exerciseCount} />
      <Part name={props.parts[1].name} exerciseCount={props.parts[1].exerciseCount} />
      <Part name={props.parts[2].name} exerciseCount={props.parts[2].exerciseCount} />
    </>
  )
};

const Total = (props: TotalProps) => {
  return (
    <>
      <p>
        Number of exercises {props.total}
      </p>
    </>
  )
};


const App = () => {


  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <Header name={courseName} />
      <Content parts={courseParts} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App;
