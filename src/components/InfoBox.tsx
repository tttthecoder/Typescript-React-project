import { type ReactNode } from "react";

type HintInfoBoxProps = {
    mode: "hint",
    children: ReactNode,
}
type WarningInfoBoxProps = {
    mode: "warning",
    children: ReactNode,
    severity: 'low' | 'medium' | 'high'
}
type InfoBoxProps = HintInfoBoxProps | WarningInfoBoxProps


export default function InfoBox(props: InfoBoxProps) {
    const { mode, children } = props;
    if (mode === "hint") {
        return <aside className="infobox infobox-hint">
            <p>{children}</p>
        </aside>
    }
    const { severity } = props;
    return <aside className={`infobox infobox-warning warning--${severity}`}>
        <h1>Warning!</h1>
        <p>{children}</p>
    </aside>
}