import { type FC, type PropsWithChildren, type ReactNode } from "react"

type CourseGoalProps = PropsWithChildren<{
    title: string,
    id: number
    onDelete: (id: number) => void,
}>

export default function CourseGoal({ title, children, onDelete, id }: CourseGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    </article>;
}