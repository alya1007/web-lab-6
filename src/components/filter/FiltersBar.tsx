import dropdownArrow from "@/assets/dropdownArrow.png";
import { Filter } from "@/data/filters";
import {
	TEDropdown,
	TEDropdownToggle,
	TEDropdownMenu,
	TEDropdownItem,
} from "tw-elements-react";

const FilterBar = () => {
	const filters: Filter[] = JSON.parse(localStorage.getItem("filters") || "[]");
	return (
		<div className="mt-14 grid bg-bgSecondaryWhite dark:bg-bgSecondary w-9/12 sm:w-10/12 mx-auto rounded-lg py-4 px-5 xl:px-28 gap-4 min-[560px]:grid-cols-2 lg:grid-cols-4">
			{filters.map((filter) => (
				<TEDropdown className="flex justify-center w-full " key={filter.id}>
					<TEDropdownToggle className="hover:bg-hoverWhite bg-bgPrimaryWhite dark:hover:bg-bgPrimary transition-all duration-200 flex dark:bg-bgTernary rounded-lg py-1 px-3 items-center gap-2 whitespace-nowrap">
						<div className="flex items-center justify-center flex-[15%] min-[400px]:flex-[5%] min-[450px]:flex-[12%] md:flex-[10%] m-0 lg:flex-[15%] min-[560px]:h-[50px]">
							<img src={filter.icon} alt={filter.name} />
						</div>
						<h1 className="flex-[70%] min-[400px]:flex-[90%] min-[450px]:flex-[76%] md:flex-[80%] lg:flex-[75%] %] m-0 text-sm min-[450px]:text-base lg:text-sm">
							Sort by {filter.name}
						</h1>
						<div className="flex-[15%] min-[400px]:flex-[5%] min-[450px]:flex-[12%] md:flex-[10%] m-0 lg:flex-[10%] ">
							<img src={dropdownArrow} alt="dropdown arrow" />
						</div>
					</TEDropdownToggle>

					<TEDropdownMenu className="w-full bg-bgPrimaryWhite dark:bg-bgTernary my-2 drop-shadow-[0_0px_10px_rgba(0,0,0,0.25)] dark:shadow-none">
						{filter.filtersList.map((filterItem) => (
							<TEDropdownItem
								key={filterItem}
								className="bg-bgPrimaryWhite dark:bg-bgTernary"
							>
								<button className="block w-full cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left hover:bg-bgSecondaryWhite dark:hover:bg-bgSecondary dark:focus:bg-bgTernary focus:outline-none active:no-underline">
									{filterItem}
								</button>
							</TEDropdownItem>
						))}
					</TEDropdownMenu>
				</TEDropdown>
			))}
		</div>
	);
};

export default FilterBar;
