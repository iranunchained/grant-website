import { ChangeEventHandler, FC, useCallback, useState } from "react";
import { GrantCard, GrantCardLoader, Message } from "components";
import { GrantFilterOption, TGrant } from "types";

import HeaderFilterSection from "./HeaderFilterSection";
import _debounce from "lodash/debounce";
import { useGrantsQuery } from "gql";

interface IGrantsListProps {
  grants: TGrant[];
  loading?: boolean;
}

const GrantsList: FC<IGrantsListProps> = ({ grants, loading }) => (
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-1">
    {loading
      ? [...new Array(8)].map((_, i) => <GrantCardLoader key={i} />)
      : grants.map((grant) => <GrantCard key={grant.vault.id} grant={grant} />)}
  </div>
);

const SectionGridFeatureGrants: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setSelectedFilter] = useState(GrantFilterOption.Official);
  const { data, error, loading } = useGrantsQuery({ filter, searchQuery });

  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterSelect = (filter: GrantFilterOption) => {
    setSelectedFilter(filter);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleSearch = useCallback(_debounce(handleSearch, 300), []);

  if (error) {
    return (
      <div className="relative">
        <Message message="Failed to load grants" />
      </div>
    );
  }

  return (
    <div className="relative">
      <HeaderFilterSection
        selectedFilter={filter}
        onFilterSelect={handleFilterSelect}
        onSearchChange={debouncedHandleSearch}
      />
      {loading || data.length !== 0 ? (
        <GrantsList grants={data} loading={loading} />
      ) : (
        <Message message="No grants found. Please try with different filter or query." />
      )}
      <div className="w-full my-5 border-b-2 border-neutral-300 dark:border-neutral-700" />
    </div>
  );
};

export default SectionGridFeatureGrants;
