import { Introduce } from "../introduce/Introduce"
import { About } from "../aboutme/About"
import { Skill } from "../skills/Skill"
import { Project } from "../projects/Projects"
import { Icon } from '@iconify/react';
import { Link, animateScroll as scroll } from "react-scroll"

export const Main = () => {
    return (
        <>  
            <Introduce />
            <About />
            <Skill />
            <Project />
            <Link to="introduceSection"
                  smooth={true}
                  duration={500}>
            <Icon icon="gg:arrow-up-r" color="white" className="fixed right-1 bottom-1 lg:right-6 lg:bottom-6 w-12 h-12 lg:w-20 lg:h-20 hover:cursor-pointer hover:animate-bounce"/>
            </Link>
        </>
    )
}