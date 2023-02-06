




        <>
        <h3>Employee {props.name}</h3>
        <p>{props.role ? props.role : "no role"}</p>
        {props.role ? (
            <p className = "role">{props.role}</p>
        ) : (
            <p className = "nole">{props.role}</p>
        )
        }       
        </>