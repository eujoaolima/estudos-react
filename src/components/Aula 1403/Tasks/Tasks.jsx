import "../../../CSS/tasks.css";

export default function Task (props) {
    // Existem duas formas de utilizar os props (parâmetros)
    // Forma 1:
/*
    let title = props.title;
    let status = props.status;
    let deadline = props.deadline;

    ou

    let { title } = props;
    let { status } = props;
    let { deadline } = props;

    ou

    let { title, status, deadline } = props;


    return (
        <>
            <div className="task">
                <strong>{title}</strong>
                <div className="details">
                    <span className="status">{status}</span>
                    <span className="deadline">{deadline}</span>
                </div>
            </div>
        </>
    );

    ou

/*
    return (
        <>
            <div className="task">
                <strong>{props.title}</strong>
                <div className="details">
                    <span className="status">{props.status}</span>
                    <span className="deadline">{props.deadline}</span>
                </div>
            </div>
        </>
    );
*/

    // Forma 2 (Profº Gabriel):

    // desestruturação
    // let { title } = props; // let title = props.title;
    const { title, status, deadline } = props;

    let color = "blue";
    if(status === "Feito") {
        color = "green";
    }
    else if(status === "Atrasado") {
        color = "red";
    }
    else {
        color = "blue";
    }
    const objectStyle = { color };

    return (
        <div className="task">
            <strong>
                {title} {/*Interpolação*/}
            </strong>
            <div className="details">
                <span className="status" style={objectStyle}>
                    {status}
                </span>
                <span className="deadline">
                    {deadline}
                </span>
            </div>
        </div>
    );
}

// export function Task({ title, status, deadline }) {
//     return (
//         <div className="task">
//             <strong>
//                 {title}
//             </strong>
//             <div className="details">
//                 <span className="status">
//                     {status}
//                 </span>
//                 <span className="deadline">
//                     {deadline}
//                 </span>
//             </div>
//         </div>
//     );
// }
