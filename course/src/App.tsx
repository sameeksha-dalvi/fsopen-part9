interface HeaderProps {
  name: string
};

interface PartProps {
  part: CoursePart;
};

interface ContentProps {
  parts: CoursePart[];
}

interface TotalProps {
  total: number;
};

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDesc extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDesc {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartDesc {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartSpecial extends CoursePartDesc {
  requirements: string[];
  kind: "special";
}

type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

/**
 * Helper function for exhaustive type checking
 */
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};



const Header = (props: HeaderProps) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
};

const Part = (props: PartProps) => {
  const part = props.part;

  switch (part.kind) {
    case "basic":
      return (
        <>
          <h3>{part.name} {part.exerciseCount}</h3>
          <p>{part.description}</p>
        </>
      );

    case "group":
      return (
        <>
          <h3>{part.name} {part.exerciseCount}</h3>
          <p>Group projects: {part.groupProjectCount}</p>
        </>
      );

    case "background":
      return (
        <>
          <h3>{part.name} {part.exerciseCount}</h3>
          <p>{part.description}</p>
          <p>{part.backgroundMaterial}</p>
        </>
      );

    case "special":
      return (
        <>
          <h3>{part.name} {part.exerciseCount}</h3>
          <p>{part.description}</p>
          <p>Requirements:</p>
          <ul>
            {part.requirements.map(requirement => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
        </>
      );

    default: {
      return assertNever(part);
    }
  }
};

const Content = (props: ContentProps) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </>
  );
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

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
    {
      name: "Backend development",
      exerciseCount: 21,
      description: "Typing the backend",
      requirements: ["nodejs", "jest"],
      kind: "special"
    },
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
