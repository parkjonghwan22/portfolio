import { Introduce } from "../introduce/Introduce"
import { About } from "../aboutme/About"
import { Skill } from "../skills/Skill"

export const Main = () => {
    return (
        <>  
            <Introduce />
            <About />
            <Skill />
            <div className="text-red-500 h-[500px]">Hello World</div>
            <div>Hello World2</div>
        </>
    )
}