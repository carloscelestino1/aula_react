const FirstComponent = () => {
    
    const user = {
        firstName: "Carlos",
        lastName: "Silva",
        age: 28
      };
    
      return (
        <div>
          <h1>{user.firstName} {user.lastName}</h1>
          <p>Age: {user.age}</p>
        </div>
      );
    }

export default FirstComponent;


