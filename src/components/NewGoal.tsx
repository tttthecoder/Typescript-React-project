import { useRef, type FormEvent, useState } from "react"

type newGoalProps = {
    onSubmit: (goal: string, summary: string) => void
}

export default function NewGoal({onSubmit}: newGoalProps) {
    const goalRef = useRef<HTMLInputElement>(null);
    const summaryRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newGoal = goalRef.current!.value;
        const newSummary = summaryRef.current!.value;
        event.currentTarget.reset();
        onSubmit(newGoal, newSummary);
    }
    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal"  ref={goalRef} type="text" />
        </p>
        <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary"  ref={summaryRef} type="text"  />
        </p>
        <p>
            <button>Add Goal</button>
        </p>
    </form>
}

// my implementation
// export default function NewGoal({onSubmit}: newGoalProps) {
//     const [goal, setGoal] = useState("");
//     const [summary, setSummary] = useState("");
//     function handleSubmit(event: FormEvent) {
//         event.preventDefault();
//         const newGoal = goal;
//         const newSummary = summary;
//         onSubmit(newGoal, newSummary);
//         setGoal("");
//         setSummary("");
//     }
//     return <form onSubmit={handleSubmit}>
//         <p>
//             <label htmlFor="goal">Your Goal</label>
//             <input id="goal" value={goal} type="text" onChange= {e => setGoal(e.target.value)}/>
//         </p>
//         <p>
//             <label htmlFor="summary">Short Summary</label>
//             <input id="summary" value={summary} onChange={e => setSummary(e.target.value)} type="text" />
//         </p>
//         <p>
//             <button>Add Goal</button>
//         </p>
//     </form>
// }
