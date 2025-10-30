//props is an object therefore it will need a type declaration

type HelloProps = {name: string, age: number}

// As props is an object it can also be destructured with {} as it is an object

export function Hello({name, age}: HelloProps) {
  return (
    <div>
      Hello {name} who is {age}
    </div>
  );
}



