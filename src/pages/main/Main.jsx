import { Introduce } from "../introduce/Introduce"
import { About } from "../aboutme/About"
import { Skill } from "../skills/Skill"
import { Project } from "../projects/Projects"

export const Main = () => {
    return (
        <>  
            <Introduce />
            <About />
            <Skill />
            <Project />
        </>
    )
}