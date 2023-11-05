import { ChangeEventHandler, FC } from "react";
import { Heading, Input, Nav, NavItem } from "components";

import { GrantFilterOption } from "types";
import clsx from "clsx";

interface ISearchGrantsProps {
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchGrants: FC<ISearchGrantsProps> = ({ onSearchChange }) => {
  return (
    <div className="relative grow max-w-none lg:max-w-sm sm:block">
      <Input
        className="w-full pr-10"
        placeholder="Search grants..."
        sizeClass="h-[42px] pl-4 py-3"
        type="search"
        onChange={onSearchChange}
      />
      <span className="absolute -translate-y-1/2 top-1/2 right-3 text-neutral-500">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </span>
    </div>
  );
};

export interface HeaderFilterSectionProps extends ISearchGrantsProps {
  className?: string;
  selectedFilter: GrantFilterOption;
  onFilterSelect: (selectedFilter: GrantFilterOption) => void;
}

const HeaderFilterSection: FC<HeaderFilterSectionProps> = ({
  className = "mb-12",
  onSearchChange,
  onFilterSelect,
  selectedFilter,
}) => (
  <div className={clsx(`flex flex-col relative`, className)}>
    <Heading name="Featured NGO Grants" />
    <div className="flex flex-col-reverse justify-between space-y-6 space-y-reverse lg:space-y-0 lg:flex-row lg:items-center lg:space-x-2">
      <Nav
        className="sm:space-x-2"
        containerClassName="relative flex overflow-x-auto text-sm md:text-base hiddenScrollbar"
      >
        {Object.keys(GrantFilterOption).map((filterOption) => (
          <NavItem
            key={filterOption}
            isActive={selectedFilter === filterOption}
            onClick={() => onFilterSelect(filterOption as GrantFilterOption)}
          >
            {filterOption}
          </NavItem>
        ))}
      </Nav>
      <SearchGrants onSearchChange={onSearchChange} />
    </div>
  </div>
);

export default HeaderFilterSection;
