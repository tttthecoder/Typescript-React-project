
import { type ReactNode } from "react"
import { type CourseGoal as CGoal } from "../App.js"
import CourseGoal from "./CourseGoal.js"
import InfoBox from "./InfoBox.js"
type CourseGoalListProps = {
    onDeleteGoal: (id: number) => void,
    goals: CGoal[]
}


export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
    let infoSection: ReactNode;
    // calculating the correct infoSection
    if (goals.length == 0) {
        infoSection = <InfoBox mode={'hint'}><p>You do not have any goals yet. Start adding some!</p></InfoBox>
    }
    if (goals.length > 4) {
        infoSection = <InfoBox mode={'warning'} severity={'medium'}><p>You are collecting too many goals. Don't put too much on your plate!</p></InfoBox>
    }

    return <div>
        {infoSection}
        <ul>
            {goals.map((g) => (
                <li key={g.id} style={{ overflow: "auto " }}>
                    <CourseGoal title={g.title} id={g.id} onDelete={onDeleteGoal}>
                        <p >{g.description}</p>
                    </CourseGoal >
                </li>
            ))}
        </ul>
    </div>

}