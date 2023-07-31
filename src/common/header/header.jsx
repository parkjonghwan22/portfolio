import { useScroll } from "../../utils/hooks/useScroll";
import { Link, animateScroll as scroll } from "react-scroll"

export const Header = () => {
    const { isScrolling } = useScroll()

    console.log(isScrolling)
  
    return (
    <>
      <nav className={`bg-black border-gray-200 px-4 lg:px-6 py-5 mx-auto fixed top-0 left-0 right-0 z-10 ${!isScrolling ? 'bg-[#232a3f]' : 'bg-black opacity-60'}`}>
        <div class="flex flex-wrap lg:justify-between justify-center items-center mx-auto  max-w-screen-xl w-3/5">
          <a
            href="https://parkjonghwan22.github.io/portfolio/"
            class="flex items-center "
          >
            <span class="text-2xl font-bold text-white">
              Jerry's Portfolio
            </span>
          </a>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 pr-6"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="aboutMeSection"
                  smooth={true}
                  duration={500}
                  class="hover:cursor-pointer block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 text-white"
                >
                  About ME
                </Link>
              </li>
              <li>
                <Link
                  to="skillSection"
                  smooth={true}
                  duration={500}
                  class="hover:cursor-pointer block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="projectSection"
                  smooth={true}
                  duration={500}
                  class="hover:cursor-pointer block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
